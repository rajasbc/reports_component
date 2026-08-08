import { default as React } from 'react';
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
}
declare const MultiChart_neon: React.FC<MultiChartNeonProps>;
export default MultiChart_neon;
//# sourceMappingURL=MultiChart_neon.d.ts.map