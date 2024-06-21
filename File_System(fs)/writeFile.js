const fs=require('fs')
fs.writeFile('Hey.txt','Hello!!! How are you?',function(err){
    if(err) console.error(err.message)
    else console.log('Done')
})