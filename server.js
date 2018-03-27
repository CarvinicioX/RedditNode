const express = require("express");
const axios = require("axios");

var cors = require('cors')
const app = express();

app.use(cors());

app.listen(8000, () => {
	console.log("Server Started in port 8000");
});

app.route("/:cat").get((req, res) => {
	axios.get("http://www.reddit.com/r/" + req.params["cat"] + "/.json").then(response => {
	response = response["data"];
	trim = response["data"]["children"];
	res.send(trim);
	}).catch(error => {
		res.send({"error":"couldn't fetch from reddit"});
	});
});