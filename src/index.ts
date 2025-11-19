import { fetchProductCatalog } from "./apiSimulator.js";
import { fetchProductReviews } from "./apiSimulator.js";
import { fetchSalesReport } from "./apiSimulator.js";

// Fetch All Products
fetchProductCatalog()
  .then((products) => console.log("Products:", products))
  .catch((err) => console.error("Error:", err));

// Reviews for Product 1
fetchProductReviews(1)
  .then((reviews) => {
    const review = reviews.map((r) => r.productReview);
    console.log("Reviews:", review);
  })
  .catch((err) => console.error("Error:", err));

// Reviews for Product 2
fetchProductReviews(2)
  .then((reviews) => {
    const review = reviews.map((r) => r.productReview);
    console.log("Reviews:", review);
  })
  .catch((err) => console.error("Error:", err));

// Get all Sales Report
fetchSalesReport()
  .then((sales) => {
    console.log("Sales Report: ", sales);
  })
  .catch((err) => console.error("Error: ", err));
