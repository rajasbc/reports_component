import React from 'react';
export interface StatItemNeon {
    label: string;
    value: number | string;
    details?: Record<string, any>;
}
export interface StatGridNeonProps {
    title?: string;
    data: StatItemNeon[] | Record<string, number | string>;
    columns?: number;
}
declare const StatGrid_neon: React.FC<StatGridNeonProps>;
export default StatGrid_neon;
//# sourceMappingURL=StatGrid_neon.d.ts.map