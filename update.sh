#!/bin/bash

PATH_REPO=/home/pi/projects/comunio-stats-frontend


git -C $PATH_REPO pull

# if Dockerfile.piprod has been modified in the last 24 hours
if [ "$(find $PATH_REPO/ -type f -mtime -1)" ]
then
    echo "Changes in directory $PATH_REPO detected, build docker image..."

    # build pi production docker image
    docker build -f $PATH_REPO/Dockerfile.piprod -t pi/comunio-stats-frontend:piprod .

    # stop and remove running container with given name
    docker stop comunio-stats-frontend && docker rm comunio-stats-frontend

    # run pi production docker container
    docker run -itd --rm --name comunio-stats-frontend -p 1337:5000 pi/comunio-stats-frontend:piprod
fi
