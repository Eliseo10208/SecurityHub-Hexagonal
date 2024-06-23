export class User {
    constructor(
        readonly idUser: number,
        readonly name: string,
        readonly lastName: string,
        readonly mail: string,
        readonly phone: number,
        readonly password: string,
        readonly home: number
    ) {}
}
