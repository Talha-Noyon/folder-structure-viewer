const mongoose = require('mongoose');
const {Schema} = mongoose;

const folderSchema = new Schema({
    name:String,
    createdOn: Date,
    isActive: {type: Boolean, default: false},
    _parentFolder: {type:Schema.Types.ObjectId, ref:'Folder' },
    _id: {type:Schema.Types.ObjectId }
});
folderSchema.statics.findOneOrCreate = function findOneOrCreate(condition, doc) {
    const self = this;
    const newDocument = doc;

    return new Promise((resolve, reject) => {

        return self.findOne(condition)
            .then((result) => {
                if (result) {
                    return resolve(result);
                }
                return self.create(newDocument)
                    .then((result) => {
                        return resolve(result);
                    }).catch((error) => {
                        return reject(error);
                    })
            }).catch((error) => {
                return reject(error);
                })
        });
};
/*folderSchema.virtual('childs', {
    ref:'Folder',
    localField: '_id',
    foreignField: '_parentFolder'
  });*/
mongoose.model('Folder', folderSchema);
