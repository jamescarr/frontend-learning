import * as url from 'url'
import MongoClient from 'mongodb'

let cachedDb = null

async function connectToDatabase(uri) {
    if (cachedDb) {
        return cachedDb
    }

    const client = await MongoClient.connect(uri, {useNewUrlParser: true})

    const db = await client.db(url.parse(uri).pathname.substr(1))
    cachedDb = db
    return db
}

export default async (req, res) => {
    const db = await connectToDatabase(process.env.MONGODB_URI)

    const collection = await db.collection('users')

    const users = await collection.find({}).toArray()

    res.status(200).json({users})
}
