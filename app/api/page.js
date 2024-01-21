import fs from 'fs';
import Path from '@/Blogdata/'

export default function handler(req, res) {
  // const directory = './Blogdata/';
  try {

    const data = fs.readdirSync(Path)
    res.status(200).json(data);

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}
