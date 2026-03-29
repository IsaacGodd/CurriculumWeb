const Lightbox = ({ lightbox, onClose }) => {
  if (!lightbox) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-sm font-mono uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-lg">close</span>
          esc
        </button>
        <img
          src={lightbox.src}
          alt={lightbox.label}
          className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
        />
        {lightbox.label && (
          <p className="mt-4 text-[11px] font-mono text-white/50 uppercase tracking-widest">
            {lightbox.label}
          </p>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
