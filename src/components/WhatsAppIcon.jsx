import React from 'react';

/**
 * Custom WhatsApp Icon component using the official WhatsApp icon asset.
 * Rendered with high-resolution RGBA transparency.
 */
export default function WhatsAppIcon({ className = "w-4 h-4", alt = "WhatsApp" }) {
  return (
    <img 
      src="/whatsappicon.png" 
      alt={alt} 
      className={`inline-block object-contain shrink-0 ${className}`} 
      loading="eager"
    />
  );
}
