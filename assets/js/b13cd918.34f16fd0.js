"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={description:"Secret Box",title:"Secret Box",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Secret_Box",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,s={unversionedId:"Seeed_Elderly/LinkIt/Linklt ONE/Secret_Box",id:"Seeed_Elderly/LinkIt/Linklt ONE/Secret_Box",title:"Secret Box",description:"Secret Box",source:"@site/docs/Seeed_Elderly/LinkIt/Linklt ONE/Secret_Box.md",sourceDirName:"Seeed_Elderly/LinkIt/Linklt ONE",slug:"/Secret_Box",permalink:"/Secret_Box",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/LinkIt/Linklt ONE/Secret_Box.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Secret Box",title:"Secret Box",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Secret_Box",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Starter Kit for LinkIt ONE",permalink:"/Grove-Starter_Kit_for_LinkIt_ONE"},next:{title:"Arch Mix",permalink:"/Arch_Mix"}},l={},c=[{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Function")),(0,o.kt)("p",null,"LinkIt ONE with Grove - Light Sensor, put into a box. when the box is opened, a message will be sent to your phone."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connection")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GSM antenna")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SIM Card")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Li Battery"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// demo of Grove Starter kit for LinkIt ONE\n// Secret box\n\n#include <LGSM.h>\n\nchar num[20] = "13425171053";           // your number write here\nchar text[100] = "Warning: Your box had been opened!!";    // what do you want to send\n\n\nconst int pinLight = A0;                // light sensor connect to A0\n\nbool isLightInBox()\n{\n    return (analogRead(pinLight)<50);   // when get data less than 50, means light sensor was in box\n}\n\nvoid setup()\n{\n    Serial.begin(115200);\n\n    while(!isLightInBox());             // until put in box\n    delay(2000);\n}\n\n\nvoid loop()\n{\n    if(!isLightInBox())                 // box is open\n    {\n        Serial.println("box had been opened");\n\n        while(!LSMS.ready())\n        {\n            delay(1000);\n        }\n\n        Serial.println("SIM ready for work!");\n        LSMS.beginSMS(num);\n        LSMS.print(text);\n\n        if(LSMS.endSMS())\n        {\n            Serial.println("SMS is sent");\n        }\n        else\n        {\n            Serial.println("SMS send fail");\n        }\n\n        while(!isLightInBox());             // until put in box\n        delay(2000);\n    }\n\n    delay(10);\n}\n')),(0,o.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);