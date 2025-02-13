import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.TreeSet;

class Set_sample{
    public static void main(String[] args) {
        TreeSet<Float> ts = new TreeSet<>();
        HashSet<Integer> hs = new HashSet<>();
        LinkedHashSet<String> lhs = new LinkedHashSet<>();
        setSample(ts);
        setSample(hs);
        setSample(lhs);
    }

    public static void setSample(TreeSet<Float> ts)
    {
        ts.add(23f);
        ts.add(14f);
        ts.add(12f);
        ts.add(2f);
        ts.add(90f);
        ts.add(25f);
        ts.add(87f);
        ts.add(1f);
        System.out.println("Elements of TreeSet: ");
        for(float num: ts){
            System.out.println(num);
        }
        ts.remove(25f);
        System.out.println("After removal: ");
        for(float num: ts){
            System.out.println(num);
        }
        System.out.println("The elements greater than 20: ");
        for(float num: ts){
            if (num>20){
                System.out.println(num);
            }
        }

    }

    public static void setSample(HashSet<Integer> hs) {
        hs.add(5);
        hs.add(24);
        hs.add(14);
        hs.add(70);
        hs.add(65);
        hs.add(7);
        hs.add(61);
        hs.add(21);
        System.out.println("Elements of HashSet: ");
        for (int num : hs) {
            System.out.println(num);
        }
        hs.remove(24);
        System.out.println("After removal: ");
        for (int num : hs) {
            System.out.println(num);
        }
        System.out.println("The multiples of 7: ");
        for (int num : hs) {
            if (num % 7 == 0) {
                System.out.println(num);
            }
        }
    }

    public static void setSample(LinkedHashSet<String> lhs){
        lhs.add("Hello");
        lhs.add("Hi");
        lhs.add("maintest");
        lhs.add("Ro");
        lhs.add("Ren");
        lhs.add("Jash");
        lhs.add("u");
        lhs.add("rust");
        System.out.println("Elements of LinkedHashSet: ");
        for(String str: lhs){
            System.out.println(str);
        }
        lhs.remove("u");
        System.out.println("After removal: ");
        for(String str: lhs){
            System.out.println(str);
        }
        System.out.println("The string with size more than 5: ");
        for(String str: lhs){
            if (str.length()>5){
                System.out.println(str);
            }
        }
    }
}