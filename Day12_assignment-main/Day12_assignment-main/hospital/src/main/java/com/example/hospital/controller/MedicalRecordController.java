package com.example.hospital.controller;
import com.example.hospital.entity.MedicalRecord;
import com.example.hospital.repository.MedicalRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/medical-records")
public class MedicalRecordController {
    private final MedicalRecordRepository medicalRecordRepository;
    @Autowired
    public MedicalRecordController(MedicalRecordRepository medicalRecordRepository) {
        this.medicalRecordRepository = medicalRecordRepository;
    }
    @PostMapping
    public MedicalRecord addMedicalRecord(@RequestBody MedicalRecord medicalRecord) {
        return medicalRecordRepository.save(medicalRecord);
    }
}