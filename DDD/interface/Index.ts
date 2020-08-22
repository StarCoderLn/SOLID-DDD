import { Model } from "../models/user";

export interface Index {
    getUser(id: number): Model.User 
}