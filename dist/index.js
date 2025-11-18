import { fetchProductCatalog } from "./apiSimulator.js";
import { fetchProductReviews } from "./apiSimulator.js";
// Fetch All Products
fetchProductCatalog()
    .then(products => console.log("Products:", products))
    .catch(err => console.error("Error:", err));
// Reviews for Product 1
fetchProductReviews(1)
    .then(reviews => {
    const review = reviews.map(r => r.productReview);
    console.log("Reviews:", review);
})
    .catch(err => console.error("Error:", err));
//# sourceMappingURL=index.js.map