"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8824],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||l;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3460:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"PriceScaleOptions",title:"Interface: PriceScaleOptions",sidebar_label:"PriceScaleOptions",sidebar_position:0,custom_edit_url:null},p=void 0,c={unversionedId:"api/interfaces/PriceScaleOptions",id:"version-3.8/api/interfaces/PriceScaleOptions",title:"Interface: PriceScaleOptions",description:"Structure that describes price scale options",source:"@site/versioned_docs/version-3.8/api/interfaces/PriceScaleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/PriceScaleOptions",permalink:"/lightweight-charts/docs/api/interfaces/PriceScaleOptions",editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"PriceScaleOptions",title:"Interface: PriceScaleOptions",sidebar_label:"PriceScaleOptions",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PriceScaleMargins",permalink:"/lightweight-charts/docs/api/interfaces/PriceScaleMargins"},next:{title:"Range",permalink:"/lightweight-charts/docs/api/interfaces/Range"}},s=[{value:"Properties",id:"properties",children:[{value:"autoScale",id:"autoscale",children:[],level:3},{value:"mode",id:"mode",children:[],level:3},{value:"invertScale",id:"invertscale",children:[],level:3},{value:"alignLabels",id:"alignlabels",children:[],level:3},{value:"scaleMargins",id:"scalemargins",children:[],level:3},{value:"borderVisible",id:"bordervisible",children:[],level:3},{value:"borderColor",id:"bordercolor",children:[],level:3},{value:"entireTextOnly",id:"entiretextonly",children:[],level:3},{value:"visible",id:"visible",children:[],level:3},{value:"drawTicks",id:"drawticks",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Structure that describes price scale options"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"autoscale"},"autoScale"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"autoScale"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Autoscaling is a feature that automatically adjusts a price scale to fit the visible range of data.\nNote that overlay price scales are always auto-scaled."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"mode"},"mode"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"mode"),": ",(0,l.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/PriceScaleMode"},(0,l.kt)("inlineCode",{parentName:"a"},"PriceScaleMode"))),(0,l.kt)("p",null,"Price scale mode."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,l.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/PriceScaleMode#normal"},"PriceScaleMode.Normal")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"invertscale"},"invertScale"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"invertScale"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Invert the price scale, so that a upwards trend is shown as a downwards trend and vice versa.\nAffects both the price scale and the data on the chart."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"alignlabels"},"alignLabels"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"alignLabels"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Align price scale labels to prevent them from overlapping."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"scalemargins"},"scaleMargins"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"scaleMargins"),": ",(0,l.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/PriceScaleMargins"},(0,l.kt)("inlineCode",{parentName:"a"},"PriceScaleMargins"))),(0,l.kt)("p",null,"Price scale margins."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,l.kt)("inlineCode",{parentName:"p"},"{ bottom: 0.1, top: 0.2 }")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"chart.priceScale('right').applyOptions({\n    scaleMargins: {\n        top: 0.8,\n        bottom: 0,\n    },\n});\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"bordervisible"},"borderVisible"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"borderVisible"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Set true to draw a border between the price scale and the chart area."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"bordercolor"},"borderColor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"borderColor"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Price scale border color."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,l.kt)("inlineCode",{parentName:"p"},"'#2B2B43'")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"entiretextonly"},"entireTextOnly"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"entireTextOnly"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Show top and bottom corner labels only if entire text is visible."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"visible"},"visible"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"visible"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Indicates if this price scale visible. Ignored by overlay price scales."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," for the right price scale and ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," for the left"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"drawticks"},"drawTicks"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"drawTicks"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Draw small horizontal line on price axis labels."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,l.kt)("inlineCode",{parentName:"p"},"true")))}d.isMDXComponent=!0}}]);