import "./App.css";
import Header from "./Components/Header/header";
import CommentForm from "./Components/CommentForm/CommentForm";

function App() {
	return (
		<div className="App">
			<Header />
			//MainVideo //VideoInfo
			<CommentForm commentsNumber="3" /*this has to be dynamic*/ />
		</div>
	);
}

export default App;
