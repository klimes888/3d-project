import Header from "./components/Header";
import Main from "./components/Main";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
	return (
		<>
			<GlobalStyle />
			<div className="App">
				<Header />
				<Main />
			</div>
		</>
	);
}

export default App;
