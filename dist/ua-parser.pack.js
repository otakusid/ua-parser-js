/**
 * UAParser.js v0.7.9
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2015 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */(function(e,t){"use strict";var n="0.7.9",r="",i="?",s="function",o="undefined",u="object",a="string",f="major",l="model",c="name",h="type",p="vendor",d="version",v="architecture",m="console",g="mobile",y="tablet",b="smarttv",w="wearable",E="embedded",S={extend:function(e,t){for(var n in t)"browser cpu device engine os".indexOf(n)!==-1&&t[n].length%2===0&&(e[n]=t[n].concat(e[n]));return e},has:function(e,t){return typeof e=="string"?t.toLowerCase().indexOf(e.toLowerCase())!==-1:!1},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===a?e.split(".")[0]:t}},x={rgx:function(){var e,n=0,r,i,a,f,l,c,h=arguments;while(n<h.length&&!l){var p=h[n],d=h[n+1];if(typeof e===o){e={};for(a in d)f=d[a],typeof f===u?e[f[0]]=t:e[f]=t}r=i=0;while(r<p.length&&!l){l=p[r++].exec(this.getUA());if(!!l)for(a=0;a<d.length;a++)c=l[++i],f=d[a],typeof f===u&&f.length>0?f.length==2?typeof f[1]==s?e[f[0]]=f[1].call(this,c):e[f[0]]=f[1]:f.length==3?typeof f[1]===s&&(!f[1].exec||!f[1].test)?e[f[0]]=c?f[1].call(this,c,f[2]):t:e[f[0]]=c?c.replace(f[1],f[2]):t:f.length==4&&(e[f[0]]=c?f[3].call(this,c.replace(f[1],f[2])):t):e[f]=c?c:t}n+=2}return e},str:function(e,n){for(var r in n)if(typeof n[r]===u&&n[r].length>0){for(var s=0;s<n[r].length;s++)if(S.has(n[r][s],e))return r===i?t:r}else if(S.has(n[r],e))return r===i?t:r;return e}},T={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},N={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[c,d],[/\s(opr)\/([\w\.]+)/i],[[c,"Opera"],d],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|phantomjs|iridium)\/([\w\.-]+)/i],[c,d],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[c,"IE"],d],[/(edge)\/((\d+)?[\w\.]+)/i],[c,d],[/(yabrowser)\/([\w\.]+)/i],[[c,"Yandex"],d],[/(comodo_dragon)\/([\w\.]+)/i],[[c,/_/g," "],d],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],[c,d],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/JUC.+(ucweb)[\/\s]?([\w\.]+)/i],[[c,"UCBrowser"],d],[/(dolfin)\/([\w\.]+)/i],[[c,"Dolphin"],d],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[c,"Chrome"],d],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],[d,[c,"MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],[d,[c,"Android Browser"]],[/FBAV\/([\w\.]+);/i],[d,[c,"Facebook"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[d,[c,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[d,c],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[c,[d,x.str,T.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[c,d],[/(navigator|netscape)\/([\w\.-]+)/i],[[c,"Netscape"],d],[/fxios\/([\w\.-]+)/i],[d,[c,"Firefox"]],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[c,d]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[v,"amd64"]],[/(ia32(?=;))/i],[[v,S.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[v,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[v,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[v,/ower/,"",S.lowerize]],[/(sun4\w)[;\)]/i],[[v,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[v,S.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[l,p,[h,y]],[/applecoremedia\/[\w\.]+ \((ipad)/],[l,[p,"Apple"],[h,y]],[/(apple\s{0,1}tv)/i],[[l,"Apple TV"],[p,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[p,l,[h,y]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[l,[p,"Amazon"],[h,y]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[l,x.str,T.device.amazon.model],[p,"Amazon"],[h,g]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[l,p,[h,g]],[/\((ip[honed|\s\w*]+);/i],[l,[p,"Apple"],[h,g]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[p,l,[h,g]],[/\(bb10;\s(\w+)/i],[l,[p,"BlackBerry"],[h,g]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[l,[p,"Asus"],[h,y]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[p,"Sony"],[l,"Xperia Tablet"],[h,y]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[p,"Sony"],[l,"Xperia Phone"],[h,g]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[p,l,[h,m]],[/android.+;\s(shield)\sbuild/i],[l,[p,"Nvidia"],[h,m]],[/(playstation\s[3portablevi]+)/i],[l,[p,"Sony"],[h,m]],[/(sprint\s(\w+))/i],[[p,x.str,T.device.sprint.vendor],[l,x.str,T.device.sprint.model],[h,g]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[p,l,[h,y]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[p,[l,/_/g," "],[h,g]],[/(nexus\s9)/i],[l,[p,"HTC"],[h,y]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[l,[p,"Microsoft"],[h,m]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[p,"Microsoft"],[h,g]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i],[l,[p,"Motorola"],[h,g]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[l,[p,"Motorola"],[h,y]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[p,"Samsung"],l,[h,y]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[p,"Samsung"],l,[h,g]],[/(samsung);smarttv/i],[p,l,[h,b]],[/\(dtv[\);].+(aquos)/i],[l,[p,"Sharp"],[h,b]],[/sie-(\w+)*/i],[l,[p,"Siemens"],[h,g]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[p,"Nokia"],l,[h,g]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[l,[p,"Acer"],[h,y]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[p,"LG"],l,[h,y]],[/(lg) netcast\.tv/i],[p,l,[h,b]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[l,[p,"LG"],[h,g]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[l,[p,"Lenovo"],[h,y]],[/linux;.+((jolla));/i],[p,l,[h,g]],[/((pebble))app\/[\d\.]+\s/i],[p,l,[h,w]],[/android.+;\s(glass)\s\d/i],[l,[p,"Google"],[h,w]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],[[l,/_/g," "],[p,"Xiaomi"],[h,g]],[/(SM-G920.)/i],[[l,"Galaxy S6"],[p,"Samsung"],[h,g]],[/(SM-G925.)/i],[[l,"Galaxy S6 Edge"],[p,"Samsung"],[h,g]],[/A0001\sBuild\/LRX22G/i],[[l,"One"],[p,"OnePlus"],[h,g]],[/Elephone\s(\w+)\sBuild/i],[l,[p,"Elephone"],[h,g]],[/iris700/i],[[l,"LAVA T 4.5"],[p,"AIS"],[h,g]],[/iris708/i],[[l,"Super Combo 4.5"],[p,"AIS"],[h,g]],[/iris800/i],[[l,"LAVA 5.0"],[p,"AIS"],[h,g]],[/iris500/i],[[l,"LAVA G4.0"],[p,"AIS"],[h,g]],[/iris510/i],[[l,"LAVA 4.0"],[p,"AIS"],[h,g]],[/iris353/i],[[l,"LAVA B3.5"],[p,"AIS"],[h,g]],[/iris360/i],[[l,"LAVA Iris 360 Music"],[p,"AIS"],[h,g]],[/true\ssmart\s5\.0\sSlim/i],[[l,"Smart 5.0 Slim"],[p,"True"],[h,g]],[/true\ssmart\s4\.0/i],[[l,"Smart 4.0"],[p,"True"],[h,g]],[/true\ssmart\s3\.5/i],[[l,"Smart 3.5"],[p,"True"],[h,g]],[/(mobile|tablet);.+rv\:.+gecko\//i],[[h,S.lowerize],p,l],[/(C6603)/i],[[l,"Xperia Z C6603"],[p,"Sony"],[h,g]],[/(C6903)/i],[[l,"Xperia Z 1"],[p,"Sony"],[h,g]],[/(SM-G900.)/i],[[l,"Galaxy S5"],[p,"Samsung"],[h,g]],[/(SM-G7102)/i],[[l,"Galaxy Grand 2"],[p,"Samsung"],[h,g]],[/(SM-G530[F|H])/i],[[l,"Galaxy Grand Prime"],[p,"Samsung"],[h,g]],[/(SM-G313HZ)/i],[[l,"Galaxy V"],[p,"Samsung"],[h,g]],[/(SM-T805)/i],[[l,"Galaxy Tab S 10.5"],[p,"Samsung"],[h,y]],[/(SM-G800F)/i],[[l,"Galaxy S5 Mini"],[p,"Samsung"],[h,g]],[/(SM-N910)/i],[[l,"Galaxy Note 4"],[p,"Samsung"],[h,g]],[/(SM-T311)/i],[[l,"Galaxy Tab 3 8.0"],[p,"Samsung"],[h,y]],[/(SM-A700(\w+)\sBuild)/i],[[l,"Galaxy A7"],[p,"Samsung"],[h,g]],[/(SM-G850.)/i],[[l,"Galaxy Alpha"],[p,"Samsung"],[h,g]],[/(SM-G360(\w+)\sBuild)/i],[[l,"Galaxy Core Prime"],[p,"Samsung"],[h,g]],[/(SM-G355.)/i],[[l,"Galaxy Core 2"],[p,"Samsung"],[h,g]],[/(SM-E500.)/i],[[l,"Galaxy E5"],[p,"Samsung"],[h,g]],[/(SM-A500.)/i],[[l,"Galaxy A5"],[p,"Samsung"],[h,g]],[/(SM-A300(\w+)\sBuild)/i],[[l,"Galaxy A3"],[p,"Samsung"],[h,g]],[/(Nexus\s6\sBuild)/i],[[l,"Nexus 6"],[p,"Google"],[h,g]],[/(GM\sDiscovery\sII\sBuild)/i],[[l,"Discovery II"],[p,"General Mobile"],[h,g]],[/(R1001)/i],[l,[p,"OPPO"],[h,g]],[/(X9006)/i],[[l,"Find 7a"],[p,"Oppo"],[h,g]],[/(R2001)/i],[[l,"Yoyo R2001"],[p,"Oppo"],[h,g]],[/(R815)/i],[[l,"Clover R815"],[p,"Oppo"],[h,g]],[/(R831K)/i],[[l,"Neo 3"],[p,"Oppo"],[h,g]],[/(U707)/i],[[l,"Find Way S"],[p,"Oppo"],[h,g]],[/(N5111)/i],[[l,"N1 mini"],[p,"Oppo"],[h,g]],[/(T3C)/i],[l,[p,"Advan"],[h,y]],[/(ADVAN T1J\+)/i],[[l,"Vandroid T1J+"],[p,"Advan"],[h,y]],[/(ADVAN S4A)/i],[[l,"Vandroid S4A"],[p,"Advan"],[h,g]],[/(V972M)/i],[l,[p,"ZTE"],[h,g]],[/(i-mobile)\s(IQ\s[\d\.]+)/i],[p,l,[h,g]],[/(IQ6.3)/i],[[l,"IQ 6.3"],[p,"i-mobile"],[h,g]],[/(i-mobile)\s(i-style\s[\d\.]+)/i],[p,l,[h,g]],[/(i-STYLE2.1)/i],[[l,"i-STYLE 2.1"],[p,"i-mobile"],[h,g]],[/(mobiistar touch LAI 512)/i],[[l,"Touch LAI 512"],[p,"mobiistar"],[h,g]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[d,[c,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[c,d],[/rv\:([\w\.]+).*(gecko)/i],[d,c]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[c,d],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[c,[d,x.str,T.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[c,"Windows"],[d,x.str,T.os.windows.version]],[/\((bb)(10);/i],[[c,"BlackBerry"],d],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[c,d],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[c,"Symbian"],d],[/\((series40);/i],[c],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[c,"Firefox OS"],d],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[c,d],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[c,"Chromium OS"],d],[/(sunos)\s?([\w\.]+\d)*/i],[[c,"Solaris"],d],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[c,d],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[c,"iOS"],[d,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[c,"Mac OS"],[d,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[c,d]]},C=function(t,n){if(this instanceof C){var i=t||(e&&e.navigator&&e.navigator.userAgent?e.navigator.userAgent:r),s=n?S.extend(N,n):N;return this.getBrowser=function(){var e=x.rgx.apply(this,s.browser);return e.major=S.major(e.version),e},this.getCPU=function(){return x.rgx.apply(this,s.cpu)},this.getDevice=function(){return x.rgx.apply(this,s.device)},this.getEngine=function(){return x.rgx.apply(this,s.engine)},this.getOS=function(){return x.rgx.apply(this,s.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(e){return i=e,this},this.setUA(i),this}return(new C(t,n)).getResult()};C.VERSION=n,C.BROWSER={NAME:c,MAJOR:f,VERSION:d},C.CPU={ARCHITECTURE:v},C.DEVICE={MODEL:l,VENDOR:p,TYPE:h,CONSOLE:m,MOBILE:g,SMARTTV:b,TABLET:y,WEARABLE:w,EMBEDDED:E},C.ENGINE={NAME:c,VERSION:d},C.OS={NAME:c,VERSION:d},typeof exports!==o?(typeof module!==o&&module.exports&&(exports=module.exports=C),exports.UAParser=C):typeof define===s&&define.amd?define(function(){return C}):e.UAParser=C;var k=e.jQuery||e.Zepto;if(typeof k!==o){var L=new C;k.ua=L.getResult(),k.ua.get=function(){return L.getUA()},k.ua.set=function(e){L.setUA(e);var t=L.getResult();for(var n in t)k.ua[n]=t[n]}}})(typeof window=="object"?window:this);