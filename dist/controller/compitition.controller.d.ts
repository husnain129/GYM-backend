import { Request, Response } from "express";
import { ICompititon } from "./../types.d";
interface CompetitionRequest {
    body: ICompititon;
}
interface CompetitionRequestWithId {
    body: ICompititon;
    params: {
        id: string;
    };
}
declare const registerCompetition: (req: CompetitionRequest, res: Response) => Promise<void>;
declare const getCompetitions: (req: Request, res: Response) => Promise<void>;
declare const getOneCompetition: (req: CompetitionRequestWithId, res: Response) => Promise<void>;
declare const updateCompetition: (req: CompetitionRequestWithId, res: Response) => Promise<void>;
export { registerCompetition, getCompetitions, getOneCompetition, updateCompetition, };
