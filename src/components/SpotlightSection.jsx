const SpotlightSection = ({ title, youtubeId, youtubeTitle, credit, screenshots, onImageClick }) => (
  <div>
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-[1px] bg-secondary" />
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-2xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
          play_circle
        </span>
        <h2 className="font-headline text-2xl font-bold">{title}</h2>
      </div>
    </div>

    <div className="glass-card rounded-2xl overflow-hidden p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

        {/* YouTube Embed — 3 cols */}
        <div className="lg:col-span-3">
          <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={youtubeTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-xs text-on-surface-variant leading-relaxed">{credit}</p>
        </div>

        {/* Screenshot Gallery — 2 cols */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
          {screenshots.map(({ src, label }) => (
            <div
              key={label}
              className="rounded-xl overflow-hidden relative group/img bg-surface-container aspect-video cursor-zoom-in"
              onClick={() => onImageClick?.(src, label)}
            >
              <img
                src={src}
                alt={label}
                className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent pointer-events-none" />
              <span className="absolute bottom-2 left-2 text-[10px] font-mono text-on-surface-variant/80 uppercase tracking-wider">
                {label}
              </span>
              <span className="absolute top-2 right-2 opacity-0 group-hover/img:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white/70 text-base">zoom_in</span>
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
);

export default SpotlightSection;
