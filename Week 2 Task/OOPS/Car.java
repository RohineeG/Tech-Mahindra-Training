public class Car{
    private String make;
    private String model;
    private int year;
    public Car(String make, String model, int year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    public String getMake(){
        return make;
    }

    public void setMake(String make){
        this.make = make;
    }

    public String getModel(){
        return model;
    }

    public void setModel(String model){
        this.model = model;
    }

    public int getYear(){
        return year;
    }

    public void setYear(int year){
        this.year = year;
    }

    public void startEngine(){
        System.out.println("Engine has started!!!");
    }

    public static void main(String[] args){
        Car car_obj = new Car("Maserati", "Grecale", 2024 );
        System.out.println(car_obj.getMake());
        System.out.println(car_obj.getModel());
        System.out.println(car_obj.getYear());
        car_obj.startEngine();
    }
}