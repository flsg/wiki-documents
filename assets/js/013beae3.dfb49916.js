"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[69514],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94367:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={description:"Sound Sensor And LED Bar",title:"Sound Sensor And LED Bar",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Sound_Sensor_And_LED_Bar",last_update:{date:"2/15/2023",author:"jianjing Huang"}},s=void 0,i={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Sound_Sensor_And_LED_Bar",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Sound_Sensor_And_LED_Bar",title:"Sound Sensor And LED Bar",description:"Sound Sensor And LED Bar",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Sound_Sensor_And_LED_Bar.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/Sound_Sensor_And_LED_Bar",permalink:"/Sound_Sensor_And_LED_Bar",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Sound_Sensor_And_LED_Bar.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{description:"Sound Sensor And LED Bar",title:"Sound Sensor And LED Bar",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Sound_Sensor_And_LED_Bar",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Relay Control LED",permalink:"/Relay_Control_LED"},next:{title:"Temperature Sensor",permalink:"/temperature_sensor"}},u={},d=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This demo will show you how to use Sound Sensor, to indicate the intensity of sound, we need a LED Bar."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hardware Required:\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Arduino")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Sound Sensor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"LED BAR"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Circuit\uff1a")),(0,o.kt)("p",null,"The output of sound sensor is analog signal, we connect it to A0 of Seeeduino."),(0,o.kt)("p",null,"LED Bar needs 10 IOs, about the connection, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/BarGraph"},"LED Bar"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sound_Sensor_And_LED_Bar/img/Sidekick_35_1.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code:")),(0,o.kt)("p",null,"Open Arduino IDE, click File -",">"," Sketchbook -",">"," sound_sensor."),(0,o.kt)("p",null,"We can use analogRead() to read the value of light sensor, this value will indicate the intensity of light. When the light stronger, the value larger."),(0,o.kt)("p",null,"To make the data more smoothly, we need some simple filtering. We read the value 32 times, and take the average value."),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);