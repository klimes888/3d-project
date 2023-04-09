import React from "react";
import styled from "styled-components";
import { VscDeviceCamera } from "react-icons/vsc";
import uuid from "react-uuid";

export default function CaptureComponent({ canvasRef, scene }) {
	function handleCapture() {
		const canvas = canvasRef.current;
		const image = canvas.toDataURL("image/png");

		const link = document.createElement("a");
		link.download = `3d-image-${uuid()}`;
		link.href = image;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	return (
		<ButtonLayout onClick={handleCapture}>
			<VscDeviceCamera size={20} />
		</ButtonLayout>
	);
}

const ButtonLayout = styled.button`
	display: flex;
	position: absolute;
	bottom: 20px;
	right: 40px;
	width: 40px;
	height: 40px;
	background-color: white;
	border-radius: 50%;
	overflow: hidden;
	z-index: 99999;
	justify-content: center;
	align-items: center;
	box-shadow: -1px 9px 58px 2px rgba(0, 0, 0, 0.25);
`;
