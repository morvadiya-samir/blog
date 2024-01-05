import React from 'react'
import Image from 'next/image'

export default function Blogcard(p) {
    return (
        <>

            <div>
                <div className='flex justify-around flex-wrap'>
                    <div className="max-w-lg mx-auto">
                        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                            <a href="#">
                                <Image className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" width={400} height={100} />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{p.data.title}</h5>
                                </a>
                                <p className="font-normal text-gray-700 mb-3">{p.data.Content.slice(0, 45)}</p>
                                <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
