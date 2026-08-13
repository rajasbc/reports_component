import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface DonutChartNeonProps {
  title?: string;
  data: DataPoint[];
  color?: string;
  height?: number | string;
  className?: string;
  totalAmount?: number | null;
  onHeadingClick?: () => void;
}

const DonutChart_neon: React.FC<DonutChartNeonProps> = ({
  totalAmount,
  onHeadingClick,
  title,
  data,
  color = '#00f3ff',
  height = 300,
  className
}) => {
  const isResponsive = typeof height === 'string';
  const [isHovered, setIsHovered] = useState(false);

  const option = {
    backgroundColor: 'transparent',
    title: undefined,
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(10,14,23,0.9)',
      borderColor: `${color}66`,
      borderWidth: 1,
      textStyle: { color: '#fff' }
    },
    series: [
      {
        name: title || 'Data',
        type: 'pie',
        radius: ['35%', '55%'],
        center: ['50%', '50%'],
        minAngle: 10,
        itemStyle: {
          borderRadius: 10,
          borderColor: 'rgba(10,10,10,0.8)',
          borderWidth: 2
        },
        data: data.map((d) => ({
          name: d.label,
          value: d.value,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              { offset: 0, color: d.color || color },
              { offset: 1, color: d.color ? `${d.color}66` : `${color}66` }
            ]),
            shadowBlur: 15,
            shadowColor: d.color || color
          }
        })),
        label: {
          show: true,
          position: 'outside',
          alignTo: 'edge',
          edgeDistance: '5%',
          formatter: (params: any) => `${params.name}: ${params.value.toLocaleString('en-IN')}`,
          color: '#fff',
          fontWeight: 'bold',
          textShadowBlur: 5,
          textShadowColor: 'rgba(0,0,0,0.8)'
        },
        labelLine: {
          show: true,
          length: 15,
          length2: 10,
          lineStyle: {
            width: 1.5
          }
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff'
          }
        },
        labelLayout: {
          hideOverlap: false
        }
      }
    ]
  };

  return (
    <div className={className} style={{
      background: 'linear-gradient(135deg, rgba(10,10,10,0.8) 0%, rgba(20,20,20,0.95) 100%)',
      backdropFilter: 'blur(10px)',
      border: `1px solid ${color}40`,
      borderRadius: '16px',
      boxShadow: `0 0 15px ${color}33, inset 0 0 20px ${color}1a`,
      width: '100%',
      height: isResponsive ? '100%' : height,
      minHeight: isResponsive ? '250px' : undefined,
      boxSizing: 'border-box',
      overflow: 'hidden',
      position: 'relative'
    }}>
      
      {(title || (totalAmount !== undefined && totalAmount !== null)) && (
        <div 
          className="flex flex-col items-start justify-center px-4 pt-3 pb-1 z-10 transition-colors duration-200 cursor-pointer w-full absolute top-0 left-0 bg-transparent"
          style={{ height: '60px' }}
          onClick={onHeadingClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {title && <h3 className="text-[14px] font-bold transition-colors m-0 font-['Inter',sans-serif]" style={{ color: isHovered ? color : 'rgba(255,255,255,0.9)', textShadow: isHovered ? `0 0 10px ${color}` : 'none' }}>{title}</h3>}
          {totalAmount !== undefined && totalAmount !== null && (
            <div className="text-[22px] font-bold mt-0 transition-colors" style={{ color: isHovered ? color : 'white', textShadow: isHovered ? `0 0 10px ${color}` : 'none' }}>{totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
          )}
        </div>
      )}
      <div className="flex-1 w-full min-h-0" style={{ marginTop: (title || totalAmount !== undefined) ? "60px" : "0px", height: "calc(100% - 60px)" }}>
        <ReactECharts 
          option={option} 
        style={{ height: '100%', width: '100%' }} 
        opts={{ renderer: 'canvas' }} 
        />
      </div>
    </div>
  );
};

export default DonutChart_neon;
