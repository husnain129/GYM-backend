import { Response } from "express";
import { Model } from "mongoose";
declare const add: (body: any, res: Response, db: Model<any>) => Promise<void>;
declare const getAll: (res: Response, db: Model<any>) => Promise<void>;
declare const getOne: (id: string, res: Response, db: Model<any>) => Promise<void>;
declare const update: (body: any, id: string, res: Response, db: Model<any>) => Promise<void>;
export { add, getAll, getOne, update };
