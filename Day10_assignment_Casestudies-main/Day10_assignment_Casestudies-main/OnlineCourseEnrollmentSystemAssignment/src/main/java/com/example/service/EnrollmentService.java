package com.example.service;
import com.example.model.Student;
import org.springframework.stereotype.Service;
@Service
public class EnrollmentService {
    public String enroll(Student student) {
        return "Student" + student.getName() + "enrolled successfully for Course ID:" + student.getCourseId();
    }
}