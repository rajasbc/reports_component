import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

interface DataPoint {
  label: string;
  value: number;
}

export interface GlowingAreaChartProps {
  title?: string;
  data: DataPoint[];
  color?: string;
  height?: number | string;
  className?: string;
}

const GlowingAreaChart_neon: React.FC<GlowingAreaChartProps> = ({
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
      backgroundColor: 'rgba(10, 14, 23, 0.85)',
      borderColor: color,
      borderWidth: 1,
      textStyle: {
        color: '#fff',
        fontFamily: "'Inter', sans-serif"
      },
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: color,
          width: 1,
          type: 'dashed'
        }
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: title ? '15%' : '5%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data.map(d => d.label),
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.2)'
        }
      },
      axisLabel: {
        color: 'rgba(255,255,255,0.6)',
        fontFamily: "'Inter', sans-serif",
        rotate: data.length > 7 ? 45 : 0
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      axisLabel: {
        color: 'rgba(255,255,255,0.6)',
        fontFamily: "'Inter', sans-serif"
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.05)',
          type: 'dashed'
        }
      }
    },
    series: [
      {
        name: title || 'Value',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        showSymbol: false,
        itemStyle: {
          color: color,
          borderColor: '#fff',
          borderWidth: 2,
          shadowColor: color,
          shadowBlur: 10
        },
        lineStyle: {
          color: color,
          width: 3,
          shadowColor: color,
          shadowBlur: 15
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: `${color}99` }, // 60% opacity
            { offset: 1, color: `${color}00` }  // 0% opacity
          ])
        },
        data: data.map(d => d.value),
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

export default GlowingAreaChart_neon;
