import { MongoClient, ServerApiVersion }from'mongodb';

export default function dbConnect(collectionName){
    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.1bvy3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    return client.db(process.env.MONGODB_USER).collection(collectionName)
}

