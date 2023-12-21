import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from "./components/Box";

export default function App() {
    return (
        <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Box position={[1.2, 0, 0]} shape={[20, 5, 1]} />
            <Box position={[0, 0, 10]} shape={[1, 5, 1]} />
            <OrbitControls />
        </Canvas>
    )
}