import { Document } from "mongoose";

export interface IEnroll extends Document {
  id: string;
  name: string;
  age: number;
  weight: number;
  service: number;
  trainer_name: string;
  created_at: Date;
  updated_at: Date;
}

export interface IEnrollType {
  id?: IEnroll["id"];
  name: IEnroll["name"];
  age: IEnroll["age"];
  weight: IEnroll["weight"];
  service: IEnroll["service"];
  trainer_name: IEnroll["trainer_name"];
  created_at: IEnroll["created_at"];
}

type generic = IEnroll | IEnrollType;

export interface ICompititon extends Document {
  id: string;
  name: string;
  email: string;
  weight: number;
  age: number;
}

export interface ICompititonType {
  id?: ICompititon["id"];
  name: ICompititon["name"];
  email: ICompititon["email"];
  weight: ICompititon["weight"];
  age: ICompititon["age"];
}
