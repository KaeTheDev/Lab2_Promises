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


export const fetchProductReviews = (
    productId: number
  ): Promise<ProductReviews[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.8) {
          const allReviews: ProductReviews[] = [
            { productId: 1, rating: 5, productReview: "Great!" },
            { productId: 3, rating: 3, productReview: "Just OK" },
            { productId: 2, rating: 4, productReview: "Good sound" },
          ];
  
          // Filter only reviews for the requested productId
          resolve(allReviews.filter((r) => r.productId === productId));
        } else {
          reject(`Failed to fetch reviews for product ID ${productId}`);
        }
      }, 1500);
    });
  };  