const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    dateOfPurchase: { type: Date, default: Date.now, required: true }
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
