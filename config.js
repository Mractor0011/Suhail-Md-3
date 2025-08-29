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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923066080560";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923066080560";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_59_08_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDk0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDc0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQzLFxuICAgICAgICA4NixcbiAgICAgICAgNjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODUsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDk2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OCxcbiAgICAgICAgMixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMixcbiAgICAgICAgNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM3LFxuICAgICAgICAzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAzLFxuICAgICAgICA2NixcbiAgICAgICAgMTI0LFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM0LFxuICAgICAgICA1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDU5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODEsXG4gICAgICAgIDExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2b2lZeEp6aUFsUHVKYlloNWJvaWhyT2hSUlZ2NVRPVXJNRlVTYmI2VGw4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPWXFndnJJSFRPdXlCNjNwUENQbkxBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZjNjQwMzBjLTA2YTQtNGI2OS04MGQ0LTJkNjBlOGZjMmRmYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzLFxuICAgICAgMTQ5LFxuICAgICAgMjUzLFxuICAgICAgMTI1LFxuICAgICAgMjMxLFxuICAgICAgMTQ5LFxuICAgICAgOTMsXG4gICAgICAxMDQsXG4gICAgICAyNDMsXG4gICAgICAyMDYsXG4gICAgICAxOTksXG4gICAgICAyMjEsXG4gICAgICAyMixcbiAgICAgIDQwLFxuICAgICAgMTU0LFxuICAgICAgMTA1LFxuICAgICAgMTcyLFxuICAgICAgMjEsXG4gICAgICAxNjIsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEzLFxuICAgICAgMTUyLFxuICAgICAgMTA4LFxuICAgICAgMTg5LFxuICAgICAgMTY5LFxuICAgICAgOTIsXG4gICAgICAyNDksXG4gICAgICAyNTEsXG4gICAgICAxNjEsXG4gICAgICA1MixcbiAgICAgIDM3LFxuICAgICAgMjE5LFxuICAgICAgMjMyLFxuICAgICAgMTE1LFxuICAgICAgMjM1LFxuICAgICAgNTksXG4gICAgICAxMTAsXG4gICAgICAxODIsXG4gICAgICA3MCxcbiAgICAgIDE1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xIUDB0SUNFSTJodXNVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVTFTMldWSEgyOEhtd2NaNVRyM3lzZUxzWERhN3BPYjJXMUVUamtaTDlHdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaVG9zZ2JhU3R4S0gyaHlFT01vYUlBSVJORE1mMk9za3V0dS9lUVNhWnF2M041amZhbExZZUFRaWR5eWl0T2lRS1N5ekw5bnhqelZPeU9oR3plMThBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0TTFIZmJ0YkdzczRwWW85dkhBbGVZMTlCUDFsNzFmMHA4N2h0YXFVTlhvSnRVUWlPdVgzdHNCZGh0SUZhTmVsMGdwdCthUW9rUzlPYXhaeUIvYS9nQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA2NjA4MDU2MDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVGVtcG9yYXJ5XCIsXG4gICAgXCJsaWRcIjogXCIxMTkxODU5NDY1MDEyMjg6NEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA2NjA4MDU2MDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU2MjcwNzM2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTTUvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNNV9fLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYjNBTkF5bEl5bXVJOCtzQjM4SE54b2RvUHIrZjV2dElkTkM2d2I4MXhnYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTAxOTEwMjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1NjEwMjM0MjEwN1wifSIKfQ=="  // PUT your SESSION_ID 


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
