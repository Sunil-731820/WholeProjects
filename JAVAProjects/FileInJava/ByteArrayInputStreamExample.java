package JAVAProjects.FileInJava;

import java.io.ByteArrayInputStream;

public class ByteArrayInputStreamExample {
    public static void main(String[] args) {
        System.out.println("This is the ByteArrayInputStream ");
        byte[] byt = {65,66,67,68};
        ByteArrayInputStream byteArray = new ByteArrayInputStream(byt);
        int k =0;
        while((k=byteArray.read())!=-1){
            System.out.print((char)k+ " ");
        }
    }
}
