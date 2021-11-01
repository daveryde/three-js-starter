import { Canvas } from '@react-three/fiber';

import AnimatedBox from './components/AnimatedBox';

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <AnimatedBox />
        <ambientLight intensity={0.1} />
        <directionalLight />
      </Canvas>
    </div>
  );
}

export default App;
