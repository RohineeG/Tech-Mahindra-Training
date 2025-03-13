class Product {
  final String title;
  final String category;
  final double price;
  final String imageUrl;
  final String description;
  bool isFavorite;

  Product({
    required this.title,
    required this.category,
    required this.price,
    required this.imageUrl,
    required this.description,
    this.isFavorite = false,
  });
}
