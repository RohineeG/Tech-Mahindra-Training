import java.util.Arrays;
import java.util.Objects;

public class Equals {
    public static void main(String[] args) {
        Integer[][] array1 = {{1, 2}, {3, 4}};
        Integer[][] array2 = {{1, 2}, {3, 4}};
        System.out.println("Using equals(): " + Objects.equals(array1, array2));     
        System.out.println("Using deepEquals(): " + Objects.deepEquals(array1, array2)); 
    }
}
