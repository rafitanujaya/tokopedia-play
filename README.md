# tokopediaplay

Web tokopedia-play clone

## Prerequisite

1. Docker 4.22.0

## How to Install

1. Go to any safe directory.
2. Clone the repository:
   ```sh
   git clone https://github.com/rafinujaya/tokopedia-play
   cd tokopedia-play/
   ```

## How to Run

### Local

Run this command/ wsl for windows from directory tokopedia-play/

1. Build docker:

```sh
docker build -t tokopediaplay .
```

2. Run docker:

```sh
docker run -dp 5001:3000 --name tokopediaplay  tokopediaplay
```

3. Open your web browser and go to `http://localhost:5001` to view web tokopedia-play.

### Docker Hub

1. Go to any safe directory.

2. Pull docker hub:

```sh
docker pull rafitanujaya/tokopediaplay:1.0
```

3. Run docker:

```sh
docker run -dp 5001:3000 --name tokopediaplay  tokopediaplay
```

4. Open your web browser and go to `http://localhost:5001` to view web tokopedia-play.
