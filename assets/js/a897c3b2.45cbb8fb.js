"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[824],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=r,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={description:"Xadow - Duino",title:"Xadow - Duino",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Duino",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_Duino",id:"Seeed_Elderly/Xadow/Xadow_Duino",title:"Xadow - Duino",description:"Xadow - Duino",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_Duino.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_Duino",permalink:"/Xadow_Duino",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_Duino.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Xadow - Duino",title:"Xadow - Duino",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Duino",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - Basic Sensors",permalink:"/Xadow_Basic_Sensors"},next:{title:"Xadow - GSM Breakout",permalink:"/Xadow_GSM_Breakout"}},s={},u=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Light Things Up",id:"light-things-up",level:2},{value:"Use Xadow Duino with Arduino IDE",id:"use-xadow-duino-with-arduino-ide",level:2},{value:"RePhone Community",id:"rephone-community",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino.JPG",alt:null})),(0,r.kt)("p",null,'The Xadow Duino is specially designed for building up awesome Lighting Devices with the most popular RGB LED WS2812B. Based on MCU ATmega32u4 and built-in micro USB, Xadow Duino allows you to either control the RGB LEDs directly from the software in "RePhone Kit Create" or program the board with Arduino IDE to make it work independently. Unlike other add-on modules, this board has its own battery socket (JST1.0 type), which allows you to power it in many ways:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Via 5V USB (if the battery is connected, it would also charge the battery simultaneously )"),(0,r.kt)("li",{parentName:"ul"},"Via 3.7V Lipo battery"),(0,r.kt)("li",{parentName:"ul"},"Via breakout pins"),(0,r.kt)("li",{parentName:"ul"},"Via Xadow GSM+BLE")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-Duino-p-2556.html"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Xadow-Duino/images/300px-Get_One_Now_Banner.png",alt:null}))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Able to work like an Arduino"),(0,r.kt)("li",{parentName:"ul"},"Plug-and-play if connected with RePhone Kit Create"),(0,r.kt)("li",{parentName:"ul"},"Open source and modular design"),(0,r.kt)("li",{parentName:"ul"},"Slim and small"),(0,r.kt)("li",{parentName:"ul"},"Specially designed for WS2812B"),(0,r.kt)("li",{parentName:"ul"},"Built-in 11PIN Xadow Connectors for fully flexible connection with other Xadow Modules"),(0,r.kt)("li",{parentName:"ul"},"Stackable, chain-able and sew-able with other Xadow Modules"),(0,r.kt)("li",{parentName:"ul"},"Perfect choice for LED lovers")),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Microcontroller")),(0,r.kt)("td",{parentName:"tr",align:null},"ATmega32u4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Power Supply")),(0,r.kt)("td",{parentName:"tr",align:null},"5V via USB, current draw is 1.5A at Max /3.3 ~ 4.2V via battery socket, current draw is 1.5A at Max /3.3 ~ 6V via breakout pins, current draw is 500 mA at Max / 3.3 ~ 4.2 V via Xadow GSM+BLE, current draw is 500 mA at Max")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Charging Current")),(0,r.kt)("td",{parentName:"tr",align:null},"500 mA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Flash Memory\t")),(0,r.kt)("td",{parentName:"tr",align:null},"32 KB (ATmega32u4) of which 4 KB used by bootloader")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"SRAM\t")),(0,r.kt)("td",{parentName:"tr",align:null},"2.5 KB (ATmega32u4)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"EEPROM")),(0,r.kt)("td",{parentName:"tr",align:null},"1 KB (ATmega32u4)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Clock Speed")),(0,r.kt)("td",{parentName:"tr",align:null},"16 MHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Connector")),(0,r.kt)("td",{parentName:"tr",align:null},"2 \xd7 11 PIN Xadow Connector Bonding pads for RGB LED WS2812b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Interfaces")),(0,r.kt)("td",{parentName:"tr",align:null},"Interface with Xadow GSM+BLE through / I2C (7-bit address 0x23)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Dimensions")),(0,r.kt)("td",{parentName:"tr",align:null},"25.37mm \xd7 20.30mm / 1\u201d\xd7 0.8\u201d")))),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino.png",alt:null})),(0,r.kt)("p",null,"The image below illustrates the Pin Definitions of 11 Pin Xadow Connector, Solder-able Breakout Pins on the Xadow Duino."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_Pin_definitions.png",alt:null})),(0,r.kt)("h2",{id:"light-things-up"},"Light Things Up"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Control the WS2812B with your 'RePhone Kit Create")),(0,r.kt)("p",null,"The easiest way to control the WS2812B is to use the built-in software in 'RePhone Kit Create', which provides an 'Actuator Control' application that allows you to light up the WS2812B in three different ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Monochrome."),(0,r.kt)("li",{parentName:"ol"},"Marquee."),(0,r.kt)("li",{parentName:"ol"},"Rainbow.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_WS2812B.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Set If This Then That")),(0,r.kt)("p",null,"In the \u2018If This Then That\u2019 you can set different conditions to trigger the Xadow Duino to light up the WS2812B in a specified mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Program it with Arduino IDE")),(0,r.kt)("p",null,"You can also customize your light sources by coding with the Arduino IDE"),(0,r.kt)("h2",{id:"use-xadow-duino-with-arduino-ide"},"Use Xadow Duino with Arduino IDE"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"To use Xadow Duino with Arduino IDE, there are few simple steps you would need to follow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Signed_USB_Serial_Driver"},"Download the driver files")),(0,r.kt)("li",{parentName:"ol"},"Please refer to the Download Arduino and install Arduino driver page to install the driver correctly")),(0,r.kt)("p",null,"After you correctly installed the driver, Open ",(0,r.kt)("strong",{parentName:"p"},"Device Manager")," by clicking the ",(0,r.kt)("strong",{parentName:"p"},"Start")," button, clicking ",(0,r.kt)("strong",{parentName:"p"},"Control Panel"),", clicking ",(0,r.kt)("strong",{parentName:"p"},"System and Security"),", and then, under ",(0,r.kt)("strong",{parentName:"p"},"System"),", clicking ",(0,r.kt)("strong",{parentName:"p"},"Device Manager"),". If you're prompted for an administrator password or confirmation, type the password or provide confirmation. Now you should be able to see the ",(0,r.kt)("strong",{parentName:"p"},"COM ports")," on your ",(0,r.kt)("strong",{parentName:"p"},"\u2018Device Manager\u2019")," as\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Xadow Clip(COM20)")," (The COM number might be different on your PC.)")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Com_PORT.png",alt:null})),(0,r.kt)("p",null,"3.Now download the [Xadow File"),(0,r.kt)("p",null," Names](",(0,r.kt)("a",{parentName:"p",href:"https://github.com/freespace/Files_For_Seeed_Main_Board"},"https://github.com/freespace/Files_For_Seeed_Main_Board"),")\n, unzip it and locate to ...",(0,r.kt)("strong",{parentName:"p"},"\\Files_For_Seeed_Main_Board-master.7z\\Files_For_Seeed_Main_Board-master\\v1.6.3\\seeeduino","*","*, copy the folder named "),"seeeduino",(0,r.kt)("strong",{parentName:"p"}," into the ..."),"\\arduino-1.6.6\\hardware","*","* where you've installed your Arduino IDE. The version of Arduino IDE might be different, here I used Arudino IDE 1.6.6"),(0,r.kt)("p",null,"4.Now lets try to light up some LEDs, connect your Xadow Duino to computer with a micro USB, open Arduino IDE, select ",(0,r.kt)("strong",{parentName:"p"},"Tools")," ==> ",(0,r.kt)("strong",{parentName:"p"},"Board")," ==> ",(0,r.kt)("strong",{parentName:"p"},"Seeeduino Xadow"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_Board.jpg",alt:null})),(0,r.kt)("p",null,"then select the ",(0,r.kt)("strong",{parentName:"p"},"Port")," as ",(0,r.kt)("strong",{parentName:"p"},"COM20(Seeeduino Xadow)")," :"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_Port.jpg",alt:null})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Copy the following code, if you don't have the WS2812b libraries, download it here:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"#include <Adafruit_NeoPixel.h>\n\n#define PIN 5   //the Xadow Duino used DIN/D5/PC6 to control the WS2812b\n\n// Parameter 1 = number of pixels in strip\n// Parameter 2 = pin number (most are valid)\n// Parameter 3 = pixel type flags, add together as needed:\n//   NEO_RGB     Pixels are wired for RGB bitstream\n//   NEO_GRB     Pixels are wired for GRB bitstream\n//   NEO_KHZ400  400 KHz bitstream (e.g. FLORA pixels)\n//   NEO_KHZ800  800 KHz bitstream (e.g. High Density LED strip)\nAdafruit_NeoPixel strip = Adafruit_NeoPixel(60, PIN, NEO_GRB + NEO_KHZ800);\n\nvoid setup() {\n  strip.begin();\n  strip.show(); // Initialize all pixels to 'off'\n\n  // it is very important to set D13 as OUTPUT & HIGH as we want it to act as 'GND'\n  pinMode(13,OUTPUT);\n  digitalWrite(13,HIGH);\n}\n\nvoid loop() {\n// Some example procedures showing how to display to the pixels:\n  colorWipe(strip.Color(255, 0, 0), 50); // Red\n  colorWipe(strip.Color(0, 255, 0), 50); // Green\n  colorWipe(strip.Color(0, 0, 255), 50); // Blue\n  rainbow(20);\n  rainbowCycle(20);\n}\n\n// Fill the dots one after the other with a color\nvoid colorWipe(uint32_t c, uint8_t wait) {\n  for(uint16_t i=0; i<strip.numPixels(); i++) {\n      strip.setPixelColor(i, c);\n      strip.show();\n      delay(wait);\n  }\n}\n\nvoid rainbow(uint8_t wait) {\n  uint16_t i, j;\n\n  for(j=0; j<256; j++) {\n    for(i=0; i<strip.numPixels(); i++) {\n      strip.setPixelColor(i, Wheel((i+j) & 255));\n    }\n    strip.show();\n    delay(wait);\n  }\n}\n\n// Slightly different, this makes the rainbow equally distributed throughout\nvoid rainbowCycle(uint8_t wait) {\n  uint16_t i, j;\n\n  for(j=0; j<256*5; j++) { // 5 cycles of all colors on wheel\n    for(i=0; i< strip.numPixels(); i++) {\n      strip.setPixelColor(i, Wheel(((i * 256 / strip.numPixels()) + j) & 255));\n    }\n    strip.show();\n    delay(wait);\n  }\n}\n\n// Input a value 0 to 255 to get a color value.\n// The colours are a transition r - g - b - back to r.\nuint32_t Wheel(byte WheelPos) {\n  if(WheelPos < 85) {\n   return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);\n  } else if(WheelPos < 170) {\n   WheelPos -= 85;\n   return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);\n  } else {\n   WheelPos -= 170;\n   return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);\n  }\n}\n")),(0,r.kt)("h2",{id:"rephone-community"},"RePhone Community"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Xadow-Duino/images/300px-RePhone_Community-2.png",alt:null}))),(0,r.kt)("p",null,"We\u2019ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules\u2019 development in the future. And then here we go, the ",(0,r.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),"."),(0,r.kt)("p",null,"Now join us in the ",(0,r.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),"! Together we seek answers, make interesting stuff, care about each other, and share our experiences."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Frequently Asked Questions")),(0,r.kt)("p",null,"Some frequently asked questions in ",(0,r.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),' are collected and answered to the topic "Frequently Asked Questions of RePhone (FAQ)" , the topic will be kept updating whenever a new FAQ comes out.'),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow-Duino/Resources/Xadow%20Duino%20v1.0_schemic_file.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We will be keep updating the source code on our github page:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WayenWeng/Xadow_Duino/"},"Source Code for Xadow Duino"))),(0,r.kt)("p",null,"The schematic diagram of Xadow Duino is provided in the following link:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow-Duino/Resources/Xadow%20Duino%20v1.0_schemic_file.zip"},"Xadow Duino Schematic Files"))),(0,r.kt)("p",null,"Check more info about the fascinating RGB LED WS2812B:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow-Duino/Resources/WS2812B%20Datasheet.pdf"},"WS2812B"))),(0,r.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);