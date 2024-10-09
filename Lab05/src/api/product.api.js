export class ProductApi {
  static async getProductsList() {
    return fetch("https://66f37c8771c84d805878db7b.mockapi.io/api/rn/Lab05")
      .then((response) => response.json())
      .then((json) => json);
  }

  static async getProductsGrid() {
    return fetch("https://66f37c8771c84d805878db7b.mockapi.io/api/rn/Lab05")
      .then((response) => response.json())
      .then((json) => json);
  }
}