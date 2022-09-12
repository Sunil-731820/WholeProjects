package JAVAProjects.FileInJava;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.SequenceInputStream;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.Iterator;
import java.util.Vector;

public class AddingMoreThanFourFile {
    public static void main(String[] args) throws IOException {
        System.out.println("this is the example of the Adding more than four files in java");

        try {
            // Reading data from the input file
            FileInputStream file1 = new FileInputStream("C:\\Users\\sunilg\\Desktop\\FileRelatedParts\\firstfile.txt");
            FileInputStream file2 = new FileInputStream("C:\\Users\\sunilg\\Desktop\\FileRelatedParts\\secondfile.txt");
            FileInputStream file3 = new FileInputStream("C:\\Users\\sunilg\\Desktop\\FileRelatedParts\\thirdfile.txt");
            FileInputStream file4 = new FileInputStream("C:\\Users\\sunilg\\Desktop\\FileRelatedParts\\fourthfile.txt");

            // Creating the vector for storing all files here
            Vector vc = new Vector<>();
            vc.add(file1);
            vc.add(file2);
            vc.add(file3);
            vc.add(file4);

            // Enumerartion allow to store multiple file 
            Enumeration e = vc.elements();

            // Sequence Input Stream allow to read data file one by one
            SequenceInputStream ins =  new SequenceInputStream(e);

            // for writing data into the another file is 
            FileOutputStream out = new FileOutputStream("C:\\Users\\sunilg\\Desktop\\FileRelatedParts\\AnotherMultipleFile.txt");
            int i;
            while(((i=ins.read())!=-1)){
                System.out.print((char)i);
                out.write(i);
            }

            // ArrayList

            // ArrayList list1 = new ArrayList<>();
            // list1.add(file1);
            // list1.add(file2);
            // list1.add(file3);
            // list1.add(file4);
            // System.out.println(list1);

            // Iterator itr = list1.iterator();
            // while(itr.hasNext()){
            //     System.out.println(itr.next());
            // }

            
            // while((i=))
        } catch (FileNotFoundException e) {
        System.out.println("InValid file Path Name can you check once");
            e.printStackTrace();
        }
        
    }
}
