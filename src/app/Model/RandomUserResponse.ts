export class RandomUserResponse{
    public results : User[];
    public info : Info;
}
export class User{
    public gender : string;
}
export class Info{
    public version: string;
}