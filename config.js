const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Enter your session id here",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/infinitybotlogo.png?raw=true",
MV_SEND_JID: process.env.MV_SEND_JID || "Enter movie send jid",
MODE: process.env.MODE || "private",
};