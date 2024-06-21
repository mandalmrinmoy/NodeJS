const fs =require('fs')
fs.appendFile('Hey.txt','\n Hii I am fine...',function(err){
    if(err) console.error(err)
    else console.log('Done')
})