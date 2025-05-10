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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_02_05_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAxODksXG4gICAgICAgIDM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY4LFxuICAgICAgICA3OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgODcsXG4gICAgICAgIDUzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDQzLFxuICAgICAgICA0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDcxLFxuICAgICAgICA1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMyxcbiAgICAgICAgNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyOSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDUxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTksXG4gICAgICAgIDY4LFxuICAgICAgICA5MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0LFxuICAgICAgICA5MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDY1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0aXpvZ0VDOGkwRnVRVXMxeHhMTnhIcEN0dUliSXloQ0ZRei9zQ0hkR2pFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZY3hFaGo5a1RCV3JXd0ZtZXhkNFJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImYwMjJkOGM4LWQ4MTktNDEyZi1hMWVlLWM1NTlmZDIwZTA4NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzgsXG4gICAgICAxNDksXG4gICAgICA3MyxcbiAgICAgIDEyMyxcbiAgICAgIDI1MyxcbiAgICAgIDc0LFxuICAgICAgODEsXG4gICAgICAxNyxcbiAgICAgIDgsXG4gICAgICAxNzEsXG4gICAgICA5NyxcbiAgICAgIDE5LFxuICAgICAgMjQ2LFxuICAgICAgMTk4LFxuICAgICAgODYsXG4gICAgICAxNDYsXG4gICAgICA5OCxcbiAgICAgIDYsXG4gICAgICAxNDUsXG4gICAgICAxNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk0LFxuICAgICAgMTMwLFxuICAgICAgNTAsXG4gICAgICA3OCxcbiAgICAgIDExNCxcbiAgICAgIDI0OCxcbiAgICAgIDgxLFxuICAgICAgMTU0LFxuICAgICAgMjEwLFxuICAgICAgMTgyLFxuICAgICAgMTY0LFxuICAgICAgMjI5LFxuICAgICAgMzYsXG4gICAgICAzLFxuICAgICAgMTIxLFxuICAgICAgODMsXG4gICAgICAxNDEsXG4gICAgICA2NCxcbiAgICAgIDE1OCxcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBQ0UyRVQ3RlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDM4NjUyMDY3OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNTEzNTQ2NTU1ODExMDo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t1Y3FKRUNFUHp3L2NBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOWRaNGdTYzlqRnc2bWMwM2xmY3pjOE05QnBQTUM2K2NOVjFsWUtTUHhVQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjNE9RZGwwNnFXMVA5Z2pDVkg4KzdDdng2Q0J5aUFnRzBabTNpcnQyR05wc0FCbzMveE9kVzF0dDBVYllIZmRMaDRmcThhb2V2RXZvdCtqRXBHcWtDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZRDVTSGN5eVRYNWNQcEFmUk1EQi8wRXNsdldLU200TXlNbDVkV2hCbnhaRmlUMDJLclZHTzNOc3NBcGpMMVUwdTFsR2s2QnJsTjZVNkM0YXdITjVEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMzg2NTIwNjc6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY4OTI5MjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQT1NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBPUy5qc29uIjogIntcImtleURhdGFcIjpcImJwOWhjbEdoK2wxUHN1ZDBadXFyd0MwUlRDYmZCZCtGZ0ZkcXlWSzNzZzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTczMTgxNDgyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ2ODAxODczNzQyXCJ9Igp9"  // PUT your SESSION_ID 


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
