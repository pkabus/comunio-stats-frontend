#!/bin/bash

PATH_REPO=/home/pi/projects/comunio-stats-frontend


git -C $PATH_REPO pull

# if Dockerfile.piprod has been modified in the last 24 hours
if [ "$(find $PATH_REPO/Dockerfile.piprod -type f -mtime -1)" ]
then
    echo "Dockerfile.piprod has been modified, build docker image..."

    # build pi production docker image
    docker build -f $PATH_REPO/Dockerfile.piprod -t pi/comunio-stats-frontend:piprod .

    # stop running container with given name
    docker stop comunio-stats-frontend

    # run pi production docker container
    docker run -itd --rm --name comunio-stats-frontend -p 1337:5000 pi/comunio-stats-frontend:piprod
fi
