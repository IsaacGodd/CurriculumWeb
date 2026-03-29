import { useTranslation } from 'react-i18next';

const VelatiaSpotlight = ({ onImageClick }) => {
  const { t } = useTranslation();

  return (
    <div id="spotlight-velatia">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-[1px] bg-secondary" />
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-2xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
            device_hub
          </span>
          <h2 className="font-headline text-2xl font-bold">{t('spotlight.velatia.title')}</h2>
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden p-4 sm:p-6 md:p-10 space-y-8 md:space-y-12">

        {/* ── Pillar 1: Multi-Site Network Design ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-sky-400 rounded-full" />
            <span className="material-symbols-outlined text-lg text-sky-400" style={{ fontVariationSettings: "'FILL' 1" }}>lan</span>
            <h3 className="font-headline text-lg font-bold text-sky-400">{t('spotlight.velatia.networkTitle')}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3 relative rounded-xl overflow-hidden group/img cursor-zoom-in" onClick={() => onImageClick('/images/velatia/Velatia.webp', t('spotlight.velatia.networkImg'))}>
              <img
                src="/images/velatia/Velatia.webp"
                alt={t('spotlight.velatia.networkImg')}
                className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover/img:scale-[1.02] bg-white p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none rounded-xl" />
              <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white/70 uppercase tracking-wider">{t('spotlight.velatia.networkImg')}</span>
              <span className="absolute top-3 right-3 opacity-0 group-hover/img:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white/70 text-xl">zoom_in</span>
              </span>
            </div>
            <div className="lg:col-span-2 space-y-3">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t('spotlight.velatia.networkDesc')}
              </p>
              <ul className="space-y-1.5 mt-2">
                {[
                  t('spotlight.velatia.networkBullet1'),
                  t('spotlight.velatia.networkBullet2'),
                  t('spotlight.velatia.networkBullet3'),
                  t('spotlight.velatia.networkBullet4'),
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-on-surface-variant/80">
                    <span className="text-sky-400 mt-0.5 shrink-0">&#9656;</span>{item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Routers', 'Switches', 'VLANs', 'Ethernet', 'Wireless'].map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/20 text-on-surface-variant/70 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* ── Pillar 2: Cost-Benefit & Enterprise Constraints ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-emerald-400 rounded-full" />
            <span className="material-symbols-outlined text-lg text-emerald-400" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            <h3 className="font-headline text-lg font-bold text-emerald-400">{t('spotlight.velatia.costTitle')}</h3>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {t('spotlight.velatia.costDesc')}
            </p>
            <ul className="space-y-1.5 mt-2">
              {[
                t('spotlight.velatia.costBullet1'),
                t('spotlight.velatia.costBullet2'),
                t('spotlight.velatia.costBullet3'),
                t('spotlight.velatia.costBullet4'),
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-[11px] text-on-surface-variant/80">
                  <span className="text-emerald-400 mt-0.5 shrink-0">&#9656;</span>{item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-3">
              {['TCO', 'ROI', 'SLA', 'QoS', 'Redundancy'].map(tag => (
                <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/20 text-on-surface-variant/70 uppercase tracking-wider">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* ── Pillar 3: Security & Awareness ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-amber-400 rounded-full" />
            <span className="material-symbols-outlined text-lg text-amber-400" style={{ fontVariationSettings: "'FILL' 1" }}>shield_lock</span>
            <h3 className="font-headline text-lg font-bold text-amber-400">{t('spotlight.velatia.securityTitle')}</h3>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {t('spotlight.velatia.securityDesc')}
            </p>
            <ul className="space-y-1.5 mt-2">
              {[
                t('spotlight.velatia.securityBullet1'),
                t('spotlight.velatia.securityBullet2'),
                t('spotlight.velatia.securityBullet3'),
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-[11px] text-on-surface-variant/80">
                  <span className="text-amber-400 mt-0.5 shrink-0">&#9656;</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* ── Recognition: Certificate ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-primary rounded-full" />
            <span className="material-symbols-outlined text-lg text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            <h3 className="font-headline text-lg font-bold text-primary">{t('spotlight.velatia.certTitle')}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 space-y-3">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t('spotlight.velatia.certDesc')}
              </p>
            </div>
            <div className="lg:col-span-3 relative rounded-xl overflow-hidden group/img cursor-zoom-in" onClick={() => onImageClick('/images/certificados/CertInterconexiones.webp', t('spotlight.velatia.certImg'))}>
              <img
                src="/images/certificados/CertInterconexiones.webp"
                alt={t('spotlight.velatia.certImg')}
                className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover/img:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none rounded-xl" />
              <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white/70 uppercase tracking-wider">{t('spotlight.velatia.certImg')}</span>
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

export default VelatiaSpotlight;
