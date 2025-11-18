interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  interface ProductReviews {
    productId: number;
    rating: number;
    productReview: string;
  }  

  export const fetchProductCatalog = (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.8) {
          resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
            { id: 3, name: "Phone", price: 150 },
          ]);
        } else {
          reject("Failed to fetch product catalog");
        }
      }, 1000);
    });
  };