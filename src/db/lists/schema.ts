import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  folderId: {
    type: String,
    required: true
  },
  listName: {
    type: String,
    index: true
  }
});

export default schema;
