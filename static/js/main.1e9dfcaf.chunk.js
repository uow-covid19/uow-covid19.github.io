(this["webpackJsonpuow-covid-tracker"]=this["webpackJsonpuow-covid-tracker"]||[]).push([[0],{11:function(e,t,a){e.exports=a(21)},16:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=(a(16),a(4)),i=a(5),s=a(10),u=a(9),d=a(6);a(20);function m(e){var t,a,n,l=null===(t=e.data)||void 0===t?void 0:t.latest_7_days;return r.a.createElement("div",{className:"LocalAreaDataContainer"},r.a.createElement("h3",null,null!==(a=null===(n=e.data)||void 0===n?void 0:n.msoa11_hclnm)&&void 0!==a?a:""),r.a.createElement("h1",null,-99===l?"0-2":l))}function p(e){return r.a.createElement("div",{className:"SourcesAndLinks"},r.a.createElement("p",null,"Source: ",r.a.createElement("a",{href:"https://coronavirus.data.gov.uk/cases"},"coronavirus.data.gov.uk/cases")),r.a.createElement("ul",null,r.a.createElement("li",null,"NHS COVID-19 App: ",r.a.createElement("a",{href:"https://apps.apple.com/gb/app/nhs-covid-19/id1520427663"},"iOS")," ",r.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=uk.nhs.covid19.production"},"Android")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://testandtrace.warwick.ac.uk/intro/"},"Warwick Test and Trace")),r.a.createElement("li",null,"Warwick 24-Hour Helpline: +44 24 7652 3111"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.gov.uk/foreign-travel-advice"},"Foreign Travel Advice"))))}var E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={areas:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;!function(e,t,a){var n=new XMLHttpRequest;n.open(e,t),n.onload=function(){a(null,n.response)},n.onerror=function(){a(n.response)},n.send()}("GET","https://c19downloads.azureedge.net/downloads/msoa_data/MSOAs_latest.json",(function(t,a){var n=JSON.parse(a),r=function(e){return n.data.find((function(t){return t.msoa11_cd===e}))};e.setState((function(e){return{areas:[r("E02001999"),r("E02006523"),r("E02001993"),r("E02006525"),r("E02006528"),r("E02006531"),r("E02006527"),r("E02006521"),r("E02001991"),r("E02001986")]}}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement("title",null,"UoW COVID Tracker"),r.a.createElement("meta",{name:"description",content:"COVID-19 stats relevant to Warwick Students"})),r.a.createElement("h1",null,"Unofficial Uni of Warwick COVID-19 case tracker"),r.a.createElement("h2",null,"Positive cases in the last 7 days (UK Government figures)"),this.state.areas.map((function(e){return r.a.createElement(m,{data:e})})),r.a.createElement("br",null),r.a.createElement(p,null))}}]),a}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.1e9dfcaf.chunk.js.map
