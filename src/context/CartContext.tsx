import { useContext, createContext, useState } from "react";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<any[]>([]);

  function addToCart(product: any) {
    setCart((currentCart) => {
      const found = currentCart.find(
        (item) => item.id === product.id
      );

      if (found) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(productId: number) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  }

  function IncreaseQuantity(id: number) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(id: number) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        IncreaseQuantity,
        decreaseQuantity,
        total,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}