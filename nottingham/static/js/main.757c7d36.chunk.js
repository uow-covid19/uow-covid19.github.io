(this["webpackJsonpuow-covid-tracker"]=this["webpackJsonpuow-covid-tracker"]||[]).push([[0],{13:function(e,t,a){e.exports=a(23)},18:function(e,t,a){},19:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),o=a.n(r),c=(a(18),a(5)),s=a(6),u=a(12),i=a(11),m=(a(19),["E02002899","E02002894","E02002898","E02002893","E02002887","E02005860","E02005398"]),d=[l.a.createElement("li",null,l.a.createElement("a",{href:"https://forms.office.com/Pages/ResponsePage.aspx?id=7qe9Z4D970GskTWEGCkKHh6YksPWJp5EnnJQcOvHFxxUQ1ZPVVJJU0RJTDJITFYxVzVSQ1dUT0ZDTyQlQCN0PWcu"},"Report Symptoms")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://forms.office.com/Pages/ResponsePage.aspx?id=7qe9Z4D970GskTWEGCkKHkrlWsFnDzFNtR-2zavZvFVUNzQ4N0NVSktQNUI2U0pXWUxORUg0TEgwVCQlQCN0PWcu"},"Report an incident")),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:ss-student-selfisol@nottingham.ac.uk"},"Email the Helpline"))],p=a(3),E=a(7);p.extend(E);var v=function(e){return-99===e?"0-2":e};function h(e){var t,a,n,r,o=null===(t=e.data)||void 0===t?void 0:t.latest_7_days,c=null===(a=e.data)||void 0===a?void 0:a.msoa_data.sort((function(e,t){return e.week<t.week})).slice(0,2).map((function(e){var t=p().isoWeek(e.week).day(1),a=t.day(7);return console.log(e),{range:"".concat(t.format("DD")," \u2013 ").concat(a.format("DD MMM")),count:e.value}}));return l.a.createElement("div",{className:"LocalAreaDataContainer"},l.a.createElement("h3",null,null!==(n=null===(r=e.data)||void 0===r?void 0:r.msoa11_hclnm)&&void 0!==n?n:""),l.a.createElement("h1",null,v(o)),l.a.createElement(f,{previousWeeks:c}))}function f(e){return l.a.createElement("div",{className:"PreviousWeeks"},l.a.createElement("table",null,e.previousWeeks.map((function(t,a){var n,r=null===(n=e.previousWeeks[a+1])||void 0===n?void 0:n.count,o=t.count,c=!1;-99===o&&(o=0,c=!0),-99===r&&(r=0,c=!0);var s=null!=r?o-r:null,u=null!=s&&(s>0?"+":s<0?"":"\xb1");return l.a.createElement("tr",null,l.a.createElement("td",null,t.range,":"),l.a.createElement("td",null,l.a.createElement("b",null,v(t.count))),null!=s&&l.a.createElement("td",null,"(",u,s,c&&" [approx.]",")"))}))))}function k(e){return l.a.createElement("div",{className:"SourcesAndLinks"},l.a.createElement("p",null,"Source: ",l.a.createElement("a",{href:"https://coronavirus.data.gov.uk/cases"},"coronavirus.data.gov.uk/cases")," \u2013 MSOA data ",l.a.createElement("br",null),'(Scroll to "Cases by local area in England" - ',l.a.createElement("a",{href:"https://www.arcgis.com/apps/webappviewer/index.html?id=47574f7a6e454dc6a42c5f6912ed7076"},"direct link"),")"),l.a.createElement("ul",null,l.a.createElement("li",null,"NHS COVID-19 App: ",l.a.createElement("a",{href:"https://apps.apple.com/gb/app/nhs-covid-19/id1520427663"},"iOS")," ",l.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=uk.nhs.covid19.production"},"Android")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.gov.uk/foreign-travel-advice"},"Foreign Travel Advice")),d.map((function(e){return e})),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/uow-covid19/uow-covid19.github.io.dev"},"Contribute to this site's development"))))}function g(e){return l.a.createElement("div",{className:"AddToHomeScreenPrompt"},l.a.createElement("h3",null,"Add this website to your phone's home screen for quick access:"),l.a.createElement("p",null,"On iOS: Tap the share button at the bottom of the screen",l.a.createElement("br",null),"On Android (Chrome): Tap the three dots in the top right of the screen"))}var b=a(8),w=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={areas:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;!function(e,t,a){var n=new XMLHttpRequest;n.open(e,t),n.onload=function(){a(null,n.response)},n.onerror=function(){a(n.response)},n.send()}("GET","https://c19downloads.azureedge.net/downloads/msoa_data/MSOAs_latest.json",(function(t,a){var n=JSON.parse(a).data.filter((function(e){return m.includes(e.msoa11_cd)})).sort((function(e,t){return e.latest_7_days<t.latest_7_days}));e.setState((function(e){return{areas:n}}))}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b.a,null,l.a.createElement("title",null,"Notts"," COVID Tracker")),l.a.createElement("h1",null,"Unofficial ","University of Nottingham"," COVID-19 case tracker"),l.a.createElement(g,null),l.a.createElement("h2",null,'Positive cases for the last 7 days "where near-complete data is available"',l.a.createElement("br",null),"(UK Government figures)"),l.a.createElement("br",null),this.state.areas.map((function(e){return l.a.createElement(h,{data:e})})),l.a.createElement("br",null),l.a.createElement(k,null))}}]),a}(l.a.Component);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.757c7d36.chunk.js.map