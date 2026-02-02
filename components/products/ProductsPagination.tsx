import Link from "next/link";

type TProductsPaginationProps = {
    page: number
    totalPages: number
}


export const ProductsPagination = ({ page, totalPages }: TProductsPaginationProps) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    return (
        <nav className='flex justify-center mt-10'>

            {page > 1 && (
                <Link
                    href={`/admin/products?page=${page - 1}`}
                    className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-indigo-200 focus:z-20 focus:outline-offset-0 hover:text-indigo-800 hover:ring-indigo-400"
                >&laquo;</Link>
            )}

            {pages.map(currentPage => (
                <Link
                    key={currentPage}
                    href={`/admin/products?page=${currentPage}`}
                    className={`${page === currentPage && 'font-black text-indigo-800 ring-indigo-400'}  bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-indigo-200 focus:z-20 focus:outline-offset-0 hover:text-indigo-800 hover:ring-indigo-400`}
                >{currentPage}</Link>
            ))}

            {page < totalPages && (
                <Link
                    href={`/admin/products?page=${page + 1}`}
                    className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-indigo-200 focus:z-20 focus:outline-offset-0 hover:text-indigo-800 hover:ring-indigo-400"
                >&raquo;</Link>
            )}

        </nav>
    )
}
