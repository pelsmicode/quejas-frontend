import { Branch } from "./diaco.branch";
import { Township } from "./township";

export interface Person {
    id: number;
    name: string;
    lastname: string;
    dpi: string;
    nit: string;
    gender: string;
    email: string;
    phone: string;
    township: Township;
    branch: Branch;
}