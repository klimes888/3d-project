import Header from "./components/Header";
import Main from "./components/Main";

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
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
