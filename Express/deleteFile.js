const fs=require('fs')


app.delete((req,res)=>{
    const fileId=req.params.id
    if(fileId){
        fs.unlinkSync('')
    }  
})