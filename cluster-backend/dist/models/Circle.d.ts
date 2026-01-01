import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    createdAt: Date;
    userId: string;
    connections: {
        closenessScore: number;
        personId?: string | undefined;
    }[];
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: Date;
    userId: string;
    connections: {
        closenessScore: number;
        personId?: string | undefined;
    }[];
}> & {
    createdAt: Date;
    userId: string;
    connections: {
        closenessScore: number;
        personId?: string | undefined;
    }[];
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: Date;
    userId: string;
    connections: {
        closenessScore: number;
        personId?: string | undefined;
    }[];
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: Date;
    userId: string;
    connections: {
        closenessScore: number;
        personId?: string | undefined;
    }[];
}>> & mongoose.FlatRecord<{
    createdAt: Date;
    userId: string;
    connections: {
        closenessScore: number;
        personId?: string | undefined;
    }[];
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default _default;
//# sourceMappingURL=Circle.d.ts.map