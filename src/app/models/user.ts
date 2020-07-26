export class User{
    constructor(
        public _id: string,
        public name: string,
        public lastName: string,
        public email: string,
        public country: string,
        public address: string,
        public password: string
    ){}
}