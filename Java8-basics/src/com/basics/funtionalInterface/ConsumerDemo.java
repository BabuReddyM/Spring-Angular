package com.basics.funtionalInterface;

import java.util.function.Consumer;

public class ConsumerDemo {

	public static void main(String[] args) {
		
		Consumer<Integer> consumer = (t) -> 
			System.out.println("The o/p is: " +t);
			
		consumer.accept(4000);
 
	}

}
