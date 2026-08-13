import React from 'react';
interface DataPoint {
    label: string;
    value: number;
}
export interface AreaTrendNeonProps {
    title?: string;
    data: DataPoint[];
    color?: string;
    height?: number | string;
    className?: string;
    totalAmount?: number | null;
    onHeadingClick?: () => void;
}
declare const AreaTrend_neon: React.FC<AreaTrendNeonProps>;
export default AreaTrend_neon;
//# sourceMappingURL=AreaTrend_neon.d.ts.map