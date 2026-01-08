import items from '../data/items.json';

export default function handler(req, res) {
  const { search, active } = req.query;

  let result = items;

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
