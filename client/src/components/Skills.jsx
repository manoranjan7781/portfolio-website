import { useEffect, useRef } from 'react';

const skills = [
  { name: 'HTML', level: 90, icon: '🌐' },
  { name: 'CSS', level: 85, icon: '🎨' },
  { name: 'JavaScript', level: 85, icon: '⚡' },
  { name: 'React.js', level: 80, icon: '⚛️' },
  { name: 'Node.js', level: 75, icon: '🟢' },
  { name: 'Express.js', level: 75, icon: '🚀' },
  { name: 'MongoDB', level: 70, icon: '🍃' },
  { name: 'Python', level: 85, icon: '🐍' },
  { name: 'Java', level: 80, icon: '☕' },
  { name: 'SQL', level: 85, icon: '🗄️' },
  { name: 'Git', level: 80, icon: '📦' },
  { name: 'GitHub', level: 85, icon: '🐙' },
  { name: 'Power BI', level: 75, icon: '📊' },
  { name: 'Excel', level: 90, icon: '📈' },
];

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in--visible');

            // Animate progress bars when visible
            const bars = entry.target.querySelectorAll('.skill-card__progress-fill');
            bars.forEach((bar) => {
              const width = bar.getAttribute('data-level');
              setTimeout(() => {
                bar.style.width = `${width}%`;
              }, 300);
            });
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
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="container">
        <h2 className="section__title fade-in">Technical Skills</h2>
        <p className="section__subtitle fade-in">
          Technologies and tools I work with
        </p>

        <div className="skills__grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="skill-card__header">
                <span className="skill-card__icon">{skill.icon}</span>
                <h3 className="skill-card__name">{skill.name}</h3>
                <span className="skill-card__level">{skill.level}%</span>
              </div>
              <div className="skill-card__progress">
                <div
                  className="skill-card__progress-fill"
                  data-level={skill.level}
                  style={{ width: '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
