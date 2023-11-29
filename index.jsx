const fetch = require('node-fetch');

const botToken = 'YOUR_BOT_TOKEN';
const chatId = 'YOUR_CHAT_ID';
const dataArray = [1, 2, 3, 4, 5];
const dataStr = dataArray.join(', ');

const apiUrl = `https://api.telegram.org/bot${AAEv2LCG5UuKRbye08N1BINszkapprBD6Rc}`;

const params = {
  chat_id: chatId,
  text: `Array: ${dataStr}`,
};

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(params),
})
  .then(response => response.json())
  .then(result => {
    console.log('Message sent successfully:', result);
  })
  .catch(error => {
    console.error('Error sending message:', error);
  });
