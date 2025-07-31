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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_23_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk2LFxuICAgICAgICA5NSxcbiAgICAgICAgNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MyxcbiAgICAgICAgMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgyLFxuICAgICAgICA0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAsXG4gICAgICAgIDg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDY0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDczLFxuICAgICAgICA2MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzLFxuICAgICAgICA1OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY0LFxuICAgICAgICAzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDMyLFxuICAgICAgICA5MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitLY1JzMzlYTFcxY3dPYjZyK3NiY2trQzFZZTB5MjVrTEJDci9wSTdacHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZhdXZKc3JCUWVtN25qRWFjNjgxdlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWI2N2ExY2ItODQ0ZC00ZTBiLTg0ZmYtNjcxN2UzMjE1MTg5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NSxcbiAgICAgIDE0OCxcbiAgICAgIDExLFxuICAgICAgMjUxLFxuICAgICAgOTAsXG4gICAgICAxODIsXG4gICAgICA3NSxcbiAgICAgIDIyNyxcbiAgICAgIDgzLFxuICAgICAgNTgsXG4gICAgICAxMixcbiAgICAgIDQ5LFxuICAgICAgMTI3LFxuICAgICAgMTIzLFxuICAgICAgMTY1LFxuICAgICAgMjIzLFxuICAgICAgNzQsXG4gICAgICA3MyxcbiAgICAgIDY1LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICAyMSxcbiAgICAgIDIwNixcbiAgICAgIDIzOSxcbiAgICAgIDIxNixcbiAgICAgIDU2LFxuICAgICAgMjExLFxuICAgICAgNDYsXG4gICAgICAyMDYsXG4gICAgICA2MCxcbiAgICAgIDE1NixcbiAgICAgIDE3OCxcbiAgICAgIDc4LFxuICAgICAgMjE2LFxuICAgICAgNzEsXG4gICAgICA0MyxcbiAgICAgIDIyNyxcbiAgICAgIDE4OSxcbiAgICAgIDIzNCxcbiAgICAgIDE5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00rWDRQY0NFSUdxcWNRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM3V0enFWbEVSSks1Tkx6LzNUNzhwT2VibEhHcnR4ZnlzcXBDb3l5YTVoMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyNWVZYUpDMTBuVE9iTzJrcmtvUUQxK1VmL3BuRVZKU1JGejc2RGdQWW01TjJ0OTRqOEJIc0k4ajJkeXZkNU50Yk9iT3BxaFQzK0JhSjVMWHlOSW5DQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDY1ZrNFN5OVFCeWkwc3RyL3pNVElPWGpRYkNwcjVxZjBvYlJTYXVVenhIREwrVkNhOC80cDBRZ05WZEZuY3FGVDRucWdZVFZlYU5USEhTQkhwSXhodz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAzNTU0MjkyMTozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI5OTMxNzQ1MzA4NzYwOjMwQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDM1NTQyOTIxOjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUzODk2MTk3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDJzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIMnMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1dThNZmZmL1cvbmhRSFVaQnFQNVg4SHRUY2xZMHBrSUswYjNEd3h5cGFBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc4ODAwNzg4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUzODczNTg2ODkxXCJ9Igp9"  // PUT your SESSION_ID 


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
