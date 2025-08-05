package com.example.hospital.controller;
import com.example.hospital.entity.MedicalRecord;
import com.example.hospital.entity.Patient;
import com.example.hospital.repository.MedicalRecordRepository;
import com.example.hospital.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/patients")
public class PatientController {
    private final PatientRepository patientRepository;
    private final MedicalRecordRepository medicalRecordRepository;
    @Autowired
    public PatientController(PatientRepository patientRepository,
                             MedicalRecordRepository medicalRecordRepository) {
        this.patientRepository = patientRepository;
        this.medicalRecordRepository = medicalRecordRepository;
    }
    @PostMapping
    public Patient addPatient(@RequestBody Patient patient) {
        return patientRepository.save(patient);
    }
    @GetMapping
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }
   @GetMapping("/{id}/records")
    public List<MedicalRecord> getPatientRecords(@PathVariable Long id) {
        return medicalRecordRepository.findByPatientId(id);
    }
}