import java.util.HashMap;
public class Hashmap {
      public static void main(String[] args) {
      HashMap<String, Integer> hashMap = new HashMap<>();
      hashMap.put("Rohinee", 25);
      hashMap.put("Renuka", 30);
      hashMap.put("Jashith", 35);
      System.out.println(hashMap.get("Jashith")); 
      hashMap.remove("Rohinee");
      System.out.println(hashMap.containsKey("Jay")); 
      System.out.println(hashMap.size()); 
   }
}
