import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import '../model/place.dart';
import '../widgets/place_card.dart';

class Categories extends StatefulWidget {
  @override
  _CategoriesState createState() => _CategoriesState();
}

class _CategoriesState extends State<Categories> {
  String selectedCategory = "All";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Tourist Destinations')),
      body: Column(
        children: [
          DropdownButton<String>(
            value: selectedCategory,
            items: ["All", "Beaches", "Temples", "Monuments", "Parks"].map((category) => DropdownMenuItem(
              value: category,
              child: Text(category),
            )).toList(),
            onChanged: (value) {
              setState(() { selectedCategory = value!; });
            },
          ),
          Expanded(
            child: StreamBuilder<QuerySnapshot>(
              stream: FirebaseFirestore.instance.collection('places').snapshots(),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return Center(child: CircularProgressIndicator());
                }
                if (!snapshot.hasData || snapshot.data!.docs.isEmpty) {
                  return Center(child: Text("No places found"));
                }
                List<Place> places = snapshot.data!.docs
                    .map((doc) => Place.fromJson(doc.data() as Map<String, dynamic>))
                    .toList();
                List<Place> filteredPlaces = selectedCategory == "All"
                    ? places
                    : places.where((place) => place.categories == selectedCategory).toList();
                return ListView.builder(
                  itemCount: filteredPlaces.length,
                  itemBuilder: (context, index) {
                    return PlaceCard(place: filteredPlaces[index]);
                  },
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
