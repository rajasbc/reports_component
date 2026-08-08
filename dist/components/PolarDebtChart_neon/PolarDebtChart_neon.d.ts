import { default as React } from 'react';
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
declare const PolarDebtChart_neon: React.FC<PolarDebtChartProps>;
export default PolarDebtChart_neon;
//# sourceMappingURL=PolarDebtChart_neon.d.ts.map