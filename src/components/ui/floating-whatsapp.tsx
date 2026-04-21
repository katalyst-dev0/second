import React from "react";

export const FloatingWhatsApp: React.FC = () => {
  // Replace this phone number with the actual desired contact number
  const phoneNumber = "1234567890";
  const message = "Hello! I'm interested in working with Katalyst.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] p-3.5 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
      style={{ boxShadow: "0px 8px 24px rgba(37, 211, 102, 0.4)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M12.01 22c-1.94 0-3.83-.5-5.5-1.44l-.39-.23-4.08 1.07 1.09-3.98-.26-.41a9.99 9.99 0 01-1.52-5A9.995 9.995 0 0111.995 2A10 10 0 0122 12a10.02 10.02 0 01-9.99 10zm-5.91-2.95l.17.1a7.995 7.995 0 004.74 1.55h.01c4.4 0 7.98-3.58 7.98-7.98a7.989 7.989 0 00-2.34-5.65 7.973 7.973 0 00-5.64-2.34 7.987 7.987 0 00-7.98 7.98c0 1.56.4 3.09 1.15 4.41l.12.2-1.32 4.8 4.93-1.28a.465.465 0 00-.01-.01z"/>
        <path d="M16.81 14.52c-.26-.13-1.55-.77-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.03-.15.17-.3.2-.56.06-.26-.13-1.11-.41-2.12-1.31-.78-.7-1.31-1.56-1.46-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.25-.43.09-.17.04-.32-.02-.45s-.58-1.4-.79-1.92c-.21-.5-.41-.43-.58-.45a4.7 4.7 0 00-.5-.01c-.17 0-.46.06-.7.32-.24.26-.91.89-.91 2.18s.93 2.53 1.06 2.7c.13.17 1.84 2.81 4.46 3.94.62.27 1.1.43 1.48.56.63.2 1.2.17 1.65.1.51-.08 1.55-.63 1.77-1.24.21-.61.21-1.13.15-1.24-.06-.11-.23-.17-.49-.3z"/>
      </svg>
    </a>
  );
};
