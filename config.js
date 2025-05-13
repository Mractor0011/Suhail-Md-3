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


global.devs = "923038652067" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923038652067";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923038652067";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_24_05_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMyxcbiAgICAgICAgMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDgxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5MixcbiAgICAgICAgMTYyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk2LFxuICAgICAgICAzNixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgODcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjYsXG4gICAgICAgIDcxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgNDksXG4gICAgICAgIDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MixcbiAgICAgICAgOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYTdNTFdKSzZ0RWNSNi9xdnd4VmtnSjNIS1dybUtDSmREMk1OWko2QUV6QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMzg2NTIwNjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ4MUExQ0RFNDlGMkVBMTJGQjdFNDgzODk5NUE4QzlCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NzExMDI3M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMSGJiRG1RV1J4R1RFVUd1bkJiNDB3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjFiZGMxNGQ0LTExMTAtNDJkNS1iN2Y3LTY3ZGU3MDZlOWE5MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDE5MCxcbiAgICAgIDE5NSxcbiAgICAgIDI0MCxcbiAgICAgIDUzLFxuICAgICAgMjYsXG4gICAgICAxMDQsXG4gICAgICA5MyxcbiAgICAgIDc4LFxuICAgICAgNDcsXG4gICAgICAzMixcbiAgICAgIDE0OCxcbiAgICAgIDE4NixcbiAgICAgIDMwLFxuICAgICAgMTQ0LFxuICAgICAgMjgsXG4gICAgICAxMzUsXG4gICAgICA3NSxcbiAgICAgIDE4MCxcbiAgICAgIDE0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICA4MCxcbiAgICAgIDAsXG4gICAgICAyMixcbiAgICAgIDE1NCxcbiAgICAgIDI5LFxuICAgICAgNjAsXG4gICAgICA2MSxcbiAgICAgIDM2LFxuICAgICAgMTg0LFxuICAgICAgMSxcbiAgICAgIDE4MixcbiAgICAgIDU0LFxuICAgICAgMTU4LFxuICAgICAgMjQxLFxuICAgICAgMzAsXG4gICAgICAxNzcsXG4gICAgICA3NyxcbiAgICAgIDEwLFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWEpFWkY3U0xcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAzODY1MjA2Nzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRXZlcnl0aGluZyBQcm92aWRlclwiLFxuICAgIFwibGlkXCI6IFwiMjE1MTM1NDY1NTU4MTEwOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3Zpdk00RUVQaVNpOEVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0YjYwc2JuOGtGUkZoVWZXSXdFTGk4eGtDNUg2aGE5YWVENXZHSFdPUlhzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImkvdXhKUlZUeTBSU1plNHcrSUtzV0c1TGZ6VXZvem96Q1pNWm9zQ3JGa2JkRjBrZFNHY3MyYlJmTXR1dGcxM1ova0R4ejFBL2hLV2tDY2l0ZWVkK0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndLQlZtbVJoQ0NkMzlteHAyVkN3TjdTUWVSVCtVZ1RyeW5pN0UzSnlCOGdqaXNGUUczOCsyTW9oWFI4NnNQR3NJLy9lbFlHcnBWZHo0cytrMVRDeGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAzODY1MjA2Nzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ3MTEwMjY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlIwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCUjAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJZkFwMEZpbUlSQkM3czVrcUEwMXgzYlR5OGpIZXBaT0Z2SkZOcnB3MThzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMzgzMTUzNzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NzExMDI3MDI0MFwifSIKfQ=="  // PUT your SESSION_ID 


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
