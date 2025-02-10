public class ElectricCar extends Car {
    private int battery_range;

    public ElectricCar(String make, String model, int year, int battery_range){
        super(make, model, year);
        this.battery_range = battery_range;
    }

    public void chargeBattery(){
        System.out.println("Battery is charging!!!");
    }

    public void startEngine(){
        System.out.println("Electric car's engine is starting!!!");
    }

    public static void main(String[] args){
        ElectricCar electriccar_obj = new ElectricCar("Kia", "EV9", 2024, 561);
        electriccar_obj.chargeBattery();
    }
}
