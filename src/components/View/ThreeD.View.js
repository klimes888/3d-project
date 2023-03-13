import React, { Suspense } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import { Canvas, useFrame } from "react-three-fiber";
import {
	useGLTF,
	Grid,
	Stage,
	OrbitControls,
	PerspectiveCamera,
	Environment,
} from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";

function Model({ url }) {
	const gltfLoader = useGLTF(require("../../styles/3d/room.glb"));
	const scene = new THREE.Scene();

	scene.add(gltfLoader.scene);

	useFrame((state, delta) => {
		// console.log("state", state);
		scene.rotation.y += 0.003;
		// easing.dampE(head.current.rotation, [0, state.pointer.x * (state.camera.position.z > 1 ? 1 : -1), 0], 0.4, delta)
		// light.current.intensity = 1 + t * 2
	});

	return <primitive object={scene} />;
}

export default function ThreeDView() {
	return (
		<Suspense fallback={<LoadLayout>loading..</LoadLayout>}>
			<Canvas style={{ height: "50vh" }} dpr={[1, 2]}>
				<PerspectiveCamera makeDefault fov={50} position={[0, 0, 30]} />
				<OrbitControls
					autoRotate
					autoRotateSpeed={0.05}
					enableZoom={true}
					makeDefault
					// minPolarAngle={Math.PI / 2}
					// maxPolarAngle={Math.PI / 2}
				/>
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} />
				<Environment background preset="sunset" blur={0.8} />
				<EffectComposer disableNormalPass>
					<Bloom luminanceThreshold={1} mipmapBlur />
				</EffectComposer>
				<Stage
					intensity={0.5}
					environment="city"
					shadows={{ type: "accumulative", bias: -0.001 }}
					adjustCamera={false}
				>
					<Model />
				</Stage>
			</Canvas>
		</Suspense>
	);
}

const LoadLayout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50vh;
	font-size: 24px;
	font-weight: 700;
`;
