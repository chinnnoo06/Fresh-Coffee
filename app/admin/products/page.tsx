import { ProductsPagination } from "@/components/products/ProductsPagination";
import { ProductsSearchForm } from "@/components/products/ProductsSearchForm";
import { ProductTable } from "@/components/products/ProductsTable";
import { Heading } from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";

const getProductCount = async () => {
  return await prisma.product.count()
}

const getProducts = async (page: number, pageSize: number) => {
  const skip = (page - 1) * pageSize
  return await prisma.product.findMany({
    take: pageSize,
    skip: skip,
    include: {
      category: true
    }
  })
}

export type TProductsWithCategory = Awaited<ReturnType<typeof getProducts>>

export default async function page({ searchParams }: { searchParams: { page: string } }) {
  const page = +searchParams.page || 1
  const pageSize = 10

  const productsData = getProducts(page, pageSize)
  const totalProductsData = getProductCount()
  const [products, totalProducts] = await Promise.all([productsData, totalProductsData])

  const totalPages = Math.ceil(totalProducts / pageSize)
  return (
    <>
      <Heading>
        Administrar Productos
      </Heading>

      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between items-center">
        <Link href={'/admin/products/new'} className="text-sm rounded-lg bg-indigo-600 hover:bg-indigo-800 text-white w-full lg:w-auto p-2 uppercase font-semibold cursor-pointer transition-colors duration-200">
          Crear Producto
        </Link>

        <ProductsSearchForm />
      </div>

      <div className="min-h-[65vh] mt-10">
        <ProductTable products={products} />
      </div>


      <ProductsPagination page={page} totalPages={totalPages} />
    </>
  )
}
