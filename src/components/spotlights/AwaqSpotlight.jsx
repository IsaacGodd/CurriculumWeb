import { useTranslation } from 'react-i18next';

const AwaqSpotlight = ({ onImageClick }) => {
  const { t } = useTranslation();

  return (
    <div id="spotlight-awaq">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-[1px] bg-secondary" />
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-2xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
            sports_esports
          </span>
          <h2 className="font-headline text-2xl font-bold">{t('spotlight.awaq.title')}</h2>
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden p-4 sm:p-6 md:p-10 space-y-8 md:space-y-12">

        {/* ── YouTube Demo ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-orange-400 rounded-full" />
            <span className="material-symbols-outlined text-lg text-orange-400" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            <h3 className="font-headline text-lg font-bold text-orange-400">{t('spotlight.awaq.demoTitle')}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3 aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/ILqijApkyU4"
                title={t('spotlight.awaq.youtubeTitle')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="lg:col-span-2 space-y-3">
              <p className="text-[11px] text-on-surface-variant/60 italic">
                {t('spotlight.awaq.credit')}
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t('spotlight.awaq.demoDesc')}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* ── Pillar 1: Unity Game Integration ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-amber-400 rounded-full" />
            <span className="material-symbols-outlined text-lg text-amber-400" style={{ fontVariationSettings: "'FILL' 1" }}>videogame_asset</span>
            <h3 className="font-headline text-lg font-bold text-amber-400">{t('spotlight.awaq.gameTitle')}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3 relative rounded-xl overflow-hidden group/img cursor-zoom-in" onClick={() => onImageClick('/images/awaq/game.webp', t('spotlight.awaq.tower'))}>
              <img
                src="/images/awaq/game.webp"
                alt={t('spotlight.awaq.tower')}
                className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover/img:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none rounded-xl" />
              <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white/70 uppercase tracking-wider">{t('spotlight.awaq.tower')}</span>
              <span className="absolute top-3 right-3 opacity-0 group-hover/img:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white/70 text-xl">zoom_in</span>
              </span>
            </div>
            <div className="lg:col-span-2 space-y-3">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t('spotlight.awaq.gameDesc')}
              </p>
              <ul className="space-y-1.5 mt-2">
                {[
                  t('spotlight.awaq.gameBullet1'),
                  t('spotlight.awaq.gameBullet2'),
                  t('spotlight.awaq.gameBullet3'),
                  t('spotlight.awaq.gameBullet4'),
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-on-surface-variant/80">
                    <span className="text-amber-400 mt-0.5 shrink-0">&#9656;</span>{item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Unity', 'C#', 'UnityWebRequest', 'iPad', 'WebGL'].map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/20 text-on-surface-variant/70 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* ── Pillar 2: Web Dashboard ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-sky-400 rounded-full" />
            <span className="material-symbols-outlined text-lg text-sky-400" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
            <h3 className="font-headline text-lg font-bold text-sky-400">{t('spotlight.awaq.dashTitle')}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 space-y-3">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t('spotlight.awaq.dashDesc')}
              </p>
              <ul className="space-y-1.5 mt-2">
                {[
                  t('spotlight.awaq.dashBullet1'),
                  t('spotlight.awaq.dashBullet2'),
                  t('spotlight.awaq.dashBullet3'),
                  t('spotlight.awaq.dashBullet4'),
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-on-surface-variant/80">
                    <span className="text-sky-400 mt-0.5 shrink-0">&#9656;</span>{item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {['C#', '.NET MVC', 'JavaScript', 'HTML/CSS', 'SQL Server'].map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/20 text-on-surface-variant/70 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 gap-3">
              {[
                { src: '/images/awaq/dashboard.webp', label: t('spotlight.awaq.dashboard') },
                { src: '/images/awaq/colaboradores.webp', label: t('spotlight.awaq.colaboradores') },
              ].map(({ src, label }) => (
                <div key={label} className="rounded-xl overflow-hidden relative group/img bg-surface-container aspect-video cursor-zoom-in" onClick={() => onImageClick(src, label)}>
                  <img src={src} alt={label} className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono text-amber-300/80 uppercase tracking-wider leading-tight">{label}</span>
                  <span className="absolute top-2 right-2 opacity-0 group-hover/img:opacity-100 transition-opacity"><span className="material-symbols-outlined text-white/70 text-base">zoom_in</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AwaqSpotlight;
