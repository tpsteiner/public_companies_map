(this.webpackJsonpauditors_map=this.webpackJsonpauditors_map||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/filersOHMI.3d76a657.csv"},30:function(e,t,a){e.exports=a(44)},35:function(e,t,a){},36:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),o=a.n(s),i=(a(35),a(36),a(7)),m=a(8),c=a(10),l=a(9),d=a(21),h=a.n(d),u=a(24),p=a(22),k=a.n(p),g=a(23),E=a.n(g),v=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={marker:n.props.marker},n}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.marker!==e.marker&&this.setState({marker:this.props.marker})}},{key:"render",value:function(){return 0===Object.keys(this.state.marker).length?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("p",null,"Select a marker to show details...")):r.a.createElement("div",{style:{display:"table",margin:"auto"}},r.a.createElement("div",{style:{display:"table-cell"}},r.a.createElement("p",{className:"marker-deets"},"Company:"),r.a.createElement("p",{className:"marker-deets"},"Stock Ticker:"),r.a.createElement("p",{className:"marker-deets"},"Sector:"),r.a.createElement("p",{className:"marker-deets"},"Industry:"),r.a.createElement("p",{className:"marker-deets"},"Fiscal Year-end:"),r.a.createElement("p",{className:"marker-deets"},"Auditor:"),r.a.createElement("p",{className:"marker-deets"},"Audit Lead Partner:"),r.a.createElement("p",{className:"marker-deets"},"Auditor Location:")),r.a.createElement("div",{style:{display:"table-cell"}},r.a.createElement("p",{className:"marker-deets"},this.state.marker["Issuer Name"]),r.a.createElement("p",{className:"marker-deets"},this.state.marker["Issuer Ticker"]),r.a.createElement("p",{className:"marker-deets"},this.state.marker.sector_name),r.a.createElement("p",{className:"marker-deets"},this.state.marker.industry_name),r.a.createElement("p",{className:"marker-deets"},this.state.marker.fiscal_year_end),r.a.createElement("p",{className:"marker-deets"},this.state.marker["Firm Name"]),r.a.createElement("p",{className:"marker-deets"},this.state.marker["Engagement Partner Name"]),r.a.createElement("p",{className:"marker-deets"},this.state.marker["Firm Issuing City"],", ",this.state.marker["Firm Issuing State"])))}}]),a}(n.Component),f={osm:function(e,t,a){var n=String.fromCharCode(97+(e+t+a)%3);return"https://".concat(n,".tile.openstreetmap.org/").concat(a,"/").concat(e,"/").concat(t,".png")}},y=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).zoomIn=function(){n.setState({zoom:Math.min(n.state.zoom+1,18)})},n.zoomOut=function(){n.setState({zoom:Math.max(n.state.zoom-1,1)})},n.handleBoundsChange=function(e){var t=e.center,a=e.zoom;e.bounds,e.initial;n.setState({center:t,zoom:a})},n.handleMarkerClick=function(e){e.event;var t=e.payload;e.anchor;n.setState({selectedMarker:t})},n.handleAnimationStart=function(){n.setState({animating:!0})},n.handleAnimationStop=function(){n.setState({animating:!1})},n.state={center:[43.3,-84.5390101],zoom:6,provider:"osm",metaWheelZoom:!1,twoFingerDrag:!1,animate:!0,zoomSnap:!0,mouseEvents:!0,touchEvents:!0,minZoom:1,maxZoom:18,filers:[],selectedMarker:{},width:document.body.clientWidth,height:window.screen.availHeight},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(u.a)(E.a).then((function(t){t.forEach((function(e){e.cik=+e.cik,e.lat=+e.lat,e.lng=+e.lng})),e.setState({filers:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.center,n=t.zoom,s=t.provider,o=t.animate,i=t.metaWheelZoom,m=t.twoFingerDrag,c=t.zoomSnap,l=t.mouseEvents,d=t.touchEvents,u=t.minZoom,p=t.maxZoom,g=1200>this.state.width?this.state.width-10:1200,E=650>this.state.height/2?this.state.height/2:650;return r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center",fontSize:"large"}},"Public Companies and their Auditors"),r.a.createElement("div",{style:{marginTop:20}},r.a.createElement("div",{style:{maxWidth:g,margin:"0 auto"}},r.a.createElement(h.a,{limitBounds:"edge",center:a,zoom:n,provider:f[s],onBoundsChanged:this.handleBoundsChange,onClick:this.handleClick,onAnimationStart:this.handleAnimationStart,onAnimationStop:this.handleAnimationStop,animate:o,metaWheelZoom:i,twoFingerDrag:m,zoomSnap:c,mouseEvents:l,touchEvents:d,minZoom:u,maxZoom:p,width:g,height:E,boxClassname:"pigeon-filters"},this.state.filers.map((function(t){return r.a.createElement(k.a,{key:t.cik,anchor:[t.lat,t.lng],payload:t,onClick:e.handleMarkerClick})}))))),r.a.createElement(v,{marker:this.state.selectedMarker}))}}]),a}(n.Component);var S=function(){return r.a.createElement(y,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.eeab6de8.chunk.js.map