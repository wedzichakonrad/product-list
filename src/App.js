import { BrowserRouter } from "react-router-dom";
import "../src/style/style.sass";
import MainContainer from "./containers/main-container/main-container";

function App() {
	return (
		<BrowserRouter>
			<MainContainer />
		</BrowserRouter>
	);
}

export default App;
