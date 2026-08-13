import { default as React } from 'react';
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
    totalAmount?: number | null;
    onHeadingClick?: () => void;
}
declare const GlowingAreaChart_neon: React.FC<GlowingAreaChartProps>;
export default GlowingAreaChart_neon;
//# sourceMappingURL=GlowingAreaChart_neon.d.ts.map