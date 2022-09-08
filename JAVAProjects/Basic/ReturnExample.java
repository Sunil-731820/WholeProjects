package JAVAProjects.Basic;

public class ReturnExample {
    static int number(){
        return 1;
    }

    static String hello(){
        return "Hello";
    }

    static float numberFloat(){
        return 1.1f;
    }

    static double numberDouble(){
        return 1.21;
    }
    public static void main(String[] args) {
        int num1 = number();
        System.out.println("the number is "+ num1);
        String name1 = hello();
        System.out.println("the String is "+name1);
        float float1 = numberFloat();
        System.out.println("the floating value is "+ float1);
        double dobNumber = numberDouble();
        System.out.println("the Double Values is "+ dobNumber);

    }
}
