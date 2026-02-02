"use client"

import { Product } from "@/src/generated/prisma/client"
import { useStore } from "@/src/store/store"

type TAddProductButtonProps = {
    product: Product
}

export const AddProductButton = ({ product }: TAddProductButtonProps) => {
    const { addToOrder } = useStore()

    return (
        <button
            type="button"
            className="rounded-lg bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-semibold cursor-pointer transition-colors duration-200"
            onClick={() => addToOrder(product)}
        >
            Agregar
        </button>
    )
}
