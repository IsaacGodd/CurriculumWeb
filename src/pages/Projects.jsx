import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import { getWebProjects, getCyberProjects } from '../data/projectsData';
import useLightbox from '../hooks/useLightbox';
import Lightbox from '../components/Lightbox';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import TetrapakSpotlight from '../components/spotlights/TetrapakSpotlight';
import WelcomeHubSpotlight from '../components/spotlights/WelcomeHubSpotlight';
import AwaqSpotlight from '../components/spotlights/AwaqSpotlight';
import CyberLabSpotlight from '../components/spotlights/CyberLabSpotlight';
import VelatiaSpotlight from '../components/spotlights/VelatiaSpotlight';
import CaritasSpotlight from '../components/spotlights/CaritasSpotlight';

const spotlightMap = {
  'spotlight-tetrapak': TetrapakSpotlight,
  'spotlight-welcomehub': WelcomeHubSpotlight,
  'spotlight-awaq': AwaqSpotlight,
  'spotlight-cyberlab': CyberLabSpotlight,
  'spotlight-velatia': VelatiaSpotlight,
  'spotlight-caritas': CaritasSpotlight,
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [selectedProject, setSelectedProject] = useState(null);
  const { lightbox, openLightbox, closeLightbox } = useLightbox();
  const { t } = useTranslation();

  const webProjects = getWebProjects(t);
  const cyberProjects = getCyberProjects(t);
  const projects = activeTab === 'web' ? webProjects : cyberProjects;

  const SpotlightComponent = selectedProject ? spotlightMap[selectedProject.spotlightId] : null;

  return (
    <PageTransition>
      <Lightbox lightbox={lightbox} onClose={closeLightbox} />

      {/* Project Spotlight Modal */}
      <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {SpotlightComponent && <SpotlightComponent onImageClick={openLightbox} />}
      </ProjectModal>

      <main className="pt-32 pb-40 px-4 md:px-6 max-w-7xl mx-auto cyber-glow">

        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-secondary" />
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary">{t('projects.sectionLabel')}</span>
          </div>
          <h1 className="font-headline text-4xl md:text-7xl font-bold text-on-surface tracking-tighter mb-6">
            {t('projects.heading')} <span className="text-primary">{t('projects.headingHighlight')}</span>
          </h1>
          <p className="max-w-2xl text-on-surface-variant text-base md:text-lg leading-relaxed">
            {t('projects.description')}
          </p>
        </header>

        {/* Filter Tabs */}
        <section className="flex flex-col sm:flex-row gap-4 mb-12">
          <button
            onClick={() => setActiveTab('web')}
            className={`flex items-center justify-center gap-3 px-4 md:px-8 py-3 md:py-4 rounded-xl transition-all active:scale-95 w-full sm:w-auto ${
              activeTab === 'web'
                ? 'glass-card border border-primary/30'
                : 'bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/20'
            }`}
          >
            <span className={`material-symbols-outlined transition-colors ${activeTab === 'web' ? 'text-primary' : 'text-on-surface-variant'}`}>layers</span>
            <span className={`font-headline font-bold tracking-tight transition-colors ${activeTab === 'web' ? 'text-primary' : 'text-on-surface-variant'}`}>{t('projects.webTab')}</span>
            <span className={`px-2 py-0.5 rounded text-xs ${activeTab === 'web' ? 'bg-primary/10 text-primary' : 'bg-surface-variant text-on-surface-variant'}`}>
              {webProjects.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('cyber')}
            className={`flex items-center justify-center gap-3 px-4 md:px-8 py-3 md:py-4 rounded-xl transition-all active:scale-95 w-full sm:w-auto ${
              activeTab === 'cyber'
                ? 'glass-card border border-secondary/30'
                : 'bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/20'
            }`}
          >
            <span className={`material-symbols-outlined transition-colors ${activeTab === 'cyber' ? 'text-secondary' : 'text-on-surface-variant'}`}>shield</span>
            <span className={`font-headline font-bold tracking-tight transition-colors ${activeTab === 'cyber' ? 'text-secondary' : 'text-on-surface-variant'}`}>{t('projects.cyberTab')}</span>
            <span className={`px-2 py-0.5 rounded text-xs ${activeTab === 'cyber' ? 'bg-secondary/10 text-secondary' : 'bg-surface-variant text-on-surface-variant'}`}>
              {cyberProjects.length}
            </span>
          </button>
        </section>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onCertificateClick={openLightbox}
              onCardClick={setSelectedProject}
            />
          ))}
        </div>

      </main>
    </PageTransition>
  );
};

export default Projects;
