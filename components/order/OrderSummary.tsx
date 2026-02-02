"use client"
import { useStore } from "@/src/store/store"
import { ProductDetails } from "./ProductDetails"
import { useMemo } from "react"
import { formatCurrency } from "@/src/utils"
import { OrderSchema } from "@/src/schemas"
import { toast } from "react-toastify"
import { createOrder } from "@/actions/create-order-action"

export const OrderSummary = () => {
  const { order, clearOrder } = useStore()
  const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get('name'),
      total,
      order
    }

    const result = OrderSchema.safeParse(data)

    if (!result.success) {
      result.error.issues.forEach(issue => {
        toast.error(issue.message)
      })

      return
    }

    const response = await createOrder(data)

    if (response?.errors) {
      response.errors.forEach(issue => {
        toast.error(issue.message)
      })

      return
    }

    toast.success('Pedido realizado correctamente')
    clearOrder()
  }

  return (
    <aside className="lg:h-screen md:overflow-y-scroll lg:w-64 xl:w-96 p-5">
      <h1 className="font-black text-4xl text-gray-900 text-center">Mi Pedido</h1>

      {order.length === 0 ? <p className="text-center font-semibold mt-10 text-gray-900">El pedido esta vacio</p> : (
        <>
          <div className="mt-5 space-y-2">
            {order.map(item => (
              <ProductDetails key={item.id} item={item} />
            ))}
          </div>

          <p className="text-2xl mt-5 text-center text-indigo-800 ">
            Total a pagar: {' '}
            <span className="font-semibold">{formatCurrency(total)}</span>
          </p>

          <form className="w-full mt-5 space-y-5" action={handleCreateOrder}>

            <input
              type="text"
              placeholder="Escribe tu Nombre"
              className="bg-white border border-indigo-600 p-2 w-full rounded-lg text-gray-600"
              name="name"
            />

            <input
              type="submit"
              className="py-2 rounded-lg uppercase text-white bg-indigo-600 hover:bg-indigo-800 w-full 
              text-center cursor-pointer font-semibold transition-colors duration-200"
              value='Confirmar Pedido'
            />
          </form>
        </>

      )}
    </aside>
  )
}
