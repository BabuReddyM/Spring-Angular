package com.basics.methodReferences;

public class RefDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Method references demo");
		
		/*
		 * IWork iWork = () -> { System.out.println("this is do project from Iwork"); };
		 * iWork.doProject();
		 */
		
		IWork iWork = Project::projectProgress; /*not a scope resolution operator but a 
		method reference symbol, no parenthesis as we are not calling the method but referring*/
		iWork.doProject();
		
		Runnable runnable = Project::threadTask;
		
		Thread t1 = new Thread(runnable);
		//t1.start();
		
		IWork iWork1 = Project::oddtill100;
		iWork1.doProject();
		}

	}


