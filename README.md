# video-stream

###### Nodejs application wich serves a video.
#
###### The endpoint / sends the index.html file in its response
#
###### The source tag in the video tag in index file will make
###### a get request to localhost:3000/video hit the server
###### route with the logic for calculating and sending
###### chunks of the video file in the response.
#
###### Check the network tab in the developer tools in your
###### browser while the video is playing.

### Dependencies in your machine
- Nodejs

### Running the application
1. Go to the project root folder and add a video file to it and
change the file name in the videoPath and videoSize variables in
the server.js file
2. Start the application with the `node server.js` command
3. Open your browser and put the `http://localhost:3000/` url.
Check the network tab in the developer tools in your browser while
the video is playing
