"use client"

import { LatestOrderItem } from "@/components/order/LatestOrderItem";
import { Logo } from "@/components/ui/Logo";
import { Spinner } from "@/components/ui/Spinner";
import { TOrderWithProducts } from "@/src/types";
import useSWR from 'swr'

export default function OrdersPage() {
    const url = '/orders/api'
    const fetcher = () => fetch(url).then(res => res.json()).then(data => data)

    const { data, isLoading } = useSWR<TOrderWithProducts[]>(url, fetcher, {
        refreshInterval: 10000,
        revalidateOnFocus: false,
    })

    if (isLoading) return <Spinner />

    if (data) return (
        <>
            <h1 className="text-center mt-20 text-6xl font-black text-gray-900">Ordenes Listas</h1>

            <Logo />

            {data.length ? (
                <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10">
                    {data.map(order => (
                        <LatestOrderItem
                            key={order.id}
                            order={order}
                        />
                    ))}
                </div>
            ) : <p className="text-center font-semibold mt-10 text-gray-900">No hay ordenes listas</p>}
        </>
    )
}