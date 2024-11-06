export class ProductApi {
  static async getProductsList() {
    return fetch("https://672ad82a976a834dd0249494.mockapi.io/api/rn/products")
      .then((response) => response.json())
      .then((json) => json);
  }

  static async getProductsGrid() {
    return fetch("https://672ad82a976a834dd0249494.mockapi.io/api/rn/products")
      .then((response) => response.json())
      .then((json) => json);
  }

  static async deleteProduct(id) {
    return fetch(
      `https://672ad82a976a834dd0249494.mockapi.io/api/rn/products/${id}`,
      {
        method: "DELETE",
      }
    );
  }

  static async addProduct(product) {
    return fetch(
      "https://672ad82a976a834dd0249494.mockapi.io/api/rn/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((response) => response.json())
      .then((json) => json);
  }
}
