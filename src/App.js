import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import View from "./components/View/View";

import GlobalStyle from "./styles/GlobalStyle";

import { Route, Link, Routes, HashRouter } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<HashRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route exact path="/view" element={<View />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
