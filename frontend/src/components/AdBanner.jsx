import React, { useEffect } from 'react';

// Replace these with your real AdSense publisher ID and slot IDs
// from https://adsense.google.com
const PUBLISHER_ID = 'ca-pub-XXXXXXXXXXXXXXXX'; // <-- your AdSense publisher ID

export default function AdBanner({ slot, format = 'auto', style = {} }) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-6">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
