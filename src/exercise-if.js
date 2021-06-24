// Implement IF withot using 'if', 'switch', '?', '&&', '||'
// Function main will receive boolean value, function trulyCallBack and function falsyCallBack
// If value is true invoke trulyCallBack and return the result in function main;
// If value is false invoke falsyCallBack and return the result in function main;

function main(boolean, trulyCallBack, falsyCallBack) {
  // Change code below. 
  while (boolean){
    return trulyCallBack();
    break
  }
  return falsyCallBack()

}

module.exports = main;