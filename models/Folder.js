const mongoose = require('mongoose');
const folderSchema = new mongoose.Schema({
  name: String,
  createdOn: Date,
  isActive: {type: Boolean, default: false},
  _parentFolder: {type: mongoose.Schema.Types.ObjectId, ref: 'Folder'}
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
folderSchema.virtual('childs', {
  ref: 'Folder',
  localField: '_id',
  foreignField: '_parentFolder'
});
folderSchema.set('toObject', { virtuals: true });
folderSchema.set('toJSON', { virtuals: true });
mongoose.model('Folder', folderSchema, 'folders');
