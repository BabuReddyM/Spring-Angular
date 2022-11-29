package com.basics.funtionalInterface;

import java.util.function.Predicate;

public class PredicateDemo implements Predicate<Integer>{
	
	

	public static void main(String[] args) {
		Predicate<Integer> predicate = new PredicateDemo();
		System.out.println(predicate.test(20));
	}

	@Override
	public boolean test(Integer t) {
		if(t % 2 == 0) {
			return true;
		}
		return false;
	}

}