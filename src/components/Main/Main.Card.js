import React from "react";
import styled from "styled-components";
import { FaThumbsUp, FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function MainCard({ src, contents }) {
	const { title, like, view, category, discount, price, tag } = contents;
	const navigate = useNavigate();

	return (
		<Layout>
			<ThumbnailWrap onClick={() => navigate("/view")}>
				<Thumbnail src={src} alt="" />
			</ThumbnailWrap>
			<ContentsLayout>
				<ContentsLayoutInner>
					<ContentsLayoutTop>
						<Font1>{category}</Font1>
						<HeadAllWrap>
							<FaThumbsUpWrap>
								<FaThumbsUp size={10} color="#a0a0a0" />
								<ThumbsFontWrap>
									<Font1>{like}</Font1>
								</ThumbsFontWrap>
							</FaThumbsUpWrap>
							<ViewLayout>
								<FaRegEye size={10} color="#a0a0a0" />
								<ThumbsFontWrap>
									<Font1>{view}</Font1>
								</ThumbsFontWrap>
							</ViewLayout>
						</HeadAllWrap>
					</ContentsLayoutTop>
					<TitleAreaLayout onClick={() => navigate("/view")}>
						<TitleFont>{title}</TitleFont>
					</TitleAreaLayout>
					<PayInfoLayout>
						<Font2>{discount}%</Font2>
						<FontPriceWrap>
							<Font3>{price}</Font3>
							<Font4>원</Font4>
						</FontPriceWrap>
						<Font5>+ 할인</Font5>
					</PayInfoLayout>
					<TagsLayout>
						{tag.map((item, idx) => (
							<Tags key={idx}>
								<Font6>{item}</Font6>
							</Tags>
						))}
					</TagsLayout>
				</ContentsLayoutInner>
			</ContentsLayout>
		</Layout>
	);
}

const Layout = styled.div`
	width: 270px;
	margin-top: 32px;
`;

const ThumbnailWrap = styled.div`
	width: 100%;
	height: 184px;
	border-radius: 16px;
	overflow: hidden;
	cursor: pointer;
`;

const Thumbnail = styled.img`
	object-fit: cover;
	background-repeat: no-repeat;
	background-position: center;
	height: 100%;
`;

const ContentsLayout = styled.div`
	display: flex;
	width: 100%;
`;

const ContentsLayoutInner = styled.div`
	width: 100%;
	padding: 8px;
`;

const ContentsLayoutTop = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

// 상단 영역
const HeadAllWrap = styled.div`
	display: flex;
	flex-direction: row;
`;

const FaThumbsUpWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
const ThumbsFontWrap = styled.div`
	margin-left: 6px;
`;

const ViewLayout = styled(FaThumbsUpWrap)`
	margin-left: 12px;
`;

// title 영역
const TitleAreaLayout = styled.div`
	margin-top: 6px;
	cursor: pointer;
`;

// 가격 info 영역
const PayInfoLayout = styled(HeadAllWrap)`
	margin-top: 12px;
	align-items: center;
`;

const FontPriceWrap = styled(HeadAllWrap)`
	margin-left: 12px;
	align-items: center;
`;

// tag 영역
const TagsLayout = styled(HeadAllWrap)`
	margin-top: 8px;
`;

const Tags = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2px 8px;
	border-radius: 4px;
	background-color: rgb(233, 231, 255);
	margin-right: 8px;
`;

// font 영역
const Font1 = styled.span`
	color: rgb(160, 160, 160);
	font-size: 12px;
`;

const TitleFont = styled.h2`
	color: #222222;
	font-size: 16px;
	font-weight: 500;
`;

const Font2 = styled.span`
	font-size: 18px;
	font-weight: 700;
	color: rgb(239, 0, 244);
`;

const Font3 = styled(TitleFont)`
	font-weight: 700;
`;

const Font4 = styled(TitleFont)`
	font-size: 13px;
	font-weight: 400;
	margin-left: 2px;
`;

const Font5 = styled(Font2)`
	font-size: 12px;
	font-weight: 500;
	margin-left: 12px;
`;

const Font6 = styled(Font2)`
	font-size: 13px;
	font-weight: 500;
	color: rgb(48, 58, 146);
`;
