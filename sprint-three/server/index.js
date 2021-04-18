const express = require("express");
const app = express();
const cors = require("cors");

const videoRoutes = require("./routes/videos");
const comments = require("./routes/comments");

require("dotenv").config();
const { PORT } = process.env;

app.use(cors());

app.use(express.static("./public"));

app.use("/videos", (req, res, next) => {
	app.use("/videos", videoRoutes);
	next();
});

// app.use("/comments", comments);

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
