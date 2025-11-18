import { fetchProductCatalog } from "./apiSimulator.js";
// Fetch All Products
fetchProductCatalog()
    .then(products => console.log("Products:", products))
    .catch(err => console.error("Error:", err));
//# sourceMappingURL=index.js.map