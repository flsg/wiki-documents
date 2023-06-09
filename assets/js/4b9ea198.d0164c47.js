"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49311],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19255:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={description:"Grove - 3-Axis Analog Accelerometer 20g (ADXL356B)",title:"Grove - 3-Axis Analog Accelerometer 20g (ADXL356B)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-3-Axis_Analog_Accelerometer_20g-ADXL356B",last_update:{date:"1/5/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Analog_Accelerometer_20g-ADXL356B",id:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Analog_Accelerometer_20g-ADXL356B",title:"Grove - 3-Axis Analog Accelerometer 20g (ADXL356B)",description:"Grove - 3-Axis Analog Accelerometer 20g (ADXL356B)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Analog_Accelerometer_20g-ADXL356B.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Accelerometer",slug:"/Grove-3-Axis_Analog_Accelerometer_20g-ADXL356B",permalink:"/Grove-3-Axis_Analog_Accelerometer_20g-ADXL356B",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Analog_Accelerometer_20g-ADXL356B.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - 3-Axis Analog Accelerometer 20g (ADXL356B)",title:"Grove - 3-Axis Analog Accelerometer 20g (ADXL356B)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-3-Axis_Analog_Accelerometer_20g-ADXL356B",last_update:{date:"1/5/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - 3-Axis Digital Accelerometer(\xb1400g)",permalink:"/Grove-3-Axis_Digital_Accelerometer-400g"},next:{title:"Grove - 3-Axis Digital Accelerometer (LIS3DHTR)",permalink:"/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Applications",id:"applications",level:2},{value:"Pinout",id:"pinout",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware Connection",id:"hardware-connection",level:4},{value:"Software",id:"software",level:4},{value:"FAQ",id:"faq",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/img/101020637-preview.png",alt:"pir",width:600,height:"auto"})),(0,r.kt)("p",null,"You can find a variety of ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/tag/accelerometer.html"},"3-axis accelerometers")," on our website that can meet different scenarios and needs. This time, we bring you the industrial grade, high stability, high precision and low power ADI ADXL series three-axis accelerometers.  "),(0,r.kt)("p",null,"The Grove - 3-Axis Analog Accelerometer \xb120g (ADXL356B) is a analog output ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/tag/MEMS.html"},"MEMS"),"  Accelerometer. This sensor has three two selectable measuring ranges: \xb110g, \xb120g. You just need to do little calibration work to get a relatively accurate result. The On-Board grove port can output two channel analog data: one for Z-axis, one for X/Y-axis. You can choose output the X-axis or Y-axis signal with the on-board switch. Also you can use the 4-pin welding hole to output X/Y/Z axis at the same time. The power consumption of this sensor is extremely low, 150 \u03bcA in normal operation mode and even only 21 \u03bcA in standby mode. You can switch the operating mode by changing the pad connection on the back."),(0,r.kt)("p",null,"The ADI ADXL Series Accelerometer includes four products that will meet your different range and output needs:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Product"),(0,r.kt)("th",{parentName:"tr",align:null},"Measurement Range"),(0,r.kt)("th",{parentName:"tr",align:null},"Output Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Power Consumption"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html"},"Grove - 3-Axis Analog Accelerometer \xb120g (ADXL356B)")),(0,r.kt)("td",{parentName:"tr",align:null},"\xb110 / \xb120g"),(0,r.kt)("td",{parentName:"tr",align:null},"Analog"),(0,r.kt)("td",{parentName:"tr",align:null},"measurement mode:150 \u03bcA / standby mode:21 \u03bcA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html"},"Grove - 3-Axis Analog Accelerometer \xb140g (ADXL356C)")),(0,r.kt)("td",{parentName:"tr",align:null},"\xb110g / \xb140g"),(0,r.kt)("td",{parentName:"tr",align:null},"Analog"),(0,r.kt)("td",{parentName:"tr",align:null},"measurement mode:150 \u03bcA / standby mode:21 \u03bcA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html"},"Grove - 3-Axis Digital Accelerometer \xb140g (ADXL357)")),(0,r.kt)("td",{parentName:"tr",align:null},"\xb110g@51200 LSB/g / \xb120g@25600 LSB/g/  \xb140g@12800 LSB/g"),(0,r.kt)("td",{parentName:"tr",align:null},"Digital I2C"),(0,r.kt)("td",{parentName:"tr",align:null},"measurement mode:200\u03bcA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html"},"Grove - 3-Axis Digital Accelerometer \xb1200g (ADXL372)")),(0,r.kt)("td",{parentName:"tr",align:null},"\xb1200g"),(0,r.kt)("td",{parentName:"tr",align:null},"Digital I2C"),(0,r.kt)("td",{parentName:"tr",align:null},"measurement mode:22\u03bcA")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html"},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Industry leading noise, minimal offset drift over temperature, and long-term stability, enabling precision applications with minimal calibration."),(0,r.kt)("li",{parentName:"ul"},"Hermetic package offers excellent long-term stability 0 g offset vs. temperature (all axes): 0.75 mg/\xb0C maximum"),(0,r.kt)("li",{parentName:"ul"},"The low noise of the ADXL356 over higher frequencies is ideal for wireless condition monitoring."),(0,r.kt)("li",{parentName:"ul"},"Ultra low power consumption: Normal operation mode-150 \u03bcA, Standby mode 21 \u03bcA  "),(0,r.kt)("li",{parentName:"ul"},"Low drift, low noise")),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Supply voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating ambient temperature"),(0,r.kt)("td",{parentName:"tr",align:null},"-40 \u2013 125\u2103")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Output Full-Scale Range (FSR)"),(0,r.kt)("td",{parentName:"tr",align:null},"\xb110g / \xb120g")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sensitivity at X",(0,r.kt)("sub",null,"OUT"),", Y",(0,r.kt)("sub",null,"OUT"),", Z",(0,r.kt)("sub",null,"OUT")," / (Ratiometric to V1P8ANA)"),(0,r.kt)("td",{parentName:"tr",align:null},"\xb110 g@80 mv/g (Typ.) / \xb120 g@40 mv/g (Typ.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sensitivity Change due to Temperature"),(0,r.kt)("td",{parentName:"tr",align:null},"\xb10.01%/\xb0C  (TA = \u221240\xb0C to +125\xb0C)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0g OFFSET / (Referred to V1P8ANA/2)"),(0,r.kt)("td",{parentName:"tr",align:null},"\xb1125 mg(Typ.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Output interface"),(0,r.kt)("td",{parentName:"tr",align:null},"Analog")))),(0,r.kt)("h2",{id:"applications"},"Applications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inertial measurement units (IMUs)/altitude and heading reference systems (AHRSs)"),(0,r.kt)("li",{parentName:"ul"},"Platform stabilization systems"),(0,r.kt)("li",{parentName:"ul"},"Structural health monitoring"),(0,r.kt)("li",{parentName:"ul"},"Condition monitoring"),(0,r.kt)("li",{parentName:"ul"},"Seismic imaging"),(0,r.kt)("li",{parentName:"ul"},"Tilt sensing"),(0,r.kt)("li",{parentName:"ul"},"Robotics")),(0,r.kt)("h2",{id:"pinout"},"Pinout"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/img/pinout1.jpg",alt:"pir",width:600,height:"auto"})),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/img/pinout2.jpg",alt:"pir",width:600,height:"auto"})),(0,r.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:200,height:"auto"})))))),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Materials required")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,r.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove 3-aixs Accelermeter ADXL356B"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"pir",width:600,height:"auto"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"pir",width:600,height:"auto"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html"},"Get ONE Now"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In addition, you can consider our new ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html"},"Seeeduino Lotus M0+"),", which is equivalent to the combination of Seeeduino V4.2 and Baseshield.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy \n\n**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.\n"))),(0,r.kt)("h4",{id:"hardware-connection"},"Hardware Connection"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - 3-Axis Analog Accelerometer \xb120g (ADXL356B) to the ",(0,r.kt)("strong",{parentName:"p"},"A0")," port of the Base Shield.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/img/_DAS3070.png",alt:"pir",width:600,height:"auto"})),(0,r.kt)("h4",{id:"software"},"Software"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Download the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/linux-downey/Seeed_ADXL356/blob/master/Seeed_ADXL_356/Seeed_ADXL_356.ino"},"Seeed_ADXL_356.ino")," from Github.")),(0,r.kt)("p",null,"or you can just copy the code below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'\n#include <Arduino.h>\n\n#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE\n  #define SERIAL SerialUSB\n  #define SYS_VOL   3.3\n#else\n  #define SERIAL Serial\n  #define SYS_VOL   5\n#endif\n\nfloat cali_data_xy;\nfloat cali_data_z;\nint16_t scale;\n\n#define MODUEL_RANGE           20\n\n#define MODULE_VOL             1.8\n\n#define CALI_BUF_LEN           15\n#define CALI_INTERVAL_TIME     250\n\nfloat cali_buf_xy[CALI_BUF_LEN];\nfloat cali_buf_z[CALI_BUF_LEN];\n\n#define XY_PIN   A0\n#define Z_PIN    A1\n\nfloat deal_cali_buf(float *buf)\n{\n    float cali_val = 0;\n    \n    for(int i = 0;i < CALI_BUF_LEN;i++)\n    {\n        cali_val += buf[i];\n    }\n    cali_val = cali_val/CALI_BUF_LEN;\n    return (float)cali_val;\n}\n\n\nvoid calibration(void)\n{\n    SERIAL.println("Please Place the module horizontally!");\n    delay(1000);\n    SERIAL.println("Start calibration........");\n    \n    for(int i=0;i<CALI_BUF_LEN;i++)\n    {\n        cali_buf_xy[i] = analogRead(XY_PIN);;\n        cali_buf_z[i] = analogRead(Z_PIN);\n        delay(CALI_INTERVAL_TIME);\n    }\n    cali_data_xy =  deal_cali_buf(cali_buf_xy);\n    cali_data_z =  (float)deal_cali_buf(cali_buf_z);\n    SERIAL.println("Calibration OK!!");\n    scale = (float)1000 / (cali_data_z - cali_data_xy);\n    cali_data_z -= (float)980 / scale;\n    SERIAL.println(cali_data_xy);\n    SERIAL.println(cali_data_z);\n    SERIAL.println(scale);\n    \n}\n\n\n\nvoid AccMeasurement(void)\n{\n    int16_t val_xy = 0;\n    int16_t val_z = 0;\n    val_xy = analogRead(XY_PIN);\n    val_z = analogRead(Z_PIN);\n    \n    SERIAL.print("Raw data xy  = ");\n    SERIAL.println(val_xy);\n    SERIAL.print("Raw data z  = ");\n    SERIAL.println(val_z);\n    SERIAL.println(" ");\n    \n    val_xy -= cali_data_xy;\n    val_z -= cali_data_z;\n    SERIAL.print("x or y position acc is ");\n    SERIAL.print(val_xy * scale / 1000.0);\n    SERIAL.println(" g ");\n    SERIAL.print("z position acc is ");\n    SERIAL.print(val_z * scale / 1000.0);\n    SERIAL.println(" g ");\n    SERIAL.println(" ");\n    SERIAL.println(" ");\n    SERIAL.println(" ");\n    delay(1000);\n}\n\nvoid setup()\n{\n    SERIAL.begin(115200);\n    #ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE\n    analogReadResolution(12);\n    #endif\n    calibration();\n    SERIAL.print("Scale = ");\n    SERIAL.println(scale);\n    \n}\n\n\n\nvoid loop()\n{\n    AccMeasurement();\n}\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Upload the demo. If you do not know how to upload the code, please check ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Open the ",(0,r.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,r.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to ",(0,r.kt)("strong",{parentName:"p"},"115200"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 4. Calibration")," Follow the calibration tips in the Serial Monitor, just few step the calibration will be finished")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 5.")," Now you can use this sensor, and the output will be like this:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C++"},"Please Place the module horizontally!\nStart calibration........\nCalibration OK!!\n184.93\n185.03\n121\nScale = 121\nRaw data xy  = 185\nRaw data z  = 193\n \nx or y position acc is 0.00 g \nz position acc is 0.85 g \n \n \n \nRaw data xy  = 188\nRaw data z  = 196\n \nx or y position acc is 0.36 g \nz position acc is 1.21 g\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"    If you use Grove port to output the data, the X axis and the Y axis can not be output at the same time, you can use the on-board swith to select the output channel. If you want to output X/Y/Z at the same time, you can use the 4 pin welding hole.\n"))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q1: How to select the \xb110g measurement range?"),"  "),(0,r.kt)("p",null,"A1: To change the measurement range you need to modify both the hardware and software. First, cut the back pad which connected to \xb120g and re-solder it to \xb110g. Then modify the code in the code block line 12"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#define MODUEL_RANGE           20\n")),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"\u21ca")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\downdownarrows")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8867em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel amsrm"},"\u21ca")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#define MODUEL_RANGE           10\n")),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/res/Grove%20-%203-Axis%20Analog%20Accelerometer%20%C2%B120g%20(ADXL356B).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/res/Grove%20-%203-Axis%20Analog%20Accelerometer%20%C2%B120g%20(ADXL356B).zip"},"Grove - 3-Axis Analog Accelerometer \xb120g (ADXL356B) Schematic file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/res/ADXL356B.pdf"},"ADXL 356B Datasheet"))),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);