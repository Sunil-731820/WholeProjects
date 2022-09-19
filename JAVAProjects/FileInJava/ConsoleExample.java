package JAVAProjects.FileInJava;

import java.io.Console;

public class ConsoleExample {
    public static void main(String[] args) {
        System.out.println("This is the example of the console ");

        Console console = System.console();
        System.out.println("Enter Your Name here");
        String c = console.readLine();
        System.out.println("The Name is "+ c);
    }
}
