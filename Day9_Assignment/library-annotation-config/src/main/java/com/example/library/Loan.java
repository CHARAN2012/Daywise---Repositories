package com.example.library;

import org.springframework.stereotype.Component;

@Component
public class Loan {
    public void issueBook() {
        System.out.println("Book issued to the member.");
    }

    public void returnBook() {
        System.out.println("Book returned to the library.");
    }
}
