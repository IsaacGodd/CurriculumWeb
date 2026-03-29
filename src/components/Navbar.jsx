import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const desktopNavLink = ({ isActive }) =>
    `font-['Space_Grotesk'] tracking-tight transition-all ${
      isActive
        ? 'text-[#bec2ff] font-bold border-b border-[#bec2ff]'
        : 'text-[#e6feff]/60 font-medium hover:text-[#e6feff]'
    }`;

  const mobileNavLink = ({ isActive }) =>
    `p-3 transition-colors active:scale-90 duration-150 ${
      isActive
        ? 'bg-[#bec2ff] text-[#10141a] rounded-full'
        : 'text-[#e6feff]/50 hover:text-[#e6feff]'
    }`;

  const mobileIconStyle = ({ isActive }) =>
    isActive ? { fontVariationSettings: "'FILL' 1" } : {};

  return (
    <>
      {/* Top Navigation (Desktop & Shell) */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-5xl rounded-full border border-[#e6feff]/20 bg-[#10141a]/40 backdrop-blur-[20px] shadow-[0_0_48px_rgba(190,194,255,0.08)] flex justify-between items-center px-4 md:px-8 py-2 md:py-3 z-50 hover:backdrop-blur-[16px] hover:border-[#e6feff]/40 transition-all">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#bec2ff]">terminal</span>
          <span className="text-xl font-bold tracking-tighter text-[#bec2ff] font-headline">ISAAC_HDZ</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={desktopNavLink}>{t('nav.home')}</NavLink>
          <NavLink to="/experience" className={desktopNavLink}>{t('nav.timeline')}</NavLink>
          <NavLink to="/projects" className={desktopNavLink}>{t('nav.projects')}</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#e6feff]/20 hover:border-[#e6feff]/40 transition-all cursor-pointer group"
          >
            <span className="material-symbols-outlined text-[14px] text-[#e6feff]/40 group-hover:text-[#e6feff]/70 transition-colors">translate</span>
            <span className="text-[10px] font-mono tracking-widest text-[#e6feff]/40 group-hover:text-[#e6feff]/70 transition-colors">
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </span>
          </button>
          <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#e6feff]"></div>
        </div>
      </header>

      {/* Bottom Navigation (Mobile) */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-fit rounded-full border border-[#e6feff]/20 bg-[#10141a]/40 backdrop-blur-[20px] shadow-[0_0_32px_rgba(190,194,255,0.05)] flex items-center gap-4 px-2 py-2 z-50">
        <NavLink to="/" className={mobileNavLink}>
          {({ isActive }) => <span className="material-symbols-outlined" style={mobileIconStyle({ isActive })}>home</span>}
        </NavLink>
        <NavLink to="/experience" className={mobileNavLink}>
          {({ isActive }) => <span className="material-symbols-outlined" style={mobileIconStyle({ isActive })}>timeline</span>}
        </NavLink>
        <NavLink to="/projects" className={mobileNavLink}>
          {({ isActive }) => <span className="material-symbols-outlined" style={mobileIconStyle({ isActive })}>grid_view</span>}
        </NavLink>
        <button onClick={toggleLang} className="p-3 text-[#e6feff]/50 hover:text-[#e6feff] transition-colors cursor-pointer">
          <span className="material-symbols-outlined">translate</span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
