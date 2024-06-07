"use strict";(self.webpackChunk_antv_g6_site=self.webpackChunk_antv_g6_site||[]).push([[8673],{58673:function(e,t,n){n.d(t,{$:function(){return D}});var r=n(58757),a=n(6480),o=n(32134),c=n(93901),l=n(51865),i=n.n(l),s=function(e){var t=e.prefixCls,n=e.icon,a=e.title,o=e.items,c=void 0===o?[]:o,l=e.style,s=e.className;return r.createElement("div",{className:i()("".concat(t,"-column"),s),style:l},(a||n)&&r.createElement("h2",null,n&&r.createElement("span",{className:"".concat(t,"-column-icon")},n),a),c.map((function(e,n){var a=e.LinkComponent||"a";return r.createElement("div",{className:i()("".concat(t,"-item"),e.className),style:e.style,key:n},r.createElement(a,{href:e.url,to:"string"!=typeof a?e.url:void 0,target:e.openExternal?"_blank":void 0,rel:e.openExternal?"noopener noreferrer":void 0},e.icon&&r.createElement("span",{className:"".concat(t,"-item-icon")},e.icon),e.title),e.description&&r.createElement(r.Fragment,null,r.createElement("span",{className:"".concat(t,"-item-separator")},"-"),r.createElement("span",{className:"".concat(t,"-item-description")},e.description)))})))},u=["prefixCls","className","style","bottom","columns","maxColumnsPerRow","backgroundColor","columnLayout","theme"],m=function(e){var t=e.prefixCls,n=void 0===t?"rc-footer":t,l=e.className,m=e.style,f=e.bottom,p=e.columns,h=e.maxColumnsPerRow,g=e.backgroundColor,v=e.columnLayout,d=e.theme,b=void 0===d?"dark":d,E=(0,c.Z)(e,u),y=i()("".concat(n),l,(0,o.Z)({},"".concat(n,"-").concat(b),!!b)),Z="number"==typeof h&&h>0;return r.createElement("footer",(0,a.Z)((0,a.Z)({},E),{},{className:y,style:(0,a.Z)((0,a.Z)({},m),{},{backgroundColor:g})}),r.createElement("section",{className:"".concat(n,"-container")},p&&p.length>0&&r.createElement("section",{className:"".concat(n,"-columns"),style:{justifyContent:v,flexWrap:Z?"wrap":void 0}},p.map((function(e,t){var o=e.title,c=e.icon,l=e.style,i=e.className,u=e.items,m=void 0===u?[]:u,f=(0,a.Z)({},l);return Z&&(f.flex="0 0 ".concat(100/(h+1)+.1,"%")),r.createElement(s,{key:t,prefixCls:n,title:o,icon:c,items:m,style:f,className:i})})))),f&&r.createElement("section",{className:"".concat(n,"-bottom")},r.createElement("div",{className:"".concat(n,"-bottom-container")},f)))},f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z"}}]},name:"zhihu",theme:"outlined"},p=n(13843),h=function(e,t){return r.createElement(p.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:f}))};var g=r.forwardRef(h),v=n(32490),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},b=function(e,t){return r.createElement(p.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:d}))};var E=r.forwardRef(b),y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M457.3 543c-68.1-17.7-145 16.2-174.6 76.2-30.1 61.2-1 129.1 67.8 151.3 71.2 23 155.2-12.2 184.4-78.3 28.7-64.6-7.2-131-77.6-149.2zm-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6-22-10-28.5-35.7-14.6-57.2 13.7-21.4 42.3-31 64.4-21.7 22.4 9.5 29.6 35 16 57.3zm45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1-8.5-3.5-11.2-13.1-6.4-21.5 5-8.4 15.6-12.4 24.1-9.1 8.7 3.2 11.8 12.9 7 21.5zm334.5-197.2c15 4.8 31-3.4 35.9-18.3 11.8-36.6 4.4-78.4-23.2-109a111.39 111.39 0 00-106-34.3 28.45 28.45 0 00-21.9 33.8 28.39 28.39 0 0033.8 21.8c18.4-3.9 38.3 1.8 51.9 16.7a54.2 54.2 0 0111.3 53.3 28.45 28.45 0 0018.2 36zm99.8-206c-56.7-62.9-140.4-86.9-217.7-70.5a32.98 32.98 0 00-25.4 39.3 33.12 33.12 0 0039.3 25.5c55-11.7 114.4 5.4 154.8 50.1 40.3 44.7 51.2 105.7 34 159.1-5.6 17.4 3.9 36 21.3 41.7 17.4 5.6 36-3.9 41.6-21.2v-.1c24.1-75.4 8.9-161.1-47.9-223.9zM729 499c-12.2-3.6-20.5-6.1-14.1-22.1 13.8-34.7 15.2-64.7.3-86-28-40.1-104.8-37.9-192.8-1.1 0 0-27.6 12.1-20.6-9.8 13.5-43.5 11.5-79.9-9.6-101-47.7-47.8-174.6 1.8-283.5 110.6C127.3 471.1 80 557.5 80 632.2 80 775.1 263.2 862 442.5 862c235 0 391.3-136.5 391.3-245 0-65.5-55.2-102.6-104.8-118zM443 810.8c-143 14.1-266.5-50.5-275.8-144.5-9.3-93.9 99.2-181.5 242.2-195.6 143-14.2 266.5 50.5 275.8 144.4C694.4 709 586 796.6 443 810.8z"}}]},name:"weibo",theme:"outlined"},Z=function(e,t){return r.createElement(p.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:y}))};var x=r.forwardRef(Z),w=n(24844),j=n(91808),k="psXfussjYYE8ly0EZAjB",z="JfoKcBqhDSw1bjJYtKGB",H="kd6cs2HB4o0OjVaxNSOM",C="FVAzySGxUMg38G6c1llw";function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}var N=["columns","bottom","language","isDynamicFooter","rootDomain","className"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}function S(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===_(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var D=function(e){var t,n=e.columns,a=e.bottom,o=(e.language,e.isDynamicFooter),c=e.rootDomain,l=void 0===c?"":c,s=e.className,u=M(e,N),f=(0,j.WF)().themeConfig,p=(0,j.bU)().id,h=f.footerTheme,d=void 0===h?"dark":h,b=u.theme,y=void 0===b?d:b;return r.createElement(m,O({maxColumnsPerRow:5,theme:y,columns:n||[{title:"Resources",items:[{title:"Ant Design",url:"https://ant.design",openExternal:!0},{title:"Galacea Effects",url:"https://galacean.antgroup.com/effects/",openExternal:!0},{title:"Umi",description:r.createElement(j._H,{id:"React 应用开发框架"}),url:"https://umijs.org",openExternal:!0},{title:"Dumi",description:r.createElement(j._H,{id:"组件/文档研发工具"}),url:"https://d.umijs.org",openExternal:!0},{title:"ahooks",description:r.createElement(j._H,{id:"React Hooks 库"}),url:"https://github.com/alibaba/hooks",openExternal:!0}]},{title:r.createElement(j._H,{id:"社区"}),items:[{icon:r.createElement(g,{style:{color:"#0084ff"}}),title:r.createElement(j._H,{id:"体验科技专栏"}),url:"http://zhuanlan.zhihu.com/xtech",openExternal:!0},{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",alt:"seeconf"}),title:"SEE Conf",description:r.createElement(j._H,{id:"蚂蚁体验科技大会"}),url:"https://seeconf.antfin.com/",openExternal:!0}]},{title:r.createElement(j._H,{id:"帮助"}),items:[{icon:r.createElement(v.Z,null),title:"GitHub",url:"https://github.com/antvis",openExternal:!0},{icon:r.createElement(E,null),title:r.createElement(j._H,{id:"StackOverflow"}),url:"http://stackoverflow.com/questions/tagged/antv",openExternal:!0}]},{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"more products"}),title:r.createElement(j._H,{id:"更多产品"}),items:[{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"Ant Design"}),title:"Ant Design",url:"https://ant.design",description:r.createElement(j._H,{id:"企业级 UI 设计语言"}),openExternal:!0},{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),title:r.createElement(j._H,{id:"语雀"}),url:"https://yuque.com",description:r.createElement(j._H,{id:"知识创作与分享工具"}),openExternal:!0},{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/v2%24rh7lqpu/82f338dd-b0a6-41bc-9a86-58aaa9df217b.png",alt:"Egg"}),title:"Egg",url:"https://eggjs.org",description:r.createElement(j._H,{id:"企业级 Node 开发框架"}),openExternal:!0},{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",alt:"kitchen"}),title:"Kitchen",description:r.createElement(j._H,{id:"Sketch 工具集"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"xtech"}),title:r.createElement(j._H,{id:"蚂蚁体验科技"}),url:"https://xtech.antfin.com/",openExternal:!0}]}],className:i()(k,s,(t={},S(t,z,"light"===y),S(t,C,o),t)),bottom:a||r.createElement(r.Fragment,null,r.createElement("div",{className:i()(H,S({},z,"light"===y))},"light"===y?"© Copyright ".concat((new Date).getFullYear()," Ant Group Co., Ltd..备案号：京ICP备15032932号-38"):r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement("a",{href:"https://weibo.com/antv2017",target:"_blank",rel:"noopener noreferrer"},r.createElement(x,null)),r.createElement("a",{href:"https://zhuanlan.zhihu.com/aiux-antv",target:"_blank",rel:"noopener noreferrer"},r.createElement(g,null)),r.createElement("a",{href:"https://github.com/antvis",target:"_blank",rel:"noopener noreferrer"},r.createElement(v.Z,null)),r.createElement("a",{href:"".concat(l,"/").concat(p,"/about")},r.createElement(j._H,{id:"关于我们"}))),r.createElement("div",null,"© ",(new Date).getFullYear()," Made with ❤ by"," ",r.createElement("a",{href:"https://xtech.antfin.com/"},"AntV")))))},(0,w.Z)(u,["githubUrl"])))}},58959:function(e,t){t.Z=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},3148:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(46269),a=n(344),o=n(2495),c=n(83788),l=a.Z?a.Z.isConcatSpreadable:void 0;var i=function(e){return(0,c.Z)(e)||(0,o.Z)(e)||!!(l&&e&&e[l])};var s=function e(t,n,a,o,c){var l=-1,s=t.length;for(a||(a=i),c||(c=[]);++l<s;){var u=t[l];n>0&&a(u)?n>1?e(u,n-1,a,o,c):(0,r.Z)(c,u):o||(c[c.length]=u)}return c}},58566:function(e,t){t.Z=function(e,t,n){var r=-1,a=e.length;t<0&&(t=-t>a?0:a+t),(n=n>a?a:n)<0&&(n+=a),a=t>n?0:n-t>>>0,t>>>=0;for(var o=Array(a);++r<a;)o[r]=e[r+t];return o}},60122:function(e,t,n){var r=n(2855),a=n(7683),o=n(41124),c=n(65931);t.Z=function(e,t){return t=(0,r.Z)(t,e),null==(e=(0,o.Z)(e,t))||delete e[(0,c.Z)((0,a.Z)(t))]}},31666:function(e,t,n){var r=n(42060),a=n(52914),o=n(4164);t.Z=function(e){return(0,o.Z)((0,a.Z)(e,void 0,r.Z),e+"")}},52914:function(e,t,n){var r=n(58959),a=Math.max;t.Z=function(e,t,n){return t=a(void 0===t?e.length-1:t,0),function(){for(var o=arguments,c=-1,l=a(o.length-t,0),i=Array(l);++c<l;)i[c]=o[t+c];c=-1;for(var s=Array(t+1);++c<t;)s[c]=o[c];return s[t]=n(i),(0,r.Z)(e,this,s)}}},41124:function(e,t,n){var r=n(51327),a=n(58566);t.Z=function(e,t){return t.length<2?e:(0,r.Z)(e,(0,a.Z)(t,0,-1))}},4164:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(61606),a=n(45402),o=n(35272),c=a.Z?function(e,t){return(0,a.Z)(e,"toString",{configurable:!0,enumerable:!1,value:(0,r.Z)(t),writable:!0})}:o.Z,l=(0,n(79102).Z)(c)},79102:function(e,t){var n=Date.now;t.Z=function(e){var t=0,r=0;return function(){var a=n(),o=16-(a-r);if(r=a,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},61606:function(e,t){t.Z=function(e){return function(){return e}}},42060:function(e,t,n){var r=n(3148);t.Z=function(e){return(null==e?0:e.length)?(0,r.Z)(e,1):[]}},56643:function(e,t,n){var r=n(71395),a=n(98263),o=n(54764),c=Function.prototype,l=Object.prototype,i=c.toString,s=l.hasOwnProperty,u=i.call(Object);t.Z=function(e){if(!(0,o.Z)(e)||"[object Object]"!=(0,r.Z)(e))return!1;var t=(0,a.Z)(e);if(null===t)return!0;var n=s.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&i.call(n)==u}},7683:function(e,t){t.Z=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}},24844:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(3271),a=n(14407),o=n(60122),c=n(2855),l=n(21169),i=n(56643);var s=function(e){return(0,i.Z)(e)?void 0:e},u=n(31666),m=n(29488),f=(0,u.Z)((function(e,t){var n={};if(null==e)return n;var i=!1;t=(0,r.Z)(t,(function(t){return t=(0,c.Z)(t,e),i||(i=t.length>1),t})),(0,l.Z)(e,(0,m.Z)(e),n),i&&(n=(0,a.Z)(n,7,s));for(var u=t.length;u--;)(0,o.Z)(n,t[u]);return n}))}}]);