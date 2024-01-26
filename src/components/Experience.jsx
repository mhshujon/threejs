import {OrbitControls, Stage} from "@react-three/drei";
import Table from "./Table.jsx";

export const Experience = () => {
    return (
        <>
            <Stage
                intensity={1.5}
                environment={`city`}
                shadows={{
                    type: `accumulative`,
                    color: `#d9afd9`,
                    colorBlend: 2,
                    opacity: 2
                }}
                adjustCamera={0.9}
            >
                <Table/>
            </Stage>
            <OrbitControls
                makeDefault
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
            />
        </>
    );
};
