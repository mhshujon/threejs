import {useGLTF} from "@react-three/drei";
import {useConfigurator} from "../context/Configurator.jsx";
import {useEffect} from "react";
import * as Three from "three";

const Table = (props) => {
    const {nodes, materials} = useGLTF(`./models/Table.gltf`)

    const {legs, legsColor, tableWidth} = useConfigurator();

    const tableWidthScale = tableWidth / 100;

    useEffect(() => {
        materials.Metal.color = new Three.Color(legsColor);
    }, [legsColor]);

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                geometry={nodes?.Plate?.geometry}
                material={materials?.Plate}
                scale={[tableWidthScale, 1, 1]}
            />

            {legs === 0 && (
                <>
                    <mesh
                        castShadow
                        geometry={nodes.Legs01Left.geometry}
                        material={materials.Metal}
                        position={[-1.5, 0, 0]}
                    />
                    <mesh
                        geometry={nodes.Legs01Right.geometry}
                        material={materials.Metal}
                        position={[1.5, 0, 0]}
                        castShadow
                    />
                </>
            )}
            {legs === 1 && (
                <>
                    <mesh
                        geometry={nodes.Legs02Left.geometry}
                        material={materials.Metal}
                        position={[-1.5, 0, 0]}
                        castShadow
                    />
                    <mesh
                        geometry={nodes.Legs02Right.geometry}
                        material={materials.Metal}
                        position={[1.5, 0, 0]}
                        castShadow
                    />
                </>
            )}
            {legs === 2 && (
                <>
                    <mesh
                        geometry={nodes.Legs03Left.geometry}
                        material={materials.Metal}
                        position={[-1.5, 0, 0]}
                        castShadow
                    />
                    <mesh
                        geometry={nodes.Legs03Right.geometry}
                        material={materials.Metal}
                        position={[1.5, 0, 0]}
                        castShadow
                    />
                </>
            )}
        </group>
    );
}

export default Table;

useGLTF.preload(`./models/Table.gltf`)