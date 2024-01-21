import * as fs from 'fs';

export default function handler(req, res) {

    const file = fs.readFile(`./Blogdata/${req.query.slug}.json`, 'utf8', (err, data) => {

        console.log(`./Blogdata/${req.query.slug}.json`)
        res.status(200).json(JSON.parse(data));

    });

}