import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';
import PageTransition from '../components/PageTransition';

const Home = () => {
  const [showContact, setShowContact] = useState(false);
  const { t } = useTranslation();

  return (
    <PageTransition>
      {/* Subtle Background Blobs */}
      <div className="glow-blob bg-primary w-[500px] h-[500px] -top-20 -left-20"></div>
      <div className="glow-blob bg-tertiary w-[400px] h-[400px] top-1/2 -right-20"></div>
      <div className="glow-blob bg-secondary w-[300px] h-[300px] bottom-0 left-1/3"></div>

      <main className="relative z-10 min-h-screen pt-32 pb-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">

          {/* Hero Content Left */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-tertiary/20 bg-tertiary/5 w-fit">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span className="text-xs font-label uppercase tracking-[0.2em] text-tertiary">{t('home.badge')}</span>
            </div>

            <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter text-on-surface leading-[0.95]">
              {t('home.title')} <span className="text-primary italic">{t('home.titleHighlight')}</span>
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl font-light leading-relaxed">
              {t('home.description')}
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
              <NavLink
                to="/projects"
                className="px-6 py-3 md:px-8 md:py-4 bg-primary text-on-primary font-bold rounded-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_24px_rgba(190,194,255,0.3)] text-center w-full sm:w-auto"
              >
                {t('home.viewProjects')}
              </NavLink>
              <button
                onClick={() => setShowContact(true)}
                className="px-6 py-3 md:px-8 md:py-4 glass-card text-on-surface font-medium rounded-lg hover:bg-surface-bright/40 transition-all flex items-center justify-center gap-2 border border-outline-variant/20 cursor-pointer w-full sm:w-auto"
              >
                <span className="material-symbols-outlined text-secondary">person</span>
                {t('home.contactMe')}
              </button>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
              <a
                href="/cv/Isaac_Resume_Web.pdf"
                download
                className="px-5 py-2.5 bg-surface-container-high/60 text-on-surface-variant hover:text-on-surface text-sm font-medium rounded-lg hover:bg-surface-bright transition-all flex items-center justify-center gap-2 border border-outline-variant/20 cursor-pointer w-full sm:w-auto"
              >
                <span className="material-symbols-outlined text-primary text-base">download</span>
                {t('home.downloadWebCV')}
              </a>
              <a
                href="/cv/Isaac_Resume_Cyber.pdf"
                download
                className="px-5 py-2.5 bg-surface-container-high/60 text-on-surface-variant hover:text-on-surface text-sm font-medium rounded-lg hover:bg-surface-bright transition-all flex items-center justify-center gap-2 border border-outline-variant/20 cursor-pointer w-full sm:w-auto"
              >
                <span className="material-symbols-outlined text-secondary text-base">download</span>
                {t('home.downloadCyberCV')}
              </a>
            </div>

            {/* Tech Stack Section */}
            <div className="pt-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mb-6 font-semibold">{t('home.mainStack')}</p>
              <div className="flex flex-wrap gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex flex-col items-center gap-2 group">
                  <span className="material-symbols-outlined text-3xl group-hover:text-primary transition-colors">code</span>
                  <span className="text-[10px] font-mono">React</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <span className="material-symbols-outlined text-3xl group-hover:text-primary transition-colors">javascript</span>
                  <span className="text-[10px] font-mono">Node.js</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <span className="material-symbols-outlined text-3xl group-hover:text-secondary transition-colors">storage</span>
                  <span className="text-[10px] font-mono">PostgreSQL</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <span className="material-symbols-outlined text-3xl group-hover:text-secondary transition-colors">terminal</span>
                  <span className="text-[10px] font-mono">Python</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <span className="material-symbols-outlined text-3xl group-hover:text-tertiary transition-colors">shield</span>
                  <span className="text-[10px] font-mono">Kali Linux</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Terminal Card Right */}
          <div className="lg:col-span-5 relative w-full aspect-square md:w-3/4 lg:w-full">
            {/* Decorative Frames */}
            <div className="absolute -inset-4 border border-primary/10 rounded-3xl -rotate-3"></div>
            <div className="absolute -inset-4 border border-secondary/10 rounded-3xl rotate-2"></div>

            {/* Main Glass Container */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden glass-card p-4">
              <div className="h-full w-full rounded-xl overflow-hidden relative bg-surface-container-lowest border border-outline-variant/20 font-mono flex flex-col">
                {/* Terminal bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-surface-container border-b border-outline-variant/20 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                  <span className="text-[10px] text-on-surface-variant ml-2 tracking-wide">{t('home.terminalPrompt')}</span>
                </div>
                {/* Terminal content */}
                <div className="p-6 text-sm space-y-3 flex-grow">
                  <div>
                    <span className="text-secondary">$ </span>
                    <span className="text-on-surface-variant">whoami</span>
                  </div>
                  <div className="pl-4 text-on-surface font-medium">Isaac Hernández Pérez</div>
                  <div>
                    <span className="text-secondary">$ </span>
                    <span className="text-on-surface-variant">cat role.txt</span>
                  </div>
                  <div className="pl-4 text-primary">{t('home.terminalRole')}</div>
                  <div>
                    <span className="text-secondary">$ </span>
                    <span className="text-on-surface-variant">location</span>
                  </div>
                  <div className="pl-4 text-on-surface">Monterrey, NL, México</div>
                  <div>
                    <span className="text-secondary">$ </span>
                    <span className="text-on-surface-variant">education</span>
                  </div>
                  <div className="pl-4 text-tertiary">ITESM · CS&amp;T [Jun 2026]</div>
                  <div>
                    <span className="text-secondary">$ </span>
                    <span className="text-on-surface-variant">contact</span>
                  </div>
                  <div className="pl-4 text-on-surface text-xs break-all">isaac.hdz.perez24@gmail.com</div>
                  <div className="flex items-center gap-1 pt-2">
                    <span className="text-secondary">$ </span>
                    <span className="w-2 h-4 bg-secondary animate-pulse inline-block ml-1"></span>
                  </div>
                </div>
                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-6 py-4 border-t border-outline-variant/20 bg-surface-container/60 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-primary font-mono text-xs">github.com/IsaacGodd</p>
                      <p className="text-on-surface font-headline font-bold text-sm mt-0.5">{t('home.identityVerified')}</p>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl border border-secondary/20 shadow-xl hidden md:block">
              <p className="text-[10px] text-secondary font-mono tracking-tighter uppercase">{t('home.graduation')}</p>
              <p className="text-2xl font-headline font-bold text-on-surface">Jun 2026</p>
            </div>
            <div className="absolute top-12 -right-8 glass-card p-4 rounded-xl border border-tertiary/20 shadow-xl hidden md:block">
              <p className="text-[10px] text-tertiary font-mono tracking-tighter uppercase">{t('home.projects')}</p>
              <p className="text-2xl font-headline font-bold text-on-surface">7+</p>
            </div>
          </div>

        </div>
      </main>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setShowContact(false)}>
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card border border-outline-variant/20 rounded-2xl shadow-[0_0_64px_rgba(190,194,255,0.12)] animate-[fadeIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors z-10 cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="grid md:grid-cols-5 gap-0">
              {/* Left: Social Links */}
              <div className="md:col-span-2 p-6 border-b md:border-b-0 md:border-r border-outline-variant/20 flex flex-col justify-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4 font-semibold">{t('home.connectWithMe')}</p>
                <div className="flex flex-col gap-2">
                  <a href="https://linkedin.com/in/isaac-HDz00" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface-bright/30 transition-colors group">
                    <svg className="w-5 h-5 text-primary group-hover:text-[#0A66C2] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    <span className="text-sm text-on-surface">LinkedIn</span>
                  </a>
                  <a href="https://github.com/IsaacGodd" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface-bright/30 transition-colors group">
                    <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    <span className="text-sm text-on-surface">GitHub</span>
                  </a>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="md:col-span-3 p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4 font-semibold">{t('home.sendMessage')}</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </PageTransition>
  );
};

export default Home;
