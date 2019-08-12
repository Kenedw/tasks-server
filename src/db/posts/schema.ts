import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  listId: {
    type: String,
    required: true
  },
  scope: {
    type: String,
    index: true
  },
  title: {
    type: String,
    index: true
  }
}, { timestamps: true });

export default schema;
