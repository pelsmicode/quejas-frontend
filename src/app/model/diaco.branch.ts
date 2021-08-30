import { Township } from "./township";

export interface Branch {
    id: number;
    name: string;
    township: Township;
}