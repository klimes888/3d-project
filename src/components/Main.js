import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MainCategory from "./Main.Category";
import MainBottomCategory from "./Main.BottomCategory";

const Main = () => {
	const imgList = [
		{ src: require("../styles/assets/1.jpg"), alt: "" },
		{ src: require("../styles/assets/2.jpg"), alt: "" },
		{ src: require("../styles/assets/3.jpg"), alt: "" },
	];

	const centerImgList = [
		{ src: require("../styles/assets/center1.jpg"), alt: "" },
		{ src: require("../styles/assets/center2.jpg"), alt: "" },
		{ src: require("../styles/assets/center3.jpg"), alt: "" },
	];

	return (
		<Layout>
			<LayoutInner>
				<BannerInner>
					<Carousel swipeable={true} infiniteLoop={true}>
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
				<CenterBannerLayout>
					<Carousel
						autoPlay={true}
						showStatus={false}
						swipeable={true}
						infiniteLoop={true}
						showIndicators={false}
					>
						{centerImgList?.map((props) => (
							<BannerWrap>
								<Banner {...props} />
							</BannerWrap>
						))}
					</Carousel>
				</CenterBannerLayout>
				<BottomCategoryLayout>
					<MainBottomCategory />
				</BottomCategoryLayout>
			</LayoutInner>
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

const LayoutInner = styled.div`
	width: 100%;
	max-width: 900px;
`;

const BannerInner = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
`;
const BannerWrap = styled.div``;

const Banner = styled.img``;

const LayoutBottomInner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const CenterBannerLayout = styled.div`
	width: 100%;
`;

const BottomCategoryLayout = styled.div`
	width: 100%;
`;

export default Main;
