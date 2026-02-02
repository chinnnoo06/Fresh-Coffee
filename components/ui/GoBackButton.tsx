"use client"

import { useRouter } from "next/navigation"

export const GoBackButton = () => {
    const router = useRouter()

    return (
        <button onClick={() => router.back()} className="text-sm rounded-lg bg-indigo-600 hover:bg-indigo-800 text-white w-full lg:w-auto p-2 uppercase font-semibold cursor-pointer transition-colors duration-200">
            Volver a Productos
        </button>
    )
}
