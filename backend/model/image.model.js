const mongoose = require("mongoose")
const imageSchema = mongoose.Schema({
    path: { type: String, required: true },
    filename: { type: String, required: true },
})

const ImageModel = mongoose.model("images", imageSchema)

module.exports = {ImageModel}