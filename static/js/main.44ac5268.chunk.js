(this["webpackJsonpphoto-frames"]=this["webpackJsonpphoto-frames"]||[]).push([[0],{102:function(e,t,a){e.exports=a(212)},212:function(e,t,a){"use strict";a.r(t);a(103),a(129),a(131),a(132),a(134),a(135),a(136),a(137),a(138),a(139),a(140),a(141),a(143),a(144),a(145),a(146),a(147),a(148),a(149),a(150),a(151),a(152),a(154),a(155),a(156),a(157),a(158),a(159),a(160),a(161),a(162),a(163),a(164),a(165),a(166),a(167),a(168),a(169),a(170),a(171);var n=a(0),c=a.n(n),r=a(63),o=a.n(r),s=a(38),i=a.n(s),u=a(64),l=a.n(u),p=a(94),m=a(47),f=a(101),d=a.n(f),h=a(100),b=a.n(h),E=(a(180),a(95)),v=a.n(E),g=a(96),j=a.n(g),y=a(97),O=a.n(y),w=a(98),U=a.n(w),_=a(99),x=a.n(_),A=function(e){var t=e.id,a=e.fetchedUser;return c.a.createElement(v.a,{id:t},c.a.createElement(j.a,null,"Example"),a&&c.a.createElement(O.a,{title:"User Data Fetched with VK Bridge"},c.a.createElement(U.a,{before:a.photo_200?c.a.createElement(x.a,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))))},I=function(){var e=Object(n.useState)("home"),t=Object(m.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),s=Object(m.a)(o,2),u=s[0],f=s[1],h=Object(n.useState)(c.a.createElement(b.a,{size:"large"})),E=Object(m.a)(h,2),v=E[0],g=E[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,f(t),g(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}else console.log(a)})),function(){e.apply(this,arguments)}()}),[]);return c.a.createElement(d.a,{activePanel:a,popout:v},c.a.createElement(A,{id:"home",fetchedUser:u,go:function(e){r(e.currentTarget.dataset.to)}}))};i.a.send("VKWebAppInit"),o.a.render(c.a.createElement(I,null),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.44ac5268.chunk.js.map