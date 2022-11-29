package com.basics.dateandtime;
import java.text.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.Month;

public class DateTime {

	public static void main(String[] args) {
		
		//we don't need new because we don't want to create a new object.
		LocalDate today = LocalDate.of(2022,Month.AUGUST, 15);
		System.out.println(today);
		
		LocalDateTime rightnow = LocalDateTime.now();
		System.out.println(rightnow);
		
		LocalTime t1 = LocalTime.now();
		System.out.println(t1);
	}

}
