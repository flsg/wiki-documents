"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[78388],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>_});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(o),m=r,_=d["".concat(l,".").concat(m)]||d[m]||p[m]||n;return o?a.createElement(_,i(i({ref:t},c),{},{components:o})):a.createElement(_,i({ref:t},c))}));function _(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[d]="string"==typeof e?e:r,i[1]=u;for(var s=2;s<n;s++)i[s]=o[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},51046:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>u,toc:()=>s});var a=o(87462),r=(o(67294),o(3905));const n={description:"Xadow Tutorial - Communicate via BLE",title:"Xadow Tutorial - Communicate via BLE",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Tutorial_Communicate_via_BLE",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,u={unversionedId:"Seeed_Elderly/Xadow/Xadow_Tutorial_Communicate_via_BLE",id:"Seeed_Elderly/Xadow/Xadow_Tutorial_Communicate_via_BLE",title:"Xadow Tutorial - Communicate via BLE",description:"Xadow Tutorial - Communicate via BLE",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_Tutorial_Communicate_via_BLE.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_Tutorial_Communicate_via_BLE",permalink:"/Xadow_Tutorial_Communicate_via_BLE",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_Tutorial_Communicate_via_BLE.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Xadow Tutorial - Communicate via BLE",title:"Xadow Tutorial - Communicate via BLE",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Tutorial_Communicate_via_BLE",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow Tutorial - Acceleration Detector",permalink:"/Xadow_Tutorial_Acceleration_Detector"},next:{title:"XadowTtutorial-Shaking Shaking",permalink:"/Xadow_Tutorial_Shaking_Shaking"}},l={},s=[{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],c={toc:s};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Have you ever thought this scene: Open phone, I can see the current barometric pressure or motion acceleration. the Xadow module can help you achieve this."),(0,r.kt)("p",null,"For this demo, you need to use the"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Xadow Main Board")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Xadow OLED")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Xadow Accelerometer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Xadow BLE Slave"))),(0,r.kt)("p",null,"If you have learned to achieve Demo 1 and Demo 2, you just need to connect the Xadow Main Board, Xadow OLED, Xadow Accelerometer and Xadow BLE Slave modules and download ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/BLE_Slave.zip"},"the code:BLE_Slave"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/img/BLEUsage.jpg",alt:null})),(0,r.kt)("p",null,"Now you can open BLE_Slave INO file, compile and upload."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/img/Phone_and_BLE_Slave_Communicate.jpg",alt:null})),(0,r.kt)("p",null,"You can see there are two commands(ledon and ledoff) in the phone screen. They are used to control the GREEN indicator state. Have a try!"),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/BLE_Slave.zip"},"Demo3 BLESlave Code")),(0,r.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);