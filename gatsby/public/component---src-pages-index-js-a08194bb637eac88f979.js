(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n("q1tI"),r=n.n(a),i=n("vOnD"),l=i.b.div.withConfig({displayName:"Grids__HomePageGrid",componentId:"sc-1j70bu0-0"})(["display:grid;gap:2rem;--columns:2;grid-template-columns:repeat(var(--columns),minmax(auto,1fr));@media (max-width:800px){--columns:1;}"]),c=i.b.div.withConfig({displayName:"Grids__ItemsGrid",componentId:"sc-1j70bu0-1"})(["display:grid;gap:2rem;grid-template-columns:1fr 1fr;"]),o=i.b.div.withConfig({displayName:"Grids__ItemStyles",componentId:"sc-1j70bu0-2"})(["text-align:center;position:relative;img{height:auto;font-size:0;}p{top:0;transform:rotate(-2deg) translateY(-10px);position:absolute;width:100%;left:0;margin:0;font-size:2rem;font-size:clamp(12px,5vw,20px);}.mark{display:inline;}@keyframes shine{from{background-position:200%;}to{background-position:-40px;}}img.loading{--shine:white;--background:var(--grey);background-image:linear-gradient( 90deg,var(--background) 0px,var(--shine) 40px,var(--background) 80px );background-size:500px;animation:shine 1s infinite linear;}"]);var s=function(e){var t=e.items;return r.a.createElement(c,null,t.map((function(e){return r.a.createElement(o,{key:e._id},r.a.createElement("p",null,r.a.createElement("span",{className:"mark"},e.name)),r.a.createElement("img",{width:"500",height:"400",src:e.image.asset.url+"?w=500&h=400&fit=crop",alt:e.name,style:{background:"url("+e.image.asset.metadata.lqip+")",backgroundSize:"cover"}}))})))};function m(e){var t=e.count;return r.a.createElement(c,null,Array.from({length:t},(function(e,t){return r.a.createElement(o,{key:"loader-"+t},r.a.createElement("p",null,r.a.createElement("span",{className:"mark"},"Loading...")),r.a.createElement("img",{src:"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklEQVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII=",className:"loading",alt:"Loading",width:"500",height:"400"}))})))}var u=n("MUpH");function d(){var e=Object(u.a)(['\n          query {\n            StoreSettings(id: "downtown") {\n              name\n              slicemaster {\n                ',"\n              }\n              hotSlices {\n                ","\n              }\n            }\n          }\n        "]);return d=function(){return e},e}function p(){var e=Object(u.a)(["\n  name\n  _id\n  image {\n    asset {\n      url\n      metadata {\n        lqip\n      }\n    }\n  }\n"]);return p=function(){return e},e}var g=String.raw,h=g(p());function f(e){var t=e.slicemasters;return r.a.createElement("div",null,r.a.createElement("h2",{className:"center"},r.a.createElement("span",{className:"mark tilt"},"Slicemasters On")),r.a.createElement("p",null,"Standing by, ready to slice you up!"),!t&&r.a.createElement(m,{count:4}),t&&!(null==t?void 0:t.length)&&r.a.createElement("p",null,"No one is working right now!"),(null==t?void 0:t.length)&&r.a.createElement(s,{items:t}))}function E(e){var t=e.hotSlices;return r.a.createElement("div",null,r.a.createElement("h2",{className:"center"},r.a.createElement("span",{className:"mark tilt"},"Hot Slices")),r.a.createElement("p",null,"Come on buy, by the slice!"),!t&&r.a.createElement(m,{count:4}),t&&!(null==t?void 0:t.length)&&r.a.createElement("p",null,"Nothing in the case!"),(null==t?void 0:t.length)&&r.a.createElement(s,{items:t}))}function v(){var e=function(){var e=Object(a.useState)(),t=e[0],n=e[1],r=Object(a.useState)(),i=r[0],l=r[1];return Object(a.useEffect)((function(){fetch("https://pbhcs4hm.api.sanity.io/v1/graphql/production/default",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:g(d(),h,h)})}).then((function(e){return e.json()})).then((function(e){n(e.data.StoreSettings.hotSlices),l(e.data.StoreSettings.slicemaster)})).catch((function(e){console.log(e)}))}),[]),{hotSlices:t,slicemasters:i}}(),t=e.slicemasters,n=e.hotSlices;return r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,"The Best Pizza Downtown"),r.a.createElement("p",null,"Open 11a to 11pm Every Single Day"),r.a.createElement(l,null,r.a.createElement(f,{slicemasters:t}),r.a.createElement(E,{hotSlices:n})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a08194bb637eac88f979.js.map