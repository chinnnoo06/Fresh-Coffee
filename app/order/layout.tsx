import { OrderSidebar } from "@/components/order/OrderSidebar";
import { OrderSummary } from "@/components/order/OrderSummary";
import { ToastNotification } from "@/components/ui/ToastNotification";

export default function OrderLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <div className="lg:flex">
                <OrderSidebar/>

                <main className="lg:flex-1 lg:h-screen lg:overflow-y-scroll p-5">
                    {children}
                </main>

                <OrderSummary/>
            </div>

            <ToastNotification />
        </>
    )
}