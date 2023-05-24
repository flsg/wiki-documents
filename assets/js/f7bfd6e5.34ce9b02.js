"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[34759],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?i.createElement(h,a(a({ref:t},p),{},{components:r})):i.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=r(87462),n=(r(67294),r(3905));const o={description:"FM Receiver",title:"FM Receiver",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/FM_Receiver",last_update:{date:"1/31/2023",author:"shuxu hu"}},a=void 0,l={unversionedId:"Sensor/Seeeduino Series/Application/FM_Receiver",id:"Sensor/Seeeduino Series/Application/FM_Receiver",title:"FM Receiver",description:"FM Receiver",source:"@site/docs/Sensor/Seeeduino Series/Application/FM_Receiver.md",sourceDirName:"Sensor/Seeeduino Series/Application",slug:"/FM_Receiver",permalink:"/FM_Receiver",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Seeeduino Series/Application/FM_Receiver.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"FM Receiver",title:"FM Receiver",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/FM_Receiver",last_update:{date:"1/31/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Driver for Seeeduino",permalink:"/Driver_for_Seeeduino"},next:{title:"Grove IoT Starter Kits Powered by AWS",permalink:"/Grove_IoT_Starter_Kits_Powered_by_AWS"}},s={},u=[{value:"Hardware Installation",id:"hardware-installation",level:2},{value:"Part lists",id:"part-lists",level:3},{value:"Hardware Linking",id:"hardware-linking",level:3},{value:"Software Part",id:"software-part",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"hardware-installation"},"Hardware Installation"),(0,n.kt)("h3",{id:"part-lists"},"Part lists"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html"},"Seeeduino Lotus v1.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html"},"Grove - LCD RGB Backlight")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-I2C-FM-Receiver-p-1953.html"},"Grove - I2C FM Receiver")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Button-p-766.html"},"Grove - Button")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html"},"Grove - Rotary Angle Sensor"))),(0,n.kt)("h3",{id:"hardware-linking"},"Hardware Linking"),(0,n.kt)("p",null,"Hardware linking is very easy, Grove - LCD RGB Backlight and Grove - I2C FM Receiver communicate over I2C, Grove - Button is a digital input, Grove - Rotary Angle Sensor is an analog input. So it can be linked as shown below."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/Seeeduino_Lotus_usage.jpg",alt:"enter image description here"})),(0,n.kt)("h2",{id:"software-part"},"Software Part"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To download the demo code in github, click ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeeduino_lotus_Usage"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},"Open the I2C_FM_RGB_LCD example sketch, compile and upload it to your board."),(0,n.kt)("li",{parentName:"ul"},"Press the button to start seeking FM and twist the Rotary Angle Sensor to adjust volume.")),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"  Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,n.kt)("br",null)),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);