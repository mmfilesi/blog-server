const mongoose = require('mongoose');
const msg = require('../core/msg');

const connection = (function() {
	const module  	= {};

 	module.initConnection = (dbPath, dbName)=> {
		mongoose.connect(dbPath + dbName, {useNewUrlParser: true}, (err, res)=> {  
			if (err) {
				msg.showError('ERROR: connecting to Database. ' + err);
				return false;
			} else {
        msg.showSuccess('Database connected');
				return mongoose;
			} 	
		});
  };  

  module.closeConnection = ()=> {
    mongoose.connection.close( ()=> {
      msg.showNotice('Mongoose close conection');
   });
  };

	return {
    initConnection: module.initConnection
	};

} )();

module.exports = connection;