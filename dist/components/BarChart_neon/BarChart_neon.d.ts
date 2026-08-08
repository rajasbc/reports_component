import { default as React } from 'react';
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
declare const BarChart_neon: React.FC<BarChartProps>;
export default BarChart_neon;
//# sourceMappingURL=BarChart_neon.d.ts.map