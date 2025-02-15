import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Stack;

class Linked_list extends Thread {
    public void run(){
        LinkedList<Integer> list = new LinkedList<>();
        list.add(12);
        list.add(15);
        list.add(29);
        list.add(49);
        //System.out.println("Is list1 empty? "+list1.isEmpty());
        //  System.out.println("The given list is:"+list1);
        System.out.println("Number of elements in the list: " + list.size());
        //Adding one element
        list.add(12);
        System.out.println("After adding one element:");
        System.out.println("The given list is :" + list);
        System.out.println("The number of elements in the list: " + list.size());
//Checking for an element
        System.out.println("Is 566 available in the list:" + list.contains(566));
        System.out.println("The given list before removing elements is :" + list);
        list.remove(2);//Removing element by its index
        list.remove(3);//Removing element by its index
        System.out.println("After removing elements:");
        System.out.println("The given list is :"+list);
        System.out.println("The number of elements in the list: "+list.size());

    }
}

class Stack_list extends Thread {
    public void run() {
        Stack<Integer> stack = new Stack<>();

        // Pushing elements onto the stack
        stack.push(10);
        stack.push(20);
        stack.push(30);
        System.out.println("Stack after pushing: " + stack);

        // Popping an element from the stack (removes top)
        System.out.println("Popped element: " + stack.pop());

        // Peek (view top element without removing)
        System.out.println("Top element: " + stack.peek());

        // Checking if stack is empty
        System.out.println("Is stack empty? " + stack.isEmpty());

        // Checking the position of an element
        System.out.println("Position of 10: " + stack.search(10));

    }
}


class List_sample extends Thread {
    public void run() {
        List<Integer> list1 = new ArrayList<>();
        //System.out.println("Is list1 empty? "+list1.isEmpty());
        list1.add(35);
        list1.add(23);
        list1.add(67);
        list1.add(82);
        list1.add(56);
        list1.add(49);
        list1.add(49);
        list1.add(49);
        //System.out.println("Is list1 empty? "+list1.isEmpty());
        //  System.out.println("The given list is:"+list1);
        System.out.println("Number of elements in the list: " + list1.size());
        //Adding one element
        list1.add(12);
        System.out.println("After adding one element:");
        System.out.println("The given list is :" + list1);
        System.out.println("The number of elements in the list: " + list1.size());
//Checking for an element
        System.out.println("Is 566 available in the list:" + list1.contains(566));
        System.out.println("The given list before removing elements is :" + list1);
        list1.remove(2);//Removing element by its index
        list1.remove(3);//Removing element by its index
        System.out.println("After removing elements:");
        System.out.println("The given list is :"+list1);
        System.out.println("The number of elements in the list: "+list1.size());

    }
}


public class Main {
    public static void main(String[] args) {
        List_sample samp1 = new List_sample();
        Linked_list samp2 = new Linked_list();
        Stack_list samp3 = new Stack_list();
        samp1.start();
        samp2.start();
        samp3.start();

    }
}

