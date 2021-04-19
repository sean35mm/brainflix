import React from "react";
import "./Home.scss";
import axios from "axios";

//Compenents
import CommentForm from "./Components/CommentForm/CommentForm";
import MainVideo from "./Components/MainVideo/MainVideo";
import VideoBuilder from "./Components/VideoBuilder/VideoBuilder";
import CommentBuilder from "./Components/CommentBuilder/CommentBuilder";
import VideoInfo from "./Components/VideoInfo/VideoInfo";

const URL = "http://localhost:8080";

class Home extends React.Component {
	state = {
		aside: [],
		mainVideo: [],
		comment: [],
		videoList: [],
	};

	componentDidMount() {
		//call axios here - *double check pod*
		axios
			.get(`${URL}/videos/`)
			.then((res) => {
				const videoList = res.data;
				console.log(videoList);
				const videoId = videoList[0].id;
				axios
					.get(`${URL}/videos/${videoId}`)
					.then((res) => {
						const aside = videoList.filter((video) => video.id !== videoId);
						const mainVideo = res.data;
						const comment = res.data.comments;
						this.setState({
							aside,
							mainVideo: [mainVideo],
							comment,
							videoList,
						});
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	componentDidUpdate(prevProps) {
		console.log(prevProps);
		console.log(this.props.match);
		if (prevProps.match.params.id !== this.props.match.params.id) {
			axios.get(`${URL}/videos/${this.props.match.params.id}`).then((res) => {
				const mainVideo = res.data;
				const comment = res.data.comments;
				let aside = this.state.videoList.filter(
					(video) => video.id !== this.props.match.params.id
				);
				this.setState({
					aside,
					mainVideo: [mainVideo],
					comment,
				});
				window.scrollTo(0, 0);
			});
		}
	}

	render() {
		return (
			<div className="App">
				<MainVideo mainVideo={this.state.mainVideo} />
				<div className="container-column">
					<div className="main-column">
						<VideoInfo vidInfo={this.state.mainVideo} />
						<CommentForm />
						<CommentBuilder comment={this.state.comment} />
					</div>
					<aside className="aside-column">
						<VideoBuilder aside={this.state.aside} />{" "}
					</aside>
				</div>
			</div>
		);
	}
}

export default Home;
