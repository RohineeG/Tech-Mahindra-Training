//Create a class Employee with fields Eno , Ename and email.
// Serialize the object of the class, without email field, store it, deserialize it and display the values

import java.io.*;

class Employee implements Serializable{
    String ename, email;
    int eno;

    public Employee(int eno, String ename, String email){
        this.eno = eno;
        this.ename = ename;
        this.email = email;
    }

    public void display(){
        System.out.println("No: "+eno+"\n"+"Name: "+ename+"\n"+"Email: "+email);
    }
}

class Serialization{
    public static void main(String args[]){
        Employee e = new Employee(1,"Rohinee","rohinee@abc.com");
        try (FileOutputStream fileOut = new FileOutputStream("file.txt");
             ObjectOutputStream out = new ObjectOutputStream(fileOut)) {
            out.writeObject(e);
            System.out.println("Object has been serialized.\n");
        } catch (IOException ex) {
            ex.printStackTrace();
        }

        try (FileInputStream fileIn = new FileInputStream("file.txt");
             ObjectInputStream in = new ObjectInputStream(fileIn)) {
            Employee deserializedEmp = (Employee) in.readObject();
            System.out.println("Object has been deserialized.\n");
            deserializedEmp.display(); // Email should be null
        } catch (IOException | ClassNotFoundException ex) {
            ex.printStackTrace();
        }
    }

}