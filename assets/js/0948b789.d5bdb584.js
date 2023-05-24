"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18201],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=a,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},25162:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={description:"Grove - Touch Sensor",title:"Grove - Touch Sensor",keywords:["Grove Grove_Sensors Touch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Touch_Sensor",last_update:{date:"1/19/2023",author:"jianjing Huang"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Touch/Grove-Touch_Sensor",id:"Sensor/Grove/Grove_Sensors/Touch/Grove-Touch_Sensor",title:"Grove - Touch Sensor",description:"Grove - Touch Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Touch/Grove-Touch_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Touch",slug:"/Grove-Touch_Sensor",permalink:"/Grove-Touch_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Touch/Grove-Touch_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1674086400,formattedLastUpdatedAt:"Jan 19, 2023",frontMatter:{description:"Grove - Touch Sensor",title:"Grove - Touch Sensor",keywords:["Grove Grove_Sensors Touch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Touch_Sensor",last_update:{date:"1/19/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Recorder v2.0",permalink:"/Grove-Recorder_v2.0"},next:{title:"Grove - Rotary Angle Sensor",permalink:"/Grove-Rotary_Angle_Sensor"}},s={},p=[{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Play with Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)",id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi",level:3},{value:"Hardware",id:"hardware-2",level:4},{value:"Software",id:"software-2",level:4},{value:"Play With Raspberry Pi (with GrovePi_Plus)",id:"play-with-raspberry-pi-with-grovepi_plus",level:3},{value:"Hardware",id:"hardware-3",level:4},{value:"Software",id:"software-3",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/surface.jpg",alt:null})),(0,a.kt)("p",null,"Grove - Touch Sensor enables you to replace press with touch. It can detect the change in capacitance when a finger is near by. That means no matter your finger directly touches the pad or just stays close to the pad, Grove - Touch Sensor would outputs HIGH also."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,a.kt)("h2",{id:"specifications"},"Specifications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Operating Voltage: 2.0 - 5.5V"),(0,a.kt)("li",{parentName:"ul"},"Operating Current(Vcc=3V):1.5 - 3.0\u03bcA"),(0,a.kt)("li",{parentName:"ul"},"Operating Current(VDD=3V):3.5 - 7.0\u03bcA"),(0,a.kt)("li",{parentName:"ul"},"Output Response Time: 60 - 220mS"),(0,a.kt)("li",{parentName:"ul"},"Used Chipset: TTP223-BA6")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,a.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Option features")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"AHLB"),(0,a.kt)("th",{parentName:"tr",align:null},"TOG"),(0,a.kt)("th",{parentName:"tr",align:null},"LPMB"),(0,a.kt)("th",{parentName:"tr",align:null},"MOTB"),(0,a.kt)("th",{parentName:"tr",align:null},"SLRFTB"),(0,a.kt)("th",{parentName:"tr",align:null},"RST"),(0,a.kt)("th",{parentName:"tr",align:null},"Q"),(0,a.kt)("th",{parentName:"tr",align:null},"OPDO"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Output Active High / Low"),(0,a.kt)("td",{parentName:"tr",align:null},"Toggle mode"),(0,a.kt)("td",{parentName:"tr",align:null},"Power Mode"),(0,a.kt)("td",{parentName:"tr",align:null},"Max. On Time"),(0,a.kt)("td",{parentName:"tr",align:null},"Sampling length"),(0,a.kt)("td",{parentName:"tr",align:null},"RESET PIN"),(0,a.kt)("td",{parentName:"tr",align:null},"CMOS Output"),(0,a.kt)("td",{parentName:"tr",align:null},"Open Drain Mode")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"V"),(0,a.kt)("td",{parentName:"tr",align:null},"V"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"X"),(0,a.kt)("td",{parentName:"tr",align:null},"V"),(0,a.kt)("td",{parentName:"tr",align:null},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Active High"),(0,a.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,a.kt)("td",{parentName:"tr",align:null},"LOW"),(0,a.kt)("td",{parentName:"tr",align:null},"Infinite"),(0,a.kt)("td",{parentName:"tr",align:null},"1.6 msec"),(0,a.kt)("td",{parentName:"tr",align:null},"N/A"),(0,a.kt)("td",{parentName:"tr",align:null},"Present"),(0,a.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("h3",{id:"play-with-arduino"},"Play with Arduino"),(0,a.kt)("p",null,"This demo is going to show you how to turn on/off an LED."),(0,a.kt)("h4",{id:"hardware"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-Touch_Sensor"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-LED"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/45d_small.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Red_LED/img/45d_small.jpg",alt:"enter image description"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Red-LED-p-1142.html"},"Get One Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove-Touch_Sensor to port ",(0,a.kt)("strong",{parentName:"li"},"D2")," of Grove-Base Shield."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Connect Grove-LED to port ",(0,a.kt)("strong",{parentName:"li"},"D3")," of Grove-Base Shield."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Plug Grove - Base Shield into Seeeduino."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.")," Connect Seeeduino to PC via a USB cable.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/with_ardu.jpg",alt:"with_ardu"})),(0,a.kt)("h4",{id:"software"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Please copy and paste code below to a new Arduino sketch.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"const int TouchPin=2;\nconst int ledPin=3;\n\nvoid setup() {\n    pinMode(TouchPin, INPUT);\n    pinMode(ledPin,OUTPUT);\n}\n\nvoid loop() {\n    int sensorValue = digitalRead(TouchPin);\n    if(sensorValue==1)\n    {\n        digitalWrite(ledPin,HIGH);\n    }\n    else\n    {\n        digitalWrite(ledPin,LOW);\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Monitor the led on and off."),(0,a.kt)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,a.kt)("h4",{id:"hardware-1"},"Hardware"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Connect a Grove - Touch Sensor to port D2, and connect a Grove - Red LED to port D3 of a Base Shield."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Plug the Base Shield to your Seeeduino/Arduino."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Link Seeeduino/Arduino to your PC via an USB cable."),(0,a.kt)("h4",{id:"software-1"},"Software"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,a.kt)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If this is your first time using Codecraft, see also ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/"},"Guide for Codecraft using Arduino"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Touch_Sensor/image/cc_Touch_Sensor.png",alt:"cc"})),(0,a.kt)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,a.kt)("admonition",{title:"success",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When the code finishes uploaded, the LED will goes on when you touch the Touch Sensor.")),(0,a.kt)("h3",{id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi"},"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)"),(0,a.kt)("h4",{id:"hardware-2"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". Things used in this project:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - Touch Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/45d_small.jpg",alt:"enter image description here"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html"},"Get ONE Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Plug the Grove Base Hat into Raspberry."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),". Connect the touch sensor to port 12 of the Base Hat."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4"),". Connect the Raspberry Pi to PC through USB cable.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/Touch_Hat.jpg",alt:null})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For step 3 you are able to connect the touch sensor to ",(0,a.kt)("strong",{parentName:"p"},"any GPIO Port")," but make sure you change the command with the corresponding port number.")),(0,a.kt)("h4",{id:"software-2"},"Software"),(0,a.kt)("admonition",{title:"attention",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you are using ",(0,a.kt)("strong",{parentName:"p"},"Raspberry Pi with Raspberrypi OS >= Bullseye"),", you have to use this command line ",(0,a.kt)("strong",{parentName:"p"},"only with Python3"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Download the source file by cloning the grove.py library.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),". Excute below commands to run the code.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd grove.py/grove\npython3 grove_touch_sensor.py 12\n\n")),(0,a.kt)("p",null,"Following is the grove_touch_sensor.py code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\nimport time\nfrom grove.gpio import GPIO\n\n\nclass GroveTouchSensor(GPIO):\n    def __init__(self, pin):\n        super(GroveTouchSensor, self).__init__(pin, GPIO.IN)\n        self._last_time = time.time()\n\n        self._on_press = None\n        self._on_release = None\n\n    @property\n    def on_press(self):\n        return self._on_press\n\n    @on_press.setter\n    def on_press(self, callback):\n        if not callable(callback):\n            return\n\n        if self.on_event is None:\n            self.on_event = self._handle_event\n\n        self._on_press = callback\n\n    @property\n    def on_release(self):\n        return self._on_release\n\n    @on_release.setter\n    def on_release(self, callback):\n        if not callable(callback):\n            return\n\n        if self.on_event is None:\n            self.on_event = self._handle_event\n\n        self._on_release = callback\n\n    def _handle_event(self, pin, value):\n        t = time.time()\n        dt, self._last_time = t - self._last_time, t\n\n        if value:\n            if callable(self._on_press):\n                self._on_press(dt)\n        else:\n            if callable(self._on_release):\n                self._on_release(dt)\n\nGrove = GroveTouchSensor\n\n\ndef main():\n    import sys\n\n    if len(sys.argv) < 2:\n        print('Usage: {} pin'.format(sys.argv[0]))\n        sys.exit(1)\n\n    touch = GroveTouchSensor(int(sys.argv[1]))\n\n    def on_press(t):\n        print('Pressed')\n    def on_release(t):\n        print(\"Released.\")\n\n    touch.on_press = on_press\n    touch.on_release = on_release\n\n    while True:\n        time.sleep(1)\n\n\nif __name__ == '__main__':\n    main()\n\n\n")),(0,a.kt)("admonition",{title:"success",type:"tip"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"If everything goes well, you will be able to see the following result\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\npi@raspberrypi:~/grove.py/grove $ python3 grove_touch_sensor.py 12\nPressed\nReleased.\nPressed\nReleased.\nPressed\nReleased.\nPressed\nReleased.\n^CTraceback (most recent call last):\n  File "grove_touch_sensor.py", line 110, in <module>\n    main()\n  File "grove_touch_sensor.py", line 106, in main\n    time.sleep(1)\nKeyboardInterrupt\n\n')),(0,a.kt)("p",null,"You can quit this program by simply press ",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl"),"+",(0,a.kt)("inlineCode",{parentName:"p"},"c"),"."),(0,a.kt)("h3",{id:"play-with-raspberry-pi-with-grovepi_plus"},"Play With Raspberry Pi (with GrovePi_Plus)"),(0,a.kt)("h4",{id:"hardware-3"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,a.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-Touch_Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/45d_small.jpg",alt:"enter image description here"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html"},"Get One Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Plug the GrovePi_Plus into Raspberry."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Connect Grove-Touch_Sensor  to ",(0,a.kt)("strong",{parentName:"li"},"D2")," port of GrovePi_Plus."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Connect the Raspberry to PC through USB cable.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/with_rpi.jpg",alt:"with_rpi"})),(0,a.kt)("h4",{id:"software-3"},"Software"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you are using ",(0,a.kt)("strong",{parentName:"p"},"Raspberry Pi with Raspberrypi OS >= Bullseye"),", you have to use this command line ",(0,a.kt)("strong",{parentName:"p"},"only with Python3"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Follow ",(0,a.kt)("a",{parentName:"li",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Git clone the Github repository.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Excute below commands to use this sensor, please change the port to from D4 to D2.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python3 grove_touch_sensor.py\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},'#!/usr/bin/env python\n#\n# GrovePi Example for using the Grove Touch Sensor (https://www.seeedstudio.com/wiki/Grove_-_Touch_Sensor)\n#\n# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi\n#\n# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi\n#\n\'\'\'\n## License\nThe MIT License (MIT)\nGrovePi for the Raspberry Pi: an open source platform for connecting Grove Sensors to the Raspberry Pi.\nCopyright (C) 2017  Dexter Industries\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n\'\'\'\nimport time\nimport grovepi\n\n# Connect the Grove Touch Sensor to digital port D2\n# SIG,NC,VCC,GND\ntouch_sensor = 2\n\ngrovepi.pinMode(touch_sensor,"INPUT")\n\nwhile True:\n    try:\n        print(grovepi.digitalRead(touch_sensor))\n        time.sleep(.5)\n\n    except IOError:\n        print ("Error")\n\n')),(0,a.kt)("p",null,"Here is result:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/rpi_result.jpg",alt:null})),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/res/Touch_sensor_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/res/Touch_sensor_Eagle_File.zip"},"Grove-Touch_Sensor Schematic")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/res/TTP223.pdf"},"TTP223")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Codecraft]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Touch_Sensor/resource/Grove_Touch_Sensor_CDC_File.zip"},"CDC File"))),(0,a.kt)("h2",{id:"projects"},"Projects"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Using Grove Touch Sensor To Control Grove LED"),": How to connect and use Grove Touch Sensor to control Grove LED socket kit."),(0,a.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/user50338573/using-grove-touch-sensor-to-control-grove-led-56a5ed/embed",width:"350"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Touch sensor Grove module"),":"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/VFKYYG_hNUE",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/vPkf4czFQsY",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);