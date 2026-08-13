import { default as React } from 'react';
interface DataPoint {
    label: string;
    value: number;
}
export interface GroupedBarsNeonProps {
    title?: string;
    data: DataPoint[];
    color?: string;
    height?: number | string;
    className?: string;
    totalAmount?: number | null;
    onHeadingClick?: () => void;
}
declare const GroupedBars_neon: React.FC<GroupedBarsNeonProps>;
export default GroupedBars_neon;
//# sourceMappingURL=GroupedBars_neon.d.ts.map