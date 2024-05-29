# Use the latest nginx image as the base
FROM nginx:latest

# Set the working directory
WORKDIR /usr/share/nginx

# Add the binary from the GitHub repository
ADD https://github.com/udp1024/goweb.svc/blob/main/bin/goweb-svc-linux-amd64 ./goweb-svc
#ADD https://github.com/udp1024/goweb.svc/blob/main/bin/goweb-svc-linux-arm64 ./goweb-svc

# Make the binary executable
RUN chmod +x ./goweb-svc

# Create a shell script to run the binary as a service
RUN echo -e '#!/bin/sh\nnohup ./goweb-svc &' > run-goweb-svc.sh && chmod +x run-goweb-svc.sh

# Make port 80 available to the world outside this container <-- these ports should be published using -p option of hte docker run command
EXPOSE 80
EXPOSE 443

# Run the service script and start nginx
CMD ["sh", "-c", "./run-goweb-svc.sh && nginx -g 'daemon off;'"]

# use command "docker build --platform linux/amd64 -t Linkarium-amd64:2.0 ." to build the container
# use command "docker build --platform linux/arm64 -t Linkarium-arm64:2.0 ." to build the container
