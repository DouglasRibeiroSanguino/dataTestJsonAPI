import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'dataItems.json');

  const raw = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(raw);

  const { search, active } = req.query;
  let result = data.items;

  if (search) {
    result = result.filter(i =>
      i.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (active !== undefined) {
    result = result.filter(i => i.active === (active === 'true'));
  }

  res.status(200).json({
    status: 'ok',
    count: result.length,
    items: result
  });
}
