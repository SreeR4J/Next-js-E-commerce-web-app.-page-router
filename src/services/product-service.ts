import { ServiceBase } from "./service-base";

export class ProductServices extends ServiceBase {
  static getProducts = async () => {
    const response = await fetch(this.getURL("/products"));
    const data = await response.json();

    return data.products;
  };

  static getProductsById = async (id: number) => {
    const response = await fetch(this.getURL(`/products/${id}`));

    const data = await response.json();

    return data;
  };
}
