import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import Reveal from './Reveal';
import './Contact.css';

const contacts = [
  { icon: <FaEnvelope />, label: 'Email', href: 'https://mail.google.com/mail/u/3/#inbox' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/wahdini-annafila-061259345/' },
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/wahdini-15' },
  { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/_wahdini.annafila?dlrf=azd1Y2M5NHVvdDkx' },
  { icon: <FaWhatsapp />, label: 'WhatsApp', href: 'https://wa.me/6289653002297' },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Contact Me</h2>
          <p className="contact__intro">Mari terhubung! Klik salah satu di bawah ini untuk menghubungi saya atau melihat karya saya.</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="contact__icons">
            {contacts.map((c) => (
              <a key={c.label} className="contact-icon" href={c.href} target="_blank" rel="noopener noreferrer" aria-label={c.label} title={c.label}>
                {c.icon}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <svg className="wave" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
        <path
          fill="#db7093"
          d="M0,192L34.3,170.7C68.6,149,137,107,206,117.3C274.3,128,343,192,411,202.7C480,213,549,171,617,160C685.7,149,754,171,823,192C891.4,213,960,235,1029,218.7C1097.1,203,1166,149,1234,154.7C1302.9,160,1371,224,1406,256L1440,288L1440,320L0,320Z"
        />
      </svg>
    </section>
  );
}
