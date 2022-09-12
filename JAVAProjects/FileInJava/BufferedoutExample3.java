package JAVAProjects.FileInJava;

import java.io.BufferedOutputStream;
import java.io.FileOutputStream;

public class BufferedoutExample3 {
    public static void main(String[] args) {
        System.out.println("this is the example of the buffered File Output");

        try {
            FileOutputStream file1 = new FileOutputStream("C:\\Users\\sunilg\\Desktop\\FileRelatedParts\\BufferedExample.txt");
            BufferedOutputStream bout = new BufferedOutputStream(file1);
            String str1 = "Welcome to File Buffered example";
            byte  b[] = str1.getBytes();
            bout.write(b);
            bout.flush();
            file1.close();
        } catch (Exception e) {
            System.out.println("Invalid file Path Check Once");
        }
    }
}
