const express = require("express");

const app = express();

const fileSystem = require("fs");

const cors = require('cors');

app.use(cors());

app.get("/", (request, response) =>
  response.sendFile(__dirname + "/index.html")
);

app.get("/video", (request, response) => {
  const range = request.headers.range;

  if (!range)
    response
      .status(400)
      .send("Requires Range header");

  const videoPath = "teste.mp4";
  const videoSize = fileSystem.statSync("teste.mp4").size;

  // 1MB
  const chunkSize = 10 ** 6;

  const start = Number(range.replace(/\D/g, ""));
  const end   = Math.min(start + chunkSize, videoSize - 1);

  const contentLength = end - start + 1;

  const headers = {
    "Content-Range":  `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges":  "bytes",
    "Content-Length": contentLength,
    "Content-Type":   "video/mp4",
  };

  // 206 Partial Content
  response.writeHead(206, headers);

  const videoStream = fileSystem.createReadStream(videoPath, { start, end });

  // Stream the video chunk to the client
  videoStream.pipe(response);
});

app.listen(3000, () => console.log("Listening on port 3000"));
