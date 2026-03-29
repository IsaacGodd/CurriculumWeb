import { useTranslation } from 'react-i18next';

const CaritasSpotlight = ({ onImageClick }) => {
  const { t } = useTranslation();

  return (
    <div id="spotlight-caritas">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-[1px] bg-secondary" />
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-2xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
            lock
          </span>
          <h2 className="font-headline text-2xl font-bold">{t('spotlight.caritas.title')}</h2>
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden p-4 sm:p-6 md:p-10 space-y-8 md:space-y-12">

        {/* ── Pillar 1: Network Architecture & Hardening ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-primary rounded-full" />
            <span className="material-symbols-outlined text-lg text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>lan</span>
            <h3 className="font-headline text-lg font-bold text-primary">{t('spotlight.caritas.archTitle')}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3 relative rounded-xl overflow-hidden group/img cursor-zoom-in" onClick={() => onImageClick('/images/caritas/Arquitectura de aplicacion.webp', t('spotlight.caritas.archImgLabel'))}>
              <img
                src="/images/caritas/Arquitectura de aplicacion.webp"
                alt={t('spotlight.caritas.archImgLabel')}
                className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover/img:scale-[1.02] bg-white p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none rounded-xl" />
              <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white/70 uppercase tracking-wider">{t('spotlight.caritas.archImgLabel')}</span>
              <span className="absolute top-3 right-3 opacity-0 group-hover/img:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white/70 text-xl">zoom_in</span>
              </span>
            </div>
            <div className="lg:col-span-2 space-y-3">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t('spotlight.caritas.archDesc')}
              </p>
              <ul className="space-y-1.5 mt-2">
                {[
                  t('spotlight.caritas.archBullet1'),
                  t('spotlight.caritas.archBullet2'),
                  t('spotlight.caritas.archBullet3'),
                  t('spotlight.caritas.archBullet4'),
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-on-surface-variant/80">
                    <span className="text-primary mt-0.5 shrink-0">&#9656;</span>{item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {['UFW', 'HTTPS/SSL', 'Docker DNS', 'Flask'].map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/20 text-on-surface-variant/70 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* ── Pillar 2: Audit & Remediation Cycle ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-amber-400 rounded-full" />
            <span className="material-symbols-outlined text-lg text-amber-400" style={{ fontVariationSettings: "'FILL' 1" }}>bug_report</span>
            <h3 className="font-headline text-lg font-bold text-amber-400">{t('spotlight.caritas.auditTitle')}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 space-y-3">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t('spotlight.caritas.auditDesc')}
              </p>
              <ul className="space-y-1.5 mt-2">
                {[
                  t('spotlight.caritas.auditBullet1'),
                  t('spotlight.caritas.auditBullet2'),
                  t('spotlight.caritas.auditBullet3'),
                  t('spotlight.caritas.auditBullet4'),
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-on-surface-variant/80">
                    <span className="text-amber-400 mt-0.5 shrink-0">&#9656;</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 gap-3">
              {[
                { src: '/images/caritas/AuditoriaBandit.webp',    label: t('spotlight.caritas.banditBefore') },
                { src: '/images/caritas/AuditoriaBandit2.webp',   label: t('spotlight.caritas.banditAfter') },
                { src: '/images/caritas/Auditoria OWASP ZAP.webp', label: t('spotlight.caritas.owaspZap') },
                { src: '/images/caritas/DiagramaER.webp',         label: t('spotlight.caritas.erDiagram') },
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

        <div className="border-t border-white/10" />

        {/* ── Pillar 3: Identity Management & Cryptography ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-emerald-400 rounded-full" />
            <span className="material-symbols-outlined text-lg text-emerald-400" style={{ fontVariationSettings: "'FILL' 1" }}>key</span>
            <h3 className="font-headline text-lg font-bold text-emerald-400">{t('spotlight.caritas.cryptoTitle')}</h3>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {t('spotlight.caritas.cryptoDesc')}
            </p>
            <ul className="space-y-1.5 mt-2">
              {[
                t('spotlight.caritas.cryptoBullet1'),
                t('spotlight.caritas.cryptoBullet2'),
                t('spotlight.caritas.cryptoBullet3'),
                t('spotlight.caritas.cryptoBullet4'),
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-[11px] text-on-surface-variant/80">
                  <span className="text-emerald-400 mt-0.5 shrink-0">&#9656;</span>{item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-3">
              {['SHA-256', 'Pepper', '.env', 'Least Privilege', 'Stored Procedures'].map(tag => (
                <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/20 text-on-surface-variant/70 uppercase tracking-wider">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* ── Risk Analysis Radar ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-red-400 rounded-full" />
            <span className="material-symbols-outlined text-lg text-red-400" style={{ fontVariationSettings: "'FILL' 1" }}>assessment</span>
            <h3 className="font-headline text-lg font-bold text-red-400">{t('spotlight.caritas.riskTitle')}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 space-y-3">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t('spotlight.caritas.riskDesc')}
              </p>
              <ul className="space-y-1.5 mt-2">
                {[
                  t('spotlight.caritas.riskBullet1'),
                  t('spotlight.caritas.riskBullet2'),
                  t('spotlight.caritas.riskBullet3'),
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-on-surface-variant/80">
                    <span className="text-red-400 mt-0.5 shrink-0">&#9656;</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3 relative rounded-xl overflow-hidden group/img cursor-zoom-in" onClick={() => onImageClick('/images/caritas/Analisis de Riesgo.webp', t('spotlight.caritas.riskImg'))}>
              <img
                src="/images/caritas/Analisis de Riesgo.webp"
                alt={t('spotlight.caritas.riskImg')}
                className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover/img:scale-[1.02] bg-white p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none rounded-xl" />
              <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white/70 uppercase tracking-wider">{t('spotlight.caritas.riskImg')}</span>
              <span className="absolute top-3 right-3 opacity-0 group-hover/img:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white/70 text-xl">zoom_in</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaritasSpotlight;
