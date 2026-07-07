import React, { useState, useEffect, ReactNode } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { useContainerSize } from '../useContainerSize';

// --- Interfaces ---
export interface MultiTrendMetricConfig {
  label: string;
  shortLabel: string;
  color: string;
  icon?: ReactNode;
  format?: (value: any) => string;
}

export interface MultiTrendThresholdConfig {
  value: number;
  label: string;
  color: string;
}

export interface MultiTrendViewConfig {
  data: any[];
  threshold?: MultiTrendThresholdConfig | null;
  metrics: Record<string, MultiTrendMetricConfig>;
}

export interface MultiTrendTabConfig {
  id: string;
  tabTitle: string;
  title: string;
  views: Record<string, MultiTrendViewConfig>;
}

export interface MultiTrendChartProps {
  config: Record<string, MultiTrendTabConfig>;
  defaultTab?: string;
  defaultView?: string;
  subtitle?: string;
  xAxisKey?: string;
  daysInMonthMap?: Record<string, number>;
}

// --- Icons ---
const DefaultMetricIcon = ({ color = 'currentColor' }: { color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

// --- Custom Tooltip ---
const CustomTooltip = ({ active, payload, label, currentMetrics, daysInMonthMap }: any) => {
  if (active && payload && payload.length) {
    const daysInMonth = daysInMonthMap?.[label] || 30;
    
    // Deduplicate actual vs projected if they overlap on the exact same month (the transition month)
    const uniquePayload = payload.reduce((acc: any[], curr: any) => {
      const baseKey = curr.dataKey.replace('_Proj', '');
      const existing = acc.find((item: any) => item.dataKey.replace('_Proj', '') === baseKey);
      
      // If we have both, prefer the actual over the projection in the tooltip for the transition month
      if (existing) {
         if (!curr.dataKey.includes('_Proj')) {
             acc = acc.filter((item: any) => item.dataKey !== `${baseKey}_Proj`);
             acc.push(curr);
         }
      } else {
         acc.push(curr);
      }
      return acc;
    }, []);

    return (
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        border: '1px solid #e2e8f0',
        borderRadius: '6px',
        padding: '10px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        color: '#475569',
        fontSize: '11px',
        fontFamily: 'sans-serif'
      }}>
        <p style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '8px', fontSize: '12px' }}>{label}</p>
        {uniquePayload.map((entry: any, index: number) => {
          const isProj = entry.dataKey.includes('_Proj');
          const baseKey = entry.dataKey.replace('_Proj', '');
          const config = currentMetrics[baseKey];
          
          if (!config) return null;

          const formatFn = config.format || ((val: any) => val);
          const val = entry.value;
          const dailyAvg = Math.ceil(val / daysInMonth);

          return (
            <div key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', gap: '6px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: entry.stroke }}></div>
              <span style={{ fontWeight: 500 }}>
                {config.label} {isProj ? <span style={{ fontStyle: 'italic', fontSize: '9px', color: '#94a3b8' }}>(Proj)</span> : ''}:
              </span>
              <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{formatFn(val)}</span>
              <span style={{ color: '#64748b', fontSize: '10px' }}>(DA - {formatFn(dailyAvg)})</span>
            </div>
          );
        })}
      </div>
    );
  }
  return null;
};

