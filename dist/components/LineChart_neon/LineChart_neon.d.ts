import React from 'react';
interface DataPoint {
    label: string;
    value: number;
    color?: string;
}
export interface LineChartProps {
    data: DataPoint[];
    height?: number | string;
    defaultColor?: string;
    strokeWidth?: number;
    showDots?: boolean;
    showGrid?: boolean;
    title?: string;
    className?: string;
    totalAmount?: number | null;
    onHeadingClick?: () => void;
}
declare const LineChart_neon: React.FC<LineChartProps>;
export default LineChart_neon;
//# sourceMappingURL=LineChart_neon.d.ts.map