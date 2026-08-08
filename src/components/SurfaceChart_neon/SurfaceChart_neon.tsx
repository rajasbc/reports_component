import React, { useMemo } from 'react';
import ReactECharts from 'echarts-for-react';
import 'echarts-gl';

export interface SurfaceChartProps {
  data?: any[]; // Typically we might just generate demo data for the surface if none provided
  title?: string;
  className?: string;
}

// Generate some terrain/surface data for the wireframe if no data is provided
const generateData = () => {
  const data: any[] = [];
  for (let x = -20; x < 20; x++) {
    for (let y = -20; y < 20; y++) {
      const z = Math.sin(x / 3) * Math.cos(y / 3) * 10 + 
                Math.sin(x / 5) * Math.cos(y / 5) * 5 + 
                15;
      data.push([x, y, z]);
    }
  }
  return data;
};

const SurfaceChart_neon: React.FC<SurfaceChartProps> = ({
  data,
  title,
  className
}) => {
  const surfaceData = useMemo(() => {
    if (!data || data.length === 0) {
      return generateData();
    }
    
    // We map 1D dynamic data into a 3D ribbon/wave surface
    const result: any[] = [];
    data.forEach((item, i) => {
      const z = Number(item.patient_count || item.value || item.IP_Count || 0);
      // Create a grid across a dummy Y-axis (-10 to 10)
      for (let y = -10; y <= 10; y += 1) {
        // Add a slight curve on the Y axis to make it look like a 3D wave instead of a flat extrusion
        const curve = Math.cos(y / 3) * (z * 0.15);
        result.push([i, y, z + curve]);
      }
    });
    return result;
  }, [data]);

  const xLabels = useMemo(() => {
    if (!data || data.length === 0) return [];
    return data.map(d => d.day || d.label || d.date || '');
  }, [data]);

  const isDynamic = data && data.length > 0;

  const option = {
    tooltip: {},
    backgroundColor: 'transparent',
    visualMap: {
      show: false,
      dimension: 2,
      min: 0,
      max: isDynamic ? Math.max(...surfaceData.map(d => d[2])) : 30,
      inRange: {
        color: ['#00f3ff', '#bd00ff', '#f48bff']
      }
    },
    xAxis3D: {
      type: isDynamic ? 'category' : 'value',
      data: isDynamic ? xLabels : undefined,
      name: isDynamic ? '' : 'Condition',
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.3)' } },
      axisLabel: { textStyle: { color: 'rgba(255,255,255,0.5)' } }
    },
    yAxis3D: {
      type: 'value',
      name: isDynamic ? '' : 'Age (100)',
      axisLine: { show: !isDynamic, lineStyle: { color: 'rgba(255,255,255,0.3)' } },
      axisLabel: { show: !isDynamic, textStyle: { color: 'rgba(255,255,255,0.5)' } },
      splitLine: { show: !isDynamic }
    },
    zAxis3D: {
      type: 'value',
      name: 'Patients',
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.3)' } },
      axisLabel: { textStyle: { color: 'rgba(255,255,255,0.5)' } }
    },
    grid3D: {
      viewControl: {
        projection: 'perspective',
        alpha: 30,
        beta: 45
      },
      environment: 'transparent',
      axisPointer: {
        show: false
      },
      light: {
        main: {
          intensity: 1.2,
          shadow: true
        },
        ambient: {
          intensity: 0.3
        }
      }
    },
    series: [{
      type: 'surface',
      wireframe: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 243, 255, 0.4)',
          width: 1
        }
      },
      itemStyle: {
        color: 'rgba(0,0,0,0.8)' // Keep the surface dark, wireframe bright
      },
      data: surfaceData
    }]
  };

  return (
    <div className={className} style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '16px',
      padding: '12px',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
      width: '100%',
      height: '100%',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    }}>
      {title && (
        <h6 style={{ margin: '0 0 10px 0', fontSize: '12px', lineHeight: 1.5, fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.9)', zIndex: 10 }}>
          {title}
        </h6>
      )}
      <div style={{ flex: 1, position: 'relative', width: '100%' }}>
        <ReactECharts 
          option={option} 
          style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}
          opts={{ renderer: 'canvas' }}
        />
      </div>
    </div>
  );
};

export default SurfaceChart_neon;
