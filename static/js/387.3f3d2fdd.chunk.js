"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{618:function(n,t,e){e.d(t,{Bt:function(){return g},Hq:function(){return v},TP:function(){return h},XT:function(){return d},d5:function(){return x}});var r=e(861),a=e(757),c=e.n(a),u=e(912),i="2d47787539d4eda04ce92011fd824a06";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="/trending/movie/day",o="/search/movie",p="/movie",f="/credits",l="/reviews",d=function(){var n=(0,r.Z)(c().mark((function n(){var t,e=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.length>0&&void 0!==e[0]?e[0]:1,n.next=3,u.Z.get("".concat(s,"?api_key=").concat(i,"&language=en-US&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(p,"/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,u.Z.get("".concat(o,"?api_key=").concat(i,"&page=").concat(e,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,u.Z.get("".concat(p,"/").concat(t,"/").concat(l,"?api_key=").concat(i,"&language=en-US&page=").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t).concat(f,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,a,c,u,i,s=e(861),o=e(439),p=e(757),f=e.n(p),l=e(410),d=e(791),h=e(689),v=e(618),g=e(168),x=e(444),m=x.ZP.ul(r||(r=(0,g.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n"]))),Z=x.ZP.li(a||(a=(0,g.Z)(["\n  display: flex;\n  width: 50%;\n  margin-bottom: 20px;\n"]))),w=x.ZP.img(c||(c=(0,g.Z)(["\n  width: 150px;\n  height: 100%;\n  border-radius: 5px;\n"]))),k=x.ZP.div(u||(u=(0,g.Z)(["\n  margin-left: 20px;\n"]))),y=x.ZP.p(i||(i=(0,g.Z)(["\n  display: flex;\n  align-items: baseline;\n  margin: 0px;\n  color: rgb(52, 52, 52);\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 35px;\n  font-family: Orienta, sans-serif;\n"]))),b=e(184),_=function(){var n=(0,d.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,d.useState)(null),c=(0,o.Z)(a,2),u=c[0],i=c[1],p=(0,d.useState)(!1),g=(0,o.Z)(p,2),x=g[0],_=g[1],j=(0,h.UO)().movieId;return(0,d.useEffect)((function(){var n=function(){var n=(0,s.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,_(!0),n.next=4,(0,v.d5)(j);case 4:t=n.sent,r(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),i("404 Page Not Found");case 11:return n.prev=11,_(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[j]),(0,b.jsxs)(b.Fragment,{children:[x&&(0,b.jsx)(l.Z,{}),u&&(0,b.jsx)("div",{children:u}),(0,b.jsx)(m,{children:e.map((function(n){var t=n.id,e=n.name,r=n.character,a=n.profile_path;return(0,b.jsxs)(Z,{children:[(0,b.jsx)(w,{src:"https://image.tmdb.org/t/p/w300".concat(a)||0,alt:"".concat(e," portrait")}),(0,b.jsxs)(k,{children:[(0,b.jsxs)(y,{children:["Name: ",e]}),(0,b.jsxs)(y,{children:["Character: ",r]})]})]},t)}))})]})}}}]);
//# sourceMappingURL=387.3f3d2fdd.chunk.js.map