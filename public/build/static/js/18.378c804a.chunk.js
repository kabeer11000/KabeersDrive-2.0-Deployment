(this.webpackJsonpkabeersdrive=this.webpackJsonpkabeersdrive||[]).push([[18],{384:function(e,t,a){},431:function(e,t,a){"use strict";a.r(t);var n=a(48),r=a(0),l=a.n(r),o=(a(384),a(422)),c=a(225),i=a(415),m=a(1),u=a(2),s=(a(5),a(3)),d=a(6),p=r.forwardRef((function(e,t){var a=e.classes,n=e.className,l=e.component,o=void 0===l?"div":l,c=Object(u.a)(e,["classes","className","component"]);return r.createElement(o,Object(m.a)({className:Object(s.a)(a.root,n),ref:t},c))})),f=Object(d.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(p),E=a(414),h=a(403),b=a(303),y=a(424),v=a(349),O=a(425),g=a(426),w=a(428),j=a(347),C=a(101),D=a(103),k=a(266),x=a(294),S=a(295),M=a(296),P=a(293),T=a(227),N=a(241),_=a(429),A=a(430),F=a(244),I=a(229),U=a(120),$=a(343),L=a(302),B=a(418),J=a(195),R=a(421),V=a(433),W=["second","minute","hour","day","week","month","year"],z=["\u79d2","\u5206\u949f","\u5c0f\u65f6","\u5929","\u5468","\u4e2a\u6708","\u5e74"],Z={},q=function(e,t){Z[e]=t},G=function(e){return Z[e]||Z.en_US},H=[60,60,24,7,365/7/12,12];function K(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function Q(e,t){for(var a=e<0?1:0,n=e=Math.abs(e),r=0;e>=H[r]&&r<H.length;r++)e/=H[r];return(e=Math.floor(e))>(0===(r*=2)?9:1)&&(r+=1),t(e,r,n)[a].replace("%s",e.toString())}function X(e,t){return(+(t?K(t):new Date)-+K(e))/1e3}function Y(e){return parseInt(e.getAttribute("timeago-id"))}var ee={},te=function(e){clearTimeout(e),delete ee[e]};function ae(e,t,a,n){te(Y(e));var r=n.relativeDate,l=n.minInterval,o=X(t,r);e.innerText=Q(o,a);var c=setTimeout((function(){ae(e,t,a,n)}),Math.min(1e3*Math.max(function(e){for(var t=1,a=0,n=Math.abs(e);e>=H[a]&&a<H.length;a++)e/=H[a],t*=H[a];return n=(n%=t)?t-n:t,Math.ceil(n)}(o),l||1),2147483647));ee[c]=0,function(e,t){e.setAttribute("timeago-id",t)}(e,c)}function ne(e){e?te(Y(e)):Object.keys(ee).forEach(te)}q("en_US",(function(e,t){if(0===t)return["just now","right now"];var a=W[Math.floor(t/2)];return e>1&&(a+="s"),[e+" "+a+" ago","in "+e+" "+a]})),q("zh_CN",(function(e,t){if(0===t)return["\u521a\u521a","\u7247\u523b\u540e"];var a=z[~~(t/2)];return[e+" "+a+"\u524d",e+" "+a+"\u540e"]}));var re=function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(t,a)};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),le=function(){return(le=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},oe=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},ce=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dom=null,t}return re(t,e),t.prototype.componentDidMount=function(){this.renderTimeAgo()},t.prototype.componentDidUpdate=function(){this.renderTimeAgo()},t.prototype.renderTimeAgo=function(){var e,t=this.props,a=t.live,n=t.datetime,r=t.locale,l=t.opts;ne(this.dom),!1!==a&&(this.dom.setAttribute("datetime",""+((e=n)instanceof Date?e.getTime():e)),function(e,t,a){var n=e.length?e:[e];n.forEach((function(e){ae(e,function(e){return e.getAttribute("datetime")}(e),G(t),a||{})}))}(this.dom,r,l))},t.prototype.componentWillUnmount=function(){ne(this.dom)},t.prototype.render=function(){var e=this,t=this.props,a=t.datetime,n=(t.live,t.locale),l=t.opts,o=oe(t,["datetime","live","locale","opts"]);return r.createElement("time",le({ref:function(t){e.dom=t}},o),function(e,t,a){return Q(X(e,a&&a.relativeDate),G(t))}(a,n,l))},t.defaultProps={live:!0,className:""},t}(r.Component),ie=l.a.forwardRef((function(e,t){return l.a.createElement(I.a,Object.assign({direction:"left",ref:t},e))})),me=function(e){return e.folder?l.a.createElement("div",null,l.a.createElement(U.a,{fullScreen:!0,open:e.open,onClose:e.handleClose,TransitionComponent:ie},l.a.createElement("div",null,l.a.createElement("div",{style:{top:0}},l.a.createElement($.a,{position:"absolute",elevation:0},l.a.createElement(L.a,null,l.a.createElement(j.a,{edge:"start",color:"inherit",onClick:e.handleClose,"aria-label":"close"},l.a.createElement(B.a,null)),l.a.createElement(c.a,{variant:"h6"},e.folder.metaData.name),l.a.createElement("div",{style:{flex:"1 1 auto"}}),l.a.createElement(j.a,null,l.a.createElement(h.a,null))))),l.a.createElement(J.a,{style:{marginTop:"3.5rem"},elevation:0},l.a.createElement(T.a,null,l.a.createElement(x.a,{button:!0},l.a.createElement(M.a,{primary:"Sharing",secondary:"Shared Folders Can be viewed by anyone who has the link"}),l.a.createElement(R.a,null,l.a.createElement(V.a,{checked:e.folder.metaData.shared,disabled:!0,readOnly:!0}))),l.a.createElement(P.a,null),l.a.createElement(x.a,{button:!0},l.a.createElement(M.a,{primary:"Type"}),l.a.createElement(R.a,null,"Folder")),l.a.createElement(P.a,null),l.a.createElement(x.a,{button:!0},l.a.createElement(M.a,{primary:"Location"}),l.a.createElement(R.a,null,e.folder.immediateParent)),l.a.createElement(P.a,null),l.a.createElement(x.a,{button:!0},l.a.createElement(M.a,{primary:"Folder Id"}),l.a.createElement(R.a,null,e.folder.id)),l.a.createElement(P.a,null),l.a.createElement(x.a,{button:!0},l.a.createElement(M.a,{primary:"Created"}),l.a.createElement(R.a,null,l.a.createElement(ce,{datetime:new Date(e.folder.created)}))),l.a.createElement(P.a,null),l.a.createElement(x.a,{button:!0},l.a.createElement(M.a,{primary:"Last Modified"}),l.a.createElement(R.a,null,l.a.createElement(ce,{datetime:new Date(e.folder.lastUpdated)})))))))):null};me.defaultProps={};var ue=l.a.memo(Object(C.a)(me)),se=Object(C.a)((function(e){var t=Object(E.a)("@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3)");return l.a.createElement(i.a,{className:"".concat(t?"mx-0":"mx-2 my-2"," py-0")},l.a.createElement(f,{className:"py-0"},l.a.createElement("div",{className:"d-flex"},l.a.createElement(c.a,{noWrap:!0,gutterBottom:!0,className:"text-truncate mt-2",style:{textDecoration:"none"},onClick:function(){return e.onClick(e.item.id)}},l.a.createElement(j.a,null,l.a.createElement(h.a,null))," ",e.item.metaData.name),l.a.createElement("div",{style:{flex:"1 1 auto"}}),l.a.createElement(j.a,{onClick:function(){return e.onOptions(e.item)}},l.a.createElement(b.a,null)))))}));se.defaultProps={};var de=function(e){var t=l.a.useState(e.folders),a=Object(n.a)(t,2),r=a[0],i=(a[1],l.a.useState(null)),m=Object(n.a)(i,2),u=m[0],s=m[1],d=l.a.useState(!1),p=Object(n.a)(d,2),f=p[0],E=p[1],b=l.a.useState(!1),j=Object(n.a)(b,2),C=j[0],I=j[1],U=function(e){E(!0),s(e)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{container:!0,direction:"row",alignItems:"flex-start"},r?r.map((function(t,a){return l.a.createElement(o.a,{sm:4,md:4,xs:12,item:!0,key:a},l.a.createElement(se,{item:t,onOptions:U,onClick:e.onClick}))})):null),u?l.a.createElement(l.a.Fragment,null,l.a.createElement(ue,{open:C,handleClose:function(){return I(!1)},folder:u})):null,l.a.createElement(k.a,{variant:"temporary",anchor:"bottom",onClose:function(){E(!1)},ModalProps:{keepMounted:!0},open:f},u?l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,null,l.a.createElement(S.a,null,l.a.createElement(h.a,null)),l.a.createElement(M.a,null,l.a.createElement(c.a,null,u.metaData.name))),l.a.createElement(P.a,null),l.a.createElement(T.a,null,l.a.createElement(x.a,{button:!0,component:D.b,to:"/view/".concat(u.id)},l.a.createElement(S.a,null,l.a.createElement(y.a,null)),l.a.createElement(M.a,{primary:"View",secondary:"View ".concat(u.metaData.name)})),l.a.createElement(x.a,{button:!0,onClick:function(){return Object(N.a)(u)}},l.a.createElement(S.a,null,l.a.createElement(v.a,null)),l.a.createElement(M.a,{primary:"Download",secondary:"Download ".concat(u.name)})),l.a.createElement(x.a,{button:!0,onClick:function(){return e.handleFileDelete(u.id)}},l.a.createElement(S.a,null,l.a.createElement(O.a,null)),l.a.createElement(M.a,{primary:"Delete",secondary:"Delete ".concat(u.name)})),l.a.createElement(x.a,{button:!0,onClick:function(){return I(!0)}},l.a.createElement(S.a,null,l.a.createElement(g.a,null)),l.a.createElement(M.a,{primary:"Details and Activity"})),l.a.createElement(P.a,null),l.a.createElement(x.a,null,l.a.createElement(S.a,null,l.a.createElement(w.a,null)),l.a.createElement(M.a,{primary:"Link Sharing"}),l.a.createElement(S.a,null,l.a.createElement(_.a,{control:l.a.createElement(A.a,{defaultChecked:!!+u.shared,onChange:function(e){return Object(F.a)(u.id,!u.shared)}}),label:""}))))):null))};de.defaultProps={};t.default=Object(r.memo)(Object(C.a)(de))}}]);
//# sourceMappingURL=18.378c804a.chunk.js.map