import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export const Menu = ({ children }) => {
    return (
        <ul className="flex flex-col lg:flex-row w-full lg:w-auto">
            {children}
        </ul>
    )
}

export const MenuItem = ({ children, href = '/' }) => {
    return (
        <li className="p-3 uppercase">
            <Link href={href}>{children}</Link>
        </li>
    )
}

export const DropDown = ({ children, title }) => {
    const [active, setActive] = useState(false)

    return (
        <li className="hover:cursor-pointer group">
            <div
                className="p-3 lg:pointer-events-none uppercase"
                onClick={() => {
                    setActive(!active)
                }}
            >
                {title}
            </div>
            <ul
                className={`lg:w-auto lg:absolute bg-white mt-2 lg:mt-0 ${
                    active ? 'block' : 'hidden'
                } divide-y group-hover:lg:block z-50`}
                style={{ boxShadow: '0 0 20px rgba(0,0,0,0.5)' }}
            >
                {children}
            </ul>
        </li>
    )
}

export const DropDownItem = ({ children, href = '/' }) => {
    return (
        <li className="text-grey w-full hover:bg-secondary hover:text-white min-w-full">
            <Link href={href}>
                <div className="py-3 px-3">{children}</div>
            </Link>
        </li>
    )
}
