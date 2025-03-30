import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Test Home')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => print("Button Pressed!"),
          child: Text("Press Me"),
        ),
      ),
    );
  }
}
