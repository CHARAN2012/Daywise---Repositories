package com.example.controller;
import com.example.model.Course;
import com.example.model.Student;
import com.example.service.EnrollmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.util.Arrays;
import java.util.List;
@Controller
public class CourseController {
    @Autowired
    private EnrollmentService enrollmentService;
    @GetMapping("/")
    public String redirectToCourses() {
        return "redirect:/courses";
    }
    @GetMapping("/courses")
    public String showCourses(Model model) {
        List<Course> courses = Arrays.asList(
                new Course(101, "Java Programming"),
                new Course(102, "Web Development"),
                new Course(103, "Data Structures")
        );
        model.addAttribute("courseList", courses);
        return "courses";
    }
    @GetMapping("/enroll")
    public String showEnrollmentForm(Model model) {
        model.addAttribute("student", new Student());
        return "enroll";
    }
    @PostMapping("/submitEnrollment")
    public String submitEnrollment(@ModelAttribute Student student, Model model) {
        String confirmation = enrollmentService.enroll(student);
        model.addAttribute("message", confirmation);
        return "success";
    }
}