import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    createdAt: Date;
    tribeId: string;
    content: string;
    author: string;
    image?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: Date;
    tribeId: string;
    content: string;
    author: string;
    image?: string | undefined;
}> & {
    createdAt: Date;
    tribeId: string;
    content: string;
    author: string;
    image?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: Date;
    tribeId: string;
    content: string;
    author: string;
    image?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: Date;
    tribeId: string;
    content: string;
    author: string;
    image?: string | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: Date;
    tribeId: string;
    content: string;
    author: string;
    image?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default _default;
//# sourceMappingURL=Post.d.ts.map