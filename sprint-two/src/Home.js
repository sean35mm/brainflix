import React from "react";
import "./Home.scss";
import axios from "axios";

//Compenents
import CommentForm from "./components/CommentForm/CommentForm";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoBuilder from "./components/VideoBuilder/VideoBuilder";
import CommentBuilder from "./components/CommentBuilder/CommentBuilder";
import VideoInfo from "./components/VideoInfo/VideoInfo";

const apiKey = "15b07af5-71bb-4ad8-afe2-f9735eca952e";

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
			.get(`https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`)
			.then((res) => {
				const videoList = res.data;
				const videoId = videoList[0].id;
				axios
					.get(
						`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`
					)
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
			axios
				.get(
					`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=${apiKey}`
				)
				.then((res) => {
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
