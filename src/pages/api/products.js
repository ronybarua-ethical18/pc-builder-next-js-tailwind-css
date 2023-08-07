import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://ronybaruaethical18:JgANPFVog8qYsFUq@cluster0.szhilzm.mongodb.net/next-level";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


export default async function handler(req, res) {
  try {
    // Connect to MongoDB
    // const client = await connectToDatabase();
    const db = client.db("pc-builder");
    const collection = db.collection("products");

    if (req.method === "POST") {
      const result = await collection.insertMany(req.body);

      res
        .status(201)
        .json({ message: "Data created successfully", data: result });
    }
    else if (req.method === "GET") {
      if (req.query.productId) {
        const data = await collection.findOne({ id: Number(req.query.productId) })
        // console.log("data", data)
        res.status(200).json({ data });
      } else {
        const data = await collection.find().toArray();
        res.status(200).json({ data });
      }
    }
  } catch (error) {
    res.status(500).json({ error: "Error creating data" });
  }
}
