import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const WHATSAPP_NUMBER = '+923458612538'; // Replace with actual number
const DEFAULT_MESSAGE = 'Hello! I would like to know more about your counseling services.';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const [mounted, setMounted] = useState(false);
  const [pulse, setPulse] = useState(true);
  const location = useLocation();

  const isBookingPage = location.pathname === '/booking';
  const fabBottom = isBookingPage ? '5.25rem' : '1.5rem';
  const popupBottom = isBookingPage ? '9.25rem' : '5.5rem';

  useEffect(() => {
    setMounted(true);
    // Stop the pulse animation after 10 seconds
    const timer = setTimeout(() => setPulse(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      '_blank'
    );
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat popup */}
      <div
        className={`whatsapp-popup ${isOpen ? 'whatsapp-popup--open' : ''}`}
        style={{
          position: 'fixed',
          bottom: popupBottom,
          left: '1.5rem',
          zIndex: 9998,
          width: 'min(360px, calc(100vw - 3rem))',
          pointerEvents: isOpen ? 'auto' : 'none',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.95)',
          transition: 'opacity 0.3s ease, transform 0.3s ease, bottom 0.3s ease',
        }}
      >
        {/* Header */}
        <div
          style={{
            background: '#075e54',
            borderRadius: '1rem 1rem 0 0',
            padding: '1.25rem 1.25rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#25d366',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                color: 'white',
                fontWeight: 700,
                fontSize: '1rem',
                lineHeight: 1.3,
                fontFamily: "'El Messiri', sans-serif",
              }}
            >
              ARC Counselling
            </div>
            <div
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.8rem',
                lineHeight: 1.4,
              }}
            >
              Typically replies within an hour
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,0.7)',
              cursor: 'pointer',
              padding: '4px',
              transition: 'color 0.2s',
              lineHeight: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Chat body */}
        <div
          style={{
            background: '#e5ddd5',
            padding: '1.25rem 1rem',
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8bfb6' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        >
          {/* Greeting bubble */}
          <div
            style={{
              background: 'white',
              borderRadius: '0 0.75rem 0.75rem 0.75rem',
              padding: '0.75rem 1rem',
              fontSize: '0.9rem',
              lineHeight: 1.55,
              color: '#303030',
              maxWidth: '85%',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ fontWeight: 600, color: '#075e54', marginBottom: '0.25rem', fontSize: '0.8rem' }}>
              ARC Counseling
            </div>
            👋 Hi there! How can I help you today? Feel free to send us a message and we'll get back to you as soon as possible.
            <div
              style={{
                fontSize: '0.7rem',
                color: '#999',
                textAlign: 'right',
                marginTop: '0.35rem',
              }}
            >
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        </div>

        {/* Input area */}
        <div
          style={{
            background: '#f0f0f0',
            borderRadius: '0 0 1rem 1rem',
            padding: '0.75rem',
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'flex-end',
          }}
        >
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message…"
            rows={1}
            style={{
              flex: 1,
              resize: 'none',
              border: 'none',
              borderRadius: '1.25rem',
              padding: '0.65rem 1rem',
              fontSize: '0.88rem',
              fontFamily: "'DM Sans', sans-serif",
              background: 'white',
              color: '#303030',
              outline: 'none',
              lineHeight: 1.4,
              maxHeight: '80px',
              overflowY: 'auto',
            }}
          />
          <button
            onClick={handleSend}
            aria-label="Send message on WhatsApp"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: '#25d366',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1da851';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#25d366';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        id="whatsapp-widget-fab"
        onClick={() => {
          setIsOpen(!isOpen);
          setPulse(false);
        }}
        aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        style={{
          position: 'fixed',
          bottom: fabBottom,
          left: '1.5rem',
          zIndex: 9999,
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: '#25d366',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0, 0, 0, 0.15)',
          transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease, bottom 0.3s ease',
          transform: mounted ? 'scale(1)' : 'scale(0)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(37, 211, 102, 0.6), 0 4px 12px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0, 0, 0, 0.15)';
        }}
      >
        {/* Pulse ring */}
        {pulse && (
          <span
            style={{
              position: 'absolute',
              inset: '-6px',
              borderRadius: '50%',
              border: '2px solid #25d366',
              animation: 'whatsapp-pulse 2s ease-out infinite',
              pointerEvents: 'none',
            }}
          />
        )}

        {/* Icon: toggle between original WhatsApp logo and close */}
        <div
          style={{
            transition: 'transform 0.3s ease',
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          )}
        </div>
      </button>

      {/* Keyframe animation */}
      <style>{`
        @keyframes whatsapp-pulse {
          0% { transform: scale(1); opacity: 0.7; }
          70% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </>
  );
}
