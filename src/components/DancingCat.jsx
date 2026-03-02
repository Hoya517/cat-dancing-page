import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

export default function DancingCat({ isPlaying, speed }) {
  const duration = (1 / speed).toFixed(2);

  const catStyle = {
    animationPlayState: isPlaying ? 'running' : 'paused',
    '--dance-duration': `${duration}s`,
  };

  return (
    <div className="dancing-cat-wrapper">
      <div className="stage">
        <div className="spotlight" />
        <div className="notes-container" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}>
          {['♪', '♫', '♩', '♬', '♪'].map((note, i) => (
            <span key={i} className={`note note-${i + 1}`} style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}>
              {note}
            </span>
          ))}
        </div>
        <div className="cat-container" style={catStyle}>
          <img
            src={catSvg}
            alt="춤추는 고양이"
            className="dancing-cat"
            style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
          />
          <div className="shadow" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }} />
        </div>
      </div>
    </div>
  );
}
