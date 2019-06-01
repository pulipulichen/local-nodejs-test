console.log('OK')

var execSh = require("exec-sh");

// run interactive bash shell
execSh("c:", function(err){
  if (err) {
    console.log("Exit code: ", err.code);
    return;
  }
});
