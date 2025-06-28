import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config();

const client = createClient({
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PW,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

client.on('error', err => console.log('Redis Client Error', err));

if(!client.isOpen) {
    await client.connect();
}

// await client.set('foo', 'bar');
// const result = await client.get('foo');
// console.log(result)  // >>> bar

export default client;

