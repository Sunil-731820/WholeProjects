package JAVAProjects.FileInJava;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;

public class ByteArrayOutputStreamExample {
    public static void main(String[] args) {
        System.out.println("this is the example of the ByteArrayOutputStream");
        try {
            FileOutputStream file1 = new FileOutputStream("C:\\Users\\sunilg\\Desktop\\FileRelatedParts\\ByteArray1.txt");
            FileOutputStream file2 = new FileOutputStream("C:\\Users\\sunilg\\Desktop\\FileRelatedParts\\ByteArray2.txt");
            ByteArrayOutputStream bout=new ByteArrayOutputStream();
            bout.write(65); 
            bout.write(67);
            bout.write(68);
            bout.writeTo(file1);
            bout.writeTo(file2);
            System.out.println("Successfully Written Data into the file ");
            
        } catch (Exception e) {
            System.out.println("This is invalid path can you check once");
        }
    }
}
