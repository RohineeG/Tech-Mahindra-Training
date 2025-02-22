import java.io.File;
import java.util.Scanner;

public class FileExists {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the file or directory path: ");
        String path = sc.nextLine();
        File file = new File(path);
        if (file.exists()) {
            if (file.isFile()) {
                System.out.println("The specified path exists and it is a FILE.");
            } else if (file.isDirectory()) {
                System.out.println("The specified path exists and it is a DIRECTORY.");
            }
        } else {
            System.out.println("The specified path does NOT exist.");
        }

        sc.close();
    }
}
