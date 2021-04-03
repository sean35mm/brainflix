import React from "react";
import "./App.css";

//Compenents
import Header from "./Components/Header/header";
import CommentForm from "./Components/CommentForm/CommentForm";
import MainVideo from "./Components/MainVideo/MainVideo";
import VideoBuilder from "./Components/VideoBuilder/VideoBuilder";
import CommentBuilder from "./Components/CommentBuilder/CommentBuilder";
import VideoInfo from "./Components/VideoInfo/VideoInfo";

//Data
import VideoDetails from "./Data/video-details.json";
import VideoList from "./Data/videos.json";

class App extends React.Component {
	state = {
		VideoDetails: VideoDetails,

		CurrentVideo: VideoDetails[0],
	};

	updateVideo = (VideoDetails) => {
		console.log(VideoDetails);
		this.setState({
			CurrentVideo: VideoDetails,
		});
	};

	render() {
		return (
			<div className="App">
				<Header />
				<MainVideo CurrentVideo={this.state.CurrentVideo} />
				<div>
					<VideoInfo CurrentVideo={this.state.CurrentVideo} />
					<CommentForm />
					<CommentBuilder CurrentVideo={this.state.CurrentVideo} />
				</div>
				<aside>
					<VideoBuilder VideoList={this.state.VideoDetails} updateVideo={this.updateVideo} />{" "}
				</aside>
			</div>
		);
	}
}

export default App;
