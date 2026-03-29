import { useTranslation } from 'react-i18next';

const WelcomeHubSpotlight = ({ onImageClick }) => {
  const { t } = useTranslation();

  return (
    <div id="spotlight-welcomehub">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-[1px] bg-secondary" />
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-2xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
            apartment
          </span>
          <h2 className="font-headline text-2xl font-bold">{t('spotlight.welcomehub.title')}</h2>
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden p-4 sm:p-6 md:p-10 space-y-8 md:space-y-12">

        {/* ── YouTube Demo ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-violet-400 rounded-full" />
            <span className="material-symbols-outlined text-lg text-violet-400" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            <h3 className="font-headline text-lg font-bold text-violet-400">{t('spotlight.welcomehub.demoTitle')}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3 aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/6T7OmBCh2bw"
                title={t('spotlight.welcomehub.youtubeTitle')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="lg:col-span-2 space-y-3">
              <p className="text-[11px] text-on-surface-variant/60 italic">
                {t('spotlight.welcomehub.credit')}
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t('spotlight.welcomehub.demoDesc')}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* ── Pillar 1: Architecture & Stack ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-indigo-400 rounded-full" />
            <span className="material-symbols-outlined text-lg text-indigo-400" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
            <h3 className="font-headline text-lg font-bold text-indigo-400">{t('spotlight.welcomehub.archTitle')}</h3>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {t('spotlight.welcomehub.archDesc')}
            </p>
            <ul className="space-y-1.5 mt-2">
              {[
                t('spotlight.welcomehub.archBullet1'),
                t('spotlight.welcomehub.archBullet2'),
                t('spotlight.welcomehub.archBullet3'),
                t('spotlight.welcomehub.archBullet4'),
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-[11px] text-on-surface-variant/80">
                  <span className="text-indigo-400 mt-0.5 shrink-0">&#9656;</span>{item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-3">
              {['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vercel', 'Tailwind CSS', 'shadcn/ui'].map(tag => (
                <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/20 text-on-surface-variant/70 uppercase tracking-wider">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* ── Pillar 2: AI Chatbot (Compi) ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-emerald-400 rounded-full" />
            <span className="material-symbols-outlined text-lg text-emerald-400" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
            <h3 className="font-headline text-lg font-bold text-emerald-400">{t('spotlight.welcomehub.aiTitle')}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 space-y-3">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t('spotlight.welcomehub.aiDesc')}
              </p>
              <ul className="space-y-1.5 mt-2">
                {[
                  t('spotlight.welcomehub.aiBullet1'),
                  t('spotlight.welcomehub.aiBullet2'),
                  t('spotlight.welcomehub.aiBullet3'),
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-on-surface-variant/80">
                    <span className="text-emerald-400 mt-0.5 shrink-0">&#9656;</span>{item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {['GPT API', 'LangChain', 'Transformers'].map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/20 text-on-surface-variant/70 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 gap-3">
              {[
                { src: '/images/welcomehub/Compi.webp', label: t('spotlight.welcomehub.compiAI') },
                { src: '/images/welcomehub/Compi2.webp', label: t('spotlight.welcomehub.chatbot') },
              ].map(({ src, label }) => (
                <div key={label} className="rounded-xl overflow-hidden relative group/img bg-surface-container aspect-video cursor-zoom-in" onClick={() => onImageClick(src, label)}>
                  <img src={src} alt={label} className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono text-violet-300/80 uppercase tracking-wider leading-tight">{label}</span>
                  <span className="absolute top-2 right-2 opacity-0 group-hover/img:opacity-100 transition-opacity"><span className="material-symbols-outlined text-white/70 text-base">zoom_in</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* ── Pillar 3: Onboarding & Gamification ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-amber-400 rounded-full" />
            <span className="material-symbols-outlined text-lg text-amber-400" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
            <h3 className="font-headline text-lg font-bold text-amber-400">{t('spotlight.welcomehub.onboardTitle')}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3 relative rounded-xl overflow-hidden group/img cursor-zoom-in" onClick={() => onImageClick('/images/welcomehub/Rank.webp', t('spotlight.welcomehub.leaderboard'))}>
              <img
                src="/images/welcomehub/Rank.webp"
                alt={t('spotlight.welcomehub.leaderboard')}
                className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover/img:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none rounded-xl" />
              <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white/70 uppercase tracking-wider">{t('spotlight.welcomehub.leaderboard')}</span>
              <span className="absolute top-3 right-3 opacity-0 group-hover/img:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white/70 text-xl">zoom_in</span>
              </span>
            </div>
            <div className="lg:col-span-2 space-y-3">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t('spotlight.welcomehub.onboardDesc')}
              </p>
              <ul className="space-y-1.5 mt-2">
                {[
                  t('spotlight.welcomehub.onboardBullet1'),
                  t('spotlight.welcomehub.onboardBullet2'),
                  t('spotlight.welcomehub.onboardBullet3'),
                  t('spotlight.welcomehub.onboardBullet4'),
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-on-surface-variant/80">
                    <span className="text-amber-400 mt-0.5 shrink-0">&#9656;</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WelcomeHubSpotlight;
