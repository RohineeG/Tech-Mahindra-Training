import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import '../model/place.dart';
import '../widgets/place_card.dart';

class FavoritesScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Favorites')),
      body: StreamBuilder<QuerySnapshot>(
        stream: FirebaseFirestore.instance.collection('favorites').snapshots(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          }
          if (!snapshot.hasData || snapshot.data!.docs.isEmpty) {
            return Center(child: Text("No favorite places yet"));
          }
          List<Place> favorites = snapshot.data!.docs
              .map((doc) => Place.fromJson(doc.data() as Map<String, dynamic>))
              .toList();
          return ListView.builder(
            itemCount: favorites.length,
            itemBuilder: (context, index) {
              return PlaceCard(place: favorites[index]);
            },
          );
        },
      ),
    );
  }
}