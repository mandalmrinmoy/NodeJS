const fs=require('fs')
fs.copyFile('Hey.txt','hello.txt',function(err){
    if(err) console.error(err)
    else console.log('Copy Done')
})