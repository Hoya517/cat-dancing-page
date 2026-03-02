import '../styles/controls.css';

const SPEEDS = [
  { label: '느리게', value: 0.5 },
  { label: '보통', value: 1 },
  { label: '빠르게', value: 2 },
];

export default function AnimationControls({ isPlaying, speed, onToggle, onSpeedChange }) {
  return (
    <div className="controls" role="group" aria-label="애니메이션 제어">
      <button
        className={`btn-toggle ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
        aria-pressed={isPlaying}
      >
        <span className="btn-icon">{isPlaying ? '⏸' : '▶'}</span>
        <span className="btn-label">{isPlaying ? '정지' : '시작'}</span>
      </button>

      <div className="speed-controls" role="group" aria-label="속도 선택">
        {SPEEDS.map(({ label, value }) => (
          <button
            key={value}
            className={`btn-speed ${speed === value ? 'active' : ''}`}
            onClick={() => onSpeedChange(value)}
            aria-label={`속도: ${label}`}
            aria-pressed={speed === value}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
