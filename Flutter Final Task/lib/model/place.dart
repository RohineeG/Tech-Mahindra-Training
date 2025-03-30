class Place {
  final String name;
  final String description;
  final double latitude;
  final double longitude;
  final String imageUrl;
  final String categories;

  Place({
    required this.name,
    required this.description,
    required this.latitude,
    required this.longitude,
    required this.imageUrl,
    required this.categories
  });

  factory Place.fromJson(Map<String, dynamic> json) {
    return Place(
      name: json['name'],
      description: json['description'],
      latitude: json['latitude'],
      longitude: json['longitude'],
      imageUrl: json['imageUrl'],
      categories: json['categories']
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'description': description,
      'latitude': latitude,
      'longitude': longitude,
      'imageUrl': imageUrl,
      'categories': categories
    };
  }
}
