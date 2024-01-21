import React from 'react'
import Link from 'next/link'

export default function Navabar() {
    return (
        <>
            <nav className='py-3 bg-black text-white'>

                <ul className='flex justify-evenly'>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About Us</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
