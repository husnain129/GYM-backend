import { Response } from "express";
import { Model } from "mongoose";

let APIresponse = (res: Response, data: any) => {
  if (data) {
    res.status(200).json({
      ok: true,
      data: data,
    });
  }
};

const add = async (body: any, res: Response, db: Model<any>) => {
  const data = await db.create(body);
  APIresponse(res, data);
};

const getAll = async (res: Response, db: Model<any>) => {
  const data = await db.find();
  APIresponse(res, data);
};

const getOne = async (id: string, res: Response, db: Model<any>) => {
  try {
    const data = await db.findById(id);
    APIresponse(res, data);
  } catch (e) {
    res.status(501).send({ok:false,error:"Something went wrong"});
  }
};

const update = async (body: any, id: string, res: Response, db: Model<any>) => {
  await db
    .findByIdAndUpdate(id, body)
    .then(() => APIresponse(res, "data update successfully"));
};

export { add, getAll, getOne, update };
