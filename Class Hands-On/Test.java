class RThreadOne extends Thread{
    public void run(){
        System.out.println("R_Thread_One");
        System.out.println("R_Thread_One");
        System.out.println("R_Thread_One");
    }
}

class Test{
    public static void main(String[] args) {
        RThreadOne thread1 = new RThreadOne();
        thread1.run();
    }
}
