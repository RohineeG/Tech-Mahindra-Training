import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../provider/cart_provider.dart';

class CartScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final cart = Provider.of<CartProvider>(context);

    return Scaffold(
      appBar: AppBar(title: Text("Shopping Cart")),
      body: cart.items.isEmpty
          ? Center(child: Text("Your cart is empty"))
          : ListView.builder(
              itemCount: cart.items.length,
              itemBuilder: (ctx, index) {
                final product = cart.items[index];
                return ListTile(
                  leading: Image.asset(product.imageUrl, width: 50),
                  title: Text(product.title),
                  subtitle: Text("\$${product.price}"),
                  trailing: IconButton(
                    icon: Icon(Icons.remove_circle),
                    onPressed: () => cart.removeFromCart(product),
                  ),
                );
              },
            ),
      bottomNavigationBar: Padding(
        padding: const EdgeInsets.all(8.0),
        child: ElevatedButton(
          onPressed: cart.items.isEmpty ? null : () {},
          child: Text("Proceed to Checkout (\$${cart.totalPrice})"),
        ),
      ),
    );
  }
}
