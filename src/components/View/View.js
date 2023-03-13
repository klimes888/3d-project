import React from "react";
import styled from "styled-components";
import ThreeDView from "./ThreeD.View";
import { FiEye, FiDownload, FiStar } from "react-icons/fi";

const threeDData = {
	title: "Japanes Room",
	category: "3D Model",
	badge: require("../../styles/assets/badge.png"),
	profile: {
		thumb: require("../../styles/assets/thumb.jpeg"),
		id: "Eddy-Lim",
	},
	view: "13,103",
	download: "423",
	likes: "1,241",
	license: "MIT",
	date: "",
	tags: ["room", "blender", "japan"],
};

export default function View() {
	return (
		<Layout>
			<LayoutInner>
				<ThreeDLayout>
					<ThreeDView />
				</ThreeDLayout>
				<CenterLayout>
					<TitleWrap>
						<Title>{threeDData.title}</Title>
						<Badge src={threeDData.badge} alt="" />
					</TitleWrap>
					<SubTitle>{threeDData.category}</SubTitle>
					<ProfileAndHistoryWrap>
						<PrifileLayout>
							<PrifileImgWrap>
								<PrifileImg src={threeDData.profile.thumb} />
							</PrifileImgWrap>
							<ProfileTextWrap>
								<ProfileFont>
									{threeDData.profile.id}
								</ProfileFont>
								<FollowBtn>Follow</FollowBtn>
							</ProfileTextWrap>
						</PrifileLayout>
						<HisotryLayout>
							<HistoryIcon>
								<FiDownload size={16} color="#999" />
								<HistoryFont>{threeDData.download}</HistoryFont>
							</HistoryIcon>
							<HistoryIcon>
								<FiEye size={16} color="#999" />
								<HistoryFont>{threeDData.view}</HistoryFont>
							</HistoryIcon>
							<HistoryIcon>
								<FiStar size={16} color="#999" />
								<HistoryFont>{threeDData.likes}</HistoryFont>
							</HistoryIcon>
						</HisotryLayout>
					</ProfileAndHistoryWrap>
					<Divider />
				</CenterLayout>
			</LayoutInner>
		</Layout>
	);
}

const Layout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding-top: 62px;
`;

const LayoutInner = styled.div`
	width: 100%;
	max-width: 1200px;
	height: 100%;
`;

const ThreeDLayout = styled.div`
	height: 100%;
	max-height: 50vh;
`;

const CenterLayout = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 1em;
`;

const TitleWrap = styled.div`
	display: flex;
	align-items: center;
`;

const Badge = styled.img`
	width: 22px;
	height: 22px;
	background-size: contain;
	margin-left: 4px;
`;

// profile
const ProfileAndHistoryWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const PrifileLayout = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 18px;
`;
const PrifileImgWrap = styled.div`
	border-radius: 4px;
	width: 48px;
	height: 48px;
	overflow: hidden;
`;
const PrifileImg = styled.img`
	width: 100%;
	background-size: cover;
`;

const ProfileTextWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 9px;
`;

// History info
const HisotryLayout = styled.div`
	display: flex;
	flex-direction: row;
`;

const HistoryIcon = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 12px;
`;

// font

const Title = styled.h1`
	font-size: 24px;
	font-weight: 500;
`;

const SubTitle = styled.span`
	font-size: 16px;
	color: #777777;
`;

const ProfileFont = styled.span`
	font-size: 16px;
	font-weight: 700;
`;

const HistoryFont = styled.span`
	font-size: 16px;
	font-weight: 700;
	color: #999;
	margin-left: 4px;
`;

// button

const FollowBtn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #1caad9;
	padding: 3px 4px;
	border-radius: 4px;
	font-size: 14px;
	color: white;
	cursor: pointer;
`;

// divider

const Divider = styled.div`
	width: 100%;
	height: 1px;
	background-color: black;
	opacity: 0.1;
	margin: 16px 0;
`;
