import { useEffect, useState } from 'react';
import { AnimationGallery, AnimationExperience } from './Animations.jsx';
import './styles.css';

function readRoute() {
  const hash = window.location.hash;
  if (hash.startsWith('#animation-')) return hash.replace('#animation-', '');
  return null;
}

export default function App() {
  const [active, setActive] = useState(() => readRoute());
  const [paused, setPaused] = useState(false);
  const [replay, setReplay] = useState(0);

  useEffect(() => {
    const sync = () => { setActive(readRoute()); setPaused(false); };
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  const open = (type) => { setPaused(false); setActive(type); window.location.hash = `animation-${type}`; window.scrollTo(0, 0); };
  const back = () => { setActive(null); setPaused(false); window.location.hash = 'animations'; window.scrollTo(0, 0); };

  if (active && ['cricket', 'water', 'carrom', 'photosynthesis'].includes(active)) {
    return <AnimationExperience key={`${active}-${replay}`} type={active} paused={paused} onPause={() => setPaused(v => !v)} onReplay={() => { setPaused(false); setReplay(v => v + 1); }} onBack={back} />;
  }
  return <AnimationGallery onOpen={open} />;
}
