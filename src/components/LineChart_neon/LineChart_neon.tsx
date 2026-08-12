import React, { useState } from 'react';
import { useContainerSize } from '../useContainerSize';

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface LineChartProps {
  data: DataPoint[];
  height?: number | string;
  defaultColor?: string;
  strokeWidth?: number;
  showDots?: boolean;
  showGrid?: boolean;
  title?: string;
  className?: string;
  totalAmount?: number | null;
  onHeadingClick?: () => void;
}

const LineChart_neon: React.FC<LineChartProps> = ({
  data,
  height = 200,
  defaultColor = '#00f3ff', // Cyan neon default
  strokeWidth = 3,
  showDots = true,
  showGrid = true,
  title,
  className,
  totalAmount,
  onHeadingClick
}) => {
  const { ref, width: svgWidth, height: containerHeight, fs, scale } = useContainerSize();
  const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string; value: number } | null>(null);
  
  const isResponsive = typeof height === 'string';
  const paddingOffset = isResponsive ? (title ? 48 : 0) : 0; 
  const resolvedHeight = isResponsive ? (containerHeight > 0 ? containerHeight - paddingOffset : 200) : (height as number);
  
  const paddingTop = (title || (totalAmount !== undefined && totalAmount !== null)) ? 70 : 20;
  const paddingBottom = 15;

  const maxValue = Math.max(...data.map(d => d.value), 1);

  const getYAxisTicks = (max: number) => {
    const magnitude = Math.pow(10, Math.floor(Math.log10(max || 1)));
    const normalized = max / magnitude;
    let step;
    if (normalized <= 1) step = 0.2 * magnitude;
    else if (normalized <= 2) step = 0.5 * magnitude;
    else if (normalized <= 5) step = magnitude;
    else step = 2 * magnitude;
    const ticks = [];
    for (let i = 0; i <= Math.ceil(max / step); i++) ticks.push(i * step);
    return ticks;
  };

  const yTicks = getYAxisTicks(maxValue);
  const longestTick = Math.max(...yTicks.map(t => t.toLocaleString('en-IN').length));
  const paddingSide = Math.max(65, longestTick * 9 + 16);
  const chartWidth = (svgWidth || 600) - paddingSide * 2;
  
  const sectionWidth = chartWidth / (data.length - 1 || 1);
  const estCharWidth = 10 * scale * 0.6;
  const maxLabelLen = data.length > 0 ? Math.max(...data.map(d => d.label.length)) : 0;
  const needsRotation = maxLabelLen * estCharWidth > sectionWidth;
  const rotatedLabelHeight = needsRotation ? maxLabelLen * estCharWidth * 1.2 : 20;
  const bottomSpace = needsRotation ? rotatedLabelHeight + 20 : paddingBottom;
  const chartHeight = Math.max(resolvedHeight - paddingTop - bottomSpace, 50);

  const points = data.map((point, index) => {
    const x = paddingSide + (chartWidth / (data.length - 1 || 1)) * index;
    const y = paddingTop + chartHeight - (point.value / (yTicks[yTicks.length - 1] || 1)) * chartHeight;
    return { x, y, ...point };
  });

  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const fillPathData = points.length > 0 
    ? `${pathData} L ${points[points.length - 1].x} ${paddingTop + chartHeight} L ${points[0].x} ${paddingTop + chartHeight} Z`
    : '';

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
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      {(title || (totalAmount !== undefined && totalAmount !== null)) && (
        <div 
          className="flex flex-col items-start justify-center z-10 transition-colors duration-200 cursor-pointer group w-full absolute top-0 left-0 bg-transparent px-4 pt-3 pb-1"
          style={{ height: '60px' }}
          onClick={onHeadingClick}
        >
          {title && <h3 className="text-[14px] font-bold text-[rgba(255,255,255,0.9)] group-hover:text-[#00f3ff] transition-colors m-0 font-['Inter',sans-serif]" style={{ textShadow: '0 0 10px rgba(0, 243, 255, 0.5)' }}>{title}</h3>}
          {totalAmount !== undefined && totalAmount !== null && (
            <div className="text-[22px] font-bold text-white mt-0 group-hover:text-[#00f3ff] transition-colors" style={{ textShadow: '0 0 10px rgba(0, 243, 255, 0.5)' }}>{totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
          )}
        </div>
      )}
      {svgWidth > 0 && data.length > 0 && (
        <svg
          width={svgWidth}
          height={resolvedHeight}
          style={{ overflow: 'visible' }}
        >
          <defs>
            <filter id="neon-glow-line" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="neon-fill-line" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={defaultColor} stopOpacity="0.4" />
              <stop offset="100%" stopColor={defaultColor} stopOpacity="0.0" />
            </linearGradient>
          </defs>
          
          {showGrid && (
            <g>
              {yTicks.map((tickValue, i) => {
                const y = paddingTop + chartHeight - (tickValue / (yTicks[yTicks.length - 1] || 1)) * chartHeight;
                return (
                  <g key={i}>
                    <line x1={paddingSide} y1={y} x2={svgWidth - paddingSide} y2={y} stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
                    <text x={paddingSide - 6} y={y + 4} textAnchor="end" fontSize={fs(9)} fill="rgba(255, 255, 255, 0.5)">
                      {tickValue.toLocaleString('en-IN')}
                    </text>
                  </g>
                );
              })}
            </g>
          )}

          {/* Area Fill */}
          <path d={fillPathData} fill="url(#neon-fill-line)" />
          
          {/* Main Line with Glow */}
          <path d={pathData} fill="none" stroke={defaultColor} strokeWidth={strokeWidth} filter="url(#neon-glow-line)" />
          
          {/* Inner bright core line */}
          <path d={pathData} fill="none" stroke="#fff" strokeWidth={strokeWidth / 2} opacity={0.6} />

          {showDots && points.map((point, index) => (
            <g key={index}>
              <circle
                cx={point.x} cy={point.y} r="5"
                fill="#fff"
                stroke={defaultColor}
                strokeWidth="2"
                filter="url(#neon-glow-line)"
                style={{ cursor: 'pointer' }}
                onMouseEnter={e => setTooltip({ x: e.clientX, y: e.clientY, label: point.label, value: point.value })}
                onMouseMove={e => setTooltip(t => t ? { ...t, x: e.clientX, y: e.clientY } : null)}
                onMouseLeave={() => setTooltip(null)}
              />
              <text
                x={index === 0 ? point.x + 4 : index === points.length - 1 ? point.x - 4 : point.x}
                y={point.y - 12}
                textAnchor={index === 0 ? 'start' : index === points.length - 1 ? 'end' : 'middle'}
                fontSize={fs(9)} fill="rgba(255,255,255,0.7)" pointerEvents="none"
              >
                {point.value.toLocaleString('en-IN')}
              </text>
            </g>
          ))}
          {points.map((point, index) => (
            needsRotation ? (
              <text
                key={index}
                x={point.x}
                y={paddingTop + chartHeight + 12}
                fontSize={fs(10)}
                fill="rgba(255, 255, 255, 0.5)"
                textAnchor="end"
                transform={`rotate(-40, ${point.x}, ${paddingTop + chartHeight + 12})`}
              >
                {point.label.includes(' | ') ? (
                  point.label.split(' | ').map((line, lineIdx) => (
                    <tspan key={lineIdx} x={point.x} dy={lineIdx === 0 ? 0 : 12}>
                      {line}
                    </tspan>
                  ))
                ) : (
                  point.label
                )}
              </text>
            ) : (
              <text key={index} x={point.x} y={paddingTop + chartHeight + 20} textAnchor="middle" fontSize={fs(10)} fill="rgba(255, 255, 255, 0.5)">
                {point.label.includes(' | ') ? (
                  point.label.split(' | ').map((line, lineIdx) => (
                    <tspan key={lineIdx} x={point.x} dy={lineIdx === 0 ? 0 : 12}>
                      {line}
                    </tspan>
                  ))
                ) : (
                  point.label
                )}
              </text>
            )
          ))}
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

export default LineChart_neon;
