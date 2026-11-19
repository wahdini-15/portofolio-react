import { useEffect, useState } from 'react';
import { FaFolderOpen, FaEnvelope, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import avatar from '../assets/avatar.jpg';
import './Hero.css';

const roles = ['Aspiring Web Developer', 'Informatics Engineering Student', 'Front-End Enthusiast'];

export default function Hero() {
  const [text, setText] = useState('');

  // Efek mengetik: ketik, tahan sebentar, hapus, ganti role
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const type = () => {
      const current = roles[roleIndex];
      setText(current.slice(0, charIndex));

      let delay = deleting ? 40 : 80;

      if (!deleting && charIndex === current.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 400;
      } else {
        charIndex += deleting ? -1 : 1;
      }

      timer = setTimeout(type, delay);
    };

    type();
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <span className="blob blob-1" aria-hidden="true"></span>
      <span className="blob blob-2" aria-hidden="true"></span>
      <span className="blob blob-3" aria-hidden="true"></span>
      <div className="petals" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="petal"
            style={{
              left: `${(i * 8.3) % 100}%`,
              animationDelay: `${(i * 0.9) % 8}s`,
              animationDuration: `${7 + (i % 5)}s`,
            }}
          >
            ✿
          </span>
        ))}
      </div>
      <div className="floating-icons" aria-hidden="true">
        <FaHtml5 className="fi fi-1" />
        <FaCss3Alt className="fi fi-2" />
        <FaJs className="fi fi-3" />
        <FaReact className="fi fi-4" />
        <FaGitAlt className="fi fi-5" />
      </div>

      <div className="container hero__content">
        <span className="hero__badge">👋 Halo, selamat datang!</span>

        <div className="hero__photo-wrap">
          <img src={avatar} alt="Foto profil Wahdini Annafila" className="hero__photo" />
        </div>

        <h1 className="hero__name">Wahdini Annafila</h1>

        <p className="hero__role">
          <span>{text}</span>
          <span className="cursor" aria-hidden="true">
            |
          </span>
        </p>

        <p className="hero__sub">Aspiring Web Developer | Informatics Engineering Student at Universitas Pamulang</p>

        <div className="hero__cta">
          <a className="btn-pink" href="#projects">
            <FaFolderOpen /> Lihat Project
          </a>
          <a className="btn-ghost" href="#contact">
            <FaEnvelope /> Hubungi Saya
          </a>
        </div>
      </div>

      <svg className="wave" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
        <path
          fill="#fff"
          d="M0,160L20,165.3C40,171,80,181,120,165.3C160,149,200,107,240,101.3C280,96,320,128,360,154.7C400,181,440,203,480,208C520,213,560,203,600,176C640,149,680,107,720,112C760,117,800,171,840,192C880,213,920,203,960,213.3C1000,224,1040,256,1080,240C1120,224,1160,160,1200,122.7C1240,85,1280,75,1320,58.7C1360,43,1400,21,1420,10.7L1440,0L1440,320L0,320Z"
        />
      </svg>
    </section>
  );
}
