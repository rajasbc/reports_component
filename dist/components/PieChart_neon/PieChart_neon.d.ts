import { default as React } from 'react';
interface DataPoint {
    label: string;
    value: number;
    color?: string;
}
export interface PieChartNeonProps {
    title?: string;
    data: DataPoint[];
    color?: string;
    height?: number | string;
    className?: string;
}
declare const PieChart_neon: React.FC<PieChartNeonProps>;
export default PieChart_neon;
//# sourceMappingURL=PieChart_neon.d.ts.map