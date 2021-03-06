import { Township } from "./township";

export interface Company {
    id: number;
    name: string;
    nit: string;
    phone: string;
    email: string;
    address: string;
    township: Township;
}