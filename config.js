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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923314926746";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923314926746";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_33_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU0LFxuICAgICAgICA2NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg5LFxuICAgICAgICA4OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2LFxuICAgICAgICAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDc5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NixcbiAgICAgICAgMjAxLFxuICAgICAgICA5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODAsXG4gICAgICAgIDU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTczLFxuICAgICAgICA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDQyLFxuICAgICAgICA4MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDc5LFxuICAgICAgICA5NyxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMTcyLFxuICAgICAgICAzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2OSxcbiAgICAgICAgOTksXG4gICAgICAgIDgxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDc3LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNzkwSXNMSTBCUU9kdWNzc3dXcmxEQVBOL2luVlhWYnB3cm5HLytiQkRCVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMTQ5MjY3NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJGNjU4RTI5QkU4NzE3NjVEREM2RkVFOUQzRUM4QzkxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1MDMzNjQzNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMxNDkyNjc0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUZBNzRFNUY2MEMwNjBBRjc5QTgxQ0RFMTNEMTQ5RENcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzUwMzM2NDM2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNoeVFqSnQzUzNPd1JjbWN5R3kwc0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDViY2YxMzYtYzM0MC00MjEwLWFjNWMtZjYxYTM5ZmYxMDlmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMixcbiAgICAgIDE4NyxcbiAgICAgIDI5LFxuICAgICAgNzUsXG4gICAgICA0OSxcbiAgICAgIDkxLFxuICAgICAgMTAyLFxuICAgICAgNyxcbiAgICAgIDg2LFxuICAgICAgMTU1LFxuICAgICAgMjAzLFxuICAgICAgMjI1LFxuICAgICAgMjIyLFxuICAgICAgMjUxLFxuICAgICAgMjQ1LFxuICAgICAgMTM3LFxuICAgICAgNjksXG4gICAgICAyMzAsXG4gICAgICAxMjEsXG4gICAgICA4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc0LFxuICAgICAgMTgsXG4gICAgICAxMTUsXG4gICAgICAyNTQsXG4gICAgICAxNzYsXG4gICAgICA3MyxcbiAgICAgIDI1MyxcbiAgICAgIDIzLFxuICAgICAgMjUyLFxuICAgICAgNjYsXG4gICAgICAxMjAsXG4gICAgICAxOTgsXG4gICAgICAxMjgsXG4gICAgICA0MixcbiAgICAgIDE4MSxcbiAgICAgIDE3OCxcbiAgICAgIDI0OCxcbiAgICAgIDE3MSxcbiAgICAgIDE0MSxcbiAgICAgIDE1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BEOTJ0UUdFS21IME1JR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZThZSXl3aGlMMkNkT2J0Q3p3ZnNrQjhXaFFUYnJMTHdOL1UxY1Z2N2prST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpTm90cEZzVzljOTk0VmxiQ3dqZy9VVk1oWkt0Y1lzakdlVVFWSGREc2tUVTFYZERjcVY2RUhxaFRLbzlobEF0TG9uL2IvM2Noa1NQNXJTaUdWUVZEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzU2QxcVhnOTAxaTRERzdaSGlFb2FTaHBCK2VpS2ZUd2xsZFRmNndzQ3g0Zy8rV3A1ZTNPZ3hZZUJpQlh3TlJkY2ZDSjFiUTJkbGpDTW81Uk9UVUxCUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDkyNjc0Njo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2TofCdk6rwnZOz8J2TviA1OTExXCIsXG4gICAgXCJsaWRcIjogXCIyNjUwNDczNjQzNzg2ODY6OEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxNDkyNjc0Njo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTAzMzY0MzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMMTJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUwxMi5qc29uIjogIntcImtleURhdGFcIjpcIkIzQys4OXM4TUNCNnJ1a2FuTkt0MHUvd09uS3J0YzRLcHVaUW1xODVWN0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc4ODI2NDE3NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUwMzM2NDM1MDgxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
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
