import { useEffect, useRef } from 'react';

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in--visible');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // Placeholder resume download - replace with actual resume URL
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Manoranjan_Resume.pdf';
    alert('Resume download will be available once you upload your resume file.');
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg-shapes">
        <div className="hero__shape hero__shape--1"></div>
        <div className="hero__shape hero__shape--2"></div>
        <div className="hero__shape hero__shape--3"></div>
      </div>

      <div className="container hero__container fade-in" ref={heroRef}>
        <div className="hero__image-wrapper">
          <div className="hero__image-placeholder">
            <span className="hero__image-icon">👨‍💻</span>
          </div>
          <div className="hero__image-ring"></div>
        </div>

        <div className="hero__content">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">Manoranjan</h1>
          <h2 className="hero__title">
            Aspiring Data Analyst &amp; Full Stack Developer
          </h2>
          <p className="hero__intro">
            Passionate about Data Analytics, Python, SQL, Java, and Web Development.
          </p>

          <div className="hero__buttons">
            <button className="btn btn--primary" onClick={handleDownloadResume}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </button>
            <button className="btn btn--secondary" onClick={scrollToContact}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
