import { Company } from "./company";
import { Person } from "./person";

export interface Complaint {
    id: number;
    noDoc: string;
    dateDoc: string;
    detail: string;
    petition: string;
    createdAt: Date;
    company: Company;
    person: Person;
}