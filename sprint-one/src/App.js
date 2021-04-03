import React from "react";
import "./App.css";

//Compenents
import Header from "./Components/Header/header";
import CommentForm from "./Components/CommentForm/CommentForm";
import MainVideo from "./Components/MainVideo/MainVideo";
import VideoBuilder from "./Components/VideoBuilder/VideoBuilder";

//Data
import VideoDetails from "./Data/video-details.json";
import VideoList from "./Data/videos.json";

class App extends React.Component {
	state = {
		VideoDetails: VideoDetails,
		VideoList: VideoList,
	};

	render() {
		return (
			<div className="App">
				<Header />
				<MainVideo VideoDetails={this.state.VideoDetails} />
				<div>//VideoInfo //CommentForm //CommentBuilder</div>
				<aside>
					<VideoBuilder VideoList={this.state.VideoList} />{" "}
				</aside>
			</div>
		);
	}
}

export default App;
