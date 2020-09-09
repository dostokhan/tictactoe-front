## Introduction
Two player tick-tack-toe game in browser.

## Details
1. Player actions are stored in backend service and shown below the game board.
2. Reloading/Refreshing browser tab retains game state and log
3. Closing browser tab will loose game state.

## Run the App in development mode
### Prerequisite
1. Docker
2. docker-compose
3. Python 3 (for helper scripts)

### Quick Start
Below commands should work on linux, mac etc. may vary on windows 

```bash
# Clone the repository
git clone https://github.com/dostokhan/tictactoe-front .
# Go inside the directory
cd tictactoe-front

# application container iamge can be built and run with docker-compose or with the help of ***run.py*** script 
# make helper script executable
chmod +x ./run.py
# build container image
./run.py build
# start container image
./run.py up
```


## Task

Program the game with crosses:

 

_X_|___|___ 

___|_X_|___ 

___|___| X

 

### Basic requirements: 

* Two users play a game of tick-tack-toe on the same computer 

* No real-time functionality is required 

* Single session 

* All actions are reported to the API, which saves them 

* Action log is displayed underneath the game area, read from the API 

* The game must resume completely if the browser is refreshed

 

### What you should use: 

* React + Redux

* Node.js

* Docker 

* Anything else you want.

 

### Notes: 

- No need for any fancy styles. Plain and simple with the least amount of effort.

- Layout must be done using flex box. 

- Result of task must be a link to two Github repos, containing both frontend and API project sources and readme 

- At least one meaningful automated test present per project with framework of your choice

- Using seeds or anything else that will get you started faster is allowed and encouraged :)

