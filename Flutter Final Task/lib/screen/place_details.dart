import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:url_launcher/url_launcher.dart';
import '../model/place.dart';
import '../services/firebase_service.dart';

class PlaceDetails extends StatelessWidget {
  final Place place;
  PlaceDetails({required this.place});

  void _launchMaps() async {
    final String googleMapsUrl =
        "https://www.google.com/maps/dir/?api=1&destination=${place.latitude},${place.longitude}";
    if (await canLaunch(googleMapsUrl)) {
      await launch(googleMapsUrl);
    } else {
      throw 'Could not open Google Maps';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(place.name)),
      body: Column(
        children: [
          Expanded(
            child: GoogleMap(
              initialCameraPosition: CameraPosition(
                target: LatLng(place.latitude, place.longitude),
                zoom: 15,
              ),
              markers: {
                Marker(
                  markerId: MarkerId(place.name),
                  position: LatLng(place.latitude, place.longitude),
                  infoWindow: InfoWindow(title: place.name),
                ),
              },
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              children: [
                ElevatedButton(
                  onPressed: _launchMaps,
                  child: Text("Navigate to ${place.name}"),
                ),
                ElevatedButton(
                  onPressed: () => FirebaseService().addToFavorites(place),
                  child: Text("Add to Favorites"),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
