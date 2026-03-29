import { useState, useEffect, useCallback } from 'react';

const useLightbox = () => {
  const [lightbox, setLightbox] = useState(null); // { src, label }

  const openLightbox  = useCallback((src, label) => setLightbox({ src, label }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, closeLightbox]);

  return { lightbox, openLightbox, closeLightbox };
};

export default useLightbox;
