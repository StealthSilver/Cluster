import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    name: string;
    createdAt: Date;
    category: "sports" | "technology" | "art" | "wellness" | "learning" | "other";
    isPublic: boolean;
    members: string[];
    createdBy: string;
    description?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    createdAt: Date;
    category: "sports" | "technology" | "art" | "wellness" | "learning" | "other";
    isPublic: boolean;
    members: string[];
    createdBy: string;
    description?: string | undefined;
}> & {
    name: string;
    createdAt: Date;
    category: "sports" | "technology" | "art" | "wellness" | "learning" | "other";
    isPublic: boolean;
    members: string[];
    createdBy: string;
    description?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    createdAt: Date;
    category: "sports" | "technology" | "art" | "wellness" | "learning" | "other";
    isPublic: boolean;
    members: string[];
    createdBy: string;
    description?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    createdAt: Date;
    category: "sports" | "technology" | "art" | "wellness" | "learning" | "other";
    isPublic: boolean;
    members: string[];
    createdBy: string;
    description?: string | undefined;
}>> & mongoose.FlatRecord<{
    name: string;
    createdAt: Date;
    category: "sports" | "technology" | "art" | "wellness" | "learning" | "other";
    isPublic: boolean;
    members: string[];
    createdBy: string;
    description?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default _default;
//# sourceMappingURL=Tribe.d.ts.map