export interface Payment
{
    id: number;
    createdDate: Date | null;
    amount: number;
    description: string;
    appointmentId: number;
}
