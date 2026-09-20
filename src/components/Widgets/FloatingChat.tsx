import { type FC } from 'react';
import { COMPANY_INFO } from '../../data/companyData';

export const FloatingChat: FC = () => {
  // Extract digits from primary mobile number (0300-4384978 -> 923004384978)
  const rawMobile = COMPANY_INFO.phones.mobile1.replace(/[^0-9]/g, '');
  const whatsappNumber = rawMobile.startsWith('0') ? `92${rawMobile.slice(1)}` : rawMobile;

  const defaultMessage = encodeURIComponent(
    'Hello Technicool Engineering (TCE), I visited your website and would like to inquire about your HVAC-R and V-Shift Elevator engineering solutions.'
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-chat-trigger"
      aria-label={`Chat with Technicool Engineering on WhatsApp at ${COMPANY_INFO.phones.mobile1}`}
      title={`Chat with TCE Engineering on WhatsApp (${COMPANY_INFO.phones.mobile1})`}
    >
      <div className="chat-badge-dot" />
      {/* Official WhatsApp Vector Icon */}
      <svg
        className="whatsapp-icon-svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.785-1.676-2.086-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.502.1-.201.05-.376-.025-.527-.075-.15-.678-1.632-.929-2.235-.245-.588-.495-.508-.679-.518-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.201 2.123 3.242 5.144 4.547.719.31 1.28.496 1.718.636.722.23 1.378.198 1.9.12.58-.088 1.78-.728 2.03-1.43.251-.703.251-1.305.176-1.43-.075-.125-.276-.201-.577-.351zM12.04 2c-5.464 0-9.914 4.45-9.914 9.914 0 1.751.458 3.458 1.328 4.965L2 22l5.253-1.378c1.455.794 3.097 1.214 4.787 1.214 5.464 0 9.914-4.45 9.914-9.914 0-5.464-4.45-9.914-9.914-9.914zm0 18.17c-1.488 0-2.946-.4-4.22-1.157l-.303-.18-3.136.823.837-3.056-.197-.314c-.832-1.324-1.272-2.862-1.272-4.446 0-4.52 3.678-8.198 8.198-8.198 4.52 0 8.198 3.678 8.198 8.198 0 4.52-3.678 8.198-8.198 8.198z" />
      </svg>
      <span className="chat-trigger-label">Chat with Us</span>
    </a>
  );
};
