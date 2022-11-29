package com.basics.funtionalInterface;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class ConsumerDemo {

	public static void main(String[] args) {
		
//		Consumer<Integer> consumer = (t) -> System.out.println("The o/p is: " +t);
//			
//		consumer.accept(4000);
		
		List<Integer> numberList = Arrays.asList(12,13,17,10);
		
		numberList.forEach(t -> System.out.println("The o/p is: " +t));
 
	}

}
