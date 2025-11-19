import  { NetworkError, DataError } from "./error.js";

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
  
  interface SalesReport {
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
  }

  export const fetchProductCatalog = (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.8) {
          const products: Product[] = [
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
            { id: 3, name: "Phone", price: 15 },
          ];
  
          // Validate product data
          for (const p of products) {
            if (!p.id || !p.name || !p.price) {
              reject(new DataError(`Invalid product data: ${JSON.stringify(p)}`));
              return;
            }
          }
  
          resolve(products);
        } else {
          reject(new NetworkError("Failed to fetch product catalog"));
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
  
          const reviews = allReviews.filter((r) => r.productId === productId);
  
          // If no reviews exist for the product, throw a DataError
          if (reviews.length === 0) {
            reject(new DataError(`No reviews found for product ID ${productId}`));
            return;
          }
  
          resolve(reviews);
        } else {
          reject(new NetworkError(`Failed to fetch reviews for product ID ${productId}`));
        }
      }, 1500);
    });
  };  

export const fetchSalesReport = (): Promise<SalesReport[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
              const reports: SalesReport[] = [
                { totalSales: 7500, unitsSold: 400, averagePrice: 18.75 },
                { totalSales: 10500, unitsSold: 700, averagePrice: 15 },
              ];
      
              // Validate report data
              for (const r of reports) {
                if (r.totalSales == null || r.unitsSold == null || r.averagePrice == null) {
                  reject(new DataError(`Invalid sales report data: ${JSON.stringify(r)}`));
                  return;
                }
              }
      
              resolve(reports);
            } else {
              reject(new NetworkError("Failed to fetch sales report."));
            }
          }, 1000);
        });
      };