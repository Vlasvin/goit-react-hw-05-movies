"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[276,257],{476:function(n,e,t){t.d(e,{Y5:function(){return d},k1:function(){return s},oO:function(){return h},on:function(){return p},y:function(){return f}});var r=t(861),i=t(757),a=t.n(i),o=t(294);function s(){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US");case 3:return e=n.sent,n.abrupt("return",e.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(n){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US&page=1"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function f(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US&page=1"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},672:function(n,e,t){t.d(e,{Z:function(){return l}});var r,i,a=t(766),o=t(867),s=o.ZP.ul(r||(r=(0,a.Z)(["\npadding-left: 20px;\ndisplay: flex;\ngap: 10px;\nflex-direction:column"]))),c=o.ZP.li(i||(i=(0,a.Z)(["\n  list-style-type: none;\n  font-size: 18px;\n"]))),p=t(689),u=t(87),d=t(184),l=function(n){var e=n.movies,t=(0,p.TH)();return(0,d.jsx)(s,{children:e.map((function(n){var e,r=null!==(e=n.name)&&void 0!==e?e:n.title;return t.pathname.includes("/movies")?(0,d.jsx)(c,{children:(0,d.jsx)(u.rU,{to:"".concat(n.id),state:{from:t},children:r})},n.id):(0,d.jsx)(c,{children:(0,d.jsxs)(u.rU,{to:"movies/".concat(n.id),state:{from:t},children:[r," "]})},n.id)}))})}},257:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var r,i,a,o,s,c,p,u,d,l,f,x,h,g,v,b=t(683),m=t(861),Z=t(439),y=t(757),j=t.n(y),w=t(689),k=t(87),P=t(791),_=t(134),S=t(766),U=t(867),z=U.ZP.div(r||(r=(0,S.Z)(["\n  border: 1px solid #ddd;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n"]))),C=U.ZP.button(i||(i=(0,S.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n  margin-left: 40px;\n  margin-top: 20px;\n"]))),Y=U.ZP.img(a||(a=(0,S.Z)(["\nmargin-left: 40px;\nborder: 1px solid #ddd;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n"]))),q=U.ZP.h2(o||(o=(0,S.Z)(["\n  font-size: 30px;\n"]))),E=U.ZP.p(s||(s=(0,S.Z)(["\n  font-size: 18px;\n"]))),O=U.ZP.h3(c||(c=(0,S.Z)([""]))),A=U.ZP.p(p||(p=(0,S.Z)(["\n  font-size: 18px;\n  padding-right: 20px;\n  \n"]))),D=U.ZP.h3(u||(u=(0,S.Z)(["\n  font-weight: bold;\n"]))),F=U.ZP.p(d||(d=(0,S.Z)(["\n  font-size: 18px;\n"]))),I=U.ZP.div(l||(l=(0,S.Z)(["\n  display: flex;\n  gap: 8px;\n"]))),T=U.ZP.p(f||(f=(0,S.Z)(["\n  font-size: 18px;\n  margin-left: 40px;\n  font-weight: bold;\n"]))),G=U.ZP.ul(x||(x=(0,S.Z)(["\ndisplay: flex;\ngap: 20px;\n\n"]))),H=U.ZP.li(h||(h=(0,S.Z)(["\n  list-style-type: none;\n  border: 1px solid #ddd;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 8px;\n  background-color: #c2fbd7;\n \n"]))),L=U.ZP.div(g||(g=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 20px;\n  margin-right: 20px;\n"]))),R=U.ZP.div(v||(v=(0,S.Z)(["\n  display: flex;\n"]))),B=t(476),J=t(184),K=function(){var n,e,t=(0,w.UO)().movieId,r=(0,P.useState)(null),i=(0,Z.Z)(r,2),a=i[0],o=i[1],s=null!==(n=null===(e=(0,w.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";(0,P.useEffect)((function(){var n=function(){var n=(0,m.Z)(j().mark((function n(){var e,r,i;return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!t){n.next=8;break}return n.next=4,(0,B.Y5)(t);case 4:e=n.sent,r=new Date(e.release_date).getFullYear(),i=e.vote_average/10*100,o((0,b.Z)((0,b.Z)({},e),{},{releaseYear:r,percentage:i}));case 8:n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),console.error("Error fetching movie details:",n.t0),o(null);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]);return(0,J.jsx)("main",{children:a&&(0,J.jsxs)(z,{children:[(0,J.jsx)(k.rU,{to:s,style:{textDecoration:"none"},children:(0,J.jsxs)(C,{type:"button",children:[(0,J.jsx)(_.kyg,{}),"Go back"]})}),(0,J.jsxs)(R,{children:[(0,J.jsx)(Y,{src:a.poster_path?"".concat("https://image.tmdb.org/t/p/w300").concat(a.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/images=1000x700"}),(0,J.jsxs)(L,{children:[(0,J.jsxs)(q,{children:[a.title," (",a.releaseYear,")"]}),(0,J.jsxs)(E,{children:["User Score: ",a.percentage.toFixed(1),"%"]}),(0,J.jsx)(O,{children:"Overview"}),(0,J.jsx)(A,{children:a.overview}),(0,J.jsx)(D,{children:"Genres"}),(0,J.jsx)(I,{children:a.genres.map((function(n){return(0,J.jsx)(F,{children:n.name},n.id)}))})]})]}),(0,J.jsx)(T,{children:"Additional information"}),(0,J.jsxs)(G,{children:[(0,J.jsx)(H,{children:(0,J.jsx)(k.rU,{to:"cast",children:"Cast"})}),(0,J.jsx)(H,{children:(0,J.jsx)(k.rU,{to:"reviews",children:"Reviews"})})]}),(0,J.jsx)(P.Suspense,{fallback:(0,J.jsx)("div",{children:"Loading page..."}),children:(0,J.jsx)(w.j3,{})})]})})}},276:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,i,a,o=t(439),s=t(257),c=t(766),p=t(867),u=p.ZP.form(r||(r=(0,c.Z)(["\n  display: flex;\n  gap: 14px;\n  margin-bottom: 20px;\n"]))),d=p.ZP.input(i||(i=(0,c.Z)(["\n  display: inline-block;\n  width: 500px;\n  height: 40px;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  border-radius: 50px;\n  outline: none;\n  padding-left: 16px;\n  padding-right: 16px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),l=p.ZP.button(a||(a=(0,c.Z)(["\n  background-color: #c2fbd7;\n  border-radius: 50px;\n  border-width: 0;\n  box-shadow: rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0;\n  color: #008000;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Arial, sans-serif;\n  font-size: 20px;\n  text-align: center;\n  font-weight: bold;\n  height: 40px;\n  padding: 8px 25px;\n  transition: all 200ms;\n  &:hover {\n    background-color: #afe6c3;\n    transform: scale(1.05);\n  }\n"]))),f=t(87),x=t(791),h=t(184),g=function(n){var e=n.onSubmit,t=(0,f.lr)(),r=(0,o.Z)(t,2),i=r[0],a=r[1],s=(0,x.useState)(""),c=(0,o.Z)(s,2),p=c[0],g=c[1];return(0,h.jsxs)(u,{onSubmit:function(n){n.preventDefault(),console.log(i),a({query:p}),""!==p.trim()&&e(p)},children:[(0,h.jsx)(d,{type:"text",autoComplete:"off",autoFocus:!0,value:p,onChange:function(n){g(n.currentTarget.value)}}),(0,h.jsx)(l,{type:"submit",children:"Search"})]})},v=t(672),b=t(689),m=t(476),Z=function(){var n=(0,x.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],i=(0,b.UO)().movieId,a=(0,f.lr)(),c=(0,o.Z)(a,1)[0].get("query")||"";(0,x.useEffect)((function(){}),[i]);return(0,x.useEffect)((function(){c&&(0,m.on)(c).then((function(n){n.results.length>0&&r(n.results)}))}),[c]),(0,h.jsxs)("main",{children:[(0,h.jsx)(g,{onSubmit:function(n){}}),(0,h.jsx)(v.Z,{movies:t}),(0,h.jsx)(s.default,{movieId:i})]})}}}]);
//# sourceMappingURL=276.0cb712e0.chunk.js.map