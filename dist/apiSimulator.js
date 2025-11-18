export const fetchProductCatalog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                    { id: 3, name: "Phone", price: 15 },
                ]);
            }
            else {
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};
export const fetchProductReviews = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                const allReviews = [
                    { productId: 1, rating: 5, productReview: "Great!" },
                    { productId: 3, rating: 3, productReview: "Just OK" },
                    { productId: 2, rating: 4, productReview: "Good sound" },
                ];
                // Filter only reviews for the requested productId
                resolve(allReviews.filter((r) => r.productId === productId));
            }
            else {
                reject(`Failed to fetch reviews for product ID ${productId}`);
            }
        }, 1500);
    });
};
//# sourceMappingURL=apiSimulator.js.map