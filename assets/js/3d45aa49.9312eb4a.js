"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8730],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(r),d=a,f=h["".concat(p,".").concat(d)]||h[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6767:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={id:"MouseEventParams",title:"Interface: MouseEventParams",sidebar_label:"MouseEventParams",sidebar_position:0,custom_edit_url:null},p=void 0,l={unversionedId:"api/interfaces/MouseEventParams",id:"version-3.8/api/interfaces/MouseEventParams",title:"Interface: MouseEventParams",description:"Represents a mouse event.",source:"@site/versioned_docs/version-3.8/api/interfaces/MouseEventParams.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/MouseEventParams",permalink:"/lightweight-charts/docs/api/interfaces/MouseEventParams",editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"MouseEventParams",title:"Interface: MouseEventParams",sidebar_label:"MouseEventParams",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"LocalizationOptions",permalink:"/lightweight-charts/docs/api/interfaces/LocalizationOptions"},next:{title:"OhlcData",permalink:"/lightweight-charts/docs/api/interfaces/OhlcData"}},c=[{value:"Properties",id:"properties",children:[{value:"time",id:"time",children:[],level:3},{value:"point",id:"point",children:[],level:3},{value:"seriesPrices",id:"seriesprices",children:[],level:3},{value:"hoveredSeries",id:"hoveredseries",children:[],level:3},{value:"hoveredMarkerId",id:"hoveredmarkerid",children:[],level:3}],level:2}],u={toc:c};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents a mouse event."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"time"},"time"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"time"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#utctimestamp"},(0,i.kt)("inlineCode",{parentName:"a"},"UTCTimestamp"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/BusinessDay"},(0,i.kt)("inlineCode",{parentName:"a"},"BusinessDay"))),(0,i.kt)("p",null,"Time of the data at the location of the mouse event."),(0,i.kt)("p",null,"The value will be ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," if the location of the event in the chart is outside the range of available data."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"point"},"point"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"point"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/Point"},(0,i.kt)("inlineCode",{parentName:"a"},"Point"))),(0,i.kt)("p",null,"Location of the event in the chart."),(0,i.kt)("p",null,"The value will be ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," if the event is fired outside the chart, for example a mouse leave event."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"seriesprices"},"seriesPrices"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"seriesPrices"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesApi"},(0,i.kt)("inlineCode",{parentName:"a"},"ISeriesApi")),"<keyof ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsMap"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsMap")),">",", ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#barprice"},(0,i.kt)("inlineCode",{parentName:"a"},"BarPrice"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/BarPrices"},(0,i.kt)("inlineCode",{parentName:"a"},"BarPrices")),">"),(0,i.kt)("p",null,"Prices of all series at the location of the event in the chart."),(0,i.kt)("p",null,"Keys of the map are ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesApi"},"ISeriesApi")," instances. Values are prices.\nEach price is a number for line, area, and histogram series or a OHLC object for candlestick and bar series."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hoveredseries"},"hoveredSeries"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"hoveredSeries"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesApi"},(0,i.kt)("inlineCode",{parentName:"a"},"ISeriesApi")),"<keyof ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsMap"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsMap")),">"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesApi"},"ISeriesApi")," for the series at the point of the mouse event."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hoveredmarkerid"},"hoveredMarkerId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"hoveredMarkerId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The ID of the marker at the point of the mouse event."))}h.isMDXComponent=!0}}]);