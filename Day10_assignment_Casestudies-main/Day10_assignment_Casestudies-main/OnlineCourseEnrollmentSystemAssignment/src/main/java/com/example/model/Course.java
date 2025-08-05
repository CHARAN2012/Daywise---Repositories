package com.example.model;
public class Course {
    private int id;
    public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	private String name;

    public Course() {}
    public Course(int id, String name) {
        this.id = id;
        this.name = name;
    }
}