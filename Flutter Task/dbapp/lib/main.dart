import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '/provider/cart_provider.dart';
import 'pages/home_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => CartProvider(),
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'Flutter eCommerce',
        theme: ThemeData.dark().copyWith(
          scaffoldBackgroundColor: Colors.black,
          appBarTheme: AppBarTheme(
            backgroundColor: Colors.grey[900],
            elevation: 0,
            titleTextStyle: TextStyle(color: Colors.white, fontSize: 20),
          ),
          cardColor: Colors.grey[850],
          textTheme: TextTheme(
            headlineSmall: TextStyle(fontSize: 24.0, fontWeight: FontWeight.bold, color: Colors.white),
            titleLarge: TextStyle(fontSize: 20.0, fontWeight: FontWeight.bold, color: Colors.white),
            bodyLarge: TextStyle(fontSize: 16.0, color: Colors.white70),
          ),
          elevatedButtonTheme: ElevatedButtonThemeData(
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.blueAccent,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
            ),
          ),
        ),
        home: HomeScreen(),
      ),
    );
  }
}
