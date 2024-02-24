'use server'
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function upload(data) {

    // try {

    const file = data.get('file');
    if (!file) {
        throw new Error('No file uploaded');
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = join('./public/upload/', file.name);
    await writeFile(path, buffer);

    return { success: true };
}

