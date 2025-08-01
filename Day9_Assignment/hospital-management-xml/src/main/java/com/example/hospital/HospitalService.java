package com.example.hospital;

public class HospitalService {

    private Patient patient;
    private Appointment appointment;
    private Billing billing;

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public void setAppointment(Appointment appointment) {
        this.appointment = appointment;
    }

    public void setBilling(Billing billing) {
        this.billing = billing;
    }

    public void performServices() {
        patient.registerPatient();
        patient.getPatientDetails();

        appointment.bookAppointment();
        appointment.cancelAppointment();

        billing.generateBill();
        billing.sendBill();
    }
}
