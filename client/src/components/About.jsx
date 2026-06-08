import { useEffect, useRef } from 'react';

const timeline = [
  {
    year: '2024',
    title: 'Started Web Development Journey',
    description: 'Began learning React, Node.js, and building full-stack applications.',
  },
  {
    year: '2023',
    title: 'Data Analytics Focus',
    description: 'Developed skills in Python, SQL, Power BI, and Excel for data-driven insights.',
  },
  {
    year: '2022',
    title: 'Programming Foundations',
    description: 'Mastered core programming concepts with Java and object-oriented design.',
  },
];

function About() {
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
    <section id="about" className="about section" ref={sectionRef}>
      <div className="container">
        <h2 className="section__title fade-in">About Me</h2>
        <p className="section__subtitle fade-in">
          Get to know more about my background and aspirations
        </p>

        <div className="about__grid">
          {/* Professional Summary */}
          <div className="about__card fade-in">
            <div className="about__card-icon">📋</div>
            <h3 className="about__card-title">Professional Summary</h3>
            <p className="about__card-text">
              I am a motivated and detail-oriented aspiring Data Analyst and Full Stack
              Developer with a strong foundation in programming, data analysis, and web
              development. I enjoy solving complex problems, building scalable applications,
              and turning raw data into meaningful insights. My passion lies at the
              intersection of technology and analytics, where I can create impactful
              solutions that drive decision-making.
            </p>
          </div>

          {/* Education Card */}
          <div className="about__card fade-in">
            <div className="about__card-icon">🎓</div>
            <h3 className="about__card-title">Education</h3>
            <div className="about__education">
              <h4>Bachelor's Degree in Computer Science</h4>
              <p className="about__education-institution">University Name</p>
              <p className="about__education-year">2020 – 2024</p>
              <p className="about__card-text">
                Focused on software engineering, database management, data structures,
                algorithms, and statistical analysis. Completed projects in web development,
                data analytics, and machine learning fundamentals.
              </p>
            </div>
          </div>

          {/* Career Objective */}
          <div className="about__card fade-in">
            <div className="about__card-icon">🎯</div>
            <h3 className="about__card-title">Career Objective</h3>
            <p className="about__card-text">
              To secure a challenging position as a Data Analyst or Full Stack Developer
              where I can leverage my technical skills in Python, SQL, Java, React, and
              Node.js to contribute to innovative projects. I aim to continuously grow
              my expertise in data visualization, cloud technologies, and modern web
              frameworks while delivering high-quality, user-centric solutions.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="about__timeline fade-in">
          <h3 className="about__timeline-title">My Journey</h3>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline__item">
                <div className="timeline__dot"></div>
                <div className="timeline__content">
                  <span className="timeline__year">{item.year}</span>
                  <h4 className="timeline__heading">{item.title}</h4>
                  <p className="timeline__text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
