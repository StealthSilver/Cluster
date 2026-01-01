import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    type: "mention" | "reply" | "tribe_activity" | "join_request";
    createdAt: Date;
    userId: string;
    content: string;
    read: boolean;
    relatedId?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    type: "mention" | "reply" | "tribe_activity" | "join_request";
    createdAt: Date;
    userId: string;
    content: string;
    read: boolean;
    relatedId?: string | undefined;
}> & {
    type: "mention" | "reply" | "tribe_activity" | "join_request";
    createdAt: Date;
    userId: string;
    content: string;
    read: boolean;
    relatedId?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    type: "mention" | "reply" | "tribe_activity" | "join_request";
    createdAt: Date;
    userId: string;
    content: string;
    read: boolean;
    relatedId?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    type: "mention" | "reply" | "tribe_activity" | "join_request";
    createdAt: Date;
    userId: string;
    content: string;
    read: boolean;
    relatedId?: string | undefined;
}>> & mongoose.FlatRecord<{
    type: "mention" | "reply" | "tribe_activity" | "join_request";
    createdAt: Date;
    userId: string;
    content: string;
    read: boolean;
    relatedId?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default _default;
//# sourceMappingURL=Notification.d.ts.map