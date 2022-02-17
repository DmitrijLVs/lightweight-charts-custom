"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1504],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(c,".").concat(u)]||d[u]||h[u]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1969:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"ChartOptions",title:"Interface: ChartOptions",sidebar_label:"ChartOptions",sidebar_position:0,custom_edit_url:null},c=void 0,s={unversionedId:"api/interfaces/ChartOptions",id:"api/interfaces/ChartOptions",title:"Interface: ChartOptions",description:"Structure describing options of the chart. Series options are to be set separately",source:"@site/docs/api/interfaces/ChartOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ChartOptions",permalink:"/lightweight-charts/docs/next/api/interfaces/ChartOptions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ChartOptions",title:"Interface: ChartOptions",sidebar_label:"ChartOptions",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"CandlestickStyleOptions",permalink:"/lightweight-charts/docs/next/api/interfaces/CandlestickStyleOptions"},next:{title:"CrosshairLineOptions",permalink:"/lightweight-charts/docs/next/api/interfaces/CrosshairLineOptions"}},p=[{value:"Properties",id:"properties",children:[{value:"width",id:"width",children:[],level:3},{value:"height",id:"height",children:[],level:3},{value:"watermark",id:"watermark",children:[],level:3},{value:"layout",id:"layout",children:[],level:3},{value:"leftPriceScale",id:"leftpricescale",children:[],level:3},{value:"rightPriceScale",id:"rightpricescale",children:[],level:3},{value:"overlayPriceScales",id:"overlaypricescales",children:[],level:3},{value:"timeScale",id:"timescale",children:[],level:3},{value:"crosshair",id:"crosshair",children:[],level:3},{value:"grid",id:"grid",children:[],level:3},{value:"localization",id:"localization",children:[],level:3},{value:"handleScroll",id:"handlescroll",children:[],level:3},{value:"handleScale",id:"handlescale",children:[],level:3},{value:"kineticScroll",id:"kineticscroll",children:[],level:3},{value:"trackingMode",id:"trackingmode",children:[],level:3}],level:2}],h={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Structure describing options of the chart. Series options are to be set separately"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"width"},"width"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"width"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Width of the chart in pixels"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," If ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," (default) or none value provided, then a size of the widget will be calculated based its container's size."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"height"},"height"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"height"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Height of the chart in pixels"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," If ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," (default) or none value provided, then a size of the widget will be calculated based its container's size."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"watermark"},"watermark"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"watermark"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/WatermarkOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"WatermarkOptions"))),(0,i.kt)("p",null,"Watermark options."),(0,i.kt)("p",null,"A watermark is a background label that includes a brief description of the drawn data. Any text can be added to it."),(0,i.kt)("p",null,"Please make sure you enable it and set an appropriate font color and size to make your watermark visible in the background of the chart.\nWe recommend a semi-transparent color and a large font. Also note that watermark position can be aligned vertically and horizontally."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"layout"},"layout"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"layout"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LayoutOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"LayoutOptions"))),(0,i.kt)("p",null,"Layout options"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"leftpricescale"},"leftPriceScale"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"leftPriceScale"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/PriceScaleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"PriceScaleOptions"))),(0,i.kt)("p",null,"Left price scale options"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rightpricescale"},"rightPriceScale"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"rightPriceScale"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/PriceScaleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"PriceScaleOptions"))),(0,i.kt)("p",null,"Right price scale options"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"overlaypricescales"},"overlayPriceScales"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"overlayPriceScales"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#overlaypricescaleoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"OverlayPriceScaleOptions"))),(0,i.kt)("p",null,"Overlay price scale options"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"timescale"},"timeScale"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"timeScale"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/TimeScaleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"TimeScaleOptions"))),(0,i.kt)("p",null,"Time scale options"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"crosshair"},"crosshair"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"crosshair"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/CrosshairOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"CrosshairOptions"))),(0,i.kt)("p",null,"The crosshair shows the intersection of the price and time scale values at any point on the chart."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"grid"},"grid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"grid"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/GridOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"GridOptions"))),(0,i.kt)("p",null,"A grid is represented in the chart background as a vertical and horizontal lines drawn at the levels of visible marks of price and the time scales."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"localization"},"localization"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"localization"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"LocalizationOptions"))),(0,i.kt)("p",null,"Localization options."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"handlescroll"},"handleScroll"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"handleScroll"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HandleScrollOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"HandleScrollOptions"))),(0,i.kt)("p",null,"Scroll options, or a boolean flag that enables/disables scrolling"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"handlescale"},"handleScale"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"handleScale"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HandleScaleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"HandleScaleOptions"))),(0,i.kt)("p",null,"Scale options, or a boolean flag that enables/disables scaling"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"kineticscroll"},"kineticScroll"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"kineticScroll"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/KineticScrollOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"KineticScrollOptions"))),(0,i.kt)("p",null,"Kinetic scroll options"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"trackingmode"},"trackingMode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"trackingMode"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/TrackingModeOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"TrackingModeOptions"))),(0,i.kt)("p",null,"Represent options for the tracking mode's behavior."),(0,i.kt)("p",null,"Mobile users will not have the ability to see the values/dates like they do on desktop.\nTo see it, they should enter the tracking mode. The tracking mode will deactivate the scrolling\nand make it possible to check values and dates."))}d.isMDXComponent=!0}}]);