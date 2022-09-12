package JAVAProjects.FileInJava;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class BufferedInputExample4 {
    public static void main(String[] args) throws IOException {
        System.out.println("This is the example of the bufferedInputStream in java");
        try {
            FileInputStream file1 = new FileInputStream("C:\\Users\\sunilg\\Desktop\\FileRelatedParts\\BufferedInputStream.txt");
            BufferedInputStream bin = new BufferedInputStream(file1);
            int i;
            while((i=bin.read())!=-1){
                System.out.print((char)i);
            }
            bin.close();
            file1.close();
        } catch (FileNotFoundException e) {
            System.out.println("invalid Path check Once");
            e.printStackTrace();
        }
        
    }
}
