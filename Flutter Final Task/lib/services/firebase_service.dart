import 'package:cloud_firestore/cloud_firestore.dart';
import '../model/place.dart';

class FirebaseService {
  final CollectionReference favoritesRef = FirebaseFirestore.instance.collection('favorites');

  Future<void> addToFavorites(Place place) async {
    await favoritesRef.doc(place.name).set(place.toJson());
  }
}
