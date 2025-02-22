import java.util.*;
public class Equals {
    public static void main(String[] args) {
        Integer[][] array1 = {{1, 2}, {3, 4}};
        Integer[][] array2 = {{1, 2}, {3, 4}};
        System.out.println("Using equals(): " + Arrays.equals(array1, array2));     
        System.out.println("Using deepEquals(): " + Arrays.deepEquals(array1, array2)); 
    }
}
