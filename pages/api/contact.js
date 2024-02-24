export default function POST(request) {

  if (request.method === 'POST') {
    // console.log(request.formData())
    // console.log(request.body.description)
    // console.log(request.body.image)

    res.status(200).json({  })
  } else {
    console.log("request")
  }

}