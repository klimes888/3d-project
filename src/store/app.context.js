import React, { useState, createContext } from "react";

export const AppStore = createContext(null);

const objectProps = [
	{
		title: "색상",
		_type: "color",
		value: 0,
		color: "#fff",
		step: 0.1,
		min: 0,
		max: 0,
	},
	{
		title: "오브젝트 조명",
		_type: "spoltlight",
		value: 0.5,
		color: "#fff",
		step: 0.1,
		min: 0.1,
		max: 20,
	},
];

const spotlightProps = [
	{
		title: "조명 색상",
		_type: "color",
		value: 0,
		color: "#fff",
		step: 0.1,
		min: 0,
		max: 0,
	},
	{
		title: "조명 밝기",
		_type: "spoltlight_power",
		value: 20,
		step: 1,
		min: 0,
		max: 100,
	},
	{
		title: "조명 거리",
		_type: "spoltlight_distance",
		value: 30,
		step: 1,
		min: 0,
		max: 100,
	},
	{
		title: "조명 앵글",
		_type: "spoltlight_angle",
		value: 2,
		step: 0.1,
		min: 1,
		max: 5,
	},
	{
		title: "x 축",
		_type: "spoltlight_X",
		value: 4,
		step: 1,
		min: 0,
		max: 50,
	},
	{
		title: "y 축",
		_type: "spoltlight_Y",
		value: 20,
		step: 1,
		min: 0,
		max: 50,
	},
	{
		title: "z 축",
		_type: "spoltlight_Y",
		value: 0,
		step: 1,
		min: 0,
		max: 50,
	},
];

export default function AppContext({ children }) {
	// data
	const [objController, setObjController] = useState(objectProps);
	const [spotLightController, setSpotLightController] =
		useState(spotlightProps);
	const value = {
		objController,
		setObjController,
		spotLightController,
		setSpotLightController,
	};

	return <AppStore.Provider value={value}>{children}</AppStore.Provider>;
}
