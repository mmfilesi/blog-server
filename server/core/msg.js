const clc = require('cli-color');

const styleError = clc.red;
const styleWarn = clc.yellow;
const styleNotice = clc.blue;
const styleSuccess = clc.green;

const msg = (function() {
	const module  = {};

  module.showError = (err)=> {
    let msgError = '';

    msgError += '«------------------------------------------------\n';
    msgError += ' o.O ' + err + '\n';
    msgError += '------------------------------------------------»';    
    console.log(styleError(msgError)); 		
  };

  module.showWarning = (msg)=> {
    let msgWarning = '';

    msgWarning += '«------------------------------------------------\n';
    msgWarning += ' U.U ' + msg + '\n';
    msgWarning += '------------------------------------------------»';    
    console.log(styleWarn(msgWarning)); 		
  };

  module.showNotice= (msg)=> {
    let msgNotice = '';

    msgNotice += '«------------------------------------------------\n';
    msgNotice += '  (►.◄) ' + msg + '\n';
    msgNotice += '------------------------------------------------»';    
    console.log(styleNotice(msgNotice)); 		
  };

  module.showSuccess = (msg)=> {
    let msgSuccess = '';

    msgSuccess += '«------------------------------------------------\n';
    msgSuccess += ' ^.^ ' + msg + '\n';
    msgSuccess += '------------------------------------------------»';    
    console.log(styleSuccess(msgSuccess)); 		
  };

	return {
    showError: module.showError,
    showSuccess: module.showSuccess,
    showNotice: module.showNotice,
    showWarning: module.showWarning
	};

} )();

module.exports = msg;