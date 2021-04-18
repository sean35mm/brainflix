const express = require("express");
const uuid = require("uuid");
const fs = require("fs");
const videoList = require("../data/video-details.json");

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

module.exports = videoRoutes;
