import { Heading } from "@/components/ui/Heading";
import Link from "next/link";


export default function NotFound() {
  return (
    <div className="text-center flex flex-col justify-center items-center min-h-screen">
        <Heading>
            Producto No Encontrado
        </Heading>

        <Link href={'/admin/products'} className="rounded-lg bg-indigo-600 hover:bg-indigo-800 text-white w-full lg:w-auto p-2 uppercase font-semibold cursor-pointer transition-colors duration-200">
            Ir a productos
        </Link>
    </div>
  )
}
