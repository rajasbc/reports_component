import React from 'react';
export interface KpiWidgetProps {
    title: string;
    value: number | string;
    prefix?: string;
    suffix?: string;
    trend?: number;
    trendLabel?: string;
    icon?: string;
    color?: string;
    backgroundColor?: string;
}
declare const KpiWidget_neon: React.FC<KpiWidgetProps>;
export default KpiWidget_neon;
//# sourceMappingURL=KpiWidget_neon.d.ts.map