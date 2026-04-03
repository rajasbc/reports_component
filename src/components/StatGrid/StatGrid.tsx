import React from 'react';
import { useContainerSize } from '../useContainerSize';

export interface StatGridProps {
  title?: string;
  data: Record<string, number | string>;
  columns?: number;
  backgroundColor?: string;
  color?: string;
}

const StatGrid: React.FC<StatGridProps> = ({
  title,
  data,
  columns = 2,
  backgroundColor = '#ffffff',
  color,
}) => {
  const stats = Object.entries(data).map(([key, value]) => ({
    label: key.replace(/_/g, ' '),
    value,
  }));
  const { ref, fs } = useContainerSize();

  return (
    <div ref={ref} style={{
      backgroundColor,
      borderRadius: '16px',
      padding: '12px',
      paddingBottom: '24px',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      {title && (
        <h6 style={{ margin: '0 0 20px 0', fontSize: fs(12), fontWeight: 'bold', color: '#003357' }}>
          {title}
        </h6>
      )}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '24px 16px',
      }}>
        {stats.map((stat, i) => (
          <div key={i}>
            <div style={{ fontSize: fs(30), fontWeight: 'bold', color: color ?? '#6c3fc5', lineHeight: 1 }}>
              {stat.value}
            </div>
            <div style={{ fontSize: fs(11), color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatGrid;
