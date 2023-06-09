import {Appointment} from "./appointment";

export interface Payment
{
    id: number;
    createdDate: Date | null;
    amount: number;
    description: string;
    appointment: Appointment | null;
}
