import React from 'react';
interface DataPoint {
    label: string;
    value: number;
    color?: string;
}
export interface DonutChartNeonProps {
    title?: string;
    data: DataPoint[];
    color?: string;
    height?: number | string;
    className?: string;
    totalAmount?: number | null;
    onHeadingClick?: () => void;
}
declare const DonutChart_neon: React.FC<DonutChartNeonProps>;
export default DonutChart_neon;
//# sourceMappingURL=DonutChart_neon.d.ts.map