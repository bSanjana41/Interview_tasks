import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const bookingSchema = new Schema({
  user_id: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  ],
  room_id: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Room",
    },
  ],

  checkIn: {
    type: Date,
    require: true,
  },
  checkOut: {
    type: Date,
    require: true,
  },
  status: {
    type: String,
    require: true,
    enum: ["pending", "cancel", "approved", "active", "completed"],
  },
});

const roomSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    capacity: {
      adults: {
        type: Number,
        required: true,
      },
      childs: {
        type: Number,
        default: 0,
      },
    },
    roomPrice: {
      type: Number,
      required: true,
    },
    gallery: [
      {
        type: String,
        require: true,
      },
    ],
    featuredImage: {
      type: String,
      require: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const User = model("User", UserSchema);
const Booking = model("Booking", bookingSchema);
const Room = model("Room", roomSchema);

export { User, Booking, Room };
