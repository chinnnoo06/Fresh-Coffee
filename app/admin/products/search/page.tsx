import { ProductsSearchForm } from "@/components/products/ProductsSearchForm";
import { ProductTable } from "@/components/products/ProductsTable";
import { Heading } from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

const searchProducts = async (search: string) => {
    return await prisma.product.findMany({
        where: {
            name: {
                contains: search,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    })
}

export default async function SearchPage({ searchParams }: { searchParams: { search: string } }) {
    const products = await searchProducts(searchParams.search)

    return (
        <>
            <Heading>
                Resultados de busqueda: {searchParams.search}
            </Heading>

            <div className="flex flex-col gap-5 lg:flex-row lg:justify-end items-center">
                <ProductsSearchForm />
            </div>

            {products.length ?  (
                <ProductTable products={products} />
            ) : (
                <p className="text-center font-semibold mt-10 text-gray-900">No hay resultados</p>
            )}
            
        </>
    )
}
