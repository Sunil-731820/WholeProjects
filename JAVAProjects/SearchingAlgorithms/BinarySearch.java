package JAVAProjects.SearchingAlgorithms;

public class BinarySearch {

    int binarySearch(int arr[], int l, int r, int x)
    {
        if (r >= l) {
            int mid = l + (r - l) / 2;
 
            // If the element is present at the
            // middle itself
            if (arr[mid] == x)
                return mid;
 
            // If element is smaller than mid, then
            // it can only be present in left subarray
            if (arr[mid] > x)
                return binarySearch(arr, l, mid - 1, x);
 
            // Else the element can only be present
            // in right subarray
            return binarySearch(arr, mid + 1, r, x);
        }
 
        // We reach here when element is not present
        // in array
        return -1;
    }
 
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,100,1000};
        int n = arr.length;
        int x = 10;
        BinarySearch bs = new BinarySearch();
        int res = bs.binarySearch(arr, 0, n-1, x);
        if(res==-1){
            System.out.println("The Element not found");
        }else{
            System.out.println("The Element Found");
        }
        
    }
}
