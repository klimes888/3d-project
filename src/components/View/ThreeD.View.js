import React, { Suspense, useState } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import CaptureComponent from "./CaptureComponent/Cpature";
import { Canvas, useFrame, useControls } from "react-three-fiber";

import {
	useGLTF,
	Grid,
	Stage,
	OrbitControls,
	PerspectiveCamera,
	Environment,
} from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";

function Model({ scene }) {
	const [fixPosition, setFixPositionLocal] = useState(0);

	useFrame((state, delta) => {
		if (true) {
			scene.rotation.y += 0.003;
			setFixPositionLocal(scene.rotation._y);
		} else {
			scene.rotation.y = fixPosition;
		}
	});

	return <primitive object={scene} />;
}

export default function ThreeDView() {
	const canvasRef = React.useRef(null);

	const gltfLoader = useGLTF(require("../../styles/3d/room.glb"));
	const scene = new THREE.Scene();

	scene.add(gltfLoader.scene);

	return (
		<Layout>
			<Suspense fallback={<LoadLayout>loading..</LoadLayout>}>
				<Canvas
					ref={canvasRef}
					style={{ height: "50vh" }}
					dpr={[1, 2]}
					gl={{ preserveDrawingBuffer: true }}
					onMouseDown={() => {}}
				>
					<PerspectiveCamera
						makeDefault
						fov={50}
						position={[0, 0, 30]}
					/>
					<OrbitControls
						autoRotate
						autoRotateSpeed={0.05}
						enableZoom={true}
						makeDefault
					/>
					<ambientLight intensity={0.5} />
					<pointLight position={[10, 10, 10]} />
					<Environment background preset="sunset" blur={0.8} />
					{/* <EffectComposer disableNormalPass>
						<Bloom luminanceThreshold={1} mipmapBlur />
					</EffectComposer> */}
					<Stage
						intensity={0.5}
						environment="city"
						shadows={{ type: "accumulative", bias: -0.001 }}
						adjustCamera={false}
					>
						<Model scene={scene} />
					</Stage>
				</Canvas>
				<CaptureComponent canvasRef={canvasRef} scene={scene} />
			</Suspense>
		</Layout>
	);
}
const Layout = styled.div`
	position: relative;
`;

const LoadLayout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50vh;
	font-size: 24px;
	font-weight: 700;
`;
