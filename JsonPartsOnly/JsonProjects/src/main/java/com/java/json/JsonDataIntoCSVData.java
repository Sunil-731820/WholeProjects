package com.java.json;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.apache.commons.io.FileUtils;
import org.json.CDL;
import org.json.JSONArray;
import org.json.JSONObject;

public class JsonDataIntoCSVData {
	public static void main(String[] args) {
		
//		1 : class Data Member 
		String jsonString;
		JSONObject jsonObject;
		String filePath = "C:\\Users\\sunilg\\Desktop\\FileRelatedParts\\JSON11.json";
		try {
//			2 : Reading all content of the data from the json file using readAllbyte() and storing into String
			jsonString = new String(Files.readAllBytes(Paths.get(filePath)));
			
//			Construct the JsonObject using above String
			jsonObject = new JSONObject(jsonString);
			
//			fetching  the Json Array from the JsonObject
			JSONArray docs = jsonObject.getJSONArray(filePath);
			
			File file = new File("C:\\Users\\sunilg\\Desktop\\FileRelatedParts\\Test.csv");
			
			String csvString = CDL.toString(docs);
			FileUtils.writeStringToFile(file, csvString);
			System.out.println("Success");
			
		} catch (IOException e) {
			
		}
		
		
	}

}
