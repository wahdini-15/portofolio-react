import { FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import Reveal from './Reveal';
import './Experience.css';

const experiences = [
  {
    icon: <FaLaptopCode />,
    period: '2026 – Sekarang',
    title: 'Belajar Front-End Web Development',
    place: 'Belajar mandiri',
    text: 'Membangun website portofolio dengan HTML, CSS, JavaScript, dan React, serta mendokumentasikan progres belajar.',
  },
  {
    icon: <FaGraduationCap />,
    period: 'Sekarang',
    title: 'Mahasiswa Teknik Informatika',
    place: 'Universitas Pamulang',
    text: 'Mempelajari dasar pemrograman dan pengembangan web.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Experience</h2>
        </Reveal>

        <div className="timeline">
          {experiences.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.15}>
              <article className="timeline__item">
                <div className="timeline__icon">{e.icon}</div>
                <div>
                  <span className="timeline__period">{e.period}</span>
                  <h3>{e.title}</h3>
                  <h4>{e.place}</h4>
                  <p>{e.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <svg className="wave" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
        <path
          fill="#ffffff"
          d="M0,192L34.3,192C68.6,192,137,192,206,170.7C274.3,149,343,107,411,122.7C480,139,549,213,617,218.7C685.7,224,754,160,823,160C891.4,160,960,224,1029,213.3C1097.1,203,1166,117,1234,122.7C1302.9,128,1371,224,1406,272L1440,320L1440,320L0,320Z"
        />
      </svg>
    </section>
  );
}
