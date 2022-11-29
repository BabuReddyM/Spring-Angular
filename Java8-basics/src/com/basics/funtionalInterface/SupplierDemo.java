package com.basics.funtionalInterface;

import java.util.function.Supplier;

public class SupplierDemo /*implements Supplier<String>*/{

	/*
	 * @Override public String get() {
	 * 
	 * return "Hello World"; }
	 */
	public static void main(String[] args) {
		Supplier<String> supplier= () -> "Supplier";
		System.out.println(supplier.get());
		
	}

}
