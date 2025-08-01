const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "923314926746" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923035542921";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923035542921";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923035542921";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "923035542921";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923035542921";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_20_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzLFxuICAgICAgICA0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzksXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ3LFxuICAgICAgICA0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQzLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NixcbiAgICAgICAgMTc5LFxuICAgICAgICA3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0LFxuICAgICAgICA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzksXG4gICAgICAgIDY5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDU0LFxuICAgICAgICAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxODAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZKT0hKdEZPNWJrTCs2U0tpVUw0UWVDLytYSElKSTNFQThXSnRTSGUwMnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDM1NTQyOTIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNzY0Nzg2NDBEMTFEMjc0OENDQTBCRUJFMzIwMkUxQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTQwMjU2MzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMzU1NDI5MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVFQTg5OEUwNEFFNjFCNkQ2MDk1MjFBQzg2N0RDMDc2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1NDAyNTYzOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAzNTU0MjkyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkNGRTZCQ0UzRUI4MEM4RjFDM0QwNzcyMTVFM0MyRDJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU0MDI1NjQxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkp6UnRkbjVmU1pxc3dUZUw2cGZwRmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTc3YzEzOTQtN2M5Ny00NTUzLTllY2UtNjllNDkzZjliOWUzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMyxcbiAgICAgIDI0MyxcbiAgICAgIDIxLFxuICAgICAgMTcwLFxuICAgICAgMjQzLFxuICAgICAgMTQ1LFxuICAgICAgMjUsXG4gICAgICAyNDEsXG4gICAgICAxNTMsXG4gICAgICAxMjUsXG4gICAgICAxMzAsXG4gICAgICAyMTQsXG4gICAgICA5MSxcbiAgICAgIDE3NSxcbiAgICAgIDIxMSxcbiAgICAgIDEwOCxcbiAgICAgIDEwMCxcbiAgICAgIDI0MSxcbiAgICAgIDQ1LFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICAxMjQsXG4gICAgICAxOTgsXG4gICAgICAxNjYsXG4gICAgICA3LFxuICAgICAgMzEsXG4gICAgICA1OCxcbiAgICAgIDE1MSxcbiAgICAgIDE0NCxcbiAgICAgIDE1OCxcbiAgICAgIDI0NSxcbiAgICAgIDYwLFxuICAgICAgMTAxLFxuICAgICAgMTcxLFxuICAgICAgNjAsXG4gICAgICAxNjksXG4gICAgICAxMTYsXG4gICAgICAyMTgsXG4gICAgICA3NyxcbiAgICAgIDc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSy9QMHRJQ0VKK2RzY1FHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVMVMyV1ZISDI4SG13Y1o1VHIzeXNlTHNYRGE3cE9iMlcxRVRqa1pMOUd3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhNSWhRRGZDKzU0a2ZuVThnSmJvaUlzd3Z0QjYyaGZKVUM2T2hIcHRtalRQaDVHbVhERzVmTnNnU0ZnUmliWVh2SXFBMmwxSWQyb2FFeCtuYlphbUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInM5eFZZejI5VjNBU295TitXeEg1MFVGbVNMSUNOMDBiYjh1VWFNWmdPK3RVVHQxdDRFNnlra1IwNVZ4blgxVU94MUJBVjJIWTJxcmpqbWZCZ0pNd2pRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDM1NTQyOTIxOjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiw4DDp1TDuFJcIixcbiAgICBcImxpZFwiOiBcIjIyOTkzMTc0NTMwODc2MDozMkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAzNTU0MjkyMTozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NDAyNTYzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNHQVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0dBLmpzb24iOiAie1wia2V5RGF0YVwiOlwibkZjeFc2aWxLQURrSUFlNE5UVmt4ZlRDWVRCejJYVGJGQWZraVZ3aG9mST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTAxOTEwMjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1NDAxMDIzMzQ5NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_e17fe171b8d395b9df440e504aa8aeaacb08ead66db9692e";
global.aitts_Voice_Id = process.env.AITTS_ID|| "wHI7GVgoHNG9c8H7zXAt";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
