import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';
import '../models/product.dart';

class DatabaseHelper {
  static final DatabaseHelper _instance = DatabaseHelper._internal();
  static Database? _database;

  factory DatabaseHelper() => _instance;

  DatabaseHelper._internal();

  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDB();
    return _database!;
  }

  Future<Database> _initDB() async {
    String path = join(await getDatabasesPath(), 'ecommerce.db');
    return await openDatabase(
      path,
      version: 1,
      onCreate: (db, version) async {
        await db.execute('''
          CREATE TABLE cart(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            category TEXT,
            price REAL,
            imageUrl TEXT,
            description TEXT
          )
        ''');
      },
    );
  }

  
  Future<void> addToCart(Product product) async {
    final db = await database;
    await db.insert('cart', {
      'title': product.title,
      'category': product.category,
      'price': product.price,
      'imageUrl': product.imageUrl,
      'description': product.description,
    });
  }

  
  Future<List<Product>> getCartItems() async {
    final db = await database;
    final List<Map<String, dynamic>> maps = await db.query('cart');

    return List.generate(maps.length, (i) {
      return Product(
        title: maps[i]['title'],
        category: maps[i]['category'],
        price: maps[i]['price'],
        imageUrl: maps[i]['imageUrl'],
        description: maps[i]['description'],
      );
    });
  }

  Future<void> removeFromCart(String title) async {
    final db = await database;
    await db.delete('cart', where: 'title = ?', whereArgs: [title]);
  }


  Future<void> clearCart() async {
    final db = await database;
    await db.delete('cart');
  }
}
