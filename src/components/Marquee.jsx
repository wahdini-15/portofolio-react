import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import './Marquee.css';

const items = [
  { icon: <FaHtml5 />, name: 'HTML' },
  { icon: <FaCss3Alt />, name: 'CSS' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <FaGithub />, name: 'GitHub' },
];

export default function Marquee() {
  // Daftar digandakan supaya putarannya mulus tanpa jeda
  const loop = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((item, i) => (
          <span key={i} className="marquee__item">
            {item.icon} {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}
