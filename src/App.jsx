import { useEffect } from 'react';
import './styles/global.css';
import './styles/app.css';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';

export default function App() {
  const { isPlaying, speed, toggle, changeSpeed } = useAnimation();

  // 키보드 접근성: Space로 시작/정지, 1/2/3으로 속도 변경
  useEffect(() => {
    const handleKey = (e) => {
      if (e.target.tagName === 'BUTTON') return;
      if (e.code === 'Space') { e.preventDefault(); toggle(); }
      if (e.key === '1') changeSpeed(0.5);
      if (e.key === '2') changeSpeed(1);
      if (e.key === '3') changeSpeed(2);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [toggle, changeSpeed]);

  return (
    <main className="app" role="main" aria-label="춤추는 고양이 페이지">
      <h1 className="title">
        <span className="title-emoji">🐱</span> 춤추는 고양이
      </h1>
      <p className="subtitle">
        클릭하거나 <kbd>Space</kbd>를 눌러 춤을 멈추거나 시작하세요!
      </p>

      <DancingCat isPlaying={isPlaying} speed={speed} />

      <AnimationControls
        isPlaying={isPlaying}
        speed={speed}
        onToggle={toggle}
        onSpeedChange={changeSpeed}
      />

      <p className="keyboard-hint" aria-hidden="true">
        키보드: <kbd>Space</kbd> 시작/정지 · <kbd>1</kbd> 느리게 · <kbd>2</kbd> 보통 · <kbd>3</kbd> 빠르게
      </p>
    </main>
  );
}
