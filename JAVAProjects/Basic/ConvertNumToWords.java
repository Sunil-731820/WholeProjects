package JAVAProjects.Basic;

public class ConvertNumToWords {

    public static void NumtoWords(char[] num){
        int len = num.length;
        if(len==0){
            System.out.println("Empty String");
            return ;
        }

        if(len>4){
            System.out.println("Length more than 4 is not supported");
            return ;
        }


        String [] singleDigits = new String[]{
            "zero","one","two","three","four","five",
            "six","seven","eight","nine"
        };

        System.out.println("the array is "+ singleDigits);

        String[] tensMultiple = new String[]{
            "","","twenty","thirty","forty","fifty",
            "sixty","seventy"
        };

    }
    public static void main(String[] args) {
        System.out.println("Converting the Number to words in java");


    }
}
