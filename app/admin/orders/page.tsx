"use client"

import { OrderCart } from "@/components/order/OrderCart";
import { Heading } from "@/components/ui/Heading";
import { Spinner } from "@/components/ui/Spinner";
import { TOrderWithProducts } from "@/src/types";
import useSWR from 'swr'

export default function AdminOrdersPage() {
  const url = '/admin/orders/api'
  const fetcher = () => fetch(url).then(res => res.json()).then(data => data)

  const { data, isLoading } = useSWR<TOrderWithProducts[]>(url, fetcher, {
    refreshInterval: 1000,
    revalidateOnFocus: false
  })


  if (isLoading) return <Spinner/>

  if (data) return (
    <>
      <Heading>
        Administrar Ordenes
      </Heading>

      {data.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-10">
          {data.map(order => (
            <OrderCart key={order.id} order={order} />
          ))}
        </div>
      ) : <p className="text-center font-semibold mt-5">No hay ordenes pendientes</p>}

    </>
  )
}
