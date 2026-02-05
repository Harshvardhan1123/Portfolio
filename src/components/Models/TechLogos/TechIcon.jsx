import { useGLTF, Environment, Float,OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import {useEffect } from 'react'
import * as THREE from 'three';

const TechIcon = ({ model }) => {

    const gltf = useGLTF(model.modelPath);
    useEffect(()=>{
        if(model.name === 'Interactive Developer'){
            gltf.scene.traverse((child)=>{
                if(child.isMesh && child.name === 'Object_5'){
                    child.material = new THREE.MeshStandardMaterial({color:'white'})
                }
            })
        }
    },[gltf])


    return (
        <Canvas>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5,5,5]} intensity={1}/>
            <Environment preset="city" />
            <OrbitControls enableZoom={false}/>

            <Float
                speed={5.5}
                rotationIntensity={1}
                floatIntensity={0.9}
            >
                <group
                    scale={model.scale || 1}
                    rotation={model.rotation || [0, 0, 0]}
                >
                    <primitive object={gltf.scene} />
                </group>
            </Float>
        </Canvas>
    );
};

export default TechIcon;
