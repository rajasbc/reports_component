import React from 'react';
interface DataPoint {
    label: string;
    value: number;
    color?: string;
}
export interface BarChartProps {
    data: DataPoint[];
    height?: number | string;
    defaultColor?: string;
    showValues?: boolean;
    showGrid?: boolean;
    title?: string;
    className?: string;
}
declare const BarChart: React.FC<BarChartProps>;
export default BarChart;
//# sourceMappingURL=BarChart.d.ts.map