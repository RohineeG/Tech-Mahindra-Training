import 'package:flutter/material.dart';
import '../model/place.dart';
import '../screen/place_details.dart';

class PlaceCard extends StatelessWidget {
  final Place place;
  PlaceCard({required this.place});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        leading: Image.network(place.imageUrl, width: 50, height: 50, fit: BoxFit.cover),
        title: Text(place.name),
        subtitle: Text(place.categories),
        onTap: () => Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => PlaceDetails(place: place)),
        ),
      ),
    );
  }
}
