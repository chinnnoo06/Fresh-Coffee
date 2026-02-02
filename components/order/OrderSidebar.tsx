import { prisma } from '@/src/lib/prisma'
import { CategoryIcon } from '../ui/CategoryIcon'
import { Logo } from '../ui/Logo'

const getCategories = async () => {
  return await prisma.category.findMany()
}

export const OrderSidebar = async () => {
  const categories = await getCategories()

  return (
    <aside className="lg:w-72 lg:h-screen bg-white">

      <Logo />
      <nav className='mt-10'>
        {categories.map(category => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </nav>

    </aside>
  )
}
