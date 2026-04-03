import { default as React } from 'react';
interface LineItem {
    label: string;
    value: number;
    color?: string;
}
interface DataPoint {
    category: string;
    lines: LineItem[];
}
export interface TrendLinechartProps {
    data: DataPoint[];
    height?: number;
    showLegend?: boolean;
    showGrid?: boolean;
    title?: string;
    color?: string;
}
declare const TrendLinechart: React.FC<TrendLinechartProps>;
export default TrendLinechart;
//# sourceMappingURL=TrendLinechart.d.ts.map