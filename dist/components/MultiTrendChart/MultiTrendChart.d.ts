import { default as React, ReactNode } from 'react';
export interface MultiTrendMetricConfig {
    label: string;
    shortLabel: string;
    color: string;
    icon?: ReactNode;
    format?: (value: any) => string;
}
export interface MultiTrendThresholdConfig {
    value: number;
    label: string;
    color: string;
}
export interface MultiTrendViewConfig {
    data: any[];
    threshold?: MultiTrendThresholdConfig | null;
    metrics: Record<string, MultiTrendMetricConfig>;
}
export interface MultiTrendTabConfig {
    id: string;
    tabTitle: string;
    title: string;
    views: Record<string, MultiTrendViewConfig>;
}
export interface MultiTrendChartProps {
    config: Record<string, MultiTrendTabConfig>;
    defaultTab?: string;
    defaultView?: string;
    subtitle?: string;
    xAxisKey?: string;
    daysInMonthMap?: Record<string, number>;
}
export declare const MultiTrendChart: React.FC<MultiTrendChartProps>;
//# sourceMappingURL=MultiTrendChart.d.ts.map