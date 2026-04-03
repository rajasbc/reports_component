import React, { useState } from 'react';
import { useContainerSize } from '../useContainerSize';

interface LineItem {
  label: string;
  value: number;
  color?: string;
}

interface DataPoint {
  category: string;
  lines: LineItem[];
}

export interface TrendLinechartProps {
  data: DataPoint[];
  height?: number;
  showLegend?: boolean;
  showGrid?: boolean;
  title?: string;
  color?: string;
}

function hexToRgb(hex: string) {
  const h = hex.replace('#', '');
  return [parseInt(h.substring(0, 2), 16), parseInt(h.substring(2, 4), 16), parseInt(h.substring(4, 6), 16)];
}

function generateShades(baseColor: string, count: number): string[] {
  const [r, g, b] = hexToRgb(baseColor);
  return Array.from({ length: count }, (_, i) => {
    const t = count === 1 ? 0.5 : i / (count - 1);
    const mix = (c: number) => Math.round(220 - t * (220 - c));
    const toHex = (c: number) => mix(c).toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  });
}

const TrendLinechart: React.FC<TrendLinechartProps> = ({
  data,
  height = 200,
  showLegend = true,
  showGrid = true,
  title,
  color
}) => {
  const { ref, width, fs } = useContainerSize();
  const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string; value: number } | null>(null);

  const legendWidth = showLegend ? 160 : 0;
  const svgWidth = Math.max(100, (width || 600) - legendWidth - 40);
  const paddingTop = 20;
  const paddingBottom = 15;
  const paddingSide = 30;
  const chartWidth = svgWidth - paddingSide * 2;
  const chartHeight = height - paddingTop - paddingBottom;

  const maxValue = Math.max(...data.flatMap(d => d.lines.map(s => s.value)), 0);
  const maxAxisValue = maxValue || 1;
  const sectionWidth = chartWidth / (data.length || 1);

  const allLabels = Array.from(new Set(data.flatMap(d => d.lines.map(s => s.label))));
  const shades = color ? generateShades(color, allLabels.length) : null;
  const colorMap = new Map<string, string>();
  allLabels.forEach((label, i) => {
    const explicitColor = data.flatMap(d => d.lines).find(s => s.label === label)?.color;
    colorMap.set(label, shades ? shades[i] : (explicitColor ?? '#4a90e2'));
  });

  return (
    <div ref={ref} style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      paddingBottom: '24px',
      padding: '12px',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {title && (
        <h6 style={{ margin: '0 0 20px 0', fontSize: fs(12), fontWeight: 'bold', color: '#003357' }}>
          {title}
        </h6>
      )}
      <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
        {svgWidth > 0 && (
          <svg width={svgWidth} height={height + paddingBottom}>
            {showGrid && (
              <g>
                {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
                  const y = paddingTop + chartHeight * (1 - ratio);
                  return <line key={i} x1={paddingSide} y1={y} x2={svgWidth - paddingSide} y2={y} stroke="#e0e0e0" strokeWidth="1" />;
                })}
              </g>
            )}
            
            {allLabels.map((label, labelIndex) => {
              const points = data.map((d, i) => {
                const item = d.lines.find(l => l.label === label);
                const val = item ? item.value : 0;
                const x = paddingSide + sectionWidth * i + sectionWidth / 2;
                const y = paddingTop + chartHeight - (val / maxAxisValue) * chartHeight;
                return { x, y, value: val, category: d.category };
              });
              
              const pathData = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
              const lineColor = colorMap.get(label) ?? '#4a90e2';

              return (
                <g key={labelIndex}>
                  <path d={pathData} fill="none" stroke={lineColor} strokeWidth="2" />
                  {points.map((p, i) => (
                    <circle
                      key={i}
                      cx={p.x}
                      cy={p.y}
                      r={4}
                      fill={lineColor}
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setTooltip({ x: rect.left + rect.width / 2, y: rect.top, label, value: p.value });
                      }}
                      onMouseLeave={() => setTooltip(null)}
                      style={{ cursor: 'pointer' }}
                    />
                  ))}
                </g>
              );
            })}
            {data.map((point, index) => {
              const x = paddingSide + sectionWidth * index + sectionWidth / 2;
              return (
                <text key={index} x={x} y={paddingTop + chartHeight + 20} textAnchor="middle" fontSize={fs(12)} fill="#666">
                  {point.category}
                </text>
              );
            })}
          </svg>
        )}
        {showLegend && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexShrink: 0 }}>
            {allLabels.map((label, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '16px', height: '16px', backgroundColor: colorMap.get(label), borderRadius: '4px' }} />
                <span style={{ fontSize: fs(14), color: '#333' }}>{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {tooltip && (
        <div style={{
          position: 'fixed', left: tooltip.x, top: tooltip.y - 10,
          transform: 'translate(-50%, -100%)', backgroundColor: 'rgba(0,0,0,0.8)',
          color: '#fff', padding: '8px 12px', borderRadius: '6px', fontSize: fs(12),
          pointerEvents: 'none', zIndex: 1000, whiteSpace: 'nowrap'
        }}>
          <div style={{ fontWeight: 'bold' }}>{tooltip.label}</div>
          <div>Value: {tooltip.value}</div>
        </div>
      )}
    </div>
  );
};

export default TrendLinechart;
