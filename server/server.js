import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import multer from 'multer';
import routes from './routes';

const server = express();

server.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

server.use(logger('dev'));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use(express.static(path.join(__dirname, '..', 'public')));

server.use('/', routes);

server.use((req, res) => {
  res.status(401).send('Page not found');
})

server.set('PORT', process.env.PORT || 3000);

server.listen(server.get('PORT'), () => {
  console.log(`App started on port ${server.get('PORT')}`);
});