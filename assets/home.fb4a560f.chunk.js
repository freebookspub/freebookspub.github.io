(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{341:function(e,n,t){var r=t(342),o=t(332),i="string"==typeof r?[[e.i,r,""]]:r;(n=e.exports=r.locals||{})._getContent=function(){return i},n._getCss=function(){return""+r},n._insertCss=function(e){return o(i,e)}},342:function(e,n,t){(n=e.exports=t(331)(!1)).push([e.i,':root{--font-family-base:"Segoe UI","HelveticaNeue-Light",sans-serif;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px}._1avl7{padding-left:20px;padding-right:20px}._3YPN-{margin:0 auto;padding:0 0 40px;max-width:1000px;max-width:var(--max-content-width)}.-EKGZ{margin:0 0 2rem}._3GwAp{font-size:24px;font-size:1.5rem}._107uo h1,._107uo h2,._107uo h3,._107uo h4,._107uo h5,._107uo h6{font-size:18px;font-size:1.125rem}._107uo pre{white-space:pre-wrap;font-size:14px;font-size:.875rem}._107uo img{max-width:100%}',""]),n.locals={root:"_1avl7",container:"_3YPN-",newsItem:"-EKGZ",newsTitle:"_3GwAp",newsDesc:"_107uo"}},372:function(e,n,t){"use strict";t.r(n);var r,o=t(26),i=t.n(o),a=(t(130),t(333)),s=t.n(a),u=t(341),c=t.n(u);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n,t,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),1===a)n.children=o;else if(a>1){for(var s=new Array(a),u=0;u<a;u++)s[u]=arguments[u+3];n.children=s}if(n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});return{$$typeof:r,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,n){return!n||"object"!==f(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var h,w=l("h1",{},void 0,"React.js News"),v=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),m(this,y(n).apply(this,arguments))}var t,r,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(n,e),t=n,(r=[{key:"render",value:function(){return l("div",{className:c.a.root},void 0,l("div",{className:c.a.container},void 0,w,this.props.news.map((function(e){return l("article",{className:c.a.newsItem},e.link,l("h1",{className:c.a.newsTitle},void 0,l("a",{href:e.link},void 0,e.title)),l("div",{className:c.a.newsDesc,dangerouslySetInnerHTML:{__html:e.content}}))}))))}}])&&p(t.prototype,r),o&&p(t,o),n}(i.a.Component),b=s()(c.a)(v),_=t(334);function g(e,n,t,r){h||(h="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={children:void 0}),1===i)n.children=r;else if(i>1){for(var a=new Array(i),s=0;s<i;s++)a[s]=arguments[s+3];n.children=a}if(n&&o)for(var u in o)void 0===n[u]&&(n[u]=o[u]);else n||(n=o||{});return{$$typeof:h,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}n.default=function(e){var n,t,r,o;return regeneratorRuntime.async((function(i){for(;;)switch(i.prev=i.next){case 0:return n=e.fetch,i.next=3,regeneratorRuntime.awrap(n("/graphql",{body:JSON.stringify({query:"{news{title,link,content}}"})}));case 3:return t=i.sent,i.next=6,regeneratorRuntime.awrap(t.json());case 6:if(r=i.sent,(o=r.data)&&o.news){i.next=10;break}throw new Error("Failed to load the news feed.");case 10:return i.abrupt("return",{title:"React Starter Kit",chunks:["home"],component:g(_.a,{},void 0,g(b,{news:o.news}))});case 11:case"end":return i.stop()}}))}}}]);
//# sourceMappingURL=home.fb4a560f.chunk.js.map