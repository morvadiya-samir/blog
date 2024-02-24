"use client"
import { useToast } from "@/components/ui/use-toast"
import { upload } from './image_upload'

export default function Home() {

  const { toast } = useToast( )
  async function handleSubmit(e) {
    e.preventDefault();

    upload(e)
    // const data = new FormData(e.currentTarget);

    // try {
    //   const response = await fetch('/api/upload', {
    //     method: 'post',
    //     body: new URLSearchParams(data),
    //   });
    //   if (!response.ok) {
    //     throw new Error(`Invalid response: ${response.status}`);
    //   }
    //   toast({
    //     title: "Successfully",
    //     description: "Blog has been submitted",
    //   })

    // } catch (err) {
    //   console.error(err);
    //   toast({
    //     title: "Oops",
    //     description: "Something Went Wrong",
    //   })
    // }

  }

  return (
    <div className="m-auto w-[50%]">

      <h1 className='py-5 text-center text-4xl text-black'>Add New Blog</h1>
      <form className="container" onSubmit={handleSubmit}>

        <div className="block">
          <label htmlFor="Title">Title</label>
          <input className='border my-2 rounded w-full py-2 px-3'
            id="title" type="text" name="title" required />
        </div>

        <div className="block">
          <label htmlFor="Image">Image</label>
          <input className='border my-2 rounded w-full py-2 px-3'
            id="image" type="file" name="file" required />
        </div>

        <div className="block">
          <label htmlFor="description">Description</label>
          <textarea className='border my-2 rounded w-full py-2 px-3' id="description" rows="3" name="description"></textarea>
        </div>

        <div className="button text-white py-2 px-4 bg-black  inline-block border rounded">
          <button type="submit">Submit</button>
        </div>

      </form >
    </div >
  );
}