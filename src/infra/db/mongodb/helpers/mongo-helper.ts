import { MongoClient } from 'mongodb'
import process from 'process'

export const MongoHelper = {
  client: null as unknown as MongoClient,  

  async connect(uri: string): Promise<void>{
    this.client = await MongoClient.connect(process.env.MONGO_URL!)
  },
  
  async disconnect(): Promise<void>{
    await this.client?.close()
  }
}