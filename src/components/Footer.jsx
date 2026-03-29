import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="full-width py-12 bg-transparent mt-auto relative z-10 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 border-t border-[#e6feff]/5 opacity-80 hover:opacity-100 transition-all">
        <div className="py-8 flex flex-col gap-2 mb-6 md:mb-0 text-center md:text-left">
          <span className="font-['Space_Grotesk'] text-[#bec2ff] font-bold tracking-widest text-sm">ISAAC_HDZ</span>
          <span className="font-['Inter'] text-xs font-light tracking-widest text-[#e6feff]/40 uppercase mt-1">{t('footer.copyright')}</span>
        </div>

        <div className="flex gap-8 items-center py-8">
          <a href="https://github.com/IsaacGodd" target="_blank" rel="noopener noreferrer" className="font-['Inter'] text-xs font-light tracking-widest text-[#e6feff]/40 hover:text-[#e6feff] transition-all uppercase">GitHub</a>
          <a href="https://linkedin.com/in/isaac-HDz00" target="_blank" rel="noopener noreferrer" className="font-['Inter'] text-xs font-light tracking-widest text-[#e6feff]/40 hover:text-[#e6feff] transition-all uppercase">LinkedIn</a>
          <a href="https://linkedin.com/in/isaac-HDz00" target="_blank" rel="noopener noreferrer" className="font-['Inter'] text-xs font-light tracking-widest text-[#e6feff]/40 hover:text-[#e6feff] transition-all uppercase">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
