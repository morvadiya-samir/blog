const connectdb = require("./db");
const Blog = require("./schema/Blog");

export default async function handler(req, res) {
    connectdb();

    if (req.body) {
        console.log(req.body)
    }

    // try {

    //     Blog.create({
    //         title: req.body.title,
    //         img_url: req.body.img_url,
    //         description: req.body.description,
    //     }).then(user => console.log(user));


    // } catch (error) {
    //     console.log("Error" + Error)
    // }

    // res.status(200)

}
