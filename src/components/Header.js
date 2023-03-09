import styled from "styled-components";

import {
	FaSearch,
	FaCartArrowDown,
	FaAlignJustify,
	FaHouseUser,
} from "react-icons/fa";

const Header = () => {
	const tabs = [
		{ type: "category", name: "카테고리" },
		{ type: "event", name: "이벤트" },
		{ type: "best", name: "베스트" },
		{ type: "new", name: "신작" },
		{ type: "benefit", name: "혜택관" },
		{ type: "discard", name: "최강할인" },
		{ type: "review", name: "포토리뷰" },
		{ type: "fund", name: "펀딩" },
		{ type: "migrate", name: "입점 신청" },
	];

	return (
		<Layout>
			<LayoutInner>
				<LeftInner>
					<Logo onClick={() => {}}></Logo>
					<FontWrap>
						<Font1>웹툰</Font1>
					</FontWrap>
					<FontWrap>
						<Font2>게임</Font2>
					</FontWrap>
				</LeftInner>
				<CenterInner>
					<InputWrap>
						<Input placeholder="검색어를 입력해주세요" />
						<IconWrap>
							<FaSearch size={16} />
						</IconWrap>
					</InputWrap>
				</CenterInner>
				<RightInner>
					<RightFontWrap>
						<Font3>3D관 소개</Font3>
					</RightFontWrap>
					<CartWrap>
						<FaCartArrowDown size={16} color="gray" />
					</CartWrap>
					<AuthWrap>
						<RightFontWrap>
							<Font3>로그인</Font3>
						</RightFontWrap>
						<Font3>/</Font3>
						<RightFontWrap>
							<Font3>회원가입</Font3>
						</RightFontWrap>
					</AuthWrap>
				</RightInner>
			</LayoutInner>
			<Divider />
			<LayoutBottom>
				{tabs?.map(({ name, type }, index) => {
					const category = type === "category" && (
						<CategoryIconWrap>
							<FaAlignJustify size={13} />
						</CategoryIconWrap>
					);

					const house = type === "migrate" && (
						<CategoryIconWrap>
							<FaHouseUser size={13} color="gray" />
						</CategoryIconWrap>
					);
					return (
						<TabButtons key={index}>
							{category}
							{house}
							<Font1>{name}</Font1>
						</TabButtons>
					);
				})}
			</LayoutBottom>
		</Layout>
	);
};

const Layout = styled.div`
	position: sticky;
	top: -82px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	z-index: 1;
`;

const LayoutInner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 900px;
	width: 100%;
	height: 82px;
`;

const Divider = styled.div`
	width: 100%;
	max-width: 900px;
	height: 1px;
	background-color: rgb(240, 240, 240);
`;

const LayoutBottom = styled(LayoutInner)`
	justify-content: space-between;
	background-color: rgb(255, 255, 255);
	height: 42px;
`;

const LeftInner = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: flex-start;
`;
const CenterInner = styled.div`
	display: flex;
	justify-content: flex-start;
	flex: 1;
`;
const RightInner = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Logo = styled.button`
	width: 80px;
	height: 22px;
	background-color: black;
`;

const FontWrap = styled.div`
	margin-left: 32px;
`;

const RightFontWrap = styled.button`
	&:hover {
		opacity: 0.7;
	}
	cursor: pointer;
`;

const AuthWrap = styled.div``;

const Font1 = styled.span`
	font-size: 14px;
	color: #222222;
	font-weight: 500;
`;

const Font2 = styled.span`
	font-size: 14px;
	color: #7c7c7c;
	font-weight: 400;
`;

const Font3 = styled.span`
	font-size: 14px;
	color: #222222;
	font-weight: 400;
	&:hover {
		opacity: 0.7;
	}
	cursor: pointer;
`;

const InputWrap = styled.div`
	position: relative;
	width: 380px;
	height: 34px;
	border-radius: 17px;
	overflow: auto;
	background-color: rgb(248, 248, 248);
	border: 1px solid rgb(240, 240, 240);
`;

const IconWrap = styled.button`
	position: absolute;
	right: 14px;
	top: 7px;
	cursor: pointer;
`;

const Input = styled.input.attrs({
	placeholderTextColor: "grey",
})`
	width: 100%;
	height: 100%;
	outline: inherit;
	padding: 0 20px;
	font-size: 14px;
`;

const CartWrap = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 12px;
	&:hover {
		opacity: 0.7;
	}
	cursor: pointer;
`;

const TabButtons = styled.button`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	&:hover {
		opacity: 0.7;
	}
	cursor: pointer;
`;

const CategoryIconWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 4px;
`;

export default Header;
