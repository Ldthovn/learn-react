import { useEffect } from "react";
import productApi from "./api/productApi";
import "./App.css";
import Todo from "./Todo";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="">
      <Todo />
    </div>
  );
}

export default App;
