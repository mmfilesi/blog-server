/*
  Módulo para gestionar las respuestas rest
*/
const adminResponses = (function() {
	const module  = {};

  module.sendSuccess = (res, data)=> {
    res.status(200).json(data);
  };

  module.sendNotFound = (res, _data_)=> {
    const data = _data_ ? _data_ : {ko: 'resource not found'};

    res.status(404).json(data);
  };

	return {
    sendSuccess: module.sendSuccess,
    sendNotFound: module.sendNotFound
	};

} )();

module.exports = adminResponses;