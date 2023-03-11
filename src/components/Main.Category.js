import React, { Fragment } from "react";
import styled from "styled-components";
import MainCard from "./Main.Card";
import { FaAngleRight } from "react-icons/fa";

export default function MainCategory() {
	const upperContents = [
		{
			src: require("../styles/assets/thumb1.gif"),
			alt: "",
			contents: {
				title: "[최강할인!] 👹이것은 에디의 픽!",
				like: 124,
				view: "1,324",
				category: "공간과 우주",
				discount: 20,
				price: "12,030",
				tag: ["3d", "image"],
			},
		},
		{
			src: require("../styles/assets/thumb2.gif"),
			alt: "",
			contents: {
				title: "[이것봐라] 🤡이것은 얀의 절대 후회 없는 선택~~",
				like: 124,
				view: "1,324",
				category: "일상",
				discount: 20,
				price: "12,030",
				tag: ["3d", "image", "webp"],
			},
		},
		{
			src: require("../styles/assets/thumb3.jpeg"),
			alt: "",
			contents: {
				title: "[마감임박] 3D 작업할 때 무조건 있어야 하는 것은 무엇일까?",
				like: 124,
				view: "1,324",
				category: "일상",
				discount: 20,
				price: "12,030",
				tag: ["3d", "image", "webp"],
			},
		},
	];
	return (
		<Layout>
			<LayoutTop>
				<Font1>⌛️지금이 절호의 찬스!!</Font1>
				<MoreButton>
					<Font2>더보기</Font2>
					<FaAngleRightWrap>
						<FaAngleRight size={16} color="gray" />
					</FaAngleRightWrap>
				</MoreButton>
			</LayoutTop>
			<Divider />
			<MainLayout>
				{upperContents?.map((data, idx) => (
					<Fragment key={idx}>
						<MainCard {...data} />
					</Fragment>
				))}
			</MainLayout>
		</Layout>
	);
}

const Layout = styled.div`
	width: 100%;
	padding-bottom: 70px;
`;

const LayoutTop = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
`;

const MainLayout = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Font1 = styled.span`
	font-weight: 700;
	font-size: 24px;
`;

const Font2 = styled.span`
	font-weight: 700;
	font-size: 16px;
`;

const FaAngleRightWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const MoreButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	&:hover {
		opacity: 0.6;
	}
	cursor: pointer;
`;

const Divider = styled.div`
	width: 100%;
	height: 1px;
	background-color: black;
	opacity: 0.1;
	margin-top: 16px;
`;
