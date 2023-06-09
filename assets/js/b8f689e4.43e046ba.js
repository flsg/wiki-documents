"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71409],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),p=a(67392),d=a(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=c(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,p]=h({queryString:a,groupId:n}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var f=a(72389);const g="tabList__CuJ",w="tabItem_LNqP";function S(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=d.indexOf(t),n=p[a].value;n!==l&&(u(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},i,{className:(0,o.Z)("tabs__item",w,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(S,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},31501:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={description:"Flash The Native Firmware",title:"How To Flash The Native Firmware",keywords:["SenseCAP Indicator"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware",last_update:{date:"5/31/2023",author:"Thomas"}},s="**How To Flash The Native Firmware**",p={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/How_To_Flash_The_Default_Firmware",id:"Sensor/SenseCAP/SenseCAP_Indicator/How_To_Flash_The_Default_Firmware",title:"How To Flash The Native Firmware",description:"Flash The Native Firmware",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/How_To_Flash_The_Default_Firmware.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator",slug:"/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware",permalink:"/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/How_To_Flash_The_Default_Firmware.md",tags:[],version:"current",lastUpdatedBy:"Thomas",lastUpdatedAt:1685491200,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{description:"Flash The Native Firmware",title:"How To Flash The Native Firmware",keywords:["SenseCAP Indicator"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware",last_update:{date:"5/31/2023",author:"Thomas"}},sidebar:"ProductSidebar",previous:{title:"Grove IIC",permalink:"/SenseCAP_Indicator_RP2040_Grove_IIC"},next:{title:"ChatGPT X DALL\xb7E X SenseCAP Indicator",permalink:"/SenseCAP_Indicator_Application_ChatGPT"}},d={},u=[{value:"Preparation",id:"preparation",level:2},{value:"Get the Native Firmware",id:"get-the-native-firmware",level:2},{value:"ESP32-S3 Frimware Flashing",id:"esp32-s3-frimware-flashing",level:2},{value:"<strong>Espressif IoT Development Framework</strong>",id:"espressif-iot-development-framework",level:3},{value:"Compile code",id:"compile-code",level:4},{value:"Flash firmware",id:"flash-firmware",level:4},{value:"<strong>Flash Download Tools</strong> (Windows only)",id:"flash-download-tools-windows-only",level:3},{value:"RP2040 Firmware Flashing",id:"rp2040-firmware-flashing",level:2},{value:"<strong>Flash the .uf2 file</strong>",id:"flash-the-uf2-file",level:3},{value:"<strong>Flash by Arduino IDE</strong>",id:"flash-by-arduino-ide",level:3},{value:"<strong>RP2040 Development Tool</strong>",id:"rp2040-development-tool",level:4},{value:"ESP32 &amp; RP2040 Communication Protocol",id:"esp32--rp2040-communication-protocol",level:2},{value:"Resource",id:"resource",level:2},{value:"FAQ",id:"faq",level:2}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-flash-the-native-firmware"},(0,r.kt)("strong",{parentName:"h1"},"How To Flash The Native Firmware")),(0,r.kt)("p",null,"The SenseCAP indicator has two MCUs, ESP32-S3 and RP2040. This tutorial provides comprehensive guide to help developer get onboard, including flashing the out-of-the-box factory Native Firmware and updating early shipped devices to the latest firmware."),(0,r.kt)("p",null,"The firmware update is particularly applicable in two scenarios:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If you purchased a product without OpenAI firmware before June 2023, with firmware version ",(0,r.kt)("inlineCode",{parentName:"li"},"1.0.0"),", you can download and update to the latest firmware that includes OpenAI functionality. The latest firmware can be downloaded from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Solution/sensecap_indicator_esp32"},"here"),"."),(0,r.kt)("li",{parentName:"ol"},"If you have developed an application and wish to flash a custom firmware, you can follow ",(0,r.kt)("a",{parentName:"li",href:"#flash-esp32-s3-frimware-using-espressif-idf"},"the tutorial provided below"),".")),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("p",null,"To get started, all you need is your SenseCAP Indicator and a Windows/Mac/Linux computer."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/usb1.png"})),(0,r.kt)("h2",{id:"get-the-native-firmware"},"Get the Native Firmware"),(0,r.kt)("p",null,"The default shipping firmware of the SenseCAP Indicator is fully open source for both ESP32-S3 and RP2040."),(0,r.kt)("admonition",{title:"You have two options to get the Out of the Box Firmware:",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source code:")," Before flashing it, you have the option to modify the code as per your requirements. You will need a toolchain to compile it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Firmware:")," Directly flash the pre-compiled binary file without the need for any code modification or compilation."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source Code")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Solution/sensecap_indicator_esp32"},"ESP32-S3 Firmware Source Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Solution/sensecap_indicator_rp2040"},"RP2040 Arduino examples Source Code"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Firmware")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.0"},"Click to download ESP32-S3 firmware")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_RP2040/releases/tag/v1.0.0"},"Click to download RP2040 frimware"))),(0,r.kt)("h2",{id:"esp32-s3-frimware-flashing"},"ESP32-S3 Frimware Flashing"),(0,r.kt)("h3",{id:"espressif-iot-development-framework"},(0,r.kt)("strong",{parentName:"h3"},"Espressif IoT Development Framework")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ESP-IDF is a software development framework provided by Espressif Systems for designing firmware and applications specifically for their ESP32 and ESP8266 series of microcontrollers. For further information, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/index.html"},"ESP-IDF Programming Guide"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Download and install:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Windows: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/get-started/windows-setup.html"},"Standard Setup of Toolchain for Windows")),(0,r.kt)("li",{parentName:"ul"},"For MacOS and Linux: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/get-started/linux-macos-setup.html"},"Standard Toolchain Setup for Linux and macOS"))),(0,r.kt)("h4",{id:"compile-code"},"Compile code"),(0,r.kt)("p",null,"If you choose to compile source code into firmware, you'll need the ESP-IDF to compile."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Note"),":"),(0,r.kt)("p",{parentName:"admonition"},"SenseCAP ESP32 SDK uses the 120 MHz frequency , ","please add a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/tools/patch"},"patch"),"."),(0,r.kt)("p",{parentName:"admonition"},"This patch is intended to achieve the best performance of RGB LCD by using the PSRAM Octal 120 MHz feature, and it's only used for the release/v5.0 branch of ESP-IDF.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/patch.png"})),(0,r.kt)("h4",{id:"flash-firmware"},"Flash firmware"),(0,r.kt)("p",null,"Run the following command to build and flash the project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd  <your_sdk_path>/examples/factory/\nesptool.py write_flash 0x0 default_factory_firmware_ESP32-S3.bin\n")),(0,r.kt)("p",null,"Or the following command to build, flash and monitor the project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd  <your_sdk_path>/examples/default_factory_firmware/\nidf.py -p PORT build flash monitor\n")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/upgrade.png"})),(0,r.kt)("h3",{id:"flash-download-tools-windows-only"},(0,r.kt)("strong",{parentName:"h3"},"Flash Download Tools")," (Windows only)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Flash Download Tools")," are used for programming or flashing firmware onto ESP8266 and ESP32 series of microcontrollers. They provide a graphical user interface (GUI) for users to easily flash firmware onto the ESP microcontrollers.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Download:"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.espressif.com.cn/en/support/download/other-tools?keys=&field_type_tid%5B%5D=842"},"Flash Download Tools (for Windows only)")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_18.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1"),": ",(0,r.kt)("strong",{parentName:"p"},"Double-click")," the ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," file to enter the main interface of the tool.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2"),": Select the following options:"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Param"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Chip Type")),(0,r.kt)("td",{parentName:"tr",align:null},"ESP32-S3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"WorkMode")),(0,r.kt)("td",{parentName:"tr",align:null},"Develop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"LoadMode")),(0,r.kt)("td",{parentName:"tr",align:null},"UART")))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_59.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3"),": Connect the SenseCAP Indicator to your laptop with a USB type-C cable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 4"),': In the SPI Download Tab and Click "..." and navigate to the firmware you just downloaded.'))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 5"),": Configure SPI Flash:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Param"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"SPI SPEED")),(0,r.kt)("td",{parentName:"tr",align:null},"40MHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"SPI MODE")),(0,r.kt)("td",{parentName:"tr",align:null},"DIO")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 6"),": Configure the Download Panel:")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator23.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"COM"),": Check the ports on your Device Manage, the USB-SERIAL is the correct one.\nHere we chose ",(0,r.kt)("strong",{parentName:"p"},"COM4")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Baud"),": 921600(recommended value)"),(0,r.kt)("p",null,"Click Start Downloading"),(0,r.kt)("p",null,'Then click "START" to start the flashing.'),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/start.png"})),(0,r.kt)("p",null,'When it shows "FINISH", the firmware flashing has been completed.'),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/finish.png"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Note"),":"),(0,r.kt)("p",{parentName:"admonition"},"In the above guide, the binary file merged there bins into one, which name is ",(0,r.kt)("inlineCode",{parentName:"p"},"Default_Factory_Firmware_ESP32-S3.bin")),(0,r.kt)("p",{parentName:"admonition"},"However, when you use ESP-IDF to build firmware, you will get three binary files, you have to write the correct address (you can put your own address) on the right side:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bootloader.bin")," ----\x3e ",(0,r.kt)("strong",{parentName:"li"},"0x0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"partion-table.bin")," ----\x3e ",(0,r.kt)("strong",{parentName:"li"},"0x8000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"termial_demo.bin")," ----\x3e ",(0,r.kt)("strong",{parentName:"li"},"0x10000"))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/3binfiles.png"})),(0,r.kt)("h2",{id:"rp2040-firmware-flashing"},"RP2040 Firmware Flashing"),(0,r.kt)("h3",{id:"flash-the-uf2-file"},(0,r.kt)("strong",{parentName:"h3"},"Flash the .uf2 file")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1"),": Connect the device to your PC")),(0,r.kt)("p",null,"Long press this internal button using a needle, then connect the device to your PC by the provided USB type-C cable, release the button once connected."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2"),": Firmware Flash")),(0,r.kt)("p",null,"After the connection is successful, your PC will show a disk."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png"})),(0,r.kt)("p",null,"Copy the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/sensecap_indicator_rp2040/releases/download/v1.0.0/terminal_rp2040_v1.0.0.uf2"},".uf2")," file to the disk, then the disk will log out."),(0,r.kt)("p",null,"The upgrade will run automatically."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/uf2.png"})),(0,r.kt)("h3",{id:"flash-by-arduino-ide"},(0,r.kt)("strong",{parentName:"h3"},"Flash by Arduino IDE")),(0,r.kt)("h4",{id:"rp2040-development-tool"},(0,r.kt)("strong",{parentName:"h4"},"RP2040 Development Tool")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Arduino IDE is an open-source software development environment used for programming Arduino boards, which are microcontroller-based development boards that can be used for building various electronic projects. It provides an easy-to-use graphical user interface (GUI) that allows developers to write, compile, and upload code to the Arduino board. It is based on a simplified version of the C++ programming language and provides a set of libraries and examples that make it easier for beginners to get started with programming Arduino boards.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Download:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1"),": Install ",(0,r.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/software"},"Arduino IDE"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2"),": Add the Raspberry Pi Pico Board"))),(0,r.kt)("p",null,"Open your Arduino IDE, click on\xa0",(0,r.kt)("strong",{parentName:"p"},"Arduino IDE"),"\xa0>\xa0",(0,r.kt)("strong",{parentName:"p"},"Reference"),", and copy the below URL to\xa0",(0,r.kt)("strong",{parentName:"p"},"Additional Boards Manager URLs"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/earlephilhower/arduino-pico/releases/download/global/package\\_rp2040\\_index.json")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_80.png"})),(0,r.kt)("p",null,"Click on ",(0,r.kt)("strong",{parentName:"p"},"Tools")," > ",(0,r.kt)("strong",{parentName:"p"},"Board")," > ",(0,r.kt)("strong",{parentName:"p"},"Board Manager"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_30.png"})),(0,r.kt)("p",null,'Search "indicator" and install "Raspberry Pi Pico/RP2040" in the Boards Manager'),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3"),": Add Libraries")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Libraries for reference"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/bakercp/PacketSerial"},"Serial communication protocol"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-i2c-sgp40"},"SGP40 TVOC sensor library"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-gas-index-algorithm"},"Transfer index library: Sensirion Gas Index Algorithm"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-i2c-scd4x"},"SCD41 CO2 sensor library"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/"},"AHT20 temperature and humidity sensor library"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-core/"},"Sensirion Arduino Core library")))),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"Sketch")," -> ",(0,r.kt)("strong",{parentName:"p"},"Include Library")," -> ",(0,r.kt)("strong",{parentName:"p"},"Add .ZIP Library"),", then select the libraries you download."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 4"),": Connect the device to your PC with the provided USB Typc-C cable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 5"),": Select the board and port"))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/board.png"})),(0,r.kt)("p",null,'Search "Indicator" and select "Seeed INDICATOR RP2040"board;'),(0,r.kt)("p",null,'Select the "usbmodem" Serial Port.'),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/portport.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 6"),": Open the example code file")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"File")," > ",(0,r.kt)("strong",{parentName:"p"},"Open"),", then select the example code file (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main/examples/terminal_rp2040"},".ino file"),")."),(0,r.kt)("p",null,"We provide an example code file, you can modify the code according to your needs."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_35.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 7"),": Verify and Upload the file.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_36.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_37.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_38.png"})),(0,r.kt)("h2",{id:"esp32--rp2040-communication-protocol"},"ESP32 & RP2040 Communication Protocol"),(0,r.kt)("p",null,"ESP32 and RP2040 use serial port communication, using the ",(0,r.kt)("a",{parentName:"p",href:"http://www.stuartcheshire.org/papers/COBSforToN.pdf"},"cobs")," communication protocol. The list of commands used in the demo is as follows:"),(0,r.kt)("p",null,"The command format consists of the packet type and packet parameters."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_41.png"})),(0,r.kt)("h2",{id:"resource"},"Resource"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/sensecap_indicator_esp32.git"},"SenseCAP Indicator ESP32 SDK")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main"},"SenseCAP Indicator RP2040 Demo")),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How to distinguish the serial port?"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,"Check the port on your Device Manage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"USB \u4e32\u884c\u8bbe\u5907" is for RP2040'),(0,r.kt)("li",{parentName:"ul"},'"USB-SERIAL" is for ESP32')),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_39.png"}))),(0,r.kt)(i.Z,{value:"Mac",label:"Mac",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"/dev/cu.usbmodem" is for RP2040')),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_40.png"}))))),(0,r.kt)("h1",{id:"tech-support"},(0,r.kt)("strong",{parentName:"h1"},"Tech Support")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Need help with your SenseCAP Indicator? We're here to assist you!")),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/sensecap",class:"button_tech_support_sensecap"}),(0,r.kt)("a",{href:"https://support.sensecapmx.com/portal/en/home",class:"button_tech_support_sensecap3"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"mailto:support@sensecapmx.com",class:"button_tech_support_sensecap2"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);