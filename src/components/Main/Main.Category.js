import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import MainCard from "./Main.Card";
import { FaAngleRight } from "react-icons/fa";
import { cardDatas } from "../../data/card.data";

export default function MainCategory() {
	return (
		<Layout>
			{/* <LayoutTop>
				<Font1>⌛️지금이 절호의 찬스!!</Font1>
				<MoreButton>
					<Font2>더보기</Font2>
					<FaAngleRightWrap>
						<FaAngleRight size={16} color="gray" />
					</FaAngleRightWrap>
				</MoreButton>
			</LayoutTop>
			<Divider /> */}
			<MainLayout>
				{cardDatas?.map((data, idx) => (
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
	flex-wrap: wrap;
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
