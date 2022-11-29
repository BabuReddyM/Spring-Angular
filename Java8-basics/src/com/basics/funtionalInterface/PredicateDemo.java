package com.basics.funtionalInterface;

import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class PredicateDemo /*implements Predicate<Integer>*/{
	
	

	public static void main(String[] args) {
		/*
		 * Predicate<Integer> predicate = new PredicateDemo();
		 * System.out.println(predicate.test(20));
		 */
		
		/*
		 * Predicate<Integer> predicate = (t) -> { if( t%2 == 0) { return true; } return
		 * false; }; System.out.println(predicate.test(3));
		 */
		
		/*
		 * Predicate<Integer> predicate = (t) -> t%2 == 0;
		 * System.out.println(predicate.test(6));
		 */
		List<Integer> numberList = Arrays.asList(12,13,17,10);
		
		numberList.stream().filter((t) -> t%2 == 0).forEach(t -> System.out.println("The o/p is: " +t));
	}

	/*
	 * @Override public boolean test(Integer t) { if(t % 2 == 0) { return true; }
	 * return false; }
	 */

}
