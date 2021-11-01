import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const AnimatedBox = () => {
    const myMesh = useRef();

    useFrame(({ clock }) => {
        const a = Math.sin(clock.getElapsedTime());
        // console.log(`elapsedTime: ${a}`)
        myMesh.current.rotation.x = a;
        myMesh.current.rotation.y = a;
    })

    return (
        <>
            <mesh ref={myMesh}>
                <boxBufferGeometry />
                <meshPhongMaterial color="royalblue" />
            </mesh>
        </>
    )
}

export default AnimatedBox;
