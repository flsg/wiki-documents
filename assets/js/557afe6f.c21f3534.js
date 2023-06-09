"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[81115],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},B=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(o),B=n,h=c["".concat(s,".").concat(B)]||c[B]||p[B]||a;return o?r.createElement(h,i(i({ref:t},u),{},{components:o})):r.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=B;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}B.displayName="MDXCreateElement"},26295:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=o(87462),n=(o(67294),o(3905));const a={description:"BeagleBone\xae Introduction",title:"BeagleBone\xae Introduction",keywords:["Beagle_Bone"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/BeagleBone",last_update:{date:"1/10/2023",author:"jianjing Huang"}},i=void 0,l={unversionedId:"Edge/Beagle_Bone/BeagleBone",id:"Edge/Beagle_Bone/BeagleBone",title:"BeagleBone\xae Introduction",description:"BeagleBone\xae Introduction",source:"@site/docs/Edge/Beagle_Bone/BeagleBone.md",sourceDirName:"Edge/Beagle_Bone",slug:"/BeagleBone",permalink:"/BeagleBone",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Beagle_Bone/BeagleBone.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673308800,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{description:"BeagleBone\xae Introduction",title:"BeagleBone\xae Introduction",keywords:["Beagle_Bone"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/BeagleBone",last_update:{date:"1/10/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"EdgeBox-ESP-100 Getting Start with Arduino",permalink:"/Edgebox-ESP-100-Arduino"},next:{title:"BeagleBone\xae Blue",permalink:"/BeagleBone_Blue"}},s={},d=[{value:"Product  List",id:"product--list",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:d};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("p",null,"BeagleBone\xaes are relatively a late comer in the microcontroller world, but the high performance and lower power consumption make it become one of the three popular platforms in the open-hardware world. Beagles mean big functionality in small packages because these little PCs can be used for all kinds of applications you've been tinkering with... and can handle many of the same tasks as your desktop PC. Similar to Arduino and Raspberry Pi, BeagleBone\xae boards are used by artists, designers and hobbyists to realize their projects."),(0,n.kt)("p",null,"BeagleBone\xae boards are wonderful boards, but people on planet Seeed are not satisfied with the current BeagleBone\xae and want to make some differences. Just as what we have done with Seeeduino, we spoke to BeagleBone.org about our thoughts and finally got the chance to create a whole new board together with them, this is how we created Seeed Studio's own BeagleBone\xae, the BeagleBone\xae Green(Short as BBG)."),(0,n.kt)("p",null,"BeagleBone\xae Green is derived from BeagleBone\xae Black(Short as BBB), if you ever know about BBB , you would know that BBB is like the star board in the beagleboard family, it inherits the tiny size of BeagleBone\xae and adds many good features while the price is much lower. When we were designing BBG, we decided to keep almost all the good features of BBB such as the tiny size, abundant interface and strong expansibility, while at the same time replaced the HDMI interface with 2 Seeed grove connector, to make it compatible with the large family of grove sensers."),(0,n.kt)("p",null,"Not lone afte that, we released another BeagleBone\xae named BeagleBone\xae Green Wireless(Short as BBGW), In addition to grove connectors, BBGW has included a high-performance flexible WiFi/Bluetooth interface, makes it become the first WiFi/Bluetooth board of the BeagleBone\xae family."),(0,n.kt)("h2",{id:"product--list"},"Product  List"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Here is the list of the BeagleBone\xae Boards you can find in the Seeed WiKi. The list will be constantly updated."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/"},"Beagle Bone Green and Grove IoT Starter Kit Powered by AWS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/BeagleBone_Blue/"},"BeagleBone Blue")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Beaglebone_Case/"},"BeagleBone Case")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/BeagleBone_Green/"},"BeagleBone Green")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/BeagleBone_Green_HDMI_Cape/"},"BeagleBone Green HDMI Cape")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/BeagleBone_Green_Wireless/"},"BeagleBone Green Wireless")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Cape_for_BeagleBone_v2/"},"Grove Base Cape for BeagleBone v2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Cape_for_BeagleBone_Series/"},"Grove Cape for BeagleBone Series")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Starter_Kit_for_BeagleBone_Green/"},"Grove Starter Kit for BeagleBone Green")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Motor_Bridge_Cape_v1.0/"},"Motor Bridge Cape v1.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Skeleton_box_for_Beaglebone/"},"Skeleton box for Beaglebone"))),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);