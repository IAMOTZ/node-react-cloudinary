import path from 'path';
import express from 'express';
import logger from 'morgan';
import routes from './routes';

const server = express();

/*
  This middleware enables cross-origin requests.
  It allows the client and server to run on different ports but still communicate with each other.
  More detials at https://dzone.com/articles/cors-in-node
*/
server.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

/* Log incoming request to console */
server.use(logger('dev'));

/* Serve the static files */
server.use(express.static(path.join(__dirname, '..', 'public')));

/* Routing */
server.use('/', routes);

/* Unknown routes */
server.use((req, res) => {
  res.status(404).send('Page not found');
})

/* The default port is 3000 */
const port = process.env.PORT || 3000;

/* Start the applciation */
server.listen(port, () => {
  console.log(`App started on port ${port}`);
});