import React, { useState } from 'react';
import { useContainerSize } from '../useContainerSize';

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface BarChartProps {
  data: DataPoint[];
  height?: number | string;
  defaultColor?: string;
  showValues?: boolean;
  showGrid?: boolean;
  title?: string;
  className?: string;
}

/** Abbreviate large numbers for axis labels (e.g. 1373060 → "1.4M") */
function formatAxisTick(value: number): string {
  if (Math.abs(value) >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}B`;
  if (Math.abs(value) >= 1_000_000)     return `${(value / 1_000_000).toFixed(1)}M`;
  if (Math.abs(value) >= 1_000)         return `${(value / 1_000).toFixed(1)}K`;
  return String(value);
}

/** Estimate px width needed for the longest Y-axis label */
function calcYAxisPadding(maxValue: number, charWidth: number): number {
  const label = formatAxisTick(maxValue);
  return Math.max(30, label.length * charWidth + 10);
}

const BarChart_neon: React.FC<BarChartProps> = ({
  data,
  height = 200,
  defaultColor = '#bd00ff', // Neon purple
  showValues = true,
  showGrid = true,
  title,
  className
}) => {
  const { ref, width, height: containerHeight, fs, scale } = useContainerSize();
  const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string; value: number } | null>(null);

  const paddingTop = 20;
  const paddingBottom = 15;
  const paddingRight = 10;

  const isResponsive = typeof height === 'string';
  const paddingOffset = isResponsive ? (title ? 48 : 0) : 0; 
  const resolvedHeight = isResponsive ? (containerHeight > 0 ? containerHeight - paddingOffset : 200) : (height as number);

  const maxValue = data.length > 0 ? Math.max(...data.map(d => d.value), 0) : 1;

  const charWidth = Math.max(6, 8 * scale);
  const paddingLeft = calcYAxisPadding(maxValue, charWidth);

  const svgWidth = width || 600;
  const chartWidth = svgWidth - paddingLeft - paddingRight;
  
  const estCharWidth = 10 * scale * 0.6;
  const maxLabelLen = data.length > 0 ? Math.max(...data.map(d => d.label.length)) : 0;
  const barSpacing = chartWidth / (data.length || 1);
  const needsRotation = maxLabelLen * estCharWidth > barSpacing;
  const rotatedLabelHeight = needsRotation ? maxLabelLen * estCharWidth * 1.2 : 20;
  
  const bottomSpace = needsRotation ? rotatedLabelHeight + 20 : paddingBottom;
  const chartHeight = Math.max(resolvedHeight - paddingTop - bottomSpace, 50);
  const barWidth = (chartWidth / (data.length || 1)) * 0.5;

  const yRatios = [0, 0.25, 0.5, 0.75, 1];

  return (
    <div ref={ref} className={className} style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '16px',
      padding: '12px',
      paddingBottom: '24px',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
      width: '100%',
      height: isResponsive ? '100%' : 'auto',
      minHeight: isResponsive ? '250px' : undefined,
      boxSizing: 'border-box'
    }}>
      {title && (
        <h6 style={{ margin: '0 0 20px 0', fontSize: fs(12), lineHeight: 1.5, fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.9)' }}>
          {title}
        </h6>
      )}
      {svgWidth > 0 && data.length > 0 && (
        <svg
          width={svgWidth}
          height={resolvedHeight}
          style={{ overflow: 'visible' }}
        >
          <defs>
            <filter id="neon-glow-bar" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="neon-bar-fill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e028ff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2500ff" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="neon-bar-fill-hover" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f48bff" stopOpacity="1" />
              <stop offset="100%" stopColor="#481fff" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {showGrid && (
            <g>
              {yRatios.map((ratio, i) => {
                const tickValue = maxValue * ratio;
                const y = paddingTop + chartHeight - (ratio * chartHeight);
                return (
                  <g key={i}>
                    <line x1={paddingLeft} y1={y} x2={svgWidth - paddingRight} y2={y} stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
                    <text x={paddingLeft - 8} y={y + 4} textAnchor="end" fontSize={fs(9)} fill="rgba(255, 255, 255, 0.5)">
                      {formatAxisTick(tickValue)}
                    </text>
                  </g>
                );
              })}
            </g>
          )}

          {data.map((point, index) => {
            const x = paddingLeft + (chartWidth / data.length) * index + (chartWidth / data.length - barWidth) / 2;
            const barH = (point.value / (maxValue || 1)) * chartHeight;
            const y = paddingTop + chartHeight - barH;
            return (
              <g key={index}>
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barH}
                  fill={point.color || "url(#neon-bar-fill)"}
                  rx="4"
                  ry="4"
                  filter="url(#neon-glow-bar)"
                  style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => {
                    (e.target as SVGRectElement).setAttribute('fill', 'url(#neon-bar-fill-hover)');
                    setTooltip({ x: e.clientX, y: e.clientY, label: point.label, value: point.value });
                  }}
                  onMouseMove={e => setTooltip(t => t ? { ...t, x: e.clientX, y: e.clientY } : null)}
                  onMouseLeave={e => {
                    (e.target as SVGRectElement).setAttribute('fill', point.color || 'url(#neon-bar-fill)');
                    setTooltip(null);
                  }}
                />
                {showValues && point.value > 0 && barH > 15 && (
                  <text
                    x={x + barWidth / 2}
                    y={y + 12}
                    textAnchor="middle"
                    fontSize={fs(9)}
                    fill="rgba(255,255,255,0.9)"
                    pointerEvents="none"
                  >
                    {formatAxisTick(point.value)}
                  </text>
                )}
                {needsRotation ? (
                  <text
                    x={x + barWidth / 2}
                    y={paddingTop + chartHeight + 12}
                    fontSize={fs(9)}
                    fill="rgba(255, 255, 255, 0.5)"
                    textAnchor="end"
                    transform={`rotate(-40, ${x + barWidth / 2}, ${paddingTop + chartHeight + 12})`}
                  >
                    {point.label.includes(' | ') ? (
                      point.label.split(' | ').map((line, lineIdx) => (
                        <tspan key={lineIdx} x={x + barWidth / 2} dy={lineIdx === 0 ? 0 : 12}>
                          {line}
                        </tspan>
                      ))
                    ) : (
                      point.label
                    )}
                  </text>
                ) : (
                  <text 
                    x={x + barWidth / 2} 
                    y={paddingTop + chartHeight + 20} 
                    textAnchor="middle" 
                    fontSize={fs(9)} 
                    fill="rgba(255, 255, 255, 0.5)"
                  >
                    {point.label.includes(' | ') ? (
                      point.label.split(' | ').map((line, lineIdx) => (
                        <tspan key={lineIdx} x={x + barWidth / 2} dy={lineIdx === 0 ? 0 : 12}>
                          {line}
                        </tspan>
                      ))
                    ) : (
                      point.label
                    )}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      )}
      {tooltip && (
        <div style={{
          position: 'fixed', left: tooltip.x + 12, top: tooltip.y - 10,
          backgroundColor: 'rgba(0,0,0,0.8)', color: '#fff',
          padding: '8px 12px', borderRadius: '6px', fontSize: fs(12),
          pointerEvents: 'none', zIndex: 1000, whiteSpace: 'nowrap',
          border: `1px solid ${defaultColor}`,
          boxShadow: `0 0 10px ${defaultColor}`
        }}>
          <div style={{ fontWeight: 'bold' }}>{tooltip.label}</div>
          <div>Value: {tooltip.value.toLocaleString('en-IN')}</div>
        </div>
      )}
    </div>
  );
};

export default BarChart_neon;
