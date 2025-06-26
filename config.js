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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_13_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDMxLFxuICAgICAgICAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDU1LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1MixcbiAgICAgICAgMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NyxcbiAgICAgICAgODksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICA3OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMSxcbiAgICAgICAgODgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDcsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICA2NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTksXG4gICAgICAgIDMsXG4gICAgICAgIDY3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImJRZW9GNkUxNjVrYlcrallHR0xLcGNnMzV3Zm1GOFJRcUhpd1BoaGJ6NEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDM4NjUyMDY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNjY5RkMyMTUzNDdFMTdCMzc5QTJCMTQ3QzNCODUzNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTA5MTExNzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMzg2NTIwNjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBBODg5QUEwM0Y2QTE2QUIwQkQ0RjZDODQ1NjYyREM1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1MDkxMTE4MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTWnFQQUsxWFJ3R183dzNic1VXbUpnXCIsXG4gIFwicGhvbmVJZFwiOiBcImY3Y2YyODg2LTRhN2MtNGU1NS04NjI4LWI2MzAzZmMzY2MzMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODgsXG4gICAgICAxNzIsXG4gICAgICAyMjgsXG4gICAgICA2MCxcbiAgICAgIDUzLFxuICAgICAgNzIsXG4gICAgICAxMTEsXG4gICAgICAxMjAsXG4gICAgICAxODMsXG4gICAgICAxOTUsXG4gICAgICAxODAsXG4gICAgICAyMDUsXG4gICAgICAyMzQsXG4gICAgICAxMjMsXG4gICAgICAxMDQsXG4gICAgICA0LFxuICAgICAgMTkwLFxuICAgICAgMjQ1LFxuICAgICAgMTQ3LFxuICAgICAgMjU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICAyNCxcbiAgICAgIDY3LFxuICAgICAgMjI5LFxuICAgICAgMTI2LFxuICAgICAgMzAsXG4gICAgICA1MixcbiAgICAgIDgsXG4gICAgICAyMzMsXG4gICAgICA2LFxuICAgICAgMjIwLFxuICAgICAgNTgsXG4gICAgICAxMTksXG4gICAgICA0MCxcbiAgICAgIDQ1LFxuICAgICAgOTksXG4gICAgICAxNTksXG4gICAgICAxNTQsXG4gICAgICA2MSxcbiAgICAgIDIwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04vWHJzTUVFTVdSODhJR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieWM2UGcxeVVvZ2EzbG1tUTdQYTB5Y2hXR1dJekpLVlJjOWV5SHFteHdoUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNZVFKRE9FSXZoZW9XWjZyVXVVZmtrSTlxZmY2aVVyWi9RN2s1VGJlOTIwMU13cTdjNUdieWFLTVZWOGdaVVdybXdRdFdnS0Y5VWhhbWhxa2dCdjhDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5cWlsQW9wbEMyRkxTU1c0VURrc2R1VXhKdXhwMkdBc2ZScWdCWnRieGlTVXpGUmMrUTBMY3Z6TERhRjN4bnlqZzBrQ29sazVUNWc3M2RJQXJhYUlEQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAzODY1MjA2NzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE1MTM1NDY1NTU4MTEwOjE5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcInx8IE1hc3RFciBHIPCfmIEgfHxcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAzODY1MjA2NzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTA5MTExNzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHVm9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdWbS5qc29uIjogIntcImtleURhdGFcIjpcIkN2cUt1aXliNTc3eEdHaFR4N2hkQWFzTnZrSXA3Y1U1MVoxNjlBeVorN009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIxNTAxNTkwMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUwNzYyNDQ1NjQyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1ZvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRG5VZHF0TGxGL0YvOXJnOWM5ZFlsSENlT1Npa1RxVTdJWWlWdG5MR3RSVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjE1MDE1OTAzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTA5MTEwNzY1ODZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUJJQUFHVm4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2N2VnbDA3QXNiSXp6K1NLby9mc1BOTC9XbHU4ZVhQb0x6MG1UaVB4cStZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMTUwMTU5MDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDE4XX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTA3NjI0NTE3NThcIn0iCn0="  // PUT your SESSION_ID 


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
