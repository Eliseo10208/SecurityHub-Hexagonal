export class User{
    constructor (
        readonly id:number,
        readonly name:string,
        readonly lastName:string,
        readonly mail:string,
        readonly password:string, 
        readonly phone:number,
        readonly home:number,
    ){}
}