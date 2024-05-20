# linkarium

Linkarium is a simple web application that presents a webpage with tiles for other web applications. Each tile has an icon, name, description, and link, which can be defined in a `data.json` file.

## Features

- **Dynamic Tiles**: The tiles are dynamically generated from a `data.json` file. You can easily add, remove, or modify tiles by editing this file.
- **Simple and Lightweight**: Linkerium is designed to be simple and lightweight, making it easy to deploy and fast to load.

## Installation

1. SSH to your Docker host and navigate to your project directory:

    ```bash
    ssh your_username@your_docker_host
    cd /path/to/your/project/directory
    mkdir -p linkarium
    ```

2. Clone the Linkarium repository:

    ```bash
    git clone https://github.com/udp1024/linkerium.git
    ```

3. Navigate to the Linkarium directory:

    ```bash
    cd linkarium
    sudo chmod +x start-linkarium.sh
    ```

4. run the Docker image:

    ```bash
    ./start-linkarium.sh
    ```
You may need to adjust the paths i the start-linkarium.sh file to accomodate any differences in your environment.
Now, you should be able to access Linkerium at `http://your_docker_host:10080`.

## Usage

To add, remove, or modify tiles, edit the `web/json/data.json` file. Each object in the array should have the following properties:

- `icon`: The URL of the icon image.
- `name`: The name of the web application.
- `description`: A short description of the web application.
- `link`: The URL of the web application.

Here's an example:

```json
[
    {
        "icon": "images/marky-logo-transp.png",
        "name": "Linkarium Repo",
        "description": "Repository of the source code",
        "link": "https://github.com/udp1024/linkarium"
    },
    // Add more objects as needed
]

