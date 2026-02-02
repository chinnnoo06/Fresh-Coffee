import { Product } from "@/src/generated/prisma/client"
import { formatCurrency, getImagePath } from "@/src/utils"
import Image from "next/image"
import { AddProductButton } from "./AddProductButton"

type TProductCardProps = {
    product: Product
}

export const ProductCard = ({ product }: TProductCardProps) => {

    const imagePath = getImagePath(product.image)
    
    return (
        <div className="border bg-white rounded-lg">

            <Image
                src={imagePath}
                alt={`Imagen platillo ${product.name}`}
                width={400}
                height={500}
                className=" rounded-t-lg" 
            />

            <div className="p-5">
                <div className="min-h-24">
                    <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                </div>

                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formatCurrency(product.price)}
                </p>

                <AddProductButton product={product}/>
            </div>

        </div>
    )
}
