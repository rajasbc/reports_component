import React from 'react';
export interface ContactData {
    id: string | number;
    name: string;
    role?: string;
    phone?: string;
    email?: string;
    avatarUrl?: string;
    initials?: string;
    flagColor?: string;
}
export interface ContactCardGridProps {
    contacts: ContactData[];
    title?: string;
}
declare const ContactCardGrid: React.FC<ContactCardGridProps>;
export default ContactCardGrid;
//# sourceMappingURL=ContactCardGrid.d.ts.map