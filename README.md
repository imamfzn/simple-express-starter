# simple-express-starter
just a simple implementation of express.js

## How To

### Run without docker

```bash

# inside this repository / directory
npm install
npm start
````

Open `http://localhost:3000` on your browser, there should be a response like:

```json
{
  "data": {
    "message": "Hello :)"
  }
}
```

### Run With Docker

Build image:
```bash

docker build -t simple-express-starter:v0.1.0
````

Run container:
```bash
docker run -d -p 3000:3000 simple-express-starter:v0.1.0
````

Open `http://localhost:3000` on your browser, there should be a response like:

```json
{
  "data": {
    "message": "Hello :)"
  }
}
```
