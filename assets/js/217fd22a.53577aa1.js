"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[169],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(r),h=i,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||l;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8016:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const l={sidebar_position:3,title:"Adding to all lists",description:"why is this so hard"},o="Adding the cell to all game lists",a={unversionedId:"adding-cell/listing",id:"adding-cell/listing",title:"Adding to all lists",description:"why is this so hard",source:"@site/docs/adding-cell/listing.md",sourceDirName:"adding-cell",slug:"/adding-cell/listing",permalink:"/docs/adding-cell/listing",draft:!1,editUrl:"https://github.com/milena-kos/cmmm-modding-guide/blob/main/docs/adding-cell/listing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Adding to all lists",description:"why is this so hard"},sidebar:"tutorialSidebar",previous:{title:"Making a script",permalink:"/docs/adding-cell/script"},next:{title:"Creating a prefab",permalink:"/docs/adding-cell/prefab"}},s={},c=[{value:"Scripts/Enums/Tools.cs",id:"scriptsenumstoolscs",level:2},{value:"Scripts/Enums/Cell.cs",id:"scriptsenumscellcs",level:2},{value:"Scripts/Grid/CellFunctions.cs",id:"scriptsgridcellfunctionscs",level:2},{value:"Which Cell Update Type do I need?",id:"which-cell-update-type-do-i-need",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adding-the-cell-to-all-game-lists"},"Adding the cell to all game lists"),(0,i.kt)("p",null,"First, open your mod in Unity. If you don't have a project, please visit ",(0,i.kt)("a",{parentName:"p",href:"../intro"},"Introduction"),"."),(0,i.kt)("p",null,"There are multiple files you will need to add your cell to. Lets go over each one of them."),(0,i.kt)("h2",{id:"scriptsenumstoolscs"},"Scripts/Enums/Tools.cs"),(0,i.kt)("p",null,"You will need to add your cell in all caps without spaces or other characters ",(0,i.kt)("strong",{parentName:"p"},"before")," the DRAG tool, after the TRASH. Make sure to add comma after it and save the file."),(0,i.kt)("h2",{id:"scriptsenumscellcs"},"Scripts/Enums/Cell.cs"),(0,i.kt)("p",null,"This file is the same as the last one, but you will need to add your cell in all caps without spaces or other characters at the very end, after TRASH."),(0,i.kt)("p",null,"Cells need to be at the same position in both enums. Easy way to verify this is to make sure it is on the same line in both files."),(0,i.kt)("h2",{id:"scriptsgridcellfunctionscs"},"Scripts/Grid/CellFunctions.cs"),(0,i.kt)("p",null,"You might be shocked when you first open this. But there are two places you need to add your cell to: ",(0,i.kt)("inlineCode",{parentName:"p"},"cellUpdateTypeDictionary"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"cellUpdateOrder")," if your cells updates."),(0,i.kt)("h3",{id:"which-cell-update-type-do-i-need"},"Which Cell Update Type do I need?"),(0,i.kt)("p",null,"Incase you are not familiar with cell types, there are 3 of them:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BASE, for cells which don't update by themselves (push, slide, trash, enemy, wall)"),(0,i.kt)("li",{parentName:"ul"},"TICKED, for cells which update without caring about their direction (rotators)"),(0,i.kt)("li",{parentName:"ul"},"TRACKED, for cells which update with their direction mattering (mover, generator)")),(0,i.kt)("p",null,"If you are not sure which one it is after reading this, you can go back to your cell script and see which class you inherited from (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"public class FastMover: TrackedCell")," means it is tracked)."),(0,i.kt)("h2",{id:""}),(0,i.kt)("p",null,"SO! Add your cell to the ",(0,i.kt)("inlineCode",{parentName:"p"},"cellUpdateTypeDictionary")," along with it's cell type.\nFor ",(0,i.kt)("inlineCode",{parentName:"p"},"cellUpdateOrder")," only add your cell there if it isn't BASE (so TICKED or TRACKED)."),(0,i.kt)("p",null,"Woah, we are done with this."))}u.isMDXComponent=!0}}]);