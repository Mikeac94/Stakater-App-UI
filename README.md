# Getting Started with Stakater App UI

This UI project is part of the interview process at [Stakater] (https://stakater.com/) for Mike Ashley Cedric.

## Available Scripts

In the project directory, you can run:

```
npm start

```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
### Deployment

To run the app in a dockerized environment, run the below commands to 1) build the docker image 2) run the docker image 

```
docker build -t stakater-app-ui .
docker run -d -it  -p 80:80/tcp --name react-app stakater-app-ui:latest

```
## License
[MIT](https://choosealicense.com/licenses/mit/)
