public class Main {
    public static void main(String[] args) {
        // Creating an array of Car objects (both Car and ElectricCar)
        Car1[] cars = {
                new Car1(),
                new ElectricCar1(),
                new Car1(),
                new ElectricCar1()
        };

        // Looping through the array and calling startEngine()
        for (Car1 i : cars) {
            i.startEngine();  // Calls the correct method based on the actual object type
        }
    }
}
