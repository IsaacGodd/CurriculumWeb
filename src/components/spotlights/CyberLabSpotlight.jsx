import { useTranslation } from 'react-i18next';

const CyberLabSpotlight = ({ onImageClick }) => {
  const { t } = useTranslation();

  return (
    <div id="spotlight-cyberlab">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-[1px] bg-secondary" />
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-2xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
            security
          </span>
          <h2 className="font-headline text-2xl font-bold">{t('spotlight.cyberLab.title')}</h2>
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden p-4 sm:p-6 md:p-10 space-y-8 md:space-y-12">

        {/* ── Hero: topology + diagram + tags ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 relative rounded-xl overflow-hidden group/img cursor-zoom-in" onClick={() => onImageClick('/images/ikusi/topology.webp', t('spotlight.cyberLab.topologyLabel'))}>
            <img
              src="/images/ikusi/topology.webp"
              alt={t('spotlight.cyberLab.topologyAlt')}
              className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover/img:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none rounded-xl" />
            <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white/70 uppercase tracking-wider">{t('spotlight.cyberLab.topologyLabel')}</span>
            <span className="absolute top-3 right-3 opacity-0 group-hover/img:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-white/70 text-xl">zoom_in</span>
            </span>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="relative rounded-xl overflow-hidden group/img cursor-zoom-in" onClick={() => onImageClick('/images/ikusi/retail-diagram.webp', t('spotlight.cyberLab.diagramLabel'))}>
              <img
                src="/images/ikusi/retail-diagram.webp"
                alt={t('spotlight.cyberLab.diagramLabel')}
                className="w-full h-auto rounded-xl object-cover transition-transform duration-300 group-hover/img:scale-[1.02]"
              />
              <span className="absolute top-2 right-2 opacity-0 group-hover/img:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white/70 text-base">zoom_in</span>
              </span>
            </div>
            <span className="text-[10px] font-mono text-on-surface-variant/60 uppercase tracking-wider text-center">{t('spotlight.cyberLab.diagramLabel')}</span>
            <div className="flex flex-wrap gap-2 mt-1">
              {['F5 BIG-IP', 'OPNsense', 'Proxmox', 'Security Onion', 'Kali Linux', 'Suricata', 'Metasploit'].map(tag => (
                <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/20 text-on-surface-variant/70 uppercase tracking-wider">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* ── Infraestructura ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-primary rounded-full" />
            <span className="material-symbols-outlined text-lg text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>dns</span>
            <h3 className="font-headline text-lg font-bold text-primary">{t('spotlight.cyberLab.infraTitle')}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 space-y-3">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t('spotlight.cyberLab.infraDesc').split('<1>')[0]}
                <span className="text-on-surface font-medium">Proxmox VE</span>
                {t('spotlight.cyberLab.infraDesc').split('</1>')[1]?.split('<3>')[0]}
                <span className="text-on-surface font-medium">{t('spotlight.cyberLab.infraBullet1').split(' ')[0]} {t('spotlight.cyberLab.infraBullet1').split(' ')[1]}</span>
                {t('spotlight.cyberLab.infraDesc').split('</3>')[1]}
              </p>
              <ul className="space-y-1.5 mt-2">
                {[
                  t('spotlight.cyberLab.infraBullet1'),
                  t('spotlight.cyberLab.infraBullet2'),
                  t('spotlight.cyberLab.infraBullet3'),
                  t('spotlight.cyberLab.infraBullet4'),
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-on-surface-variant/80">
                    <span className="text-primary mt-0.5 shrink-0">&#9656;</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 gap-3">
              {[
                { src: '/images/ikusi/infra-1.webp',     label: t('spotlight.cyberLab.infraImg1') },
                { src: '/images/ikusi/proxmox-vms.webp', label: t('spotlight.cyberLab.infraImg2') },
              ].map(({ src, label }) => (
                <div key={label} className="rounded-xl overflow-hidden relative group/img bg-surface-container aspect-video cursor-zoom-in" onClick={() => onImageClick(src, label)}>
                  <img src={src} alt={label} className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono text-on-surface-variant/80 uppercase tracking-wider leading-tight">{label}</span>
                  <span className="absolute top-2 right-2 opacity-0 group-hover/img:opacity-100 transition-opacity"><span className="material-symbols-outlined text-white/70 text-base">zoom_in</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* ── F5 BIG-IP ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-blue-400 rounded-full" />
            <span className="material-symbols-outlined text-lg text-blue-400" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
            <h3 className="font-headline text-lg font-bold text-blue-400">{t('spotlight.cyberLab.f5Title')}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 space-y-3">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t('spotlight.cyberLab.f5Desc1').replace(/<\/?[0-9]+>/g, '')}
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t('spotlight.cyberLab.f5Desc2').replace(/<\/?[0-9]+>/g, '')}
              </p>
              <ul className="space-y-1.5 mt-1">
                {[
                  t('spotlight.cyberLab.f5Bullet1'),
                  t('spotlight.cyberLab.f5Bullet2'),
                  t('spotlight.cyberLab.f5Bullet3'),
                  t('spotlight.cyberLab.f5Bullet4'),
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-on-surface-variant/80">
                    <span className="text-blue-400 mt-0.5 shrink-0">&#9656;</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3 grid grid-cols-3 gap-3">
              {[
                { src: '/images/ikusi/f5-1.webp',          label: t('spotlight.cyberLab.f5Img1') },
                { src: '/images/ikusi/f5-2.webp',          label: t('spotlight.cyberLab.f5Img2') },
                { src: '/images/ikusi/f5-policylist.webp', label: t('spotlight.cyberLab.f5Img3') },
              ].map(({ src, label }) => (
                <div key={label} className="rounded-xl overflow-hidden relative group/img bg-surface-container aspect-video cursor-zoom-in" onClick={() => onImageClick(src, label)}>
                  <img src={src} alt={label} className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono text-blue-300/80 uppercase tracking-wider leading-tight">{label}</span>
                  <span className="absolute top-2 right-2 opacity-0 group-hover/img:opacity-100 transition-opacity"><span className="material-symbols-outlined text-white/70 text-base">zoom_in</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* ── OPNsense ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-amber-400 rounded-full" />
            <span className="material-symbols-outlined text-lg text-amber-400" style={{ fontVariationSettings: "'FILL' 1" }}>router</span>
            <h3 className="font-headline text-lg font-bold text-amber-400">{t('spotlight.cyberLab.opnTitle')}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 space-y-3">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t('spotlight.cyberLab.opnDesc1').replace(/<\/?[0-9]+>/g, '')}
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t('spotlight.cyberLab.opnDesc2')}
              </p>
              <ul className="space-y-1.5 mt-1">
                {[
                  t('spotlight.cyberLab.opnBullet1'),
                  t('spotlight.cyberLab.opnBullet2'),
                  t('spotlight.cyberLab.opnBullet3'),
                  t('spotlight.cyberLab.opnBullet4'),
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-on-surface-variant/80">
                    <span className="text-amber-400 mt-0.5 shrink-0">&#9656;</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3 grid grid-cols-3 gap-3">
              {[
                { src: '/images/ikusi/opnsense-vlans.webp',      label: t('spotlight.cyberLab.opnImg1') },
                { src: '/images/ikusi/opnsense-interfaces.webp', label: t('spotlight.cyberLab.opnImg2') },
                { src: '/images/ikusi/opnsense-ids.webp',        label: t('spotlight.cyberLab.opnImg3') },
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

        {/* ── Red Team / Blue Team ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Red Team */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-red-400 rounded-full" />
              <span className="material-symbols-outlined text-lg text-red-400" style={{ fontVariationSettings: "'FILL' 1" }}>swords</span>
              <h3 className="font-headline text-base font-bold text-red-400">{t('spotlight.cyberLab.redTitle')}</h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {t('spotlight.cyberLab.redDesc')}
            </p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { src: '/images/ikusi/phishing-attack.webp', label: 'Ransomware' },
                { src: '/images/ikusi/reverse-shell.webp',   label: 'Reverse Shell' },
                { src: '/images/ikusi/keylogger.webp',       label: 'Keylogger' },
              ].map(({ src, label }) => (
                <div key={label} className="rounded-xl overflow-hidden relative group/img bg-surface-container aspect-video cursor-zoom-in" onClick={() => onImageClick(src, label)}>
                  <img src={src} alt={label} className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono text-red-300/80 uppercase tracking-wider leading-tight">{label}</span>
                  <span className="absolute top-2 right-2 opacity-0 group-hover/img:opacity-100 transition-opacity"><span className="material-symbols-outlined text-white/70 text-base">zoom_in</span></span>
                </div>
              ))}
            </div>
          </div>

          {/* Blue Team */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-emerald-400 rounded-full" />
              <span className="material-symbols-outlined text-lg text-emerald-400" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              <h3 className="font-headline text-base font-bold text-emerald-400">{t('spotlight.cyberLab.blueTitle')}</h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {t('spotlight.cyberLab.blueDesc')}
            </p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { src: '/images/ikusi/ids-blocking.webp', label: 'Suricata IPS' },
                { src: '/images/ikusi/so-alerts.webp',    label: 'Security Onion' },
                { src: '/images/ikusi/f5-policy.webp',    label: 'F5 Geo-Block' },
              ].map(({ src, label }) => (
                <div key={label} className="rounded-xl overflow-hidden relative group/img bg-surface-container aspect-video cursor-zoom-in" onClick={() => onImageClick(src, label)}>
                  <img src={src} alt={label} className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono text-emerald-400/80 uppercase tracking-wider leading-tight">{label}</span>
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

export default CyberLabSpotlight;
