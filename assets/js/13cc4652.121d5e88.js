"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3415],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=p(t),f=i,d=h["".concat(l,".").concat(f)]||h[f]||u[f]||a;return t?n.createElement(d,o(o({ref:r},s),{},{components:t})):n.createElement(d,o({ref:r},s))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=h;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},110:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return h}});var n=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],c={id:"BarPrices",title:"Interface: BarPrices",sidebar_label:"BarPrices",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"api/interfaces/BarPrices",id:"version-3.8/api/interfaces/BarPrices",title:"Interface: BarPrices",description:"Represents a bar's open, high, low, close (OHLC) prices.",source:"@site/versioned_docs/version-3.8/api/interfaces/BarPrices.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/BarPrices",permalink:"/lightweight-charts/docs/api/interfaces/BarPrices",editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"BarPrices",title:"Interface: BarPrices",sidebar_label:"BarPrices",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"BarData",permalink:"/lightweight-charts/docs/api/interfaces/BarData"},next:{title:"BarStyleOptions",permalink:"/lightweight-charts/docs/api/interfaces/BarStyleOptions"}},s=[{value:"Properties",id:"properties",children:[{value:"open",id:"open",children:[],level:3},{value:"high",id:"high",children:[],level:3},{value:"low",id:"low",children:[],level:3},{value:"close",id:"close",children:[],level:3}],level:2}],u={toc:s};function h(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Represents a bar's open, high, low, close (OHLC) prices."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"open"},"open"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"open"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#barprice"},(0,a.kt)("inlineCode",{parentName:"a"},"BarPrice"))),(0,a.kt)("p",null,"The open price."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"high"},"high"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"high"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#barprice"},(0,a.kt)("inlineCode",{parentName:"a"},"BarPrice"))),(0,a.kt)("p",null,"The high price."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"low"},"low"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"low"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#barprice"},(0,a.kt)("inlineCode",{parentName:"a"},"BarPrice"))),(0,a.kt)("p",null,"The low price."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"close"},"close"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"close"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#barprice"},(0,a.kt)("inlineCode",{parentName:"a"},"BarPrice"))),(0,a.kt)("p",null,"The close price."))}h.isMDXComponent=!0}}]);