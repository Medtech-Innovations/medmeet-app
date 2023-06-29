export interface Appointment {
  id: number,
  createdDate: Date | null;
  appointmentDate: Date | null;
  minutesDuration: number;
  appointmentSessionUrl: string;
  appointmentPrescriptionUrl: string;
  paymentId: number;
  userId: number;
  status: boolean;
  givenDoctorId: number;
}
