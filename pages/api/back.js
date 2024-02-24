
const connectdb = require("./db");
const formidable = require('formidable');
const Blog = require("./schema/Blog");
const writeFile = require('fs/promises');
const join = require('path');
const fs = require('fs');

export default async function POST(req , res) {
    // connectdb();

    // const data = req.formData()
    //  const file = req.body.image;
    console.log(req.body.get("title"))

    // if (!file) {
    //     return {
    //         status: 200,
    //         body: JSON.stringify({ success: false })
    //     };
    // }
    // form.parse(req, function (error, fields, file) {
    //     let filepath = file.fileupload.filepath;
    //     let newpath = 'C:/upload-example/';
    //     newpath += file.fileupload.originalFilename;
    
    //     //Copy the uploaded file to a custom folder
      
    //   });
    //   console.log(newpath);
    // const bytes = await file.arrayBuffer();
    // const buffer = Buffer.from(bytes);
    // // With the file data in the buffer, you can do whatever you want with it.
    // // For this, we'll just write it to the filesystem in a new location
    // const path = `/tmp/${file.name}`;
    // await writeFile(path, buffer);
    // console.log(`open ${path} to see the uploaded file`);
    // return {
    //     status: 200,
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ success: true })
    // };
    // Blog.create({
    //     title: req.body.title,
    //     img_url: req.body.img_url,
    //     description: req.body.description,
    // }).then(user => console.log(user));

    // res.status(200)

    // } catch (error) {
    //     throw new Error("Error " + Error)
    // }


}