// --- Main Component ---
export const MultiTrendChart: React.FC<MultiTrendChartProps> = ({
  config,
  defaultTab,
  defaultView,
  subtitle = "Monthly Volume & Projections",
  xAxisKey = "month",
  daysInMonthMap = {}
}) => {
  const { ref, width, fs } = useContainerSize();
  const isMobile = width < 768;

  const tabKeys = Object.keys(config);
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabKeys[0] || '');
  const [viewMode, setViewMode] = useState<string>(defaultView || 'count');
  
  // activeMetrics is a nested state: { tabId: { viewMode: { metricKey: boolean } } }
  const [activeMetrics, setActiveMetrics] = useState<Record<string, Record<string, Record<string, boolean>>>>({});

  // Initialize active metrics
  useEffect(() => {
    const initialMetrics: Record<string, Record<string, Record<string, boolean>>> = {};
    Object.entries(config).forEach(([tabId, tabConfig]) => {
      initialMetrics[tabId] = {};
      Object.entries(tabConfig.views).forEach(([vMode, vConfig]) => {
        initialMetrics[tabId][vMode] = {};
        Object.keys(vConfig.metrics).forEach(metricKey => {
          initialMetrics[tabId][vMode][metricKey] = true;
        });
      });
    });
    setActiveMetrics(initialMetrics);
  }, [config]);

  const toggleMetric = (key: string) => {
    setActiveMetrics(prev => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [viewMode]: {
          ...prev[activeTab][viewMode],
          [key]: !prev[activeTab][viewMode][key]
        }
      }
    }));
  };

  const currentTabConfig = config[activeTab];
  const currentViewConfig = currentTabConfig?.views[viewMode];
  const currentMetricsState = activeMetrics[activeTab]?.[viewMode] || {};
  const currentData = currentViewConfig?.data || [];
  const currentMetrics = currentViewConfig?.metrics || {};

  // Formatter for Y Axis based on the first active metric
  const formatYAxisTick = (val: number) => {
    const activeKeys = Object.keys(currentMetrics).filter(k => currentMetricsState[k]);
    if (activeKeys.length > 0) {
      const firstMetric = currentMetrics[activeKeys[0]];
      if (firstMetric.format) return firstMetric.format(val);
    }
    return val;
  };

  // Find the longest Y-axis value to set width
  const calcYAxisWidth = () => {
    if (!currentData || currentData.length === 0) return 40;
    const activeKeys = Object.keys(currentMetrics).filter(k => currentMetricsState[k]);
    if (activeKeys.length === 0) return 40;

    let maxVal = 0;
    currentData.forEach(d => {
      activeKeys.forEach(k => {
        const val = d[k] !== undefined ? Number(d[k]) : 0;
        const projVal = d[`${k}_Proj`] !== undefined ? Number(d[`${k}_Proj`]) : 0;
        if (val > maxVal) maxVal = val;
        if (projVal > maxVal) maxVal = projVal;
      });
    });
    
    const formatted = formatYAxisTick(maxVal);
    return Math.max(40, formatted.toString().length * (isMobile ? 6 : 7));
  };

  if (!currentTabConfig || !currentViewConfig) return null;

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} style={{
      width: '100%',
      backgroundColor: '#f8fafc',
      fontFamily: 'sans-serif',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        marginBottom: '16px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'stretch' : 'center',
        gap: '16px'
      }}>
        
        {/* Department Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          backgroundColor: '#ffffff',
          padding: '4px',
          borderRadius: '12px',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          border: '1px solid #e2e8f0'
        }}>
          {tabKeys.map(tabKey => {
            const isActive = tabKey === activeTab;
            return (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                style={{
                  flex: isMobile ? '1' : 'none',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: fs(14),
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: isActive ? '#1e293b' : 'transparent',
                  color: isActive ? '#ffffff' : '#64748b',
                  boxShadow: isActive ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                }}
              >
                {config[tabKey].tabTitle}
              </button>
            );
          })}
        </div>

        {/* View Mode Toggle */}
        <div style={{
          display: 'flex',
          backgroundColor: '#ffffff',
          padding: '2px',
          borderRadius: '6px',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          border: '1px solid #e2e8f0',
          flexShrink: 0
        }}>
          <button
            onClick={() => setViewMode('count')}
            style={{
              flex: isMobile ? '1' : 'none',
              padding: '6px 24px',
              borderRadius: '4px',
              fontSize: fs(12),
              fontWeight: 700,
              border: viewMode === 'count' ? '1px solid #e0e7ff' : '1px solid transparent',
              backgroundColor: viewMode === 'count' ? '#eef2ff' : 'transparent',
              color: viewMode === 'count' ? '#4338ca' : '#64748b',
              boxShadow: viewMode === 'count' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Count
          </button>
          <button
            onClick={() => setViewMode('revenue')}
            style={{
              flex: isMobile ? '1' : 'none',
              padding: '6px 24px',
              borderRadius: '4px',
              fontSize: fs(12),
              fontWeight: 700,
              border: viewMode === 'revenue' ? '1px solid #d1fae5' : '1px solid transparent',
              backgroundColor: viewMode === 'revenue' ? '#ecfdf5' : 'transparent',
              color: viewMode === 'revenue' ? '#047857' : '#64748b',
              boxShadow: viewMode === 'revenue' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Revenue
          </button>
        </div>
      </div>

      {/* Main Card */}
      <div style={{
        width: '100%',
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* Card Header */}
        <div style={{
          padding: isMobile ? '12px' : '16px',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'center',
          gap: '12px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <h1 style={{ margin: 0, fontSize: fs(24), fontWeight: 700, color: '#0f172a', letterSpacing: '-0.025em' }}>
                {currentTabConfig.title}
              </h1>
              <span style={{
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: fs(10),
                fontWeight: 700,
                border: `1px solid ${viewMode === 'revenue' ? '#a7f3d0' : '#c7d2fe'}`,
                backgroundColor: viewMode === 'revenue' ? '#ecfdf5' : '#eef2ff',
                color: viewMode === 'revenue' ? '#047857' : '#4338ca',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}>
                {viewMode === 'revenue' ? 'Revenue View' : 'Count View'}
              </span>
            </div>
            <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: fs(14) }}>
              {subtitle}
            </p>
          </div>
          
          {/* Metric Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {Object.entries(currentMetrics).map(([key, config]) => {
              const isActive = currentMetricsState[key];
              return (
                <button
                  key={key}
                  onClick={() => toggleMetric(key)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '9999px',
                    fontSize: fs(12),
                    fontWeight: 500,
                    border: isActive ? '1px solid #cbd5e1' : '1px solid #e2e8f0',
                    backgroundColor: isActive ? '#f1f5f9' : 'transparent',
                    color: isActive ? '#0f172a' : '#64748b',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: isActive ? '0 1px 2px 0 rgba(0, 0, 0, 0.05)' : 'none'
                  }}
                >
                  <span style={{ 
                    color: isActive ? config.color : 'currentColor', 
                    opacity: isActive ? 1 : 0.5,
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    {config.icon || <DefaultMetricIcon />}
                  </span>
                  {config.shortLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Chart Area */}
        <div style={{ padding: isMobile ? '12px' : '16px', height: '320px', width: '100%', position: 'relative' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={currentData} margin={{ top: 15, right: 25, left: 0, bottom: 0 }}>
              <defs>
                {Object.entries(currentMetrics).map(([key, config]) => (
                  <React.Fragment key={`grad-${key}`}>
                    <linearGradient id={`color-${key}-actual`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={config.color} stopOpacity={0.25} />
                      <stop offset="95%" stopColor={config.color} stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id={`color-${key}-proj`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={config.color} stopOpacity={0.05} />
                      <stop offset="95%" stopColor={config.color} stopOpacity={0} />
                    </linearGradient>
                  </React.Fragment>
                ))}
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis 
                dataKey={xAxisKey} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: fs(10), fontFamily: 'sans-serif' }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: fs(10), fontFamily: 'sans-serif' }} 
                width={calcYAxisWidth()}
                tickFormatter={formatYAxisTick as any}
                dx={-10}
              />
              <Tooltip 
                content={<CustomTooltip currentMetrics={currentMetrics} daysInMonthMap={daysInMonthMap} />} 
              />
              
              {currentViewConfig.threshold && (
                <ReferenceLine 
                  y={currentViewConfig.threshold.value} 
                  stroke={currentViewConfig.threshold.color} 
                  strokeDasharray="6 6"
                  strokeWidth={1.5}
                  label={{ 
                    position: 'insideTopLeft', 
                    value: currentViewConfig.threshold.label,
                    fill: currentViewConfig.threshold.color,
                    fontSize: 9,
                    fontWeight: 'bold'
                  } as any} 
                />
              )}

              {Object.entries(currentMetrics).map(([key, config]) => {
                if (!currentMetricsState[key]) return null;
                return (
                  <React.Fragment key={`series-${key}`}>
                    <Area
                      type="monotone"
                      dataKey={key}
                      stroke={config.color}
                      strokeWidth={3}
                      fillOpacity={1}
                      fill={`url(#color-${key}-actual)`}
                      activeDot={{ r: 5, strokeWidth: 2, stroke: config.color, fill: '#fff' } as any}
                      isAnimationActive={true}
                    />
                    <Area
                      type="monotone"
                      dataKey={`${key}_Proj`}
                      stroke={config.color}
                      strokeWidth={3}
                      strokeDasharray="5 5"
                      fillOpacity={1}
                      fill={`url(#color-${key}-proj)`}
                      activeDot={{ r: 5, strokeWidth: 2, stroke: config.color, fill: '#fff' } as any}
                      isAnimationActive={true}
                    />
                  </React.Fragment>
                );
              })}
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Data Table */}
        <div style={{ padding: isMobile ? '12px' : '16px', borderTop: '1px solid #e2e8f0' }}>
          <h2 style={{ 
            fontSize: fs(14), 
            fontWeight: 700, 
            color: '#0f172a', 
            margin: '0 0 8px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            YTD & Projections Data Table
            <span style={{
              fontSize: fs(9),
              fontWeight: 400,
              color: '#64748b',
              backgroundColor: '#f1f5f9',
              padding: '2px 6px',
              borderRadius: '4px',
              textTransform: 'uppercase'
            }}>
              {activeTab} - {viewMode}
            </span>
          </h2>
          
          <div style={{
            overflowX: 'auto',
            position: 'relative',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            border: '1px solid #e2e8f0',
            borderRadius: '8px'
          }}>
            <table style={{
              width: '100%',
              fontSize: fs(12),
              textAlign: 'left',
              whiteSpace: 'nowrap',
              borderCollapse: 'collapse',
              tableLayout: 'fixed'
            }}>
              <thead style={{
                fontSize: fs(10),
                color: '#64748b',
                textTransform: 'uppercase',
                backgroundColor: '#f8fafc',
                borderBottom: '1px solid #e2e8f0'
              }}>
                <tr>
                  <th style={{
                    padding: '6px 8px',
                    fontWeight: 600,
                    position: 'sticky',
                    left: 0,
                    backgroundColor: '#f8fafc',
                    zIndex: 10,
                    borderRight: '1px solid #e2e8f0',
                    width: isMobile ? '80px' : '112px',
                    verticalAlign: 'bottom',
                    boxShadow: '1px 0 0 0 #e2e8f0'
                  }}>Metric</th>
                  
                  {currentData.map((row, i) => {
                    // Check if it's purely projected (no base key present for the first active metric)
                    const firstMetricKey = Object.keys(currentMetrics)[0];
                    const isProjected = row[firstMetricKey] === undefined && row[`${firstMetricKey}_Proj`] !== undefined;
                    
                    return (
                      <th key={`th-${i}`} style={{
                        padding: '6px 2px',
                        fontWeight: 600,
                        textAlign: 'center',
                        backgroundColor: isProjected ? 'rgba(241, 245, 249, 0.5)' : 'transparent'
                      }}>
                        <div style={{ letterSpacing: '-0.05em' }}>{row[xAxisKey]}</div>
                        <div style={{ marginTop: '2px' }}>
                          <span style={{
                            padding: '1px 4px',
                            fontSize: fs(8),
                            textTransform: 'uppercase',
                            letterSpacing: '-0.05em',
                            fontWeight: 700,
                            borderRadius: '2px',
                            backgroundColor: isProjected ? '#e2e8f0' : '#d1fae5',
                            color: isProjected ? '#64748b' : '#047857'
                          }}>
                            {isProjected ? 'Prj' : 'Act'}
                          </span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {Object.entries(currentMetrics).map(([key, config], rowIndex) => {
                  if (!currentMetricsState[key]) return null;
                  const formatFn = config.format || ((val: any) => val);
                  
                  return (
                    <tr key={`row-${key}`} style={{
                      borderBottom: '1px solid #f1f5f9',
                      transition: 'background-color 0.2s',
                    }}>
                      <td style={{
                        padding: '4px 8px',
                        fontWeight: 500,
                        color: '#0f172a',
                        position: 'sticky',
                        left: 0,
                        backgroundColor: '#ffffff',
                        zIndex: 10,
                        borderRight: '1px solid #e2e8f0',
                        boxShadow: '1px 0 0 0 #e2e8f0',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {config.shortLabel}
                      </td>
                      
                      {currentData.map((row, colIndex) => {
                        const val = row[key] !== undefined ? row[key] : row[`${key}_Proj`];
                        const isProjected = row[key] === undefined;
                        
                        return (
                          <td key={`cell-${rowIndex}-${colIndex}`} style={{
                            padding: '4px 2px',
                            textAlign: 'center',
                            color: isProjected ? '#64748b' : '#0f172a',
                            fontWeight: isProjected ? 400 : 500,
                            backgroundColor: isProjected ? 'rgba(248, 250, 252, 0.3)' : 'transparent'
                          }}>
                            {val !== undefined ? formatFn(val) : '-'}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </div>
  );
};
