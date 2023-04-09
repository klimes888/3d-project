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
