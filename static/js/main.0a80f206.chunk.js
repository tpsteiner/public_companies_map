(this.webpackJsonpauditors_map=this.webpackJsonpauditors_map||[]).push([[0],{27:function(e,t,n){e.exports=n.p+"static/media/filers.765848e0.csv"},28:function(e,t,n){e.exports=n.p+"static/media/state_centers.3b98a23a.csv"},29:function(e,t,n){e.exports=n.p+"static/media/firms.fd70d507.csv"},36:function(e,t,n){e.exports=n(50)},41:function(e,t,n){},42:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(2),o=n.n(i),s=(n(41),n(42),n(20)),l=n(9),c=n(10),u=n(12),m=n(11),f=n(25),d=n.n(f),h=n(13),p=n(26),g=n.n(p),v=n(27),_=n.n(v),b=n(28),k=n.n(b),y=n(29),E=n.n(y),S=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={marker:a.props.marker},a}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.marker!==e.marker&&this.setState({marker:this.props.marker})}},{key:"render",value:function(){var e=this.state.marker;if(0===Object.keys(e).length)return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("p",null,"Select a marker to show details..."));var t=[["Company",e["Issuer Name"]],["Stock Ticker",e["Issuer Ticker"]],["Sector",e.sector_name],["Industry",e.industry_name],["Fiscal year end",e.fiscal_year_end],["Auditor",e["Firm Name"]],["Audit Lead Partner",e["Engagement Partner Name"]],["Auditor Location",e["Firm Issuing City"]+", "+e["Firm Issuing State"]]];return r.a.createElement("table",{className:"marker-deets"},r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e[0]),r.a.createElement("td",null,e[1]))}))))}}]),n}(a.Component),C=n(19),w={osm:function(e,t,n){var a=String.fromCharCode(97+(e+t+n)%3);return"https://".concat(a,".tile.openstreetmap.org/").concat(n,"/").concat(e,"/").concat(t,".png")}},F={geo:null,firm:null},L={},z=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).zoomIn=function(){a.setState({zoom:Math.min(a.state.zoom+1,18)})},a.zoomOut=function(){a.setState({zoom:Math.max(a.state.zoom-1,1)})},a.handleBoundsChange=function(e){var t=e.center,n=e.zoom;e.bounds,e.initial;a.setState({center:t,zoom:n})},a.handleMarkerClick=function(e){e.event;var t=e.payload;e.anchor;a.setState({selectedMarker:t})},a.handleGeoChange=function(e,t){console.log(t);try{F.geo=e.value,L=a.state.states.find((function(t){return t.state===e.value}))}catch(o){F.geo=null}var n=[],r=Object(s.a)({},e),i=a.state.filter_cnt;return null===e&&2===i?(n=a.state.filers.filter((function(e){return e["Firm Name"]===F.firm})),a.setState({filers_L1:n,filter_cnt:1}),void a.temporarilyDisable()):null===e?(a.setState({filter_cnt:0}),void a.temporarilyDisable()):void(0!==i&&F.firm?2===i?(n=a.state.filers.filter((function(e){return e.business_state===r.value&&e["Firm Name"]===F.firm})),a.setState({filers_L2:n,filter_cnt:2,center:[L.latitude,L.longitude]})):(n=a.state.filers_L1.filter((function(e){return e.business_state===r.value})),a.setState({filers_L2:n,filter_cnt:2,center:[L.latitude,L.longitude]})):(n=a.state.filers.filter((function(e){return e.business_state===r.value})),a.setState({filers_L1:n,filter_cnt:1,center:[L.latitude,L.longitude]})))},a.handleFirmChange=function(e){try{F.firm=e.label}catch(i){F.firm=null}var t=[],n=Object(s.a)({},e),r=a.state.filter_cnt;return null===e&&2===r?(t=a.state.filers.filter((function(e){return e.business_state===F.geo})),a.setState({filers_L1:t,filter_cnt:1}),void a.temporarilyDisable()):null===e?(a.setState({filter_cnt:0}),void a.temporarilyDisable()):void(0!==r&&F.geo?2===r?(t=a.state.filers.filter((function(e){return e["Firm Name"]===n.label&&e.business_state===F.geo})),a.setState({filers_L2:t,filter_cnt:2})):(t=a.state.filers_L1.filter((function(e){return e["Firm Name"]===n.label})),a.setState({filers_L2:t,filter_cnt:2})):(t=a.state.filers.filter((function(e){return e["Firm Name"]===n.label})),a.setState({filers_L1:t,filter_cnt:1})))},a.temporarilyDisable=function(){var e=document.getElementById("geo-select"),t=document.getElementById("firm-select");e.setAttribute("style","pointer-events: none"),t.setAttribute("style","pointer-events: none");var n;(n=50,new Promise((function(e,t){return setTimeout(e,n)}))).then((function(){e.setAttribute("style","pointer-events: all"),t.setAttribute("style","pointer-events: all")}))},a.state={center:[43.3,-84.5390101],zoom:6,provider:"osm",metaWheelZoom:!1,twoFingerDrag:!1,animate:!1,zoomSnap:!0,mouseEvents:!0,touchEvents:!0,minZoom:1,maxZoom:18,filers:[],filers_L1:[],filers_L2:[],states:[],state_options:[],firm_options:[],selectedMarker:{},filter_cnt:0,width:document.body.clientWidth,height:window.screen.availHeight},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(h.a)(_.a).then((function(t){t.forEach((function(e){e.cik=+e.cik,e.lat=+e.lat,e.lng=+e.lng})),e.setState({filers:t})})),Object(h.a)(k.a).then((function(t){t.forEach((function(e){e.latitude=+e.latitude,e.longitude=+e.longitude})),e.setState({states:t}),e.setState({state_options:t.map((function(e){return{value:e.state,label:e.name}}))})})),Object(h.a)(E.a).then((function(t){t.forEach((function(t){e.state.firm_options.push({label:t["Firm Name"]})})),e.setState({firm_options:t.map((function(e){return{label:e["Firm Name"]}}))})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.center,a=t.zoom,i=t.provider,o=t.animate,s=t.metaWheelZoom,l=t.twoFingerDrag,c=t.zoomSnap,u=t.mouseEvents,m=t.touchEvents,f=t.minZoom,h=t.maxZoom,p=t.filter_cnt,v=1200>this.state.width?this.state.width-10:1200,_=650>this.state.height/2?this.state.height/2:650,b=[];return 0===p?b=[]:1===p?b=this.state.filers_L1:2===p&&(b=this.state.filers_L2),r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center",fontSize:"large",margin:".1em"}},"Public Companies and their Auditors"),r.a.createElement(C.a,{id:"geo-select",options:this.state.state_options,onChange:function(t){return e.handleGeoChange(t)},isClearable:!0,placeholder:"Select a State..."}),r.a.createElement(C.a,{id:"firm-select",options:this.state.firm_options,onChange:this.handleFirmChange,isClearable:!0,placeholder:"Select an Audit Firm..."}),r.a.createElement("div",null,r.a.createElement("div",{style:{maxWidth:v,margin:"0 auto"}},r.a.createElement(d.a,{limitBounds:"edge",center:n,zoom:a,provider:w[i],onBoundsChanged:this.handleBoundsChange,onClick:this.handleClick,animate:o,metaWheelZoom:s,twoFingerDrag:l,zoomSnap:c,mouseEvents:u,touchEvents:m,minZoom:f,maxZoom:h,width:v,height:_,boxClassname:"pigeon-filters"},b.map((function(t){return r.a.createElement(g.a,{key:t.cik,anchor:[t.lat,t.lng],payload:t,onClick:e.handleMarkerClick})}))))),r.a.createElement(S,{marker:this.state.selectedMarker}))}}]),n}(a.Component);var O=function(){return r.a.createElement(z,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.0a80f206.chunk.js.map