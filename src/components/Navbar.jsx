import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  // 1. Bayangan navbar saat halaman di-scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 2. Link menyala sesuai section yang sedang terlihat
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand">
          Portofolio
        </a>

        <button className="navbar__toggle" onClick={() => setOpen(!open)} aria-label="Buka menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`navbar__menu ${open ? 'open' : ''}`}>
          {links.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={active === id && id !== 'home' ? 'active' : ''} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
