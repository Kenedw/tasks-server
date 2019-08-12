import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  folderName: {
    type: String,
    required: true
  },
  folderColor: {
    type: String,
    lowercase: true,
    index: true
  }
});

export default schema;
