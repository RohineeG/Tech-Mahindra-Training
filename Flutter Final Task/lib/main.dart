import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'screen/home_screen.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'l10n/app_localizations.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Explore',
      home: HomeScreen(),
    );
  }
}
