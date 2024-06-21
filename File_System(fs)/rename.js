const fs =require('fs')
fs.rename('Hey.txt','hii.txt',function(err){
    if(err) console.error(err)
    else console.log('Done')
})