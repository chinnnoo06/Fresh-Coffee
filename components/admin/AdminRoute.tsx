"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

type TAdminRouteProps = {
    link: {
        url: string;
        text: string;
        blank: boolean;
    }
}

export const AdminRoute = ({ link }: TAdminRouteProps) => {
    const pathname = usePathname()
    const isActive = pathname.startsWith(link.url)

    return (
        <Link
            href={link.url}
            className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b 
        hover:bg-indigo-100 hover:border-b hover:border-indigo-200
                 ${isActive && 'bg-indigo-300 border-t border-b border-indigo-400'}`}
            target={link.blank ? '_blank' : ''}
        >
            {link.text}
        </Link>
    )
}
