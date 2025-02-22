import java.util.Scanner;
import java.util.Arrays;
public class Students {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of students: ");
        int n = sc.nextInt();
        System.out.print("Enter number of subjects: ");
        int subjects = sc.nextInt();
        String[] names = new String[n];
        int[] totals = new int[n];
        double[] averages = new double[n];
        for (int i = 0; i < n; i++) {
            sc.nextLine();
            System.out.print("Enter student name: ");
            names[i] = sc.nextLine();
            System.out.println("Enter marks:");
            int total = 0;
            for (int j = 0; j < subjects; j++) {
                total += sc.nextInt();
            }
            totals[i] = total;
            averages[i] = (double) total / subjects;
        }
        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n; j++) {
                if (totals[i] < totals[j]) {
                    int tempTotal = totals[i];
                    totals[i] = totals[j];
                    totals[j] = tempTotal;
                    String tempName = names[i];
                    names[i] = names[j];
                    names[j] = tempName;
                    double temp = averages[i];
                    averages[i] = averages[j];
                    averages[j] = temp;
                }
            }
        }

        System.out.println("\nSorted List:");
        for (int i = 0; i < n; i++) {
            System.out.println(names[i] + " Total: " + totals[i] + ", Average: " + averages[i]);
        }

        sc.close();
    }
}
