import { User } from "./user";

export class ResUser {
    constructor (    
    public error: boolean,
    public code: number,
    public message: string,
    public data: User,
  
) {}
}
