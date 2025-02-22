import java.util.Scanner;
import java.util.Arrays;

public class Array {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size1 = sc.nextInt();
        int[] array1 = new int[size1];
        System.out.println("Enter " + size1 + " elements:");
        for (int i = 0; i < size1; i++) {
            array1[i] = sc.nextInt();
        }
        int size2 = (size1 + 1) / 2;
        int[] array2 = new int[size2];
        int index = 0;
        for (int i = 0; i < size1; i += 2) {
            array2[index++] = array1[i];
        }
        System.out.println("Original Array: " + Arrays.toString(array1));
        System.out.println("New Array with Alternate Elements: " + Arrays.toString(array2));
        sc.close();
    }
}
