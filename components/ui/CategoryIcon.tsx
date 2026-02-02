"use client"
import { Category } from "@/src/generated/prisma/client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

type TCategoryIconProps = {
    category: Category
}

export const CategoryIcon = ({ category }: TCategoryIconProps) => {
    const params = useParams<{ category: string }>()

    return (
        <div className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b 
        hover:bg-indigo-100 hover:border-b hover:border-indigo-200
        ${params.category === category.slug && 'bg-indigo-300 border-t border-b border-indigo-400'}`}>

            <div className="relative size-16">
                <Image
                    src={`/icon_${category.slug}.svg`}
                    alt={`Imagen de la categoría: ${category.name}`}
                    fill
                />
            </div>

            <Link href={`/order/${category.slug}`} className="text-lg font-bolds">{category.name}</Link>

        </div>
    )
}
