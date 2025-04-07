//Promise 
//to handle code in a better way
//is object from a operation
//mention the status of the operation - operation return a promise
//3 states 
    //1.waiting/pending for input or something
    //2.fulfilled/resolved - done
    //3.rejected/error in the operation

const { read } = require('fs');

const fs = require('fs').promises;

const readFile = (filepath)=>{
    return fs.readFile('file.txt','utf8')//return a promise
}

readFile('file.txt').then((data)=>{
    console.log(data);
})

.catch((err)=>{
    console.error(err);
})