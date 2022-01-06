import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "First book",
    price: 5,
    description: "First Book I ever wrote"
  },
  {
    id: "p2",
    title: "Second book",
    price: 10,
    description: "Second Book I ever wrote"
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            title={item.title}
            price={item.price}
            description={item.description}
            key={item.id}
            id={item.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
