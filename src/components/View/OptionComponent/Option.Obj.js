import React, { useContext } from "react";
import { HexColorPicker } from "react-colorful";
import { AppStore } from "../../../store/app.context";
import styled from "styled-components";

export default function OptionObj() {
	const { setObjController, objController } = useContext(AppStore);
	const onChangeHandler = (index, value) => {
		const updatedOptions = [...objController]; // 현재 objController 배열 복사
		updatedOptions[index] = {
			...updatedOptions[index],
			value: Number(value),
		}; // 변경된 값을 새로운 객체로 복사
		setObjController(updatedOptions); // 새로운 배열로 상태 업데이트
	};

	const onChangeColorHandler = (index, value) => {
		// if (type !== "spotlight") return;
		const updatedOptions = [...objController]; // 현재 objController 배열 복사
		if (updatedOptions[index]._type === "color") {
			updatedOptions[index] = {
				...updatedOptions[index],
				color: value,
			}; // 변경된 값을 새로운 객체로 복사
			setObjController(updatedOptions); // 새로운 배열로 상태 업데이트
		}
	};
	return (
		<>
			{objController.map((props, index) => (
				<SlideBarLayout key={index}>
					<TitleWrap>
						<Title>{props.title}</Title>
					</TitleWrap>
					<InputWrap>
						{props._type !== "color" && (
							<SubTitleWrap>
								<SubTitle>{props.value}</SubTitle>
							</SubTitleWrap>
						)}
						{props._type !== "color" ? (
							<SlideBar
								type="range"
								onChange={({ target }) =>
									onChangeHandler(index, target.value)
								}
								{...props}
							/>
						) : (
							<HexColorPickerWrap>
								<HexColorPicker
									color={objController[1].color}
									onChange={(value) =>
										onChangeColorHandler(index, value)
									}
								/>
							</HexColorPickerWrap>
						)}
					</InputWrap>
				</SlideBarLayout>
			))}
		</>
	);
}

const SlideBarLayout = styled.div`
	width: 100%;
`;

const SlideBar = styled.input`
	width: 70%;
`;

const TitleWrap = styled.div`
	width: 100%;
	margin-top: 8px;
	margin-bottom: 10px;
`;

const MainTitle = styled.p`
	font-size: 14px;
	font-weight: bold;
`;

const Title = styled.p`
	font-size: 14px;
	font-weight: normal;
`;

const SubTitle = styled.p`
	font-size: 12px;
	font-weight: normal;
	color: #777;
`;

const SubTitleWrap = styled.div`
	border-radius: 2px;
	padding: 1px 3px;
	display: flex;
	justify-content: center;
	width: 28px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	margin-right: 8px;
`;

const InputWrap = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	margin-top: 6px;
	margin-bottom: 12px;
`;

// HexColorPicker
const HexColorPickerWrap = styled.div`
	display: flex;
	flex-direction: row;
	/* justify-content: center; */
	align-items: center;
	width: 100%;
`;
