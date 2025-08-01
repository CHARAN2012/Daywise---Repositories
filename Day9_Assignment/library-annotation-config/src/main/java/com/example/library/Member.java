package com.example.library;

import org.springframework.stereotype.Component;

@Component
public class Member {
    public void registerMember() {
        System.out.println("Member registered.");
    }

    public void viewMembers() {
        System.out.println("Viewing all members...");
    }
}
