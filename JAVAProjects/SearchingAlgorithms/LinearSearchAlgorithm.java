package JAVAProjects.SearchingAlgorithms;

import java.util.Scanner;

class Search{

    public void linear(){
        System.out.println("Linear Function I am calling here");
    }

    public void linearSearch(){
        System.out.println("Enter the Size of the Array");
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        int[] arr = new int[size];
        for(int i=0;i<size;i++){
            System.out.println("Enter the Element in the array");
            arr[i] = sc.nextInt();
        }
        System.out.println("hello ");
        // Displaying the element using for loop
        for(int j=0;j<size;j++){
            System.out.print(arr[j] + " ");
        }
        int searchElement = sc.nextInt();
        // Searching the element in the Array
        for(int k=0;k<size;k++){
            if(searchElement==arr[k]){
                System.out.println("Element found in the Array");
                System.out.println(arr[k]);
                break;
            }
        }
    }
}

public class LinearSearchAlgorithm {
    public static void main(String[] args) {
        Search src = new Search();
        src.linear();
        src.linearSearch();
    }
}
