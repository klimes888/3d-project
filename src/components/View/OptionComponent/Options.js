import React, { useState } from "react";
import styled from "styled-components";

import OptionObj from "../OptionComponent/Option.Obj";
import OptionSpotLight from "../OptionComponent/Option.SpotLight";

const TabButton = [
	{ title: "오브젝트", value: "object" },
	{ title: "조명", value: "spotlight" },
	{ title: "카메라", value: "camera" },
	{ title: "기타", value: "etc" },
];

export default function OptionsComponent() {
	const [currentTab, setCurrentTab] = useState("object");
	const [currentTitle, setCurrentTitle] = useState("오브젝트");

	const tabs = () => {
		switch (currentTab) {
			case "object":
				return <OptionObj />;
			case "spotlight":
				return <OptionSpotLight />;
			default:
				return <>Loading...</>;
		}
	};

	return (
		<Layout>
			<LayoutInner>
				<ButtonHeader>
					{TabButton.map(({ title, value }, index) => (
						<Button
							key={index}
							onClick={() => {
								setCurrentTab(value);
								setCurrentTitle(title);
							}}
							focus={currentTab === value}
						>
							{title}
						</Button>
					))}
				</ButtonHeader>
				<LayoutBody>
					<TitleWrap>
						<MainTitle>{currentTitle}</MainTitle>
					</TitleWrap>
					{tabs()}
				</LayoutBody>
			</LayoutInner>
		</Layout>
	);
}

const Layout = styled.div`
	position: absolute;
	left: 12px;
	top: 14px;
	bottom: 0;
	width: 100%;
	height: 100%;
	max-width: 280px;
	max-height: 450px;
	overflow: hidden;
`;

const LayoutInner = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	border-radius: 8px;
	background-color: #fff;
	padding: 12px;
`;

// tabs
const ButtonHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	padding: 4px 18px;
	font-size: 12px;
	font-weight: normal;
	white-space: nowrap;
	background-color: ${({ focus }) => (focus ? "#EEECEC" : "inherit")};
	cursor: pointer;
	&:hover {
		background-color: #eeecec;
	}
`;

// body
const LayoutBody = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	margin-top: 8px;
	padding: 4px;
	overflow-y: scroll;
`;

const TitleWrap = styled.div`
	width: 100%;
	margin-top: 8px;
`;

const MainTitle = styled.p`
	font-size: 14px;
	font-weight: bold;
`;
