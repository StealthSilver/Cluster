import mongoose from 'mongoose';
const notificationSchema = new mongoose.Schema({
    userId: { type: String, required: true, index: true },
    type: { type: String, enum: ['mention', 'reply', 'tribe_activity', 'join_request'], required: true },
    content: { type: String, required: true },
    relatedId: { type: String },
    read: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now, index: true }
});
export default mongoose.model('Notification', notificationSchema);
//# sourceMappingURL=Notification.js.map