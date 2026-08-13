import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';

interface DataPoint {
  label: string;
  value: number;
}

export interface PolarDebtChartProps {
  title?: string;
  data: DataPoint[];
  color?: string;
  height?: number | string;
  className?: string;
  totalAmount?: number | null;
  onHeadingClick?: () => void;
}

const PolarDebtChart_neon: React.FC<PolarDebtChartProps> = ({
  totalAmount,
  onHeadingClick,
  title,
  data,
  color = '#ff007f', // Default neon pink/red for debt
  height = 300,
  className
}) => {
  const isResponsive = typeof height === 'string';

  // Sort data descending to make the largest debts on the outside
  const sortedData = [...data].sort((a, b) => a.value - b.value);

  const option = {
    backgroundColor: 'transparent',
    title: undefined,
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(10, 14, 23, 0.85)',
      borderColor: color,
      borderWidth: 1,
      textStyle: {
        color: '#fff',
        fontFamily: "'Inter', sans-serif"
      }
    },
    angleAxis: {
      type: 'category',
      data: sortedData.map(d => d.label),
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.2)'
        }
      },
      axisLabel: {
        color: 'rgba(255,255,255,0.6)',
        fontFamily: "'Inter', sans-serif"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.05)',
          type: 'dashed'
        }
      }
    },
    radiusAxis: {
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.05)',
          type: 'dashed'
        }
      },
      axisLabel: {
        show: false
      },
      axisLine: { show: false },
      axisTick: { show: false }
    },
    polar: {
      radius: '70%',
      center: ['50%', '55%']
    },
    series: [
      {
        type: 'bar',
        data: sortedData.map(d => d.value),
        coordinateSystem: 'polar',
        name: title || 'Amount',
        itemStyle: {
          color: color,
          borderRadius: 4,
          shadowColor: color,
          shadowBlur: 15
        },
        animationDuration: 2000,
        animationEasing: 'cubicOut'
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
      minHeight: isResponsive ? '300px' : undefined,
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
          {title && <h3 className="text-[14px] font-bold text-[rgba(255,255,255,0.9)]  transition-colors m-0 font-['Inter',sans-serif]" style={{ color: isHovered ? color : \'rgba(255,255,255,0.9)\', textShadow: isHovered ? `0 0 10px ${color}` : \'none\' }}>{title}</h3>}
          {totalAmount !== undefined && totalAmount !== null && (
            <div className="text-[22px] font-bold text-white mt-0  transition-colors" style={{ color: isHovered ? color : \'white\', textShadow: isHovered ? `0 0 10px ${color}` : \'none\' }}>{totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
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

export default PolarDebtChart_neon;
