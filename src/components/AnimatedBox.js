import { useRef, useState } from 'react';

import { useFrame } from '@react-three/fiber';
import { useSpring, animated, config } from '@react-spring/three';

const AnimatedBox = () => {
    const [active, setActive] = useState();
    const myMesh = useRef();

    useFrame(({ clock }) => {
        const a = Math.sin(clock.getElapsedTime());
        // console.log(`elapsedTime: ${a}`)
        myMesh.current.rotation.x = a;
        myMesh.current.rotation.y = a;
    });

    const { scale } = useSpring({
        scale: active ? 1.5 : 1,
        config: config.wobbly
    });

    return (
        <>
            <animated.mesh
                scale={scale}
                onClick={() => setActive(!active)}
                ref={myMesh}>
                <boxBufferGeometry />
                <meshPhongMaterial color="royalblue" />
            </animated.mesh>
        </>
    )
}

export default AnimatedBox;
