import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import View from "./components/View/View";
import AppContext from "./store/app.context";
import GlobalStyle from "./styles/GlobalStyle";

import { Route, Routes, HashRouter } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<AppContext>
				<HashRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Main />} />
						<Route exact path="/view" element={<View />} />
					</Routes>
				</HashRouter>
			</AppContext>
		</div>
	);
}

export default App;
