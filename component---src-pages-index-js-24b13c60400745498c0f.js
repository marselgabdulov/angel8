(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2Wzo":function(e,t,r){},"3nLz":function(e,t,r){"use strict";r("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"4l7S":function(e,t,r){e.exports=r.p+"static/angel8_menu-b0307980c210eadf85b19d3881f0957d.pdf"},"64fX":function(e,t,r){},"9eSz":function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("eMsz"),r("3nLz");var a=r("5NKs");t.__esModule=!0,t.default=void 0;var n,i=a(r("XEEL")),o=a(r("v06X")),l=a(r("uDP2")),s=a(r("j8BX")),c=a(r("q1tI")),d=a(r("17x9")),u=function(e){var t=(0,s.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,r=e.fixed;return(t&&t[0]||r&&r[0]).src},m=Object.create({}),g=function(e){var t=u(e),r=f(t);return m[r]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,v=h&&window.IntersectionObserver,E=new WeakMap;function b(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),c.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function y(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),t.concat(r)}function w(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function k(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function _(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var S=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),E.set(e,t)),function(){r.unobserve(e),E.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?_(e,!0):"")+_(e)})).join("")+"<img "+c+o+l+r+a+t+i+n+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,r=e.imageVariants,a=e.generateSources,n=e.spreadProps,i=c.default.createElement(z,(0,s.default)({src:t},n));return r.length>1?c.default.createElement("picture",null,a(r),i):i},z=c.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,s.default)({sizes:r,srcSet:a,src:n},m,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));z.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var O=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=h&&g(t),r.addNoScript=!(t.critical&&!t.fadeIn),r.useIOSupport=!p&&v&&!t.critical&&!r.seenBefore;var a=t.critical||"eager"==t.loading||h&&(p||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)((0,o.default)(r))),r.handleRef=r.handleRef.bind((0,o.default)((0,o.default)(r))),r}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=S(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=f(t),m[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,l=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,y=e.itemProp,_=e.loading,S=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,s.default)({opacity:O?1:0,transition:x?"opacity "+v+"ms":"none"},l),V="boolean"==typeof h?"lightgray":h,j={transitionDelay:v+"ms"},C=(0,s.default)({opacity:this.state.imgLoaded?0:1},x&&j,l,f),M={title:t,alt:this.state.isVisible?"":r,style:C,className:m};if(g){var R=g,q=R[0];return c.default.createElement(E,{className:(a||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),V&&c.default.createElement(E,{title:t,style:(0,s.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&j)}),q.base64&&c.default.createElement(I,{src:q.base64,spreadProps:M,imageVariants:R,generateSources:k}),q.tracedSVG&&c.default.createElement(I,{src:q.tracedSVG,spreadProps:M,imageVariants:R,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,b(R),c.default.createElement(z,{alt:r,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:_,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,s.default)({alt:r,title:t,loading:_},q,{imageVariants:R}))}}))}if(p){var P=p,B=P[0],W=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},i);return"inherit"===i.display&&delete W.display,c.default.createElement(E,{className:(a||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},V&&c.default.createElement(E,{title:t,style:(0,s.default)({backgroundColor:V,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},x&&j)}),B.base64&&c.default.createElement(I,{src:B.base64,spreadProps:M,imageVariants:P,generateSources:k}),B.tracedSVG&&c.default.createElement(I,{src:B.tracedSVG,spreadProps:M,imageVariants:P,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,b(P),c.default.createElement(z,{alt:r,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:_,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,s.default)({alt:r,title:t,loading:_},B,{imageVariants:P}))}}))}return null},t}(c.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var x=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),L=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});O.propTypes={resolutions:x,sizes:L,fixed:d.default.oneOfType([x,d.default.arrayOf(x)]),fluid:d.default.oneOfType([L,d.default.arrayOf(L)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var V=O;t.default=V},"E/Vj":function(e,t,r){var a=r("q1tI");function n(e){return a.createElement("svg",e,[a.createElement("g",{key:0},[a.createElement("path",{d:"M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752\r\n\t\tc25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407\r\n\t\tc0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752\r\n\t\tc17.455,0,31.656,14.201,31.656,31.655V122.407z",key:0}),a.createElement("path",{d:"M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561\r\n\t\tC128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561\r\n\t\tc0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z",key:1}),a.createElement("path",{d:"M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78\r\n\t\tc2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78\r\n\t\tC135.661,29.421,132.821,28.251,129.921,28.251z",key:2})]),a.createElement("g",{key:1}),a.createElement("g",{key:2}),a.createElement("g",{key:3}),a.createElement("g",{key:4}),a.createElement("g",{key:5}),a.createElement("g",{key:6}),a.createElement("g",{key:7}),a.createElement("g",{key:8}),a.createElement("g",{key:9}),a.createElement("g",{key:10}),a.createElement("g",{key:11}),a.createElement("g",{key:12}),a.createElement("g",{key:13}),a.createElement("g",{key:14}),a.createElement("g",{key:15})])}n.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"169.063px",height:"169.063px",viewBox:"0 0 169.063 169.063",style:{enableBackground:"new 0 0 169.063 169.063"},xmlSpace:"preserve"},e.exports=n,n.default=n},J4x7:function(e,t,r){},RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"fluidImage",(function(){return W})),r.d(t,"pageQuery",(function(){return F}));var a=r("q1tI"),n=r.n(a);r("wZFJ"),r("JHok"),r("MIFh"),r("q8oJ"),r("C9fy"),r("YbXK"),r("xJgp"),r("sc67"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("pS08"),r("E5k/"),r("R48M");var i=function(e,t){if(!e)throw new Error("Invariant failed")};function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=new Map,d=new Map,u=new Map,f=0;function m(e,t,r){void 0===r&&(r={}),r.threshold||(r.threshold=0);var a=r,n=a.root,o=a.rootMargin,l=a.threshold;if(c.has(e)&&i(!1),e){var s=function(e){return e?u.has(e)?u.get(e):(f+=1,u.set(e,f.toString()),u.get(e)+"_"):""}(n)+(o?l.toString()+"_"+o:l.toString()),m=d.get(s);m||(m=new IntersectionObserver(p,r),s&&d.set(s,m));var g={callback:t,element:e,inView:!1,observerId:s,observer:m,thresholds:m.thresholds||(Array.isArray(l)?l:[l])};return c.set(e,g),m.observe(e),g}}function g(e){if(e){var t=c.get(e);if(t){var r=t.observerId,a=t.observer,n=a.root;a.unobserve(e);var i=!1,o=!1;r&&c.forEach((function(t,a){a!==e&&(t.observerId===r&&(i=!0,o=!0),t.observer.root===n&&(o=!0))})),!o&&n&&u.delete(n),a&&!i&&a.disconnect(),c.delete(e)}}}function p(e){e.forEach((function(e){var t=e.isIntersecting,r=e.intersectionRatio,a=e.target,n=c.get(a);if(n&&r>=0){var i=n.thresholds.some((function(e){return n.inView?r>e:r>=e}));void 0!==t&&(i=i&&t),n.inView=i,n.callback(i,e)}}))}var h=function(e){var t,r;function n(){for(var t,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return o(s(t=e.call.apply(e,[this].concat(a))||this),"state",{inView:!1,entry:void 0}),o(s(t),"node",null),o(s(t),"handleNode",(function(e){t.node&&(g(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),o(s(t),"handleChange",(function(e,r){(e!==t.state.inView||e)&&t.setState({inView:e,entry:r}),t.props.onChange&&t.props.onChange(e,r)})),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var c=n.prototype;return c.componentDidMount=function(){this.node||i(!1)},c.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(g(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(g(this.node),this.node=null)},c.componentWillUnmount=function(){this.node&&(g(this.node),this.node=null)},c.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,r=e.root,a=e.rootMargin;m(this.node,this.handleChange,{threshold:t,root:r,rootMargin:a})}},c.render=function(){var e=this.state,t=e.inView,r=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:r,ref:this.handleNode});var n=this.props,i=n.children,o=n.as,s=n.tag,c=(n.triggerOnce,n.threshold,n.root,n.rootMargin,n.onChange,function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(n,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(a.createElement)(o||s||"div",l({ref:this.handleNode},c),i)},n}(a.Component);o(h,"displayName","InView"),o(h,"defaultProps",{threshold:0,triggerOnce:!1});var v={inView:!1,entry:void 0};r("64fX");var E=function(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"footer__wrapper"},n.a.createElement("div",{className:"footer__copyright"},"2019- ",(new Date).getFullYear()," © Angel 8"),n.a.createElement("div",{className:"footer__author"},"разработка"," ",n.a.createElement("a",{href:"https://marsdev.ru/",target:"_blank",rel:"noreferrer"},"marsdev"))))},b=r("vrFN"),y=r("Bl7J"),w=(r("xpQq"),r("uU+L")),k=r.n(w);var _=function(e){var t=e.handleClick;return n.a.createElement("button",{className:"arrow-to-section",onClick:t},n.a.createElement(k.a,null))};var S=function(e){var t=e.color;return n.a.createElement(n.a.Fragment,null,n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 268.06466 76.250771",height:"100%",width:"100%",version:"1.1"},n.a.createElement("defs",{id:"defs14"}),n.a.createElement("g",{transform:"translate(-12.8,-26.886616)",id:"g18"},n.a.createElement("path",{id:"path22",d:"m 129.9641,102.29833 c 0,-1.82223 -1.03381,-3.277434 -2.95718,-4.162554 -1.96182,-0.90283 -6.59079,-0.86834 -11.06949,0.0825 -6.55536,1.39166 -9.74634,1.76057 -12.19374,1.4097 -7.459558,-1.06943 -11.069225,-6.63658 -8.301657,-12.80354 0.776995,-1.73138 4.215355,-5.73335 3.515445,-4.0917 -0.54093,1.26878 -0.312462,3.08649 0.4673,3.71791 1.941332,1.57199 3.938192,1.53431 12.361692,-0.23325 6.81597,-1.43024 12.4644,-1.77757 15.33524,-0.943 3.10179,0.90171 4.88195,2.29132 6.17257,4.81834 1.89603,3.71242 0.57225,10.091674 -2.70627,13.041324 -0.60899,0.54791 -0.62391,0.52792 -0.62391,-0.8357 z M 81.202644,81.197706 c -1.960116,-0.55639 -3.654205,-1.90968 -4.450957,-3.55555 -1.019712,-2.10644 -1.273693,-5.29409 -1.284378,-16.11973 -0.01037,-10.48811 -0.09025,-11.17489 -1.495005,-12.85054 -0.327184,-0.39027 -0.983725,-0.91425 -1.458985,-1.16439 -1.148653,-0.60456 -3.888753,-0.57835 -5.101521,0.0488 -0.535616,0.27698 -1.045888,0.43155 -1.133939,0.3435 -0.384749,-0.38475 3.471764,-3.53013 5.659568,-4.61595 2.310752,-1.14685 2.524951,-1.19115 5.760001,-1.19115 3.31952,0 3.381203,0.0139 5.12,1.15322 2.218742,1.4538 2.641561,1.93877 3.745053,4.29546 l 0.894947,1.91132 0.16,13.01732 c 0.154707,12.58668 0.182192,13.04718 0.830848,13.92 0.920371,1.23844 2.006618,1.75437 3.297219,1.56607 l 1.088068,-0.15875 -0.879645,0.91815 c -2.12776,2.22091 -7.39098,3.43606 -10.751274,2.48222 z m 75.411956,-0.089 c -3.48077,-0.54124 -5.64782,-1.32861 -8.34502,-3.03204 -5.48802,-3.46599 -8.17215,-8.78781 -8.17215,-16.2029 0,-5.99733 1.51754,-10.01001 5.12104,-13.54104 2.52234,-2.47161 2.70517,-2.61507 4.49848,-3.52995 1.89509,-0.9668 4.51064,-1.85048 7.12141,-2.40599 3.60713,-0.76752 3.72917,-0.70194 2.04484,1.09874 -1.67048,1.78587 -3.38775,5.18522 -4.38377,8.67768 -0.98857,3.46633 -1.25181,10.7864 -0.50635,14.08027 0.81571,3.60428 2.48504,6.80684 4.67599,8.97075 3.67088,3.62555 7.83674,4.70976 14.06837,3.66143 l 1.12,-0.18841 -0.88089,0.50843 c -1.29645,0.74828 -4.58764,1.70481 -7.13002,2.07223 -2.93269,0.42383 -5.75014,0.37219 -9.23193,-0.1692 z m 31.80077,0.20504 c -1.95391,-0.59435 -2.94603,-1.37244 -3.62598,-2.84373 -0.68706,-1.48668 -0.69257,-1.6663 -0.77978,-25.37791 l -0.0878,-23.88063 0.72783,-0.195 c 0.4003,-0.10725 1.23183,-0.19848 1.84783,-0.20273 0.616,-0.004 2.848,-0.36325 4.96,-0.79776 2.112,-0.43451 3.93981,-0.793 4.0618,-0.79664 0.12199,-0.004 0.26759,10.97339 0.32355,24.39339 0.10108,24.23844 0.10634,24.40987 0.79427,25.89071 0.38089,0.81989 0.94397,1.63142 1.2513,1.80341 0.49328,0.27605 0.44171,0.37325 -0.4399,0.82915 -2.4064,1.2444 -6.89154,1.82917 -9.03309,1.17774 z M 29.639448,78.804126 c -0.471889,-1.35928 -1.422505,-3.91143 -2.112481,-5.67143 -0.689977,-1.76 -2.21372,-5.72 -3.386097,-8.8 -1.172376,-3.08 -2.545149,-6.608 -3.050607,-7.84 -0.505457,-1.232 -1.172696,-2.96 -1.482752,-3.84 -0.310055,-0.88 -0.827741,-2.176 -1.150411,-2.88 -0.322671,-0.704 -0.866546,-2.072 -1.208612,-3.04 -0.342065,-0.968 -1.42499,-3.83049 -2.4065,-6.36108 -0.981509,-2.5306 -1.784563,-4.78163 -1.784563,-5.00229 0,-0.22453 1.233003,-0.78556 2.800001,-1.27403 1.54,-0.48006 4.130119,-1.49432 5.755821,-2.25392 1.625702,-0.7596 3.013912,-1.28379 3.084913,-1.16488 0.11385,0.19068 1.677032,4.18226 5.160059,13.1762 0.579346,1.496 2.314997,5.96 3.857002,9.92 1.542004,3.96 3.662506,9.432 4.712224,12.16 1.049722,2.728 2.330545,6.04 2.846276,7.36 2.032153,5.20125 2.580787,6.74959 2.44112,6.88926 -0.140099,0.14009 -11.268695,1.1135 -12.577415,1.10013 -0.508908,-0.005 -0.81574,-0.51276 -1.497978,-2.47796 z m 19.655358,-15.94299 0.08262,-18.52844 1.28,-0.0814 c 2.190214,-0.13919 7.517421,-1.06613 8.870205,-1.54342 0.709641,-0.25037 1.344157,-0.45523 1.410029,-0.45523 0.06587,0 0.119766,8.712 0.119766,19.36 v 19.36 l -2.8,0.002 c -1.54,9.6e-4 -4.205178,0.0947 -5.922621,0.20844 l -3.122621,0.20678 0.08262,-18.52843 z m 203.762634,18.20459 c -7.04531,-1.23133 -12.00628,-4.2515 -13.9475,-8.49105 -0.78971,-1.72469 -0.91771,-2.40087 -0.92412,-4.88198 -0.007,-2.67571 0.0666,-3.00816 1.0366,-4.68684 2.40616,-4.16414 6.86867,-6.49771 14.90693,-7.79527 l 1.23191,-0.19886 -0.85547,1.12158 c -0.47051,0.61687 -1.13793,1.86495 -1.48316,2.77352 -1.29717,3.41387 -1.51101,11.73777 -0.42514,16.54873 0.52605,2.33064 1.8069,5.01816 2.61623,5.48943 0.47105,0.27429 0.40591,0.32269 -0.39628,0.29441 -0.528,-0.0186 -1.32,-0.0968 -1.76,-0.17367 z m 10.97799,-0.59684 c 1.70127,-1.83475 2.76479,-6.66949 2.77523,-12.61619 0.01,-5.67529 -1.02612,-10.07795 -2.8102,-11.94143 l -0.86302,-0.90143 1.76,0.2146 c 2.91017,0.35483 6.73947,1.41788 9.19622,2.55297 6.50164,3.00394 8.91162,9.93446 5.44661,15.66314 -2.52137,4.16858 -7.89609,7.04938 -14.46398,7.75256 l -1.90114,0.20355 z m -146.018,-5.45092 c 0,-0.0759 0.35769,-0.70459 0.79486,-1.39712 2.04308,-3.23644 3.04553,-11.22323 2.43381,-19.39066 -0.46173,-6.16475 -1.04716,-8.55047 -2.7232,-11.09749 l -0.57907,-0.88 h 0.81497 c 1.16582,0 5.88143,1.79468 7.57863,2.88429 3.11324,1.99872 5.53047,5.23004 6.58275,8.79977 0.79807,2.70735 0.72244,7.37751 -0.16018,9.89011 -1.88759,5.37356 -6.69674,9.47534 -12.74257,10.86828 -1.1,0.25344 -2,0.3987 -2,0.32282 z m -11.2185,-0.8572 c -3.78209,-1.28936 -7.362582,-3.89987 -9.090852,-6.62807 -0.390224,-0.616 -1.115824,-2.128 -1.612445,-3.36 -0.777002,-1.92756 -0.904371,-2.68634 -0.913165,-5.44 -0.0087,-2.7373 0.119514,-3.54702 0.886999,-5.6 1.38007,-3.6916 3.770031,-6.51903 7.227963,-8.55098 1.29034,-0.75823 5.85623,-2.32902 6.7699,-2.32902 0.58181,0 0.57175,0.0777 -0.17615,1.36 -2.06388,3.53855 -3.08597,11.6115 -2.46794,19.49308 0.41327,5.27039 0.97404,7.73405 2.30052,10.10692 l 0.93915,1.68 -0.88274,-0.008 c -0.4855,-0.004 -1.82706,-0.33019 -2.98124,-0.72366 z m 53.61851,-13.30152 c 3.22956,-1.53563 5.75555,-4.77579 7.00431,-8.98463 0.73866,-2.4896 0.69168,-6.90139 -0.0898,-8.43425 l -0.60552,-1.18767 0.6855,-0.004 c 0.37703,-0.002 1.82133,0.38977 3.20955,0.87072 3.06443,1.06167 5.31845,2.92025 6.13518,5.05882 0.72207,1.8907 0.51216,5.55291 -0.42152,7.3542 -2.09191,4.0358 -7.14352,6.24026 -14.29863,6.23975 l -3.53907,-2.5e-4 1.92,-0.91295 z m 91.88126,-7.59533 c -5.76294,-0.92182 -9.39738,-2.88397 -11.65169,-6.29047 -0.8019,-1.21176 -0.86957,-1.5654 -0.86957,-4.54469 0,-3.11048 0.0394,-3.29204 1.05818,-4.87972 2.33784,-3.64321 7.08781,-6.13505 13.29688,-6.97556 l 1.55506,-0.21051 -0.98067,1.22487 c -1.44193,1.80099 -2.02901,4.35834 -2.20639,9.61119 -0.18216,5.39419 0.22312,8.19622 1.53723,10.62823 0.51549,0.95401 0.90181,1.75819 0.85848,1.78706 -0.0433,0.0289 -1.2122,-0.12881 -2.59751,-0.3504 z m 11.31874,0.20328 c 0,-0.18397 0.11125,-0.3345 0.24723,-0.3345 0.32916,0 1.27854,-1.80385 1.68419,-3.2 0.65085,-2.24008 0.95538,-7.45013 0.63315,-10.83208 -0.38141,-4.00298 -0.79674,-5.54172 -1.98333,-7.34792 l -0.90659,-1.38001 1.52267,0.20715 c 6.79382,0.92428 11.90002,3.70712 13.86565,7.55665 0.85551,1.67546 1.16389,4.98113 0.64395,6.90276 -1.03654,3.83088 -5.48538,6.89775 -11.70692,8.07033 -3.37749,0.63656 -4,0.69222 -4,0.35762 z M 130.20018,40.412206 c -1.59285,-0.81222 -2.3452,-2.01934 -2.51197,-4.03037 -0.25591,-3.08602 1.02689,-5.37133 3.98968,-7.10765 1.45165,-0.85072 1.48886,-0.8552 2.46671,-0.29733 2.67919,1.52852 3.55383,3.27836 3.33742,6.67699 -0.14879,2.33675 -0.7196,3.38622 -2.50133,4.59885 -1.29184,0.87922 -3.24149,0.94427 -4.78051,0.15951 z",style:{fill:""+t,strokeWidth:"0.32"}}))))},N=r("4l7S"),I=r.n(N);r("tb7P");var z=function(e){var t=e.introImage;return n.a.createElement("section",{id:"intro"},n.a.createElement("div",{className:"intro__image",style:{backgroundImage:"url("+t.src+")"}}),n.a.createElement("div",{className:"intro__logo"},n.a.createElement(S,null)),n.a.createElement("div",{className:"intro__info"},n.a.createElement("h1",{className:"intro__title"},"Ресторан. Гриль. Бар."),n.a.createElement("h4",{className:"intro__subtitle"},"Контакты"),n.a.createElement("div",{className:"intro__contacts"},n.a.createElement("span",null,"Тула проспект Ленина 85"),n.a.createElement("span",null,"корпус 1 вход 5"),n.a.createElement("a",{href:"tel:+74872770247"},"+7 4872 77 02 47")),n.a.createElement("h4",{className:"intro__subtitle"},"Ждем Вас"),n.a.createElement("span",null,"Воскресенье - Четверг 12:00 - 24:00"),n.a.createElement("span",null,"Пятница и Суббота 12:00 - 02:00"),n.a.createElement("a",{href:I.a,target:"_blank",rel:"noopener noreferrer"},"Меню PDF"),n.a.createElement("div",{className:"intro__social-mobile"},n.a.createElement("h4",{className:"intro__subtitle"},"Соцсети"),n.a.createElement("a",{href:"https://www.instagram.com/angel_bar_grill/?hl=ru",target:"_blank",rel:"noopener noreferrer"},"Instagram"),n.a.createElement("a",{href:"https://www.facebook.com/Angel-8-2123834887946466/",target:"_blank",rel:"noopener noreferrer"},"Facebook"))))};r("2Wzo");var O=function(e){var t=e.img;return n.a.createElement("section",{id:"about",className:"data-scroll-section"},n.a.createElement("div",{className:"about__wrapper"},n.a.createElement("div",{className:"about__image-container"},n.a.createElement("div",{className:"about__image",style:{backgroundImage:"url("+t.src+")"}})),n.a.createElement("div",{className:"about__content"},n.a.createElement("h2",{className:"about__title"},"О нас"),n.a.createElement("div",{className:"about__text"},n.a.createElement("p",null,"Авторская кухня. Специализируемся на блюдах, приготовленных на гриле. Используем печь"," ",n.a.createElement("a",{href:"https://www.josper.es/ru/josper/about/",target:"_blank",rel:"noopener noreferrer",title:"О печах Josper"},"Josper.")),n.a.createElement("p",null,"Классические и фирменные коктейли. ",n.a.createElement("br",null),"Хороший выбор вина в правильных бокалах."),n.a.createElement("p",null,"Вы найдете нас на территории торгово-делового квартала ",n.a.createElement("a",{className:"index__link",href:"http://likerka-loft.ru/",target:"_blank",rel:"noopener noreferrer",title:"Сайт likerka-loft.ru"},"«Ликерка Лофт»")," ","по адресу: проспект Ленина, дом 85, корпус 5, вход 1.")))))},x=(r("pJf4"),r("9eSz")),L=r.n(x);r("J4x7");var V=function(e){var t=e.teamData;return n.a.createElement("section",{id:"team"},n.a.createElement("h2",{className:"team__title"},"Команда"),n.a.createElement("div",{className:"team-cards"},t.map((function(e){return n.a.createElement("div",{className:"team-card",key:e.id},n.a.createElement(L.a,{fluid:e.image,className:"team-image"}),n.a.createElement("div",{className:"card-info"},n.a.createElement("div",{className:"card-name "},e.name),n.a.createElement("div",{className:"card-position"},n.a.createElement("b",null,e.position)),n.a.createElement("p",{className:"card-experience"},"проекты: ",e.projects)))}))))},j=r("E/Vj"),C=r.n(j),M=r("Vmhq"),R=r.n(M),q=r("i8R+"),P=(r("pxef"),r("TSYQ")),B=r.n(P);var W="3501558868",F="1151303821";t.default=function(e){var t=["intro","about","team"],r=Object(a.useState)({isFinal:!1}),i=r[0],o=r[1],l=Object(a.useState)(0),s=l[0],c=l[1],d=function(e){void 0===e&&(e={});var t=Object(a.useRef)(),r=Object(a.useState)(v),n=r[0],i=r[1],o=Object(a.useCallback)((function(r){t.current&&g(t.current),r&&m(r,(function(t,a){i({inView:t,entry:a}),t&&e.triggerOnce&&g(r)}),e),t.current=r}),[e.threshold,e.root,e.rootMargin,e.triggerOnce]);return Object(a.useEffect)((function(){t.current||n===v||e.triggerOnce||i(v)})),[o,n.inView,n.entry]}({triggerOnce:!1,threshold:.5}),u=d[0],f=d[1];Object(a.useEffect)((function(){o(f?{isFinal:!0}:{isFinal:!1})}),[f]),Object(a.useEffect)((function(){var e;e=document.getElementById(t[s]),q.window.scroll({behavior:"smooth",left:0,top:e.offsetTop})}),[s,t]);var p=[{id:1,image:e.data.Arman.childImageSharp.fluid,name:"Арман Хачатрян",position:"шеф-повар",projects:"Рагу, Тайский слон, Моментс",about:"ученик Алексея Зимина и Ильи Шалева"},{id:2,image:e.data.Konstantin.childImageSharp.fluid,name:"Константин Комаров",position:"шеф-бармен",projects:"Noor, Gipsy, Bar 30/7, Уголёк"},{id:3,image:e.data.Sergey.childImageSharp.fluid,name:"Сергей Захаров",position:"шеф-сомелье",projects:"Bar 30/7, Gipsy, Noor, Уголёк, Северяне"},{id:4,image:e.data.Lado.childImageSharp.fluid,name:"Ладо Прангишвили",position:"идейный вдохновитель",projects:"Bar 30/7, Simachev Bar,Dodo, Pizza Express и Zю кафе, Time out Bar, Северяне"}];return n.a.createElement(n.a.Fragment,null,n.a.createElement(y.a,null,n.a.createElement(b.a,{title:"Angel 8 | Эмоциональная кухня и бар в Туле. ✆ +7 4872 77 02 47"}),n.a.createElement("div",{id:"index"},n.a.createElement("div",{className:B()("index__scroll-button",{"index__scroll-button--changed":i.isFinal})},n.a.createElement(_,{handleClick:function(){c(s!==t.length-1?s+1:0)}})),n.a.createElement("div",{className:"index__social"},n.a.createElement("a",{href:"https://www.instagram.com/angel_bar_grill/?hl=ru",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(C.a,null)),n.a.createElement("a",{href:"https://www.facebook.com/Angel-8-2123834887946466/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(R.a,null))),n.a.createElement(z,{introImage:e.data.intro_image.childImageSharp.fluid}),n.a.createElement(O,{img:e.data.about_one.childImageSharp.fluid}),n.a.createElement("div",{className:"final-section",ref:u},n.a.createElement(V,{teamData:p})))),n.a.createElement(E,null))}},SGlo:function(e,t,r){"use strict";var a=r("rj/q"),n=r("N+BI").getWeak,i=r("1a8y"),o=r("BjK0"),l=r("xa9o"),s=r("yde8"),c=r("Wadk"),d=r("qDzq"),u=r("O1i0"),f=c(5),m=c(6),g=0,p=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},v=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=v(this,e);if(t)return t[1]},has:function(e){return!!v(this,e)},set:function(e,t){var r=v(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=m(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,i){var c=e((function(e,a){l(e,c,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=a&&s(a,r,e[i],e)}));return a(c.prototype,{delete:function(e){if(!o(e))return!1;var r=n(e);return!0===r?p(u(this,t)).delete(e):r&&d(r,this._i)&&delete r[this._i]},has:function(e){if(!o(e))return!1;var r=n(e);return!0===r?p(u(this,t)).has(e):r&&d(r,this._i)}}),c},def:function(e,t,r){var a=n(i(t),!0);return!0===a?p(e).set(t,r):a[e._i]=r,e},ufstore:p}},Vmhq:function(e,t,r){var a=r("q1tI");function n(e){return a.createElement("svg",e,a.createElement("path",{d:"m512 256c0-141.4-114.6-256-256-256s-256 114.6-256 256 114.6 256 256 256c1.5 0 3 0 4.5-.1v-199.2h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5c107-30.7 185.3-129.2 185.3-246.1z"}))}n.defaultProps={id:"Capa_1",enableBackground:"new 0 0 512 512",height:"512",viewBox:"0 0 512 512",width:"512"},e.exports=n,n.default=n},eMsz:function(e,t,r){"use strict";var a,n=r("emib"),i=r("Wadk")(0),o=r("IYdN"),l=r("N+BI"),s=r("k5Iv"),c=r("SGlo"),d=r("BjK0"),u=r("O1i0"),f=r("O1i0"),m=!n.ActiveXObject&&"ActiveXObject"in n,g=l.getWeak,p=Object.isExtensible,h=c.ufstore,v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},E={get:function(e){if(d(e)){var t=g(e);return!0===t?h(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(u(this,"WeakMap"),e,t)}},b=e.exports=r("94Pd")("WeakMap",v,E,c,!0,!0);f&&m&&(s((a=c.getConstructor(v,"WeakMap")).prototype,E),l.NEED=!0,i(["delete","has","get","set"],(function(e){var t=b.prototype,r=t[e];o(t,e,(function(t,n){if(d(t)&&!p(t)){this._f||(this._f=new a);var i=this._f[e](t,n);return"set"==e?this:i}return r.call(this,t,n)}))})))},pxef:function(e,t,r){},"t+fG":function(e,t,r){var a=r("P8UN"),n=r("96qb"),i=r("ap2Z"),o=/"/g,l=function(e,t,r,a){var n=String(i(e)),l="<"+t;return""!==r&&(l+=" "+r+'="'+String(a).replace(o,"&quot;")+'"'),l+">"+n+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(l),a(a.P+a.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},tb7P:function(e,t,r){},"uU+L":function(e,t,r){var a=r("q1tI");function n(e){return a.createElement("svg",e,[a.createElement("g",{key:0},a.createElement("g",null,[a.createElement("path",{d:"M135.899,167.877c1.902,1.902,4.093,2.851,6.567,2.851s4.661-0.948,6.562-2.851L282.082,34.829\r\n\t\t\tc1.902-1.903,2.847-4.093,2.847-6.567s-0.951-4.665-2.847-6.567L267.808,7.417c-1.902-1.903-4.093-2.853-6.57-2.853\r\n\t\t\tc-2.471,0-4.661,0.95-6.563,2.853L142.466,119.622L30.262,7.417c-1.903-1.903-4.093-2.853-6.567-2.853\r\n\t\t\tc-2.475,0-4.665,0.95-6.567,2.853L2.856,21.695C0.95,23.597,0,25.784,0,28.262c0,2.478,0.953,4.665,2.856,6.567L135.899,167.877z",key:0}),a.createElement("path",{d:"M267.808,117.053c-1.902-1.903-4.093-2.853-6.57-2.853c-2.471,0-4.661,0.95-6.563,2.853L142.466,229.257L30.262,117.05\r\n\t\t\tc-1.903-1.903-4.093-2.853-6.567-2.853c-2.475,0-4.665,0.95-6.567,2.853L2.856,131.327C0.95,133.23,0,135.42,0,137.893\r\n\t\t\tc0,2.474,0.953,4.665,2.856,6.57l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854l133.054-133.046\r\n\t\t\tc1.902-1.903,2.847-4.093,2.847-6.565c0-2.474-0.951-4.661-2.847-6.567L267.808,117.053z",key:1})])),a.createElement("g",{key:1}),a.createElement("g",{key:2}),a.createElement("g",{key:3}),a.createElement("g",{key:4}),a.createElement("g",{key:5}),a.createElement("g",{key:6}),a.createElement("g",{key:7}),a.createElement("g",{key:8}),a.createElement("g",{key:9}),a.createElement("g",{key:10}),a.createElement("g",{key:11}),a.createElement("g",{key:12}),a.createElement("g",{key:13}),a.createElement("g",{key:14}),a.createElement("g",{key:15})])}n.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"284.929px",height:"284.929px",viewBox:"0 0 284.929 284.929",style:{enableBackground:"new 0 0 284.929 284.929"},xmlSpace:"preserve"},e.exports=n,n.default=n},xpQq:function(e,t,r){}}]);
//# sourceMappingURL=component---src-pages-index-js-24b13c60400745498c0f.js.map