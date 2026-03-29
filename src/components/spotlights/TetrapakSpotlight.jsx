import { useTranslation } from 'react-i18next';

const TetrapakSpotlight = ({ onImageClick }) => {
  const { t } = useTranslation();

  return (
    <div id="spotlight-tetrapak">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-[1px] bg-secondary" />
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-2xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
            open_in_new
          </span>
          <h2 className="font-headline text-2xl font-bold">{t('spotlight.tetrapak.title')}</h2>
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden p-4 sm:p-6 md:p-10 space-y-8 md:space-y-12">

        {/* ── Hero: Dashboard + Gallery + Live CTA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="relative rounded-xl overflow-hidden group/img cursor-zoom-in" onClick={() => onImageClick('/images/tetrapak/screen1.webp', t('spotlight.tetrapak.dashboard'))}>
              <img
                src="/images/tetrapak/screen1.webp"
                alt="TetrapakLogistics Dashboard"
                className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover/img:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none rounded-xl" />
              <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white/70 uppercase tracking-wider">{t('spotlight.tetrapak.dashboard')}</span>
              <span className="absolute top-3 right-3 opacity-0 group-hover/img:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white/70 text-xl">zoom_in</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://tetrapak-logistics.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-xl transition-all"
              >
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>open_in_new</span>
                {t('spotlight.tetrapak.openApp')}
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {[
              { src: '/images/tetrapak/screen2.webp', label: t('spotlight.tetrapak.routeMap') },
              { src: '/images/tetrapak/screen4.webp', label: t('spotlight.tetrapak.community') },
              { src: '/images/tetrapak/screen3.webp', label: t('spotlight.tetrapak.importData') },
              { src: '/images/tetrapak/screen5.webp', label: t('spotlight.tetrapak.login') },
            ].map(({ src, label }) => (
              <div key={label} className="rounded-xl overflow-hidden relative group/img bg-surface-container aspect-video cursor-zoom-in" onClick={() => onImageClick(src, label)}>
                <img src={src} alt={label} className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-on-surface-variant/80 uppercase tracking-wider">{label}</span>
                <span className="absolute top-2 right-2 opacity-0 group-hover/img:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-white/70 text-base">zoom_in</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* ── Pillar 1: Architecture & Stack ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-teal-400 rounded-full" />
            <span className="material-symbols-outlined text-lg text-teal-400" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
            <h3 className="font-headline text-lg font-bold text-teal-400">{t('spotlight.tetrapak.archTitle')}</h3>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {t('spotlight.tetrapak.archDesc')}
            </p>
            <ul className="space-y-1.5 mt-2">
              {[
                t('spotlight.tetrapak.archBullet1'),
                t('spotlight.tetrapak.archBullet2'),
                t('spotlight.tetrapak.archBullet3'),
                t('spotlight.tetrapak.archBullet4'),
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-[11px] text-on-surface-variant/80">
                  <span className="text-teal-400 mt-0.5 shrink-0">&#9656;</span>{item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-3">
              {['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'Vercel'].map(tag => (
                <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/20 text-on-surface-variant/70 uppercase tracking-wider">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* ── Pillar 2: RBAC & Auth ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-blue-400 rounded-full" />
            <span className="material-symbols-outlined text-lg text-blue-400" style={{ fontVariationSettings: "'FILL' 1" }}>admin_panel_settings</span>
            <h3 className="font-headline text-lg font-bold text-blue-400">{t('spotlight.tetrapak.rbacTitle')}</h3>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {t('spotlight.tetrapak.rbacDesc')}
            </p>
            <ul className="space-y-1.5 mt-2">
              {[
                t('spotlight.tetrapak.rbacBullet1'),
                t('spotlight.tetrapak.rbacBullet2'),
                t('spotlight.tetrapak.rbacBullet3'),
                t('spotlight.tetrapak.rbacBullet4'),
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-[11px] text-on-surface-variant/80">
                  <span className="text-blue-400 mt-0.5 shrink-0">&#9656;</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* ── Pillar 3: Maps & Route Optimization ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-emerald-400 rounded-full" />
            <span className="material-symbols-outlined text-lg text-emerald-400" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
            <h3 className="font-headline text-lg font-bold text-emerald-400">{t('spotlight.tetrapak.mapsTitle')}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-3 relative rounded-xl overflow-hidden group/img cursor-zoom-in" onClick={() => onImageClick('/images/tetrapak/screen2.webp', t('spotlight.tetrapak.routeMap'))}>
              <img
                src="/images/tetrapak/screen2.webp"
                alt={t('spotlight.tetrapak.routeMap')}
                className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover/img:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none rounded-xl" />
              <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white/70 uppercase tracking-wider">{t('spotlight.tetrapak.routeMap')}</span>
              <span className="absolute top-3 right-3 opacity-0 group-hover/img:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white/70 text-xl">zoom_in</span>
              </span>
            </div>
            <div className="lg:col-span-2 space-y-3">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t('spotlight.tetrapak.mapsDesc')}
              </p>
              <ul className="space-y-1.5 mt-2">
                {[
                  t('spotlight.tetrapak.mapsBullet1'),
                  t('spotlight.tetrapak.mapsBullet2'),
                  t('spotlight.tetrapak.mapsBullet3'),
                  t('spotlight.tetrapak.mapsBullet4'),
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-on-surface-variant/80">
                    <span className="text-emerald-400 mt-0.5 shrink-0">&#9656;</span>{item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Leaflet', 'OSRM', 'TSP', 'Geofencing'].map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/20 text-on-surface-variant/70 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TetrapakSpotlight;
