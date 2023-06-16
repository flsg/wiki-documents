"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),c=r,k=p["".concat(u,".").concat(c)]||p[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={description:"SenseCAP API Pricing",title:"SenseCAP API Pricing",keywords:["Cloud and Chain"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},i="SenseCAP API Pricing",o={unversionedId:"Cloud_Chain/SenseCAP_API/API_pricing",id:"Cloud_Chain/SenseCAP_API/API_pricing",title:"SenseCAP API Pricing",description:"SenseCAP API Pricing",source:"@site/docs/Cloud_Chain/SenseCAP_API/API_pricing.md",sourceDirName:"Cloud_Chain/SenseCAP_API",slug:"/Cloud_Chain/SenseCAP_API/API_pricing",permalink:"/Cloud_Chain/SenseCAP_API/API_pricing",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Cloud_Chain/SenseCAP_API/API_pricing.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676332800,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{description:"SenseCAP API Pricing",title:"SenseCAP API Pricing",keywords:["Cloud and Chain"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP API Introduction",permalink:"/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction"},next:{title:"HTTP API Quickstart",permalink:"/Cloud_Chain/SenseCAP_API/HTTP_API/Quick_Start"}},u={},s=[{value:"Rules",id:"rules",level:2},{value:"Pre-paid",id:"pre-paid",level:2},{value:"Tips",id:"tips",level:2},{value:"Example",id:"example",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sensecap-api-pricing"},"SenseCAP API Pricing"),(0,r.kt)("p",null,"==============="),(0,r.kt)("p",null,"With SenseCAP Portal, you pay only for what you use with no minimum fees or mandatory service usage."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"um (up-message): The number of messages uploaded by the sensor."),(0,r.kt)("li",{parentName:"ul"},"dm(download-message): The number of messages that get historical data through the API.")),(0,r.kt)("h2",{id:"rules"},"Rules"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a sensor device to each user account, and the system will distribute a certain amount of um and dm for free."),(0,r.kt)("li",{parentName:"ol"},"For each data uploaded by the sensor, 1 um is consumed."),(0,r.kt)("li",{parentName:"ol"},"Get a piece of historical data by HTTP, and consume 1 dm."),(0,r.kt)("li",{parentName:"ol"},"Subscription to sensor data by means of MQTT will not consume dm."),(0,r.kt)("li",{parentName:"ol"},"um /dm can purchase the recharge code online, and then input the recharge code in the account to complete the recharge."),(0,r.kt)("li",{parentName:"ol"},"When um/dm is 0, the system will send a message to remind the user of the overdue fee. If the time is more than 1 month, the account function will not be able to be used.")),(0,r.kt)("p",null,"Free Tier  "),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Device Type (one device)"),(0,r.kt)("th",{parentName:"tr",align:null},"um (up-message)"),(0,r.kt)("th",{parentName:"tr",align:null},"dm (download-message)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoRaWAN Sensor Node"),(0,r.kt)("td",{parentName:"tr",align:null},"100,000"),(0,r.kt)("td",{parentName:"tr",align:null},"1000,000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SensorHub"),(0,r.kt)("td",{parentName:"tr",align:null},"250,000"),(0,r.kt)("td",{parentName:"tr",align:null},"2,500,000")))),(0,r.kt)("p",null,"Fees  "),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pricing"),(0,r.kt)("th",{parentName:"tr",align:null},"um (up-message)"),(0,r.kt)("th",{parentName:"tr",align:null},"dm (download-message)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$ 0.99"),(0,r.kt)("td",{parentName:"tr",align:null},"100,000"),(0,r.kt)("td",{parentName:"tr",align:null},"1,000,000")))),(0,r.kt)("h2",{id:"pre-paid"},"Pre-paid"),(0,r.kt)("p",null,"Please contact the SenseCAP sales staff to recharge."),(0,r.kt)("h2",{id:"tips"},"Tips"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is recommended to subscribe to sensor data using MQTT without consuming the number of dm (download-message)."),(0,r.kt)("li",{parentName:"ul"},"The data upload of LoRaWAN Sensor is affected by the Internet (the gateway connects to Portal over the Internet). When access to the Internet is unstable, the Sensor Node will resend the data up to three times to ensure that the data can be successfully transmitted to the SenseCAP Portal. The Free Tier is based on the worst-case scenario of the network, so how long you use it depends on the situation.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"According to device type and data upload interval, the approximate time available is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Device Type (one device)"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Interval"),(0,r.kt)("th",{parentName:"tr",align:null},"Time"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoRaWAN Temperature and Humidity Sensor"),(0,r.kt)("td",{parentName:"tr",align:null},"1 hour"),(0,r.kt)("td",{parentName:"tr",align:null},"2 ~ 5 years")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"30 minutes"),(0,r.kt)("td",{parentName:"tr",align:null},"1 ~ 2.5 years")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"5 minutes"),(0,r.kt)("td",{parentName:"tr",align:null},"4 ~ 10 months")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoRaWAN Light Intensity Sensor"),(0,r.kt)("td",{parentName:"tr",align:null},"1 hour"),(0,r.kt)("td",{parentName:"tr",align:null},"4 ~ 10 years")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"30 minutes"),(0,r.kt)("td",{parentName:"tr",align:null},"2 ~ 5 years")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"5 minutes"),(0,r.kt)("td",{parentName:"tr",align:null},"8 ~ 20 months")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SensorHub (5 types of measurements)"),(0,r.kt)("td",{parentName:"tr",align:null},"1 hour"),(0,r.kt)("td",{parentName:"tr",align:null},"5.6 years")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"30 minutes"),(0,r.kt)("td",{parentName:"tr",align:null},"2.8 years")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"5 minutes"),(0,r.kt)("td",{parentName:"tr",align:null},"11 months")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SensorHub (7 types of measurements)"),(0,r.kt)("td",{parentName:"tr",align:null},"1 hour"),(0,r.kt)("td",{parentName:"tr",align:null},"4 years")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"30 minutes"),(0,r.kt)("td",{parentName:"tr",align:null},"2 years")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"5 minutes"),(0,r.kt)("td",{parentName:"tr",align:null},"8 months")))))}p.isMDXComponent=!0}}]);