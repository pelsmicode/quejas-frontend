import { Company } from "./company";
import { Person } from "./person";

export interface Complaint {
    id: number;
    no_doc: string;
    date_doc: string;
    detail: string;
    petition: string;
    created_at: Date;
    company: Company;
    person: Person;
}