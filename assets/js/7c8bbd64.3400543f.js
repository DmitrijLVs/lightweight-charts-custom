"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=i.createContext({}),s=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),k=l,m=c["".concat(o,".").concat(k)]||c[k]||d[k]||r;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:l,a[1]=p;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var i=n(7462),l=(n(7294),n(3905));const r={id:"PriceLineOptions",title:"Interface: PriceLineOptions",sidebar_label:"PriceLineOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},a=void 0,p={unversionedId:"api/interfaces/PriceLineOptions",id:"version-4.0/api/interfaces/PriceLineOptions",title:"Interface: PriceLineOptions",description:"Represents a price line options.",source:"@site/versioned_docs/version-4.0/api/interfaces/PriceLineOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/PriceLineOptions",permalink:"/lightweight-charts/docs/api/interfaces/PriceLineOptions",draft:!1,editUrl:null,tags:[],version:"4.0",sidebarPosition:0,frontMatter:{id:"PriceLineOptions",title:"Interface: PriceLineOptions",sidebar_label:"PriceLineOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},o={},s=[{value:"Properties",id:"properties",level:2},{value:"id",id:"id",level:3},{value:"price",id:"price",level:3},{value:"color",id:"color",level:3},{value:"lineWidth",id:"linewidth",level:3},{value:"lineStyle",id:"linestyle",level:3},{value:"lineVisible",id:"linevisible",level:3},{value:"axisLabelVisible",id:"axislabelvisible",level:3},{value:"title",id:"title",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Represents a price line options."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"id"},"id"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"id"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"The optional ID of this price line."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"price"},"price"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"price"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Price line's value."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"0")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"color"},"color"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"color"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Price line's color."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"''")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"linewidth"},"lineWidth"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"lineWidth"),": ",(0,l.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#linewidth"},(0,l.kt)("inlineCode",{parentName:"a"},"LineWidth"))),(0,l.kt)("p",null,"Price line's width in pixels."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"1")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"linestyle"},"lineStyle"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"lineStyle"),": ",(0,l.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"LineStyle"))),(0,l.kt)("p",null,"Price line's style."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineStyle#solid"},"Solid")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"linevisible"},"lineVisible"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"lineVisible"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Display line."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"axislabelvisible"},"axisLabelVisible"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"axisLabelVisible"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Display the current price value in on the price scale."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"title"},"title"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"title"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Price line's on the chart pane."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"''")))}d.isMDXComponent=!0}}]);