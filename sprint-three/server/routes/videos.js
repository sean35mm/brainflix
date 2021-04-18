const express = require("express");
const uuid = require("uuid");
const fs = require("fs");
const videoList = require("../data/video-details.json");
const path = require("path");

const videoRoutes = express.Router();

videoRoutes.use(express.json());

videoRoutes.get("/", (req, res) => {
	const mainVideo = videoList.map((video) => {
		return {
			id: video.id,
			title: video.title,
			channel: video.channel,
			image: video.image,
		};
	});
	res.status(200).send(mainVideo);
});

videoRoutes.get("/:videoId", (req, res) => {
	const oneVideo = videoList.find((video) => {
		return video.id === req.params.videoId;
	});
	res.status(200).send(oneVideo);
});

videoRoutes.post("/", (req, res) => {
	const aVideo = {
		id: uuid.v4(),
		title: req.body.title,
		channel: "Red Cow",
		image: "http://localhost:8080/images/Upload-video-preview.jpg",
		description: req.body.description,
		views: "1,001,023",
		likes: "110,985",
		duration: "4:01",
		video: "http://localhost:8080/video/BrainStationSampleVideo.mp4",
		timestamp: Date.now(),
		comments: [],
	};
	// reading json file by readFileSync
	// const rawdata = fs.readFileSync(
	//   path.resolve(dirname, "../data/video-details.json")
	// );
	// // parse the data into array
	// const videos = JSON.parse(rawdata);
	// push new data into array
	videoList.push(aVideo);
	// parse into json
	json = JSON.stringify(videoList);
	// write back to the file
	fs.writeFileSync(path.resolve(__dirname, "../data/video-details.json"), json);
	res.status(201).send(aVideo);
});

module.exports = videoRoutes;
