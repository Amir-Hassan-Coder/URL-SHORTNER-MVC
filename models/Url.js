import mongoose from "mongoose";

const urlSchema = mongoose.Schema(
    {
           shortCode:String,
    longUrl:String
    }
)

export const userUrl = mongoose.model("userUrl", urlSchema);