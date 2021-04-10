import React from "react";
import "./App.scss";
import axios from "axios";

//Compenents
import Header from "./components/Header/header";
import CommentForm from "./components/CommentForm/CommentForm";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoBuilder from "./components/VideoBuilder/VideoBuilder";
import CommentBuilder from "./components/CommentBuilder/CommentBuilder";
import VideoInfo from "./components/VideoInfo/VideoInfo";

//Data
import VideoDetails from "./Data/video-details.json";
import VideoList from "./Data/videos.json";

//This is my only class component

class Home extends React.Component {
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
				<div className="container-column">
					<div className="main-column">
						<VideoInfo CurrentVideo={this.state.CurrentVideo} />
						<CommentForm />
						<CommentBuilder CurrentVideo={this.state.CurrentVideo} />
					</div>
					<aside className="aside-column">
						<VideoBuilder VideoList={this.state.VideoDetails} updateVideo={this.updateVideo} />{" "}
					</aside>
				</div>
			</div>
		);
	}
}

export default Home;
