import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

interface DataPoint {
  label: string;
  value: number;
}

export interface GroupedBarsNeonProps {
  title?: string;
  data: DataPoint[];
  color?: string;
  height?: number | string;
  className?: string;
}

const GroupedBars_neon: React.FC<GroupedBarsNeonProps> = ({
  title,
  data,
  color = '#00f3ff',
  height = 300,
  className
}) => {
  const isResponsive = typeof height === 'string';

  const option = {
    backgroundColor: 'transparent',
    title: title ? {
      text: title,
      textStyle: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: "'Inter', sans-serif"
      },
      top: 10,
      left: 15
    } : undefined,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(10,14,23,0.9)',
      borderColor: `${color}66`,
      borderWidth: 1,
      textStyle: { color: '#fff' },
      axisPointer: { type: 'shadow' }
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
      data: data.map(d => d.label),
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
      axisLabel: { color: 'rgba(255,255,255,0.5)', fontSize: 11, margin: 15 },
      splitLine: { show: false }
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
        type: 'bar',
        barWidth: '40%',
        itemStyle: { 
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: `${color}` },
            { offset: 1, color: `${color}40` }
          ]),
          borderRadius: [4, 4, 0, 0],
          shadowColor: color,
          shadowBlur: 10
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
      <ReactECharts 
        option={option} 
        style={{ height: '100%', width: '100%' }} 
        opts={{ renderer: 'canvas' }} 
      />
    </div>
  );
};

export default GroupedBars_neon;
