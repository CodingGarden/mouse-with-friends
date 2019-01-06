# Realtime fun with Socket.io

Build a web page where every user can see every other users mouse move!

## TODO

* [ ] What are web sockets?
  * [ ] Persistent connection with the server
  * [ ]  Examples:
    * [ ] Chat
    * [ ] Games
    * [ ] Google Docs
    * [ ] VS Live Share
* [ ] Setup server
  * [x] npx create-express-api server
  * [x] npm i socket.io
  * [x] Update src/index.js to use http.Server
  * [x] Create sockets.js
    * [x] Listen for socket connections
      * [ ] emit message 'hello world'
  * [x] init sockets in src/index.js
* [ ] Setup client
  * [x] create client folder
  * [x] npm init -y
  * [x] npm i parcel-bundler socket.io-client
  * [x] create index.html
  * [x] create src directory
  * [x] create src/index.js
  * [x] Add start script to package.json
    * [x] parcel index.html
  * [ ] Setup socket connection
    * [ ] Listen for 'hello world'


# STRETCH

* [ ] Show usernames above mouse
* [ ] Show _some_ indicator of the current users mouse
* [ ] Collective Game
  * [ ] Keep the cheese up
    * [ ] Falling cheese, hit cheese to bounce up
  * [ ] 1 player is Cat
    * [ ] Chases all the mice
* [ ] Move local mouse without waiting for server message
* [ ] Mouse orients to direction of travel
* [ ] Server sends ALL mice locations on an interval (instead of sending every single mouse move)


Co-authored-by: CJ R. <cj@null.computer>
Co-authored-by: Tony <alamitina@gmail.com>