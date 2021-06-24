// Implement own toString method for objects
// Input: object
// Output: string

// Example 1: 
// Input: { elem1: "test", elem2: { value: 10 } }
// Output: "{ elem1: "test", elem2: { value: 10 } }"

// Example 2: 
// Input: {}
// Output: "{}"

function main(obj) {
    // Change code below. 
    let str = "{";
    
    Object.keys(obj).forEach((k, i)=>{
      str += ` ${k}: `;
      if(typeof obj[k]  === "object"){
        str += main(obj[k]);
        str += ' ';
      }
      else{
        str += `${obj[k]}`;
        if((i === Object.keys(obj).length - 1))
          str += ` `;
      }
      if(!(i === Object.keys(obj).length - 1))
        str += ',';
    })
  
     
    return str + '}';
  }
  
  module.exports = main;