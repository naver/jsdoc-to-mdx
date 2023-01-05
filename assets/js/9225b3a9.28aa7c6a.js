"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[446],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5142:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Config",id:"config",slug:"/config"},s=void 0,c={unversionedId:"config",id:"config",isDocsHomePage:!1,title:"Config",description:"Configs can be provided either by command line parameters or config file with JSON format.",source:"@site/docs/config.md",sourceDirName:".",slug:"/config",permalink:"/jsdoc-to-mdx/docs/config",editUrl:"https://github.com/naver/jsdoc-to-mdx/edit/main/docs/docs/docs/config.md",tags:[],version:"current",frontMatter:{title:"Config",id:"config",slug:"/config"},sidebar:"docs",previous:{title:"Setting up Docusaurus",permalink:"/jsdoc-to-mdx/docs/setting-up-docusaurus"}},p=[{value:"Sample config.json",id:"sample-configjson",children:[]},{value:"Sample shell script",id:"sample-shell-script",children:[]},{value:"Sample shell script (when using the config file)",id:"sample-shell-script-when-using-the-config-file",children:[]},{value:"locales",id:"locales",children:[]},{value:"outDir",id:"outdir",children:[]},{value:"localesDir",id:"localesdir",children:[]},{value:"sidebar",id:"sidebar",children:[]},{value:"prefix",id:"prefix",children:[]},{value:"jsdoc",id:"jsdoc",children:[]},{value:"bulma",id:"bulma",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Configs can be provided either by command line parameters or config file with JSON format."),(0,i.kt)("h2",{id:"sample-configjson"},"Sample config.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=config.json",title:"config.json"},'{\n  "locales": ["ko"],\n  "outDir": "./docs/docs/api",\n  "localesDir": "./docs/i18n/{locale}/docusaurus-plugin-content-docs/current/api",\n  "sidebar": "./docs",\n  "jsdoc": "./jsdoc.json",\n  "bulma": false\n}\n')),(0,i.kt)("h2",{id:"sample-shell-script"},"Sample shell script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'npx jsdoc-to-mdx -o "docs/api" -s "docs" -j "jsdoc.json"\n')),(0,i.kt)("h2",{id:"sample-shell-script-when-using-the-config-file"},"Sample shell script (when using the config file)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npx jsdoc-to-mdx -c config.json\n")),(0,i.kt)("h2",{id:"locales"},"locales"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: string[]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-l, --locales"))),(0,i.kt)("p",null,"An array of locale strings to enable.",(0,i.kt)("br",{parentName:"p"}),"\n","This will separate all descriptions inside jsdoc that starts with ",(0,i.kt)("inlineCode",{parentName:"p"},'@"TARGET_LOCALE"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<TARGET_LOCALE></TARGET_LOCALE>")," then save them where it specified on the ",(0,i.kt)("inlineCode",{parentName:"p"},"localesDir")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"JSDoc Example)"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Class Property A\n * @ko \ud074\ub798\uc2a4 \ud504\ub85c\ud37c\ud2f0 A\n * @type {string}\n * @readonly\n * @example\n * ```ts\n * new DummyClass("b").propA === "b";\n * ```\n */\n/**\n * Method A\n * @param {number} a description of param a<ko>\ud328\ub7ec\ubbf8\ud130 A\uc758 \uc124\uba85</ko>\n * @param {string} [b="DUMMY_TEXT"] description of param b<ko>\ud328\ub7ec\ubbf8\ud130 B\uc758 \uc124\uba85</ko>\n */\n'))),(0,i.kt)("h2",{id:"outdir"},"outDir"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-o, --outDir"))),(0,i.kt)("p",null,"Path to generate mdx files."),(0,i.kt)("h2",{id:"localesdir"},"localesDir"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-d, --localesDir"))),(0,i.kt)("p",null,"Path to generate mdx files with locales applied.",(0,i.kt)("br",{parentName:"p"}),"\n","If the locale name should be applied to the path name, you can include the special string ",(0,i.kt)("inlineCode",{parentName:"p"},"{locale}")," then it will automatically transform into the target locale name."),(0,i.kt)("h2",{id:"sidebar"},"sidebar"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-s, --sidebar"))),(0,i.kt)("p",null,"Path to generate ",(0,i.kt)("inlineCode",{parentName:"p"},"sidebar-api.js")," that can be used to show the sidebar of the generated API documents."),(0,i.kt)("h2",{id:"prefix"},"prefix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-p, --prefix"))),(0,i.kt)("p",null,"Path prefix of the generated sidebar items.",(0,i.kt)("br",{parentName:"p"}),"\n","Should end with ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),", and default is ",(0,i.kt)("inlineCode",{parentName:"p"},"api/"),"."),(0,i.kt)("h2",{id:"jsdoc"},"jsdoc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-j, --jsdoc"))),(0,i.kt)("p",null,"Path to the jsdoc config file."),(0,i.kt)("h2",{id:"bulma"},"bulma"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: boolean"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-b, --bulma"))),(0,i.kt)("p",null,"If enabled, generated documents will have ",(0,i.kt)("a",{parentName:"p",href:"https://bulma.io/"},"Bulma"),"'s classes instead of ",(0,i.kt)("a",{parentName:"p",href:"https://infima.dev/"},"Infima"),"'s.",(0,i.kt)("br",{parentName:"p"}),"\n","Additional SCSS file to load Bulma's CSS is required."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"See: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/naver/egjs-flicking/blob/master/docs/src/css/bulma-override.sass"},"https://github.com/naver/egjs-flicking/blob/master/docs/src/css/bulma-override.sass"))))}d.isMDXComponent=!0}}]);