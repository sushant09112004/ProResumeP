import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'test', 'data', '05-versions-space.pdf');

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' });
  }

  try {
    const fileData = fs.readFileSync(filePath);
    // Process the file data
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error reading the file:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
