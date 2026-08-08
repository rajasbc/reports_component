import React from 'react';
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
}

const PolarDebtChart_neon: React.FC<PolarDebtChartProps> = ({
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
      <ReactECharts 
        option={option} 
        style={{ height: '100%', width: '100%' }} 
        opts={{ renderer: 'canvas' }} 
      />
    </div>
  );
};

export default PolarDebtChart_neon;
