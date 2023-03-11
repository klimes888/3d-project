import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Main from "./components/Main";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const router = createBrowserRouter(
// 	[
// 		{
// 			path: "/",
// 			element: <App />,
// 			opts: {
// 				basename: "https://klimes888.github.io/3d-project/",
// 			},
// 			children: [
// 				{
// 					path: "/main",
// 					element: <></>,
// 					errorElement: <>???</>,
// 				},
// 			],
// 		},
// 	]
// <Route path="/" element={<Main />}></Route>
// );

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
