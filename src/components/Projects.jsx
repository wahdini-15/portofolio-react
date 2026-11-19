import { FaArrowRight } from 'react-icons/fa';
import Reveal from './Reveal';
import './Projects.css';

const projects = [
  { title: 'Nama Project 1', desc: 'Deskripsi singkat project kamu.', tags: ['HTML', 'CSS'], link: '#' },
  { title: 'Nama Project 2', desc: 'Deskripsi singkat project kamu.', tags: ['Bootstrap', 'CSS'], link: '#' },
  { title: 'Nama Project 3', desc: 'Deskripsi singkat project kamu.', tags: ['HTML', 'JavaScript'], link: '#' },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <Reveal>
          <h2 className="section-title">My Projects</h2>
        </Reveal>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.15}>
              <article className="project-card">
                <div className="project-card__thumb"></div>
                <div className="project-card__body">
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                    Lihat Project <FaArrowRight />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <svg className="wave" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
        <path
          fill="#ffffff"
          d="M0,192L34.3,197.3C68.6,203,137,213,206,213.3C274.3,213,343,203,411,202.7C480,203,549,213,617,192C685.7,171,754,117,823,128C891.4,139,960,213,1029,213.3C1097.1,213,1166,139,1234,101.3C1302.9,64,1371,64,1406,64L1440,64L1440,320L0,320Z"
        />
      </svg>
    </section>
  );
}
