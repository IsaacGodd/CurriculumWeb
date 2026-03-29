import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <main className="relative pt-32 pb-40 px-4 md:px-6 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <h4 className="font-label uppercase tracking-[0.3em] text-secondary text-xs mb-4">{t('experience.sectionLabel')}</h4>
          <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tight text-on-surface mb-6">
            {t('experience.heading')}<span className="text-primary">{t('experience.headingHighlight')}</span>
          </h1>
          <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed">
            {t('experience.intro')}
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] timeline-gradient opacity-20 transform -translate-x-1/2"></div>

          <div className="space-y-24">

            {/* Entry 01: Education */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center">
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-surface-container rounded-full border-2 border-primary -translate-x-1/2 z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div className="md:w-1/2 md:pr-20 ml-8 md:ml-0 text-left md:text-right">
                <span className="font-label text-secondary text-sm font-semibold tracking-widest uppercase">{t('experience.eduDate')}</span>
                <h3 className="font-headline text-3xl font-bold text-on-surface mt-2 mb-4">{t('experience.eduTitle')}</h3>
                <img
                  src="/images/timeline/TecLogo.webp"
                  alt="ITESM"
                  className="hidden md:block w-48 ml-auto mt-4 rounded-xl opacity-80"
                />
              </div>
              <div className="md:w-1/2 md:pl-20 mt-6 md:mt-0 ml-8 md:ml-0">
                <div className="glass-card rounded-xl p-5 md:p-8 transition-all duration-300">
                  <p className="text-on-surface-variant leading-relaxed mb-6">
                    {t('experience.eduDescription')}
                  </p>
                  <div className="space-y-4">
                    <h5 className="text-xs uppercase tracking-widest text-primary font-bold">{t('experience.highlights')}</h5>
                    <ul className="space-y-2 text-sm text-on-surface-variant">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[14px] text-secondary">school</span>
                        {t('experience.highlight1')}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[14px] text-secondary">code</span>
                        {t('experience.highlight2')}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[14px] text-secondary">groups</span>
                        {t('experience.highlight3')}
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-4">
                      <span className="px-3 py-1 text-[10px] font-label border border-outline-variant/30 text-tertiary rounded-full uppercase tracking-widest">React</span>
                      <span className="px-3 py-1 text-[10px] font-label border border-outline-variant/30 text-tertiary rounded-full uppercase tracking-widest">Node.js</span>
                      <span className="px-3 py-1 text-[10px] font-label border border-outline-variant/30 text-tertiary rounded-full uppercase tracking-widest">Python</span>
                      <span className="px-3 py-1 text-[10px] font-label border border-outline-variant/30 text-tertiary rounded-full uppercase tracking-widest">Kali Linux</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Entry 02: Service Learning */}
            <div className="relative flex flex-col md:flex-row-reverse items-start md:items-center">
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-surface-container rounded-full border-2 border-secondary -translate-x-1/2 z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
              </div>
              <div className="md:w-1/2 md:pl-20 ml-8 md:ml-0 text-left">
                <span className="font-label text-primary text-sm font-semibold tracking-widest uppercase">{t('experience.volDate')}</span>
                <h3 className="font-headline text-3xl font-bold text-on-surface mt-2 mb-4">{t('experience.volTitle')}</h3>
                <img
                  src="/images/timeline/UFScience.webp"
                  alt="Federación Unida de Ciencia"
                  className="hidden md:block w-48 mt-4 rounded-xl opacity-80"
                />
              </div>
              <div className="md:w-1/2 md:pr-20 mt-6 md:mt-0 ml-8 md:ml-0">
                <div className="glass-card rounded-xl p-5 md:p-8 transition-all duration-300">
                  <p className="text-on-surface-variant leading-relaxed mb-2 text-sm font-semibold text-on-surface">
                    {t('experience.volSubtitle')}
                  </p>
                  <p className="text-on-surface-variant leading-relaxed mb-6">
                    {t('experience.volDescription')}
                  </p>
                  <div className="space-y-4">
                    <h5 className="text-xs uppercase tracking-widest text-secondary font-bold">{t('experience.keyDeliverables')}</h5>
                    <ul className="space-y-2 text-sm text-on-surface-variant">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[14px] text-primary">id_card</span>
                        {t('experience.deliverable1')}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[14px] text-primary">edit_note</span>
                        {t('experience.deliverable2')}
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-4">
                      <span className="px-3 py-1 text-[10px] font-label border border-outline-variant/30 text-tertiary rounded-full uppercase tracking-widest">React</span>
                      <span className="px-3 py-1 text-[10px] font-label border border-outline-variant/30 text-tertiary rounded-full uppercase tracking-widest">Airtable</span>
                      <span className="px-3 py-1 text-[10px] font-label border border-outline-variant/30 text-tertiary rounded-full uppercase tracking-widest">JavaScript</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bento Grid Stats */}
        <section className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card md:col-span-2 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-500"></div>
            <h4 className="font-headline text-2xl font-bold mb-4">{t('experience.projectPortfolio')}</h4>
            <div className="flex flex-wrap gap-8 items-end">
              <div>
                <span className="block text-4xl font-bold text-secondary font-headline">03</span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant font-label">{t('experience.webProjects')}</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-primary font-headline">03</span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant font-label">{t('experience.securityProjects')}</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-tertiary font-headline">6+</span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant font-label">{t('experience.totalProjects')}</span>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              <h4 className="font-headline text-xl font-bold mb-2">ITESM · CS&amp;T</h4>
              <p className="text-sm text-on-surface-variant">{t('experience.itesmDesc')}</p>
            </div>
            <div className="pt-6">
              <a
                href="https://linkedin.com/in/isaac-HDz00"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-primary text-on-primary py-3 rounded-lg font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all active:scale-[0.98]"
              >
                {t('experience.contactMe')}
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Experience;
