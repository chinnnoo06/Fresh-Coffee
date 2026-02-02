import { Order, OrderProducts, Product } from "../generated/prisma/client";

export type TOrderItem = Pick<Product,  'id' | 'name' | 'price'> & {
    quantity: number
    subtotal: number
}

export type TOrderWithProducts = Order & {
    orderProducts: (OrderProducts & {
        product: Product
    })[]
}