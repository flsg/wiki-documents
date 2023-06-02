"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77087],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,m=p["".concat(d,".").concat(u)]||p[u]||h[u]||a;return n?i.createElement(m,s(s({ref:t},c),{},{components:n})):i.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[p]="string"==typeof e?e:o,s[1]=r;for(var l=2;l<a;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=n(87462),o=(n(67294),n(3905));const a={description:"SenseCAP Indicator x Home Assistant Application Development",title:"Home Assistant X SenseCAP Indicator",keywords:["SenseCAP Indicator Home Assistant"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_Application_Home_Assistant",last_update:{date:"6/02/2023",author:"Thomas"}},s="SenseCAP Indicator x Home Assistant Application Development",r={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Application/Home_Assistant",id:"Sensor/SenseCAP/SenseCAP_Indicator/Application/Home_Assistant",title:"Home Assistant X SenseCAP Indicator",description:"SenseCAP Indicator x Home Assistant Application Development",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Application/Home_Assistant.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Application",slug:"/SenseCAP_Indicator_Application_Home_Assistant",permalink:"/SenseCAP_Indicator_Application_Home_Assistant",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Application/Home_Assistant.md",tags:[],version:"current",lastUpdatedBy:"Thomas",lastUpdatedAt:1685664e3,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{description:"SenseCAP Indicator x Home Assistant Application Development",title:"Home Assistant X SenseCAP Indicator",keywords:["SenseCAP Indicator Home Assistant"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_Application_Home_Assistant",last_update:{date:"6/02/2023",author:"Thomas"}},sidebar:"ProductSidebar",previous:{title:"ChatGPT X DALL\xb7E X SenseCAP Indicator",permalink:"/SenseCAP_Indicator_Application_ChatGPT"},next:{title:"SenseCAP CO2 Sensor",permalink:"/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP-SOLO-CO2-Sensor"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step-by-Step Guide",id:"step-by-step-guide",level:2},{value:"Step 1: Install Home Assistant",id:"step-1-install-home-assistant",level:3},{value:"Step 2: Install <strong>Mosquitto Broker</strong> and <strong>File Editor</strong>",id:"step-2-install-mosquitto-broker-and-file-editor",level:3},{value:"Step 3: Add MQTT Integration and Config",id:"step-3-add-mqtt-integration-and-config",level:3},{value:"Step 4: Modify &quot;configuration.yaml&quot; to Add Indicator Entity",id:"step-4-modify-configurationyaml-to-add-indicator-entity",level:3},{value:"Step 5: Edit Dashboard",id:"step-5-edit-dashboard",level:3},{value:"Build and Flash the Native Firmware",id:"build-and-flash-the-native-firmware",level:2},{value:"Additional Information",id:"additional-information",level:2},{value:"CONFIG_BROKER_URL",id:"config_broker_url",level:3},{value:"Relationship between <code>ha_config.h</code> and <code>configuration.yaml</code>",id:"relationship-between-ha_configh-and-configurationyaml",level:3},{value:"<code>indicator_ha.c</code> Functions",id:"indicator_hac-functions",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sensecap-indicator-x-home-assistant-application-development"},"SenseCAP Indicator x Home Assistant Application Development"),(0,o.kt)("center",null,(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/PKMcutZDjDg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Welcome to the Seeed SenseCAP Indicator and Home Assistant development tutorial. This guide will walk you through the steps to integrate the SenseCAP Indicator with Home Assistant using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/yellow"},"Home Assistant Yellow"),"."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before we begin, make sure you have read the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/SenseCAP_Indicator_Get_Started"},"User Guide")," of the SenseCAP Indicator Board to familiarize yourself with its software and hardware information."),(0,o.kt)("h2",{id:"step-by-step-guide"},"Step-by-Step Guide"),(0,o.kt)("h3",{id:"step-1-install-home-assistant"},"Step 1: Install Home Assistant"),(0,o.kt)("p",null,"First, you need to install Home Assistant."),(0,o.kt)("p",null,"With ",(0,o.kt)("strong",{parentName:"p"},"Home Assistant Yellow")," You can follow the instructions provided ",(0,o.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/installation/yellow"},"here"),". Also, to run on any type of Raspberry Pi or a local server, you can follow this ",(0,o.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/installation/"},"instruction")," step by step."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Installed.png"})),(0,o.kt)("admonition",{title:"Don't know how to onboard HA?",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Once you installed the Home Assistant, check ",(0,o.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/getting-started/onboarding/"},"Onboarding Home Assistant - Home Assistant")," for details.")),(0,o.kt)("h3",{id:"step-2-install-mosquitto-broker-and-file-editor"},"Step 2: Install ",(0,o.kt)("strong",{parentName:"h3"},"Mosquitto Broker")," and ",(0,o.kt)("strong",{parentName:"h3"},"File Editor")),(0,o.kt)("p",null,"The next step is to install the Mosquitto Broker and File Editor. Mosquitto is an open-source message broker that implements the MQTT protocol whereas File Editor allows you to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration.yaml")," file without access the terminal ."),(0,o.kt)("p",null,"In Home Assistant Yellow, you can install the Mosquitto Broker and File Editor using the Add-ons feature."),(0,o.kt)("admonition",{title:"Add-ons",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Home Assistant Yellow comes with ",(0,o.kt)("strong",{parentName:"p"},"Home Assistant Operating System")," can be easily installed Add-ons. However, ",(0,o.kt)("strong",{parentName:"p"},"Home Assistant Container")," does not support Add-ons, which means you need to install a MQTT broker application aside from Home Assistant.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Setting.png"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Add-ons.png"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Press_Add.png"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add-on_Store.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For convenience, show the 'File editor' in sidebar:")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_editor_show.png"})),(0,o.kt)("p",null,"Now we get two add-ons."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Two_Adds.png"})),(0,o.kt)("h3",{id:"step-3-add-mqtt-integration-and-config"},"Step 3: Add MQTT Integration and Config"),(0,o.kt)("p",null,"After installing the MQTT Broker, you need to add MQTT integration and configuration to Home Assistant. This will allow Home Assistant to communicate with the SenseCAP Indicator Board."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Devices.png"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Config_MQTT.png"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If not discovered MQTT, restart Home Assistant to see the new one discovered.")),(0,o.kt)("h3",{id:"step-4-modify-configurationyaml-to-add-indicator-entity"},'Step 4: Modify "configuration.yaml" to Add Indicator Entity'),(0,o.kt)("p",null,"You can use the 'File editor' add-on in Home Assistant Yellow to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration.yaml")," file."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If not supporting Add-ons, such as Home Assistant Container, you need to modify it through terminal\u3002")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_File_editor.png"})),(0,o.kt)("p",null,'The next step is to modify the "configuration.yaml" file to add the Indicator entity. This file is used by Home Assistant to keep track of the various entities in your setup.'),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_Choose_config.png"})),(0,o.kt)("p",null,'Add the following to your "configuration.yaml" file:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Example configuration.yaml entry\nmqtt:\n  sensor:\n    - unique_id: indicator_temperature\n      name: "Indicator Temperature"\n      state_topic: "indicator/sensor"\n      suggested_display_precision: 1\n      unit_of_measurement: "\xb0C"\n      value_template: "{{ value_json.temp }}"\n    - unique_id: indicator_humidity\n      name: "Indicator Humidity"\n      state_topic: "indicator/sensor"\n      unit_of_measurement: "%"\n      value_template: "{{ value_json.humidity }}"\n    - unique_id: indicator_co2\n      name: "Indicator CO2"\n      state_topic: "indicator/sensor"\n      unit_of_measurement: "ppm"\n      value_template: "{{ value_json.co2 }}"\n    - unique_id: indicator_tvoc\n      name: "Indicator tVOC"\n      state_topic: "indicator/sensor"\n      unit_of_measurement: ""\n      value_template: "{{ value_json.tvoc }}"\n  switch:\n    - unique_id: indicator_switch1\n      name: "Indicator Switch1"\n      state_topic: "indicator/switch/state"\n      command_topic: "indicator/switch/set"\n      value_template: "{{ value_json.switch1 }}"\n      payload_on: \'{"switch1":1}\'\n      payload_off: \'{"switch1":0}\'\n      state_on: 1\n      state_off: 0\n    - unique_id: indicator_switch2\n      name: "Indicator Switch2"\n      state_topic: "indicator/switch/state"\n      command_topic: "indicator/switch/set"\n      value_template: "{{ value_json.switch2 }}"\n      payload_on: \'{"switch2":1}\'\n      payload_off: \'{"switch2":0}\'\n      state_on: 1\n      state_off: 0\n    - unique_id: indicator_switch3\n      name: "Indicator Switch3"\n      state_topic: "indicator/switch/state"\n      command_topic: "indicator/switch/set"\n      value_template: "{{ value_json.switch3 }}"\n      payload_on: \'{"switch3":1}\'\n      payload_off: \'{"switch3":0}\'\n      state_on: 1\n      state_off: 0\n    - unique_id: indicator_switch4\n      name: "Indicator Switch4"\n      state_topic: "indicator/\n\n/switch/state"\n      command_topic: "indicator/switch/set"\n      value_template: "{{ value_json.switch4 }}"\n      payload_on: \'{"switch4":1}\'\n      payload_off: \'{"switch4":0}\'\n      state_on: 1\n      state_off: 0\n    - unique_id: indicator_switch6\n      name: "Indicator Switch6"\n      state_topic: "indicator/switch/state"\n      command_topic: "indicator/switch/set"\n      value_template: "{{ value_json.switch6 }}"\n      payload_on: \'{"switch6":1}\'\n      payload_off: \'{"switch6":0}\'\n      state_on: 1\n      state_off: 0\n    - unique_id: indicator_switch7\n      name: "Indicator Switch7"\n      state_topic: "indicator/switch/state"\n      command_topic: "indicator/switch/set"\n      value_template: "{{ value_json.switch7 }}"\n      payload_on: \'{"switch7":1}\'\n      payload_off: \'{"switch7":0}\'\n      state_on: 1\n      state_off: 0\n  number:\n    - unique_id: indicator_switch5\n      name: "Indicator Switch5"\n      state_topic: "indicator/switch/state"\n      command_topic: "indicator/switch/set"\n      command_template: \'{"switch5": {{ value }} }\'\n      value_template: "{{ value_json.switch5 }}"\n    - unique_id: indicator_switch8\n      name: "Indicator Switch8"\n      state_topic: "indicator/switch/state"\n      command_topic: "indicator/switch/set"\n      command_template: \'{"switch8": {{ value }} }\'\n      value_template: "{{ value_json.switch8 }}"\n')),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_edit.png"})),(0,o.kt)("p",null,"Save the file and switch the sidebar: ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings->Dashboards")," to create a dashboard for Indicator(not necessary)."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard.png"})),(0,o.kt)("p",null,"Set a title and Icon you like, then create it."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard_info.png"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard.png"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_SenseCAP.png"})),(0,o.kt)("h3",{id:"step-5-edit-dashboard"},"Step 5: Edit Dashboard"),(0,o.kt)("p",null,"The final step is to edit the Home Assistant dashboard. You need to add the following to the raw configuration editor of the dashboard:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard.png"})),(0,o.kt)("p",null,"Press the  ",(0,o.kt)("inlineCode",{parentName:"p"},"TAKE CONTROL")," button."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard_config.png"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"views:\n  - title: Indicator device\n    icon: ''\n    badges: []\n    cards:\n      - graph: line\n        type: sensor\n        detail: 1\n        icon: mdi:molecule-co2\n        unit: ppm\n        entity: sensor.indicator_co2\n      - graph: line\n        type: sensor\n        entity: sensor.indicator_temperature\n        detail: 1\n        icon: mdi:coolant-temperature\n      - graph: line\n        type: sensor\n        detail: 1\n        entity: sensor.indicator_humidity\n      - graph: line\n        type: sensor\n        entity: sensor.indicator_tvoc\n        detail: 1\n        icon: mdi:air-filter\n      - type: entities\n        entities:\n          - entity: switch.indicator_switch1\n          - entity: switch.indicator_switch2\n          - entity: switch.indicator_switch3\n          - entity: switch.indicator_switch4\n          - entity: number.indicator_switch5\n          - entity: switch.indicator_switch6\n          - entity: switch.indicator_switch7\n          - entity: number.indicator_switch8\n        title: Indicator control\n        show_header_toggle: false\n        state_color: true\n")),(0,o.kt)("p",null,"Replace the contents as followed:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard_Save.png"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard_Done.png"})),(0,o.kt)("h2",{id:"build-and-flash-the-native-firmware"},"Build and Flash the Native Firmware"),(0,o.kt)("p",null,"Once you have completed the above steps, you are ready to build and flash the project."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32"},"the git repository")),(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"examples\\indicator_ha")," folder.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"idf.py -p PORT flash monitor")," to build, flash and monitor the project."),(0,o.kt)("li",{parentName:"ul"},"To exit the serial monitor, type ",(0,o.kt)("inlineCode",{parentName:"li"},"Ctrl-]"),".")))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The project configure PSRAM with Octal 120M by default. Please see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/tools/patch/README.md#idf-patch"},"here")," to enable `PSRAM Octal 120M  feature.")),(0,o.kt)("p",null,"For full steps to configure and use ESP-IDF to build projects, you can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html"},"Getting Started Guide"),"."),(0,o.kt)("p",null,"As the Home Assistant demo is mainly based on the indicator_basis demo, you could enjoy the Home Assistant functions when sliding to the other panel."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Picture"})),(0,o.kt)("h2",{id:"additional-information"},"Additional Information"),(0,o.kt)("h3",{id:"config_broker_url"},"CONFIG_BROKER_URL"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG_BROKER_URL")," should be related to the Home Assistant's MQTT broker address. This is crucial for the communication between the SenseCAP Indicator and Home Assistant."),(0,o.kt)("h3",{id:"relationship-between-ha_configh-and-configurationyaml"},"Relationship between ",(0,o.kt)("inlineCode",{parentName:"h3"},"ha_config.h")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"configuration.yaml")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ha_config.h")," file is a header file in the C programming language. It contains definitions to be shared between several source files. In this case, it contains definitions related to the MQTT configuration."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration.yaml")," file, on the other hand, is a file used by Home Assistant to keep track of the various entities in your setup."),(0,o.kt)("p",null,"When you modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration.yaml")," file to add the Indicator entity, you are essentially adding the definitions from the ",(0,o.kt)("inlineCode",{parentName:"p"},"ha_config.h")," file to the Home Assistant setup."),(0,o.kt)("h3",{id:"indicator_hac-functions"},(0,o.kt)("inlineCode",{parentName:"h3"},"indicator_ha.c")," Functions"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"indicator_ha.c")," file contains the main functions for the Home Assistant integration. It includes functions for initializing the MQTT client, subscribing to topics, and handling incoming messages."),(0,o.kt)("p",null,"You can find the ",(0,o.kt)("inlineCode",{parentName:"p"},"indicator_ha.c")," file ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Seeed-Solution/SenseCAP_Indicator_ESP32/main/examples/indicator_ha/main/model/indicator_ha.c"},"here"),"."),(0,o.kt)("p",null,"This file contains the main functions for the Home Assistant integration. It includes functions for initializing the MQTT client, subscribing to topics, and handling incoming messages. Here's a brief overview of the critical functions and how they work together:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"mqtt_event_handler()"),": This function is the main event handler for MQTT events. It is called whenever an event occurs in the MQTT client, such as a new message arriving, a connection being established, or a disconnection happening. Depending on the type of event, it performs different actions. For example, if a new message arrives, it calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt_message_arrived()")," function to handle the message.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"mqtt_message_arrived()"),": This function is called when a new MQTT message arrives. It parses the message and performs the appropriate action based on the message's content. For example, it might update the state of a sensor or switch based on the received message.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"mqtt_subscribe()"),": This function is used to subscribe to MQTT topics. When you subscribe to a topic, you tell the MQTT broker that you want to receive messages published to that topic. In the context of the SenseCAP Indicator, this function is used to subscribe to the topics that the Indicator's sensors and switches publish their states to.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"mqtt_publish()"),": This function is used to publish messages to MQTT topics. When you publish a message to a topic, it is sent to the MQTT broker, which then forwards it to all clients that have subscribed to that topic. In the context of the SenseCAP Indicator, this function is used to publish the states of the Indicator's sensors and switches.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"mqtt_app_start()"),": This function is used to start the MQTT client. It sets up the MQTT client configuration, creates the MQTT client, sets the MQTT event handler, and finally connects the MQTT client to the MQTT broker.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"indicator_ha_init()"),": This is the main initialization function for the Home Assistant integration. It initializes the MQTT client by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt_app_start()"),", and then subscribes to the necessary MQTT topics by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt_subscribe()"),"."))),(0,o.kt)("p",null,"These functions work together to enable the communication between the SenseCAP Indicator and Home Assistant via MQTT. The ",(0,o.kt)("inlineCode",{parentName:"p"},"indicator_ha_init()")," function starts the MQTT client and subscribes to the necessary topics. Then, whenever an MQTT event occurs, the ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt_event_handler()")," function is called to handle the event. If a new message arrives, it calls ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt_message_arrived()")," to handle the message. And whenever the state of a sensor or switch changes, ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt_publish()")," is called to publish the new state to the corresponding MQTT topic."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Demo SDK"),": The Demo SDK for the SenseCAP Indicator is available on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32"},"GitHub"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"indicator_ha.c")," File"),": This file contains the main functions for the Home Assistant integration. You can view it ",(0,o.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Seeed-Solution/SenseCAP_Indicator_ESP32/main/examples/indicator_ha/main/model/indicator_ha.c"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"User Guide"),": The User Guide provides detailed information about the software and hardware of the SenseCAP Indicator Board. You can read it ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/SenseCAP_Indicator_Get_Started"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Home Assistant Installation Guide"),": If you're new to Home Assistant, this guide will help you get it installed and set up. You can find it ",(0,o.kt)("a",{parentName:"li",href:"https://www.home-assistant.io/installation/"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Getting Started Guide for ESP-IDF"),": This guide provides full steps to configure and use ESP-IDF to build projects. You can access it ",(0,o.kt)("a",{parentName:"li",href:"https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html"},"here"),".")),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Need help with your SenseCAP Indicator? We're here to assist you!")),(0,o.kt)("p",null,"If you encounter any issues or have any questions while following this tutorial, please feel free to reach out to our tech support. We are always here to help!"),(0,o.kt)("p",null,"Visit our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/sensecap"},"Seeed Official Discord Channel")," to ask your questions or the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions"},"GitHub discussions")," to share all you want!"),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/sensecap",class:"button_tech_support_sensecap"}),(0,o.kt)("a",{href:"https://support.sensecapmx.com/portal/en/home",class:"button_tech_support_sensecap3"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"mailto:support@sensecapmx.com",class:"button_tech_support_sensecap2"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions",class:"button_discussion"})))}p.isMDXComponent=!0}}]);