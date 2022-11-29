package com.basics.constructorRef;

public class ConsMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println("we are studying Constructor references");
		
		IStudent iStudent = () -> new Student();
		
		Student student = iStudent.getStudent();
		//String b = null;
		student.display("bobby","10");

	}

}
