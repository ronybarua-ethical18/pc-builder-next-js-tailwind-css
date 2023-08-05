import { connectToDatabase } from '../../mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Connect to MongoDB
      const client = await connectToDatabase();
      const db = client.db("pc-builder");
      const collection = db.collection('products');

      // Fetch data from MongoDB
      const data = await collection.find().toArray();

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
