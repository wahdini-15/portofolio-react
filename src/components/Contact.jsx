import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import Reveal from './Reveal';
import './Contact.css';

const contacts = [
  { icon: <FaEnvelope />, label: 'Email', value: 'wahdiniannafila150@gmail.com', href: 'https://mail.google.com/mail/u/3/#inbox' },
  { icon: <FaGithub />, label: 'GitHub', value: 'wahdini-15', href: 'https://github.com/wahdini-15' },
  { icon: <FaInstagram />, label: 'Instagram', value: 'Wahdini Annafila', href: 'https://www.instagram.com/_wahdini.annafila?dlrf=azd1Y2M5NHVvdDkx' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', value: 'Wahdini Annafila', href: 'https://www.linkedin.com/in/wahdini-annafila-061259345/' },
  { icon: <FaWhatsapp />, label: 'WhatsApp', value: '+62 896-5300-2297', href: 'https://wa.me/6289653002297' },
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
          <div className="contact__grid">
            {contacts.map((c) => (
              <a key={c.label} className="contact-card" href={c.href} target="_blank" rel="noopener noreferrer">
                <span className="contact-card__icon">{c.icon}</span>
                <span className="contact-card__text">
                  <small>{c.label}</small>
                  <strong>{c.value}</strong>
                </span>
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
