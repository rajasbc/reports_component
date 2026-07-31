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
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  height = 200,
  defaultColor = '#003357',
  strokeWidth = 2,
  showDots = true,
  showGrid = true,
  title,
  className
}) => {
  const { ref, width: svgWidth, height: containerHeight, fs, scale } = useContainerSize();
  const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string; value: number } | null>(null);
  
  const isResponsive = typeof height === 'string';
  const paddingOffset = isResponsive ? (title ? 48 : 0) : 0; 
  const resolvedHeight = isResponsive ? (containerHeight > 0 ? containerHeight - paddingOffset : 200) : (height as number);
  
  const paddingTop = 20;
  const paddingBottom = 15;

  const maxValue = Math.max(...data.map(d => d.value));

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
  const maxLabelLen = Math.max(...data.map(d => d.label.length));
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

  return (
    <div ref={ref} className={className} style={{
      backgroundColor: 'var(--chart-bg, #ffffff)',
      borderRadius: '16px',
      padding: '12px',
      paddingBottom: '24px',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      width: '100%',
      height: isResponsive ? '100%' : 'auto',
      minHeight: isResponsive ? '250px' : undefined,
      boxSizing: 'border-box'
    }}>
      {title && (
        <h6 style={{ margin: '0 0 20px 0', fontSize: fs(12), lineHeight: 1.5, fontWeight: 'bold', color: 'var(--chart-text-strong, #003357)' }}>
          {title}
        </h6>
      )}
      {svgWidth > 0 && (
        <svg
          width={svgWidth}
          height={resolvedHeight}
          style={{ overflow: 'visible' }}
        >
          {showGrid && (
            <g>
              {yTicks.map((tickValue, i) => {
                const y = paddingTop + chartHeight - (tickValue / (yTicks[yTicks.length - 1] || 1)) * chartHeight;
                return (
                  <g key={i}>
                    <line x1={paddingSide} y1={y} x2={svgWidth - paddingSide} y2={y} stroke="#e0e0e0" strokeWidth="1" />
                    <text x={paddingSide - 6} y={y + 4} textAnchor="end" fontSize={fs(9)} fill="#888">
                      {tickValue.toLocaleString('en-IN')}
                    </text>
                  </g>
                );
              })}
            </g>
          )}
          <path d={pathData} fill="none" stroke={defaultColor} strokeWidth={strokeWidth} />
          {showDots && points.map((point, index) => (
            <g key={index}>
              <circle
                cx={point.x} cy={point.y} r="4"
                fill={point.color || defaultColor}
                style={{ cursor: 'pointer' }}
                onMouseEnter={e => setTooltip({ x: e.clientX, y: e.clientY, label: point.label, value: point.value })}
                onMouseMove={e => setTooltip(t => t ? { ...t, x: e.clientX, y: e.clientY } : null)}
                onMouseLeave={() => setTooltip(null)}
              />
              <text
                x={index === 0 ? point.x + 4 : index === points.length - 1 ? point.x - 4 : point.x}
                y={point.y - 8}
                textAnchor={index === 0 ? 'start' : index === points.length - 1 ? 'end' : 'middle'}
                fontSize={fs(9)} fill="#444" pointerEvents="none"
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
                y={paddingTop + chartHeight + 8}
                fontSize={fs(10)}
                fill="#000000"
                textAnchor="end"
                transform={`rotate(-40, ${point.x}, ${paddingTop + chartHeight + 8})`}
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
              <text key={index} x={point.x} y={paddingTop + chartHeight + 20} textAnchor="middle" fontSize={fs(10)} fill="#000000">
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
          pointerEvents: 'none', zIndex: 1000, whiteSpace: 'nowrap'
        }}>
          <div style={{ fontWeight: 'bold' }}>{tooltip.label}</div>
          <div>Value: {tooltip.value.toLocaleString('en-IN')}</div>
        </div>
      )}
    </div>
  );
};

export default LineChart;
