package com.java.json;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class JsonArrayExample {
	public static void main(String[] args) {
		System.out.println("Creating the json Array ");
		
		JSONArray array = new JSONArray();
		array.add(Boolean.TRUE);
		array.add("lorem ipsum");
		
		System.out.println("the json Array is ");
		System.out.println(array);
//		creating the json Object using Json Object
		
		JSONObject obj = new JSONObject();
		obj.put("name", "Harish");
		obj.put("age", 22);
		obj.put("city", "Bangalore");
		System.out.println("the Json Object is ");
		System.out.println(obj);
		
//		putting the jsonObject into jsonArray
		
		array.add(obj);
		System.out.println("the whole json is");
		System.out.println(array);
	}

}
