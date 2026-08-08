import React, { useId } from 'react';
import { useContainerSize } from '../useContainerSize';

export interface StatItemNeon {
  label: string;
  value: number | string;
  details?: Record<string, any>;
}

export interface StatGridNeonProps {
  title?: string;
  data: StatItemNeon[] | Record<string, number | string>;
  columns?: number;
}

const StatGrid_neon: React.FC<StatGridNeonProps> = ({
  title,
  data,
  columns = 2,
}) => {
  const stats: StatItemNeon[] = Array.isArray(data) 
    ? data.map(item => ({ ...item, label: item.label.replace(/_/g, ' ') })) 
    : Object.entries(data).map(([key, value]) => ({
        label: key.replace(/_/g, ' '),
        value,
      }));
  const { ref, fs } = useContainerSize();
  const safeId = useId().replace(/:/g, '_');

  const isInvalidValue = (val: any) => val === 0 || val === '0' || val === null || val === undefined || val === '';

  // Theme colors matching futuristic neon
  const accentGlow = '#00ffcc'; // Mint green glow
  const glassBg = 'rgba(255, 255, 255, 0.05)';
  const glassBorder = 'rgba(255, 255, 255, 0.1)';

  const keyframes = `
    @keyframes kpi-glow-pulse-${safeId} {
      0%, 100% { box-shadow: 0 0 10px 1px ${accentGlow}22, inset 0 0 10px rgba(0, 255, 204, 0.05); }
      50%      { box-shadow: 0 0 20px 2px ${accentGlow}44, inset 0 0 20px rgba(0, 255, 204, 0.1); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div ref={ref} style={{
        backgroundColor: 'transparent',
        padding: '0px',
        fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
        width: '100%',
        boxSizing: 'border-box',
      }}>
                {title && (
          <h6 style={{ margin: '0 0 16px 0', fontSize: fs(14), fontWeight: '700', color: '#ffffff', letterSpacing: '1px', textTransform: 'uppercase' }}>
            {title}
          </h6>
        )}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '16px',
        }}>
          {stats.map((stat, i) => {
            const showValue = !isInvalidValue(stat.value);
            const validDetails = stat.details 
              ? Object.entries(stat.details).filter(([, v]) => !isInvalidValue(v))
              : [];
              
            return (
              <div 
                key={i} 
                style={{
                  background: glassBg,
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  border: `1px solid ${glassBorder}`,
                  position: 'relative',
                  overflow: 'hidden',
                  animation: `kpi-glow-pulse-${safeId} 3s ease-in-out infinite`,
                  transition: 'transform 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Decorative neon accent bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '10%',
                  right: '10%',
                  height: '3px',
                  background: `linear-gradient(90deg, transparent, ${accentGlow}, transparent)`,
                  boxShadow: `0 0 10px ${accentGlow}`,
                  opacity: 0.8
                }} />

                <div style={{ fontSize: fs(11), color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: showValue ? '8px' : '0px', fontWeight: '600' }}>
                  {stat.label}
                </div>

                {showValue && (
                  <div style={{ 
                    fontSize: fs(32), 
                    fontWeight: '800', 
                    color: accentGlow, 
                    lineHeight: 1,
                    textShadow: `0 0 10px ${accentGlow}66`,
                    marginBottom: '4px'
                  }}>
                    {stat.value}
                  </div>
                )}
                
                {validDetails.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px' }}>
                    {validDetails.map(([k, v]) => (
                      <div key={k} style={{ 
                        background: 'rgba(0, 255, 204, 0.1)', 
                        padding: '4px 8px', 
                        borderRadius: '6px', 
                        fontSize: fs(10), 
                        color: '#ffffff',
                        border: '1px solid rgba(0,255,204,0.2)'
                      }}>
                        <strong style={{ color: accentGlow, fontWeight: '600' }}>{k.replace(/_/g, ' ')}:</strong> {String(v)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StatGrid_neon;
