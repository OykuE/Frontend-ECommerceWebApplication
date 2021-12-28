import "./App.css";
import Dashboard from "./layouts/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Navigator from "./layouts/Navigator";
import { useState, useEffect } from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./layouts/Footer";
import CartSummary from "./pages/CartSummary";
import axios from "axios";

const categories = {
  technology: 1,
  fashion: 2,
  book: 3,
  sport: 4,
  kitchen: 5,
  music: 6,
};

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [account, setAccount] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [category, setCategory] = useState("fashion");
  const [products, setProducts] = useState(null);
  const [userId, setUserId] = useState(null);
  const [cart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getProducts = () => {
    axios
      .get("http://localhost:5130/api/Product/" + categories[category])
      .then((response) => {
        setProducts(response.data);
      });
  };

  const addCart = (product) => {
    console.log(product.id);
    if (cart.hasOwnProperty(product.id)) {
      cart[product.id].quantity = cart[product.id].quantity + 1;
      cart[product.id].price = cart[product.id].price + product.price;
    } else {
      cart[product.id] = {
        id: product.id,
        name: product.name,
        quantity: 1,
        price: product.price,
      };
    }
    setTotalPrice(totalPrice + product.price);
  };

  useEffect(() => {
    getProducts();
  }, [category]);
  return (
    <div className="App">
      <Navigator
        setShowSignIn={setShowSignIn}
        setShowSignUp={setShowSignUp}
        setShowCart={setShowCart}
        userId={userId}
        setUserId={setUserId}
        accountValues={account}
        setAccountValues={setAccount}
      />
      <Container className="main">
        {!showSignIn && !showSignUp && !showCart && (
          <Dashboard
            setCategory={setCategory}
            products={products}
            addCart={addCart}
          />
        )}
        {showSignIn && (
          <SignIn
            setShowSignUp={setShowSignUp}
            setShowSignIn={setShowSignIn}
            setUserId={setUserId}
            setAccount={setAccount}
          />
        )}
        {showSignUp && (
          <SignUp setShowSignUp={setShowSignUp} setShowSignIn={setShowSignIn} />
        )}
        {showCart && (
          <CartSummary
            userId={userId}
            setShowSignUp={setShowSignUp}
            setShowSignIn={setShowSignIn}
            setShowCart={setShowCart}
            cart={cart}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          />
        )}
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
