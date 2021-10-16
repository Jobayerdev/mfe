import { mount as ProductMount } from "products/ProductsIndex"
import { mount as cartMount } from "cart/cartShow"

ProductMount(document.querySelector("#my-products"))
cartMount(document.querySelector("#my-cart"))
