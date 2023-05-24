"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77314],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=a,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={description:"Grove - PH Sensor Kit (E-201C-Blue)",title:"Grove - PH Sensor Kit (E-201C-Blue)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-PH-Sensor-kit",last_update:{date:"1/6/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Liquid/Grove-PH-Sensor-kit",id:"Sensor/Grove/Grove_Sensors/Liquid/Grove-PH-Sensor-kit",title:"Grove - PH Sensor Kit (E-201C-Blue)",description:"Grove - PH Sensor Kit (E-201C-Blue)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Liquid/Grove-PH-Sensor-kit.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Liquid",slug:"/Grove-PH-Sensor-kit",permalink:"/Grove-PH-Sensor-kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Liquid/Grove-PH-Sensor-kit.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672963200,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{description:"Grove - PH Sensor Kit (E-201C-Blue)",title:"Grove - PH Sensor Kit (E-201C-Blue)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-PH-Sensor-kit",last_update:{date:"1/6/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"G5/4 inch Water Flow sensor",permalink:"/G1-1-4_Water_Flow_sensor"},next:{title:"Grove - EC Sensor Kit",permalink:"/Grove-EC-Sensor-kit"}},s={},p=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Platform Supported",id:"platform-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Materials Requied",id:"materials-requied",level:4},{value:"Hardware Connection",id:"hardware-connection",level:4},{value:"Software",id:"software",level:4},{value:"Software Code",id:"software-code",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/04.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-PH-Sensor-Kit-E-201C-Blue-p-4577.html"},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,a.kt)("p",null,"Are you trying to find an easy to use and cost-effect PH sensor/meter? Do you want to use a PH sensor/meter with Arduino or Raspberry Pi? Well, this new Grove - PH Sensor will meet all your needs. The PH sensor measures the hydrogen-ion activity in water-based solutions, we usually use it to measure the PH of a liquid. It is widely used in the chemical industry, the pharmaceutical industry, the dye industry, and scientific research where acidity and alkalinity testing is required. The drive board in this kit support both 3.3V and 5V system. And with the stander BNC probe interface and Grove connector, it is very convenient to work with Arduino and Raspberry Pi."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"This product is non-RoHS certified.\n"))),(0,a.kt)("h2",{id:"feature"},"Feature"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Compact size for easy deployment.  "),(0,a.kt)("li",{parentName:"ul"},"Support with both Arduino and Rasberry Pi ."),(0,a.kt)("li",{parentName:"ul"},"Cost-effective.")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Items"),(0,a.kt)("th",{parentName:"tr",align:null},"Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"3.3V/5V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Range"),(0,a.kt)("td",{parentName:"tr",align:null},"0-14PH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Resolution"),(0,a.kt)("td",{parentName:"tr",align:null},"\xb10.15PH\uff08STP\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Response time"),(0,a.kt)("td",{parentName:"tr",align:null},"\uff1c1min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Probe Interface"),(0,a.kt)("td",{parentName:"tr",align:null},"BNC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Measure temperature"),(0,a.kt)("td",{parentName:"tr",align:null},"0-60\u2103")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Internal resistance"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2264250M\u03a9\uff0825\u2103\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Alkali error"),(0,a.kt)("td",{parentName:"tr",align:null},"0.2PH\uff081mol/L\uff09Na+\uff0cPH14)\uff0825\u2103\uff09")))),(0,a.kt)("h2",{id:"platform-supported"},"Platform Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h4",{id:"materials-requied"},"Materials Requied"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino Lotus"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-PH Sensor kit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/thumb.png",alt:"pir",width:600,height:"auto"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-PH-Sensor-Kit-E-201C-Blue-p-4577.html"},"Get ONE Now"))))),(0,a.kt)("h4",{id:"hardware-connection"},"Hardware Connection"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/PH_Connection.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"Please plug the USB cable, Grove-PH Sensor Interface into Seeeduino Lotus board Interface gently, otherwise you may damage the port.\n"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Plug Grove-PH Sensor into Interface ",(0,a.kt)("strong",{parentName:"p"},"A2")," of Seeeduino Lotus board with a Grove Cable.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Connect Seeeduino Lotus to PC via a USB cable.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Download the code, please refer to the software part.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 4.")," Run the code and the outcome will display on the screen of ",(0,a.kt)("strong",{parentName:"p"},"Serial Monitor")," in your Arduino IDE ."))),(0,a.kt)("h4",{id:"software"},"Software"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Grove-PH_Sensor_kit.zip"},"Demo code"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Copy the whole ",(0,a.kt)("strong",{parentName:"p"},"Grove-PH_Sensor_kit")," file and paste it into your Arduino IDE library file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Open the ",(0,a.kt)("strong",{parentName:"p"},"pH_meter_V1_1")," file with your Arduino IDE.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),"."))),(0,a.kt)("h4",{id:"software-code"},"Software Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C++"},'/*\n  # This sample code is used to test the pH meter V1.1.\n  # Editor : YouYou\n  # Date   : 2014.06.23\n  # Ver    : 1.1\n  # Product: analog pH meter\n  # SKU    : SEN0161\n*/\n#define SensorPin A2            //pH meter Analog output to Arduino Analog Input 0\n#define Offset 41.02740741      //deviation compensate\n#define LED 13\n#define samplingInterval 20\n#define printInterval 800\n#define ArrayLenth  40    //times of collection\n#define uart  Serial\nint pHArray[ArrayLenth];   //Store the average value of the sensor feedback\nint pHArrayIndex = 0;\nvoid setup(void)\n{\n  pinMode(LED, OUTPUT);\n  uart.begin(9600);\n  uart.println("pH meter experiment!");    //Test the uart monitor\n}\nvoid loop(void)\n{\n  static unsigned long samplingTime = millis();\n  static unsigned long printTime = millis();\n  static float pHValue, voltage;\n  if (millis() - samplingTime > samplingInterval)\n  {\n    pHArray[pHArrayIndex++] = analogRead(SensorPin);\n    if (pHArrayIndex == ArrayLenth)pHArrayIndex = 0;\n    voltage = avergearray(pHArray, ArrayLenth) * 5.0 / 1024;\n    pHValue = -19.18518519 * voltage + Offset;\n    samplingTime = millis();\n  }\n  if (millis() - printTime > printInterval)  //Every 800 milliseconds, print a numerical, convert the state of the LED indicator\n  {\n    uart.print("Voltage:");\n    uart.print(voltage, 2);\n    uart.print("    pH value: ");\n    uart.println(pHValue, 2);\n    digitalWrite(LED, digitalRead(LED) ^ 1);\n    printTime = millis();\n  }\n}\ndouble avergearray(int* arr, int number) {\n  int i;\n  int max, min;\n  double avg;\n  long amount = 0;\n  if (number <= 0) {\n    uart.println("Error number for the array to avraging!/n");\n    return 0;\n  }\n  if (number < 5) { //less than 5, calculated directly statistics\n    for (i = 0; i < number; i++) {\n      amount += arr[i];\n    }\n    avg = amount / number;\n    return avg;\n  } else {\n    if (arr[0] < arr[1]) {\n      min = arr[0]; max = arr[1];\n    }\n    else {\n      min = arr[1]; max = arr[0];\n    }\n    for (i = 2; i < number; i++) {\n      if (arr[i] < min) {\n        amount += min;      //arr<min\n        min = arr[i];\n      } else {\n        if (arr[i] > max) {\n          amount += max;  //arr>max\n          max = arr[i];\n        } else {\n          amount += arr[i]; //min<=arr<=max\n        }\n      }//if\n    }//for\n    avg = (double)amount / (number - 2);\n  }//if\n  return avg;\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"}," - Before detecting the target solution, the sensor **MUST** be calibrated by pointed calibration fluid, and it also **MUST** be put into pointed buffer(PH=7) or clean water before detecting a new kind of solution and swiped.\n\n - Before being measured, the electrode must be calibrated with a standard buffer solution of known PH value. In order to obtain more accurate results, the known PH value should be reliable, and closer to the measured one.\n\n - When the measurement is completed, the electrode protective sleeve should be put on. A small amount of 3.3mol / L potassium chloride solution should be placed in the protective sleeve to keep the electrode bulb wet.\n\n - The leading end of the electrode must be kept clean and dry to absolutely prevent short circuits at both ends of the output, otherwise it will lead to inaccurate or invalid measurement results.\n\n - After long-term use of the electrode, if you find that the gradient is slightly inaccurate, you can soak the lower end of the electrode in 4% HF (hydrofluoric acid) for 3-5 seconds, wash it with distilled water, and then soak in potassium chloride solution to make it new.\n \n - The sensor **MUST NOT** be dipped in the detecting liquid for a long time.\n"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.")," When the sensor is put into a pointed calibration fluid (PH=9.18), there'll be a voltage and a PH value:")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/calibration.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6.")," Similarily, when the sensor is put into a pointed calibration fluid (PH=4), there'll be a voltage and a PH value.")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/calibration2.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 7.")," A k value and Offset value can be calculated because of the linear characteristic of PH detecting, and following please insert Offset value and k value (the same as pHValue) into ",(0,a.kt)("strong",{parentName:"li"},"Line 10")," and ",(0,a.kt)("strong",{parentName:"li"},"Line 34")," in the Software Code:")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"$k= (PH2-PH1)/(V2-V1)$\n\n$Offset=[(PH2+PH1)-k*(V1+V2)]/2$\n\nThere's a [Calculation Chart](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Calibration_for_k&offset.xlsx) for furthur help with calibration.\n"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 8.")," Finally, you are free to detect your liquid.")),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/202002811_Grove-PH_Sensor_v1.0_SCH&PCB.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Grove-PH_Sensor_kit.zip"},"Demo Code library")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[XLSX]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Calibration_for_k&offset.xlsx"},"Calibration for k&offset"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,a.kt)("p",null,"With the SenseCAP ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,a.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}d.isMDXComponent=!0}}]);