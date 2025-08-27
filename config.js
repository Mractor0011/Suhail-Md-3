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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_34_08_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5LFxuICAgICAgICAyNixcbiAgICAgICAgODYsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODAsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICA5OCxcbiAgICAgICAgOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxLFxuICAgICAgICAyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDksXG4gICAgICAgIDg5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibUxqWWJVZnZBdDlsbEVEOEhDeW54VG16SjYyanFGdGxuWFFyQWJzUzZLWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMTQ5MjY3NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVGQjc3MDFEMjE3ODE1MzY1NjNCNDRCQUQzRDg2M0RCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1NTcwNDA5M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMxNDkyNjc0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkY0NTlERDc0RDcwQkZBNEE2MDRGRjFFQkE0QkRBOTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU1NzA0MDkzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxKM0tRcmc2UThpaUFjdGhhb2tuZkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTE0NzBlNmQtZjNhNy00NjgzLWE1NDktYzc2ZDM3ZDI4ZTRmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOSxcbiAgICAgIDIzNixcbiAgICAgIDExMCxcbiAgICAgIDgwLFxuICAgICAgNjUsXG4gICAgICAxMCxcbiAgICAgIDgyLFxuICAgICAgMjQ4LFxuICAgICAgMTI4LFxuICAgICAgNjksXG4gICAgICAzNCxcbiAgICAgIDIzMixcbiAgICAgIDE3MixcbiAgICAgIDIyMCxcbiAgICAgIDIwNyxcbiAgICAgIDYwLFxuICAgICAgMTE4LFxuICAgICAgMjEsXG4gICAgICA2LFxuICAgICAgMTQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICAxNDEsXG4gICAgICAxNTQsXG4gICAgICA5NSxcbiAgICAgIDIyMyxcbiAgICAgIDYwLFxuICAgICAgMjA0LFxuICAgICAgODUsXG4gICAgICAyMzIsXG4gICAgICAyMjcsXG4gICAgICAyNDIsXG4gICAgICAzNixcbiAgICAgIDM5LFxuICAgICAgMTYxLFxuICAgICAgNTUsXG4gICAgICA2MSxcbiAgICAgIDI0OCxcbiAgICAgIDEyNyxcbiAgICAgIDU4LFxuICAgICAgOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lXMS9MSUZFSlhXbDhVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM0ZSWU0wT1VTclcwUmpTTFdBUnBRalkzRzJ1dWtadjhQbFMvTWpTOEdpaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrQkI3N2lTb1p3dWZ0MlZsRUYyeElsdlVYMy8zVlJoSHpsVGVycDJKTHRPZm93MTZSZ1B2dDdTTU9LWnBSTTRhTVVsZ29uVk93dDEzajk1SEo0azBBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVZXFLYm56L21JVkJVL3JDZmg1MUsyWCtxWUkxSldsRXhlanBrK01UTEoxbVhwY04rMVRDMEViY2pwYWRRd2xwY29ldkQrNVBkaVBQYjcxOHFOdTlqUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDkyNjc0NjoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdk6HwnZOq8J2Ts/Cdk74gNTkxMVwiLFxuICAgIFwibGlkXCI6IFwiMjY1MDQ3MzY0Mzc4Njg2OjI2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzE0OTI2NzQ2OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NTcwNDA4OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVWM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVYzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV1hlYzNqSXByalpVUGUvWkdDa3g5Tm9hQUtvTHA0dlBzUW1ramhkZ0FNTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDQ5MDczMjg1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTU3MDQwOTQ3NDNcIn0iCn0="  // PUT your SESSION_ID 


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
