#!/usr/bin/env bash

PROCESS=mongod
PID=-1

# No Color
NC="\e[0m"
YELLOW='\e[0;33m';

# Get mongod process
number=$(ps aux | grep ${PROCESS} | grep -v grep | wc -l)

# If mongod isn't running, start it and get its PID
if [[ ${number} -lt 1 ]] ; then
	printf "${YELLOW}Starting mongod Process . . .${NC}\n";
	mongod --logpath ./bin/MongodLog.txt &
	PID=$!
fi

# Build the app and tests
gulp clean:test && gulp build:test

# If no arguments were passed to this script, run all tests
if [[ -z "$1" ]] ; then
    jasmine-node dist/server/tests --verbose
else
	# Otherwise run test file passed to script
	jasmine-node dist/server/tests/$1.spec.js --verbose
fi

# If mongod was started above, kill it
if [[ ${PID} -gt -1 ]] ; then
	printf "${YELLOW}Killing mongod Process . . .${NC}\n";
	kill ${PID}
	# Wait 1 sec, then force carriage return (same as ctrl+c)
	sleep 1 && rm -f ./bin/MongodLog.txt && printf "\r"
fi
