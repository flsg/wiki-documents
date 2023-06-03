"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[84630],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(h,o(o({ref:t},l),{},{components:r})):a.createElement(h,o({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:n,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99697:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={description:"ReSpeaker 4-Mic Linear Array Kit",title:"ReSpeaker 4-Mic Linear Array Kit",keywords:["reSpeaker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi",last_update:{date:"1/11/2023",author:"jianjing Huang"}},o=void 0,p={unversionedId:"Seeed_Elderly/reSpeaker/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi",id:"Seeed_Elderly/reSpeaker/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi",title:"ReSpeaker 4-Mic Linear Array Kit",description:"ReSpeaker 4-Mic Linear Array Kit",source:"@site/docs/Seeed_Elderly/reSpeaker/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi.md",sourceDirName:"Seeed_Elderly/reSpeaker",slug:"/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi",permalink:"/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/reSpeaker/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"ReSpeaker 4-Mic Linear Array Kit",title:"ReSpeaker 4-Mic Linear Array Kit",keywords:["reSpeaker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi",last_update:{date:"1/11/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"ReSpeaker 4-Mic Array for Raspberry Pi",permalink:"/ReSpeaker_4_Mic_Array_for_Raspberry_Pi"},next:{title:"ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi",permalink:"/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi"}},s={},c=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Assembly drawing",id:"assembly-drawing",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Software",id:"software",level:3},{value:"Usage overview",id:"usage-overview",level:2},{value:"Record sound with Python",id:"record-sound-with-python",level:3},{value:"FAQ",id:"faq",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/main_wiki.jpg",alt:"enter image description here"})),(0,n.kt)("p",null,"Seeed\u2019s ReSpeaker 4-Mic Linear Array Kit is\nan extension board, aka HAT designed for Raspberry Pi. It's a linear microphone array\nkit, comes with four microphones and\ndesigned for AI and voice applications. That\nmeans you can build a more powerful and\nflexible voice product with Raspberry Pi\nwhich can integrate Amazon Alexa Voice\nService, Google Assistant, and so on."),(0,n.kt)("p",null,"ReSpeaker 4-Mic Linear Array Kit for\nRaspberry Pi consists of two boards, one is\nvoice accessory HAT, another is four\nmicrophones linear array."),(0,n.kt)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/NxZx9nz67Bc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("p",null,"ReSpeaker 4-Mic Linear Array Kit for\nRaspberry Pi support 8 input & 8 output\nchannels in Raspberry Pi OS. The first 6\ninput channels for microphone\nrecording (only first 4 input channels are\nvalid capture data), rest of 2 input channel\nare echo channel of playback. The first 2\noutput channel are for sound output, the rest of 6 output\nchannels are dummy."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/ReSpeaker-4-Mic-Linear-Array-Kit-p-3066.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2 ADC chips and 1 DAC chip"),(0,n.kt)("li",{parentName:"ul"},"8 input and 8 output channels"),(0,n.kt)("li",{parentName:"ul"},"Four microphones array"),(0,n.kt)("li",{parentName:"ul"},"Grove support"),(0,n.kt)("li",{parentName:"ul"},"Raspberry Pi compatible (Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ and Raspberry Pi 4)"),(0,n.kt)("li",{parentName:"ul"},"Headset and speaker voice output")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2 x X-Power AC108 ADC"),(0,n.kt)("li",{parentName:"ul"},"4 x high performance analog microphones"),(0,n.kt)("li",{parentName:"ul"},"1 x X-Power AC101 DAC"),(0,n.kt)("li",{parentName:"ul"},"Voice output:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"3.5mm headset audio jack"),(0,n.kt)("li",{parentName:"ul"},"Speaker jack"))),(0,n.kt)("li",{parentName:"ul"},"Compatible with Raspberry Pi 40-pin headers"),(0,n.kt)("li",{parentName:"ul"},"Microphones: MSM321A3729H9BP"),(0,n.kt)("li",{parentName:"ul"},"Sensitivity: -22 dBFS (Omnidirectional)"),(0,n.kt)("li",{parentName:"ul"},"SNR: 59 dB"),(0,n.kt)("li",{parentName:"ul"},"Max Sample Rate: 48Khz")),(0,n.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Smart speaker"),(0,n.kt)("li",{parentName:"ul"},"Intelligent voice assistant systems"),(0,n.kt)("li",{parentName:"ul"},"Voice recorders"),(0,n.kt)("li",{parentName:"ul"},"Voice conferencing system"),(0,n.kt)("li",{parentName:"ul"},"Meeting communicating equipment"),(0,n.kt)("li",{parentName:"ul"},"Voice interacting robot"),(0,n.kt)("li",{parentName:"ul"},"Car voice assistant"),(0,n.kt)("li",{parentName:"ul"},"Other scenarios need voice command")),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"System Diagram")),(0,n.kt)("a",{href:"https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc-correct.png",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc-correct.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Interface")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/Hardware.jpg",alt:null})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"After connecting, be sure to use a multimeter to determine if the conduction of the circuit is as indicated in the figure above.")),(0,n.kt)("h2",{id:"assembly-drawing"},"Assembly drawing"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png",alt:null})),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Connect ReSpeaker 4-Mic Array to Raspberry Pi")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1."),"  Connect the ",(0,n.kt)("em",{parentName:"p"},"ReSpeaker Voice Accessory HAT")," with ",(0,n.kt)("em",{parentName:"p"},"ReSpeaker 4-Mic linear Array")," via the Ribbon Cable"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2."),"  Plug the ",(0,n.kt)("em",{parentName:"p"},"ReSpeaker Voice Accessory HAT")," into the ",(0,n.kt)("em",{parentName:"p"},"Raspberry Pi")," via the 40 Pin GPIO"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3."),"  Plug the ",(0,n.kt)("em",{parentName:"p"},"earphone")," into the ",(0,n.kt)("em",{parentName:"p"},"3.5mm headset audio jack")," or plug the ",(0,n.kt)("em",{parentName:"p"},"speaker")," into the ",(0,n.kt)("em",{parentName:"p"},"JST 2.0 speaker jack")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 4."),"  Connect the ",(0,n.kt)("em",{parentName:"p"},"Raspberry Pi")," with the ",(0,n.kt)("em",{parentName:"p"},"PC")," via the micro-USB cable"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/4-mic.jpg",alt:"Pics here"})),(0,n.kt)("h3",{id:"software"},"Software"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1. Install seeed-voicecard")),(0,n.kt)("p",null,"Get the seeed voice card source code. and install all linux kernel drivers."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo apt-get update\ngit clone https://github.com/respeaker/seeed-voicecard.git\ncd seeed-voicecard\nsudo ./install.sh  \nsudo reboot\n\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2. Check the Sound Card")),(0,n.kt)("p",null,"Tap the command below to check the record device."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pi@raspberrypi:~ $ arecord -L\n")),(0,n.kt)("p",null,"It should be like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pi@raspberrypi:~ $ arecord -L\nnull\n    Discard all samples (playback) or generate zero samples (capture)\ndefault\n    Playback/recording through the PulseAudio sound server\nac108\ndmixer\nac101\nsysdefault:CARD=seeed8micvoicec\n    seeed-8mic-voicecard, \n    Default Audio Device\ndmix:CARD=seeed8micvoicec,DEV=0\n    seeed-8mic-voicecard, \n    Direct sample mixing device\ndsnoop:CARD=seeed8micvoicec,DEV=0\n    seeed-8mic-voicecard, \n    Direct sample snooping device\nhw:CARD=seeed8micvoicec,DEV=0\n    seeed-8mic-voicecard, \n    Direct hardware device without any conversions\nplughw:CARD=seeed8micvoicec,DEV=0\n    seeed-8mic-voicecard, \n    Hardware device with all software conversions\n")),(0,n.kt)("p",null,"Use the following command to check the play device."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pi@raspberrypi:~ $ aplay -L\n")),(0,n.kt)("p",null,"It should be like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pi@raspberrypi:~ $ aplay -L\nnull\n    Discard all samples (playback) or generate zero samples (capture)\ndefault\n    Playback/recording through the PulseAudio sound server\nac108\ndmixer\nac101\nsysdefault:CARD=ALSA\n    bcm2835 ALSA, bcm2835 ALSA\n    Default Audio Device\ndmix:CARD=ALSA,DEV=0\n    bcm2835 ALSA, bcm2835 ALSA\n    Direct sample mixing device\ndmix:CARD=ALSA,DEV=1\n    bcm2835 ALSA, bcm2835 IEC958/HDMI\n    Direct sample mixing device\ndsnoop:CARD=ALSA,DEV=0\n    bcm2835 ALSA, bcm2835 ALSA\n    Direct sample snooping device\ndsnoop:CARD=ALSA,DEV=1\n    bcm2835 ALSA, bcm2835 IEC958/HDMI\n    Direct sample snooping device\nhw:CARD=ALSA,DEV=0\n    bcm2835 ALSA, bcm2835 ALSA\n    Direct hardware device without any conversions\nhw:CARD=ALSA,DEV=1\n    bcm2835 ALSA, bcm2835 IEC958/HDMI\n    Direct hardware device without any conversions\nplughw:CARD=ALSA,DEV=0\n    bcm2835 ALSA, bcm2835 ALSA\n    Hardware device with all software conversions\nplughw:CARD=ALSA,DEV=1\n    bcm2835 ALSA, bcm2835 IEC958/HDMI\n    Hardware device with all software conversions\nsysdefault:CARD=seeed8micvoicec\n    seeed-8mic-voicecard, \n    Default Audio Device\ndmix:CARD=seeed8micvoicec,DEV=0\n    seeed-8mic-voicecard, \n    Direct sample mixing device\ndsnoop:CARD=seeed8micvoicec,DEV=0\n    seeed-8mic-voicecard, \n    Direct sample snooping device\nhw:CARD=seeed8micvoicec,DEV=0\n    seeed-8mic-voicecard, \n    Direct hardware device without any conversions\nplughw:CARD=seeed8micvoicec,DEV=0\n    seeed-8mic-voicecard, \n    Hardware device with all software conversions\n\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3. Record and Play")),(0,n.kt)("p",null,"You can record then play, or you can record and play at the same time."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"#It will capture sound on AC108 and save as a.wav\narecord -Dac108 -f S32_LE -r 16000 -c 8 a.wav\n#Take care of that the captured mic audio is on the first 6 channels\n\n#It will play sound file a.wav on AC101\naplay -D ac101 a.wav\n#Do not use -D plughw:1,0 directly except your wave file is single channel only.\n\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Limit for developer using 4-Mic Linear Array Kit doing capture & playback the same time:"),(0,n.kt)("p",{parentName:"admonition"},"-1. capture must be start first, or else the capture channels will possibly be disorder."),(0,n.kt)("p",{parentName:"admonition"},"-2. playback output channels must fill with 8 same channels data or 4 same stereo channels data, or else the speaker or headphone will output nothing possibly."),(0,n.kt)("p",{parentName:"admonition"},"-3. If you want to play and record at the same time, the aplay music file must be mono, or you can not use this command to play.")),(0,n.kt)("p",null,"Also you can play and record with Audacity."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    You should open Audacity via VNC or you can just use a monitor to open it\n"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo apt update\nsudo apt install audacity\naudacity                      // run audacity\n\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/audacity.png",alt:null})),(0,n.kt)("h2",{id:"usage-overview"},"Usage overview"),(0,n.kt)("p",null,"To run the following examples, clone ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/respeaker/4mics_hat.git"},"https://github.com/respeaker/4mics_hat.git")," repository to your Raspberry Pi"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git clone https://github.com/respeaker/4mics_hat.git\n")),(0,n.kt)("p",null,"All the Python scripts, mentioned in the examples below can be found inside this repository. To install the necessary dependencies, from mic_hat repository folder, run"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo apt-get install portaudio19-dev libatlas-base-dev\npip3 install -r requirements.txt\n")),(0,n.kt)("h3",{id:"record-sound-with-python"},"Record sound with Python"),(0,n.kt)("p",null,"We use ",(0,n.kt)("a",{parentName:"p",href:"https://people.csail.mit.edu/hubert/pyaudio/"},"PyAudio python library")," to record sound with Python."),(0,n.kt)("p",null,"First, run the following script to get the device index number of 2 Mic pi hat:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"python3 recording_examples/get_device_index.py\n")),(0,n.kt)("p",null,"You will see the device ID as below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Input Device id  2  -  seeed-8mic-voicecard: - (hw:1,0)\n")),(0,n.kt)("p",null,"To record the sound, open ",(0,n.kt)("inlineCode",{parentName:"p"},"recording_examples/record.py")," file with nano or other text editor and change  ",(0,n.kt)("inlineCode",{parentName:"p"},"RESPEAKER_INDEX = 2")," to index number of ReSpeaker on your system. Then run python script record.py to make a recording:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"python3 recording_examples/record.py\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 6. If you want to extract channel 0 data from 8 channels, have a look at the content of ",(0,n.kt)("inlineCode",{parentName:"li"},"record_one_channel.py"),". For other channel X, please change ","[0::8]"," to ","[X::8]",".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"python3 recording_examples/record_one_channel.py\n")),(0,n.kt)("p",null,"To play the recorded samples you can either use aplay system utility, for example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"aplay -f cd -Dhw:0 output.wav #for Stereo sound\naplay -D plughw:0,0 output_one_channel.wav #for Mono sound from one channel\n")),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q1: There are only 4 Mic in the Mic Array, how could it be 8 channels?")),(0,n.kt)("p",null,"A1: There are 2 AC108 in this array, and each AC108 chip has 4 channel output. So it comes a total of 8 channels here, 4 of which are for the microphone, two channels for the playback and the the rest 2 channels are not used."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q2: If Raspberry can detect ReSpeaker 2-mics hat, but can't detect ReSpeaker 4-mics linear array?")),(0,n.kt)("p",null,"A2: Please click raspberry -> Preferences -> Raspberry Pi Configuration, then select the Interfaces tab, make sure the 1-Wire is Disabled."),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC101_User_Manual_v1.1.pdf"},"AC101 Datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC108_Datasheet_V1.2.pdf"},"AC108 Datesheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Driver]")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/respeaker/seeed-voicecard"},"Seeed-Voice Driver")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Algorithms]")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/respeaker/mic_array"},"Algorithms includes DOA, VAD, NS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Voice Engine")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/voice-engine/voice-engine"},"Voice Engine project, provides building blocks to create voice enabled objects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Algorithms]")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/voice-engine/ec"},"AEC")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Mechanical Drawing]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/res/2d.zip"},"2D Drawing"))),(0,n.kt)("h2",{id:"projects"},"Projects"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.hackster.io/SeeedStudio/mojing-mojing-a-smart-mirror-with-respeaker-e1ae20"},"Mojing Mojing - A Smart Mirror with ReSpeaker!"),": A smart mirror with voice interface control via ReSpeaker. We also connect with Wio Link to control other objects! Based on Raspberry Pi."),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);