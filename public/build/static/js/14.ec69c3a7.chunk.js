(this.webpackJsonpkabeersdrive=this.webpackJsonpkabeersdrive||[]).push([[14],{237:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r="".concat(window.location.protocol,"//").concat(window.location.host),a={getFolderById:function(e){return"".concat(r,"/api/get/folder/").concat(e||window.user.user_id)},getSharedFolderById:function(e){return"".concat(r,"/api/get/shared/folder/").concat(e)},getFolderByFake:function(e){return"https://raw.githubusercontent.com/kabeer11000/sample-response/master/Drive/folder.json"},changeFileSharing:function(e){return"".concat(r,"/api/sharing/file/").concat(e)},changeFileSharingFake:function(e,t){return"https://cdn.jsdelivr.net/gh/kabeer11000/sample-response@master/Drive/folder.json"},noPreviewAvailable:function(e){return"http://drive.hosted-kabeersnetwork.unaux.com/server/modal/no-preview.php?d=".concat(e)},textFileViewer:function(e){return"http://drive.hosted-kabeersnetwork.unaux.com/uViewFile.php?id=".concat(e)},documentViewer:function(e){return"https://docs.google.com/gview?url=".concat(e,"&embedded=true")},fileDownloadById:function(e){return"http://drive.hosted-kabeersnetwork.unaux.com/server/downloaders/download-file.php?id=".concat(e)},searchByQuery:function(e){return"http://drive.hosted-kabeersnetwork.unaux.com/server/api/search.php?q=".concat(e)},userGetAllContentsMyDrive:"http://drive.hosted-kabeersnetwork.unaux.com/server/api/search.php?q=filter:all",userGetAllContentsFolder:function(e){return"http://drive.hosted-kabeersnetwork.unaux.com/server/api/search.php?q=filter:all&folder=".concat(e)},userSearchContentsMyDrive:"http://drive.hosted-kabeersnetwork.unaux.com/server/api/search.php?q=filter:all",loginByUuid:"http://drive.hosted-kabeersnetwork.unaux.com/server/api/login.php",internalLoginComponentRoute:"/login",fileUpload:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return"".concat(r,"/api/upload/").concat(e)},authRedirect:"".concat(r,"/auth/redirect"),refreshToken:"".concat(r,"/auth/store/tokens/refresh"),getRecentFiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return"".concat(r,"/api/get/recent/file/").concat(e||"")},getFileDetailsById:function(e){return"".concat(r,"/api/get/file/").concat(e)},createNewFolder:function(){return"".concat(r,"/api/create/new/folder")},getUserData:"".concat(r,"/auth/user/data"),filePath:"http://kabeer11000.mzzhost.com/",filePathReadFile:function(e){return"https://vector-kabeersnetwork.000webhostapp.com/view-text.php?i=".concat(e)},filePathRaw:function(e){return"https://vector-kabeersnetwork.000webhostapp.com/drive-hosted/".concat(e)},bulkDeleteFiles:"".concat(r,"/api/delete/bulk/file"),deleteOneFile:function(e){return"".concat(r,"/api/delete/file/").concat(e)}}},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={searchResults:"searchResults____bEBwhcQE1V",userData:"userData____arP4OlQ8QC"}},241:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return d}));var r=n(238),a=n.n(r),o=n(239),c=n(48),i=n(237),u=(n(0),function(e){return e?(/^[?#]/.test(e)?e.slice(1):e).split("&").reduce((function(e,t){var n=t.split("="),r=Object(c.a)(n,2),a=r[0],o=r[1];return e[a]=o?decodeURIComponent(o.replace(/\+/g," ")):"",e}),{}):{}}),s=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.createElement("a"),e.abrupt("return",(n.setAttribute("download",t.name),n.href=i.a.fileDownloadById(t.id),document.body.appendChild(n),n.click(),n.remove()));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l={files:{includeScore:!1,useExtendedSearch:!1,shouldSort:!1,threshold:.5,findAllMatches:!1,minMatchCharLength:0,keys:["name","mimeType","shared","dateCreated"]},folders:{includeScore:!1,useExtendedSearch:!1,shouldSort:!1,threshold:.5,findAllMatches:!1,minMatchCharLength:0,keys:["name","shared"]}},d=function(e){return Object.keys(e).reduce((function(t,n){return t.push(n+"="+encodeURIComponent(e[n])),t}),[]).join("&")}},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l}));var r=n(238),a=n.n(r),o=n(239),c=n(237),i=n(240),u=function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),r=0;r<n.length;r++){for(var a=n[r];" "===a.charAt(0);)a=a.substring(1);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return""},s=function(){return!!u("token")},l=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=new AbortController,o=u("token")){e.next=4;break}return e.abrupt("return",window.location.href=c.a.authRedirect);case 4:if(o=JSON.parse(o),!(Math.floor((Date.now()-o.exp)/1e3/60)>120)){e.next=9;break}return e.next=8,fetch(c.a.refreshToken,{signal:r.signal},5e3).then((function(e){return e.ok?e.json():null}));case 8:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",o.token);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u("user_data_token")){e.next=2;break}return e.abrupt("return",window.location.href=c.a.authRedirect);case 2:if(null!==localStorage.getItem(i.a.userData)){e.next=6;break}return e.abrupt("return",fetch(c.a.getUserData,{headers:new Headers({IdToken:JSON.parse(u("user_data_token")).token})}).then((function(e){return e.json()})).then((function(e){return localStorage.setItem(i.a.userData,btoa(JSON.stringify(e)))})).catch((function(e){return console.log(e)})));case 6:return e.next=8,void(window.user=JSON.parse(atob(localStorage.getItem(i.a.userData))));case 8:case"end":return e.stop()}}),e)})))()},244:function(e,t,n){"use strict";n.d(t,"f",(function(){return d})),n.d(t,"j",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return b})),n.d(t,"i",(function(){return m})),n.d(t,"h",(function(){return v})),n.d(t,"e",(function(){return g})),n.d(t,"g",(function(){return w})),n.d(t,"d",(function(){return k}));var r=n(238),a=n.n(r),o=n(239),c=n(237),i=n(254),u=n(241),s=n(240),l=n(243),d=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,o=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>2&&void 0!==o[2]?o[2]:new AbortController,e.next=3,fetch(c.a.getFolderById(t),{headers:new Headers({Authorization:"Bearer ".concat(n)}),signal:r.signal}).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,o,i=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>2&&void 0!==i[2]?i[2]:null,o=i.length>3&&void 0!==i[3]?i[3]:new AbortController,e.next=4,fetch(c.a.fileUpload(r||JSON.parse(atob(localStorage.getItem(s.a.userData))).user_id),{method:"POST",headers:new Headers({Authorization:"Bearer ".concat(t)}),signal:o.signal,body:n}).then((function(e){return e.json()}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=(function(e){var t=new Blob(["self.onmessage = ",e.toString()],{type:"text/javascript"}),n=URL.createObjectURL(t),r=new Worker(n);r.json=function(e){return"object"===typeof e?postMessage(JSON.stringify(e).toString()):new Error("Property Not an Object")},r.end=function(){return r.postMessage("end")},r.get=r.onmessage}((function(e){var t=JSON.parse(e.data);fetch(t.url,t).then((function(e){return e.json()})).then((function(e){return postMessage(JSON.stringify(e))}))})),function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,o,i=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>2&&void 0!==i[2]?i[2]:void 0,o=i.length>3&&void 0!==i[3]?i[3]:new AbortController,e.next=4,fetch(c.a.createNewFolder(),{method:"POST",headers:new Headers({Authorization:"Bearer ".concat(t),"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}),signal:o.signal,body:Object(u.d)({name:n||"Untitled Folder",id:r})}).then((function(e){return e.json()}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),p=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,o=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>2&&void 0!==o[2]?o[2]:new AbortController,e.abrupt("return",Object(l.b)().then((function(e){return fetch(c.a.changeFileSharing(t),{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",Authorization:"Bearer ".concat(e)}),body:Object(u.d)({sharing:n}),signal:r.signal})})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:new AbortController,e.abrupt("return",Object(l.b)().then((function(e){return fetch(c.a.bulkDeleteFiles,{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",Authorization:"Bearer ".concat(e)}),body:Object(u.d)({ids:t.join("|")}),signal:n.signal})})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:null,e.abrupt("return",n?fetch(c.a.userGetAllContentsFolder(n),{}).then((function(e){return e.json()})).then((function(e){return{files:new i.a(e.items.files,u.b.files).search(t),folders:new i.a(e.items.folders,u.b.folders).search(t)}})):fetch("http://cdn.jsdelivr.net/gh/kabeer11000/sample-response/Drive/search-filter-all.json").then((function(e){return e.json()})).then((function(e){return{files:new i.a(e.items.files,u.b.files).search(t),folders:new i.a(e.items.folders,u.b.folders).search(t)}})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.length>2&&void 0!==r[2]?r[2]:10,e.next=3,fetch(c.a.getRecentFiles(10),{headers:new Headers({Authorization:"Bearer ".concat(t)}),signal:n.signal}).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(a.a.mark((function e(t,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(c.a.getFileDetailsById(r),{headers:new Headers({Authorization:"Bearer ".concat(t)}),signal:n.signal}).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,o=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>2&&void 0!==o[2]?o[2]:new AbortController,e.next=3,fetch(c.a.getFolderById(n),{headers:new Headers({Authorization:"Bearer ".concat(t)}),signal:r.signal}).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},261:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(58),c=Object(r.lazy)((function(){return Promise.all([n.e(2),n.e(9),n.e(16)]).then(n.bind(null,306))}));t.a=function(e){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(o.a,null)},a.a.createElement(c,e))}},320:function(e,t,n){},400:function(e,t,n){"use strict";n.r(t);var r=n(50),a=n(48),o=n(271),c=n(0),i=n.n(c),u=(n(320),n(284)),s=n(261),l=n(241),d=n(244),f=n(225),h=n(343),p=n(243),b=n(432),m=n(106),v=n.n(m),g=n(141),w=n.n(g),k=n(101),j=n(3),x=n(321),y=n.n(x),O=n(401),E=n(344),C=n(345),F=n(340),S=n.n(F),A=n(341),D=n.n(A),N=n(342),B=n.n(N),I=n(387),R=n(339),T=n.n(R),_=n(110),U=n(103),H=n(13),z=n(226),P=n(112);function M(e){var t=e.children,n=e.value,r=e.index,a=Object(o.a)(e,["children","value","index"]);return i.a.createElement(f.a,Object.assign({className:"m-0 p-0",role:"tabpanel",hidden:n!==r,id:"action-tabpanel-".concat(r),"aria-labelledby":"action-tab-".concat(r)},a),n===r&&i.a.createElement(I.a,null,t))}var J={"/recents":0,"/shared":1,"/my-drive":2},q=function(e){return{component:U.b,to:Object.keys(J)[e],id:"action-tab-".concat(e),"aria-controls":"action-tabpanel-".concat(e)}},G=v()((function(e){return{root:{backgroundColor:e.palette.background.paper,width:500,position:"relative",minHeight:200},fab:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},fabGreen:{color:e.palette.common.white,backgroundColor:w.a[500],"&:hover":{backgroundColor:w.a[600]}}}})),L=function(e){var t=new AbortController,n=i.a.useState(null),o=Object(a.a)(n,2),m=o[0],v=o[1],g=i.a.useState(null),w=Object(a.a)(g,2),k=w[0],x=w[1];Object(c.useEffect)((function(){return Object(p.b)().then((function(e){Object(d.h)(e,t,10).then((function(e){return x(e)})).catch((function(e){return null})),Object(d.f)(Object(l.c)("id").id||"",e,t).then((function(e){return v(e)})).catch((function(e){return null}))})),function(){t.abort()}}),[]);var F=G(),A=T()();console.log(window.location.pathname);var N=i.a.useState(J[window.location.pathname]),I=Object(a.a)(N,2),R=I[0],U=I[1],L=Object(_.useDialog)(),Q=(Object(H.e)(),{enter:A.transitions.duration.enteringScreen,exit:A.transitions.duration.leavingScreen}),V=[{color:"primary",className:F.fab,icon:i.a.createElement(S.a,null),label:"Add"},{color:"secondary",className:F.fab,icon:i.a.createElement(D.a,null),label:"Edit"},{props:{onClick:function(){Object(p.b)().then((function(e){return L.prompt({title:i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,"Create New Folder"),i.a.createElement(f.a,{className:"text-muted",variant:"caption"},"Type Folder Name")),required:!0}).then((function(t){return Object(d.b)(e,t)})).catch((function(){return console.log("clicked cancel")}))}))}},color:"inherit",className:Object(j.a)(F.fab,F.fabGreen),icon:i.a.createElement(B.a,null),label:"Expand"}];return i.a.createElement(z.a,{in:!0},i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{position:"sticky",style:{marginTop:"0rem",zIndex:2,backgroundColor:"#303030"},color:"paper"},i.a.createElement(b.a,{value:R,onChange:function(e,t){U(t)},indicatorColor:"primary",textColor:"primary","aria-label":"action tabs example",variant:"fullWidth",centered:!0,scrollButtons:"auto"},i.a.createElement(O.a,Object.assign({label:"Recent"},q(0))),i.a.createElement(O.a,Object.assign({label:"Files"},q(2))))),i.a.createElement("div",{className:"HomeComponent"},i.a.createElement(y.a,{axis:"rtl"===A.direction?"x-reverse":"x",index:R,className:"p-0 m-0",onChangeIndex:function(e){U(e)}},i.a.createElement(M,{index:0,value:R,dir:A.direction},k&&k.files?i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{handleFileDelete:function(e){return v(Object(r.a)(Object(r.a)({},m),{},{files:m.files.filter((function(t){return t.id===e}))}))},folder:{owner:window.user.user_id,metaData:{name:"My Drive"},files:k.files,folders:[]},recent:!0})):null),i.a.createElement(M,{value:R,index:1,dir:A.direction,style:{minHeight:"100vh"}},i.a.createElement(u.a,{className:"px-0",style:{minHeight:"100vh"}},i.a.createElement(P.a,{embedded:!0,id:window.user.user_id})))),V.map((function(e,t){return i.a.createElement(E.a,{key:e.color,in:R===t,timeout:Q,style:{transitionDelay:"".concat(R===t?Q.exit:0,"ms")},unmountOnExit:!0},i.a.createElement(C.a,Object.assign({"aria-label":e.label,className:e.className,color:e.color,style:{position:"fixed"}},e.props),e.icon))})))))};L.defaultProps={},t.default=i.a.memo(Object(k.a)(L))}}]);
//# sourceMappingURL=14.ec69c3a7.chunk.js.map