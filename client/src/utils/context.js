import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [WishItems, setWishItems] = useState([]);
    const [WishCount, setWishCount] = useState(0);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        let count = 0;
        cartItems?.map((item) => (count += item.attributes.quantity));
        setCartCount(count);

        let cWish = 0;
        WishItems?.map((item) => (count += item.attributes.quantity));
        setWishCount(cWish);

        let subTotal = 0;
        cartItems.map(
            (item) =>
                (subTotal += item.attributes.price * item.attributes.quantity)
        );
        setCartSubTotal(subTotal);
    }, [cartItems]);

    const handlerAddToCart = (product, quantity) => {
        let items = [...cartItems];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (index !== -1) {
            items[index].attributes.quantity += quantity;
        } else {
            product.attributes.quantity = quantity;
            items = [...items, product];
        }
        setCartItems(items);
    };

    const handlerRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items?.filter((p) => p.id !== product?.id);
        setCartItems(items);
    };

    const handlerCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (type === "inc") {
            items[index].attributes.quantity += 1;
        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items);
    };
        const handlerAddToWishlist = (product, quantity) => {
        let items = [...cartItems];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (index !== -1) {
            items[index].attributes.quantity += quantity;
        } else {
            product.attributes.quantity = quantity;
            items = [...items, product];
        }
        setWishCount(items);
    };

    return (
        <Context.Provider
            value={{
                products,
                setProducts,
                categories,
                setCategories,
                cartItems,
                setCartItems,
                handlerAddToCart,
                cartCount,
                handlerRemoveFromCart,
                showCart,
                setShowCart,
                handlerCartProductQuantity,
                cartSubTotal,
                WishCount,
                setWishCount,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;