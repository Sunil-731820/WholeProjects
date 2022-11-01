package com.java.fact.Factory;

public class FactoryMainClassUsedAllInfor {
	public static void main(String[] args) {
		ShapeFactory shapeFactory = new ShapeFactory();
		
		//get an object of Circle and call its draw method.
		 Shape shape1 = shapeFactory.getShape("CIRCLE");
		 shape1.draw();
		 Shape shape2 = shapeFactory.getShape("Rectangle");
		 shape2.draw();
	}

}
