"use client"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export default function Home() {

  const { toast } = useToast()
  const [file, setFile] = useState(false)

  async function POST(request) {
    request.preventDefault();

    try {
      const data = await  request.formData();
      // data.append("file", file)
      console.log(data.get('title'))
    } catch (error) {
      console.log(error)
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: new URLSearchParams(data),
        // body: data,
      });


      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }

      toast({
        title: "Successfully",
        description: "Blog has been submitted",
      })

    } catch (err) {
      console.error(err);
      toast({
        title: "Oops",
        description: "Something Went Wrong",
      })
    }
  }

  return (
    <div className="m-auto w-[50%]">

      <h1 className='py-5 text-center text-4xl text-black'>Add New Blog</h1>
      <form className="container" onSubmit={POST} >

        <div className="block">
          <label htmlFor="Title">Title</label>
          <input className='border my-2 rounded w-full py-2 px-3'
            id="title" type="text" name="title" required />
        </div>

        <div className="block">
          <label htmlFor="Image">Image</label>
          <input className='border my-2 rounded w-full py-2 px-3'
            id="image" type="file" name="image" onChange={(e) => setFile(e.target.files?.[0])} required />
        </div>

        <div className="block">
          <label htmlFor="description">Description</label>
          <textarea className='border my-2 rounded w-full py-2 px-3' id="description" rows="3" name="description"></textarea>
        </div>

        <div >
          <button className="button text-white py-2 px-4 bg-black  inline-block border rounded" type="submit">Submit</button>
        </div>

      </form >
    </div >
  );
}
