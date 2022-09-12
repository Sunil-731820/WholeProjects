package JAVAProjects.FileInJava;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.SequenceInputStream;

public class SequenceInputStreaminFile {
    public static void main(String[] args) throws IOException {
        System.out.println("this is the example of the sequence Input Stream in java");

        try {
            FileInputStream file1 = new FileInputStream("C:\\Users\\sunilg\\Desktop\\FileRelatedParts\\BufferedExample.txt");
            FileInputStream file2 = new FileInputStream("C:\\Users\\sunilg\\Desktop\\FileRelatedParts\\BufferedInputStream.txt");
            SequenceInputStream seq = new SequenceInputStream(file1,file2);
            int i ;
            while((i=seq.read())!=-1){
                System.out.print((char)i);
            }   
            seq.close();
            file1.close();
            file2.close();
           
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        
    }
}
