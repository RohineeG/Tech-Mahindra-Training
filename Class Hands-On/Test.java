class RThreadOne extends Thread{
    public void run(){
        System.out.println("R_Thread_One");
        System.out.println("R_Thread_One");
        System.out.println("R_Thread_One");
    }
}

class RThreadTwo extends Thread{
    public void run() {
        System.out.println("R_Thread_Two");
        System.out.println("R_Thread_Two");
        System.out.println(100/0);
        }
    }

class RThreadThree extends Thread{
    public void run(){
        System.out.println("R_Thread_Three");
        System.out.println("R_Thread_Three");
        System.out.println("R_Thread_Three");
        System.out.println("R_Thread_Three");
        System.out.println("R_Thread_Three");
    }

}

class ThreadRunnableOne implements Runnable{
    public void run() {
        System.out.println("From ThreadRunnableOne");
        System.out.println("From ThreadRunnableOne");
    }
}

class ThreadRunnableTwo implements Runnable{
    public void run(){
        System.out.println("From ThreadRunnableTwo");
        System.out.println("From ThreadRunnableTwo");
        System.out.println("From ThreadRunnableTwo");
    }
}


class Test{
    public static void main(String[] args) {
        RThreadOne thread1 = new RThreadOne();
        thread1.start();

        RThreadTwo thread2 = new RThreadTwo();
        thread2.start();

        RThreadThree thread3 = new RThreadThree();
        thread3.run();

        ThreadRunnableOne run1 = new ThreadRunnableOne();
        run1.run();

        ThreadRunnableTwo run2 = new ThreadRunnableTwo();
        run2.run();
    }
}
