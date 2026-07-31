import React from 'react';
import { BsTelephoneFill, BsEnvelopeFill, BsFlagFill } from 'react-icons/bs';
import { useContainerSize } from '../useContainerSize';

export interface ContactData {
  id: string | number;
  name: string;
  role?: string;
  phone?: string;
  email?: string;
  avatarUrl?: string;
  initials?: string;
  flagColor?: string; // e.g., 'red', 'yellow', 'green', or hex code
}

export interface ContactCardGridProps {
  contacts: ContactData[];
  title?: string;
}

const ContactCardGrid: React.FC<ContactCardGridProps> = ({ contacts, title }) => {
  const { ref, fs } = useContainerSize();

  const getInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const getFlagColorHex = (color?: string) => {
    if (!color) return 'transparent';
    const lower = color.toLowerCase();
    if (lower === 'red' || lower === 'danger') return '#e74c3c';
    if (lower === 'yellow' || lower === 'warning') return '#f1c40f';
    if (lower === 'green' || lower === 'success') return '#2ecc71';
    return color;
  };

  return (
    <div ref={ref} style={{ width: '100%', fontFamily: 'Arial, sans-serif' }}>
      {title && (
        <h3 style={{ margin: '0 0 16px 0', fontSize: fs(18), fontWeight: 'bold', color: '#003357' }}>
          {title}
        </h3>
      )}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          width: '100%',
        }}
      >
        {contacts.map((contact) => (
          <div
            key={contact.id}
            style={{
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              gap: '12px',
              position: 'relative',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
            }}
          >
            {/* Avatar Column */}
            <div style={{ flexShrink: 0 }}>
              {contact.avatarUrl ? (
                <img
                  src={contact.avatarUrl}
                  alt={contact.name}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#1abc9c',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    letterSpacing: '1px',
                  }}
                >
                  {contact.initials || getInitials(contact.name)}
                </div>
              )}
            </div>

            {/* Details Column */}
            <div style={{ flex: 1, minWidth: 0, paddingRight: '12px' }}>
              <div
                style={{
                  fontWeight: '700',
                  fontSize: '14px',
                  color: '#1e293b',
                  marginBottom: '2px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {contact.name}
              </div>
              {contact.role && (
                <div
                  style={{
                    fontSize: '12px',
                    color: '#64748b',
                    marginBottom: '8px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {contact.role}
                </div>
              )}
              {contact.phone && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    color: '#334155',
                    marginBottom: '4px',
                    fontWeight: '600',
                  }}
                >
                  <BsTelephoneFill size={10} color="#94a3b8" />
                  <span>{contact.phone}</span>
                </div>
              )}
              {contact.email && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    color: '#334155',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  <BsEnvelopeFill size={10} color="#94a3b8" />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {contact.email}
                  </span>
                </div>
              )}
            </div>

            {/* Flag Icon */}
            {contact.flagColor && (
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  color: getFlagColorHex(contact.flagColor),
                }}
              >
                <BsFlagFill size={14} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCardGrid;
