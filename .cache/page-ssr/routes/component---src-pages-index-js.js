"use strict";
exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 3204:
/***/ ((module) => {



const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ 4674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Head": () => (/* binding */ Head),
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "C:\\Users\\user\\Desktop\\finnet\\finnet-media\\node_modules\\react\\index.js"
var external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_ = __webpack_require__(1693);
var external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_);
// EXTERNAL MODULE: ./node_modules/camelcase/index.js
var camelcase = __webpack_require__(3204);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);}return e;},n.apply(this,arguments);}function o(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(a=n[i])>=0||(r[a]=e[a]);return r;}var s=(/* unused pure expression or super */ null && ([.25,.5,1,2])),l=(/* unused pure expression or super */ null && ([750,1080,1366,1920])),u=(/* unused pure expression or super */ null && ([320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096])),d=(/* unused pure expression or super */ null && (4/3)),c=function(e){return console.warn(e);},h=function(e,t){return e-t;},g=function(e){return e.map(function(e){return e.src+" "+e.width+"w";}).join(",\n");};function p(e){var t=e.lastIndexOf(".");if(-1!==t){var a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a;}}function m(e){var t=e.layout,i=void 0===t?"constrained":t,r=e.width,o=e.height,s=e.sourceMetadata,l=e.breakpoints,u=e.aspectRatio,c=e.formats,h=void 0===c?["auto","webp"]:c;return h=h.map(function(e){return e.toLowerCase();}),i=a(i),r&&o?n({},e,{formats:h,layout:i,aspectRatio:r/o}):(s.width&&s.height&&!u&&(u=s.width/s.height),"fullWidth"===i?(r=r||s.width||l[l.length-1],o=o||Math.round(r/(u||d))):(r||(r=o&&u?o*u:s.width?s.width:o?Math.round(o/d):800),u&&!o?o=Math.round(r/u):u||(u=r/o)),n({},e,{width:r,height:o,aspectRatio:u,layout:i,formats:h}));}function f(e,t){var a;return void 0===t&&(t=20),null==(a=(0,(e=m(e)).generateImageSource)(e.filename,t,Math.round(t/e.aspectRatio),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src;}function v(e){var t,a=(e=m(e)).pluginName,i=e.sourceMetadata,r=e.generateImageSource,o=e.layout,u=e.fit,d=e.options,h=e.width,f=e.height,v=e.filename,k=e.reporter,E=void 0===k?{warn:c}:k,M=e.backgroundColor,S=e.placeholderURL;if(a||E.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof r)throw new Error("generateImageSource must be a function");i&&(i.width||i.height)?i.format||(i.format=p(v)):i={width:h,height:f,format:(null==(t=i)?void 0:t.format)||p(v)||"auto"};var N=new Set(e.formats);(0===N.size||N.has("auto")||N.has(""))&&(N.delete("auto"),N.delete(""),N.add(i.format)),N.has("jpg")&&N.has("png")&&(E.warn("["+a+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),N.delete("jpg"===i.format?"png":"jpg"));var x=function(e){var t=e.filename,a=e.layout,i=void 0===a?"constrained":a,r=e.sourceMetadata,o=e.reporter,u=void 0===o?{warn:c}:o,d=e.breakpoints,h=void 0===d?l:d,g=Object.entries({width:e.width,height:e.height}).filter(function(e){var t=e[1];return"number"==typeof t&&t<1;});if(g.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+g.map(function(e){return e.join(": ");}).join(", "));return"fixed"===i?function(e){var t=e.filename,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.reporter,d=void 0===u?{warn:c}:u,h=a.width/a.height,g=w(void 0===l?s:l);if(i&&r){var p=b(a,{width:i,height:r,fit:o});i=p.width,r=p.height,h=p.aspectRatio;}i?r||(r=Math.round(i/h)):i=r?Math.round(r*h):800;var m=i;if(a.width<i||a.height<r){var f=a.width<i?"width":"height";d.warn("\nThe requested "+f+' "'+("width"===f?i:r)+'px" for the image '+t+" was larger than the actual image "+f+" of "+a[f]+"px. If possible, replace the current image with a larger one."),"width"===f?(i=a.width,r=Math.round(i/h)):i=(r=a.height)*h;}return{sizes:g.filter(function(e){return e>=1;}).map(function(e){return Math.round(e*i);}).filter(function(e){return e<=a.width;}),aspectRatio:h,presentationWidth:m,presentationHeight:Math.round(m/h),unscaledWidth:i};}(e):"constrained"===i?y(e):"fullWidth"===i?y(n({breakpoints:h},e)):(u.warn("No valid layout was provided for the image at "+t+". Valid image layouts are fixed, fullWidth, and constrained. Found "+i),{sizes:[r.width],presentationWidth:r.width,presentationHeight:r.height,aspectRatio:r.width/r.height,unscaledWidth:r.width});}(n({},e,{sourceMetadata:i})),I={sources:[]},W=e.sizes;W||(W=function(e,t){switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return;}}(x.presentationWidth,o)),N.forEach(function(e){var t=x.sizes.map(function(t){var i=r(v,t,Math.round(t/x.aspectRatio),e,u,d);if(null!=i&&i.width&&i.height&&i.src&&i.format)return i;E.warn("["+a+"] The resolver for image "+v+" returned an invalid value.");}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){var i=t.find(function(e){return e.width===x.unscaledWidth;})||t[0];i&&(I.fallback={src:i.src,srcSet:g(t),sizes:W});}else{var n;null==(n=I.sources)||n.push({srcSet:g(t),sizes:W,type:"image/"+e});}});var j={images:I,layout:o,backgroundColor:M};switch(S&&(j.placeholder={fallback:S}),o){case"fixed":j.width=x.presentationWidth,j.height=x.presentationHeight;break;case"fullWidth":j.width=1,j.height=1/x.aspectRatio;break;case"constrained":j.width=e.width||x.presentationWidth||1,j.height=(j.width||1)/x.aspectRatio;}return j;}var w=function(e){return Array.from(new Set([1].concat(e))).sort(h);};function y(e){var t,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.breakpoints,d=e.layout,c=a.width/a.height,g=w(void 0===l?s:l);if(i&&r){var p=b(a,{width:i,height:r,fit:o});i=p.width,r=p.height,c=p.aspectRatio;}i=i&&Math.min(i,a.width),r=r&&Math.min(r,a.height),i||r||(r=(i=Math.min(800,a.width))/c),i||(i=r*c);var m=i;return(a.width<i||a.height<r)&&(i=a.width,r=a.height),i=Math.round(i),(null==u?void 0:u.length)>0?(t=u.filter(function(e){return e<=a.width;})).length<u.length&&!t.includes(a.width)&&t.push(a.width):t=(t=g.map(function(e){return Math.round(e*i);})).filter(function(e){return e<=a.width;}),"constrained"!==d||t.includes(i)||t.push(i),{sizes:t=t.sort(h),aspectRatio:c,presentationWidth:m,presentationHeight:Math.round(m/c),unscaledWidth:i};}function b(e,t){var a=e.width/e.height,i=t.width,r=t.height;switch(t.fit){case"fill":i=t.width?t.width:e.width,r=t.height?t.height:e.height;break;case"inside":var n=t.width?t.width:Number.MAX_SAFE_INTEGER,o=t.height?t.height:Number.MAX_SAFE_INTEGER;i=Math.min(n,Math.round(o*a)),r=Math.min(o,Math.round(n/a));break;case"outside":var s=t.width?t.width:0,l=t.height?t.height:0;i=Math.max(s,Math.round(l*a)),r=Math.max(l,Math.round(s/a));break;default:t.width&&!t.height&&(i=t.width,r=Math.round(t.width/a)),t.height&&!t.width&&(i=Math.round(t.height*a),r=t.height);}return{width:i,height:r,aspectRatio:i/r};}var k=(/* unused pure expression or super */ null && (["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"])),E=(/* unused pure expression or super */ null && (["images","placeholder"]));function M(){return true&&true;}var S=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src);}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData);}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage);}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData;},N=function(e){var t,a,i;return null==(t=S(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.src;},x=function(e){var t,a,i;return null==(t=S(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.srcSet;};function I(e){var t,a=e.baseUrl,i=e.urlBuilder,r=e.sourceWidth,s=e.sourceHeight,l=e.pluginName,d=void 0===l?"getImageData":l,c=e.formats,h=void 0===c?["auto"]:c,g=e.breakpoints,p=e.options,m=o(e,k);return null!=(t=g)&&t.length||"fullWidth"!==m.layout&&"FULL_WIDTH"!==m.layout||(g=u),v(n({},m,{pluginName:d,generateImageSource:function(e,t,a,r){return{width:t,height:a,format:r,src:i({baseUrl:e,width:t,height:a,options:p,format:r})};},filename:a,formats:h,breakpoints:g,sourceMetadata:{width:r,height:s,format:"auto"}}));}function W(e,t){var a,i,r,s=e.images,l=e.placeholder,u=n({},o(e,E),{images:n({},s,{sources:[]}),placeholder:l&&n({},l,{sources:[]})});return t.forEach(function(t){var a,i=t.media,r=t.image;i?(r.layout!==e.layout&&"development"==="production"&&0,(a=u.images.sources).push.apply(a,r.images.sources.map(function(e){return n({},e,{media:i});}).concat([{media:i,srcSet:r.images.fallback.srcSet}])),u.placeholder&&u.placeholder.sources.push({media:i,srcSet:r.placeholder.fallback})): false&&0;}),(a=u.images.sources).push.apply(a,s.sources),null!=l&&l.sources&&(null==(i=u.placeholder)||(r=i.sources).push.apply(r,l.sources)),u;}var j,R=["src","srcSet","loading","alt","shouldLoad"],_=["fallback","sources","shouldLoad"],A=function(t){var a=t.src,i=t.srcSet,r=t.loading,s=t.alt,l=void 0===s?"":s,u=t.shouldLoad,d=o(t,R);return/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("img",n({},d,{decoding:"async",loading:r,src:u?a:void 0,"data-src":u?void 0:a,srcSet:u?i:void 0,"data-srcset":u?void 0:i,alt:l}));},O=function(t){var a=t.fallback,i=t.sources,r=void 0===i?[]:i,s=t.shouldLoad,l=void 0===s||s,u=o(t,_),d=u.sizes||(null==a?void 0:a.sizes),c=/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(A,n({},u,a,{sizes:d,shouldLoad:l}));return r.length?/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("picture",null,r.map(function(t){var a=t.media,i=t.srcSet,r=t.type;return/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("source",{key:a+"-"+r+"-"+i,type:r,media:a,srcSet:l?i:void 0,"data-srcset":l?void 0:i,sizes:d});}),c):c;};A.propTypes={src:prop_types.string.isRequired,alt:prop_types.string.isRequired,sizes:prop_types.string,srcSet:prop_types.string,shouldLoad:prop_types.bool},O.displayName="Picture",O.propTypes={alt:prop_types.string.isRequired,shouldLoad:prop_types.bool,fallback:prop_types.exact({src:prop_types.string.isRequired,srcSet:prop_types.string,sizes:prop_types.string}),sources:prop_types.arrayOf(prop_types.oneOfType([prop_types.exact({media:prop_types.string.isRequired,type:prop_types.string,sizes:prop_types.string,srcSet:prop_types.string.isRequired}),prop_types.exact({media:prop_types.string,type:prop_types.string.isRequired,sizes:prop_types.string,srcSet:prop_types.string.isRequired})]))};var T=["fallback"],z=function(t){var a=t.fallback,i=o(t,T);return a?/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(O,n({},i,{fallback:{src:a},"aria-hidden":!0,alt:""})):/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",n({},i));};z.displayName="Placeholder",z.propTypes={fallback:prop_types.string,sources:null==(j=O.propTypes)?void 0:j.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null;}};var L=function(t){return/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement((external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default()).Fragment,null,/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(O,n({},t)),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("noscript",null,/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(O,n({},t,{shouldLoad:!0}))));};L.displayName="MainImage",L.propTypes=O.propTypes;var q=["children"],C=function(){return/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("script",{type:"module",dangerouslySetInnerHTML:{__html:'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'}});},D=function(t){var a=t.layout,i=t.width,r=t.height;return"fullWidth"===a?/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{"aria-hidden":!0,style:{paddingTop:r/i*100+"%"}}):"constrained"===a?/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{style:{maxWidth:i,display:"block"}},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+i+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null;},P=function(a){var i=a.children,r=o(a,q);return/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.Fragment,null,/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(D,n({},r)),i,/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(C,null));},H=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],F=["style","className"],B=function(e){return e.replace(/\n/g,"");},G=function(t){var a=t.as,i=void 0===a?"div":a,r=t.className,s=t.class,l=t.style,u=t.image,d=t.loading,c=void 0===d?"lazy":d,h=t.imgClassName,g=t.imgStyle,p=t.backgroundColor,m=t.objectFit,f=t.objectPosition,v=o(t,H);if(!u)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(r=s),g=n({objectFit:m,objectPosition:f,backgroundColor:p},g);var w=u.width,y=u.height,b=u.layout,k=u.images,E=u.placeholder,S=u.backgroundColor,N=function(e,t,a){var i={},r="gatsby-image-wrapper";return M()||(i.position="relative",i.overflow="hidden"),"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(M()||(i.display="inline-block",i.verticalAlign="top"),r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i};}(w,y,b),x=N.style,I=N.className,W=o(N,F),j={fallback:void 0,sources:[]};return k.fallback&&(j.fallback=n({},k.fallback,{srcSet:k.fallback.srcSet?B(k.fallback.srcSet):void 0})),k.sources&&(j.sources=k.sources.map(function(e){return n({},e,{srcSet:B(e.srcSet)});})),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(i,n({},W,{style:n({},x,l,{backgroundColor:p}),className:I+(r?" "+r:"")}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(P,{layout:b,width:w,height:y},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(z,n({},function(e,t,a,i,r,o,s,l){var u={};o&&(u.backgroundColor=o,"fixed"===a?(u.width=i,u.height=r,u.backgroundColor=o,u.position="relative"):("constrained"===a||"fullWidth"===a)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),l&&(u.objectPosition=l);var d=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:1,transition:"opacity 500ms linear"},u)});return M()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d;}(E,0,b,w,y,S,m,f))),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(L,n({"data-gatsby-image-ssr":"",className:h},v,function(e,t,a,i,r){return void 0===r&&(r={}),M()||(r=n({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},r)),n({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:n({},r,{opacity:0})});}("eager"===c,0,j,c,g)))));},V=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],U=function(t){return function(a){var i=a.src,r=a.__imageData,s=a.__error,l=o(a,V);return s&&console.warn(s),r?/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(t,n({image:r},l)):(console.warn("Image not loaded",i),s||"development"!=="production"||0,null);};}(G),X=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?prop_types_default().number.apply((prop_types_default()),[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.");},Y=new Set(["fixed","fullWidth","constrained"]),Z={src:(prop_types_default()).string.isRequired,alt:function(e,t,a){return e.alt||""===e.alt?prop_types_default().string.apply((prop_types_default()),[e,t,a].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');},width:X,height:X,sizes:(prop_types_default()).string,layout:function(e){if(void 0!==e.layout&&!Y.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');}};U.displayName="StaticImage",U.propTypes=Z;
;// CONCATENATED MODULE: ./src/components/About.js
const About=()=>{return/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement((external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default()).Fragment,null,/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("section",{className:"about-sec"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("h3",null,"Our Key Features & Why We Are Different From Others"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"service-about"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"service-card"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/growth.png",className:"service-image",__imageData:__webpack_require__(269)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("span",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ")),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"service-card"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/brand.png",className:"service-image",__imageData:__webpack_require__(5172)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("span",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ")),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"service-card"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/team.png",className:"service-image",__imageData:__webpack_require__(3103)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("span",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ")),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"service-card"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/insight.png",className:"service-image",__imageData:__webpack_require__(558)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("span",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ")),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"service-card"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/trophy.png",className:"service-image",__imageData:__webpack_require__(1369)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("span",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ")))),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("section",{className:"numbers-sec"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"number-card"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"number-bold"},"1K+"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("small",null,"Verified Influencers")),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"number-card"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"number-bold"},"5K"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("small",null,"Top Brands & Startups")),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"number-card"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"number-bold"},"100+"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("small",null,"Succesful Campaigns")),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"number-card"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"number-bold"},"1K+"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("small",null,"5 Star Reviews"))));};/* harmony default export */ const components_About = (About);
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconsManifest.js
var IconsManifest = [
  {
    "id": "ci",
    "name": "Circum Icons",
    "projectUrl": "https://circumicons.com/",
    "license": "MPL-2.0 license",
    "licenseUrl": "https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE"
  },
  {
    "id": "fa",
    "name": "Font Awesome 5",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "hi2",
    "name": "Heroicons 2",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "sl",
    "name": "Simple Line Icons",
    "projectUrl": "https://thesabbir.github.io/simple-line-icons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://github.com/atisawd/boxicons/blob/master/LICENSE"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "tb",
    "name": "Tabler Icons",
    "projectUrl": "https://github.com/tabler/tabler-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "tfi",
    "name": "Themify Icons",
    "projectUrl": "https://github.com/lykmapipo/themify-icons",
    "license": "MIT",
    "licenseUrl": "https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE"
  },
  {
    "id": "rx",
    "name": "Radix Icons",
    "projectUrl": "https://icons.radix-ui.com",
    "license": "MIT",
    "licenseUrl": "https://github.com/radix-ui/icons/blob/master/LICENSE"
  }
]
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconContext.js

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = (external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default()).createContext && external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createContext(DefaultContext);
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconBase.js
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};


function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function iconBase_GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/index.js



;// CONCATENATED MODULE: ./node_modules/react-icons/hi/index.esm.js
// THIS FILE IS AUTO GENERATED

function HiAcademicCap (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"}}]})(props);
};
function HiAdjustments (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"}}]})(props);
};
function HiAnnotation (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z","clipRule":"evenodd"}}]})(props);
};
function HiArchive (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiArrowCircleDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z","clipRule":"evenodd"}}]})(props);
};
function HiArrowCircleLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z","clipRule":"evenodd"}}]})(props);
};
function HiArrowCircleRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowCircleUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiArrowLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowNarrowDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiArrowNarrowLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowNarrowRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowNarrowUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiArrowRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowSmDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiArrowSmLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowSmRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowSmUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiArrowUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiArrowsExpand (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z","clipRule":"evenodd"}}]})(props);
};
function HiAtSymbol (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z","clipRule":"evenodd"}}]})(props);
};
function HiBackspace (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z","clipRule":"evenodd"}}]})(props);
};
function HiBadgeCheck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"}}]})(props);
};
function HiBan (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z","clipRule":"evenodd"}}]})(props);
};
function HiBeaker (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z","clipRule":"evenodd"}}]})(props);
};
function HiBell (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"}}]})(props);
};
function HiBookOpen (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"}}]})(props);
};
function HiBookmarkAlt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z","clipRule":"evenodd"}}]})(props);
};
function HiBookmark (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"}}]})(props);
};
function HiBriefcase (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"}}]})(props);
};
function HiCake (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiCalculator (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z","clipRule":"evenodd"}}]})(props);
};
function HiCalendar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clipRule":"evenodd"}}]})(props);
};
function HiCamera (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z","clipRule":"evenodd"}}]})(props);
};
function HiCash (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z","clipRule":"evenodd"}}]})(props);
};
function HiChartBar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"}}]})(props);
};
function HiChartPie (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"}},{"tag":"path","attr":{"d":"M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"}}]})(props);
};
function HiChartSquareBar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z","clipRule":"evenodd"}}]})(props);
};
function HiChatAlt2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"}},{"tag":"path","attr":{"d":"M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"}}]})(props);
};
function HiChatAlt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z","clipRule":"evenodd"}}]})(props);
};
function HiChat (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z","clipRule":"evenodd"}}]})(props);
};
function HiCheckCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"}}]})(props);
};
function HiCheck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiChevronDoubleDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiChevronDoubleLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z","clipRule":"evenodd"}}]})(props);
};
function HiChevronDoubleRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clipRule":"evenodd"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiChevronDoubleUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiChevronDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiChevronLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiChevronRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiChevronUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z","clipRule":"evenodd"}}]})(props);
};
function HiChip (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M13 7H7v6h6V7z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z","clipRule":"evenodd"}}]})(props);
};
function HiClipboardCheck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"}}]})(props);
};
function HiClipboardCopy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"}},{"tag":"path","attr":{"d":"M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"}}]})(props);
};
function HiClipboardList (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z","clipRule":"evenodd"}}]})(props);
};
function HiClipboard (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"}},{"tag":"path","attr":{"d":"M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"}}]})(props);
};
function HiClock (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z","clipRule":"evenodd"}}]})(props);
};
function HiCloudDownload (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z","clipRule":"evenodd"}}]})(props);
};
function HiCloudUpload (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"}},{"tag":"path","attr":{"d":"M9 13h2v5a1 1 0 11-2 0v-5z"}}]})(props);
};
function HiCloud (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"}}]})(props);
};
function HiCode (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiCog (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z","clipRule":"evenodd"}}]})(props);
};
function HiCollection (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"}}]})(props);
};
function HiColorSwatch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z","clipRule":"evenodd"}}]})(props);
};
function HiCreditCard (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z","clipRule":"evenodd"}}]})(props);
};
function HiCubeTransparent (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z","clipRule":"evenodd"}}]})(props);
};
function HiCube (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"}}]})(props);
};
function HiCurrencyBangladeshi (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z","clipRule":"evenodd"}}]})(props);
};
function HiCurrencyDollar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z","clipRule":"evenodd"}}]})(props);
};
function HiCurrencyEuro (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z","clipRule":"evenodd"}}]})(props);
};
function HiCurrencyPound (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z","clipRule":"evenodd"}}]})(props);
};
function HiCurrencyRupee (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z","clipRule":"evenodd"}}]})(props);
};
function HiCurrencyYen (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h1.834l.166.277V12H7a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-.723l.166-.277H13a1 1 0 100-2h-.634l1.492-2.486a1 1 0 10-1.716-1.029L10.034 9h-.068L7.858 5.485z","clipRule":"evenodd"}}]})(props);
};
function HiCursorClick (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z","clipRule":"evenodd"}}]})(props);
};
function HiDatabase (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"}},{"tag":"path","attr":{"d":"M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"}},{"tag":"path","attr":{"d":"M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"}}]})(props);
};
function HiDesktopComputer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z","clipRule":"evenodd"}}]})(props);
};
function HiDeviceMobile (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"}}]})(props);
};
function HiDeviceTablet (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"}}]})(props);
};
function HiDocumentAdd (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z","clipRule":"evenodd"}}]})(props);
};
function HiDocumentDownload (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z","clipRule":"evenodd"}}]})(props);
};
function HiDocumentDuplicate (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"}},{"tag":"path","attr":{"d":"M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"}}]})(props);
};
function HiDocumentRemove (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z","clipRule":"evenodd"}}]})(props);
};
function HiDocumentReport (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z","clipRule":"evenodd"}}]})(props);
};
function HiDocumentSearch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z","clipRule":"evenodd"}}]})(props);
};
function HiDocumentText (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z","clipRule":"evenodd"}}]})(props);
};
function HiDocument (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z","clipRule":"evenodd"}}]})(props);
};
function HiDotsCircleHorizontal (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z","clipRule":"evenodd"}}]})(props);
};
function HiDotsHorizontal (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"}}]})(props);
};
function HiDotsVertical (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"}}]})(props);
};
function HiDownload (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiDuplicate (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"}},{"tag":"path","attr":{"d":"M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"}}]})(props);
};
function HiEmojiHappy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z","clipRule":"evenodd"}}]})(props);
};
function HiEmojiSad (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z","clipRule":"evenodd"}}]})(props);
};
function HiExclamationCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiExclamation (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiExternalLink (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}},{"tag":"path","attr":{"d":"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"}}]})(props);
};
function HiEyeOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"}}]})(props);
};
function HiEye (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10 12a2 2 0 100-4 2 2 0 000 4z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z","clipRule":"evenodd"}}]})(props);
};
function HiFastForward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"}}]})(props);
};
function HiFilm (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z","clipRule":"evenodd"}}]})(props);
};
function HiFilter (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z","clipRule":"evenodd"}}]})(props);
};
function HiFingerPrint (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z","clipRule":"evenodd"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z","clipRule":"evenodd"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z","clipRule":"evenodd"}}]})(props);
};
function HiFire (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z","clipRule":"evenodd"}}]})(props);
};
function HiFlag (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z","clipRule":"evenodd"}}]})(props);
};
function HiFolderAdd (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z"}}]})(props);
};
function HiFolderDownload (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1.586l-.293-.293a1 1 0 10-1.414 1.414l2 2 .002.002a.997.997 0 001.41 0l.002-.002 2-2a1 1 0 00-1.414-1.414l-.293.293V9z"}}]})(props);
};
function HiFolderOpen (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"}}]})(props);
};
function HiFolderRemove (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm4 6a1 1 0 100 2h4a1 1 0 100-2H8z"}}]})(props);
};
function HiFolder (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"}}]})(props);
};
function HiGift (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"}}]})(props);
};
function HiGlobeAlt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z","clipRule":"evenodd"}}]})(props);
};
function HiGlobe (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z","clipRule":"evenodd"}}]})(props);
};
function HiHand (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z","clipRule":"evenodd"}}]})(props);
};
function HiHashtag (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z","clipRule":"evenodd"}}]})(props);
};
function HiHeart (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z","clipRule":"evenodd"}}]})(props);
};
function HiHome (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"}}]})(props);
};
function HiIdentification (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiInboxIn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"}},{"tag":"path","attr":{"d":"M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"}}]})(props);
};
function HiInbox (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z","clipRule":"evenodd"}}]})(props);
};
function HiInformationCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clipRule":"evenodd"}}]})(props);
};
function HiKey (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z","clipRule":"evenodd"}}]})(props);
};
function HiLibrary (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiLightBulb (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"}}]})(props);
};
function HiLightningBolt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z","clipRule":"evenodd"}}]})(props);
};
function HiLink (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z","clipRule":"evenodd"}}]})(props);
};
function HiLocationMarker (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z","clipRule":"evenodd"}}]})(props);
};
function HiLockClosed (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clipRule":"evenodd"}}]})(props);
};
function HiLockOpen (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"}}]})(props);
};
function HiLogin (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiLogout (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z","clipRule":"evenodd"}}]})(props);
};
function HiMailOpen (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z","clipRule":"evenodd"}}]})(props);
};
function HiMail (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}},{"tag":"path","attr":{"d":"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"}}]})(props);
};
function HiMap (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z","clipRule":"evenodd"}}]})(props);
};
function HiMenuAlt1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMenuAlt2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMenuAlt3 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMenuAlt4 (props) {
  return iconBase_GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMenu (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMicrophone (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z","clipRule":"evenodd"}}]})(props);
};
function HiMinusCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z","clipRule":"evenodd"}}]})(props);
};
function HiMinusSm (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMinus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMoon (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}}]})(props);
};
function HiMusicNote (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"}}]})(props);
};
function HiNewspaper (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"}}]})(props);
};
function HiOfficeBuilding (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z","clipRule":"evenodd"}}]})(props);
};
function HiPaperAirplane (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"}}]})(props);
};
function HiPaperClip (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z","clipRule":"evenodd"}}]})(props);
};
function HiPause (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiPencilAlt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z","clipRule":"evenodd"}}]})(props);
};
function HiPencil (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}}]})(props);
};
function HiPhoneIncoming (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"}},{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}}]})(props);
};
function HiPhoneMissedCall (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}},{"tag":"path","attr":{"d":"M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z"}}]})(props);
};
function HiPhoneOutgoing (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"}},{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}}]})(props);
};
function HiPhone (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}}]})(props);
};
function HiPhotograph (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z","clipRule":"evenodd"}}]})(props);
};
function HiPlay (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z","clipRule":"evenodd"}}]})(props);
};
function HiPlusCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z","clipRule":"evenodd"}}]})(props);
};
function HiPlusSm (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clipRule":"evenodd"}}]})(props);
};
function HiPlus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clipRule":"evenodd"}}]})(props);
};
function HiPresentationChartBar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z","clipRule":"evenodd"}}]})(props);
};
function HiPresentationChartLine (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z","clipRule":"evenodd"}}]})(props);
};
function HiPrinter (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z","clipRule":"evenodd"}}]})(props);
};
function HiPuzzle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"}}]})(props);
};
function HiQrcode (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"}}]})(props);
};
function HiQuestionMarkCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"}}]})(props);
};
function HiReceiptRefund (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z","clipRule":"evenodd"}}]})(props);
};
function HiReceiptTax (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z","clipRule":"evenodd"}}]})(props);
};
function HiRefresh (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clipRule":"evenodd"}}]})(props);
};
function HiReply (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiRewind (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"}}]})(props);
};
function HiRss (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"}},{"tag":"path","attr":{"d":"M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"}}]})(props);
};
function HiSaveAs (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z"}},{"tag":"path","attr":{"d":"M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z"}}]})(props);
};
function HiSave (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"}}]})(props);
};
function HiScale (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z","clipRule":"evenodd"}}]})(props);
};
function HiScissors (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M12.828 11.414a1 1 0 00-1.414 1.414l3.879 3.88a1 1 0 001.414-1.415l-3.879-3.879z"}}]})(props);
};
function HiSearchCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 9a2 2 0 114 0 2 2 0 01-4 0z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z","clipRule":"evenodd"}}]})(props);
};
function HiSearch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clipRule":"evenodd"}}]})(props);
};
function HiSelector (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiServer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z","clipRule":"evenodd"}}]})(props);
};
function HiShare (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"}}]})(props);
};
function HiShieldCheck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"}}]})(props);
};
function HiShieldExclamation (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z","clipRule":"evenodd"}}]})(props);
};
function HiShoppingBag (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z","clipRule":"evenodd"}}]})(props);
};
function HiShoppingCart (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"}}]})(props);
};
function HiSortAscending (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"}}]})(props);
};
function HiSortDescending (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"}}]})(props);
};
function HiSparkles (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z","clipRule":"evenodd"}}]})(props);
};
function HiSpeakerphone (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z","clipRule":"evenodd"}}]})(props);
};
function HiStar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}}]})(props);
};
function HiStatusOffline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z"}}]})(props);
};
function HiStatusOnline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z","clipRule":"evenodd"}}]})(props);
};
function HiStop (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z","clipRule":"evenodd"}}]})(props);
};
function HiSun (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","clipRule":"evenodd"}}]})(props);
};
function HiSupport (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z","clipRule":"evenodd"}}]})(props);
};
function HiSwitchHorizontal (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"}}]})(props);
};
function HiSwitchVertical (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"}}]})(props);
};
function HiTable (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z","clipRule":"evenodd"}}]})(props);
};
function HiTag (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"}}]})(props);
};
function HiTemplate (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"}}]})(props);
};
function HiTerminal (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z","clipRule":"evenodd"}}]})(props);
};
function HiThumbDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"}}]})(props);
};
function HiThumbUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"}}]})(props);
};
function HiTicket (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"}}]})(props);
};
function HiTranslate (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z","clipRule":"evenodd"}}]})(props);
};
function HiTrash (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiTrendingDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z","clipRule":"evenodd"}}]})(props);
};
function HiTrendingUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z","clipRule":"evenodd"}}]})(props);
};
function HiTruck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"}},{"tag":"path","attr":{"d":"M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"}}]})(props);
};
function HiUpload (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiUserAdd (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"}}]})(props);
};
function HiUserCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clipRule":"evenodd"}}]})(props);
};
function HiUserGroup (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"}}]})(props);
};
function HiUserRemove (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"}}]})(props);
};
function HiUser (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z","clipRule":"evenodd"}}]})(props);
};
function HiUsers (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"}}]})(props);
};
function HiVariable (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z","clipRule":"evenodd"}}]})(props);
};
function HiVideoCamera (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"}}]})(props);
};
function HiViewBoards (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"}}]})(props);
};
function HiViewGridAdd (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"}}]})(props);
};
function HiViewGrid (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"}}]})(props);
};
function HiViewList (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiVolumeOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiVolumeUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z","clipRule":"evenodd"}}]})(props);
};
function HiWifi (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiXCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clipRule":"evenodd"}}]})(props);
};
function HiX (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiZoomIn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z","clipRule":"evenodd"}}]})(props);
};
function HiZoomOut (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clipRule":"evenodd"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 8a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiOutlineAcademicCap (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M12 14l9-5-9-5-9 5 9 5z"}},{"tag":"path","attr":{"d":"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"}}]})(props);
};
function HiOutlineAdjustments (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"}}]})(props);
};
function HiOutlineAnnotation (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"}}]})(props);
};
function HiOutlineArchive (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"}}]})(props);
};
function HiOutlineArrowCircleDown (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"}}]})(props);
};
function HiOutlineArrowCircleLeft (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"}}]})(props);
};
function HiOutlineArrowCircleRight (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineArrowCircleUp (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"}}]})(props);
};
function HiOutlineArrowDown (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 14l-7 7m0 0l-7-7m7 7V3"}}]})(props);
};
function HiOutlineArrowLeft (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 19l-7-7m0 0l7-7m-7 7h18"}}]})(props);
};
function HiOutlineArrowNarrowDown (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 17l-4 4m0 0l-4-4m4 4V3"}}]})(props);
};
function HiOutlineArrowNarrowLeft (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 16l-4-4m0 0l4-4m-4 4h18"}}]})(props);
};
function HiOutlineArrowNarrowRight (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 8l4 4m0 0l-4 4m4-4H3"}}]})(props);
};
function HiOutlineArrowNarrowUp (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 7l4-4m0 0l4 4m-4-4v18"}}]})(props);
};
function HiOutlineArrowRight (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14 5l7 7m0 0l-7 7m7-7H3"}}]})(props);
};
function HiOutlineArrowSmDown (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 13l-5 5m0 0l-5-5m5 5V6"}}]})(props);
};
function HiOutlineArrowSmLeft (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 17l-5-5m0 0l5-5m-5 5h12"}}]})(props);
};
function HiOutlineArrowSmRight (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 7l5 5m0 0l-5 5m5-5H6"}}]})(props);
};
function HiOutlineArrowSmUp (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 11l5-5m0 0l5 5m-5-5v12"}}]})(props);
};
function HiOutlineArrowUp (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 10l7-7m0 0l7 7m-7-7v18"}}]})(props);
};
function HiOutlineArrowsExpand (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"}}]})(props);
};
function HiOutlineAtSymbol (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"}}]})(props);
};
function HiOutlineBackspace (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"}}]})(props);
};
function HiOutlineBadgeCheck (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"}}]})(props);
};
function HiOutlineBan (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"}}]})(props);
};
function HiOutlineBeaker (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"}}]})(props);
};
function HiOutlineBell (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"}}]})(props);
};
function HiOutlineBookOpen (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"}}]})(props);
};
function HiOutlineBookmarkAlt (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}}]})(props);
};
function HiOutlineBookmark (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"}}]})(props);
};
function HiOutlineBriefcase (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}}]})(props);
};
function HiOutlineCake (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"}}]})(props);
};
function HiOutlineCalculator (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"}}]})(props);
};
function HiOutlineCalendar (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}}]})(props);
};
function HiOutlineCamera (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 13a3 3 0 11-6 0 3 3 0 016 0z"}}]})(props);
};
function HiOutlineCash (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"}}]})(props);
};
function HiOutlineChartBar (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}}]})(props);
};
function HiOutlineChartPie (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"}}]})(props);
};
function HiOutlineChartSquareBar (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}}]})(props);
};
function HiOutlineChatAlt2 (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"}}]})(props);
};
function HiOutlineChatAlt (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"}}]})(props);
};
function HiOutlineChat (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"}}]})(props);
};
function HiOutlineCheckCircle (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCheck (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 13l4 4L19 7"}}]})(props);
};
function HiOutlineChevronDoubleDown (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 13l-7 7-7-7m14-8l-7 7-7-7"}}]})(props);
};
function HiOutlineChevronDoubleLeft (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 19l-7-7 7-7m8 14l-7-7 7-7"}}]})(props);
};
function HiOutlineChevronDoubleRight (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 5l7 7-7 7M5 5l7 7-7 7"}}]})(props);
};
function HiOutlineChevronDoubleUp (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 11l7-7 7 7M5 19l7-7 7 7"}}]})(props);
};
function HiOutlineChevronDown (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 9l-7 7-7-7"}}]})(props);
};
function HiOutlineChevronLeft (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 19l-7-7 7-7"}}]})(props);
};
function HiOutlineChevronRight (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 5l7 7-7 7"}}]})(props);
};
function HiOutlineChevronUp (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 15l7-7 7 7"}}]})(props);
};
function HiOutlineChip (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"}}]})(props);
};
function HiOutlineClipboardCheck (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"}}]})(props);
};
function HiOutlineClipboardCopy (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"}}]})(props);
};
function HiOutlineClipboardList (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"}}]})(props);
};
function HiOutlineClipboard (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"}}]})(props);
};
function HiOutlineClock (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCloudDownload (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"}}]})(props);
};
function HiOutlineCloudUpload (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"}}]})(props);
};
function HiOutlineCloud (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"}}]})(props);
};
function HiOutlineCode (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}}]})(props);
};
function HiOutlineCog (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}}]})(props);
};
function HiOutlineCollection (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"}}]})(props);
};
function HiOutlineColorSwatch (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"}}]})(props);
};
function HiOutlineCreditCard (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"}}]})(props);
};
function HiOutlineCubeTransparent (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"}}]})(props);
};
function HiOutlineCube (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"}}]})(props);
};
function HiOutlineCurrencyBangladeshi (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCurrencyDollar (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCurrencyEuro (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCurrencyPound (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCurrencyRupee (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCurrencyYen (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCursorClick (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"}}]})(props);
};
function HiOutlineDatabase (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"}}]})(props);
};
function HiOutlineDesktopComputer (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}}]})(props);
};
function HiOutlineDeviceMobile (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"}}]})(props);
};
function HiOutlineDeviceTablet (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"}}]})(props);
};
function HiOutlineDocumentAdd (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}}]})(props);
};
function HiOutlineDocumentDownload (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}}]})(props);
};
function HiOutlineDocumentDuplicate (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"}}]})(props);
};
function HiOutlineDocumentRemove (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}}]})(props);
};
function HiOutlineDocumentReport (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}}]})(props);
};
function HiOutlineDocumentSearch (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"}}]})(props);
};
function HiOutlineDocumentText (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}}]})(props);
};
function HiOutlineDocument (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"}}]})(props);
};
function HiOutlineDotsCircleHorizontal (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineDotsHorizontal (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"}}]})(props);
};
function HiOutlineDotsVertical (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"}}]})(props);
};
function HiOutlineDownload (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"}}]})(props);
};
function HiOutlineDuplicate (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"}}]})(props);
};
function HiOutlineEmojiHappy (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineEmojiSad (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineExclamationCircle (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineExclamation (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}}]})(props);
};
function HiOutlineExternalLink (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}}]})(props);
};
function HiOutlineEyeOff (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"}}]})(props);
};
function HiOutlineEye (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"}}]})(props);
};
function HiOutlineFastForward (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"}}]})(props);
};
function HiOutlineFilm (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"}}]})(props);
};
function HiOutlineFilter (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"}}]})(props);
};
function HiOutlineFingerPrint (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"}}]})(props);
};
function HiOutlineFire (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"}}]})(props);
};
function HiOutlineFlag (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"}}]})(props);
};
function HiOutlineFolderAdd (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"}}]})(props);
};
function HiOutlineFolderDownload (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"}}]})(props);
};
function HiOutlineFolderOpen (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"}}]})(props);
};
function HiOutlineFolderRemove (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"}}]})(props);
};
function HiOutlineFolder (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"}}]})(props);
};
function HiOutlineGift (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"}}]})(props);
};
function HiOutlineGlobeAlt (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"}}]})(props);
};
function HiOutlineGlobe (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineHand (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"}}]})(props);
};
function HiOutlineHashtag (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 20l4-16m2 16l4-16M6 9h14M4 15h14"}}]})(props);
};
function HiOutlineHeart (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}}]})(props);
};
function HiOutlineHome (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}}]})(props);
};
function HiOutlineIdentification (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"}}]})(props);
};
function HiOutlineInboxIn (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"}}]})(props);
};
function HiOutlineInbox (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"}}]})(props);
};
function HiOutlineInformationCircle (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineKey (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"}}]})(props);
};
function HiOutlineLibrary (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"}}]})(props);
};
function HiOutlineLightBulb (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"}}]})(props);
};
function HiOutlineLightningBolt (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 10V3L4 14h7v7l9-11h-7z"}}]})(props);
};
function HiOutlineLink (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}}]})(props);
};
function HiOutlineLocationMarker (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 11a3 3 0 11-6 0 3 3 0 016 0z"}}]})(props);
};
function HiOutlineLockClosed (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"}}]})(props);
};
function HiOutlineLockOpen (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"}}]})(props);
};
function HiOutlineLogin (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"}}]})(props);
};
function HiOutlineLogout (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"}}]})(props);
};
function HiOutlineMailOpen (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"}}]})(props);
};
function HiOutlineMail (props) {
  return iconBase_GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}}]})(props);
};
function HiOutlineMap (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"}}]})(props);
};
function HiOutlineMenuAlt1 (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 6h16M4 12h8m-8 6h16"}}]})(props);
};
function HiOutlineMenuAlt2 (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 6h16M4 12h16M4 18h7"}}]})(props);
};
function HiOutlineMenuAlt3 (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 6h16M4 12h16m-7 6h7"}}]})(props);
};
function HiOutlineMenuAlt4 (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 8h16M4 16h16"}}]})(props);
};
function HiOutlineMenu (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 6h16M4 12h16M4 18h16"}}]})(props);
};
function HiOutlineMicrophone (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"}}]})(props);
};
function HiOutlineMinusCircle (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineMinusSm (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M18 12H6"}}]})(props);
};
function HiOutlineMinus (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M20 12H4"}}]})(props);
};
function HiOutlineMoon (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}}]})(props);
};
function HiOutlineMusicNote (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"}}]})(props);
};
function HiOutlineNewspaper (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"}}]})(props);
};
function HiOutlineOfficeBuilding (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"}}]})(props);
};
function HiOutlinePaperAirplane (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"}}]})(props);
};
function HiOutlinePaperClip (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"}}]})(props);
};
function HiOutlinePause (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlinePencilAlt (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"}}]})(props);
};
function HiOutlinePencil (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"}}]})(props);
};
function HiOutlinePhoneIncoming (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"}}]})(props);
};
function HiOutlinePhoneMissedCall (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"}}]})(props);
};
function HiOutlinePhoneOutgoing (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"}}]})(props);
};
function HiOutlinePhone (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"}}]})(props);
};
function HiOutlinePhotograph (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}}]})(props);
};
function HiOutlinePlay (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlinePlusCircle (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlinePlusSm (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 6v6m0 0v6m0-6h6m-6 0H6"}}]})(props);
};
function HiOutlinePlus (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 4v16m8-8H4"}}]})(props);
};
function HiOutlinePresentationChartBar (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"}}]})(props);
};
function HiOutlinePresentationChartLine (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"}}]})(props);
};
function HiOutlinePrinter (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"}}]})(props);
};
function HiOutlinePuzzle (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"}}]})(props);
};
function HiOutlineQrcode (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"}}]})(props);
};
function HiOutlineQuestionMarkCircle (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineReceiptRefund (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"}}]})(props);
};
function HiOutlineReceiptTax (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"}}]})(props);
};
function HiOutlineRefresh (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}}]})(props);
};
function HiOutlineReply (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"}}]})(props);
};
function HiOutlineRewind (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"}}]})(props);
};
function HiOutlineRss (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"}}]})(props);
};
function HiOutlineSaveAs (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3"}}]})(props);
};
function HiOutlineSave (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}}]})(props);
};
function HiOutlineScale (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"}}]})(props);
};
function HiOutlineScissors (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"}}]})(props);
};
function HiOutlineSearchCircle (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineSearch (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}}]})(props);
};
function HiOutlineSelector (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 9l4-4 4 4m0 6l-4 4-4-4"}}]})(props);
};
function HiOutlineServer (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"}}]})(props);
};
function HiOutlineShare (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"}}]})(props);
};
function HiOutlineShieldCheck (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"}}]})(props);
};
function HiOutlineShieldExclamation (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"}}]})(props);
};
function HiOutlineShoppingBag (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"}}]})(props);
};
function HiOutlineShoppingCart (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"}}]})(props);
};
function HiOutlineSortAscending (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"}}]})(props);
};
function HiOutlineSortDescending (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"}}]})(props);
};
function HiOutlineSparkles (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"}}]})(props);
};
function HiOutlineSpeakerphone (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"}}]})(props);
};
function HiOutlineStar (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"}}]})(props);
};
function HiOutlineStatusOffline (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"}}]})(props);
};
function HiOutlineStatusOnline (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"}}]})(props);
};
function HiOutlineStop (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"}}]})(props);
};
function HiOutlineSun (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}}]})(props);
};
function HiOutlineSupport (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"}}]})(props);
};
function HiOutlineSwitchHorizontal (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"}}]})(props);
};
function HiOutlineSwitchVertical (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"}}]})(props);
};
function HiOutlineTable (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"}}]})(props);
};
function HiOutlineTag (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"}}]})(props);
};
function HiOutlineTemplate (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"}}]})(props);
};
function HiOutlineTerminal (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}}]})(props);
};
function HiOutlineThumbDown (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"}}]})(props);
};
function HiOutlineThumbUp (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"}}]})(props);
};
function HiOutlineTicket (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"}}]})(props);
};
function HiOutlineTranslate (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"}}]})(props);
};
function HiOutlineTrash (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}}]})(props);
};
function HiOutlineTrendingDown (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"}}]})(props);
};
function HiOutlineTrendingUp (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"}}]})(props);
};
function HiOutlineTruck (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"}}]})(props);
};
function HiOutlineUpload (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"}}]})(props);
};
function HiOutlineUserAdd (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"}}]})(props);
};
function HiOutlineUserCircle (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineUserGroup (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"}}]})(props);
};
function HiOutlineUserRemove (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"}}]})(props);
};
function HiOutlineUser (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"}}]})(props);
};
function HiOutlineUsers (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"}}]})(props);
};
function HiOutlineVariable (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"}}]})(props);
};
function HiOutlineVideoCamera (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"}}]})(props);
};
function HiOutlineViewBoards (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"}}]})(props);
};
function HiOutlineViewGridAdd (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"}}]})(props);
};
function HiOutlineViewGrid (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"}}]})(props);
};
function HiOutlineViewList (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 6h16M4 10h16M4 14h16M4 18h16"}}]})(props);
};
function HiOutlineVolumeOff (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z","clipRule":"evenodd"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"}}]})(props);
};
function HiOutlineVolumeUp (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"}}]})(props);
};
function HiOutlineWifi (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"}}]})(props);
};
function HiOutlineXCircle (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineX (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M6 18L18 6M6 6l12 12"}}]})(props);
};
function HiOutlineZoomIn (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"}}]})(props);
};
function HiOutlineZoomOut (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"}}]})(props);
};

;// CONCATENATED MODULE: ./node_modules/react-icons/fi/index.esm.js
// THIS FILE IS AUTO GENERATED

function FiActivity (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"22 12 18 12 15 21 9 3 6 12 2 12"}}]})(props);
};
function FiAirplay (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}},{"tag":"polygon","attr":{"points":"12 15 17 21 7 21 12 15"}}]})(props);
};
function FiAlertCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"16","x2":"12.01","y2":"16"}}]})(props);
};
function FiAlertOctagon (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"16","x2":"12.01","y2":"16"}}]})(props);
};
function FiAlertTriangle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}},{"tag":"line","attr":{"x1":"12","y1":"9","x2":"12","y2":"13"}},{"tag":"line","attr":{"x1":"12","y1":"17","x2":"12.01","y2":"17"}}]})(props);
};
function FiAlignCenter (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"18","y1":"10","x2":"6","y2":"10"}},{"tag":"line","attr":{"x1":"21","y1":"6","x2":"3","y2":"6"}},{"tag":"line","attr":{"x1":"21","y1":"14","x2":"3","y2":"14"}},{"tag":"line","attr":{"x1":"18","y1":"18","x2":"6","y2":"18"}}]})(props);
};
function FiAlignJustify (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"21","y1":"10","x2":"3","y2":"10"}},{"tag":"line","attr":{"x1":"21","y1":"6","x2":"3","y2":"6"}},{"tag":"line","attr":{"x1":"21","y1":"14","x2":"3","y2":"14"}},{"tag":"line","attr":{"x1":"21","y1":"18","x2":"3","y2":"18"}}]})(props);
};
function FiAlignLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"17","y1":"10","x2":"3","y2":"10"}},{"tag":"line","attr":{"x1":"21","y1":"6","x2":"3","y2":"6"}},{"tag":"line","attr":{"x1":"21","y1":"14","x2":"3","y2":"14"}},{"tag":"line","attr":{"x1":"17","y1":"18","x2":"3","y2":"18"}}]})(props);
};
function FiAlignRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"21","y1":"10","x2":"7","y2":"10"}},{"tag":"line","attr":{"x1":"21","y1":"6","x2":"3","y2":"6"}},{"tag":"line","attr":{"x1":"21","y1":"14","x2":"3","y2":"14"}},{"tag":"line","attr":{"x1":"21","y1":"18","x2":"7","y2":"18"}}]})(props);
};
function FiAnchor (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"5","r":"3"}},{"tag":"line","attr":{"x1":"12","y1":"22","x2":"12","y2":"8"}},{"tag":"path","attr":{"d":"M5 12H2a10 10 0 0 0 20 0h-3"}}]})(props);
};
function FiAperture (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"14.31","y1":"8","x2":"20.05","y2":"17.94"}},{"tag":"line","attr":{"x1":"9.69","y1":"8","x2":"21.17","y2":"8"}},{"tag":"line","attr":{"x1":"7.38","y1":"12","x2":"13.12","y2":"2.06"}},{"tag":"line","attr":{"x1":"9.69","y1":"16","x2":"3.95","y2":"6.06"}},{"tag":"line","attr":{"x1":"14.31","y1":"16","x2":"2.83","y2":"16"}},{"tag":"line","attr":{"x1":"16.62","y1":"12","x2":"10.88","y2":"21.94"}}]})(props);
};
function FiArchive (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"21 8 21 21 3 21 3 8"}},{"tag":"rect","attr":{"x":"1","y":"3","width":"22","height":"5"}},{"tag":"line","attr":{"x1":"10","y1":"12","x2":"14","y2":"12"}}]})(props);
};
function FiArrowDownCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polyline","attr":{"points":"8 12 12 16 16 12"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"16"}}]})(props);
};
function FiArrowDownLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"17","y1":"7","x2":"7","y2":"17"}},{"tag":"polyline","attr":{"points":"17 17 7 17 7 7"}}]})(props);
};
function FiArrowDownRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"7","y1":"7","x2":"17","y2":"17"}},{"tag":"polyline","attr":{"points":"17 7 17 17 7 17"}}]})(props);
};
function FiArrowDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"5","x2":"12","y2":"19"}},{"tag":"polyline","attr":{"points":"19 12 12 19 5 12"}}]})(props);
};
function FiArrowLeftCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polyline","attr":{"points":"12 8 8 12 12 16"}},{"tag":"line","attr":{"x1":"16","y1":"12","x2":"8","y2":"12"}}]})(props);
};
function FiArrowLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"19","y1":"12","x2":"5","y2":"12"}},{"tag":"polyline","attr":{"points":"12 19 5 12 12 5"}}]})(props);
};
function FiArrowRightCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polyline","attr":{"points":"12 16 16 12 12 8"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
};
function FiArrowRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"5","y1":"12","x2":"19","y2":"12"}},{"tag":"polyline","attr":{"points":"12 5 19 12 12 19"}}]})(props);
};
function FiArrowUpCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polyline","attr":{"points":"16 12 12 8 8 12"}},{"tag":"line","attr":{"x1":"12","y1":"16","x2":"12","y2":"8"}}]})(props);
};
function FiArrowUpLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"17","y1":"17","x2":"7","y2":"7"}},{"tag":"polyline","attr":{"points":"7 17 7 7 17 7"}}]})(props);
};
function FiArrowUpRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"7","y1":"17","x2":"17","y2":"7"}},{"tag":"polyline","attr":{"points":"7 7 17 7 17 17"}}]})(props);
};
function FiArrowUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"19","x2":"12","y2":"5"}},{"tag":"polyline","attr":{"points":"5 12 12 5 19 12"}}]})(props);
};
function FiAtSign (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"4"}},{"tag":"path","attr":{"d":"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"}}]})(props);
};
function FiAward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"8","r":"7"}},{"tag":"polyline","attr":{"points":"8.21 13.89 7 23 12 20 17 23 15.79 13.88"}}]})(props);
};
function FiBarChart2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"18","y1":"20","x2":"18","y2":"10"}},{"tag":"line","attr":{"x1":"12","y1":"20","x2":"12","y2":"4"}},{"tag":"line","attr":{"x1":"6","y1":"20","x2":"6","y2":"14"}}]})(props);
};
function FiBarChart (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"20","x2":"12","y2":"10"}},{"tag":"line","attr":{"x1":"18","y1":"20","x2":"18","y2":"4"}},{"tag":"line","attr":{"x1":"6","y1":"20","x2":"6","y2":"16"}}]})(props);
};
function FiBatteryCharging (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"}},{"tag":"line","attr":{"x1":"23","y1":"13","x2":"23","y2":"11"}},{"tag":"polyline","attr":{"points":"11 6 7 12 13 12 9 18"}}]})(props);
};
function FiBattery (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"1","y":"6","width":"18","height":"12","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"23","y1":"13","x2":"23","y2":"11"}}]})(props);
};
function FiBellOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M13.73 21a2 2 0 0 1-3.46 0"}},{"tag":"path","attr":{"d":"M18.63 13A17.89 17.89 0 0 1 18 8"}},{"tag":"path","attr":{"d":"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"}},{"tag":"path","attr":{"d":"M18 8a6 6 0 0 0-9.33-5"}},{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}}]})(props);
};
function FiBell (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}},{"tag":"path","attr":{"d":"M13.73 21a2 2 0 0 1-3.46 0"}}]})(props);
};
function FiBluetooth (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"}}]})(props);
};
function FiBold (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"}},{"tag":"path","attr":{"d":"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"}}]})(props);
};
function FiBookOpen (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}},{"tag":"path","attr":{"d":"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}}]})(props);
};
function FiBook (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}},{"tag":"path","attr":{"d":"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}}]})(props);
};
function FiBookmark (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"}}]})(props);
};
function FiBox (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{"tag":"polyline","attr":{"points":"3.27 6.96 12 12.01 20.73 6.96"}},{"tag":"line","attr":{"x1":"12","y1":"22.08","x2":"12","y2":"12"}}]})(props);
};
function FiBriefcase (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"2","y":"7","width":"20","height":"14","rx":"2","ry":"2"}},{"tag":"path","attr":{"d":"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}}]})(props);
};
function FiCalendar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"4","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"16","y1":"2","x2":"16","y2":"6"}},{"tag":"line","attr":{"x1":"8","y1":"2","x2":"8","y2":"6"}},{"tag":"line","attr":{"x1":"3","y1":"10","x2":"21","y2":"10"}}]})(props);
};
function FiCameraOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}},{"tag":"path","attr":{"d":"M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"}}]})(props);
};
function FiCamera (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}},{"tag":"circle","attr":{"cx":"12","cy":"13","r":"4"}}]})(props);
};
function FiCast (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}},{"tag":"line","attr":{"x1":"2","y1":"20","x2":"2.01","y2":"20"}}]})(props);
};
function FiCheckCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22 11.08V12a10 10 0 1 1-5.93-9.14"}},{"tag":"polyline","attr":{"points":"22 4 12 14.01 9 11.01"}}]})(props);
};
function FiCheckSquare (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"9 11 12 14 22 4"}},{"tag":"path","attr":{"d":"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"}}]})(props);
};
function FiCheck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"20 6 9 17 4 12"}}]})(props);
};
function FiChevronDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"6 9 12 15 18 9"}}]})(props);
};
function FiChevronLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"15 18 9 12 15 6"}}]})(props);
};
function FiChevronRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"9 18 15 12 9 6"}}]})(props);
};
function FiChevronUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"18 15 12 9 6 15"}}]})(props);
};
function FiChevronsDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"7 13 12 18 17 13"}},{"tag":"polyline","attr":{"points":"7 6 12 11 17 6"}}]})(props);
};
function FiChevronsLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"11 17 6 12 11 7"}},{"tag":"polyline","attr":{"points":"18 17 13 12 18 7"}}]})(props);
};
function FiChevronsRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"13 17 18 12 13 7"}},{"tag":"polyline","attr":{"points":"6 17 11 12 6 7"}}]})(props);
};
function FiChevronsUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"17 11 12 6 7 11"}},{"tag":"polyline","attr":{"points":"17 18 12 13 7 18"}}]})(props);
};
function FiChrome (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"4"}},{"tag":"line","attr":{"x1":"21.17","y1":"8","x2":"12","y2":"8"}},{"tag":"line","attr":{"x1":"3.95","y1":"6.06","x2":"8.54","y2":"14"}},{"tag":"line","attr":{"x1":"10.88","y1":"21.94","x2":"15.46","y2":"14"}}]})(props);
};
function FiCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}}]})(props);
};
function FiClipboard (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}},{"tag":"rect","attr":{"x":"8","y":"2","width":"8","height":"4","rx":"1","ry":"1"}}]})(props);
};
function FiClock (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polyline","attr":{"points":"12 6 12 12 16 14"}}]})(props);
};
function FiCloudDrizzle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"8","y1":"19","x2":"8","y2":"21"}},{"tag":"line","attr":{"x1":"8","y1":"13","x2":"8","y2":"15"}},{"tag":"line","attr":{"x1":"16","y1":"19","x2":"16","y2":"21"}},{"tag":"line","attr":{"x1":"16","y1":"13","x2":"16","y2":"15"}},{"tag":"line","attr":{"x1":"12","y1":"21","x2":"12","y2":"23"}},{"tag":"line","attr":{"x1":"12","y1":"15","x2":"12","y2":"17"}},{"tag":"path","attr":{"d":"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"}}]})(props);
};
function FiCloudLightning (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"}},{"tag":"polyline","attr":{"points":"13 11 9 17 15 17 11 23"}}]})(props);
};
function FiCloudOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"}},{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}}]})(props);
};
function FiCloudRain (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"16","y1":"13","x2":"16","y2":"21"}},{"tag":"line","attr":{"x1":"8","y1":"13","x2":"8","y2":"21"}},{"tag":"line","attr":{"x1":"12","y1":"15","x2":"12","y2":"23"}},{"tag":"path","attr":{"d":"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"}}]})(props);
};
function FiCloudSnow (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"}},{"tag":"line","attr":{"x1":"8","y1":"16","x2":"8.01","y2":"16"}},{"tag":"line","attr":{"x1":"8","y1":"20","x2":"8.01","y2":"20"}},{"tag":"line","attr":{"x1":"12","y1":"18","x2":"12.01","y2":"18"}},{"tag":"line","attr":{"x1":"12","y1":"22","x2":"12.01","y2":"22"}},{"tag":"line","attr":{"x1":"16","y1":"16","x2":"16.01","y2":"16"}},{"tag":"line","attr":{"x1":"16","y1":"20","x2":"16.01","y2":"20"}}]})(props);
};
function FiCloud (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}}]})(props);
};
function FiCode (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"16 18 22 12 16 6"}},{"tag":"polyline","attr":{"points":"8 6 2 12 8 18"}}]})(props);
};
function FiCodepen (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}},{"tag":"line","attr":{"x1":"12","y1":"22","x2":"12","y2":"15.5"}},{"tag":"polyline","attr":{"points":"22 8.5 12 15.5 2 8.5"}},{"tag":"polyline","attr":{"points":"2 15.5 12 8.5 22 15.5"}},{"tag":"line","attr":{"x1":"12","y1":"2","x2":"12","y2":"8.5"}}]})(props);
};
function FiCodesandbox (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{"tag":"polyline","attr":{"points":"7.5 4.21 12 6.81 16.5 4.21"}},{"tag":"polyline","attr":{"points":"7.5 19.79 7.5 14.6 3 12"}},{"tag":"polyline","attr":{"points":"21 12 16.5 14.6 16.5 19.79"}},{"tag":"polyline","attr":{"points":"3.27 6.96 12 12.01 20.73 6.96"}},{"tag":"line","attr":{"x1":"12","y1":"22.08","x2":"12","y2":"12"}}]})(props);
};
function FiCoffee (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 8h1a4 4 0 0 1 0 8h-1"}},{"tag":"path","attr":{"d":"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}},{"tag":"line","attr":{"x1":"6","y1":"1","x2":"6","y2":"4"}},{"tag":"line","attr":{"x1":"10","y1":"1","x2":"10","y2":"4"}},{"tag":"line","attr":{"x1":"14","y1":"1","x2":"14","y2":"4"}}]})(props);
};
function FiColumns (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"}}]})(props);
};
function FiCommand (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}}]})(props);
};
function FiCompass (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polygon","attr":{"points":"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}}]})(props);
};
function FiCopy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"9","y":"9","width":"13","height":"13","rx":"2","ry":"2"}},{"tag":"path","attr":{"d":"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}}]})(props);
};
function FiCornerDownLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"9 10 4 15 9 20"}},{"tag":"path","attr":{"d":"M20 4v7a4 4 0 0 1-4 4H4"}}]})(props);
};
function FiCornerDownRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"15 10 20 15 15 20"}},{"tag":"path","attr":{"d":"M4 4v7a4 4 0 0 0 4 4h12"}}]})(props);
};
function FiCornerLeftDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"14 15 9 20 4 15"}},{"tag":"path","attr":{"d":"M20 4h-7a4 4 0 0 0-4 4v12"}}]})(props);
};
function FiCornerLeftUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"14 9 9 4 4 9"}},{"tag":"path","attr":{"d":"M20 20h-7a4 4 0 0 1-4-4V4"}}]})(props);
};
function FiCornerRightDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"10 15 15 20 20 15"}},{"tag":"path","attr":{"d":"M4 4h7a4 4 0 0 1 4 4v12"}}]})(props);
};
function FiCornerRightUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"10 9 15 4 20 9"}},{"tag":"path","attr":{"d":"M4 20h7a4 4 0 0 0 4-4V4"}}]})(props);
};
function FiCornerUpLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"9 14 4 9 9 4"}},{"tag":"path","attr":{"d":"M20 20v-7a4 4 0 0 0-4-4H4"}}]})(props);
};
function FiCornerUpRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"15 14 20 9 15 4"}},{"tag":"path","attr":{"d":"M4 20v-7a4 4 0 0 1 4-4h12"}}]})(props);
};
function FiCpu (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"4","y":"4","width":"16","height":"16","rx":"2","ry":"2"}},{"tag":"rect","attr":{"x":"9","y":"9","width":"6","height":"6"}},{"tag":"line","attr":{"x1":"9","y1":"1","x2":"9","y2":"4"}},{"tag":"line","attr":{"x1":"15","y1":"1","x2":"15","y2":"4"}},{"tag":"line","attr":{"x1":"9","y1":"20","x2":"9","y2":"23"}},{"tag":"line","attr":{"x1":"15","y1":"20","x2":"15","y2":"23"}},{"tag":"line","attr":{"x1":"20","y1":"9","x2":"23","y2":"9"}},{"tag":"line","attr":{"x1":"20","y1":"14","x2":"23","y2":"14"}},{"tag":"line","attr":{"x1":"1","y1":"9","x2":"4","y2":"9"}},{"tag":"line","attr":{"x1":"1","y1":"14","x2":"4","y2":"14"}}]})(props);
};
function FiCreditCard (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"1","y":"4","width":"22","height":"16","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"1","y1":"10","x2":"23","y2":"10"}}]})(props);
};
function FiCrop (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M6.13 1L6 16a2 2 0 0 0 2 2h15"}},{"tag":"path","attr":{"d":"M1 6.13L16 6a2 2 0 0 1 2 2v15"}}]})(props);
};
function FiCrosshair (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"22","y1":"12","x2":"18","y2":"12"}},{"tag":"line","attr":{"x1":"6","y1":"12","x2":"2","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"6","x2":"12","y2":"2"}},{"tag":"line","attr":{"x1":"12","y1":"22","x2":"12","y2":"18"}}]})(props);
};
function FiDatabase (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"ellipse","attr":{"cx":"12","cy":"5","rx":"9","ry":"3"}},{"tag":"path","attr":{"d":"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}},{"tag":"path","attr":{"d":"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}}]})(props);
};
function FiDelete (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"}},{"tag":"line","attr":{"x1":"18","y1":"9","x2":"12","y2":"15"}},{"tag":"line","attr":{"x1":"12","y1":"9","x2":"18","y2":"15"}}]})(props);
};
function FiDisc (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"3"}}]})(props);
};
function FiDivideCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"16","x2":"12","y2":"16"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"8"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}}]})(props);
};
function FiDivideSquare (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"16","x2":"12","y2":"16"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"8"}}]})(props);
};
function FiDivide (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"6","r":"2"}},{"tag":"line","attr":{"x1":"5","y1":"12","x2":"19","y2":"12"}},{"tag":"circle","attr":{"cx":"12","cy":"18","r":"2"}}]})(props);
};
function FiDollarSign (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"1","x2":"12","y2":"23"}},{"tag":"path","attr":{"d":"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}}]})(props);
};
function FiDownloadCloud (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"8 17 12 21 16 17"}},{"tag":"line","attr":{"x1":"12","y1":"12","x2":"12","y2":"21"}},{"tag":"path","attr":{"d":"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"}}]})(props);
};
function FiDownload (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{"tag":"polyline","attr":{"points":"7 10 12 15 17 10"}},{"tag":"line","attr":{"x1":"12","y1":"15","x2":"12","y2":"3"}}]})(props);
};
function FiDribbble (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"path","attr":{"d":"M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"}}]})(props);
};
function FiDroplet (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"}}]})(props);
};
function FiEdit2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}}]})(props);
};
function FiEdit3 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 20h9"}},{"tag":"path","attr":{"d":"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}}]})(props);
};
function FiEdit (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{"tag":"path","attr":{"d":"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}}]})(props);
};
function FiExternalLink (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}},{"tag":"polyline","attr":{"points":"15 3 21 3 21 9"}},{"tag":"line","attr":{"x1":"10","y1":"14","x2":"21","y2":"3"}}]})(props);
};
function FiEyeOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}},{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}}]})(props);
};
function FiEye (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"3"}}]})(props);
};
function FiFacebook (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}}]})(props);
};
function FiFastForward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"13 19 22 12 13 5 13 19"}},{"tag":"polygon","attr":{"points":"2 19 11 12 2 5 2 19"}}]})(props);
};
function FiFeather (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"}},{"tag":"line","attr":{"x1":"16","y1":"8","x2":"2","y2":"22"}},{"tag":"line","attr":{"x1":"17.5","y1":"15","x2":"9","y2":"15"}}]})(props);
};
function FiFigma (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}},{"tag":"path","attr":{"d":"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}},{"tag":"path","attr":{"d":"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}},{"tag":"path","attr":{"d":"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}},{"tag":"path","attr":{"d":"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"}}]})(props);
};
function FiFileMinus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}},{"tag":"polyline","attr":{"points":"14 2 14 8 20 8"}},{"tag":"line","attr":{"x1":"9","y1":"15","x2":"15","y2":"15"}}]})(props);
};
function FiFilePlus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}},{"tag":"polyline","attr":{"points":"14 2 14 8 20 8"}},{"tag":"line","attr":{"x1":"12","y1":"18","x2":"12","y2":"12"}},{"tag":"line","attr":{"x1":"9","y1":"15","x2":"15","y2":"15"}}]})(props);
};
function FiFileText (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}},{"tag":"polyline","attr":{"points":"14 2 14 8 20 8"}},{"tag":"line","attr":{"x1":"16","y1":"13","x2":"8","y2":"13"}},{"tag":"line","attr":{"x1":"16","y1":"17","x2":"8","y2":"17"}},{"tag":"polyline","attr":{"points":"10 9 9 9 8 9"}}]})(props);
};
function FiFile (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}},{"tag":"polyline","attr":{"points":"13 2 13 9 20 9"}}]})(props);
};
function FiFilm (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"2","y":"2","width":"20","height":"20","rx":"2.18","ry":"2.18"}},{"tag":"line","attr":{"x1":"7","y1":"2","x2":"7","y2":"22"}},{"tag":"line","attr":{"x1":"17","y1":"2","x2":"17","y2":"22"}},{"tag":"line","attr":{"x1":"2","y1":"12","x2":"22","y2":"12"}},{"tag":"line","attr":{"x1":"2","y1":"7","x2":"7","y2":"7"}},{"tag":"line","attr":{"x1":"2","y1":"17","x2":"7","y2":"17"}},{"tag":"line","attr":{"x1":"17","y1":"17","x2":"22","y2":"17"}},{"tag":"line","attr":{"x1":"17","y1":"7","x2":"22","y2":"7"}}]})(props);
};
function FiFilter (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}}]})(props);
};
function FiFlag (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}},{"tag":"line","attr":{"x1":"4","y1":"22","x2":"4","y2":"15"}}]})(props);
};
function FiFolderMinus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}},{"tag":"line","attr":{"x1":"9","y1":"14","x2":"15","y2":"14"}}]})(props);
};
function FiFolderPlus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}},{"tag":"line","attr":{"x1":"12","y1":"11","x2":"12","y2":"17"}},{"tag":"line","attr":{"x1":"9","y1":"14","x2":"15","y2":"14"}}]})(props);
};
function FiFolder (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}}]})(props);
};
function FiFramer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"}}]})(props);
};
function FiFrown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"path","attr":{"d":"M16 16s-1.5-2-4-2-4 2-4 2"}},{"tag":"line","attr":{"x1":"9","y1":"9","x2":"9.01","y2":"9"}},{"tag":"line","attr":{"x1":"15","y1":"9","x2":"15.01","y2":"9"}}]})(props);
};
function FiGift (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"20 12 20 22 4 22 4 12"}},{"tag":"rect","attr":{"x":"2","y":"7","width":"20","height":"5"}},{"tag":"line","attr":{"x1":"12","y1":"22","x2":"12","y2":"7"}},{"tag":"path","attr":{"d":"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"}},{"tag":"path","attr":{"d":"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"}}]})(props);
};
function FiGitBranch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"6","y1":"3","x2":"6","y2":"15"}},{"tag":"circle","attr":{"cx":"18","cy":"6","r":"3"}},{"tag":"circle","attr":{"cx":"6","cy":"18","r":"3"}},{"tag":"path","attr":{"d":"M18 9a9 9 0 0 1-9 9"}}]})(props);
};
function FiGitCommit (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"4"}},{"tag":"line","attr":{"x1":"1.05","y1":"12","x2":"7","y2":"12"}},{"tag":"line","attr":{"x1":"17.01","y1":"12","x2":"22.96","y2":"12"}}]})(props);
};
function FiGitMerge (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"18","cy":"18","r":"3"}},{"tag":"circle","attr":{"cx":"6","cy":"6","r":"3"}},{"tag":"path","attr":{"d":"M6 21V9a9 9 0 0 0 9 9"}}]})(props);
};
function FiGitPullRequest (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"18","cy":"18","r":"3"}},{"tag":"circle","attr":{"cx":"6","cy":"6","r":"3"}},{"tag":"path","attr":{"d":"M13 6h3a2 2 0 0 1 2 2v7"}},{"tag":"line","attr":{"x1":"6","y1":"9","x2":"6","y2":"21"}}]})(props);
};
function FiGithub (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(props);
};
function FiGitlab (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"}}]})(props);
};
function FiGlobe (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"2","y1":"12","x2":"22","y2":"12"}},{"tag":"path","attr":{"d":"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"}}]})(props);
};
function FiGrid (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"7","height":"7"}},{"tag":"rect","attr":{"x":"14","y":"3","width":"7","height":"7"}},{"tag":"rect","attr":{"x":"14","y":"14","width":"7","height":"7"}},{"tag":"rect","attr":{"x":"3","y":"14","width":"7","height":"7"}}]})(props);
};
function FiHardDrive (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"22","y1":"12","x2":"2","y2":"12"}},{"tag":"path","attr":{"d":"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}},{"tag":"line","attr":{"x1":"6","y1":"16","x2":"6.01","y2":"16"}},{"tag":"line","attr":{"x1":"10","y1":"16","x2":"10.01","y2":"16"}}]})(props);
};
function FiHash (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"4","y1":"9","x2":"20","y2":"9"}},{"tag":"line","attr":{"x1":"4","y1":"15","x2":"20","y2":"15"}},{"tag":"line","attr":{"x1":"10","y1":"3","x2":"8","y2":"21"}},{"tag":"line","attr":{"x1":"16","y1":"3","x2":"14","y2":"21"}}]})(props);
};
function FiHeadphones (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M3 18v-6a9 9 0 0 1 18 0v6"}},{"tag":"path","attr":{"d":"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"}}]})(props);
};
function FiHeart (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}}]})(props);
};
function FiHelpCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"path","attr":{"d":"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}},{"tag":"line","attr":{"x1":"12","y1":"17","x2":"12.01","y2":"17"}}]})(props);
};
function FiHexagon (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}}]})(props);
};
function FiHome (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{"tag":"polyline","attr":{"points":"9 22 9 12 15 12 15 22"}}]})(props);
};
function FiImage (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"circle","attr":{"cx":"8.5","cy":"8.5","r":"1.5"}},{"tag":"polyline","attr":{"points":"21 15 16 10 5 21"}}]})(props);
};
function FiInbox (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"22 12 16 12 14 15 10 15 8 12 2 12"}},{"tag":"path","attr":{"d":"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}}]})(props);
};
function FiInfo (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"12","y1":"16","x2":"12","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12.01","y2":"8"}}]})(props);
};
function FiInstagram (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"2","y":"2","width":"20","height":"20","rx":"5","ry":"5"}},{"tag":"path","attr":{"d":"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}},{"tag":"line","attr":{"x1":"17.5","y1":"6.5","x2":"17.51","y2":"6.5"}}]})(props);
};
function FiItalic (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"19","y1":"4","x2":"10","y2":"4"}},{"tag":"line","attr":{"x1":"14","y1":"20","x2":"5","y2":"20"}},{"tag":"line","attr":{"x1":"15","y1":"4","x2":"9","y2":"20"}}]})(props);
};
function FiKey (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"}}]})(props);
};
function FiLayers (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"12 2 2 7 12 12 22 7 12 2"}},{"tag":"polyline","attr":{"points":"2 17 12 22 22 17"}},{"tag":"polyline","attr":{"points":"2 12 12 17 22 12"}}]})(props);
};
function FiLayout (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"3","y1":"9","x2":"21","y2":"9"}},{"tag":"line","attr":{"x1":"9","y1":"21","x2":"9","y2":"9"}}]})(props);
};
function FiLifeBuoy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"4"}},{"tag":"line","attr":{"x1":"4.93","y1":"4.93","x2":"9.17","y2":"9.17"}},{"tag":"line","attr":{"x1":"14.83","y1":"14.83","x2":"19.07","y2":"19.07"}},{"tag":"line","attr":{"x1":"14.83","y1":"9.17","x2":"19.07","y2":"4.93"}},{"tag":"line","attr":{"x1":"14.83","y1":"9.17","x2":"18.36","y2":"5.64"}},{"tag":"line","attr":{"x1":"4.93","y1":"19.07","x2":"9.17","y2":"14.83"}}]})(props);
};
function FiLink2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
};
function FiLink (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}},{"tag":"path","attr":{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}}]})(props);
};
function FiLinkedin (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}},{"tag":"rect","attr":{"x":"2","y":"9","width":"4","height":"12"}},{"tag":"circle","attr":{"cx":"4","cy":"4","r":"2"}}]})(props);
};
function FiList (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"8","y1":"6","x2":"21","y2":"6"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"21","y2":"12"}},{"tag":"line","attr":{"x1":"8","y1":"18","x2":"21","y2":"18"}},{"tag":"line","attr":{"x1":"3","y1":"6","x2":"3.01","y2":"6"}},{"tag":"line","attr":{"x1":"3","y1":"12","x2":"3.01","y2":"12"}},{"tag":"line","attr":{"x1":"3","y1":"18","x2":"3.01","y2":"18"}}]})(props);
};
function FiLoader (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"2","x2":"12","y2":"6"}},{"tag":"line","attr":{"x1":"12","y1":"18","x2":"12","y2":"22"}},{"tag":"line","attr":{"x1":"4.93","y1":"4.93","x2":"7.76","y2":"7.76"}},{"tag":"line","attr":{"x1":"16.24","y1":"16.24","x2":"19.07","y2":"19.07"}},{"tag":"line","attr":{"x1":"2","y1":"12","x2":"6","y2":"12"}},{"tag":"line","attr":{"x1":"18","y1":"12","x2":"22","y2":"12"}},{"tag":"line","attr":{"x1":"4.93","y1":"19.07","x2":"7.76","y2":"16.24"}},{"tag":"line","attr":{"x1":"16.24","y1":"7.76","x2":"19.07","y2":"4.93"}}]})(props);
};
function FiLock (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"11","width":"18","height":"11","rx":"2","ry":"2"}},{"tag":"path","attr":{"d":"M7 11V7a5 5 0 0 1 10 0v4"}}]})(props);
};
function FiLogIn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}},{"tag":"polyline","attr":{"points":"10 17 15 12 10 7"}},{"tag":"line","attr":{"x1":"15","y1":"12","x2":"3","y2":"12"}}]})(props);
};
function FiLogOut (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},{"tag":"polyline","attr":{"points":"16 17 21 12 16 7"}},{"tag":"line","attr":{"x1":"21","y1":"12","x2":"9","y2":"12"}}]})(props);
};
function FiMail (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{"tag":"polyline","attr":{"points":"22,6 12,13 2,6"}}]})(props);
};
function FiMapPin (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}},{"tag":"circle","attr":{"cx":"12","cy":"10","r":"3"}}]})(props);
};
function FiMap (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"}},{"tag":"line","attr":{"x1":"8","y1":"2","x2":"8","y2":"18"}},{"tag":"line","attr":{"x1":"16","y1":"6","x2":"16","y2":"22"}}]})(props);
};
function FiMaximize2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"15 3 21 3 21 9"}},{"tag":"polyline","attr":{"points":"9 21 3 21 3 15"}},{"tag":"line","attr":{"x1":"21","y1":"3","x2":"14","y2":"10"}},{"tag":"line","attr":{"x1":"3","y1":"21","x2":"10","y2":"14"}}]})(props);
};
function FiMaximize (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"}}]})(props);
};
function FiMeh (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"8","y1":"15","x2":"16","y2":"15"}},{"tag":"line","attr":{"x1":"9","y1":"9","x2":"9.01","y2":"9"}},{"tag":"line","attr":{"x1":"15","y1":"9","x2":"15.01","y2":"9"}}]})(props);
};
function FiMenu (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"3","y1":"12","x2":"21","y2":"12"}},{"tag":"line","attr":{"x1":"3","y1":"6","x2":"21","y2":"6"}},{"tag":"line","attr":{"x1":"3","y1":"18","x2":"21","y2":"18"}}]})(props);
};
function FiMessageCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"}}]})(props);
};
function FiMessageSquare (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}}]})(props);
};
function FiMicOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}},{"tag":"path","attr":{"d":"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"}},{"tag":"path","attr":{"d":"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"}},{"tag":"line","attr":{"x1":"12","y1":"19","x2":"12","y2":"23"}},{"tag":"line","attr":{"x1":"8","y1":"23","x2":"16","y2":"23"}}]})(props);
};
function FiMic (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}},{"tag":"path","attr":{"d":"M19 10v2a7 7 0 0 1-14 0v-2"}},{"tag":"line","attr":{"x1":"12","y1":"19","x2":"12","y2":"23"}},{"tag":"line","attr":{"x1":"8","y1":"23","x2":"16","y2":"23"}}]})(props);
};
function FiMinimize2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"4 14 10 14 10 20"}},{"tag":"polyline","attr":{"points":"20 10 14 10 14 4"}},{"tag":"line","attr":{"x1":"14","y1":"10","x2":"21","y2":"3"}},{"tag":"line","attr":{"x1":"3","y1":"21","x2":"10","y2":"14"}}]})(props);
};
function FiMinimize (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"}}]})(props);
};
function FiMinusCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
};
function FiMinusSquare (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
};
function FiMinus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"5","y1":"12","x2":"19","y2":"12"}}]})(props);
};
function FiMonitor (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"2","y":"3","width":"20","height":"14","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"8","y1":"21","x2":"16","y2":"21"}},{"tag":"line","attr":{"x1":"12","y1":"17","x2":"12","y2":"21"}}]})(props);
};
function FiMoon (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}}]})(props);
};
function FiMoreHorizontal (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"1"}},{"tag":"circle","attr":{"cx":"19","cy":"12","r":"1"}},{"tag":"circle","attr":{"cx":"5","cy":"12","r":"1"}}]})(props);
};
function FiMoreVertical (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"1"}},{"tag":"circle","attr":{"cx":"12","cy":"5","r":"1"}},{"tag":"circle","attr":{"cx":"12","cy":"19","r":"1"}}]})(props);
};
function FiMousePointer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"}},{"tag":"path","attr":{"d":"M13 13l6 6"}}]})(props);
};
function FiMove (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"5 9 2 12 5 15"}},{"tag":"polyline","attr":{"points":"9 5 12 2 15 5"}},{"tag":"polyline","attr":{"points":"15 19 12 22 9 19"}},{"tag":"polyline","attr":{"points":"19 9 22 12 19 15"}},{"tag":"line","attr":{"x1":"2","y1":"12","x2":"22","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"2","x2":"12","y2":"22"}}]})(props);
};
function FiMusic (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M9 18V5l12-2v13"}},{"tag":"circle","attr":{"cx":"6","cy":"18","r":"3"}},{"tag":"circle","attr":{"cx":"18","cy":"16","r":"3"}}]})(props);
};
function FiNavigation2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"12 2 19 21 12 17 5 21 12 2"}}]})(props);
};
function FiNavigation (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"3 11 22 2 13 21 11 13 3 11"}}]})(props);
};
function FiOctagon (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}}]})(props);
};
function FiPackage (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"16.5","y1":"9.4","x2":"7.5","y2":"4.21"}},{"tag":"path","attr":{"d":"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{"tag":"polyline","attr":{"points":"3.27 6.96 12 12.01 20.73 6.96"}},{"tag":"line","attr":{"x1":"12","y1":"22.08","x2":"12","y2":"12"}}]})(props);
};
function FiPaperclip (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"}}]})(props);
};
function FiPauseCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"10","y1":"15","x2":"10","y2":"9"}},{"tag":"line","attr":{"x1":"14","y1":"15","x2":"14","y2":"9"}}]})(props);
};
function FiPause (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"6","y":"4","width":"4","height":"16"}},{"tag":"rect","attr":{"x":"14","y":"4","width":"4","height":"16"}}]})(props);
};
function FiPenTool (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 19l7-7 3 3-7 7-3-3z"}},{"tag":"path","attr":{"d":"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"}},{"tag":"path","attr":{"d":"M2 2l7.586 7.586"}},{"tag":"circle","attr":{"cx":"11","cy":"11","r":"2"}}]})(props);
};
function FiPercent (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"19","y1":"5","x2":"5","y2":"19"}},{"tag":"circle","attr":{"cx":"6.5","cy":"6.5","r":"2.5"}},{"tag":"circle","attr":{"cx":"17.5","cy":"17.5","r":"2.5"}}]})(props);
};
function FiPhoneCall (props) {
  return iconBase_GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
};
function FiPhoneForwarded (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"19 1 23 5 19 9"}},{"tag":"line","attr":{"x1":"15","y1":"5","x2":"23","y2":"5"}},{"tag":"path","attr":{"d":"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
};
function FiPhoneIncoming (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"16 2 16 8 22 8"}},{"tag":"line","attr":{"x1":"23","y1":"1","x2":"16","y2":"8"}},{"tag":"path","attr":{"d":"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
};
function FiPhoneMissed (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"23","y1":"1","x2":"17","y2":"7"}},{"tag":"line","attr":{"x1":"17","y1":"1","x2":"23","y2":"7"}},{"tag":"path","attr":{"d":"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
};
function FiPhoneOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"}},{"tag":"line","attr":{"x1":"23","y1":"1","x2":"1","y2":"23"}}]})(props);
};
function FiPhoneOutgoing (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"23 7 23 1 17 1"}},{"tag":"line","attr":{"x1":"16","y1":"8","x2":"23","y2":"1"}},{"tag":"path","attr":{"d":"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
};
function FiPhone (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
};
function FiPieChart (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21.21 15.89A10 10 0 1 1 8 2.83"}},{"tag":"path","attr":{"d":"M22 12A10 10 0 0 0 12 2v10z"}}]})(props);
};
function FiPlayCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polygon","attr":{"points":"10 8 16 12 10 16 10 8"}}]})(props);
};
function FiPlay (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"5 3 19 12 5 21 5 3"}}]})(props);
};
function FiPlusCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"16"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
};
function FiPlusSquare (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"16"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
};
function FiPlus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"5","x2":"12","y2":"19"}},{"tag":"line","attr":{"x1":"5","y1":"12","x2":"19","y2":"12"}}]})(props);
};
function FiPocket (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"}},{"tag":"polyline","attr":{"points":"8 10 12 14 16 10"}}]})(props);
};
function FiPower (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18.36 6.64a9 9 0 1 1-12.73 0"}},{"tag":"line","attr":{"x1":"12","y1":"2","x2":"12","y2":"12"}}]})(props);
};
function FiPrinter (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"6 9 6 2 18 2 18 9"}},{"tag":"path","attr":{"d":"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}},{"tag":"rect","attr":{"x":"6","y":"14","width":"12","height":"8"}}]})(props);
};
function FiRadio (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"2"}},{"tag":"path","attr":{"d":"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"}}]})(props);
};
function FiRefreshCcw (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"1 4 1 10 7 10"}},{"tag":"polyline","attr":{"points":"23 20 23 14 17 14"}},{"tag":"path","attr":{"d":"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"}}]})(props);
};
function FiRefreshCw (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"23 4 23 10 17 10"}},{"tag":"polyline","attr":{"points":"1 20 1 14 7 14"}},{"tag":"path","attr":{"d":"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"}}]})(props);
};
function FiRepeat (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"17 1 21 5 17 9"}},{"tag":"path","attr":{"d":"M3 11V9a4 4 0 0 1 4-4h14"}},{"tag":"polyline","attr":{"points":"7 23 3 19 7 15"}},{"tag":"path","attr":{"d":"M21 13v2a4 4 0 0 1-4 4H3"}}]})(props);
};
function FiRewind (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"11 19 2 12 11 5 11 19"}},{"tag":"polygon","attr":{"points":"22 19 13 12 22 5 22 19"}}]})(props);
};
function FiRotateCcw (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"1 4 1 10 7 10"}},{"tag":"path","attr":{"d":"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"}}]})(props);
};
function FiRotateCw (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"23 4 23 10 17 10"}},{"tag":"path","attr":{"d":"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}}]})(props);
};
function FiRss (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M4 11a9 9 0 0 1 9 9"}},{"tag":"path","attr":{"d":"M4 4a16 16 0 0 1 16 16"}},{"tag":"circle","attr":{"cx":"5","cy":"19","r":"1"}}]})(props);
};
function FiSave (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}},{"tag":"polyline","attr":{"points":"17 21 17 13 7 13 7 21"}},{"tag":"polyline","attr":{"points":"7 3 7 8 15 8"}}]})(props);
};
function FiScissors (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"6","cy":"6","r":"3"}},{"tag":"circle","attr":{"cx":"6","cy":"18","r":"3"}},{"tag":"line","attr":{"x1":"20","y1":"4","x2":"8.12","y2":"15.88"}},{"tag":"line","attr":{"x1":"14.47","y1":"14.48","x2":"20","y2":"20"}},{"tag":"line","attr":{"x1":"8.12","y1":"8.12","x2":"12","y2":"12"}}]})(props);
};
function FiSearch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"11","cy":"11","r":"8"}},{"tag":"line","attr":{"x1":"21","y1":"21","x2":"16.65","y2":"16.65"}}]})(props);
};
function FiSend (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"22","y1":"2","x2":"11","y2":"13"}},{"tag":"polygon","attr":{"points":"22 2 15 22 11 13 2 9 22 2"}}]})(props);
};
function FiServer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"2","y":"2","width":"20","height":"8","rx":"2","ry":"2"}},{"tag":"rect","attr":{"x":"2","y":"14","width":"20","height":"8","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"6","y1":"6","x2":"6.01","y2":"6"}},{"tag":"line","attr":{"x1":"6","y1":"18","x2":"6.01","y2":"18"}}]})(props);
};
function FiSettings (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"3"}},{"tag":"path","attr":{"d":"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}}]})(props);
};
function FiShare2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"18","cy":"5","r":"3"}},{"tag":"circle","attr":{"cx":"6","cy":"12","r":"3"}},{"tag":"circle","attr":{"cx":"18","cy":"19","r":"3"}},{"tag":"line","attr":{"x1":"8.59","y1":"13.51","x2":"15.42","y2":"17.49"}},{"tag":"line","attr":{"x1":"15.41","y1":"6.51","x2":"8.59","y2":"10.49"}}]})(props);
};
function FiShare (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}},{"tag":"polyline","attr":{"points":"16 6 12 2 8 6"}},{"tag":"line","attr":{"x1":"12","y1":"2","x2":"12","y2":"15"}}]})(props);
};
function FiShieldOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"}},{"tag":"path","attr":{"d":"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"}},{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}}]})(props);
};
function FiShield (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}}]})(props);
};
function FiShoppingBag (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}},{"tag":"line","attr":{"x1":"3","y1":"6","x2":"21","y2":"6"}},{"tag":"path","attr":{"d":"M16 10a4 4 0 0 1-8 0"}}]})(props);
};
function FiShoppingCart (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"9","cy":"21","r":"1"}},{"tag":"circle","attr":{"cx":"20","cy":"21","r":"1"}},{"tag":"path","attr":{"d":"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}}]})(props);
};
function FiShuffle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"16 3 21 3 21 8"}},{"tag":"line","attr":{"x1":"4","y1":"20","x2":"21","y2":"3"}},{"tag":"polyline","attr":{"points":"21 16 21 21 16 21"}},{"tag":"line","attr":{"x1":"15","y1":"15","x2":"21","y2":"21"}},{"tag":"line","attr":{"x1":"4","y1":"4","x2":"9","y2":"9"}}]})(props);
};
function FiSidebar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"9","y1":"3","x2":"9","y2":"21"}}]})(props);
};
function FiSkipBack (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"19 20 9 12 19 4 19 20"}},{"tag":"line","attr":{"x1":"5","y1":"19","x2":"5","y2":"5"}}]})(props);
};
function FiSkipForward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"5 4 15 12 5 20 5 4"}},{"tag":"line","attr":{"x1":"19","y1":"5","x2":"19","y2":"19"}}]})(props);
};
function FiSlack (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"}},{"tag":"path","attr":{"d":"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}},{"tag":"path","attr":{"d":"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"}},{"tag":"path","attr":{"d":"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"}},{"tag":"path","attr":{"d":"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"}},{"tag":"path","attr":{"d":"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"}},{"tag":"path","attr":{"d":"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"}},{"tag":"path","attr":{"d":"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"}}]})(props);
};
function FiSlash (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"4.93","y1":"4.93","x2":"19.07","y2":"19.07"}}]})(props);
};
function FiSliders (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"4","y1":"21","x2":"4","y2":"14"}},{"tag":"line","attr":{"x1":"4","y1":"10","x2":"4","y2":"3"}},{"tag":"line","attr":{"x1":"12","y1":"21","x2":"12","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"3"}},{"tag":"line","attr":{"x1":"20","y1":"21","x2":"20","y2":"16"}},{"tag":"line","attr":{"x1":"20","y1":"12","x2":"20","y2":"3"}},{"tag":"line","attr":{"x1":"1","y1":"14","x2":"7","y2":"14"}},{"tag":"line","attr":{"x1":"9","y1":"8","x2":"15","y2":"8"}},{"tag":"line","attr":{"x1":"17","y1":"16","x2":"23","y2":"16"}}]})(props);
};
function FiSmartphone (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"5","y":"2","width":"14","height":"20","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"12","y1":"18","x2":"12.01","y2":"18"}}]})(props);
};
function FiSmile (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"path","attr":{"d":"M8 14s1.5 2 4 2 4-2 4-2"}},{"tag":"line","attr":{"x1":"9","y1":"9","x2":"9.01","y2":"9"}},{"tag":"line","attr":{"x1":"15","y1":"9","x2":"15.01","y2":"9"}}]})(props);
};
function FiSpeaker (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"4","y":"2","width":"16","height":"20","rx":"2","ry":"2"}},{"tag":"circle","attr":{"cx":"12","cy":"14","r":"4"}},{"tag":"line","attr":{"x1":"12","y1":"6","x2":"12.01","y2":"6"}}]})(props);
};
function FiSquare (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}}]})(props);
};
function FiStar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}}]})(props);
};
function FiStopCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"rect","attr":{"x":"9","y":"9","width":"6","height":"6"}}]})(props);
};
function FiSun (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"5"}},{"tag":"line","attr":{"x1":"12","y1":"1","x2":"12","y2":"3"}},{"tag":"line","attr":{"x1":"12","y1":"21","x2":"12","y2":"23"}},{"tag":"line","attr":{"x1":"4.22","y1":"4.22","x2":"5.64","y2":"5.64"}},{"tag":"line","attr":{"x1":"18.36","y1":"18.36","x2":"19.78","y2":"19.78"}},{"tag":"line","attr":{"x1":"1","y1":"12","x2":"3","y2":"12"}},{"tag":"line","attr":{"x1":"21","y1":"12","x2":"23","y2":"12"}},{"tag":"line","attr":{"x1":"4.22","y1":"19.78","x2":"5.64","y2":"18.36"}},{"tag":"line","attr":{"x1":"18.36","y1":"5.64","x2":"19.78","y2":"4.22"}}]})(props);
};
function FiSunrise (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M17 18a5 5 0 0 0-10 0"}},{"tag":"line","attr":{"x1":"12","y1":"2","x2":"12","y2":"9"}},{"tag":"line","attr":{"x1":"4.22","y1":"10.22","x2":"5.64","y2":"11.64"}},{"tag":"line","attr":{"x1":"1","y1":"18","x2":"3","y2":"18"}},{"tag":"line","attr":{"x1":"21","y1":"18","x2":"23","y2":"18"}},{"tag":"line","attr":{"x1":"18.36","y1":"11.64","x2":"19.78","y2":"10.22"}},{"tag":"line","attr":{"x1":"23","y1":"22","x2":"1","y2":"22"}},{"tag":"polyline","attr":{"points":"8 6 12 2 16 6"}}]})(props);
};
function FiSunset (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M17 18a5 5 0 0 0-10 0"}},{"tag":"line","attr":{"x1":"12","y1":"9","x2":"12","y2":"2"}},{"tag":"line","attr":{"x1":"4.22","y1":"10.22","x2":"5.64","y2":"11.64"}},{"tag":"line","attr":{"x1":"1","y1":"18","x2":"3","y2":"18"}},{"tag":"line","attr":{"x1":"21","y1":"18","x2":"23","y2":"18"}},{"tag":"line","attr":{"x1":"18.36","y1":"11.64","x2":"19.78","y2":"10.22"}},{"tag":"line","attr":{"x1":"23","y1":"22","x2":"1","y2":"22"}},{"tag":"polyline","attr":{"points":"16 5 12 9 8 5"}}]})(props);
};
function FiTablet (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"4","y":"2","width":"16","height":"20","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"12","y1":"18","x2":"12.01","y2":"18"}}]})(props);
};
function FiTag (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}},{"tag":"line","attr":{"x1":"7","y1":"7","x2":"7.01","y2":"7"}}]})(props);
};
function FiTarget (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"6"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"2"}}]})(props);
};
function FiTerminal (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"4 17 10 11 4 5"}},{"tag":"line","attr":{"x1":"12","y1":"19","x2":"20","y2":"19"}}]})(props);
};
function FiThermometer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"}}]})(props);
};
function FiThumbsDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"}}]})(props);
};
function FiThumbsUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"}}]})(props);
};
function FiToggleLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"1","y":"5","width":"22","height":"14","rx":"7","ry":"7"}},{"tag":"circle","attr":{"cx":"8","cy":"12","r":"3"}}]})(props);
};
function FiToggleRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"1","y":"5","width":"22","height":"14","rx":"7","ry":"7"}},{"tag":"circle","attr":{"cx":"16","cy":"12","r":"3"}}]})(props);
};
function FiTool (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}}]})(props);
};
function FiTrash2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"3 6 5 6 21 6"}},{"tag":"path","attr":{"d":"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{"tag":"line","attr":{"x1":"10","y1":"11","x2":"10","y2":"17"}},{"tag":"line","attr":{"x1":"14","y1":"11","x2":"14","y2":"17"}}]})(props);
};
function FiTrash (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"3 6 5 6 21 6"}},{"tag":"path","attr":{"d":"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}]})(props);
};
function FiTrello (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"rect","attr":{"x":"7","y":"7","width":"3","height":"9"}},{"tag":"rect","attr":{"x":"14","y":"7","width":"3","height":"5"}}]})(props);
};
function FiTrendingDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"23 18 13.5 8.5 8.5 13.5 1 6"}},{"tag":"polyline","attr":{"points":"17 18 23 18 23 12"}}]})(props);
};
function FiTrendingUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"23 6 13.5 15.5 8.5 10.5 1 18"}},{"tag":"polyline","attr":{"points":"17 6 23 6 23 12"}}]})(props);
};
function FiTriangle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}}]})(props);
};
function FiTruck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"1","y":"3","width":"15","height":"13"}},{"tag":"polygon","attr":{"points":"16 8 20 8 23 11 23 16 16 16 16 8"}},{"tag":"circle","attr":{"cx":"5.5","cy":"18.5","r":"2.5"}},{"tag":"circle","attr":{"cx":"18.5","cy":"18.5","r":"2.5"}}]})(props);
};
function FiTv (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"2","y":"7","width":"20","height":"15","rx":"2","ry":"2"}},{"tag":"polyline","attr":{"points":"17 2 12 7 7 2"}}]})(props);
};
function FiTwitch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"}}]})(props);
};
function FiTwitter (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}}]})(props);
};
function FiType (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"4 7 4 4 20 4 20 7"}},{"tag":"line","attr":{"x1":"9","y1":"20","x2":"15","y2":"20"}},{"tag":"line","attr":{"x1":"12","y1":"4","x2":"12","y2":"20"}}]})(props);
};
function FiUmbrella (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"}}]})(props);
};
function FiUnderline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"}},{"tag":"line","attr":{"x1":"4","y1":"21","x2":"20","y2":"21"}}]})(props);
};
function FiUnlock (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"11","width":"18","height":"11","rx":"2","ry":"2"}},{"tag":"path","attr":{"d":"M7 11V7a5 5 0 0 1 9.9-1"}}]})(props);
};
function FiUploadCloud (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"16 16 12 12 8 16"}},{"tag":"line","attr":{"x1":"12","y1":"12","x2":"12","y2":"21"}},{"tag":"path","attr":{"d":"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"}},{"tag":"polyline","attr":{"points":"16 16 12 12 8 16"}}]})(props);
};
function FiUpload (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{"tag":"polyline","attr":{"points":"17 8 12 3 7 8"}},{"tag":"line","attr":{"x1":"12","y1":"3","x2":"12","y2":"15"}}]})(props);
};
function FiUserCheck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{"tag":"circle","attr":{"cx":"8.5","cy":"7","r":"4"}},{"tag":"polyline","attr":{"points":"17 11 19 13 23 9"}}]})(props);
};
function FiUserMinus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{"tag":"circle","attr":{"cx":"8.5","cy":"7","r":"4"}},{"tag":"line","attr":{"x1":"23","y1":"11","x2":"17","y2":"11"}}]})(props);
};
function FiUserPlus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{"tag":"circle","attr":{"cx":"8.5","cy":"7","r":"4"}},{"tag":"line","attr":{"x1":"20","y1":"8","x2":"20","y2":"14"}},{"tag":"line","attr":{"x1":"23","y1":"11","x2":"17","y2":"11"}}]})(props);
};
function FiUserX (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{"tag":"circle","attr":{"cx":"8.5","cy":"7","r":"4"}},{"tag":"line","attr":{"x1":"18","y1":"8","x2":"23","y2":"13"}},{"tag":"line","attr":{"x1":"23","y1":"8","x2":"18","y2":"13"}}]})(props);
};
function FiUser (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{"tag":"circle","attr":{"cx":"12","cy":"7","r":"4"}}]})(props);
};
function FiUsers (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{"tag":"circle","attr":{"cx":"9","cy":"7","r":"4"}},{"tag":"path","attr":{"d":"M23 21v-2a4 4 0 0 0-3-3.87"}},{"tag":"path","attr":{"d":"M16 3.13a4 4 0 0 1 0 7.75"}}]})(props);
};
function FiVideoOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"}},{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}}]})(props);
};
function FiVideo (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"23 7 16 12 23 17 23 7"}},{"tag":"rect","attr":{"x":"1","y":"5","width":"15","height":"14","rx":"2","ry":"2"}}]})(props);
};
function FiVoicemail (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"5.5","cy":"11.5","r":"4.5"}},{"tag":"circle","attr":{"cx":"18.5","cy":"11.5","r":"4.5"}},{"tag":"line","attr":{"x1":"5.5","y1":"16","x2":"18.5","y2":"16"}}]})(props);
};
function FiVolume1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}},{"tag":"path","attr":{"d":"M15.54 8.46a5 5 0 0 1 0 7.07"}}]})(props);
};
function FiVolume2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}},{"tag":"path","attr":{"d":"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"}}]})(props);
};
function FiVolumeX (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}},{"tag":"line","attr":{"x1":"23","y1":"9","x2":"17","y2":"15"}},{"tag":"line","attr":{"x1":"17","y1":"9","x2":"23","y2":"15"}}]})(props);
};
function FiVolume (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}}]})(props);
};
function FiWatch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"7"}},{"tag":"polyline","attr":{"points":"12 9 12 12 13.5 13.5"}},{"tag":"path","attr":{"d":"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"}}]})(props);
};
function FiWifiOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}},{"tag":"path","attr":{"d":"M16.72 11.06A10.94 10.94 0 0 1 19 12.55"}},{"tag":"path","attr":{"d":"M5 12.55a10.94 10.94 0 0 1 5.17-2.39"}},{"tag":"path","attr":{"d":"M10.71 5.05A16 16 0 0 1 22.58 9"}},{"tag":"path","attr":{"d":"M1.42 9a15.91 15.91 0 0 1 4.7-2.88"}},{"tag":"path","attr":{"d":"M8.53 16.11a6 6 0 0 1 6.95 0"}},{"tag":"line","attr":{"x1":"12","y1":"20","x2":"12.01","y2":"20"}}]})(props);
};
function FiWifi (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M5 12.55a11 11 0 0 1 14.08 0"}},{"tag":"path","attr":{"d":"M1.42 9a16 16 0 0 1 21.16 0"}},{"tag":"path","attr":{"d":"M8.53 16.11a6 6 0 0 1 6.95 0"}},{"tag":"line","attr":{"x1":"12","y1":"20","x2":"12.01","y2":"20"}}]})(props);
};
function FiWind (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"}}]})(props);
};
function FiXCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"15","y1":"9","x2":"9","y2":"15"}},{"tag":"line","attr":{"x1":"9","y1":"9","x2":"15","y2":"15"}}]})(props);
};
function FiXOctagon (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}},{"tag":"line","attr":{"x1":"15","y1":"9","x2":"9","y2":"15"}},{"tag":"line","attr":{"x1":"9","y1":"9","x2":"15","y2":"15"}}]})(props);
};
function FiXSquare (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"9","y1":"9","x2":"15","y2":"15"}},{"tag":"line","attr":{"x1":"15","y1":"9","x2":"9","y2":"15"}}]})(props);
};
function FiX (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"18","y1":"6","x2":"6","y2":"18"}},{"tag":"line","attr":{"x1":"6","y1":"6","x2":"18","y2":"18"}}]})(props);
};
function FiYoutube (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"}},{"tag":"polygon","attr":{"points":"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"}}]})(props);
};
function FiZapOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"12.41 6.75 13 2 10.57 4.92"}},{"tag":"polyline","attr":{"points":"18.57 12.91 21 10 15.66 10"}},{"tag":"polyline","attr":{"points":"8 8 3 14 12 14 11 22 16 16"}},{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}}]})(props);
};
function FiZap (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}}]})(props);
};
function FiZoomIn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"11","cy":"11","r":"8"}},{"tag":"line","attr":{"x1":"21","y1":"21","x2":"16.65","y2":"16.65"}},{"tag":"line","attr":{"x1":"11","y1":"8","x2":"11","y2":"14"}},{"tag":"line","attr":{"x1":"8","y1":"11","x2":"14","y2":"11"}}]})(props);
};
function FiZoomOut (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"11","cy":"11","r":"8"}},{"tag":"line","attr":{"x1":"21","y1":"21","x2":"16.65","y2":"16.65"}},{"tag":"line","attr":{"x1":"8","y1":"11","x2":"14","y2":"11"}}]})(props);
};

;// CONCATENATED MODULE: ./src/components/Contact.js
const Contact=()=>{return/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("section",{className:"contact-section"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"contact-wrapper"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"wrapper-text"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("h1",null,"We can't wait to hear from you!"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("ul",{className:"contact-list"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("li",null," ",/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(HiOutlineMail,{className:"contact-icons"}),"work@finnetmedia.com"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("li",null,/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(FiPhoneCall,{className:"contact-icons"})," +91-1234556666"))),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"wrapper-form"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("form",{action:"",className:"formm"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("input",{type:"text",placeholder:"Name*",className:"inputss"}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("input",{type:"text",placeholder:"Email*",className:"inputss"}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("input",{type:"text",placeholder:"Subject*",className:"inputss"}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("textarea",{name:" message",className:"inputss msg",placeholder:"Your Message*"}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("button",{type:"submit",class:"submit-btn"},"Send Message")))));};/* harmony default export */ const components_Contact = (Contact);
;// CONCATENATED MODULE: ./src/components/Creators.js
const Creators=()=>{return/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("section",{className:"creators"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("h3",null,"Our Creators"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("span",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"creators-div"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"creator-card"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/sharan.png",className:"creator-photo",__imageData:__webpack_require__(7608)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"name"},"Sharan Hegde"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("small",null,"@financewithsharan"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"creator-socials"})),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"creator-card"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/sharan.png",className:"creator-photo",__imageData:__webpack_require__(7608)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"name"},"Sharan Hegde"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("small",null,"@financewithsharan"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"creator-socials"})),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"creator-card"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/sharan.png",className:"creator-photo",__imageData:__webpack_require__(7608)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"name"},"Sharan Hegde"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("small",null,"@financewithsharan"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"creator-socials"})),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"creator-card"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/sharan.png",className:"creator-photo",__imageData:__webpack_require__(7608)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"name"},"Sharan Hegde"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("small",null,"@financewithsharan"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"creator-socials"})),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"creator-card"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/sharan.png",className:"creator-photo",__imageData:__webpack_require__(7608)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"name"},"Sharan Hegde"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("small",null,"@financewithsharan"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"creator-socials"}))),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"creator-cta"},"Explore More"));};/* harmony default export */ const components_Creators = (Creators);
;// CONCATENATED MODULE: ./src/components/Footer.js
const Footer=()=>{return/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("footer",{className:"footer"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"footer-company"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/logo.webp",alt:"Finnet Media",class:"footer-logo",__imageData:__webpack_require__(9991)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("span",null,"We take pride in the content creators we associate with, whose goals are aligned with ours"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("form",{action:"",className:"footer-form"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("input",{type:"text",placeholder:"Enter your email"}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("button",{type:"submit"},"Subscribe"))),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"footer-services"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("h2",null,"Services"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("ul",{className:"footer-list"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("li",{className:"footer-pills"},"Creators"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("li",{className:"footer-pills"},"Brands"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("li",{className:"footer-pills"},"How it works?"))),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"footer-contact"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("h2",null,"Contact Info"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("ul",{className:"contact-list"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("li",null," ",/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(HiOutlineMail,{className:"contact-icons"}),"work@finnetmedia.com"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("li",null,/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(FiPhoneCall,{className:"contact-icons"})," +91-1234556666"))));};/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: ./src/components/Hero.js
const Hero=()=>{return/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"hero-wrapper"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"hero-text"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/fireworks.png",className:"hero-icons fire",__imageData:__webpack_require__(4526)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/pinterest.svg",className:"hero-icons pinterest",__imageData:__webpack_require__(6761)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/youtube.png",className:"hero-icons youtube",__imageData:__webpack_require__(9532)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/insta.png",className:"hero-icons insta",__imageData:__webpack_require__(5812)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/facebook.png",className:"hero-icons facebook",__imageData:__webpack_require__(7166)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/target.png",className:"hero-icons emoji",__imageData:__webpack_require__(5851)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/thumb.png",className:"hero-icons views",__imageData:__webpack_require__(3586)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("span",null,"Empowering Creators,",/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("br",null),"Enabling Brands."),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("small",{className:"hero-small"},"Finnet Media works to build strong and truthful relationships between brands, creators and the consumers."),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"hero-btns"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"hero-cta btns"},"Get Started"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"hero-scndry-btn btns"},"How We Work? "))));};/* harmony default export */ const components_Hero = (Hero);
;// CONCATENATED MODULE: ./node_modules/react-icons/io/index.esm.js
// THIS FILE IS AUTO GENERATED

function IoIosAddCircleOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M346.5 240H272v-74.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-74.5c-8.8 0-16 6-16 16s7.5 16 16 16H240v74.5c0 9.5 7 16 16 16s16-7.2 16-16V272h74.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"}},{"tag":"path","attr":{"d":"M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}}]})(props);
};
function IoIosAddCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm90.5 224H272v74.5c0 8.8-7.2 16-16 16-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3V272h-74.5c-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3 0-8.8 7.2-16 16-16H240v-74.5c0-8.8 7.2-16 16-16s16 7.2 16 16V240h74.5c8.8 0 16 7.2 16 16s-7.2 16-16 16z"}}]})(props);
};
function IoIosAdd (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"}}]})(props);
};
function IoIosAirplane (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M407.7 224c-3.4 0-14.8.1-18 .3l-64.9 1.7c-.7 0-1.4-.3-1.7-.9L225.8 79.4c-2.9-4.6-8.1-7.4-13.5-7.4h-23.7c-5.6 0-7.5 5.6-5.5 10.8l50.1 142.8c.5 1.3-.4 2.7-1.8 2.7L109 230.1c-2.6.1-5-1.1-6.6-3.1l-37-45c-3-3.9-7.7-6.1-12.6-6.1H36c-2.8 0-4.7 2.7-3.8 5.3l19.9 68.7c1.5 3.8 1.5 8.1 0 11.9l-19.9 68.7c-.9 2.6 1 5.3 3.8 5.3h16.7c4.9 0 9.6-2.3 12.6-6.1L103 284c1.6-2 4.1-3.2 6.6-3.1l121.7 2.7c1.4.1 2.3 1.4 1.8 2.7L183 429.2c-2 5.2-.1 10.8 5.5 10.8h23.7c5.5 0 10.6-2.8 13.5-7.4L323.1 287c.4-.6 1-.9 1.7-.9l64.9 1.7c3.3.2 14.6.3 18 .3 44.3 0 72.3-14.3 72.3-32S452.1 224 407.7 224z"}}]})(props);
};
function IoIosAlarm (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M381.2 64.1c-1.3-.1-2.6-.1-3.9-.1h-.2c-16.2 0-32 5.4-44.6 15.1-1.6 1.3-2.6 3.2-2.7 5.2-.1 2 .8 4 2.3 5.4l89.8 80.5c1.3 1.1 2.9 1.8 4.6 1.8h.4c1.9-.1 3.6-1 4.8-2.4C440.9 159 448 150.8 448 133c.1-36.4-29.1-66.8-66.8-68.9zM64 133c0 17.8 7.1 26 16.3 36.6 1.2 1.4 2.9 2.3 4.8 2.4h.4c1.7 0 3.3-.6 4.6-1.8L180 89.7c1.5-1.4 2.4-3.3 2.3-5.4-.1-2-1-3.9-2.7-5.2C167 69.4 151.2 64 135 64h-.2c-1.3 0-2.6 0-3.9.1-37.7 2.1-67 32.5-66.9 68.9z"}},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M390 386c26.2-30.7 42-70.5 42-114 0-97.2-78.8-176-176-176S80 174.8 80 272c0 43.5 15.8 83.3 42 114l-34.7 35.5c-6.2 6.3-6 15.5.3 21.6 3.1 3 7.4 4.8 11.4 4.8 4.2 0 8.1-1.9 11.2-5.1l34.6-34.5c30.3 24.7 69 39.6 111.2 39.6s80.9-14.8 111.2-39.6l33.6 34.5c3.1 3.2 7.3 5.1 11.5 5.1 4 0 8.1-1.8 11.2-4.8 6.3-6.2 7.5-15.3 1.3-21.6L390 386zM270 274c0 7.7-6.3 14-14 14h-82c-7.7 0-14-6.3-14-14s6.3-14 14-14h68V158c0-7.7 6.3-14 14-14s14 6.3 14 14v116z"}}]}]})(props);
};
function IoIosAlbums (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M460.9 161H51.1C31.8 161 16 176.8 16 196.1V428c0 19.3 15.8 35.1 35.1 35.1H461c19.3 0 35.1-15.8 35.1-35.1V196.1c-.1-19.3-15.9-35.1-35.2-35.1zM434 133H78c-7.7 0-14-6.3-14-14s6.3-14 14-14h356c7.7 0 14 6.3 14 14s-6.3 14-14 14zM403.2 77H108.8c-7 0-12.8-5.8-12.8-12.8v-2.4c0-7 5.8-12.8 12.8-12.8h294.4c7 0 12.8 5.8 12.8 12.8v2.4c0 7-5.8 12.8-12.8 12.8z"}}]})(props);
};
function IoIosAlert (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm17.2 109.6l-3.1 115.1c-.2 8.2-5.9 14.8-14.1 14.8s-13.9-6.6-14.1-14.8l-3.1-115.1c-.2-9.6 7.5-17.6 17.2-17.6 9.6 0 17.4 7.9 17.2 17.6zM256 354c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4c10.7 0 19.1 8.1 19.1 18.4S266.7 354 256 354z"}}]})(props);
};
function IoIosAmericanFootball (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M378.6 133.4C338.1 92.9 283.9 71 231.4 59.6L59.6 231.4C71 284 92.9 338.1 133.4 378.6c40.5 40.5 94.7 62.4 147.2 73.8l171.8-171.8c-11.4-52.5-33.3-106.7-73.8-147.2zM344.1 288l-19.2 19.2 14.8 14.8c4.9 4.9 4.9 12.7 0 17.6-4.9 4.9-12.7 4.9-17.6 0l-14.8-14.8-19.3 19.4c-2 2-4.5 3.4-7.3 3.9-4.2.7-8.4-.7-11.3-3.6-1.5-1.5-2.6-3.3-3.2-5.3-1.4-4.9-.1-9.7 3.2-13.1l19.5-19.5-15.6-15.6-19.3 19.3c-2.1 2.1-4.7 3.5-7.6 3.9-5.5.7-10.7-1.9-13.4-7-.3-.6-.6-1.2-.8-1.9-1.5-4.9-.2-9.8 3.2-13.2l19.5-19.5-15.5-15.6-19.3 19.3c-2.1 2.1-4.7 3.5-7.6 3.9-5.5.7-10.7-1.9-13.4-7-.3-.6-.6-1.2-.8-1.9-1.5-4.9-.2-9.8 3.2-13.2l19.5-19.5-15.5-15.6-19.3 19.3c-2.1 2.1-4.7 3.5-7.6 3.9-5.5.7-10.7-1.9-13.4-7-.3-.6-.6-1.2-.8-1.9-1.5-4.9-.2-9.8 3.2-13.2l19.5-19.5-14.8-14.8c-4.9-4.9-4.9-12.7 0-17.6 4.9-4.9 12.7-4.9 17.6 0l14.8 14.8 19.3-19.3c2.1-2.1 4.7-3.5 7.6-3.9 5.5-.7 10.7 1.9 13.4 7 .3.6.6 1.2.8 1.9 1.5 4.9.2 9.8-3.2 13.2l-19.5 19.5 15.6 15.6 19.3-19.3c2-2 4.5-3.4 7.3-3.9 4.2-.7 8.4.7 11.3 3.6 1.5 1.4 2.6 3.2 3.2 5.2 1.5 4.9.2 9.8-3.2 13.2L257 239.4l15.6 15.6 19.3-19.3c2.1-2.1 4.7-3.5 7.6-3.9 5.5-.7 10.7 1.9 13.4 7 .3.6.6 1.2.8 1.9 1.5 4.9.2 9.8-3.2 13.2L291 273.4l15.6 15.6 19.3-19.3c2.2-2.2 5-3.6 8-4 4.4-.5 8.6 1.2 11.4 4.6 4.1 5 3.5 13.1-1.2 17.7zM395.1 464c27.6 0 48.8-1.8 58.8-2.9 3.7-.4 6.7-3.4 7.1-7.1 2-18.9 6.8-77.6-3.2-143.7L310.3 457.9c31 4.7 60.4 6.1 84.8 6.1zM116.8 48C89.3 48 68 49.8 58 50.9c-3.7.4-6.7 3.4-7.1 7.1-2 18.9-6.8 77.6 3.2 143.6L201.6 54.1c-31-4.7-60.4-6.1-84.8-6.1z"}}]})(props);
};
function IoIosAnalytics (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zM76 256c0-48.1 18.7-93.3 52.7-127.3S207.9 76 256 76c48.1 0 93.3 18.7 127.3 52.7 32.2 32.2 50.7 74.5 52.6 119.7-8.8-10.3-24.2-24-43.8-24-27.5 0-41.7 25.7-51 42.7-1.4 2.5-2.7 4.9-3.9 7-11.4 19.2-27.3 30-42.5 28.9-13.4-.9-24.8-11.2-32.2-28.8-9.2-22.1-29.1-45.8-52.9-49.2-11.3-1.6-28.1.8-44.7 21.4-3.2 4-6.9 9.4-11.1 15.6-10.4 15.5-26.2 38.8-38.1 40.8-17.3 2.8-30.9-7.5-36.4-12.3-2.2-11.2-3.3-22.8-3.3-34.5z"}}]})(props);
};
function IoIosAperture (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M250.2 371.4c-1.8 0-2.7 2.2-1.4 3.4l54.9 54.9L326 452c42.4-15.2 78.5-43.7 103.1-80.6H250.2zM167 334.6V444c27 12.8 57.1 20 89 20 14.1 0 27.9-1.4 41.2-4.1L170.4 333.2c-1.2-1.3-3.4-.4-3.4 1.4zM256 48c-13.9 0-27.4 1.4-40.5 4l126.8 126.8c1.3 1.3 3.4.4 3.4-1.4V68.3C318.6 55.3 288.2 48 256 48zM68.1 166.6C55.2 193.7 48 224 48 256c0 14.1 1.4 27.9 4.1 41.2L179.2 170c1.3-1.3.4-3.4-1.4-3.4H68.1zM186.7 59.9C144 75 107.7 103.6 83 140.7h179.7c1.8 0 2.7-2.2 1.4-3.4l-77.4-77.4zM167 220.6v70.7c0 1.1.4 2.1 1.2 2.8l50 50c.8.8 1.8 1.2 2.8 1.2h70.7c1.1 0 2.1-.4 2.8-1.2l50-50c.8-.8 1.2-1.8 1.2-2.8v-70.7c0-1.1-.4-2.1-1.2-2.8l-50-50c-.8-.8-1.8-1.2-2.8-1.2H221c-1.1 0-2.1.4-2.8 1.2l-50 50c-.7.8-1.2 1.8-1.2 2.8zM460 215.5L333.6 342c-1.3 1.3-.4 3.4 1.4 3.4h108.8c13-27.1 20.2-57.4 20.2-89.4 0-13.9-1.4-27.4-4-40.5zM371.8 83.2v179c0 1.8 2.2 2.7 3.4 1.4l76.9-76.9c-15-42.6-43.5-78.8-80.3-103.5zM60.1 325.9c15.2 42.6 43.9 78.8 81 103.4V249.8c0-1.8-2.2-2.7-3.4-1.4l-77.6 77.5z"}}]})(props);
};
function IoIosApps (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M434.8 137.6L285.4 69.5c-16.2-7.4-42.7-7.4-58.9 0L77.2 137.6c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1zM225.2 375.2l-99.8-45.5c-4.2-1.9-9.1-1.9-13.3 0l-34.9 15.9c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-34.9-15.9c-4.2-1.9-9.1-1.9-13.3 0l-99.8 45.5c-16.9 7.7-44.7 7.7-61.6 0z"}},{"tag":"path","attr":{"d":"M434.8 241.6l-31.7-14.4c-4.2-1.9-9-1.9-13.2 0l-108 48.9c-15.3 5.2-36.6 5.2-51.9 0l-108-48.9c-4.2-1.9-9-1.9-13.2 0l-31.7 14.4c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.7-8 17.7-21.1.1-29.1z"}}]})(props);
};
function IoIosAppstore (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-78.9 296.9c-2.7 4.6-7.5 7.1-12.5 7.1-2.5 0-5-.6-7.3-2-6.9-4-9.2-12.8-5.2-19.7l14.2-23.6c1.5-2.5 4.1-4 7-4h2.1c10.3 0 17.5 6.2 19.6 12.2l-17.9 30zm120.2-46.4l-93 .1h-61.8c-8.2 0-14.8-6.8-14.4-15 .3-7.8 7.1-13.7 14.9-13.7h44.8l53.1-90.4-17.2-29.3c-3.9-6.7-2.2-15.5 4.4-19.7 7-4.5 16.2-2.2 20.3 4.8l9.2 15.7h.1l9.2-15.7c4.1-7 13.4-9.3 20.3-4.8 6.6 4.2 8.3 13 4.4 19.7l-17.2 29.3-16.7 28.5-36.3 61.9v.1h53.5c6.7 0 15.1 3.6 18.5 9.4l.3.6c3 5.1 4.7 8.6 4.7 13.7-.1 2.8-1.1 4.8-1.1 4.8zm72.2.1h-25.2v.1l18.4 31.3c4 6.8 2.1 15.8-4.8 20-2.3 1.4-4.9 2.1-7.5 2.1-5 0-9.8-2.6-12.5-7.1l-27.2-46.3-16.9-28.8-21.8-37.3c-6.4-10.9-6.7-24.5-.6-35.3 4.3-7.6 7.6-9.6 7.6-9.6l48.5 82.1h41.7c7.8 0 14.5 6 14.9 13.7.3 8.3-6.3 15.1-14.6 15.1z"}}]})(props);
};
function IoIosArchive (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M460 120H52c-2.2 0-4-1.8-4-4V96c0-17.7 14.3-32 32-32h352c17.7 0 32 14.3 32 32v20c0 2.2-1.8 4-4 4zM440 146H72c-4.4 0-8 3.6-8 8v262c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V154c0-4.4-3.6-8-8-8zM306 288h-99.6c-7.1 0-13.4-5.2-14.3-12.3-1-8.5 5.6-15.7 13.9-15.7h99.6c7.1 0 13.4 5.2 14.3 12.3 1 8.4-5.6 15.7-13.9 15.7z"}}]})(props);
};
function IoIosArrowBack (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(props);
};
function IoIosArrowDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}}]})(props);
};
function IoIosArrowDropdownCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm289.1-43.4c7.5-7.5 19.8-7.5 27.3 0 3.8 3.8 5.6 8.7 5.6 13.6s-1.9 9.9-5.7 13.7l-94.3 94c-7.6 6.9-19.3 6.7-26.6-.6l-95.7-95.4c-7.5-7.5-7.6-19.7 0-27.3 7.5-7.5 19.7-7.6 27.3 0l81.1 81.9 81-79.9z"}}]})(props);
};
function IoIosArrowDropdown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M147.6 210.7c-7.5 7.5-7.5 19.8 0 27.3l95.7 95.4c7.3 7.3 19.1 7.5 26.6.6l94.3-94c3.8-3.8 5.7-8.7 5.7-13.7 0-4.9-1.9-9.9-5.6-13.6-7.5-7.5-19.7-7.6-27.3 0l-81 79.8-81.1-81.9c-7.5-7.5-19.7-7.5-27.3.1z"}},{"tag":"path","attr":{"d":"M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm332.4-124.4C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256s18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6z"}}]})(props);
};
function IoIosArrowDropleftCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm43.4 289.1c7.5 7.5 7.5 19.8 0 27.3-3.8 3.8-8.7 5.6-13.6 5.6s-9.9-1.9-13.7-5.7l-94-94.3c-6.9-7.6-6.7-19.3.6-26.6l95.4-95.7c7.5-7.5 19.7-7.6 27.3 0 7.5 7.5 7.6 19.7 0 27.3l-81.9 81 79.9 81.1z"}}]})(props);
};
function IoIosArrowDropleft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M301.3 147.6c-7.5-7.5-19.8-7.5-27.3 0l-95.4 95.7c-7.3 7.3-7.5 19.1-.6 26.6l94 94.3c3.8 3.8 8.7 5.7 13.7 5.7 4.9 0 9.9-1.9 13.6-5.6 7.5-7.5 7.6-19.7 0-27.3l-79.8-81 81.9-81.1c7.5-7.5 7.5-19.7-.1-27.3z"}},{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm124.4 332.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256s18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4z"}}]})(props);
};
function IoIosArrowDroprightCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm244.5 0l-81.9-81.1c-7.5-7.5-7.5-19.8 0-27.3s19.8-7.5 27.3 0l95.4 95.7c7.3 7.3 7.5 19.1.6 26.6l-94 94.3c-3.8 3.8-8.7 5.7-13.7 5.7-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.6-19.7 0-27.3l79.9-81z"}}]})(props);
};
function IoIosArrowDropright (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M210.7 147.6c7.5-7.5 19.8-7.5 27.3 0l95.4 95.7c7.3 7.3 7.5 19.1.6 26.6l-94 94.3c-3.8 3.8-8.7 5.7-13.7 5.7-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.6-19.7 0-27.3l79.9-81.1-81.9-81.1c-7.6-7.4-7.6-19.6 0-27.2z"}},{"tag":"path","attr":{"d":"M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm32 0c0-47 18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256z"}}]})(props);
};
function IoIosArrowDropupCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 464c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208zm0-244.5l-81.1 81.9c-7.5 7.5-19.8 7.5-27.3 0s-7.5-19.8 0-27.3l95.7-95.4c7.3-7.3 19.1-7.5 26.6-.6l94.3 94c3.8 3.8 5.7 8.7 5.7 13.7 0 4.9-1.9 9.9-5.6 13.6-7.5 7.5-19.7 7.6-27.3 0l-81-79.9z"}}]})(props);
};
function IoIosArrowDropup (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M147.6 301.3c-7.5-7.5-7.5-19.8 0-27.3l95.7-95.4c7.3-7.3 19.1-7.5 26.6-.6l94.3 94c3.8 3.8 5.7 8.7 5.7 13.7 0 4.9-1.9 9.9-5.6 13.6-7.5 7.5-19.7 7.6-27.3 0l-81-79.8-81.1 81.9c-7.5 7.5-19.7 7.5-27.3-.1z"}},{"tag":"path","attr":{"d":"M256 464c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208zm0-32c-47 0-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256s18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432z"}}]})(props);
};
function IoIosArrowForward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"}}]})(props);
};
function IoIosArrowRoundBack (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z"}}]})(props);
};
function IoIosArrowRoundDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M348.3 295.6c-5-5.1-13.3-5.1-18.4-.1L269 356.2V124.9c0-7.1-5.8-12.9-13-12.9s-13 5.8-13 12.9v231.3l-60.9-60.8c-5.1-5-13.3-4.9-18.4.1-5 5.1-5 13.2.1 18.3l83 82.4c1.2 1.1 2.5 2 4.1 2.7 1.6.7 3.3 1 5 1 3.4 0 6.6-1.3 9.1-3.7l83-82.4c5.2-4.9 5.3-13.1.3-18.2z"}}]})(props);
};
function IoIosArrowRoundForward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"}}]})(props);
};
function IoIosArrowRoundUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M348.3 216.4c-5 5.1-13.3 5.1-18.4.1L269 155.8v231.3c0 7.1-5.8 12.9-13 12.9s-13-5.8-13-12.9V155.8l-60.9 60.8c-5.1 5-13.3 4.9-18.4-.1-5-5.1-5-13.2.1-18.3l83-82.4c1.2-1.1 2.5-2 4.1-2.7 1.6-.7 3.3-1 5-1 3.4 0 6.6 1.3 9.1 3.7l83 82.4c5.2 4.9 5.3 13.1.3 18.2z"}}]})(props);
};
function IoIosArrowUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"}}]})(props);
};
function IoIosAt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M448 234.3c0 74.1-34.7 120.8-89.6 120.8-28.1 0-49.5-15-53.2-37.3h-4c-9.9 23.2-30.3 35.9-57.7 35.9-48.8 0-81.4-39.1-81.4-97.3 0-55.9 32.8-94.8 80.7-94.8 24.6 0 45.5 12.4 54.7 32.7h4v-27.8h39.9v129.3c0 16.1 8.9 25.8 24.9 25.8 27.7 0 45.3-33.6 45.3-85.8 0-83.3-62.4-139-154.6-139-91.2 0-156.2 66.5-156.2 160.6 0 96.2 64.3 157.6 164.4 157.6 19.6 0 39.3-1.7 54.4-4.6 9.8-1.8 18.8 5.6 18.8 15.5 0 7.3-5 13.7-12.1 15.4-18.2 4.3-40.1 6.8-62.7 6.8C141.9 448 64 372.8 64 256.1 64 142.2 143.5 64 259.4 64 370.8 64 448 133.5 448 234.3zm-242.8 23c0 37 17.4 59.4 45.7 59.4 29.8 0 48.6-23 48.6-59.4s-18.8-58.9-48.1-58.9c-29.1 0-46.2 21.8-46.2 58.9z"}}]})(props);
};
function IoIosAttach (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M355.9 161.1c-8.6 0-15.6 7-15.6 15.6v194.4c0 20.3-8 40.4-22 55.1-13.9 14.6-35.2 23.7-55.5 23.7h-13.6c-19.6 0-39.5-8.9-54.8-24.6-15.2-15.5-23.9-35.6-23.9-55.2V119.3c0-14.9 6.2-28.9 17.3-39.5 11.1-10.5 25.7-16.3 41-16.3 15.1 0 29.3 5.8 39.8 16.2 10.5 10.5 16.4 24.6 16.4 39.6v234.2c0 17.1-13.6 32.2-29 32.2-13.6 0-28.2-12.9-28.2-32.2V219.9c0-8.6-7-15.6-15.6-15.6s-15.6 7-15.6 15.6v133.6c0 35.5 25.5 62.3 59.4 62.3 16.5 0 31.7-6.1 42.7-17.3 11.3-11.4 17.5-27.4 17.5-45V119.3c0-23.4-9.1-45.4-25.7-61.8C274 41 252 32 228.5 32s-45.5 9-62.2 25.5c-16.7 16.5-25.9 38.4-25.9 61.9v250.8c0 28.7 12.2 57.9 32.6 78 20.9 20.6 47.9 31.9 76.1 31.9h13.6c27.6 0 55.3-11.7 75.9-32.1 10.2-10.1 18.2-21.7 23.9-34.6 5.9-13.5 8.9-27.7 8.9-42.1V176.7c.1-8.6-6.9-15.6-15.5-15.6z"}}]})(props);
};
function IoIosBackspace (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M395 96H230c-46.7 0-73.2 34.7-102 63.5s-72.1 74.7-72.1 74.7C51 239.8 48 247 48 255.1c0 8 3 15.3 7.9 21 0 0 34.3 37.6 72.1 75.5 37.8 37.8 56.7 64.5 102 64.5h165c38.5 0 69-32.5 69-71V165c0-38.5-30.5-69-69-69zm-17.7 212.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.2-16.4 6.2-22.6 0L302 278.6l-52.7 52.7c-6.2 6.2-16.3 6.4-22.6 0-6.4-6.4-6.7-15.9 0-22.6l52.7-52.7-52.7-52.7c-6-6-7.1-15.6 0-22.6 7.1-7.1 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L324.6 256l52.7 52.7z"}}]})(props);
};
function IoIosBarcode (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M121.6 388H80.8c-2.2 0-4-1.8-4-4V128c0-2.2 1.8-4 4-4h40.5c7.9 0 14.5-6.4 14.7-14 .1-3.9-1.3-7.2-4.1-10-2.7-2.8-8-4-11.9-4H66c-10 0-18 6-18 16v288c0 10 7 16 17 16h56.3c7.9 0 14.5-5.2 14.7-12.8.1-3.9-1.3-7.5-4.1-10.3-2.7-2.8-6.4-4.9-10.3-4.9zM447 96h-56.3c-9.5 0-17.1 8.3-14 18.3.2.7.5 1.3.8 1.9 2.7 5.2 7.6 7.8 12.9 7.8h40.8c2.2 0 4 1.8 4 4v255.9c0 2.2-1.8 4-4 4h-40.5c-7.9 0-14.5 6.2-14.7 13.9-.1 3.9 1.3 7.6 4.1 10.4 2.7 2.8 6.4 3.8 10.3 3.8H447c10 0 17-6 17-16.4V112c0-10-7-16-17-16z"}},{"tag":"path","attr":{"d":"M122.5 176c-7.7 0-14 6.3-14 13.9V322c0 7.7 6.3 13.9 14 13.9s14-6.3 14-13.9V189.9c0-7.6-6.3-13.9-14-13.9zM389.5 336c7.7 0 14-6.3 14-13.9V189.9c0-7.7-6.3-13.9-14-13.9s-14 6.3-14 13.9V322c0 7.7 6.3 14 14 14zM326.5 144c-7.7 0-14 6.5-14 14.4v195.1c0 8 6.3 14.4 14 14.4s14-6.5 14-14.4V158.4c0-7.9-6.3-14.4-14-14.4zM185.5 144c-7.7 0-14 6.5-14 14.4v195.1c0 8 6.3 14.4 14 14.4s14-6.5 14-14.4V158.4c0-7.9-6.2-14.4-14-14.4zM256 160c-7.7 0-14 6.4-14 14.2v163.5c0 7.8 6.3 14.2 14 14.2s14-6.4 14-14.2V174.2c0-7.8-6.3-14.2-14-14.2z"}}]})(props);
};
function IoIosBaseball (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256.3 74.2l9.7-3.1c4.7-1.5 9.7 1.1 11.2 5.7l.1.4c1.5 4.7-1.1 9.7-5.7 11.2L260.1 92c-2.1.7-3.2 2.9-2.6 4.9 2.1 6.9 4.5 13.7 7.2 20.5 1.9 4.6 3.9 9.2 6.1 13.7 1.1 2.2 3.8 3 5.9 1.6l8.5-5.8c4.1-2.7 9.6-1.7 12.3 2.4l.2.3c2.7 4.1 1.7 9.6-2.4 12.3l-10.4 7.1a4 4 0 0 0-1.2 5.4c7 11 14.9 21.5 23.7 31.3 1.5 1.7 4.2 1.8 5.8.2l7.5-7.5c3.5-3.5 9.1-3.5 12.5 0l.3.3c3.5 3.5 3.5 9.1 0 12.5l-7.5 7.5c-1.6 1.6-1.5 4.3.2 5.8 10.2 9.1 21 17.3 32.5 24.4a4 4 0 0 0 5.4-1.2l6.9-10.2c2.7-4.1 8.3-5.1 12.3-2.4l.3.2c4.1 2.7 5.1 8.3 2.4 12.3l-5.5 8.1c-1.4 2-.6 4.8 1.6 5.9 4.1 1.9 8.2 3.8 12.4 5.5 7.1 2.9 14.3 5.4 21.7 7.6 2.1.6 4.3-.5 5-2.6l3.5-10.8c1.5-4.7 6.5-7.2 11.2-5.7l.4.1c4.7 1.5 7.2 6.5 5.7 11.2l-2.8 8.8c-.7 2.3.7 4.7 3.1 5.2 7.1 1.3 14.3 2.3 21.5 2.9.1-2.6.2-5.3.2-7.9 0-114.9-93.1-208-208-208-2.7 0-5.3.1-8 .2.7 7.7 1.7 15.3 3.1 22.9.4 2.5 2.9 3.9 5.2 3.2zM258 447.2c-.4-2.4-2.8-3.9-5.2-3.2l-11.6 3.7c-4.7 1.5-9.7-1.1-11.2-5.7l-.1-.4c-1.5-4.7 1.1-9.7 5.7-11.2l13.8-4.4c2-.7 3.2-2.8 2.6-4.9-2.3-7.9-5-15.6-8.1-23.3-1.6-4-3.3-7.9-5.2-11.8-1-2.2-3.8-3-5.9-1.6l-10.9 7.4c-4.1 2.7-9.6 1.7-12.3-2.4l-.2-.3c-2.7-4.1-1.7-9.6 2.4-12.3l13-8.8a4 4 0 0 0 1.2-5.4c-7.2-11.7-15.5-22.7-24.8-33.1-1.5-1.7-4.2-1.8-5.8-.2l-9.9 9.9c-3.5 3.5-9.1 3.5-12.5 0l-.3-.3c-3.5-3.5-3.5-9.1 0-12.5l9.9-9.9c1.6-1.6 1.5-4.3-.2-5.8-10-9-20.6-17-31.9-24a4 4 0 0 0-5.4 1.2l-9 13.3c-2.7 4.1-8.3 5.1-12.3 2.4l-.3-.2c-4.1-2.7-5.1-8.3-2.4-12.3l7.6-11.3c1.4-2 .6-4.8-1.6-5.9-4.3-2.1-8.6-4-13.1-5.8-7.3-2.9-14.6-5.5-22.1-7.7-2-.6-4.3.6-4.9 2.6l-4.6 14.4c-1.5 4.7-6.5 7.2-11.2 5.7l-.4-.1c-4.7-1.5-7.2-6.5-5.7-11.2l4-12.4c.7-2.3-.7-4.8-3.1-5.2-5.8-1-11.7-1.8-17.6-2.4-.1 0-.3 0-.4-.1v4.2c0 114.9 93.1 208 208 208h4.2c0-.1-.1-.3-.1-.4-.5-5.4-1.2-10.9-2.1-16.3z"}},{"tag":"path","attr":{"d":"M431.1 280.9l-5.9 18.4c-1.5 4.7-6.5 7.2-11.2 5.7l-.4-.1c-4.7-1.5-7.2-6.5-5.7-11.2l5.3-16.6c.7-2.1-.5-4.4-2.7-5.1-13.5-4-26.8-9.2-39.7-15.6-1.8-.9-4-.3-5.1 1.3l-10.5 15.4c-2.7 4.1-8.3 5.1-12.3 2.4l-.3-.2c-4.1-2.7-5.1-8.3-2.4-12.3l9.2-13.6c1.3-1.9.7-4.4-1.2-5.6-12.3-7.7-24.1-16.6-35.2-26.7-1.6-1.4-4-1.4-5.5.1L294.7 230c-3.5 3.5-9.1 3.5-12.5 0l-.3-.3c-3.5-3.5-3.5-9.1 0-12.5l12.8-12.8c1.5-1.5 1.6-3.9.1-5.5-9.7-10.8-18.4-22.2-26-34-1.2-1.9-3.8-2.5-5.6-1.2l-13.3 9c-4.1 2.7-9.6 1.7-12.3-2.4l-.2-.3c-2.7-4.1-1.7-9.6 2.4-12.3l15.1-10.2c1.7-1.1 2.2-3.3 1.3-5.1-6.4-12.9-11.7-26.2-15.8-39.7-.7-2.1-2.9-3.4-5.1-2.7l-15.9 5.1c-4.7 1.5-9.7-1.1-11.2-5.7l-.1-.4c-1.5-4.7 1.1-9.7 5.7-11.2l17.6-5.6c1.9-.6 3.1-2.6 2.7-4.6-1.8-9.2-3.1-18.6-3.9-27.9-95.4 11.8-170.8 88.2-181 184.1h1c7.5.7 15 1.8 22.4 3.2 2 .4 4-.8 4.6-2.7l4.7-14.8c1.5-4.7 6.5-7.2 11.2-5.7l.4.1c4.7 1.5 7.2 6.5 5.7 11.2l-4.2 13c-.7 2.2.5 4.4 2.7 5.1 13.9 4.1 27.5 9.4 40.7 16 1.8.9 4 .3 5.1-1.3l8.3-12.3c2.7-4.1 8.3-5.1 12.3-2.4l.3.2c4.1 2.7 5.1 8.3 2.4 12.3l-7.1 10.5c-1.3 1.9-.7 4.4 1.2 5.6 12.1 7.7 23.7 16.4 34.6 26.3 1.6 1.4 4 1.4 5.5-.1l10.4-10.4c3.5-3.5 9.1-3.5 12.5 0l.3.3c3.5 3.5 3.5 9.1 0 12.5L214 310.8c-1.5 1.5-1.6 3.9-.1 5.5 10.2 11.3 19.2 23.3 27 35.8 1.2 2 3.7 2.5 5.7 1.2l10.8-7.3c4.1-2.7 9.6-1.7 12.3 2.4l.2.3c2.7 4.1 1.7 9.6-2.4 12.3l-12.7 8.6c-1.7 1.1-2.2 3.3-1.3 5.1 6.4 13.2 11.7 26.7 15.7 40.6.6 2.2 2.9 3.4 5.1 2.7l13.6-4.4c4.7-1.5 9.7 1.1 11.2 5.7l.1.4c1.5 4.7-1.1 9.7-5.7 11.2l-15.6 5c-1.9.6-3.1 2.6-2.7 4.6 1.3 7 2.3 14.1 3 21.2v1c95.9-10.2 172.3-85.6 184.1-181-8.9-.7-17.9-1.9-26.7-3.6-1.9-.3-3.9.9-4.5 2.8z"}}]})(props);
};
function IoIosBasket (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M387.9 373.7h49.2l17.5-75.4h-66.7zM387.9 448h.5c18.7 0 33.4-12.5 38.3-29.5l6-25.9h-44.8V448zM265.4 392.5h103.7V448H265.4zM75 373.7h49v-75.4H57.5zM142.9 192h103.7v87.5H142.9zM265.4 192h103.7v87.5H265.4zM85.5 418.3c4.7 17 19.4 29.7 38.1 29.7h.5v-55.5H79.4l6.1 25.8zM142.9 392.5h103.7V448H142.9zM265.4 298.3h103.7v75.4H265.4zM142.9 298.3h103.7v75.4H142.9z"}},{"tag":"path","attr":{"d":"M464 192h-47.9V96c0-17.6-14.4-32-32-32H127.9c-17.6 0-32 14.4-32 32v96H48c-10.3 0-17.9 9.6-15.6 19.6l19.7 67.9H124V106c0-7.7 6.3-14 14-14h236c7.7 0 14 6.3 14 14v173.5h72l19.6-67.9c2.3-10-5.3-19.6-15.6-19.6z"}}]})(props);
};
function IoIosBasketball (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M218.6 306.4c14.3-11.8 28.3-24.4 41.4-37.6l6.1-6.1c-2.8-2.9-5.6-5.8-8.3-8.5-49.9-49.9-107.7-89.6-171.8-118.1-18.4 26.1-31 56.6-35.8 89.6 32.2 2.3 63.2 10.5 92.2 24.5 28.8 13.9 54.4 32.8 76.2 56.2zM326.1 185.6c.5.5 1.1 1.1 1.7 1.6 20.9-30.5 38.8-63.2 53.5-97.4-33.8-25.5-75.6-41-121-41.9 2.4 22.3 8 44.1 16.7 64.7 11.5 27.4 28.1 52 49.1 73zM399 234.8c20.7 8.8 42.6 14.4 65 16.7-1.2-56.3-24.8-107.1-62.2-143.9-15 33.8-33.3 66.3-54.4 96.8 15.8 12.4 33.2 22.6 51.6 30.4zM193.9 318.1c-21.1-21.1-45.6-37.6-72.9-49.2-23.2-9.8-47.7-15.6-72.9-17.4 0 1.5-.1 3-.1 4.4 0 48.7 16.7 93.5 44.8 128.9 37.3-17 72.7-37.9 105.4-62.4-1.5-1.4-2.9-2.9-4.3-4.3zM283.8 243.6c10.1-11.3 19.7-23.1 28.8-35.1-44.5-42.3-72.1-98.6-78.2-159.5-51.9 5.4-98.1 29.8-131.5 66.2 33.4 15.3 65.5 33.8 95.6 55.1 30.5 21.7 59.2 46.3 85.3 73.3zM301.4 262.8c38.9 44 70.9 93.2 95.3 146.4 36.4-33.5 60.9-79.8 66.2-131.7-47.7-4.7-92.8-22.6-130.8-52-9.6 12.7-20 25.3-30.7 37.3zM235.3 326.2c29.9 39.5 47.5 86.2 51 135.6 33-4.8 63.5-17.4 89.5-35.8-23.4-52.6-54.3-101-92.2-144.2-15.2 15.6-31.4 30.5-48.3 44.4zM214.9 342.3c-32.4 24.4-67.4 45.5-104 62.8 37.5 36.5 88.6 59 145.1 59 1.5 0 3 0 4.5-.1-1.8-25.2-7.6-49.7-17.4-72.9-7.4-17.5-16.8-33.8-28.2-48.8z"}}]})(props);
};
function IoIosBatteryCharging (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M396 144H64c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h332c26.4 0 48-21.6 48-48V192c0-26.4-21.6-48-48-48zm20 176c0 11-9 20-20 20H64c-11 0-20-9-20-20V192c0-11 9-20 20-20h332c11 0 20 9 20 20v128zM464 204.6v102.8c16 0 32-27.7 32-51.4s-16-51.4-32-51.4z"}},{"tag":"path","attr":{"d":"M384 192H76c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h308c6.6 0 12-5.4 12-12V204c0-6.6-5.4-12-12-12zM218.8 308l8.4-43H200l45.2-61-8.4 43H264l-45.2 61z"}}]})(props);
};
function IoIosBatteryDead (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M396 144H64c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h332c26.4 0 48-21.6 48-48V192c0-26.4-21.6-48-48-48zm20 176c0 11-9 20-20 20H64c-11 0-20-9-20-20V192c0-11 9-20 20-20h332c11 0 20 9 20 20v128zM464 204.6v102.8c16 0 32-27.7 32-51.4s-16-51.4-32-51.4z"}}]})(props);
};
function IoIosBatteryFull (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M396 144H64c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h332c26.4 0 48-21.6 48-48V192c0-26.4-21.6-48-48-48zm20 176c0 11-9 20-20 20H64c-11 0-20-9-20-20V192c0-11 9-20 20-20h332c11 0 20 9 20 20v128zM464 204.6v102.8c16 0 32-27.7 32-51.4s-16-51.4-32-51.4z"}},{"tag":"path","attr":{"d":"M384 192H76c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h308c6.6 0 12-5.4 12-12V204c0-6.6-5.4-12-12-12z"}}]})(props);
};
function IoIosBeaker (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M445.2 48H128.5C74.1 48 64 75.9 64 88.2c30.3 4.2 32 4.2 32 36.2v275.5c0 35.3 28.9 64 64.2 64H368c35.4 0 63-29.2 63-64.5V89.2c2-17.5 12.5-31.6 13.6-33.3 1.2-1.9 3.4-4.4 3.4-5.5 0-1.2-.3-2.4-2.8-2.4zm-333 29.3c0-.1 0-.1 0 0 6-1 12-1.3 16.3-1.3H405c-.9 3.7-1.5 7.1-1.8 10-.1 1.1-.2 2.1-.2 3.2v70.9-.1H124v-35.5c0-17.6 0-34.2-11.8-47.2z"}}]})(props);
};
function IoIosBed (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M458.2 208h-.4c-12 0-21.8 9.8-21.8 21.8 0 1.2-1 2.2-2.2 2.2H78.2c-1.2 0-2.2-1-2.2-2.2 0-12-9.8-21.8-21.8-21.8h-.4c-12 0-21.8 9.8-21.8 21.8v180.4c0 12 9.8 21.8 21.8 21.8h.4c12 0 21.8-9.8 21.8-21.8V404c0-2.2 1.8-4 4-4h352c2.2 0 4 1.8 4 4v6.2c0 12 9.8 21.8 21.8 21.8h.4c12 0 21.8-9.8 21.8-21.8V229.8c0-12-9.8-21.8-21.8-21.8z"}},{"tag":"path","attr":{"d":"M84 214h22.5c2.2 0 4-1.8 4-4v-13c0-8.8 7.2-16 16-16H224c8.8 0 16 7.2 16 16v13c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-13c0-8.8 7.2-16 16-16h97.5c8.8 0 16 7.2 16 16v13c0 2.2 1.8 4 4 4H428c4.4 0 8-3.6 8-8v-94c0-17.6-14.4-32-32-32H108c-17.6 0-32 14.4-32 32v94c0 4.4 3.6 8 8 8z"}}]})(props);
};
function IoIosBeer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M112 162c0-13.3 10.7-24 24-24h229.5c4.9 0 9.6 1.5 13.5 4.4 2 1.5 4.9 0 4.8-2.5-.1-5.7-.2-9.3-.2-21.6 0-20.8-17.2-38.3-38.1-38.3h-.2c-5.7-.4-10.8-4-12.9-9.3-9-22.6-32.3-38.6-56.4-38.6-21 0-34.2 7-44 18.3-4.4 5-11.8 5.9-17.4 2.4-7.3-4.6-16.1-7.1-25.5-7.1-14.4 0-27.2 7.1-35.8 17.4-4 4.9-10.4 7-16.6 5.9-5.2-1-12.6-1.8-22.7-1.8-25 0-50 16.6-50 42.4v4c0 28.8 16 22.9 16 41.8v50.8c0 13.4-11.2 19.3-11.2 35.2 0 8.8 8 16.8 16.8 16.8H112V162zM386 452H110c-7.7 0-14 6.3-14 14s6.3 14 14 14h276c7.7 0 14-6.3 14-14s-6.3-14-14-14z"}},{"tag":"path","attr":{"d":"M400 194h-32v-24c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v213.8c0 12.1-1.1 18.2-3.2 30.1l-.1.5c-.8 4.7.2 9.5 2.8 13.5 3.4 5.1 9.1 8.2 15.3 8.2h213.9c4.1 0 8.1-1.4 11.1-4.1 4.7-4.1 6.5-10.3 5.2-16-2.7-11.8-4.5-17.8-4.8-29.9H400c26.4 0 48-21.6 48-48v-96c0-26.5-21.6-48.1-48-48.1zm20 144c0 11-9 20-20 20h-32V222h32c11 0 20 9 20 20v96z"}}]})(props);
};
function IoIosBicycle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M125.3 289.3c17.3 0 33.7 6.8 46.1 19.2 12.4 12.4 19.2 28.8 19.2 46.1s-6.8 33.7-19.2 46.1c-12.4 12.4-28.8 19.2-46.1 19.2s-33.7-6.8-46.1-19.2C66.8 388.4 60 372 60 354.7s6.8-33.7 19.2-46.1c12.4-12.4 28.8-19.3 46.1-19.3m0-28c-51.3 0-93.3 42-93.3 93.3C32 406 74 448 125.3 448s93.3-42 93.3-93.3c.1-51.4-41.9-93.4-93.3-93.4zM319.8 127.8c17.8 0 32-14.2 32-32S337.8 64 320 64s-32.2 14-32.2 31.8c0 17.7 14.3 32 32 32zM386.7 289.3c17.3 0 33.7 6.8 46.1 19.2 12.4 12.4 19.2 28.8 19.2 46.1s-6.8 33.7-19.2 46.1C420.4 413.2 404 420 386.7 420s-33.7-6.8-46.1-19.2c-12.4-12.4-19.2-28.8-19.2-46.1s6.8-33.7 19.2-46.1c12.3-12.4 28.7-19.3 46.1-19.3m0-28c-51.3 0-93.3 42-93.3 93.3s42 93.3 93.3 93.3 93.3-42 93.3-93.3-42-93.3-93.3-93.3z"}},{"tag":"path","attr":{"d":"M368 192h-48l-29.5-60.1c-5.6-9.3-15.9-15.9-27.1-15.9-8.4 0-16.8 3.7-22.4 9.3l-71.7 69.1c-5.6 5.6-9.3 14-9.3 22.4 0 17.4 12.6 23.6 18.5 27.1C224 270.1 240 273 240 286.1V352c0 8.8 7.2 16 16 16s16-7.2 16-16v-90c0-13.2-30.4-24-48.3-38l48.9-51.5c18.7 28.5 27.3 51.5 38 51.5H368c8.8 0 16-7.2 16-16s-7.2-16-16-16z"}}]})(props);
};
function IoIosBluetooth (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M378.5 333l-88.3-77 88.2-76.1c6.9-6 7.4-16.3 1.1-22.9L262.7 35.6c-2.2-2.3-5.4-3.6-8.6-3.6-6.1 0-11.1 4.9-11.1 10.8V212l-86.3-73.3c-7.1-6-17.8-5.3-24.1 1.5-6.5 7-5.8 17.9 1.6 24.1L243 256l-108.1 90.9c-7.3 6.1-8.1 16.8-1.7 23.9l.3.3c6.3 7 17.3 7.7 24.5 1.5l85-73.6v169.8c0 6.2 5.1 11.2 11.5 11.2 3.2 0 6.2-1.3 8.4-3.5L379.6 356c6.3-6.6 5.8-16.9-1.1-23zm-99.1-232.1l62.7 65.9c.8.8.7 2.1-.2 2.9l-62.7 53c-1.3 1.1-3.4.2-3.4-1.5V102.3c.1-1.9 2.4-2.7 3.6-1.4zm-3.5 309V291.6c0-1.7 2.1-2.6 3.4-1.5l62.7 53c.9.7.9 2 .2 2.9l-62.7 65.3c-1.3 1.3-3.6.4-3.6-1.4z"}}]})(props);
};
function IoIosBoat (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M351.8 422c-26.2 9.2-66.5 14.9-96.1 14.9-29.6 0-69.9-5.7-96.1-14.9 0 0-26.1 23.9-62.3 36.2-2.3.8-1.5 4.2.9 3.9 22.6-2.6 40.2-6.5 61.4-12 23 9 66.7 13.9 96.1 13.9 29.4 0 74.1-3.8 96.1-13.9 21.5 5.6 38.8 9.6 62 12.1 2.4.3 3.2-3.1.9-3.9-35.7-12.4-62.9-36.3-62.9-36.3zM445.5 263l-186.2-85.5c-2.1-1-4.6-1-6.7 0L66.5 263c-6.2 2.9-10.5 9.1-10.5 16.4 0 2.4.5 4.6 1.3 6.7L112 422c27.5 0 56.7-22 56.7-22 18 9 53.1 17.1 79.3 18.6 2.8.2 5.5.2 8 .2s5.2-.1 8-.2c26.2-1.5 61.3-9.5 79.3-18.6 0 0 29.2 22 56.7 22l54.7-135.9c.8-2.1 1.3-4.3 1.3-6.7 0-7.3-4.3-13.5-10.5-16.4zM212 288c-6.6 0-12-9.8-12-22s5.4-22 12-22 12 9.8 12 22-5.4 22-12 22zm88 0c-6.6 0-12-9.8-12-22s5.4-22 12-22 12 9.8 12 22-5.4 22-12 22z"}},{"tag":"path","attr":{"d":"M391.9 127v-.1C386.3 100.3 374.4 80 352 80h-34.6l-2-8c-3.6-14.1-16.4-24-31-24h-57c-14.6 0-27.4 9.9-31 24.1l-2 7.9H160c-22.9 0-35.1 20.7-39.8 47L102 223.8c-.6 3.2 2.6 5.7 5.6 4.4l25.3-11.6c1.2-.5 2-1.6 2.3-2.9l16.2-85.6c2.5-10.7 7.3-16 16.1-16h177.1c8.9 0 13.1 5 16.1 16l16.2 85.6c.2 1.3 1.1 2.4 2.3 2.9l25.4 11.7c3 1.4 6.2-1.2 5.6-4.4L391.9 127z"}}]})(props);
};
function IoIosBody (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"ellipse","attr":{"cx":"256","cy":"80","rx":"48","ry":"48"}},{"tag":"path","attr":{"d":"M424 144H88c-13.3 0-24 10.7-24 24s10.7 24 24 24h98.5c5.6 1 13.2 3.8 17.2 14.2 4.7 12.1 2.4 33.6-.5 51.7l-3.8 21.4c0 .1 0 .2-.1.3l-30.4 172.2c-2.3 13 6.4 25.5 19.5 27.8 13.1 2.3 25.3-6.4 27.6-19.5l21-119.9v.2s6.2-32.5 18.5-32.5h1.1c12.5 0 18.5 32.5 18.5 32.5v-.1l21 119.9c2.3 13 14.7 21.7 27.7 19.4 13.1-2.3 21.7-14.8 19.4-27.8l-30.4-172.2c0-.1 0-.2-.1-.3l-3.8-21.4c-2.9-18.1-5.2-39.6-.5-51.7 4-10.4 11.6-13.2 17.2-14.2H424c13.3 0 24-10.7 24-24s-10.7-24-24-24z"}}]})(props);
};
function IoIosBonfire (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M270.9 350.6c-.7-8.2-7.6-14.6-15.9-14.6-7.6 0-14 5.4-15.6 12.5L223.8 427c-.5 2.3-.8 4.6-.8 7 0 17.7 14.3 30 32 30s32-12.3 32-30c0-2.9-.4-5.7-1.1-8.4l-15-75zM305.9 355zM388.9 386.3c-1.7-1.4-3.3-2.9-5.1-3.9l-59.6-43.5c-5.8-3.8-12-3.7-16.5.9-4.1 4.1-4.7 10.4-1.7 15.4l45 61.8c.9 1.5 2.2 2.8 3.4 4.2 7.8 9.1 25.1 9.6 34.6 0 9.4-9.8 9.3-27.2-.1-34.9zM372.5 335zM435.4 320h-59.5c-3.9 0-7.4 2.2-8.1 6.2-.6 3.6 1.3 7.1 4.7 8.8h.1l57.7 17.8c8.3 1.9 17.7-5.5 17.7-14.8 0-11.8-4.8-18-12.6-18zM139.2 335zM139.2 335c3.3-1.6 5.3-5.2 4.7-8.8-.7-4-3.9-6.2-8.1-6.2H76.3c-7.6 0-12.3 8.3-12.3 17.6s9.1 17.1 17.4 15.2l57.7-17.8h.1zM187.9 338.8l-59.6 43.4c-1.8 1.1-3.6 2.4-5.1 3.9-9.6 9.6-9.6 25.1 0 34.6 9.6 9.6 25.1 9.6 34.6 0 1.3-1.3 2.4-2.7 3.4-4.2l45-61.6c3-5 2.5-11.2-1.7-15.3-4.6-4.5-11.8-4.8-16.6-.8zM358.7 138.7c0-57.6-72.4-90.7-96-90.7 12 80.8-101.7 113-112 181.3-10.3 68.3 48 90.7 48 90.7 16.3-56.6 72.4-75.6 109.7-99.8 40.7-26.4 50.3-51.3 50.3-81.5zM358.7 259.6c5-14.7 1.9-49.3-3-63.4-9 17.5-26.3 32.4-47.2 46-8.6 5.6-20.9 10.8-29.8 15.9-18.7 10.5-34 20.6-46.3 34.4 11.3 16.4 31.3 27.7 46.3 27.7 36-.2 64-13.7 80-60.6z"}},{"tag":"path","attr":{"d":"M161.8 171.9c11.7-15.1 24.9-23.8 38.2-36.2 13.4-12.5 22.1-21.2 27.5-31.3-10.7-20.1-30.8-28.1-44.7-26.1 2.3 28.6-30 44-32 64.8-1.3 12.6 5.4 25 11 28.8z"}}]})(props);
};
function IoIosBook (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M146 64.1c54.1 0 100 27.9 100 82V446c0 2.2-3.1 2.7-3.8.7v-.1c-10.3-34.2-38.2-67.6-82.3-70.5-34.2-2.2-66.9 12.9-93.1 37.1-1.6 1.5-4.3 2.9-6.6 2.9h-4.5c-3.7 0-7.6-2.7-7.6-6.1V120.2C48 88.1 91.9 64.1 146 64.1zM366 64c-54.1 0-100 27.9-100 82v299.9c0 2.2 3.1 2.7 3.8.7v-.1c10.3-34.2 39.4-67.9 82.3-70.5 32.9-2 63.9 11 93.1 37.1 1.6 1.4 4.3 2.9 6.6 2.9h4.5c3.7 0 7.6-2.7 7.6-6.1V120c.1-32-43.8-56-97.9-56z"}}]})(props);
};
function IoIosBookmark (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M128 80v380c0 3.3 3.8 5.2 6.4 3.2l116.8-92c2.9-2.1 6.8-2.1 9.6 0l116.8 92c2.6 2 6.4.1 6.4-3.2V80c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32z"}}]})(props);
};
function IoIosBookmarks (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M416 32v127.9l-22.9-14.5-9.1-6.4-9.1 6.4-22.9 14.5V32h-41.4c-22.5.2-40.6 18.8-40.6 41.4v313.2c0 7.5-5.8 14-13.3 14.4-8 .4-14.7-6-14.7-14V73.4c0-22.6-18.1-41.2-40.6-41.4H95.1C64.8 32 40 56.8 40 87.1v289.8c0 30.3 24.8 55.1 55.1 55.1l108-.1c4.2.1 8.3.6 12.2 1.4 15.3 3.1 26.8 16.6 26.6 32.2-.1 7.2 5.2 13.6 12.4 14.4 8.5.9 15.7-5.7 15.6-14.1-.2-15.8 11.4-29.4 26.9-32.5 3.8-.8 7.9-1.2 12-1.3l108 .1c30.3 0 55.1-24.8 55.1-55.1V87.1C472 56.8 446.3 32 416 32z"}}]})(props);
};
function IoIosBowtie (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M290.8 213.5C286 205 277 202.2 266 202.2v-.2c-6 0-14.3 1.3-22.6 2.9-11.9 2.3-19.7 7.1-19.7 7.1s3.6 27.3.1 58.5-7.9 42.5-7.9 42.5 5.3 12.1 40 15c3.9.3 7.6.5 11 .5 24.5 0 36.4-7.3 36.4-7.3s3.3-5.4 4.3-22.1c1.9-32.2-7-68.5-16.8-85.6zM205.7 208.8c-22-40.2-86.2-96.8-121.3-96.8C57.9 112 32 180.5 32 256s23 144 51.5 144c33.4 0 110.5-80 110.5-80s5.7-12.6 9.9-33.6l1.8-10.4c.7-4.7 1.3-9.7 1.7-15 .3-3.5.5-6.8.6-9.9l.3-9.8c.7-16-2.6-32.5-2.6-32.5zM427.6 112c-36.4 0-96.4 56.5-118.3 96.8l-.8 1.4s1.4 2.5 1.9 3.4c3.4 6 6.7 14.3 9.4 24l2.9 11.7c2.2 10.2 3.7 21.2 4.2 32.2l.2 9c0 2.9-.1 5.7-.3 8.5-1 16.7-4.6 22.1-4.6 22.1 7.6 10.5 69 78.9 106.2 78.9 28.5 0 51.5-68.5 51.5-144s-25.8-144-52.3-144z"}}]})(props);
};
function IoIosBriefcase (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M80 448h352c17.7 0 32-14.3 32-32V224H48v192c0 17.7 14.3 32 32 32zM432 128h-8v-8c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v8h-28V96c0-17.6-14.4-32-32-32H196c-17.6 0-32 14.4-32 32v32h-28v-8c0-4.4-3.6-8-8-8H96c-4.4 0-8 3.6-8 8v8h-8c-17.7 0-32 14.3-32 32v40h416v-40c0-17.7-14.3-32-32-32zm-112 0H192v-28c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v28z"}}]})(props);
};
function IoIosBrowsers (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M48 181.4V424c0 22.1 17.9 40 40 40h242.6c22.1 0 40-17.9 40-40V181.4c0-22.1-17.9-40-40-40H88c-22.1 0-40 17.9-40 40z"}},{"tag":"path","attr":{"d":"M141.4 88v28.4c0 2.2 1.8 4 4 4h198.2c26.4 0 48 21.6 48 48v198.2c0 2.2 1.8 4 4 4H424c22.1 0 40-17.9 40-40V88c0-22.1-17.9-40-40-40H181.4c-22.1 0-40 17.9-40 40z"}}]})(props);
};
function IoIosBrush (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M149.6 283.3c-51.9 0-83.9 45.7-83.9 95.1 0 21.3-10.9 37.1-31.4 46.4-2.2 1-3 3.8-1.7 5.8 16.7 24.6 63.3 33.3 95.3 33.3 8.4 0 15.9-.6 21.8-1.7 35.6-6.4 80.1-24.9 90.7-77 12.2-60.5-38.9-101.9-90.8-101.9z"}},{"tag":"path","attr":{"d":"M467.7 60.4C460 52.7 450.9 48 441.6 48c-6.3 0-12.7 2.2-18.8 7L257.7 200.3c-5.4 4.8-12.4 7.4-19.7 7.4h-.1-.1c-5.6 0-11.1 2.1-15.4 5.8l-53.6 43.8c-2.1 1.8-2.7 4.8-1.4 7.2.9 1.7 2.6 2.9 4.5 3.1 45.6 4.5 87 37 87.3 86.6 0 1.7.7 3.4 2 4.5 2.5 2.1 6 1.7 8-.6l45.1-52.2c3.5-4 5.8-9.1 6-14.5v-1.2c0-7.5 3-14.8 8-20.4l144.8-164.4c11.9-15.1 7.6-32.1-5.4-45z"}}]})(props);
};
function IoIosBug (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M374.6 127.3C345.4 88.5 303.1 64 256 64c-47.1 0-89.4 24.5-118.6 63.3 6.4 15.6 15.8 30 28.1 42.3 24.2 24.2 56.3 37.5 90.5 37.5s66.3-13.3 90.5-37.5c12.3-12.3 21.8-26.6 28.1-42.3z"}},{"tag":"path","attr":{"d":"M122 150s-3.8-1.6-5.9-3.3c-2.1-1.7-5-4.9-6.5-8.4 5.4-11.3 1.2-25-9.9-31.3-11.8-6.6-26.9-2.2-33.1 10-4.5 8.9-2.9 19.8 3.8 27.1 1.8 1.9 3.7 3.4 5.7 4.6 2.8 1.6 4.9 4 6.4 6.8 2.7 5.2 6.4 10.7 11.1 14.6 4.2 3.5 8.8 7.1 15.2 10.7-7.2 20.3-11.6 42.3-12.5 65.4-11 .2-18.6 2.1-25.5 4.1-4.2 1.2-8.2 3.4-11.8 5.9-1-.1-1.9-.2-2.9-.2-13.8 0-24.8 11.6-24 25.6.7 11.8 10.3 21.5 22.2 22.4 11 .8 20.6-5.9 24.3-15.5 2-5.3 6.7-9.2 12.4-9.9 1.9-.2 3.9-.4 6.2-.4 3.2 33 13.3 63.5 28.6 89.2-14.2 11-22.9 23-26.6 36.3 0 0-.8.4-1.9 1.4-1 .8-1.9 1.6-2.8 2.6-8.9 9.9-8.1 25 1.8 33.9 9.9 8.9 25 8.1 33.9-1.8 6.2-6.9 7.6-16.3 4.6-24.5-2.2-6-.7-12.7 3.9-17 1.6-1.5 3.5-3.1 5.7-4.9 27.1 31.7 59.4 52 99.7 54.4V232.9C190.8 230 144.4 195.3 122 150zM456 256.1c-1 0-2 .1-2.9.2-3.6-2.5-7.7-4.6-11.8-5.9-6.9-2-14.4-3.9-25.5-4.1-1-23.1-5.4-45.2-12.5-65.4 6.4-3.6 11-7.2 15.2-10.7 4.9-4.1 8.7-10 11.5-15.3 1.3-2.5 3.3-4.5 5.8-5.9 0 0 .1 0 .1-.1 11.6-6.5 15.7-21.1 9.2-32.7-6.5-11.6-21.1-15.7-32.7-9.2-11.1 6.2-15.3 19.9-9.9 31.3-1.6 3.4-3.4 5.7-6.5 8.4-2.3 2-5.9 4.3-5.9 4.3-22.4 45.3-68.8 79-122 81.9V448c40.3-2.4 72.6-22.8 99.7-54.4 2.1 1.7 3.9 3.2 5.4 4.6 4.8 4.4 6.4 11.3 4.2 17.5-3 8.1-1.5 17.5 4.7 24.3 8.9 9.9 24 10.7 33.9 1.8 9.9-8.9 10.7-24 1.8-33.9-.9-1-1.8-1.8-2.8-2.6-1.1-.9-1.9-1.4-1.9-1.4-3.7-13.3-12.4-25.3-26.6-36.3 15.3-25.7 25.4-56.2 28.6-89.2 2.1 0 4.1.2 5.9.4 5.9.7 10.7 4.7 12.9 10.2 3.7 9.4 13.2 15.9 24.1 15.1 11.8-.9 21.4-10.5 22.2-22.4.6-14-10.4-25.6-24.2-25.6z"}}]})(props);
};
function IoIosBuild (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M441.1 131.1l-44.9 45.1c-.9.9-2.3 1.3-3.5 1.1l-46.4-8.4c-1.6-.3-2.9-1.6-3.2-3.2l-8.3-46.4c-.2-1.3.2-2.6 1.1-3.5l44.8-45c3.5-3.5 3-9.3-1-12.1-10.1-7.2-22.1-10.7-31.8-10.7-.7 0-1.4 0-2 .1-12.5.7-39.3 7.7-60 29.7-20.1 21.2-41.1 60.6-22.5 104.5 2.2 5.3 4.7 12.3-2.7 19.7C253.1 209.4 61 390.3 61 390.3c-18 15.5-16.7 44.2-.1 60.9 8.5 8.4 20 12.8 31.3 12.8 11.1 0 21.9-4.2 29.6-13.1 0 0 179.4-191.1 188.2-199.8 4-3.9 7.7-5.1 11.1-5.1 3.3 0 6.3 1.2 8.6 2.4 9.9 5.1 21 7.4 32.4 7.4 26.8 0 55-12.4 72.2-29.6 24.4-24.4 28.9-48 29.6-60.1.6-9.9-2.2-22.6-10.7-34.2-2.9-3.8-8.6-4.2-12.1-.8zM102.5 429.3c-5.5 5.4-14.4 5.4-19.9 0-5.4-5.5-5.4-14.4 0-19.9 5.5-5.4 14.4-5.4 19.9 0 5.4 5.6 5.4 14.5 0 19.9z"}}]})(props);
};
function IoIosBulb (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M404 188.9C404 111 333.9 48 256 48s-148 63.1-148 140.9c0 31 13.2 56.1 30.2 80.1h-.3c10.9 15 21.4 17.7 31.5 35 14.7 25.2 18.1 40.7 18.7 55.7.4 8.6 7.5 15.3 16 15.3h8.9c2.2 0 4-1.8 4-4v-94.5c0-5-1.2-9.8-3.4-14.3l-21-42c-3.5-7 1.6-15.2 9.4-15.2 4 0 7.7 2.3 9.4 5.9l25.3 51.4c2.2 4.4 3.3 9.2 3.3 14.1V371c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-94.6c0-4.9 1.1-9.7 3.3-14.1l25.4-51.6c1.7-3.4 5.2-5.6 9-5.6 7.5 0 12.4 7.9 9 14.6l-21.3 42.6c-2.2 4.5-3.4 9.4-3.4 14.3V371c0 2.2 1.8 4 4 4h10c8.5 0 15.5-6.6 16-15 .9-15.4 4.7-32.3 18.4-56 10.1-17.3 20.6-20 31.5-35h-.1c17-24 30.2-49.1 30.2-80.1zM238 464h36c7.7 0 14-6.3 14-14s-6.3-14-14-14h-36c-7.7 0-14 6.3-14 14s6.3 14 14 14zM218 420h76c7.7 0 14-6.3 14-14s-6.3-14-14-14h-76c-7.7 0-14 6.3-14 14s6.3 14 14 14z"}}]})(props);
};
function IoIosBus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M109.6 416.7c-1.9-1.9-5.7-.5-5.6 2.2 1 21.5 1.4 29 5.5 29h55.1c4.4 0 3.3-11.5 3.3-22-34.3.1-46.9 2.3-58.3-9.2zM402.4 416.7c1.9-1.9 5.7-.5 5.6 2.2-1 21.5-1.4 29-5.5 29h-55.1c-4.4 0-3.3-11.5-3.3-22 34.3.1 46.9 2.3 58.3-9.2zM384 64H128c-17.6 0-32 14.4-32 32v276c0 22 18 40 40 40h240c22 0 40-18 40-40V96c0-17.6-14.4-32-32-32zM162 375.9c-14.8 1.2-27-11.1-25.9-25.9.9-11.6 10.3-21.1 22-22 14.8-1.2 27 11.1 25.9 25.9-1 11.7-10.4 21.1-22 22zm76-77.9h-97.8c-8.9 0-16.2-7.3-16.2-16.2V166.2c0-8.9 7.3-16.2 16.2-16.2H238c2.2 0 4 1.8 4 4v140c0 2.2-1.8 4-4 4zm115.9 77.9c-14.8 1.2-27-11.1-25.9-25.9.9-11.6 10.3-21.1 22-22 14.8-1.2 27 11.1 25.9 25.9-.9 11.7-10.3 21.1-22 22zM388 282c0 8.8-7.2 16-16 16h-98c-2.2 0-4-1.8-4-4V154c0-2.2 1.8-4 4-4h98c8.8 0 16 7.2 16 16v116zm-15-162H139c-8.8 0-15-6.3-15-14s6.2-14 15-14h234c8.8 0 15 6.3 15 14s-6.2 14-15 14z"}}]})(props);
};
function IoIosBusiness (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M146 80h220c9.9 0 18-8.1 18-18s-8.1-18-18-18H146c-9.9 0-18 8.1-18 18s8.1 18 18 18zM398 100H114c-9.9 0-18 8.1-18 18 0 9.3 6.9 17.1 16 18v300c0 13.2 10.8 24 24 24h88c4.4 0 8-3.6 8-8v-40c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v40c0 4.4 3.6 8 8 8h88c13.2 0 24-10.8 24-24V136c9.1-.9 16-8.7 16-18 0-9.9-8.1-18-18-18zM192 364c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm80 192c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm80 192c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16z"}}]})(props);
};
function IoIosCafe (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M369.7 404H110.1c-7.6 0-14.1 5.8-14.4 13.4-.4 8 6 14.6 14 14.6h259.6c7.6 0 14.1-5.8 14.4-13.4.3-8-6.1-14.6-14-14.6zM399.2 118.5c.1-10.8-4.2-20.9-12.2-28.4-7.2-6.6-16.7-10.1-26.5-10.1H86.8c-9.9 0-19.7 3.6-26.9 10.4-8.1 7.7-12.4 18.2-11.9 29.3C50.4 172 58.3 218 71.8 256.3c11 31.6 25.8 58.1 43.9 78.9 31.8 36.6 68.8 48.8 77.9 48.8h60.1c5.5 0 25-7.2 44.2-19.5 22.4-14.4 42.4-36.7 58.1-64.6 2 .1 4 .2 5.9.2 27.2 0 52.8-9.7 72.1-27.4 19.4-17.8 30.1-41.4 30.1-66.6-.1-38.9-25.9-73.5-64.9-87.6zm-29.7 153.1c14.2-34.5 23.6-76 27.8-123.4 0 0 0-.1.1 0 10.3 5 19.1 12.2 25.8 20.9 8.4 10.9 12.8 23.7 12.8 37 0 34-29.2 62.1-66.5 65.5z"}}]})(props);
};
function IoIosCalculator (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M372 48H140c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h232c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zm-12 272v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-80c0-13.3 10.7-24 24-24s24 10.7 24 24zm0-80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm-80 160c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm0-80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm0-80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm-80 160c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm0-80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm0-80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm-48-80v-48c0-8.8 7.2-16 16-16h176c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H168c-8.8 0-16-7.2-16-16z"}}]})(props);
};
function IoIosCalendar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M424 96h-40v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V96H160v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V96H88c-22 0-40 18-40 40v272c0 22 18 40 40 40h336c22 0 40-18 40-40V136c0-22-18-40-40-40zm8 300c0 11-9 20-20 20H100c-11 0-20-9-20-20V216c0-4.4 3.6-8 8-8h336c4.4 0 8 3.6 8 8v180zM160 72c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V72zM384 72c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V72z"}}]})(props);
};
function IoIosCall (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M436.9 364.8c-14.7-14.7-50-36.8-67.4-45.1-20.2-9.7-27.6-9.5-41.9.8-11.9 8.6-19.6 16.6-33.3 13.6-13.7-2.9-40.7-23.4-66.9-49.5-26.2-26.2-46.6-53.2-49.5-66.9-2.9-13.8 5.1-21.4 13.6-33.3 10.3-14.3 10.6-21.7.8-41.9C184 125 162 89.8 147.2 75.1c-14.7-14.7-18-11.5-26.1-8.6 0 0-12 4.8-23.9 12.7-14.7 9.8-22.9 18-28.7 30.3-5.7 12.3-12.3 35.2 21.3 95 27.1 48.3 53.7 84.9 93.2 124.3l.1.1.1.1c39.5 39.5 76 66.1 124.3 93.2 59.8 33.6 82.7 27 95 21.3 12.3-5.7 20.5-13.9 30.3-28.7 7.9-11.9 12.7-23.9 12.7-23.9 2.9-8.1 6.2-11.4-8.6-26.1z"}}]})(props);
};
function IoIosCamera (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"circle","attr":{"cx":"256","cy":"275","r":"57.5"}},{"tag":"path","attr":{"d":"M417.5 160H363c-4.6 0-8.9-2-12-5.4-28.4-31.8-39.1-42.6-50.7-42.6h-85.5c-11.7 0-23.2 10.8-51.7 42.7-3 3.4-7.4 5.3-11.9 5.3h-4.1v-8c0-4.4-3.6-8-8-8h-26c-4.4 0-8 3.6-8 8v8h-7.5C79.9 160 64 173.2 64 190.7v176c0 17.5 15.9 33.3 33.5 33.3h320c17.6 0 30.5-15.8 30.5-33.3v-176c0-17.5-12.9-30.7-30.5-30.7zM260 360.4c-50.3 2.3-91.7-39.1-89.4-89.4 2-43.9 37.5-79.4 81.4-81.4 50.3-2.3 91.7 39.1 89.4 89.4-2 43.9-37.5 79.4-81.4 81.4zM352 218c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13z"}}]})(props);
};
function IoIosCar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M416 196.2c-13.8-30.8-49-92.2-100-92.2H196c-51 0-84.8 59.4-100 92.2-24 23-48 45.7-48 84.8v76c0 3.7 2.6 7 6.2 7.8C69.1 368.2 116.4 375 256 375s186.9-6.8 201.8-10.2c3.6-.8 6.2-4.1 6.2-7.8v-76c0-39-22.3-63.1-48-84.8zM190 128h132c40.5 0 62 60 62 70H128c0-10 27-70 62-70zm-78 203.7c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32c0 17.6-14.3 32-32 32zM328 300c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16s7.2-16 16-16h112c8.8 0 16 7.2 16 16zm72 32c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zM160 384c-47.9 0-96-5-96-5 0 17-.3 29 6 29h85c6.3 0 5-13.2 5-24zM352 384c48 0 96-5 96-5 0 16 2 29-5 29h-86c-6.7 0-5-13.5-5-24z"}}]})(props);
};
function IoIosCard (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M480 128c0-17.6-14.4-32-32-32H64c-17.6 0-32 14.4-32 32v48h448v-48zM32 384c0 17.6 14.4 32 32 32h384c17.6 0 32-14.4 32-32V224H32v160zm142-48h164c7.7 0 14 6.3 14 14s-6.3 14-14 14H174c-7.7 0-14-6.3-14-14s6.3-14 14-14zm-72 0h12c7.7 0 14 6.3 14 14s-6.3 14-14 14h-12c-7.7 0-14-6.3-14-14s6.3-14 14-14z"}}]})(props);
};
function IoIosCart (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"ellipse","attr":{"transform":"rotate(-1.057 159.995 423.97) scale(.99997)","cx":"160","cy":"424","rx":"24","ry":"24"}},{"tag":"ellipse","attr":{"transform":"matrix(.02382 -.9997 .9997 .02382 -48.51 798.282)","cx":"384.5","cy":"424","rx":"24","ry":"24"}},{"tag":"path","attr":{"d":"M463.8 132.2c-.7-2.4-2.8-4-5.2-4.2L132.9 96.5c-2.8-.3-6.2-2.1-7.5-4.7-3.8-7.1-6.2-11.1-12.2-18.6-7.7-9.4-22.2-9.1-48.8-9.3-9-.1-16.3 5.2-16.3 14.1 0 8.7 6.9 14.1 15.6 14.1s21.3.5 26 1.9c4.7 1.4 8.5 9.1 9.9 15.8 0 .1 0 .2.1.3.2 1.2 2 10.2 2 10.3l40 211.6c2.4 14.5 7.3 26.5 14.5 35.7 8.4 10.8 19.5 16.2 32.9 16.2h236.6c7.6 0 14.1-5.8 14.4-13.4.4-8-6-14.6-14-14.6H188.9c-2 0-4.9 0-8.3-2.8-3.5-3-8.3-9.9-11.5-26l-4.3-23.7c0-.3.1-.5.4-.6l277.7-47c2.6-.4 4.6-2.5 4.9-5.2l16-115.8c.2-.8.2-1.7 0-2.6z"}}]})(props);
};
function IoIosCash (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M466 355.9H46c-7.7 0-14 6.3-14 14s6.3 14 14 14h420c7.7 0 14-6.3 14-14s-6.3-14-14-14zM466 403.9H46c-7.7 0-14 6.3-14 14s6.3 14 14 14h420c7.7 0 14-6.3 14-14s-6.3-14-14-14zM444.9 80.1H67.1C47.8 80.1 32 95.9 32 115.2V293c0 19.3 15.8 35.1 35.1 35.1h377.8c19.3 0 35.1-15.8 35.1-35.1V115.2c0-19.3-15.8-35.1-35.1-35.1zM114 296.1H78c-7.7 0-14-6.3-14-14s6.3-14 14-14h36c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-156H78c-7.7 0-14-6.3-14-14s6.3-14 14-14h36c7.7 0 14 6.3 14 14s-6.3 14-14 14zm142 144c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zm178 12h-36c-7.7 0-14-6.3-14-14s6.3-14 14-14h36c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-156h-36c-7.7 0-14-6.3-14-14s6.3-14 14-14h36c7.7 0 14 6.3 14 14s-6.3 14-14 14z"}},{"tag":"circle","attr":{"cx":"256","cy":"206","r":"53"}}]})(props);
};
function IoIosCellular (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M408.4 51.8c-2.6-2.5-6.1-3.8-9.7-3.8-3.7 0-7.2 1.4-9.9 3.9-2.7 2.6-4.1 6-4.1 9.6 0 3.6 1.5 7 4.2 9.6 30.4 28.5 47.1 66.5 47.1 107.1 0 40.5-16.7 78.5-47.1 107.1-2.7 2.5-4.2 5.9-4.2 9.6 0 3.6 1.4 7 4.1 9.6 2.6 2.5 6.1 3.9 9.9 3.9 3.7 0 7.1-1.4 9.7-3.8C444.3 271 464 226.1 464 178.2v-.1c0-47.9-19.8-92.7-55.6-126.3z"}},{"tag":"path","attr":{"d":"M351 96.8c-2.4-2.3-5.6-3.5-9-3.5-3.3 0-6.5 1.2-8.9 3.4-2.5 2.3-3.9 5.4-3.9 8.7 0 3.3 1.3 6.4 3.8 8.7 18 17 27.8 39.8 27.8 64 0 24.2-9.9 47-27.8 64-2.5 2.3-3.8 5.4-3.8 8.7 0 3.3 1.4 6.4 3.9 8.7 2.4 2.2 5.5 3.4 8.9 3.4 3.4 0 6.6-1.3 9-3.5 22.8-21.7 35.4-50.5 35.4-81.3v-.1c0-30.7-12.6-59.5-35.4-81.2zM123.1 71.1c2.7-2.5 4.2-5.9 4.2-9.6 0-3.6-1.4-7-4.1-9.6-2.6-2.5-6.1-3.9-9.9-3.9-3.7 0-7.1 1.4-9.7 3.8C67.7 85.4 48 130.3 48 178.2v.2c0 47.8 19.8 92.6 55.6 126.2 2.6 2.5 6.1 3.8 9.7 3.8 3.7 0 7.2-1.4 9.9-3.9 2.7-2.6 4.1-6 4.1-9.6 0-3.6-1.5-7-4.2-9.6C92.7 256.8 76 218.8 76 178.2c-.1-40.6 16.7-78.6 47.1-107.1z"}},{"tag":"path","attr":{"d":"M179 114.1c2.5-2.3 3.8-5.4 3.8-8.7 0-3.3-1.4-6.4-3.9-8.7-2.4-2.2-5.5-3.4-8.9-3.4-3.4 0-6.6 1.3-9 3.5-22.8 21.7-35.4 50.5-35.4 81.3v.1c0 30.8 12.6 59.6 35.4 81.2 2.4 2.3 5.6 3.5 9 3.5 3.3 0 6.5-1.2 8.9-3.4 2.5-2.3 3.9-5.4 3.9-8.7 0-3.3-1.3-6.4-3.8-8.7-18-17-27.8-39.8-27.8-64-.1-24.2 9.8-46.9 27.8-64zM256 123.2c-26.5 0-48 21.5-48 48 0 21.6 14.3 39.9 34 45.9v233c0 7.7 6.3 13.9 14 13.9s14-6.2 14-13.9v-233c19.7-6 34-24.3 34-45.9 0-26.5-21.5-48-48-48z"}}]})(props);
};
function IoIosChatboxes (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M425.9 170.4H204.3c-21 0-38.1 17.1-38.1 38.1v154.3c0 21 17.1 38 38.1 38h126.8c2.8 0 5.6 1.2 7.6 3.2l63 58.1c3.5 3.4 9.3 2 9.3-2.9v-50.6c0-6 3.8-7.9 9.8-7.9h1c21 0 42.1-16.9 42.1-38V208.5c.1-21.1-17-38.1-38-38.1z"}},{"tag":"path","attr":{"d":"M174.4 145.9h177.4V80.6c0-18-14.6-32.6-32.6-32.6H80.6C62.6 48 48 62.6 48 80.6v165.2c0 18 14.6 32.6 32.6 32.6h61.1v-99.9c.1-18 14.7-32.6 32.7-32.6z"}}]})(props);
};
function IoIosChatbubbles (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M431 320.6c0-4.4 1.2-8.6 3.3-12.2.6-1.1 1.4-2.1 2.1-3.1 17.4-26 27.6-57.1 27.6-90.3.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9-2.4 11.1-3.7 22.4-3.7 34.2 0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7 11.3-3.1 22.5-7.2 25.4-8.3 2.9-1.1 6.1-1.7 9.3-1.7 3.6 0 7 .7 10.1 2l56.7 20.1s2.4 1 3.9 1c4.4 0 8-3.5 8-8 0-1-.5-2.7-.5-2.7L431 320.6z"}},{"tag":"path","attr":{"d":"M318.5 392.5c-3.6 1-8.2 2.1-13.2 3.2-10.5 2.2-23.9 4.5-34 4.5-96.2 0-171-76.8-171-169.1 0-6.6.7-15 1.5-21.4.6-4.3 1.3-8.6 2.3-12.8 1-4.5 2.2-9 3.5-13.4l-8 7.1C66.8 219.2 48 260 48 302.5c0 29.3 8.5 57.5 24.8 82 2.3 3.5 3.6 6.2 3.2 8-.4 1.8-11.9 62-11.9 62-.6 2.9.5 5.8 2.7 7.7 1.5 1.2 3.3 1.8 5.1 1.8 1 0 2-.2 2.9-.6l56.1-22.1c1.8-.7 3.7-1.1 5.7-1.1 0 0 2.4-.2 6.3 1.3 18.9 7.4 39.8 12 60.7 12 46.6 0 90.4-20.1 120.1-55.1 0 0 3.2-4.4 6.9-9.6-3.7 1.3-7.9 2.6-12.1 3.7z"}}]})(props);
};
function IoIosCheckboxOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M416 64H96c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm4 348c0 4.4-3.6 8-8 8H100c-4.4 0-8-3.6-8-8V100c0-4.4 3.6-8 8-8h312c4.4 0 8 3.6 8 8v312z"}},{"tag":"path","attr":{"d":"M363.6 192.9L346 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"}}]})(props);
};
function IoIosCheckbox (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M416 64H96c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-52.5 134.5L229.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"}}]})(props);
};
function IoIosCheckmarkCircleOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"}},{"tag":"path","attr":{"d":"M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}}]})(props);
};
function IoIosCheckmarkCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"}}]})(props);
};
function IoIosCheckmark (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"}}]})(props);
};
function IoIosClipboard (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M140.5 160v240c0 8.8 7.2 16 16 16h200c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16h-200c-8.8 0-16 7.2-16 16zM321.5 81h-17c0-5.6-1-11-2.7-16-2.1-6-5.3-11.4-9.4-16-8.8-9.9-21.6-17-35.9-17s-27.1 7.1-35.9 17c-4.1 4.6-7.3 10-9.4 16-1.7 5-2.7 10.4-2.7 16H194c-9.6 0-17.5 7.9-17.5 17.5V114c0 1.1.9 2 2 2h156c1.1 0 2-.9 2-2V96c0-8.3-6.7-15-15-15zm-62.9 15.5c-10.5 1.3-19.3-7.5-17.9-17.9.9-7.1 6.7-12.9 13.8-13.8 10.5-1.3 19.3 7.5 17.9 17.9-.9 7.2-6.7 12.9-13.8 13.8z"}},{"tag":"path","attr":{"d":"M400 48h-75.2c-1.7 0-2.6 1.9-1.6 3.2 2.9 3.9 5.3 8.1 7 12.8.3.8 1 1.3 1.9 1.3h.5c18.7 0 26.9 14.9 27.5 33.5V114c0 1.1.9 2 2 2h20.3c8.8 0 16 7.2 16 16v297.4c0 8.8-7.2 16-16 16h-253c-8.8 0-16-7.2-16-16V132c0-8.8 7.2-16 16-16h21.3c1.1 0 2-.9 2-2v-8.8c0-19.1 5.6-36.7 27.6-36.7h.3c.9 0 1.8-.6 1.9-1.6 1.5-6.9 4.1-11.7 7.2-15.8 1-1.3.1-3.2-1.6-3.2l-76.3-.1C94.3 47.9 80 62.1 80 79.7V424c0 41.7 14.3 56 32 56h288.5c17.4 0 31.5-14.1 31.5-31.5V80c0-17.7-14.3-32-32-32z"}}]})(props);
};
function IoIosClock (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M403.1 108.9c-81.2-81.2-212.9-81.2-294.2 0-81.3 81.2-81.2 212.9 0 294.2 81.2 81.2 212.9 81.2 294.2 0 81.2-81.2 81.2-213 0-294.2zM89.6 263.8c-5.6 1.1-10.5-3.8-9.4-9.4.6-3.1 3.1-5.7 6.3-6.3 5.6-1.1 10.5 3.8 9.4 9.4-.6 3.2-3.2 5.7-6.3 6.3zm26.2 82.2c-4.3 3.7-11 1.9-12.8-3.5-1-3-.1-6.5 2.3-8.5 4.3-3.7 11-1.9 12.8 3.5 1 3 .1 6.4-2.3 8.5zm2.3-171.5c-1.9 5.4-8.5 7.2-12.8 3.5-2.4-2.1-3.3-5.5-2.3-8.5 1.9-5.4 8.5-7.2 12.8-3.5 2.4 2.1 3.3 5.5 2.3 8.5zM179.6 404c-1.9 5.4-8.5 7.2-12.8 3.5-2.4-2.1-3.3-5.5-2.3-8.5 1.9-5.4 8.5-7.2 12.8-3.5 2.4 2.1 3.3 5.5 2.3 8.5zm-2.3-287.5c-4.3 3.7-11 1.9-12.8-3.5-1-3-.1-6.5 2.3-8.5 4.3-3.7 11-1.9 12.8 3.5 1 3 .1 6.4-2.3 8.5zm35.4 76.3c-2.3-3.8-1-8.7 2.7-11 3.8-2.3 8.7-1 11 2.7l33.7 62.3c2.5 4.7 3.9 9.9 3.9 15.2v122c0 5-3 8-8 8s-8-3-8-8V262c0-2.7-.7-5.3-1.9-7.6l-33.4-61.6zm44.9 239c-5.6 1.1-10.5-3.8-9.4-9.4.6-3.1 3.1-5.7 6.3-6.3 5.6-1.1 10.5 3.8 9.4 9.4-.6 3.2-3.2 5.7-6.3 6.3zm0-336c-5.6 1.1-10.5-3.8-9.4-9.4.6-3.1 3.1-5.7 6.3-6.3 5.6-1.1 10.5 3.8 9.4 9.4-.6 3.2-3.2 5.7-6.3 6.3zm87.7 311.7c-4.3 3.7-11 1.9-12.8-3.5-1-3-.1-6.5 2.3-8.5 4.3-3.7 11-1.9 12.8 3.5 1 3 .1 6.4-2.3 8.5zm2.3-294.5c-1.9 5.4-8.5 7.2-12.8 3.5-2.4-2.1-3.3-5.5-2.3-8.5 1.9-5.4 8.5-7.2 12.8-3.5 2.4 2.1 3.3 5.5 2.3 8.5zm61.5 229.5c-1.9 5.4-8.5 7.2-12.8 3.5-2.4-2.1-3.3-5.5-2.3-8.5 1.9-5.4 8.5-7.2 12.8-3.5 2.4 2.1 3.3 5.5 2.3 8.5zM406.8 178c-4.3 3.7-11 1.9-12.8-3.5-1-3-.1-6.5 2.3-8.5 4.3-3.7 11-1.9 12.8 3.5 1 3 .1 6.4-2.3 8.5zm18.8 85.8c-5.6 1.1-10.5-3.8-9.4-9.4.6-3.1 3.1-5.7 6.3-6.3 5.6-1.1 10.5 3.8 9.4 9.4-.6 3.2-3.2 5.7-6.3 6.3z"}}]})(props);
};
function IoIosCloseCircleOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z"}},{"tag":"path","attr":{"d":"M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}}]})(props);
};
function IoIosCloseCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"}}]})(props);
};
function IoIosClose (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"}}]})(props);
};
function IoIosCloudCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm82.6 272H173.4c-25.1 0-45.4-21.4-45.4-47.2 0-21 13.2-39.8 33.2-46.2.3-20 16.2-36.1 35.7-36.1 5.3 0 10.4 1.2 14.9 3.4 13.1-20.5 36.9-33.8 62.5-33.8 37.7 0 67.5 29.3 71.4 66.9 21.7 3.5 38.3 22.7 38.3 45.9 0 25.7-20.3 47.1-45.4 47.1z"}}]})(props);
};
function IoIosCloudDone (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M437.1 229.8C429 154.6 365.4 96 288 96c-51.2 0-96.3 25.6-123.4 64.7-8.3-3.4-17.4-5.3-26.9-5.3-39.1 0-70.8 34.4-71.4 73.4C26.4 241.5 0 280.5 0 321.5 0 371.7 40.7 416 90.9 416h330.3c50.2 0 90.9-44.3 90.9-94.5-.1-44.7-32.4-84.1-75-91.7zm-74.6-17.3L228.8 346.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"}}]})(props);
};
function IoIosCloudDownload (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M437.1 165.8C429 90.6 365.4 32 288 32c-51.2 0-96.3 25.6-123.4 64.7-8.3-3.4-17.4-5.3-26.9-5.3-39.1 0-70.8 34.4-71.4 73.4C26.4 177.5 0 216.5 0 257.5 0 307.7 40.7 352 90.9 352H243V211c0-7.2 5.8-13 13-13s13 5.8 13 13v141h152.1c50.2 0 90.9-44.3 90.9-94.5 0-44.7-32.3-84.1-74.9-91.7zM243 435.9l-47.9-47.2c-5.1-5-13.3-5-18.4.1-5 5.1-5 13.3.1 18.4l70 69c2.5 2.4 5.8 3.7 9.1 3.7 1.7 0 3.4-.3 5-1 1.5-.6 2.9-1.6 4.1-2.7l70-69c5.1-5 5.2-13.3.1-18.4-5-5.1-13.3-5.2-18.4-.1L269 435.9V352h-26v83.9z"}}]})(props);
};
function IoIosCloudOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M288 124c30.3 0 59.3 11.2 81.8 31.5 22.3 20.1 36.3 47.6 39.5 77.3l1.2 11.1c.6 5.8 5 10.5 10.7 11.5l11 2c14 2.5 27 10.4 36.7 22.1 9.8 12 15.2 26.9 15.2 42.1 0 17-6.9 34.1-18.9 46.8C453 381 437.4 388 421.1 388H90.9c-16.3 0-31.9-7-43.9-19.7s-18.9-29.7-18.9-46.8c0-14.4 4.6-28.9 13.1-40.9 8.6-12.2 20.2-20.9 33.7-25.1l10.3-3.3c5.3-1.7 9-6.6 9.1-12.2l.2-10.8c.2-11.8 5.1-23.6 13.5-32.4 8.3-8.7 18.9-13.4 29.9-13.4 5.6 0 11.1 1.1 16.3 3.2l11.1 4.5c5.7 2.3 12.2.4 15.7-4.7l6.8-9.8C210.4 143.7 248 124 288 124m0-28c-51.2 0-96.3 25.6-123.4 64.7-8.3-3.4-17.4-5.3-26.9-5.3-39.1 0-70.8 34.4-71.4 73.4C26.4 241.5 0 280.5 0 321.5 0 371.7 40.7 416 90.9 416h330.3c50.2 0 90.9-44.3 90.9-94.5 0-44.7-32.3-84.1-74.9-91.7C429 154.6 365.4 96 288 96z"}}]})(props);
};
function IoIosCloudUpload (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M437.1 165.8C429 90.6 365.4 32 288 32c-51.2 0-96.3 25.6-123.4 64.7-8.3-3.4-17.4-5.3-26.9-5.3-39.1 0-70.8 34.4-71.4 73.4C26.4 177.5 0 216.5 0 257.5 0 307.7 40.7 352 90.9 352H243V210.1l-47.9 47.2c-5.1 5-13.3 5-18.4-.1-5-5.1-5-13.3.1-18.4l70-69c1.2-1.1 2.5-2.1 4.1-2.7 1.6-.7 3.3-1 5-1 3.4 0 6.6 1.3 9.1 3.7l70 69c5.1 5 5.2 13.3.1 18.4-5 5.1-13.3 5.2-18.4.1L269 210.1V352h152.1c50.2 0 90.9-44.3 90.9-94.5 0-44.7-32.3-84.1-74.9-91.7zM243 467c0 7.2 5.8 13 13 13s13-5.8 13-13V352h-26v115z"}}]})(props);
};
function IoIosCloud (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M437.1 229.8C429 154.6 365.4 96 288 96c-51.2 0-96.3 25.6-123.4 64.7-8.3-3.4-17.4-5.3-26.9-5.3-39.1 0-70.8 34.4-71.4 73.4C26.4 241.5 0 280.5 0 321.5 0 371.7 40.7 416 90.9 416h330.3c50.2 0 90.9-44.3 90.9-94.5-.1-44.7-32.4-84.1-75-91.7z"}}]})(props);
};
function IoIosCloudyNight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M277.8 294.8c-.5 0-1.1-.1-1.6-.1-2.6 0-5.2 0-7.8.3-9.3-40.8-45.9-71.5-89.7-71.5-50.8 0-91.9 40.9-91.9 91.4 0 3.1.2 6.1.5 9.1-31 2.7-55.3 30.1-55.3 61.6C32 419 58.8 448 92.3 448h185.5c41.9 0 75.8-34.7 75.8-76.3 0-41.6-33.9-76.9-75.8-76.9z"}},{"tag":"path","attr":{"d":"M452.1 305.4c-2.5.1-5 .2-7.6.2-41.7 0-80.8-15.7-110.3-44.3-29.5-28.5-45.7-66.5-45.7-106.8 0-23 5.3-45.2 15.2-65.3L315.4 70c1.7-2.9-.8-6.5-4.1-6-7.6 1.2-15.7 4-23.2 6.3-59.5 18.2-104.4 68.1-113.7 129.3 1.4-.1 2.9-.1 4.3-.1 26.5 0 52.4 9.2 73 25.9 15.1 12.2 26.9 28 34.2 45.7 23.7 2 45.7 12.4 62.7 29.8 18.7 19.1 29 44.2 29 70.7 0 2.3-.1 4.6-.2 6.8 34.2-8.1 64.3-26.6 86.4-51.8 4.8-5.5 11.3-12.8 15.3-18.5 2-2.8-.3-6.7-3.8-6.3-6.8 1-15.9 3.2-23.2 3.6z"}}]})(props);
};
function IoIosCloudy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M236 96c-70 0-127.8 59.7-127.8 130.8 0 4.3.3 8.6.8 12.8-43.2 3.9-77 44-77 88.4 0 47 37.9 88 84.6 88h257.8c58.3 0 105.6-49.4 105.6-108s-47.3-108.8-105.6-108.8c-2.3 0-4.8-.2-7.2-.2-2.1 0-4.2 0-6.1.1C349.3 145.6 306 96 236 96z"}}]})(props);
};
function IoIosCodeDownload (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M332 142.7c-1.2-1.1-2.7-1.7-4.1-1.7s-3 .6-4.1 1.7L310 155.9c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l95.8 91.5-95.8 91.5c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l13.8 13.2c1.2 1.1 2.6 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l114.2-109c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3L332 142.7zM106.3 256l95.8-91.5c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3l-13.8-13.2c-1.2-1.1-2.7-1.7-4.1-1.7s-3 .6-4.1 1.7l-114.2 109c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l114.2 109c1.2 1.1 2.7 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l13.8-13.2c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3L106.3 256z"}},{"tag":"path","attr":{"d":"M332.8 267.2c.1-3.9-1.4-7.6-4.2-10.4l-.1-.1c-2.7-2.7-6.2-4.2-10-4.2-3.5 0-6.8 1.3-9.4 3.6l-38.9 34.6V184.6c0-7.8-6.4-14.2-14.2-14.2-7.8 0-14.2 6.4-14.2 14.2v106.2l-38.9-34.6c-2.6-2.3-6-3.6-9.4-3.6-3.8 0-7.4 1.5-10.1 4.2l-.1.1c-2.8 2.8-4.2 6.4-4.2 10.4.1 3.9 1.7 7.5 4.6 10.2l62.8 57.7c2.6 2.4 6 3.7 9.5 3.7s6.9-1.3 9.5-3.7l62.8-57.7c2.8-2.8 4.5-6.4 4.5-10.3z"}}]})(props);
};
function IoIosCodeWorking (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M446.1 251.6L332 142.7c-1.2-1.1-2.7-1.7-4.1-1.7s-3 .6-4.1 1.7L310 155.9c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l95.8 91.5-95.8 91.5c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l13.8 13.2c1.2 1.1 2.6 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l114.2-109c1.2-1.1 1.9-2.7 1.9-4.3-.1-1.7-.8-3.2-2-4.4zM106.3 256l95.8-91.5c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3l-13.8-13.2c-1.2-1.1-2.7-1.7-4.1-1.7s-3 .6-4.1 1.7l-114.2 109c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l114.2 109c1.2 1.1 2.7 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l13.8-13.2c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3L106.3 256z"}},{"tag":"circle","attr":{"cx":"256","cy":"256","r":"22"}},{"tag":"circle","attr":{"cx":"192","cy":"256","r":"22"}},{"tag":"circle","attr":{"cx":"320","cy":"256","r":"22"}}]})(props);
};
function IoIosCode (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M332 142.7c-1.2-1.1-2.7-1.7-4.1-1.7s-3 .6-4.1 1.7L310 155.9c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l95.8 91.5-95.8 91.5c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l13.8 13.2c1.2 1.1 2.6 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l114.2-109c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3L332 142.7zM204 160.2c0-1.6-.7-3.2-1.9-4.3l-13.8-13.2c-1.2-1.1-2.7-1.7-4.1-1.7s-3 .6-4.1 1.7l-114.2 109c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l114.2 109c1.2 1.1 2.7 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l13.8-13.2c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3L106.3 256l95.8-91.5c1.2-1.1 1.9-2.7 1.9-4.3z"}}]})(props);
};
function IoIosCog (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M456.9 242.2l-26.1-4.2c-3.5-.6-6.1-3.3-6.6-6.8-.5-3.2-1-6.4-1.7-9.5-.7-3.4.9-6.9 3.9-8.6l23.1-12.8c3.6-1.8 5.3-6.1 3.9-9.9l-4-11c-1.4-3.8-5.4-6-9.4-5l-25.9 5c-3.4.7-6.9-1-8.6-4.1-1.5-2.8-3.1-5.6-4.8-8.4-1.8-3-1.6-6.8.7-9.5l17.3-19.9c2.8-3 2.9-7.5.3-10.6l-7.5-9c-2.6-3.1-7.1-3.8-10.5-1.5L378.3 130c-3 1.8-6.8 1.4-9.4-.9-2.4-2.1-4.9-4.2-7.4-6.2-2.7-2.2-3.8-5.9-2.5-9.1l9.4-24.7c1.6-3.7.2-8.1-3.3-10.1l-10.2-5.9c-3.5-2-8-1.1-10.4 2.2l-16.6 20.8c-2 2.5-4.9 3.8-8.5 2.5 0 0-5.6-2.3-9.8-3.7-3.3-1.1-5.6-4.2-5.5-7.7l.4-26.4c.2-4.1-2.6-7.7-6.6-8.4l-11.6-2c-4-.7-7.9 1.7-9.1 5.6l-8.6 25c-1.1 3.3-4.3 5.5-7.8 5.4-1.6 0-3.3-.1-4.9-.1s-3.3 0-4.9.1c-3.5.1-6.6-2.1-7.8-5.4l-8.6-25c-1.2-3.9-5.1-6.3-9.1-5.6l-11.6 2c-4 .7-6.8 4.3-6.6 8.4l.4 26.4c.1 3.5-2.1 6.4-5.5 7.7-2.3.9-7.3 2.8-9.7 3.7-2.8 1-6.1.2-8.8-2.9l-16.5-20.3c-2.4-3.3-6.9-4.2-10.4-2.2l-10.2 5.9c-3.5 2-5 6.4-3.3 10.1l9.4 24.7c1.2 3.3.2 7-2.5 9.1-2.5 2-5 4.1-7.4 6.2-2.6 2.3-6.4 2.7-9.4.9L111 116.3c-3.4-2.2-7.9-1.6-10.5 1.5l-7.5 9c-2.6 3.1-2.5 7.7.3 10.6l17.3 19.9c2.3 2.6 2.6 6.5.7 9.5-1.7 2.7-3.3 5.5-4.8 8.4-1.7 3.1-5.1 4.7-8.6 4.1l-25.9-5c-4-.9-8 1.2-9.4 5l-4 11c-1.4 3.8.3 8.1 3.9 9.9L85.6 213c3.1 1.7 4.6 5.2 3.9 8.6-.6 3.2-1.2 6.3-1.7 9.5-.5 3.5-3.2 6.2-6.6 6.8l-26.1 4.2c-4 .5-7.1 3.9-7.1 7.9v11.7c0 4.1 3 7.5 7.1 7.9l26.1 4.2c3.5.6 6.1 3.3 6.6 6.8.5 3.2 1 6.4 1.7 9.5.7 3.4-.9 6.9-3.9 8.6l-23.1 12.8c-3.6 1.8-5.3 6.1-3.9 9.9l4 11c1.4 3.8 5.4 6 9.4 5l25.9-5c3.4-.7 6.9 1 8.6 4.1 1.5 2.8 3.1 5.6 4.8 8.4 1.8 3 1.6 6.8-.7 9.5l-17.3 19.9c-2.8 3-2.9 7.5-.3 10.6l7.5 9c2.6 3.1 7.1 3.8 10.5 1.5l22.7-13.6c3-1.8 6.8-1.4 9.4.9 2.4 2.1 4.9 4.2 7.4 6.2 2.7 2.2 3.8 5.9 2.5 9.1l-9.4 24.7c-1.6 3.7-.2 8.1 3.3 10.1l10.2 5.9c3.5 2 8 1.1 10.4-2.2l16.8-20.6c2.1-2.6 5.5-3.7 8.2-2.6 3.4 1.4 5.7 2.2 9.9 3.6 3.3 1.1 5.6 4.2 5.5 7.7l-.4 26.4c-.2 4.1 2.6 7.7 6.6 8.4l11.6 2c4 .7 7.9-1.7 9.1-5.6l8.6-25c1.1-3.3 4.3-5.5 7.8-5.4 1.6 0 3.3.1 4.9.1s3.3 0 4.9-.1c3.5-.1 6.6 2.1 7.8 5.4l8.6 25c1.2 3.9 5.1 6.3 9.1 5.6l11.6-2c4-.7 6.8-4.3 6.6-8.4l-.4-26.4c-.1-3.5 2.2-6.6 5.5-7.7 4.2-1.4 7-2.5 9.6-3.5 2.6-.9 5.8-1 8.3 2.1l17 20.9c2.4 3.3 6.9 4.2 10.4 2.2l10.2-5.9c3.5-2 5-6.4 3.3-10.1l-9.4-24.7c-1.2-3.3-.2-7 2.5-9.1 2.5-2 5-4.1 7.4-6.2 2.6-2.3 6.4-2.7 9.4-.9l22.7 13.6c3.4 2.2 7.9 1.6 10.5-1.5l7.5-9c2.6-3.1 2.5-7.7-.3-10.6l-17.3-19.9c-2.3-2.6-2.6-6.5-.7-9.5 1.7-2.7 3.3-5.5 4.8-8.4 1.7-3.1 5.1-4.7 8.6-4.1l25.9 5c4 .9 8-1.2 9.4-5l4-11c1.4-3.8-.3-8.1-3.9-9.9l-23.1-12.8c-3.1-1.7-4.6-5.2-3.9-8.6.6-3.2 1.2-6.3 1.7-9.5.5-3.5 3.2-6.2 6.6-6.8l26.1-4.2c4-.5 7.1-3.9 7.1-7.9v-11.7c-.2-3.8-3.2-7.3-7.3-7.7zM181.8 356.9c-5.2 9-17.4 10.7-25 3.6C129.2 334.2 112 297.1 112 256c0-40.9 17.1-77.9 44.5-104.1 7.5-7.2 19.8-5.5 25 3.5l56 96.6c1.4 2.5 1.4 5.5 0 8l-55.7 96.9zM396 289.7C380.9 353 323.9 400 256 400c-14.1 0-27.8-2-40.6-5.8-9.9-2.9-14.5-14.4-9.3-23.3l55.7-96.9c1.4-2.5 4.1-4 6.9-4h111.7c10.4 0 18 9.6 15.6 19.7zM380.5 242H268.7c-2.9 0-5.5-1.5-6.9-4l-56.1-96.7c-5.2-8.9-.7-20.4 9.2-23.4 13-3.9 26.8-5.9 41.1-5.9 67.9 0 124.9 47 140 110.3 2.4 10.1-5.2 19.7-15.5 19.7z"}}]})(props);
};
function IoIosColorFill (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M231.5 118.3c.1 0 .1-.1 0 0L175.3 62c-9.3-9.3-21.6-14-33.9-14-12.3 0-24.6 4.7-33.9 14-18.7 18.7-18.7 49.2 0 67.9l49.3 49.3-84.5 84c-11.1 11.1-11 29.2.3 40l131.2 126c10.9 10.4 28 10.4 38.9-.1 37.8-36.6 118.3-114.5 126.7-122.9 5.8-5.8 18.2-7.1 28.7-7.1h.3c5.9 0 8.8-7.1 4.6-11.2L231.5 118.3zm-103.9-7.9c-7.2-7.2-8.3-18.8-2-26.8 3.8-4.9 9.6-7.6 15.8-7.6 5.4 0 10.4 2.1 14.1 5.8l49.3 49.3-28.3 28.3-48.9-49zM403 339.5c-1.6-1.9-4.5-1.9-6.1 0-10.5 12.2-45 53.9-45 76.4 0 26.6 21.5 48.1 48 48.1s48-21.6 48-48.1c.1-22.6-34.3-64.2-44.9-76.4z"}}]})(props);
};
function IoIosColorFilter (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M442 248.9c-15.7-20.6-37.7-35.9-62.1-43.6 1-6.3 1.4-12.7 1.4-19.1 0-33.7-13-65.4-36.7-89.2C321 73.1 289.5 60 256 60s-65 13.1-88.6 37c-23.7 23.8-36.7 55.5-36.7 89.2 0 6.4.5 12.8 1.4 19.1-24.5 7.7-46.4 23.1-62.1 43.6-17 22.2-26 48.8-26 76.9 0 33.7 13 65.4 36.7 89.2 23.7 23.8 55.2 37 88.6 37 32.6 0 63.2-12.4 86.7-35 23.4 22.6 54.1 35 86.7 35 33.5 0 65-13.1 88.6-37 23.7-23.8 36.7-55.5 36.7-89.2 0-28.1-9-54.7-26-76.9zM256 85.5c55.1 0 100 45.2 100 100.7 0 4.7-.3 9.4-1 14.1-4.1-.4-8.2-.6-12.4-.6-32.6 0-63.2 12.4-86.7 35-23.4-22.6-54.1-35-86.7-35-4.1 0-8.3.2-12.4.6-.6-4.6-1-9.4-1-14.1.2-55.6 45.1-100.7 100.2-100.7zm0 201.4c-1.8 0-3.7-.1-5.5-.2 1.6-3.8 3.4-7.5 5.5-11.1 2.1 3.6 3.9 7.3 5.5 11.1-1.8.2-3.7.2-5.5.2zm-46.6 131.2c-12.7 5.6-26.1 8.4-40.1 8.4-55.1 0-100-45.2-100-100.7 0-22.3 7.1-43.5 20.6-61.2 12.3-16.1 29.4-28.3 48.5-34.6 6.6 17.9 17.3 34.3 31.2 47.6 13.9 13.4 30.9 23.4 49.2 29.1-1 6.3-1.4 12.7-1.4 19.1 0 25.8 7.7 50.6 22.2 71.7-8.8 8.7-19 15.6-30.2 20.6zM225.1 282c-27.6-9-50-29.8-61.3-56.7 1.8-.1 3.7-.2 5.5-.2 13.9 0 27.4 2.8 40.1 8.4 11.2 5 21.4 11.9 30.1 20.6-5.9 8.7-10.8 18-14.4 27.9zm30.9 94c-8.7-15.2-13.3-32.5-13.3-50.2 0-4.7.3-9.4 1-14.1a128.658 128.658 0 0 0 24.8 0c.6 4.6 1 9.4 1 14.1-.2 17.7-4.8 35-13.5 50.2zm46.6-142.5c12.7-5.6 26.1-8.4 40.1-8.4 1.8 0 3.7.1 5.5.2-11.3 26.9-33.7 47.7-61.3 56.7-3.6-9.8-8.5-19.2-14.4-27.9 8.7-8.7 18.9-15.6 30.1-20.6zm40.1 193c-13.9 0-27.4-2.8-40.1-8.4-11.2-5-21.4-11.9-30.1-20.6 14.5-21.1 22.2-45.8 22.2-71.7 0-6.4-.5-12.8-1.4-19.1 18.3-5.7 35.2-15.7 49.2-29.1 13.8-13.3 24.5-29.6 31.2-47.6 19.1 6.3 36.2 18.4 48.5 34.6 13.5 17.7 20.6 38.9 20.6 61.2-.1 55.6-45 100.7-100.1 100.7z"}}]})(props);
};
function IoIosColorPalette (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M430.1 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 12-36.6.1-47.7zM120 216c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm40 126c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm64-161c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm72 219c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm24-208c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]})(props);
};
function IoIosColorWand (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M445.7 405.6L201.3 160.4c-3.1-3.1-8.2-3.1-11.3 0l-28.7 28.8c-3.1 3.1-3.1 8.2 0 11.3l244.4 245.2c3.1 3.1 8.2 3.1 11.3 0l28.6-28.8c3.2-3.1 3.2-8.2.1-11.3zm-25.5 14.3l-.1.1c-3.1 3.1-8.2 3.1-11.3 0L218.9 229.5c-3.1-3.1-3.1-8.2 0-11.3l.1-.1c3.1-3.1 8.2-3.1 11.3 0l189.9 190.5c3.1 3.1 3.1 8.2 0 11.3zM192.8 120.1c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12s-12 5.4-12 12v32.1c0 6.6 5.4 12 12 12zM192.8 263.3c-6.6 0-12 5.4-12 12v32.1c0 6.6 5.4 12 12 12s12-5.4 12-12v-32.1c0-6.6-5.4-12-12-12zM270.7 190.2c0 6.6 5.4 12 12 12h32c6.6 0 12-5.4 12-12s-5.4-12-12-12h-32c-6.6 0-12 5.4-12 12zM119.9 190.2c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12s5.4 12 12 12h32c6.5 0 11.9-5.4 11.9-12zM124.8 141c2.3 2.3 5.3 3.5 8.5 3.5s6.2-1.3 8.5-3.5c4.7-4.7 4.7-12.3 0-17l-20.9-21c-2.3-2.3-5.3-3.5-8.5-3.5s-6.2 1.3-8.5 3.5c-4.7 4.7-4.7 12.3 0 17l20.9 21zM133.3 239.9c-3.2 0-6.2 1.3-8.5 3.5l-20.9 21c-2.3 2.3-3.5 5.3-3.5 8.5s1.2 6.2 3.5 8.5 5.3 3.5 8.5 3.5 6.2-1.3 8.5-3.5l20.9-21c4.7-4.7 4.7-12.3 0-17-2.3-2.2-5.3-3.5-8.5-3.5zM252.4 144.5c3.2 0 6.2-1.3 8.5-3.5l20.9-21c4.7-4.7 4.7-12.3 0-17-2.3-2.3-5.3-3.5-8.5-3.5s-6.2 1.3-8.5 3.5l-20.9 21c-2.3 2.3-3.5 5.3-3.5 8.5s1.2 6.2 3.5 8.5c2.3 2.2 5.3 3.5 8.5 3.5z"}}]})(props);
};
function IoIosCompass (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M280.5 280.5l-49-49c-.9-.9-2.5-.7-3.2.4l-49.5 98.5c-1.1 1.8 1 3.9 2.8 2.8l98.5-49.5c1.1-.7 1.3-2.3.4-3.2z"}},{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm40.6 249.3L137 377.8c-1.8 1.1-3.9-1-2.8-2.8l80.6-159.6c.2-.3.4-.5.7-.7L375 134.2c1.8-1.1 3.9 1 2.8 2.8l-80.6 159.6c-.1.3-.3.5-.6.7z"}}]})(props);
};
function IoIosConstruct (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M380 64.4zM275.1 57.6c-9.4-5.9-23.3-9.6-37.9-9.6-14.3 0-30.3 2.5-46.7 9.2-46.5 19-74 45.4-81.1 52.4-7 7-16.8 18-22.9 26.6-6.1 8.7 1.9 21-6.1 29s-24.7 0-24.7 0c-1.4 0-2.9.5-3.9 1.6l-34.1 33.9c-2.2 2.1-2.2 5.7 0 7.8l63.5 63.1c1.1 1.1 2.5 1.6 3.9 1.6s2.9-.5 3.9-1.6l33.2-34.8c2.2-2.1 2.2-5.7 0-7.8 0 0-5.3-5.2-12.1-12s.8-19.3 5.3-23.4c4.5-4.1 11.6-6.8 21.1-6.8 4.3 0 7.4.7 11.4 1.8 12.2 3.4 25.8 15.9 50.9 40.8l-3.9 6.5c-2.3 3.8-.9 8.3 1.3 10.4 0 0-5-4.9 13.1 13.1l50-47.2c-19.1-18.9-14.5-14.1-14.5-14.1-1.4-1.4-3.8-2.3-6.3-2.3-1.4 0-2.9.3-4.2 1l-5.6 3c-28-27.8-35.3-40.2-34.3-61.7 1.1-22.4 12.3-37.1 30.5-52.7 24.7-21.1 60.6-15.2 60.6-15.2 8-.1-4.2-8.6-10.4-12.6zM462.5 399.9s-68.9-57.2-130.2-115.7l-47.7 50.6c58.5 60.6 114.9 127.6 114.9 127.6 1.1 1.1 2.5 1.6 3.9 1.6s2.9-.5 3.9-1.6l55.1-54.7c2.2-2.1 2.2-5.7.1-7.8z"}},{"tag":"path","attr":{"d":"M479.2 125.3l-52.4 52.6-51.1-9.3-9.2-51.1 52.4-52.6c-11.1-11.1-26.8-16.6-39-16.6-.7 0-1.4 0-2 .1-12.5.6-39.2 7.7-59.9 29.7-20 21.1-41.1 60.6-22.4 104.3 2.2 5.3 4.7 12.2-2.7 19.7-1.5 1.4-9.9 9.4-22.5 21.3-3.6 3.4-7.4 7-11.6 11-8 7.6-17.1 16.2-26.8 25.2-3.8 3.6-7.7 7.2-11.6 11-57 53.8-126.9 119.5-126.9 119.5-18 15.5-16.7 44.1-.1 60.8 8.5 8.4 20 12.8 31.3 12.8 11 0 21.9-4.2 29.5-13.1 0 0 65.5-69.8 119.3-126.9 3.7-4 7.4-7.8 11-11.7 9.3-9.9 18-19.1 25.8-27.3 3.9-4.2 7.6-8.1 11-11.6 11.5-12.2 19.3-20.4 21-22 4-3.9 7.7-5.1 11.1-5.1 3.3 0 6.2 1.2 8.6 2.4 9.9 5.1 21 7.3 32.4 7.3 26.7 0 55-12.4 72.1-29.5 24.4-24.4 28.8-47.9 29.6-60 .6-11.8-3.6-27.6-16.9-40.9zM137.4 426.1c-5.5 5.4-14.4 5.4-19.8 0-5.4-5.5-5.4-14.4 0-19.8 5.5-5.4 14.4-5.4 19.8 0 5.4 5.5 5.4 14.4 0 19.8z"}}]})(props);
};
function IoIosContact (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C148.5 48 60.1 129.5 49.2 234.1c-.8 7.2-1.2 14.5-1.2 21.9 0 7.4.4 14.7 1.2 21.9C60.1 382.5 148.5 464 256 464c114.9 0 208-93.1 208-208S370.9 48 256 48zm135.8 326.1c-22.7-8.6-59.5-21.2-82.4-28-2.4-.7-2.7-.9-2.7-10.7 0-8.1 3.3-16.3 6.6-23.3 3.6-7.5 7.7-20.2 9.2-31.6 4.2-4.9 10-14.5 13.6-32.9 3.2-16.2 1.7-22.1-.4-27.6-.2-.6-.5-1.2-.6-1.7-.8-3.8.3-23.5 3.1-38.8 1.9-10.5-.5-32.8-14.9-51.3-9.1-11.7-26.6-26-58.5-28h-17.5c-31.4 2-48.8 16.3-58 28-14.5 18.5-16.9 40.8-15 51.3 2.8 15.3 3.9 35 3.1 38.8-.2.7-.4 1.2-.6 1.8-2.1 5.5-3.7 11.4-.4 27.6 3.7 18.4 9.4 28 13.6 32.9 1.5 11.4 5.7 24 9.2 31.6 2.6 5.5 3.8 13 3.8 23.6 0 9.9-.4 10-2.6 10.7-23.7 7-58.9 19.4-80 27.8C91.6 341.4 76 299.9 76 256c0-48.1 18.7-93.3 52.7-127.3S207.9 76 256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256c0 43.9-15.6 85.4-44.2 118.1z"}}]})(props);
};
function IoIosContacts (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm143.3 263.9c-8.1-2.6-23.7-3.4-29.5-10.4-2.9-3.5-1-16.6-1-16.6 25.2-1.4 31-6.1 31-6.1 3.9-2.3 2.1-2.7.1-6.1-10.9-18.3-6-41.5-6.5-61.6-.4-16.7-4.8-35-20-44.4-7.6-4.7-19.7-6.9-31.4-6.9-9.5 0-18.7 1.4-25.3 4.1-42.4 17-17.4 73.2-31.9 105.4-2.5 5.4-6.1 7.3.2 10.5 0 0 7.5 4.4 28.9 6.3 0 0 .3 12.6 0 13.9-1.1 4.9-11.8 8.3-15.8 9.4-2.7.7-8.7 2.5-16.4 5.7-3.7 1.5-3.1 6.9.8 7.6 3.9.7 8.1 1.7 11.5 2.9 0 0 26.4 6 46 25 13.2 12.7 18.1 27.6 20 44.6.5 4.5-1.7 8.9-5.5 11.5l-5.7 3.6c-1.9 1.1-4.2-.2-4.3-2.4 0-29.5-17.8-55.5-45.8-65.2-13.5-4.7-28.1-5-41.6-9.7-4.1-1.4-12.2-3.1-13.9-7.8-1.6-4.6-1.6-10-1.9-14.8-.2-3.8-.3-7.6-.3-11.4 0-2.5 6.4-7.8 7.8-10.1 5.4-9 5.9-21.1 6.9-31.3 8.7 2.4 9.8-13.7 11.3-18.6 1.1-3.4 5-20.9-2.6-23.6 2.5-4.4 3.5-9.8 4.2-14.7 2-12.8 2.8-26.8-1.1-39.3-8.1-26-33-40.6-59.3-41.4-26.7-.9-53.5 11.9-63.5 37.8-4.8 12.6-4.4 26.3-2.8 39.5.7 6 1.7 12.7 4.7 18.1-6.4 2.8-4.5 17.7-3.4 21.3 1.6 5.1 3 23.4 12.1 20.9.8 8.1 1.7 16.4 3.9 24.3 1.5 5.3 4.6 9.8 8.2 13.9 1.8 2 2.7 2.2 2.6 4.8-.1 7.8.1 16.2-1.9 23.8s-18.7 10.8-25.4 12.2c-14.8 3-28.6 4.7-41.4 11.5C84.8 320.6 76 289 76 256c0-47.9 19.2-94 53.2-127.7C162.7 95 207.1 76.4 254.3 76c47.6-.4 93.7 18.1 127.8 51.5 34.8 34.1 54 79.9 54 128.5 0 24.9-5 48.9-14.5 71.1-5.6-7-13.4-12.3-22.3-15.2z"}}]})(props);
};
function IoIosContract (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M184.3 204.8h-77.7c-7.7 0-13.9 6.2-13.9 13.9v.2c0 7.7 6.2 13.9 13.9 13.9h112.2c7.7 0 13.9-6.2 13.9-13.9V106.6c0-7.7-6.2-13.9-13.9-13.9h-.2c-7.7 0-13.9 6.2-13.9 13.9v77.7L87.7 68c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.4-9.8 4.1-5.4 5.4-5.4 14.2 0 19.6l116.2 117.1zM293.1 232.8h112.2c7.7 0 13.9-6.2 13.9-13.9v-.2c0-7.7-6.2-13.9-13.9-13.9h-77.7L444 87.7c5.4-5.4 5.4-14.2 0-19.6-2.6-2.6-6.1-4.1-9.8-4.1-3.7 0-7.2 1.4-9.8 4L307.3 184.3v-77.7c0-7.7-6.2-13.9-13.9-13.9h-.2c-7.7 0-13.9 6.2-13.9 13.9v112.2c0 7.7 6.2 14 13.8 14zM77.9 448c3.7 0 7.2-1.4 9.8-4l117.1-116.3v77.7c0 7.7 6.2 13.9 13.9 13.9h.2c7.7 0 13.9-6.2 13.9-13.9V293.1c0-7.7-6.2-13.9-13.9-13.9H106.6c-7.7 0-13.9 6.2-13.9 13.9v.2c0 7.7 6.2 13.9 13.9 13.9h77.7L68 424.3c-5.4 5.4-5.4 14.2 0 19.6 2.7 2.7 6.2 4.1 9.9 4.1zM293.1 419.2h.2c7.7 0 13.9-6.2 13.9-13.9v-77.7L424.3 444c2.6 2.6 6.1 4 9.8 4 3.7 0 7.2-1.4 9.8-4.1 5.4-5.4 5.4-14.2 0-19.6L327.7 307.2h77.7c7.7 0 13.9-6.2 13.9-13.9v-.2c0-7.7-6.2-13.9-13.9-13.9H293.1c-7.7 0-13.9 6.2-13.9 13.9v112.2c.1 7.7 6.3 13.9 13.9 13.9z"}}]})(props);
};
function IoIosContrast (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm127.3 335.3c-34 34-79.2 52.7-127.3 52.7V76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3z"}}]})(props);
};
function IoIosCopy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M352 115h90c3.3 0 6-2.7 6-6 0-8.2-3.7-16-10-21.3l-77.1-64.2c-4.9-4.1-14.2-7.4-20.6-7.4-4.1 0-7.4 3.3-7.4 7.4V96c.1 10.5 8.6 19 19.1 19z"}},{"tag":"path","attr":{"d":"M307 96V16H176c-17.6 0-32 14.4-32 32v336c0 17.6 14.4 32 32 32h240c17.6 0 32-14.4 32-32V141h-96c-24.8 0-45-20.2-45-45z"}},{"tag":"path","attr":{"d":"M116 412V80H96c-17.6 0-32 14.4-32 32v352c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32v-20H148c-17.6 0-32-14.4-32-32z"}}]})(props);
};
function IoIosCreate (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M404.3 86l-202 202c-1.5 1.5-2.3 3.5-2.3 5.6v26.5c0 4.4 3.6 7.9 7.9 7.9h26.3c2.1 0 4.2-.8 5.7-2.3l202.1-202c3.1-3.1 3.1-8.1 0-11.2L415.5 86c-3.1-3.1-8.1-3.1-11.2 0zM475.6 67l-14.4-14.4-.2-.2c-3.1-2.7-7.2-4.4-11.5-4.4-4.4 0-8.5 1.7-11.6 4.5l-11.3 11.4c-1.5 1.6-1.5 4.1 0 5.6L437 79.9l21.7 21.7c1.6 1.6 4.1 1.6 5.7 0l11.3-11.3c2.8-3.1 4.4-7.1 4.4-11.6-.1-4.4-1.7-8.6-4.5-11.7z"}},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M250 342c-3 3-7.1 4.7-11.3 4.7H197.3c-8.8 0-16-7.2-16-16V289.2c0-4.2 1.7-8.3 4.7-11.3l.8-.8 147.6-147.6c2.5-2.5.7-6.8-2.8-6.8H90.7C58.3 122.7 32 149 32 181.4v224c0 32.4 26.3 58.7 58.7 58.7h256c32.4 0 58.7-26.3 58.7-58.7v-209c0-3.6-4.3-5.3-6.8-2.8L250.8 341.2l-.8.8z"}}]}]})(props);
};
function IoIosCrop (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M142 64c-7.7 0-14 6.3-14 14v20c0 7.7 6.3 14 14 14s14-6.3 14-14V78c0-7.7-6.3-14-14-14zM156 342V190c0-7.7-6.3-14-14-14s-14 6.3-14 14v166c0 15.5 12.5 28 28 28h166c7.7 0 14-6.3 14-14s-6.3-14-14-14H170c-7.7 0-14-6.3-14-14zM434 356h-20c-7.7 0-14 6.3-14 14s6.3 14 14 14h20c7.7 0 14-6.3 14-14s-6.3-14-14-14z"}},{"tag":"path","attr":{"d":"M64 142c0 7.7 6.3 14 14 14h264c7.7 0 14 6.3 14 14v264c0 7.7 6.3 14 14 14s14-6.3 14-14V156c0-15.5-12.5-28-28-28H78c-7.7 0-14 6.3-14 14z"}}]})(props);
};
function IoIosCube (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M440.8 129.5L261.7 49.2c-3.6-1.6-7.7-1.6-11.3 0L71.2 129.5c-6 2.7-6.2 11.8-.4 14.8l178.7 94.1c4.1 2.2 8.9 2.2 13 0l178.7-94.1c5.8-3 5.6-12.1-.4-14.8zM280.2 462.9l180.1-95.3c2.2-1.4 3.6-4 3.6-6.8V175.9c0-5.9-5.8-9.7-10.7-7.1l-180.1 92.8c-2.6 1.3-4.2 4.1-4.2 7.1V456c.1 6.2 6.4 10 11.3 6.9zM48 175.9v184.8c0 2.8 1.4 5.4 3.6 6.8l180.1 95.3c5 3.2 11.2-.6 11.2-6.8V268.7c0-3-1.6-5.8-4.2-7.1l-180-92.8c-4.9-2.6-10.7 1.3-10.7 7.1z"}}]})(props);
};
function IoIosCut (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M308 277.2c25.5-33 80.5-111.5 90.2-135.4 7.2-17.6 10.6-32.8 10.4-46.2-.2-17.9-6-29.3-18.3-40.6-5.2-4.8-13.5-6.9-20-6.9L255.9 201.7l-10 13.4-2.9 3.9-.1.1-14.5 19.7c-.1.1-.2.3-.3.4-.5.8-7.5 10.9-15.2 22.7-3 4.6-6.1 9.5-9 14.1-3.5 5.6-6.6 11-8.8 15.2-3.6 7.1-7.3 14.4-10.7 21.5-3.7 7.5-7.2 14.6-10.4 20.7-10.2-7.3-22-11.1-34.3-11.1-17.5 0-33.7 7.7-45.8 21.6C82.4 357.1 76 374.6 76 393.1c0 18.5 6.4 36 17.9 49.3 12.1 13.9 28.4 21.6 45.8 21.6 14.4 0 28-5.2 39.2-15 10.5-9.1 18-21.3 21.8-35.4 1-3.1 11.6-34.7 26.1-57.3 9.2-14.4 22.2-23.4 29.6-27.8l13.5-9.7c0 .1 12.7-8.7 38.1-41.6zM139.9 421.1c-13.3 0-24-12.6-24-28s10.7-28 24-28 24 12.6 24 28c0 15.5-10.8 28-24 28zm116.2-132.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"}},{"tag":"path","attr":{"d":"M191.5 260.4c.7 1 1.6 1.9 2.5 2.7 1.7-2.8 3.6-5.7 5.4-8.6l46.5-65.8L140.9 48c-8.9 0-14.4.9-18.5 3.9-11.9 8.9-19.1 25.6-19.3 43.6-.2 13.5 3.3 28.6 10.4 46.2 8.6 21 42.6 70.2 78 118.7zM372 322.3c-12.3 0-24.1 3.8-34.3 11.1-3.2-6.1-6.7-13.2-10.4-20.7-3.4-6.9-6.9-14-10.4-20.8L306 305.8l-36.4 33.1c5.2 4.6 10.7 10.4 15.3 17.5 14.5 22.6 25 54.2 26 57.3 3.8 14.1 11.3 26.3 21.8 35.4 11.3 9.8 24.9 15 39.2 15 35.3 0 64-31.8 64-70.9s-28.6-70.9-63.9-70.9zm.1 98.8c-13.3 0-24-12.6-24-28s10.7-28 24-28 24 12.6 24 28c0 15.5-10.7 28-24 28z"}}]})(props);
};
function IoIosDesktop (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M352 442.2c-.3-2.2-2-3.9-4.2-4.3l-22.3-1.9c-11.8-3.1-20.5-16.2-22.3-28.3L302 400h-92l-1.2 7.6c-1.9 12.1-10.5 25.2-22.3 28.3l-22.3 1.9c-2.1.5-3.9 2.2-4.2 4.3-.4 3.1 2 5.8 5.1 5.8h181.8c3 .1 5.5-2.6 5.1-5.7zM472.9 71c-4.5-4.5-10.7-7-17-7H56.2c-6.4 0-12.5 2.5-17 7S32 81.7 32 88v272c0 6.4 2.7 12.5 7.2 17s10.5 7 16.8 7h400c6.4 0 12.3-2.5 16.8-7s7.2-10.7 7.2-17V88c.1-6.3-2.6-12.5-7.1-17zM256 360c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm203.9-40H52.2c-2.2 0-4-1.8-4-4V92c0-6.6 5.4-12 12-12h391.7c6.6 0 12 5.4 12 12v224c0 2.2-1.8 4-4 4z"}}]})(props);
};
function IoIosDisc (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 165.8c-49.9 0-90.3 40.4-90.3 90.3s40.4 90.2 90.3 90.2 90.3-40.4 90.3-90.2c0-49.9-40.4-90.3-90.3-90.3zm0 130.6c-22.3 0-40.4-18.1-40.4-40.4s18.1-40.4 40.4-40.4 40.4 18.1 40.4 40.4-18.1 40.4-40.4 40.4z"}},{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 322c-63 0-114-51.1-114-114 0-63 51.1-114 114-114s114 51 114 114-51 114-114 114z"}}]})(props);
};
function IoIosDocument (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M312 155h91c2.8 0 5-2.2 5-5 0-8.9-3.9-17.3-10.7-22.9L321 63.5c-5.8-4.8-13-7.4-20.6-7.4-4.1 0-7.4 3.3-7.4 7.4V136c0 10.5 8.5 19 19 19z"}},{"tag":"path","attr":{"d":"M267 136V56H136c-17.6 0-32 14.4-32 32v336c0 17.6 14.4 32 32 32h240c17.6 0 32-14.4 32-32V181h-96c-24.8 0-45-20.2-45-45z"}}]})(props);
};
function IoIosDoneAll (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M317.5 210.3c1.7-1.8 1.8-4.7 0-6.5l-19.8-21c-.8-.9-2-1.4-3.2-1.4-1.2 0-2.4.5-3.2 1.4l-66.5 69.1 26.4 27.1 66.3-68.7zM123.8 253.1c-.9-.9-2-1.4-3.2-1.4-1.2 0-2.3.5-3.2 1.4l-20.1 20.7c-1.8 1.8-1.8 4.8 0 6.6l63.2 65c4 4.2 9 6.6 13.2 6.6 6 0 11.1-4.5 13.1-6.4l.1-.1 13.4-13.8-76.5-78.6z"}},{"tag":"path","attr":{"d":"M414.7 182.4l-19.8-21c-.8-.9-2-1.4-3.2-1.4-1.2 0-2.4.5-3.2 1.4L250.7 304.1l-50.1-51.6c-.9-.9-2-1.4-3.2-1.4-1.2 0-2.3.5-3.2 1.4l-20.1 20.7c-1.8 1.8-1.8 4.8 0 6.6l63.2 65c4 4.2 9 6.6 13.2 6.6 6 0 11.1-4.5 13.1-6.4l.1-.1 151-156.1c1.7-1.7 1.7-4.6 0-6.4z"}}]})(props);
};
function IoIosDownload (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M376 144H269v179.9l47.9-47.2c5.1-5 13.3-5 18.4.1 5 5.1 5 13.3-.1 18.4l-70 69c-2.5 2.4-5.8 3.7-9.1 3.7-1.7 0-3.4-.3-5-1-1.5-.6-2.9-1.6-4.1-2.7l-70-69c-5.1-5-5.2-13.3-.1-18.4 5-5.1 13.3-5.2 18.4-.1l47.9 47.2V144H136c-22 0-40 18-40 40v240c0 22 18 40 40 40h240c22 0 40-18 40-40V184c0-22-18-40-40-40zM269 61c0-7.2-5.8-13-13-13s-13 5.8-13 13v83h26V61z"}}]})(props);
};
function IoIosEasel (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M434 461.5l-26.6-69.1c-2.1-5.1-7-8.4-12.4-8.4-4.5 0-8.6 2.2-11.1 5.9s-3 8.4-1.4 12.5l26 69.1c2.1 5.1 7 8.5 12.5 8.5h.5c4.5 0 8.7-2.2 11.2-5.9 2.5-3.8 3-8.5 1.3-12.6zM117.6 384c-5.5 0-10.4 3.3-12.4 8.4l-26.6 69.1c-1.7 4.2-1.2 8.9 1.3 12.6 2.5 3.7 6.7 5.9 11.2 5.9h.5c5.5 0 10.4-3.3 12.5-8.5l26-69.1c1.7-4.1 1.2-8.8-1.4-12.5-2.4-3.7-6.6-5.9-11.1-5.9zM256.6 384h-1.1c-7.4 0-13.4 6-13.4 13.4v36.1c0 7.4 6 14.4 13.4 14.4h1.1c7.4 0 13.4-7 13.4-14.4v-36.1c0-7.4-6-13.4-13.4-13.4z"}},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M424 128H88c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h336c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8z"}},{"tag":"path","attr":{"d":"M448 80H63.9C46.3 80 32 94.3 32 111.9v224.2c0 17.6 14.3 31.9 31.9 31.9H448c17.7 0 32-14.3 32-32V112c0-17.7-14.3-32-32-32zm4 244c0 8.8-7.2 16-16 16H76c-8.8 0-16-7.2-16-16V124c0-8.8 7.2-16 16-16h364.6c3 0 5.9 1.2 8 3.3 2.1 2.1 3.3 5 3.3 8V324z"}}]},{"tag":"path","attr":{"d":"M256 32c-13.4-.2-24.4 12.2-24.4 25.6h48.7c.1-13.4-10.9-25.8-24.3-25.6z"}}]})(props);
};
function IoIosEgg (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 32C192 32 96 165.2 96 288.9 96 412.6 160 480 256 480s160-67.4 160-191.1C416 165.2 320 32 256 32z"}}]})(props);
};
function IoIosExit (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M144 136v107h179.9l-47.2-47.9c-5-5.1-5-13.3.1-18.4 5.1-5 13.3-5 18.4.1l69 70c2.4 2.5 3.7 5.8 3.7 9.1 0 1.7-.3 3.4-1 5-.6 1.5-1.6 2.9-2.7 4.1l-69 70c-5 5.1-13.3 5.2-18.4.1-5.1-5-5.2-13.3-.1-18.4l47.2-47.9H144v107c0 22 18 40 40 40h240c22 0 40-18 40-40V136c0-22-18-40-40-40H184c-22 0-40 18-40 40zM61 243c-7.2 0-13 5.8-13 13s5.8 13 13 13h83v-26H61z"}}]})(props);
};
function IoIosExpand (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M112.4 92h77.7c7.7 0 13.9-6.2 13.9-13.9v-.2c0-7.7-6.2-13.9-13.9-13.9H77.9C70.2 64 64 70.2 64 77.9v112.2c0 7.7 6.2 13.9 13.9 13.9h.2c7.7 0 13.9-6.2 13.9-13.9v-77.7l117.1 116.3c2.6 2.6 6.1 4 9.8 4 3.7 0 7.2-1.4 9.8-4.1 5.4-5.4 5.4-14.2 0-19.6L112.4 92zM434.1 64H321.9c-7.7 0-13.9 6.2-13.9 13.9v.2c0 7.7 6.2 13.9 13.9 13.9h77.7L283.3 209.1c-5.4 5.4-5.4 14.2 0 19.6 2.6 2.6 6.1 4.1 9.8 4.1 3.7 0 7.2-1.4 9.8-4L420 112.4v77.7c0 7.7 6.2 13.9 13.9 13.9h.2c7.7 0 13.9-6.2 13.9-13.9V77.9c0-7.7-6.2-13.9-13.9-13.9zM218.9 279.2c-3.7 0-7.2 1.4-9.8 4L92 399.6v-77.7c0-7.7-6.2-13.9-13.9-13.9h-.2c-7.7 0-13.9 6.2-13.9 13.9v112.2c0 7.7 6.2 13.9 13.9 13.9h112.2c7.7 0 13.9-6.2 13.9-13.9v-.2c0-7.7-6.2-13.9-13.9-13.9h-77.7l116.3-117.1c5.4-5.4 5.4-14.2 0-19.6-2.6-2.6-6.1-4.1-9.8-4.1zM434.1 308h-.2c-7.7 0-13.9 6.2-13.9 13.9v77.7L302.9 283.3c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.4-9.8 4.1-5.4 5.4-5.4 14.2 0 19.6l116.3 117h-77.7c-7.7 0-13.9 6.2-13.9 13.9v.2c0 7.7 6.2 13.9 13.9 13.9h112.2c7.7 0 13.9-6.2 13.9-13.9V321.9c0-7.7-6.2-13.9-13.9-13.9z"}}]})(props);
};
function IoIosEyeOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M88.3 68.1c-5.6-5.5-14.6-5.5-20.1.1-5.5 5.5-5.5 14.5 0 20l355.5 355.7c3.7 3.7 9 4.9 13.7 3.6 2.4-.6 4.6-1.9 6.4-3.7 5.5-5.5 5.5-14.5 0-20L88.3 68.1zM260.2 345.9c-53 2.4-96.6-41.2-94.1-94.1.6-12.2 3.6-23.8 8.6-34.3L121.3 164c-27.7 21.4-55.4 48.9-85.1 81.3-5.5 6.1-5.6 15.2-.1 21.3C101 338.3 158.2 400 255.8 400c29.7 0 57.1-7.4 82.3-19.2l-43.5-43.5c-10.6 5-22.2 8-34.4 8.6zM475.8 266c5.3-5.8 5.6-14.6.5-20.7C424 181.8 351.5 112 255.8 112c-29.1 0-56 6.6-82 19l43.7 43.7c10.5-5 22.1-8.1 34.3-8.6 53-2.4 96.6 41.2 94.1 94.1-.6 12.2-3.6 23.8-8.6 34.3l53.5 53.5c33-25.3 61.3-55.9 85-82z"}},{"tag":"path","attr":{"d":"M192.2 260.9c2.4 31.3 27.6 56.5 58.9 58.9 8.2.6 16.1-.3 23.4-2.6l-79.8-79.8c-2.2 7.4-3.1 15.3-2.5 23.5zM320 256c0-1.3-.1-2.6-.1-3.9-5.6 2.5-11.7 3.9-18.2 3.9-1.1 0-2.1 0-3.1-.1l18.6 18.7c1.8-5.9 2.8-12.2 2.8-18.6zM256 209c0-6 1.1-11.7 3.1-16.9-1 0-2-.1-3.1-.1-6.4 0-12.6 1-18.5 2.8l18.7 18.7c-.1-1.5-.2-3-.2-4.5z"}}]})(props);
};
function IoIosEye (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M255.8 112c-80.4 0-143.8 50.6-219.6 133.3-5.5 6.1-5.6 15.2-.1 21.3C101 338.3 158.2 400 255.8 400c96.4 0 168.7-77.7 220.1-134 5.3-5.8 5.6-14.6.5-20.7C424 181.8 351.5 112 255.8 112zm4.4 233.9c-53 2.4-96.6-41.2-94.1-94.1 2.1-46.2 39.5-83.6 85.7-85.7 53-2.4 96.6 41.2 94.1 94.1-2.1 46.2-39.5 83.6-85.7 85.7z"}},{"tag":"path","attr":{"d":"M256 209c0-6 1.1-11.7 3.1-16.9-1 0-2-.1-3.1-.1-36.9 0-66.6 31.4-63.8 68.9 2.4 31.3 27.6 56.5 58.9 58.9 37.5 2.8 68.9-26.9 68.9-63.8 0-1.3-.1-2.6-.1-3.9-5.6 2.5-11.7 3.9-18.2 3.9-25.2 0-45.7-21.1-45.7-47z"}}]})(props);
};
function IoIosFastforward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M476.1 249.3L268 129.1c-5.4-3.1-12.3.6-12.3 6.7V251L44.3 129.1c-5.4-3.1-12.3.6-12.3 6.7v240.3c0 6.1 6.9 9.8 12.3 6.7L255.6 261v115.2c0 6.1 6.9 9.8 12.3 6.7L476 262.7c5.3-3 5.3-10.4.1-13.4z"}}]})(props);
};
function IoIosFemale (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M61.6 464c3.6 0 7.1-1.4 9.6-4l44.8-44.8 37 37c2.6 2.6 6 4 9.6 4 3.6 0 7.1-1.4 9.6-4 5.3-5.3 5.3-13.9 0-19.2l-37-37 50-50c30.6 26 69.3 40.3 109.6 40.3 22.8 0 45-4.5 65.8-13.3 20.1-8.5 38.2-20.7 53.8-36.2 15.5-15.5 27.7-33.6 36.2-53.8 8.8-20.9 13.3-43 13.3-65.8s-4.5-45-13.3-65.8c-8.5-20.1-20.7-38.2-36.2-53.8-15.5-15.5-33.6-27.7-53.8-36.2-20.9-8.8-43-13.3-65.8-13.3-22.8 0-45 4.5-65.8 13.3-20.1 8.5-38.2 20.7-53.8 36.2-15.5 15.5-27.7 33.6-36.2 53.8-8.8 20.9-13.3 43-13.3 65.8 0 40.3 14.3 79 40.3 109.6l-50 50-37-37c-2.6-2.6-6-4-9.6-4-3.6 0-7.1 1.4-9.6 4-5.3 5.3-5.3 13.9 0 19.2l37 37L52 440.8c-5.3 5.3-5.3 13.9 0 19.2 2.6 2.6 6 4 9.6 4zm132.9-347.2C221.3 90 257 75.2 294.9 75.2c37.9 0 73.5 14.8 100.3 41.6 26.8 26.8 41.6 62.4 41.6 100.3s-14.8 73.5-41.6 100.3c-26.8 26.8-62.4 41.6-100.3 41.6s-73.5-14.8-100.3-41.6C167.7 290.7 153 255 153 217.1s14.7-73.5 41.5-100.3z"}}]})(props);
};
function IoIosFiling (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M424 64H88c-22 0-40 18-40 40v304c0 22 18 40 40 40h336c22 0 40-18 40-40V104c0-22-18-40-40-40zm12 176c0 8.8-7.2 16-16 16h-86.8c-6.8 0-12.8 4.2-15.1 10.6C314 278.2 303.8 288 292 288h-72c-11.9 0-22.1-9.8-26.1-21.4-2.2-6.4-8.3-10.6-15.1-10.6H92c-8.8 0-16-7.2-16-16V108c0-8.8 7.2-16 16-16h328c8.8 0 16 7.2 16 16v132z"}},{"tag":"path","attr":{"d":"M386 156H126c-7.7 0-14-6.3-14-14s6.3-14 14-14h260c7.7 0 14 6.3 14 14s-6.3 14-14 14zM386 220H126c-7.7 0-14-6.3-14-14s6.3-14 14-14h260c7.7 0 14 6.3 14 14s-6.3 14-14 14z"}}]})(props);
};
function IoIosFilm (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M447.9 80H64.1C46.5 80 32 94.5 32 112.1v287.7c0 17.7 14.5 32.1 32.1 32.1h383.7c17.7 0 32.1-14.5 32.1-32.1V112.1c.1-17.6-14.4-32.1-32-32.1zM120 400c0 4.4-3.6 8-8 8H64c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48zm0-80c0 4.4-3.6 8-8 8H64c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48zm0-80c0 4.4-3.6 8-8 8H64c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48zm0-80c0 4.4-3.6 8-8 8H64c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48zm232 108H160c-6.6 0-12-5.4-12-12s5.4-12 12-12h192c6.6 0 12 5.4 12 12s-5.4 12-12 12zm104 132c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48zm0-80c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48zm0-80c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48zm0-80c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48z"}}]})(props);
};
function IoIosFingerPrint (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M450.8 182c-8.6-24.4-20.3-44.9-33-57.5-2.6-2.6-6-4-9.7-4-3.7 0-7.1 1.4-9.7 4-5.3 5.3-5.3 14 0 19.4 9.9 9.9 19.6 27.4 26.8 48.1 7.3 21.2 11.4 43.6 11.4 63.1 0 3-.1 7.6-.2 10.1-.2 3.7 1.1 7.1 3.6 9.8 2.5 2.7 5.8 4.3 9.5 4.4h.6c7.3 0 13.3-5.7 13.7-13.1.1-3.1.2-8.1.2-11.3 0-22.8-4.7-48.8-13.2-73zM143 110.6c2.9 0 5.6-.9 8-2.6 29.9-21.4 66.2-32.7 105-32.7 40.8 0 80.1 14.8 113.7 42.8 2.5 2 5.6 3.2 8.8 3.2 4.1 0 7.9-1.8 10.5-4.9 4.8-5.8 4-14.4-1.7-19.3C348.6 65 303.3 48 256 48c-44.6 0-86.4 13.1-121 37.8-3 2.1-4.9 5.3-5.5 8.9-.6 3.6.2 7.2 2.4 10.2 2.5 3.6 6.7 5.7 11.1 5.7zM75.4 255c0-43.7 15.8-85.8 44.5-118.7 2.4-2.8 3.6-6.3 3.3-9.9-.2-3.6-1.9-7-4.7-9.4-2.5-2.2-5.7-3.4-9-3.4-4 0-7.7 1.7-10.3 4.7C66.2 156.2 48 204.7 48 255c0 32.8 5.9 58.8 15.4 90.2 1.8 5.8 7 9.7 13.1 9.7 1.3 0 2.7-.2 4-.6 3.5-1.1 6.4-3.4 8.1-6.6 1.7-3.2 2.1-6.9 1-10.4-8.8-29-14.2-52.8-14.2-82.3z"}},{"tag":"path","attr":{"d":"M355.7 129.8C328.4 106.1 295 93.6 259 93.6c-48.3 0-91.4 17.8-121.5 50.1-28.7 30.8-42.8 71.7-39.7 115.1 2.3 32.7 6 50.7 9.3 66.6 4.3 21.1 7.7 37.8 5.1 84.1-.4 6.7 3.7 12.7 10 14.6 1.2.4 2.3.5 3.6.5 7.2 0 13.2-5.7 13.7-12.9 2.9-50.4-.8-68.7-5.5-91.9-3.1-15.1-6.6-32.2-8.8-63.1-2.6-35.7 9-69.3 32.4-94.5 24.8-26.7 60.9-41.4 101.4-41.4 29.3 0 56.5 10.2 78.7 29.5 22.3 19.3 39.2 47.4 49 81.1 11.4 39.3 14.5 89.3 9.1 144.5-.7 7.5 4.8 14.2 12.3 15 .4 0 .9.1 1.3.1 7.1 0 12.9-5.3 13.6-12.4 5.8-58.7 2.3-112.2-10.1-154.8-11.1-38.6-30.9-71.2-57.2-94z"}},{"tag":"path","attr":{"d":"M373.5 267.5c-5.9-37.5-19.9-68.8-40.6-90.6-20.8-22-47.4-33.7-76.9-33.7-19 0-37.7 4.1-54.1 12-3.7 1.8-6.4 5.1-7.4 9.1-1 4.1-.1 8.3 2.5 11.6 2.6 3.4 6.5 5.3 10.8 5.3 2.1 0 4-.5 5.9-1.3 12.6-6 27.2-9.2 42.2-9.2 22.4 0 42.5 9.2 58.3 26.6 16.1 17.8 27.3 43.6 32.1 74.6 4.7 29.6 7 53.5 7.1 73.1.2 39.7-4.8 72.7-4.8 73.1-.6 3.6.3 7.2 2.5 10.2 2.2 3 5.3 4.9 8.9 5.5.7.1 1.4.2 2.1.2 6.8 0 12.5-4.9 13.5-11.6.2-1.4 5.4-35.2 5.2-77.5 0-21.3-2.4-46.5-7.3-77.4zM185.3 203.5c4-5.8 2.9-13.6-2.5-18.2-2.5-2.1-5.6-3.2-8.8-3.2-4.5 0-8.7 2.2-11.3 5.9-14.7 21.5-19.7 49.1-14.4 79.8 8.9 51.3 16.9 111.1 9.4 165-.5 3.8.5 7.7 2.9 10.7 2.3 3 5.7 4.8 9.4 5.1.4 0 .8.1 1.2.1 6.8 0 12.6-5.1 13.5-11.8 8.2-57.7-.2-120.2-9.5-173.8-4.1-23.8-.7-43.9 10.1-59.6zM317.5 388h-.5c-7.6.3-13.5 6.6-13.2 14.2 0 .2.6 17.9-2.6 34.7-1.3 6.9 2.6 13.7 9.1 15.8 1.4.4 2.8.7 4.3.7 6.6 0 12.2-4.7 13.4-11.1 3.8-20.1 3.1-40.2 3.1-41.1-.2-7.5-6.2-13.2-13.6-13.2z"}},{"tag":"path","attr":{"d":"M294.6 205.9c-11.2-10.5-25.2-16.1-40.5-16.1-19.8 0-36.7 7.3-47.6 20.5-8.3 10.1-17 28.8-10.9 60 12.3 62.5 15 121.6 8.1 175.6-1 7.5 4.4 14.4 11.8 15.3.6.1 1.2.1 1.7.1 6.9 0 12.7-5.1 13.6-12 7.3-57 4.5-119-8.3-184.4-3.2-16.4-1.4-29.3 5.1-37.3 5.6-6.8 15-10.5 26.4-10.5 25 0 35.1 27.6 38.3 39.4 6.9 25.7 10.9 63 11.5 107.7.1 7.4 6.2 13.5 13.7 13.5h.2c3.6-.1 7-1.5 9.6-4.1 2.5-2.6 3.9-6.1 3.9-9.7-.7-47-5-86.5-12.5-114.4-4.9-18.5-13.1-33.2-24.1-43.6z"}},{"tag":"path","attr":{"d":"M265.2 245.9c-2.1-5.1-7.1-8.5-12.7-8.5-1.8 0-3.6.4-5.2 1-7 2.9-10.3 10.9-7.4 17.9 6.6 16 11.8 46.2 14.1 82.8 2.4 36.9 1.7 76.9-2 109.6-.4 3.6.6 7.2 2.9 10.1 2.3 2.9 5.5 4.6 9.2 5 .5.1 1 .1 1.5.1 7 0 12.8-5.2 13.6-12.2 3.9-35.5 4.6-76.6 2-115.8-2.5-39.3-8.2-71.3-16-90z"}}]})(props);
};
function IoIosFitness (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M352 280H160c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h192c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8zM378 362V150c0-12.1 9.9-22 22-22s22 9.9 22 22v212c0 12.1-9.9 22-22 22s-22-9.9-22-22zM460 192h-12c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h12c11 0 20-9 20-20v-88c0-11-9-20-20-20zM134 362V150c0-12.1-9.9-22-22-22s-22 9.9-22 22v212c0 12.1 9.9 22 22 22s22-9.9 22-22zM64 192H52c-11 0-20 9-20 20v88c0 11 9 20 20 20h12c4.4 0 8-3.6 8-8V200c0-4.4-3.6-8-8-8z"}}]})(props);
};
function IoIosFlag (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M406.7 80.8c-3.1.5-6.4 1-9.9 1.4-13.2 1.7-42.8 5.2-60.6 5.2-27.7 0-52.8-6.8-78.2-12.2-25.8-5.5-52.4-11.2-80.6-11.2-56.2 0-75.3 12.1-77.3 13.4L96 80.3v353.3c0 7.2 5.2 13.4 12.3 14.3 8.5 1 15.7-5.6 15.7-13.9V279.6c0-3.8 2.7-7.1 6.4-7.9 10.5-2.1 25.8-3.9 47-3.9 26.2 0 50.7 10 76.6 15.5 26.4 5.6 48.6 11.5 83.4 11.5s71.8-6.6 71.8-6.6c3.9-.6 6.9-3.9 6.9-7.9V88.7c-.1-4.9-4.5-8.7-9.4-7.9z"}}]})(props);
};
function IoIosFlame (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M220.1 48C249.1 182.6 111 179.9 112 315.4c.8 111 118.4 148.6 144.5 148.6 26.1 0 134.8-23.6 143.1-148.6 7.1-106.4-81.7-208-179.5-267.4zm74.3 354.7c-10.2 38.9-66 39-76.4.1-1.5-5.6-2.4-11.5-2.4-17.5 0-41 40.6-88.3 40.6-88.3s40.4 47.3 40.4 88.3c.1 6-.7 11.8-2.2 17.4z"}}]})(props);
};
function IoIosFlashOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M382.1 442.7L154.5 55c-4-6.7-12.7-9-19.5-5.1-6.8 3.9-9.1 12.6-5.1 19.3L357.5 457c2.6 4.5 7.4 7 12.3 7 2.4 0 4.9-.6 7.2-1.9 6.7-4 9-12.6 5.1-19.4zM324.6 313.3l57.9-75.8c3.8-5.6.2-13.4-6.3-13.4h-104l52.4 89.2zM320.4 37.1c.9-4.5-4.6-7.1-7.2-3.4L227 146.9l42.4 72.3 51-182.1zM187.4 198.7l-57.9 75.8c-3.8 5.6-.2 13.4 6.3 13.4h103.9l-52.3-89.2zM191.6 474.9c-.9 4.5 4.6 7.1 7.2 3.4L285 365.1l-42.4-72.3-51 182.1z"}}]})(props);
};
function IoIosFlash (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M376.2 224H268l52.4-186.9c.9-4.5-4.6-7.1-7.2-3.4L129.5 274.6c-3.8 5.6-.2 13.4 6.3 13.4H244l-52.4 186.9c-.9 4.5 4.6 7.1 7.2 3.4l183.7-240.8c3.7-5.7.2-13.5-6.3-13.5z"}}]})(props);
};
function IoIosFlashlight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M317 32H195c-17.6 0-24 14.4-24 32h170c0-17.6-6.4-32-24-32zM196.1 147.5c7.6 8.8 11.9 20 11.9 31.7v265.9c0 21.9 17.9 34.9 39.9 34.9h16.3c21.9 0 39.9-12.9 39.9-34.9V179.2c0-11.7 4.3-22.8 11.9-31.7 15.4-17.9 25-34.5 25-67.5H171c0 35 9.6 49.6 25.1 67.5zm31.9 90.8c0-15.6 12.6-28.3 28-28.3s28 12.7 28 28.3v35.4c0 15.6-12.6 28.3-28 28.3s-28-12.7-28-28.3v-35.4z"}},{"tag":"circle","attr":{"cx":"256","cy":"273","r":"20"}}]})(props);
};
function IoIosFlask (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M437.4 354.4L320.7 159.9c-.4-.6-.6-1.3-.6-2.1V80c0-2.2 1.8-4 4-4 6.6 0 12-5.4 12-12v-4c0-6.6-5.4-12-12-12H187.8c-6.6 0-12 5.4-12 12v4c0 6.6 5.4 12 12 12 2.2 0 4 1.8 4 4v77.9c0 .7-.2 1.4-.6 2L75.7 354.4c-8.4 15.8-12.5 31.4-12.1 45.6 1.1 36.5 28.8 64 65.2 64h256.6c36.4 0 62.3-27.6 63.2-64 .2-14.2-2.7-29.7-11.2-45.6zM161.8 288c-6.2 0-10.1-6.8-6.9-12.1l60.5-101.7c2.9-4.9 4.5-10.6 4.5-16.3V80c0-1.4-.1-2.7-.2-4h72.7c-.2 1.3-.2 2.6-.2 4v77.9c0 5.8 1.6 11.5 4.6 16.4l60.4 101.6c3.2 5.3-.7 12.1-6.9 12.1H161.8z"}}]})(props);
};
function IoIosFlower (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M385.1 230.2c-26.7 0-60.1 6.9-86.3 13.5-.9-3.2-2.1-6.2-3.7-9.1 23.2-13.8 51.7-32.5 70.5-51.4 36.7-36.7 48.3-63.6 37.6-74.3-2.6-2.6-6-3.8-10.3-3.8-13.8 0-36 13.4-64 41.4-18.8 18.8-37.6 47.2-51.4 70.4-2.8-1.6-5.9-2.8-9.1-3.8 6.7-26.2 13.5-59.5 13.5-86.1 0-51.9-10.8-79.1-26-79.1s-26 27.2-26 79.1c0 26.6 6.8 60 13.5 86.1-3.2.9-6.2 2.2-9.1 3.8-13.8-23.2-32.5-51.6-51.4-70.4-28-28-50.3-41.4-64-41.4-4.3 0-7.7 1.3-10.3 3.8-10.8 10.8.8 37.6 37.6 74.3 18.9 18.9 47.3 37.6 70.5 51.4-1.5 2.8-2.8 5.9-3.7 9.1-26.2-6.7-59.6-13.5-86.3-13.5-51.8 0-78.7 10.6-78.7 25.8s26.9 26.2 78.9 26.2c26.7 0 60.2-6.9 86.4-13.6.9 3.1 2.2 6.2 3.8 9-23.3 13.8-51.8 32.6-70.7 51.5-36.7 36.7-48.3 63.6-37.6 74.3 2.6 2.6 6 3.8 10.3 3.8 13.8 0 36-13.4 64-41.4 18.9-18.9 37.8-47.5 51.6-70.8 2.8 1.5 5.8 2.8 9 3.7-6.7 26.2-13.6 59.8-13.6 86.5 0 51.9 10.8 78.6 26 78.6s26-26.7 26-78.6c0-26.8-6.9-60.3-13.6-86.5 3.1-.9 6.1-2.1 9-3.7 13.8 23.3 32.6 51.9 51.6 70.8 28 28 50.3 41.4 64 41.4 4.3 0 7.7-1.3 10.3-3.8 10.8-10.8-.8-37.6-37.6-74.3-18.9-18.9-47.5-37.7-70.7-51.5 1.6-2.8 2.8-5.8 3.8-9 26.2 6.7 59.7 13.6 86.4 13.6 51.9 0 78.9-10.8 78.9-26-.2-15.2-27.1-26-79.1-26z"}},{"tag":"path","attr":{"d":"M318.4 376.4c-8.5-8.5-16.9-18.7-24.8-29.5 2 13.2 3.3 26.4 3.3 38.4 0 11.7-.5 22.5-1.6 32.1 12.3 21.8 24.3 32.7 34 32.7 1.6 0 3.2-.3 4.7-.9 11-4.5 13.3-23.3 4.5-54.3-6.4-5.3-13.1-11.5-20.1-18.5zM193.8 136.1c8.4 8.4 16.7 18.5 24.6 29.2-2-13.2-3.2-26.3-3.2-38.2 0-11.7.5-22.5 1.6-32.1-12.3-21.8-24.3-32.7-34-32.7-1.6 0-3.2.3-4.7.9-11 4.5-13.3 23.3-4.5 54.3 6.4 5.4 13.2 11.6 20.2 18.6zM135.8 318.6c8.5-8.5 18.7-16.9 29.5-24.8-13.2 2-26.4 3.3-38.4 3.3-11.7 0-22.5-.5-32.1-1.6-25.5 14.4-36.1 28.2-31.8 38.7 2.6 6.4 10.1 9.9 22.1 9.9 8.5 0 19.3-1.7 32.2-5.4 5.4-6.4 11.5-13.1 18.5-20.1zM376.2 193.8c-8.5 8.5-18.7 16.9-29.5 24.8 13.2-2 26.4-3.3 38.4-3.3 11.7 0 22.5.5 32.1 1.6 25.5-14.4 36.1-28.2 31.8-38.7-2.6-6.4-10.1-9.9-22.1-9.9-8.5 0-19.3 1.7-32.2 5.4-5.4 6.5-11.5 13.2-18.5 20.1zM193.6 376.4c-8.3 8.3-16.3 15.6-23.8 21.6-7.8 28.2-5.5 45.4 4.9 49.9 1.6.7 3.2 1 4.9 1 10.3 0 23.2-12 36.7-36.2-.7-8.4-1.1-17.5-1.1-27.3 0-12 1.3-25.2 3.3-38.4-8 10.7-16.4 20.9-24.9 29.4zM318.4 136.2c8.3-8.3 16.2-15.5 23.7-21.5 7.9-28.4 5.7-45.8-4.8-50.2-1.6-.7-3.2-1-4.9-1-10.3 0-23.2 12-36.7 36.2.7 8.4 1.1 17.5 1.1 27.3 0 12.1-1.3 25.3-3.3 38.7 8-10.7 16.4-21 24.9-29.5zM99.6 216.5c8.4-.7 17.5-1.1 27.3-1.1 12 0 25.1 1.3 38.3 3.3-10.7-7.9-20.9-16.3-29.4-24.8-8.3-8.3-15.6-16.3-21.7-23.9-11.3-3.1-20.9-4.6-28.6-4.6-11.4 0-18.6 3.3-21.2 9.5-4.6 10.9 7.1 25.9 35.3 41.6zM412.4 296c-8.4.7-17.5 1.1-27.3 1.1-12 0-25.2-1.3-38.4-3.3 10.8 7.9 21 16.4 29.5 24.8 8.3 8.3 15.5 16.3 21.6 23.8 11.4 3.2 20.9 4.7 28.6 4.7 11.4 0 18.6-3.3 21.2-9.5 4.7-11-7-25.9-35.2-41.6z"}}]})(props);
};
function IoIosFolderOpen (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M448 119c0-13.3-9.4-23-22.8-23H230.9c-2.8 0-4.3-.6-6.1-2.4l-22.5-22.5-.2-.2c-4.9-4.6-8.9-6.9-17.3-6.9H88.7C74.9 64 64 74.3 64 87v73h384v-41zM64 188h-8.3c-12.8 0-25.3 5.1-23.5 24.3C34 231.5 55.7 423 55.7 423c2.7 17.8 11.7 25 25 25h352.5c12.7 0 21-7.8 23-25 0 0 22.2-184.9 23.6-205.5 1.4-20.5-8.9-29.5-23.6-29.5H64z"}}]})(props);
};
function IoIosFolder (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M480 119c0-13.3-9.4-23-22.8-23H198.9c-2.8 0-4.3-.6-6.1-2.4l-22.5-22.5-.2-.2c-4.9-4.6-8.9-6.9-17.3-6.9H56.7C42.9 64 32 74.3 32 87v73.7c0 1.6 1.7 1.5 3 .7s5-1.4 7-1.4h428c2 0 5.7.6 7 1.4 1.3.8 3 .9 3-.7V119zM32 416.4c0 17.5 14.2 31.6 31.6 31.6H448c17.6 0 32-14.4 32-32V204c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v212.4z"}}]})(props);
};
function IoIosFootball (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256c0 114.7 93.3 208 208 208 114.9 0 208-93.1 208-208 0-114.7-93.3-208-208-208zm127.3 80.7c8.5 8.5 16.1 17.7 22.6 27.5.7 1 .9 2.4.4 3.5L391.9 201c-.4 1-1.1 1.9-2.1 2.3l-57.5 26.2c-1.4.6-3 .4-4.2-.6l-56.6-47.6a4.1 4.1 0 0 1-1.4-3.1v-63.1c0-1.3.7-2.6 1.8-3.3l38.4-26.1c1-.7 2.3-.9 3.5-.5 25.8 8.9 49.6 23.6 69.5 43.5zm-73.9 297.6c-.4 1.2-1.4 2.1-2.6 2.4-16.3 4.8-33.4 7.2-50.8 7.2-17.5 0-34.5-2.5-50.8-7.2-1.2-.4-2.2-1.3-2.6-2.4l-16.4-43c-.4-1.1-.3-2.3.2-3.3l22.3-42.3c.7-1.3 2.1-2.1 3.5-2.1h87.5c1.5 0 2.8.8 3.5 2.1l22.3 42.3c.5 1 .6 2.2.2 3.3l-16.3 43zm-67.4-311v63.1c0 1.2-.5 2.3-1.4 3.1L183.9 229c-1.2 1-2.8 1.2-4.2.6l-57.5-26.2c-1-.5-1.8-1.3-2.1-2.3l-14.4-41.2c-.4-1.2-.3-2.5.4-3.5 6.5-9.8 14.1-19 22.6-27.5 19.9-19.9 43.7-34.6 69.6-43.3 1.2-.4 2.5-.2 3.5.5l38.4 26.1c1.1.5 1.8 1.7 1.8 3.1zM77.7 264.1l36.1-31.2c1.2-1 2.9-1.3 4.3-.6l52.4 23.8c1.1.5 1.9 1.5 2.2 2.7l14.6 57.3c.2 1 .1 2-.3 2.9l-23.2 43.9c-.7 1.3-2.1 2.2-3.6 2.1l-46-.6c-1.2 0-2.4-.6-3.2-1.6-20.5-27.7-32.5-60.6-34.7-95.4 0-1.3.5-2.5 1.4-3.3zm270.4 98.7L325 319c-.5-.9-.6-1.9-.3-2.9l14.6-57.3c.3-1.2 1.1-2.2 2.2-2.7l52.4-23.8c1.4-.6 3.1-.4 4.3.6l36.1 31.2c.9.8 1.5 2 1.4 3.3-2.1 34.8-14.2 67.6-34.7 95.4-.7 1-1.9 1.6-3.2 1.6l-46.1.6c-1.5-.1-2.9-.9-3.6-2.2z"}}]})(props);
};
function IoIosFunnel (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M48 87.2c0 5.8 2 11.4 5.6 15.7l152.2 179.8c3.6 4.3 5.6 9.9 5.6 15.7v107c0 10 5.9 18.8 14.6 22l55 19.8c9.6 3.5 19.6-4.3 19.6-15.3V298.3c0-5.8 2-11.4 5.6-15.7l152.2-179.8c3.6-4.3 5.6-9.9 5.6-15.7 0-12.8-9.6-23.2-21.4-23.2H69.4C57.6 64 48 74.4 48 87.2z"}}]})(props);
};
function IoIosGift (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M432 136h-84.3c12.4-11 20.3-26.6 20.3-44 0-33.1-28.3-60-63.1-60-20.6 0-37.9 9.7-48.9 27.4C245 41.7 227.7 32 207.1 32 172.3 32 144 58.9 144 92c0 17.4 7.8 33 20.3 44H80c-17.7 0-32 14.3-32 32v20c0 2.2 1.8 4 4 4h408c2.2 0 4-1.8 4-4v-20c0-17.7-14.3-32-32-32zM304.9 60c18.6 0 33.7 14.3 33.7 32s-15.1 32-33.7 32h-33.7c0-48 15.1-64 33.7-64zm-97.8 0c18.6 0 33.7 16 33.7 64h-33.7c-18.6 0-33.7-14.3-33.7-32s15.1-32 33.7-32zM64 226v222c0 17.6 14.4 32 32 32h146V218H72c-4.4 0-8 3.6-8 8zM440 218H270v262h146c17.6 0 32-14.4 32-32V226c0-4.4-3.6-8-8-8z"}}]})(props);
};
function IoIosGitBranch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M352 96c-38.6 0-70 31.4-70 70 0 33.4 23.7 61.9 55.9 68.5-1.2 19.1-10.3 29.3-27 42.2-20.4 15.7-46.7 20-65.3 23.4-40.7 7.4-62.9 27-72.5 40V170.8c15-2.8 28.7-10.5 39-21.9 11.6-12.9 18-29.5 18-46.9 0-38.6-31.4-70-70-70s-70 31.4-70 70c0 17 6.2 33.3 17.3 46.1 9.9 11.3 23.1 19.1 37.7 22.3v171.3c-14.5 3.2-27.8 11-37.7 22.3C96.2 376.7 90 393 90 410c0 38.6 31.4 70 70 70s70-31.4 70-70c0-23.4-11.6-44.9-30.7-57.9 8.6-9.7 24.5-19.6 51.1-24.4 21.6-3.9 52.6-9.6 77.4-28.8 23.6-18.2 36.7-36.5 38-64.3 32.3-6.5 56.1-35.1 56.1-68.6.1-38.6-31.3-70-69.9-70zm-234 6c0-23.2 18.8-42 42-42s42 18.8 42 42-18.8 42-42 42-42-18.8-42-42zm84 308c0 23.2-18.8 42-42 42s-42-18.8-42-42 18.8-42 42-42 42 18.8 42 42zm150-202c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z"}}]})(props);
};
function IoIosGitCommit (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M466 242h-76.7c-3.3-31.9-17.8-61.3-41.3-83.5-25-23.5-57.7-36.5-92-36.5s-67 13-91.9 36.5c-23.5 22.2-38 51.6-41.3 83.5H46c-7.7 0-14 6.3-14 14s6.3 14 14 14h76.7c3.3 31.9 17.8 61.3 41.3 83.5 25 23.5 57.7 36.5 92 36.5s67-13 91.9-36.5c23.5-22.2 38-51.6 41.3-83.5H466c7.7 0 14-6.3 14-14s-6.3-14-14-14zm-135 89c-20 20-46.6 31-75 31-28.3 0-54.9-11-75-31-20-20-31-46.6-31-75s11-54.9 31-75c20-20 46.6-31 75-31 28.3 0 54.9 11 75 31 20 20 31 46.6 31 75s-11 54.9-31 75z"}}]})(props);
};
function IoIosGitCompare (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M233.9 328.1c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-2.6 2.6-4.1 6.1-4.1 9.9 0 3.7 1.4 7.3 4.1 9.9l.1.1 41.1 40.1H166c-20.4 0-33.6-7.5-41.6-23.5-8.4-17-9.4-41.5-9.4-58.5V170.8c15-2.8 28.7-10.5 39-21.9 11.6-12.9 18-29.5 18-46.9 0-38.6-31.4-70-70-70s-70 31.4-70 70c0 17 6.2 33.3 17.3 46.1 9.9 11.3 23.1 19.1 37.7 22.3V306c0 14.7 0 42.1 9.4 65.3 11.9 29.3 36 44.7 69.6 44.7h89.7L216 456.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l57.6-57.4c4.2-4.2 6.5-9.8 6.5-15.7 0-5.9-2.3-11.3-6.5-15.5l-59.5-59.2zM102 144c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM425 341.6V206c0-14.7 0-42.1-9.4-65.3-11.9-29.2-36-44.7-69.6-44.7h-89.7L296 55.8c5.4-5.4 5.4-14.3 0-19.8l-.1-.1c-2.7-2.5-6.2-3.9-9.8-3.9-3.8 0-7.3 1.4-9.9 4.1l-57.6 57.4c-4.2 4.2-6.5 9.8-6.5 15.7 0 5.9 2.3 11.3 6.5 15.5l59.6 59.4c2.6 2.6 6.1 4.1 9.9 4.1 3.7 0 7.3-1.4 9.9-4.1 2.6-2.6 4.1-6.1 4.1-9.9 0-3.7-1.4-7.3-4.1-9.9l-.1-.1-41.2-40.2H346c20.4 0 33.6 7.5 41.6 23.5 8.4 17 9.4 41.5 9.4 58.5v135.2c-15 2.8-28.7 10.5-39 21.9-11.6 12.9-18 29.5-18 46.9 0 38.6 31.4 70 70 70s70-31.4 70-70c0-17-6.2-33.3-17.3-46.1-9.9-11.3-23.2-19.1-37.7-22.3zM410 452c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z"}}]})(props);
};
function IoIosGitMerge (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M378 218c-33.5 0-62.1 23.8-68.6 56.1-10.3-.5-18.4-2.7-39.2-10.8-30.5-11.9-71.8-33.2-111.5-95.8 27.1-10.1 45.4-36 45.4-65.5 0-38.6-31.4-70-70-70s-70 31.4-70 70c0 17 6.2 33.3 17.3 46.1 9.9 11.3 23.1 19.1 37.7 22.3v171.3c-14.5 3.2-27.8 11-37.7 22.3C70.2 376.7 64 393 64 410c0 38.6 31.4 70 70 70s70-31.4 70-70c0-17.4-6.4-34-18-46.9-10.3-11.4-24-19.1-39-21.9V200.3c40.8 56.8 82 77 113 89.1 25.2 9.8 37.1 12.3 49.5 12.8 6.6 32.2 35.2 55.8 68.5 55.8 38.6 0 70-31.4 70-70s-31.4-70-70-70zM176 410c0 23.2-18.8 42-42 42s-42-18.8-42-42 18.8-42 42-42 42 18.8 42 42zm-42-266c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zm244 186c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z"}}]})(props);
};
function IoIosGitNetwork (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M377.4 32c-38.9 0-70.6 31.7-70.6 70.7 0 17.1 6.2 33.7 17.5 46.6 10 11.5 23.5 19.4 38.2 22.5v43.1L256 270.3l-106.4-55.4v-43.1c32.2-6.9 55.7-35.6 55.7-69.1 0-39-31.7-70.7-70.6-70.7S64 63.7 64 102.7c0 17.1 6.2 33.7 17.5 46.6 10 11.5 23.5 19.4 38.2 22.5v57.4c0 2.7 1.5 5.1 3.9 6.3l117.5 60.8v43.9c-32.2 6.9-55.7 35.6-55.7 69.1 0 39 31.7 70.7 70.6 70.7s70.6-31.7 70.6-70.7c0-17.1-6.2-33.7-17.5-46.6-10-11.5-23.5-19.4-38.2-22.5v-43.9l117.5-60.8c2.4-1.2 3.9-3.6 3.9-6.3v-57.4c32.2-6.9 55.7-35.6 55.7-69.1 0-39-31.7-70.7-70.6-70.7zM93.8 102.7c0-22.5 18.3-40.8 40.8-40.8s40.8 18.3 40.8 40.8c0 22.5-18.3 40.8-40.8 40.8s-40.8-18.3-40.8-40.8zm203 306.6c0 22.5-18.3 40.8-40.8 40.8s-40.8-18.3-40.8-40.8c0-22.5 18.3-40.8 40.8-40.8s40.8 18.3 40.8 40.8zm80.6-265.7c-22.5 0-40.8-18.3-40.8-40.8 0-22.5 18.3-40.8 40.8-40.8 22.5 0 40.8 18.3 40.8 40.8 0 22.4-18.3 40.8-40.8 40.8z"}}]})(props);
};
function IoIosGitPullRequest (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M393 341.6V206c0-14.7 0-42.1-9.4-65.3-11.9-29.2-36-44.7-69.6-44.7h-77.7L276 55.8c5.4-5.4 5.4-14.3 0-19.8l-.1-.1c-2.7-2.5-6.2-3.9-9.8-3.9-3.8 0-7.3 1.4-9.9 4.1l-54.8 54.6C192.9 61.5 165.9 40 134 40c-38.6 0-70 31.4-70 70 0 17 6.2 33.3 17.3 46.1 9.9 11.3 23.1 19.1 37.7 22.3v163.3c-14.5 3.2-27.8 11-37.7 22.3C70.2 376.7 64 393 64 410c0 38.6 31.4 70 70 70s70-31.4 70-70c0-17.4-6.4-34-18-46.9-10.3-11.4-24-19.1-39-21.9V178.8c15-2.8 28.7-10.5 39-21.9 7.6-8.4 12.9-18.4 15.7-29.1l56.4 56.2c2.6 2.6 6.1 4.1 9.9 4.1 3.7 0 7.3-1.4 9.9-4.1 2.6-2.6 4.1-6.1 4.1-9.9 0-3.7-1.4-7.3-4.1-9.9l-.1-.1-41.1-40.1H314c20.4 0 33.6 7.5 41.6 23.5 8.4 17 9.4 41.5 9.4 58.5v135.2c-15 2.8-28.7 10.5-39 21.9-11.6 12.9-18 29.5-18 46.9 0 38.6 31.4 70 70 70s70-31.4 70-70c0-17-6.2-33.3-17.3-46.1-9.9-11.3-23.2-19.1-37.7-22.3zM176 410c0 23.2-18.8 42-42 42s-42-18.8-42-42 18.8-42 42-42 42 18.8 42 42zm-42-258c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zm244 300c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z"}}]})(props);
};
function IoIosGlasses (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M464.5 240.9h-6.2c-3.3-21.1-13.3-40.5-28.5-55.2-17.3-16.6-39.8-25.8-63.4-25.8-20.5 0-40 6.7-56.2 19.4-13.8 10.8-24.2 25.1-30.5 41.7-7-4.6-15.4-7.3-23.7-7.3-8.3 0-16.7 2.6-23.7 7.3-6.2-16.6-16.6-30.9-30.5-41.7-16.2-12.7-35.7-19.4-56.2-19.4-23.6 0-46.1 9.1-63.4 25.6C67 200.4 57 219.9 53.7 241h-6.2c-8 0-14.5 6.7-14.5 15s6.5 15 14.5 15h6.2c3.3 21.2 13.3 40.6 28.5 55.3 17.3 16.6 39.8 25.8 63.4 25.8 51.3 0 93.1-43 93.1-95.9v-.2c0-5.9 6.9-14.9 17.3-14.9s17.3 9 17.3 14.9v.1c0 52.9 41.8 95.9 93.1 95.9 23.7 0 46.2-9.1 63.4-25.8 15.2-14.7 25.2-34.2 28.5-55.4h6.2c8 0 14.5-6.7 14.5-15 0-8.1-6.5-14.9-14.5-14.9z"}}]})(props);
};
function IoIosGlobe (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48h-.7c-55.4.2-107.4 21.9-146.6 61.1C69.6 148.4 48 200.5 48 256s21.6 107.6 60.8 146.9c39.1 39.2 91.2 60.9 146.6 61.1h.7c114.7 0 208-93.3 208-208S370.7 48 256 48zm180.2 194h-77.6c-.9-26.7-4.2-52.2-9.8-76.2 17.1-5.5 33.7-12.5 49.7-21 22 28.2 35 61.6 37.7 97.2zM242 242h-61.8c.8-24.5 3.8-47.7 8.8-69.1 17.4 3.9 35.1 6.3 53 7.1v62zm0 28v61.9c-17.8.8-35.6 3.2-53 7.1-5-21.4-8-44.6-8.8-69H242zm28 0h61.3c-.8 24.4-3.8 47.6-8.8 68.9-17.2-3.9-34.8-6.2-52.5-7V270zm0-28v-62c17.8-.8 35.4-3.2 52.5-7 5 21.4 8 44.5 8.8 69H270zm109.4-117.9c-12.3 6.1-25 11.3-38 15.5-7.1-21.4-16.1-39.9-26.5-54.5 24 8.3 45.9 21.6 64.5 39zM315 146.8c-14.7 3.2-29.8 5.2-45 6V79.4c17 9.2 33.6 33.9 45 67.4zM242 79v73.7c-15.4-.8-30.6-2.8-45.5-6.1 11.6-33.8 28.4-58.5 45.5-67.6zm-45.6 6.4c-10.3 14.5-19.2 32.9-26.3 54.1-12.8-4.2-25.4-9.4-37.5-15.4 18.4-17.3 40.1-30.5 63.8-38.7zm-82.9 59.5c15.8 8.4 32.3 15.4 49.2 20.8-5.7 23.9-9 49.5-9.8 76.2h-77c2.6-35.4 15.6-68.8 37.6-97zM75.8 270h77c.9 26.7 4.2 52.3 9.8 76.2-16.9 5.5-33.4 12.5-49.2 20.8-21.9-28.1-34.9-61.5-37.6-97zm56.7 117.9c12.1-6 24.7-11.2 37.6-15.4 7.1 21.3 16 39.6 26.3 54.2-23.7-8.4-45.4-21.5-63.9-38.8zm64-22.6c14.9-3.3 30.2-5.3 45.5-6.1V433c-17.2-9.1-33.9-33.9-45.5-67.7zm73.5 67.3v-73.5c15.2.8 30.3 2.8 45 6-11.4 33.6-28 58.3-45 67.5zm45-5.7c10.4-14.6 19.4-33.1 26.5-54.5 13 4.2 25.8 9.5 38 15.6-18.6 17.3-40.6 30.6-64.5 38.9zm83.5-59.8c-16-8.5-32.6-15.5-49.7-21 5.6-23.9 8.9-49.4 9.8-76.1h77.6c-2.7 35.5-15.6 68.9-37.7 97.1z"}}]})(props);
};
function IoIosGrid (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M206 308h100c1.1 0 2-.9 2-2V206c0-1.1-.9-2-2-2H206c-1.1 0-2 .9-2 2v100c0 1.1.9 2 2 2z"}},{"tag":"path","attr":{"d":"M64 96v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zm330 108h-56c-1.1 0-2 .9-2 2v100c0 1.1.9 2 2 2h56c7.7 0 14 6.3 14 14s-6.3 14-14 14h-56c-1.1 0-2 .9-2 2v56c0 7.7-6.3 14-14 14s-14-6.3-14-14v-56c0-1.1-.9-2-2-2H206c-1.1 0-2 .9-2 2v56c0 7.7-6.3 14-14 14s-14-6.3-14-14v-56c0-1.1-.9-2-2-2h-56c-7.7 0-14-6.3-14-14s6.3-14 14-14h56c1.1 0 2-.9 2-2V206c0-1.1-.9-2-2-2h-56c-7.7 0-14-6.3-14-14s6.3-14 14-14h56c1.1 0 2-.9 2-2v-56c0-7.7 6.3-14 14-14s14 6.3 14 14v56c0 1.1.9 2 2 2h100c1.1 0 2-.9 2-2v-56c0-7.7 6.3-14 14-14s14 6.3 14 14v56c0 1.1.9 2 2 2h56c7.7 0 14 6.3 14 14s-6.3 14-14 14z"}}]})(props);
};
function IoIosHammer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M277.6 246.9c-1.1-2-2.5-3.9-4.1-5.5l-18.4-18.2c-1.9-1.9-4.1-3.5-6.6-4.6-8.2-3.6-17.4-1.7-23.4 4.3-6.4 6.3-18.1 17.8-39.2 38.7-40.4 40-98.1 89.6-132 118.2-7.2 6.1-7.7 17-1.1 23.7L92 443.2c6.7 6.7 17.6 6.3 23.8-.9 29.4-34.6 79.5-92.3 119.4-131.8 20.5-20.2 32-31.8 38.5-38.2 6.5-6.6 8.3-16.7 3.9-25.4zM462.4 218.1l-34.5-34.2c-1.1-1.1-2.5-1.6-4-1.6-1.4 0-2.9.5-4 1.6-2.5 2.5-6.1 3.8-9.6 3.3-4.5-.5-9.3-1.9-12.4-4.9-7-6.9 1.1-20.5-5.1-29.2-6.2-8.7-16.1-19.8-23.2-26.9-7.1-7-35-33.7-82-52.9-16.6-6.8-32.8-9.3-47.3-9.3-26.5 0-47.4 8.5-54.8 15.3-5.5 5.1-11.2 14.1-3.1 14.1.7 0 1.5-.1 2.4-.2 4.5-.7 13.3-1.5 23.4-1.5 15.7 0 34.5 2.1 44.6 10.1 16.3 13.1 29.8 30.6 30.9 53.2.8 16.8-3.4 28.2-18.7 45.5-2.8 3.2-2.6 8 .4 10.9l19.2 19.2c3.1 3.1 8.1 3.1 11.2.1 14-13.6 22.1-20.2 31.3-22.7 4-1.1 8.4-1.6 12.8-1.6 9.7 0 19.2 2.2 23.6 4.6 1.1.6 2.1 1.4 3.1 2.4 6.5 6.6 6.1 17.4-.5 23.9l-2 1.9c-2.2 2.2-2.2 5.7 0 7.9l34.5 34.2c1.1 1.1 2.5 1.6 4 1.6 1.4 0 2.9-.5 4-1.6l55.8-55.2c2.1-2.3 2.1-5.8 0-8z"}}]})(props);
};
function IoIosHand (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M394.9 117.3c-11.6 0-21.1 9.3-21.1 20.6v109.4c0 4.8-4 8.7-8.9 8.7s-8.9-3.9-8.9-8.7V85.9c0-11.3-9.5-20.6-21.1-20.6-11.6 0-21.1 9.3-21.1 20.6v126.8c0 4.8-4 8.7-8.9 8.7s-8.9-3.9-8.9-8.7V68.6c0-11.3-9.5-20.6-21.1-20.6-11.6 0-21.1 9.3-21.1 20.6V230c0 4.8-4 8.7-8.9 8.7s-8.9-3.9-8.9-8.7V103.2c0-11.3-9.5-20.6-21.1-20.6-11.6 0-21.1 9.3-21.1 20.6v218.3L166 297.9c-26.1-22.7-48.2-32.4-66.2-15.7-12.1 11.8 6.9 30.9 26.8 53.2 19.2 21.5 70 91.9 113.3 117.3 0 0 16.7 11.4 40.6 11.4h57.2c46.1 0 78.4-37.9 78.4-93.2v-233c-.1-11.3-9.6-20.6-21.2-20.6z"}}]})(props);
};
function IoIosHappy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm72 152c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm-144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm72 169c-44.7 0-82.3-29.9-94.2-70.7-1.5-5.1 2.3-10.3 7.7-10.3h172.9c5.3 0 9.2 5.1 7.7 10.3-11.8 40.8-49.4 70.7-94.1 70.7z"}}]})(props);
};
function IoIosHeadset (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 123.8c-24.3 0-46.9 10.1-63.9 28.4-17 18.3-26.1 33.2-26.1 59.6 0 7.7 5.9 14 13.2 14 7.3 0 13.2-6.3 13.2-14 0-17.3 6.6-32.4 19-43.5 11.8-10.6 27.7-16.5 44.7-16.5s32.9 5.8 44.7 16.5c12.4 11.2 19 26.2 19 43.5 0 7.7 5.9 14 13.2 14 7.3 0 13.2-6.3 13.2-14 0-26.4-9.2-41.3-26.1-59.6-17.2-18.4-39.8-28.4-64.1-28.4z"}},{"tag":"path","attr":{"d":"M457.1 278.9C442.3 264.1 422.8 256 402 256h-8c-2.2 0-4-1.8-4-4v-37.8c0-35.7-14-69.3-39.4-94.7C325.3 94 291.7 80 256 80c-35.7 0-69.3 14-94.6 39.4-25.4 25.4-39.4 59-39.4 94.7V252c0 2.2-1.8 4-4 4h-8c-20.8 0-40.3 8.1-55.1 22.9C40.1 293.7 32 313.2 32 334v11.8c0 20.8 8.1 40.4 22.9 55.2 14.8 14.8 34.4 23 55.1 23h5.6c4 0 8 1.4 10.9 4.1 2.5 2.3 5.9 3.8 9.5 3.8 7.7 0 14-6.3 14-14.1V214.1c0-28.2 11.1-54.8 31.2-74.9 20.1-20.1 46.7-31.2 74.8-31.2 28.2 0 54.8 11.1 74.8 31.2 20.1 20.1 31.2 46.7 31.2 74.9v203.8c0 7.8 6.3 14.1 14 14.1 3.6 0 7-1.5 9.5-3.8 2.9-2.7 6.9-4.1 10.9-4.1h5.6c20.7 0 40.3-8.2 55.1-23 14.8-14.8 22.9-34.4 22.9-55.2V334c0-20.8-8.1-40.3-22.9-55.1z"}}]})(props);
};
function IoIosHeartDislike (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M423.8 426.8L56.3 65.1c-5.6-5.5-14.6-5.5-20.1.1-5.5 5.5-5.5 14.5 0 20l367.5 361.7c3.7 3.7 9 4.9 13.7 3.6 2.4-.6 4.6-1.9 6.4-3.7 5.6-5.5 5.6-14.5 0-20zM64 169c0 37 15.2 89.5 46.8 132.7C171 384 272 456 272 456s29.3-20.3 65.7-51.6L68 139c-2.6 9.6-4 19.6-4 30zM434.2 301.7C465.8 258.5 480 206 480 169c0-62.1-50.1-112.4-112-113h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-29.2.3-55.8 11.6-75.7 30l281.9 277.4c19.3-19.1 36.2-40 52-61.7z"}}]})(props);
};
function IoIosHeartEmpty (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C351 343.5 286.1 397.3 256 420.8c-30.1-23.5-95-77.4-137.6-135.7C89.1 245.1 76 198 76 169c0-22.6 8.8-43.8 24.6-59.8 15.9-16 37-24.9 59.6-25.1H161.1c14.3 0 28.5 3.7 41.1 10.8 12.2 6.9 22.8 16.7 30.4 28.5 5.2 7.9 14 12.7 23.5 12.7s18.3-4.8 23.5-12.7c7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.2 29-13.3 76.1-42.6 116.2z"}}]})(props);
};
function IoIosHeartHalf (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C356.4 336 302.2 383.6 269 410.5c-5.2 4.2-13 .5-13-6.2V198.6c0-26.8 8.5-52.7 23.3-75 .1-.1.1-.2.2-.2 7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.1 29-13.2 76.1-42.5 116.2z"}}]})(props);
};
function IoIosHeart (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113z"}}]})(props);
};
function IoIosHelpBuoy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm54.6 36.4c27.1 8.6 52 23.6 72.7 44.3 20.7 20.7 35.7 45.6 44.3 72.7l-88.8 6c-8.2-14-19.9-25.7-33.9-34l5.7-89zm-181.9 44.3c20.7-20.7 45.5-35.7 72.7-44.3l5.7 89c-13.9 8.3-25.6 20-33.9 33.9l-88.9-5.9c8.7-27.1 23.7-52 44.4-72.7zm72.7 298.9c-27.1-8.6-52-23.6-72.7-44.3-20.7-20.7-35.7-45.6-44.3-72.7l89-5.7c8.2 13.9 19.9 25.5 33.8 33.8l-5.8 88.9zM256 324c-37.5 0-68-30.5-68-68s30.5-68 68-68 68 30.5 68 68-30.5 68-68 68zm127.3 59.3c-20.7 20.7-45.6 35.7-72.7 44.3l-5.9-88.9c14.1-8.3 25.8-20.1 34.1-34.2l88.8 6c-8.6 27.2-23.6 52.1-44.3 72.8z"}}]})(props);
};
function IoIosHelpCircleOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}},{"tag":"path","attr":{"d":"M256.7 160c37.5 0 63.3 20.8 63.3 50.7 0 19.8-9.6 33.5-28.1 44.4-17.4 10.1-23.3 17.5-23.3 30.3v7.9h-34.7l-.3-8.6c-1.7-20.6 5.5-33.4 23.6-44 16.9-10.1 24-16.5 24-28.9s-12-21.5-26.9-21.5c-15.1 0-26 9.8-26.8 24.6H192c.7-32.2 24.5-54.9 64.7-54.9zm-26.3 171.4c0-11.5 9.6-20.6 21.4-20.6 11.9 0 21.5 9 21.5 20.6s-9.6 20.6-21.5 20.6-21.4-9-21.4-20.6z"}}]})(props);
};
function IoIosHelpCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-4.3 304c-11.8 0-21.4-9-21.4-20.6 0-11.5 9.6-20.6 21.4-20.6 11.9 0 21.5 9 21.5 20.6 0 11.6-9.5 20.6-21.5 20.6zm40.2-96.9c-17.4 10.1-23.3 17.5-23.3 30.3v7.9h-34.7l-.3-8.6c-1.7-20.6 5.5-33.4 23.6-44 16.9-10.1 24-16.5 24-28.9s-12-21.5-26.9-21.5c-15.1 0-26 9.8-26.8 24.6H192c.7-32.2 24.5-55 64.7-55 37.5 0 63.3 20.8 63.3 50.7 0 19.9-9.6 33.6-28.1 44.5z"}}]})(props);
};
function IoIosHelp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256.7 160c37.5 0 63.3 20.8 63.3 50.7 0 19.8-9.6 33.5-28.1 44.4-17.4 10.1-23.3 17.5-23.3 30.3v7.9h-34.7l-.3-8.6c-1.7-20.6 5.5-33.4 23.6-44 16.9-10.1 24-16.5 24-28.9s-12-21.5-26.9-21.5c-15.1 0-26 9.8-26.8 24.6H192c.7-32.2 24.5-54.9 64.7-54.9zm-26.3 171.4c0-11.5 9.6-20.6 21.4-20.6 11.9 0 21.5 9 21.5 20.6s-9.6 20.6-21.5 20.6-21.4-9-21.4-20.6z"}}]})(props);
};
function IoIosHome (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M258.5 104.1c-1.5-1.2-3.5-1.2-5 0l-156 124.8c-.9.8-1.5 1.9-1.5 3.1v230c0 1.1.9 2 2 2h108c1.1 0 2-.9 2-2V322c0-1.1.9-2 2-2h92c1.1 0 2 .9 2 2v140c0 1.1.9 2 2 2h108c1.1 0 2-.9 2-2V232c0-1.2-.6-2.4-1.5-3.1l-156-124.8z"}},{"tag":"path","attr":{"d":"M458.7 204.2l-189-151.4C265.9 49.7 261 48 256 48s-9.9 1.7-13.7 4.8L160 119.7V77.5c0-1.1-.9-2-2-2H98c-1.1 0-2 .9-2 2v92.2l-42.7 35.1c-3.1 2.5-5.1 6.2-5.3 10.2-.2 4 1.3 7.9 4.1 10.7 2.6 2.6 6.1 4.1 9.9 4.1 3.2 0 6.3-1.1 8.8-3.1l183.9-148c.5-.4.9-.4 1.3-.4s.8.1 1.3.4l183.9 147.4c2.5 2 5.6 3.1 8.8 3.1 3.7 0 7.2-1.4 9.9-4.1 2.9-2.8 4.4-6.7 4.2-10.7-.3-4-2.2-7.7-5.4-10.2z"}}]})(props);
};
function IoIosHourglass (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M415.6 434h-5.1c-6.5 0-12-.9-12.7-7.4v-.1C383.2 290.6 297.6 288 297.6 256s85.7-34.6 100.2-170.5v-.1c.7-6.5 6.2-7.4 12.7-7.4h5.1c7.5 0 14-5.8 14.4-13.3.4-8-6-14.7-14-14.7H96.4c-7.5 0-14 5.8-14.4 13.3-.4 8 6 14.7 14 14.7h5.5c6.5 0 12 .9 12.7 7.4v.1C128.8 221.4 214.4 224 214.4 256s-85.7 34.6-100.2 170.5v.1c-.7 6.5-6.2 7.4-12.7 7.4h-5.1c-7.5 0-14 5.8-14.4 13.3-.4 8 6 14.7 14 14.7h320c8 0 14.4-6.6 14-14.7-.4-7.5-6.9-13.3-14.4-13.3zm-252.3-34.2c28.7-79.8 79.6-70.1 79.6-101.6v-55.6c0-19.4-36.8-32.9-59.8-64.4-3.8-5.2 0-12.4 6.5-12.4h132.9c6.5 0 10.4 7 6.7 12.2-22.6 31.6-60.1 45.2-60.1 64.6v55.6c0 31.2 48.9 22.7 79.8 101.6 2.8 7.1.7 16-6.9 16H170.2c-7.7 0-9.5-8.8-6.9-16z"}}]})(props);
};
function IoIosIceCream (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M220.8 406.1l4.8 14.8c.4 1.2 1.9 1.8 3 1.1l6.8-4.2c2.5-1.6 2.5-5.2 0-6.8l-11.5-7.2c-1.7-1-3.6.5-3.1 2.3zM286.6 421l4.9-15.2c.6-1.8-1.4-3.3-3-2.3l-11.9 7.4a4.02 4.02 0 0 0 0 6.8l7 4.4c1.2.7 2.6.1 3-1.1zM188.6 242.2c-3.9 3.5-9.6 6.4-15.7 8.5-1 .4-1.6 1.5-1.2 2.5l9.3 28.9 3.8 11.8c.4 1.2 1.9 1.8 3 1.1l7-4.3 36.6-22.5c3-1.9 2.3-6.5-1.2-7.3-14.3-3.3-26.5-9.8-36.2-18.5-1.6-1.4-3.9-1.5-5.4-.2zM192.6 310.8l-2 1.2 14.6 45.3c.4 1.2 1.9 1.8 3 1.1l27.2-16.9c2.5-1.6 2.5-5.2 0-6.8l-38.5-23.9c-1.4-.8-3-.8-4.3 0zM258.1 348.9c-1.3-.8-2.9-.8-4.2 0L212 374.5l-.1.1c-1 .8-1 2.4 0 3.2l.7.5 41.3 25.3c1.3.8 2.9.8 4.2 0l41.7-25.5.4-.3c1-.8 1-2.2 0-3l-42.1-25.9zM296.7 296.6l-38.5-23.9c-1.3-.8-2.9-.8-4.2 0l-38.5 23.9a4.02 4.02 0 0 0 0 6.8l38.5 23.9c1.3.8 2.9.8 4.2 0l38.5-23.9c2.5-1.5 2.5-5.2 0-6.8zM318.1 242.3c-9.7 8.7-22 15.1-36.2 18.5-3.5.8-4.2 5.4-1.2 7.3l36.6 22.5 7.4 4.6c1.1.7 2.6.2 3-1.1l4-12.4 9.8-30.3c-6.9-2.1-13.6-5.3-18-9.2-1.6-1.3-3.9-1.2-5.4.1zM232.4 442l1.6 5s7.5 19 22 19c15 0 22.2-19 22.2-19l1.6-4.8c.6-1.7-.1-3.7-1.7-4.6l-20-12.4c-1.3-.8-2.9-.8-4.2 0l-19.8 12.3c-1.6.8-2.3 2.7-1.7 4.5zM276.7 341.5l27.5 17.1c1.1.7 2.6.2 3-1.1l14.2-43.8c.3-.9-.1-1.8-.8-2.3l-1-.6c-1.3-.8-2.9-.8-4.2 0l-38.5 23.9c-2.8 1.6-2.8 5.3-.2 6.8z"}},{"tag":"path","attr":{"d":"M376.1 168.2c-6.2 5.4-13.2 8.7-18 10.5-1.8.7-3.5-1.4-2.3-3l4-5.7c6.1-8.7 8.5-19.4 6.8-29.8C357.9 86.8 311.7 46 256 46c-55.7 0-101.9 41.2-110.6 94.7-1.7 10.5.8 21.2 6.9 29.8l4 5.6c1.2 1.6-.5 3.8-2.4 3-5.4-2.1-13.5-6.2-20.1-12.8-1.4-1.4-3.6-1.5-5.2-.4-10.2 7.3-16.8 19.1-16.8 32.5 0 22.1 17.9 40 40 40 11.3 0 28-4.7 36.6-12.3 1.5-1.3 3.8-1.3 5.3.1 15.2 13.4 36.6 20.2 62.1 20.2s47-6.8 62.1-20.2c1.5-1.3 3.8-1.4 5.3-.1 8.5 7.6 25.3 12.3 36.6 12.3 22.1 0 40-18 40-40.1 0-11.9-5.2-22.6-13.5-30-2.7-2.6-7.2-2.7-10.2-.1z"}}]})(props);
};
function IoIosImage (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M112.6 312.3h190.7c4.5 0 7.1-5.1 4.5-8.8l-95.4-153.4c-2.2-3.2-6.9-3.2-9.1 0L108 303.5c-2.6 3.7.1 8.8 4.6 8.8zM306.7 254.3l35 55.7c1 1.5 2.7 2.4 4.5 2.4h53.2c4.5 0 7.1-5.1 4.5-8.8l-61.6-87.7c-2.2-3.2-6.9-3.2-9.1 0L306.6 248c-1.2 1.8-1.2 4.3.1 6.3zM351.1 167.9c13.1-1.3 23.7-11.9 25-25 1.8-17.7-13-32.5-30.7-30.7-13.1 1.3-23.7 11.9-25 25-1.7 17.7 13 32.5 30.7 30.7z"}},{"tag":"path","attr":{"d":"M432 48H80c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zm-2.7 280c0 4.4-3.6 8-8 8H90.7c-4.4 0-8-3.6-8-8V90.7c0-4.4 3.6-8 8-8h330.7c4.4 0 8 3.6 8 8V328z"}}]})(props);
};
function IoIosImages (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M262.3 199.2c-1.6-2.8-5.6-3.2-7.7-.7l-91.9 122.2c-2.5 2.9-.6 7.4 3.2 7.7l161.1 14c3.8.3 6.4-3.8 4.5-7.1l-69.2-136.1zM367.2 264.1c-1.6-2.8-5.6-3.2-7.7-.7l-24.8 25.1a4.68 4.68 0 0 0-.5 5.4l25.4 49.5c.8 1.3 2.1 2.2 3.7 2.3l44.9 3.9c3.8.3 6.4-3.8 4.5-7.1l-45.5-78.4zM378.1 224.4c11.2-.1 20.9-8.3 23-19.2 2.8-14.8-8.6-28.3-23.7-28.1-11.2.1-20.9 8.3-23 19.2-2.8 14.8 8.6 28.3 23.7 28.1z"}},{"tag":"path","attr":{"d":"M455.2 129.3l-65.8-5.7-6.1-67c-1.3-14.9-14.5-25.9-29.5-24.5L56.7 58.9c-14.9 1.3-25.9 14.5-24.6 29.4l26.8 296.5c1.3 14.9 14.5 25.9 29.5 24.5l15.7-1.4-1.5 16.7c-1.3 14.9 9.7 28 24.7 29.3l297.3 25.9c14.9 1.3 28.1-9.7 29.4-24.6l26-296.6c1.2-14.8-9.8-28-24.8-29.3zM87.6 300.7c-3.7.3-7-2.4-7.4-6.1l-18-200c-.3-3.7 2.4-7 6.1-7.3l279.2-25.1c3.7-.3 7 2.4 7.4 6.1l4.8 52.8L158 103.4c-14.9-1.3-28.1 9.7-29.4 24.6l-14.9 170.3-26.1 2.4zm362.2-135.6l-17.5 200c-.3 3.7-3.6 6.5-7.3 6.2l-18.6-1.6L145.7 347c-3.7-.3-6.5-3.6-6.2-7.3l3.8-43.9L157 139.7c.3-3.7 3.6-6.5 7.3-6.2l198 17.3 29.7 2.6 51.6 4.5c3.8.2 6.6 3.5 6.2 7.2z"}}]})(props);
};
function IoIosInfinite (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M456.8 182.4c-20-19.6-46.8-30.4-75.2-30.4-28.5 0-55.2 10.8-75.2 30.4l-31.2 30c-1.6 1.6-1.6 4.2 0 5.7l19.4 19.1c1.5 1.5 4 1.5 5.6 0l31-30.1c13.5-13.1 31.3-20.3 50.3-20.3 19 0 36.8 7.2 50.3 20.3 13.4 13.1 20.7 30.5 20.7 49 0 18.4-7.4 35.8-20.7 48.7-13.5 13.1-31.3 20.3-50.3 20.3-19 0-36.8-7.2-50.3-20.3L205.6 182.4c-20.2-19.6-46.9-30.4-75.2-30.4-28.5 0-55.2 10.8-75.2 30.4C35.1 202 24 228.1 24 256c0 27.8 11.1 54 31.2 73.6 20 19.6 46.8 30.4 75.2 30.4 28.5 0 55.2-10.8 75.2-30.4l31-30c1.6-1.6 1.6-4.2 0-5.7L217.2 275c-1.5-1.5-4-1.5-5.6 0l-31 29.9c-13.5 13.1-31.3 20.3-50.3 20.3-19 0-36.8-7.2-50.3-20.3-13.4-13.1-20.7-30.5-20.7-49 0-18.4 7.4-35.7 20.7-48.7 13.5-13.1 31.3-20.3 50.3-20.3 19 0 36.8 7.2 50.3 20.3l125.5 122.5c20.2 19.6 46.9 30.4 75.2 30.4 28.5 0 55.2-10.8 75.2-30.4 20.2-19.6 31.3-45.7 31.3-73.6.2-27.9-10.9-54.1-31-73.7z"}}]})(props);
};
function IoIosInformationCircleOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M235.4 172.2c0-11.4 9.3-19.9 20.5-19.9 11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20c-11.2 0-20.5-8.6-20.5-20zm1.4 35.7H275V352h-38.2V207.9z"}},{"tag":"path","attr":{"d":"M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}}]})(props);
};
function IoIosInformationCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm19 304h-38.2V207.9H275V352zm-19.1-159.8c-11.3 0-20.5-8.6-20.5-20s9.3-19.9 20.5-19.9c11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20z"}}]})(props);
};
function IoIosInformation (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M235.4 176c0-11.4 9.3-19.9 20.5-19.9 11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20c-11.2.1-20.5-8.6-20.5-20zm1.4 35.8H275v144.1h-38.2V211.8z"}}]})(props);
};
function IoIosJet (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M464 48s-19.8 1.4-53.1 27.2c-15.5 12-162.2 120.6-162.2 120.6L89 187.9l-41 36.5 102 51.2-8 10.1-81.6 4.1-6.7 33.6 60.6 47.2-26.7 53.6 53.7-26.5 47.3 60.6 33.6-6.7 4.1-81.6 10.1-7.9L287.6 464l36.5-40.9-7.9-159.7s108.6-146.7 120.6-162C462.7 67.8 464 48 464 48z"}}]})(props);
};
function IoIosJournal (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M92.1 32C76.6 32 64 44.6 64 60.1V452c0 15.5 12.6 28.1 28.1 28.1H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H112.5c-8.2 0-15.4-6-16.4-14.1-1.1-9.7 6.5-18 15.9-18h208V32H92.1z"}},{"tag":"path","attr":{"d":"M432 416c8.8 0 16-7.2 16-16V60.1c0-15.5-12.6-28.1-28.1-28.1H368v384h64z"}}]})(props);
};
function IoIosKey (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M344.8 218.1c-13 0-25.6 0-37.4 4.1-50.6-43.1-184.3-156.9-194.5-167.5-4.7-4.9-9.9-6.7-15-6.7-8.5 0-16.7 5.2-21.3 9.6-6.9 6.6-33 34.8-28 40 15 15.4 19 18.5 25.2 24.8 9.3 9.5 28.3-1 36 2.3 7.6 3.3 9.2 6.8 10.4 12.5s-2.9 15.8-3 23.7c-.1 8.3 3.4 12.8 9.2 19 4.6 5 8.9 8.6 15.6 8.7 9 .2 20.9-12.8 30.4-3.1s-6.2 23.7-5 34 15.5 22.8 21.6 24.1c6.1 1.3 21.8-11.7 30.7-9.7 3 .7 10 6.8 11 11.4s-6.9 25-5.9 29.6c1.2 5.6 7.1 12.1 10.4 17.4-6.7 15.5-9.4 29.6-9.4 47.7 0 68.5 53.4 124 119.2 124s119-55.5 119-124-53.4-121.9-119.2-121.9zM368 400c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]})(props);
};
function IoIosKeypad (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M394.6 341.2c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zM256 341.2c-29.5 0-53.4 23.9-53.4 53.4S226.5 448 256 448s53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zM117.4 341.2c-29.5 0-53.4 23.9-53.4 53.4S87.9 448 117.4 448s53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zM394.6 202.6c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4S448 285.5 448 256s-23.9-53.4-53.4-53.4zM256 202.6c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zM117.4 202.6C87.9 202.6 64 226.5 64 256s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zM394.6 64c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4S424.1 64 394.6 64zM256 64c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4S285.5 64 256 64zM117.4 64C87.9 64 64 87.9 64 117.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4S146.9 64 117.4 64z"}}]})(props);
};
function IoIosLaptop (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M448 367.5V129.1c0-9.4-7.9-17.1-17.2-17.1H81.2c-9.3 0-17.2 7.6-17.2 17.1v238.4H15.9c0 9.9 9.9 18.8 18.9 22.7C45.7 394.8 64 400 84 400h344c20 0 38.2-4.5 48.3-8.8 9.5-4 19.8-13.4 19.8-23.7H448zM256 120c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zM82 136.2h348c1.1 0 2 .9 2 2v211.3c0 1.1-.9 2-2 2H82c-1.1 0-2-.9-2-2V138.2c0-1.2.9-2 2-2zm216.3 239.3h-84.6c-5.2 0-9.7-6-9.7-7.5h104c0 1.5-3 7.5-9.7 7.5z"}}]})(props);
};
function IoIosLeaf (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M453.9 378.7c-51.8-8-55.7-11.7-55.7-11.7 15.6-74-22.4-151.1-76.3-195.6C250.1 112.2 141 155.2 56 65.2c-19.8-21-8.3 235.5 98.1 332.7 77.8 71 169.4 49.2 194.5 37.6 22.8-10.6 38.7-33.9 38.7-33.9 41.5 13 62 14.2 62 14.2 14.6 1.8 22-34.4 4.6-37.1zm-91.8 7.4c-77.7-23.3-145.3-81-189.1-126.2-3.6-3.7 1.6-9.2 5.5-6 43.1 35.5 108.9 80 193.3 107.9.2 8.1-4.5 19.7-9.7 24.3z"}}]})(props);
};
function IoIosLink (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z"}},{"tag":"path","attr":{"d":"M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z"}}]})(props);
};
function IoIosListBox (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M48 82.7v346.7c0 19.1 15.5 34.7 34.7 34.7h346.7c19.1 0 34.7-15.5 34.7-34.7V82.7c0-19.1-15.5-34.7-34.7-34.7H82.7C63.5 48 48 63.5 48 82.7zm89.3 297.1c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zm0-104c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zm0-104c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zM384.7 374h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-104h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-104h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14z"}}]})(props);
};
function IoIosList (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"circle","attr":{"cx":"92","cy":"256","r":"28"}},{"tag":"circle","attr":{"cx":"92","cy":"132","r":"28"}},{"tag":"circle","attr":{"cx":"92","cy":"380","r":"28"}},{"tag":"path","attr":{"d":"M432 240H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16zM432 364H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16zM191.5 148H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16z"}}]})(props);
};
function IoIosLocate (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M395.3 259c-.3-1.2-.4-2.4-.3-3.6 0-.8.2-1.6.3-2.4-.4.9-.6 2-.6 3 .1 1.1.3 2.1.6 3z"}},{"tag":"path","attr":{"d":"M459.4 270H409c-6.7 0-12.3-4.7-13.7-11-.3-.9-.5-1.9-.5-3s.2-2.1.6-3c1.4-6.4 7.3-11 14.1-11h49.9c2.4 0 4.2-2 4-4.4-8.8-100.3-88.7-180.2-189-189-2.3-.2-4.4 1.6-4.4 4V103c0 7.9-6.6 14.3-14.6 14-7.6-.3-13.4-6.9-13.4-14.4v-50c0-2.4-2-4.2-4.4-4-100.3 8.8-180.2 88.7-189 189-.2 2.3 1.6 4.4 4 4.4H103c7.9 0 14.3 6.6 14 14.6-.3 7.6-6.9 13.4-14.4 13.4h-50c-2.4 0-4.2 2-4 4.4 8.8 100.3 88.7 180.2 189 189 2.3.2 4.4-1.6 4.4-4V409c0-7.9 6.6-14.3 14.6-14 7.6.3 13.4 6.9 13.4 14.4v49.9c0 2.4 2 4.2 4.4 4 100.3-8.8 180.2-88.7 189-189 .2-2.3-1.7-4.3-4-4.3zM256 326c-38.7 0-70-31.3-70-70s31.3-70 70-70 70 31.3 70 70-31.3 70-70 70z"}}]})(props);
};
function IoIosLock (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M376 192h-24v-46.7c0-52.7-42-96.5-94.7-97.3-53.4-.7-97.3 42.8-97.3 96v48h-24c-22 0-40 18-40 40v192c0 22 18 40 40 40h240c22 0 40-18 40-40V232c0-22-18-40-40-40zM270 316.8v68.8c0 7.5-5.8 14-13.3 14.4-8 .4-14.7-6-14.7-14v-69.2c-11.5-5.6-19.1-17.8-17.9-31.7 1.4-15.5 14.1-27.9 29.6-29 18.7-1.3 34.3 13.5 34.3 31.9 0 12.7-7.3 23.6-18 28.8zM324 192H188v-48c0-18.1 7.1-35.1 20-48s29.9-20 48-20 35.1 7.1 48 20 20 29.9 20 48v48z"}}]})(props);
};
function IoIosLogIn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M417 80H137c-25.4 0-46 20.6-46 46 0 7.7 6.3 14 14 14s14-6.3 14-14c0-9.9 8.1-18 18-18h280c9.9 0 18 8.1 18 18v260c0 9.9-8.1 18-18 18H137c-9.9 0-18-8.1-18-18 0-7.7-6.3-14-14-14s-14 6.3-14 14c0 25.4 20.6 46 46 46h280c25.4 0 46-20.6 46-46V126c0-25.4-20.6-46-46-46z"}},{"tag":"path","attr":{"d":"M224 334.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l82.6-82.4c4.3-4.3 6.5-9.3 6.5-14.7 0-5.3-2.3-10.3-6.5-14.5l-84.6-84.4c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-5.5 5.5-5.5 14.3 0 19.8l65.2 64.2H63c-7.7 0-14 6.3-14 14s6.3 14 14 14h224.6L224 334.2z"}}]})(props);
};
function IoIosLogOut (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M312 372c-7.7 0-14 6.3-14 14 0 9.9-8.1 18-18 18H94c-9.9 0-18-8.1-18-18V126c0-9.9 8.1-18 18-18h186c9.9 0 18 8.1 18 18 0 7.7 6.3 14 14 14s14-6.3 14-14c0-25.4-20.6-46-46-46H94c-25.4 0-46 20.6-46 46v260c0 25.4 20.6 46 46 46h186c25.4 0 46-20.6 46-46 0-7.7-6.3-14-14-14z"}},{"tag":"path","attr":{"d":"M372.9 158.1c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-5.5 5.5-5.5 14.3 0 19.8l65.2 64.2H162c-7.7 0-14 6.3-14 14s6.3 14 14 14h256.6L355 334.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l82.6-82.4c4.3-4.3 6.5-9.3 6.5-14.7 0-5.3-2.3-10.3-6.5-14.5l-84.5-84.2z"}}]})(props);
};
function IoIosMagnet (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M462.2 261.9L289.6 89.3C263 62.7 227.4 48 189.5 48c-38 0-73.5 14.7-100.2 41.3C62.7 116 48 151.5 48 189.5S62.7 263 89.3 289.6l172.6 172.6c1.1 1.1 2.7 1.8 4.3 1.8 1.6 0 3.1-.6 4.3-1.8l57.5-57.5c2.4-2.4 2.4-6.2 0-8.5L165.2 233.3c-13-13-21.2-27.8-22.9-41.7-1.8-13.6 2.7-25.8 13.1-36.3 9.9-9.9 22.4-14.3 36-12.6 14.3 1.7 29.2 9.7 42 22.5L396.2 328c2.4 2.4 6.2 2.4 8.5 0l57.5-57.5c2.4-2.4 2.4-6.2 0-8.6zM275.8 380.2l20.2 20.2-29.8 29.8-20.3-20.2 29.9-29.8zM400.4 296l-20.2-20.2L410 246l20.2 20.2-29.8 29.8z"}}]})(props);
};
function IoIosMailOpen (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M453.5 209.8c-4-4-158.3-161.4-158.3-161.4C284.8 37.8 270.9 32 256 32c-14.9 0-28.8 5.8-39.2 16.5 0 0-153.6 156.5-158.3 161.4C53.9 214.7 48 224.7 48 236v212c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V235c0-11.7-6.6-21.1-10.5-25.2zm-19.4 42.3L353 336.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-151-161.2c-1.6-1.7-4.3-1.7-5.8 0L102.2 438.2c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L77.7 252c-9.7-9.9-2.4-35.8 16.1-35.8h324.4c16.5-.1 25.6 26.1 15.9 35.9z"}}]})(props);
};
function IoIosMailUnread (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"circle","attr":{"cx":"416","cy":"152","r":"48"}},{"tag":"path","attr":{"d":"M416 218.5c-5.4 0-10.6-.7-15.6-1.9L353 264.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 305c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 155.3c-1.3-1.3-3.4-.4-3.4 1.4V376c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V198c-12.1 12.6-29.1 20.5-48 20.5z"}},{"tag":"path","attr":{"d":"M349.5 152c0-11.6 3-22.5 8.2-32H79.9c-7.5 0-14.4 2.6-19.8 7L217 286.7c10.4 10.6 24.3 16.4 39.1 16.4s28.7-5.8 39.1-16.4l80.5-81.9c-16-12.2-26.2-31.3-26.2-52.8z"}}]})(props);
};
function IoIosMail (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"}},{"tag":"path","attr":{"d":"M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"}}]})(props);
};
function IoIosMale (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M450.4 48H341.5c-7.5 0-13.6 6.1-13.6 13.6s6.1 13.6 13.6 13.6h75.4L326.7 166c-30.6-26-69.3-40.3-109.6-40.3-22.8 0-45 4.5-65.8 13.3-20.1 8.5-38.2 20.7-53.8 36.2C82 190.8 69.8 208.9 61.3 229 52.5 249.9 48 272 48 294.9s4.5 45 13.3 65.8c8.5 20.1 20.7 38.2 36.2 53.8 15.5 15.5 33.6 27.7 53.8 36.2 20.9 8.8 43 13.3 65.8 13.3 22.8 0 45-4.5 65.8-13.3 20.1-8.5 38.2-20.7 53.8-36.2 15.5-15.5 27.7-33.6 36.2-53.8 8.8-20.9 13.3-43 13.3-65.8 0-40.3-14.3-79-40.3-109.6L436.7 95v75.4c0 7.5 6.1 13.6 13.6 13.6s13.6-6.1 13.6-13.6V61.6c.1-7.5-6-13.6-13.5-13.6zM359 294.9c0 37.9-14.8 73.5-41.6 100.3-26.8 26.8-62.4 41.6-100.3 41.6s-73.5-14.8-100.3-41.6C90 368.4 75.2 332.8 75.2 294.9s14.8-73.5 41.6-100.3c26.8-26.8 62.4-41.6 100.3-41.6s73.5 14.8 100.3 41.6C344.3 221.3 359 257 359 294.9z"}}]})(props);
};
function IoIosMan (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M255.7 106.6h-.2c-25 0-45.5-20.3-45.5-45.3 0-25 20.4-45.3 45.5-45.3S301 36.3 301 61.3c0 12.1-4.7 23.5-13.3 32-8.5 8.6-19.9 13.3-32 13.3zM221.2 496c-14.4 0-27-10.5-27-30.4l1-277.6h-10v105c0 9.3-3 15.1-6.4 18.3-4.3 4.1-9.1 6.4-15.2 6.4-6.2 0-10.9-2.3-15.2-6.4-3.4-3.2-6.4-8.9-6.4-18.3V171.4c0-13.8 4.4-27.8 13.8-38.4 10.4-11.6 23.6-18 39-18h122.3c15.4 0 28.6 6.4 39 18.1 9.4 10.6 13.8 24.5 13.8 38.3V293c0 7.3-1.7 13.8-6.6 18.3-4.4 4-9.3 6.2-15.5 6.2s-11.1-2.2-15.5-6.2c-4.9-4.5-6.6-11-6.6-18.3V188h-9v277.6c0 19.7-13.4 30.4-27.8 30.4-13.4 0-26.3-9.3-27.4-29.8V325h-12v140.9c-.7 19.7-13.8 30.1-28.3 30.1z"}}]})(props);
};
function IoIosMap (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M64 72.5v316.3c0 2.8 1.3 5.5 3.5 7l69.8 50.2c5.2 3.7 12.1-.3 12.1-7V122.7c0-2.8-1.3-5.5-3.5-7L76.1 65.4c-5.2-3.7-12.1.3-12.1 7.1zM168.7 123.3v316.3c0 6.7 6.9 10.8 12.1 7l62-36.7c2.2-1.6 3.5-4.2 3.5-7V86.6c0-6.7-6.9-10.8-12.1-7l-62 36.7c-2.2 1.5-3.5 4.1-3.5 7zM435.9 65.5l-69.8 50.7c-2.2 1.6-3.5 4.2-3.5 7v316.2c0 6.8 6.9 10.8 12.1 7l69.8-50.7c2.2-1.6 3.5-4.2 3.5-7V72.5c0-6.7-6.9-10.7-12.1-7zM265.7 85.6v316.2c0 2.8 1.3 5.5 3.5 7l62 37c5.2 3.8 12.1-.3 12.1-7V122.6c0-2.8-1.3-5.5-3.5-7l-62-37c-5.2-3.7-12.1.3-12.1 7z"}}]})(props);
};
function IoIosMedal (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M50 124c-1.1 0-2 .9-2 2v59.9c0 14.4 9.6 27 23.4 30.8l104 29.4c1.3.4 2.5-.6 2.5-1.9V126c0-1.1-.9-2-2-2H50zM204 126v126.2c0 .9.6 1.7 1.5 1.9l50 13.9c.4.1.7.1 1.1 0l56-15.6c.9-.2 1.5-1 1.5-1.9V126c0-1.1-.9-2-2-2H206c-1.1 0-2 .9-2 2zM334 126v119.2c0 1.3 1.3 2.3 2.6 1.9l104-30.4c13.8-3.9 23.4-16.5 23.4-30.8V126c0-1.1-.9-2-2-2H336c-1.1 0-2 .9-2 2zM48 64v38c0 1.1.9 2 2 2h412c1.1 0 2-.9 2-2V64c0-17.7-14.3-32-32-32H80c-17.7 0-32 14.3-32 32z"}},{"tag":"g","attr":{},"child":[{"tag":"circle","attr":{"cx":"256","cy":"352","r":"56"}},{"tag":"path","attr":{"d":"M351.3 266.6l-51.5 13.8c24 14.8 40.1 41.3 40.1 71.6 0 46.3-37.7 84-84 84s-84-37.7-84-84c0-30.4 16.2-57 40.4-71.8L161 266.1c-20.5 22.7-33 52.8-33 85.9 0 70.7 57.3 128 128 128s128-57.3 128-128c0-32.8-12.4-62.7-32.7-85.4z"}},{"tag":"path","attr":{"d":"M256 296c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56z"}}]}]})(props);
};
function IoIosMedical (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M430.3 174.3l-16.5-28.6c-4.3-7.4-13.8-10-21.2-5.7L294 197c-2.7 1.5-6-.4-6-3.5v-114c0-8.6-6.9-15.5-15.5-15.5h-33c-8.6 0-15.5 6.9-15.5 15.5v114.1c0 3.1-3.3 5-6 3.5l-98.6-57c-7.4-4.3-16.9-1.7-21.2 5.7l-16.5 28.6c-4.3 7.4-1.7 16.9 5.7 21.1l98.7 57.1c2.7 1.5 2.7 5.4 0 6.9l-98.7 57.1c-7.4 4.3-9.9 13.7-5.7 21.1l16.5 28.6c4.3 7.4 13.8 10 21.2 5.7l98.6-57c2.7-1.5 6 .4 6 3.5v114.1c0 8.6 6.9 15.5 15.5 15.5h33c8.6 0 15.5-6.9 15.5-15.5V318.4c0-3.1 3.4-5 6-3.5l98.6 57c7.4 4.3 16.9 1.7 21.2-5.7l16.5-28.6c4.3-7.4 1.7-16.9-5.7-21.1l-98.7-57.1c-2.7-1.5-2.7-5.4 0-6.9l98.7-57.1c7.4-4.2 9.9-13.7 5.7-21.1z"}}]})(props);
};
function IoIosMedkit (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M432 128h-84V96c0-17.6-14.4-32-32-32H196c-17.6 0-32 14.4-32 32v32H80c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32zm-240-28c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v28H192v-28zm128 204h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16z"}}]})(props);
};
function IoIosMegaphone (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M90.1 187c0-33.4 17.1-62.8 43.5-78.9 2.8-1.7 1.6-6-1.7-6-38.2 0-68.5 30.4-74.1 69.8-5.6.9-9.9 7.3-9.9 14.9 0 8 4.7 14.3 10.8 14.8 6.7 33.8 33.8 55.4 61.2 64.5 4.3.9 7.1-4.5 3.8-7.5-19.6-17.7-33.6-44.3-33.6-71.6z"}},{"tag":"path","attr":{"d":"M450.2 102.8c-1-2.7-2.1-5.2-3.2-7.7-6-13.4-13.4-24.2-21.7-32.2-10.5-9.7-21.4-14.9-34.8-14.9-13.5 0-21.5 5.2-25.8 7.8-43.1 25.9-112.3 46-154 46s-39.4.2-39.4.2c-31.6 14-54.8 46.9-54.8 85 0 34.2 17.8 64.2 44.4 80 12.1 10.1 23.6 8.8 21.1 22.2-2.5 13.4-22.5 97.5-25 115s-2.9 27.5 4 36c7 8.5 49.5 23.8 68 23.8s13.8-8.7 13.8-43.8-9.3-131.7 16.5-131.7c48.3 0 73.5 17.3 111.3 31.7 9 3.4 14.1 4.7 20.1 4.7 6 0 18.7-1.9 34.7-18.2 9.2-9.4 15.7-18.8 21.7-32.2 1.1-2.6 2.2-5.2 3.3-8 8.9-23.2 13.7-51.9 13.7-81.9-.1-29.8-4.9-58.6-13.9-81.8zm-26.6 157c-6.4 15.7-17.6 28.2-26.9 28.2-9.3 0-17.8-12.5-24.2-28.2-7.5-18.3-12.3-45-12.3-74.7 0-29.8 4.8-56.6 12.3-74.9 6.4-15.6 14.9-25 24.1-25 9.3 0 20.3 9.5 26.8 25 7.6 18.3 14.5 45.1 14.5 74.9.1 29.7-6.8 56.4-14.3 74.7z"}}]})(props);
};
function IoIosMenu (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"}}]})(props);
};
function IoIosMicOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M369.8 464c-4.9 0-9.7-2.5-12.3-7L129.9 69.3c-4-6.7-1.7-15.4 5.1-19.3 6.8-3.9 15.5-1.7 19.5 5.1l227.6 387.7c4 6.7 1.7 15.4-5.1 19.3-2.3 1.3-4.8 1.9-7.2 1.9zM320 272V112c0-35.2-28.8-64-64-64-28.4 0-52.6 18.8-60.9 44.5L315 296.8c3.2-7.6 5-16 5-24.8zM192 272c0 35.2 28.8 64 64 64 3.9 0 7.6-.4 11.3-1L192 206.6V272zM366 275v-69c0-7.7-6.3-14-14-14s-14 6.3-14 14v69c0 15.2-4.2 29.4-11.4 41.6l15.6 26.6c14.9-18.7 23.8-42.4 23.8-68.2z"}},{"tag":"path","attr":{"d":"M256 357c-45.2 0-82-36.8-82-82v-69c0-7.7-6.3-14-14-14s-14 6.3-14 14v69c0 55.9 41.9 102.2 96 109.1V436h-36c-7.7 0-14 6.3-14 14s6.3 14 14 14h100c7.7 0 14-6.3 14-14s-6.3-14-14-14h-36v-51.9c7.9-1 15.6-2.9 22.9-5.5l-14.5-24.8c-7.1 2.1-14.6 3.2-22.4 3.2z"}}]})(props);
};
function IoIosMic (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 336c35.2 0 64-28.8 64-64V112c0-35.2-28.8-64-64-64s-64 28.8-64 64v160c0 35.2 28.8 64 64 64z"}},{"tag":"path","attr":{"d":"M352 192c-7.7 0-14 6.3-14 14v69c0 45.2-36.8 82-82 82s-82-36.8-82-82v-69c0-7.7-6.3-14-14-14s-14 6.3-14 14v69c0 55.9 41.9 102.2 96 109.1V436h-36c-7.7 0-14 6.3-14 14s6.3 14 14 14h100c7.7 0 14-6.3 14-14s-6.3-14-14-14h-36v-51.9c54.1-6.9 96-53.2 96-109.1v-69c0-7.7-6.3-14-14-14z"}}]})(props);
};
function IoIosMicrophone (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M315 204h72.6c6.6 0 12.3-5.2 12.4-11.8.1-6.7-5.3-12.2-12-12.2h-73c-6.7 0-12.1-5.5-12-12.2.1-6.6 5.8-11.8 12.4-11.8h76.5c4.5 0 8.2-3.7 8-8.2-1.7-47.5-31.2-88.1-72.7-106-5.3-2.3-11.2 1.6-11.2 7.3v35.5c0 6.6-5.2 12.3-11.8 12.4-6.7.1-12.2-5.3-12.2-12V44c0-6.6-5.4-12-12-12s-12 5.4-12 12v56.6c0 6.6-5.2 12.3-11.8 12.4-6.7.1-12.2-5.3-12.2-12V44c0-6.6-5.4-12-12-12s-12 5.4-12 12v40.6c0 6.6-5.2 12.3-11.8 12.4-6.7.1-12.2-5.3-12.2-12V49.1c0-5.8-5.9-9.6-11.2-7.3-41.5 17.9-71.1 58.6-72.7 106-.2 4.5 3.5 8.2 8 8.2h76.5c6.6 0 12.3 5.2 12.4 11.8.1 6.7-5.3 12.2-12 12.2h-72.6c-6.6 0-12.3 5.2-12.4 11.8-.1 6.7 5.3 12.2 12 12.2h72.6c6.6 0 12.3 5.2 12.4 11.8.1 6.7-5.3 12.2-12 12.2h-72.6c-6.6 0-12.3 5.2-12.4 11.8-.1 6.7 5.3 12.2 12 12.2h72.6c6.6 0 12.3 5.2 12.4 11.8.1 6.7-5.3 12.2-12 12.2h-76.9c-4.5 0-8.2 3.7-8 8.2.5 13.6 3.3 26.7 7.9 38.8 1.2 3.1 4.2 5 7.4 5h257.1c3.3 0 6.3-2 7.4-5 4.7-12.1 7.5-25.2 7.9-38.8.2-4.5-3.5-8.2-8-8.2h-76.5c-6.6 0-12.3-5.2-12.4-11.8-.1-6.7 5.3-12.2 12-12.2h72.6c6.6 0 12.3-5.2 12.4-11.8.1-6.7-5.3-12.2-12-12.2h-72.6c-6.6 0-12.3-5.2-12.4-11.8 0-6.7 5.4-12.2 12.1-12.2zM141.5 358.6c19 22 45.2 37.2 75.4 40.8 4 .5 7.1 3.9 7.1 7.9V448c0 17.7 14.3 32 32 32s32-14.3 32-32v-40.7c0-4.1 3.1-7.5 7.1-7.9 30.3-3.5 56.4-18.7 75.4-40.8 2.2-2.6.3-6.6-3.1-6.6H144.5c-3.4 0-5.2 4-3 6.6z"}}]})(props);
};
function IoIosMoon (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M401.4 354.2c-2.9.1-5.8.2-8.7.2-47.9 0-93-18.9-126.8-53.4-33.9-34.4-52.5-80.1-52.5-128.8 0-27.7 6.1-54.5 17.5-78.7 3.1-6.6 9.3-16.6 13.6-23.4 1.9-2.9-.5-6.7-3.9-6.1-6 .9-15.2 2.9-27.7 6.8C135.1 95.5 80 168.7 80 255c0 106.6 85.1 193 190.1 193 58 0 110-26.4 144.9-68.1 6-7.2 11.5-13.8 16.4-21.8 1.8-3-.7-6.7-4.1-6.1-8.5 1.7-17.1 1.8-25.9 2.2z"}}]})(props);
};
function IoIosMore (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M255.8 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM102 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM410 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z"}}]})(props);
};
function IoIosMove (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M475.9 246.2l-79.4-79.4c-5.4-5.4-14.2-5.4-19.6 0l-.2.2c-5.4 5.4-5.4 14.2 0 19.6l54.9 54.9-161.8.5.5-161.8 54.9 54.9c5.4 5.4 14.2 5.4 19.6 0l.2-.2c5.4-5.4 5.4-14.2 0-19.6l-79.4-79.4c-5.4-5.4-14.2-5.4-19.6 0l-79.4 79.4c-5.4 5.4-5.4 14.2 0 19.6l.2.2c5.4 5.4 14.2 5.4 19.6 0l54.9-54.9.5 161.8-161.8-.5 54.9-54.9c5.4-5.4 5.4-14.2 0-19.6l-.2-.2c-5.4-5.4-14.2-5.4-19.6 0l-79.4 79.4c-5.4 5.4-5.4 14.2 0 19.6l79.4 79.4c5.4 5.4 14.2 5.4 19.6 0l.2-.2c5.4-5.4 5.4-14.2 0-19.6L80 270.5l161.8-.5-.5 161.8-54.9-54.9c-5.4-5.4-14.2-5.4-19.6 0l-.2.2c-5.4 5.4-5.4 14.2 0 19.6l79.4 79.4c5.4 5.4 14.2 5.4 19.6 0l79.4-79.4c5.4-5.4 5.4-14.2 0-19.6l-.2-.2c-5.4-5.4-14.2-5.4-19.6 0l-54.9 54.9-.5-161.8 161.8.5-54.9 54.9c-5.4 5.4-5.4 14.2 0 19.6l.2.2c5.4 5.4 14.2 5.4 19.6 0l79.4-79.4c5.5-5.4 5.5-14.2 0-19.6z"}}]})(props);
};
function IoIosMusicalNote (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M364.3 48.2c-4.7.9-118 24.1-122.2 24.9-4.2.8-8.1 3.6-8.1 8v255.1c0 1.6-.1 7.2-2.4 11.7-3.1 5.9-8.5 10.2-16.1 12.7-3.3 1.1-7.8 2.1-13.1 3.3-24.1 5.4-64.4 14.6-64.4 51.8 0 30.1 21.7 44.5 35 47.1 5 1 11 1 13.8 1 8.2 0 36-3.3 51.2-13.2 11-7.2 24.1-21.4 24.1-47.8V173.1c0-3.8 2.7-7.1 6.4-7.8l92.8-19c7.4-1.5 12.8-8.1 12.8-15.7V55.8c-.1-4.3-3.8-8.8-9.8-7.6z"}}]})(props);
};
function IoIosMusicalNotes (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M406.3 48.2c-4.7.9-202 39.2-206.2 40-4.2.8-8.1 3.6-8.1 8v240.1c0 1.6-.1 7.2-2.4 11.7-3.1 5.9-8.5 10.2-16.1 12.7-3.3 1.1-7.8 2.1-13.1 3.3-24.1 5.4-64.4 14.6-64.4 51.8 0 31.1 22.4 45.1 41.7 47.5 2.1.3 4.5.7 7.1.7 6.7 0 36-3.3 51.2-13.2 11-7.2 24.1-21.4 24.1-47.8V190.5c0-3.8 2.7-7.1 6.4-7.8l152-30.7c5-1 9.6 2.8 9.6 7.8v130.9c0 4.1-.2 8.9-2.5 13.4-3.1 5.9-8.5 10.2-16.2 12.7-3.3 1.1-8.8 2.1-14.1 3.3-24.1 5.4-64.4 14.5-64.4 51.7 0 33.7 25.4 47.2 41.8 48.3 6.5.4 11.2.3 19.4-.9s23.5-5.5 36.5-13c17.9-10.3 27.5-26.8 27.5-48.2V55.9c-.1-4.4-3.8-8.9-9.8-7.7z"}}]})(props);
};
function IoIosNavigate (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 336V256H128.3L352 160l-96 224z"}}]})(props);
};
function IoIosNotificationsOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M255.9 456c31.1 0 48.1-22 48.1-53h-96.3c0 31 17 53 48.2 53zM154.5 55c-2.5-4.3-7-6.8-11.6-7h.3-1.2c-2.3 0-4.7.7-6.9 1.9-6.8 3.9-9.1 12.6-5.1 19.3L357.5 457c2.6 4.5 7.4 7 12.3 7 2.4 0 4.9-.6 7.2-1.9 6.8-3.9 9.1-12.6 5.1-19.3L154.5 55zM296.1 384L159 150.5c-8.2 20.2-13.3 46-13.3 78.6 0 90.9-30.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h180.2zM412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-130.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.4-11-24.7-24.4-24.6-13.4-.2-24.4 11.2-24.4 24.6v2.9c0 3.7-2.6 5-6.2 5.9-8.7 2-17.5 5.5-25.9 10.8L366.1 384H396c16.5 0 25.9-18.8 16-31.8z"}}]})(props);
};
function IoIosNotificationsOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M289.7 403c-6.1 0-11.4 4.2-12.7 10.2-1 4.5-2.7 8.2-5 10.9-1.3 1.5-5.1 5.9-16.1 5.9-11 0-14.8-4.5-16.1-5.9-2.3-2.7-4-6.4-5-10.9-1.3-6-6.6-10.2-12.7-10.2-8.4 0-14.5 7.8-12.7 15.9 5 22.3 21 37.1 46.5 37.1s41.5-14.7 46.5-37.1c1.8-8.1-4.4-15.9-12.7-15.9zM412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-130.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.3-10.8-24.6-24-24.6h-.6c-13.2 0-24 11.3-24 24.6v2.9c0 3.7-2.6 5-6.2 5.9-38.5 9.1-79.6 46.5-79.6 139.8 0 90.9-30.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h280.1c16.1 0 25.4-18.8 15.6-31.8zm-39 5.8H139.8c-3.8 0-5.8-4.4-3.3-7.3 7-8 14.7-18.5 21-33.4 9.6-22.6 14.3-51.5 14.3-88.2 0-37.3 7-66.5 20.9-86.8 12.4-18.2 27.9-25.1 38.7-27.6 8.4-2 14.4-5.8 18.6-10.5 3.2-3.6 8.7-3.8 11.9-.2 5.1 5.7 12 9.1 18.8 10.7 10.8 2.5 26.3 9.4 38.7 27.6 13.9 20.3 20.9 49.5 20.9 86.8 0 36.7 4.7 65.6 14.3 88.2 6.5 15.2 14.4 25.9 21.5 33.9 2.2 2.7.4 6.8-3.1 6.8z"}}]})(props);
};
function IoIosNotifications (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M255.9 456c31.1 0 48.1-22 48.1-53h-96.3c0 31 17 53 48.2 53zM412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-130.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.4-11-24.7-24.4-24.6-13.4-.2-24.4 11.2-24.4 24.6v2.9c0 3.7-2.6 5-6.2 5.9-38.5 9.1-79.6 46.5-79.6 139.8 0 90.9-30.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h280.1c16.3 0 25.7-18.8 15.8-31.8z"}}]})(props);
};
function IoIosNuclear (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-88.5 364.8l49.2-85.8c1.1-1.9.5-4.2-1.3-5.4-20.2-12.9-34-35-35.2-60.3-.1-2.1-1.8-3.8-4-3.8H76V256c0-48.1 18.7-93.3 52.7-127.3 10.8-10.8 22.7-20 35.4-27.6l50.5 87.9c1.1 1.9 3.5 2.5 5.4 1.5 10.7-5.8 22.9-9 35.9-9 12.5 0 24.4 3.1 34.8 8.5 1.9 1 4.2.3 5.3-1.5l51.1-87.7c13 7.7 25.1 17 36.1 28 34 34 52.7 79.2 52.7 127.3v1.5h-100c-2.1 0-3.9 1.7-4 3.8-1.3 25.4-15 47.5-35.2 60.3-1.8 1.2-2.4 3.5-1.3 5.4l49.2 85.8c-26.7 15.1-57 23.2-88.5 23.2-31.6-.1-61.9-8.2-88.6-23.3z"}},{"tag":"circle","attr":{"cx":"256","cy":"256","r":"56"}}]})(props);
};
function IoIosNutrition (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M359.1 231.9h-.1c-.1-.1-.3-.4-.4-.6l-78.9-79.6c-5.8-6-14.2-10.2-23.6-10.2-11.8 0-22.2 6.2-27.7 16.3 0 0-3.4 5.1-12.6 19.8-1.6 2.6-1.6 6 .1 8.6l26.8 41.2c2.9 3.8 3.3 8 1.4 9.9l-.1.1c-2.3 2.3-5.9 1.5-9.8-1.4l-32.3-20.5c-3.8-2.4-8.7-1.2-11.1 2.5-21.9 35.1-46.8 74.7-71.2 114-1.6 2.5-1.6 5.7-.1 8.3l14.1 24.1c2.9 3.8 3.3 8 1.4 9.9l-.1.1c-2.3 2.3-5.9 1.5-9.8-1.4l-16.6-8.4c-3.7-1.9-8.2-.6-10.4 2.9-17.7 28.3-28 44.7-29.1 46.5-3 5.1-5 11.2-5 17.8 0 17.8 14.2 32.2 31.9 32.2 7.8 0 14.4-3.4 20.6-7.6L221 378.8c3.4-2.5 4.2-7.2 2-10.7L202.5 336c-2.9-3.8-3.3-8-1.4-9.9l.1-.1c2.3-2.3 5.9-1.5 9.8 1.4l37.4 25.6c2.8 1.9 6.5 1.9 9.3-.2 53-39.1 97.5-72.2 97.5-72.2 7.9-6 13-15.4 13-26 0-8.7-3.1-16.8-9.1-22.7zM446.9 131.2l-11.2-17.9c-2.2-3.8-7.1-5.1-10.9-2.9L365.4 147l47.3-78.9c2.2-3.8.9-8.8-2.9-11l-17.7-8c-3.9-2.3-8.8-.9-11 3l-57.6 108.3 28.6 28.8 91.8-46.8c3.9-2.2 5.3-7.2 3-11.2z"}}]})(props);
};
function IoIosOpen (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M227.8 300.2c-5.1-5.1-5.1-13.3 0-18.4l133.7-133.7c-5.3-2.6-11.2-4.1-17.5-4.1H88c-22 0-40 18-40 40v224c0 22 18 40 40 40h256c22 0 40-18 40-40V184c0-6.3-1.5-12.2-4.1-17.5L246.2 300.2c-5.1 5.1-13.3 5.1-18.4 0z"}},{"tag":"path","attr":{"d":"M459.5 68.5C457 66 453 64 449 64h-97c-7.2-.1-13.1 5.7-13.1 12.9-.1 7.2 5.7 13.1 12.9 13.1l67.3.5-57.6 57.6c8 3.9 14.5 10.4 18.4 18.4l57.6-57.6.5 67.3c.1 7.2 5.9 13 13.1 12.9 7.2-.1 13-5.9 12.9-13.1V78c0-3.5-2-7-4.5-9.5z"}}]})(props);
};
function IoIosOptions (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M299.3 376c6.2-14.1 20.3-24 36.7-24s30.5 9.9 36.7 24H448c8.8 0 16 7.2 16 16s-7.2 16-16 16h-75.3c-6.2 14.1-20.3 24-36.7 24s-30.5-9.9-36.7-24H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h235.3zM139.3 240c6.2-14.1 20.3-24 36.7-24s30.5 9.9 36.7 24H448c8.8 0 16 7.2 16 16s-7.2 16-16 16H212.7c-6.2 14.1-20.3 24-36.7 24s-30.5-9.9-36.7-24H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h75.3zM299.3 104c6.2-14.1 20.3-24 36.7-24s30.5 9.9 36.7 24H448c8.8 0 16 7.2 16 16s-7.2 16-16 16h-75.3c-6.2 14.1-20.3 24-36.7 24s-30.5-9.9-36.7-24H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h235.3z"}}]})(props);
};
function IoIosOutlet (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M359 78H153c-2.8 0-5.6.8-8 2.3C86.7 116.9 48 182 48 256c0 73.9 38.7 138.1 97 175.6 2.4 1.6 5.2 2.4 8.1 2.4h205.8c2.9 0 5.7-.8 8.1-2.4 58.3-37.5 97-101.7 97-175.6 0-74-38.7-139.1-97-175.7-2.4-1.5-5.2-2.3-8-2.3zM192.9 270.8h-22.3c-2.1 0-3.7-1.7-3.7-3.7V155.9c0-2 1.7-3.7 3.7-3.7h22.3c2.1 0 3.7 1.7 3.7 3.7v111.2c0 2.1-1.7 3.7-3.7 3.7zM282 389.5h-52c-2.1 0-3.7-1.7-3.7-3.7v-40.2c0-16.5 13.6-30.5 30.1-30.3 16.2.2 29.3 13.5 29.3 29.7v40.8c0 2-1.6 3.7-3.7 3.7zM341.4 256h-22.3c-2.1 0-3.7-1.7-3.7-3.7v-81.6c0-2 1.7-3.7 3.7-3.7h22.3c2.1 0 3.7 1.7 3.7 3.7v81.6c0 2-1.6 3.7-3.7 3.7z"}}]})(props);
};
function IoIosPaperPlane (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M452.1 49L52.3 265.3c-6 3.3-5.6 12.1.6 14.9l68.2 25.7c4 1.5 7.2 4.5 9 8.4l53 109.1c1 4.8 9.9 6.1 10 1.2l-8.1-90.2c.5-6.7 3-13 7.3-18.2l207.3-203.1c1.2-1.2 2.9-1.6 4.5-1.3 3.4.8 4.8 4.9 2.6 7.6L228 338c-4 6-6 11-7 18l-10.7 77.9c.9 6.8 6.2 9.4 10.5 3.3l38.5-45.2c2.6-3.7 7.7-4.5 11.3-1.9l99.2 72.3c4.7 3.5 11.4.9 12.6-4.9L463.8 58c1.5-6.8-5.6-12.3-11.7-9z"}}]})(props);
};
function IoIosPaper (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M124 80v322c0 7.7-6.3 14-14 14s-14-6.3-14-14V112H80c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h353.1c17 0 30.9-13.8 30.9-30.9V80c0-17.7-14.3-32-32-32l-278 2c-17.7 0-30 12.3-30 30zm66 32h84c7.7 0 14 6.3 14 14s-6.3 14-14 14h-84c-7.7 0-14-6.3-14-14s6.3-14 14-14zm0 160h148c7.7 0 14 6.3 14 14s-6.3 14-14 14H190c-7.7 0-14-6.3-14-14s6.3-14 14-14zm196 108H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-160H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14z"}}]})(props);
};
function IoIosPartlySunny (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M168.2 64h-.3c-8.7 0-15.8 7.1-15.8 15.8v30.3c0 8.7 7.1 15.8 15.8 15.8h.3c8.7 0 15.8-7.1 15.8-15.8V79.8c0-8.7-7.1-15.8-15.8-15.8zM79 216.2v-.3c0-8.7-7.1-15.8-15.8-15.8H31.8c-8.7 0-15.8 7.1-15.8 15.8v.3c0 8.7 7.1 15.8 15.8 15.8h31.3c8.8 0 15.9-7.1 15.9-15.8zM79.7 149c3 3 7 4.7 11.2 4.7 4.2 0 8.2-1.7 11.2-4.7 6.1-6.2 6.1-16.2 0-22.3l-20.3-20.5c-3-3-7-4.7-11.2-4.7-4.2 0-8.2 1.7-11.2 4.7-6.1 6.2-6.1 16.2 0 22.3L79.7 149zM271 105.2c-3-3-7-4.7-11.2-4.7-4.2 0-8.2 1.7-11.2 4.7l-20.3 20.4c-6.1 6.2-6.1 16.2 0 22.3l.3.3h.1c2.9 2.8 6.8 4.3 10.8 4.3 4.2 0 8.2-1.7 11.2-4.7l20.3-20.4c6.1-6 6.1-16 0-22.2zM92.9 273.3c-4.2 0-8.2 1.7-11.2 4.7l-20.3 20.5c-6.1 6.2-6.1 16.2 0 22.3 3 3 7 4.7 11.2 4.7 4.2 0 8.2-1.7 11.2-4.7l20.3-20.5c6.1-6.2 6.1-16.2 0-22.3-3-3-7-4.7-11.2-4.7zM403.3 259.2h-2.4c-3.1 0-6.1 0-9 .4-11.3-50.3-56.1-88.2-109.7-88.2-14.6 0-28.6 2.8-41.4 7.9-5.1 2-10 4.4-14.7 7.1-32 18.5-54.1 52.4-56.2 91.6-.1 2.1-.2 4.1-.2 6.2 0 3.4.2 6.8.5 10.1 0 .4.1.8.1 1.1-37.9 3.4-67.6 37.1-67.6 76 0 41.1 33.3 76.7 74.3 76.7h226.4c51.2 0 92.7-43.4 92.7-94.8-.1-51.4-41.6-94.1-92.8-94.1z"}},{"tag":"path","attr":{"d":"M150.7 283.6v-.3c-.3-3.4-.5-6.8-.5-10.2 0-2.1.1-4.2.2-6.3 2.2-39.9 24.6-74.3 57.2-93.1 4.8-2.8 9.8-5.2 14.9-7.2h.1c-13.4-17-34.2-28-57.6-28-40.5 0-73.3 32.8-73.3 73.3 0 35.5 25.3 65.1 59 71.8z"}}]})(props);
};
function IoIosPause (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M199.9 416h-63.8c-4.5 0-8.1-3.6-8.1-8V104c0-4.4 3.6-8 8.1-8h63.8c4.5 0 8.1 3.6 8.1 8v304c0 4.4-3.6 8-8.1 8zM375.9 416h-63.8c-4.5 0-8.1-3.6-8.1-8V104c0-4.4 3.6-8 8.1-8h63.8c4.5 0 8.1 3.6 8.1 8v304c0 4.4-3.6 8-8.1 8z"}}]})(props);
};
function IoIosPaw (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M324.3 80.3c-1.2-.2-2.4-.3-3.6-.3v.4-.3h-.4c-22 0-42.9 25.9-47.8 60.3-5.3 36.6 9.4 69 32.7 72.4 1.3.2 2.7.3 4 .3 22 0 42.9-25.9 47.8-60.3 5.3-36.7-9.4-69.1-32.7-72.5zM320.6 80zM442.3 169.4c-3.5-1.4-7.1-2.1-10.9-2.1h-.4c-19.7.3-41.8 19.2-53.4 47.8-13.9 34.2-7.5 69.2 14.4 78.2 3.5 1.4 7.1 2.1 10.9 2.1 19.8 0 42.2-19 53.9-47.8 13.8-34.2 7.3-69.2-14.5-78.2zM327.6 295.4c-27.8-43.6-39.8-60-71.6-60s-43.9 16.5-71.7 60c-23.8 37.2-71.9 40.3-83.9 71.9-2.4 5.6-3.6 11.7-3.6 18.2 0 25.7 20.8 46.5 46.4 46.5 31.8 0 75.1-24 112.9-24s80.9 24 112.7 24c25.6 0 46.3-20.8 46.3-46.5 0-6.5-1.3-12.6-3.7-18.2-12-31.7-60-34.7-83.8-71.9zM202.8 213c1.3 0 2.7-.1 4-.3 23.4-3.4 38-35.8 32.7-72.4-5-34.5-25.9-60.3-47.8-60.3-1.3 0-2.7.1-4 .3-23.4 3.4-38 35.8-32.7 72.4 5 34.4 25.9 60.3 47.8 60.3zM120.1 293.3c21.9-9 28.3-44 14.4-78.2-11.7-28.8-34.1-47.8-53.9-47.8-3.8 0-7.4.7-10.9 2.1-21.9 9-28.3 44-14.4 78.2 11.7 28.8 34.1 47.8 53.9 47.8 3.8 0 7.4-.7 10.9-2.1z"}}]})(props);
};
function IoIosPeople (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M349.1 334.7c-11.2-4-29.5-4.2-37.6-7.3-5.6-2.2-14.5-4.6-17.4-8.1-2.9-3.5-2.9-28.5-2.9-28.5s7-6.6 9.9-14c2.9-7.3 4.8-27.5 4.8-27.5s6.6 2.8 9.2-10.4c2.2-11.4 6.4-17.4 5.3-25.8-1.2-8.4-5.8-6.4-5.8-6.4s5.8-8.5 5.8-37.4c0-29.8-22.5-59.1-64.6-59.1-42 0-64.7 29.4-64.7 59.1 0 28.9 5.7 37.4 5.7 37.4s-4.7-2-5.8 6.4c-1.2 8.4 3 14.4 5.3 25.8 2.6 13.3 9.2 10.4 9.2 10.4s1.9 20.1 4.8 27.5c2.9 7.4 9.9 14 9.9 14s0 25-2.9 28.5-11.8 5.9-17.4 8c-8 3.1-26.3 3.5-37.6 7.5-11.2 4-45.8 22.2-45.8 67.2h278.3c.1-45.1-34.5-63.3-45.7-67.3z"}},{"tag":"path","attr":{"d":"M140 286s23.9-.8 33.4-9.3c-15.5-23.5-7.1-50.9-10.3-76.5-3.2-25.5-17.7-40.8-46.7-40.8h-.4c-28 0-43.1 15.2-46.3 40.8-3.2 25.5 5.7 56-10.2 76.5C69 285.3 93 285 93 285s1 14.4-1 16.8c-2 2.4-7.9 4.7-12 5.5-8.8 1.9-18.1 4.5-25.9 7.2-7.8 2.7-22.6 17.2-22.6 37.2h80.3c2.2-8 17.3-22.3 32-29.8 9-4.6 17.9-4.3 24.7-5.2 0 0 3.8-6-8.7-8.3 0 0-17.2-4.3-19.2-6.7-1.9-2.2-.6-15.7-.6-15.7zM372 286s-23.9-.8-33.4-9.3c15.5-23.5 7.1-50.9 10.3-76.5 3.2-25.5 17.7-40.8 46.7-40.8h.4c28 0 43.1 15.2 46.3 40.8 3.2 25.5-5.7 56 10.2 76.5-9.5 8.6-33.5 8.3-33.5 8.3s-1 14.4 1 16.8c2 2.4 7.9 4.7 12 5.5 8.8 1.9 18.1 4.5 25.9 7.2 7.8 2.7 22.6 17.2 22.6 37.2h-80.3c-2.2-8-17.3-22.3-32-29.8-9-4.6-17.9-4.3-24.7-5.2 0 0-3.8-6 8.7-8.3 0 0 17.2-4.3 19.2-6.7 1.9-2.2.6-15.7.6-15.7z"}}]})(props);
};
function IoIosPersonAdd (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M385.3 386c-15.6-5.5-37.8-6.8-52.1-10-8.2-1.8-20.1-6.3-24.1-11.1-3.5-4.2-2.1-38.4-1.7-47.2.1-1.3.5-2.6 1.1-3.8 2.2-3.6 7.2-12.2 10.3-20 3-7.6 6.2-25 7.6-33.3.4-2.4 1.9-4.5 4-5.6 2.6-1.5 6.1-4.9 7.8-13.4 3.1-15.7 8-21.8 7.4-33.5-.3-5.2-1.7-8-3.2-9.5-2-1.9-2.7-4.8-2-7.4 1.9-7.6 4.7-22.6 5.2-45.6.9-41.1-31.3-81.6-89.5-81.6-59.1 0-90.5 40.5-89.6 81.6.5 23 3.3 38 5.1 45.6.6 2.7-.1 5.5-2 7.4-1.5 1.5-3 4.3-3.2 9.5-.6 11.7 4.3 17.8 7.4 33.5 1.7 8.4 5.2 11.9 7.8 13.4 2.1 1.2 3.6 3.2 4 5.6 1.4 8.3 4.6 25.7 7.6 33.3 3.1 7.8 8.2 16.5 10.3 20 .7 1.1 1.1 2.4 1.1 3.8.4 8.8 1.8 43.1-1.7 47.2-4 4.8-15.9 9.3-24.1 11.1-14.3 3.2-36.5 4.5-52.1 10-14.2 5-55.3 20.5-62.5 52.3-1.1 5 2.7 9.7 7.9 9.7H440c5.1 0 8.9-4.7 7.8-9.7-7.2-31.8-48.3-47.3-62.5-52.3z"}},{"tag":"path","attr":{"d":"M437.5 293.5h-27v-27c0-5.8-4.7-10.5-10.5-10.5s-10.5 4.7-10.5 10.5v27h-27c-5.8 0-10.5 4.7-10.5 10.5s4.7 10.5 10.5 10.5h27v27c0 5.8 4.7 10.5 10.5 10.5s10.5-4.7 10.5-10.5v-27h27c5.8 0 10.5-4.7 10.5-10.5s-4.7-10.5-10.5-10.5z"}}]})(props);
};
function IoIosPerson (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M447.8 438.3c-7.2-31.8-48.3-47.3-62.5-52.3-15.6-5.5-37.8-6.8-52.1-10-8.2-1.8-20.1-6.3-24.1-11.1s-1.6-49.3-1.6-49.3 7.4-11.5 11.4-21.7c4-10.1 8.4-37.9 8.4-37.9s8.2 0 11.1-14.4c3.1-15.7 8-21.8 7.4-33.5-.6-11.5-6.9-11.2-6.9-11.2s6.1-16.7 6.8-51.3c.9-41.1-31.3-81.6-89.6-81.6-59.1 0-90.6 40.5-89.7 81.6.8 34.6 6.7 51.3 6.7 51.3s-6.3-.3-6.9 11.2c-.6 11.7 4.3 17.8 7.4 33.5 2.8 14.4 11.1 14.4 11.1 14.4s4.4 27.8 8.4 37.9c4 10.2 11.4 21.7 11.4 21.7s2.4 44.5-1.6 49.3c-4 4.8-15.9 9.3-24.1 11.1-14.3 3.2-36.5 4.5-52.1 10-14.2 5-55.3 20.5-62.5 52.3-1.1 5 2.7 9.7 7.9 9.7H440c5.1 0 8.9-4.7 7.8-9.7z"}}]})(props);
};
function IoIosPhoneLandscape (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M32 176.3v158.5c0 18.3 14.6 33.1 32.9 33.1h381c18.4 0 34.1-14.8 34.1-33.1V176.3c0-18.3-15.7-32.3-34.1-32.3h-381C46.6 144 32 158 32 176.3zM55 271v-30c0-2.2 1.8-4 4-4s4 1.8 4 4v30c0 2.2-1.8 4-4 4s-4-1.8-4-4zm414-15.5c0 9.6-7.8 17.4-17.4 17.4-9.6 0-17.4-7.8-17.4-17.4 0-9.6 7.8-17.4 17.4-17.4 9.6 0 17.4 7.8 17.4 17.4zM424 160v192H83V160h341z"}},{"tag":"path","attr":{"d":"M441.6 255.5c0 5.5 4.5 10 9.9 10 5.5 0 10-4.5 10-10s-4.5-10-10-10c-5.4.1-9.9 4.5-9.9 10z"}}]})(props);
};
function IoIosPhonePortrait (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M335.7 32H177.1C158.8 32 144 46.6 144 64.9v381c0 18.4 14.8 34.1 33.1 34.1h158.5c18.3 0 32.3-15.7 32.3-34.1v-381C368 46.6 354 32 335.7 32zM241 55h30c2.2 0 4 1.8 4 4s-1.8 4-4 4h-30c-2.2 0-4-1.8-4-4s1.8-4 4-4zm15.5 410c-9.6 0-17.4-7.8-17.4-17.4 0-9.6 7.8-17.4 17.4-17.4 9.6 0 17.4 7.8 17.4 17.4 0 9.6-7.8 17.4-17.4 17.4zm93.5-49H162c-1.1 0-2-.9-2-2V85c0-1.1.9-2 2-2h188c1.1 0 2 .9 2 2v329c0 1.1-.9 2-2 2z"}}]})(props);
};
function IoIosPhotos (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M464 144H128c-17.6 0-32 14.4-32 32v240c0 17.6 14.4 32 32 32h336c17.6 0 32-14.4 32-32V176c0-17.6-14.4-32-32-32z"}},{"tag":"path","attr":{"d":"M100 116h332V96c0-17.6-14.4-32-32-32H48c-17.6 0-32 14.4-32 32v256c0 17.6 14.4 32 32 32h20V148c0-17.6 14.4-32 32-32z"}}]})(props);
};
function IoIosPie (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M276 68.1v219c0 3.7-2.5 6.8-6 7.7L81.1 343.4c-2.3.6-3.6 3.1-2.7 5.4C109.1 426 184.9 480.6 273.2 480c114.6-.7 206.8-93.5 206.8-208 0-112.1-88.6-203.5-199.8-207.8-2.3-.1-4.2 1.7-4.2 3.9z"}},{"tag":"path","attr":{"d":"M32 239.3s.2 48.8 15.2 81.1c.8 1.8 2.8 2.7 4.6 2.2l193.8-49.7c3.5-.9 6.4-4.6 6.4-8.2V36c0-2.2-1.8-4-4-4C91 33.9 32 149 32 239.3z"}}]})(props);
};
function IoIosPin (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48c-79.5 0-144 59.9-144 133.7 0 104 144 282.3 144 282.3s144-178.3 144-282.3C400 107.9 335.5 48 256 48zm0 190.9c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9 46.9 21 46.9 46.9-21 46.9-46.9 46.9z"}}]})(props);
};
function IoIosPint (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M372 175.2c0-19.5-1-81.7-19.3-115.6-4.5-8.2-9.5-11.6-28.7-11.6H188c-19.3 0-24.2 3.4-28.7 11.6-18.3 33.9-19.3 96.5-19.3 116 0 91 36 93.1 36 167.8 0 36.7-16 66.7-16 92.7 0 25.1 6 27.8 29 27.8h134c23 0 29-2.9 29-27.9 0-26-16-55.7-16-92.4 0-74.7 36-77.4 36-168.4zM188 76h136c2.4 0 4.3.1 5.7.2 5.4 11.6 9.4 29.3 11.8 50.8h-171c2.4-21.6 6.5-39.3 11.8-50.8 1.4-.1 3.3-.2 5.7-.2z"}}]})(props);
};
function IoIosPizza (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M446.6 109.8c-2.7-7.3-14.2-14-25-18.7-27-11.6-73.5-27.1-164.9-27.1-94 0-137.5 14.5-165 27.1-12.3 5.7-24.2 12.5-26.7 19.5-2.9 8 .8 15.3 4.1 21.8l1.5 3c3.1 6.4 12.9 12.8 22.8 13.8L251.3 445c1 1.9 3.1 3.1 5.3 3.1 2.2 0 4.3-1.2 5.3-3.1l157.6-295.1c5.6-.6 17.2-2.6 23.1-14.3 3.9-7.7 7.4-16.7 4-25.8zm-266 112.8c-1.2 3.5-2.9 6.6-5.1 9.5-1.8 2.3-5.3 2-6.7-.6-8.8-16.6-17.3-32.4-24.8-46.5-1.4-2.6.5-5.8 3.4-5.9h1c3.7 0 7.3.6 10.9 1.7 8.6 2.8 15.5 8.7 19.6 16.6 3.9 7.9 4.6 16.8 1.7 25.2zm116.6 97.5c-.8 1.4-2.3 2.3-3.9 2.1-17-1.8-30.2-15.8-30.2-32.8 0-18.2 15.2-33 33.9-33 9.9 0 19 4 25.3 11 1.1 1.2 1.3 3.1.5 4.5l-25.6 48.2zm35.2-176.8c-5.7 4.1-12.4 6.3-19.5 6.3-1.6 0-3.3-.1-4.9-.3-8.7-1.2-16.3-5.7-21.5-12.5-2-2.6-3.6-5.5-4.6-8.4-1-2.7 1.2-5.5 4-5.3 18.3 1 35.3 2.9 51.4 5.9 3.1.6 4.5 4.1 2.7 6.7-2 2.8-4.6 5.4-7.6 7.6z"}}]})(props);
};
function IoIosPlanet (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M462.5 352.3c-1.9-5.5-5.6-11.5-11.4-18.3-10.2-12-30.8-29.3-54.8-47.2-2.6-2-6.4-.8-7.5 2.3l-4.7 13.4c-.7 2 0 4.3 1.7 5.5 15.9 11.6 35.9 27.9 41.8 35.9 2 2.8-.5 6.6-3.9 5.8-10-2.3-29-7.3-44.2-12.8-8.6-3.1-17.7-6.7-27.2-10.6 16-20.8 24.7-46.3 24.7-72.6 0-32.8-13.2-63.6-37.1-86.4-22.9-21.9-53.8-34.1-85.7-33.7-25.7.3-50.1 8.4-70.7 23.5-18.3 13.4-32.2 31.3-40.6 52-8.3-6-16.1-11.9-23.2-17.6-13.7-10.9-28.4-22-38.7-34.7-2.2-2.8.9-6.7 4.4-5.9 11.3 2.6 35.4 10.9 56.4 18.9 1.5.6 3.2.3 4.5-.8l11.1-10.1c2.4-2.1 1.7-6-1.3-7.2C121 137.4 89.2 128 73.2 128c-11.5 0-19.3 3.5-23.3 10.4-7.6 13.3 7.1 35.2 45.1 66.8 34.1 28.5 82.6 61.8 136.5 92 87.5 49.1 171.1 81 208 81 11.2 0 18.7-3.1 22.1-9.1 2.8-4.7 3.1-10.4.9-16.8zM312 354c-29.1-12.8-59.3-26-92.6-44.8-30.1-16.9-59.4-36.5-84.4-53.6-1-.7-2.2-1.1-3.4-1.1-.9 0-1.9.2-2.8.7-2 1-3.3 3-3.3 5.2 0 1.2-.1 2.4-.1 3.5 0 32.1 12.6 62.3 35.5 84.9 22.9 22.7 53.4 35.2 85.8 35.2 23.6 0 46.5-6.7 66.2-19.5 1.9-1.2 2.9-3.3 2.7-5.5-.1-2.2-1.5-4.1-3.6-5z"}}]})(props);
};
function IoIosPlayCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm83.8 211.9l-137.2 83c-2.9 1.8-6.7-.4-6.7-3.9V173c0-3.5 3.7-5.7 6.7-3.9l137.2 83c2.9 1.7 2.9 6.1 0 7.8z"}}]})(props);
};
function IoIosPlay (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M128 104.3v303.4c0 6.4 6.5 10.4 11.7 7.2l240.5-151.7c5.1-3.2 5.1-11.1 0-14.3L139.7 97.2c-5.2-3.3-11.7.7-11.7 7.1z"}}]})(props);
};
function IoIosPodium (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M64 199.9v208.2c0 4.4 3.5 7.9 7.9 7.9h96.2c4.4 0 7.9-3.5 7.9-7.9V199.9c0-4.4-3.5-7.9-7.9-7.9H71.9c-4.4 0-7.9 3.5-7.9 7.9zM199.9 96c-4.4 0-7.9 3.5-7.9 7.9V416h120.1c4.4 0 7.9-3.5 7.9-7.9V103.9c0-4.4-3.5-7.9-7.9-7.9H199.9zM440.1 256h-96.2c-4.4 0-7.9 3.5-7.9 7.9v144.2c0 4.4 3.5 7.9 7.9 7.9h96.2c4.4 0 7.9-3.5 7.9-7.9V263.9c0-4.4-3.5-7.9-7.9-7.9z"}}]})(props);
};
function IoIosPower (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M380.4 111.7c-3.3-2.8-7.5-4.3-11.8-4.3-5.3 0-10.4 2.3-13.8 6.4-3.2 3.7-4.7 8.4-4.3 13.3.4 4.8 2.7 9.3 6.4 12.4 34.8 29.5 54.8 72.3 54.8 117.4 0 85.4-69.8 154.8-155.6 154.8s-155.6-69.5-155.6-154.8c0-45.2 20-88 54.8-117.4 3.7-3.1 6-7.5 6.4-12.4.4-4.8-1.1-9.6-4.3-13.3-3.5-4-8.5-6.4-13.8-6.4-4.3 0-8.5 1.5-11.8 4.3C88.7 148.1 64 201 64 256.8 64 362.2 150.1 448 256 448s192-85.8 192-191.2c0-55.8-24.7-108.7-67.6-145.1z"}},{"tag":"path","attr":{"d":"M256.9 274.5c10.2 0 18.5-8.3 18.5-18.5V82.5c0-10.2-8.3-18.5-18.5-18.5s-18.5 8.3-18.5 18.5V256c0 10.2 8.3 18.5 18.5 18.5z"}}]})(props);
};
function IoIosPricetag (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M435.2 48H312.3c-3.8 0-7.5 1.5-10.2 4.2L56.4 297.9c-11.2 11.2-11.2 29.5 0 40.7l117 117c11.2 11.2 29.5 11.2 40.7 0L459.7 210c2.7-2.7 4.2-6.4 4.2-10.2v-123C464 60.9 451.1 48 435.2 48zm-47.7 111.8c-20.4 2.2-37.4-14.9-35.3-35.3 1.6-14.8 13.5-26.8 28.3-28.3 20.4-2.2 37.4 14.9 35.3 35.3-1.6 14.8-13.5 26.7-28.3 28.3z"}}]})(props);
};
function IoIosPricetags (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M403.3 32H285.1c-3.7 0-7.2 1.5-9.8 4.1L40.1 272.2c-10.8 10.8-10.8 28.4 0 39.2l111.5 112.5C162.4 434.7 179 440 195 426l231.9-232.3c2.6-2.6 4.1-6.1 4.1-9.8V59.7c0-15.3-12.4-27.7-27.7-27.7zm-45.9 107.5c-19.6 2.1-36-14.4-33.9-33.9 1.5-14.3 13-25.7 27.3-27.3 19.6-2.1 36 14.4 33.9 33.9-1.5 14.3-13 25.8-27.3 27.3z"}},{"tag":"path","attr":{"d":"M456 80.3V194c0 3.7-1.5 7.2-4.1 9.8L192.7 463l8.8 8.8c10.8 10.8 28.4 10.8 39.2 0l235.2-236.2c2.6-2.6 4.1-6.1 4.1-9.8V107.7c0-14-10.5-25.6-24-27.4z"}}]})(props);
};
function IoIosPrint (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M128 248v200c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V248c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM384 48H128c-8.8 0-16 7.2-16 16v20c0 2.2 1.8 4 4 4h280c2.2 0 4-1.8 4-4V64c0-8.8-7.2-16-16-16z"}},{"tag":"path","attr":{"d":"M432.5 112h-352C62.9 112 48 125.8 48 143.3v174.4c0 17.5 14.9 32.3 32.5 32.3H96c4.4 0 8-3.6 8-8V236c0-15.5 12.5-28 28-28h248c15.5 0 28 12.5 28 28v106c0 4.4 3.6 8 8 8h16.5c17.6 0 31.5-14.8 31.5-32.3V143.3c0-17.5-13.9-31.3-31.5-31.3z"}}]})(props);
};
function IoIosPulse (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M434.6 272.1c-22.4-1.2-41.6 13.2-48.2 32.9h-38.9l-28.4-85.4c-2.2-6.6-8.3-11-15.2-11h-.3c-7 .1-13.1 4.8-15 11.6l-44.5 155.3-52.3-314.1c-1.2-7.5-7.6-13.1-15.2-13.4-7.6-.3-14.3 4.8-16.2 12.1l-53 244.9H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h72c7.3 0 13.8-5 15.5-12.1l37.4-182.2 51.3 307.9c1.2 7.4 7.4 12.9 14.9 13.3h.9c7.1 0 13.4-4.7 15.4-11.6l49.7-173.6 15.7 47.3c2.2 6.5 8.3 11 15.2 11h51.1c6.9 18 24.4 31 44.9 31 27 0 48.8-22.3 48-49.5-.8-24.8-20.7-45.1-45.4-46.4z"}}]})(props);
};
function IoIosQrScanner (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M174 64h-58.8C78.1 64 48 94.1 48 131.2V190c0 7.7 6.3 14 14 14s14-6.3 14-14v-59.8c0-9.1 4.3-18.7 11.7-26.2 7.5-7.6 17.2-12 26.5-12H174c7.7 0 14-6.3 14-14s-6.3-14-14-14zM397.8 64H338c-7.7 0-14 6.3-14 14s6.3 14 14 14h59.8c9.3 0 19 4.4 26.5 12 7.4 7.5 11.7 17.1 11.7 26.2V190c0 7.7 6.3 14 14 14s14-6.3 14-14v-59.8c0-36.5-29.7-66.2-66.2-66.2zM174 420h-59.8c-9.3 0-19-4.4-26.5-12-7.4-7.5-11.7-17.1-11.7-26.2V322c0-7.7-6.3-14-14-14s-14 6.3-14 14v59.8c0 36.5 29.7 66.2 66.2 66.2H174c7.7 0 14-6.3 14-14s-6.3-14-14-14zM450 308c-7.7 0-14 6.3-14 14v59.8c0 9.1-4.3 18.7-11.7 26.2-7.5 7.6-17.2 12-26.5 12H338c-7.7 0-14 6.3-14 14s6.3 14 14 14h58.8c37 0 67.2-30.1 67.2-67.2V322c0-7.7-6.3-14-14-14z"}}]})(props);
};
function IoIosQuote (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M209 96h-65c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h38.7c4.6 0 8.3 3.9 8 8.6-2.3 35.5-18.8 60.2-31.3 74.1-4.7 5.2-1 13.4 5.9 13.4h39.9c2.5 0 4.8-1.1 6.3-3.1 7.4-9.6 28.5-41.6 28.5-93.9v-192c0-17.8-13.3-31.1-31-31.1zM385 96h-65c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h38.7c4.6 0 8.3 3.9 8 8.6-2.3 35.5-18.8 60.2-31.3 74.1-4.7 5.2-1 13.4 5.9 13.4h39.9c2.5 0 4.8-1.1 6.3-3.1 7.4-9.6 28.5-41.6 28.5-93.9v-192c0-17.8-13.3-31.1-31-31.1z"}}]})(props);
};
function IoIosRadioButtonOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}}]})(props);
};
function IoIosRadioButtonOn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}},{"tag":"path","attr":{"d":"M363.5 148.5C334.8 119.8 296.6 104 256 104c-40.6 0-78.8 15.8-107.5 44.5C119.8 177.2 104 215.4 104 256s15.8 78.8 44.5 107.5C177.2 392.2 215.4 408 256 408c40.6 0 78.8-15.8 107.5-44.5C392.2 334.8 408 296.6 408 256s-15.8-78.8-44.5-107.5z"}}]})(props);
};
function IoIosRadio (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M60 256c0-51 18.6-97.9 54-135.6 5.3-5.7 5.2-14.8-.4-20.3-2.6-2.6-6.1-4.1-9.7-4.1-3.8 0-7.4 1.6-10.1 4.4C53.3 143.7 32 197.4 32 256c0 58.5 21.3 112.3 61.7 155.5 2.7 2.9 6.3 4.5 10.2 4.5 3.6 0 7.1-1.4 9.7-3.9 2.7-2.6 4.3-6.2 4.4-10 .1-3.9-1.3-7.6-4-10.3C78.6 353.9 60 307 60 256zM418.2 100.4c-2.6-2.8-6.2-4.4-10-4.4-3.6 0-7.1 1.4-9.7 3.9-2.7 2.6-4.3 6.2-4.4 10-.1 3.9 1.3 7.6 4 10.3 35.3 37.8 54 84.7 54 135.7s-18.6 97.9-54 135.7c-5.3 5.6-5.2 14.7.3 20.2 2.5 2.6 6 4 9.7 4 3.9 0 7.6-1.6 10.2-4.6 40.4-43 61.7-96.7 61.7-155.2 0-58.5-21.3-112.4-61.8-155.6z"}},{"tag":"path","attr":{"d":"M159.2 347.7c-24.1-24.3-37.3-56.6-37.3-90.9 0-35 13.8-67.9 38.8-92.4 5.5-5.3 5.6-14.2.2-19.8-2.6-2.7-6.2-4.2-10-4.2-3.7 0-7.2 1.4-9.8 4C110.7 174.2 94 214.1 94 256.8c0 41.6 16.1 80.9 45.3 110.6 2.7 2.7 6.2 4.2 9.9 4.2s7.2-1.5 9.8-4.2c2.6-2.6 4.1-6.1 4.1-9.8.2-3.7-1.2-7.2-3.9-9.9zM371 144.5c-2.6-2.6-6-4-9.8-4-3.8 0-7.3 1.5-10 4.1-5.4 5.4-5.4 14.3.1 19.8 25 24.5 38.7 56.5 38.7 91.5 0 34.2-13.1 67.4-37.1 91.8-5.4 5.4-5.3 14.3.1 19.7 2.6 2.6 6.2 4.1 9.8 4.1 3.8 0 7.4-1.5 9.9-4.1C402 337.7 418 297.6 418 256c0-42.5-16.7-81.5-47-111.5z"}},{"tag":"path","attr":{"d":"M207.1 183.4c-2.6-2.7-6.2-4.2-10-4.2-3.7 0-7.2 1.4-9.8 4.1-19.8 19.5-30.8 45.6-30.8 73.3 0 27.1 10.5 52.7 29.5 72.1 2.7 2.7 6.2 4.2 10 4.2 3.7 0 7.2-1.4 9.8-4 2.7-2.6 4.2-6.1 4.2-9.9 0-3.8-1.4-7.3-4.1-10-13.8-14-21.4-32.6-21.4-52.5 0-20.3 8-39.2 22.4-53.4 5.4-5.2 5.5-14.1.2-19.7zM325.7 183.2c-2.6-2.6-6-4-9.8-4-3.8 0-7.3 1.5-10 4.1-5.4 5.4-5.4 14.3.1 19.8 14.5 14.3 22.4 33.3 22.4 53.5 0 19.8-7.6 38.5-21.5 52.5-2.6 2.6-4.1 6.2-4 9.9 0 3.7 1.5 7.2 4.1 9.8 2.6 2.6 6.2 4.1 9.8 4.1 3.7 0 7.3-1.5 9.9-4.2 19.1-19.4 29.6-45 29.6-72.1.1-27.8-10.8-53.8-30.6-73.4zM256 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17.1-38-38-38z"}}]})(props);
};
function IoIosRainy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M433.9 175.6c-19-17.6-44.6-27.3-72.1-27.3h-5.6c-6.5-23.5-19.4-43.5-37.6-58.2C297.3 73 269.5 64 238.1 64c-32.7 0-63.2 11.7-86 32.9-22.8 21.2-35.5 50-36.1 81.4-17.5 4-33.6 13.7-46 27.9-14.2 16.2-22 36.6-22 57.4 0 44.6 34.9 82.6 77.4 86L101.2 382c-2.4 3.2-3.3 7.2-2.7 11.1.6 3.9 2.8 7.3 6 9.6 2.5 1.8 5.5 2.7 8.6 2.7 5.2 0 9.8-2.1 12.5-5.8l37.1-50h35.1l-55.3 75.1c-2.3 3.2-3.4 6.9-2.9 10.6.5 3.9 2.6 7.4 5.9 9.8 3.5 2.5 7.5 2.8 9 2.8 7.2 0 11.2-3.5 13.4-6.4l67.4-91.8H270L246 382c-2.4 3.3-3.4 7.2-2.7 11.1.6 3.9 2.8 7.3 6 9.6 2.5 1.8 5.5 2.7 8.6 2.7 5.2 0 9.8-2.1 12.5-5.8l37-50h35.1l-55.3 75.1c-2.3 3.2-3.4 7-2.9 10.6.5 3.8 2.6 7.2 5.9 9.6 2.6 1.9 5.9 3 8.9 3 5.1 0 9.7-2.2 12.5-6l69.7-95.1c22.4-4.5 43-16.6 58.1-34.5 15.9-18.8 24.7-42.6 24.7-67.1-.1-26.8-10.8-51.6-30.2-69.6z"}}]})(props);
};
function IoIosRecording (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M386.2 146h-.1c-60.6 0-109.8 49.2-109.8 110.1 0 30.5 12.3 58 32.3 77.9H203.5c19.9-19.9 32.3-47.5 32.3-77.9 0-60.8-49.2-110.1-109.8-110.1h-.1-.1C65.2 146 16 195.2 16 256s49.2 110 109.8 110h260.4c60.6 0 109.8-49.2 109.8-110s-49.2-110-109.8-110zM464 256c0 43.1-34.9 78.2-77.9 78.2s-77.9-35.1-77.9-78.2 34.9-78.2 77.9-78.2S464 212.9 464 256zm-338.1 78.2C83 334.2 48 299.1 48 256s34.9-78.2 77.9-78.2 77.9 35.1 77.9 78.2-34.9 78.2-77.9 78.2z"}}]})(props);
};
function IoIosRedo (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M32 432h2.9c1.8 0 3.5-1.1 4.1-2.8 2.2-5.7 8.3-19.8 21.4-39.7 21.5-32.7 58.4-67.4 94.5-83.5 27.6-12.4 53-21.5 97.1-23.2 2.3-.1 4.2 1.7 4.2 4v81.6c0 3.2 3.6 5.1 6.2 3.4l215.9-142.2c2.4-1.6 2.4-5.1 0-6.7l-216-142.2c-2.7-1.8-6.2.1-6.2 3.4v82.6c0 2.2-1.7 3.9-3.8 4-71.6 3.8-123.1 24.8-163.4 65.5-61 61.6-56.8 139.1-56.8 158.7 0 10.3-.1 25.3-.1 37.1z"}}]})(props);
};
function IoIosRefreshCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 336.1c-70.7 0-128-57.3-128-128.1s57.3-128.1 128-128.1v-37c0-6.4 7.1-10.2 12.4-6.7l72.9 52.6c4.9 3.3 4.7 10.6-.4 13.6L268 196.7c-5.3 3.1-12-.8-12-6.9v-41.9c-60.3 0-109.2 49.7-108.1 110.2 1.1 59.1 50.3 106.7 109.5 106 55.9-.7 101.8-43.7 106.3-99 .4-5.2 4.7-9.1 9.9-9.1 5.8 0 10.4 4.9 9.9 10.7-5.4 66-60.4 117.4-127.5 117.4z"}}]})(props);
};
function IoIosRefresh (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M433 288.8c-7.7 0-14.3 5.9-14.9 13.6-6.9 83.1-76.8 147.9-161.8 147.9-89.5 0-162.4-72.4-162.4-161.4 0-87.6 70.6-159.2 158.2-161.4 2.3-.1 4.1 1.7 4.1 4v50.3c0 12.6 13.9 20.2 24.6 13.5L377 128c10-6.3 10-20.8 0-27.1l-96.1-66.4c-10.7-6.7-24.6.9-24.6 13.5v45.7c0 2.2-1.7 4-3.9 4C148 99.8 64 184.6 64 288.9 64 394.5 150.1 480 256.3 480c100.8 0 183.4-76.7 191.6-175.1.8-8.7-6.2-16.1-14.9-16.1z"}}]})(props);
};
function IoIosRemoveCircleOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M346.5 240h-181c-8.8 0-16 6-16 16s7.5 16 16 16h181c8.8 0 16-7.2 16-16s-7.2-16-16-16z"}},{"tag":"path","attr":{"d":"M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}}]})(props);
};
function IoIosRemoveCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm90.5 224h-181c-8.5 0-16-6-16-16s7.2-16 16-16h181c8.8 0 16 7.2 16 16s-7.2 16-16 16z"}}]})(props);
};
function IoIosRemove (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M368.5 240h-225c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7h225c8.8 0 16-7.2 16-16s-7.2-16-16-16z"}}]})(props);
};
function IoIosReorder (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M80 304h352v16H80zM80 248h352v16H80zM80 192h352v16H80z"}}]})(props);
};
function IoIosRepeat (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M336.6 157.5L303 124.1c-3.5-3.5-8.5-4.9-13.6-3.6-1.2.3-2.4.8-3.5 1.5-4.7 2.9-7.2 7.8-6.8 13.1.2 3.4 1.9 6.6 4.3 9.1l16 15.9H142c-20.8 0-40.3 8.1-55.1 22.9C72.1 197.7 64 217.2 64 238v16c0 7.7 6.3 14 14 14s14-6.3 14-14v-16c0-13.3 5.2-25.8 14.7-35.3 9.5-9.5 22-14.7 35.3-14.7h155.4l-16 15.9c-2.4 2.4-4 5.4-4.3 8.7-.4 4.2 1.1 8.3 4.1 11.3 2.6 2.6 6.2 4.1 9.9 4.1s7.2-1.4 9.9-4.1l35.6-35.4c4.2-4.1 6.5-9.7 6.5-15.5-.1-5.9-2.4-11.4-6.5-15.5zM434 244c-7.7 0-14 6.3-14 14v16c0 13.3-5.2 25.8-14.7 35.3-9.5 9.5-22 14.7-35.3 14.7H214.6l16-15.9c2.4-2.4 4-5.4 4.3-8.8.4-4.2-1.1-8.3-4.1-11.3-2.6-2.6-6.2-4.1-9.9-4.1s-7.2 1.4-9.9 4.1l-35.6 35.4c-4.2 4.1-6.5 9.7-6.5 15.5 0 5.9 2.3 11.4 6.5 15.5l33.6 33.4c3.5 3.5 8.5 4.9 13.6 3.6 1.2-.3 2.4-.8 3.5-1.5 4.7-2.9 7.2-7.8 6.8-13.1-.2-3.4-1.9-6.6-4.3-9.1l-16-15.9H370c43 0 78-35 78-78v-16c0-7.5-6.3-13.8-14-13.8z"}}]})(props);
};
function IoIosResize (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M418.3 80H307.8c-7.5 0-13.7 6.1-13.7 13.7v.2c0 7.5 6.1 13.7 13.7 13.7h76.5L107.6 384.3v-76.5c0-7.5-6.1-13.7-13.7-13.7h-.2c-7.5 0-13.7 6.1-13.7 13.7v110.5c0 7.5 6.1 13.7 13.7 13.7h110.5c7.5 0 13.7-6.1 13.7-13.7v-.2c0-7.5-6.1-13.7-13.7-13.7h-76.5l276.7-276.7v76.5c0 7.5 6.1 13.7 13.7 13.7h.2c7.5 0 13.7-6.1 13.7-13.7V93.7c0-7.6-6.1-13.7-13.7-13.7z"}}]})(props);
};
function IoIosRestaurant (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M384 64c-24.8 0-48 77.3-48 160 0 57 32 80 32 80v128c0 8.8 7.2 16 16 16s16-7.2 16-16V75c0-11-11-11-16-11zM288 64l10 104c0 4.4-3.6 8-8 8s-8-3.6-8-8l-6-104h-8l-6 104c0 4.4-3.6 8-8 8s-8-3.6-8-8l10-104h-8s-24 107.2-24 128 13.4 38.6 32 45.2V432c0 8.8 7.2 16 16 16s16-7.2 16-16V237.2c18.6-6.6 32-24.2 32-45.2S296 64 296 64h-8zM160 64c-26.5 0-48 64-48 128 0 20.8 13.4 38.6 32 45.2V432c0 8.8 7.2 16 16 16s16-7.2 16-16V237.2c18.6-6.6 32-24.2 32-45.2 0-64-21.5-128-48-128z"}}]})(props);
};
function IoIosReturnLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M70.5 265.4l59.6-59.4c2.6-2.6 6.1-4.1 9.9-4.1 3.7 0 7.3 1.4 9.9 4.1 2.6 2.6 4.1 6.1 4.1 9.9s-1.5 7.3-4.1 9.9l-.1.1-41.1 40.1H370c13.2 0 25.8-5.2 35.3-14.7 9.5-9.4 14.7-21.9 14.7-35.3v-48c0-7.7 6.3-14 14-14s14 6.3 14 14v48c0 20.8-8.1 40.3-22.9 55.1-14.8 14.8-34.3 22.9-55.1 22.9H108.3l39.6 40.2c2.6 2.6 4.1 6.1 4.1 9.9 0 3.7-1.4 7.3-4.1 9.9l-.1.1c-2.7 2.5-6.2 3.9-9.8 3.9-3.9 0-7.3-1.4-9.9-4.1l-57.6-57.4c-4.2-4.2-6.5-9.8-6.5-15.7 0-5.8 2.3-11.3 6.5-15.4z"}}]})(props);
};
function IoIosReturnRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M441.5 265.4L381.9 206c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-2.6 2.6-4.1 6.1-4.1 9.9s1.5 7.3 4.1 9.9l.1.1 41.1 40.1H142c-13.2 0-25.8-5.2-35.3-14.7-9.5-9.5-14.7-22-14.7-35.3v-48c0-7.7-6.3-14-14-14s-14 6.3-14 14v48c0 20.8 8.1 40.3 22.9 55.1 14.8 14.8 34.3 22.9 55.1 22.9h261.7L364 334.2c-2.6 2.6-4.1 6.1-4.1 9.9 0 3.7 1.4 7.3 4.1 9.9l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.9 0 7.3-1.4 9.9-4.1l57.6-57.4c4.2-4.2 6.5-9.8 6.5-15.7.1-5.8-2.2-11.3-6.4-15.4z"}}]})(props);
};
function IoIosReverseCamera (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M417.5 160H363c-4.6 0-8.9-2-12-5.4-28.4-31.8-39.1-42.6-50.7-42.6h-85.5c-11.7 0-23.2 10.8-51.7 42.7-3 3.4-7.4 5.3-11.9 5.3h-4.1v-8c0-4.4-3.6-8-8-8h-26c-4.4 0-8 3.6-8 8v8h-7.5C79.9 160 64 173.2 64 190.7v176c0 17.5 15.9 33.3 33.5 33.3h320c17.6 0 30.5-15.8 30.5-33.3v-176c0-17.5-12.9-30.7-30.5-30.7zM308.3 340.5c-.8 2.5-2.6 4.6-4.8 6.1-14.1 9.7-30.5 14.8-47.5 14.8-21 0-41.2-8.1-57.1-22.7-14.6-13.5-24.1-31.2-27-50.2h-20.4c-3.2 0-6-2.8-5.6-6.6.1-.7.3-1.3.7-1.8l31.5-42.3c1.1-1.4 2.7-2.2 4.4-2.2 1.7 0 3.3.8 4.4 2.2l32.2 41.8c2 2.6 1.5 6.4-1.8 8.5-.6.4-1.2.5-1.9.5h-20.8c2.7 12.8 9.7 24.8 19.9 34 11.6 10.6 26.3 16.4 41.4 16.4 12.3 0 24.4-4 35.1-11.5 1.9-1.3 4.2-2.1 6.5-2.1 3.2 0 6.2 1.3 8.3 3.7 2.9 3 3.9 7.3 2.5 11.4zm56.6-67.5l-31.2 42.9c-1.8 2.5-5.5 3.2-8.3.8-.2-.2-.4-.4-.5-.6L292.5 273c-2-2.6-1.4-6.5 1.9-8.5.6-.3 1.2-.5 1.9-.5h21c-2.7-13.6-9.7-26.1-19.9-35.6-11.5-10.7-26.2-16.6-41.3-16.6-12.5 0-24.6 3.9-35.2 11.3-1.9 1.3-4.1 2-6.4 2-3.1 0-6.1-1.3-8.2-3.6-2.8-3-3.8-7.4-2.5-11.5.8-2.5 2.6-4.6 4.7-6 14.1-9.7 30.6-14.8 47.6-14.8 21.7 0 42.2 7.9 57.8 22.3 13.3 12.3 23.2 32.1 26.2 52.4h21.1c.6 0 1.3.2 1.8.5 3.2 2.1 3.8 6 1.9 8.6z"}}]})(props);
};
function IoIosRewind (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M35.9 249.3L244 129.1c5.4-3.1 12.3.6 12.3 6.7V251l211.3-121.9c5.4-3.1 12.3.6 12.3 6.7v240.3c0 6.1-6.9 9.8-12.3 6.7L256.4 261v115.2c0 6.1-6.9 9.8-12.3 6.7L35.9 262.7c-5.2-3-5.2-10.4 0-13.4z"}}]})(props);
};
function IoIosRibbon (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M254.9 293.4c73 .6 132.3-58.7 131.7-131.8-.6-69.9-59.7-129-129.5-129.6-73-.6-132.3 58.7-131.7 131.8.6 69.9 59.7 129 129.5 129.6zm-3.7-204.1c44.3-2.8 80.9 33.8 78.1 78.2-2.3 36.6-31.9 66.2-68.5 68.6-44.3 2.8-80.9-33.8-78.1-78.2 2.3-36.6 31.9-66.2 68.5-68.6z"}},{"tag":"path","attr":{"d":"M256 308.4c-42.8 0-81.4-18.1-108.5-47-1.9-2-5.2-1.7-6.6.7L65.1 394.8c-3.1 5.5.8 12.3 7.2 12.3h80.1c2.9 0 5.6 1.5 7.1 4l39 64.9c3.4 5.7 11.8 5.2 14.6-.8l43-94.6 31.3-68.9c1.4-3-1.2-6.3-4.5-5.7-8.8 1.5-17.7 2.4-26.9 2.4zM364.5 261.3c-14.6 15.5-32.4 28-52.5 36.1-1 .4-1.8 1.1-2.2 2.1l-44.7 97.7c-.5 1.1-.5 2.3 0 3.4l33.9 74.5c2.7 6 11.2 6.5 14.6.8l39-64.9c1.5-2.5 4.2-4 7.1-4h80.1c6.3 0 10.3-6.8 7.2-12.3l-75.8-132.8c-1.5-2.2-4.8-2.6-6.7-.6z"}}]})(props);
};
function IoIosRocket (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M461.8 53.6c-.4-1.7-1.6-3-3.3-3.4-54.4-13.3-180.1 34.1-248.2 102.2-13.3 13.3-24.2 26.4-33.1 39.1-21-1.9-42-.3-59.9 7.5-50.5 22.2-65.2 80.2-69.3 105.1-1 5.9 3.9 11 9.8 10.4l81.1-8.9c.1 7.8.6 14 1.1 18.3.4 4.2 2.3 8.1 5.3 11.1l31.4 31.4c3 3 6.9 4.9 11.1 5.3 4.3.5 10.5 1 18.2 1.1l-8.9 81c-.6 5.9 4.5 10.8 10.4 9.8 24.9-4 83-18.7 105.1-69.2 7.8-17.9 9.4-38.8 7.6-59.7 12.7-8.9 25.9-19.8 39.2-33.1 68.4-68 115.5-190.9 102.4-248zM298.6 213.5c-16.7-16.7-16.7-43.7 0-60.4 16.7-16.7 43.7-16.7 60.4 0 16.7 16.7 16.7 43.7 0 60.4-16.7 16.7-43.7 16.7-60.4 0z"}},{"tag":"path","attr":{"d":"M174.5 380.5c-4.2 4.2-11.7 6.6-19.8 8-18.2 3.1-34.1-12.8-31-31 1.4-8.1 3.7-15.6 7.9-19.7l.1-.1c2.3-2.3.4-6.1-2.8-5.7-9.8 1.2-19.4 5.6-26.9 13.1-18 18-19.7 84.8-19.7 84.8s66.9-1.7 84.9-19.7c7.6-7.6 11.9-17.1 13.1-26.9.3-3.2-3.6-5.1-5.8-2.8z"}}]})(props);
};
function IoIosRose (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M416 141.1c-18.9 3.9-36.8 8.2-53.7 12.8-40.5 11-75.5 24.9-105.4 38.2-19.3 8.6-26.2 12.4-51.5 25.9C147 248.9 112 289 112 349c0 67.8 55.6 115 144 115s144-51.2 144-119c0-67.7-61-114.7 16-203.9zM135.4 241.8c12.8-10.5 31.2-23.9 56.1-38.4 6.4-3.8 13.3-7.6 20.6-11.4 11.6-6.1 23.5-11.9 35.8-17.4-9.1-10.1-22.1-19.1-36.6-27C162.6 121.1 96 107.4 96 107.4c41.5 43.7 44.6 96.5 39.4 134.4zM352 77.7s-73.8-.9-125.8 55c0 0 27.7 17.3 42.7 32.3 37.2-15.6 82.3-28.6 115.2-36-6.5-21.7-32.1-51.3-32.1-51.3zM239.7 97C210.3 59.5 176 48 176 48c-15.3 20.8-24.3 38-29 51.7 21.1 5.9 36.5 12.3 62.4 24.7 9.5-10.6 18.1-19.1 30.3-27.4z"}}]})(props);
};
function IoIosSad (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256c0 114.7 93.3 208 208 208 114.9 0 208-93.1 208-208 0-114.7-93.3-208-208-208zm-73.9 152.1c14.8-1.2 27 11.1 25.9 25.9-.9 11.6-10.3 21.1-22 22-14.8 1.2-27-11.1-25.9-25.9.9-11.7 10.3-21.1 22-22zm-.7 151.9c-11.5 0-19.3-11.8-14.7-22.4 15-34.5 49.2-58.6 89.3-58.6s74.2 24.1 89.3 58.6c4.6 10.6-3.1 22.4-14.7 22.4 0 0-34.7-4-73.1-4-38.5 0-76.1 4-76.1 4zm148.5-104.1c-14.8 1.2-27-11.1-25.9-25.9.9-11.6 10.3-21.1 22-22 14.8-1.2 27 11.1 25.9 25.9-.9 11.7-10.3 21.1-22 22z"}}]})(props);
};
function IoIosSave (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M272 64h-16c-4.4 0-8 3.6-8 8v72c0 4.4 7.6 8 12 8h12c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8z"}},{"tag":"path","attr":{"d":"M433.9 130.1L382 78.2c-9-9-21.3-14.2-34.1-14.2h-28c-8.8 0-16 7.3-16 16.2v80c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16v-80c0-8.8-7.2-16.2-16-16.2H96c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V164c0-12.7-5.1-24.9-14.1-33.9zM322 400.1c0 8.8-8 16-17.8 16H143.8c-9.8 0-17.8-7.2-17.8-16v-96c0-8.8 8-16 17.8-16h160.4c9.8 0 17.8 7.2 17.8 16v96z"}}]})(props);
};
function IoIosSchool (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M96.9 270.3V363c0 2.9 1.5 5.5 4 7l132 75.9c5.3 3.1 12-.8 12-7v-93.8c0-2.9-1.5-5.5-4-7l-132-74.9c-5.4-2.9-12 1-12 7.1zM280.9 445.9L413 370c2.5-1.4 4-4.1 4-7v-93.7c0-6.2-6.6-10-12-7l-132 75.9c-2.5 1.4-4 4.1-4 7V439c-.1 6.1 6.6 10 11.9 6.9z"}},{"tag":"path","attr":{"d":"M249 65.1L37 188.9c-5.4 3.1-5.4 10.8 0 13.9l212 117.8c4.9 2.8 11 2.8 15.9 0L453 212.9c5.3-3.1 7 .8 7 7v153.4c0 6.8 3.9 10 11 10 4.4 0 10-3.2 10-10V201.5c0-2.9-1.5-5.5-4-7L264.9 65.1c-4.9-2.8-11-2.8-15.9 0z"}}]})(props);
};
function IoIosSearch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"}}]})(props);
};
function IoIosSend (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z"}}]})(props);
};
function IoIosSettings (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M416.3 256c0-21 13.1-38.9 31.7-46.1-4.9-20.5-13-39.7-23.7-57.1-6.4 2.8-13.2 4.3-20.1 4.3-12.6 0-25.2-4.8-34.9-14.4-14.9-14.9-18.2-36.8-10.2-55-17.3-10.7-36.6-18.8-57-23.7C295 82.5 277 95.7 256 95.7S217 82.5 209.9 64c-20.5 4.9-39.7 13-57.1 23.7 8.1 18.1 4.7 40.1-10.2 55-9.6 9.6-22.3 14.4-34.9 14.4-6.9 0-13.7-1.4-20.1-4.3C77 170.3 68.9 189.5 64 210c18.5 7.1 31.7 25 31.7 46.1 0 21-13.1 38.9-31.6 46.1 4.9 20.5 13 39.7 23.7 57.1 6.4-2.8 13.2-4.2 20-4.2 12.6 0 25.2 4.8 34.9 14.4 14.8 14.8 18.2 36.8 10.2 54.9 17.4 10.7 36.7 18.8 57.1 23.7 7.1-18.5 25-31.6 46-31.6s38.9 13.1 46 31.6c20.5-4.9 39.7-13 57.1-23.7-8-18.1-4.6-40 10.2-54.9 9.6-9.6 22.2-14.4 34.9-14.4 6.8 0 13.7 1.4 20 4.2 10.7-17.4 18.8-36.7 23.7-57.1-18.4-7.2-31.6-25.1-31.6-46.2zm-159.4 79.9c-44.3 0-80-35.9-80-80s35.7-80 80-80 80 35.9 80 80-35.7 80-80 80z"}}]})(props);
};
function IoIosShareAlt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M444.7 230.4l-141.1-132c-1.7-1.6-3.3-2.5-5.6-2.4-4.4.2-10 3.3-10 8v66.2c0 2-1.6 3.8-3.6 4.1C144.1 195.8 85 300.8 64.1 409.8c-.8 4.3 5 8.3 7.7 4.9 51.2-64.5 113.5-106.6 212-107.4 2.2 0 4.2 2.6 4.2 4.8v65c0 7 9.3 10.1 14.5 5.3l142.1-134.3c2.6-2.4 3.4-5.2 3.5-8.4-.1-3.2-.9-6.9-3.4-9.3z"}}]})(props);
};
function IoIosShare (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M376 176H269v146.6c0 7-5.4 13-12.4 13.4-7.5.4-13.6-5.6-13.6-13V176H136c-22 0-40 18-40 40v208c0 22 18 40 40 40h240c22 0 40-18 40-40V216c0-22-18-40-40-40zM269 92.1l47.9 47.2c5.1 5 13.3 5 18.4-.1 5-5.1 5-13.3-.1-18.4l-70-69c-2.5-2.4-5.8-3.7-9.1-3.7-1.7 0-3.4.3-5 1-1.5.6-2.9 1.6-4.1 2.7l-70 69c-5.1 5-5.2 13.3-.1 18.4 5 5.1 13.3 5.2 18.4.1L243 92.1V176h26V92.1z"}}]})(props);
};
function IoIosShirt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M461.8 181.7c1.3-1.6 1.2-3.8-.2-5.3-11.5-12.1-61.3-63.7-89.1-83.7C352 78 332 64 310 64s-22 8-54 8-32-8-54-8-42 14-62.5 28.7c-27.8 20-77.6 71.6-89.1 83.7-1.4 1.5-1.5 3.7-.2 5.3l61.7 64c2.4 2.9 7.1 1.2 7.1-2.5v-44.9c0-4.5 3.2-8.5 7.6-9.2 5.6-.9 10.4 3.5 10.4 8.9v242c0 4.4 3.6 8 8 8h222c4.4 0 8-3.6 8-8V198.3c0-4.5 3.2-8.5 7.6-9.2 5.6-.9 10.4 3.5 10.4 8.9v45.2c0 3.8 4.7 5.4 7.1 2.5l61.7-64zM256 143c-30 0-54-12.7-54-36 0-30 24-10.7 54-10.7 29.8 0 54-19.3 54 10.7 0 23.3-24.2 36-54 36z"}}]})(props);
};
function IoIosShuffle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M405.9 288.1c-2.6-2.6-6.2-4.1-9.9-4.1s-7.2 1.4-9.9 4.1c-2.7 2.6-4.1 6.2-4.1 9.9s1.5 7.2 4.1 9.9l16.3 16.2h-75.5l-124-155-.1-.1c-2.6-3.1-6.7-5-10.8-5H78c-7.7 0-14 6.3-14 14s6.3 14 14 14h107.4l52.5 66-52.5 66H78c-7.7 0-14 6.3-14 14s6.3 14 14 14h114c4.1 0 8-1.8 10.7-5l.1-.1 53.2-66.8 53.2 66.8.1.1c2.7 3.2 6.6 5 10.7 5h84.4l-16.3 16.2c-2.7 2.6-4.1 6.1-4.1 9.9 0 3.7 1.5 7.2 4.1 9.9 2.6 2.6 6.2 4.1 9.9 4.1s7.2-1.4 9.9-4.1l33.6-33.4c4.2-4.1 6.5-9.6 6.5-15.5s-2.3-11.4-6.5-15.5l-35.6-35.5z"}},{"tag":"path","attr":{"d":"M279.4 235.4c1.1 1.4 2.8 2.1 4.6 2.1h.1c1.8 0 3.5-.8 4.6-2.2l37.9-47.3h75.8l-16.3 16.2c-2.7 2.6-4.1 6.1-4.1 9.9 0 3.7 1.5 7.2 4.1 9.9 2.6 2.6 6.2 4.1 9.9 4.1s7.2-1.4 9.9-4.1l35.6-35.4c4.2-4.1 6.5-9.7 6.5-15.5 0-5.9-2.3-11.4-6.5-15.5l-33.6-33.4c-2.6-2.6-6.2-4.1-9.9-4.1s-7.2 1.4-9.9 4.1c-2.7 2.6-4.1 6.2-4.1 9.9s1.5 7.2 4.1 9.9l16.3 16.2H320c-4.1 0-8 1.8-10.7 5l-.1.1-40.3 50.2c-1.8 2.2-1.8 5.4.1 7.6l10.4 12.3z"}}]})(props);
};
function IoIosSkipBackward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M175 100v137.8L403.9 98.1c5.3-3.1 12.1.7 12.1 6.9v302c0 6.2-6.7 10-12.1 6.9L175 274.2V412c0 2.2-1.8 4-4 4h-71c-2.2 0-4-1.8-4-4V100c0-2.2 1.8-4 4-4h71c2.2 0 4 1.8 4 4z"}}]})(props);
};
function IoIosSkipForward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M337 100v137.8L108.1 98.1C102.7 95 96 98.8 96 105v302c0 6.2 6.7 10 12.1 6.9L337 274.2V412c0 2.2 1.8 4 4 4h71c2.2 0 4-1.8 4-4V100c0-2.2-1.8-4-4-4h-71c-2.2 0-4 1.8-4 4z"}}]})(props);
};
function IoIosSnow (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M440.5 345.8L408.1 327c11.8-12.3 26-18.2 26.2-18.3 7.5-3 11.4-11.4 8.9-19.1-1.9-5.9-7.4-9.8-13.5-9.8-1.9 0-3.7.4-5.5 1.1-1 .4-24.4 10-41.9 31.2l-96.3-56 96.3-56c17.5 21.2 40.8 30.8 41.9 31.2 1.8.7 3.6 1.1 5.5 1.1 6.1 0 11.6-4 13.5-9.8 2.5-7.7-1.4-16.1-8.9-19.1-.1-.1-14.3-6-26.2-18.3l32.4-18.8c7.2-4.2 9.6-13.4 5.5-20.6-2.7-4.7-7.7-7.6-13.1-7.6-2.6 0-5.3.7-7.6 2L393.1 159c-4.5-16.2-2.7-31.4-2.6-32 1.1-8.1-4.1-15.6-12-17.3-1-.2-2-.3-3-.3-7.1 0-13 5.2-14.1 12.4-.2 1.1-3.6 26 6.1 52.2l-96 56v-99.2c26.9-4.7 46.8-20.2 47.7-20.9 3.1-2.5 5.1-6 5.4-10 .3-4-.9-7.8-3.6-10.8-2.9-3.2-7-5.1-11.4-5.1-3.4 0-6.8 1.2-9.5 3.3-.1.1-12.2 9.4-28.6 13.6V63.1c0-8.2-7.1-15.1-15.5-15.1s-15.5 6.9-15.5 15.1v37.5c-16.3-4.2-28.4-13.5-28.6-13.6-2.7-2.1-6-3.3-9.5-3.3-4.4 0-8.5 1.9-11.4 5.1-2.7 3-4 7-3.6 10.9.3 3.9 2.3 7.4 5.4 9.9.9.7 20.8 16.2 47.7 20.9v99.2l-96-56c9.6-26 6.2-51.1 6-52.2-1-7.2-6.9-12.4-14-12.4-1 0-2 .1-3 .3-7.9 1.6-13.2 9.3-12 17.3 0 .2 2 15.5-2.6 31.9L86.6 140c-2.3-1.3-4.9-2-7.6-2-5.4 0-10.4 2.9-13.1 7.6-4.1 7.2-1.7 16.5 5.5 20.6l32.4 18.8c-11.7 12.1-25.7 18.1-26.2 18.3-7.5 3-11.4 11.4-8.9 19.1 1.9 5.9 7.4 9.8 13.5 9.8 1.9 0 3.7-.4 5.5-1.1 1-.4 24.4-10 41.9-31.2l96.3 56-96.3 56c-17.5-21.2-40.8-30.8-41.9-31.2-1.8-.7-3.6-1.1-5.5-1.1-6.1 0-11.6 4-13.5 9.8-2.5 7.7 1.4 16 8.9 19.1.5.2 14.5 6.2 26.2 18.3l-32.4 18.8c-7.2 4.2-9.6 13.4-5.5 20.6 2.7 4.7 7.7 7.6 13.1 7.6 2.6 0 5.3-.7 7.6-2l32.3-18.8c4.6 16.5 2.6 31.8 2.6 32-1.2 8 4.1 15.7 12 17.3 1 .2 2 .3 3 .3 7.1 0 13-5.2 14.1-12.4.2-1.1 3.6-26-6.1-52.2l96-56v99.2c-26.9 4.7-46.8 20.2-47.7 20.9-3.1 2.5-5.1 6-5.4 10-.3 4 .9 7.8 3.6 10.8 2.9 3.2 7 5.1 11.4 5.1 3.4 0 6.8-1.2 9.5-3.3.1-.1 12.3-9.4 28.6-13.6v37.5c0 8.2 7.1 15.1 15.5 15.1s15.5-6.9 15.5-15.1v-37.5c16.3 4.2 28.4 13.5 28.6 13.6 2.7 2.1 6.1 3.3 9.5 3.3 4.4 0 8.5-1.9 11.4-5.1 2.7-3 4-7 3.6-10.9-.3-3.9-2.3-7.4-5.4-9.9-.9-.7-20.8-16.2-47.7-20.9V282l96 56c-9.6 26-6.2 51.1-6 52.2 1 7.2 6.9 12.4 14 12.4 1 0 2-.1 3-.3 7.9-1.6 13.1-9.2 12-17.3-.1-.5-1.9-15.7 2.6-32l32.2 18.8c2.3 1.3 4.9 2 7.6 2 5.4 0 10.4-2.9 13.1-7.6 4.1-6.9 1.7-16.2-5.5-20.4z"}}]})(props);
};
function IoIosSpeedometer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 64C132.3 64 32 164.2 32 287.9c0 57 21.3 109 56.3 148.5 1.1 1.2 2.1 2.4 3.2 3.5C96.3 445 103 448 110 448c7.1 0 13.8-3 18.6-8.2 31.6-34.4 77-55.9 127.4-55.9s95.8 21.6 127.4 55.9c4.8 5.2 11.5 8.2 18.6 8.2 7 0 13.7-2.9 18.5-8.1 1.1-1.2 2.1-2.3 3.2-3.5 35-39.5 56.3-91.5 56.3-148.5C480 164.2 379.7 64 256 64zm-14 45.9c0-7.7 6.3-14 14-14s14 6.3 14 14v36c0 7.7-6.3 14-14 14s-14-6.3-14-14v-36zm-128 192H78c-7.7 0-14-6.3-14-14s6.3-14 14-14h36c7.7 0 14 6.3 14 14s-6.3 14-14 14zm51.5-104.5c-5.4 5.4-14.4 5.4-19.8 0L120.2 172c-5.4-5.4-5.4-14.4 0-19.8s14.4-5.4 19.8 0l25.5 25.5c5.4 5.4 5.4 14.3 0 19.7zm160.6 34.5l-47.5 75.5c-1.9 2.6-4.3 5.1-7 7-13.5 9.7-32.3 6.5-42-7s-6.5-32.3 7-42l75.5-47.5c3.4-2.4 8.1-2.5 11.7 0 4.5 3.2 5.5 9.5 2.3 14zm40.2-34.5c-5.4 5.4-14.4 5.4-19.8 0s-5.4-14.4 0-19.8l25.5-25.5c5.4-5.4 14.4-5.4 19.8 0s5.4 14.4 0 19.8l-25.5 25.5zM434 301.9h-36c-7.7 0-14-6.3-14-14s6.3-14 14-14h36c7.7 0 14 6.3 14 14s-6.3 14-14 14z"}}]})(props);
};
function IoIosSquareOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M388 96H124c-15.4 0-28 12.6-28 28v264c0 15.4 12.6 28 28 28h264c15.4 0 28-12.6 28-28V124c0-15.4-12.6-28-28-28zm0 284c0 4.4-3.6 8-8 8H132c-4.4 0-8-3.6-8-8V132c0-4.4 3.6-8 8-8h248c4.4 0 8 3.6 8 8v248z"}}]})(props);
};
function IoIosSquare (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M388 416H124c-15.4 0-28-12.6-28-28V124c0-15.4 12.6-28 28-28h264c15.4 0 28 12.6 28 28v264c0 15.4-12.6 28-28 28z"}}]})(props);
};
function IoIosStarHalf (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-47.4 35.2l-79.8 57.3c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2-.1-.1c-10-7-16.1-18.3-16.1-30.5V113.3c0-2.2 3.1-2.7 3.8-.6l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.4 7.2z"}}]})(props);
};
function IoIosStarOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-127.2 92.5c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2-5.7 0-11.4 1.7-16.2 5.2l-77.4 55.1c-3.2 2.3-7.4-.9-6.1-4.6l30.1-87.7c4-11.8-.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3 2.3-7.3H196c12 0 22.7-7.7 26.5-19.1l29.6-88.2c1.2-3.6 6.4-3.6 7.6 0l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.3 7.2l-79.6 57.5z"}}]})(props);
};
function IoIosStar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"}}]})(props);
};
function IoIosStats (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M184 448h48c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v368c0 4.4 3.6 8 8 8zM88 448h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8H88c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zM280.1 448h47.8c4.5 0 8.1-3.6 8.1-8.1V232.1c0-4.5-3.6-8.1-8.1-8.1h-47.8c-4.5 0-8.1 3.6-8.1 8.1v207.8c0 4.5 3.6 8.1 8.1 8.1zM368 136.1v303.8c0 4.5 3.6 8.1 8.1 8.1h47.8c4.5 0 8.1-3.6 8.1-8.1V136.1c0-4.5-3.6-8.1-8.1-8.1h-47.8c-4.5 0-8.1 3.6-8.1 8.1z"}}]})(props);
};
function IoIosStopwatch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M415.9 143.7c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3L413 95.6c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l25.5 25.5zM84.8 143.7c3.1 3.1 8.2 3.1 11.3 0l25.5-25.5c3.1-3.1 3.1-8.2 0-11.3l-11.3-11.3c-3.1-3.1-8.2-3.1-11.3 0L73.5 121c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.4z"}},{"tag":"path","attr":{"d":"M280 81.5V64c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v17.5C137.3 93.3 64 174.1 64 272c0 106 86 192 192 192s192-86 192-192c0-97.9-73.3-178.7-168-190.5zm-10 219.3V320c0 7.7-6.3 14-14 14s-14-6.3-14-14v-19.2c-10.7-5.2-18-16.1-18-28.8s7.3-23.6 18-28.8V144c0-7.7 6.3-14 14-14s14 6.3 14 14v99.2c10.7 5.2 18 16.1 18 28.8s-7.3 23.6-18 28.8z"}}]})(props);
};
function IoIosSubway (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M352 32H160c-35.2 0-64 28.8-64 64v232c0 35.2 28.8 64 64 64h192c35.2 0 64-28.8 64-64V96c0-35.2-28.8-64-64-64zM200 56h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H200c-4.4 0-8-3.6-8-8s3.6-8 8-8zm-32 304c-15.5 0-28-12.5-28-28s12.5-28 28-28 28 12.5 28 28-12.5 28-28 28zm176 0c-15.5 0-28-12.5-28-28s12.5-28 28-28 28 12.5 28 28-12.5 28-28 28zm40-152c0 8.8-7.2 16-16 16H144.2c-8.8 0-16.2-7.2-16.2-16v-95.8c0-8.8 7.4-16.2 16.2-16.2H368c8.8 0 16 7.4 16 16.2V208zM393.7 455.9l-50-48c-5.6-5.4-14.4-5.2-19.8.4-5.4 5.6-5.2 14.4.4 19.8l6.1 5.9H181.5l6.1-5.9c5.6-5.4 5.8-14.2.4-19.8-5.4-5.6-14.2-5.8-19.8-.4l-50 48c-5.6 5.4-5.8 14.2-.4 19.8 2.7 2.9 6.4 4.3 10.1 4.3 3.5 0 7-1.3 9.7-3.9l14.7-14.1h207.2l14.7 14.1c2.7 2.6 6.2 3.9 9.7 3.9 3.7 0 7.4-1.4 10.1-4.3 5.5-5.6 5.3-14.4-.3-19.8z"}}]})(props);
};
function IoIosSunny (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 387c-8.5 0-15.4 6.9-15.4 15.4v46.2c0 8.5 6.9 15.4 15.4 15.4s15.4-6.9 15.4-15.4v-46.2c0-8.5-6.9-15.4-15.4-15.4zM256 48c-8.5 0-15.4 6.9-15.4 15.4v46.2c0 8.5 6.9 15.4 15.4 15.4s15.4-6.9 15.4-15.4V63.4c0-8.5-6.9-15.4-15.4-15.4zM125 256c0-8.5-6.9-15.4-15.4-15.4H63.4c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h46.2c8.5 0 15.4-6.9 15.4-15.4zM448.6 240.6h-46.2c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h46.2c8.5 0 15.4-6.9 15.4-15.4s-6.9-15.4-15.4-15.4zM152.5 344.1c-4.1 0-8 1.6-10.9 4.5l-32.7 32.7c-2.9 2.9-4.5 6.8-4.5 10.9s1.6 8 4.5 10.9c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5l32.7-32.7c6-6 6-15.8 0-21.8-2.9-2.9-6.8-4.5-10.9-4.5zM359.5 167.9c4.1 0 8-1.6 10.9-4.5l32.7-32.7c2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5l-32.7 32.7c-2.9 2.9-4.5 6.8-4.5 10.9s1.6 8 4.5 10.9c2.9 2.9 6.8 4.5 10.9 4.5zM130.7 108.9c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5-2.9 2.9-4.5 6.8-4.5 10.9 0 4.1 1.6 8 4.5 10.9l32.7 32.7c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5 2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9l-32.7-32.7zM370.4 348.6c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5-6 6-6 15.8 0 21.8l32.7 32.7c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5 2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9l-32.7-32.7zM256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96z"}}]})(props);
};
function IoIosSwap (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M388.9 266.3c-5.1-5-5.2-13.3-.1-18.4L436 200H211c-7.2 0-13-5.8-13-13s5.8-13 13-13h224.9l-47.2-47.9c-5-5.1-5-13.3.1-18.4 5.1-5 13.3-5 18.4.1l69 70c1.1 1.2 2.1 2.5 2.7 4.1.7 1.6 1 3.3 1 5 0 3.4-1.3 6.6-3.7 9.1l-69 70c-5 5.2-13.2 5.3-18.3.3zM123.1 404.3c5.1-5 5.2-13.3.1-18.4L76.1 338H301c7.2 0 13-5.8 13-13s-5.8-13-13-13H76.1l47.2-47.9c5-5.1 5-13.3-.1-18.4-5.1-5-13.3-5-18.4.1l-69 70c-1.1 1.2-2.1 2.5-2.7 4.1-.7 1.6-1 3.3-1 5 0 3.4 1.3 6.6 3.7 9.1l69 70c5 5.2 13.2 5.3 18.3.3z"}}]})(props);
};
function IoIosSwitch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"circle","attr":{"cx":"144","cy":"368","r":"42"}},{"tag":"path","attr":{"d":"M367.5 272h-223C91.2 272 48 315.2 48 368.5S91.2 464 144.5 464h223c53.3 0 96.5-42.2 96.5-95.5S420.8 272 367.5 272zM144 432c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"}},{"tag":"circle","attr":{"cx":"368","cy":"144","r":"42"}},{"tag":"path","attr":{"d":"M144.5 240h223c53.3 0 96.5-42.2 96.5-95.5S420.8 48 367.5 48h-223C91.2 48 48 91.2 48 144.5S91.2 240 144.5 240zM368 80c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64z"}}]})(props);
};
function IoIosSync (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M492 257.1c-2.6-2.6-6-4-9.6-4-3.6 0-7 1.4-9.6 4l-13 13c4.3-61.8-19.5-122.5-65.3-165C356.9 70.2 307.7 51 256.1 51c-26.7 0-52.8 5.1-77.4 15.1-25.5 10.4-48.3 25.6-67.7 45.3-13.2 13.4-24.6 28.5-33.6 44.8-1.9 3.4-2.3 7.4-1.2 11.1 1.1 3.7 3.8 6.8 7.2 8.5 2 1 4.2 1.5 6.4 1.5 5.2 0 9.9-2.8 12.4-7.3 7.9-14.3 17.8-27.5 29.4-39.1 16.8-16.8 36.3-29.8 58.1-38.7 21.1-8.6 43.4-12.9 66.2-12.9 22.9 0 45.2 4.3 66.3 12.9 21.8 8.9 41.4 21.9 58.2 38.8 20.3 20.4 35.4 45.6 43.8 73 7 22.9 9.2 47.3 6.6 71.2l-18.9-18.5c-2.5-2.4-5.8-3.8-9.3-3.8-3.5 0-6.9 1.4-9.4 3.9-5.2 5.2-5.2 13.6 0 18.8l42.8 42.9c1.9 1.9 4.4 2.9 7 2.9 2.6 0 5.1-1 7-2.9l42.1-42.2c5.2-5.3 5.2-13.9-.1-19.2zM428.6 335.9c-2-1-4.2-1.5-6.4-1.5-5.2 0-9.9 2.8-12.4 7.3-7.9 14.3-17.8 27.5-29.4 39.1-16.8 16.8-36.3 29.9-58.2 38.7-21.1 8.6-43.4 12.9-66.3 12.9s-45.2-4.3-66.2-12.9c-21.8-8.9-41.4-21.9-58.2-38.7-37.6-37.8-56-90.9-50.3-143.9l18.4 18.5c2.4 2.4 5.6 3.7 9 3.7 3.4 0 6.6-1.3 9-3.7l1.3-1.3c4.9-4.9 4.9-13 0-17.9l-42.9-43c-1.9-1.9-4.4-2.9-7-2.9-2.6 0-5.1 1-7 2.9l-42 42.3c-5.3 5.3-5.3 13.9 0 19.2 2.6 2.6 6 4 9.6 4 3.6 0 7-1.4 9.6-4l13-13.1c-1.8 25.8 1.3 52 9 76.5 9.9 31.4 26.8 59.3 50.3 82.8 19.5 19.6 42.2 34.7 67.6 45.1 24.5 10 50.4 15 76.9 15 26.5 0 52.4-5.1 76.9-15 25.4-10.3 48.1-25.5 67.6-45.1 13.5-13.5 25-28.8 34.2-45.4 1.9-3.4 2.3-7.4 1.2-11.1-1.2-3.7-3.8-6.8-7.3-8.5z"}}]})(props);
};
function IoIosTabletLandscape (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M39 103c-4.5 4.5-7 10.6-7 16.9V392c0 6.4 2.5 12.4 7 16.9 4.5 4.5 10.6 7 16.9 7H456c6.4 0 12.4-2.5 16.9-7 4.5-4.5 7-10.6 7-16.9V119.9c0-6.4-2.5-12.4-7-16.9-4.5-4.5-10.6-7-16.9-7H55.9c-6.3 0-12.4 2.5-16.9 7zm9.7 153.4c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7c-3.8 0-7-3.2-7-7zM470 256c0 7.7-6.5 14-14.1 14-7.5 0-14-6.2-14-14 0-7.7 6.4-14.1 14-14.1 7.6.1 14.1 6.4 14.1 14.1zm-38-144v288H80V112h352z"}}]})(props);
};
function IoIosTabletPortrait (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M409 39c-4.5-4.5-10.6-7-16.9-7H119.9c-6.4 0-12.4 2.5-16.9 7-4.5 4.5-7 10.6-7 16.9V456c0 6.4 2.5 12.4 7 16.9 4.5 4.5 10.6 7 16.9 7H392c6.4 0 12.4-2.5 16.9-7 4.5-4.5 7-10.6 7-16.9V55.9c.1-6.3-2.4-12.4-6.9-16.9zm-153.4 9.7c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7c0-3.8 3.2-7 7-7zM256 470c-7.7 0-14-6.5-14-14.1 0-7.5 6.2-14 14-14 7.7 0 14.1 6.4 14.1 14-.1 7.6-6.4 14.1-14.1 14.1zm144-38H112V80h288v352z"}}]})(props);
};
function IoIosTennisball (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M250.4 464c1-7.9 1.6-15.9 1.6-23.9 0-48.1-18.7-94.3-52.7-128.3S119 260 70.9 260c-7.7 0-15.4.5-22.9 1.4 2.8 110.3 92.3 199.3 202.4 202.6z"}},{"tag":"path","attr":{"d":"M230 74c0-8.3.5-16.4 1.4-24.5-95.3 11.7-171.7 89-182.2 184.7 7.2-.7 14.4-1.1 21.8-1.1 114.9 0 207.1 92.2 207.1 207 0 7.7-.4 15.3-1.3 22.8 96.6-10.1 174.6-86.2 185.8-182.4-8.4 1-16.9.6-25.5.6C322.1 281 230 188.9 230 74z"}},{"tag":"path","attr":{"d":"M308.7 202.3c34 34 80.2 52.7 128.3 52.7 9.1 0 18.1-.7 27-2-2.2-112-93.9-203.5-206.1-205-1.2 8.5-1.9 17.2-1.9 26 0 48.1 18.7 94.3 52.7 128.3zM232 49.3z"}}]})(props);
};
function IoIosText (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 64C141.1 64 48 139.2 48 232c0 64.9 45.6 121.2 112.3 149.2-5.2 25.8-21 47-33.5 60.5-2.3 2.5.2 6.5 3.6 6.3 11.5-.8 32.9-4.4 51-12.7 21.5-9.9 40.3-30.1 46.3-36.9 9.3 1 18.8 1.6 28.5 1.6 114.9 0 208-75.2 208-168C464 139.2 370.9 64 256 64z"}}]})(props);
};
function IoIosThermometer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M309.8 304.6c-4.3-3-6.9-7.9-6.9-13.1v-213c0-25.7-21-46.5-47-46.5s-47 20.8-47 46.5v213c0 5.2-2.6 10.2-6.9 13.1-25.2 17.3-42 46.4-42 79.3 0 53 43 96 96 96s96-43 96-96c0-32.9-17-62.1-42.2-79.3zM256.1 445c-32 0-58.1-26.3-58.1-58.8 0-25.4 15.4-47.1 37.9-55.3 3.2-1.2 5.4-4.1 5.4-7.5V180.2c0-8 6.5-14.5 14.5-14.5s14.5 6.5 14.5 14.5v143.2c0 3.4 2.1 6.3 5.3 7.5 21.9 8.2 38.4 29.9 38.4 55.2 0 32.5-25.8 58.9-57.9 58.9z"}}]})(props);
};
function IoIosThumbsDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M80.7 123.2c-7.5 6.3-16.7 16.1-16.7 31.4 0 13.7 5.7 22.8 10.9 29.1.6 1.2 1.1 2.3 1.6 3.4l.2 1.1c.7 3.5 0 7.1-2 10-3.4 5-5.8 12.3-5.8 25.7 0 11.6 4.8 18.4 9.7 23.2 4.4 4.3 6.1 12.5 4.1 18.3-4.8 13.9-.2 28.4 8.2 37.8 10.5 11.8 20.3 13.2 46.4 11.7 18-1.1 55.5-6.9 80.2-10.8 10.1-1.6 18.9-3 21.6-3.2 12.7-1.3 15.2 0 16.4 4.9.5 2.1-1.9 6.9-4.9 13-4 8.1-9.5 19.2-14.5 35.8-10.1 33.2-9 69.2 2.7 90.2 5.5 9.9 14.8 19.1 26.3 19.1s23.3-2.4 27.9-7.9c3.4-4 2.3-11.6 6.2-26.8 3.1-12.4 7-30.9 12-42 7.5-16.6 39.7-45.1 57-60.4 4.1-3.6 7.6-6.7 10.1-9.1 8.7-8.1 17.6-21.1 25.5-32.7 5.4-7.8 10.4-15.2 13.7-18.5 7.1-7.1 16.6-10.9 22.3-10.9 4.4 0 8-3.6 8-8V88.1c0-4.6-3.7-8.3-8.3-8.3C404 79.8 389 74 373.1 68c-12.2-4.7-24.9-9.5-46.4-12.1-32.4-4-74.2-8.1-112.6-8.1-20.4 0-39.9 2-56.6 3.9-31 3.6-64.2 10.8-75.2 37-4.1 9.7-2.2 17.6.5 23.7.4.8.7 1.7.8 2.6.6 3.3-.6 6.3-2.9 8.2z"}}]})(props);
};
function IoIosThumbsUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M431.3 388.8c7.5-6.3 16.7-16.1 16.7-31.4 0-13.7-5.7-22.8-10.9-29.1-.6-1.2-1.1-2.3-1.6-3.4l-.2-1.1c-.7-3.5 0-7.1 2-10 3.4-5 5.8-12.3 5.8-25.7 0-11.6-4.8-18.4-9.7-23.2-4.4-4.3-6.1-12.5-4.1-18.3 4.8-13.9.2-28.4-8.2-37.8-10.5-11.8-20.3-13.2-46.4-11.7-18 1.1-55.5 6.9-80.2 10.8-10.1 1.6-18.9 3-21.6 3.2-12.7 1.3-15.2 0-16.4-4.9-.5-2.1 1.9-6.9 4.9-13 4-8.1 9.5-19.2 14.5-35.8 10.1-33.2 9-69.2-2.7-90.2-5.5-9.9-14.8-19.1-26.3-19.1S223.6 50.5 219 56c-3.4 4-2.3 11.6-6.2 26.8-3.1 12.4-7 30.9-12 42-7.5 16.6-39.7 45.1-57 60.4-4.1 3.6-7.6 6.7-10.1 9.1-8.7 8.1-17.6 21.1-25.5 32.7-5.4 7.8-10.4 15.2-13.7 18.5-7.1 7.1-16.6 10.9-22.3 10.9-4.4 0-8 3.6-8 8v159.5c0 4.6 3.7 8.3 8.3 8.3 35.5 0 50.5 5.8 66.4 11.8 12.2 4.7 24.9 9.5 46.4 12.1 32.4 4 74.2 8.1 112.6 8.1 20.4 0 39.9-2 56.6-3.9 31-3.6 64.2-10.8 75.2-37 4.1-9.7 2.2-17.6-.5-23.7-.4-.8-.7-1.7-.8-2.6-.6-3.3.6-6.3 2.9-8.2z"}}]})(props);
};
function IoIosThunderstorm (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M374.4 141.9l-13.3-.1C349.4 88.2 306 48 236 48S108.2 98.4 108.2 169.5l.3 4.8C66.3 179.9 32 219.6 32 264c0 47 37.9 88 84.7 88H236l13.8-50.6H183c-2.6 0-4.5-2.4-3.9-4.9l23.2-113c.4-1.8 2-3.1 3.9-3.1h86.1c2.7 0 4.6 2.6 3.8 5.2l-22.5 74.9h60.1c3.1 0 5.1 3.5 3.4 6.1L283.4 352H367c72 0 113-52 113-110 0-58.6-47.3-100.1-105.6-100.1zM206.8 458.9c-1.2 4.4 4.8 7 7.2 3.2L283.4 352H236l-29.2 106.9z"}}]})(props);
};
function IoIosTime (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm14 226c0 7.7-6.3 14-14 14h-96c-7.7 0-14-6.3-14-14s6.3-14 14-14h82V128c0-7.7 6.3-14 14-14s14 6.3 14 14v146z"}}]})(props);
};
function IoIosTimer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 456c-110.3 0-200-89.7-200-200 0-54.8 21.7-105.9 61.2-144 6.4-6.2 16.6-6 22.7.4 6.2 6.4 6 16.6-.4 22.7-33.1 32-51.3 74.9-51.3 120.9 0 92.5 75.3 167.8 167.8 167.8S423.8 348.5 423.8 256c0-87.1-66.7-159-151.8-167.1v62.6c0 8.9-7.2 16.1-16.1 16.1s-16.1-7.2-16.1-16.1V72.1c0-8.9 7.2-16.1 16.1-16.1 110.3 0 200 89.7 200 200S366.3 456 256 456z"}},{"tag":"path","attr":{"d":"M175.9 161.9l99.5 71.5c13.5 9.7 16.7 28.5 7 42s-28.5 16.7-42 7c-2.8-2-5.2-4.4-7-7l-71.5-99.5c-3.2-4.5-2.2-10.8 2.3-14 3.6-2.6 8.3-2.4 11.7 0z"}}]})(props);
};
function IoIosToday (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M388 32H124c-33.1 0-60 26.9-60 60v328c0 33.1 26.9 60 60 60h264c33.1 0 60-26.9 60-60V92c0-33.1-26.9-60-60-60zm32 388c0 17.6-14.4 32-32 32H124c-17.6 0-32-14.4-32-32V92c0-17.6 14.4-32 32-32h264c17.6 0 32 14.4 32 32v328z"}},{"tag":"path","attr":{"d":"M360 176H152c-13.2 0-24 10.8-24 24v192c0 13.2 10.8 24 24 24h208c13.2 0 24-10.8 24-24V200c0-13.2-10.8-24-24-24zM142 124h100c7.7 0 14-6.3 14-14s-6.3-14-14-14H142c-7.7 0-14 6.3-14 14s6.3 14 14 14z"}}]})(props);
};
function IoIosTrain (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M393.7 455.9l-50-48c-5.6-5.4-14.4-5.2-19.8.4-5.4 5.6-5.2 14.4.4 19.8l6.1 5.9H181.5l6.1-5.9c5.6-5.4 5.8-14.2.4-19.8-5.4-5.6-14.2-5.8-19.8-.4l-50 48c-5.6 5.4-5.8 14.2-.4 19.8 2.7 2.9 6.4 4.3 10.1 4.3 3.5 0 7-1.3 9.7-3.9l14.7-14.1h207.2l14.7 14.1c2.7 2.6 6.2 3.9 9.7 3.9 3.7 0 7.4-1.4 10.1-4.3 5.5-5.6 5.3-14.4-.3-19.8z"}},{"tag":"path","attr":{"d":"M337 48h-17c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16h-15c-35.3 0-65 27.7-65 63v236c0 35.3 144 65 144 65s144-29.7 144-65V111c0-35.3-27.7-63-63-63zm-81 304c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm96-160c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v64z"}},{"tag":"circle","attr":{"cx":"256","cy":"304","r":"30.5"}}]})(props);
};
function IoIosTransgender (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M450.4 168.5c7.5 0 13.6-6.1 13.6-13.6V61.6c0-7.5-6.1-13.6-13.6-13.6h-93.3c-7.5 0-13.6 6.1-13.6 13.6s6.1 13.6 13.6 13.6H417l-75 75.4c-25.7-16.3-55.4-24.8-86-24.8-30.7 0-60.3 8.6-86 24.8l-19-19.1 28.2-28.2c5.3-5.3 5.3-13.9 0-19.2-2.6-2.6-6-4-9.6-4-3.6 0-7.1 1.4-9.6 4l-28.1 28.1-36.8-37H155c7.5 0 13.6-6.1 13.6-13.6S162.5 48 155 48H61.6C54.1 48 48 54.1 48 61.6v93.3c0 7.5 6.1 13.6 13.6 13.6s13.6-6.1 13.6-13.6V95.1l36.9 36.7-30 30c-5.3 5.3-5.3 13.9 0 19.2 2.6 2.6 6 4 9.6 4 3.6 0 7.1-1.4 9.6-4l30.1-30.1 16.5 16.4c-33.9 30.6-53.3 73.9-53.3 119.8 0 43.1 16.8 83.6 47.3 114.1 30.5 30.5 71 47.3 114.1 47.3 45.9 0 89.2-19.4 119.9-53.3l16.4 16.4-29.3 29.2c-5.3 5.3-5.3 13.9 0 19.2 2.6 2.6 6 4 9.6 4 3.6 0 7.1-1.4 9.6-4l29.3-29.3 29.3 29.3c2.6 2.6 6 4 9.6 4 3.6 0 7.1-1.4 9.6-4 5.3-5.3 5.3-13.9 0-19.2l-29.3-29.3 29.3-29.3c5.3-5.3 5.3-13.9 0-19.2-2.6-2.6-6-4-9.6-4-3.6 0-7.1 1.4-9.6 4l-29.3 29.3-19-19c16.3-25.8 24.9-55.4 24.9-86.1 0-45.9-19.3-89.2-53.3-119.8l72.7-72.2v59.9c0 7.3 6.1 13.4 13.6 13.4zm-60.3 118.6c0 35.8-14 69.5-39.3 94.8-25.3 25.3-59 39.3-94.8 39.3s-69.5-14-94.8-39.3c-25.3-25.3-39.3-59-39.3-94.8s14-69.5 39.3-94.8c25.3-25.3 59-39.3 94.8-39.3s69.5 14 94.8 39.3c25.4 25.3 39.3 59 39.3 94.8z"}}]})(props);
};
function IoIosTrash (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M133.1 128l23.6 290.7c0 16.2 13.1 29.3 29.3 29.3h141c16.2 0 29.3-13.1 29.3-29.3L379.6 128H133.1zm61.6 265L188 160h18.5l6.9 233h-18.7zm70.3 0h-18V160h18v233zm52.3 0h-18.6l6.8-233H324l-6.7 233zM364 92h-36l-26.3-23c-3.7-3.2-8.4-5-13.2-5h-64.8c-4.9 0-9.7 1.8-13.4 5L184 92h-36c-17.6 0-30 8.4-30 26h276c0-17.6-12.4-26-30-26z"}}]})(props);
};
function IoIosTrendingDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M480 369.2V251.1c0-8.1-6.8-14.8-15.1-14.8s-15.1 6.6-15.1 14.8v81.7L300.5 181c-2.8-2.8-6.6-4.3-10.7-4.3-4 0-7.8 1.5-10.7 4.3l-85.9 84.1L57.5 132.3c-2.9-2.8-6.6-4.3-10.7-4.3-4 0-7.8 1.5-10.7 4.3-2.8 2.7-4.2 6.2-4.2 10.2 0 5.4 2.3 8.8 4.2 10.7l146.3 143.2c2.9 2.8 6.6 4.3 10.7 4.3 4 0 7.8-1.5 10.7-4.3l85.9-84.1 138 142.2H344c-8.3 0-15.1 6.6-15.1 14.8 0 8.1 6.8 14.8 15.1 14.8h120.8c8.4-.1 15.2-6.7 15.2-14.9z"}}]})(props);
};
function IoIosTrendingUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M464.9 128H344.1c-8.3 0-15.1 6.6-15.1 14.8s6.8 14.8 15.1 14.8h83.7l-138 142.2-85.9-84.1c-2.9-2.8-6.6-4.3-10.7-4.3-4 0-7.8 1.5-10.7 4.3L36.2 358.8c-1.9 1.9-4.2 5.2-4.2 10.7 0 4.1 1.4 7.5 4.2 10.2 2.9 2.8 6.6 4.3 10.7 4.3 4 0 7.8-1.5 10.7-4.3L193.2 247l85.9 84.1c2.9 2.8 6.6 4.3 10.7 4.3 4 0 7.8-1.5 10.7-4.3l149.4-151.9v81.7c0 8.1 6.8 14.8 15.1 14.8s15.1-6.6 15.1-14.8V142.8c-.1-8.2-6.9-14.8-15.2-14.8z"}}]})(props);
};
function IoIosTrophy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M450 100h-66V80c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v20H62c-7.7 0-14 6.3-14 14 0 41.3 7.8 66 22.6 90.4 13.6 22.4 32.9 36.2 56.3 40.3 2.8.5 5.1 2.3 6.2 4.9 6.2 15.4 20.2 34.8 51.1 52.2 20.2 11.4 36.9 18.3 51.7 21.6 3.6.8 6.2 4.1 6.2 7.8V412c0 4.4-3.6 8-8 8h-65.6c-7.5 0-14 5.8-14.4 13.3-.4 8 6 14.7 14 14.7h175.6c7.5 0 14-5.8 14.4-13.3.4-8-6-14.7-14-14.7h-66c-4.4 0-8-3.6-8-8v-80.7c0-3.7 2.6-7 6.2-7.8 14.7-3.3 31.5-10.3 51.7-21.6 30.9-17.4 44.9-36.8 51.1-52.2 1.1-2.6 3.4-4.5 6.2-4.9 23.4-4.1 42.7-17.9 56.3-40.3C456.2 180 464 155.3 464 114c0-7.7-6.3-14-14-14zM128 210.6c0 2.8-2.8 4.8-5.4 3.8-12.8-4.9-23.2-14.7-30.6-28.9-5.8-11-12.6-21.4-15.1-48.8-.4-4.7 3.3-8.7 8-8.7H120c4.4 0 8 3.6 8 8v74.6zm292-25.1c-7.4 14.2-17.8 24-30.6 28.9-2.6 1-5.4-1-5.4-3.8V136c0-4.4 3.6-8 8-8h35.1c4.7 0 8.4 4 8 8.7-2.5 27.4-9.4 37.8-15.1 48.8z"}}]})(props);
};
function IoIosTv (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M451.7 78H60.3C34.8 78 14 98.8 14 124.3v215.5c0 25.5 20.8 46.3 46.3 46.3h391.5c25.5 0 46.3-20.8 46.3-46.3V124.3C498 98.8 477.2 78 451.7 78zM470 339.7c0 10.1-8.2 18.3-18.3 18.3H60.3c-10.1 0-18.3-8.2-18.3-18.3V124.3c0-10.1 8.2-18.3 18.3-18.3h391.5c10.1 0 18.3 8.2 18.3 18.3v215.4z"}},{"tag":"path","attr":{"d":"M436 128H76c-6.6 0-12 5.4-12 12v184c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12V140c0-6.6-5.4-12-12-12zM370 406H142c-7.7 0-14 6.3-14 14s6.3 14 14 14h228c7.7 0 14-6.3 14-14s-6.3-14-14-14z"}}]})(props);
};
function IoIosUmbrella (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M407.1 137.9c-34.9-41.6-81.3-67.3-131.2-72.6-2-9.9-10.2-17.3-19.9-17.3s-17.9 7.3-19.9 17.2c-50.6 5.2-97.4 30.3-132.1 71.2-35.8 42.2-55.6 85.5-55.8 143.7-.1.5-.2 1.2-.2 2.1.1 3.2 2.7 5.8 5.8 5.8h3.1c2.6 0 4.9-1.8 5.6-4.4 2.7-10.1 8.4-19.1 16-25.5 7.7-6.5 16.9-9.9 26.6-9.9 9.6 0 18.8 3.4 26.5 10 7.6 6.4 13.2 15.4 16 25.5.7 2.6 3 4.4 5.6 4.4h4.8c2.6 0 4.9-1.8 5.6-4.4 5.7-20.9 23.3-35.4 42.8-35.4 14.8 0 28.8 8.4 36.9 21.9V418c0 9.9-8 18-17.7 18s-17.6-8.1-17.6-18c0-7.7-6.1-14-13.7-14-7.5 0-13.6 6.3-13.6 14 0 25.4 20.2 46 44.9 46 24.8 0 44.9-20.6 44.9-46V270.8c8.2-14.2 21.9-22.6 36.9-22.6 9.6 0 18.7 3.4 26.4 9.9 7.5 6.4 13.1 15.4 15.9 25.5.7 2.6 3 4.4 5.6 4.4h4.8c2.6 0 4.9-1.8 5.6-4.4 2.7-10.1 8.4-19.2 16-25.6 7.7-6.5 16.9-10 26.6-10 9.7 0 19 3.4 26.7 10 7.6 6.4 13.2 15.5 15.9 25.6.7 2.6 3 4.4 5.6 4.4h1.5c1.6 0 3.1-.6 4.2-1.8s1.7-2.7 1.7-4.3c-.8-57.9-21-101.3-56.8-144z"}}]})(props);
};
function IoIosUndo (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M479.9 394.9c0-19.6 4.2-97.1-56.8-158.7-40.4-40.7-91.9-61.7-163.4-65.5-2.1-.1-3.8-1.9-3.8-4V84c0-3.2-3.5-5.1-6.2-3.4L33.8 222.8c-2.4 1.6-2.4 5.1 0 6.7l215.9 142.2c2.7 1.8 6.2-.1 6.2-3.4v-81.6c0-2.3 1.9-4.1 4.2-4 44.1 1.7 69.5 10.9 97.1 23.2 36.1 16.2 72.9 50.9 94.5 83.5 13.1 19.9 19.2 33.9 21.4 39.7.7 1.7 2.3 2.8 4.1 2.8h2.9c-.1-11.7-.2-26.7-.2-37z"}}]})(props);
};
function IoIosUnlock (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M376 192H188v-48c0-18.1 7.1-35.1 20-48s29.9-20 48-20 35.1 7.1 48 20 20 29.9 20 48c0 7.7 6.3 14 14 14s14-6.3 14-14c0-53.2-43.9-96.7-97.3-96-52.7.7-94.7 44.5-94.7 97.3V192h-24c-22 0-40 18-40 40v192c0 22 18 40 40 40h240c22 0 40-18 40-40V232c0-22-18-40-40-40zM270 316.8v68.8c0 7.5-5.8 14-13.3 14.4-8 .4-14.7-6-14.7-14v-69.2c-11.5-5.6-19.1-17.8-17.9-31.7 1.4-15.5 14.1-27.9 29.6-29 18.7-1.3 34.3 13.5 34.3 31.9 0 12.7-7.3 23.6-18 28.8z"}}]})(props);
};
function IoIosVideocam (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M450.6 153.6c-3.3 0-6.5.9-9.3 2.7l-86.5 54.6c-2.5 1.6-4 4.3-4 7.2v76c0 2.9 1.5 5.6 4 7.2l86.5 54.6c2.8 1.7 6 2.7 9.3 2.7h20.8c4.8 0 8.6-3.8 8.6-8.5v-188c0-4.7-3.9-8.5-8.6-8.5h-20.8zM273.5 384h-190C55.2 384 32 360.8 32 332.6V179.4c0-28.3 23.2-51.4 51.4-51.4h190c28.3 0 51.4 23.2 51.4 51.4v153.1c.1 28.3-23 51.5-51.3 51.5z"}}]})(props);
};
function IoIosVolumeHigh (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M215.4 145.5c-2.2-1.1-4.6-1.6-6.9-1.6-3.6 0-7.1 1.2-10 3.5L133.3 200H80.5c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h52.8l65.2 52.5c2.9 2.3 6.5 3.5 10 3.5 2.3 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V160c0-6.2-3.5-11.8-9.1-14.5zM447.5 256c0-59.3-23.2-114.8-65.4-156.5-4.7-4.7-12.3-4.6-17 .1-4.7 4.7-4.6 12.3.1 17 37.6 37.1 58.2 86.6 58.2 139.4 0 52.8-20.7 102.3-58.2 139.4-4.7 4.7-4.8 12.3-.1 17 2.3 2.4 5.4 3.6 8.5 3.6 3 0 6.1-1.2 8.4-3.5 42.3-41.6 65.5-97.2 65.5-156.5z"}},{"tag":"path","attr":{"d":"M384.9 256c0-43.5-16.6-84.3-46.8-114.9-4.7-4.7-12.3-4.8-17-.1-4.7 4.7-4.8 12.3-.1 17 25.7 26.1 39.9 60.9 39.9 98.1 0 37.2-14.2 72-39.9 98.1-4.7 4.7-4.6 12.3.1 17 2.3 2.3 5.4 3.5 8.4 3.5 3.1 0 6.2-1.2 8.5-3.6 30.2-30.8 46.9-71.6 46.9-115.1z"}},{"tag":"path","attr":{"d":"M287.5 182.5c-4.7-4.7-12.3-4.8-17-.1-4.7 4.7-4.8 12.3-.1 17 14.8 15 23 35.1 23 56.6 0 21.4-8.2 41.5-23 56.6-4.7 4.7-4.6 12.3.1 17 2.3 2.3 5.4 3.5 8.4 3.5 3.1 0 6.2-1.2 8.5-3.6 19.3-19.6 29.9-45.6 29.9-73.4.1-27.9-10.5-54-29.8-73.6z"}}]})(props);
};
function IoIosVolumeLow (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M278.9 145.6c-2.2-1.1-4.6-1.6-6.9-1.6-3.6 0-7.1 1.2-10 3.5L196.8 200H144c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h52.8l65.2 52.5c2.9 2.3 6.5 3.5 10 3.5 2.3 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V160c0-6.2-3.5-11.8-9.1-14.4zM354.4 182.6c-4.6-4.7-12.1-4.8-16.8-.1-4.7 4.7-4.7 12.3-.1 17 14.7 15 22.8 35.1 22.8 56.6 0 21.4-8.1 41.5-22.8 56.6-4.6 4.7-4.6 12.3.1 17 2.3 2.3 5.3 3.5 8.3 3.5 3.1 0 6.1-1.2 8.5-3.6C373.5 310 384 284 384 256.2h-.2c0-28-10.3-54.1-29.4-73.6z"}}]})(props);
};
function IoIosVolumeMute (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M326.9 145.6c-2.2-1.1-4.6-1.6-6.9-1.6-3.6 0-7.1 1.2-10 3.5L244.8 200H192c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h52.8l65.2 52.5c2.9 2.3 6.5 3.5 10 3.5 2.3 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V160c0-6.2-3.5-11.8-9.1-14.4z"}}]})(props);
};
function IoIosVolumeOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M390.1 464c-4.9 0-9.7-2.5-12.3-7L149.7 69.3c-4-6.7-1.7-15.4 5.1-19.3 6.8-3.9 15.5-1.7 19.5 5.1l228.1 387.7c4 6.7 1.7 15.4-5.1 19.3-2.2 1.3-4.7 1.9-7.2 1.9zM133 200H80c-8.9 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h53l65.4 52.5c2.9 2.3 6.5 3.5 10.1 3.5 2.4 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V227.9L184 159.1 133 200zM448 256c0-59.3-23.3-114.9-65.5-156.5-4.7-4.7-12.3-4.6-17 .1-4.7 4.7-4.6 12.3.1 17C403.3 153.7 424 203.2 424 256c0 44.4-14.7 86.4-41.7 120.8l13 22C429.4 359.1 448 309 448 256z"}},{"tag":"path","attr":{"d":"M385.2 256c0-43.5-16.7-84.3-46.9-114.9-4.7-4.7-12.3-4.8-17-.1-4.7 4.7-4.8 12.3-.1 17 25.8 26.1 40 60.9 40 98.1 0 21.6-4.8 42.5-13.9 61.2l14.2 24.1c15.4-25.4 23.7-54.7 23.7-85.4zM317.6 256c0-27.8-10.7-53.9-30-73.4-4.7-4.7-12.3-4.8-17-.1-.6.6-1.1 1.2-1.6 1.9l48.1 81.8c.3-3.4.5-6.8.5-10.2z"}}]})(props);
};
function IoIosWalk (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M201.1 361.2l-67.8 48.9c-3.7 3.6-5.2 9.1-5.3 13.9-.1 4.8 1.2 8.8 4.7 12.5 3.6 3.9 8.8 6.2 13.6 6.2 4.5 0 12.5-4.9 16-8.4l69.7-51.6c3.6-3.5 5.7-8.4 5.7-13.5l9.1-52.5-45.7-46.7v91.2z"}},{"tag":"ellipse","attr":{"transform":"rotate(-80.781 274.673 69.329)","cx":"274.7","cy":"69.3","rx":"37.3","ry":"37.3"}},{"tag":"path","attr":{"d":"M350.7 459.2l-15.2-117.4c-.5-3.5-1.9-6.8-4.2-9.5l-57-68.8V143.9c0-11.3-6.3-15.9-18.3-15.9h-37c-2.8 0-5.2 1-7.7 2.3l-68 31.7c-10 5.3-15.3 15.4-15.3 28.7V256c0 10.3 8.2 18.7 18.3 18.7 10.1 0 18.3-8.4 18.3-18.7v-58.2c0-3 1.7-5.8 4.4-7.1l32.2-16.4v75.3c0 4.2 1.6 8.2 4.6 11.2l92.4 94.4c1.2 1.2 2 2.8 2.2 4.5l14.2 104.7c1.3 9.3 9.1 15.7 18.1 15.7h2c9.9-1.5 17.4-10.7 16-20.9z"}},{"tag":"path","attr":{"d":"M378.4 232.4l-95-96.2v52.6l69.2 70.1c7.2 7.3 18.7 7.2 25.9-.1 3.5-3.6 5.5-7.5 5.5-12.2 0-4.8-2-10.5-5.6-14.2z"}}]})(props);
};
function IoIosWallet (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M404 160H108c-33.1 0-60 26.9-60 60v168c0 33.1 26.9 60 60 60h296c33.1 0 60-26.9 60-60V220c0-33.1-26.9-60-60-60zM342.9 65L108 110.9c-18 4-44 22.1-44 44.1 0 0 15-19 49-19h287v-20.5c0-12.6-5-28.7-13.9-37.6-11.3-11.3-27.5-16.2-43.2-12.9z"}}]})(props);
};
function IoIosWarning (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M228.9 79.9L51.8 403.1C40.6 423.3 55.5 448 78.9 448h354.3c23.3 0 38.2-24.7 27.1-44.9L283.1 79.9c-11.7-21.2-42.5-21.2-54.2 0zM273.6 214L270 336h-28l-3.6-122h35.2zM256 402.4c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4 19.1 8.1 19.1 18.4-8.4 18.4-19.1 18.4z"}}]})(props);
};
function IoIosWatch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M440.3 161.3c-15-23.9-36.3-43.3-61.4-56.1-1.9-.9-3.9-1.4-6-1.4-5 0-9.5 2.8-11.8 7.2-1.6 3.1-1.9 6.7-.8 10 1.1 3.3 3.4 6.1 6.6 7.7 20.9 10.7 38.6 26.8 51.1 46.7 12.8 20.4 19.6 44 19.6 68v40.5c0 17.2-3.3 33.4-9.9 48-6.3 14-15.4 26.3-27 36.6-23.2 20.5-55.1 31.9-89.9 31.9-34.4 0-43.6-5.2-52.4-10.2-8.1-4.6-17.3-9.8-37.7-11-31.7-2-56.9-12.4-77.2-31.8-2.5-2.4-5.7-3.7-9.1-3.7-3.6 0-7 1.5-9.5 4.1-2.4 2.5-3.7 5.7-3.7 9.1 0 3.6 1.5 7 4.1 9.5 25 23.9 55.7 36.7 93.8 39.1 14.4.9 19.4 3.7 26.4 7.7 11.3 6.4 24.1 13.6 65.4 13.6 41.6 0 80-13.9 108.1-39.2 14.2-12.8 25.3-28 33-45.2 8-18 12.1-37.6 12.1-58.5v-40.5c-.1-29.1-8.3-57.5-23.8-82.1z"}},{"tag":"path","attr":{"d":"M284 383c8.7 1.4 17.2 2.1 25.4 2.1 16 0 31.2-2.7 45-8 13.9-5.4 26.5-13.4 37.5-23.9 5.3-5 5.4-13.4.4-18.6-2.5-2.6-5.9-4.1-9.5-4.1-3.4 0-6.7 1.3-9.1 3.7-17.1 16.3-38.8 24.6-64.5 24.6-6.8 0-13.8-.6-21-1.8-.7-.1-1.4-.2-2.1-.2-6.5 0-12 4.6-13 11-.1.7-.2 1.4-.2 2.1 0 6.6 4.7 12 11.1 13.1zm2.1-21.1h.1-.3.2zM222.9 421.7c-39.9 0-72.8-13.4-102.7-40.3-29.1-26.2-45.8-60.7-45.8-94.5v-43.6c0-24.1 6.8-47.6 19.6-68 12.5-19.9 30.2-36 51.1-46.7 3.1-1.6 5.5-4.3 6.6-7.7 1.1-3.3.8-6.9-.8-10.1-2.3-4.4-6.8-7.2-11.8-7.2-2.1 0-4.1.5-6 1.4-25.1 12.8-46.4 32.2-61.4 56.1-15.5 24.6-23.7 53-23.7 82v43.6c0 41.2 19.9 82.8 54.5 114 34.6 31.2 74 47.1 120.4 47.1 7.3 0 13.2-5.9 13.2-13.2-.1-7-6-12.9-13.2-12.9z"}},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M348.4 115.1c.8-11.9 10.3-21.6 22.2-22.6 4.3-.4 8.4.4 12 2 2.6 1.1 5.1-1.6 3.9-4.1-2.7-5.7-6.6-10.9-11.5-15.1C366.6 68 355.9 64 344.8 64H167.2c-17.9 0-33.9 10.3-41.5 25.8-1.2 2.5 1.2 5.2 3.9 4.2 3.3-1.3 7-1.8 10.8-1.5 11.9 1 21.4 10.8 22.2 22.7.8 13.6-9.5 25-22.8 25.8-.9.1-1.8.7-2.1 1.5-.4 1.1-.1 2.3.8 3 8.1 6.2 18.1 9.7 28.7 9.7h177.6c10.9 0 21.2-3.6 29.4-10.2 1.7-1.3.7-4-1.4-4h-.1c-14 0-25.2-11.7-24.3-25.9zm-21.6-10.3c3.5 15.8-10.7 30-26.5 26.5-8.4-1.9-15.2-8.6-17-17-3.5-15.8 10.7-30 26.5-26.5 8.4 1.9 15.2 8.6 17 17z"}}]}]})(props);
};
function IoIosWater (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M352 146.4c-34.4-48.6-67.5-78.5-90.8-96.6-3.1-2.4-7.3-2.4-10.4-.1-23 17.1-56.1 48.4-90.5 96.5-37.3 52-63 108.4-64.2 170.9 0 1.2-.1 2.5-.1 3.7 0 18.4 3.9 35.9 10.9 52.1 4.1 9.3 9.2 18.1 15.2 26.3 28.5 39 77.8 64.8 133.8 64.8 88.4 0 160.1-64.1 160.1-143.2 0-63.7-27-122.2-64-174.4zm-86 264.3h-.5c-9.9 0-12-14.1-2.6-17.1 45.1-14.2 69.6-38.5 86.4-80.8 3.5-8.9 16.7-6.5 16.8 3.1v1.4c-.1 51.6-44.9 93.4-100.1 93.4z"}}]})(props);
};
function IoIosWifi (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 96c-81.5 0-163 33.6-221.5 88.3-3.3 3-3.4 8.1-.3 11.4l26.7 27.9c3.1 3.3 8.3 3.4 11.6.3 23.3-21.6 49.9-38.8 79.3-51 33-13.8 68.1-20.7 104.3-20.7s71.3 7 104.3 20.7c29.4 12.3 56 29.4 79.3 51 3.3 3.1 8.5 3 11.6-.3l26.7-27.9c3.1-3.2 3-8.3-.3-11.4C419 129.6 337.5 96 256 96z"}},{"tag":"path","attr":{"d":"M113.2 277.5l28.6 28.3c3.1 3 8 3.2 11.2.3 28.3-25.1 64.6-38.9 102.9-38.9s74.6 13.7 102.9 38.9c3.2 2.9 8.1 2.7 11.2-.3l28.6-28.3c3.3-3.3 3.2-8.6-.3-11.7-37.5-33.9-87.6-54.6-142.5-54.6s-105 20.7-142.5 54.6c-3.3 3.1-3.4 8.4-.1 11.7zM256 324.2c-23.4 0-44.6 9.8-59.4 25.5-3 3.2-2.9 8.1.2 11.2l53.4 52.7c3.2 3.2 8.4 3.2 11.6 0l53.4-52.7c3.1-3.1 3.2-8 .2-11.2-14.8-15.6-36-25.5-59.4-25.5z"}}]})(props);
};
function IoIosWine (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M328.9 51.2c-2-5.5-7-9.2-12.9-9.2H196c-6 0-10.9 3.7-13 9.2-9.3 25-31 87.1-31 124.8v4.8c0 19.2 0 45.4 28.4 74.5 6.5 6.7 14.3 12.9 22.5 19.5 19.1 15.3 38.8 31.1 38.8 50.2v115c0 1.1-.9 2-2 2h-57.1c-7.9 0-14.3 6.3-14.3 14s6.4 14 14.3 14h146.8c7.9 0 14.3-6.3 14.3-14s-6.4-14-14.3-14h-57.1c-1.1 0-2-.9-2-2V325c0-19.1 19.7-34.9 38.8-50.2 8.2-6.6 15.9-12.8 22.5-19.5C360 226.2 360 200 360 180.8V176c0-37.5-21.7-99.8-31.1-124.8zm-1.4 102.1c-.2.3-.7.7-1.6.7H186.1c-.8 0-1.3-.5-1.6-.7-.2-.3-.6-.8-.4-1.7 5.1-26.1 14.8-59.6 21.6-80.2.3-.8 1.1-1.4 1.9-1.4h96.8c.9 0 1.7.6 1.9 1.4 6.7 20.7 16.4 54.1 21.6 80.2.2.8-.2 1.4-.4 1.7z"}}]})(props);
};
function IoIosWoman (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M286 496c-6.1 0-11.8-2.3-16-6.6-3.2-3.3-7.1-9.1-7.1-18.6V351.4H249v119.4c0 9.5-4 15.4-7.4 18.7-4.3 4.2-10.1 6.5-16.3 6.5-6.2 0-11.9-2.3-16.3-6.5-3.4-3.3-7.4-9.1-7.4-18.7V351.4h-43.9l44.5-170.6h-6.8L171 271.2c-4 13.1-13.7 17.8-21.4 17.8-6.6 0-12.9-3.2-17-8.7-4.8-6.4-6.1-14.9-3.6-23.9l29-104.1c4.2-15.2 20.7-38.2 48.7-39.3H305.1c28.4 1.2 44.1 26 48.5 38.9l.1.4 29 104.3c2.4 9 1 17.6-3.9 24-4.1 5.4-10.4 8.6-16.9 8.6-7.7 0-17.3-4.8-21.3-18.1v-.2l-24.3-90.1h-7.7l45.5 170.6H309v119.4c0 9.5-3.9 15.3-7.1 18.6-4.2 4.3-9.8 6.6-15.9 6.6zM255.9 106.4c-24.2 0-43.9-20.3-43.9-45.2S231.7 16 255.9 16s43.9 20.3 43.9 45.2-19.7 45.2-43.9 45.2z"}}]})(props);
};
function IoLogoAndroid (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M144 268.4V358c0 6.9 4.5 14 11.4 14H184v52c0 13.3 10.7 24 24 24s24-10.7 24-24v-52h49v52c0 7.5 3.4 14.2 8.8 18.6 3.9 3.4 9.1 5.4 14.7 5.4h.5c13.3 0 24-10.7 24-24v-52h27.6c7 0 11.4-7.1 11.4-13.9V192H144v76.4zM408 176c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3-10.7-24-24-24zM104 176c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3-10.7-24-24-24z"}},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M311.2 89.1l18.5-21.9c.4-.5-.2-1.6-1.3-2.5-1.1-.8-2.4-1-2.7-.4l-19.2 22.8c-13.6-5.4-30.2-8.8-50.6-8.8-20.5-.1-37.2 3.2-50.8 8.5l-19-22.4c-.4-.5-1.6-.4-2.7.4s-1.7 1.8-1.3 2.5l18.3 21.6c-48.2 20.9-55.4 72.2-56.4 87.2h223.6c-.9-15.1-8-65.7-56.4-87zm-104.4 49.8c-7.4 0-13.5-6-13.5-13.3 0-7.3 6-13.3 13.5-13.3 7.4 0 13.5 6 13.5 13.3 0 7.3-6 13.3-13.5 13.3zm98.4 0c-7.4 0-13.5-6-13.5-13.3 0-7.3 6-13.3 13.5-13.3 7.4 0 13.5 6 13.5 13.3 0 7.3-6.1 13.3-13.5 13.3z"}}]}]})(props);
};
function IoLogoAngular (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M213.573 256h84.846l-42.427-89.356z"}},{"tag":"path","attr":{"d":"M255.981 32L32 112l46.12 272L256 480l177.75-96L480 112 255.981 32zM344 352l-26.589-56H194.584L168 352h-40L256 72l128 280h-40z"}}]})(props);
};
function IoLogoApple (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M333.6 153.9c-33.6 0-47.8 16.5-71.2 16.5-24 0-42.3-16.4-71.4-16.4-28.5 0-58.9 17.9-78.2 48.4-27.1 43-22.5 124 21.4 193 15.7 24.7 36.7 52.4 64.2 52.7h.5c23.9 0 31-16.1 63.9-16.3h.5c32.4 0 38.9 16.2 62.7 16.2h.5c27.5-.3 49.6-31 65.3-55.6 11.3-17.7 15.5-26.6 24.2-46.6-63.5-24.8-73.7-117.4-10.9-152.9-19.2-24.7-46.1-39-71.5-39z"}},{"tag":"path","attr":{"d":"M326.2 64c-20 1.4-43.3 14.5-57 31.6-12.4 15.5-22.6 38.5-18.6 60.8h1.6c21.3 0 43.1-13.2 55.8-30.1 12.3-16.1 21.6-38.9 18.2-62.3z"}}]})(props);
};
function IoLogoBitbucket (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M452.9 64.2c-.7-.1-1.5-.2-2.2-.2H61.5c-7.4-.1-13.4 5.9-13.5 13.5 0 .8 0 1.6.2 2.4l56.6 352.5c.7 4.3 2.9 8.2 6.1 11.1 3.2 2.9 7.4 4.5 11.7 4.5H394c6.6.1 12.3-4.8 13.3-11.5L441 224H316l-16 96h-88l-22.3-126.9h256.2l18-113.1c1.1-7.5-3.8-14.6-11-15.8z"}}]})(props);
};
function IoLogoBitcoin (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M410.5 279.2c-5-11.5-12.7-21.6-28.1-30.1-8.2-4.5-16.1-7.8-25.4-10 5.4-2.5 10-5.4 16.3-11 7.5-6.6 13.1-15.7 15.6-23.3 2.6-7.5 4.1-18 3.5-28.2-1.1-16.8-4.4-33.1-13.2-44.8-8.8-11.7-21.2-20.7-37.6-27-12.6-4.8-25.5-7.8-45.5-8.9V32h-40v64h-32V32h-41v64H96v48h27.9c8.7 0 14.6.8 17.6 2.3 3.1 1.5 5.3 3.5 6.5 6 1.3 2.5 1.9 8.4 1.9 17.5V343c0 9-.6 14.8-1.9 17.4-1.3 2.6-2 4.9-5.1 6.3-3.1 1.4-3.2 1.3-11.8 1.3h-26.4L96 416h87v64h41v-64h32v64h40v-64.4c26-1.3 44.5-4.7 59.4-10.3 19.3-7.2 34.1-17.7 44.7-31.5 10.6-13.8 14.9-34.9 15.8-51.2.7-14.5-.9-33.2-5.4-43.4zM224 150h32v74h-32v-74zm0 212v-90h32v90h-32zm72-208.1c6 2.5 9.9 7.5 13.8 12.7 4.3 5.7 6.5 13.3 6.5 21.4 0 7.8-2.9 14.5-7.5 20.5-3.8 4.9-6.8 8.3-12.8 11.1v-65.7zm28.8 186.7c-7.8 6.9-12.3 10.1-22.1 13.8-2 .8-4.7 1.4-6.7 1.9v-82.8c5 .8 7.6 1.8 11.3 3.4 7.8 3.3 15.2 6.9 19.8 13.2 4.6 6.3 8 15.6 8 24.7 0 10.9-2.8 19.2-10.3 25.8z"}}]})(props);
};
function IoLogoBuffer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M70.7 164.5l169.2 81.7c4.4 2.1 10.3 3.2 16.1 3.2s11.7-1.1 16.1-3.2l169.2-81.7c8.9-4.3 8.9-11.3 0-15.6L272.1 67.2c-4.4-2.1-10.3-3.2-16.1-3.2s-11.7 1.1-16.1 3.2L70.7 148.9c-8.9 4.3-8.9 11.3 0 15.6z"}},{"tag":"path","attr":{"d":"M441.3 248.2s-30.9-14.9-35-16.9-5.2-1.9-9.5.1S272 291.6 272 291.6c-4.5 2.1-10.3 3.2-16.1 3.2s-11.7-1.1-16.1-3.2c0 0-117.3-56.6-122.8-59.3-6-2.9-7.7-2.9-13.1-.3l-33.4 16.1c-8.9 4.3-8.9 11.3 0 15.6l169.2 81.7c4.4 2.1 10.3 3.2 16.1 3.2s11.7-1.1 16.1-3.2l169.2-81.7c9.1-4.2 9.1-11.2.2-15.5z"}},{"tag":"path","attr":{"d":"M441.3 347.5s-30.9-14.9-35-16.9-5.2-1.9-9.5.1S272.1 391 272.1 391c-4.5 2.1-10.3 3.2-16.1 3.2s-11.7-1.1-16.1-3.2c0 0-117.3-56.6-122.8-59.3-6-2.9-7.7-2.9-13.1-.3l-33.4 16.1c-8.9 4.3-8.9 11.3 0 15.6l169.2 81.7c4.4 2.2 10.3 3.2 16.1 3.2s11.7-1.1 16.1-3.2l169.2-81.7c9-4.3 9-11.3.1-15.6z"}}]})(props);
};
function IoLogoChrome (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M188.8 255.925c0 36.946 30.243 67.178 67.2 67.178s67.199-30.231 67.199-67.178c0-36.945-30.242-67.179-67.199-67.179s-67.2 30.234-67.2 67.179z"}},{"tag":"path","attr":{"d":"M476.752 217.795c-.009.005-.016.038-.024.042-1.701-9.877-4.04-19.838-6.989-28.838h-.107c2.983 9 5.352 19 7.072 29h-.002c-1.719-10-4.088-20-7.07-29h-155.39c19.044 17 31.358 40.175 31.358 67.052 0 16.796-4.484 31.284-12.314 44.724L231.044 478.452s-.009.264-.014.264l-.01.284h.015l-.005-.262c8.203.92 16.531 1.262 24.97 1.262 6.842 0 13.609-.393 20.299-1.002a223.86 223.86 0 0 0 29.777-4.733C405.68 451.525 480 362.404 480 255.941c0-12.999-1.121-25.753-3.248-38.146z"}},{"tag":"path","attr":{"d":"M256 345.496c-33.601 0-61.601-17.91-77.285-44.785L76.006 123.047l-.137-.236a223.516 223.516 0 0 0-25.903 45.123C38.407 194.945 32 224.686 32 255.925c0 62.695 25.784 119.36 67.316 160.009 29.342 28.719 66.545 49.433 108.088 58.619l.029-.051 77.683-134.604c-8.959 3.358-19.031 5.598-29.116 5.598z"}},{"tag":"path","attr":{"d":"M91.292 104.575l77.35 133.25C176.483 197.513 212.315 166 256 166h205.172c-6.921-15-15.594-30.324-25.779-43.938.039.021.078.053.117.074C445.644 135.712 454.278 151 461.172 166h.172c-6.884-15-15.514-30.38-25.668-43.99-.115-.06-.229-.168-.342-.257C394.475 67.267 329.359 32 256 32c-26.372 0-51.673 4.569-75.172 12.936-34.615 12.327-65.303 32.917-89.687 59.406l.142.243.009-.01z"}}]})(props);
};
function IoLogoClosedCaptioning (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M32 96v320h448V96H32zm406 159.8c0 23.4-1.4 41.2-3.3 70.2s-16.8 49.4-51.7 52.6c-34.9 3.2-83.8 3.5-127 3.4-42.9.1-92-.1-127-3.4-34.9-3.2-49.7-23.6-51.7-52.6S74 279.2 74 255.8c0-23.4.1-38.6 3.3-70.2s20.1-49.2 51.7-52.4 86-3.2 127-3.2 95.4 0 127 3.2c31.6 3.2 48.5 20.9 51.7 52.4 3.2 31.6 3.3 46.9 3.3 70.2z"}},{"tag":"path","attr":{"d":"M357.5 280.4v.7c0 16.3-10.1 25.9-23.6 25.9-13.5 0-22.6-10.8-23.9-25.9 0 0-1.2-7.9-1.2-23.9s1.4-26 1.4-26c2.4-17 10.7-25.9 24.2-25.9 13.4 0 24.1 11.6 24.1 29.2v.5h45.1c0-21.9-5.5-41.6-16.6-54-11-12.4-27.5-18.6-49.3-18.6-10.9 0-20.9 1.4-30 4.3-9.1 2.9-17 7.9-23.6 15.1-6.6 7.2-11.7 16.8-15.4 28.9-3.6 12.1-5.5 27.3-5.5 45.7 0 18 1.5 33 4.4 45.1 3 12.1 7.3 21.7 13.1 28.9 5.8 7.2 13.1 12.2 21.8 15 8.8 2.8 19.1 4.2 30.9 4.2 25 0 43-6.4 53.8-18.7 10.8-12.3 16.2-30.3 16.2-53.9h-46.1c.2 0 .2 2.5.2 3.4zM202.6 280.4v.7c0 16.3-10.1 25.9-23.6 25.9-13.5 0-22.6-10.8-23.9-25.9 0 0-1.2-7.9-1.2-23.9s1.4-26 1.4-26c2.4-17 10.7-25.9 24.2-25.9 13.4 0 24.1 11.6 24.1 29.2v.5h45.1c0-21.9-5.5-41.6-16.6-54-11-12.4-27.5-18.6-49.3-18.6-10.9 0-20.9 1.4-30 4.3-9.1 2.9-17 7.9-23.6 15.1-6.6 7.2-11.7 16.8-15.4 28.9-3.6 12.1-5.5 27.3-5.5 45.7 0 18 1.5 33 4.4 45.1 3 12.1 7.3 21.7 13.1 28.9 5.8 7.2 13.1 12.2 21.8 15 8.8 2.8 19.1 4.2 30.9 4.2 25 0 43-6.4 53.8-18.7 10.8-12.3 16.2-30.3 16.2-53.9h-46.1c.2 0 .2 2.5.2 3.4z"}}]})(props);
};
function IoLogoCodepen (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M241.239 303.936c-15.322-10.357-30.742-20.569-46.062-30.93-2.03-1.373-3.43-1.472-5.502-.029l-38.871 26.154C181.966 319.905 244 361.317 244 361.317v-53.786c-.012-1.224-1.553-2.78-2.761-3.595zM195.092 240.666c15.454-10.16 30.851-20.409 46.109-30.86 1.486-1.018 2.775-3.509 2.799-5.334v-51.706s-62.033 41.124-93.262 61.942c13.7 9.159 26.671 17.913 39.787 26.443 1.02.662 3.396.284 4.567-.485zM269.838 209.354a4521.517 4521.517 0 0 0 47.627 31.815c.916.604 2.92.602 3.839 0l39.751-26.467L268 152.484v53.35c.01 1.201.805 2.821 1.838 3.52zM258.109 230.369c-1.21-.802-3.611-.528-4.743.168-4.817 2.962-9.463 6.203-14.164 9.355-8.248 5.53-25.356 17.023-25.356 17.023l38.842 25.865c1.748 1.157 4.436 1.22 6.26.111l39.014-25.993c.001 0-34.079-22.701-39.853-26.529zM141 237.116v39.609l29.622-19.838z"}},{"tag":"path","attr":{"d":"M256 32C132.288 32 32 132.288 32 256s100.288 224 224 224 224-100.288 224-224S379.712 32 256 32zm139 265.006c0 5.785-2.652 9.868-7.511 13.094a38019.909 38019.909 0 0 0-123.286 82.188c-5.854 3.918-11.174 3.754-16.984-.137-40.783-27.314-81.719-54.546-122.625-81.676-5.11-3.389-7.594-7.557-7.594-13.73v-79.729c0-6.141 2.521-10.332 7.624-13.716 40.906-27.13 81.939-54.363 122.724-81.676 5.818-3.896 11.094-4.007 16.938-.095a41090.004 41090.004 0 0 0 123.261 82.195c4.678 3.106 7.453 6.943 7.453 12.66v80.622z"}},{"tag":"path","attr":{"d":"M316.247 273.234a3826.352 3826.352 0 0 1-45.386 30.332c-2.412 1.588-2.888 3.318-2.861 6.189v51.346l93.039-62.004-38.527-25.882c-2.345-1.604-3.93-1.567-6.265.019zM370 276.676V237.06l-29.59 19.873z"}}]})(props);
};
function IoLogoCss3 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256.282 339.488zM64 32l34.946 403.219L255.767 480l157.259-44.85L448 32H64zm290.676 334.898l-98.607 28.125-98.458-28.248L150.864 289h48.253l3.433 39.562 53.586 15.163.132.273h.034l53.467-14.852L315.381 265H203l-4-50h120.646l4.396-51H140l-4-49h240.58l-21.904 251.898z"}}]})(props);
};
function IoLogoDesignernews (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M290.4 145L227 96l63.6 102.2z"}},{"tag":"path","attr":{"d":"M329 96v163h-36.4l-63.2-98.6 1.7 98.6H191V152l-37.3-29.3c1 1.2 2 2.4 2.9 3.7 10 13.9 15 30.5 15 50.5 0 49.2-30.6 82.1-76.9 82.1H32v.4L231.6 416H480V214.1L329 96z"}},{"tag":"path","attr":{"d":"M129.9 178.1c0-29-14.2-45.1-39.7-45.1H71v89h19c26 0 39.9-15.4 39.9-43.9z"}}]})(props);
};
function IoLogoDribbble (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 64C150 64 64 150 64 256c0 106.1 86 192 192 192s192-85.9 192-192c0-106-86-192-192-192zm121.9 88.5c21.6 25.4 35.3 57.6 37.7 92.9-34.6-1.8-76-1.8-109.2 1.3-4.2-10.6-8.5-21-13.2-31 38.3-16.6 67.8-38.4 84.7-63.2zM256 96c38.8 0 74.4 13.8 102.1 36.8-17.4 22-44.7 41.1-78.7 55.6-18.6-34.4-40-64-62.8-87.3 12.7-3.2 25.8-5.1 39.4-5.1zm-72.4 17.5c23.1 23 44.8 52.3 63.8 86.6-36.1 11-77.5 17.3-121.7 17.3-8.4 0-16.6-.3-24.7-.8 11.5-45.1 42-82.5 82.6-103.1zM96.3 248.4c9.1.4 18.3.6 27.6.5 50.4-.6 97.3-8.5 137.6-21.4 3.8 7.9 7.4 16 10.8 24.3-5.5 1.3-10.4 2.7-14.3 4.3-55.1 23.1-98.5 60.4-122 105.5-24.8-28.2-40-65.1-40-105.6 0-2.6.1-5.1.3-7.6zM256 416c-37 0-71-12.6-98.1-33.7 21.3-42.2 59.3-77.1 107.2-98.8 4.5-2.1 10.5-3.8 17.4-5.3 5.7 15.8 10.8 32.2 15.3 49.2 6.9 26.5 11.8 52.7 14.8 78.1C295 412.2 276 416 256 416zm86.5-25.5c-3-25.7-7.9-52.1-14.9-78.9-3.4-13-7.3-25.6-11.5-37.9 31.4-2.6 69-2.2 98.9 0-5.4 49.1-33 91.3-72.5 116.8z"}}]})(props);
};
function IoLogoDropbox (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M177 77L64 150.9l78.1 62.7L256 143.1zM64 276.3l113 73.9 79-66.1-113.9-70.5zM256 284.1l79 66.1 113-73.9-78.1-62.7zM448 150.9L335 77l-79 66.1 113.9 70.5z"}},{"tag":"path","attr":{"d":"M256.2 298.3l-79.8 66-34.4-22.2V367l114 68 114-68v-24.9l-34.2 22.2z"}}]})(props);
};
function IoLogoEuro (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M234 272v-48h131.094l7.149-48H234v-1.83c0-35.92 14.975-58.086 79.25-58.086 26.264 0 55.867 2.498 93.189 8.742L416 59.866C377.988 51.123 345.306 48 310.057 48 195.326 48 146 89.225 146 165.43V176H96v48h50v48H96v48h50v26.57C146 422.774 195.297 464 310.027 464c35.25 0 67.848-3.123 105.859-11.866l-9.619-64.96c-37.322 6.244-66.781 8.742-93.045 8.742-64.276 0-79.223-18.739-79.223-63.086V320h116.795l7.148-48H234z"}}]})(props);
};
function IoLogoFacebook (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"}}]})(props);
};
function IoLogoFlickr (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M352 64H160c-52.8 0-96 43.2-96 96v192c0 52.8 43.2 96 96 96h192c52.8 0 96-43.2 96-96V160c0-52.8-43.2-96-96-96zM184 304c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm144 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"}}]})(props);
};
function IoLogoFoursquare (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M376.764 32H138.541C105.666 32 96 56.798 96 72.414v379.64c0 17.591 9.425 24.117 14.718 26.267 5.299 2.155 19.916 3.971 28.673-6.168 0 0 112.469-130.895 114.4-132.834 2.921-2.93 2.921-2.93 5.844-2.93h72.767c30.574 0 35.49-21.869 38.684-34.752 2.659-10.789 32.489-163.962 42.452-212.559C421.143 51.993 411.745 32 376.764 32zm-5.678 269.637c2.659-10.789 32.489-163.962 42.452-212.559m-50.846 7.592l-9.999 51.734c-1.195 5.65-8.287 11.595-14.863 11.595h-95.917C231.473 160 224 166.138 224 176.602v13.448c0 10.473 7.519 17.894 17.965 17.894h81.848c7.374 0 14.61 8.109 13.016 16.005-1.602 7.908-9.086 46.569-9.984 50.89-.902 4.328-5.845 11.725-14.611 11.725h-64.269c-11.705 0-15.244 1.533-23.074 11.293-7.837 9.77-78.256 94.592-78.256 94.592-.713.822-1.41.584-1.41-.312V95.896c0-6.684 5.793-14.523 14.479-14.523h191.173c7.035-.001 13.611 6.631 11.815 15.297z"}}]})(props);
};
function IoLogoFreebsdDevil (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M502.6 115c-22.5-43.7-58-51-58-51s15.5 32 16 51c.4 16.1-5.5 28-27.2 33.5s-30.8-2-47.8-17.5-41.6-26.5-72.6-28c-40-2-77 9-77 9-20-25 20-80 20-80-74.5 29.5-93.7 83.3-96 113.7-1.9 24.1 8.5 40.8 8.5 40.8s-.5 27.8-5 42c-3.1 9.8-16.9 25-26 34.5-12.2 12.7-12.5 38.5 0 57s44 27.5 67 39.5 31.5 21 31.5 21 1 8.3.5 15.3-3.2 14-9 18.2c-5.5 3.9-15.5.5-20.5-2s-5-6.2-10.5-8-7.3-4-6.5-11 2-9-3.5-18.5-18.5-9.5-29.5-8-17.3 6.8-17.3 6.8l-16.3-10s8.5-15.6 5.2-35.6c-7.3-43.8-50-62.8-50-62.8L89 309.3s1.1-2.6 6.4-6.4 8.1-3.6 8.1-3.6 6.6 7.6 9.1 25.3c2.5 18-6.7 27.2-6.7 27.2l-28.3-18 1-14.5L39.8 309 56 345.7l15-4 24 22.7s-15.7 11.7-33 11.7c-11 0-22-6-22-6s-1.4-1-.8-5.5c.7-5 6.8-12.5 6.8-12.5H0s27.3 38.7 65 38.7c31 0 44.2-12.5 44.2-12.5L128 397s3 5.5 0 7-7 3.5-9 15 18 29 18 29c21.8 17.8 7 32 7 32h272c-9-13-22.5-18-32-32 0 0-44.8-58.4-1.8-90.4 57.4-42.7 42.8-69.4 41.2-101.4 0 0 31.8-6.6 59.3-33.6s38.9-70.8 19.9-107.6zM195 203c-16.9 4.5-22.5 35.5-22.5 35.5 1.5-63 57.5-93 65-89s-6.5 39-21 64c0 0-8-14.1-21.5-10.5zm37 15s18-56 37.5-59.5 41.5 21 41.5 62-26 65.4-42.8 69.2c-16.5 3.8-23 2-23 2s27.5-21.6 23.5-56.8c-2.8-24.7-31.4-24.2-36.7-16.9z"}}]})(props);
};
function IoLogoGameControllerA (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M369.3 146H142.7C81.5 146 32 191.5 32 255.4c0 64 49.5 110.6 110.7 110.6h226.5c61.2 0 110.7-46.6 110.7-110.6.1-63.9-49.4-109.4-110.6-109.4zM200 266.7c0 2.7-2.4 5.3-5.2 5.3H160v35.1c0 2.8-3.1 4.9-5.8 4.9h-21.4c-2.6 0-4.8-1.9-4.8-4.5V272H92.9c-2.8 0-4.9-3.1-4.9-5.8v-21.4c0-2.6 1.9-4.8 4.5-4.8H128v-34.8c0-2.8 1.9-5.2 4.6-5.2h22.1c2.7 0 5.3 2.4 5.3 5.2V240h34.8c2.8 0 5.2 1.9 5.2 4.6v22.1zm119.8 8.8c-10.7 0-19.5-8.6-19.5-19.2s8.7-19.2 19.5-19.2 19.5 8.6 19.5 19.2-8.8 19.2-19.5 19.2zm42.5 41.8c-10.7 0-19.5-8.5-19.5-19.1 0-10.6 8.7-19.2 19.5-19.2s19.5 8.5 19.5 19.2c0 10.6-8.7 19.1-19.5 19.1zm0-83.7c-10.7 0-19.5-8.6-19.5-19.1 0-10.6 8.7-19.2 19.5-19.2s19.5 8.6 19.5 19.2c0 10.5-8.7 19.1-19.5 19.1zm42.6 41.9c-10.7 0-19.4-8.6-19.4-19.2s8.7-19.2 19.4-19.2 19.5 8.6 19.5 19.2c-.1 10.6-8.8 19.2-19.5 19.2z"}}]})(props);
};
function IoLogoGameControllerB (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M135.1 204.6c-10.7 0-19.3 8.7-19.3 19.4s8.7 19.4 19.3 19.4c10.6 0 19.3-8.7 19.3-19.4s-8.6-19.4-19.3-19.4z"}},{"tag":"path","attr":{"d":"M466.3 248.9c-21.2-88.5-43.6-135.5-88.5-148.8-9.8-2.9-18.1-4-25.7-4-27.6 0-46.9 14.7-96.1 14.7-49.2 0-68.5-14.7-96.1-14.7-7.7 0-16 1.1-25.7 4-44.9 13.3-67.3 60.4-88.5 148.8-21.2 88.5-17.3 152.4 7.7 164.3 4.1 1.9 8.2 2.8 12.5 2.8 21.7 0 45.1-23.8 67.7-52 25.7-32.1 32.1-33 110.3-33h24.3c78.1 0 84.6.8 110.3 33 22.5 28.2 46 52 67.7 52 4.2 0 8.4-.9 12.5-2.8 24.9-12 28.7-75.9 7.6-164.3zm-331.1 14.7c-21.6 0-39.2-17.8-39.2-39.6s17.6-39.6 39.2-39.6c21.7 0 39.2 17.8 39.2 39.6.1 21.9-17.5 39.6-39.2 39.6zm172.9-19.5c-11.1 0-20.1-9-20.1-20.1 0-11.1 9-20.1 20.1-20.1 11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1zM352 288c-11.1 0-20.1-9-20.1-20 0-11.2 9-20.1 20.1-20.1 11.1 0 20.1 8.9 20.1 20.1 0 11-9 20-20.1 20zm0-87.8c-11.1 0-20.1-9-20.1-20.1 0-11.1 9-20.1 20.1-20.1 11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1zm43.9 43.9c-11.1 0-20.1-9-20.1-20.1 0-11.1 9-20.1 20.1-20.1 11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1z"}}]})(props);
};
function IoLogoGithub (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"}}]})(props);
};
function IoLogoGoogle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M457.6 224l-2.1-8.9H262V297h115.6c-12 57-67.7 87-113.2 87-33.1 0-68-13.9-91.1-36.3-23.7-23-38.8-56.9-38.8-91.8 0-34.5 15.5-69 38.1-91.7 22.5-22.6 56.6-35.4 90.5-35.4 38.8 0 66.6 20.6 77 30l58.2-57.9c-17.1-15-64-52.8-137.1-52.8-56.4 0-110.5 21.6-150 61C72.2 147.9 52 204 52 256s19.1 105.4 56.9 144.5c40.4 41.7 97.6 63.5 156.5 63.5 53.6 0 104.4-21 140.6-59.1 35.6-37.5 54-89.4 54-143.8 0-22.9-2.3-36.5-2.4-37.1z"}}]})(props);
};
function IoLogoGoogleplus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M318.2 230.9l-1.6-7H160V288h90.7c-9.4 45-48.4 63.6-84.1 63.6-26 0-50.2-7.8-68.3-25.3-18.6-18.1-28.9-43.1-28.9-70.4 0-27.1 9.8-51.8 27.6-69.6 17.7-17.7 42-25.4 68.7-25.4 30.5 0 49.9 13.8 58.1 21.1l48-47.7C258.3 122.6 221.5 93 164.1 93c-44.3 0-86.7 16.8-117.7 47.8C15.9 171.3 0 215.2 0 256s15 82.6 44.6 113.3C76.3 402 121.2 419 167.5 419c42.1 0 81.9-16.5 110.3-46.3 28-29.4 42.4-70.1 42.4-112.7-.1-18-1.9-28.7-2-29.1zM512 224h-57v-57h-41v57h-57v41h57v57h41v-57h57z"}}]})(props);
};
function IoLogoHackernews (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M64 64v384h384V64H64zm214 215v72h-40v-72l-66-120h47.1l39.7 83.6 38-83.6H342l-64 120z"}}]})(props);
};
function IoLogoHtml5 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M64 32l34.936 403.213L255.769 480l157.245-44.854L448 32H64zm307.997 132h-184l3.991 51h176.008l-13.505 151.386-98.5 28.094-98.682-27.976L150.545 289h48.254l3.423 39.287 53.769 14.781 53.422-14.915L314.987 264H147.986l-12.571-149.589 240.789.016L371.997 164z"}}]})(props);
};
function IoLogoInstagram (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z"}},{"tag":"path","attr":{"d":"M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z"}}]})(props);
};
function IoLogoIonic (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 161.2c-52.3 0-94.8 42.5-94.8 94.8s42.5 94.8 94.8 94.8 94.8-42.5 94.8-94.8-42.5-94.8-94.8-94.8z"}},{"tag":"circle","attr":{"cx":"392.1","cy":"126.4","r":"43.2"}},{"tag":"path","attr":{"d":"M445.3 169.8l-1.8-4-2.9 3.3c-7.1 8-16.1 14.2-26.1 17.9l-2.8 1 1.1 2.7c8.6 20.7 13 42.7 13 65.2 0 93.7-76.2 169.9-169.9 169.9S86.1 349.7 86.1 256 162.3 86.1 256 86.1c25.4 0 49.9 5.5 72.8 16.4l2.7 1.3 1.2-2.7c4.2-9.8 10.8-18.5 19.2-25.2l3.4-2.7-3.9-2C321.6 55.8 289.5 48 256 48 141.3 48 48 141.3 48 256s93.3 208 208 208 208-93.3 208-208c0-30-6.3-59-18.7-86.2z"}}]})(props);
};
function IoLogoIonitron (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M468.4 269.2c-2.7-34.2-12.2-59.2-32.9-57.3 6.4 14.6 12.2 48.1 8.7 72-1.4-25.9-6.3-50.2-17.2-72-32.1-64.6-100.6-107.4-177.5-103.1-85.9 4.8-155 66.7-172 146.8l-11.4 1.6c-17.2 2.4-26.9 34.9-21.7 72.5 5.3 37.7 23.5 66.2 40.7 63.8l15.8-2.2c34.7 56.3 98.5 92.3 169.3 88.4 85.3-4.7 154-65.9 171.7-145.2l7.4-.4c15.2-2.5 21.8-31.2 19.1-64.9zM90.3 264c10.7 8.2 25.4 28.3 29.1 55.1 3.9 27.7-4.8 54.1-13.4 64.3 6-14.8 8.1-37.3 4.7-61.9-3.3-24-11-44.7-20.4-57.5zm183.8 116.2c-8.5.5-15.8-6-16.3-14.5s6-15.7 14.6-16.2c8.5-.5 15.8 6 16.3 14.5s-6.1 15.7-14.6 16.2zm81-4.7c-8.5.5-15.8-6-16.3-14.5s6-15.7 14.6-16.2c8.5-.5 15.8 6 16.3 14.5.4 8.5-6.1 15.8-14.6 16.2zM165.5 70s0 .1 0 0c.1.1.1.2.1.2.1.2.2.3.3.5v.1c.4 1 1.1 1.9 2.3 2.7 2 1.5 5 2.4 8.6 3 3.4.5 7.5.7 11.9.5 1 0 1.9-.1 2.9-.2-.4-.4-.8-.9-1.2-1.3h-1.3c-4.3.1-8.2-.2-11.6-.9-3.5-.7-6.4-1.8-8.4-3.4-.6-.5-1-.9-1.4-1.4-.2-.7-.2-1.5 0-2.3.5-2.3 2.4-4.8 5.5-7.4 2.7-2.3 6.4-4.7 10.9-7 .9-.4 1.7-.9 2.6-1.3.1-.1.3-.1.5-.2-.8 3.3-.9 6.9-.2 10.5 2.3 11.9 11.6 20.3 23.2 20.6l4 24.3 12.7-2-4-24.3c10.8-4.6 16.3-16.1 14-28-.7-3.5-2-6.7-3.9-9.5-5.3-.8-15.6-.8-29.2 2.1 1.1-.3 2.1-.7 3.2-1 7.6-2.1 14.9-3.5 21.5-4.2.6-.1 1.2-.1 1.8-.2 1.2-.1 2.4-.2 3.5-.3h.6c4.1-.2 7.7-.1 10.8.3 2.4.3 4.4.8 6.1 1.4-.6.9-.9 2-.9 3.2 0 2.7 1.8 5 4.3 5.8-.6.9-1.3 1.9-2.1 2.8-.8.9-1.8 1.9-2.9 2.8-1.1.9-2.3 1.8-3.5 2.7l-6.5 3.8-.3 1.5c.1 0 .2-.1.2-.1l8.4-4.7c1.2-.8 2.4-1.6 3.4-2.4 1.2-.9 2.2-1.8 3.2-2.8.9-.9 1.7-1.9 2.4-2.8l.3-.6c3-.4 5.4-2.9 5.4-6 0-3.4-2.7-6.1-6.1-6.1-1 0-1.9.3-2.8.7-2-1.2-4.8-2.1-8.2-2.7-4.3-.8-9.6-1-15.5-.6-.7 0-1.4.1-2.1.2-.7.1-1.3.2-2 .2-5.3-3.5-11.9-5-18.7-3.7-7.9 1.5-14.2 6.5-17.8 13-1.3.5-2.6 1.1-3.8 1.7-.7.3-1.3.6-2 .9-5.9 2.9-10.6 6.1-13.9 9.1-3.1 2.9-4.9 5.7-5.3 8.3-.2 1.4 0 2.8.7 4 .1.1.2.3.3.5z"}}]})(props);
};
function IoLogoJavascript (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M208 88.001h-80v212.498c0 52.58-18.032 67.261-49.412 67.261-14.705 0-27.948-2.521-38.25-6.063L32 423.904C46.7 428.966 69.259 432 86.907 432 158.955 432 208 398.129 208 301.02V88.001zM382.463 80C305.02 80 256 123.998 256 182.154c0 50.083 37.751 81.44 92.641 101.665 39.7 14.158 55.392 26.808 55.392 47.539 0 22.756-18.139 37.425-52.448 37.425-31.863 0-60.789-10.64-80.394-21.255v-.021L256 410.727c18.639 10.638 53.441 21.255 91.167 21.255C437.854 431.98 480 383.43 480 326.284c0-48.55-26.958-79.9-85.278-102.163-43.139-17.191-61.27-26.795-61.27-48.542 0-17.2 15.688-32.869 48.043-32.869 31.846 0 53.744 10.707 66.505 17.291l19.125-64C447.125 87.22 420.188 80 382.463 80z"}}]})(props);
};
function IoLogoLinkedin (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"}}]})(props);
};
function IoLogoMarkdown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M447.659 96H64.341C46.504 96 32 110.484 32 128.308v255.349C32 401.493 46.504 416 64.341 416h383.318C465.496 416 480 401.493 480 383.656V128.308C480 110.484 465.496 96 447.659 96zM284.023 352h-56.048v-96l-42.04 53.878L143.913 256v96H87.869V160h56.044l42.022 67.98 42.04-67.98h56.048v192zm83.657 0l-69.635-96h42v-96h56.043v96h42.027l-70.453 96h.018z"}}]})(props);
};
function IoLogoModelS (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M443.6 208.4c-3.1-1.9-2.2-6.6 1.3-7.3l5.3-1.1c7.1 0 22.4-2.3 25.6-5.4 3.1-3.2 4.2-5.4 4.2-8.2s-1.7-7.7-4.8-11.1c-3-3.4-16-5.2-23.7-6.2s-8.7 0-10.7 1.2c-2 1.3-2.8 9.5-3.1 15-.1 1.2-.9 2.2-2.1 2.5l-.4.1c-3.3.7-6.6-1.1-7.8-4.3-4.6-13-10.7-32.5-19.4-48.4-11.5-20.8-23.5-27.4-28.5-29-4.9-1.5-9.4-2.6-43-6.1-33.8-3.6-63.1-4.1-80.5-4.1s-46.7.5-80.6 4.1c-33.6 3.4-38.1 4.5-43 6.1-5 1.6-17 8.2-28.5 29-9.4 17.1-15.7 38.3-20.4 51.3-.6 1.5-2.2 2.4-3.8 2.1-3.1-.7-5.4-3.3-5.6-6.5-.4-5-1.2-10.7-2.9-11.7-2-1.3-3-2.2-10.7-1.2s-20.6 2.8-23.7 6.2c-3 3.4-4.7 8.3-4.7 11.1s1.1 5.1 4.2 8.3c3.1 3.2 18.5 5.4 25.6 5.4l5.3 1.1c3.5.7 4.4 5.4 1.3 7.3-9.1 5.7-23.2 15.3-32.3 25.6 0 0-4.1 28.7-4.1 62.1 0 48 5.8 92.4 5.8 92.4 1.8.3 3.6.6 5.3.9 0 1.2.7 13.1 2 21.2.3 2 1.3 5.5 6.2 5.5h64.7c1.9 0 5.1-1.6 5.1-3.7l1-17c7.2.1 3.2.1 10.9 0 24.8-.3 15.6-7.5 27.1-7.3 11.3.2 55 3 96 3s84.7-2.8 96-3c11.5-.2 2.3 7.1 27.1 7.3 7.7.1 4.7.1 11.9 0l1 17c0 2.1 3.2 3.7 5.1 3.7h63.5c4.9 0 5.9-3.5 6.2-5.5 1.3-8.1 1.9-19.9 2-21.2l5.4-.9s5.8-44.3 5.8-92.4c0-33.5-4.1-62.1-4.1-62.1-9.3-10.5-23.4-20.1-32.5-25.8zm-320.2-53.6c2.2-5.1 5.9-11.6 10-17.2 5-6.7 12.4-11.2 20.6-12.5 16.7-2.7 52.6-7.3 101.9-7.3 49.3 0 85.2 4.6 101.9 7.3 8.2 1.3 15.6 5.8 20.6 12.5 4.2 5.6 7.9 12.1 10.1 17.2 3.9 9.2 10.4 30.7 9.4 33.2-1 2.5 1 3.7-12.2 2.6-13.1-1-90.6-2.1-129.7-2.1-39.2 0-116.7 1.1-129.7 2.1-13.2 1.1-11.3-.2-12.2-2.6s5.4-24 9.3-33.2zm8.4 116c-9.9 0-29.8-1-34.5-1.2-4.7-.1-8.8 3.8-11.2 3.8s-25.5-3.6-28-14.9c-1.7-7.5-1.1-15.2-.6-19.5.3-1.9 1.9-3.4 3.8-3.5 14.4-.5 29.2.5 55.3 7.9 17.3 4.9 29.8 12.6 36.9 17.8 2.8 2.1 1.8 6.5-1.7 7.2-6.1 1.1-14.4 2.4-20 2.4zm210.4 73c-12.7 1.7-58.5 2.2-86.2 2.2s-73.5-.5-86.2-2.2c-13.1-1.7-29.8-17.3-18.4-30.2 7.6-8.5 20.8-13.6 48.9-17.3 29.8-3.8 48.6-4.3 55.6-4.3s25.8.5 55.6 4.3c28.1 3.7 43.2 9.6 48.9 17.3 10.4 13.8-5.1 28.4-18.2 30.2zm111.7-85.2c-2.5 11.2-25.6 14.9-28 14.9s-6.5-3.9-11.2-3.8c-4.7.2-24.6 1.2-34.5 1.2-5.5 0-13.8-1.3-20-2.4-3.5-.6-4.5-5.1-1.7-7.2 7.1-5.2 19.6-12.9 36.9-17.8 26.1-7.4 40.8-8.4 55.3-7.9 2 .1 3.6 1.5 3.8 3.5.5 4.3 1.1 12-.6 19.5z"}}]})(props);
};
function IoLogoNoSmoking (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M360 256h16v48h-16zM112 304h129.6l-48-48H112z"}},{"tag":"path","attr":{"d":"M364.5 60.1c-.4-.2-.7-.4-1-.6-10.9-6-22.5-10.7-34.4-14.8l-5.4-1.8C302.3 36.1 279.6 32 256 32 132.3 32 32 132.3 32 256c0 84.3 46.6 157.6 115.4 195.8.4.2.7.5 1.1.7 10.9 6 22.5 10.7 34.4 14.8l5.4 1.8c21.4 6.8 44 10.9 67.7 10.9 123.7 0 224-100.3 224-224 0-84.3-46.6-157.7-115.5-195.9zM256 426.4c-9.3 0-18.4-.9-27.2-2.4-9.8-1.6-19.3-4.1-28.5-7.3-1.9-.6-3.8-1.2-5.6-1.9-6.5-2.5-12.9-5.3-19-8.6-53.6-28.7-90.1-85.2-90.1-150.3 0-37.2 12.4-71.4 32.7-99.4l237.2 237.2c-28.1 20.3-62.3 32.7-99.5 32.7zm137.8-71L156.6 118.2c28-20.2 62.1-32.6 99.4-32.6 9.3 0 18.3.9 27.2 2.4 9.8 1.6 19.3 4.1 28.5 7.3 1.8.6 3.7 1.2 5.6 1.9 6.2 2.4 12.2 5 18 8.1 54.2 28.5 91.2 85.3 91.2 150.8-.1 37.2-12.5 71.3-32.7 99.3z"}},{"tag":"path","attr":{"d":"M352 256h-34l34 34zM384 256h16v48h-16zM360.1 212.7c-8.8-4.1-22-5.7-45.6-5.7h-3.6c-12.7.1-15.9-.1-20-6.1-2.8-4.2-1-14.8 3.7-21.9 1.6-2.4 1.8-5.6.4-8.2-1.4-2.6-4.1-4.2-7-4.3-.1 0-9.4-.1-18.3-3.9-10.6-4.5-15.6-12.1-15.6-23.1 0-25.8 21.8-27.7 22.8-27.7v-16c-12 0-38.8 11-38.8 43.7 0 17.5 9 31 25.7 38 4.2 1.7 8.4 2.9 12 3.6-3.3 9.8-3.6 20.9 1.7 28.7 9 13.3 20.3 13.2 33.3 13.1h3.5c26.3 0 34.6 2.3 38.9 4.3 5.7 2.6 6.8 7.5 6.6 15.7v1h16v-1c0-7.1.3-22.8-15.7-30.2z"}},{"tag":"path","attr":{"d":"M400 244c0-25.7-3-39.2-9.1-49.6C382.3 180 368.5 172 352 172h-17.4c2.9-8.3 5.4-19.8 3.5-30.9-3.2-18.8-19.1-30-43.1-30v16c21 0 26.1 9.1 27.4 16.7 2.5 14.5-6.8 32.1-6.9 32.3-1.4 2.5-1.3 5.5.1 7.9s4.1 3.9 6.9 3.9H352c10.9 0 19.4 4.9 25.1 14.6 3.1 5.3 6.9 13.5 6.9 41.4h16v.1z"}}]})(props);
};
function IoLogoNodejs (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M255.917 480a32.536 32.536 0 0 1-16.633-4.599l-52.985-32.44c-7.914-4.562-4.023-6.203-1.443-7.141 10.565-3.781 13.713-5.657 24.947-12.285 1.206-.667 2.747-.424 3.955.322l39.71 23.504c1.476.85 3.557.85 4.931 0l155.188-92.246c1.475-.877 2.415-2.646 2.415-4.441V163.869c0-1.85-.94-3.592-2.449-4.528l-155.12-94.672c-1.478-.894-3.421-.894-4.898 0L98.516 159.374c-1.544.903-2.516 2.698-2.516 4.495v186.805c0 1.813.972 3.513 2.481 4.389l39.929 23.972c23.61 12.204 37.59-.17 37.59-14.611V180.725c0-2.652 2.047-4.727 4.596-4.727h22.809c2.515 0 4.597 2.072 4.597 4.727v183.698c0 32.563-19.353 51.248-49.199 51.248-9.156 0-16.397 0-36.552-10.279l-41.584-24.781C70.371 374.459 64 362.965 64 350.656V161.191c0-12.316 6.371-23.784 16.665-29.917L239.35 36.41c10.027-5.88 23.374-5.88 33.332 0l158.65 94.864C441.63 137.423 448 148.899 448 161.191v189.465c0 12.309-6.37 23.75-16.668 29.953l-158.65 94.774a32.52 32.52 0 0 1-16.698 4.599l-.067.018z"}},{"tag":"path","attr":{"d":"M304.943 351.998c-64.61 0-84.006-31.61-84.006-59.271 0-2.629 2.048-4.729 4.562-4.729h20.521c2.282 0 4.227 1.7 4.562 4.016 3.084 21.602 16.748 31.15 54.324 31.15 33.399 0 47.091-10.346 47.091-28.684 0-10.592-3.463-18.424-55.407-23.697-43.427-4.441-70.288-14.373-70.288-50.295 0-33.135 26.996-52.49 72.234-52.49 46.128 0 76.462 14 79.173 50.829.102 1.337-.368 2.629-1.241 3.644-.871.965-2.078 1.527-3.353 1.527h-20.591c-2.146 0-4.024-1.562-4.459-3.713-4.401-16.953-16.97-23.402-49.563-23.402-36.486 0-40.746 12.753-40.746 22.607 0 11.963 5.031 15.441 54.294 22.172 48.761 6.663 71.933 16.117 71.933 51.552 0 35.781-28.808 58.783-79.075 58.783l.035.001z"}}]})(props);
};
function IoLogoNpm (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M227.6 213.1H256v57.1h-28.4z"}},{"tag":"path","attr":{"d":"M0 156v171.4h142.2V356H256v-28.6h256V156H0zm142.2 142.9h-28.4v-85.7H85.3v85.7H28.4V184.6h113.8v114.3zm142.2 0h-56.9v28.6h-56.9V184.6h113.8v114.3zm199.2 0h-28.4v-85.7h-28.4v85.7h-28.4v-85.7H370v85.7h-56.9V184.6h170.7v114.3z"}}]})(props);
};
function IoLogoOctocat (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M178.4 287.5c-9.1 0-16.9 4.2-23.2 12.8-6.3 8.5-9.4 19-9.4 31.4 0 12.5 3.2 23 9.4 31.5 6.3 8.5 14 12.8 23.2 12.8 8.5 0 15.9-4.3 22.1-12.8 6.3-8.5 9.4-19 9.4-31.5 0-12.4-3.2-22.9-9.4-31.4-6.3-8.6-13.6-12.8-22.1-12.8zM334.7 287.5c-9 0-16.9 4.2-23.2 12.8-6.3 8.5-9.4 19-9.4 31.4 0 12.5 3.2 23 9.4 31.5 6.3 8.5 14.1 12.8 23.2 12.8 8.5 0 15.9-4.3 22.2-12.8 6.3-8.5 9.4-19 9.4-31.5 0-12.4-3.2-22.9-9.4-31.4-6.3-8.6-13.6-12.8-22.2-12.8z"}},{"tag":"path","attr":{"d":"M445.8 172c-.1 0 2.7-14.3.3-39.2-2.2-24.9-7.5-47.8-16.1-68.8 0 0-4.4.8-12.8 2.9s-22.1 6.3-40.9 14.8c-18.5 8.5-38 19.8-58.3 33.5-13.8-3.9-34.4-5.9-62-5.9-26.3 0-46.9 2-62 5.9-44.6-30.9-81.9-48-112.1-51.2-8.6 21-13.9 44-16 69-2.4 24.9.4 39.3.4 39.3C42 198.6 32 236.5 32 267.8c0 24.2.7 46.1 6.1 65.5 5.6 19.3 12.7 35.1 21.1 47.2 8.6 12.1 19 22.8 31.6 31.9 12.5 9.3 24 16 34.4 20.2 10.5 4.4 22.4 7.6 36 9.9 13.3 2.4 23.4 3.6 30.5 4 0 0 28 1.5 64.4 1.5s64.3-1.5 64.3-1.5c7-.4 17.1-1.6 30.5-4 13.5-2.3 25.5-5.6 35.9-9.9 10.4-4.3 21.9-10.9 34.5-20.2 12.5-9 22.9-19.7 31.5-31.9 8.4-12.1 15.5-27.9 21.1-47.2 5.5-19.4 6.1-41.4 6.1-65.6 0-30.3-10-68.7-34.2-95.7zm-65.4 233.6c-27.9 13.1-68.9 18.4-123.3 18.4H255c-54.4 0-95.4-5.2-122.8-18.4-27.5-13.1-41.3-40.1-41.3-80.7 0-24.3 8.6-44 25.5-59.1 7.4-6.5 16.4-11 27.6-13.7 11.1-2.6 21.4-2.8 31-2.5 9.4.4 22.6 2.2 39.3 3.5 16.8 1.3 29.3 3 41.8 3 11.7 0 27.2-2 52.1-4 25-2 43.5-3 55.5-1 12.3 2 23 6.2 32.1 14.7 17.7 15.8 26.6 35.5 26.6 59.1-.1 40.6-14.2 67.6-42 80.7z"}}]})(props);
};
function IoLogoPinterest (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 32C132.3 32 32 132.3 32 256c0 91.7 55.2 170.5 134.1 205.2-.6-15.6-.1-34.4 3.9-51.4 4.3-18.2 28.8-122.1 28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2 19.2-58 43.2-58 20.4 0 30.2 15.3 30.2 33.6 0 20.5-13.1 51.1-19.8 79.5-5.6 23.8 11.9 43.1 35.4 43.1 42.4 0 71-54.5 71-119.1 0-49.1-33.1-85.8-93.2-85.8-67.9 0-110.3 50.7-110.3 107.3 0 19.5 5.8 33.3 14.8 43.9 4.1 4.9 4.7 6.9 3.2 12.5-1.1 4.1-3.5 14-4.6 18-1.5 5.7-6.1 7.7-11.2 5.6-31.3-12.8-45.9-47-45.9-85.6 0-63.6 53.7-139.9 160.1-139.9 85.5 0 141.8 61.9 141.8 128.3 0 87.9-48.9 153.5-120.9 153.5-24.2 0-46.9-13.1-54.7-27.9 0 0-13 51.6-15.8 61.6-4.7 17.3-14 34.5-22.5 48 20.1 5.9 41.4 9.2 63.5 9.2 123.7 0 224-100.3 224-224C480 132.3 379.7 32 256 32z"}}]})(props);
};
function IoLogoPlaystation (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M399.8 203c-.8-17.1-3.3-34.5-10.8-50.1-4.1-8.6-9.7-16.5-16.5-23.2-6.3-6.4-13.6-11.7-21.3-16.3-17.1-10.2-37.5-17-84.4-31S192 64 192 64v358.3l79.9 25.7s.1-198.8.1-299.5v-3.8c0-9.3 7.5-16.8 16.1-16.8h.5c8.5 0 15.5 7.5 15.5 16.8V278c11 5.3 29.2 9.3 41.8 9.1 8.3.2 16.7-1.7 24-5.7 7.6-4.1 13.9-10.4 18.4-17.8 5.1-8.3 8.2-17.8 9.9-27.3 1.9-10.8 2-22.1 1.6-33.3zM86.7 357.8c27.4-9.8 89.3-29.5 89.3-29.5v-47.2s-76.5 24.8-111.3 37.1c-8.6 3.1-17.3 5.9-25.7 9.5-9.8 4.1-19.4 8.7-28.1 14.8-3.8 2.6-7.2 5.9-9.2 10.1s-2.2 9.2-.5 13.6c2 5.1 5.8 9.3 10.1 12.6 7.8 5.9 17.1 9.5 26.4 12.2 28.4 9.4 58.4 14 88.4 13.3 14.5-.2 36-1.9 50-4.4v-42s-11 2.5-41.3 12.5c-4.6 1.5-9.2 3.3-14 4.3-7.1 1.6-14.4 2.1-21.6 2.2-6.5-.3-13.2-.7-19.3-3.1-2.2-1-4.6-2.2-5.5-4.6-.8-2 .3-4 1.7-5.4 2.8-2.9 6.8-4.5 10.6-6z"}},{"tag":"path","attr":{"d":"M512 345.9c-.1-6-3.7-11.2-7.9-15-7.1-6.3-15.9-10.3-24.7-13.5-5.5-1.9-9.3-3.3-14.7-5-25.2-8.2-51.9-11.2-78.3-11.3-8 .3-23.1.5-31 1.4-21.9 2.5-67.3 15.4-67.3 15.4v48.8s67.5-21.6 96.5-31.8c9.7-3.3 20.1-4.6 30.3-4.6 6.5.2 13.2.7 19.4 3.1 2.2.9 4.5 2.2 5.5 4.5.9 2.6-.9 5-2.9 6.5-4.7 3.8-10.7 5.3-16.2 7.4-41 14.5-132.7 44.7-132.7 44.7v47s117.2-39.6 170.8-58.8c8.9-3.3 17.9-6.1 26.4-10.4 7.9-4 15.8-8.6 21.8-15.3 3.1-3.6 5-8 5-13.1z"}}]})(props);
};
function IoLogoPolymer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M392.3 96h-77.9L160.8 348.6 109.9 256l87.7-160h-77.9L32 256l87.7 160h77.9l153.7-252.6 50.8 92.6-87.7 160h77.9L480 256 392.3 96z"}}]})(props);
};
function IoLogoPython (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M193.46 249.056a65.316 65.316 0 0 1 11.586-1.041l-3.122-.015h103.823c4.503 0 8.806-.617 12.908-1.754 19.37-5.363 33.345-22.537 33.345-43.663v-87.224c0-24.832-21.15-43.484-46.289-47.606-15.931-2.624-39.258-3.827-55.089-3.749-15.829.086-30.981 1.404-44.277 3.749C167.143 74.576 160 88.928 160 115.359V144h96v16H128.82c-35.628 0-64.538 42.571-64.813 95.242-.002.253-.007.505-.007.758 0 9.523.94 18.72 2.685 27.404C74.648 323.07 99.451 352 128.82 352H144v-45.935c0-26.827 20.146-51.733 49.46-57.009zm10.196-122.054c-9.592 0-17.384-7.785-17.384-17.403 0-9.664 7.774-17.52 17.384-17.52 9.574 0 17.399 7.855 17.399 17.52.001 9.618-7.809 17.403-17.399 17.403z"}},{"tag":"path","attr":{"d":"M443.951 222.543C434.78 186.021 411.033 160 383.18 160H368v40.672c0 33.915-22.286 58.474-49.489 62.681a53.943 53.943 0 0 1-8.301.646H206.351a51.41 51.41 0 0 0-13.049 1.672C174.18 270.689 160 286.6 160 307.236v87.227c0 24.832 24.977 39.426 49.481 46.551 29.327 8.531 61.267 10.068 96.366 0C329.15 434.354 352 420.893 352 394.463V368h-96v-16h127.18c25.24 0 47.107-21.365 57.814-52.549C445.474 286.404 448 271.641 448 256c0-11.768-1.433-23.038-4.049-33.457zM307.867 382.82c9.59 0 17.381 7.785 17.381 17.4 0 9.65-7.791 17.521-17.381 17.521-9.577 0-17.399-7.871-17.399-17.521 0-9.63 7.806-17.4 17.399-17.4z"}}]})(props);
};
function IoLogoReddit (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"circle","attr":{"cx":"322.3","cy":"288.4","r":"31.8"}},{"tag":"circle","attr":{"cx":"190.3","cy":"288.4","r":"31.8"}},{"tag":"path","attr":{"d":"M480.5 251c0-27.7-22.2-50.2-49.5-50.2-13 0-24.7 5-33.6 13.3-33.2-23.4-78.4-38.5-128.7-40.7L292 95.7l69.6 13.9c.2 24.7 20.1 44.7 44.5 44.7 24.6 0 44.5-20.2 44.5-45.1S430.7 64 406.1 64c-18.6 0-34.5 11.6-41.2 28l-85.2-17-29.4 98.2-7.1.2c-50.3 2.2-95.5 17.4-128.7 40.7-8.8-8.3-20.6-13.3-33.6-13.3-27.3 0-49.5 22.5-49.5 50.2 0 19.6 11 36.5 27.1 44.8-.8 4.9-1.2 9.8-1.2 14.8C57.5 386.4 146.4 448 256 448s198.5-61.6 198.5-137.5c0-5-.4-9.9-1.1-14.8 16.1-8.3 27.1-25.2 27.1-44.7zM406.1 81.9c14.8 0 26.8 12.2 26.8 27.2s-12 27.2-26.8 27.2-26.8-12.2-26.8-27.2 12-27.2 26.8-27.2zM49.2 251c0-17.8 14.3-32.2 31.8-32.2 7.2 0 13.9 2.5 19.2 6.6-17.3 15.2-30.1 33-37 52.4-8.4-5.9-14-15.7-14-26.8zm337.2 141.9C351.8 416.8 305.5 430 256 430s-95.8-13.2-130.4-37.1c-32.5-22.5-50.4-51.8-50.4-82.4 0-3.2.2-6.5.6-9.7.7-6 2.2-11.9 4.3-17.7 5.6-15.6 16-30.3 30.7-43.4 4.4-3.9 9.2-7.7 14.4-11.3.1-.1.3-.2.4-.3C160.2 204.2 206.5 191 256 191s95.8 13.2 130.4 37.1c.1.1.3.2.4.3 5.2 3.6 10 7.4 14.4 11.3 14.7 13.1 25.1 27.8 30.7 43.4 2.1 5.8 3.5 11.7 4.3 17.7.4 3.2.6 6.4.6 9.7 0 30.6-17.9 59.9-50.4 82.4zm62.4-115.2c-6.9-19.4-19.7-37.2-37-52.4 5.3-4.1 12-6.6 19.2-6.6 17.5 0 31.8 14.5 31.8 32.2 0 11.2-5.6 21-14 26.8z"}},{"tag":"path","attr":{"d":"M320.5 357.9c-.2.2-24.2 24.2-64.5 24.4-40.9-.2-64.4-24.2-64.6-24.4l-12.6 12.4c1.2 1.2 29.6 29.5 77.2 29.7 47.6-.2 75.9-28.5 77.1-29.7l-12.6-12.4z"}}]})(props);
};
function IoLogoRss (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M119.9 336.1c-30.8 0-55.9 25.1-55.9 55.8 0 30.8 25.1 55.6 55.9 55.6 30.9 0 55.9-24.9 55.9-55.6 0-30.7-25-55.8-55.9-55.8z"}},{"tag":"path","attr":{"d":"M64 192v79.9c48 0 94.1 14.2 128 48.1 33.9 33.9 48 79.9 48 128h80c0-139.9-116-256-256-256z"}},{"tag":"path","attr":{"d":"M64 64v79.9c171 0 303.9 133 303.9 304.1H448C448 236.3 276 64 64 64z"}}]})(props);
};
function IoLogoSass (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M511.784 329.108c-1.67-13.599-9.236-24.146-20.795-32.416 2.857 2.04 5.275 3.766-.055-.041-7.189-5.131-3.38-2.411-.047-.032-28.5-20.301-65.676-15.789-96.733-4.511-12.447-20.295-12.987-35.783-5.816-57.937.929-2.8.295-4.354-2.624-5.604-7.086-3.03-17.291-1.427-24.422.463-2.462.646-4.254 1.9-4.8 4.381-5.154 24.243-21.009 46.448-34.828 66.886-9.731-18.652-8.96-33.087-2.414-52.516.798-2.366.431-3.624-1.937-4.879-7.26-3.757-18.401-1.912-25.8.276-8.509 2.482-21.29 44.594-25.372 52.946-8.531 17.442-16.091 44.665-30.585 58.502-12.3-15.807 22.526-51.517 10.882-65.851-3.938-4.848-11.063-4.723-15.586-.616 1.085-7.608 1.648-12.609-.32-19.063-2.081-6.79-7.361-10.687-15.09-10.49-17.995.527-33.843 13.815-44.641 26.397-10.277 12.105-37.381 19.627-51.953 26.927-25.032-21.807-79.221-44.947-80.632-82.081-1.528-41.846 48.319-70.245 81.597-87.228 43.28-22.104 109.961-49.608 159.138-25.436 13.049 6.414 18.299 20.171 14.707 33.348-9.368 34.366-47.198 57.293-80.103 67.807-16.189 5.175-33.969 9.027-51.1 8.026-22.955-1.343-40.83-15.224-43.281-16.086-2.049-.389-1.888 2.261-1.347 3.664 23.816 62.433 144.417 16.681 175.956-15.371 15.189-15.421 24.413-30.365 28.351-53.894 4.616-27.583-15.634-44.842-31.004-51.957-77.918-36.072-185.636 11.168-244.553 59.327-25.568 20.901-57.552 54.11-42.874 88.946 15.93 37.805 64.736 57.19 96.503 80.312-25.704 12.773-57.862 25.983-74.518 49.933-9.524 13.729-12.903 28.359-5.811 43.966 12.572 27.568 58.285 15.622 77.573 3.471 17.67-11.13 29.563-26.07 34.7-45.228 4.455-16.609 3.541-33.866-3.856-49.512l28.585-14.458c-7.697 23.076-11.097 52.003 4.881 72.855 6.402 8.338 23.017 8.675 29.817.311 8.816-10.943 14.664-24.655 20.503-37.206-.682 9.373-1.856 19.996 1.377 28.165 3.71 9.373 12.126 11.291 20.792 5.343 26.52-18.203 43.398-68.652 56.463-98.062 3.552 12.829 7.473 24.548 13.957 36.376 1.602 2.903 1.407 4.774-.796 7.195-9.685 10.675-32.826 28.479-35.069 42.899-.524 3.371 1.713 6.599 5.686 7.37 15.573 3.108 32.838-2.531 45.482-11.078 13.188-8.922 17.446-21.087 14.245-35.515-4.576-20.771 10.993-43.98 25.801-61.03 2.719 12.908 6.816 25.331 14.143 36.606-13.075 11.483-32.58 27.764-29.779 46.939.988 6.865 7.135 11.301 14.514 9.736 15.783-3.324 29.416-10.113 39.37-22.146 9.023-10.855 5.792-22.701 1.856-34.635 23.872-6.815 48.022-8.177 71.831-.027 11.495 3.91 20.755 10.5 26.248 20.818 6.726 12.644 2.939 24.292-10.05 32.604-3.287 2.104-5.562 3.833-4.45 4.743 1.112.911 4.9 2.113 13.284-3.152 8.384-5.267 13.51-12.383 14.823-21.725a37.09 37.09 0 0 0-.024-7.755zm-398.838 25.259c-1.358 16.673-9.636 30.193-23.175 41.114-7.617 6.158-17.102 11.176-26.52 12.092-9.418.917-16.751-1.461-17.378-11.23-1.764-27.493 40.923-54.424 64.625-62.533 2.02 6.86 3.011 13.666 2.432 20.587l.016-.03zm103.102-72.453c-3.903 22.309-14.83 62.347-32.314 78.336-2.356 2.143-4.61 2.018-5.809-.771-10.345-24.059 3.671-73.669 33.082-81.328 3.457-.889 5.602.582 5.041 3.763zm70.311 81.768c8.422-8.962 16.834-17.916 25.269-26.927 1.043 10.021-17.571 29.964-25.269 26.927zm80.714-17.696c-2.348 1.273-7.621 2.515-7.827.835-1.482-12.085 11.816-24.874 20.067-30.867 4.453 11.343-.818 23.834-12.24 30.032z"}}]})(props);
};
function IoLogoSkype (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M436.9 296.8c2.8-12.5 4.2-25.4 4.2-38.7 0-99.7-82-180.6-183.2-180.6-10.7 0-21.1.9-31.3 2.6C210.3 69.9 191 64 170.2 64 111.6 64 64 110.9 64 168.7c0 19.4 5.3 37.5 14.6 53-2.4 11.7-3.7 23.9-3.7 36.3 0 99.8 82 180.6 183.1 180.6 11.5 0 22.7-1 33.5-3 15 7.9 32.1 12.4 50.2 12.4 58.7 0 106.2-46.9 106.2-104.7.1-16.7-3.9-32.5-11-46.5zm-85 47.5c-8.5 11.8-21 21.2-37.2 27.8-16.1 6.6-35.3 9.9-57.3 9.9-26.3 0-48.3-4.6-65.6-13.6-12.3-6.6-22.4-15.4-30.2-26.4-7.8-11-11.7-22-11.7-32.6 0-6.6 2.6-12.3 7.6-17.1 5-4.6 11.5-7 19.1-7 6.3 0 11.7 1.8 16.1 5.5 4.2 3.5 7.8 8.7 10.7 15.5 3.3 7.3 6.8 13.5 10.6 18.4 3.6 4.7 8.7 8.6 15.3 11.7 6.7 3.1 15.6 4.7 26.6 4.7 15.1 0 27.5-3.2 36.8-9.5 9.2-6.1 13.6-13.5 13.6-22.5 0-7.1-2.3-12.7-7.1-17.1-5-4.6-11.5-8.2-19.6-10.6-8.3-2.6-19.6-5.3-33.6-8.2-19-4-35.1-8.8-48-14.2-13.1-5.5-23.7-13.2-31.5-22.7-7.9-9.7-11.8-21.9-11.8-36.2 0-13.7 4.2-25.9 12.4-36.5 8.2-10.5 20.1-18.7 35.6-24.3 15.2-5.6 33.3-8.4 53.7-8.4 16.4 0 30.7 1.9 42.7 5.5 12.1 3.7 22.2 8.7 30.3 14.9 8 6.2 14 12.8 17.8 19.7 3.8 7 5.7 13.9 5.7 20.6 0 6.4-2.5 12.3-7.5 17.4-5 5.1-11.3 7.8-18.8 7.8-6.8 0-12.1-1.6-15.8-4.8-3.4-3-7-7.6-10.9-14.3-4.6-8.5-10.1-15.3-16.4-20.1-6.2-4.6-16.4-7-30.6-7-13.1 0-23.8 2.6-31.7 7.7-7.6 4.9-11.3 10.6-11.3 17.3 0 4.1 1.2 7.5 3.7 10.5 2.6 3.1 6.2 5.9 10.9 8.2 4.8 2.4 9.8 4.3 14.7 5.6 5.1 1.4 13.6 3.5 25.3 6.1 14.9 3.1 28.5 6.7 40.5 10.4 12.2 3.9 22.7 8.6 31.3 14.1 8.8 5.6 15.7 12.9 20.7 21.5 4.9 8.6 7.4 19.4 7.4 31.8.4 15.1-3.9 28.7-12.5 40.5z"}}]})(props);
};
function IoLogoSlack (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M213.6 236.216l64.003-21.438 20.708 61.823-64.004 21.438z"}},{"tag":"path","attr":{"d":"M213.6 236.216l64.003-21.438 20.708 61.823-64.004 21.438z"}},{"tag":"path","attr":{"d":"M475.9 190C426.4 25 355-13.4 190 36.1S-13.4 157 36.1 322 157 525.4 322 475.9 525.4 355 475.9 190zm-83.3 107.1l-31.1 10.4 10.7 32.2c4.2 13-2.7 27.2-15.7 31.5-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.6-6.9-23-16.9l-10.7-32.2-64.1 21.5L261 377c4.2 13-2.7 27.2-15.7 31.5-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.6-6.9-23-16.9L203 360.4l-31 10.3c-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.6-6.9-23-16.9-4.2-13 2.7-27.2 15.7-31.5l31.1-10.4-20.7-61.8-31.1 10.4c-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.6-6.9-23-16.9-4.2-13 2.7-27.2 15.7-31.5l31.1-10.4-10.9-32.1c-4.2-13 2.7-27.2 15.7-31.5 13-4.2 27.2 2.7 31.5 15.7l10.7 32.2 64.1-21.5-10.7-32.2c-4.2-13 2.7-27.2 15.7-31.5 13-4.2 27.2 2.7 31.5 15.7l10.7 32.2 31.1-10.4c13-4.2 27.2 2.7 31.5 15.7 4.2 13-2.7 27.2-15.7 31.5l-31.1 10.4 20.7 61.8 31.1-10.4c13-4.2 27.2 2.7 31.5 15.7 4.2 13.2-2.7 27.4-15.8 31.7z"}}]})(props);
};
function IoLogoSnapchat (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M495.998 360.389l-.189-14.501-14.398-1.278c-15.413-1.396-43.8-7.219-54.301-16.9-16.281-15.011-35.688-36.199-35.688-51.893 0-1.014 0-2.546 4.15-5.186 4.985-3.174 12.589-5.584 19.297-7.71 5.217-1.654 10.144-3.217 14.394-5.236 9.236-4.39 18.498-15.978 17.471-28.807-1.215-15.166-14.424-27.046-30.072-27.046-4.021 0-8.068.76-12.027 2.259-8.027 3.041-13.743 4.41-17.705 4.962.747-9.319 1.791-20.12 3.211-30.67 5.111-37.948-5.281-73.509-29.264-101.042C335.498 48.208 297.376 32 256.283 32H256c-41.093 0-79.215 16.208-104.591 45.341-23.982 27.534-34.375 63.345-29.265 101.292 1.416 10.51 2.46 21.231 3.21 30.618-3.97-.559-9.686-1.998-17.703-5.034-3.965-1.502-8.017-2.295-12.043-2.295-15.641-.001-28.844 11.852-30.057 27.003-1.027 12.818 8.235 24.393 17.47 28.783 4.251 2.02 9.181 3.578 14.4 5.232 6.707 2.125 14.309 4.532 19.293 7.703 4.147 2.639 4.147 4.168 4.147 5.182 0 8.66-6.191 24.691-35.688 51.888-10.499 9.681-39.055 15.501-54.588 16.897l-14.572 1.311L16 360.603c0 1.679.312 10.546 6.485 20.319 5.246 8.306 16.073 19.283 37.863 24.407a1139.713 1139.713 0 0 0 15.208 3.454c2.306.512 4.555 1.01 6.454 1.453l.081.623c.9 7.004 1.611 12.535 4.392 17.75 2.453 4.6 8.574 12.316 22.015 12.316 2.478 0 5.249-.246 8.472-.751 1.672-.263 3.386-.554 5.2-.863 7.116-1.212 15.182-2.587 23.451-2.587 10.277 0 18.732 2.188 25.846 6.688 4.531 2.867 8.892 5.972 13.509 9.26C202.967 465.481 223.358 480 256 480c32.726 0 53.293-14.582 71.439-27.446 4.576-3.244 8.898-6.309 13.377-9.142 7.113-4.5 15.568-6.688 25.846-6.688 8.27 0 16.334 1.375 23.449 2.586 1.814.311 3.529.602 5.202.864 3.223.505 5.993.751 8.472.751 13.44 0 19.562-7.715 22.015-12.313 2.781-5.214 3.492-10.746 4.392-17.749l.082-.629c1.898-.441 4.148-.941 6.455-1.452 4.023-.892 9.029-2.001 15.206-3.454 21.851-5.139 32.611-16.17 37.79-24.518 6.097-9.828 6.296-18.736 6.273-20.421zM208 128c8.836 0 16 10.745 16 24s-7.164 24-16 24-16-10.745-16-24 7.164-24 16-24zm103.615 77.698C296.368 220.725 276.617 229 256 229c-20.838 0-40.604-8.29-55.657-23.343a8 8 0 1 1 11.313-11.313C223.688 206.374 239.436 213 256 213c16.387 0 32.15-6.64 44.385-18.698a8 8 0 0 1 11.23 11.396zM304 176c-8.836 0-16-10.746-16-24s7.164-24 16-24 16 10.746 16 24-7.164 24-16 24z"}}]})(props);
};
function IoLogoSteam (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M478.8 208.2c0 19.8-16.1 36-36 36-19.8 0-36-16.1-36-36 0-19.8 16.1-36 36-36 19.8 0 36 16.2 36 36zM442.6 139c-38.1 0-69 30.7-69.4 68.7l-43.2 62c-1.8-.2-3.6-.3-5.4-.3-9.7 0-18.7 2.7-26.4 7.3L102.4 198c-5.1-23.2-25.9-40.7-50.6-40.7C23.3 157.2 0 180.6 0 209.1s23.3 51.8 51.8 51.8c9.7 0 18.7-2.7 26.4-7.3L274 332.2c5.1 23.3 25.8 40.8 50.6 40.8 26.8 0 49-20.6 51.5-46.7l66.5-48.6c38.3 0 69.4-31 69.4-69.3S480.9 139 442.6 139zm0 22.9c25.7 0 46.5 20.9 46.5 46.5 0 25.7-20.9 46.4-46.5 46.4-25.7 0-46.5-20.8-46.5-46.4 0-25.7 20.8-46.5 46.5-46.5zm-390.8 9c14.6 0 27.3 8.2 33.7 20.2l-18.9-7.6v.1c-15.3-5.5-32.2 2-38.3 17.1-6.1 15.2.9 32.3 15.7 38.9v.1l16.1 6.4c-2.6.6-5.4.9-8.2.9-21.1 0-38.1-17-38.1-38.1-.1-20.9 16.9-38 38-38zm272.8 112.2c21.1 0 38.1 17 38.1 38.1s-17 38.1-38.1 38.1c-14.7 0-27.4-8.2-33.7-20.3 6.3 2.5 12.5 5 18.8 7.6 15.5 6.2 33.2-1.3 39.4-16.8 6.2-15.5-1.3-33.1-16.9-39.4l-15.9-6.4c2.8-.5 5.5-.9 8.3-.9z"}}]})(props);
};
function IoLogoTumblr (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M321.2 396.3c-11.8 0-22.4-2.8-31.5-8.3-6.9-4.1-11.5-9.6-14-16.4-2.6-6.9-3.6-22.3-3.6-46.4V224h96v-64h-96V48h-61.9c-2.7 21.5-7.5 44.7-14.5 58.6-7 13.9-14 25.8-25.6 35.7-11.6 9.9-25.6 17.9-41.9 23.3V224h48v140.4c0 19 2 33.5 5.9 43.5 4 10 11.1 19.5 21.4 28.4 10.3 8.9 22.8 15.7 37.3 20.5 14.6 4.8 31.4 7.2 50.4 7.2 16.7 0 30.3-1.7 44.7-5.1 14.4-3.4 30.5-9.3 48.2-17.6v-65.6c-20.9 13.7-41.8 20.6-62.9 20.6z"}}]})(props);
};
function IoLogoTux (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M426.3 396c-6.7-4-13.2-11-12-18.8 2.3-15.3 2.5-21.5-.2-25.8-1.9-3.2-5.5-5-8.6-5.8 2-2.5 3.1-5.4 3.8-10.9 1.3-10-4.7-41-12.7-65.7s-29.9-50-44.7-68c-26-31.8-22.8-39.2-26.3-99.7C323.4 62.8 306.3 32 256 32s-67 32-67 59c0 28.7 2 51 2 51 1.3 33.4 1 39.4-8 55.3-4.9 8.7-27 30-35.7 44.7s-7.6 29.5-24.6 52.8c-12.4 17-13.8 28.4-9.7 44-7 8.2-3.6 19.9-5 24.9-2.6 8.7-13.7 10.3-22.3 11s-15.3 0-18.7 5.3.7 16 4.3 30-7.3 15-7.3 31 30 16 59.7 22.7 40.7 16.3 56 16.3 26.8-10.2 38-19.3c7.2-5.9 29-3.7 42.3-3.7s34.3-.6 45.7 2.4S317 480 345 480s34.7-20.7 61-34.3 42-20 42-29.7-15-16-21.7-20zm-226.5 55.5c-1.3 13-12.6 17.1-24.1 16.1-13-1.1-29-7.6-44.1-12.1s-35.5-7.5-49-9.9c-15.3-2.7 0-13.6-.2-34.2-.1-8-7.1-19.4-4.2-24.7s17.3-2.4 22.3-3.8 12.7-5.7 15.3-11.9c1.4-3.4 1.8-17.7 2.9-22.8 1.1-4.9 7.9-7.2 22.2.1s28.9 38.1 42.3 59.8 17.9 30.4 16.6 43.4zm118.5-65.8c2 10.3 3.2 24.5.7 36.3s-7 15.5-10.7 23c-2.2-6.8 5.3-13.8 4.4-30.8-.5-9.5-.8-7.8-11.5 1.8-12.2 10.8-27.6 20.1-53 22.5-21 2-32.5-8.3-32.5-8.3 5 16-4.3 24.7-4.3 24.7.3-3.7.8-14.3-2.5-21.6-4-9-9.3-18.7-9.3-18.7s8.6-2.7 11.6-10 2-17.3-8.7-27.7-52.5-37.6-55.9-42.1c-4.9-6.5-6.7-10.2-7-23.2s5.4-24.8 4.3-20.3c-.8 3.2.1 6.8.1 19.8s7.6 23.3 13.9 25c9.5 2.6 2-26.1 8-53.1s11.7-32.8 19.2-43.8 19.2-20.5 17-43.1-.1-20.1 5.1-11.8c4 6.5 13.3 24 24.7 22 19.4-3.3 43.9-24.6 47.6-28.2 3.7-3.6.7-7.1-2.3-5.8-15.5 6.7-44.3 21.5-51.5 18.2s-18.1-20.6-16.8-19.5c15.4 13.6 19.9 11.1 26.4 9 8.4-2.8 12.8-4.3 28.5-11.3s20.7-5.3 22.3-8.7-.4-6.7-4.7-5.7c-6.4 1.5-3.4 5.1-22.7 12.3-25.3 9.5-33.3 10.3-44 3-8.6-5.9-15-12.7-15-16.7s8.3-8.3 12.3-11.3 12.3-10.9 12.3-10.9 1-7.2-.6-12.7c-1.9-6.5-7.8-9.3-11.9-8.1-4.1 1.1-8 5.5-6.8 14.8 1 8.3 7 11 7 11s-2.7 3.5-5.2 4.7c0 0-.8-.3-3.5-6.3s-6.6-19.5-.3-31.1 19.6-5.2 23.8 3.8c3.9 8.3 2.4 22.7 2.4 22.7 6-2.2 13-2 21 3.5-7.1-29.8 9.5-41.1 22-41.1s22.3 9.6 22.3 25c0 12-3.5 18.2-6.9 22-4.1-.5-8.2-1.5-6.3-3.4 1.3-1.4 4.4-5.7 4.4-13.2s-5.9-13.7-13.7-13.7c-9.2 0-12.6 8.3-13.7 13s-.4 8.6-.2 10.4c.6 5 10.9 9.6 23.9 12.9s11.3 9 8.3 25.3 6.3 18.3 14.3 33.8 5.7 21.8 15.9 35.2 19 47.8 16.4 76.8c-.9 10.5-3.9 10.2 7.3 6.7 5.6-1.7 12-2.7 12-2.7 3.1-6.3 3.4-16.3 3.5-22.3.2-13.5.7-41.5-26.7-71.5 0 0 29.5 21.7 34 62 2.5 22.3-2 32.4-2 32.4 5.3 1.3 9.8 7.3 12.6 11.8 3.7 6.1-3.9-5.8-20-5.8-8.5 0-15.3 3.9-18.5 7.9s-3.1 7.6-3.2 11.7c-7.1-1.2-12.4 0-16.8 4.9-5.6 7-2.8 24.2-.8 34.6zm90.1 47.2c-24.1 10.4-32.7 23.5-47.7 31.5s-27.7 2.3-33.7-8 10.4-28.2 4.7-59.6c-4.4-24.2-6.3-31-4.9-36.8 1.4-5.5 9.4-4.4 11.5-3.9 1.3 5.4 6.7 19.5 27 19.5 0 0 23.2 2.6 32.7-21.2 0 0 5.7-.2 7.2 3.5 2.3 5.8-2.9 16.5-2.8 21.3.3 15.7 11.7 21.1 28.4 32 8.2 5.6 2.1 11.1-22.4 21.7z"}}]})(props);
};
function IoLogoTwitch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M80 32l-32 80v304h96v64h64l64-64h80l112-112V32H80zm336 256l-64 64h-96.001L192 416v-64h-80V80h304v208z"}},{"tag":"path","attr":{"d":"M320 143h48v129h-48zM208 143h48v129h-48z"}}]})(props);
};
function IoLogoTwitter (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"}}]})(props);
};
function IoLogoUsd (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M411.387 303.256c-3.119-9.577-7.891-18.561-14.301-26.952-6.422-8.382-14.396-15.826-23.93-22.331-9.539-6.498-20.721-11.63-33.553-15.4-5.143-1.363-14.189-3.506-26.104-6.418-8.516-2.074-16.5-4.2-25.5-6.367V120.065c9 2.396 15.252 6.202 21.926 10.43C324.204 139.535 333.157 155 335.78 176h69.174c-.654-18-4.65-32.76-11.996-46.02-8.07-14.543-18.977-27.024-32.73-36.956-13.75-9.922-30.225-17.49-48.377-22.455C303.967 68.416 297 66.605 288 65.386V32h-64v33.167c-7 1.044-15.148 2.445-22.426 4.25-17.242 4.283-32.388 10.868-45.951 19.764-13.571 8.905-24.352 20.112-32.604 33.627-8.251 13.523-12.312 29.52-12.312 48 0 9.585 1.407 18.993 4.157 28.235 2.752 9.241 7.442 17.967 14.042 26.181 6.603 8.214 15.495 15.658 26.687 22.332 11.183 6.672 24.705 12.064 41.576 16.171 9.287 2.345 18.83 4.534 26.83 6.576v119.586c-11-2.919-21.889-7.399-30.678-13.479-9.17-6.327-16.066-13.953-21.198-23.884-4.779-9.229-7.073-20.526-7.407-32.526H96c.695 21 5.25 39.494 13.672 55.371 8.799 16.604 20.533 29.96 35.204 40.562 14.662 10.613 31.393 18.356 51.198 23.491 8.885 2.304 18.926 3.96 27.926 5.23V480h64v-34.54c10-1.069 18.957-2.69 28.527-4.879 18.701-4.273 35.645-11.036 50.316-20.276 14.662-9.24 26.621-21.128 35.611-35.681 8.98-14.541 13.545-32.085 13.545-52.619.001-9.578-1.501-19.164-4.612-28.749zM224 209.699c-12-3.743-23.912-9.088-32.051-16.048-8.621-7.355-12.673-17.534-12.673-30.545 0-9.241 2.414-16.94 7.004-23.102 4.58-6.161 9.912-11.038 16.88-14.631 6.18-3.189 13.84-5.565 20.84-7.138v91.464zm118.902 149.772c-2.939 6.673-7.699 12.576-14.303 17.711-6.602 5.133-15.744 9.328-26.377 12.577-4.5 1.378-8.223 2.444-14.223 3.236v-107.11c10 2.624 18.18 5.332 26.326 8.131 8.062 2.744 15.748 7.443 22.537 14.116 6.785 6.676 10.309 17.03 10.309 31.06.001 6.85-1.337 13.605-4.269 20.279z"}}]})(props);
};
function IoLogoVimeo (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M476.9 114c-5-23.4-17.5-38.8-40.6-46.3s-64.9-4.5-94.1 16.8c-29.9 21.8-47.6 59.7-53.8 83.8 14.7-6.3 24-7.7 39-6.9s24.5 12 24.9 25.3c.3 9.8-.2 18.7-3.6 27.7-10.8 28.7-27.7 56.5-47.6 80.8-2.9 3.6-6.4 6.9-10 9.9-10.2 8.3-18.8 6.1-25.4-5.2-5.4-9.3-9-18.9-12.2-29.1-12.4-39.7-16.8-80.9-23.8-121.6-3.3-19.5-7-39.8-18-56.9-11.6-17.8-28.6-24.6-50-22-14.7 1.8-36.9 17.5-47.8 26.4 0 0-56 46.9-81.8 71.4l21.2 27s17.9-12.5 27.5-18.3c5.7-3.4 12.4-4.1 17.2.2 4.5 3.9 9.6 9 12.3 14.1 5.7 10.7 11.2 21.9 14.7 33.4 13.2 44.3 25.5 88.7 37.8 133.3 6.3 22.8 13.9 44.2 28 63.6 19.3 26.6 39.6 32.7 70.9 21.5 25.4-9.1 46.6-26.2 66-43.9 33.1-30.2 59.1-65.4 85.5-101.2 20.4-27.7 37.3-55.7 51.4-87 13.9-31 19.4-63.5 12.3-96.8z"}}]})(props);
};
function IoLogoVk (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M427 299.1c-8.6-8-15.7-12.8-18.5-20.5-1-2.7-1.3-4.3-1-7.6.4-6 5.5-13.8 39.6-58.9 14.2-18.8 32.7-41.5 32.7-58.5 0-11-4.5-13.7-20.8-13.7h-74c-6.5 0-10.9 8.9-13.6 16.4-2.8 7.5-8.2 19-21.4 43.8-13.8 26-32.3 48.8-40 52.4-2.2 1-3.6 1-5.5.8-1.2-.1-3.8-.8-6.2-3.7-2.3-2.8-5.9-7.7-4.5-53.9.8-25.8 3.7-43.8-1.7-54.8-1.1-2.2-3.5-4.5-4.8-5.5-7.7-5.5-29.4-7.5-48-7.5s-32.9 2.1-40 4.2c-7.1 2.1-15.1 6.9-18.9 12-2.5 3.3 4.3 1.6 10.9 4.6 4 1.8 9.3 4.6 11.2 9.3 8 20.8 9.7 37.3 5.3 66.7-1.1 7.2-2.3 18.5-6.6 25.5-2.4 3.9-7.9 3.6-9.5 3.1-16.1-4.9-28.6-26-41.2-50.7-13.1-25.8-19.8-43.9-23.4-51.3s-9.1-11.4-18.4-11.4H42.3c-5.2 0-9.9 4.3-9.9 9 0 11 18.6 43 29.8 66 20.2 41.4 46.7 81.4 82.4 120.2C182 376.3 233 384 249.3 384s29-.6 33.3-1.5c2-.4 4.1-1.3 5.7-2.5 7.1-5.5 5.8-16 6.3-24.2.5-8.4 1.4-19.5 7-26 5.2-6.1 11.1-7.8 18.6-4.1 7 3.5 12 9.4 17.2 15.1 10.1 10.9 19.3 23.2 31.3 32.2 5.5 4.1 11.5 6.7 17.9 8.7 8.5 2.6 16.5 2.7 25.3 2.3 9.7-.4 17-.3 29-.3s27.7.5 33.1-3.5c2.6-2 6-5 6-11.3 0-11.9-12.2-31.7-53-69.8z"}}]})(props);
};
function IoLogoWhatsapp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"}}]})(props);
};
function IoLogoWindows (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M480 265H232v179l248 36V265zM216 265H32v150l184 26.7V265zM480 32L232 67.4V249h248V32zM216 69.7L32 96v153h184V69.7z"}}]})(props);
};
function IoLogoWordpress (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M259 271.3L226.2 367h-.1l-25.4 73.1c1.8.5 3.5.9 5.3 1.4h.3c15.8 4.2 32.4 6.5 49.5 6.5 8.5 0 16.8-.5 24.9-1.8 11.2-1.4 22-3.8 32.5-7.1 2.6-.8 5.2-1.7 7.8-2.6-2.8-6-8.8-19.3-9.1-19.9L259 271.3zM80.8 180.5C70.8 203.1 64 230.9 64 256c0 6.3.3 12.6.9 18.8 6.9 71.2 52.9 131 116.1 157.9 2.6 1.1 5.3 2.2 8 3.2L96 180.6c-8-.3-9.5.2-15.2-.1z"}},{"tag":"path","attr":{"d":"M430.2 175.4c-4.3-9.3-9.4-18.2-15.1-26.6-1.6-2.4-3.4-4.8-5.1-7.2-21.5-28.8-50.8-51.4-84.9-64.6-21.4-8.4-44.8-13-69.2-13-60.3 0-114.2 28-149.4 71.7-6.5 8-12.3 16.6-17.5 25.6 14.2.1 31.8.1 33.8.1 18.1 0 46-2.2 46-2.2 9.4-.6 10.4 13.1 1.1 14.2 0 0-9.4 1.1-19.8 1.6L213 362l37.8-113.3-26.8-73.6c-9.4-.5-18.1-1.6-18.1-1.6-9.4-.5-8.2-14.8 1-14.2 0 0 28.5 2.2 45.5 2.2 18.1 0 46-2.2 46-2.2 9.3-.6 10.5 13.1 1.1 14.2 0 0-9.3 1.1-19.7 1.6l62.3 185.6 17.3-57.6c8.7-22.4 13.1-40.9 13.1-55.7 0-21.3-7.7-36.1-14.3-47.6-8.7-14.3-16.9-26.3-16.9-40.4 0-15.9 12-30.7 29-30.7h2.2c26.2-.7 34.8 25.3 35.9 43v.6c.4 7.2.1 12.5.1 18.8 0 17.4-3.3 37.1-13.1 61.8l-39 112.8-22.3 65.7c1.8-.8 3.5-1.6 5.3-2.5 56.7-27.4 98-82 106.7-146.7 1.3-8.5 1.9-17.2 1.9-26 0-28.9-6.4-56.3-17.8-80.8z"}}]})(props);
};
function IoLogoXbox (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M126.8 248.3c39.7-58.6 77.9-92.8 77.9-92.8s-42.1-48.9-92.8-67.4l-3.3-.8C61.7 128.4 32 188.7 32 256c0 50.7 16.9 97.5 45.2 135 0-4.4.6-70.3 49.6-142.7zM480 256c0-67.3-29.7-127.6-76.6-168.7l-3.2.9c-50.7 18.5-92.9 67.4-92.9 67.4s38.2 34.2 77.9 92.8c49 72.4 49.6 138.3 49.5 142.7C463.2 353.5 480 306.7 480 256zM201.2 80.9c29.3 13.1 54.6 34.6 54.6 34.6s25.5-21.4 54.8-34.6c36.8-16.5 64.9-11.3 72.3-9.5C346.8 46.6 303.1 32 256 32s-90.8 14.6-126.9 39.4c7.2-1.8 35.2-7.1 72.1 9.5zM358.7 292.9C312.4 236 255.8 199 255.8 199s-56.3 37-102.7 93.9c-39.8 48.9-54.6 84.8-62.6 107.8l-1.3 4.8c41 45.7 100.5 74.5 166.8 74.5s125.8-28.8 166.8-74.5l-1.4-4.8c-8-23-22.9-58.9-62.7-107.8z"}}]})(props);
};
function IoLogoXing (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M313.8 303.9L469 32H365L209.4 303.8c-.4.7-.4 1.1 0 1.7l98.9 173.8c.4.7.8.7 1.6.7H413l-99.3-174.7c-.2-.3-.1-1 .1-1.4zM221.9 216.2L163 113c-.5-.8-1-1-2-1H65l58.9 104.4c.1.2.2.6.1.8L43 352h96.8c.8 0 1.2-.2 1.6-.9l80.5-133.7c.1-.3.1-.9 0-1.2z"}}]})(props);
};
function IoLogoYahoo (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M384.6 68.4c-11.3 0-22.5-.8-32.6-4.4l-96 160-96-160c-10.1 3.6-20.7 4.4-32 4.4-11.1 0-22.1-.9-32-4.4l128 212.7V448c10-3.5 20.8-4.4 32-4.4s22 .9 32 4.4V277L416 64c-9.9 3.4-20.3 4.4-31.4 4.4z"}}]})(props);
};
function IoLogoYen (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M448 32h-80L256 253.128 144 32H64l112.368 208H128v48h73.564L216 319v17h-88v48h88v96h80v-96h88v-48h-88v-17l14.891-31H384v-48h-48.289L448 32z"}}]})(props);
};
function IoLogoYoutube (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M508.6 148.8c0-45-33.1-81.2-74-81.2C379.2 65 322.7 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.6-.1 220.2 0 255.8c-.1 35.6 1 71.2 3.4 106.9 0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8 60.8.2 120.3-1 178.6-3.8 40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107 .2-35.6-.9-71.2-3.3-106.9zM207 353.9V157.4l145 98.2-145 98.3z"}}]})(props);
};
function IoMdAddCircleOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M363 277h-86v86h-42v-86h-86v-42h86v-86h42v86h86v42z"}},{"tag":"path","attr":{"d":"M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422c-44.3 0-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256c0-44.3 17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}}]})(props);
};
function IoMdAddCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm107 229h-86v86h-42v-86h-86v-42h86v-86h42v86h86v42z"}}]})(props);
};
function IoMdAdd (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z"}}]})(props);
};
function IoMdAirplane (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M448 336v-40L288 192V79.2c0-17.7-14.8-31.2-32-31.2s-32 13.5-32 31.2V192L64 296v40l160-48v113.6l-48 31.2V464l80-16 80 16v-31.2l-48-31.2V288l160 48z"}}]})(props);
};
function IoMdAlarm (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M470 124.837l-98.443-81.78-27.814 32.931 98.442 81.769L470 124.837zM167.192 74.919L139.366 42 42 124.837l27.814 32.919 97.378-82.837zm99.509 97.709H234.6v127.446l101.649 60.539L352.3 334.06l-85.6-49.917V172.628zM256 87.665c-107 0-192.601 86.021-192.601 191.166C63.399 383.98 149 470 256 470c105.936 0 192.601-86.02 192.601-191.169 0-105.144-86.665-191.166-192.601-191.166zm0 339.855c-82.393 0-149.8-66.906-149.8-148.688 0-81.777 67.407-148.684 149.8-148.684 82.394 0 149.8 66.906 149.8 148.684 0 82.839-67.406 148.688-149.8 148.688z"}}]})(props);
};
function IoMdAlbums (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M154.7 464h266.7c23.5 0 42.7-19.2 42.7-42.7V154.7c0-23.5-19.2-42.7-42.7-42.7H154.7c-23.5 0-42.7 19.2-42.7 42.7v266.7c0 23.4 19.2 42.6 42.7 42.6z"}},{"tag":"path","attr":{"d":"M90.7 48h266.7c23.5 0 42.7 19.2 42.7 42.7V96H138.7C115.2 96 96 115.2 96 138.7V400h-5.3C67.2 400 48 380.8 48 357.3V90.7C48 67.2 67.2 48 90.7 48z"}}]})(props);
};
function IoMdAlert (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.6 48 48 141.601 48 256s93.6 208 208 208 208-93.601 208-208S370.4 48 256 48zm24 312h-48v-40h48v40zm0-88h-48V144h48v128z"}}]})(props);
};
function IoMdAmericanFootball (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M32 256c14.1 35 36.2 66 64 90.6V165.4C68.2 190 46.1 221 32 256zM480 256c-14.1-35-36.2-66-64-90.6v181.2c27.8-24.6 49.9-55.6 64-90.6z"}},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M256 105c-47.1 0-91 13.4-128 36.5v228.9c37 23.1 80.9 36.5 128 36.5s91-13.4 128-36.5V141.5c-37-23.1-80.9-36.5-128-36.5zm96 135v64h-32v-32h-48v32h-32v-32h-48v32h-32v-96h32v32h48v-32h32v32h48v-32h32v32z"}}]}]})(props);
};
function IoMdAnalytics (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M379.4 178.3l-87.2 133.4C299 320 303 330.5 303 342c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-3 .3-6 .8-8.9l-57.6-33.5c-8.6 8.3-20.3 13.4-33.3 13.4-8.6 0-16.6-2.3-23.6-6.2L32 364.2v57.2c0 23.5 19.2 42.7 42.7 42.7h362.7c23.5 0 42.7-19.2 42.7-42.7V208.8l-58.6-38.9c-8.1 6.3-18.3 10.1-29.4 10.1-4.4 0-8.7-.6-12.7-1.7z"}},{"tag":"path","attr":{"d":"M117 217c26.5 0 48 21.5 48 48 0 2.1-.2 4.2-.4 6.2l60.1 33.6c8.3-6.8 18.8-10.8 30.4-10.8 3.6 0 7.1.4 10.4 1.1l87.4-135.4c-5.6-7.8-8.9-17.4-8.9-27.8 0-26.5 21.5-48 48-48s48 21.5 48 48c0 3.9-.5 7.7-1.3 11.3l41.3 27.6V90.7c0-23.5-19.2-42.7-42.7-42.7H74.7C51.2 48 32 67.2 32 90.7V320l40-38.3c-1.9-5.2-3-10.8-3-16.7 0-26.5 21.5-48 48-48z"}}]})(props);
};
function IoMdAperture (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 32C132.288 32 32 132.288 32 256s100.288 224 224 224 224-100.288 224-224S379.712 32 256 32zm135.765 359.765C355.5 428.028 307.285 448 256 448s-99.5-19.972-135.765-56.235C83.972 355.5 64 307.285 64 256s19.972-99.5 56.235-135.765C156.5 83.972 204.715 64 256 64s99.5 19.972 135.765 56.235C428.028 156.5 448 204.715 448 256s-19.972 99.5-56.235 135.765z"}},{"tag":"path","attr":{"d":"M200.043 106.067c-40.631 15.171-73.434 46.382-90.717 85.933H256l-55.957-85.933zM412.797 288A160.723 160.723 0 0 0 416 256c0-36.624-12.314-70.367-33.016-97.334L311 288h101.797zM359.973 134.395C332.007 110.461 295.694 96 256 96c-7.966 0-15.794.591-23.448 1.715L310.852 224l49.121-89.605zM99.204 224A160.65 160.65 0 0 0 96 256c0 36.639 12.324 70.394 33.041 97.366L201 224H99.204zM311.959 405.932c40.631-15.171 73.433-46.382 90.715-85.932H256l55.959 85.932zM152.046 377.621C180.009 401.545 216.314 416 256 416c7.969 0 15.799-.592 23.456-1.716L201.164 288l-49.118 89.621z"}}]})(props);
};
function IoMdApps (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M96 176h80V96H96v80zm120 240h80v-80h-80v80zm-120 0h80v-80H96v80zm0-120h80v-80H96v80zm120 0h80v-80h-80v80zM336 96v80h80V96h-80zm-120 80h80V96h-80v80zm120 120h80v-80h-80v80zm0 120h80v-80h-80v80z"}}]})(props);
};
function IoMdAppstore (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M464 152H360c0-57-46.562-103.859-104-103.859S152 95 152 152H48c18.688 216 13 312 13 312h389.999c-.001 0-5.688-98 13.001-312zM256 74.105c43.008 0 77.999 34.895 77.999 77.895H178c0-43 34.991-77.895 78-77.895zM204 397.64V228.867l142.999 84.387L204 397.64z"}}]})(props);
};
function IoMdArchive (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M453.594 100.001l-32.353-39.299C415.469 52.627 405.083 48 394.664 48H117.335c-10.416 0-20.801 4.627-26.576 12.702l-32.351 39.299C51.468 106.923 48 117.335 48 128.886v288.89C48 443.2 68.8 464 94.225 464h323.553C443.202 464 464 443.2 464 417.775v-288.89c0-11.55-3.463-21.962-10.406-28.884zM256 383.109L128.89 256h80.89v-46.224h92.443V256h80.89L256 383.109zM96.534 94.221L115.02 71.11h277.331l21.965 23.111H96.534z"}}]})(props);
};
function IoMdArrowBack (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"}}]})(props);
};
function IoMdArrowDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M277.375 85v259.704l119.702-119.702L427 256 256 427 85 256l29.924-29.922 119.701 118.626V85h42.75z"}}]})(props);
};
function IoMdArrowDropdownCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm0 272l-96-96h192l-96 96z"}}]})(props);
};
function IoMdArrowDropdown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M128 192l128 128 128-128z"}}]})(props);
};
function IoMdArrowDropleftCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M464 256c0-114.875-93.125-208-208-208S48 141.125 48 256s93.125 208 208 208 208-93.125 208-208zm-272 0l96-96v192l-96-96z"}}]})(props);
};
function IoMdArrowDropleft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M320 128L192 256l128 128z"}}]})(props);
};
function IoMdArrowDroprightCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 464c114.875 0 208-93.125 208-208S370.875 48 256 48 48 141.125 48 256s93.125 208 208 208zm-32-112V160l96 96-96 96z"}}]})(props);
};
function IoMdArrowDropright (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M192 128l128 128-128 128z"}}]})(props);
};
function IoMdArrowDropupCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M464 256c0-114.875-93.125-208-208-208S48 141.125 48 256s93.125 208 208 208 208-93.125 208-208zm-112 32H160l96-96 96 96z"}}]})(props);
};
function IoMdArrowDropup (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M128 320l128-128 128 128z"}}]})(props);
};
function IoMdArrowForward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"}}]})(props);
};
function IoMdArrowRoundBack (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"}}]})(props);
};
function IoMdArrowRoundDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M99.4 284.9l134 138.1c5.8 6 13.7 9 22.4 9h.4c8.7 0 16.6-3 22.4-9l134-138.1c12.5-12 12.5-31.3 0-43.2-12.5-11.9-32.7-11.9-45.2 0l-79.4 83v-214c0-16.9-14.3-30.6-32-30.6-18 0-32 13.7-32 30.6v214l-79.4-83c-12.5-11.9-32.7-11.9-45.2 0s-12.5 31.2 0 43.2z"}}]})(props);
};
function IoMdArrowRoundForward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"}}]})(props);
};
function IoMdArrowRoundUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M412.6 227.1L278.6 89c-5.8-6-13.7-9-22.4-9h-.4c-8.7 0-16.6 3-22.4 9l-134 138.1c-12.5 12-12.5 31.3 0 43.2 12.5 11.9 32.7 11.9 45.2 0l79.4-83v214c0 16.9 14.3 30.6 32 30.6 18 0 32-13.7 32-30.6v-214l79.4 83c12.5 11.9 32.7 11.9 45.2 0s12.5-31.2 0-43.2z"}}]})(props);
};
function IoMdArrowUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M277.375 427V167.296l119.702 119.702L427 256 256 85 85 256l29.924 29.922 119.701-118.626V427h42.75z"}}]})(props);
};
function IoMdAt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M265.6 212.3c-10.5 0-18.5 4.4-24 13.2-5.5 8.8-9.1 22-10.8 39.6-.9 11.7 0 20.5 2.7 26.5s7.1 9 13.1 9c5.5 0 10.3-1.5 14.6-4.4 4.3-2.9 8.1-8.3 11.3-16.2l6.1-66c-2.2-.5-4.4-.9-6.5-1.2-2.3-.4-4.4-.5-6.5-.5z"}},{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm127.8 201.9c-.9 21.4-7.6 39.9-20 55.6-12.4 15.6-31 23.4-55.6 23.4-8.2 0-15.3-2.2-21.2-6.6-6-4.4-10.2-10.7-12.6-18.8-4.1 8.3-9.4 14.5-15.7 18.6-6.3 4.1-13.7 6.2-22.2 6.2-15.1 0-26.6-5.8-34.6-17.3s-10.9-26.8-8.8-45.9c2.6-24.4 10-44 22.2-58.7 12.2-14.7 27-22 44.4-22 12.2 0 22.1 1.3 29.5 3.8 7.4 2.5 15.6 5.7 24.5 11l-.5-.1h.8l-7.7 83.4c-.5 8.5.1 14.6 1.7 17.8 1.7 3.2 3.9 4.9 6.7 4.9 11.3 0 20.4-5.1 27.2-15.6 6.8-10.5 10.6-23.6 11.4-39.6 1.6-33-5.1-58.7-20.2-77.1-15.1-18.4-38.3-27.7-69.7-27.7-30.5 0-54.8 9.9-72.8 29.8s-27.7 46.9-29.3 81.2c-1.7 33.4 5.6 59.8 21.9 79.1 16.3 19.4 39.7 29.1 70.3 29.1 8.5 0 17.3-.9 26.5-2.7 9.1-1.8 17.1-4.1 23.7-6.8l5.8 24.2c-6.8 4.1-15.4 7.3-25.9 9.6-10.5 2.3-20.7 3.4-30.7 3.4-40.8 0-72.3-12.1-94.3-36.4-22-24.2-32.2-57.4-30.5-99.6 1.8-41.8 14.9-74.9 39.1-99.4 24.3-24.5 56.5-36.7 96.7-36.7 39.5 0 69.8 11.6 90.7 34.7 21.2 23.2 30.8 54.9 29.2 95.2z"}}]})(props);
};
function IoMdAttach (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M341.334 128v234.666C341.334 409.604 302.938 448 256 448c-46.937 0-85.333-38.396-85.333-85.334V117.334C170.667 87.469 194.135 64 224 64c29.864 0 53.333 23.469 53.333 53.334v245.333c0 11.729-9.605 21.333-21.334 21.333s-21.333-9.604-21.333-21.333V160h-32v202.667C202.667 392.531 226.135 416 256 416c29.865 0 53.334-23.469 53.334-53.333V117.334C309.334 70.401 270.938 32 224 32s-85.334 38.401-85.334 85.334v245.332C138.667 427.729 190.938 480 256 480c65.062 0 117.334-52.271 117.334-117.334V128h-32z"}}]})(props);
};
function IoMdBackspace (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M433.5 96H167.2c-12.2 0-21.8 6.2-28.2 15.6L43 256l96 144.2c6.4 9.4 16 15.8 28.2 15.8h266.2c19.5 0 35.5-16 35.5-35.6V131.6C469 112 453 96 433.5 96zm-53.3 223.8l-25 25.1-63.7-63.8-63.7 63.8-25-25.1 63.7-63.8-63.7-63.8 25-25.1 63.7 63.8 63.7-63.8 25 25.1-63.7 63.8 63.7 63.8z"}}]})(props);
};
function IoMdBarcode (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M88 128h48v256H88zM232 128h48v256h-48zM160 144h48v224h-48zM304 144h48v224h-48zM376 128h48v256h-48z"}},{"tag":"path","attr":{"d":"M104 104V56H16v400h88v-48H64V104zM408 56v48h40v304h-40v48h88V56z"}}]})(props);
};
function IoMdBaseball (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M365.9 402.6L343 416.1l-16-28 20.2-11.9c-5.2-8.5-9.8-17.4-13.9-26.7-1.4-3.1-2.7-6.3-3.9-9.5l-25.1 5.8-7.1-31.6 22.6-5.2c-2.8-12.1-4.7-24-5.5-37H290v-32h24.3c.8-12 2.7-24.8 5.5-36.8l-22.6-5.2 7.1-31.6 25.1 5.8c1.3-3.2 2.6-6.4 4-9.6 4.1-9.2 8.7-18.1 13.8-26.6L327 124.1l16-28 22.8 13.5c5.2-6.4 10.8-12.5 16.7-18.3C347.4 64.1 303.5 48 256 48s-91.4 16.1-126.5 43.2c5.9 5.8 11.5 12 16.7 18.3L169 96.1l16 28-20.2 11.9c5.1 8.5 9.8 17.4 13.8 26.6 1.4 3.2 2.7 6.4 4 9.6l25.1-5.8 7.1 31.6-22.6 5.2c2.8 12.1 4.6 24.8 5.5 36.8H222v32h-24.3c-.8 13-2.7 24.9-5.5 37l22.6 5.2-7.1 31.6-25.1-5.8c-1.2 3.2-2.5 6.3-3.9 9.5-4.1 9.2-8.7 18.1-13.9 26.7l20.2 11.9-16 28-22.9-13.5c-5.2 6.3-10.7 12.4-16.6 18.2 35.1 27.1 79 43.2 126.5 43.2s91.4-16.1 126.5-43.2c-5.9-5.8-11.4-11.9-16.6-18.2z"}},{"tag":"path","attr":{"d":"M393.8 126l18.1 10.7-16 28-21.2-12.5c-5 8.3-9.5 16.9-13.3 25.9-.2.4-.4.9-.5 1.3l21 4.9-7.1 31.6-23.9-5.5c-2.3 9.7-3.8 19.6-4.6 29.6H370v32h-23.6c.8 10 2.3 20 4.6 29.8l23.9-5.5 7.1 31.6-21 4.9c.2.4.3.8.5 1.2 3.8 9 8.3 17.7 13.3 26l21.1-12.4 16 28-18 10.6c3.3 3.9 6.8 7.7 10.5 11.3l2 2C442 362 464 311.4 464 256s-22-106-57.7-143.4c-.7.7-1.4 1.3-2 2-3.7 3.7-7.2 7.5-10.5 11.4zM118.2 386.1l-18-10.6 16-28 21.1 12.4c5.1-8.3 9.5-17 13.3-26 .2-.4.3-.8.5-1.2l-21-4.9 7.1-31.6 23.9 5.5c2.3-9.8 3.8-19.8 4.6-29.8H142v-32h23.6c-.8-10-2.3-19.9-4.6-29.6l-23.9 5.5-7.1-31.6 21-4.9c-.2-.4-.3-.9-.5-1.3-3.8-9-8.2-17.7-13.3-25.9L116 164.6l-16-28 18.1-10.7c-3.4-3.9-6.9-7.7-10.6-11.4l-2-2C70 150 48 200.6 48 256s22 106 57.7 143.4c.7-.7 1.4-1.3 2-2 3.6-3.6 7.1-7.4 10.5-11.3z"}}]})(props);
};
function IoMdBasket (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M362.1 205.2L272.9 72.5C269 66.8 262.5 64 256 64c-6.5 0-13 2.8-16.9 8.7l-89.2 132.5H52.4c-11.2 0-20.4 9.1-20.4 20.2 0 1.8.2 3.6.8 5.5l51.7 187.5c4.7 17 20.4 29.5 39.1 29.5h264.7c18.7 0 34.4-12.5 39.3-29.5l51.7-187.5.6-5.5c0-11.1-9.2-20.2-20.4-20.2h-97.4zm-167.2 0l61.1-89 61.1 89H194.9zM256 367.1c-22.4 0-40.7-18.2-40.7-40.5s18.3-40.5 40.7-40.5 40.7 18.2 40.7 40.5-18.3 40.5-40.7 40.5z"}}]})(props);
};
function IoMdBasketball (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M191.6 272c-3.8 55-26.4 107.1-64.5 147.7 31.6 25 70.9 41 112.9 44.3V272h-48.4zM272 464c42-3.3 81.5-19.4 113.1-44.5-38-40.6-60.5-92.5-64.3-147.5H272v192zM240 48c-42 3.2-80.5 19-111.9 43.6 38 40.9 60.3 93.4 63.7 148.4H240V48zM320.7 240c3.4-55 25.6-107.4 63.5-148.3C352.7 67.1 314 51.2 272 48v192h48.7zM408.6 114.2c-17.2 18.5-30.7 39.7-40.1 62.9-8.2 20.2-13.1 40.9-14.6 62.9H464c-3.7-48-24.1-92.2-55.4-125.8zM368.5 333.1c9.6 23.7 23.3 45.1 40.9 63.8C440.3 363.4 460.3 320 464 272H354.1c1.6 21 6.5 41.5 14.4 61.1zM143.9 177.1c-9.5-23.3-23-44.5-40.3-63.1-31.4 33.6-51.9 78-55.6 126h110.5c-1.6-22-6.5-42.8-14.6-62.9zM102.7 397.1c17.7-18.8 31.5-40.3 41.1-64 8-19.6 12.8-40.1 14.5-61.1H48c3.7 48 23.8 91.6 54.7 125.1z"}}]})(props);
};
function IoMdBatteryCharging (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M338.2 76.8h-37.4V32h-89.6v44.8h-37.4c-16.4 0-29.8 13.4-29.8 29.8V450c0 16.6 13.4 30 29.8 30H338c16.6 0 30-13.4 30-29.8V106.6c0-16.4-13.4-29.8-29.8-29.8zM233.6 435.2V312h-44.8l89.6-168v123.2h44.8l-89.6 168z"}}]})(props);
};
function IoMdBatteryDead (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M338.2 76.8h-37.4V32h-89.6v44.8h-37.4c-16.4 0-29.8 13.4-29.8 29.8V450c0 16.6 13.4 30 29.8 30H338c16.6 0 30-13.4 30-29.8V106.6c0-16.4-13.4-29.8-29.8-29.8zM320 432H192V124.8h128V432z"}}]})(props);
};
function IoMdBatteryFull (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M338.2 76.8h-37.4V32h-89.6v44.8h-37.4c-16.4 0-29.8 13.4-29.8 29.8V450c0 16.6 13.4 30 29.8 30H338c16.6 0 30-13.4 30-29.8V106.6c0-16.4-13.4-29.8-29.8-29.8z"}}]})(props);
};
function IoMdBeaker (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M448.1 34.9c0-1.2-.4-2.9-2.9-2.9H128.5c-54.3 0-64.4 27.4-64.4 39.8C94.4 76 96 76.5 96 108.5v307c0 35.3 28.9 64.5 64.3 64.5H368c35.3 0 64-29.2 64-64.5V73.3c2.2-17.5 12-31.8 13.1-33.5 1.2-1.9 3-3.8 3-4.9zM354.2 432H176.3c-15.9 0-29.7-11.9-32.3-27.1V80h240v319.7c0 18-12.4 32.3-29.8 32.3z"}},{"tag":"path","attr":{"d":"M182 160v226c0 4.4 3.6 8 8 8h148c4.4 0 8-3.6 8-8V160H182z"}}]})(props);
};
function IoMdBed (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M168.7 264.5c29 0 52.4-22.9 52.4-51.2s-23.4-51.2-52.4-51.2-52.4 22.9-52.4 51.2 23.5 51.2 52.4 51.2zm209.5-102.4H238.5v119.5H98.9V128H64v256h34.9v-51.2h314.2V384H448V230.4c0-37.7-31.2-68.3-69.8-68.3z"}}]})(props);
};
function IoMdBeer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M416 140h-16v-6c8.9-9 16-22.9 16-38 0-35.3-28.7-64-64-64-16.3 0-31.1 6.1-42.4 16.1C297.2 38 281.4 32 264.2 32c-15.8 0-30.4 5.1-42.3 13.7C212 37.2 199 32 184.9 32c-17.1 0-32.4 7.6-42.8 19.5-11.7-12-28-19.5-46.1-19.5-35.3 0-64 28.7-64 64 0 16.2 6.1 31 16 42.3V193c0 26.5 21.5 48 48 48v174.5c0 35.3 28.8 64.5 64.2 64.5H336c35.3 0 64.1-29.2 64.1-64.5V372h16c50 0 64-32.7 64-68v-96c-.1-35.3-17.1-68-64.1-68zm-64 52H144v-53.7c.3-.4.7-.8 1-1.2 1.2-1.5 2.4-3 3.5-4.6 1.5 1.2 3 2.4 4.6 3.4 9.1 6.1 20 9.7 31.7 9.7 6.4 0 12.6-1.1 18.3-3 12.8 20.2 35.3 33.7 61 33.7 22 0 41.7-9.9 54.9-25.4 5.7-6.7 10.2-14.4 13.1-22.9H352v64zM96 128.1v75c-9 0-16-7.2-16-16v-63.3c-8-4.5-13.4-12.1-15.3-21-.5-2.1-.7-4.4-.7-6.7 0-17.6 14.4-32 32-32 11.8 0 23.3 7.7 30.1 15.4s26.7 7.7 33.9 0c6.8-7.3 14.3-15.4 24.8-15.4 6 0 11.6 2.2 15.9 5.8 1.9 1.6 3.6 3.5 4.9 5.6 1.1 1.8 2 4.2 3.1 5.8 2.7 3.4 6.5 5.5 11.2 5.5 4.4 0 8.3-1.9 11-5 .6-.7 1.2-1.5 1.7-2.3 2-2.5 4.2-4.8 6.7-6.8 6.8-5.4 15.5-8.6 24.8-8.6 10.6 0 20.2 4.1 27.4 10.9 1.7 1.6 6.7 4.5 13.2 5.1 4.5.4 6.1.3 8.2 0 10.3-1.3 14.4-4.7 16.4-6.6 5.8-5.8 13.8-9.4 22.6-9.4 17.6 0 32 14.4 32 32 .2 3.1-.3 6.2-1.2 9.1-2.5-5.5-8.1-9.2-14.6-9.2h-55s-8.7-.7-8.7 8.2c0 8.9-2.9 17.1-7.8 23.7-7.3 9.9-19.1 16.4-32.4 16.4-14.9 0-27.9-8.1-34.8-20.2-1.6-2.7-2.8-5.6-3.7-8.6-.1-.6-.3-1.1-.4-1.6-2-5.9-7.5-10.2-14.1-10.2-3.9 0-7.5 1.5-10.2 4l-.1.1c-2.4 2.1-5.3 3.7-8.4 4.7-2.4.8-5 1.2-7.7 1.2-7.5 0-14.7-4-18.8-8.6-10-11.4-23.7-6.8-29.7-5.5-6 1.3-12.2 11.7-12.2 11.7-1.1 2.1-2.4 4-3.9 5.8-6 6.7-15.2 11-24.2 11zM432 304c0 17.7-6.3 24-24 24h-8V184h8c17.7 0 24 6.3 24 24v96z"}}]})(props);
};
function IoMdBicycle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M330.666 131.202c18.668 0 33.598-14.935 33.598-33.601S349.334 64 330.666 64C312 64 297.07 78.935 297.07 97.601s14.93 33.601 33.596 33.601zm56 130.132c-51.332 0-93.332 42-93.332 93.333s42 93.333 93.332 93.333C438 448 480 406 480 354.667s-42-93.333-93.334-93.333zm0 158.666c-36.402 0-65.332-28.93-65.332-65.333s28.93-65.333 65.332-65.333c36.404 0 65.334 28.93 65.334 65.333S423.07 420 386.666 420zm-81.069-196H384v-32h-58.845l-34.62-60.134c-5.605-9.333-15.869-15.864-27.07-15.864-8.399 0-16.798 3.732-22.399 9.333L169.334 194.4c-5.601 5.601-9.333 14-9.333 22.399 0 12.131 9.202 21.465 18.535 27.065L240 282.134V368h32V256l-39.333-32 42.929-44.533L305.597 224zm-180.264 37.334C74 261.334 32 303.334 32 354.667S74 448 125.333 448s93.333-42 93.333-93.333-41.999-93.333-93.333-93.333zm0 158.666C88.934 420 60 391.07 60 354.667s28.934-65.333 65.333-65.333 65.333 28.93 65.333 65.333S161.732 420 125.333 420z"}}]})(props);
};
function IoMdBluetooth (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M399 159.9L270.5 32H248v170L144.7 99.2 113 130.8 238.8 256 113 381.2l31.7 31.6L248 310v170h22.5L399 352.1 302.2 256l96.8-96.1zm-106-42.1l42.3 42.1L293 202v-84.2zm42.3 234.3L293 394.2V310l42.3 42.1z"}}]})(props);
};
function IoMdBoat (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M84.255 413h1.063c34.123 0 63.977-19.021 85.305-42.494 21.325 23.473 51.18 42.762 85.304 42.762s63.979-19.334 85.305-42.806C362.559 393.934 392.412 413 426.535 413h1.062l51.253-138.78c2.126-5.329 1.063-11.641-1.07-16.976-2.136-5.333-7.237-8.487-12.567-10.623L427 234.133v-98.15C427 112.51 407.344 93 383.884 93h-63.979l-15.993-53h-95.969l-15.995 53h-63.979C104.511 93 85 112.51 85 135.982v98.15l-38.074 12.533c-5.33 2.136-10.582 5.334-12.718 10.667-2.135 5.335-3.158 10.49-1.031 16.887L84.255 413zM128 136h256v84.261l-128-41.605-128 41.605V136z"}},{"tag":"path","attr":{"d":"M341.231 408.007c-52.253 36.267-118.356 36.258-170.608-.009 0 0-57.638 64.002-106.632 64.002h21.327c29.854 0 58.646-11.726 85.305-25.594 53.315 27.734 117.293 27.728 170.608-.007C367.89 460.268 396.681 472 426.535 472h21.328c-47.651 0-106.632-63.993-106.632-63.993z"}}]})(props);
};
function IoMdBody (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48c22 0 40 18 40 40s-18 40-40 40-40-18-40-40 18-40 40-40zm192 144.1H320V464h-42.7V320h-42.7v144H192V192.1H64v-42.7h384v42.7z"}}]})(props);
};
function IoMdBonfire (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M272.2 350.6c-.8-8.2-8.2-14.6-17.3-14.6-8.3 0-15.2 5.4-16.9 12.5L221.1 441c-.5 2.3-.8 4.6-.8 7 0 17.7 15.5 32 34.7 32s34.7-14.3 34.7-32c0-2.9-.4-5.7-1.2-8.4l-16.3-89zM310.1 355zM404.3 390.3c-1.9-1.4-3.6-2.9-5.6-3.9l-68.9-47.5c-6.3-3.8-13-3.7-17.9.9-4.5 4.1-5.1 10.4-1.8 15.4l53 65.8c1 1.5 2.3 2.8 3.6 4.2 8.5 9.1 27.2 9.6 37.5 0 10.4-9.8 10.3-27.2.1-34.9zM382.2 335zM450.4 322.5l-64.5-2.3c-4.2-.6-8 2.1-8.7 6-.7 3.6 1.5 7.1 5.1 8.8h.1l62.5 17.8c9 1.9 19.1-2.3 19.1-11.6 0-11.9-3.3-17.5-13.6-18.7zM129.5 335zM129.5 335c3.6-1.6 5.7-5.2 5.1-8.8-.7-4-4.5-6.6-8.7-6l-64.5 2.3C51 323.7 48 329.3 48 341.1c0 9.3 9.9 13.6 18.8 11.6l62.5-17.8c.1.1.1.1.2.1zM182.2 338.8l-68.9 47.4c-2 1.1-3.9 2.4-5.6 3.9-10.4 9.6-10.4 25.1 0 34.6 10.4 9.6 27.1 9.6 37.5 0 1.4-1.3 2.6-2.7 3.6-4.2l53-65.6c3.3-5 2.7-11.2-1.8-15.3-4.8-4.5-12.6-4.8-17.8-.8zM256 32s30.2 35.4 30.2 64.4c0 27.8-18.2 50.3-45.9 50.3-27.9 0-48.9-22.5-48.9-50.3l.4-6.9c-27.2 32.3-43.5 76.2-43.5 121.8 0 59.6 48.2 107.8 107.8 107.8s107.8-48.2 107.8-107.8C363.8 138.7 328 53.7 256 32zm-3.9 246.7c-24 0-43.4-18.9-43.4-42.3 0-21.8 14.1-37.2 37.9-42 23.8-4.9 48.5-16.3 62.3-34.8 5.3 17.4 7.9 35.7 7.9 54.4 0 35.7-29 64.7-64.7 64.7z"}}]})(props);
};
function IoMdBook (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M426.2 80.4l-170.2 32-170.2-32C64 77 48 97.3 48 118v244.5c0 20.7 16 32.6 37.8 37.6L256 432l170.2-32c21.8-5 37.8-16.9 37.8-37.6V118c0-20.7-16-41-37.8-37.6zm0 282l-151.2 32V149.9l151.2-32v244.5zm-189.2 32l-151.2-32V118L237 150v244.4z"}}]})(props);
};
function IoMdBookmark (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M360 64H152c-22.002 0-40 17.998-40 40v344l144-64 144 64V104c0-22.002-17.998-40-40-40z"}}]})(props);
};
function IoMdBookmarks (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M405.2 64h-21c15 5.7 22.8 20.6 22.8 42.7v298.7c0 22.1-7 37.3-22.8 42.7h21c23.7 0 42.8-19.2 42.8-42.7V106.7c0-23.5-19.1-42.7-42.8-42.7zM345.5 64.2c-1.4-.1-2.8-.2-4.2-.2H106.7C83.2 64 64 83.2 64 106.7v298.7c0 23.5 19.2 42.7 42.7 42.7h234.7c1.4 0 2.8-.1 4.2-.2 21.5-2.1 38.5-20.4 38.5-42.5V106.7c-.1-22.1-17.1-40.4-38.6-42.5zM208 256l-56-32-56 32V96h112v160z"}}]})(props);
};
function IoMdBowtie (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M276 304h-40c-15.4 0-28-12.6-28-28v-40c0-15.4 12.6-28 28-28h40c15.4 0 28 12.6 28 28v40c0 15.4-12.6 28-28 28zM176 280v-48c0-18.2 8.7-34.4 22.2-44.6C192 160 96 96 64 96c-17.6 0-32 14.4-32 32v256c0 17.6 14.3 32 32 32 32 0 128-64 134.2-91.4-13.5-10.2-22.2-26.4-22.2-44.6zM448 96c-32 0-128 64-134.2 91.4 13.5 10.2 22.2 26.4 22.2 44.6v48c0 18.2-8.7 34.4-22.2 44.6C320 352 416 416 448 416c17.7 0 32-14.4 32-32V128c0-17.6-14.4-32-32-32z"}}]})(props);
};
function IoMdBriefcase (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M352 144v-39.6C352 82 334 64 311.6 64H200.4C178 64 160 82 160 104.4V144H48v263.6C48 430 66 448 88.4 448h335.2c22.4 0 40.4-18 40.4-40.4V144H352zm-40 0H200v-40h112v40z"}}]})(props);
};
function IoMdBrowsers (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M424 64H88c-26.6 0-48 21.6-48 48v288c0 26.4 21.4 48 48 48h336c26.4 0 48-21.6 48-48V112c0-26.4-21.4-48-48-48zm0 336H88V176h336v224z"}}]})(props);
};
function IoMdBrush (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M149.9 302.2c-39.1 0-70.7 31-70.7 69.3 0 30.3-27.3 46.2-47.2 46.2C53.7 446 90.7 464 126.3 464c52.1 0 94.3-41.4 94.3-92.4 0-38.4-31.6-69.4-70.7-69.4zM473.1 85.7l-31.6-31c-9.2-9-24-9-33.2 0L197 261.8l64.8 63.5 211.2-207c9.3-9 9.3-23.6.1-32.6z"}}]})(props);
};
function IoMdBug (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M448 160h-67.4c-10.8-18.7-25.7-34.8-43.7-47L376 73.8 342.2 40l-52.1 52.1C279 89.4 267.8 88 256 88s-23 1.4-33.8 4.1L169.8 40 136 73.8l38.9 39.1c-17.8 12.2-32.6 28.3-43.4 47H64v48h50.2c-1.2 7.9-2.2 15.8-2.2 24v24H64v48h48v24c0 8.2 1 16.1 2.2 24H64v48h67.4c25 43 71.3 72 124.6 72s99.6-29 124.6-72H448v-48h-50.2c1.2-7.9 2.2-15.8 2.2-24v-24h48v-48h-48v-24c0-8.2-1-16.1-2.2-24H448V160z"}}]})(props);
};
function IoMdBuild (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M474.1 398.2L289.1 212c18.3-47 8.1-102.3-30.5-141.1C217.9 30 156.9 21.8 108.1 44.3l87.4 88-61 61.4-89.5-88c-24.3 49-14.1 110.4 26.5 151.3 38.6 38.9 93.5 49.1 140.3 30.7l185 186.2c8.1 8.2 20.3 8.2 28.5 0l46.8-47c10.2-8.3 10.2-22.6 2-28.7z"}}]})(props);
};
function IoMdBulb (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M192 428c0 10.6 8.6 20 20 20h88c11.4 0 20-9.4 20-20v-18H192v18zm64-364c-79.7 0-144 59.9-144 134 0 45.7 24.1 86.2 61.4 110.6V352c0 10.6 9.3 19.2 20.6 19.2h123.9c11.4 0 20.6-8.6 20.6-19.2v-43.4C375.9 284.2 400 243.7 400 198c0-74.1-64.3-134-144-134z"}}]})(props);
};
function IoMdBus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M80 352c0 19.198 13.864 24.531 26.667 36.271v38.396c0 11.729 9.599 21.334 21.333 21.334h21.333c11.734 0 21.334-9.604 21.334-21.334v-21.333h170.666v21.333c0 11.729 9.604 21.334 21.334 21.334H384c11.729 0 21.333-9.604 21.333-21.334v-38.396C418.136 376.531 432 370.136 432 352V148.334C432 73.667 349.864 64 256 64S80 73.667 80 148.334V352zm80 15.989c-18.136 0-32-13.864-32-32 0-18.135 13.864-32 32-32s32 13.865 32 32c0 18.136-13.864 32-32 32zm192 0c-18.136 0-32-13.864-32-32 0-18.135 13.864-32 32-32s32 13.865 32 32c0 18.136-13.864 32-32 32zm32-122.656H128V138.667h256v106.666z"}}]})(props);
};
function IoMdBusiness (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M261 149.3V64H48v384h416V149.3H261zm-127.8 256H90.6v-42.7h42.6v42.7zm0-85.3H90.6v-42.7h42.6V320zm0-85.3H90.6V192h42.6v42.7zm0-85.4H90.6v-42.7h42.6v42.7zm85.2 256h-42.6v-42.7h42.6v42.7zm0-85.3h-42.6v-42.7h42.6V320zm0-85.3h-42.6V192h42.6v42.7zm0-85.4h-42.6v-42.7h42.6v42.7zm203 256H261v-42.7h42.6V320H261v-42.7h42.6v-42.7H261V192h160.4v213.3zm-37.6-170.6h-42.6v42.7h42.6v-42.7zm0 85.3h-42.6v42.7h42.6V320z"}}]})(props);
};
function IoMdCafe (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M48 400h368v48H48zM424 64H80v224c0 44 36 80 80 80h144c44 0 80-36 80-80v-64h40c22 0 40-18 40-40v-80c0-22-18-40-40-40zm0 112h-40v-64h40v64z"}}]})(props);
};
function IoMdCalculator (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M368 48H144c-26.6 0-48 21.6-48 48v320c0 26.4 21.4 48 48 48h224c26.4 0 48-21.6 48-48V96c0-26.4-21.4-48-48-48zM200 416h-48v-48h48v48zm0-88h-48v-48h48v48zm0-88h-48v-48h48v48zm80 176h-48v-48h48v48zm0-88h-48v-48h48v48zm0-88h-48v-48h48v48zm80 176h-48V280h48v136zm0-176h-48v-48h48v48zm0-96H152V96h208v48z"}}]})(props);
};
function IoMdCalendar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M368.005 272h-96v96h96v-96zm-32-208v32h-160V64h-48v32h-24.01c-22.002 0-40 17.998-40 40v272c0 22.002 17.998 40 40 40h304.01c22.002 0 40-17.998 40-40V136c0-22.002-17.998-40-40-40h-24V64h-48zm72 344h-304.01V196h304.01v212z"}}]})(props);
};
function IoMdCall (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M426.666 330.667a250.385 250.385 0 0 1-75.729-11.729c-7.469-2.136-16-1.073-21.332 5.333l-46.939 46.928c-60.802-30.928-109.864-80-140.802-140.803l46.939-46.927c5.332-5.333 7.462-13.864 5.332-21.333-8.537-24.531-12.802-50.136-12.802-76.803C181.333 73.604 171.734 64 160 64H85.333C73.599 64 64 73.604 64 85.333 64 285.864 226.136 448 426.666 448c11.73 0 21.334-9.604 21.334-21.333V352c0-11.729-9.604-21.333-21.334-21.333z"}}]})(props);
};
function IoMdCamera (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"circle","attr":{"cx":"256","cy":"280","r":"63"}},{"tag":"path","attr":{"d":"M440 96h-88l-32-32H192l-32 32H72c-22.092 0-40 17.908-40 40v272c0 22.092 17.908 40 40 40h368c22.092 0 40-17.908 40-40V136c0-22.092-17.908-40-40-40zM256 392c-61.855 0-112-50.145-112-112s50.145-112 112-112 112 50.145 112 112-50.145 112-112 112z"}}]})(props);
};
function IoMdCar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M403.208 117.333c-4.271-12.802-16-21.333-29.875-21.333H138.667c-13.875 0-25.604 8.531-29.875 21.333L64 234.667v160C64 406.396 73.604 416 85.333 416h21.334c11.729 0 21.333-9.604 21.333-21.333V384h256v10.667c0 11.729 9.604 21.333 21.333 21.333h21.334c11.729 0 21.333-9.604 21.333-21.333v-160l-44.792-117.334zM138.667 320c-18.125 0-32-13.865-32-32s13.875-32 32-32 32 13.866 32 32-13.875 32-32 32zm234.666 0c-18.125 0-32-13.865-32-32s13.875-32 32-32 32 13.866 32 32-13.875 32-32 32zM106.667 213.333l32-85.333h234.666l32 85.333H106.667z"}}]})(props);
};
function IoMdCard (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M435.2 80H76.8c-24.9 0-44.6 19.6-44.6 44L32 388c0 24.4 19.9 44 44.8 44h358.4c24.9 0 44.8-19.6 44.8-44V124c0-24.4-19.9-44-44.8-44zm0 308H76.8V256h358.4v132zm0-220H76.8v-44h358.4v44z"}}]})(props);
};
function IoMdCart (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M169.6 377.6c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6s41.601-18.718 41.601-41.6c-.001-22.884-18.72-41.601-41.601-41.601zM48 51.2v41.6h41.6l74.883 151.682-31.308 50.954c-3.118 5.2-5.2 12.482-5.2 19.765 0 27.85 19.025 41.6 44.825 41.6H416v-40H177.893c-3.118 0-5.2-2.082-5.2-5.2 0-1.036 2.207-5.2 2.207-5.2l20.782-32.8h154.954c15.601 0 29.128-8.317 36.4-21.836l74.882-128.8c1.237-2.461 2.082-6.246 2.082-10.399 0-11.446-9.364-19.765-20.8-19.765H135.364L115.6 51.2H48zm326.399 326.4c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6S416 442.082 416 419.2c0-22.883-18.719-41.6-41.601-41.6z"}}]})(props);
};
function IoMdCash (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M32 96v256h448V96H32zm160.5 224h-80.4c0-26.6-21.5-48.1-48.1-48.1V192c35.3 0 64-28.7 64-64h64.5c-19.9 23.5-32.5 57.8-32.5 96s12.6 72.5 32.5 96zM448 271.9c-26 0-48 21.5-48 48.1h-80.5c19.9-23.5 32.5-57.8 32.5-96s-12.6-72.5-32.5-96H384c0 35.3 28.7 64 64 64v79.9zM32 384h448v32H32z"}}]})(props);
};
function IoMdCellular (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M64 448h384V64L64 448z"}}]})(props);
};
function IoMdChatboxes (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M391.553 64H57.607C53.131 64 48 67.745 48 72.159v214.217c0 4.413 5.131 8.624 9.607 8.624H115v88.894L205.128 295h186.425c4.477 0 7.447-4.211 7.447-8.624V72.159c0-4.414-2.971-8.159-7.447-8.159z"}},{"tag":"path","attr":{"d":"M456.396 127H424v166.57c0 15.987-6.915 26.43-25.152 26.43H218.096l-38.905 39h129.688L399 448v-89h57.396c4.478 0 7.604-4.262 7.604-8.682V136.103c0-4.414-3.126-9.103-7.604-9.103z"}}]})(props);
};
function IoMdChatbubbles (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M132.8 368c-20.2 0-44.8-24.6-44.8-44.8V160h-9.6C61.7 160 48 173.7 48 190.4V464l58.5-58h215.1c16.7 0 30.4-14.1 30.4-30.9V368H132.8z"}},{"tag":"path","attr":{"d":"M429.1 48H149.9C130.7 48 115 63.7 115 82.9V309c0 19.2 15.7 35 34.9 35h238.2l75.9 53V82.9c0-19.2-15.7-34.9-34.9-34.9z"}}]})(props);
};
function IoMdCheckboxOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M168.531 215.469l-29.864 29.864 96 96L448 128l-29.864-29.864-183.469 182.395-66.136-65.062zm236.802 189.864H106.667V106.667H320V64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V234.667h-42.667v170.666z"}}]})(props);
};
function IoMdCheckbox (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M405.333 64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V106.667C448 83.198 428.802 64 405.333 64zm-192 298.667L106.667 256l29.864-29.864 76.802 76.802 162.136-162.136 29.864 29.865-192 192z"}}]})(props);
};
function IoMdCheckmarkCircleOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M170.718 216.482L141.6 245.6l93.6 93.6 208-208-29.118-29.118L235.2 279.918l-64.482-63.436zM422.4 256c0 91.518-74.883 166.4-166.4 166.4S89.6 347.518 89.6 256 164.482 89.6 256 89.6c15.6 0 31.2 2.082 45.764 6.241L334 63.6C310.082 53.2 284.082 48 256 48 141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208h-41.6z"}}]})(props);
};
function IoMdCheckmarkCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm-42.7 318.9L106.7 260.3l29.9-29.9 76.8 76.8 162.1-162.1 29.9 29.9-192.1 191.9z"}}]})(props);
};
function IoMdCheckmark (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"}}]})(props);
};
function IoMdClipboard (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M405.333 80h-87.35C310.879 52.396 285.821 32 256 32s-54.879 20.396-61.983 48h-87.35C83.198 80 64 99.198 64 122.667v314.665C64 460.801 83.198 480 106.667 480h298.666C428.802 480 448 460.801 448 437.332V122.667C448 99.198 428.802 80 405.333 80zM256 80c11.729 0 21.333 9.599 21.333 21.333s-9.604 21.334-21.333 21.334-21.333-9.6-21.333-21.334S244.271 80 256 80zm152 360H104V120h40v72h224v-72h40v320z"}}]})(props);
};
function IoMdClock (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M403.1 108.9c-81.2-81.2-212.9-81.2-294.2 0-81.3 81.2-81.2 212.9 0 294.2 81.2 81.2 212.9 81.2 294.2 0 81.2-81.2 81.2-213 0-294.2zm-16.5 53.2c7.6-4.4 17.5-1.8 21.9 5.9 4.4 7.6 1.8 17.5-5.9 21.9-7.6 4.4-17.5 1.8-21.9-5.9-4.4-7.6-1.8-17.5 5.9-21.9zM80 256c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm45.4 93.9c-7.6 4.4-17.5 1.8-21.9-5.9-4.4-7.6-1.8-17.5 5.9-21.9 7.6-4.4 17.5-1.8 21.9 5.9 4.4 7.6 1.8 17.5-5.9 21.9zm5.9-165.9c-4.4 7.6-14.2 10.3-21.9 5.9-7.6-4.4-10.3-14.2-5.9-21.9 4.4-7.6 14.2-10.3 21.9-5.9 7.7 4.4 10.3 14.3 5.9 21.9zm36.7-80.4c7.6-4.4 17.5-1.8 21.9 5.9 4.4 7.6 1.8 17.5-5.9 21.9s-17.5 1.8-21.9-5.9c-4.4-7.7-1.7-17.5 5.9-21.9zm-7.8 110.7l15.6-26.6 95.2 56.9V384h-31V260.6l-79.8-46.3zm29.7 188.3c-4.4 7.6-14.2 10.3-21.9 5.9s-10.3-14.2-5.9-21.9c4.4-7.6 14.2-10.3 21.9-5.9 7.6 4.4 10.3 14.2 5.9 21.9zM256 432c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm0-320c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm88 296.4c-7.6 4.4-17.5 1.8-21.9-5.9-4.4-7.6-1.8-17.5 5.9-21.9 7.6-4.4 17.5-1.8 21.9 5.9 4.4 7.7 1.7 17.5-5.9 21.9zm5.9-283c-4.4 7.6-14.2 10.3-21.9 5.9s-10.3-14.2-5.9-21.9c4.4-7.6 14.2-10.3 21.9-5.9s10.3 14.3 5.9 21.9zM408.4 344c-4.4 7.6-14.2 10.3-21.9 5.9-7.6-4.4-10.3-14.2-5.9-21.9 4.4-7.6 14.2-10.3 21.9-5.9 7.7 4.4 10.3 14.3 5.9 21.9zm7.6-72c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"}}]})(props);
};
function IoMdCloseCircleOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}},{"tag":"path","attr":{"d":"M360 330.9L330.9 360 256 285.1 181.1 360 152 330.9l74.9-74.9-74.9-74.9 29.1-29.1 74.9 74.9 74.9-74.9 29.1 29.1-74.9 74.9z"}}]})(props);
};
function IoMdCloseCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"}}]})(props);
};
function IoMdClose (props) {
  return iconBase_GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(props);
};
function IoMdCloudCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm93.6 291.2H172.801c-34.318 0-62.4-28.082-62.4-62.399 0-34.319 28.082-62.4 62.4-62.4h3.117c9.364-36.4 41.601-62.399 80.083-62.399 45.764 0 83.199 37.435 83.199 83.198h10.4c29.118 0 52 22.882 52 52.001 0 29.117-22.882 51.999-52 51.999z"}}]})(props);
};
function IoMdCloudDone (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M403.002 217.001C388.998 148.002 328.998 96 256 96c-57.998 0-107.998 32.998-132.998 81.001C63.002 183.002 16 233.998 16 296c0 65.996 53.999 120 120 120h260c55 0 100-45 100-100 0-52.998-40.996-96.001-92.998-98.999zM213.333 362.667L138.667 288l29.864-29.864 44.802 44.802L324.271 192l29.865 29.864-140.803 140.803z"}}]})(props);
};
function IoMdCloudDownload (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M403.002 217.001C388.998 148.002 328.998 96 256 96c-57.998 0-107.998 32.998-132.998 81.001C63.002 183.002 16 233.998 16 296c0 65.996 53.999 120 120 120h260c55 0 100-45 100-100 0-52.998-40.996-96.001-92.998-98.999zM224 268v-76h64v76h68L256 368 156 268h68z"}}]})(props);
};
function IoMdCloudOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M403.001 217.001C388.997 148.002 328.998 96 256 96c-57.998 0-107.999 32.998-132.997 81C63.002 183.002 16 233.998 16 296c0 65.996 54.004 120 120 120h260c55 0 100-45 100-100.001 0-52.997-40.997-95.999-92.999-98.998zM396 376H136c-44.004 0-80-35.996-80-80 0-44 35.996-80 80-80h14.004c12.998-46 55-80 105.996-80 60.996 0 110 49 110 110v10h30c32.998 0 60 27.003 60 60 0 32.998-27.002 60-60 60z"}}]})(props);
};
function IoMdCloudUpload (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M403.002 217.001C388.998 148.002 328.998 96 256 96c-57.998 0-107.998 32.998-132.998 81.001C63.002 183.002 16 233.998 16 296c0 65.996 53.999 120 120 120h260c55 0 100-45 100-100 0-52.998-40.996-96.001-92.998-98.999zM288 276v76h-64v-76h-68l100-100 100 100h-68z"}}]})(props);
};
function IoMdCloud (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M403.002 217.001C388.998 148.002 328.998 96 256 96c-57.998 0-107.998 32.998-132.998 81.001C63.002 183.002 16 233.998 16 296c0 65.996 53.999 120 120 120h260c55 0 100-45 100-100 0-52.998-40.996-96.001-92.998-98.999z"}}]})(props);
};
function IoMdCloudyNight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M123.4 183c.4-.1.8-.1 1.2-.2-.5.1-.8.2-1.2.2zM341.5 303.4C330.7 247.7 282.2 206 224 206c-34 0-65.1 12-86.5 39.1 29.4 2.2 56.7 13.1 77.7 34.2 15.6 15.7 26.6 34.9 32.1 55.8h-28.7c-13.1-37.6-48-64.5-90.6-64.5-5.1 0-12.3.6-17.7 1.7-45.7 9.4-78.3 47.6-78.3 95 0 53.4 43 96.8 96 96.8h208c44.1 0 80-36.1 80-80.6-.1-42.7-32.9-77.2-74.5-80.1z"}},{"tag":"path","attr":{"d":"M112.5 225.4c13.6-17.3 30.7-30.5 50.8-39.2 18.4-8 38.8-12 60.7-12 6.1 0 12.2.4 18.2 1.1-6.1-18.1-9.4-37.6-9.4-57.8 0-24.6 4.9-48.1 13.8-69.4C161.9 68.7 99 145.7 99 237.3c0 1.6 0 3.2.1 4.8.1 0 .2-.1.3-.1l13.1-16.6zM417.6 306.8c13.3 14.2 22.6 31.5 27.1 50.1 16.5-21.4 28.7-46.4 35.3-73.5-21.2 9-44.5 13.9-68.9 13.9h-3.6c3.5 2.9 6.9 6.1 10.1 9.5z"}}]})(props);
};
function IoMdCloudy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M123.4 183c.4-.1.8-.1 1.2-.2-.5.1-.8.2-1.2.2z"}},{"tag":"path","attr":{"d":"M393.2 219.2C380.5 154.6 323.9 106 256 106c-39.7 0-76 14-100.9 45.4 34.3 2.6 66.1 15.2 90.7 39.8 18.2 18.2 31 40.5 37.4 64.8h-33.5c-15.3-43.7-56-75-105.7-75-6 0-14.3.7-20.6 2C70 194 32 238.4 32 293.5 32 355.6 82.2 406 144 406h242.7c51.5 0 93.3-42 93.3-93.8 0-49.4-38.3-89.6-86.8-93z"}}]})(props);
};
function IoMdCodeDownload (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M234.6 160v125.7l-44.7-43.6L160 272l96 96 96-96-29.9-31-44.7 44.7V160h-42.8z"}},{"tag":"path","attr":{"d":"M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z"}}]})(props);
};
function IoMdCodeWorking (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z"}},{"tag":"path","attr":{"d":"M155.6 276h40v-40h-40v40zm200.8-40h-40v40h40v-40zM236 276h40v-40h-40v40z"}}]})(props);
};
function IoMdCode (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z"}}]})(props);
};
function IoMdCog (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M480 288v-64h-34.7c-2-12.1-5.2-23.8-9.3-35l30-17.3-32-55.4-30 17.3c-7.7-9.3-16.3-17.9-25.6-25.6l17.3-30-55.4-32L323 76c-11.2-4.2-22.9-7.3-35-9.3V32h-64v34.7c-12.1 2-23.8 5.2-35 9.3l-17.3-30-55.4 32 17.3 30c-9.3 7.7-17.9 16.3-25.6 25.6l-30-17.3-32 55.4L76 189c-4.2 11.2-7.3 22.9-9.3 35H32v64h34.7c2 12.1 5.2 23.8 9.3 35l-30 17.3 32 55.4 30-17.3c7.7 9.3 16.3 17.9 25.6 25.6l-17.3 30 55.4 32 17.3-30c11.2 4.2 22.9 7.3 35 9.3V480h64v-34.7c12.1-2 23.8-5.2 35-9.3l17.3 30 55.4-32-17.3-30c9.3-7.7 17.9-16.3 25.6-25.6l30 17.3 32-55.4-30-17.3c4.2-11.2 7.3-22.9 9.3-35H480zm-224-64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM141.2 343c-18.3-24.2-29.2-54.3-29.2-87 0-6.1.4-12.1 1.1-18l46.9 17.1v.9c0 17.8 4.9 34.5 13.3 48.8L141.2 343zm40.7-148L135 177.9c20.1-31.1 51.8-53.9 89-62.3v49.9c-16.6 5.9-31.1 16.2-42.1 29.5zM256 400c-23.7 0-46-5.7-65.8-15.9l32.1-38.2c10.5 3.9 21.8 6.1 33.7 6.1s23.2-2.2 33.7-6.1l32.1 38.2C302 394.3 279.7 400 256 400zm32-234.5v-49.9c37.2 8.4 68.9 31.2 89 62.3L330.1 195c-11-13.3-25.5-23.6-42.1-29.5zM370.8 343l-32.1-38.2c8.4-14.3 13.3-31 13.3-48.8v-.9l46.9-17.1c.7 5.9 1.1 11.9 1.1 18 0 32.7-10.9 62.8-29.2 87z"}}]})(props);
};
function IoMdColorFill (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M136.5 77.7l37 67L32 285.7 216.4 464l152.4-148.6 54.4-11.4L166.4 48l-29.9 29.7zm184 208H114.9l102.8-102.3 102.8 102.3zM423.3 304s-56.7 61.5-56.7 92.1c0 30.7 25.4 55.5 56.7 55.5 31.3 0 56.7-24.9 56.7-55.5S423.3 304 423.3 304z"}}]})(props);
};
function IoMdColorFilter (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M441.8 120.1l-49.9-49.9c-8.3-8.3-21.8-8.3-30.1 0l-66.6 66.6L254.1 96 224 126.1l30.3 30.3L64 346.7V448h101.3l190.3-190.3 30.3 30.3 30.1-30.1-41-41 66.6-66.6c8.5-8.4 8.5-21.8.2-30.2zM147.6 405.4l-41-41 171.9-171.9 41 41-171.9 171.9z"}}]})(props);
};
function IoMdColorPalette (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 64C150.401 64 64 150.401 64 256c0 105.604 86.401 192 192 192 18.136 0 32-13.864 32-32 0-8.531-3.198-16-8.531-21.333-5.333-5.334-8.531-12.803-8.531-21.334 0-18.135 13.864-32 32-32h38.396c58.667 0 106.667-48 106.667-106.666C448 140.802 361.604 64 256 64zM138.667 256c-18.136 0-32-13.864-32-32s13.864-32 32-32c18.135 0 32 13.864 32 32s-13.865 32-32 32zm64-85.333c-18.136 0-32-13.865-32-32 0-18.136 13.864-32 32-32 18.135 0 32 13.864 32 32 0 18.135-13.865 32-32 32zm106.666 0c-18.135 0-32-13.865-32-32 0-18.136 13.865-32 32-32 18.136 0 32 13.864 32 32 0 18.135-13.864 32-32 32zm64 85.333c-18.135 0-32-13.864-32-32s13.865-32 32-32c18.136 0 32 13.864 32 32s-13.864 32-32 32z"}}]})(props);
};
function IoMdColorWand (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M200.8 157.2l-36.4 37.4L411.7 448l36.3-37.4zM181 64h37v68h-37zM181 262h37v68h-37zM270 176h69v37h-69zM305.6 115.8l-25.7-26.3-47.1 48.3 25.6 26.2zM168.8 137.8l-47.1-48.3-25.6 26.3 47.1 48.2zM96.1 277.9l25.6 26.2 47.1-48.2-25.6-26.3zM64 176h65v37H64z"}}]})(props);
};
function IoMdCompass (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 231.358c-13.442 0-24.643 11.2-24.643 24.642s11.2 24.643 24.643 24.643 24.643-11.2 24.643-24.643-11.201-24.642-24.643-24.642zM256 32C132.8 32 32 132.8 32 256s100.8 224 224 224 224-100.8 224-224S379.2 32 256 32zm49.284 273.284L121.6 390.4l85.116-183.679L390.4 121.6l-85.116 183.684z"}}]})(props);
};
function IoMdConstruct (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M430.9 393.4l-119.6-119-58.1-57.9-13.4-13.3c15.9-40.6 7.1-88.2-26.6-121.7-35.4-35.3-88.5-42.3-131-22.9l76.1 75.8-53.1 52.9-77.9-75.8C6.2 153.8 15 206.7 50.4 242c33.6 33.5 81.4 42.3 122.1 26.5l14.4 14.3L81.7 388c-7.6 5.7-7.6 19 1.9 26.6l43.8 43.7c7.6 7.6 19.1 7.6 26.7 0l96.1-112.4 113.4 112.9c7.1 7.1 17.7 7.1 24.8 0l40.7-40.6c8.9-7.1 8.9-19.5 1.8-24.8z"}},{"tag":"path","attr":{"d":"M494.4 216.6l-34.5-34.1c-2.2-2.2-5.8-2.2-8 0l-3.7 3.7-18.5-15.8s1.2-10-4.9-18.7c-6.2-8.7-16.1-19.8-23.2-26.9-7.1-7-34.1-33.9-69.7-51.4C296.2 55.7 271 48 241 48v29.7s28.7 16.6 45.1 29.7c16.3 13.1 16.8 59.5 16.8 59.5l-28.5 28.5 56.5 56.1 31-36.3c12.9-3.5 23.8-3.8 30.2-.3l13.7 13.3-9.6 9.5c-2.2 2.2-2.2 5.7 0 7.9l34.5 34.1c2.2 2.2 5.8 2.2 8 0l55.7-55.2c2.1-2.2 2.1-5.8 0-7.9z"}}]})(props);
};
function IoMdContact (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm0 62.4c34.3 0 62.4 28.1 62.4 62.4s-28.1 62.4-62.4 62.4-62.4-28.1-62.4-62.4 28.1-62.4 62.4-62.4zm0 300.4c-52 0-97.8-27-124.8-66.6 1-41.6 83.2-64.5 124.8-64.5s123.8 22.9 124.8 64.5c-27 39.5-72.8 66.6-124.8 66.6z"}}]})(props);
};
function IoMdContacts (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z"}},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z"}}]}]})(props);
};
function IoMdContract (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M64 371.2h76.795V448H192V320H64v51.2zm76.795-230.4H64V192h128V64h-51.205v76.8zM320 448h51.2v-76.8H448V320H320v128zm51.2-307.2V64H320v128h128v-51.2h-76.8z"}}]})(props);
};
function IoMdContrast (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm113.1 321.1C338.9 399.4 298.7 416 256 416V96c42.7 0 82.9 16.6 113.1 46.9C399.4 173.1 416 213.3 416 256s-16.6 82.9-46.9 113.1z"}}]})(props);
};
function IoMdCopy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M296 48H176.5C154.4 48 136 65.4 136 87.5V96h-7.5C106.4 96 88 113.4 88 135.5v288c0 22.1 18.4 40.5 40.5 40.5h208c22.1 0 39.5-18.4 39.5-40.5V416h8.5c22.1 0 39.5-18.4 39.5-40.5V176L296 48zm0 44.6l83.4 83.4H296V92.6zm48 330.9c0 4.7-3.4 8.5-7.5 8.5h-208c-4.4 0-8.5-4.1-8.5-8.5v-288c0-4.1 3.8-7.5 8.5-7.5h7.5v255.5c0 22.1 10.4 32.5 32.5 32.5H344v7.5zm48-48c0 4.7-3.4 8.5-7.5 8.5h-208c-4.4 0-8.5-4.1-8.5-8.5v-288c0-4.1 3.8-7.5 8.5-7.5H264v128h128v167.5z"}}]})(props);
};
function IoMdCreate (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M64 368v80h80l235.727-235.729-79.999-79.998L64 368zm377.602-217.602c8.531-8.531 8.531-21.334 0-29.865l-50.135-50.135c-8.531-8.531-21.334-8.531-29.865 0l-39.468 39.469 79.999 79.998 39.469-39.467z"}}]})(props);
};
function IoMdCrop (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M352 312.7h37.8V160c0-20.8-17-37.8-37.8-37.8H199.3V160H352v152.7zm-192 33.5V48h-37.8v74.2H48V160h74.2v186.2c0 20.8 17 37.8 37.8 37.8h192v80h37.8v-80H464v-37.8H160z"}}]})(props);
};
function IoMdCube (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M467.3 168.1c-1.8 0-3.5.3-5.1 1l-177.6 92.1h-.1c-7.6 4.7-12.5 12.5-12.5 21.4v185.9c0 6.4 5.6 11.5 12.7 11.5 2.2 0 4.3-.5 6.1-1.4.2-.1.4-.2.5-.3L466 385.6l.3-.1c8.2-4.5 13.7-12.7 13.7-22.1V179.6c0-6.4-5.7-11.5-12.7-11.5zM454.3 118.5L272.6 36.8S261.9 32 256 32c-5.9 0-16.5 4.8-16.5 4.8L57.6 118.5s-8 3.3-8 9.5c0 6.6 8.3 11.5 8.3 11.5l185.5 97.8c3.8 1.7 8.1 2.6 12.6 2.6 4.6 0 8.9-1 12.7-2.7l185.4-97.9s7.5-4 7.5-11.5c.1-6.3-7.3-9.3-7.3-9.3zM227.5 261.2L49.8 169c-1.5-.6-3.3-1-5.1-1-7 0-12.7 5.1-12.7 11.5v183.8c0 9.4 5.5 17.6 13.7 22.1l.2.1 174.7 92.7c1.9 1.1 4.2 1.7 6.6 1.7 7 0 12.7-5.2 12.7-11.5V282.6c.1-8.9-4.9-16.8-12.4-21.4z"}}]})(props);
};
function IoMdCut (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M203.1 158.3c5.2-11.2 8.1-23.5 8.1-36.7 0-49.5-40.1-89.6-89.6-89.6S32 72.1 32 121.6s40.1 89.6 89.6 89.6c13.2 0 25.5-2.9 36.7-8.1l52.9 52.9-52.9 52.9c-11.2-5.2-23.5-8.1-36.7-8.1-49.5 0-89.6 40.1-89.6 89.6S72.1 480 121.6 480s89.6-40.1 89.6-89.6c0-13.2-2.9-25.5-8.1-36.7l52.9-52.9 156.8 156.8H480v-22.4L203.1 158.3zm-81.5 8.1c-24.6 0-44.8-19.9-44.8-44.8S97 76.8 121.6 76.8s44.8 19.9 44.8 44.8-20.2 44.8-44.8 44.8zm0 268.8c-24.6 0-44.8-19.9-44.8-44.8s20.2-44.8 44.8-44.8 44.8 19.9 44.8 44.8-20.2 44.8-44.8 44.8zm134.4-168c-6.3 0-11.2-4.9-11.2-11.2 0-6.3 4.9-11.2 11.2-11.2 6.3 0 11.2 4.9 11.2 11.2 0 6.3-4.9 11.2-11.2 11.2zM412.8 54.4L278.4 188.8l44.8 44.8L480 76.8V54.4h-67.2z"}}]})(props);
};
function IoMdDesktop (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M437.333 32H74.667C51.198 32 32 51.197 32 74.666v282.667C32 380.802 51.198 400 74.667 400h138.666l-42.666 48v32h170.666v-32l-42.666-48h138.666C460.802 400 480 380.802 480 357.333V74.666C480 51.197 460.802 32 437.333 32zm0 288H74.667V74.666h362.666V320z"}}]})(props);
};
function IoMdDisc (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm0 301.6c-51.8 0-93.6-41.8-93.6-93.6s41.8-93.6 93.6-93.6 93.6 41.8 93.6 93.6-41.8 93.6-93.6 93.6zm0-114.4c-11.4 0-20.8 9.4-20.8 20.8s9.4 20.8 20.8 20.8 20.8-9.4 20.8-20.8-9.4-20.8-20.8-20.8z"}}]})(props);
};
function IoMdDocument (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z"}}]})(props);
};
function IoMdDoneAll (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M387.581 139.712L356.755 109 216.913 248.319l30.831 30.719 139.837-139.326zM481.172 109L247.744 340.469l-91.39-91.051-30.827 30.715L247.744 403 512 139.712 481.172 109zM0 280.133L123.321 403l30.829-30.713L31.934 249.418 0 280.133z"}}]})(props);
};
function IoMdDownload (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"}}]})(props);
};
function IoMdEasel (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M128 176h256v128H128z"}},{"tag":"path","attr":{"d":"M448 96H64c-8.8 0-16 7.2-16 16v256c0 8.8 6.9 16 15.8 16H448c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16zm-32 240H96V144h320v192zM80 464h57l22.5-64h-56.4zM279.4 48h-46.8l-11.5 32h69.8zM375 464h57l-23-64h-56.5zM232 400h48v32h-48z"}}]})(props);
};
function IoMdEgg (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 32C185.6 32 80 165.2 80 288.9S150.4 480 256 480s176-67.4 176-191.1S326.4 32 256 32z"}}]})(props);
};
function IoMdExit (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M215.469 332.802l29.863 29.864L352 256 245.332 149.333l-29.863 29.865 55.469 55.469H64v42.666h205.864l-54.395 55.469zM405.334 64H106.666C83.198 64 64 83.198 64 106.666V192h42.666v-85.333h298.668v298.668H106.666V320H64v85.334C64 428.802 83.198 448 106.666 448h298.668C428.802 448 448 428.802 448 405.334V106.666C448 83.198 428.802 64 405.334 64z"}}]})(props);
};
function IoMdExpand (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M396.795 396.8H320V448h128V320h-51.205zM396.8 115.205V192H448V64H320v51.205zM115.205 115.2H192V64H64v128h51.205zM115.2 396.795V320H64v128h128v-51.205z"}}]})(props);
};
function IoMdEyeOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256.1 144.8c56.2 0 101.9 45.3 101.9 101.1 0 13.1-2.6 25.5-7.3 37l59.5 59c30.8-25.5 55-58.4 69.9-96-35.3-88.7-122.3-151.6-224.2-151.6-28.5 0-55.8 5.1-81.1 14.1l44 43.7c11.6-4.6 24.1-7.3 37.3-7.3zM52.4 89.7l46.5 46.1 9.4 9.3c-33.9 26-60.4 60.8-76.3 100.8 35.2 88.7 122.2 151.6 224.1 151.6 31.6 0 61.7-6.1 89.2-17l8.6 8.5 59.7 59 25.9-25.7L78.2 64 52.4 89.7zM165 201.4l31.6 31.3c-1 4.2-1.6 8.7-1.6 13.1 0 33.5 27.3 60.6 61.1 60.6 4.5 0 9-.6 13.2-1.6l31.6 31.3c-13.6 6.7-28.7 10.7-44.8 10.7-56.2 0-101.9-45.3-101.9-101.1 0-15.8 4.1-30.7 10.8-44.3zm87.8-15.7l64.2 63.7.4-3.2c0-33.5-27.3-60.6-61.1-60.6l-3.5.1z"}}]})(props);
};
function IoMdEye (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z"}}]})(props);
};
function IoMdFastforward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M480 256L262.4 110v292L480 256zM32 110v292l217.6-146L32 110z"}}]})(props);
};
function IoMdFemale (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M400 176c0-79.5-64.5-144-144-144S112 96.5 112 176c0 71.4 51.9 130.6 120 142v50h-72v48h72v64h48v-64h72v-48h-72v-50c68.1-11.4 120-70.6 120-142zm-240 0c0-52.9 43.1-96 96-96s96 43.1 96 96-43.1 96-96 96-96-43.1-96-96z"}}]})(props);
};
function IoMdFiling (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M449.2 208H423v-32l-14.4-48H383V96l-15-48H144l-15 48v32h-25.6L89 176v32H62.8L48 256v165.3c0 23.5 35.2 42.7 58.7 42.7h314.7c21.8 0 42.7-19.7 42.7-41V256l-14.9-48zM176 96h160v32H176V96zm-41 80h242v32H135v-32zm282 112h-82.6c-7.4 36.5-39.7 64-78.4 64s-71-27.5-78.4-64H95v-32h322v32z"}}]})(props);
};
function IoMdFilm (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M376 64v42.667h-40V64H176v42.667h-40V64H96v384h40v-42.666h40V448h160v-42.666h40V448h40V64h-40zM176 362.667h-40V320h40v42.667zm0-85.333h-40v-42.667h40v42.667zM176 192h-40v-42.666h40V192zm200 170.667h-40V320h40v42.667zm0-85.333h-40v-42.667h40v42.667zM376 192h-40v-42.666h40V192z"}}]})(props);
};
function IoMdFingerPrint (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M78.1 205.6c-2.4 0-4.9-.6-7.1-1.9-6.7-3.9-9-12.4-5.1-19.1 17.8-30 71.9-100.1 190.1-100.1 51.2 0 96.1 13.6 133.4 40.4 30.7 22 47.9 46.9 56.1 58.9 4.4 6.4 2.7 15-3.7 19.4-6.4 4.3-15.2 2.7-19.6-3.7-14.9-21.6-60.1-87.2-166.2-87.2-103.6 0-150.4 60.4-165.7 86.3-2.6 4.6-7.3 7-12.2 7z"}},{"tag":"path","attr":{"d":"M315.5 480c-1.2 0-2.3-.1-3.5-.4-85.7-21.5-117.7-108.1-119-111.7l-.2-.8c-.7-2.5-17.9-61.9 8.5-96.7 12.1-15.9 30.5-24 54.8-24 22.6 0 38.9 7.1 50.1 21.8 9.2 12 12.9 26.8 16.5 41.1 7.5 29.7 12.9 45.3 44.1 46.9 13.7.7 22.7-7.4 27.8-14.3 13.8-18.8 16.2-49.5 5.8-76.5-13.4-35-60.8-100.9-144.4-100.9-35.7 0-68.5 11.6-94.8 33.4-21.8 18.1-39.1 43.6-47.4 69.8-15.4 48.8 4.8 125.5 5 126.2 2 7.4-2.5 15.1-10 17-7.5 2-15.3-2.5-17.3-9.9-.9-3.5-22.5-85.3-4.7-141.7C106.2 198.2 166 136.6 256 136.6c41.6 0 80.9 14.3 113.7 41.3 25.4 21 46.2 49.2 57 77.4 13.8 36 10.1 76.4-9.4 102.8-13 17.6-31.5 26.8-52 25.8-53.4-2.7-63-40.4-70-67.9-7.2-28.2-11.8-41.8-39.3-41.8-15.1 0-25.7 4.2-32.3 12.9-9 11.9-9.7 30.5-8.7 44 1 14.1 4 25.5 4.7 27.8 2.2 5.6 30.8 76.5 99.3 93.7 7.6 1.9 12.1 9.5 10.2 16.9-1.7 6.3-7.4 10.5-13.7 10.5z"}},{"tag":"path","attr":{"d":"M205.5 473.6c-3.8 0-7.5-1.5-10.3-4.4-34.3-36.4-53.7-77.1-61-128v-.3c-4.1-33.7 1.9-81.4 31.3-114.2 21.7-24.2 52.2-36.5 90.5-36.5 45.3 0 80.9 21.3 103.1 61.5 16.1 29.2 19.3 58.3 19.4 59.5.8 7.7-4.9 14.5-12.6 15.3-7.7.8-14.7-4.8-15.5-12.4 0-.3-2.8-25.3-16.5-49.7-17.2-30.7-43.4-46.3-78-46.3-29.9 0-53.3 9.1-69.4 27.1-23.2 25.9-27.7 65.8-24.5 92.2 6.4 45 23.5 80.8 53.7 112.8 5.3 5.6 5 14.5-.7 19.7-2.6 2.4-6.1 3.7-9.5 3.7z"}},{"tag":"path","attr":{"d":"M363.5 433.5c-30 0-55.5-8.4-75.9-25.1-41-33.4-45.6-87.8-45.8-90.1-.6-7.7 5.2-14.4 13-15 7.8-.6 14.5 5.1 15.1 12.8.1.8 4.2 45.3 35.8 70.9 18.7 15.1 43.7 21.1 74.5 17.6 7.7-.9 14.7 4.6 15.6 12.3.9 7.7-4.7 14.6-12.4 15.4-6.8.8-13.5 1.2-19.9 1.2zM387.2 62.6C375.5 54.9 334 32 256 32c-81.9 0-123.5 25.3-132.7 31.7-.6.4-1.2.8-1.7 1.3-.1.1-.2.1-.2.1-2.9 2.6-4.7 6.3-4.7 10.4 0 7.7 6.3 13.9 14.1 13.9 3.1 0 5.9-1 8.2-2.6l-.1.1c.4-.3 36.3-27 117.1-27s116.7 26.8 117.1 27l-.1-.1.2-.2c2.4 1.8 5.3 2.8 8.5 2.8 7.8 0 14.1-6.2 14.1-13.9 0-5.8-3.5-10.8-8.6-12.9z"}}]})(props);
};
function IoMdFitness (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M434.3 315.5l29.7-29.7-29.7-29.8-74.3 74.3L181.7 152 256 77.7 226.3 48l-29.7 29.7L166.8 48l-44.5 44.5-29.8-29.7-29.7 29.7 29.7 29.7L48 166.8l29.7 29.7L48 226.3 77.7 256l74.3-74.3L330.3 360 256 434.3l29.7 29.7 29.7-29.7 29.7 29.7 44.5-44.5 29.7 29.7 29.7-29.7-29.7-29.7 44.5-44.5-29.5-29.8z"}}]})(props);
};
function IoMdFlag (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M396 83.2c-13.8 1.7-31.1 4.2-49.6 4.2-28.8 0-55-6.8-81.5-12.2C238 69.7 210.2 64 180.8 64c-58.6 0-78.5 12.1-80.6 13.4L96 80.3V448h48V269.8c9.7-1.2 21.9-2 36.9-2 27.3 0 52.8 10 79.8 15.5 27.6 5.6 56 11.5 86.9 11.5 18.4 0 34.6-2.4 48.4-4 7.5-.9 14-1.7 20-2.7V80.2c-5 1-12.5 2.1-20 3z"}}]})(props);
};
function IoMdFlame (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M393.3 222.1l-.2 10.4c-.8 11.7-7.9 43.4-22.1 54.7 7-15.2 17.3-47.2 10.2-82.7C361.6 107 287.5 65.6 193 50l-17.2-2.2c39.5 47.2 56.1 81.7 49.7 116.8-2.3 12.6-10 23.4-14 31.6 0 0 2.4-12.9 2-28.7-.3-14.2-6.6-31-18-39.6 3.5 18.4-.8 33.5-9.1 47.7-24.7 42.2-85.4 57.8-90.4 135.8v3.8c0 53.7 25.6 99 68.7 125-6.8-12.3-12-35.2-5.7-60.2 4 23.7 14 36 24.9 51.8 8.2 11.7 19.1 19.3 33.1 24.9s31 7.2 47.9 7.2c55.8 0 91.4-18.1 119.1-50.5s32.1-68 32.1-106.4-8.5-60.9-22.8-84.9z"}}]})(props);
};
function IoMdFlashOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M459.9 435.5L76.1 52.5 51.9 76.6 160 184.3V272h64v192l72-144 139.9 139.5zM352 208h-64l64-160H160v40.3l168 167.6z"}}]})(props);
};
function IoMdFlash (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M160 48v224h64v192l128-256h-64l64-160H160z"}}]})(props);
};
function IoMdFlashlight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M128 298l64 64v118h128V362l64-64V176l-255.2.4L128 298zM234.8 32h42.4v64h-42.4V32zM80 110.4L109.9 80l44.9 45.6-29.9 30.4L80 110.4zm277.1 15.2l45-45.5 29.9 30.4-44.9 45.5-30-30.4z"}}]})(props);
};
function IoMdFlask (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M436.9 354.4L336 192V96h32V48H144v48h32v96L76.1 354.4C67.7 370.3 63.6 385.8 64 400c1.1 36.5 28.7 64 65.1 64H385c36.3 0 62.1-27.6 63-64 .3-14.2-2.6-29.7-11.1-45.6zM155.1 304l29.5-48h143.1l29.8 48H155.1z"}}]})(props);
};
function IoMdFlower (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M405.1 256c25.2-11.9 42.9-37.1 42.9-66.9 0-41-33.6-74.3-75-74.3-15.9 0-30.3 4.8-42.6 13.1l.6-5.6c0-41-33.6-74.3-75-74.3s-75 33.3-75 74.3l.6 5.6c-12-8.3-26.7-13.1-42.6-13.1-41.4 0-75 33.3-75 74.3 0 29.7 17.7 55 42.9 66.9C81.7 267.9 64 293.1 64 322.9c0 41 33.6 74.3 75 74.3 15.9 0 30.3-4.8 42.6-13.1l-.6 5.6c0 41 33.6 74.3 75 74.3s75-33.3 75-74.3l-.6-5.6c12 8.3 26.7 13.1 42.6 13.1 41.4 0 75-33.3 75-74.3 0-29.8-17.7-55-42.9-66.9zM256 330.3c-41.4 0-75-33.3-75-74.3s33.6-74.3 75-74.3 75 33.3 75 74.3-33.6 74.3-75 74.3z"}}]})(props);
};
function IoMdFolderOpen (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M437.334 144H256.006l-42.668-48H74.666C51.197 96 32 115.198 32 138.667v234.666C32 396.802 51.197 416 74.666 416h362.668C460.803 416 480 396.802 480 373.333V186.667C480 163.198 460.803 144 437.334 144zM448 373.333c0 5.782-4.885 10.667-10.666 10.667H74.666C68.884 384 64 379.115 64 373.333V176h373.334c5.781 0 10.666 4.885 10.666 10.667v186.666z"}}]})(props);
};
function IoMdFolder (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M213.338 96H74.666C51.197 96 32 115.198 32 138.667v234.666C32 396.802 51.197 416 74.666 416h362.668C460.803 416 480 396.802 480 373.333V186.667C480 163.198 460.803 144 437.334 144H256.006l-42.668-48z"}}]})(props);
};
function IoMdFootball (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.3 48 48 141.3 48 256s93.3 208 208 208 208-93.3 208-208S370.7 48 256 48zM127 238.2l39.2 17.9 17.1 66.9-15.6 29.3-57.2-.7C95.6 329 86.2 303.1 83 276.3l44-38.1zm217.3 114.1L328.7 323l17.1-67 39.1-17.8 44 38.1c-3.1 26.8-12.6 52.7-27.5 75.3l-57.1.7zm32.4-146.2l-43.6 19.6-61.1-51.6v-47.2l47.9-32.6c29.8 11.9 56.4 32.3 75.6 57.8l-18.8 54zM191.3 94.4l47.7 32.5v47.2l-61 51.5-43-19.6-18.7-53.6c19.3-26.1 45.1-46 75-58zM218.4 426c-.7-.2-1.3-.3-2-.5l-20.5-55.1 14.7-29.4h90.8l15 30.3-19.8 53.9c-1 .2-2 .5-3 .7-11.5 2.3-27 3.8-40.4 4.1-11.7-.1-23.4-1.5-34.8-4z"}}]})(props);
};
function IoMdFunnel (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M208 400h96v-47.994h-96V400zM32 112v47.994h448V112H32zm80 168.783h288v-49.555H112v49.555z"}}]})(props);
};
function IoMdGift (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M424 134.5h-45.8c2.3-6.6 3.8-13.9 3.8-21.3 0-35.4-28.1-63.2-63-63.2-22.1 0-41.2 10.7-52.5 28L256 92.3l-10.5-14.5C234.2 60.7 215.1 48 193 48c-34.9 0-63 29.8-63 65.2 0 7.5 1.5 14.7 3.8 21.3H88c-23.3 0-41.8 19-41.8 42.7L46 421.8c0 23.7 17.4 42.2 40.7 42.2h336.7c23.3 0 42.7-18.5 42.7-42.2V177.2c-.1-23.7-18.8-42.7-42.1-42.7zM320 91c11.6 0 21 9.5 21 21 0 11.6-9.4 21-21 21s-21-9.5-21-21 9.4-21 21-21zm-128 0c11.6 0 21 9.5 21 21 0 11.6-9.4 21-21 21s-21-9.5-21-21 9.4-21 21-21zM88 177.2h106.7L151 237.5l34 25 50-69.1.2-.2-.2 228.6H88V177.2zm336 244.6H277V193.4l50 69.1 34-25-43.7-60.4H424v244.7z"}}]})(props);
};
function IoMdGitBranch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}}]})(props);
};
function IoMdGitCommit (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M480 224h-99.8c-14.2-55.2-64.2-96-123.7-96S147 168.8 132.8 224H32v64h100.8c14.2 55.2 64.2 96 123.7 96s109.5-40.8 123.7-96H480v-64zM256.5 336c-44 0-79.8-35.9-79.8-80s35.8-80 79.8-80 79.8 35.9 79.8 80-35.8 80-79.8 80z"}}]})(props);
};
function IoMdGitCompare (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M192 382h-22c-24.6 0-29-3.6-33.8-9.6-5.5-6.9-8.2-19.1-8.2-54.2V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S32 60.7 32 96c0 23.7 12.9 44.3 32 55.4v166.8c0 46.4 3.7 70.8 22.1 94 19.9 25.1 45 35.8 83.9 35.8h22v64l96-96-96-96v62zM96 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM448 360.6V190.8c0-46.4-3.7-70.8-22.1-94C406 71.7 380.9 62 342 62h-22V0l-96 96 96 96v-64h22c24.6 0 29 2.6 33.8 8.6 5.5 6.9 8.2 19.1 8.2 54.2v169.8c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.3-32-55.4zM416 456c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}}]})(props);
};
function IoMdGitMerge (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M384 224c-23.7 0-44.4 12.9-55.4 32-18.3-.5-52.4-4.1-75.5-18.1-32.3-19.4-64.6-53.1-87-90.5 15.7-11.7 26-30.3 26-51.4 0-35.3-28.7-64-64-64S64 60.7 64 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.3-32-55.4V244.2c18.7 19.4 39.1 36 60 48.6 38.8 23.4 87 26.9 108.6 27.3 11.1 19.1 31.7 31.9 55.4 31.9 35.3 0 64-28.7 64-64s-28.7-64-64-64zM88 96c0-22.1 17.9-40 40-40s40 17.9 40 40-17.9 40-40 40-40-17.9-40-40zm80 320c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40zm216-88c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}}]})(props);
};
function IoMdGitNetwork (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M448 96c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.6 12.9 44.3 32 55.4v52.8l-96 48-96-48v-52.8c19.1-11.1 32-31.8 32-55.4 0-35.3-28.7-64-64-64S64 60.7 64 96c0 23.6 12.9 44.3 32 55.4v92.4l128 64v52.8c-19.1 11.1-32 31.8-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.6-12.9-44.3-32-55.4v-52.8l128-64v-92.4c19.1-11.1 32-31.8 32-55.4zM128 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm128 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm128-320c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}}]})(props);
};
function IoMdGitPullRequest (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M416 376.6V206.8c0-46.4-3.7-70.8-22.1-94C374 87.7 348.9 77 310 77h-22V16l-96 96 96 96v-65h22c24.6 0 29 3.6 33.8 9.6 5.5 6.9 8.2 19.1 8.2 54.2v169.8c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.3-32-55.4zM384 472c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM128 48c-35.3 0-64 28.7-64 64 0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.3-32-55.4V167.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64zm0 424c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm0-320c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}}]})(props);
};
function IoMdGlasses (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M480 176H272v.1h-32v-.1H32v48h11l5 21.5C64 313 88.5 336 144 336s96-17.4 96-90.5V224s1.5-16 16-16 16 16 16 16v21.8c0 73 42.1 90.2 97 90.2s79-25 95-90.2l5-21.8h11v-48z"}}]})(props);
};
function IoMdGlobe (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.124 48 48 141.125 48 256s93.124 208 208 208c114.875 0 208-93.125 208-208S370.875 48 256 48zm-21.549 384.999c-39.464-4.726-75.978-22.392-104.519-50.932C96.258 348.393 77.714 303.622 77.714 256c0-42.87 15.036-83.424 42.601-115.659.71 8.517 2.463 17.648 2.014 24.175-1.64 23.795-3.988 38.687 9.94 58.762 5.426 7.819 6.759 19.028 9.4 28.078 2.583 8.854 12.902 13.498 20.019 18.953 14.359 11.009 28.096 23.805 43.322 33.494 10.049 6.395 16.326 9.576 13.383 21.839-2.367 9.862-3.028 15.937-8.13 24.723-1.557 2.681 5.877 19.918 8.351 22.392 7.498 7.497 14.938 14.375 23.111 21.125 12.671 10.469-1.231 24.072-7.274 39.117zm147.616-50.932c-25.633 25.633-57.699 42.486-92.556 49.081 4.94-12.216 13.736-23.07 21.895-29.362 7.097-5.476 15.986-16.009 19.693-24.352 3.704-8.332 8.611-15.555 13.577-23.217 7.065-10.899-17.419-27.336-25.353-30.781-17.854-7.751-31.294-18.21-47.161-29.375-11.305-7.954-34.257 4.154-47.02-1.417-17.481-7.633-31.883-20.896-47.078-32.339-15.68-11.809-14.922-25.576-14.922-42.997 12.282.453 29.754-3.399 37.908 6.478 2.573 3.117 11.42 17.042 17.342 12.094 4.838-4.043-3.585-20.249-5.212-24.059-5.005-11.715 11.404-16.284 19.803-24.228 10.96-10.364 34.47-26.618 32.612-34.047s-23.524-28.477-36.249-25.193c-1.907.492-18.697 18.097-21.941 20.859.086-5.746.172-11.491.26-17.237.055-3.628-6.768-7.352-6.451-9.692.8-5.914 17.262-16.647 21.357-21.357-2.869-1.793-12.659-10.202-15.622-8.968-7.174 2.99-15.276 5.05-22.45 8.039 0-2.488-.302-4.825-.662-7.133a176.585 176.585 0 0 1 45.31-13.152l14.084 5.66 9.944 11.801 9.924 10.233 8.675 2.795 13.779-12.995L282 87.929V79.59c27.25 3.958 52.984 14.124 75.522 29.8-4.032.361-8.463.954-13.462 1.59-2.065-1.22-4.714-1.774-6.965-2.623 6.531 14.042 13.343 27.89 20.264 41.746 7.393 14.801 23.793 30.677 26.673 46.301 3.394 18.416 1.039 35.144 2.896 56.811 1.788 20.865 23.524 44.572 23.524 44.572s10.037 3.419 18.384 2.228c-7.781 30.783-23.733 59.014-46.769 82.052z"}}]})(props);
};
function IoMdGrid (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M409.6 64H102.4C81.3 64 64 81.3 64 102.4v307.2c0 21.1 17.3 38.4 38.4 38.4h307.2c21.1 0 38.4-17.3 38.4-38.4V102.4c0-21.1-17.3-38.4-38.4-38.4zM179.2 409.6h-76.8v-76.8h76.8v76.8zm0-115.2h-76.8v-76.8h76.8v76.8zm0-115.2h-76.8v-76.8h76.8v76.8zm115.2 230.4h-76.8v-76.8h76.8v76.8zm0-115.2h-76.8v-76.8h76.8v76.8zm0-115.2h-76.8v-76.8h76.8v76.8zm115.2 230.4h-76.8v-76.8h76.8v76.8zm0-115.2h-76.8v-76.8h76.8v76.8zm0-115.2h-76.8v-76.8h76.8v76.8z"}}]})(props);
};
function IoMdHammer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M474.1 398.2L229.8 167.8s8.8-57.7 26.2-71.8c17.5-14.2 48-32 48-32V32c-32 0-58.8 8.3-96.9 27.3-38 18.9-66.8 47.8-74.4 55.4-7.6 7.6-18.1 19.5-24.7 28.9s-5.3 20.1-5.3 20.1l-19.7 17-4-4c-2.3-2.3-6.2-2.3-8.5 0l-36.8 36.8c-2.3 2.3-2.3 6.2 0 8.5l59.4 59.4c2.3 2.3 6.2 2.3 8.5 0l36.8-36.8c2.3-2.3 2.3-6.2 0-8.5l-10.3-10.3 14.6-14.3c6.8-3.7 25.4-8.9 39.1-5.1l214.9 267.3c8.1 8.2 20.3 8.2 28.5 0l46.8-47.1c10.3-8 10.3-22.3 2.1-28.4z"}}]})(props);
};
function IoMdHand (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M450.679 273.5c-14.585-14.577-36.054-15.89-50.639-1.312l-41.687 41.664c-10.852 10.836-23.93 10.859-31.564 1.852-5.057-5.968-3.061-24.374-1.644-36.049l20.907-171.849c1.867-15.353-9.07-30.185-24.43-32.051-15.358-1.867-29.322 9.939-31.191 25.289L267.37 236.021c-1.205 3.358-3.79 3.938-4.081-.582L255.44 60c0-15.465-12.542-28-28.014-28-15.473 0-28.015 12.535-28.015 28l-.552 176.752c.146 2.04-1.604 2.624-1.92.294L172.016 99.077c-2.75-15.219-17.323-26.203-32.548-23.453-15.227 2.748-25.339 18.187-22.591 33.403l22.193 161.455c.023 2.872-.941 4.513-2.308.831l-33.109-88.517c-5.18-14.572-21.196-23.065-35.776-17.889-14.579 5.177-22.201 22.061-17.023 36.631l58.042 189.625c.303 1.046.624 2.085.953 3.118l.121.39c.011.031.025.058.035.088C126.079 444.233 172.57 480 227.427 480c35.116 0 71.591-12.378 99.357-33.672l.003-.002c29.99-18.051 126.071-121.347 126.071-121.347 14.587-14.577 12.408-36.899-2.179-51.479z"}}]})(props);
};
function IoMdHappy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C140.563 48 48 141.6 48 256s92.563 208 208 208 208-93.6 208-208S370.401 48 256 48zm0 374.4c-91.518 0-166.404-74.883-166.404-166.4 0-91.518 74.887-166.4 166.404-166.4S422.404 164.482 422.404 256 347.518 422.4 256 422.4zm72.8-187.2c17.683 0 31.201-13.518 31.201-31.2s-13.519-31.2-31.201-31.2c-17.682 0-31.2 13.518-31.2 31.2s13.518 31.2 31.2 31.2zm-145.6 0c17.682 0 31.2-13.518 31.2-31.2s-13.519-31.2-31.2-31.2c-17.683 0-31.201 13.518-31.201 31.2s13.519 31.2 31.201 31.2zM256 370.4c48.883 0 89.436-30.164 106.081-72.801H149.919C166.564 340.236 207.117 370.4 256 370.4z"}}]})(props);
};
function IoMdHeadset (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z"}}]})(props);
};
function IoMdHeartDislike (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M51.9 76.6l25 25c-18.1 20.3-29 47.3-29 77.6 0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2c20.6-18.9 39.9-36.6 57.5-53.3l92.2 92 24-24-383.8-383-24.2 24.1zM464 179.1C464 114.2 414.1 64 349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64c-8.4 0-16.5.9-24.3 2.5l253.7 253.1C437.3 270.9 464 228 464 179.1z"}}]})(props);
};
function IoMdHeartEmpty (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64 97.9 64 48 114.2 48 179.1c0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2C393.3 322.4 464 258.6 464 179.1 464 114.2 414.1 64 349.6 64zm-80.8 329.3l-4.2 3.9-8.6 7.8-8.6-7.8-4.2-3.9c-50.4-46.3-94-86.3-122.7-122-28-34.7-40.4-63.1-40.4-92.2 0-22.9 8.4-43.9 23.7-59.3 15.2-15.4 36-23.8 58.6-23.8 26.1 0 52 12.2 69.1 32.5l24.5 29.1 24.5-29.1c17.1-20.4 43-32.5 69.1-32.5 22.6 0 43.4 8.4 58.7 23.8 15.3 15.4 23.7 36.5 23.7 59.3 0 29-12.5 57.5-40.4 92.2-28.8 35.7-72.3 75.7-122.8 122z"}}]})(props);
};
function IoMdHeartHalf (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64 97.9 64 48 114.2 48 179.1c0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2C393.3 322.4 464 258.6 464 179.1 464 114.2 414.1 64 349.6 64zM256 406V157.7l24.5-29.1c17.1-20.4 43-32.5 69.1-32.5 22.6 0 43.4 8.4 58.7 23.8 15.3 15.4 23.7 36.5 23.7 59.3 0 29-12.5 57.5-40.4 92.2C362.8 307 306.4 359.7 256 406z"}}]})(props);
};
function IoMdHeart (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"}}]})(props);
};
function IoMdHelpBuoy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm61 356l-12.2-39.6c13-5.8 24.9-14 35.3-24.4 10.4-10.4 18.6-22.3 24.4-35.3l39.5 12.1c-7.9 19.3-19.7 37-34.9 52.2-15.1 15.3-32.8 27.1-52.1 35zM195 108l12.2 39.6c-13 5.8-24.9 14-35.3 24.4-10.4 10.4-18.6 22.3-24.4 35.3L108 195.2c7.9-19.3 19.7-37 34.9-52.2 15.1-15.3 32.8-27.1 52.1-35zm61 84c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm113.1-49.1c15.2 15.2 26.9 32.9 34.9 52.1l-39.5 12.2c-5.9-13-14-24.9-24.4-35.3-10.4-10.4-22.3-18.6-35.3-24.4l12.1-39.5c19.3 7.9 37 19.7 52.2 34.9zM142.9 369.1c-15.2-15.1-27-32.8-34.9-52.1l39.5-12.2c5.9 13 14 24.9 24.4 35.3 10.4 10.4 22.3 18.6 35.3 24.4L195.1 404c-19.3-7.9-37-19.7-52.2-34.9z"}}]})(props);
};
function IoMdHelpCircleOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}},{"tag":"path","attr":{"d":"M235 339h42v42h-42zM276.8 318h-41.6c0-67 62.4-62.2 62.4-103.8 0-22.9-18.7-41.7-41.6-41.7S214.4 192 214.4 214h-41.6c0-46 37.2-83 83.2-83s83.2 37.1 83.2 83.1c0 52-62.4 57.9-62.4 103.9z"}}]})(props);
};
function IoMdHelpCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm21 333h-42v-42h42v42zm-.2-63h-41.6c0-67 62.4-62.2 62.4-103.8 0-22.9-18.7-41.7-41.6-41.7S214.4 192 214.4 214h-41.6c0-46 37.2-83 83.2-83s83.2 37.1 83.2 83.1c0 52-62.4 57.9-62.4 103.9z"}}]})(props);
};
function IoMdHelp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M289 448h-66v-65h66v65zm-1-98h-64c0-101 96-95.1 96-159 0-35.2-28.8-63.4-64-63.4S192 158 192 192h-64c0-71 57.3-128 128-128s128 56.4 128 127c0 79.9-96 89-96 159z"}}]})(props);
};
function IoMdHome (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z"}}]})(props);
};
function IoMdHourglass (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M128 48v122.8h.2l-.2.2 85.3 85-85.3 85.2.2.2h-.2V464h256V341.4h-.2l.2-.2-85.3-85.2 85.3-85-.2-.2h.2V48H128zm213.3 303.9v71.5H170.7v-71.5l85.3-85.2 85.3 85.2zM256 245.4l-85.3-85.2V87.6h170.7v72.5L256 245.4z"}}]})(props);
};
function IoMdIceCream (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M128.1 256l128 224 128-224zM392 161c3-9 4.7-22.7 4.7-32.9 0-53.1-43-96.1-96.1-96.1-31.4 0-59.2 15-76.8 38.3 0 0-9.1 14-10.8 29l-3.4-1c-2.3-9-3.7-20 1.6-31.5-7.4-2.5-9.4-2.8-17.6-2.8-41.7 0-75.6 33.8-75.6 75.6 0 6.3.8 15.5 2.3 21.4-13.9 3.5-24.3 16.1-24.3 31 0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32 0-14.8-10.2-27.4-24-31z"}}]})(props);
};
function IoMdImage (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M448 405.333V106.667C448 83.198 428.802 64 405.333 64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333zM181.333 288l53.334 64 74.666-96 96 128H106.667l74.666-96z"}}]})(props);
};
function IoMdImages (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M457.6 140.2l-82.5-4-4.8-53.8c-1-11.3-11.1-19.2-22.9-18.3L51.5 88.4c-11.8 1-20.3 10.5-19.4 21.7l21.2 235.8c1 11.3 11.2 19.2 22.9 18.3l15-1.2-2.4 45.8c-.6 12.6 9.2 22.8 22.4 23.5L441.3 448c13.2.6 24.1-8.6 24.8-21.2L480 163.5c.6-12.5-9.3-22.7-22.4-23.3zm-354.9 5.3l-7.1 134.8L78.1 305 62 127v-.5-.5c1-5 4.4-9 9.6-9.4l261-21.4c5.2-.4 9.7 3 10.5 7.9 0 .2.3.2.3.4 0 .1.3.2.3.4l2.7 30.8-219-10.5c-13.2-.4-24.1 8.8-24.7 21.3zm334 236.9l-84.8-99.5-37.4 34.3-69.2-80.8-122.7 130.7L133 168v-.4c1-5.4 6.2-9.3 11.9-9l291.2 14c5.8.3 10.3 4.7 10.4 10.2 0 .2.3.3.3.5l-10.1 199.1z"}},{"tag":"path","attr":{"d":"M384 256c17.6 0 32-14.4 32-32s-14.3-32-32-32c-17.6 0-32 14.3-32 32s14.3 32 32 32z"}}]})(props);
};
function IoMdInfinite (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M434.7 188c-18.8-18-43.8-28-70.5-28-26.6 0-51.6 9.9-70.4 27.9l-17.6 15.9 33.1 32.1 17-15.4.1-.1c10.1-9.6 23.5-15 37.7-15 14.2 0 27.6 5.3 37.7 14.9 10 9.6 15.4 22.3 15.4 35.8 0 13.5-5.5 26.1-15.4 35.6-10.1 9.6-23.5 15-37.7 15s-27.6-5.3-37.7-14.9L218.2 188c-18.9-18-43.9-28-70.4-28-26.7 0-51.7 9.9-70.5 28C58.4 206.1 48 230.2 48 256c0 25.7 10.4 49.9 29.3 68 18.8 18 43.8 28 70.5 28 26.7 0 51.7-9.9 70.4-28l37.8-36.1 37.7 36.1c18.9 18 43.9 28 70.4 28 26.7 0 51.7-9.9 70.4-27.9 19-18.1 29.4-42.2 29.4-68 .1-25.8-10.3-50-29.2-68.1zM185.5 291.7c-10.1 9.6-23.5 15-37.7 15-14.2 0-27.6-5.3-37.7-14.9-10-9.6-15.4-22.3-15.4-35.8 0-13.5 5.5-26.1 15.4-35.6 10.1-9.6 23.5-15 37.7-15 14.2 0 27.6 5.3 37.7 14.9l37.4 35.8-37.4 35.6z"}}]})(props);
};
function IoMdInformationCircleOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}},{"tag":"path","attr":{"d":"M277 360h-42V235h42v125zm0-166h-42v-42h42v42z"}}]})(props);
};
function IoMdInformationCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm21 312h-42V235h42v125zm0-166h-42v-42h42v42z"}}]})(props);
};
function IoMdInformation (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M232 235h48v137h-48zM232 140h48v48h-48z"}}]})(props);
};
function IoMdJet (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M480 32s-23.4-.7-59.3 27.1C404 72 244.9 186.8 244.9 186.8l-168.8-4.2L32 222l109.8 55.2-8.6 10.8-87.9.1-7.2 40.5 63.1 48.7-26.6 59.8 60-26.4 48.7 63.1 40.5-7.2.1-87.8 10.9-8.5L290.1 480l39.3-44.1-4.2-168.7S440.1 108.2 453 91.6C480.7 55.5 480 32 480 32z"}}]})(props);
};
function IoMdJournal (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M117.3 42.7c-17.6 0-32 14.4-32 32v362.7c0 17.6 14.4 32 32 32H320V42.7H117.3zM384.7 42.7H368v426.7h16.7c23.1 0 42-18.9 42-42V84.7c0-23.1-18.9-42-42-42z"}}]})(props);
};
function IoMdKey (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M249.2 224c-14.2-40.2-55.1-72-100.2-72-57.2 0-101 46.8-101 104s45.8 104 103 104c45.1 0 84.1-31.8 98.2-72H352v64h69.1v-64H464v-64H249.2zm-97.6 66.5c-19 0-34.5-15.5-34.5-34.5s15.5-34.5 34.5-34.5 34.5 15.5 34.5 34.5-15.5 34.5-34.5 34.5z"}}]})(props);
};
function IoMdKeypad (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 398.5c-22.3 0-40.5 18.3-40.5 40.7 0 22.4 18.2 40.7 40.5 40.7s40.5-18.3 40.5-40.7c0-22.3-18.2-40.7-40.5-40.7zM136.5 32C114.2 32 96 50.3 96 72.7s18.2 40.7 40.5 40.7S177 95.1 177 72.7 158.8 32 136.5 32zm0 122.2c-22.3 0-40.5 18.3-40.5 40.7s18.2 40.7 40.5 40.7 40.5-18.3 40.5-40.7-18.2-40.7-40.5-40.7zm0 122.2c-22.3 0-40.5 18.3-40.5 40.7 0 22.4 18.2 40.7 40.5 40.7s40.5-18.3 40.5-40.7c0-22.4-18.2-40.7-40.5-40.7zm239-162.9c22.3 0 40.5-18.3 40.5-40.7S397.8 32 375.5 32 335 50.3 335 72.7s18.2 40.8 40.5 40.8zM256 276.4c-22.3 0-40.5 18.3-40.5 40.7 0 22.4 18.2 40.7 40.5 40.7s40.5-18.3 40.5-40.7c0-22.4-18.2-40.7-40.5-40.7zm119.5 0c-22.3 0-40.5 18.3-40.5 40.7 0 22.4 18.2 40.7 40.5 40.7s40.5-18.3 40.5-40.7c0-22.4-18.2-40.7-40.5-40.7zm0-122.2c-22.3 0-40.5 18.3-40.5 40.7s18.2 40.7 40.5 40.7 40.5-18.3 40.5-40.7-18.2-40.7-40.5-40.7zm-119.5 0c-22.3 0-40.5 18.3-40.5 40.7s18.2 40.7 40.5 40.7 40.5-18.3 40.5-40.7-18.2-40.7-40.5-40.7zM256 32c-22.3 0-40.5 18.3-40.5 40.7s18.2 40.7 40.5 40.7 40.5-18.3 40.5-40.7S278.3 32 256 32z"}}]})(props);
};
function IoMdLaptop (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M437.334 416C460.803 416 480 396.803 480 373.334V106.668C480 83.199 460.803 64 437.334 64H74.666C51.197 64 32 83.199 32 106.668v266.666C32 396.803 51.197 416 74.666 416H0c0 23.469 64 32 96 32h320c32 0 96-8.531 96-32h-74.666zM74.666 106.668h362.668v271.998H74.666V106.668zM256 434.666c-11.729 0-21.333-9.604-21.333-21.334 0-11.729 9.604-21.332 21.333-21.332s21.333 9.604 21.333 21.332c0 11.73-9.604 21.334-21.333 21.334z"}}]})(props);
};
function IoMdLeaf (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M416 287.6C416 120.9 256 32 256 32S96 120.9 96 287.6c0 118.8 81.3 140.5 128 143.2V480h64v-49.3c46.7-2.6 128-24.3 128-143.1z"}}]})(props);
};
function IoMdLink (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M74.6 256c0-38.3 31.1-69.4 69.4-69.4h88V144h-88c-61.8 0-112 50.2-112 112s50.2 112 112 112h88v-42.6h-88c-38.3 0-69.4-31.1-69.4-69.4zm85.4 22h192v-44H160v44zm208-134h-88v42.6h88c38.3 0 69.4 31.1 69.4 69.4s-31.1 69.4-69.4 69.4h-88V368h88c61.8 0 112-50.2 112-112s-50.2-112-112-112z"}}]})(props);
};
function IoMdListBox (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M408 64H104c-22.091 0-40 17.908-40 40v304c0 22.092 17.909 40 40 40h304c22.092 0 40-17.908 40-40V104c0-22.092-17.908-40-40-40zM304 368H144v-48h160v48zm64-88H144v-48h224v48zm0-88H144v-48h224v48z"}}]})(props);
};
function IoMdList (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M80 280h256v48H80zM80 184h320v48H80zM80 88h352v48H80z"}},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M80 376h288v48H80z"}}]}]})(props);
};
function IoMdLocate (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 176c-44.004 0-80.001 36-80.001 80 0 44.004 35.997 80 80.001 80 44.005 0 79.999-35.996 79.999-80 0-44-35.994-80-79.999-80zm190.938 58.667c-9.605-88.531-81.074-160-169.605-169.599V32h-42.666v33.067c-88.531 9.599-160 81.068-169.604 169.599H32v42.667h33.062c9.604 88.531 81.072 160 169.604 169.604V480h42.666v-33.062c88.531-9.604 160-81.073 169.605-169.604H480v-42.667h-33.062zM256 405.333c-82.137 0-149.334-67.198-149.334-149.333 0-82.136 67.197-149.333 149.334-149.333 82.135 0 149.332 67.198 149.332 149.333S338.135 405.333 256 405.333z"}}]})(props);
};
function IoMdLock (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M376 186h-20v-40c0-55-45-100-100-100S156 91 156 146v40h-20c-22.002 0-40 17.998-40 40v200c0 22.002 17.998 40 40 40h240c22.002 0 40-17.998 40-40V226c0-22.002-17.998-40-40-40zM256 368c-22.002 0-40-17.998-40-40s17.998-40 40-40 40 17.998 40 40-17.998 40-40 40zm62.002-182H193.998v-40c0-34.004 28.003-62.002 62.002-62.002 34.004 0 62.002 27.998 62.002 62.002v40z"}}]})(props);
};
function IoMdLogIn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48c-42.9 0-84.2 13-119.2 37.5-34.2 24-60.2 57.2-75.1 96.1L58 192h45.7l1.9-5c8.2-17.8 19.4-33.9 33.5-48 31.2-31.2 72.7-48.4 116.9-48.4s85.7 17.2 116.9 48.4c31.2 31.2 48.4 72.7 48.4 116.9 0 44.1-17.2 85.7-48.4 116.9-31.2 31.2-72.7 48.4-116.9 48.4-44.1 0-85.6-17.2-116.9-48.4-14-14-25.3-30.1-33.5-47.9l-1.9-5H58l3.6 10.4c14.9 38.9 40.9 72.1 75.1 96.1C171.8 451.1 213 464 256 464c114.7 0 208-93.3 208-208S370.7 48 256 48z"}},{"tag":"path","attr":{"d":"M48 277.4h189.7l-43.6 44.7L224 352l96-96-96-96-31 29.9 44.7 44.7H48v42.8z"}}]})(props);
};
function IoMdLogOut (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M192 277.4h189.7l-43.6 44.7L368 352l96-96-96-96-31 29.9 44.7 44.7H192v42.8z"}},{"tag":"path","attr":{"d":"M255.7 421.3c-44.1 0-85.5-17.2-116.7-48.4-31.2-31.2-48.3-72.7-48.3-116.9 0-44.1 17.2-85.7 48.3-116.9 31.2-31.2 72.6-48.4 116.7-48.4 44 0 85.3 17.1 116.5 48.2l30.3-30.3c-8.5-8.4-17.8-16.2-27.7-23.2C339.7 61 298.6 48 255.7 48 141.2 48 48 141.3 48 256s93.2 208 207.7 208c42.9 0 84-13 119-37.5 10-7 19.2-14.7 27.7-23.2l-30.2-30.2c-31.1 31.1-72.5 48.2-116.5 48.2zM448.004 256.847l-.849-.848.849-.849.848.849z"}}]})(props);
};
function IoMdMagnet (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M383.6 98.8C352.1 65.8 308 48.2 256 48c-51.9.2-96 17.8-127.5 50.8C96.8 132 80 178.8 80 234c0 43.5 1.8 69.2 12.9 115.8 0 0 22.7 75.7 35.5 104.1 3.5 7.8 7.4 11.8 15.5 9.3 6.4-2 46.8-17.9 54.7-21.6 7.9-3.6 11.6-8.6 8.9-15.2-3.8-9.2-33.9-95.6-33.9-95.6-8.4-36.3-11.6-53.9-11.6-94.3 0-28.2 9.8-54.1 27.7-72.9 17.5-18.3 41-28.4 66.3-28.4s48.8 10.1 66.3 28.4c17.9 18.8 27.7 44.6 27.7 72.8 0 40-3.2 64-11.7 94.4s-32.2 90.1-33.9 95.6c-1.7 5.6 2.1 12.5 8.9 15.2 6.8 2.7 49.3 19.6 54.7 21.6 5.4 2 10.6.6 14.5-7.7 4-8.3 24.6-61.4 36.5-105.7 12-44.3 13-72.3 13-115.8 0-55.2-16.7-101.9-48.4-135.2zM173.1 419.7l-22.9 9.6c-6.9-16.3-17.2-43.2-25.9-77.2l22-6.5 26.8 74.1zm188.6 9.6l-22.9-9.6c7.2-16.6 19.1-45.1 26.6-74.1l22 6.5c-8.4 33.9-18.7 60.9-25.7 77.2z"}}]})(props);
};
function IoMdMailOpen (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M480 201.667c0-14.933-7.469-28.803-20.271-36.266L256 64 52.271 165.401C40.531 172.864 32 186.734 32 201.667v203.666C32 428.802 51.197 448 74.666 448h362.668C460.803 448 480 428.802 480 405.333V201.667zM256 304L84.631 192 256 106.667 427.369 192 256 304z"}}]})(props);
};
function IoMdMailUnread (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"circle","attr":{"cx":"432","cy":"128","r":"64"}},{"tag":"path","attr":{"d":"M382.9 203.4L256 288 80 170.7V128l176 117.3 101.1-67.4c-9.5-14.3-15.1-31.5-15.1-49.9 0-17.6 5.1-34.1 13.9-48H74.7C51.2 80 32 99.2 32 122.7v266.7c0 23.5 19.2 42.7 42.7 42.7h362.7c23.5 0 42.7-19.2 42.7-42.7V204.1c-13.9 8.8-30.4 13.9-48 13.9-18.2 0-35.1-5.4-49.2-14.6z"}}]})(props);
};
function IoMdMail (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"}}]})(props);
};
function IoMdMale (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M416 48H288v48h94.1L275.4 202.6C251.9 185.9 223.1 176 192 176c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144c0-31.1-9.9-59.9-26.6-83.4L416 129.9V224h48V48h-48zM192 416c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96z"}}]})(props);
};
function IoMdMan (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 106.6c20.6.1 37.3-16.6 37.3-37.3 0-20.6-16.7-37.3-37.3-37.3-20.6 0-37.3 16.7-37.3 37.3 0 20.6 16.7 37.3 37.3 37.3zM293.4 115h-74.8c-28.2 0-46.6 24.8-46.6 48.4V277c0 22 31 22 31 0V172h6v285.6c0 30.4 42 29.4 43 0V293h8v164.7c1.7 31.2 43 28.2 43-.1V172h5v105c0 22 32 22 32 0V163.4c0-23.5-18.5-48.4-46.6-48.4z"}}]})(props);
};
function IoMdMap (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M437.333 64c-2.176 0-4.396 1.369-9.176 3.207L320 108.802 192 64 71.469 104.531C67.197 105.604 64 109.864 64 115.197v322.136C64 443.729 68.271 448 74.666 448c1.828 0 6.505-2.33 9.087-3.319L192 403.197 320 448l120.531-40.531c4.271-1.073 7.469-5.334 7.469-10.667V74.666C448 68.271 443.729 64 437.333 64zM320 405.333l-128-44.802V106.666l128 44.803v253.864z"}}]})(props);
};
function IoMdMedal (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M273.5 152.1H48l54.1-103.9h240.7z"}},{"tag":"circle","attr":{"cx":"256.2","cy":"377.2","r":"86.6"}},{"tag":"path","attr":{"d":"M348.9 299.1l115.1-147-69.3-103.9L256.4 256c32.3 0 62.7 12.7 85.5 35.5 2.5 2.5 4.8 5 7 7.6zM205.8 266.6L152.3 186H48.4l90.1 161.5c5.2-21.2 16.1-40.6 32-56.4 10.4-10.3 22.3-18.6 35.3-24.5z"}}]})(props);
};
function IoMdMedical (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M351.9 256L460 193.6l-48-83.2-108 62.4V48h-96v124.8l-108-62.4-48 83.2L160.1 256 52 318.4l48 83.2 108-62.4V464h96V339.2l108 62.4 48-83.2z"}}]})(props);
};
function IoMdMedkit (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M352 144v-39.6C352 82 334 64 311.6 64H200.4C178 64 160 82 160 104.4V144H48v263.6C48 430 66 448 88.4 448h335.2c22.4 0 40.4-18 40.4-40.4V144H352zm-152-40h112v40H200v-40zm136 224h-56v56h-48v-56h-56v-48h56v-56h48v56h56v48z"}}]})(props);
};
function IoMdMegaphone (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M382.1 143.4l-23.1 23c14.7 14.7 23.9 35.2 23.9 57.6s-9.2 42.9-23.9 57.6l23.1 23.1c20.6-20.6 33.4-49.2 33.4-80.6s-12.8-60.1-33.4-80.7z"}},{"tag":"path","attr":{"d":"M428.2 99l-22.7 22.7c26.1 26.1 42.3 62.4 42.3 102.3 0 39.8-16.1 76.1-42.3 102.3l22.7 22.7c31.9-32.1 51.8-76.3 51.8-125s-19.8-92.9-51.8-125zM320 184.1V80h-32l-96 80H64l-32 16v112l32 16 80 128h48l-30-128h30l96 64h32V263.9c18.4-1.7 32-18.9 32-39.9s-13.6-38.2-32-39.9z"}}]})(props);
};
function IoMdMenu (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"}}]})(props);
};
function IoMdMicOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M367.951 354.654l-26.616-26.562-9.568-9.548-4.698-4.706L187 174.041v.346L76.112 63.531 51.921 87.572 187 222.47v28.816c0 37.79 31.121 68.714 68.91 68.714a68.6 68.6 0 0 0 24.565-4.545l32.389 32.274c-17.333 8.793-36.812 13.86-56.782 13.86-62.986 0-121.365-48.59-121.365-116.59H95.773C95.773 322 158 387.701 233 398.013V480h46v-81.987c22-3.352 43.066-11.222 61.627-22.622l95.278 95.078 24.033-24-33.847-33.785-58.216-57.959 58.224 57.959-58.148-58.03zM325 251.286V100.714C325 62.924 293.791 32 256 32s-69 30.924-69 68.714v25.244l137.109 136.968c.67-3.791.891-7.679.891-11.64zM416.439 245h-38.941c0 20.496-5.498 39.676-14.931 56.197l27.572 27.516c16.523-24.11 26.3-52.787 26.3-83.713zM459.999 446.427l-33.897-33.743 33.855 33.785z"}}]})(props);
};
function IoMdMic (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 320c37.712 0 68.571-30.924 68.571-68.714V100.714C324.571 62.924 293.712 32 256 32s-68.571 30.924-68.571 68.714v150.572c0 37.79 30.859 68.714 68.571 68.714zm121.139-75.452c0 68.714-58.282 116.815-121.139 116.815s-121.139-48.102-121.139-116.815H96c0 77.873 61.719 143.153 137.144 153.465V480h45.713v-81.987C354.281 386.561 416 322.421 416 244.548h-38.861z"}}]})(props);
};
function IoMdMicrophone (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M384 112V84.4c0-29-24.5-52.4-54.8-52.4H182.9C152.5 32 128 55.4 128 84.4V112h152v37H128v43h152v37H128v43h152v37H128v41.8c0 29 24.5 52.2 54.9 52.2H213v77h86v-77h30.2c30.3 0 54.8-23.2 54.8-52.2V309h-56v-37h56v-43h-56v-37h56v-43h-56v-37h56z"}}]})(props);
};
function IoMdMoon (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M195 125c0-26.3 5.3-51.3 14.9-74.1C118.7 73 51 155.1 51 253c0 114.8 93.2 208 208 208 97.9 0 180-67.7 202.1-158.9-22.8 9.6-47.9 14.9-74.1 14.9-106 0-192-86-192-192z"}}]})(props);
};
function IoMdMore (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z"}}]})(props);
};
function IoMdMove (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M480 256l-96-96v64h-96v-96h64l-96-96-96 96h64v96h-96v-64l-96 96 96 96v-64h96v96h-64l96 96 96-96h-64v-96h96v64z"}}]})(props);
};
function IoMdMusicalNote (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 64v225.1c-12.6-7.3-27.1-11.7-42.7-11.7-47.1 0-85.3 38.2-85.3 85.3s38.2 85.3 85.3 85.3 85.3-38.2 85.3-85.3V149.3H384V64H256z"}}]})(props);
};
function IoMdMusicalNotes (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M160 64v257.6c-8.2-2.7-17.2-4.1-26.6-4.1-38.3 0-69.4 27.1-69.4 65.4 0 38.3 31.1 65.1 69.4 65.1 38.3 0 69.6-28.2 69.6-69.1V200h202v121.6c-8.2-2.7-17.2-4.1-26.6-4.1-38.3 0-69.4 27.1-69.4 65.4 0 38.3 31.1 65.1 69.4 65.1 38.3 0 69.6-28.2 69.6-69.1V64H160zm245 96H203v-53h202v53z"}}]})(props);
};
function IoMdNavigate (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 64L96 433.062 110.938 448 256 384l145.062 64L416 433.062z"}}]})(props);
};
function IoMdNotificationsOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 463.656c22.814 0 41.475-18.656 41.475-41.656h-82.95c0 23 18.661 41.656 41.475 41.656z"}},{"tag":"path","attr":{"d":"M131.083 107.172l.053.074L98.09 74.277 74.004 98.383l63.042 63.153C126.888 180.521 121 202.196 121 225.07v114.555l-41 41.656V402h297.743l36.182 36.33 24.079-24.301L425.9 402h.316L131.083 107.172zM391 225.07c0-63.526-45-117.677-104-131.218V79.274c0-17.706-13.371-31.243-31-31.243-17.628 0-31 13.537-31 31.243v14.578c-15 3.438-29.048 9.501-41.75 17.663L391 319.355V225.07z"}}]})(props);
};
function IoMdNotificationsOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M257 120.471c7.083 0 23.911 4.479 23.911 4.479 45.589 10.447 77.678 52.439 77.678 99.85V352.412l9.321 9.364 7.788 7.823H136.302l7.788-7.823 9.321-9.364V224.8c0-47.41 32.089-89.403 77.678-99.85 0 0 18.043-4.479 23.911-4.479M256 48c-17.602 0-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2zm41.411 374.4h-82.823c0 22.881 18.633 41.6 41.412 41.6s41.411-18.719 41.411-41.6z"}}]})(props);
};
function IoMdNotifications (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 464c22.779 0 41.411-18.719 41.411-41.6h-82.823c0 22.881 18.633 41.6 41.412 41.6zm134.589-124.8V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2s-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6z"}}]})(props);
};
function IoMdNuclear (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M336 272c0-29.8-16.3-55.7-40.4-69.5l73.1-124.1C335.6 59.1 297.1 48 256 48c-41.2 0-79.9 11.2-113.1 30.6l71.6 125C191.4 217.6 176 243 176 272H32c0 83.3 46.9 153.4 114.4 192l70.1-122.4c11.7 6.6 25.1 10.4 39.5 10.4 14.3 0 27.7-3.8 39.3-10.3L365.6 464C433.1 425.4 480 355.3 480 272H336z"}}]})(props);
};
function IoMdNutrition (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M357.2 235.6L274.7 153h-.8c-8.1-6-18.2-10.3-28.4-10.3-13.7 0-26.1 6.3-34.3 16.3h-.6L53 414.1v.8c-3 6.2-5 13.3-5 20.8 0 24.4 19.7 44.3 44.3 44.3 9.4 0 18-2.9 27.4-9.1l232.9-168.1c10.9-8.3 17.4-21.6 17.4-36 0-12-4.7-23.2-12.8-31.2zM464 145.1l-29.2-49-36.6 20.3 31.5-55.9L380.6 32l-67.3 127.8 41.3 41.4z"}}]})(props);
};
function IoMdOpen (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"}}]})(props);
};
function IoMdOptions (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M32 384h272v32H32zM400 384h80v32h-80zM384 447.5c0 17.949-14.327 32.5-32 32.5-17.673 0-32-14.551-32-32.5v-95c0-17.949 14.327-32.5 32-32.5 17.673 0 32 14.551 32 32.5v95z"}},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M32 240h80v32H32zM208 240h272v32H208zM192 303.5c0 17.949-14.327 32.5-32 32.5-17.673 0-32-14.551-32-32.5v-95c0-17.949 14.327-32.5 32-32.5 17.673 0 32 14.551 32 32.5v95z"}}]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M32 96h272v32H32zM400 96h80v32h-80zM384 159.5c0 17.949-14.327 32.5-32 32.5-17.673 0-32-14.551-32-32.5v-95c0-17.949 14.327-32.5 32-32.5 17.673 0 32 14.551 32 32.5v95z"}}]}]})(props);
};
function IoMdOutlet (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M369.5 32H142.4C81.5 32 32 82.6 32 144.6v222.8c0 62 49.5 112.6 110.4 112.6h227.2c60.9 0 110.5-50.6 110.5-112.6V144.6C480 82.6 430.5 32 369.5 32zM175 251v.7c0 10.9-9.1 20.4-19.9 20.4h-23.3c-10.8 0-19.9-9.5-19.9-20.4V148.1c1-10.8 9.2-20.2 19.9-20.2h23.3c10.9 0 19.9 9.8 19.9 20.8V251zm122 147.4c0 11.4-8.9 17.6-20.1 17.6h-41.8c-11.2 0-20.1-8.1-20.1-19.6v-29.3c0-23.3 18.1-42.3 41-42.3s41 19 41 42.3v31.3zM400 251v.7c0 10.9-9.1 20.4-19.9 20.4h-24.3c-10.8 0-19.9-9.5-19.9-20.4V148.1c1-10.8 9.2-20.2 19.9-20.2h24.3c10.8 0 19.9 9.8 19.9 20.8V251z"}}]})(props);
};
function IoMdPaperPlane (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M48 270.9l118.9 44.6L181.7 464 256 360l104 104L464 48 48 270.9zm294.9 126L260 313.4 374.9 152 193.6 289.8 124.9 265l291-156.2-73 288.1z"}}]})(props);
};
function IoMdPaper (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M464 64H192c-8.8 0-16 7.7-16 16.5V112H74c-23.1 0-42 18.9-42 42v207.5c0 47.6 39 86.5 86 86.5h279.7c45.1 0 82.3-36.9 82.3-82V80c0-8.8-7.2-16-16-16zm-288 80v192h-42V163.2c0-6.8-.8-13.3-3.3-19.2H176zm-17 255.4C148 410 133.2 416 118.5 416c-14.5 0-28.1-5.7-38.5-16-10.3-10.3-16-24-16-38.5V163.2c0-10.6 8.4-19.2 19-19.2s19 8.6 19 19.2V352c0 8.8 7.2 16 16 16h57.5c-1.5 11.6-7.2 22.6-16.5 31.4zM448 366c0 13.3-5.4 25.8-14.9 35.3-9.5 9.5-22.2 14.7-35.4 14.7H187.3c12.8-14.9 20.7-33.9 20.7-54.5V97h240v269z"}},{"tag":"path","attr":{"d":"M248 136h160v56H248zM248 224h160v32H248zM248 288h160v32H248zM408 352H248s0 32-8 32h148.7c19.3 0 19.3-21 19.3-32z"}}]})(props);
};
function IoMdPartlySunny (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M248.03 116.81l24.679-24.678 19.233 19.234-24.678 24.677zM176 125.7c-45.3 0-82.3 37-82.3 82.3 0 17.5 5.5 33.7 14.9 47 15.3-13 33.9-22.6 54.7-27.6l13.2-16.6c13.6-17.1 30.7-30.2 50.8-38.9 6.1-2.6 12.4-4.8 19-6.6-14.5-23.7-40.6-39.6-70.3-39.6zM162 64h28v41h-28zM32 194h41v28H32zM81.6 276.8l-.8-.8-24.7 24.7 19.2 19.2 24.7-24.7zM79.289 92.13l24.678 24.678-19.233 19.233-24.678-24.678zM405.6 288.6C394.7 233.4 346.2 192 288 192c-34 0-65.1 11.9-86.5 38.8 29.4 2.2 56.7 13 77.8 33.9 15.6 15.6 26.6 34.6 32.1 55.3h-28.7c-13.1-37.3-48-64-90.6-64-5.1 0-12.3.6-17.7 1.7C128.6 267.1 96 305 96 352c0 53 43 96 96 96h208c44.2 0 80-35.8 80-80 0-42.2-32.8-76.5-74.4-79.4z"}}]})(props);
};
function IoMdPause (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M96 448h106.7V64H96v384zM309.3 64v384H416V64H309.3z"}}]})(props);
};
function IoMdPaw (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M459.5 165.9c-4.7-10.5-12.7-18.1-23.1-22-4.8-1.7-9.7-2.6-14.8-2.6-21.7 0-43.7 16.7-54.9 41.6-13.8 30.9-5.8 61 18.6 70.3 4.9 1.8 10.1 2.8 15.6 2.8 22.1 0 44.6-15.3 55.9-38.1 8.5-17.5 9.5-36.8 2.7-52zM145.3 182.8c-11.1-24.9-33.2-41.6-54.9-41.6-5.1 0-10.1.9-14.8 2.6-10.4 3.9-18.3 11.5-23.1 22-6.9 15.2-5.9 34.6 2.7 51.9 11.3 22.8 33.8 38.1 55.9 38.1 5.4 0 10.7-.9 15.6-2.8 24.4-9.1 32.4-39.3 18.6-70.2zM193.5 179.4c2 .1 4 0 6-.2 11.7-.9 22.3-5.9 30.6-14.3 13.4-13.6 17.1-34.9 14.3-56.8-4.3-33.7-25.8-59-54.8-60.1 0 0-4.1 0-6.2.2-12.8 1.1-24.4 6.5-33.5 15.9-13.3 13.6-19.7 33.7-17.1 53.8 4.3 33.4 30.9 60.4 60.7 61.5zM256 224c-69.3 0-138.7 97.1-138.7 176.3 0 23.6 11.8 42.6 23.5 50.4 14.4 9.6 24.5 13.4 45.5 13.4 13.4 0 21.6-2.5 28.1-6.1 12.3-6.7 25.9-10.4 39.9-10.4h3.5c14 0 27.6 3.8 39.9 10.4 6.5 3.5 14.7 6.1 28.1 6.1 21.1 0 31.2-3.8 45.5-13.4 11.6-7.8 23.5-26.8 23.5-50.4C394.7 321 325.3 224 256 224zM312.6 179.1c2 .2 4 .2 6 .2 29.8-1.1 56.5-28 60.8-61.5 2.6-20.2-3.8-40.4-17.1-53.8-9.2-9.3-20.3-14.6-33.1-15.6-2.1-.2-6.7-.2-6.7-.2-28.9 1.1-50.4 26.1-54.8 59.9-2.8 21.9.9 43.3 14.3 56.8 8.4 8.3 19 13.2 30.6 14.2z"}}]})(props);
};
function IoMdPeople (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M337.454 232c33.599 0 61.092-27.002 61.092-60 0-32.997-27.493-60-61.092-60s-61.09 27.003-61.09 60c0 32.998 27.491 60 61.09 60zm-162.908 0c33.599 0 61.09-27.002 61.09-60 0-32.997-27.491-60-61.09-60s-61.092 27.003-61.092 60c0 32.998 27.493 60 61.092 60zm0 44C126.688 276 32 298.998 32 346v54h288v-54c0-47.002-97.599-70-145.454-70zm162.908 11.003c-6.105 0-10.325 0-17.454.997 23.426 17.002 32 28 32 58v54h128v-54c0-47.002-94.688-58.997-142.546-58.997z"}}]})(props);
};
function IoMdPersonAdd (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M304 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96zM112 224v-64H80v64H16v32h64v64h32v-64h64v-32h-64z"}}]})(props);
};
function IoMdPerson (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z"}}]})(props);
};
function IoMdPhoneLandscape (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M480 358.856V153.143C480 130.512 461.674 112 439.272 112H72.728C50.326 112 32 130.512 32 153.143v205.713C32 381.488 50.326 400 72.728 400h366.545C461.674 400 480 381.488 480 358.856zM112 364V148h288v216H112z"}}]})(props);
};
function IoMdPhonePortrait (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M358.856 32H153.143C130.512 32 112 50.326 112 72.728v366.545C112 461.674 130.512 480 153.143 480h205.713C381.488 480 400 461.674 400 439.272V72.728C400 50.326 381.488 32 358.856 32zM364 400H148V112h216v288z"}}]})(props);
};
function IoMdPhotos (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M400 421.3V154.7c0-23.5-19.2-42.7-42.7-42.7H90.7C67.2 112 48 131.2 48 154.7v266.7c0 23.5 19.2 42.7 42.7 42.7h266.7c23.4-.1 42.6-19.3 42.6-42.8zM157.3 304l45.3 64 66.7-96 88 128H90.7l66.6-96z"}},{"tag":"path","attr":{"d":"M421.3 48H154.7C131.2 48 112 67.2 112 90.7V96h261.3c23.5 0 42.7 19.2 42.7 42.7V400h5.3c23.5 0 42.7-19.2 42.7-42.7V90.7c0-23.5-19.2-42.7-42.7-42.7z"}}]})(props);
};
function IoMdPie (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M32.6 256H256V32.6c-5-.4-10.6-.6-16-.6-114.9 0-208 93.1-208 208 0 5.4.2 11 .6 16z"}},{"tag":"path","attr":{"d":"M109.8 402.2C147.9 449.6 206.4 480 272 480c114.9 0 208-93.1 208-208 0-65.6-30.4-124.1-77.8-162.2C370.5 84.3 331 67.9 288 64.6V288H64.6c3.3 43 19.7 82.5 45.2 114.2z"}}]})(props);
};
function IoMdPin (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z"}}]})(props);
};
function IoMdPint (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M64 48l42.9 379.2c2.6 20.8 20.5 36.8 42.5 36.8h213.3c22 0 39.9-16 42.5-36.8L448 48H64zm327 124.8H121l-9.4-83.2h288.6l-9.2 83.2z"}}]})(props);
};
function IoMdPizza (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M407.2 130.4C360.7 111.5 309.8 102 256 102c-53.9 0-108.3 10.3-151.2 28-8.1 3.3-15.3 9-10.1 19.5S255.9 480 255.9 480l161-329.9c3.2-6.9.9-15.4-9.7-19.7zm-221 73.6c-18.7 0-32-14.3-32-32s13.3-32 32-32 32 14.3 32 32-13.3 32-32 32zM256 347c-18.7 0-32-14.3-32-32s13.3-32 32-32 32 14.3 32 32-13.3 32-32 32zm69.8-123c-18.7 0-32-14.3-32-32s13.3-32 32-32 32 14.3 32 32-13.3 32-32 32z"}},{"tag":"path","attr":{"d":"M436.9 66C384.7 45.4 320.3 32 256 32c-64.3 0-127.6 12.1-180.9 33.4C70.4 67.3 64 71 64 79.2l9.7 24.1c2.8 4.9 8.7 8.2 15.1 8.2 1.8 0 4.3-.3 7.3-1.5 49-18.9 103.1-29.6 160-29.6 56.9 0 115.2 11.6 160 29.6 3.6 1.4 5.6 1.5 7.3 1.5 6.6 0 12.2-3.3 15-8.1l9.8-24.1c-.2-7.3-5-10.8-11.3-13.3z"}}]})(props);
};
function IoMdPlanet (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M135.7 151c-2.5 3-4.9 6-7.2 9.2 32.2 36.3 76.1 76.5 124.2 113.7 37.8 29.2 76.3 55.2 111.4 75.1 5.9 3.3 11.7 6.5 17.3 9.4 2.5-3 4.9-6 7.2-9.2 11.7-16.1 18.1-33.2 23.3-53.6.8-3.2 1.5-6.4 2.1-9.5 15.8-83-35.6-164.9-118.5-185.9-37-9.4-74.1-5.1-106.3 9.7-21.4 9.9-38.2 22.9-53.5 41.1z"}},{"tag":"path","attr":{"d":"M418.2 326.8c-4.1 11-7.4 17.5-7.4 17.5 18.2 21.1 24.6 33.9 31.9 46.4 2.4 4.1 7.4 13.1.9 12.4-1.7-.3-3.5-.7-5.5-1.3-21.3-5.4-51.2-18.7-84.3-37.4-35.8-20.3-74.9-46.7-113.3-76.3-51.1-39.5-97.5-82.3-130.6-120.5-15.3-17.6-27.6-34.2-35.7-47.9-2.4-4.1-3.9-6.3-5.6-10.4-2.5-6.2 5-5.1 7-4.6 14.9 3.8 35 9.9 58.2 23.8 0 0 4.3-4.8 13.9-11.4-22.8-15.4-44.6-27.7-65.2-35.5-23.1-8.8-41.1-6.8-47.5 3.7-12.2 19.9 14 72.3 65.3 132-21.5 86 30.6 173.3 116.5 195 41.1 10.4 82.4 3.9 116.8-15 38.1 17.6 72.1 28.6 96.9 34.9 23.9 6.1 40.4 5.5 46.8-4.9 11.1-18.2-12.1-51.8-59.1-100.5z"}}]})(props);
};
function IoMdPlayCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm-41.6 301.6V162.4L339.2 256l-124.8 93.6z"}}]})(props);
};
function IoMdPlay (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M96 52v408l320-204L96 52z"}}]})(props);
};
function IoMdPodium (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M32 224h128v192H32zM192 128h128v288H192zM352 288h128v128H352z"}}]})(props);
};
function IoMdPower (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M279.1 48h-46.2v231.1h46.2V48zm111.6 50.2L357.9 131c36.5 29.4 59.9 74.4 59.9 125 0 89.4-72.3 161.8-161.8 161.8S94.2 345.4 94.2 256c0-50.6 23.3-95.7 59.6-125.3l-32.6-32.6C76.4 136.3 48 192.7 48 256c0 114.9 93.1 208 208 208s208-93.1 208-208c0-63.3-28.4-119.7-73.3-157.8z"}}]})(props);
};
function IoMdPricetag (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M416 64H257.6L76.5 251.6c-8 8-12.3 18.5-12.5 29-.3 11.3 3.9 22.6 12.5 31.2l123.7 123.6c8 8 20.8 12.5 28.8 12.5s22.8-3.9 31.4-12.5L448 256V96l-32-32zm-30.7 102.7c-21.7 6.1-41.3-10-41.3-30.7 0-17.7 14.3-32 32-32 20.7 0 36.8 19.6 30.7 41.3-2.9 10.3-11.1 18.5-21.4 21.4z"}}]})(props);
};
function IoMdPricetags (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M442 107v141L229.2 451.7c8 8 20.8 12.3 28.8 12.3s22.8-3.7 31.4-12.3L480 272V144l-38-37z"}},{"tag":"path","attr":{"d":"M384 48H224L44.3 235.6c-8 8-12 17.8-12.3 28.4-.3 11.3 3.7 23.3 12.3 31.9l123.8 123.6c8 8 20.8 12.5 28.8 12.5s22.7-3.9 31.3-12.5L416 240V80l-32-32zm-30.7 102.7c-21.7 6.1-41.3-10-41.3-30.7 0-17.7 14.3-32 32-32 20.7 0 36.8 19.6 30.7 41.3-2.9 10.3-11.1 18.5-21.4 21.4z"}}]})(props);
};
function IoMdPrint (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M399.95 160h-287.9C76.824 160 48 188.803 48 224v138.667h79.899V448H384.1v-85.333H464V224c0-35.197-28.825-64-64.05-64zM352 416H160V288h192v128zm32.101-352H127.899v80H384.1V64z"}}]})(props);
};
function IoMdPulse (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M428 269c-21.5 0-40.6 13.1-48.4 33h-41.2L307 221.3c-2.7-8.2-10.3-13.7-19-13.7h-.4c-8.8.2-16.4 6-18.8 14.5l-33.6 135.4-55.5-291.8C178 55.6 169.6 48 160 48c-9.5 0-16.9 6.2-19.4 16.2L90.3 302H32v40h74c9.2 0 17.2-6.2 19.4-15.2l30.7-160.6 54.1 282.1c1.5 8.8 8.9 15.1 18.6 15.7h1.2c9.3 0 16.9-5.3 19.2-13.5l40.2-162.9 15.5 40.7c2.7 8.2 10.3 13.7 19 13.7h56.4c8.3 19 27.1 31 47.6 31 13.9 0 26.9-5.6 36.8-15.8 9.8-10.1 15.2-23.3 15.2-37.2.1-28.6-22.7-51-51.9-51z"}}]})(props);
};
function IoMdQrScanner (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M96 124.2c0-6.9 5.2-12.2 12.2-12.2H176V64h-66.8C75.7 64 48 90.7 48 124.2V192h48v-67.8zM403.6 64H336v48h67.2c6.9 0 12.8 5.2 12.8 12.2V192h48v-67.8c0-33.5-27-60.2-60.4-60.2zM416 386.8c0 6.9-5.2 12.2-12.2 12.2H336v49h67.8c33.5 0 60.2-27.7 60.2-61.2V320h-48v66.8zM108.2 399c-6.9 0-12.2-5.2-12.2-12.2V320H48v66.8c0 33.5 27.7 61.2 61.2 61.2H176v-49h-67.8z"}}]})(props);
};
function IoMdQuote (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M96.4 416h77.1l50.9-96.6V96h-160v223.4h77.1L96.4 416zm224 0h77.1l50-96.6V96H288.4v223.4h82l-50 96.6z"}}]})(props);
};
function IoMdRadioButtonOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z"}}]})(props);
};
function IoMdRadioButtonOn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z"}}]})(props);
};
function IoMdRadio (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M73.8 141.9c-15.2 6-25.8 21.8-25.8 39.5v256c0 23.5 18.5 42.7 41.6 42.7h332.8c23.1 0 41.6-19.2 41.6-42.7v-256c0-23.7-18.5-42.7-41.6-42.7H179l171.8-71.3L336.7 32 73.8 141.9zM160 438c-35.4 0-64-28.6-64-64s28.6-64 64-64 64 28.6 64 64-28.6 64-64 64zm256-171.3h-32v-46.2h-44.8v46.2H96v-85.3h320v85.3z"}}]})(props);
};
function IoMdRainy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M139 400s-23 25.3-23 40.7c0 12.8 10.3 23.3 23 23.3s23-10.5 23-23.3c0-15.4-23-40.7-23-40.7zM217 368s-23 25.3-23 40.7c0 12.8 10.4 23.3 23 23.3 12.7 0 23-10.5 23-23.3 0-15.4-23-40.7-23-40.7zM295 400s-23 25.3-23 40.7c0 12.8 10.3 23.3 23 23.3 12.6 0 23-10.5 23-23.3 0-15.4-23-40.7-23-40.7zM373 368s-23 25.3-23 40.7c0 12.8 10.4 23.3 23 23.3 12.7 0 23-10.5 23-23.3 0-15.4-23-40.7-23-40.7zM393.2 161.2C380.5 96.6 323.9 48 256 48c-39.7 0-76 14-100.9 45.4 34.3 2.6 66.1 15.2 90.7 39.8 18.2 18.2 31 40.5 37.4 64.8h-33.5c-15.3-43.7-56-75-105.7-75-6 0-14.3.7-20.6 2C70 136 32 180.4 32 235.5 32 297.6 79.4 352 141.2 352h242.7c51.5 0 96.2-46 96.2-97.8-.1-49.4-38.4-89.6-86.9-93z"}}]})(props);
};
function IoMdRecording (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M369.8 160c-53.4 0-96.2 42.8-96.2 96 0 23.6 7.9 44.5 21.9 61.1h-78.8c14-16.6 21.9-37.5 21.9-61.1 0-53.2-42.9-96-96.2-96S46 202.8 46 256s42.9 96 96.2 96h227.5c53.4 0 96.2-42.8 96.2-96s-42.8-96-96.1-96zM142.2 317.1C108.1 317.1 81 290 81 256s27.1-61.1 61.2-61.1 61.2 27.1 61.2 61.1-27 61.1-61.2 61.1zm227.6 0c-34.1 0-61.2-27.1-61.2-61.1s27.1-61.1 61.2-61.1S431 222 431 256s-27.1 61.1-61.2 61.1z"}}]})(props);
};
function IoMdRedo (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M32 337.2L83.8 352c22.9-69.7 88.7-117.8 166-117.8 42.8 0 81.5 15.7 111.8 41.1L282.5 352H480V160l-79.6 76.3c-40.4-35.2-92.8-56.8-150.7-56.8-101.5.1-187.3 66.2-217.7 157.7z"}}]})(props);
};
function IoMdRefreshCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm112 194h-98l44.8-44.8C300.1 181.8 279.1 172 256 172c-46.2 0-84 37.8-84 84s37.8 84 84 84c34.9 0 65.3-21.2 77.6-52h29.8c-13.9 46.3-56.3 80-107.4 80-62.3 0-112-50.4-112-112s50.4-112 112-112c30.8 0 58.8 12.6 79.1 32.9L368 144v98z"}}]})(props);
};
function IoMdRefresh (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z"}}]})(props);
};
function IoMdRemoveCircleOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}},{"tag":"path","attr":{"d":"M363 277H149v-42h214v42z"}}]})(props);
};
function IoMdRemoveCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm107 229H149v-42h214v42z"}}]})(props);
};
function IoMdRemove (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M96 235h320v42H96z"}}]})(props);
};
function IoMdReorder (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M96 348h320v36H96zM96 128h320v36H96zM96 200.7h320v35.6H96zM96 275.8h320v35.6H96z"}}]})(props);
};
function IoMdRepeat (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M149.3 152h213.3v62.4l85.3-83.2L362.7 48v62.4h-256v124.8h42.7V152zm213.4 208H149.3v-62.4L64 380.8l85.3 83.2v-62.4h256V276.8h-42.7V360z"}}]})(props);
};
function IoMdResize (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M297.6 48l64.9 64.9-249.6 249.6L48 297.6V464h166.4l-64.9-64.9 249.6-249.6 64.9 64.9V48z"}}]})(props);
};
function IoMdRestaurant (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M164.852 279.939l61.834-60.251L73.72 71.706c-33.626 32.764-33.626 86.677 0 119.44l91.132 88.793z"}},{"tag":"path","attr":{"d":"M312.389 241.88c33.636 14.802 80.283 4.232 113.91-29.593 41.222-40.165 49.909-98.303 17.363-128.96-31.465-31.71-91.131-23.245-132.354 16.921-34.718 33.825-45.566 79.276-30.374 110.986-47.739 47.568-211.552 207.173-211.552 207.173L99.759 448l149.71-145.866L399.177 448l30.374-29.593-149.709-145.869 32.547-30.658z"}}]})(props);
};
function IoMdReturnLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M432.8 136v96H122.3l84.4-86.2-33.2-33.8L32 256l141.5 144 33.2-33.8-84.4-86.2H480V136h-47.2z"}}]})(props);
};
function IoMdReturnRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M32 136v144h357.7l-84.4 86.2 33.2 33.8L480 256 338.5 112l-33.2 33.8 84.4 86.2H79.2v-96H32z"}}]})(props);
};
function IoMdReverseCamera (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M440 96h-88l-32-32H192l-32 32H72c-22.1 0-40 17.9-40 40v272c0 22.1 17.9 40 40 40h368c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40zm-72 171h-97.7l44.8-45.1c-14.7-15.4-35.7-25.5-58.8-25.5-46.2 0-84 37.8-84 84s37.8 84 84 84c35.5 0 66.2-21.5 78.2-53.5h29.6c-13.4 47-56.2 81.5-107.8 81.5-62.3 0-112-50.4-112-112s50.4-112 112-112c30.8 0 58.7 12.6 79 32.9l32.8-32.9V267z"}}]})(props);
};
function IoMdRewind (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M249.6 402V110L32 256l217.6 146zm12.8-146L480 402V110L262.4 256z"}}]})(props);
};
function IoMdRibbon (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 32c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128S326.7 32 256 32zm0 208c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zM193.7 307.4c-19.1-8.1-36.2-19.6-50.8-34.3-1.4-1.4-2.8-2.8-4.1-4.3L64 400h96l48 80 48-105.8 25.5-56.2c-8.4 1.3-16.9 2-25.5 2-21.6 0-42.5-4.2-62.3-12.6zM373.3 268.9c-1.3 1.4-2.7 2.9-4.1 4.3-14.6 14.6-31.7 26.2-50.7 34.2L294 361.2l-21.9 48.4L304 480l48-80h96l-74.7-131.1z"}}]})(props);
};
function IoMdRocket (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 421.6c-18.1 0-33.2-6.8-42.9-10.9-5.4-2.3-11.3 1.8-10.9 7.6l3.5 51c.2 3.1 3.8 4.7 6.3 2.8l14.5-11c1.8-1.4 4.5-.9 5.7 1l20.5 32.1c1.5 2.4 5.1 2.4 6.6 0l20.5-32.1c1.2-1.9 3.9-2.4 5.7-1l14.5 11c2.5 1.9 6.1.3 6.3-2.8l3.5-51c.4-5.8-5.5-10-10.9-7.6-9.8 4.1-24.8 10.9-42.9 10.9z"}},{"tag":"path","attr":{"d":"M397.7 293.1l-48-49.1c0-158-93.2-228-93.2-228s-94.1 70-94.1 228l-48 49.1c-1.8 1.8-2.6 4.5-2.2 7.1L130.6 412c.9 5.7 7.1 8.5 11.8 5.4l67.1-45.4s20.7 20 47.1 20c26.4 0 46.1-20 46.1-20l67.1 45.4c4.6 3.1 10.8.3 11.8-5.4l18.5-111.9c.2-2.6-.6-5.2-2.4-7zM256.5 192c-17 0-30.7-14.3-30.7-32s13.8-32 30.7-32c17 0 30.7 14.3 30.7 32s-13.7 32-30.7 32z"}}]})(props);
};
function IoMdRose (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M260.6 214.8c23.8-40.9 48-71.6 91.4-96.4 8.3-4.8 21.2-8 22.8-8.9C290.7 83.7 256 32 256 32s-34.7 51.7-120.5 76.5c5.8 3.4 16.5 6.5 30.7 13.7 34.5 17.4 62.5 51.3 94.4 92.6zM246.3 253.4C186.7 161.2 131.4 126.8 48 126.8c54.2 78.6 52 174.6 52 215.4 0 76.1 69.8 137.8 156 137.8 57.6 0 107.9-27.6 135-68.7-35.5-27.6-85.1-65.7-144.7-157.9zM464 126.8s-55.2-2.3-85.2 15.4c-43 25.5-74.4 61.3-95.4 103.2 38.8 52 73 87.9 95.4 109.4 10.7 10.2 19.8 18.2 27.5 24.5 3.7-11.8 5.8-24.3 5.8-37.2-.1-40.8-17.4-114.1 51.9-215.3z"}}]})(props);
};
function IoMdSad (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 288c-45.443 0-83.675 26.076-102.205 64h204.41c-18.53-37.924-56.762-64-102.205-64z"}},{"tag":"path","attr":{"d":"M256 48C140.563 48 48 141.6 48 256s92.563 208 208 208 208-93.6 208-208S370.401 48 256 48zm0 374.4c-91.518 0-166.404-74.883-166.404-166.4 0-91.518 74.887-166.4 166.404-166.4S422.404 164.482 422.404 256 347.518 422.4 256 422.4z"}},{"tag":"path","attr":{"d":"M328.8 235.2c17.683 0 31.201-13.518 31.201-31.2s-13.519-31.2-31.201-31.2c-17.682 0-31.2 13.518-31.2 31.2s13.518 31.2 31.2 31.2zM183.2 235.2c17.682 0 31.2-13.518 31.2-31.2s-13.519-31.2-31.2-31.2c-17.683 0-31.201 13.518-31.201 31.2s13.519 31.2 31.201 31.2z"}}]})(props);
};
function IoMdSave (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M362.7 64h-256C83 64 64 83.2 64 106.7v298.7c0 23.5 19 42.7 42.7 42.7h298.7c23.5 0 42.7-19.2 42.7-42.7v-256L362.7 64zM256 405.3c-35.4 0-64-28.6-64-64s28.6-64 64-64 64 28.6 64 64-28.6 64-64 64zM320 192H106.7v-85.3H320V192z"}}]})(props);
};
function IoMdSchool (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M113.5 281.2v85.3L256 448l142.5-81.5v-85.3L256 362.7l-142.5-81.5zM256 64L32 192l224 128 183.3-104.7v147.4H480V192L256 64z"}}]})(props);
};
function IoMdSearch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z"}}]})(props);
};
function IoMdSend (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M48 448l416-192L48 64v149.333L346 256 48 298.667z"}}]})(props);
};
function IoMdSettings (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M413.967 276.8c1.06-6.235 1.06-13.518 1.06-20.8s-1.06-13.518-1.06-20.8l44.667-34.318c4.26-3.118 5.319-8.317 2.13-13.518L418.215 115.6c-2.129-4.164-8.507-6.235-12.767-4.164l-53.186 20.801c-10.638-8.318-23.394-15.601-36.16-20.801l-7.448-55.117c-1.06-4.154-5.319-8.318-10.638-8.318h-85.098c-5.318 0-9.577 4.164-10.637 8.318l-8.508 55.117c-12.767 5.2-24.464 12.482-36.171 20.801l-53.186-20.801c-5.319-2.071-10.638 0-12.767 4.164L49.1 187.365c-2.119 4.153-1.061 10.399 2.129 13.518L96.97 235.2c0 7.282-1.06 13.518-1.06 20.8s1.06 13.518 1.06 20.8l-44.668 34.318c-4.26 3.118-5.318 8.317-2.13 13.518L92.721 396.4c2.13 4.164 8.508 6.235 12.767 4.164l53.187-20.801c10.637 8.318 23.394 15.601 36.16 20.801l8.508 55.117c1.069 5.2 5.318 8.318 10.637 8.318h85.098c5.319 0 9.578-4.164 10.638-8.318l8.518-55.117c12.757-5.2 24.464-12.482 36.16-20.801l53.187 20.801c5.318 2.071 10.637 0 12.767-4.164l42.549-71.765c2.129-4.153 1.06-10.399-2.13-13.518l-46.8-34.317zm-158.499 52c-41.489 0-74.46-32.235-74.46-72.8s32.971-72.8 74.46-72.8 74.461 32.235 74.461 72.8-32.972 72.8-74.461 72.8z"}}]})(props);
};
function IoMdShareAlt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M448 248L288 96v85.334C138.666 202.667 85.333 309.334 64 416c53.333-74.666 117.333-108.802 224-108.802v87.469L448 248z"}}]})(props);
};
function IoMdShare (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M383.822 344.427c-16.045 0-31.024 5.326-41.721 15.979l-152.957-88.42c1.071-5.328 2.142-9.593 2.142-14.919 0-5.328-1.071-9.593-2.142-14.919l150.826-87.35c11.762 10.653 26.741 17.041 43.852 17.041 35.295 0 64.178-28.766 64.178-63.92C448 72.767 419.117 44 383.822 44c-35.297 0-64.179 28.767-64.179 63.92 0 5.327 1.065 9.593 2.142 14.919l-150.821 87.35c-11.767-10.654-26.741-17.041-43.856-17.041-35.296 0-63.108 28.766-63.108 63.92 0 35.153 28.877 63.92 64.178 63.92 17.115 0 32.089-6.389 43.856-17.042l151.891 88.421c-1.076 4.255-2.141 8.521-2.141 13.847 0 34.094 27.806 61.787 62.037 61.787 34.229 0 62.036-27.693 62.036-61.787.001-34.094-27.805-61.787-62.035-61.787z"}}]})(props);
};
function IoMdShirt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M320 64c-11.1 19.1-40.3 32-64 32s-52.9-12.9-64-32L64 96v96l77-16-13 272h256l-13-272 77 16V96L320 64z"}}]})(props);
};
function IoMdShuffle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M222.2 188.1L97.8 64 64 97.8l124.1 124.1 34.1-33.8zM316 64l49 49L64 414.2 97.8 448 399 147l49 49V64H316zm7.9 225.8l-33.8 33.8 75.1 75.1L316 448h132V316l-49 49-75.1-75.2z"}}]})(props);
};
function IoMdSkipBackward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M170.7 256L448 448V64L170.7 256zM64 64h64v384H64z"}}]})(props);
};
function IoMdSkipForward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M64 64v384l277.3-192L64 64zM384 64h64v384h-64z"}}]})(props);
};
function IoMdSnow (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M461.4 298.5l-8.3-30.9-88 23.6-60.4-34.9 60.4-34.9 88 23.6 8.3-30.9-57.1-15.3 57.7-33.3-24-41.5-56.6 32.7 15.3-57.1-30.9-8.3-23.6 88-62.2 35.9v-71.1l64.5-64.4-22.7-22.6L280 98.9V32h-48v65.6l-41.7-41.7-22.6 22.6 64.3 64.4v71.4l-60.7-35-23.6-88-30.9 8.3 15.3 57.1-57.7-33.4-24 41.6 56.7 32.7L50 212.9l8.3 30.9 87.9-23.6 62.6 36.1-62.6 36.2-87.9-23.6-8.3 30.9 57.1 15.3-56.7 32.7 24 41.5 57.7-33.3-15.3 57 30.9 8.3 23.6-87.9 60.7-35.1v70.9l-64.3 64.4 22.6 22.6 41.7-41.8V480h48v-66.8l41.9 41.7 22.5-22.6L280 368v-70.6l62.2 36 23.6 87.9 30.9-8.3-15.3-57 56.6 32.7 24-41.6-57.7-33.3z"}}]})(props);
};
function IoMdSpeedometer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M128 416h256v48H128zM256 288c17.7 0 32-14.3 32-32s-14.3-32-32-32c-3 0-6 .4-8.8 1.2l-66.7-48.7-4 3.5 48.9 66.7c-.9 2.9-1.4 6-1.4 9.3 0 17.7 14.3 32 32 32z"}},{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256c0 48.3 16.5 92.7 44.1 128h58.8l4-4 22.1-22.1-22.9-22.9-22.1 22c-19.9-24.3-32.1-54-35.2-85H128v-32H96.8c3.1-31 15.3-60.7 35.2-85l22.1 22 22.9-22.9-22-22.1c24.3-19.9 54-32.1 85-35.2V128h32V96.8c31 3.1 60.7 15.3 85 35.2l-22 22.1 22.9 22.9 22.1-22c19.9 24.3 32.1 54 35.2 85H384v32h31.2c-3.1 31-15.3 60.7-35.2 85l-22.1-22-22.9 22.9 22.1 22.1 4 4h58.8c27.6-35.3 44.1-79.7 44.1-128 0-114.9-93.1-208-208-208z"}}]})(props);
};
function IoMdSquareOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M405.3 106.7v298.7H106.7V106.7h298.6m0-42.7H106.7C83.2 64 64 83.2 64 106.7v298.7c0 23.5 19.2 42.7 42.7 42.7h298.7c23.5 0 42.7-19.2 42.7-42.7V106.7C448 83.2 428.8 64 405.3 64z"}}]})(props);
};
function IoMdSquare (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M405.333 64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V106.667C448 83.198 428.802 64 405.333 64z"}}]})(props);
};
function IoMdStarHalf (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M458 210.409l-145.267-12.476L256 64l-56.743 133.934L54 210.409l110.192 95.524L131.161 448 256 372.686 380.83 448l-33.021-142.066L458 210.409zM272.531 345.287L256 335.313l-.002-189.277 27.27 64.379 7.52 17.751 19.208 1.65 69.846 5.998-52.993 45.939-14.576 12.636 4.367 18.788 15.875 68.299-59.984-36.189z"}}]})(props);
};
function IoMdStarOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M458 210.409l-145.267-12.476L256 64l-56.743 133.934L54 210.409l110.192 95.524L131.161 448 256 372.686 380.83 448l-33.021-142.066L458 210.409zM272.531 345.286L256 335.312l-16.53 9.973-59.988 36.191 15.879-68.296 4.369-18.79-14.577-12.637-52.994-45.939 69.836-5.998 19.206-1.65 7.521-17.75 27.276-64.381 27.27 64.379 7.52 17.751 19.208 1.65 69.846 5.998-52.993 45.939-14.576 12.636 4.367 18.788 15.875 68.299-59.984-36.189z"}}]})(props);
};
function IoMdStar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"}}]})(props);
};
function IoMdStats (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M176 64h64v384h-64zM80 336h64v112H80zM272 272h64v176h-64zM368 176h64v272h-64z"}}]})(props);
};
function IoMdStopwatch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M232 306.667h48V176h-48v130.667z"}},{"tag":"path","attr":{"d":"M407.67 170.271l30.786-30.786-33.942-33.941-30.785 30.786C341.217 111.057 300.369 96 256 96 149.961 96 64 181.961 64 288s85.961 192 192 192 192-85.961 192-192c0-44.369-15.057-85.217-40.33-117.729zm-45.604 223.795C333.734 422.398 296.066 438 256 438s-77.735-15.602-106.066-43.934C121.602 365.735 106 328.066 106 288s15.602-77.735 43.934-106.066C178.265 153.602 215.934 138 256 138s77.734 15.602 106.066 43.934C390.398 210.265 406 247.934 406 288s-15.602 77.735-43.934 106.066zM192 32h128v48H192z"}}]})(props);
};
function IoMdSubway (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48c-93.864 0-176 10.668-176 85.334v213.332c0 41.604 33.062 74.666 74.667 74.666L128 448v16h256v-16l-26.667-26.668c41.604 0 74.667-33.062 74.667-74.666V133.334C432 58.668 349.864 48 256 48zm-96 336c-18.136 0-32-13.865-32-32 0-18.137 13.864-32 32-32s32 13.863 32 32c0 18.135-13.864 32-32 32zm80-144H128v-96h112v96zm112 144c-18.136 0-32-13.865-32-32 0-18.137 13.864-32 32-32s32 13.863 32 32c0 18.135-13.864 32-32 32zm32-144H272v-96h112v96z"}}]})(props);
};
function IoMdSunny (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M277.3 32h-42.7v64h42.7V32zm129.1 43.7L368 114.1l29.9 29.9 38.4-38.4-29.9-29.9zm-300.8 0l-29.9 29.9 38.4 38.4 29.9-29.9-38.4-38.4zM256 128c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128zm224 106.7h-64v42.7h64v-42.7zm-384 0H32v42.7h64v-42.7zM397.9 368L368 397.9l38.4 38.4 29.9-29.9-38.4-38.4zm-283.8 0l-38.4 38.4 29.9 29.9 38.4-38.4-29.9-29.9zm163.2 48h-42.7v64h42.7v-64z"}}]})(props);
};
function IoMdSwap (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M131.3 231.1L32 330.6l99.3 99.4v-74.6h174.5v-49.7H131.3v-74.6zM480 181.4L380.7 82v74.6H206.2v49.7h174.5v74.6l99.3-99.5z"}}]})(props);
};
function IoMdSwitch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M168 216h94.9c14.5 14.8 34.7 24 57.1 24 44.2 0 80-35.8 80-80s-35.8-80-80-80c-22.4 0-42.6 9.2-57.1 24H168c-30.8 0-56 25.2-56 56s25.2 56 56 56zm-16.9-72.9c4.6-4.6 10.6-7.1 16.9-7.1h75.7c-2.4 7.6-3.7 15.6-3.7 24s1.3 16.4 3.7 24H168c-6.3 0-12.4-2.5-16.9-7.1-4.6-4.6-7.1-10.6-7.1-16.9s2.5-12.4 7.1-16.9zM344 296h-94.9c-14.5-14.8-34.7-24-57.1-24-44.2 0-80 35.8-80 80s35.8 80 80 80c22.4 0 42.6-9.2 57.1-24H344c30.8 0 56-25.2 56-56s-25.2-56-56-56zm16.9 72.9c-4.6 4.6-10.6 7.1-16.9 7.1h-75.7c2.4-7.6 3.7-15.6 3.7-24s-1.3-16.4-3.7-24H344c6.3 0 12.4 2.5 16.9 7.1 4.6 4.6 7.1 10.6 7.1 16.9s-2.5 12.4-7.1 16.9z"}}]})(props);
};
function IoMdSync (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 93.09V32l-80 81.454 80 81.456v-61.093c65.996 0 120 54.982 120 122.183 0 20.363-5 39.714-14.004 57.016L391 342.547c15.996-25.457 25-54.988 25-86.547 0-89.599-72.002-162.91-160-162.91zm0 285.094c-66.001 0-120-54.988-120-122.184 0-20.363 5-39.709 13.999-57.02L121 169.454C104.999 193.89 96 224.436 96 256c0 89.599 72.002 162.91 160 162.91V480l80-81.453-80-81.457v61.094z"}}]})(props);
};
function IoMdTabletLandscape (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M32 120v272c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H56c-13.3 0-24 10.7-24 24zm384 8v256H80V128h336zm46 128c0 7.7-6.5 14-14.1 14-7.5 0-14-6.2-14-14 0-7.7 6.4-14.1 14-14.1 7.6.1 14.1 6.4 14.1 14.1z"}}]})(props);
};
function IoMdTabletPortrait (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M392 32H120c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24zm-8 384H128V80h256v336zm-128 46c-7.7 0-14-6.5-14-14.1 0-7.5 6.2-14 14-14 7.7 0 14.1 6.4 14.1 14-.1 7.6-6.4 14.1-14.1 14.1z"}}]})(props);
};
function IoMdTennisball (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M383.8 92.2C348.5 64.5 304.1 48 256 48c-48 0-92.3 16.5-127.6 44 41.6 44.8 64.3 103 64 164.3-.3 61-23.3 118.6-64.9 162.9 35.4 28 80.1 44.8 128.5 44.8 48.5 0 93.3-16.8 128.8-45-41.5-44.3-64.5-101.8-64.8-162.7-.3-61.2 22.3-119.3 63.8-164.1z"}},{"tag":"path","attr":{"d":"M353.1 255.1c0 26.9 5.1 53 15.1 77.8 9.6 23.6 23.3 44.9 40.8 63.6 34.1-37.1 55-86.5 55-140.5 0-54.5-21.2-104.2-55.8-141.4-17.1 18.5-30.6 39.6-40 62.7-10 24.8-15.1 51-15.1 77.8zM159.3 255.1c0-26.9-5.1-53-15.1-77.8-9.4-23.2-22.9-44.4-40.2-62.9-34.7 37.2-56 87-56 141.6 0 54.2 21 103.6 55.2 140.7 17.6-18.7 31.4-40.1 41-63.8 10-24.7 15.1-50.9 15.1-77.8z"}}]})(props);
};
function IoMdText (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M408 64H96c-22.002 0-32 17.998-32 40v344l64-64h280c22.002 0 40-17.998 40-40V104c0-22.002-17.998-40-40-40zM198.4 242H160v-40h38.4v40zm76.8 0h-38.4v-40h38.4v40zm76.8 0h-38.4v-40H352v40z"}}]})(props);
};
function IoMdThermometer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M303 300.2V78.4c0-25.7-21-46.5-47-46.5s-47 20.8-47 46.5v221.9c-29 16.5-48.9 47.8-48.9 83.7 0 53 43 96 96 96s96-43 96-96c0-36-20.1-67.3-49.1-83.8zM240 78.4c0-8 7.7-14.5 16-14.5s16 6.5 16 14.5V128h-32V78.4z"}}]})(props);
};
function IoMdThumbsDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M314 64H142c-15.7 0-28.6 9.6-34.2 23.4L50.6 222.8c-1.7 4.4-2.6 9-2.6 14v38.6c0 21.1 17 44.6 37.8 44.6h119.3l-18 81.5-.6 6c0 7.9 3.2 15.1 8.3 20.3l20 20.1L341 320.7c6.8-6.9 11-16.5 11-27.1v-192c0-21.1-17.2-37.6-38-37.6zM400 64h64v224h-64z"}}]})(props);
};
function IoMdThumbsUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M198 448h172c15.7 0 28.6-9.6 34.2-23.4l57.1-135.4c1.7-4.4 2.6-9 2.6-14v-38.6c0-21.1-17-44.6-37.8-44.6H306.9l18-81.5.6-6c0-7.9-3.2-15.1-8.3-20.3L297 64 171 191.3c-6.8 6.9-11 16.5-11 27.1v192c0 21.1 17.2 37.6 38 37.6zM48 224h64v224H48z"}}]})(props);
};
function IoMdThunderstorm (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M393.2 161.2C380.5 96.6 323.9 48 256 48c-39.7 0-76 14-100.9 45.4 34.3 2.6 66.1 15.2 90.7 39.8 18.2 18.2 31 40.5 37.4 64.8h-33.5c-15.3-43.7-56-75-105.7-75-6 0-14.3.7-20.6 2C70 136 32 180.4 32 235.5 32 297.6 82.2 336 144 336h68V233h99.1l-33.2 67H311l-18 36h93.7c51.5 0 93.3-30 93.3-81.8 0-49.4-38.3-89.6-86.8-93zM212 368h22v96l59-128h-81z"}}]})(props);
};
function IoMdTime (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"g","attr":{"fillOpacity":".9"},"child":[{"tag":"path","attr":{"d":"M255.8 48C141 48 48 141.2 48 256s93 208 207.8 208c115 0 208.2-93.2 208.2-208S370.8 48 255.8 48zm.2 374.4c-91.9 0-166.4-74.5-166.4-166.4S164.1 89.6 256 89.6 422.4 164.1 422.4 256 347.9 422.4 256 422.4z"}},{"tag":"path","attr":{"d":"M266.4 152h-31.2v124.8l109.2 65.5 15.6-25.6-93.6-55.5V152z"}}]}]})(props);
};
function IoMdTimer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M232.9 371.6c0 12.7 10.4 23.1 23.1 23.1s23.1-10.4 23.1-23.1c0-12.7-10.4-23.1-23.1-23.1s-23.1 10.3-23.1 23.1zm0-323.6v92.4h46.2V96.1c78.3 11.3 138.7 78.3 138.7 159.9 0 89.4-72.3 161.8-161.8 161.8S94.2 345.4 94.2 256c0-38.8 13.6-74.4 36.5-102.2L256 279.1l32.6-32.6L131.4 89.4v.5C80.8 127.7 48 187.8 48 256c0 114.9 92.9 208 208 208 114.9 0 208-93.1 208-208S370.9 48 256 48h-23.1zm161.8 208c0-12.7-10.4-23.1-23.1-23.1-12.7 0-23.1 10.4-23.1 23.1s10.4 23.1 23.1 23.1c12.7 0 23.1-10.4 23.1-23.1zm-277.4 0c0 12.7 10.4 23.1 23.1 23.1s23.1-10.4 23.1-23.1-10.4-23.1-23.1-23.1-23.1 10.4-23.1 23.1z"}}]})(props);
};
function IoMdToday (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M405.3 32H106.7C83.2 32 64 51.2 64 74.7v362.7c0 23.5 19.2 42.7 42.7 42.7h298.7c23.5 0 42.7-19.2 42.7-42.7V74.7C448 51.2 428.8 32 405.3 32zm-4 405.3H110.7c-2.2 0-4-1.8-4-4V78.7c0-2.2 1.8-4 4-4h290.7c2.2 0 4 1.8 4 4v354.7c-.1 2.1-1.9 3.9-4.1 3.9z"}},{"tag":"path","attr":{"d":"M145 194v204c0 1.1.9 2 2 2h218c1.1 0 2-.9 2-2V194c0-1.1-.9-2-2-2H147c-1.1 0-2 .9-2 2zM145 114.7v34c0 1.1.9 2 2 2h171c1.1 0 2-.9 2-2v-34c0-1.1-.9-2-2-2H147c-1.1 0-2 .9-2 2z"}}]})(props);
};
function IoMdTrain (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48c-88 0-176 10.9-176 87.6v208c0 42.3 34.5 76.6 77 76.6L124 453v11h49.1l44-43.8H300l44 43.8h44v-10.9l-33-32.8c42.5 0 77-34.4 77-76.6v-208C432 58.9 353.2 48 256 48zm-99 328.4c-18.3 0-33-14.7-33-32.8s14.7-32.8 33-32.8 33 14.7 33 32.8-14.7 32.8-33 32.8zm77-153.2H124v-87.6h110v87.6zm44 0v-87.6h110v87.6H278zm77 153.2c-18.3 0-33-14.7-33-32.8s14.7-32.8 33-32.8 33 14.7 33 32.8-14.7 32.8-33 32.8z"}}]})(props);
};
function IoMdTransgender (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M352 32v35h63.1l-81.4 80.5c-7.5-7.2-13.2-11-13.2-11C302.2 123.6 280 116 256 116c-30.2 0-57.6 12-77.8 31.4l-15.2-15 31.4-31.4-28.5-28.5-31.5 31.5-37.5-37H160V32H32v128h35V91.3l40.3 39.9-31.2 31.2 28.5 28.5 31.4-31.4 19.4 19.2c-7.3 14.9-11.5 31.7-11.5 49.5 0 54.8 39.5 100.4 91.1 110.2v45.3h-63V424h63v56h42v-56h63v-40.2h-63v-45.3c50.8-9.9 91.2-55.5 91.2-110.3 0-17.7-4.2-34.8-11.5-49.6L445 91.3V160h35V32H352zm-96 258c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"}}]})(props);
};
function IoMdTrash (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M128 405.429C128 428.846 147.198 448 170.667 448h170.667C364.802 448 384 428.846 384 405.429V160H128v245.429zM416 96h-80l-26.785-32H202.786L176 96H96v32h320V96z"}}]})(props);
};
function IoMdTrendingDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M480 397V262.5l-51.3 51.3-141.1-141-89.6 89.7L63.6 128 32 159.6l166 166.3 89.6-89.7 109.3 109.4-51.3 51.4H480z"}}]})(props);
};
function IoMdTrendingUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M345.6 128l51.3 51.3-109.3 109.4-89.6-89.6L32 365.4 63.6 397 198 262.5l89.6 89.7 141.1-141 51.3 51.3V128H345.6z"}}]})(props);
};
function IoMdTrophy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M392 105c.9-27 .2-56 .1-57H119.3c0 1-.8 30 .1 57H48c0 68 9.9 102.3 21 126.7S95.4 277 127.7 302c30.1 23.3 95.5 53.6 104.3 57.6v28.3c-4.6 10-23.5 28.2-83.3 28.2H128v48h256v-48h-25.7c-60.7 0-75-19.1-78.3-28.2v-28.3c9.3-4.6 80.9-40.3 104.4-57.5 25.2-18.4 50.9-51.5 58.7-70.3S464 167 464 105h-72zM109.6 211.9c-8.8-18.2-14-37.9-15.7-61.9h28.7c.7 6 1.4 11.3 2.3 16.3 6.6 39.2 14.8 70.2 25.7 96.5-17.3-13.5-31.3-30.8-41-50.9zm292.8 0c-9.9 20.3-24 37.7-41.6 51.3 11-26.2 19-56.8 25.8-96.9.8-5 1.6-10.3 2.3-16.3h29.3c-1.8 24-6.9 43.7-15.8 61.9z"}}]})(props);
};
function IoMdTv (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M439.3 76H72.7C50.3 76 32 94 32 116v240c0 22 18.3 40 40.7 40h101.8v40h162.9v-40h101.8c22.4 0 40.5-18 40.5-40l.2-240c.1-22-18.2-40-40.6-40zm0 280H72.7V116h366.5v240z"}}]})(props);
};
function IoMdUmbrella (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M410.1 244.1c12 0 26.6 10.9 33.8 25.9H464c-.3-50-21.2-101.5-59.4-140.9-36.3-37.4-83-60.5-132.6-65.7-3-9-11.5-15.4-21.6-15.4-10 0-18.5 6.5-21.5 15.3C125.3 73.8 48 159.7 48 266.2c0 1.1.1 1.8.4 3.8h21.8c6.8-15 22.2-25.9 35.3-25.9 17 0 31.5 10.9 36.5 25.9h19.8c4.1-15 16.9-25.7 33-25.7 17.8 0 33.1 14.5 34.1 32.6v118.3c0 9.3.1 24.1-13.4 24.1-6.9 0-16.6-1.8-16.6-16V382h-43v21.3c0 34.6 23.6 60.7 60 60.7 19.5 0 33.3-8.5 43.5-18.7 13.1-13.2 13.5-34.7 13.5-50.1V276.1c2-25.8 23.9-31.7 41.9-31.7 17.2 0 32.3 11.6 37.8 25.6h20.5c5.1-15 19.8-25.9 37-25.9z"}}]})(props);
};
function IoMdUndo (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M262.3 179.6c-57.9 0-110.3 21.6-150.7 56.8L32 160v192h197.5l-79.1-76.8c30.4-25.3 69-41.1 111.8-41.1 77.3 0 143.1 48.2 166 117.8l51.8-14.8c-30.4-91.4-116.2-157.5-217.7-157.5z"}}]})(props);
};
function IoMdUnlock (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M376 186h-20v-40c0-55-45-100-100-100S156 91 156 146h37.998c0-34.004 28.003-62.002 62.002-62.002 34.004 0 62.002 27.998 62.002 62.002H318v40H136c-22.002 0-40 17.998-40 40v200c0 22.002 17.998 40 40 40h240c22.002 0 40-17.998 40-40V226c0-22.002-17.998-40-40-40zM256 368c-22.002 0-40-17.998-40-40s17.998-40 40-40 40 17.998 40 40-17.998 40-40 40z"}}]})(props);
};
function IoMdVideocam (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M384 219.5v-85.2c0-13.4-11.2-24.3-24.9-24.3H56.9C43.2 110 32 120.9 32 134.3v243.3C32 391 43.2 402 56.9 402h302.2c13.7 0 24.9-11 24.9-24.3v-85.2l96 97.3V122.2l-96 97.3z"}}]})(props);
};
function IoMdVolumeHigh (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256zM298.667 64v44.978C360.531 127.632 405.334 186.882 405.334 256c0 69.119-44.803 128.369-106.667 147.022V448C384 428.254 448 349.257 448 256c0-93.256-64-172.254-149.333-192z"}}]})(props);
};
function IoMdVolumeLow (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256z"}}]})(props);
};
function IoMdVolumeMute (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M64 192v128h85.334L256 431.543V80.458L149.334 192H64z"}}]})(props);
};
function IoMdVolumeOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M405.5 256c0 22.717-4.883 44.362-13.603 63.855l31.88 31.88C439.283 323.33 448 290.653 448 256c0-93.256-64-172.254-149-192v44.978C361 127.632 405.5 186.882 405.5 256zM256 80.458l-51.021 52.48L256 183.957zM420.842 396.885L91.116 67.157l-24 24 90.499 90.413-8.28 10.43H64v128h85.334L256 431.543V280l94.915 94.686C335.795 387.443 318 397.213 299 403.022V448c31-7.172 58.996-22.163 82.315-42.809l39.61 39.693 24-24.043-24.002-24.039-.081.083z"}},{"tag":"path","attr":{"d":"M352.188 256c0-38.399-21.188-72.407-53.188-88.863v59.82l50.801 50.801A100.596 100.596 0 0 0 352.188 256z"}}]})(props);
};
function IoMdWalk (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M288 112c22.223 0 39.997-17.776 39.997-40 0-22.225-17.774-40-39.997-40s-40.003 17.775-40.003 40c0 22.224 17.78 40 40.003 40zM288 232h104v-40h-72l-44.802-69.333c-7.698-11.667-18.136-18.136-30.933-18.136-3.198 0-8.828.531-12.799 1.747L120 144v112h40v-80l40.531-16L120 480h40l56.698-164.271L267 384v96h38V352l-57.031-96 19.745-61.864L288 232z"}}]})(props);
};
function IoMdWallet (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M202.7 341.3V170.7c0-23.5 19-42.7 42.7-42.7h197v-21.3c0-23.5-18.9-42.7-42.3-42.7H92c-23.7 0-44 18.5-44 42v300c0 23.5 20.3 42 44 42h308c23.5 0 42.3-19.2 42.3-42.7V384h-197c-23.6 0-42.6-19.2-42.6-42.7z"}},{"tag":"path","attr":{"d":"M245 186v140c0 8.8 7.2 16 16 16h187c8.8 0 16-7.2 16-16V186c0-8.8-7.2-16-16-16H261c-8.8 0-16 7.2-16 16zm77.1 101.9c-19.3 1.2-35.2-14.7-34-34 1-15.9 13.9-28.8 29.9-29.9 19.3-1.2 35.2 14.7 34 34-1.1 16-14 28.9-29.9 29.9z"}}]})(props);
};
function IoMdWarning (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M32 464h448L256 48 32 464zm248-64h-48v-48h48v48zm0-80h-48v-96h48v96z"}}]})(props);
};
function IoMdWatch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M416 256c0-51.001-24.004-96.001-60.996-125L336 16H176l-19.004 115C120.004 159.999 96 204.999 96 256c0 50.996 24.004 95.996 60.996 125L176 496h160l19.004-115C391.996 351.996 416 306.996 416 256zm-280 0c0-66.001 54.004-120 120-120s120 53.999 120 120c0 65.996-54.004 120-120 120s-120-54.004-120-120z"}}]})(props);
};
function IoMdWater (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M380.5 163.3L256 32 131.5 163.3c-68.6 72.4-68.6 190 0 262.4C165.8 461.9 210.9 480 256 480s90.2-18.1 124.5-54.3c68.7-72.4 68.7-190 0-262.4z"}}]})(props);
};
function IoMdWifi (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 228.719c-22.879 0-41.597 18.529-41.597 41.18 0 22.652 18.718 41.182 41.597 41.182 22.878 0 41.597-18.529 41.597-41.182 0-22.651-18.719-41.18-41.597-41.18zm124.8 41.179c0-67.946-56.163-123.539-124.8-123.539s-124.8 55.593-124.8 123.539c0 45.303 24.961 85.447 62.396 107.072l20.807-36.032c-24.972-14.417-41.604-40.153-41.604-71.04 0-45.295 37.433-82.358 83.201-82.358 45.771 0 83.201 37.063 83.201 82.358 0 30.887-16.633 56.623-41.604 71.04l20.807 36.032c37.433-21.624 62.396-61.769 62.396-107.072zM256 64C141.597 64 48 156.654 48 269.898 48 346.085 89.592 411.968 152 448l20.799-36.032c-49.919-28.824-83.207-81.324-83.207-142.069 0-90.593 74.891-164.718 166.408-164.718 91.517 0 166.406 74.125 166.406 164.718 0 60.745-33.284 114.271-83.205 142.069L360 448c62.406-36.032 104-101.915 104-178.102C464 156.654 370.403 64 256 64z"}}]})(props);
};
function IoMdWine (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M234.667 277.333V408H128v40h256v-40H277.333V277.333L448 106.667V64H64v42.667l170.667 170.666zm-74.667-128l-42.667-42.666h277.334L352 149.333H160z"}}]})(props);
};
function IoMdWoman (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M190.4 148.6L161 252.9c-6.3 22.8 20.7 31.7 27.3 10.3l26.3-96.2h7.4l-45.2 169H219v127c0 23 32 23 32 0V336h10v127c0 23 31 23 31 0V336h43.4l-46.2-169h8.4l26.3 96.2c6.5 21.9 33.3 12.5 27.3-10.2l-29.4-104.4c-4-11.8-18.2-32.6-42-33.6h-47.3c-24.6 1-38.7 21.6-42.1 33.6zM292.6 69.2c0-20.6-16.4-37.3-36.6-37.3-20.2 0-36.6 16.7-36.6 37.3 0 20.6 16.4 37.3 36.6 37.3 20.2 0 36.6-16.7 36.6-37.3z"}}]})(props);
};

;// CONCATENATED MODULE: ./src/components/Navbar.js
const Navbar=()=>{const{0:show,1:setShow}=(0,external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.useState)(false);return/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("nav",{className:"navbar"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/logo.webp",alt:"Finnet Media",class:"logo",__imageData:__webpack_require__(2075)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("button",{className:"nav-btn",onClick:()=>setShow(!show)},show?/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(IoMdClose,null):/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(HiMenuAlt4,null)),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:show?"show-nav":"show-nav nav-menu"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("ul",{className:"navlist"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("li",{className:"nav-pills nav-items"},"About Us"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("hr",null),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("li",{className:"nav-pills nav-items"},"Creators"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("hr",null),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("li",{className:"nav-pills nav-items"},"Brands"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("hr",null),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("li",{className:"nav-pills nav-cta nav-items"},"Contact"))));};/* harmony default export */ const components_Navbar = (Navbar);
;// CONCATENATED MODULE: ./src/components/Layout.js
const Layout=({children})=>{return/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement((external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default()).Fragment,null,/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(components_Navbar,null),children);};/* harmony default export */ const components_Layout = (Layout);
;// CONCATENATED MODULE: ./src/components/Service.js
const Service=()=>{return/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("section",{className:"service-wrapper"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"service-main"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/sshot2.png",className:"service-photo",__imageData:__webpack_require__(686)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"service-main-text"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("h3",null,"Influencer Marketing"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("p",null,"Curating influencer marketing campaigns to match your brand\u2019s objective, aligning content and ensuring efficiency in each step, is what Finnet Media does best."),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("p",null,"Numerous brands like CRED, ET Money, SmallCase, Niyo Global and many many more have trusted us to plan, execute and monitor influencer campaigns. Right from the word go, we ensure data-focused and personality alignments of brands with creators, to help empower creators and help enable brands simultaneously."))),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"service-main second"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/sshot3.png",className:"service-photo",__imageData:__webpack_require__(1216)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"service-main-text"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("h3",null,"AD Production"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("p",null,"For when you want to hook your audience, build a bond, or create your best impression, we are here to help you!"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("p",null,"Finnet Media helps you curate cinematically sound, and well-scripted advertisements with India\u2019s top creators! We build a bond by carefully weaving ideas and giving a creative structure to a bleak idea and converting it into a powerful ad. Be it running ads digitally, on television or a more traditional approach, we got you! Having worked on ads for numerous brands like ZEST Money, Stockgro, Tyke and many more, we\u2019ve been the team that helps bring your dream projects to reality without burning a hole in your pockets!"))),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"service-main"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement(U,{src:"../assets/images/sshot4.png",className:"service-photo",__imageData:__webpack_require__(7686)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("div",{className:"service-main-text"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("h3",null,"IP Content Creation"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_default().createElement("p",null,"Gone are the days when influencers were meant only for social media. With the increasing popularity of content creators along with their credibility and creativity, it only makes sense to leverage this across platforms. That\u2019s where Finnet Media has got you back! Content for your brand\u2019s social media, website, application, or YouTube series or show, content creators can definitely change the game for your brand! Having worked with numerous brands on different channels, it is safe to say - content creators are the way!"))));};/* harmony default export */ const components_Service = (Service);
;// CONCATENATED MODULE: ./src/pages/index.js
const IndexPage=()=>{return/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement(components_Layout,null,/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement(components_Hero,null),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement(components_About,null),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement("section",{className:"service-section"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement("div",{className:"service-text"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement("h3",null,"Our Services"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement("span",null,"We believe in the philosophy of collective growth, and the same is seen in the value addition given to our partners over and beyond the basics. We currently are focused on 3 main offerings:")),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement("div",{className:"services"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement("div",{className:"service"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement(U,{src:"../assets/images/rocket.png",className:"service-icon",__imageData:__webpack_require__(6328)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement("h4",null,"Influencer Marketing"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement("p",null,"Curating influencer marketing campaigns to match your brand\u2019s objective, aligning content and ensuring efficiency in each step, is what Finnet Media does best.")),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement("div",{className:"service"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement(U,{src:"../assets/images/video.png",className:"service-icon",__imageData:__webpack_require__(4749)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement("h4",null,"AD Production"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement("p",null,"Curating influencer marketing campaigns to match your brand\u2019s objective, aligning content and ensuring efficiency in each step, is what Finnet Media does best.")),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement("div",{className:"service"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement(U,{src:"../assets/images/megaphone.png",className:"service-icon",__imageData:__webpack_require__(6752)}),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement("h4",null,"IP Content Creation"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement("p",null,"Curating influencer marketing campaigns to match your brand\u2019s objective, aligning content and ensuring efficiency in each step, is what Finnet Media does best.")))),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement(components_Service,null),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement(components_Creators,null),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement("section",{className:"video-sec"},/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement("h3",null,"Watch our beautiful journey"),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement(U,{src:"../assets/images/sshot6.png",className:"video",alt:"showreel",__imageData:__webpack_require__(3332)})),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement(components_Contact,null),/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement(components_Footer,null));};/* harmony default export */ const pages = (IndexPage);const Head=()=>/*#__PURE__*/external_C_Users_user_Desktop_finnet_finnet_media_node_modules_react_index_js_.createElement("title",null,"Home Page");

/***/ }),

/***/ 6761:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#c83838","images":{"fallback":{"src":"/static/2ef023c4c8d824009dddf844caf0dfc4/c8cee/pinterest.svg","srcSet":"/static/2ef023c4c8d824009dddf844caf0dfc4/57875/pinterest.svg 709w,\\n/static/2ef023c4c8d824009dddf844caf0dfc4/231c9/pinterest.svg 1418w,\\n/static/2ef023c4c8d824009dddf844caf0dfc4/c8cee/pinterest.svg 2835w","sizes":"(min-width: 2835px) 2835px, 100vw"},"sources":[{"srcSet":"/static/2ef023c4c8d824009dddf844caf0dfc4/03116/pinterest.webp 709w,\\n/static/2ef023c4c8d824009dddf844caf0dfc4/f4851/pinterest.webp 1418w,\\n/static/2ef023c4c8d824009dddf844caf0dfc4/1eb63/pinterest.webp 2835w","type":"image/webp","sizes":"(min-width: 2835px) 2835px, 100vw"}]},"width":2835,"height":2835}');

/***/ }),

/***/ 269:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/bcb356dc096cff446a06e5d4ee98d778/ccc41/growth.png","srcSet":"/static/bcb356dc096cff446a06e5d4ee98d778/bf8e1/growth.png 128w,\\n/static/bcb356dc096cff446a06e5d4ee98d778/acb7c/growth.png 256w,\\n/static/bcb356dc096cff446a06e5d4ee98d778/ccc41/growth.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/bcb356dc096cff446a06e5d4ee98d778/6766a/growth.webp 128w,\\n/static/bcb356dc096cff446a06e5d4ee98d778/22bfc/growth.webp 256w,\\n/static/bcb356dc096cff446a06e5d4ee98d778/d689f/growth.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ }),

/***/ 6752:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/76cd2f623a216cacdea29bc1f8196cad/ccc41/megaphone.png","srcSet":"/static/76cd2f623a216cacdea29bc1f8196cad/bf8e1/megaphone.png 128w,\\n/static/76cd2f623a216cacdea29bc1f8196cad/acb7c/megaphone.png 256w,\\n/static/76cd2f623a216cacdea29bc1f8196cad/ccc41/megaphone.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/76cd2f623a216cacdea29bc1f8196cad/6766a/megaphone.webp 128w,\\n/static/76cd2f623a216cacdea29bc1f8196cad/22bfc/megaphone.webp 256w,\\n/static/76cd2f623a216cacdea29bc1f8196cad/d689f/megaphone.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ }),

/***/ 7686:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#5868f8","images":{"fallback":{"src":"/static/c54e318284a523e208eae667066c2faa/b5b80/sshot4.png","srcSet":"/static/c54e318284a523e208eae667066c2faa/04cf3/sshot4.png 178w,\\n/static/c54e318284a523e208eae667066c2faa/6f3b1/sshot4.png 356w,\\n/static/c54e318284a523e208eae667066c2faa/b5b80/sshot4.png 712w","sizes":"(min-width: 712px) 712px, 100vw"},"sources":[{"srcSet":"/static/c54e318284a523e208eae667066c2faa/0b47c/sshot4.webp 178w,\\n/static/c54e318284a523e208eae667066c2faa/34c98/sshot4.webp 356w,\\n/static/c54e318284a523e208eae667066c2faa/0d977/sshot4.webp 712w","type":"image/webp","sizes":"(min-width: 712px) 712px, 100vw"}]},"width":712,"height":449}');

/***/ }),

/***/ 3332:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#585858","images":{"fallback":{"src":"/static/d3692e1ae03f7e85493fe8059bbd623b/3d2b4/sshot6.png","srcSet":"/static/d3692e1ae03f7e85493fe8059bbd623b/73888/sshot6.png 275w,\\n/static/d3692e1ae03f7e85493fe8059bbd623b/1784a/sshot6.png 550w,\\n/static/d3692e1ae03f7e85493fe8059bbd623b/3d2b4/sshot6.png 1100w","sizes":"(min-width: 1100px) 1100px, 100vw"},"sources":[{"srcSet":"/static/d3692e1ae03f7e85493fe8059bbd623b/d395d/sshot6.webp 275w,\\n/static/d3692e1ae03f7e85493fe8059bbd623b/af146/sshot6.webp 550w,\\n/static/d3692e1ae03f7e85493fe8059bbd623b/769c8/sshot6.webp 1100w","type":"image/webp","sizes":"(min-width: 1100px) 1100px, 100vw"}]},"width":1100,"height":385}');

/***/ }),

/***/ 7608:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#e8c898","images":{"fallback":{"src":"/static/b90a7f3235cb164125303ecef1637276/453e9/sharan.png","srcSet":"/static/b90a7f3235cb164125303ecef1637276/9703a/sharan.png 53w,\\n/static/b90a7f3235cb164125303ecef1637276/12f71/sharan.png 107w,\\n/static/b90a7f3235cb164125303ecef1637276/453e9/sharan.png 213w","sizes":"(min-width: 213px) 213px, 100vw"},"sources":[{"srcSet":"/static/b90a7f3235cb164125303ecef1637276/ae675/sharan.webp 53w,\\n/static/b90a7f3235cb164125303ecef1637276/d9648/sharan.webp 107w,\\n/static/b90a7f3235cb164125303ecef1637276/e72da/sharan.webp 213w","type":"image/webp","sizes":"(min-width: 213px) 213px, 100vw"}]},"width":213,"height":213}');

/***/ }),

/***/ 5172:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/c7143bf1f5af8ff8e434da080231d9f9/ccc41/brand.png","srcSet":"/static/c7143bf1f5af8ff8e434da080231d9f9/bf8e1/brand.png 128w,\\n/static/c7143bf1f5af8ff8e434da080231d9f9/acb7c/brand.png 256w,\\n/static/c7143bf1f5af8ff8e434da080231d9f9/ccc41/brand.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/c7143bf1f5af8ff8e434da080231d9f9/6766a/brand.webp 128w,\\n/static/c7143bf1f5af8ff8e434da080231d9f9/22bfc/brand.webp 256w,\\n/static/c7143bf1f5af8ff8e434da080231d9f9/d689f/brand.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ }),

/***/ 9532:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f80808","images":{"fallback":{"src":"/static/ec1efab49c24be248d8ee984df407508/ccc41/youtube.png","srcSet":"/static/ec1efab49c24be248d8ee984df407508/bf8e1/youtube.png 128w,\\n/static/ec1efab49c24be248d8ee984df407508/acb7c/youtube.png 256w,\\n/static/ec1efab49c24be248d8ee984df407508/ccc41/youtube.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/ec1efab49c24be248d8ee984df407508/6766a/youtube.webp 128w,\\n/static/ec1efab49c24be248d8ee984df407508/22bfc/youtube.webp 256w,\\n/static/ec1efab49c24be248d8ee984df407508/d689f/youtube.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ }),

/***/ 2075:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#48b888","images":{"fallback":{"src":"/static/1fafbc065b9715c6cd66dfa9155ace2c/67921/logo.webp","srcSet":"/static/1fafbc065b9715c6cd66dfa9155ace2c/07b39/logo.webp 17w,\\n/static/1fafbc065b9715c6cd66dfa9155ace2c/0cc22/logo.webp 33w,\\n/static/1fafbc065b9715c6cd66dfa9155ace2c/67921/logo.webp 66w","sizes":"(min-width: 66px) 66px, 100vw"},"sources":[]},"width":66,"height":65}');

/***/ }),

/***/ 3586:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/7d96a3687331f40908a4ce2ed5307a8e/8ce05/thumb.png","srcSet":"/static/7d96a3687331f40908a4ce2ed5307a8e/c7240/thumb.png 600w,\\n/static/7d96a3687331f40908a4ce2ed5307a8e/e8b76/thumb.png 1200w,\\n/static/7d96a3687331f40908a4ce2ed5307a8e/8ce05/thumb.png 2400w","sizes":"(min-width: 2400px) 2400px, 100vw"},"sources":[{"srcSet":"/static/7d96a3687331f40908a4ce2ed5307a8e/6d09e/thumb.webp 600w,\\n/static/7d96a3687331f40908a4ce2ed5307a8e/83805/thumb.webp 1200w,\\n/static/7d96a3687331f40908a4ce2ed5307a8e/2ff24/thumb.webp 2400w","type":"image/webp","sizes":"(min-width: 2400px) 2400px, 100vw"}]},"width":2400,"height":2400}');

/***/ }),

/***/ 6328:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/25c9ed1bdaae67e80feb919ee44a6130/ccc41/rocket.png","srcSet":"/static/25c9ed1bdaae67e80feb919ee44a6130/bf8e1/rocket.png 128w,\\n/static/25c9ed1bdaae67e80feb919ee44a6130/acb7c/rocket.png 256w,\\n/static/25c9ed1bdaae67e80feb919ee44a6130/ccc41/rocket.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/25c9ed1bdaae67e80feb919ee44a6130/6766a/rocket.webp 128w,\\n/static/25c9ed1bdaae67e80feb919ee44a6130/22bfc/rocket.webp 256w,\\n/static/25c9ed1bdaae67e80feb919ee44a6130/d689f/rocket.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ }),

/***/ 4749:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8d808","images":{"fallback":{"src":"/static/7c4a644e9b3c386baecc0d1f74021bff/ccc41/video.png","srcSet":"/static/7c4a644e9b3c386baecc0d1f74021bff/bf8e1/video.png 128w,\\n/static/7c4a644e9b3c386baecc0d1f74021bff/acb7c/video.png 256w,\\n/static/7c4a644e9b3c386baecc0d1f74021bff/ccc41/video.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/7c4a644e9b3c386baecc0d1f74021bff/6766a/video.webp 128w,\\n/static/7c4a644e9b3c386baecc0d1f74021bff/22bfc/video.webp 256w,\\n/static/7c4a644e9b3c386baecc0d1f74021bff/d689f/video.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ }),

/***/ 9991:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#48b888","images":{"fallback":{"src":"/static/1fafbc065b9715c6cd66dfa9155ace2c/67921/logo.webp","srcSet":"/static/1fafbc065b9715c6cd66dfa9155ace2c/07b39/logo.webp 17w,\\n/static/1fafbc065b9715c6cd66dfa9155ace2c/0cc22/logo.webp 33w,\\n/static/1fafbc065b9715c6cd66dfa9155ace2c/67921/logo.webp 66w","sizes":"(min-width: 66px) 66px, 100vw"},"sources":[]},"width":66,"height":65}');

/***/ }),

/***/ 7166:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#1878f8","images":{"fallback":{"src":"/static/03c3adf6ffcb6c0e3825aa635bd3cbac/ccc41/facebook.png","srcSet":"/static/03c3adf6ffcb6c0e3825aa635bd3cbac/bf8e1/facebook.png 128w,\\n/static/03c3adf6ffcb6c0e3825aa635bd3cbac/acb7c/facebook.png 256w,\\n/static/03c3adf6ffcb6c0e3825aa635bd3cbac/ccc41/facebook.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/03c3adf6ffcb6c0e3825aa635bd3cbac/6766a/facebook.webp 128w,\\n/static/03c3adf6ffcb6c0e3825aa635bd3cbac/22bfc/facebook.webp 256w,\\n/static/03c3adf6ffcb6c0e3825aa635bd3cbac/d689f/facebook.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ }),

/***/ 1216:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/d20ced37aec9c69876682e0ec7aaf6dc/01504/sshot3.png","srcSet":"/static/d20ced37aec9c69876682e0ec7aaf6dc/8e540/sshot3.png 180w,\\n/static/d20ced37aec9c69876682e0ec7aaf6dc/59bfd/sshot3.png 360w,\\n/static/d20ced37aec9c69876682e0ec7aaf6dc/01504/sshot3.png 720w","sizes":"(min-width: 720px) 720px, 100vw"},"sources":[{"srcSet":"/static/d20ced37aec9c69876682e0ec7aaf6dc/6e191/sshot3.webp 180w,\\n/static/d20ced37aec9c69876682e0ec7aaf6dc/25350/sshot3.webp 360w,\\n/static/d20ced37aec9c69876682e0ec7aaf6dc/110ca/sshot3.webp 720w","type":"image/webp","sizes":"(min-width: 720px) 720px, 100vw"}]},"width":720,"height":405}');

/***/ }),

/***/ 4526:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/dfcc657b9043ec7c18ed414c1396cd69/ccc41/fireworks.png","srcSet":"/static/dfcc657b9043ec7c18ed414c1396cd69/bf8e1/fireworks.png 128w,\\n/static/dfcc657b9043ec7c18ed414c1396cd69/acb7c/fireworks.png 256w,\\n/static/dfcc657b9043ec7c18ed414c1396cd69/ccc41/fireworks.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/dfcc657b9043ec7c18ed414c1396cd69/6766a/fireworks.webp 128w,\\n/static/dfcc657b9043ec7c18ed414c1396cd69/22bfc/fireworks.webp 256w,\\n/static/dfcc657b9043ec7c18ed414c1396cd69/d689f/fireworks.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ }),

/***/ 5851:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/8e3ad7b613083ac5a4ac4d611c7b385a/8ce05/target.png","srcSet":"/static/8e3ad7b613083ac5a4ac4d611c7b385a/c7240/target.png 600w,\\n/static/8e3ad7b613083ac5a4ac4d611c7b385a/e8b76/target.png 1200w,\\n/static/8e3ad7b613083ac5a4ac4d611c7b385a/8ce05/target.png 2400w","sizes":"(min-width: 2400px) 2400px, 100vw"},"sources":[{"srcSet":"/static/8e3ad7b613083ac5a4ac4d611c7b385a/6d09e/target.webp 600w,\\n/static/8e3ad7b613083ac5a4ac4d611c7b385a/83805/target.webp 1200w,\\n/static/8e3ad7b613083ac5a4ac4d611c7b385a/2ff24/target.webp 2400w","type":"image/webp","sizes":"(min-width: 2400px) 2400px, 100vw"}]},"width":2400,"height":2400}');

/***/ }),

/***/ 5812:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/0b6b3c8d2c74fc2e0be8f5d940ec1e14/ccc41/insta.png","srcSet":"/static/0b6b3c8d2c74fc2e0be8f5d940ec1e14/bf8e1/insta.png 128w,\\n/static/0b6b3c8d2c74fc2e0be8f5d940ec1e14/acb7c/insta.png 256w,\\n/static/0b6b3c8d2c74fc2e0be8f5d940ec1e14/ccc41/insta.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/0b6b3c8d2c74fc2e0be8f5d940ec1e14/6766a/insta.webp 128w,\\n/static/0b6b3c8d2c74fc2e0be8f5d940ec1e14/22bfc/insta.webp 256w,\\n/static/0b6b3c8d2c74fc2e0be8f5d940ec1e14/d689f/insta.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ }),

/***/ 558:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/406bae3de2e80714f4cc55ec23ceeb13/ccc41/insight.png","srcSet":"/static/406bae3de2e80714f4cc55ec23ceeb13/bf8e1/insight.png 128w,\\n/static/406bae3de2e80714f4cc55ec23ceeb13/acb7c/insight.png 256w,\\n/static/406bae3de2e80714f4cc55ec23ceeb13/ccc41/insight.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/406bae3de2e80714f4cc55ec23ceeb13/6766a/insight.webp 128w,\\n/static/406bae3de2e80714f4cc55ec23ceeb13/22bfc/insight.webp 256w,\\n/static/406bae3de2e80714f4cc55ec23ceeb13/d689f/insight.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ }),

/***/ 1369:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/93fcc63c569d743d5c1f0ae8dde2abcb/ccc41/trophy.png","srcSet":"/static/93fcc63c569d743d5c1f0ae8dde2abcb/bf8e1/trophy.png 128w,\\n/static/93fcc63c569d743d5c1f0ae8dde2abcb/acb7c/trophy.png 256w,\\n/static/93fcc63c569d743d5c1f0ae8dde2abcb/ccc41/trophy.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/93fcc63c569d743d5c1f0ae8dde2abcb/6766a/trophy.webp 128w,\\n/static/93fcc63c569d743d5c1f0ae8dde2abcb/22bfc/trophy.webp 256w,\\n/static/93fcc63c569d743d5c1f0ae8dde2abcb/d689f/trophy.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ }),

/***/ 686:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/cd4b0dfef024c7b9655e01aac620e5b4/eae4c/sshot2.png","srcSet":"/static/cd4b0dfef024c7b9655e01aac620e5b4/fab45/sshot2.png 94w,\\n/static/cd4b0dfef024c7b9655e01aac620e5b4/2f7cd/sshot2.png 189w,\\n/static/cd4b0dfef024c7b9655e01aac620e5b4/eae4c/sshot2.png 377w","sizes":"(min-width: 377px) 377px, 100vw"},"sources":[{"srcSet":"/static/cd4b0dfef024c7b9655e01aac620e5b4/f619b/sshot2.webp 94w,\\n/static/cd4b0dfef024c7b9655e01aac620e5b4/315fa/sshot2.webp 189w,\\n/static/cd4b0dfef024c7b9655e01aac620e5b4/5a091/sshot2.webp 377w","type":"image/webp","sizes":"(min-width: 377px) 377px, 100vw"}]},"width":377,"height":336}');

/***/ }),

/***/ 3103:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/c6a2afd7994c016d1fedab7d8c1adac5/ccc41/team.png","srcSet":"/static/c6a2afd7994c016d1fedab7d8c1adac5/bf8e1/team.png 128w,\\n/static/c6a2afd7994c016d1fedab7d8c1adac5/acb7c/team.png 256w,\\n/static/c6a2afd7994c016d1fedab7d8c1adac5/ccc41/team.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/c6a2afd7994c016d1fedab7d8c1adac5/6766a/team.webp 128w,\\n/static/c6a2afd7994c016d1fedab7d8c1adac5/22bfc/team.webp 256w,\\n/static/c6a2afd7994c016d1fedab7d8c1adac5/d689f/team.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map