"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[855],{855:function(t,n,r){r.r(n),r.d(n,{default:function(){return f}});var e=r(885),a=r(2791),c=r(6871),u=r(8565),i="Cast_image__mOsuM",o="Cast_name__6UbFm",s="Cast_character__tKDlA",p=r(184);function f(){var t=(0,a.useState)(null),n=(0,e.Z)(t,2),r=n[0],f=n[1],h=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.xc)(h).then((function(t){return f(t.cast)}))}),[h]),(0,p.jsx)("ul",{children:r&&r.map((function(t){return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{className:i,src:t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.profile_path):"https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg",alt:"actor foto",loading:"lazy"}),(0,p.jsxs)("p",{className:o,children:["Name: ",(0,p.jsx)("span",{children:t.name})]}),(0,p.jsxs)("p",{className:s,children:["Character: ",(0,p.jsx)("span",{children:t.character})]})]},t.id)}))})}},8565:function(t,n,r){r.d(n,{Hx:function(){return y},SU:function(){return p},Y5:function(){return m},vw:function(){return h},xc:function(){return _}});var e=r(5861),a=r(7757),c=r.n(a),u=r(4569),i=r.n(u),o="024bf82d4805f650033dc69997860333",s="https://api.themoviedb.org/3";function p(){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i()("".concat(s,"/trending/movie/day?api_key=").concat(o)).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i()("".concat(s,"/search/movie?api_key=").concat(o,"&page=1&query=").concat(n)).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i()("".concat(s,"/movie/").concat(n,"?api_key=").concat(o)).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i()("".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(o)).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return w.apply(this,arguments)}function w(){return(w=(0,e.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i()("".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(o)).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=855.e5848f51.chunk.js.map