import java.util.Arrays;
public class CopyRange {
    public static void main(String[] args) {
        int[] array1 = {10, 20, 30, 40,};
        int[] array2 = Arrays.copyOfRange(array1, 1, 3);
        System.out.println("Copied Array: " + Arrays.toString(array2));
    }
}
