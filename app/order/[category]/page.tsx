import { ProductCard } from "@/components/products/ProductCard"
import { Heading } from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"

const getProducts = async (category: string) => {
  return await prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  })
}

export default async function OrderPage({ params }: { params: { category: string } }) {

  const products = await getProducts(params.category)

  return (
    <>
      <Heading>
        Elige y personaliza tu pedido a continuación
      </Heading>

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start mt-10">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}
