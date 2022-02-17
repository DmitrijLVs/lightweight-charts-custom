"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9630],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9897:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),l=["components"],o={id:"SeriesMarker",title:"Interface: SeriesMarker<TimeType>",sidebar_label:"SeriesMarker",sidebar_position:0,custom_edit_url:null},p=void 0,s={unversionedId:"api/interfaces/SeriesMarker",id:"version-3.8/api/interfaces/SeriesMarker",title:"Interface: SeriesMarker<TimeType>",description:"Represents a series marker.",source:"@site/versioned_docs/version-3.8/api/interfaces/SeriesMarker.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SeriesMarker",permalink:"/lightweight-charts/docs/api/interfaces/SeriesMarker",editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"SeriesMarker",title:"Interface: SeriesMarker<TimeType>",sidebar_label:"SeriesMarker",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"SeriesDataItemTypeMap",permalink:"/lightweight-charts/docs/api/interfaces/SeriesDataItemTypeMap"},next:{title:"SeriesOptionsCommon",permalink:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon"}},c=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"time",id:"time",children:[],level:3},{value:"position",id:"position",children:[],level:3},{value:"shape",id:"shape",children:[],level:3},{value:"color",id:"color",children:[],level:3},{value:"id",id:"id",children:[],level:3},{value:"text",id:"text",children:[],level:3},{value:"size",id:"size",children:[],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Represents a series marker."),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"TimeType"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"time"},"time"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"time"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"TimeType")),(0,a.kt)("p",null,"The time of the marker."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"position"},"position"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"position"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#seriesmarkerposition"},(0,a.kt)("inlineCode",{parentName:"a"},"SeriesMarkerPosition"))),(0,a.kt)("p",null,"The position of the marker."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"shape"},"shape"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"shape"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#seriesmarkershape"},(0,a.kt)("inlineCode",{parentName:"a"},"SeriesMarkerShape"))),(0,a.kt)("p",null,"The shape of the marker."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"color"},"color"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"color"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The color of the marker."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The ID of the marker."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"text"},"text"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"text"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The optional text of the marker."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"size"},"size"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"size"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The optional size of the marker."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"1")))}m.isMDXComponent=!0}}]);