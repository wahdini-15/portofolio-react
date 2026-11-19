import { useEffect, useRef, useState } from 'react';
import './Stats.css';

const stats = [
  { value: 3, suffix: '+', label: 'Project dibuat' },
  { value: 5, suffix: '', label: 'Teknologi dipelajari' },
  { value: 100, suffix: '%', label: 'Semangat belajar' },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1500;
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          setN(Math.round(p * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div key={s.label} className="stats__item">
          <strong>
            <Counter value={s.value} suffix={s.suffix} />
          </strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
