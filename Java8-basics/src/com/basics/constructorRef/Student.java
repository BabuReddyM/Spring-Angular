package com.basics.constructorRef;

public class Student {
	
	public Student() {
		System.out.println("Creating object of the student class");
	}
	
	public void display(String name, String standard) {
		System.out.println("the sduents name is: " + name);
		System.out.println("this is a student");
		System.out.println("the sudents standard is "+standard);
	}
}
