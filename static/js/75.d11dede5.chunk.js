"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[75],{1075:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(885),a=n(2791),c=n(501),u=n(6871),s=n(7378),i="Movies_form__4ow+Z",o="Movies_input__KrUqs",p="Movies_button__GcIka",f="Movies_list__hqYjd",l=n(184);function h(){var t=(0,a.useState)(null),e=(0,r.Z)(t,2),n=e[0],h=e[1],v=(0,c.lr)(),d=(0,r.Z)(v,2),m=d[0],x=d[1],_=m.get("query"),y=(0,u.TH)();(0,a.useEffect)((function(){""!==_&&_&&(0,s.vw)(_).then((function(t){return h(t)}))}),[_]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{className:i,onSubmit:function(t){t.preventDefault();var e=t.currentTarget;x({query:e.elements.query.value}),e.reset()},children:[(0,l.jsx)("input",{type:"text",name:"query",className:o}),(0,l.jsx)("button",{type:"submit",className:p,children:"Search"})]}),(0,l.jsxs)("ul",{children:[n&&n.results.map((function(t){return(0,l.jsx)("li",{className:f,children:(0,l.jsxs)(c.rU,{to:"/movies/".concat(t.id),state:{from:y},children:[" ",t.title]})},t.id)})),n&&0===n.total_results&&(0,l.jsx)("p",{children:"No results on your search"})]})]})}},7378:function(t,e,n){n.d(e,{Hx:function(){return _},SU:function(){return p},Y5:function(){return v},vw:function(){return l},xc:function(){return m}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u),i="024bf82d4805f650033dc69997860333",o="https://api.themoviedb.org/3";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s()("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return e=t.sent,t.next=5,e.data;case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s()("".concat(o,"/search/movie?api_key=").concat(i,"&page=1&query=").concat(e));case 2:return n=t.sent,t.next=5,n.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s()("".concat(o,"/movie/").concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.next=5,n.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s()("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,t.next=5,n.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s()("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,t.next=5,n.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=75.d11dede5.chunk.js.map