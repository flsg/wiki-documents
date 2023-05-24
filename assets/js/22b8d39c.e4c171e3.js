"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77863],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(i),k=n,h=u["".concat(s,".").concat(k)]||u[k]||d[k]||a;return i?r.createElement(h,o(o({ref:t},p),{},{components:i})):r.createElement(h,o({ref:t},p))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}k.displayName="MDXCreateElement"},45369:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=i(87462),n=(i(67294),i(3905));const a={description:"LinkIt ONE Tutorial - The Basics",title:"LinkIt ONE Tutorial - The Basics",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-The_Basics",last_update:{date:"1/13/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-The_Basics",id:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-The_Basics",title:"LinkIt ONE Tutorial - The Basics",description:"LinkIt ONE Tutorial - The Basics",source:"@site/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-The_Basics.md",sourceDirName:"Seeed_Elderly/LinkIt/Linklt ONE",slug:"/LinkIt_ONE_Tutorial-The_Basics",permalink:"/LinkIt_ONE_Tutorial-The_Basics",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-The_Basics.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"LinkIt ONE Tutorial - The Basics",title:"LinkIt ONE Tutorial - The Basics",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-The_Basics",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"LinkIt ONE Tutorial - SMS control the LED",permalink:"/LinkIt_ONE_Tutorial-SMS_control_the_LED"},next:{title:"Sidekick Basic Kit for LinkIt ONE",permalink:"/Sidekick_Basic_Kit_for_LinkIt_ONE"}},s={},c=[{value:"Tech Support",id:"tech-support",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What We're Doing")),(0,n.kt)("p",null,"Let's build a simple circuit using a transistor, LED and a toggle switch. Light Emitting Diode (LED) transforms electrical energy into visible light. Transistor is a fundamental component in electronics which acts as a switch or a current amplifier. Here, we use a switch to ON and OFF the LED indirectly using the transistor."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Things you need")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"LinkIt One x 1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Bread board x 1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Resistors 330\u03a9,1k\u03a9 x 1 each")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"5mm LED x 1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Switch x 1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Transistor (2N3904) x 1"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Schematic")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-The_Basics/img/LinkItONE_Kit_0_1.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Connection")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-The_Basics/img/LinkItONE_Kit_0_2.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Troubleshooting")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ensure the polarity of the LED(Long lead is positive and the short lead is negative).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Check whether you have shorted two pins of the switch.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Make sure you haven't missed the transistor connection in the circuit(A transistor is required to drive a LED).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Burned out an LED..?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This happens when you forget to connect the input resistance which acts as a current limiter to the LED.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Making it better")),(0,n.kt)("p",null,"Now we've made a simple control circuit. Lets make it fascinating by just adding another component called a capacitor. A capacitor acts like a temporary charge storing device. If a capacitor is connected in parallel with the resistor which is in series with the LED it fades the LED. When the switch is turned ON the capacitor gets charged, when the switch is turned OFF the charge stored in the capacitor gets discharged slowly which makes fading OFF of the LED."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"More ideas")),(0,n.kt)("p",null,"What is the component used for growing the luminosity of the LED slowly when it is turned ON?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reference")),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);