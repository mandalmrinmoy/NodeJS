const fs=require('fs')
fs.unlink('hii.txt',function(err){
    if(err) console.error(err.message)
    else console.log('Done')
})