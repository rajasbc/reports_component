import React from 'react';
import { useContainerSize } from '../useContainerSize';

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface BarChartProps {
  data: DataPoint[];
  height?: number;
  defaultColor?: string;
  showValues?: boolean;
  showGrid?: boolean;
  title?: string;
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
  // ~6px per char at base scale + 10px gap between label and chart area
  return Math.max(30, label.length * charWidth + 10);
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  height = 200,
  defaultColor = '#003357',
  showValues = true,
  showGrid = true,
  title
}) => {
  const { ref, width, fs, scale } = useContainerSize();

  const paddingTop = 20;
  const paddingBottom = 15;
  const paddingRight = 10;

  const maxValue = data.length > 0 ? Math.max(...data.map(d => d.value), 0) : 1;

  // Dynamically compute left padding based on digit count of the max value label
  const charWidth = Math.max(6, 8 * scale);
  const paddingLeft = calcYAxisPadding(maxValue, charWidth);

  const svgWidth = width || 600;
  const chartWidth = svgWidth - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const barWidth = (chartWidth / (data.length || 1)) * 0.7;
  const barSpacing = chartWidth / (data.length || 1);

  const estCharWidth = 10 * scale * 0.6;
  const maxLabelLen = data.length > 0 ? Math.max(...data.map(d => d.label.length)) : 0;
  const needsRotation = maxLabelLen * estCharWidth > barSpacing;
  const rotatedLabelHeight = needsRotation ? maxLabelLen * estCharWidth * 0.7 : 20;

  // Y-axis grid lines & labels at 0%, 25%, 50%, 75%, 100%
  const yRatios = [0, 0.25, 0.5, 0.75, 1];

  return (
    <div ref={ref} style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '12px',
      paddingBottom: '24px',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {title && (
        <h6 style={{ margin: '0 0 20px 0', fontSize: fs(12), fontWeight: 'bold', color: '#003357' }}>
          {title}
        </h6>
      )}
      {svgWidth > 0 && (
        <svg
          width={svgWidth}
          height={height + paddingBottom + (needsRotation ? rotatedLabelHeight - 20 : 0)}
        >
          {/* Y-axis labels + grid lines */}
          {yRatios.map((ratio, i) => {
            const y = paddingTop + chartHeight * (1 - ratio);
            const tickValue = maxValue * ratio;
            const label = formatAxisTick(tickValue);
            return (
              <g key={i}>
                {showGrid && (
                  <line
                    x1={paddingLeft}
                    y1={y}
                    x2={svgWidth - paddingRight}
                    y2={y}
                    stroke="#e0e0e0"
                    strokeWidth="1"
                  />
                )}
                {/* Y-axis tick label — right-aligned against the chart edge */}
                <text
                  x={paddingLeft - 6}
                  y={y}
                  textAnchor="end"
                  dominantBaseline="middle"
                  fontSize={fs(10)}
                  fill="#888"
                >
                  {label}
                </text>
              </g>
            );
          })}

          {/* Bars */}
          {data.map((point, index) => {
            const barHeight = maxValue > 0 ? (point.value / maxValue) * chartHeight : 0;
            const x = paddingLeft + barSpacing * index + (barSpacing - barWidth) / 2;
            const y = paddingTop + chartHeight - barHeight;
            return (
              <g key={index}>
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  fill={point.color || defaultColor}
                  rx="4"
                />
                {showValues && (
                  <text
                    x={x + barWidth / 2}
                    y={y - 5}
                    textAnchor="middle"
                    fontSize={fs(10)}
                    fill="#555"
                    fontWeight="bold"
                  >
                    {formatAxisTick(point.value)}
                  </text>
                )}
                {needsRotation ? (
                  <text
                    x={x + barWidth / 2}
                    y={paddingTop + chartHeight + 8}
                    fontSize={fs(10)}
                    fill="#666"
                    textAnchor="end"
                    transform={`rotate(-40, ${x + barWidth / 2}, ${paddingTop + chartHeight + 8})`}
                  >
                    {point.label}
                  </text>
                ) : (
                  <text
                    x={x + barWidth / 2}
                    y={paddingTop + chartHeight + 20}
                    textAnchor="middle"
                    fontSize={fs(10)}
                    fill="#666"
                  >
                    {point.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
};

export default BarChart;
