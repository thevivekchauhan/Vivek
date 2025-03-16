import "./styles.css";import "./mobStyles.css";

import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Home from "./Pages/Home";

export default function App() {
  return (
    <div className="BodyContainer">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}
