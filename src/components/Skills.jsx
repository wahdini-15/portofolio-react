import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import Reveal from './Reveal';
import './Skills.css';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML', level: 20 },
  { icon: <FaCss3Alt />, name: 'CSS', level: 20 },
  { icon: <FaJs />, name: 'JavaScript', level: 0 },
  { icon: <FaReact />, name: 'React', level: 0 },
  { icon: <FaGitAlt />, name: 'Git', level: 45 },
  { icon: <FaGithub />, name: 'GitHub', level: 55 },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Skills</h2>
        </Reveal>

        <div className="skills__grid">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.1}>
              <div className="skill-card">
                <div className="skill-card__icon">{s.icon}</div>
                <div className="skill-card__info">
                  <div className="skill-card__row">
                    <strong>{s.name}</strong>
                    <span>{s.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar__fill" style={{ width: `${s.level}%` }}></div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <svg className="wave" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
        <path
          fill="#f8bcc4"
          d="M0,192L34.3,192C68.6,192,137,192,206,170.7C274.3,149,343,107,411,122.7C480,139,549,213,617,218.7C685.7,224,754,160,823,160C891.4,160,960,224,1029,213.3C1097.1,203,1166,117,1234,122.7C1302.9,128,1371,224,1406,272L1440,320L1440,320L0,320Z"
        />
      </svg>
    </section>
  );
}
