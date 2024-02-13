const { writeFile } = require('fs/promises');

export async function POST(request) {
    const data = await request.formData();
    const file = data.get('file');
    if (!file) {
        return {
            status: 200,
            body: JSON.stringify({ success: false }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll just write it to the filesystem in a new location
    const path = `/tmp/${file.name}`;
    await writeFile(path, buffer);
    console.log(`open ${path} to see the uploaded file`);
    return {
        status: 200,
        body: JSON.stringify({ success: true }),
        headers: {
            'Content-Type': 'application/json'
        }
    };
}

