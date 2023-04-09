import React, {
	Suspense,
	useState,
	useEffect,
	useRef,
	useMemo,
	useCallback,
} from "react";
import styled from "styled-components";
import * as THREE from "three";
import { Canvas, useFrame } from "react-three-fiber";
import CaptureComponent from "./OptionComponent/Cpature";
import OptionsComponent from "./OptionComponent/Options";
import { AppStore } from "../../store/app.context";

import {
	useGLTF,
	Grid,
	Stage,
	OrbitControls,
	PerspectiveCamera,
	Environment,
	SpotLight,
} from "@react-three/drei";
import { useContext } from "react";

function Model({ scene, isClick }) {
	const [fixPosition, setFixPositionLocal] = useState(0);

	useFrame((state, delta) => {
		if (isClick) {
			scene.rotation.y = fixPosition;
		} else {
			scene.rotation.y += 0.003;
			setFixPositionLocal(scene.rotation._y);
		}
	});

	return <primitive object={scene} />;
}

export default function ThreeDView() {
	const { objController, spotLightController } = useContext(AppStore);
	console.log("spotLightController", spotLightController);
	const [isClick, setIsClick] = useState(false);
	const canvasRef = useRef(null);
	const spotLight = useRef();
	const [scene, setScene] = useState(null);
	const gltfLoader = useGLTF(require("../../styles/3d/room.glb"));

	useMemo(() => {
		const newScene = new THREE.Scene();
		newScene.add(gltfLoader.scene);

		// const newSpotLight = new THREE.SpotLight(
		// 	"#F90707",
		// 	spotLightController[1].value,
		// 	30,
		// 	Math.PI / 2,
		// 	1
		// );
		// newSpotLight.position.set(0, 20, 0);
		// newSpotLight.castShadow = true;
		// newScene.add(newSpotLight);

		setScene(newScene);
		// spotLight.current = newSpotLight;

		return () => {
			newScene.remove(gltfLoader.scene);
			// newScene.remove(newSpotLight);
		};
	}, [gltfLoader]);

	const handleSceneUpdate = useCallback(() => {
		const updatedScene = scene.clone();
		setScene(updatedScene);
	}, [scene]);

	useEffect(() => {
		if (scene) {
			handleSceneUpdate();
		}
	}, []);

	// if (!scene) return null;

	const spotLightPosition = [
		spotLightController[4].value,
		spotLightController[5].value,
		spotLightController[6].value,
	];
	return (
		<Layout>
			<Suspense fallback={<LoadLayout>loading..</LoadLayout>}>
				<Canvas
					ref={canvasRef}
					style={{ height: "70vh" }}
					dpr={[1, 2]}
					gl={{ preserveDrawingBuffer: true }}
					onMouseDown={() => setIsClick(true)}
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
					<ambientLight
						color={objController[0].color}
						intensity={objController[1].value}
					/>
					<SpotLight
						intensity={spotLightController[1].value}
						color={spotLightController[0].color}
						position={spotLightPosition}
						distance={spotLightController[2].value}
						angle={Math.PI / spotLightController[3]?.value || 3}
						receiveShadow={true}
						castShadow={true}
						penumbra={1}
					/>
					{/* <pointLight position={[10, 10, 10]} /> */}
					<Environment background preset="sunset" blur={0.8} />
					<Stage
						intensity={0.5}
						environment="city"
						shadows={{ type: "accumulative", bias: -0.001 }}
						adjustCamera={false}
					>
						<Model scene={scene} isClick={isClick} />
					</Stage>
				</Canvas>
				<OptionsComponent />
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
