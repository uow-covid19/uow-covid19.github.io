(this["webpackJsonpuow-covid-tracker"]=this["webpackJsonpuow-covid-tracker"]||[]).push([[0],{11:function(e,t,a){e.exports=a(21)},16:function(e,t,a){},17:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),o=a.n(l),c=(a(16),a(4)),s=a(5),i=a(10),u=a(9),d=(a(17),["E02006932","E02001381","E02001384","E02001388","E02001377","E02001369","E02006934","E02001383"]),m=[r.a.createElement("li",null,r.a.createElement("a",{href:"https://jbsgeneral.simplybook.pro/v2/"},"Book a Test"))];function p(e){var t,a,n,l=null===(t=e.data)||void 0===t?void 0:t.latest_7_days;return r.a.createElement("div",{className:"LocalAreaDataContainer"},r.a.createElement("h3",null,null!==(a=null===(n=e.data)||void 0===n?void 0:n.msoa11_hclnm)&&void 0!==a?a:""),r.a.createElement("h1",null,-99===l?"0-2":l))}function h(e){return r.a.createElement("div",{className:"SourcesAndLinks"},r.a.createElement("p",null,"Source: ",r.a.createElement("a",{href:"https://coronavirus.data.gov.uk/cases"},"coronavirus.data.gov.uk/cases")," \u2013 MSOA data ",r.a.createElement("br",null),'(Scroll to "Cases by local area in England" - ',r.a.createElement("a",{href:"https://www.arcgis.com/apps/webappviewer/index.html?id=47574f7a6e454dc6a42c5f6912ed7076"},"direct link"),")"),r.a.createElement("ul",null,r.a.createElement("li",null,"NHS COVID-19 App: ",r.a.createElement("a",{href:"https://apps.apple.com/gb/app/nhs-covid-19/id1520427663"},"iOS")," ",r.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=uk.nhs.covid19.production"},"Android")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.gov.uk/foreign-travel-advice"},"Foreign Travel Advice")),m.map((function(e){return e})),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/uow-covid19/uow-covid19.github.io.dev"},"Contribute to this site's development"))))}function E(e){return r.a.createElement("div",{className:"AddToHomeScreenPrompt"},r.a.createElement("h3",null,"Add this website to your phone's home screen for quick access:"),r.a.createElement("p",null,"On iOS: Tap the share button at the bottom of the screen",r.a.createElement("br",null),"On Android (Chrome): Tap the three dots in the top right of the screen"))}var v=a(6),f=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={areas:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;!function(e,t,a){var n=new XMLHttpRequest;n.open(e,t),n.onload=function(){a(null,n.response)},n.onerror=function(){a(n.response)},n.send()}("GET","https://c19downloads.azureedge.net/downloads/msoa_data/MSOAs_latest.json",(function(t,a){var n=JSON.parse(a).data.filter((function(e){return d.includes(e.msoa11_cd)})).sort((function(e,t){return e.latest_7_days<t.latest_7_days}));e.setState((function(e){return{areas:n}}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v.a,null,r.a.createElement("title",null,"UoL"," COVID Tracker")),r.a.createElement("h1",null,"Unofficial ","University of Liverpool"," COVID-19 case tracker"),r.a.createElement(E,null),r.a.createElement("h2",null,'Positive cases for the last 7 days "where near-complete data is available"',r.a.createElement("br",null),"(UK Government figures)"),r.a.createElement("br",null),this.state.areas.map((function(e){return r.a.createElement(p,{data:e})})),r.a.createElement("br",null),r.a.createElement(h,null))}}]),a}(r.a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.67d3a073.chunk.js.map