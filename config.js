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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923281126470";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923281126470";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_59_05_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMixcbiAgICAgICAgMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDY4LFxuICAgICAgICA4MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDkxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIxLFxuICAgICAgICA3NyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDUxLFxuICAgICAgICAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk4LFxuICAgICAgICA0LFxuICAgICAgICA4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDkwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3LFxuICAgICAgICA1MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc4LFxuICAgICAgICAzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI5LFxuICAgICAgICA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NixcbiAgICAgICAgMjA2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDUzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM2LFxuICAgICAgICA1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInJUMGRCUzlBNi9wb2ZjWTZjbWQvRGNrcHJLdDloNHFVZU1HOXdrUy9oY3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjgxMTI2NDcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNkFDQUZGRDIzNUFBMDkwMEZBRURFNzU1OEE0ODQ5Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDcyNTk5ODNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyODExMjY0NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFGQ0Y0MTc5QUNERDdDRTJCQTY3MERDQTlGRkZFOERCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NzI1OTk4NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI4MTEyNjQ3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUNFMzM1NDM0QTg4N0VFMzJEQTgzMEM4M0VEMkU5MTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ3MjU5OTg2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjgxMTI2NDcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCMUJGRDlFMzkzMkI1RTFEQ0U1Qzg2MENCOUNCRTdGN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDcyNTk5ODdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiakF4a1lyTl9TLS1HSm5hbWpqazRGUVwiLFxuICBcInBob25lSWRcIjogXCJjZTMzNzU3OC01Y2EwLTQ1ZWMtOGExMC04Yzk4NmUzODExZDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTQsXG4gICAgICAyMzAsXG4gICAgICAxODYsXG4gICAgICAxNzUsXG4gICAgICAxMDUsXG4gICAgICA5MSxcbiAgICAgIDE1MCxcbiAgICAgIDIyMCxcbiAgICAgIDc2LFxuICAgICAgMTY4LFxuICAgICAgMjQsXG4gICAgICAyNDEsXG4gICAgICA0NSxcbiAgICAgIDEwMyxcbiAgICAgIDczLFxuICAgICAgMjIsXG4gICAgICAxMTUsXG4gICAgICA0LFxuICAgICAgMTk5LFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICA4MixcbiAgICAgIDkxLFxuICAgICAgMTYwLFxuICAgICAgMjAxLFxuICAgICAgMjQsXG4gICAgICAxMTAsXG4gICAgICAyMDAsXG4gICAgICAxMzcsXG4gICAgICAxNDUsXG4gICAgICA0NCxcbiAgICAgIDE4MixcbiAgICAgIDEwNSxcbiAgICAgIDIxOSxcbiAgICAgIDIwNyxcbiAgICAgIDE0NyxcbiAgICAgIDIyOSxcbiAgICAgIDQsXG4gICAgICAyNTEsXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUZTQjYxOTdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI4MTEyNjQ3MDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODU5NjQzNDA5MDQxODU6MTVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiLmtpY2tcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJS0ZvcXNDRU1ta2xNRUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIklGNStzWUFqLzMxY0JJRGRsdUorNjZNclhqRVJUWGh3MU53ZWtJbHhwV1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRk92YVZucTRTdFBnRFZlNXBzRGZMN3FwOXYxRG1SSnc1VkJVcC9nTXNyZnFOTmtjQTAzTldVdkhpWHQ5MVRyY0NXeFBSVm5iS2pvNktNbjJXcHk4QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiKys4RldrcjhaRUMwUzVnUnE3cUZxK2RmRk9DekVpY3N4UFUxa3gySWlBdXBPREJ5WmZOZVpmaENtRVFJMnhLSGxMaWZGcDlCcERtNlVFb0tMVUlEREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjgxMTI2NDcwOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ3MjU5OTgxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVQrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFVCsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4MFhjV2FpWXUvWGdQRDVJd2xQTXNvWlJRdlJLTXFaekdwQVhUVmJOUEw0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYyNzYwNjE0NixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDcyNTk5ODM1MzhcIn0iCn0="  // PUT your SESSION_ID 


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
