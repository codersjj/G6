"use strict";(self.webpackChunk_antv_g6_site=self.webpackChunk_antv_g6_site||[]).push([[69562],{93342:function(e,t,n){n.d(t,{Z:function(){return Z}});var r=n(14068),o=n(31605),i=n(44194),a=n(84896),c=n(51865),l=n.n(c),u=n(97551),s=n(37230),f=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],m=i.forwardRef((function(e,t){var n=e.className,c=e.component,m=e.viewBox,d=e.spin,p=e.rotate,v=e.tabIndex,y=e.onClick,b=e.children,Z=(0,o.Z)(e,f);(0,s.Kp)(Boolean(c||b),"Should have `component` prop or `children`."),(0,s.C3)();var h=i.useContext(u.Z),g=h.prefixCls,E=void 0===g?"anticon":g,x=h.rootClassName,C=l()(x,E,n),w=l()((0,a.Z)({},"".concat(E,"-spin"),!!d)),O=p?{msTransform:"rotate(".concat(p,"deg)"),transform:"rotate(".concat(p,"deg)")}:void 0,S=(0,r.Z)((0,r.Z)({},s.vD),{},{className:w,style:O,viewBox:m});m||delete S.viewBox;var P=v;return void 0===P&&y&&(P=-1),i.createElement("span",(0,r.Z)((0,r.Z)({role:"img"},Z),{},{ref:t,tabIndex:P,onClick:y,className:C}),c?i.createElement(c,(0,r.Z)({},S),b):b?((0,s.Kp)(Boolean(m)||1===i.Children.count(b)&&i.isValidElement(b)&&"use"===i.Children.only(b).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),i.createElement("svg",(0,r.Z)((0,r.Z)({},S),{},{viewBox:m}),b)):null)}));m.displayName="AntdIcon";var d=m,p=["type","children"],v=new Set;function y(e){return Boolean("string"==typeof e&&e.length&&!v.has(e))}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e[t];if(y(n)){var r=document.createElement("script");r.setAttribute("src",n),r.setAttribute("data-namespace",n),e.length>t+1&&(r.onload=function(){b(e,t+1)},r.onerror=function(){b(e,t+1)}),v.add(n),document.body.appendChild(r)}}function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scriptUrl,n=e.extraCommonProps,a=void 0===n?{}:n;t&&"undefined"!=typeof document&&"undefined"!=typeof window&&"function"==typeof document.createElement&&(Array.isArray(t)?b(t.reverse()):b([t]));var c=i.forwardRef((function(e,t){var n=e.type,c=e.children,l=(0,o.Z)(e,p),u=null;return e.type&&(u=i.createElement("use",{xlinkHref:"#".concat(n)})),c&&(u=c),i.createElement(d,(0,r.Z)((0,r.Z)((0,r.Z)({},a),l),{},{ref:t}),u)}));return c.displayName="Iconfont",c}},65519:function(e,t,n){var r=n(14068),o=n(44194),i=n(69535),a=n(29561),c=function(e,t){return o.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:i.Z}))},l=o.forwardRef(c);t.Z=l},39025:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(31021),o=n(93735),i=n(17),a=n(79604),c=n(44194),l=n(66682),u=n(21046),s=n(49929),f=n(56181),m=n(93972),d=n(52337),p=n(40578),v="Rx17MOtYVG0UlkVnIEzC",y="OJcK7qxL2Vg98LVLO61S",b="iib84KNrPC0kDF4g7pkw",Z="a7Hmbf1zTpY4DPHy9RxV";function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],l=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E=r.Z.Sider,x=r.Z.Content,C=function(){var e=(0,l.TH)().hash,t=(0,l.s0)(),n=(0,l.UO)(),g=n.topic,C=n.example,w=(0,c.useContext)(u.w),O=(0,o.bU)(),S=(0,o.WF)().themeConfig,P=w.meta.exampleTopics,j=(0,c.useMemo)((function(){var t=(0,i.Z)(P,["0","examples"]),n=(0,a.Z)(t,(function(e){return e.id===C}));return e.slice(1)||(0,i.Z)(n,["demos","0","id"])}),[e,P,C]),T=h((0,c.useState)(),2),k=T[0],N=T[1],I=h((0,c.useState)(!1),2),M=I[0],A=(I[1],h((0,c.useState)({}),2)),D=A[0],_=A[1];return(0,c.useEffect)((function(){if(g&&C&&j){var e=(0,f.X)(P,g,C,j);N(e),_(function(e,t,n){return e.find((function(e){return e.id===t})).examples.find((function(e){return e.id===n})).title}(P,g,C))}}),[g,C,e]),c.createElement("div",{className:v},c.createElement(p.H,{title:D[O.id],lang:O.id}),c.createElement(d.h,{isHomePage:!1}),c.createElement(r.Z,{className:y},c.createElement(E,{collapsedWidth:0,width:250,trigger:null,collapsible:!0,collapsed:M,className:Z,theme:"light"},k&&c.createElement(m.C,{showExampleDemoTitle:!0,currentDemo:k,onDemoClicked:function(e){var n=e.id,r=e.targetExample,o=e.targetTopic,i="/".concat(O.id,"/examples/").concat(null==o?void 0:o.id,"/").concat(null==r?void 0:r.id,"/#").concat(n);t(i)},exampleTopics:P})),c.createElement(x,{className:b},g&&C&&c.createElement(s.S,{exampleTopics:P,topic:g,example:C,demo:j,size:(0,i.Z)(S,"editor.size",.38)}))))}},42271:function(e,t,n){n.d(t,{C:function(){return ee}});var r=n(44194),o=n(68678),i=n(65944),a=n(62632),c=n(84896),l=n(51865),u=n.n(l),s=n(71732),f=n(66461),m=function(e){var t=(0,r.useContext)(s.E_),n=t.getPrefixCls,o=t.direction,i=e.prefixCls,l=e.className,m=void 0===l?"":l,d=n("input-group",i),p=u()(d,(0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)({},"".concat(d,"-lg"),"large"===e.size),"".concat(d,"-sm"),"small"===e.size),"".concat(d,"-compact"),e.compact),"".concat(d,"-rtl"),"rtl"===o),m),v=(0,r.useContext)(f.aM),y=(0,r.useMemo)((function(){return(0,a.Z)((0,a.Z)({},v),{isFormItemInput:!1})}),[v]);return r.createElement("span",{className:p,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},r.createElement(f.aM.Provider,{value:y},e.children))},d=n(76652),p=n(37296),v=n(58611),y=n(14068),b=n(42281),Z=n(29561),h=function(e,t){return r.createElement(Z.Z,(0,y.Z)((0,y.Z)({},e),{},{ref:t,icon:b.Z}))};var g=r.forwardRef(h),E=n(14018),x=function(e,t){return r.createElement(Z.Z,(0,y.Z)((0,y.Z)({},e),{},{ref:t,icon:E.Z}))};var C=r.forwardRef(x),w=n(4437),O=n(11348),S=n(2010),P=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},j=function(e){return e?r.createElement(C,null):r.createElement(g,null)},T={click:"onClick",hover:"onMouseOver"};var k=r.forwardRef((function(e,t){var n=e.visibilityToggle,o=void 0===n||n,i="object"===(0,v.Z)(o)&&void 0!==o.visible,l=(0,r.useState)((function(){return!!i&&o.visible})),f=(0,p.Z)(l,2),m=f[0],y=f[1],b=(0,r.useRef)(null);r.useEffect((function(){i&&y(o.visible)}),[i,o]);var Z=(0,S.Z)(b),h=function(){e.disabled||(m&&Z(),y((function(e){var t,n=!e;return"object"===(0,v.Z)(o)&&(null===(t=o.onVisibleChange)||void 0===t||t.call(o,n)),n})))},g=function(n){var i=n.getPrefixCls,l=e.className,s=e.prefixCls,f=e.inputPrefixCls,p=e.size,v=P(e,["className","prefixCls","inputPrefixCls","size"]),y=i("input",f),Z=i("input-password",s),g=o&&function(t){var n=e.action,o=void 0===n?"click":n,i=e.iconRender,a=T[o]||"",l=(void 0===i?j:i)(m),u=(0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)({},a,h),"className","".concat(t,"-icon")),"key","passwordIcon"),"onMouseDown",(function(e){e.preventDefault()})),"onMouseUp",(function(e){e.preventDefault()}));return r.cloneElement(r.isValidElement(l)?l:r.createElement("span",null,l),u)}(Z),E=u()(Z,l,(0,c.Z)({},"".concat(Z,"-").concat(p),!!p)),x=(0,a.Z)((0,a.Z)({},(0,w.Z)(v,["suffix","iconRender","visibilityToggle"])),{type:m?"text":"password",className:E,prefixCls:y,suffix:g});return p&&(x.size=p),r.createElement(d.ZP,(0,a.Z)({ref:(0,O.sQ)(t,b)},x))};return r.createElement(s.C,null,g)})),N=n(6355),I=n(67982),M=n(28175),A=n(64321),D=n(11993),_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};var B=r.forwardRef((function(e,t){var n,o=e.prefixCls,i=e.inputPrefixCls,l=e.className,f=e.size,m=e.suffix,p=e.enterButton,v=void 0!==p&&p,y=e.addonAfter,b=e.loading,Z=e.disabled,h=e.onSearch,g=e.onChange,E=e.onCompositionStart,x=e.onCompositionEnd,C=_(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),w=r.useContext(s.E_),S=w.getPrefixCls,P=w.direction,j=r.useContext(M.Z),T=r.useRef(!1),k=S("input-search",o),B=S("input",i),R=(0,A.ri)(k,P).compactSize||f||j,z=r.useRef(null),V=function(e){var t;document.activeElement===(null===(t=z.current)||void 0===t?void 0:t.input)&&e.preventDefault()},U=function(e){var t,n;h&&h(null===(n=null===(t=z.current)||void 0===t?void 0:t.input)||void 0===n?void 0:n.value,e)},F="boolean"==typeof v?r.createElement(N.Z,null):null,H="".concat(k,"-button"),K=v||{},Y=K.type&&!0===K.type.__ANT_BUTTON;n=Y||"button"===K.type?(0,D.Tm)(K,(0,a.Z)({onMouseDown:V,onClick:function(e){var t,n;null===(n=null===(t=null==K?void 0:K.props)||void 0===t?void 0:t.onClick)||void 0===n||n.call(t,e),U(e)},key:"enterButton"},Y?{className:H,size:R}:{})):r.createElement(I.Z,{className:H,type:v?"primary":void 0,size:R,disabled:Z,key:"enterButton",onMouseDown:V,onClick:U,loading:b,icon:F},v),y&&(n=[n,(0,D.Tm)(y,{key:"addonAfter"})]);var L=u()(k,(0,c.Z)((0,c.Z)((0,c.Z)({},"".concat(k,"-rtl"),"rtl"===P),"".concat(k,"-").concat(R),!!R),"".concat(k,"-with-button"),!!v),l);return r.createElement(d.ZP,(0,a.Z)({ref:(0,O.sQ)(z,t),onPressEnter:function(e){T.current||b||U(e)}},C,{size:R,onCompositionStart:function(e){T.current=!0,null==E||E(e)},onCompositionEnd:function(e){T.current=!1,null==x||x(e)},prefixCls:B,addonAfter:n,suffix:m,onChange:function(e){e&&e.target&&"click"===e.type&&h&&h(e.target.value,e),g&&g(e)},className:L,disabled:Z}))})),R=n(18861),z=d.ZP;z.Group=m,z.Search=B,z.TextArea=R.Z,z.Password=k;var V=z,U=n(93735),F=n(46440),H=n(93342),K=n(65519),Y=n(56948),L={shadowWrapper:"SwvGcu93SisYFvSVPIQn",cards:"ZoA8FaJkS0UNCpZa1dUq",card:"ZZIbkmstsEJHYyHoZ_Vl",screenshot:"hzjiZ5xUm2MQNMxwwEss",exampleDemoTitle:"DcwwwSwZP6kYobphcGyd",current:"hQa1vrYEf2E9V4Zu9oR8",searchSider:"ZpUGketfd1QSRgr_Hebp",searchSiderIcon:"eAwTqqwdcY4jtoQBxT_c",searchValue:"NyIMP4AYsukVT4mtXc1v",sideBarMenu:"ji0sVBBOSRclqO66rv4Q",menuTitleContent:"Yt17iFit4OQ8RU00gKdM",subMenuTitleContent:"miIcJ_jrolAt5eC9vV7g"};function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){J(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function J(e,t,n){return t=function(e){var t=function(e,t){if("object"!==Q(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==Q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===Q(t)?t:String(t)}(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],l=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $=(0,H.Z)({scriptUrl:"//at.alicdn.com/t/font_470089_1lnym745udm.js"}),ee=function(e){var t=e.currentDemo,n=e.onDemoClicked,a=e.exampleTopics,c=W((0,r.useState)([]),2),l=c[0],s=c[1],f=(0,r.useRef)(null),m=W((0,r.useState)(),2),d=m[0],p=(m[1],W((0,r.useState)(""),2)),v=p[0],y=p[1],b=(0,U.bU)(),Z=(0,U.YB)();(0,r.useEffect)((function(){var e=t.targetExample,n=t.targetTopic,r=["TOPIC-".concat(null==n?void 0:n.id),"EXAMPLE-".concat(n.id,"-").concat(null==e?void 0:e.id)];s(r)}),[t]),(0,r.useEffect)((function(){d&&d.scrollIntoView({block:"center",behavior:"smooth"})}),[d]);var h,g=function(e){return v&&e.match(v)?r.createElement(r.Fragment,null,r.createElement("span",null,e.replace(new RegExp("".concat(v,".*")),"")),r.createElement("span",{className:L.searchValue},v),r.createElement("span",null,e.replace(new RegExp(".*?".concat(v)),""))):e};return r.createElement("div",{className:u()(L.shadowWrapper)},r.createElement("div",{className:L.searchSider},r.createElement(V,{size:"small",placeholder:Z.formatMessage({id:"搜索…"}),prefix:r.createElement(N.Z,null),value:v,onChange:function(e){return y(e.target.value)}}),r.createElement(o.Z,{placement:"right",title:r.createElement(U._H,{id:"收起所有"})},r.createElement(K.Z,{className:L.searchSiderIcon,onClick:function(){return s([])}}))),r.createElement(i.Z,{ref:f,mode:"inline",style:{width:"100%"},className:L.sideBarMenu,openKeys:l,selectedKeys:["DEMO-".concat(t.id)],onOpenChange:function(e){s(e)}},(h=(0,Y.LQ)({id:"FAKE_ID",childrenKey:"exampleTopics",title:{zh:"FAKE_TITLE",en:"FAKE_TITLE"},exampleTopics:(0,F.Z)(a)},v,b.id),(null==h?void 0:h.exampleTopics)||[]).map((function(e){return r.createElement(i.Z.SubMenu,{key:"TOPIC-".concat(e.id),title:r.createElement("div",null,e.icon&&r.createElement($,{className:L.menuIcon,type:"icon-".concat(e.icon)}),r.createElement("span",{className:u()(L.menuTitleContent,L.subMenuTitleContent)},e.title&&g(e.title[b.id])))},e.examples.map((function(a){return r.createElement(i.Z.SubMenu,{key:"EXAMPLE-".concat(e.id,"-").concat(a.id),title:a.title[b.id]},a.demos.map((function(c){return r.createElement(i.Z.Item,{key:"DEMO-".concat(e.id,"-").concat(a.id,"-").concat(c.id),style:{height:70,padding:0,cursor:"pointer"},onClick:function(){n(G(G({},c),{},{targetExample:a,targetTopic:e}))}},r.createElement("span",{className:L.menuTitleContent},function(e){return r.createElement(o.Z,{placement:"right",title:g(e.title[b.id]||""),key:e.id},r.createElement("a",{ref:function(e){},className:u()(L.card,J({},L.current,t.id===e.id))},r.createElement("div",{className:u()(L.screenshot),style:{backgroundImage:"url(".concat(e.screenshot||"https://gw.alipayobjects.com/os/s/prod/antv/assets/image/screenshot-placeholder-b8e70.png",")")},title:e.title[b.id]})))}(c)))})))})))}))))}},31021:function(e,t,n){var r=n(8e4),o=n(87589),i=r.ZP;i.Header=r.h4,i.Footer=r.$_,i.Content=r.VY,i.Sider=o.Z,i._InternalSiderContext=o.D,t.Z=i},55799:function(e,t){t.Z=function(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1}},54888:function(e,t,n){var r=n(51941),o=n(13932),i=n(92769);t.Z=function(e){return function(t,n,a){var c=Object(t);if(!(0,o.Z)(t)){var l=(0,r.Z)(n,3);t=(0,i.Z)(t),n=function(e){return l(c[e],e,c)}}var u=e(t,n,a);return u>-1?c[l?t[u]:u]:void 0}}},46440:function(e,t,n){var r=n(14407);t.Z=function(e){return(0,r.Z)(e,5)}},79604:function(e,t,n){var r=n(54888),o=n(72636),i=(0,r.Z)(o.Z);t.Z=i},72636:function(e,t,n){var r=n(55799),o=n(51941),i=n(42013),a=Math.max;t.Z=function(e,t,n){var c=null==e?0:e.length;if(!c)return-1;var l=null==n?0:(0,i.Z)(n);return l<0&&(l=a(c+l,0)),(0,r.Z)(e,(0,o.Z)(t,3),l)}},14193:function(e,t,n){var r=n(42498),o=1/0;t.Z=function(e){return e?(e=(0,r.Z)(e))===o||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},42013:function(e,t,n){var r=n(14193);t.Z=function(e){var t=(0,r.Z)(e),n=t%1;return t==t?n?t-n:t:0}}}]);