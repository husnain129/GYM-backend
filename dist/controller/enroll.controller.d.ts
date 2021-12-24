import { Request, Response } from "express";
import { IEnrollType } from "./../types.d";
interface EntrollRequest {
    body: IEnrollType;
}
interface EntrollRequestWithId {
    body: IEnrollType;
    params: {
        id: string;
    };
}
declare const registerEntroll: (req: EntrollRequest, res: Response) => Promise<void>;
declare const getEnrolls: (req: Request, res: Response) => Promise<void>;
declare const getOneEnroll: (req: EntrollRequestWithId, res: Response) => Promise<void>;
declare const updateEnroll: (req: EntrollRequestWithId, res: Response) => Promise<void>;
export { registerEntroll, getEnrolls, getOneEnroll, updateEnroll };
