class ProductStorage {
  async getProducts() {
    return new Promise(resolve => {
      resolve(['Feijoada', 'Refrigerante']);
    });
  }
}

export default new ProductStorage();
