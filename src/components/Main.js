import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MainCategory from "./Main.Category";

const Main = () => {
	const imgList = [
		{ src: require("../styles/assets/1.jpg"), alt: "" },
		{ src: require("../styles/assets/2.jpg"), alt: "" },
		{ src: require("../styles/assets/3.jpg"), alt: "" },
	];

	return (
		<Layout>
			<BannerInner>
				<Carousel autoPlay={true} swipeable={true} infiniteLoop={true}>
					{imgList?.map((props) => (
						<BannerWrap>
							<Banner {...props} />
						</BannerWrap>
					))}
				</Carousel>
			</BannerInner>
			<LayoutBottomInner>
				<MainCategory />
			</LayoutBottomInner>
		</Layout>
	);
};

const Layout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding-top: 62px;
`;

const BannerInner = styled.div`
	display: flex;
	width: 100%;
	max-width: 900px;
	justify-content: center;
	align-items: center;
`;
const BannerWrap = styled.div``;

const Banner = styled.img``;

const LayoutBottomInner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 900px;
	width: 100%;
`;

const Item = styled.div`
	width: 100%;
	height: 1100px;
`;

export default Main;
