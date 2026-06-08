import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'Task Management Application',
    description:
      'A full-featured CRUD application with user authentication, task categorization, priority levels, and real-time status updates. Built with secure login and role-based access control.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com',
    demo: 'https://example.com',
    icon: '✅',
    color: '#6366f1',
  },
  {
    title: 'Student Database Management',
    description:
      'A comprehensive Python + MySQL project for managing student records, grades, attendance, and generating analytical reports with data visualization capabilities.',
    technologies: ['Python', 'MySQL', 'Pandas', 'Matplotlib'],
    github: 'https://github.com',
    demo: 'https://example.com',
    icon: '🎓',
    color: '#8b5cf6',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A responsive MERN stack portfolio website featuring smooth scrolling navigation, contact form with MongoDB integration, and modern UI with animations.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'CSS3'],
    github: 'https://github.com',
    demo: 'https://example.com',
    icon: '💼',
    color: '#06b6d4',
  },
  {
    title: 'LeetCode Solutions Repository',
    description:
      'A curated collection of coding solutions in Java covering data structures, algorithms, dynamic programming, and system design problems with detailed explanations.',
    technologies: ['Java', 'Data Structures', 'Algorithms', 'Git'],
    github: 'https://github.com',
    demo: 'https://example.com',
    icon: '💻',
    color: '#f59e0b',
  },
];

function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in--visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects section" ref={sectionRef}>
      <div className="container">
        <h2 className="section__title fade-in">Projects</h2>
        <p className="section__subtitle fade-in">
          A showcase of my recent work and side projects
        </p>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div
                className="project-card__image"
                style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}
              >
                <span className="project-card__icon">{project.icon}</span>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>

                <div className="project-card__tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-card__tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--small btn--outline"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--small btn--primary"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
