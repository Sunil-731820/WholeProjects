package JAVAProjects.Basic;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

class Employ{

    // object ki properties 
     int id;
     String name;
     String startDate;
     String endDate;

    //  constructor bina object  create kiye call ho jata hai
    public Employ(int id, String name, String startDate, String endDate) {
        this.id = id;// instance variable ke liye 
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    // print karne ke liye 
    @Override
    public String toString() {
        return "Employ [endDate=" + endDate + ", id=" + id + ", name=" + name + ", startDate=" + startDate + "]";
    }
    
}

class IdComparator1 implements Comparator<Employ>{

    @Override
    public int compare(Employ o1, Employ o2) {
       if(o1.id==o2.id){
        return 0;
       }else if(o1.id>o2.id){
        return 1;
       }else {
        return -1;
       }
    }
    
}

class NamedComparator1 implements Comparator<Employ>{

    @Override
    public int compare(Employ o1, Employ o2) {
      return (o1.name.compareTo(o2.name));
    }   
}

class StartDateComparator1 implements Comparator<Employ>{

    @Override
    public int compare(Employ o1, Employ o2) {
       return (o1.startDate.compareTo(o2.startDate));
    }
    
}

class EndDateComparator1 implements Comparator<Employ>{

    @Override
    public int compare(Employ o1, Employ o2) {
        return (o1.endDate.compareTo(o2.endDate));
    }
    
}

public class ReadingDataFromFileAndSorting {
    //Reading the data from the file okay
    public static void readDataFromFile() throws IOException{
        // System.out.println("reading data from the file and display it on the console ");

        BufferedReader reader = null;
        BufferedWriter writer = null;

        ArrayList<Employ> list1 = new ArrayList<Employ>();
        try {
            reader = new BufferedReader(new FileReader("C:\\Users\\sunilg\\Desktop\\data.txt"));
            String currentLine = reader.readLine();
            while(currentLine!=null){
                // System.out.println("This is current Line");
                System.out.println(currentLine);
                String[] currentLineArray= currentLine.split(" ");
                Employ e=new Employ(Integer.parseInt(currentLineArray[0]), currentLineArray[1], currentLineArray[2], currentLineArray[3]);
                list1.add(e);
                currentLine = reader.readLine();
            }

            // this is sorting the data by id 
            // System.out.println("the list is data after sorting By ID ");
            // System.out.println("before sorting the list of the data is ");
            // System.out.println(list1);
            // Collections.sort(list1, new IdComparator1());
            // System.out.println("after sorting the data is ");
            // System.out.println(list1);

            // this is sorting the data By Name

            // System.out.println("after sorting the data by NAME ");
            // Collections.sort(list1, new NamedComparator1());
            // System.out.println(list1);
// 
            // this is sorting the data by StartDate 
// 
            // System.out.println("after sorting the data by START DATE ");
            // Collections.sort(list1, new StartDateComparator1());
            // System.out.println(list1);
            // 
// 
            // This is sorting the data by endStart 
            // System.out.println("after sorting the data by END DATE ");
            // Collections.sort(list1, new EndDateComparator1());

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
 
    }

    public static void main(String[] args) throws IOException {
        System.out.println("This is reading data from the file ");
        readDataFromFile();
    }
}
