import { Request, Response } from "express";
import Compitition from "../schema/compititionSchema";
import { ICompititon } from "./../types.d";
import { add, getAll, getOne, update } from "./factory.controller";

interface CompetitionRequest {
  body: ICompititon;
}

interface CompetitionRequestWithId {
  body: ICompititon;
  params: { id: string };
}

const registerCompetition = async (req: CompetitionRequest, res: Response) => {
  await add(req.body, res, Compitition);
};

const getCompetitions = async (req: Request, res: Response) => {
  await getAll(res, Compitition);
};

const getOneCompetition = async (
  req: CompetitionRequestWithId,
  res: Response
) => {
  await getOne(req.params.id, res, Compitition);
};

const updateCompetition = async (
  req: CompetitionRequestWithId,
  res: Response
) => {
  await update(req.body, req.params.id, res, Compitition);
};

export {
  registerCompetition,
  getCompetitions,
  getOneCompetition,
  updateCompetition,
};
