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

