import React from 'react';
export interface MetricConfig {
    label: string;
    shortLabel: string;
    color: string;
    icon?: any;
}
export interface TrendLinechartProps {
    title?: string;
    subtitle?: string;
    dateRangeBadge?: string;
    data?: any[];
    xAxisKey?: string;
    metricsConfig?: Record<string, MetricConfig>;
    referenceLineValue?: number;
    referenceLineLabel?: string;
    daysInMonthMap?: Record<string, number>;
    className?: string;
    height?: number | string;
}
declare const TrendLinechart: React.FC<TrendLinechartProps>;
export default TrendLinechart;
//# sourceMappingURL=TrendLinechart.d.ts.map