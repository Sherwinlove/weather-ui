(this["webpackJsonpweather-ui"]=this["webpackJsonpweather-ui"]||[]).push([[0],{14:function(n,t,e){n.exports=e(31)},19:function(n,t,e){},30:function(n,t,e){},31:function(n,t,e){"use strict";e.r(t);var a=e(0),o=e.n(a),r=e(9),i=e.n(r),c=(e(19),e(5)),l=e(1),s=e(2),u=e(3),d=e.n(u);function p(){var n=Object(l.a)(["\n  font-weight: 100;\n"]);return p=function(){return n},n}function g(){var n=Object(l.a)(["\n  font-size: 48px;\n  font-weight: 100;\n  padding: 15px 0;\n"]);return g=function(){return n},n}function h(){var n=Object(l.a)(["\n  color: gray;\n  font-weight: 700;\n"]);return h=function(){return n},n}function f(){var n=Object(l.a)(["\n  &:not(:last-child) {\n    border-right: 1px solid #c1c1c1;\n  }\n  width: 140px;\n  height: 180px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px;\n  list-style: none;\n  position: relative;\n  img {\n    position: absolute;\n    bottom: -25px;\n    right: 0px;\n    display: block;\n    width: 100px;\n    height: 100px;\n    opacity: 0.5;\n  }\n"]);return f=function(){return n},n}function b(){var n=Object(l.a)(["\n  display: flex;\n  border-top: 2px solid #c1c1c1;\n  border-bottom: 2px solid #c1c1c1;\n  padding: 32px 0;\n"]);return b=function(){return n},n}var x=s.a.ul(b()),m=s.a.li(f()),v=s.a.div(h()),w=s.a.div(g()),y=s.a.div(p()),k=function(n){var t=n.days,e=n.isMetric;return o.a.createElement(x,null,t.map((function(n){var t=d.a.unix(n.dt).format("dddd");return o.a.createElement(m,null,o.a.createElement(v,null,t),o.a.createElement(w,null,Math.round(n.temp.day),e?"\xb0C":"\xb0F"),o.a.createElement(y,null,n.weather[0].main))})))};function j(){var n=Object(l.a)(["\n  font-size: 36px;\n  font-weight: 200;\n"]);return j=function(){return n},n}function E(){var n=Object(l.a)(["\n  font-size: 36px;\n  font-weight: 700;\n  padding-right: 8px;\n"]);return E=function(){return n},n}function O(){var n=Object(l.a)(["\n  text-align: left;\n  display: flex;\n  flex-direction: row;\n"]);return O=function(){return n},n}var z=s.a.div(O()),M=s.a.div(E()),C=s.a.div(j()),S=function(n){var t=n.date;return o.a.createElement(z,null,o.a.createElement(M,null,d.a.unix(t).format("dddd")),o.a.createElement(C,null,d.a.unix(t).format("MMMM DD")))};function D(){var n=Object(l.a)(["\n  text-align: left;\n  font-size: 84px;\n  font-weight: 100;\n"]);return D=function(){return n},n}var I=s.a.div(D()),A=function(){return o.a.createElement(I,null,"Los Angeles, CA")},B=e(13),F=e.n(B);function J(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  .react-toggle {\n    opacity: 0.5;\n    &:hover {\n      opacity: 1;\n    }\n    touch-action: pan-x;\n    margin: 0 10px;\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n    background-color: transparent;\n    border: 0;\n    padding: 0;\n\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    -webkit-tap-highlight-color: transparent;\n    transition: 0.4s ease-in-out;\n  }\n\n  .react-toggle-screenreader-only {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n  }\n\n  .react-toggle--disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n    -webkit-transition: opacity 0.25s;\n    transition: opacity 0.25s;\n  }\n\n  .react-toggle-track {\n    width: 50px;\n    height: 18px;\n    padding: 0;\n    border-radius: 30px;\n    border: 1px solid #4d4d4d;\n    -webkit-transition: all 0.2s ease;\n    -moz-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n  }\n\n  /* .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {\n    border: 1px solid #e8e8e8;\n  } */\n\n  .react-toggle--checked .react-toggle-track {\n    border: 1px solid #4d4d4d;\n  }\n\n  /* .react-toggle--checked:hover:not(.react-toggle--disabled)\n    .react-toggle-track {\n    border: 1px solid #4d4d4d;\n  } */\n\n  .react-toggle-track-check {\n    position: absolute;\n    width: 14px;\n    height: 10px;\n    top: 0px;\n    bottom: 0px;\n    margin-top: auto;\n    margin-bottom: auto;\n    line-height: 0;\n    left: 8px;\n    opacity: 0;\n    -webkit-transition: opacity 0.25s ease;\n    -moz-transition: opacity 0.25s ease;\n    transition: opacity 0.25s ease;\n  }\n\n  .react-toggle--checked .react-toggle-track-check {\n    opacity: 1;\n    -webkit-transition: opacity 0.25s ease;\n    -moz-transition: opacity 0.25s ease;\n    transition: opacity 0.25s ease;\n  }\n\n  .react-toggle-track-x {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    top: 0px;\n    bottom: 0px;\n    margin-top: auto;\n    margin-bottom: auto;\n    line-height: 0;\n    right: 10px;\n    opacity: 1;\n    -webkit-transition: opacity 0.25s ease;\n    -moz-transition: opacity 0.25s ease;\n    transition: opacity 0.25s ease;\n  }\n\n  .react-toggle--checked .react-toggle-track-x {\n    opacity: 0;\n  }\n\n  .react-toggle-thumb {\n    position: absolute;\n    top: 2px;\n    left: 3px;\n    width: 24px;\n    height: 16px;\n    border: 1px solid #4d4d4d;\n    border-radius: 10px;\n    background-color: #4d4d4d;\n\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n\n    -webkit-transition: all 0.25s ease;\n    -moz-transition: all 0.25s ease;\n    transition: all 0.25s ease;\n  }\n\n  .react-toggle--checked .react-toggle-thumb {\n    left: 25px;\n    border-color: #4d4d4d;\n  }\n"]);return J=function(){return n},n}var W=s.a.div(J()),L=function(n){var t=n.isMetric,e=n.setIsMetric;return o.a.createElement(W,null,o.a.createElement("span",null,"\xb0F"),o.a.createElement(F.a,{defaultChecked:t,icons:!1,onChange:function(){e(!t)}}),o.a.createElement("span",null,"\xb0C"))};e(30);function $(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return $=function(){return n},n}function q(){var n=Object(l.a)(["\n  margin: 0 auto;\n"]);return q=function(){return n},n}function G(){var n=Object(l.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return G=function(){return n},n}var H=s.a.div(G()),K=s.a.div(q()),N=s.a.div($()),P=function(){var n=Object(a.useState)(!1),t=Object(c.a)(n,2),e=(t[0],t[1]),r=Object(a.useState)([]),i=Object(c.a)(r,2),l=i[0],s=i[1],u=Object(a.useState)(!0),d=Object(c.a)(u,2),p=d[0],g=d[1];Object(a.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/onecall?lat=34.11&lon=-118.19&units=".concat(p?"metric":"imperial","&exclude=hourly,minutely&cnt=7&appid=").concat("b21784b6712e0a0a389a578994415f1f")).then((function(n){return n.json()})).then((function(n){console.log(n);var t=n.daily;t.pop(),s(t),e(!0)})).catch((function(n){console.log(n)}))}),[p]);var h=l.length?l[0].dt:new Date;return o.a.createElement(H,null,o.a.createElement(K,null,o.a.createElement(N,null,o.a.createElement(S,{date:h}),o.a.createElement(L,{isMetric:p,setIsMetric:g})),o.a.createElement(A,null),o.a.createElement(k,{days:l,isMetric:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.c260fe96.chunk.js.map