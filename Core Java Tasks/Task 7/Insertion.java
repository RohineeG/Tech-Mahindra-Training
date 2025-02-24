import java.util.ArrayList;

public class Insertion {
    public static void main(String[] args) {
        ArrayList<String> colors = new ArrayList<>();
        colors.add("Red");
        colors.add("Blue");

        colors.add(0, "Brown");
        System.out.println("After inserting at first position: " + colors);
    }
}
