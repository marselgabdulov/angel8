/*! For license information please see component---src-pages-index-jsx-3c31c719154939966c6e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0vJ6":function(e,t,a){},Dtc0:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r);a("ToJy");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var l=new Map,c=new WeakMap,o=0;function s(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(a=e.root)?(c.has(a)||(o+=1,c.set(a,o.toString())),c.get(a)):"0":e[t]);var a})).toString()}function m(e,t,a){if(void 0===a&&(a={}),!e)return function(){};var r=function(e){var t=s(e),a=l.get(t);if(!a){var r,n=new Map,i=new IntersectionObserver((function(t){t.forEach((function(t){var a,i=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=i),null==(a=n.get(t.target))||a.forEach((function(e){e(i,t)}))}))}),e);r=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:t,observer:i,elements:n},l.set(t,a)}return a}(a),n=r.id,i=r.observer,c=r.elements,o=c.get(e)||[];return c.has(e)||c.set(e,o),o.push(t),i.observe(e),function(){o.splice(o.indexOf(t),1),0===o.length&&(c.delete(e),i.unobserve(e)),0===c.size&&(i.disconnect(),l.delete(n))}}function d(e){return"function"!=typeof e.children}var u=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).node=null,a._unobserveCb=null,a.handleNode=function(e){a.node&&(a.unobserve(),e||a.props.triggerOnce||a.props.skip||a.setState({inView:!!a.props.initialInView,entry:void 0})),a.node=e||null,a.observeNode()},a.handleChange=function(e,t){e&&a.props.triggerOnce&&a.unobserve(),d(a.props)||a.setState({inView:e,entry:t}),a.props.onChange&&a.props.onChange(e,t)},a.state={inView:!!t.initialInView,entry:void 0},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},l.componentWillUnmount=function(){this.unobserve(),this.node=null},l.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,a=e.root,r=e.rootMargin,n=e.trackVisibility,i=e.delay;this._unobserveCb=m(this.node,this.handleChange,{threshold:t,root:a,rootMargin:r,trackVisibility:n,delay:i})}},l.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},l.render=function(){if(!d(this.props)){var e=this.state,t=e.inView,a=e.entry;return this.props.children({inView:t,entry:a,ref:this.handleNode})}var n=this.props,l=n.children,c=n.as,o=n.tag,s=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(n,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(r.createElement)(c||o||"div",i({ref:this.handleNode},s),l)},n}(r.Component);u.displayName="InView",u.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};a("v+pe");var p=function(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"footer__wrapper"},n.a.createElement("div",{className:"footer__copyright"},"2019- ",(new Date).getFullYear()," © Angel 8"),n.a.createElement("div",{className:"footer__author"},"разработка"," ",n.a.createElement("a",{href:"https://github.com/marselgabdulov",target:"_blank",rel:"noreferrer"},"marsdev"))))},h=a("vrFN"),g=a("Bl7J"),f=(a("xpQq"),a("uU+L")),v=a.n(f);var E=function(e){var t=e.handleClick;return n.a.createElement("button",{className:"arrow-to-section",onClick:t},n.a.createElement(v.a,null))};var y=function(e){var t=e.color;return n.a.createElement(n.a.Fragment,null,n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 268.06466 76.250771",height:"100%",width:"100%",version:"1.1"},n.a.createElement("defs",{id:"defs14"}),n.a.createElement("g",{transform:"translate(-12.8,-26.886616)",id:"g18"},n.a.createElement("path",{id:"path22",d:"m 129.9641,102.29833 c 0,-1.82223 -1.03381,-3.277434 -2.95718,-4.162554 -1.96182,-0.90283 -6.59079,-0.86834 -11.06949,0.0825 -6.55536,1.39166 -9.74634,1.76057 -12.19374,1.4097 -7.459558,-1.06943 -11.069225,-6.63658 -8.301657,-12.80354 0.776995,-1.73138 4.215355,-5.73335 3.515445,-4.0917 -0.54093,1.26878 -0.312462,3.08649 0.4673,3.71791 1.941332,1.57199 3.938192,1.53431 12.361692,-0.23325 6.81597,-1.43024 12.4644,-1.77757 15.33524,-0.943 3.10179,0.90171 4.88195,2.29132 6.17257,4.81834 1.89603,3.71242 0.57225,10.091674 -2.70627,13.041324 -0.60899,0.54791 -0.62391,0.52792 -0.62391,-0.8357 z M 81.202644,81.197706 c -1.960116,-0.55639 -3.654205,-1.90968 -4.450957,-3.55555 -1.019712,-2.10644 -1.273693,-5.29409 -1.284378,-16.11973 -0.01037,-10.48811 -0.09025,-11.17489 -1.495005,-12.85054 -0.327184,-0.39027 -0.983725,-0.91425 -1.458985,-1.16439 -1.148653,-0.60456 -3.888753,-0.57835 -5.101521,0.0488 -0.535616,0.27698 -1.045888,0.43155 -1.133939,0.3435 -0.384749,-0.38475 3.471764,-3.53013 5.659568,-4.61595 2.310752,-1.14685 2.524951,-1.19115 5.760001,-1.19115 3.31952,0 3.381203,0.0139 5.12,1.15322 2.218742,1.4538 2.641561,1.93877 3.745053,4.29546 l 0.894947,1.91132 0.16,13.01732 c 0.154707,12.58668 0.182192,13.04718 0.830848,13.92 0.920371,1.23844 2.006618,1.75437 3.297219,1.56607 l 1.088068,-0.15875 -0.879645,0.91815 c -2.12776,2.22091 -7.39098,3.43606 -10.751274,2.48222 z m 75.411956,-0.089 c -3.48077,-0.54124 -5.64782,-1.32861 -8.34502,-3.03204 -5.48802,-3.46599 -8.17215,-8.78781 -8.17215,-16.2029 0,-5.99733 1.51754,-10.01001 5.12104,-13.54104 2.52234,-2.47161 2.70517,-2.61507 4.49848,-3.52995 1.89509,-0.9668 4.51064,-1.85048 7.12141,-2.40599 3.60713,-0.76752 3.72917,-0.70194 2.04484,1.09874 -1.67048,1.78587 -3.38775,5.18522 -4.38377,8.67768 -0.98857,3.46633 -1.25181,10.7864 -0.50635,14.08027 0.81571,3.60428 2.48504,6.80684 4.67599,8.97075 3.67088,3.62555 7.83674,4.70976 14.06837,3.66143 l 1.12,-0.18841 -0.88089,0.50843 c -1.29645,0.74828 -4.58764,1.70481 -7.13002,2.07223 -2.93269,0.42383 -5.75014,0.37219 -9.23193,-0.1692 z m 31.80077,0.20504 c -1.95391,-0.59435 -2.94603,-1.37244 -3.62598,-2.84373 -0.68706,-1.48668 -0.69257,-1.6663 -0.77978,-25.37791 l -0.0878,-23.88063 0.72783,-0.195 c 0.4003,-0.10725 1.23183,-0.19848 1.84783,-0.20273 0.616,-0.004 2.848,-0.36325 4.96,-0.79776 2.112,-0.43451 3.93981,-0.793 4.0618,-0.79664 0.12199,-0.004 0.26759,10.97339 0.32355,24.39339 0.10108,24.23844 0.10634,24.40987 0.79427,25.89071 0.38089,0.81989 0.94397,1.63142 1.2513,1.80341 0.49328,0.27605 0.44171,0.37325 -0.4399,0.82915 -2.4064,1.2444 -6.89154,1.82917 -9.03309,1.17774 z M 29.639448,78.804126 c -0.471889,-1.35928 -1.422505,-3.91143 -2.112481,-5.67143 -0.689977,-1.76 -2.21372,-5.72 -3.386097,-8.8 -1.172376,-3.08 -2.545149,-6.608 -3.050607,-7.84 -0.505457,-1.232 -1.172696,-2.96 -1.482752,-3.84 -0.310055,-0.88 -0.827741,-2.176 -1.150411,-2.88 -0.322671,-0.704 -0.866546,-2.072 -1.208612,-3.04 -0.342065,-0.968 -1.42499,-3.83049 -2.4065,-6.36108 -0.981509,-2.5306 -1.784563,-4.78163 -1.784563,-5.00229 0,-0.22453 1.233003,-0.78556 2.800001,-1.27403 1.54,-0.48006 4.130119,-1.49432 5.755821,-2.25392 1.625702,-0.7596 3.013912,-1.28379 3.084913,-1.16488 0.11385,0.19068 1.677032,4.18226 5.160059,13.1762 0.579346,1.496 2.314997,5.96 3.857002,9.92 1.542004,3.96 3.662506,9.432 4.712224,12.16 1.049722,2.728 2.330545,6.04 2.846276,7.36 2.032153,5.20125 2.580787,6.74959 2.44112,6.88926 -0.140099,0.14009 -11.268695,1.1135 -12.577415,1.10013 -0.508908,-0.005 -0.81574,-0.51276 -1.497978,-2.47796 z m 19.655358,-15.94299 0.08262,-18.52844 1.28,-0.0814 c 2.190214,-0.13919 7.517421,-1.06613 8.870205,-1.54342 0.709641,-0.25037 1.344157,-0.45523 1.410029,-0.45523 0.06587,0 0.119766,8.712 0.119766,19.36 v 19.36 l -2.8,0.002 c -1.54,9.6e-4 -4.205178,0.0947 -5.922621,0.20844 l -3.122621,0.20678 0.08262,-18.52843 z m 203.762634,18.20459 c -7.04531,-1.23133 -12.00628,-4.2515 -13.9475,-8.49105 -0.78971,-1.72469 -0.91771,-2.40087 -0.92412,-4.88198 -0.007,-2.67571 0.0666,-3.00816 1.0366,-4.68684 2.40616,-4.16414 6.86867,-6.49771 14.90693,-7.79527 l 1.23191,-0.19886 -0.85547,1.12158 c -0.47051,0.61687 -1.13793,1.86495 -1.48316,2.77352 -1.29717,3.41387 -1.51101,11.73777 -0.42514,16.54873 0.52605,2.33064 1.8069,5.01816 2.61623,5.48943 0.47105,0.27429 0.40591,0.32269 -0.39628,0.29441 -0.528,-0.0186 -1.32,-0.0968 -1.76,-0.17367 z m 10.97799,-0.59684 c 1.70127,-1.83475 2.76479,-6.66949 2.77523,-12.61619 0.01,-5.67529 -1.02612,-10.07795 -2.8102,-11.94143 l -0.86302,-0.90143 1.76,0.2146 c 2.91017,0.35483 6.73947,1.41788 9.19622,2.55297 6.50164,3.00394 8.91162,9.93446 5.44661,15.66314 -2.52137,4.16858 -7.89609,7.04938 -14.46398,7.75256 l -1.90114,0.20355 z m -146.018,-5.45092 c 0,-0.0759 0.35769,-0.70459 0.79486,-1.39712 2.04308,-3.23644 3.04553,-11.22323 2.43381,-19.39066 -0.46173,-6.16475 -1.04716,-8.55047 -2.7232,-11.09749 l -0.57907,-0.88 h 0.81497 c 1.16582,0 5.88143,1.79468 7.57863,2.88429 3.11324,1.99872 5.53047,5.23004 6.58275,8.79977 0.79807,2.70735 0.72244,7.37751 -0.16018,9.89011 -1.88759,5.37356 -6.69674,9.47534 -12.74257,10.86828 -1.1,0.25344 -2,0.3987 -2,0.32282 z m -11.2185,-0.8572 c -3.78209,-1.28936 -7.362582,-3.89987 -9.090852,-6.62807 -0.390224,-0.616 -1.115824,-2.128 -1.612445,-3.36 -0.777002,-1.92756 -0.904371,-2.68634 -0.913165,-5.44 -0.0087,-2.7373 0.119514,-3.54702 0.886999,-5.6 1.38007,-3.6916 3.770031,-6.51903 7.227963,-8.55098 1.29034,-0.75823 5.85623,-2.32902 6.7699,-2.32902 0.58181,0 0.57175,0.0777 -0.17615,1.36 -2.06388,3.53855 -3.08597,11.6115 -2.46794,19.49308 0.41327,5.27039 0.97404,7.73405 2.30052,10.10692 l 0.93915,1.68 -0.88274,-0.008 c -0.4855,-0.004 -1.82706,-0.33019 -2.98124,-0.72366 z m 53.61851,-13.30152 c 3.22956,-1.53563 5.75555,-4.77579 7.00431,-8.98463 0.73866,-2.4896 0.69168,-6.90139 -0.0898,-8.43425 l -0.60552,-1.18767 0.6855,-0.004 c 0.37703,-0.002 1.82133,0.38977 3.20955,0.87072 3.06443,1.06167 5.31845,2.92025 6.13518,5.05882 0.72207,1.8907 0.51216,5.55291 -0.42152,7.3542 -2.09191,4.0358 -7.14352,6.24026 -14.29863,6.23975 l -3.53907,-2.5e-4 1.92,-0.91295 z m 91.88126,-7.59533 c -5.76294,-0.92182 -9.39738,-2.88397 -11.65169,-6.29047 -0.8019,-1.21176 -0.86957,-1.5654 -0.86957,-4.54469 0,-3.11048 0.0394,-3.29204 1.05818,-4.87972 2.33784,-3.64321 7.08781,-6.13505 13.29688,-6.97556 l 1.55506,-0.21051 -0.98067,1.22487 c -1.44193,1.80099 -2.02901,4.35834 -2.20639,9.61119 -0.18216,5.39419 0.22312,8.19622 1.53723,10.62823 0.51549,0.95401 0.90181,1.75819 0.85848,1.78706 -0.0433,0.0289 -1.2122,-0.12881 -2.59751,-0.3504 z m 11.31874,0.20328 c 0,-0.18397 0.11125,-0.3345 0.24723,-0.3345 0.32916,0 1.27854,-1.80385 1.68419,-3.2 0.65085,-2.24008 0.95538,-7.45013 0.63315,-10.83208 -0.38141,-4.00298 -0.79674,-5.54172 -1.98333,-7.34792 l -0.90659,-1.38001 1.52267,0.20715 c 6.79382,0.92428 11.90002,3.70712 13.86565,7.55665 0.85551,1.67546 1.16389,4.98113 0.64395,6.90276 -1.03654,3.83088 -5.48538,6.89775 -11.70692,8.07033 -3.37749,0.63656 -4,0.69222 -4,0.35762 z M 130.20018,40.412206 c -1.59285,-0.81222 -2.3452,-2.01934 -2.51197,-4.03037 -0.25591,-3.08602 1.02689,-5.37133 3.98968,-7.10765 1.45165,-0.85072 1.48886,-0.8552 2.46671,-0.29733 2.67919,1.52852 3.55383,3.27836 3.33742,6.67699 -0.14879,2.33675 -0.7196,3.38622 -2.50133,4.59885 -1.29184,0.87922 -3.24149,0.94427 -4.78051,0.15951 z",style:{fill:""+t,strokeWidth:"0.32"}}))))};a("0vJ6");var b=function(e){var t=e.introImage;return n.a.createElement("section",{id:"intro",className:"intro"},n.a.createElement("div",{className:"intro__text"},n.a.createElement("div",{className:"intro__logo"},n.a.createElement(y,null)),n.a.createElement("h1",{className:"intro__title"},"Cocktails / Grill / Wine"),n.a.createElement("span",null,"Тула пр. Ленина 85 корпус 1 вход 5"),n.a.createElement("span",null,"Воскресенье - Четверг 12:00 - 24:00"),n.a.createElement("span",null,"Пятница и Суббота 12:00 - 02:00"),n.a.createElement("a",{href:"tel:+74872770247"},"+7 4872 77 02 47"),n.a.createElement("a",{href:"https://www.instagram.com/angel_bar_grill/?hl=ru",target:"_blank",rel:"noopener noreferrer"},"Instagram")),n.a.createElement("div",{className:"intro__image",style:{backgroundImage:"url("+t.src+")"}}),n.a.createElement("div",{className:"intro__social-mobile"}))};a("NQOB");var _=function(e){return e.img,n.a.createElement("section",{id:"about",className:"data-scroll-section about"},n.a.createElement("div",{className:"about__text"},n.a.createElement("h2",{className:"about__title"},"О нас"),n.a.createElement("div",{className:"about__text"},n.a.createElement("p",null,"Полумрак, свечи и винтажная мебель. Приятный вкус до и после. Смешиваем тихие и яркие вкусы. Подаем вина в хрустале. Летом пальмы и столы во дворе. Готовим блюда в печи ",n.a.createElement("a",{href:"https://www.josper.es/ru/josper/about/",target:"_blank",rel:"noopener noreferrer",title:"О печах Josper"},"Josper"),". Нас трудно найти на территории ",n.a.createElement("a",{className:"index__link",href:"http://likerka-loft.ru/",target:"_blank",rel:"noopener noreferrer",title:"Сайт likerka-loft.ru"},"«Ликерка Лофт»"),". Звоните и мы Вас встретим и проводим."))))},k=(a("nKf/"),function(e){var t=e.image,a=e.name,r=e.position,i=e.projects;return n.a.createElement("div",{className:"team-card"},n.a.createElement("div",{className:"team-card__image",style:{backgroundImage:"url("+t.src+")"}}),n.a.createElement("div",{className:"team-card__name"},n.a.createElement("b",null,a)),n.a.createElement("div",{className:"team-card__position"},n.a.createElement("b",null,r)),n.a.createElement("div",{className:"team-card__projects"},"Проекты: ",i))});a("QBVC");var w=function(e){var t=e.teamData;return n.a.createElement("section",{id:"team",className:"team"},n.a.createElement("h2",{className:"team__title"},"Команда"),n.a.createElement("div",{className:"team__cards"},t.map((function(e){return n.a.createElement(k,{key:e.id,image:e.image,name:e.name,position:e.position,projects:e.projects})}))))};a("L6IE");var N=function(e){var t=e.verticalFirst,a=e.verticalSecond,r=e.verticalThird,i=e.quadrantFirst,l=e.quadrantSecond,c=e.horizontal;return n.a.createElement("section",{id:"images",className:"images"},n.a.createElement("h2",{className:"images__title"},"Фото"),n.a.createElement("div",{className:"images__wrapper"},n.a.createElement("div",{className:"vertical"},n.a.createElement("div",{className:"vertical__first",style:{backgroundImage:"url("+t.src+")"}}),n.a.createElement("div",{className:"vertical__second",style:{backgroundImage:"url("+a.src+")"}}),n.a.createElement("div",{className:"vertical__third",style:{backgroundImage:"url("+r.src+")"}})),n.a.createElement("div",{className:"quadrant"},n.a.createElement("div",{className:"quadrant__first",style:{backgroundImage:"url("+i.src+")"}}),n.a.createElement("div",{className:"quadrant__second",style:{backgroundImage:"url("+l.src+")"}})),n.a.createElement("div",{className:"horizontal",style:{backgroundImage:"url("+c.src+")"}})))},I=a("E/Vj"),x=a.n(I),S=a("i8R+"),V=(a("pxef"),a("TSYQ")),j=a.n(V);t.default=function(e){var t=["intro","about","images","team"],a=Object(r.useState)({isFinal:!1}),i=a[0],l=a[1],c=Object(r.useState)(0),o=c[0],s=c[1],d=function(e){var t=void 0===e?{}:e,a=t.threshold,n=t.delay,i=t.trackVisibility,l=t.rootMargin,c=t.root,o=t.triggerOnce,s=t.skip,d=t.initialInView,u=Object(r.useRef)(),p=Object(r.useState)({inView:!!d}),h=p[0],g=p[1],f=Object(r.useCallback)((function(e){void 0!==u.current&&(u.current(),u.current=void 0),s||e&&(u.current=m(e,(function(e,t){g({inView:e,entry:t}),t.isIntersecting&&o&&u.current&&(u.current(),u.current=void 0)}),{root:c,rootMargin:l,threshold:a,trackVisibility:i,delay:n}))}),[Array.isArray(a)?a.toString():a,c,l,o,s,i,n]);Object(r.useEffect)((function(){u.current||!h.entry||o||s||g({inView:!!d})}));var v=[f,h.inView,h.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}({triggerOnce:!1,threshold:.5}),u=d[0],f=d[1];Object(r.useEffect)((function(){l(f?{isFinal:!0}:{isFinal:!1})}),[f]),Object(r.useEffect)((function(){var e;e=document.getElementById(t[o]),S.window.scroll({behavior:"smooth",left:0,top:e.offsetTop})}),[o]);var v=[{id:1,image:e.data.Arman.childImageSharp.fluid,name:"Арман Хачатрян",position:"шеф-повар",projects:"Рагу, Тайский слон, Моментс",about:"ученик Алексея Зимина и Ильи Шалева"},{id:2,image:e.data.Konstantin.childImageSharp.fluid,name:"Константин Комаров",position:"старший бармен",projects:"Noor, Gipsy, Bar 30/7, Уголёк"},{id:3,image:e.data.Roman.childImageSharp.fluid,name:"Роман Пичхадзе",position:"старший бармен",projects:"Angel8"},{id:4,image:e.data.Ivan.childImageSharp.fluid,name:"Иван Середа",position:"виночéрпий",projects:"Angel8"},{id:5,image:e.data.Michael.childImageSharp.fluid,name:"Михаил Корчагин",position:"су-шеф",projects:"Angel8"},{id:6,image:e.data.Lado.childImageSharp.fluid,name:"Ладо Прангишвили",position:"идейный вдохновитель",projects:"Bar 30/7, Simachev Bar, Dodo Pizza Express, Zю кафе, Time out Bar, Северяне"}];return n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,null,n.a.createElement(h.a,{title:"Angel 8 | Эмоциональная кухня и бар в Туле. ✆ +7 4872 77 02 47"}),n.a.createElement("div",{id:"index"},n.a.createElement("div",{className:j()("index__scroll-button",{"index__scroll-button--changed":i.isFinal})},n.a.createElement(E,{handleClick:function(){s(o!==t.length-1?o+1:0)}})),n.a.createElement("div",{className:"index__social"},n.a.createElement("a",{href:"https://www.instagram.com/angel_bar_grill/?hl=ru",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(x.a,null))),n.a.createElement(b,{introImage:e.data.intro_image.childImageSharp.fluid}),n.a.createElement(_,{img:e.data.about_one.childImageSharp.fluid}),n.a.createElement(N,{verticalFirst:e.data.vertical_first.childImageSharp.fluid,verticalSecond:e.data.vertical_second.childImageSharp.fluid,verticalThird:e.data.vertical_third.childImageSharp.fluid,quadrantFirst:e.data.quadrant_first.childImageSharp.fluid,quadrantSecond:e.data.quadrant_second.childImageSharp.fluid,horizontal:e.data.horizontal.childImageSharp.fluid}),n.a.createElement("div",{className:"final-section",ref:u},n.a.createElement(w,{teamData:v})))),n.a.createElement(p,null))}},"E/Vj":function(e,t,a){var r=a("q1tI");function n(e){return r.createElement("svg",e,[r.createElement("g",{key:0},[r.createElement("path",{d:"M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752\r\n\t\tc25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407\r\n\t\tc0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752\r\n\t\tc17.455,0,31.656,14.201,31.656,31.655V122.407z",key:0}),r.createElement("path",{d:"M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561\r\n\t\tC128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561\r\n\t\tc0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z",key:1}),r.createElement("path",{d:"M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78\r\n\t\tc2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78\r\n\t\tC135.661,29.421,132.821,28.251,129.921,28.251z",key:2})]),r.createElement("g",{key:1}),r.createElement("g",{key:2}),r.createElement("g",{key:3}),r.createElement("g",{key:4}),r.createElement("g",{key:5}),r.createElement("g",{key:6}),r.createElement("g",{key:7}),r.createElement("g",{key:8}),r.createElement("g",{key:9}),r.createElement("g",{key:10}),r.createElement("g",{key:11}),r.createElement("g",{key:12}),r.createElement("g",{key:13}),r.createElement("g",{key:14}),r.createElement("g",{key:15})])}n.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"169.063px",height:"169.063px",viewBox:"0 0 169.063 169.063",style:{enableBackground:"new 0 0 169.063 169.063"},xmlSpace:"preserve"},e.exports=n,n.default=n},L6IE:function(e,t,a){},NQOB:function(e,t,a){},QBVC:function(e,t,a){},TSYQ:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var l=n.apply(null,r);l&&e.push(l)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)a.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},"nKf/":function(e,t,a){},pxef:function(e,t,a){},"uU+L":function(e,t,a){var r=a("q1tI");function n(e){return r.createElement("svg",e,[r.createElement("g",{key:0},r.createElement("g",null,[r.createElement("path",{d:"M135.899,167.877c1.902,1.902,4.093,2.851,6.567,2.851s4.661-0.948,6.562-2.851L282.082,34.829\r\n\t\t\tc1.902-1.903,2.847-4.093,2.847-6.567s-0.951-4.665-2.847-6.567L267.808,7.417c-1.902-1.903-4.093-2.853-6.57-2.853\r\n\t\t\tc-2.471,0-4.661,0.95-6.563,2.853L142.466,119.622L30.262,7.417c-1.903-1.903-4.093-2.853-6.567-2.853\r\n\t\t\tc-2.475,0-4.665,0.95-6.567,2.853L2.856,21.695C0.95,23.597,0,25.784,0,28.262c0,2.478,0.953,4.665,2.856,6.567L135.899,167.877z",key:0}),r.createElement("path",{d:"M267.808,117.053c-1.902-1.903-4.093-2.853-6.57-2.853c-2.471,0-4.661,0.95-6.563,2.853L142.466,229.257L30.262,117.05\r\n\t\t\tc-1.903-1.903-4.093-2.853-6.567-2.853c-2.475,0-4.665,0.95-6.567,2.853L2.856,131.327C0.95,133.23,0,135.42,0,137.893\r\n\t\t\tc0,2.474,0.953,4.665,2.856,6.57l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854l133.054-133.046\r\n\t\t\tc1.902-1.903,2.847-4.093,2.847-6.565c0-2.474-0.951-4.661-2.847-6.567L267.808,117.053z",key:1})])),r.createElement("g",{key:1}),r.createElement("g",{key:2}),r.createElement("g",{key:3}),r.createElement("g",{key:4}),r.createElement("g",{key:5}),r.createElement("g",{key:6}),r.createElement("g",{key:7}),r.createElement("g",{key:8}),r.createElement("g",{key:9}),r.createElement("g",{key:10}),r.createElement("g",{key:11}),r.createElement("g",{key:12}),r.createElement("g",{key:13}),r.createElement("g",{key:14}),r.createElement("g",{key:15})])}n.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"284.929px",height:"284.929px",viewBox:"0 0 284.929 284.929",style:{enableBackground:"new 0 0 284.929 284.929"},xmlSpace:"preserve"},e.exports=n,n.default=n},"v+pe":function(e,t,a){},xpQq:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-jsx-3c31c719154939966c6e.js.map