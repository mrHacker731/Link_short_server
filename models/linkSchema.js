const mongoose = require('mongoose');

const linkSchema = mongoose.Schema({
    redirectUrl: { type: String, required: true },
    uuid: { type: String, required: true },
    systemUrl: { type: String },
    clicks:{type:Number,default:0},

},{timestamps: true});

module.exports = mongoose.model("Link", linkSchema);
