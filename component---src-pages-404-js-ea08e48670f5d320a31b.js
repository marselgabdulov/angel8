(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{163:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(174),i=a(189);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},172:function(e,t,a){var n;e.exports=(n=a(177))&&n.default||n},173:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(2),i=a.n(o),c=a(170),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(172),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var u=a(37);a.d(t,"parsePath",function(){return u.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},174:function(e,t,a){"use strict";var n=a(6),r=a.n(n),o=a(0),i=a.n(o),c=a(171),l=a.n(c),s=a(178),d=a.n(s),u=(a(179),function(){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"header__wrapper"},i.a.createElement("div",{className:"header__logo","data-aos":"fade","data-aos-delay":"100","data-aos-duration":"1200","data-aos-once":"true"},i.a.createElement(l.a,{cover:!0,to:"/",bg:"#181818"},i.a.createElement("img",{className:"header__logo-img",src:d.a,alt:"logo"}))),i.a.createElement("div",{className:"header__links"},i.a.createElement("div",{className:"header__link","data-aos":"fade","data-aos-delay":"100","data-aos-duration":"1200","data-aos-once":"true"},i.a.createElement(l.a,{to:"/food",cover:!0,bg:"#181818",activeStyle:{fontWeight:"bold",textDecoration:"underline"}},"Блюда")),i.a.createElement("div",{className:"header__link","data-aos":"fade","data-aos-delay":"150","data-aos-duration":"1200","data-aos-once":"true"},i.a.createElement(l.a,{to:"/drinks",cover:!0,bg:"#181818",activeStyle:{fontWeight:"bold",textDecoration:"underline"}},"Напитки")),i.a.createElement("div",{className:"header__link","data-aos":"fade","data-aos-delay":"200","data-aos-duration":"1200","data-aos-once":"true"},i.a.createElement(l.a,{to:"/contacts",cover:!0,bg:"#181818",activeStyle:{fontWeight:"bold",textDecoration:"underline"}},"Контакты")))))}),m=(a(180),function(e){var t="nav-closed";return!0===e.show&&(t="nav-opened"),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:t},i.a.createElement("div",{className:"nav-wrapper"},i.a.createElement("div",{className:"nav-wrapper__links"},i.a.createElement("a",{className:"nav-wrapper__link",href:"tel:+74872770247"},"+7 (4872) 77-02-47"),i.a.createElement(l.a,{className:"nav-wrapper__link",cover:!0,to:"/food",bg:"#232324",activeStyle:{fontWeight:"bold",textDecoration:"underline"}},"Блюда"),i.a.createElement(l.a,{className:"nav-wrapper__link",to:"/drinks",cover:!0,bg:"#232324",activeStyle:{fontWeight:"bold",textDecoration:"underline"}},"Напитки"),i.a.createElement(l.a,{className:"nav-wrapper__link",to:"/contacts",cover:!0,bg:"#232324",activeStyle:{fontWeight:"bold",textDecoration:"underline"}},"Контакты")))))});a(181),a(182);function p(){return i.a.createElement("div",{className:"burger"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"32",height:"32",fill:"none",stroke:"white",strokeWidth:"2"},i.a.createElement("path",{d:"M4 10h24M4 16h16M4 22h8"})))}a(183);function h(){return i.a.createElement("svg",{className:"cross",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"32",height:"32",fill:"none",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"},i.a.createElement("path",{d:"M2 24L24 2m0 22L2 2"}))}var f=function(e){var t;return t=!1===e.icon?i.a.createElement(p,null):i.a.createElement(h,null),i.a.createElement("button",{className:"nav-button",onClick:e.clickHandler},t)},v=(a(184),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).scrollToTop=function(){window.scrollTo({behavior:"smooth",left:0,top:0})},t}return r()(t,e),t.prototype.render=function(){return i.a.createElement("svg",{className:"arrow-up",onClick:this.scrollToTop},i.a.createElement("path",{className:"a1",d:"M0 0 L15 16 L30 0"}),i.a.createElement("path",{className:"a2",d:"M0 10 L15 26 L30 10"}),i.a.createElement("path",{className:"a3",d:"M0 20 L15 36 L30 20"}))},t}(i.a.Component)),g=(a(185),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"grid"},i.a.createElement("div",{className:"grid__hline"}),i.a.createElement("div",{className:"grid__vline-one"}),i.a.createElement("div",{className:"grid__vline-two"}),i.a.createElement("div",{className:"grid__eight"},i.a.createElement("div",{className:"grid__eight-circle-one"}),i.a.createElement("div",{className:"grid__eight-circle-two"}))))}),E=(a(186),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={navIsOpen:!1},t.handleClick=function(){t.setState({navIsOpen:!t.state.navIsOpen})},t}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"main-wrapper"},i.a.createElement(v,null),i.a.createElement(m,{show:this.state.navIsOpen,handleClick:this.handleClick}),i.a.createElement(f,{clickHandler:this.handleClick,icon:this.state.navIsOpen}),i.a.createElement(u,null),i.a.createElement("div",null,this.props.children),i.a.createElement(g,null))},t}(i.a.Component));t.a=E},177:function(e,t,a){"use strict";a.r(t);a(38);var n=a(0),r=a.n(n),o=a(2),i=a.n(o),c=a(58),l=a(3),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},178:function(e,t,a){e.exports=a.p+"static/logo-fcd5d511dd479d2cab5438842ea39534.png"},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},189:function(e,t,a){"use strict";var n=a(190),r=a(0),o=a.n(r),i=a(2),c=a.n(i),l=a(202),s=a.n(l),d=a(173);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title;return o.a.createElement(d.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"ru",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u;var m="1025518380"},190:function(e){e.exports={data:{site:{siteMetadata:{title:"Эмоциональная кухня в Туле. Паназиатская\n      кухня и блюда на гриле.",description:"Эмоциональная кухня и бар в Туле. Блюда паназиатской кухни и блюда на гриле. Бронируйте столик ✆ +7 4872 77 02 47",author:"@MarselGabdulov"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-ea08e48670f5d320a31b.js.map