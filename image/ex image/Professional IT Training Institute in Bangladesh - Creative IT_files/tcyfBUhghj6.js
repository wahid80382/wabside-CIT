;/*FB_PKG_DELIM*/

__d("PluginLoginButtonEventsTypedLogger",["Banzai","GeneratedLoggerUtils"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:PluginLoginButtonEventsLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:PluginLoginButtonEventsLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:PluginLoginButtonEventsLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAppID=function(a){this.$1.app_id=a;return this};c.setAutoLogoutLink=function(a){this.$1.auto_logout_link=a;return this};c.setButtonType=function(a){this.$1.button_type=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setIsContinueAsToggled=function(a){this.$1.is_continue_as_toggled=a;return this};c.setIsLegacy=function(a){this.$1.is_legacy=a;return this};c.setIsTosed=function(a){this.$1.is_tosed=a;return this};c.setLayout=function(a){this.$1.layout=a;return this};c.setLoggerID=function(a){this.$1.logger_id=a;return this};c.setShowFaces=function(a){this.$1.show_faces=a;return this};c.setSize=function(a){this.$1.size=a;return this};c.setUseContinueAs=function(a){this.$1.use_continue_as=a;return this};c.setWidth=function(a){this.$1.width=a;return this};return a}();c={app_id:!0,auto_logout_link:!0,button_type:!0,event:!0,is_continue_as_toggled:!0,is_legacy:!0,is_tosed:!0,layout:!0,logger_id:!0,show_faces:!0,size:!0,use_continue_as:!0,width:!0};f["default"]=a}),66);
__d("QPLE2ESessionMarkers",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({NONE:"none",START:"start",END:"end"});c=a;f["default"]=c}),66);
__d("PerfFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744178");b=d("FalcoLoggerInternal").create("perf",a);e=b;g["default"]=e}),98);
__d("CurrentLocale",["IntlCurrentLocale"],(function(a,b,c,d,e,f,g){a={get:function(){return c("IntlCurrentLocale").code}};b=a;g["default"]=b}),98);
__d("PerfXSharedFields",["CurrentLocale","Locale","SiteData"],(function(a,b,c,d,e,f,g){var h=typeof window!=="undefined"?window:self,i={addCommonValues:function(a){var b=h==null?void 0:h.navigator;try{b&&b.hardwareConcurrency!==void 0&&(a.num_cores=b.hardwareConcurrency),b&&b.deviceMemory&&(a.ram_gb=b.deviceMemory),b&&b.connection&&(typeof b.connection.downlink==="number"&&(a.downlink_megabits=b.connection.downlink),typeof b.connection.effectiveType==="string"&&(a.effective_connection_type=b.connection.effectiveType),typeof b.connection.rtt==="number"&&(a.rtt_ms=b.connection.rtt))}catch(a){if(a.message!=="can't access dead object")throw a}a.client_push_phase=c("SiteData").push_phase;a.client_revision=c("SiteData").client_revision;c("SiteData").server_revision!=null&&(a.server_revision=c("SiteData").server_revision);a.locale=c("CurrentLocale").get();a.isRTL=Number(c("Locale").isRTL());return a},getCommonData:function(){var a={};i.addCommonValues(a);return a}};a=i;g["default"]=a}),98);
__d("QPLEvent",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.i}function b(a){return(a=a.r)!=null?a:0}function c(a){return(a=a.m)!=null?a:1}f.getMarkerId=a;f.getSampleRate=b;f.getSamplingMethod=c}),66);
__d("QPLTimestamp",[],(function(a,b,c,d,e,f){"use strict";function g(a){if(a===0)return"0";a=a.toFixed(6).split(".",2);var b=a[0];a=a[1];return b==="0"?a.replace(/^0+/,""):b+a}function a(a,b){b=b-a;return g(b)}f.timestampToSerializedNanoseconds=g;f.calculateDurationAsNanoseconds=a}),66);
__d("crc32",[],(function(a,b,c,d,e,f){function b(a){var b=-1;for(var c=0,d=a.length;c<d;c++)b=b>>>8^g[(b^a.charCodeAt(c))&255];return~b}var g=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];a.Int32Array!==void 0&&(g=new Int32Array(g));f["default"]=b}),66);
__d("QPLUtils",["crc32"],(function(a,b,c,d,e,f,g){"use strict";function h(a){return c("crc32")(a)>>>0}function a(a){return a!=null?h(a):0}g.unsignedCrc32=h;g.deriveInstanceKey=a}),98);
__d("QuickPerformanceLoggerTypes",[],(function(a,b,c,d,e,f){"use strict";a=1;b=3;f.EVENT_BASED_SAMPLING=a;f.USER_BASED_SAMPLING=b}),66);
__d("QPLCore",["QPLEvent","QPLTimestamp","QPLUtils","QuickPerformanceLoggerTypes","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";function h(a,b,c,d){var e=b[a];if(!e||Object.entries(e).length===0)return null;var f={};Object.keys(e).forEach(function(a){var b=e[a];b==null||b.length===0?delete e[a]:d?f[a]=d(b):f[a]=b});return b={},b[a]=babelHelpers["extends"]({},c&&c[a],f),b}function i(a,b){if(a==null)return b;var c=babelHelpers["extends"]({},b,h("string",a,b),h("int",a,b,Math.trunc),h("double",a,b),h("bool",a,b),h("string_array",a,b),h("int_array",a,b,function(a){return a.map(Math.trunc)}),h("double_array",a,b),h("bool_array",a,b));Object.keys(c).forEach(function(a){var b=c[a];(b==null||Object.entries(b).length===0)&&delete c[a]});return Object.entries(c).length!==0?c:null}function j(a,b){var c={};b.trackedForLoss===!0&&(c.tracked_for_loss=!0);typeof b.absoluteTimeOrigin==="number"&&(c.absolute_time_origin_ns=d("QPLTimestamp").timestampToSerializedNanoseconds(b.absoluteTimeOrigin));b=babelHelpers["extends"]({},a,c);return b}function k(a,b){if(!b)return a;var c={};b.string&&(c.annotations=b.string);b["int"]&&(c.annotations_int=b["int"]);b["double"]&&(c.annotations_double=b["double"]);b.bool&&(c.annotations_bool=b.bool);b.string_array&&(c.annotations_string_array=b.string_array);b.int_array&&(c.annotations_int_array=b.int_array);b.double_array&&(c.annotations_double_array=b.double_array);b.bool_array&&(c.annotations_bool_array=b.bool_array);return babelHelpers["extends"]({},a,c)}var l=new Map([[d("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING,"random_sampling"],[d("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING,"per_user"]]);function m(a,b){if(a===0)return!1;if(a<=1)return!0;return typeof b==="string"?d("QPLUtils").unsignedCrc32(b)%a===0:Math.random()*a<=1}a=function(){function a(a){this.$2=1;this.$3=100;this.$4=new Map();this.$5=new Map();this.$6=null;this.$8=new Map();this.activeMarkers=new Map();this.$1=a;this.$7=a.logger;this.$5=(a=a.listenersWithMarker)!=null?a:new Map();this.$9=new Map()}var b=a.prototype;b.getMarker=function(a,b){a=this.$10(d("QPLEvent").getMarkerId(a));if(!a)return null;a=a.get(b);return!a?null:a};b.$10=function(a){return this.activeMarkers.get(a)};b.addMarker=function(a,b,c){var d=this.activeMarkers.get(a);d||(d=new Map(),this.activeMarkers.set(a,d));d.set(b,c)};b.deleteMarker=function(a,b){(a=this.activeMarkers.get(a))==null?void 0:a["delete"](b)};b.markerStart=function(a,b,c,e){b===void 0&&(b=0);c===void 0&&(c=this.currentTimestamp());e=e===void 0?{}:e;var f=e.cancelExisting;f=f===void 0?!1:f;var g=e.cancelOnUnload;g=g===void 0?!1:g;var h=e.trackedForLoss;h=h===void 0?!1:h;var i=e.type;i=i===void 0?1:i;var j=e.samplingBasis;j=j===void 0?null:j;var k=e.qplInternalDoNotUseAbsoluteTimeOrigin;e=e.timeoutMS;e=e===void 0?null:e;var l=this.getMarker(a,b);if(l){l=Math.round(c-l.timestamp);f&&(this.markerAnnotate(a,{string:{cancel_type:"DUPLICATE_EVENT"},"int":{time_between_markers_ms:l}},{instanceKey:b}),this.markerEnd(a,4,b,c))}f=this.$11(a,j);l=f[0];j=f[1];f=f[2];var m={event:a,passesSampling:l,timestamp:c,sampleRate:j,samplingMethod:f,points:[],cancelOnUnload:g,trackedForLoss:h,type:i};typeof k==="number"&&(m.absoluteTimeOrigin=k);this.$4.forEach(function(d){d.onMarkerStart&&d.onMarkerStart(a,b,c)});this.$5.forEach(function(d){d.onMarkerStartWithMarker(a,b,c,m)});l&&(this.addMarker(d("QPLEvent").getMarkerId(a),b,m),e!=null&&this.$12(a,b,e));l&&h===!0&&this.$13({marker_id:27787271,action_id:0,sample_rate:1,annotations_int:{tracked_marker_id:d("QPLEvent").getMarkerId(a)},marker_type:1});l&&this.$4.forEach(function(d){d.onMarkerStarted&&d.onMarkerStarted(a,b,c)})};b.$14=function(a,b){var c=this.$9.get(a);c==null?void 0:c["delete"](b);(c==null?void 0:c.size)===0&&this.$9["delete"](a)};b.$15=function(a,b,c){this.$9.has(a)||this.$9.set(a,new Map());a=this.$9.get(a);a==null?void 0:a.set(b,c)};b.$16=function(a,b){var c,d;c=(c=this.$9.get(a))==null?void 0:c.get(b);if(!c)return;if(!((d=this.$1.runtimeAbstractionLayer)==null?void 0:d.clearTimeout))return;this.$1.runtimeAbstractionLayer.clearTimeout(c);this.$14(a,b)};b.$12=function(a,b,c){var e,f=this,g=d("QPLEvent").getMarkerId(a);this.$16(g,b);if(!((e=this.$1.runtimeAbstractionLayer)==null?void 0:e.setTimeout))return;e=(e=this.$1.runtimeAbstractionLayer)==null?void 0:e.setTimeout(function(){f.$4.forEach(function(c){c.onTimeoutEvent!=null&&c.onTimeoutEvent({event:a,instanceKey:b})}),f.$14(g,b),f.markerEnd(a,113,b)},c);this.$15(g,b,e)};b.markerAnnotate=function(a,b,c){c=c===void 0?{}:c;c=c.instanceKey;var d=c===void 0?0:c;this.$4.forEach(function(c){Object.keys(b).forEach(function(e){var f=b[e];if(!f)return;Object.keys(f).forEach(function(b){c.onAnnotation&&c.onAnnotation(a,d,b,f[b])})})});c=this.getMarker(a,d);if(!c)return;c.annotations=i(b,c.annotations)};b.markerPoint=function(a,b,c){c=c===void 0?{}:c;var d=c.instanceKey,e=d===void 0?0:d,f=c.data;d=c.timestamp;var g=d===void 0?this.currentTimestamp():d;this.$4.forEach(function(c){c.onMarkerPoint&&c.onMarkerPoint(a,e,b,f,g)});c=this.getMarker(a,e);if(!c)return;d={name:b,timeSinceStart:Math.trunc(g-c.timestamp)};var h=i(f);h&&(d.data=h);c.points.push(d)};b.markerEnd=function(a,b,c,e){c===void 0&&(c=0);e===void 0&&(e=this.currentTimestamp());var f=this.getMarker(a,c);if(!f){this.$4.forEach(function(d){var f={durationMs:0};d.onMarkerEnd&&d.onMarkerEnd(b,a,c,e,f)});return}var g={marker_id:d("QPLEvent").getMarkerId(a),action_id:b,instance_id:c,sample_rate:f.sampleRate,method:l.get(f.samplingMethod),duration_ns:d("QPLTimestamp").calculateDurationAsNanoseconds(f.timestamp,e),points:f.points,metadata:{application_analytics:{time_since_qpl_module_init:e-this.$1.moduleLoadTimestamp}},marker_type:f.type,flags:1,unique_marker_id_debug_only:f.uniqueMarkerDebugId};g=k(g,f.annotations);var h=j(g,f);this.$4.forEach(function(d){var g={durationMs:f?e-f.timestamp:0,logData:h};d.onMarkerEnd&&d.onMarkerEnd(b,a,c,e,g)});f.passesSampling&&(f.timestampIsApproximate!==!0&&this.$13(h),this.$6===d("QPLEvent").getMarkerId(a)&&this.$1.onDebuggingIdEnded&&this.$1.onDebuggingIdEnded(),this.$16(d("QPLEvent").getMarkerId(a),c));this.deleteMarker(d("QPLEvent").getMarkerId(a),c)};b.markerDrop=function(a,b){b===void 0&&(b=0);this.deleteMarker(d("QPLEvent").getMarkerId(a),b);var c=this.currentTimestamp();this.$4.forEach(function(d){d.onMarkerDrop&&d.onMarkerDrop(a,b,c)})};b.markEvent=function(a,b,c,e){e=e===void 0?{}:e;var f=e.timestamp,g=f===void 0?this.currentTimestamp():f,h=e.annotations;this.$4.forEach(function(b){b.onMarkEvent&&b.onMarkEvent({event:a,timestamp:g,annotations:h})});if((f=this.$1.quickLogConfigHelper)==null?void 0:f.isKillswitchOn())return;e=this.$11(a);f=e[0];var j=e[1];e=e[2];if(!f)return;f=i(typeof h==="function"?h():h);j={marker_id:d("QPLEvent").getMarkerId(a),action_id:0,instance_id:0,sample_rate:j,method:l.get(e),da_type:b,da_level:c,metadata:{application_analytics:{time_since_qpl_module_init:g-this.$1.moduleLoadTimestamp}},marker_type:1,flags:1};this.$13(k(j,f))};b.dropAllMarkers=function(){this.activeMarkers.clear()};b.setAlwaysOnSampleRate=function(a,b){this.$8.set(a,b)};b.setDefaultSampleRate=function(a){this.$3=a};b.currentTimestamp=function(){return this.$1.performanceNow()};b.enableDebug=function(a){this.$6=a};b.disableDebug=function(){this.$6=null};b.addListener=function(a){var b=this,c=this.$2++;this.$4.set(c,a);return{dispose:function(){b.$4["delete"](c)}}};b.$11=function(a,b){if(this.$1.unsampleAllEvents&&this.$1.unsampleAllEvents()||this.$6===d("QPLEvent").getMarkerId(a))return[!0,1,d("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING];var c=d("QPLEvent").getSampleRate(a),e=d("QPLEvent").getSamplingMethod(a);if(this.$8.get(a)==null&&c!==0&&e===d("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING){var f;return[!0,(f=c)!=null?f:1,d("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING]}f=(a=(f=this.$8.get(a))!=null?f:c)!=null?a:this.$3;a=(c=e)!=null?c:d("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING;e=m(f,b);return[e,f,a]};b.$13=function(a){this.$4.forEach(function(b){b.onUploadEvent&&b.onUploadEvent(a)});var b=this.$1.decorateEventBeforeUpload?this.$1.decorateEventBeforeUpload(a):a;this.$1.sendEvent(a,b)};b.getActiveMarkerIds=function(a){var b=a.type,c=new Set();this.activeMarkers.forEach(function(a,d){a.forEach(function(a){if(a.type===b){c.add(d);return}})});return Array.from(c)};b.forEachMarkerInstance=function(a,b){a=this.$10(a);if(!a)return;for(var a=a.entries(),c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;var f=e[0];e=e[1];b(f,e.event)}};b.getMarkerStartTs=function(a,b){b=b===void 0?{}:b;b=b.instanceKey;b=b===void 0?0:b;a=this.getMarker(a,b);if(!a)return;return a.timestamp};b.markerLogDebugPoints=function(a,b){b=b===void 0?{}:b;b=b.instanceKey;b=b===void 0?0:b;var e=d("QPLEvent").getMarkerId(a);e=this.getMarker(a,b);if(!e)return;a=c("uuidv4")();e.uniqueMarkerDebugId=a};return a}();a.normalizeAnnotations=i;g["default"]=a}),98);
__d("USIDFlag",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({HTTP_HEADER_SESSION:"HH",LOCAL_STORAGE_FAILURE:"LSF",SERVER_GENERATED_SESSION:"SGS",SERVER_PARSE_FAILURE:"SPF",SESSION_STORAGE_FAILURE:"SSF",UNKNOWN_VERSION_FAILURE:"UVF",UNKOWN_DATA_FAILURE:"UDF"});c=a;f["default"]=c}),66);
__d("USIDUtils",["Cookie","Random","WebStorage"],(function(a,b,c,d,e,f,g){"use strict";var h=4294967295,i=36,j="usidt",k="usida",l=1,m=6;function a(){var a=[];c("WebStorage").isLocalStorageQuotaExceeded()&&a.push("LSF");c("WebStorage").isSessionStorageQuotaExceeded()&&a.push("SSF");return a}function n(a){var b=Math.floor(Date.now()/1e3),c=Math.floor(d("Random").random()*h);a=a+Number(b&h).toString(i)+c.toString(i);return a}function o(a,b,c){if(a==null)return{ver:l,id:n(c)};a=a.getItem(b);if(a==null)return{ver:l,id:n(c)};b=JSON.parse(a);return b.ver!==l?{ver:l,id:n(c)}:b}function p(a,b,d){if(a==null)return;c("WebStorage").setItemGuarded(a,b,JSON.stringify(d))}function q(a,b){if(c("Cookie")==null)return{ver:l,id:n(b)};a=c("Cookie").get(a);if(a==null||a=="")return{ver:l,id:n(b)};var d;try{d=JSON.parse(a)}catch(b){d=JSON.parse(atob(a))}return d.ver!==l?{ver:l,id:n(b)}:d}function r(a,b){if(c("Cookie")==null)return;c("Cookie").set(a,btoa(JSON.stringify(b)))}function b(){var a=o(c("WebStorage").getSessionStorageForRead(),j,"T");return a.id}function e(a){p(c("WebStorage").getSessionStorage(),j,{ver:l,id:a})}function s(){var a,b=q(k,"A");return{id:b.id,time:(a=b.time)!=null?a:0,startTime:(a=b.startTime)!=null?a:0}}function f(a){r(k,{ver:l,id:a.id,time:a.time});var b=s();return b.id===a.id&&b.time===a.time}g.VERSION=m;g.getFlags=a;g.generateId=n;g.getExistingTabId=b;g.writeTabId=e;g.getExistingActivityInfo=s;g.writeActivityInfo=f}),98);
__d("USIDCore",["DateConsts","USIDUtils","asyncParams"],(function(a,b,c,d,e,f,g){"use strict";var h=30,i=d("DateConsts").MIN_PER_HOUR*5,j=2,k="__usid";function l(){return Math.floor(Date.now()/d("DateConsts").MS_PER_SEC)}a=function(){function a(a,b,c,e,f,g){this.$1=a;this.$2=b;this.$3=c;this.$8=e;this.$9=f;this.$4=g.activityTrigger;this.$5=((b=g.activityTimeoutInMin)!=null?b:h)*60;this.$6=((c=g.activityMaxTimeInMin)!=null?c:i)*60;this.$7=((e=g.activityCacheTimeoutInMin)!=null?e:j)*60;this.$10=0;d("USIDUtils").writeTabId(a);this.triggerActivity()}var b=a.prototype;b.getFlags=function(){return this.$9};b.getRequestVersion=function(){return this.$8};b.getSessionVersion=function(){return d("USIDUtils").VERSION};b.getTabId=function(){return this.$1};b.getPageId=function(){return this.$2};b.getTransitionId=function(){return this.$3};b.getActivityId=function(){var a=this.$11();return a.id};b.getActivityTimeOut=function(){var a=d("USIDUtils").getExistingActivityInfo(),b=l();return this.$5-(b-a.time)};b.getActivityMaxTime=function(){var a=d("USIDUtils").getExistingActivityInfo(),b=l();return this.$6-(b-a.startTime)};b.getSessionID=function(){return this.getTabId()+":"+this.getPageId()+":"+this.getTransitionId()+"-"+this.getActivityId()};b.serializeForRequest=function(){this.$4==="request"&&this.triggerActivity();return this.$12()};b.$12=function(){var a=this.getSessionVersion(),b=this.getSessionID(),c=this.getRequestVersion(),d=this.getFlags().join(",");return a+"-"+b+"-RV="+c+":F="+d};b.contextData=function(){return{usid_override:""}};b.$11=function(){var a=d("USIDUtils").getExistingActivityInfo(),b=this.$13(a);b&&this.$14(a);return a};b.$14=function(a){a=d("USIDUtils").writeActivityInfo(a);a&&d("asyncParams").add(k,this.$12())};b.$13=function(a){var b=l();if(b-a.time>this.$5){a.id=d("USIDUtils").generateId("A");a.time=b;a.startTime=b;return!0}return!1};b.triggerActivity=function(){var a=l();if(a-this.$10>this.$7){var b=this.$11();b.time=a;this.$14(b);this.$10=a}};b.nextTransition=function(){this.triggerActivity(),this.$3++};return a}();g["default"]=a}),98);
__d("USID",["USIDCore","USIDMetadata","USIDUtils"],(function(a,b,c,d,e,f,g){"use strict";var h=null,i=function(a){if(h!=null)return h;var b=d("USIDUtils").getExistingTabId(),e=c("USIDMetadata").page_id,f=c("USIDMetadata").transition_id,g=c("USIDMetadata").version,i=d("USIDUtils").getFlags();h=new(c("USIDCore"))(b,e,f,g,i,a);return h};a=function(){return i({activityTrigger:"request"})};b={init:i,get:a};g["default"]=b}),98);
__d("QuickPerformanceLogger",["Arbiter","Bootloader","Env","FBLogger","PerfFalcoEvent","PerfXSharedFields","Promise","QPLCore","QPLEvent","Run","USID","WebStorage","cr:1984081","cr:686","gkx","performanceAbsoluteNow","performanceNavigationStart","performanceNow"],(function(a,b,c,d,e,f,g){"use strict";var h=typeof window!=="undefined"?window:self;function i(a){var b=c("PerfXSharedFields").getCommonData();b={memory_stats:{total_mem:b.ram_gb!=null?b.ram_gb*1073741824:null},network_stats:{downlink_megabits:b.downlink_megabits,network_subtype:b.effective_connection_type,rtt_ms:b.rtt_ms},sitedata_info:{client_push_phase:b.client_push_phase,client_revision:b.client_revision,server_revision:b.server_revision},locale_info:{locale:b.locale,isRTL:b.isRTL}};c("gkx")("1224637")&&(b.workplace_info={is_gemini:c("gkx")("1217157")});if(c("gkx")("3752")&&typeof h.__sapienzMetadataCallback__==="function"){var d=h.__sapienzMetadataCallback__();b.sapienz={request_id:String(d.requestId),config_name:String(d.configName)}}c("gkx")("4075")&&(b.usid={usid_override:c("USID").get().serializeForRequest()});return babelHelpers["extends"]({},a,{metadata:babelHelpers["extends"]({},a.metadata,b)})}function j(a,b,c){return{i:a,m:c,r:b}}function k(a,d){return new(b("Promise"))(function(){var b=d||a;typeof h.__je2e_recordQPLMarker==="function"&&h.__je2e_recordQPLMarker(b);c("Env").enable_qplinspector===!0&&c("Bootloader").loadModules(["QPLInspector"],function(a){a.appendLog(b)},"QuickPerformanceLogger");c("gkx")("1554827")||c("gkx")("708253")||c("gkx")("3831")?c("PerfFalcoEvent").logImmediately(function(){return b}):c("gkx")("2772")?c("PerfFalcoEvent").logCritical(function(){return b}):c("PerfFalcoEvent").log(function(){return b})})}function l(a){a=babelHelpers["extends"]({},a,{config_type:c("gkx")("8126")?"alpha_beta":"prod"});return i(a)}function m(){return c("Env").enable_qplinspector===!0||typeof h.__je2e_recordQPLMarker==="function"||c("gkx")("1738486")}function n(){c("Arbiter").inform("qpl_debugger_finished")}var o=c("performanceAbsoluteNow")();typeof h.__je2e_felabsTracePlugin_setQplInit==="function"&&h.__je2e_felabsTracePlugin_setQplInit(c("performanceNow")());var p={debug:function(a,b,c){},warn:function(a){c("FBLogger")("qpl").blameToPreviousDirectory().warn(a)}},q="qpl";a=function(a){babelHelpers.inheritsLoose(e,a);function e(){var b;b=a.call(this,{decorateEventBeforeUpload:l,unsampleAllEvents:m,onDebuggingIdEnded:n,performanceNow:c("performanceAbsoluteNow"),moduleLoadTimestamp:o,logger:p,sendEvent:k,runtimeAbstractionLayer:{setTimeout:h.setTimeout,clearTimeout:h.clearTimeout},debugLoggingEnabled:c("Env").qpl_debug_logging})||this;var e=c("gkx")("2772")?c("gkx")("1393")?function(a){return d("Run").onBeforeUnload(a,!1)}:d("Run").onBeforeUnload:d("Run").onUnload;e(function(){b.$QuickPerformanceLogger1(),b.$QuickPerformanceLogger2(706,{respectUnloadPolicy:!0,timestamp:b.currentTimestamp()})});b.$QuickPerformanceLogger3();b.initQplFlipperPlugin();b.initQplSapienzPlugin();return b}var f=e.prototype;f.$QuickPerformanceLogger3=function(){var a=this,b=c("WebStorage").getSessionStorageForRead();if(!b){this.$QuickPerformanceLogger4("_loadSavedState","sessionStorage is not available");return}var d=b.getItem(q);if(d==null)return;b.removeItem(q);b=JSON.parse(d);if(b==null){this.$QuickPerformanceLogger4("_loadSavedState","Saved state failed to deserialize");return}if(b.markers==null||b.markers.length===0){this.$QuickPerformanceLogger4("_loadSavedState","No saved markers found");return}b.markers.forEach(function(b){var c=b[0],d=b[1];b=b[2];a.addMarker(c,d,b);a.$QuickPerformanceLogger4("_loadSavedState","Marker "+c+" (instanceKey: "+d+") resumed")})};f.$QuickPerformanceLogger1=function(){var a=this,b=[];this.activeMarkers.forEach(function(a,c){a.forEach(function(a,d){a.resumeAfterNavigation===!0&&(delete a.resumeAfterNavigation,b.push([c,d,a]))})});if(b.length>0){var d={markers:b},e=c("WebStorage").getSessionStorage();e=c("WebStorage").setItemGuarded(e,q,JSON.stringify(d));e&&(b.forEach(function(b){var c=b[0],d=b[1];b=b[2];c=j(c,b.sampleRate,b.samplingMethod);a.markerEnd(c,96,d)}),this.$QuickPerformanceLogger4("_storeSavedState","Failed to store saved state: "+e.message),c("FBLogger")("qpl").catching(e).warn("Failed to store QPL state: "+JSON.stringify(d,null,2)));b.forEach(function(b){var c=b[0];b=b[1];a.deleteMarker(c,b)})}};f.markerStoreBeforeNavigation=function(a,b){b=b===void 0?{}:b;b=b.instanceKey;b=b===void 0?0:b;var c=d("QPLEvent").getMarkerId(a);a=this.getMarker(a,b);if(!a){this.$QuickPerformanceLogger4("markerStoreBeforeNavigation","Failed to set marker to store on page unload. Could not find marker "+c+", instancekey="+b);return}a.resumeAfterNavigation=!0;this.$QuickPerformanceLogger4("markerStoreBeforeNavigation","Set marker "+c+" to store on page unload, instancekey="+b)};f.markerStartFromNavStart=function(a,b,d){b===void 0&&(b=0);d=d===void 0?{}:d;var e=d.cancelExisting;e=e===void 0?!1:e;var f=d.cancelOnUnload;f=f===void 0?!1:f;var g=d.trackedForLoss;g=g===void 0?!1:g;var h=d.type;h=h===void 0?1:h;d=d.qplInternalDoNotUseConvertToTimeOnServer;var i=c("performanceNavigationStart")();d=typeof d==="function"?d(i):void 0;this.markerStart(a,b,i,{cancelExisting:e,cancelOnUnload:f,trackedForLoss:g,type:h,qplInternalDoNotUseAbsoluteTimeOrigin:d});if(c("performanceNavigationStart").isPolyfilled){i=this.getMarker(a,b);i&&(i.timestampIsApproximate=!0)}};f.$QuickPerformanceLogger2=function(a,b){var c=this;b=b===void 0?{}:b;var d=b.timestamp,e=b.respectUnloadPolicy;this.activeMarkers.forEach(function(b,f){b.forEach(function(b,g){if(!e||b.cancelOnUnload===!0){b=j(f,b.sampleRate,b.samplingMethod);c.markerEnd(b,a,g,d)}})})};f.$QuickPerformanceLogger4=function(a,b,c){p.debug(a,b,c)};f.initQplFlipperPlugin=function(){b("cr:686")!=null&&this.addListener(b("cr:686").qplFlipperPlugin.listener())};f.initQplSapienzPlugin=function(){b("cr:1984081")!=null&&this.addListener(b("cr:1984081").getQplSapienzListener())};return e}(c("QPLCore"));e=new a();f.exports=e}),34);
__d("QPLE2E",["QuickPerformanceLogger"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(){}var b=a.prototype;b.logPoint=function(a,b,d,e){var f,g;e===void 0&&(e={});f=(f=e.timestamp)!=null?f:c("QuickPerformanceLogger").currentTimestamp();var h=babelHelpers["extends"]({},e.pointData);g=(g=e.action)!=null?g:12524;e.secondaryOrder!=void 0&&(h.string||(h.string={}),h.string.qpl_e2e__secondary_order=e.secondaryOrder);if(e.sessionMarker&&e.sessionMarker!=="none"){var i;h.bool||(h.bool={});h.bool=babelHelpers["extends"]({},h.bool,(i={},i.qpl_e2e__session_marker_start_point=e.sessionMarker==="start",i.qpl_e2e__session_marker_end_point=e.sessionMarker==="end",i))}c("QuickPerformanceLogger").markerStart(a,void 0,f,{samplingBasis:d});c("QuickPerformanceLogger").markerPoint(a,b,{data:h,timestamp:f*2});e.annotations&&c("QuickPerformanceLogger").markerAnnotate(a,e.annotations);c("QuickPerformanceLogger").markerAnnotate(a,{string:(i={},i.join_id=d,i.qpl_join__source="client",i),bool:(b={},b.qpl_e2e__align_points=!0,b)});c("QuickPerformanceLogger").markerEnd(a,g,void 0,f)};return a}();b=new a();g["default"]=b}),98);
__d("qpl",["QPLHasteSupportDataStorage","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h={};a={_:function(a,b){var d=h[b];if(d==null){var e=c("QPLHasteSupportDataStorage").get(b);e==null?(c("recoverableViolation")("Failed to find a Haste-supplied config for the QPL event "+("identified by token `"+b+"`."),"staticresources"),d={i:a}):d=babelHelpers["extends"]({i:a},e);h[b]=d}return d}};b=a;g["default"]=b}),98);
__d("PlatformOAuthDialogLoginFunnelLogger",["FBLogger","QPLE2E","URI","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h=1;a=function(a,b,d,e,f,g){e===void 0&&(e=!0);if(null==d||""===d||e&&(null==b||""===b||0===b)){c("FBLogger")("platform_login_web_funnel_client_js").mustfix("\nerror: null_required_field\naction: "+a+"\nloggerId: "+String(d)+"\ncbt: "+String(b)+"\n        ");return}e="number"!==typeof b?parseInt(b,10):b;b=Date.now()-(isNaN(e)?0:e);var l=i(),m=j();l={string:{logger_id:d},"int":{first_paint_time:l,response_start_time:m,cbt_delta:b}};m={"int":{client_funnel_version:h,cbt:e},string:{},bool:{duo_like_passwordless_user:g}};m.string.gdp_type=f;if(a==="client_logged_out_init_impression"){b=k();m.string.login_uri=b}c("QPLE2E").logPoint(c("qpl")._(195562276,"891"),a,d,{pointData:l,annotations:m})};var i=function(){if(l()){var a=window.performance.getEntriesByType("paint").filter(function(a){return"first-paint"===a.name});if(null==a||0<!a.length)return null;a=a[0].startTime+a[0].duration;return a}return null},j=function(){if(l()){var a=window.performance.getEntriesByType("navigation");return null==a||0<!a.length?null:a[0].responseStart}return null},k=function(){return c("URI").getRequestURI().setQueryString("").toString()},l=function(){return window.performance&&typeof window.performance.getEntriesByType==="function"};g.CLIENT_FUNNEL_VERSION=h;g.log=a}),98);
__d("XOAuthErrorController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/oauth/error/",{error_code:{type:"Enum",enumType:1},encrypted_query_string:{type:"String"},display:{type:"Enum",enumType:1}})}),null);
__d("sdk.UA",[],(function(a,b,c,d,e,f){a=navigator.userAgent;var g={iphone:/\b(iPhone|iP[ao]d)/.test(a),ipad:/\b(iP[ao]d)/.test(a),android:/Android/i.test(a),nativeApp:/FBAN\/\w+;/i.test(a)&&!/FBAN\/mLite;/.test(a),nativeAndroidApp:/FB_IAB\/\w+;/i.test(a),nativeInstagramApp:/Instagram/i.test(a),nativeMessengeriOSApp:/MessengerForiOS/i.test(a),nativeMessengerAndroidApp:/Orca\-Android/i.test(a),ucBrowser:/UCBrowser/i.test(a)},h=/Mobile/i.test(a),i={ie:NaN,firefox:NaN,chrome:NaN,webkit:NaN,osx:NaN,edge:NaN,operaMini:NaN,ucWeb:NaN};b=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a);if(b){i.ie=b[1]?parseFloat(b[1]):b[4]?parseFloat(b[4]):NaN;i.firefox=b[2]||"";i.webkit=b[3]||"";if(b[3]){c=/(?:Chrome\/(\d+\.\d+))/.exec(a);i.chrome=c?c[1]:"";d=/(?:Edge\/(\d+\.\d+))/.exec(a);i.edge=d?d[1]:""}}e=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);e&&(i.osx=e[1]);b=/(?:Opera Mini\/(\d+(?:\.\d+)?))/.exec(a);b&&(i.operaMini=b[1]);c=/(?:UCWEB\/(\d+(?:\.\d+))?)/.exec(a);c&&(i.ucWeb=c[1]||"2.0");function j(a){return String(a).split(".").map(function(a){return parseFloat(a)})}var k={};Object.keys(i).map(function(a){var b=function(){return parseFloat(i[a])};b.getVersionParts=function(){return j(i[a])};k[a]=b});Object.keys(g).map(function(a){k[a]=function(){return g[a]}});k.mobile=function(){return g.iphone||g.ipad||g.android||h};k.mTouch=function(){return g.android||g.iphone||g.ipad};k.facebookInAppBrowser=function(){return g.nativeApp||g.nativeAndroidApp};k.inAppBrowser=function(){return g.nativeApp||g.nativeAndroidApp||g.nativeInstagramApp};k.mBasic=function(){return!!(i.ucWeb||i.operaMini)};k.instagram=function(){return g.nativeInstagramApp};k.messenger=function(){return g.nativeMessengeriOSApp||g.nativeMessengerAndroidApp};k.isSupportedIABVersion=function(a){if(!k.facebookInAppBrowser())return!1;var b=/(?:FBAV\/(\d+(\.\d+)+))/.exec(navigator.userAgent);if(b){b=parseFloat(b[1]);if(b>=a)return!0}return!1};d=k;f["default"]=d}),66);
__d("buildPopupFeatureString",["sdk.UA"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.dims.screenX,d=a.dims.screenY,e=a.dims.outerWidth,f=a.dims.outerHeight,g=c("sdk.UA").mobile()?null:a.size.width,h=c("sdk.UA").mobile()?null:a.size.height;b=b<0?a.dims.screenWidth+b:b;a=[];g!=null&&(a.push("width="+g),a.push("left="+(b+(e-g)/2)));h!=null&&(a.push("height="+h),a.push("top="+(d+(f-h)/2.5)));a.push("scrollbars=1");a.push("toolbar=0");(!c("sdk.UA").chrome()||c("sdk.UA").chrome()<59)&&a.push("location=1");return a.join(",")}g["default"]=a}),98);
__d("PluginLoginButton",["Arbiter","DOMEvent","DOMQuery","FBLogger","PlatformOAuthDialogLoginFunnelLogger","PlatformWidgetEndpoint","Plugin","PluginDOMEventListener","PluginLoginButtonEventsTypedLogger","PluginReturn","URI","UnverifiedXD","XOAuthErrorController","buildPopupFeatureString","isFacebookURI","sdk.UA"],(function(a,b,c,d,e,f,g){var h={},i=null,j=null;function k(a){window.parent.location.replace(a)}function l(a,b,d,e,f){new(c("PluginLoginButtonEventsTypedLogger"))().setEvent("logout_click").setAppID(b).setLoggerID(d).setIsLegacy(e).setLayout(f).logVital(),a.submit()}function a(a,b){d("PluginDOMEventListener").add(a,"click",k.bind(null,b))}function b(a,b,c,e){b=l.bind(null,d("DOMQuery").find(a,"^form"),b,c,e);d("PluginDOMEventListener").add(a,"click",b)}function e(a,b,e,f,g,h,i,j,k,l,n,o,p,q,r,s,t,u,v){f=function(a,b){if(l){a=d("PlatformWidgetEndpoint").plugins("login_button");d("PluginReturn").reload(a+(b.crossFrame?"":"?ret=perms"))}};c("Arbiter").subscribe(d("Plugin").RELOAD,f);c("Arbiter").subscribe("Connect.Unsafe.loginReload",f);m(a,function(a){new(c("DOMEvent"))(a).kill();a={scope:e,response_type:"none",ref:h,auth_type:i,default_audience:j,locale:k,method:"permissions.oauth",display:"popup",logger_id:n,force_confirmation:q,messenger_page_id:r,reset_messenger_state:s,config_id:v};c("Arbiter").subscribe("Connect.Unsafe.loginComplete",function(){new(c("PluginLoginButtonEventsTypedLogger"))().setEvent("login_complete").setAppID(b).setLoggerID(n).setIsLegacy(o).setLayout(p).setUseContinueAs(t).setIsContinueAsToggled(u).logVital(),d("PlatformOAuthDialogLoginFunnelLogger").log("client_login_end",null,n,!1)});c("UnverifiedXD").send({type:"login_button_dialog_open",params:JSON.stringify(a)});new(c("PluginLoginButtonEventsTypedLogger"))().setEvent("click").setAppID(b).setLoggerID(n).setIsLegacy(o).setLayout(p).setUseContinueAs(t).setIsContinueAsToggled(u).logVital();d("PlatformOAuthDialogLoginFunnelLogger").log("client_login_start",null,n,!1)})}function f(a,b,e,f,g,k,l,n,o,p,q,r,s,t,u,v,w,x,y){f=function(a,b){if(p){a=d("PlatformWidgetEndpoint").plugins("login_button");d("PluginReturn").reload(a+(b.crossFrame?"":"?ret=perms"))}};c("Arbiter").subscribe(d("Plugin").RELOAD,f);c("Arbiter").subscribe("Connect.Unsafe.loginReload",f);var z={url:"dialog/oauth",size:{width:c("sdk.UA").mobile()?null:600,height:c("sdk.UA").mobile()?null:679},client_id:b,response_type:"token,signed_request",method:"permissions.oauth",display:"popup",sdk:"joey",app_id:b,scope:e,ref:k,auth_type:l,default_audience:n,locale:o,logger_id:q,version:g,force_confirmation:t,messenger_page_id:u,reset_messenger_state:v,config_id:y};c("Arbiter").subscribe("Connect.Unsafe.loginButtonStateInit",function(a,b){j=b.call;if(j!=null){a=function(){c("FBLogger")("plugin_login_button_lbsi").info(b.call.url)};var d=!1;try{d=c("isFacebookURI")(new(c("URI"))(b.call.url)),d||a()}catch(b){a()}d||(j.url=c("XOAuthErrorController").getURIBuilder().setEnum("error_code","PLATFORM__INVALID_URL").getURI().toString())}});c("UnverifiedXD").send({type:"login_button_prepare_call",params:JSON.stringify(z)});c("Arbiter").subscribe("Connect.Unsafe.loginComplete",function(a,e){h[e.frame_name]!=null&&typeof h[e.frame_name].close==="function"&&(h[e.frame_name].close(),delete h[e.frame_name]),e.status==="connected"?j=null:c("UnverifiedXD").send({type:"login_button_prepare_call",params:JSON.stringify(z)}),new(c("PluginLoginButtonEventsTypedLogger"))().setEvent("login_complete").setAppID(b).setLoggerID(q).setIsLegacy(r).setLayout(s).setUseContinueAs(w).setIsContinueAsToggled(x).logVital(),d("PlatformOAuthDialogLoginFunnelLogger").log("client_login_end",null,q,!1)});m(a,function(a){new(c("DOMEvent"))(a).kill();if(j==null)c("UnverifiedXD").send({type:"login_button_connected",params:"{}"});else if(h[j.id]!=null&&!h[j.id].closed)h[j.id].focus();else{a=Date.now();j.url=j.url.replace(/cbt=\d+/,"cbt="+a);a=window.open(j.url,j.id,c("buildPopupFeatureString")(j));c("UnverifiedXD").send({type:"login_button_click",params:JSON.stringify({popup:a!=null,call:j})});if(a!=null){h[j.id]=a;var e=j.id;i=window.setInterval(function(){h[e]!=null&&h[e].closed&&(c("UnverifiedXD").send({type:"login_button_popup_closed",params:"{}"}),delete h[e],window.clearInterval(i))},100)}new(c("PluginLoginButtonEventsTypedLogger"))().setEvent("click").setAppID(b).setLoggerID(q).setIsLegacy(r).setLayout(s).setUseContinueAs(w).setIsContinueAsToggled(x).logVital();d("PlatformOAuthDialogLoginFunnelLogger").log("client_login_start",null,q,!1)}})}function m(a,b){d("PluginDOMEventListener").add(a,"click",b),d("PluginDOMEventListener").add(a,"keydown",function(a){a=new(c("DOMEvent"))(a);var d=a.event.which||a.event.keyCode;(d===32||d===13)&&b(a)})}g.redirect=k;g.submit=l;g.registration=a;g.logout=b;g.oauth=e;g.oauth_new=f;g.action=m}),98);
__d("VerifiedXD",["XD"],(function(a,b,c,d,e,f,g){g["default"]=d("XD").XD}),98);