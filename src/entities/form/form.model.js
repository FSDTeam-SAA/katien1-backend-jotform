import mongoose, { Schema } from 'mongoose';
const formSchema = new Schema(
  {
    type: {
      type: Number,
      enum: [1, 2, 3, 4],
      required: true
    },
    formName: {
      type: String,
      required: [true, 'this field is required'],
      trim: true
    },
    fieldName: [{
      name: { type: String, required: true },
      type: { type: String, required: true, }
    }],
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

const Form = mongoose.model('Form', formSchema);
export default Form;
