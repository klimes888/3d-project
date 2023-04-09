import React from "react";
import styled from "styled-components";
import ThreeDView from "./ThreeD.View";
import {
	VscCloudDownload,
	VscEye,
	VscStarEmpty,
	VscAdd,
	VscCode,
	VscDiscard,
	VscHistory,
	VscHubot,
	VscTag,
} from "react-icons/vsc";

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
	selector: ["Architecture 3D Models", "Art & Abstract 3D Models"],
	tags: ["room", "blender", "japan", "3D", "ETC"],
};

const imgList = [
	require("../../styles/thumb/thumb1.jpeg"),
	require("../../styles/thumb/thumb2.png"),
	require("../../styles/thumb/thumb3.jpeg"),
];

export default function View() {
	return (
		<Layout>
			<LayoutInner>
				{/********** 3D VIEW  **************/}
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
								<VscCloudDownload size={16} color="#999" />
								<HistoryFont>{threeDData.download}</HistoryFont>
							</HistoryIcon>
							<HistoryIcon>
								<VscEye size={16} color="#999" />
								<HistoryFont>{threeDData.view}</HistoryFont>
							</HistoryIcon>
							<HistoryIcon>
								<VscStarEmpty size={16} color="#999" />
								<HistoryFont>{threeDData.likes}</HistoryFont>
							</HistoryIcon>
						</HisotryLayout>
					</ProfileAndHistoryWrap>
					<DividerWrap>
						<TopDividerWrap>
							<TopButtonsLayout>
								<VscCloudDownload size={16} color="#1caad9" />
								<TopBlueFont>Download 3D Model</TopBlueFont>
							</TopButtonsLayout>
							<TopButtonsLayout>
								<VscAdd size={14} color="#777" />
								<TopFont>Add to</TopFont>
							</TopButtonsLayout>
							<TopButtonsLayout>
								<VscCode size={20} color="#999" />
								<TopFont>Embed</TopFont>
							</TopButtonsLayout>
							<TopButtonsLayout>
								<VscDiscard size={16} color="#999" />
								<TopFont>Share</TopFont>
							</TopButtonsLayout>
						</TopDividerWrap>
						<Divider />
						<BottomDividerWrap>
							<VscHistory size={16} color="#999" />
							<TimesFont>Published 8 years ago</TimesFont>
						</BottomDividerWrap>
					</DividerWrap>
				</CenterLayout>
				<BottomLayout>
					<LicenseWrap>
						<Font1>License: </Font1>
						<HistoryFont>CC AttributionCreative</HistoryFont>
					</LicenseWrap>
					<DescWrap>
						<DescP>
							First doodle in 2023. Happy new year. <br />- Made
							in Feather 1.0.1 <br />
							Baked in Blender 3.3 via MMMV2 add-on <br />
							Background painted in Procreate 5.3.1 <br />
							IG :
							<TopBlueFont>
								https://www.instagram.com/_hyewon_seo/
							</TopBlueFont>
						</DescP>
					</DescWrap>
					<SelectorBoxWrap>
						<VscHubot size={25} color="#777" />
						{threeDData.selector.map((item, i) => (
							<Selector key={i}>
								<Font1>{item}</Font1>
							</Selector>
						))}
					</SelectorBoxWrap>
					<SelectorBoxWrap>
						<VscTag size={20} color="#999" />
						<MRDummy />
						{threeDData.tags.map((item, i) => (
							<Tags key={i}>
								<TagFont>{item}</TagFont>
							</Tags>
						))}
					</SelectorBoxWrap>
					<CommentSummaryWrap>
						<ImageListWrap>
							{imgList.map((item, i) => (
								<MiniImageWrap key={i}>
									<MiniImage src={item} alt="" />
								</MiniImageWrap>
							))}
						</ImageListWrap>
						<TagFont>
							<TopBlueFont>
								iggy-design , tamminen , sy-kim
							</TopBlueFont>{" "}
							and<TopBlueFont>534 others</TopBlueFont> liked this
							model
						</TagFont>
					</CommentSummaryWrap>
				</BottomLayout>
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
	padding-bottom: 80px;
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

const BottomLayout = styled(CenterLayout)``;

const LicenseWrap = styled.div`
	display: flex;
	flex-direction: row;
`;

const DescWrap = styled.div`
	width: 100%;
	margin-top: 12px;
	margin-bottom: 16px;
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

const SelectorBoxWrap = styled(TitleWrap)`
	margin-top: 6px;
	margin-bottom: 6px;
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

const MRDummy = styled.div`
	margin: 0 2px;
`;

// History info
const HisotryLayout = styled.div`
	display: flex;
	flex-direction: row;
`;

const TopButtonsLayout = styled(HisotryLayout)`
	align-items: center;
	margin-right: 22px;
`;

const HistoryIcon = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 12px;
`;

// divider
const DividerWrap = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 18px;
`;

const TopDividerWrap = styled(HisotryLayout)`
	display: flex;
	flex-direction: row;
`;

const BottomDividerWrap = styled(TopDividerWrap)``;

const CommentSummaryWrap = styled(TopDividerWrap)`
	margin-top: 12px;
`;

const ImageListWrap = styled.div`
	display: flex;
	flex-direction: row;
`;

const MiniImageWrap = styled.div`
	width: 22px;
	height: 22px;
	border-radius: 6px;
	overflow: hidden;
	margin-right: 4px;
`;

const MiniImage = styled.img`
	width: 100%;
	background-size: cover;
	background-position: center center;
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
	font-size: 14px;
	color: #999;
	font-weight: 600;
	margin-left: 4px;
`;

const TopFont = styled.span`
	color: #777777;
	font-size: 14px;
	font-weight: 400;
	margin-left: 4px;
`;

const TopBlueFont = styled(TopFont)`
	color: #1caad9;
	margin-left: 4px;
	cursor: pointer;
`;

const TimesFont = styled(SubTitle)`
	font-size: 14px;
	margin-left: 6px;
`;

const Font1 = styled.span`
	font-size: 14px;
	color: #999;
`;

const DescP = styled.p`
	line-height: 32px;
	font-size: 14px;
	color: #555;
`;

const TagFont = styled.span`
	font-size: 14px;
	color: #777777;
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

const Selector = styled.button`
	padding: 4px 6px;
	border-radius: 4px;
	border: 2px solid #ccc;
	margin-left: 6px;
`;

const Tags = styled.div`
	padding: 4px 6px;
	border-radius: 4px;
	background-color: #ccc;
	margin-left: 6px;
`;

// divider

const Divider = styled.div`
	width: 100%;
	height: 1px;
	background-color: black;
	opacity: 0.1;
	margin: 12px 0;
`;
