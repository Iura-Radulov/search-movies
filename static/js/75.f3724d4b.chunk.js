"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[75],{1075:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(885),c=n(2791),a=n(501),u=n(6871),s=n(7378),i="Movies_form__4ow+Z",o="Movies_input__KrUqs",p="Movies_button__GcIka",f="Movies_list__hqYjd",l=n(7549),h=n(184);function v(){var t=(0,c.useState)(null),e=(0,r.Z)(t,2),n=e[0],v=e[1],d=(0,a.lr)(),m=(0,r.Z)(d,2),x=m[0],_=m[1],y=x.get("query"),w=(0,u.TH)();(0,c.useEffect)((function(){""!==y&&y&&(0,s.vw)(y).then((function(t){return v(t)}))}),[y]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("form",{className:i,onSubmit:function(t){t.preventDefault();var e=t.currentTarget;_({query:e.elements.query.value}),e.reset()},children:[(0,h.jsx)("input",{type:"text",name:"query",className:o}),(0,h.jsx)("button",{type:"submit",className:p,children:"Search"})]}),(0,h.jsxs)("ul",{children:[n&&n.results.map((function(t){return(0,h.jsx)("li",{className:f,children:(0,h.jsxs)(a.rU,{to:"".concat(l.L,"movies/").concat(t.id),state:{from:w},children:[" ",t.title]})},t.id)})),n&&0===n.total_results&&(0,h.jsx)("p",{children:"No results on your search"})]})]})}},7378:function(t,e,n){n.d(e,{Hx:function(){return _},SU:function(){return p},Y5:function(){return v},vw:function(){return l},xc:function(){return m}});var r=n(5861),c=n(7757),a=n.n(c),u=n(4569),s=n.n(u),i="024bf82d4805f650033dc69997860333",o="https://api.themoviedb.org/3";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s()("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return e=t.sent,t.next=5,e.data;case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s()("".concat(o,"/search/movie?api_key=").concat(i,"&page=1&query=").concat(e));case 2:return n=t.sent,t.next=5,n.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s()("".concat(o,"/movie/").concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.next=5,n.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s()("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,t.next=5,n.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s()("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,t.next=5,n.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=75.f3724d4b.chunk.js.map