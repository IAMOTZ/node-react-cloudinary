import path from 'path';
import express from 'express';
import logger from 'morgan';
import routes from './routes';

const server = express();

// This middleware allows cross-origin request.
// It is kept here so that you can develop react on another port[webpack-dev-server]
// And also run your server on another port
server.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

server.use(logger('dev'));

server.use(express.static(path.join(__dirname, '..', 'public')));

server.use('/', routes);

server.use((req, res) => {
  res.status(401).send('Page not found');
})

server.listen(3000, () => {
  console.log(`App started on port 3000`);
});