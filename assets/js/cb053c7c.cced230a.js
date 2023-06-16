"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[65573],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(o),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return o?n.createElement(f,s(s({ref:t},c),{},{components:o})):n.createElement(f,s({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},12969:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const i={description:"Project One - Double Blink",title:"Project One - Double Blink",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_One-Double_Blink",last_update:{date:"2/15/2023",author:"jianjing Huang"}},s=void 0,a={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_One-Double_Blink",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_One-Double_Blink",title:"Project One - Double Blink",description:"Project One - Double Blink",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_One-Double_Blink.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/Project_One-Double_Blink",permalink:"/Project_One-Double_Blink",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_One-Double_Blink.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{description:"Project One - Double Blink",title:"Project One - Double Blink",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_One-Double_Blink",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Project One - Blink",permalink:"/Project_One-Blink"},next:{title:"Project Two \u2013 Digital Input",permalink:"/Project_Two-Digital_Input"}},u={},l=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:l};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The purpose of this project is to demonstrate a simple digital-out display using the LED Grove. Connect your equipment as shown in the image below:\nConnect the LED Grove to the D1/D2 Digital I/O jack on the Grove Shield.\nArduino Pin D1 powers the Red LED on the Grove's D1 connector, and Arduino Pin D2 powers the Green LED on the Grove's D2 connector."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Project_One-Double_Blink/img/Conn-one.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Now upload the following Arduino sketch:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Project One - Double Blink\n//\n\nint del=500; // adjust for blink rate\n\nvoid setup()\n{\n    pinMode(1, OUTPUT);\n    pinMode(2, OUTPUT);\n}\n\nvoid loop()\n{\n    digitalWrite(1, HIGH);\n    digitalWrite(2, LOW);\n    delay(del);\n    digitalWrite(1, LOW);\n    digitalWrite(2, HIGH);\n    delay(del);\n}\n")),(0,r.kt)("p",null,"As you can see, it is quite simple. The two LEDs alternately blink, with the delay between the two set by the variable del. However, in doing so you can experience for yourself how simple the Grove system is to use."),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);