import { MongoClient } from 'mongodb';

const MONGODB_URI  = "mongodb+srv://ronybaruaethical18:JgANPFVog8qYsFUq@cluster0.szhilzm.mongodb.net/next-level"

let cachedClient = null;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

export async function connectToDatabase() {
  if (cachedClient && cachedClient.isConnected()) {
    return cachedClient;
  }

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  cachedClient = await MongoClient.connect(MONGODB_URI, options);

  return cachedClient;
}