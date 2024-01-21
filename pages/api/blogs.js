import fs from 'fs';

export default function handler(req, res) {
  const directory = './Blogdata/';
  const filejson = [];
  try {

    fs.readdirSync(directory).map((file) => {

      const jsonFiles = fs.readFileSync(`./Blogdata/${file}`, 'utf-8');
      filejson.push(JSON.parse(jsonFiles));

    });

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

  res.status(200).json(filejson);
}

// import * as fs from 'fs';
// import { exit } from 'process';

// export default function handler(req, res) {
//   try {
//     const directory = './Blogdata/';

//     // var filejson = [];

//     const data = (d) => {
//       var items = d
//       var items = [...items, d]
//       res.status(200).json(JSON.parse(d));
//     }

//     fs.readdirSync(directory).map((result) => {
//       let dataObj = {};
//       let i = 0;
//       try {
//         const jsonFiles = fs.readFileSync(`./ Blogdata / ${ result } `, 'utf8')
//         dataObj = {
//           i: jsonFiles
//         }
//         i++
//         data(dataObj)
//       } catch (err) {
//         console.error("err" + err);
//       }
//       i++;
//     });

//   } catch (error) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }


// // const getjson = (details) => {

// //   const dataObj = {}

// //   details.map(async (file) => {

// //     fs.readFile(file, { encoding: 'utf-8' }).then((result) => {

// //       if (!dataObj[result]) {
// //         dataObj[result] = JSON.parse(result);
// //       }
// //     });

// //     console.log(dataObj)

// //   })
// // console.log(filejson)


// // }

// // use readdir method to read the files of the directory
// // fs.readdir(directory, (err, files) => {

// //   files.forEach(file => {
// //     let fileDetails = fs.lstatSync(path.resolve(directory, file));

// //     if (!fileDetails.isDirectory()) {
// //       fileArray.push(file);
// //     }
// //   });
// //   getjson(fileArray)
// // });
// // try {
// //   await fs.readFile(`./ Blogdata / ${ d } `, 'utf8', (err, data) => (data || err));
// //   console.log(datas);
// // } catch (err) {
// //   console.log("err" + err);
// // }