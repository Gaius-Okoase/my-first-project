// subscriber.js
import { createClient } from 'redis';

(async () => {
  const subscriber = createClient();

  await subscriber.connect();

  // Subscribe to a channel called "chatRoom"
  await subscriber.subscribe('chatRoom', (message) => {
    console.log(` Received message: ${message}`);
  });

  console.log('Subscriber is listening for messages');
})();
