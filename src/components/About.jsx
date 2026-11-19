import { FaCode, FaGraduationCap, FaRocket } from 'react-icons/fa';
import Reveal from './Reveal';
import './About.css';
import Stats from './Stats';

const cards = [
  { icon: <FaCode />, title: 'Fokus Saat Ini', text: 'Front-End Web Development' },
  { icon: <FaGraduationCap />, title: 'Pendidikan', text: 'Teknik Informatika, Universitas Pamulang' },
  { icon: <FaRocket />, title: 'Cara Belajar', text: 'Bereksperimen dengan kode dan mendokumentasikan progres' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <Reveal>
          <h2 className="section-title">About Me</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="about__text">
            Sedang mendalami dunia Front-End Web Development dari nol. Saya memiliki antusiasme tinggi untuk mempelajari bagaimana membangun website yang bersih dan fungsional. Saat ini, fokus utama saya adalah bereksperimen dengan kode dan
            mendokumentasikan setiap progres belajar sebagai bagian dari perjalanan saya berkembang di industri teknologi.
          </p>
        </Reveal>

        <div className="about__cards">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.15}>
              <div className="info-card">
                <div className="info-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Stats />
      </div>

      <svg className="wave" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
        <path
          fill="#f8bcc4"
          d="M0,192L34.3,197.3C68.6,203,137,213,206,213.3C274.3,213,343,203,411,202.7C480,203,549,213,617,192C685.7,171,754,117,823,128C891.4,139,960,213,1029,213.3C1097.1,213,1166,139,1234,101.3C1302.9,64,1371,64,1406,64L1440,64L1440,320L0,320Z"
        />
      </svg>
    </section>
  );
}
