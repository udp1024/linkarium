#!/bin/bash
## start-linkarium.sh ##
# This script starts Linkarium container for DEV purposes

# for Prod use the following command to start Linkarium
# docker run -it --restart=unless-stopped -d \
#     -p 10080:80 \
#     -p 10443:443 \
#     --name Linkarium \
#     -v ~/proggy/Linkarium/docker-volume/web:/usr/share/nginx/html \
#     -v ~/proggy/Linkarium/docker-volume/config/linkarium.conf:/etc/nginx/conf.d/linkarium.conf:ro \
#     -v ~/proggy/Linkarium/docker-volume/ssl:/etc/nginx/certs/:ro
#     nginx:1.25.5

# with SSL certificates installed and configured;
# docker run -it --rm -d \
#     -p 10080:80 \
#     -p 10443:443 \
#     --name Linkarium \
#     -v ~/proggy/Linkarium/docker-volume/web:/usr/share/nginx/html \
#     -v ~/proggy/Linkarium/docker-volume/config/linkarium.conf:/etc/nginx/conf.d/linkarium.conf:ro \
#     -v ~/proggy/Linkarium/docker-volume/ssl:/etc/nginx/certs/:ro \
#     nginx:1.25.5

docker run -it --rm -d \
    -p 10080:80 \
    --name Linkarium \
    -v ~/proggy/Linkarium/docker-volume/web:/usr/share/nginx/html \
    -v ~/proggy/Linkarium/docker-volume/config/linkarium.conf:/etc/nginx/conf.d/linkarium.conf:ro \
    nginx:1.25.5
    