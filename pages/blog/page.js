import React from 'react'
import Blogcard from '@/app/componant/Blogcard'
import { promises as fs } from 'fs';
// import Blogs from ''


export default async function blog() {

  // const file = await fs.readFile(process.cwd() + '/blogdata/javascript.json', 'utf8');
  // const data = JSON.parse(file);
  // console.log(data.title)

  return (
    <>
      <div className=''>

        <div className='py-5'>
          <h1 className='text-5xl text-center'>Blog</h1>
        </div>

        {/* <Blogcard data={data} /> */}
      </div>
    </>
  )
}
