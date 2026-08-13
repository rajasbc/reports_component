import { default as React } from 'react';
export interface StatItem {
    label: string;
    value: number | string;
    details?: Record<string, any>;
}
export interface StatGridProps {
    title?: string;
    data: StatItem[] | Record<string, number | string>;
    columns?: number;
    backgroundColor?: string;
    color?: string;
}
declare const StatGrid: React.FC<StatGridProps>;
export default StatGrid;
//# sourceMappingURL=StatGrid.d.ts.map