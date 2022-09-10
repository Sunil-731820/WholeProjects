package JAVAProjects.FileInJava;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class FileOutPutStream {
    public static void main(String[] args) throws IOException {
        System.out.println("this is the example of the FileOutputStream");

        try {
            FileOutputStream file = new FileOutputStream("C:\\Users\\sunilg\\Desktop\\file.txt");
            file.write(65);
            file.write(66);
            file.write(90);
            file.close();
            System.out.println("The Data is written successfully");
        } catch (FileNotFoundException e) {
            System.out.println("Invalid data or Path of the file");
            e.printStackTrace();
        }

    }
}
