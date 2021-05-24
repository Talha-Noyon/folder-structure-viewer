const mongoose = require('mongoose');
const Folder = mongoose.model('Folder');

(async()=>{
    try{
        
        const now = Date.now();
        const rootFolder = new Folder({
            name:'root',
            createdOn:now,
            _parentFolder:null
        })
        
        Folder.findOneOrCreate({_parentFolder:null},rootFolder);
        console.log("Found/Created a root folder!");
         
    }
    catch(err){
        console.log("error creating/fetching user/default folder",err);
    }
})()