"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74298],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>p});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=m(i),g=n,p=d["".concat(l,".").concat(g)]||d[g]||c[g]||a;return i?r.createElement(p,o(o({ref:t},u),{},{components:i})):r.createElement(p,o({ref:t},u))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var m=2;m<a;m++)o[m]=i[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}g.displayName="MDXCreateElement"},25233:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=i(87462),n=(i(67294),i(3905));const a={title:"Histogram",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Histogram/",slug:"/Wio-Terminal-LCD-Histogram",last_update:{date:"01/11/2022",author:"gunengyu"}},o="Histogram",s={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Histogram",id:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Histogram",title:"Histogram",description:"This repo describes how to draw histogram on Wio Terminal. Similar to the Line Charts library, you can use this to display raw sensor values to visualize readings on screen. This library is very flexible and can modify to your own need.",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Histogram.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage",slug:"/Wio-Terminal-LCD-Histogram",permalink:"/Wio-Terminal-LCD-Histogram",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Histogram.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"Histogram",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Histogram/",slug:"/Wio-Terminal-LCD-Histogram",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Line Charts",permalink:"/Wio-Terminal-LCD-Linecharts"},next:{title:"LCD API Examples",permalink:"/Wio-Terminal-LCD-APIs"}},l={},m=[{value:"Libraries Installation",id:"libraries-installation",level:2},{value:"Installing Histogram Libraries",id:"installing-histogram-libraries",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"To Initialize for drawing Histogram",id:"to-initialize-for-drawing-histogram",level:3},{value:"Creating Columns in Histogram",id:"creating-columns-in-histogram",level:3},{value:"To Show Histogram",id:"to-show-histogram",level:3},{value:"Changing the Column values",id:"changing-the-column-values",level:3},{value:"Deleting a Column",id:"deleting-a-column",level:3},{value:"Adding Line Chart to Histogram",id:"adding-line-chart-to-histogram",level:3},{value:"Hiding the Axis of Histogram",id:"hiding-the-axis-of-histogram",level:3},{value:"Others useful functions",id:"others-useful-functions",level:3},{value:"Example Code",id:"example-code",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:m};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"histogram"},"Histogram"),(0,n.kt)("p",null,"This repo describes how to draw histogram on Wio Terminal. Similar to the Line Charts library, you can use this to display raw sensor values to visualize readings on screen. This library is very flexible and can modify to your own need."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200114131505.png"})),(0,n.kt)("h2",{id:"libraries-installation"},"Libraries Installation"),(0,n.kt)("h3",{id:"installing-histogram-libraries"},"Installing Histogram Libraries"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Visit ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Histogram"},"Seeed_Arduino_Histogram")," and download the entire repo to your local drive.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,n.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,n.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_Histogram")," file that you've have just downloaded."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"to-initialize-for-drawing-histogram"},"To Initialize for drawing Histogram"),(0,n.kt)("p",null,"Include the Histogram library and initialize the histogram as follow:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <TFT_eSPI.h> // Hardware-specific library\n#include <SPI.h>\n#include"Histogram.h"\n\nTFT_Histogram histogram=TFT_Histogram(); //Initializing Histogram\nTFT_eSPI tft = TFT_eSPI(); //Initializing TFT\n\nvoid setup(void) {\n  tft.init();\n  histogram.initHistogram(&tft);\n  ...\n}\n')),(0,n.kt)("h3",{id:"creating-columns-in-histogram"},"Creating Columns in Histogram"),(0,n.kt)("p",null,"To create columns in histogram:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void formHistogram(String label,int NO,double Histogram_value,int Histogram_WIDTH,uint32_t colour);\n")),(0,n.kt)("p",null,"where ",(0,n.kt)("inlineCode",{parentName:"p"},"label")," is the column name under its column , ",(0,n.kt)("inlineCode",{parentName:"p"},"NO")," is the number tag of the histogram column, ",(0,n.kt)("inlineCode",{parentName:"p"},"Histogram_value")," is the value of histogram column, ",(0,n.kt)("inlineCode",{parentName:"p"},"Histogram_WIDTH")," is the width of the histogram column and ",(0,n.kt)("inlineCode",{parentName:"p"},"colour")," is the colour of histogram column colour."),(0,n.kt)("h3",{id:"to-show-histogram"},"To Show Histogram"),(0,n.kt)("p",null,"To show the Histogram:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void showHistogram();\n")),(0,n.kt)("h3",{id:"changing-the-column-values"},"Changing the Column values"),(0,n.kt)("p",null,"To change the values of existed columns:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void changeParam(uint8_t NO, String lable, float Histogram_value, uint32_t colour);\n")),(0,n.kt)("p",null,"where ",(0,n.kt)("inlineCode",{parentName:"p"},"NO")," refers back to the number tag of the histogram column(which column to change)."),(0,n.kt)("h3",{id:"deleting-a-column"},"Deleting a Column"),(0,n.kt)("p",null,"To delete a column from histogram:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void deleteCylinder(uint8_t NO);\n")),(0,n.kt)("p",null,"where ",(0,n.kt)("inlineCode",{parentName:"p"},"NO")," refers to the number tag of histogram column."),(0,n.kt)("h3",{id:"adding-line-chart-to-histogram"},"Adding Line Chart to Histogram"),(0,n.kt)("p",null,"Adding line chart:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void lineChart(uint32_t colour);\n")),(0,n.kt)("p",null,"where ",(0,n.kt)("inlineCode",{parentName:"p"},"color")," is the colour of the line chart."),(0,n.kt)("h3",{id:"hiding-the-axis-of-histogram"},"Hiding the Axis of Histogram"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void notShowAxis();\n")),(0,n.kt)("h3",{id:"others-useful-functions"},"Others useful functions"),(0,n.kt)("p",null,"For more other useful functions of the histogram library, please refer to the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Histogram.h")),". Further, it also provides sets of examples as well as a full function demo that can be found in the ",(0,n.kt)("inlineCode",{parentName:"p"},"examples")," folder."),(0,n.kt)("h2",{id:"example-code"},"Example Code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <TFT_eSPI.h> //Hardware-specific library\n#include <SPI.h>\n#include"Histogram.h" //include histogram library\n\nTFT_Histogram histogram=TFT_Histogram(); //Initializing tft and histogram\nTFT_eSPI tft = TFT_eSPI();\n\nvoid setup() {\n  tft.init();\n  histogram.initHistogram(&tft);\n  histogram.formHistogram("a",1,50.55,40,TFT_RED); //Column 1\n  histogram.formHistogram("b",2,20,40,TFT_BLACK); //Column 2\n  histogram.formHistogram("c",3,100,50,TFT_GREEN); //Column 3\n  histogram.formHistogram("d",4,53,50,TFT_BLUE); //Column 4\n  histogram.formHistogram("e",5,133,30,TFT_YELLOW); //Column 5\n  histogram.formHistogram("f",6,53,50,TFT_ORANGE); //Column 6\n  histogram.formHistogram("g",7,80,50,TFT_PINK); //Column 7\n\n  histogram.showHistogram(); //show histogram\n  delay(3000);\n\n  histogram.changeParam(6,"F",55,TFT_PINK);//change column 6\n  histogram.deleteCylinder(7);//delete colum 7\n  histogram.lineChart(TFT_BLACK);\n\n  delay(2000);\n  histogram.notShowAxis();//hiding the axis of histogram\n}\nvoid loop() {\n\n}\n')),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);