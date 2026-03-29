import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project, onCertificateClick, onCardClick }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    if (onCardClick) onCardClick(project);
  };

  return (
    <article
      className="glass-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
      onClick={handleClick}
    >
      <div className="h-52 relative overflow-hidden flex-shrink-0">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
            <span className="material-symbols-outlined text-white/10 text-[100px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              {project.icon}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent pointer-events-none" />
        <span className="absolute top-3 right-3 text-[10px] font-mono bg-surface-container/70 text-on-surface-variant px-2 py-1 rounded-full backdrop-blur-sm uppercase tracking-widest">
          {project.date}
        </span>
        {project.youtube && (
          <a href={project.youtube} target="_blank" rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-red-600/90 hover:bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-full backdrop-blur-sm transition-colors">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            {t('projectCard.demo')}
          </a>
        )}
        {project.live && !project.youtube && (
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-emerald-600/90 hover:bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-full backdrop-blur-sm transition-colors">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>open_in_new</span>
            {t('projectCard.live')}
          </a>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded border border-tertiary/20 text-tertiary text-[10px] font-bold uppercase font-label">{tag}</span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-0.5 rounded border border-outline-variant/20 text-on-surface-variant text-[10px] font-label">+{project.tags.length - 3}</span>
          )}
        </div>

        <h3 className="font-headline text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed flex-1">{project.description}</p>

        <div className="flex items-center gap-3 mt-4 pt-3 border-t border-outline-variant/10 flex-shrink-0">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-primary font-bold text-[11px] uppercase tracking-widest hover:gap-2 transition-all">
            {t('projectCard.code')} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px] uppercase tracking-widest hover:text-emerald-300 transition-colors">
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              {t('projectCard.viewLive')}
            </a>
          )}
          {project.youtube && (
            <a href={project.youtube} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="ml-auto flex items-center gap-1.5 text-secondary font-bold text-[11px] uppercase tracking-widest hover:text-secondary/80 transition-colors">
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
              {t('projectCard.viewDemo')}
            </a>
          )}
          {project.certificate && onCertificateClick && (
            <button
              onClick={(e) => { e.stopPropagation(); onCertificateClick(project.certificate, t('projectCard.certificate')); }}
              className="ml-auto flex items-center gap-1.5 text-amber-400 font-bold text-[11px] uppercase tracking-widest hover:text-amber-300 transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              {t('projectCard.certificate')}
            </button>
          )}
          {/* Spotlight hint */}
          <span className="ml-auto material-symbols-outlined text-on-surface-variant/40 text-lg group-hover:text-primary/60 transition-colors">
            open_in_full
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
