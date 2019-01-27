const express = require('express');
const app = express();

const utils = require('./core/utils');
const msg = require('./core/msg');
const connection = require('./models/connection');

// TODO: sacar luego fuera
const properties = {
  staticFolders: ['media'],
  restBaseUrl: 'rest',
  restVersion: 'v1',
  dbPath: 'mongodb://localhost:27017/',
  dbName: 'blog'
}; 

class Server {
  
  init() {
    this.initDB();
    this.initPublicRest();
    this.initStaticFiles();    
    this.initErrors();
    this.startServer();
  }

  initDB() {
    connection.initConnection(properties.dbPath, properties.dbName);
  } 

  initStaticFiles() {
    let len = properties.staticFolders.length;

    app.get('/', function (req, res) {
      res.sendFile(utils.getBasePath('/public/index.html'));      
    });

    /* Preparamos un mid static por cada folder definido en el properties */
    while (len--) {
      app.use(`/${properties.staticFolders[len]}`, express.static(utils.getBasePath(`/public/${properties.staticFolders[len]}`)));
    }
  }

  initPublicRest() {
    const users = require('./controllers/users');
    app.use(`/${properties.restBaseUrl}/${properties.restVersion}/users`, users);
  }
 
  initErrors() {    
    app.use( (req, res)=> {
      res.status(404).send('404: Not Found');
    });

    app.use( (err, req, res, next)=> {
      res.status(500).send(`Sever Error: ${err}`);      
    });
  }

  startServer() {
    app.listen(3000, function () {
      msg.showSuccess('Server listening on port 3000!');
    });
  }
}

const server = new Server();
server.init();

