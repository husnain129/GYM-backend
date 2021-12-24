import { Request, Response } from "express";
import Enroll from "../schema/enrollSchema";
import { IEnrollType } from "./../types.d";
import { add, getAll, getOne, update } from "./factory.controller";

interface EntrollRequest {
  body: IEnrollType;
}

interface EntrollRequestWithId {
  body: IEnrollType;
  params: { id: string };
}

const registerEntroll = async (req: EntrollRequest, res: Response) => {
  await add(req.body, res, Enroll);
};

const getEnrolls = async (req: Request, res: Response) => {
  await getAll(res, Enroll);
};

const getOneEnroll = async (req: EntrollRequestWithId, res: Response) => {
  await getOne(req.params.id, res, Enroll);
};

const updateEnroll = async (req: EntrollRequestWithId, res: Response) => {
  await update(req.body, req.params.id, res, Enroll);
};

export { registerEntroll, getEnrolls, getOneEnroll, updateEnroll };
