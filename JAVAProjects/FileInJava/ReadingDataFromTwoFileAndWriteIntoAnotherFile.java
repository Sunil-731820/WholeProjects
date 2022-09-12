package JAVAProjects.FileInJava;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.SequenceInputStream;

public class ReadingDataFromTwoFileAndWriteIntoAnotherFile {
    public static void main(String[] args) {
        System.out.println("This is the example of the Reading Data from two files and Writing Data into Another file");
        try {
            FileInputStream file1 = new FileInputStream("C:\\Users\\sunilg\\Desktop\\FileRelatedParts\\BufferedExample.txt");
            FileInputStream file2 = new FileInputStream("C:\\Users\\sunilg\\Desktop\\FileRelatedParts\\BufferedInputStream.txt");
            FileOutputStream out = new FileOutputStream("C:\\Users\\sunilg\\Desktop\\FileRelatedParts\\AnotherFile.txt");
            SequenceInputStream inst = new SequenceInputStream(file1, file2);
            int i ;
            while((i=inst.read())!=-1){
                out.write(i);
            }
            inst.close();
            out.close();
            file1.close();
            file2.close();
            System.out.println("SuccessFully Written All the DAtA");

        } catch (Exception e) {
            // TODO: handle exception
        }
    }
}
