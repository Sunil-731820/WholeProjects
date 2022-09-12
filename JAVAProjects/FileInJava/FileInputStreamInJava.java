package JAVAProjects.FileInJava;

import java.io.FileInputStream;

public class FileInputStreamInJava {
    public static void main(String[] args) {
        System.out.println("This is the example of the file Input Stream in java");

        try {
            // Reading single file Data in Java
            // FileInputStream file1 = new FileInputStream("C:\\Users\\sunilg\\Desktop\\FileRelatedParts\\InputStream.txt");
            // int i = file1.read();
            // System.out.println((char)i);

            // Reading all the character from the file in java

            FileInputStream file1 = new FileInputStream("C:\\Users\\sunilg\\Desktop\\FileRelatedParts\\InputStream.txt");
            int i = 0;
            while((i=file1.read())!=-1){
                System.out.print((char)i);
            }
            file1.close();
        } catch (Exception e) {
        }
    }
}
