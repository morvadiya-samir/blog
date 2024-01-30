'use client'
import React, { useEffect, useState } from 'react'
import Blogcard from '@/components/Blogcard'

export default function blog() {
  const [data, setData] = useState([])
  const [link, setlink] = useState([])
  const [URL, setURL] = useState("/api/blogs");

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    fetch("/api/blogs").then((d) => {
      d.json().then((e) => {
        setData(e)
      })
    })
    fetch("/api/").then((E) => {
      E.json().then((F) => {
        setlink(F)
      })
    })
  }

  return (
    <>
      <div >

        <div className='py-5'>
          <h1 className='text-5xl text-center'>Blog</h1>
        </div>
        <div>
          <div className='flex justify-around flex-wrap'>
            <Blogcard data={data} link={link} />
          </div>
        </div>
      </div >
    </>
  )
}
