import { useStore } from "@/src/store/store"
import { TOrderItem } from "@/src/types"
import { formatCurrency } from "@/src/utils"
import { MinusIcon, PlusIcon, XCircleIcon } from "@heroicons/react/16/solid"
import { useMemo } from "react"

type TProductDetailsProps = {
    item: TOrderItem
}

export const ProductDetails = ({ item }: TProductDetailsProps) => {
    const { increaseQuantity, decreaseQuantity, removeItem } = useStore()
    const disableDecreaseButton = useMemo(() => item.quantity === 1, [item])

    return (
        <div className="shadow space-y-1 bg-white p-4 border-t border-gray-200 rounded-lg">
            <div className="space-y-2">
                <div className="flex justify-between items-start">
                    <p className="text-xl font-bold text-gray-900">{item.name} </p>

                    <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                    >
                        <XCircleIcon className="text-red-600 h-6 w-6" />
                    </button>
                </div>
                <p className="text-2xl text-amber-500 font-black">
                    {formatCurrency(item.price)}
                </p>
                <div className="flex justify-center items-center gap-5 px-10 py-2 bg-gray-100 w-full rounded-lg">
                    <button
                        disabled={disableDecreaseButton}
                        className="disabled:opacity-30 disabled:cursor-not-allowed"
                        type="button"
                        onClick={() => decreaseQuantity(item.id)}
                    >
                        <MinusIcon className="h-6 w-6" />
                    </button>

                    <p className="text-lg font-black ">
                        {item.quantity}
                    </p>

                    <button
                        type="button"
                        onClick={() => increaseQuantity(item.id)}
                    >
                        <PlusIcon className="h-6 w-6" />
                    </button>
                </div>
                <p className="text-xl font-black text-gray-700">
                    Subtotal: {''}
                    <span className="font-normal">
                        {formatCurrency(item.subtotal)}
                    </span>
                </p>
            </div>
        </div>
    )
}
