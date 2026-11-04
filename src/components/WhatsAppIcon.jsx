import React from 'react';

/**
 * Custom WhatsApp Icon component using the official WhatsApp icon asset.
 * Rendered with high-resolution RGBA transparency.
 */
export default function WhatsAppIcon({ className = "w-4 h-4", alt = "WhatsApp" }) {
  const iconSrc = `${import.meta.env.BASE_URL}whatsappicon.png`;
  return (
    <img 
      src={iconSrc} 
      alt={alt} 
      className={`inline-block object-contain shrink-0 ${className}`} 
      loading="eager"
    />
  );
}
