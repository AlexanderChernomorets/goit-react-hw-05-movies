"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{618:function(n,t,e){e.d(t,{Bt:function(){return v},Hq:function(){return x},TP:function(){return g},XT:function(){return h},d5:function(){return m}});var r=e(861),a=e(757),c=e.n(a),i=e(912),u="2d47787539d4eda04ce92011fd824a06",o="https://api.themoviedb.org/3",s="/trending/movie/day",p="/search/movie",l="/movie",f="/credits",d="/reviews",h=function(){var n=(0,r.Z)(c().mark((function n(){var t,e=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.length>0&&void 0!==e[0]?e[0]:1,n.next=3,i.Z.get("".concat(o,"/").concat(s,"?api_key=").concat(u,"&language=en-US&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/").concat(l,"/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,i.Z.get("".concat(o,"/").concat(p,"?api_key=").concat(u,"&page=").concat(e,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,i.Z.get("".concat(o,"/").concat(l,"/").concat(t,"/").concat(d,"?api_key=").concat(u,"&language=en-US&page=").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/movie/").concat(t).concat(f,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},779:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,c,i,u,o=e(861),s=e(439),p=e(757),l=e.n(p),f=e(791),d=e(689),h=e(618),g=e(168),x=e(444),v=x.ZP.ul(r||(r=(0,g.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),m=x.ZP.p(a||(a=(0,g.Z)(["\n  margin: 0 0 20px 0;\n  color: rgb(52, 52, 52);\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 18px;\n  font-family: Orienta, sans-serif;\n  padding-left: 30px;\n"]))),w=x.ZP.p(c||(c=(0,g.Z)(["\n  margin: 0 0 0 10px;\n  font-weight: normal;\n  text-shadow: rgb(0 0 0 / 60%) 1px 1px;\n  font-size: 32px;\n  font-family: Muli, sans-serif;\n"]))),Z=x.ZP.p(i||(i=(0,g.Z)(["\n  display: flex;\n  align-items: baseline;\n  margin: 0 0 5px 0;\n  color: rgb(52, 52, 52);\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 35px;\n  font-family: Orienta, sans-serif;\n"]))),y=x.ZP.p(u||(u=(0,g.Z)(["\n  display: flex;\n  align-items: baseline;\n  margin: 0 0 5px 0;\n  color: rgb(52, 52, 52);\n  font-weight: normal;\n  font-size: 40px;\n  line-height: 35px;\n  font-family: Orienta, sans-serif;\n"]))),k=e(184),b=function(){var n=(0,f.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,f.useState)(null),c=(0,s.Z)(a,2),i=c[0],u=c[1],p=(0,d.UO)().movieId;return(0,f.useEffect)((function(){var n=function(){var n=(0,o.Z)(l().mark((function n(){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.Bt)(p);case 3:t=n.sent,r(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),u(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[p]),(0,k.jsxs)(k.Fragment,{children:[i&&(0,k.jsx)("div",{children:i}),(0,k.jsx)(v,{children:0===e.length?(0,k.jsx)("li",{children:(0,k.jsx)(y,{children:"There is no reviews yet.."})}):e.map((function(n){return console.log(n),(0,k.jsxs)("li",{children:[(0,k.jsxs)(Z,{children:["Author: ",(0,k.jsx)(w,{children:n.author})]}),(0,k.jsx)(m,{children:n.content})]},n.id)}))})]})}}}]);
//# sourceMappingURL=779.944db9af.chunk.js.map