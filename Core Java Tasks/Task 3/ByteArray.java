import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Scanner;

public class ByteArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the file path: ");
        String path = sc.nextLine();
        File file = new File(path);
        if (file.exists() && file.isFile()) {
            try {
                FileInputStream fis = new FileInputStream(file);
                byte[] fileData = new byte[(int) file.length()];
                fis.read(fileData);
                fis.close();
                System.out.println("\nFile read successfully. Byte array length: " + fileData.length);
            } catch (IOException e) {
                System.out.println("Error reading the file: " + e.getMessage());
            }
        } else {
            System.out.println("The specified file does not exist.");
        }
        sc.close();
    }
}
