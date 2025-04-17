import 'package:flutter/material.dart';
import 'categories.dart'; // Replace with correct path
import 'favorites_screen.dart'; // Replace with correct path

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Explorer')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Welcome!!!',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 8),
            Text(
              'Explore top tourist spots of Chennai',
              style: TextStyle(fontSize: 16, color: Colors.Blue),
              textAlign: TextAlign.center,
            ),
            SizedBox(height: 32), // Space between text and buttons
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => Categories()),
                );
              },
              child: Text("Explore Destinations"),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => FavoritesScreen()),
                );
              },
              child: Text("Favorites"),
            ),
          ],
        ),
      ),
    );
  }
}
