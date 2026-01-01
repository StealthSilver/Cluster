import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    createdAt: Date;
    userId: string;
    avatar: string;
    bio: string;
    joinedTribes: string[];
    activitySummary?: {
        postsCount: number;
        joinedTribesCount: number;
    } | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: Date;
    userId: string;
    avatar: string;
    bio: string;
    joinedTribes: string[];
    activitySummary?: {
        postsCount: number;
        joinedTribesCount: number;
    } | undefined;
}> & {
    createdAt: Date;
    userId: string;
    avatar: string;
    bio: string;
    joinedTribes: string[];
    activitySummary?: {
        postsCount: number;
        joinedTribesCount: number;
    } | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: Date;
    userId: string;
    avatar: string;
    bio: string;
    joinedTribes: string[];
    activitySummary?: {
        postsCount: number;
        joinedTribesCount: number;
    } | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: Date;
    userId: string;
    avatar: string;
    bio: string;
    joinedTribes: string[];
    activitySummary?: {
        postsCount: number;
        joinedTribesCount: number;
    } | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: Date;
    userId: string;
    avatar: string;
    bio: string;
    joinedTribes: string[];
    activitySummary?: {
        postsCount: number;
        joinedTribesCount: number;
    } | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default _default;
//# sourceMappingURL=UserProfile.d.ts.map