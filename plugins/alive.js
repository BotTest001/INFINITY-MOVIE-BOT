const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let aliveMsg = `*_Hello ${pushname} 👋_*

*_INFINITY MOVIE Bot is alive..._*

🧑‍💻 *Owner:* Sadaru

📞 *Owner Number:* +94 70 181 4946

📌 *Main Movie Group:* https://chat.whatsapp.com/GMaH3KTEtlEJclmaZmvnIa

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: aliveMsg},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})


