import React, { useState }, { useId } from 'react';

interface AlertItem {
  label: string;
  value?: number;
}

export interface HolographicAlertProps {
  title?: string;
  data: AlertItem[];
  color?: string; // Default neon color (e.g., cyan or red)
  height?: number | string;
  className?: string;
}

const HolographicAlert_neon: React.FC<HolographicAlertProps> = ({
  title,
  data,
  color = '#ff3366', // Danger neon red by default
  height = 300,
  className
}) => {
  const isResponsive = typeof height === 'string';
  const safeId = useId().replace(/:/g, '_');

  const keyframes = `
    @keyframes scanline-${safeId} {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }
    @keyframes pulse-border-${safeId} {
      0%, 100% { box-shadow: inset 0 0 10px ${color}44, 0 0 15px ${color}33; }
      50% { box-shadow: inset 0 0 20px ${color}88, 0 0 30px ${color}66; }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div className={className} style={{
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(10,14,23,0.9) 0%, rgba(5,8,15,0.95) 100%)',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${color}44`,
        borderRadius: '16px',
        boxShadow: `0 0 15px ${color}33, inset 0 0 20px ${color}1a`,
        width: '100%',
        height: isResponsive ? '100%' : height,
        minHeight: isResponsive ? '250px' : undefined,
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        animation: `pulse-border-${safeId} 3s infinite`
      }}>
        {/* Holographic Scanline Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '20%',
          background: `linear-gradient(180deg, transparent 0%, ${color}22 50%, transparent 100%)`,
          animation: `scanline-${safeId} 4s linear infinite`,
          pointerEvents: 'none',
          zIndex: 1
        }} />

        {/* Header */}
        {title && (
          <div style={{
            padding: '16px 20px',
            borderBottom: `1px solid ${color}33`,
            background: `linear-gradient(90deg, ${color}22, transparent)`,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            zIndex: 2
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, boxShadow: `0 0 10px ${color}` }} />
            <h6 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {title}
            </h6>
          </div>
        )}

        {/* Content List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '10px 0',
          zIndex: 2
        }}>
          {data.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
              System Nominal. No alerts.
            </div>
          ) : (
            data.map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px 20px',
                borderBottom: `1px solid rgba(255,255,255,0.05)`,
                transition: 'background 0.2s',
                cursor: 'default'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = `${color}11`)}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {item.label}
                </div>
                {item.value !== undefined && (
                  <div style={{ 
                    color: color, 
                    fontWeight: 'bold', 
                    fontSize: '14px',
                    textShadow: `0 0 5px ${color}88`,
                    marginLeft: '15px'
                  }}>
                    {item.value > 0 ? `+${item.value}` : item.value}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default HolographicAlert_neon;
