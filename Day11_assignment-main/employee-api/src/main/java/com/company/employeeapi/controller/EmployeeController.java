package com.company.employeeapi.controller;
import com.company.employeeapi.model.Employee;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class EmployeeController {
    @GetMapping("/employee")
    public Employee getEmployeeInfo() {
        return new Employee(101, "John Doe", "Engineering");
    }
}