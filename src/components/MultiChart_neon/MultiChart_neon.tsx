import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';


interface DataPoint {
  label: string;
  value: number;
}

export interface MultiChartNeonProps {
  title?: string;
  data: DataPoint[];
  color?: string;
  height?: number | string;
  className?: string;
  totalAmount?: number | null;
  onHeadingClick?: () => void;
}

const MultiChart_neon: React.FC<MultiChartNeonProps> = ({
  totalAmount,
  onHeadingClick,
  title,
  data,
  color = '#00f3ff',
  height = 300,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isResponsive = typeof height === 'string';

  const option = {
    backgroundColor: 'transparent',
    title: undefined,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(10,14,23,0.9)',
      borderColor: `${color}66`,
      borderWidth: 1,
      textStyle: { color: '#fff' },
      axisPointer: { type: 'line', lineStyle: { color: color, type: 'dashed' } }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '5%',
      top: title ? '15%' : '5%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data.map(d => d.label),
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
      axisLabel: { color: 'rgba(255,255,255,0.5)', fontSize: 11, margin: 15 },
      splitLine: { show: true, lineStyle: { color: 'rgba(255,255,255,0.03)' } }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: 'rgba(255,255,255,0.5)', fontSize: 11, margin: 15 },
      splitLine: { show: true, lineStyle: { color: 'rgba(255,255,255,0.05)', type: 'dashed' } }
    },
    series: [
      {
        name: 'Value',
        type: 'line',
        smooth: true,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: { color: color, borderColor: '#fff', borderWidth: 2, shadowColor: color, shadowBlur: 10 },
        lineStyle: {
          width: 3,
          color: color,
          shadowColor: color,
          shadowBlur: 15
        },
        data: data.map(d => d.value)
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
          {title && <h3 className="text-[14px] font-bold text-[rgba(255,255,255,0.9)] transition-colors m-0 font-['Inter',sans-serif]" style={{ color: isHovered ? color : 'rgba(255,255,255,0.9)', textShadow: isHovered ? `0 0 10px ${color}` : 'none' }}>{title}</h3>}
          {totalAmount !== undefined && totalAmount !== null && (
            <div className="text-[22px] font-bold text-white mt-0 transition-colors" style={{ color: isHovered ? color : 'white', textShadow: isHovered ? `0 0 10px ${color}` : 'none' }}>{totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
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

export default MultiChart_neon;
