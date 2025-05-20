export class Doorman {
    id: number;
    name: string;
    email: string;
    password: string;
    cpf: string;

    constructor(id: number, name: string, email: string, password: string, cpf: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.cpf = cpf;
    }
}