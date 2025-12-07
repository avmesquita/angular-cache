import { IToken } from "./itoken.interface";

export interface IAuth {
    username: string;
    instant: Date;
    token: IToken;
}