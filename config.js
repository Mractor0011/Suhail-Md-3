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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_29_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNixcbiAgICAgICAgMTYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI0LFxuICAgICAgICA1LFxuICAgICAgICAzMyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NixcbiAgICAgICAgMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODAsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDg4LFxuICAgICAgICAyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDUzLFxuICAgICAgICA3OSxcbiAgICAgICAgNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDkzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICAxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMixcbiAgICAgICAgNDksXG4gICAgICAgIDM4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyLFxuICAgICAgICAzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NixcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqamRlRGYralVvSXQ4YUs3cCtpYlJkRklyVlBaaHRrSUtId01YdU9BTmc0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAzNTU0MjkyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTI1NkUwOThBREMxN0JERUJGQkIyMDRBNzY5M0QzQ0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU0MTQ0OTUxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDM1NTQyOTIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwNzU0RDAzMTk0NjdFQjkzQzFGN0UxMjIzQjZEQ0RGN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTQxNDQ5NTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOTdlTmxiNlBSVXFzVHJfeWFZd3g3Z1wiLFxuICBcInBob25lSWRcIjogXCIxN2U0ZTVjMy01ODlkLTQ4ZmYtYjZiZC0xMTc0Y2ZmNmM1ZWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgMjMzLFxuICAgICAgMTE5LFxuICAgICAgMjMsXG4gICAgICA5NSxcbiAgICAgIDE4MSxcbiAgICAgIDIyMyxcbiAgICAgIDE0NixcbiAgICAgIDI0NyxcbiAgICAgIDE1MCxcbiAgICAgIDE1OSxcbiAgICAgIDMyLFxuICAgICAgMjA1LFxuICAgICAgODQsXG4gICAgICAxOTIsXG4gICAgICA1MixcbiAgICAgIDE2MixcbiAgICAgIDI0NSxcbiAgICAgIDksXG4gICAgICAxMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDEyNCxcbiAgICAgIDE3NixcbiAgICAgIDIxNCxcbiAgICAgIDIzNixcbiAgICAgIDE3NyxcbiAgICAgIDIwMyxcbiAgICAgIDI0MCxcbiAgICAgIDI0NixcbiAgICAgIDE4NixcbiAgICAgIDE5MSxcbiAgICAgIDE1NSxcbiAgICAgIDEwOSxcbiAgICAgIDI0LFxuICAgICAgMTU0LFxuICAgICAgMjMwLFxuICAgICAgOTUsXG4gICAgICAxODcsXG4gICAgICAyMCxcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSy9QMHRJQ0VMREJ1TVFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVMVMyV1ZISDI4SG13Y1o1VHIzeXNlTHNYRGE3cE9iMlcxRVRqa1pMOUd3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9RMENSVXNBMi9jK2NTQlF6UER2WEQraFNtNjFpUEpSSmhsK0dyY2lBc05yL21MbXdCSEJlSEJPMmc4MXJoQWhWekFZYlFkOGFzOEFndDEvOExOY0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndjUWh3YU5CdnJkQW9LRHRSdkFjMmdrZnhDOXRpUFBsN1hYM2VJRWpneitWUm5yTFMyK21JZ205SjhseUFSL1h6V09ldEh0QWZ4VzltaVo2MlFTWWpRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDM1NTQyOTIxOjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiw4DDp1TDuFJcIixcbiAgICBcImxpZFwiOiBcIjIyOTkzMTc0NTMwODc2MDozM0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAzNTU0MjkyMTozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NDE0NDk0NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNHQlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0dBLmpzb24iOiAie1wia2V5RGF0YVwiOlwibkZjeFc2aWxLQURrSUFlNE5UVmt4ZlRDWVRCejJYVGJGQWZraVZ3aG9mST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTAxOTEwMjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNHQi5qc29uIjogIntcImtleURhdGFcIjpcIlpULzVMdjdOSXFiRDhtbGE1endQUTlPeG5CaWkwZXg1QTQvU1ZzS3piYVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzEwMTkxMDIzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTQxMjE3MjQzMzdcIn0iCn0="  // PUT your SESSION_ID 


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
