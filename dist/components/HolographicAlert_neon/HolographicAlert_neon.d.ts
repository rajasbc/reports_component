import { default as React } from 'react';
interface AlertItem {
    label: string;
    value?: number;
}
export interface HolographicAlertProps {
    title?: string;
    data: AlertItem[];
    color?: string;
    height?: number | string;
    className?: string;
}
declare const HolographicAlert_neon: React.FC<HolographicAlertProps>;
export default HolographicAlert_neon;
//# sourceMappingURL=HolographicAlert_neon.d.ts.map