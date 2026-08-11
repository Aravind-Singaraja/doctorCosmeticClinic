import { clinic } from '../data/content';
import './ContactFab.css';

export function ContactFab() {
  return (
    <div className="fab-stack" aria-label="Quick contact">
      <a
        className="fab fab--wa"
        href={`${clinic.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a consultation at Doctor's Hair Care Clinic Chennai")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <span>WhatsApp</span>
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.82c4.46 0 8.09 3.63 8.09 8.09 0 4.46-3.63 8.09-8.09 8.09-1.42 0-2.81-.37-4.03-1.07l-.29-.17-3.12.82.83-3.04-.19-.31a8.05 8.05 0 0 1-1.2-4.32c0-4.46 3.63-8.09 8.09-8.09zm4.58 10.5c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.16-.48.05-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.07-.11-.5-1.2-.68-1.64-.18-.43-.36-.37-.5-.38h-.43c-.15 0-.39.06-.59.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.57 2.4 3.8 3.37 1.33.57 1.85.62 2.51.52.38-.06 1.3-.53 1.48-1.04.18-.51.18-.95.13-1.04-.05-.09-.2-.15-.42-.26z" />
        </svg>
      </a>
      <a className="fab" href={clinic.phoneHref} aria-label="Call clinic">
        <span>Call</span>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.35a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.34 1.54.57 2.35.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>
  );
}
