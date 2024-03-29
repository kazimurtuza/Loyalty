import mongoose from 'mongoose';

const faqModel = new mongoose.Schema({
    title: {
        type: String,
    },
    details: {
        type: String,
    },
    status: {
        type: Number,
        default: 1, // Default value if not provided
        enum: [0, 1], // Example: Only allow values  1=active, or 0=inactive
    },
    is_delete: {
        type: Boolean,
        default: 0, // Default value is set to 0
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

export const Faq=mongoose.models.Faq || mongoose.model("Faq",faqModel)