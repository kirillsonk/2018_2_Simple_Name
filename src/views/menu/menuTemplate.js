function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function menutemplateTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Fviews\u002Fmenu\u002FmenuTemplate.pug":"extends ..\u002Flayout\u002FmainTemplate\ninclude ..\u002Fmodules\u002FheaderTemplate\n\nblock title\n    | Simple Game\n\nblock header\n    +pageTitle('Simple Game')\n\nblock content\n    div#buttons\n        mixin menuList(link, item)\n            dl.menu\n                dt\n                    a(href=link name=link)= item\n\n        +menuList('signup', 'Sign up')\n        +menuList('signin', 'Sign in')\n        +menuList('leaders', 'Leaders')\n        +menuList('profile', 'Profile')\n        +menuList('about', 'About')\n\n    div.warn-title #{statusText}\n\n","src\u002Fviews\u002Flayout\u002FmainTemplate.pug":"head\n    title\n        block title\n\n    block header\n        \u002F\u002F- h1.pageTitle #{title}\nbody\n    block content\n    ","src\u002Fviews\u002Fmodules\u002FheaderTemplate.pug":"mixin pageTitle(name)\n    h1.pageTitle= name"};
;var locals_for_with = (locals || {});(function (statusText) {;pug_debug_line = 1;pug_debug_filename = "src\u002Fviews\u002Fmodules\u002FheaderTemplate.pug";
pug_mixins["pageTitle"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fviews\u002Fmodules\u002FheaderTemplate.pug";
pug_html = pug_html + "\u003Ch1 class=\"pageTitle\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fviews\u002Fmodules\u002FheaderTemplate.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fviews\u002Flayout\u002FmainTemplate.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fviews\u002Flayout\u002FmainTemplate.pug";
pug_html = pug_html + "\u003Ctitle\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fviews\u002Flayout\u002FmainTemplate.pug";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fviews\u002Fmenu\u002FmenuTemplate.pug";
pug_html = pug_html + "Simple Game\u003C\u002Ftitle\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fviews\u002Flayout\u002FmainTemplate.pug";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fviews\u002Fmenu\u002FmenuTemplate.pug";
pug_mixins["pageTitle"]('Simple Game');
pug_html = pug_html + "\u003C\u002Fhead\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fviews\u002Flayout\u002FmainTemplate.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fviews\u002Flayout\u002FmainTemplate.pug";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fviews\u002Fmenu\u002FmenuTemplate.pug";
pug_html = pug_html + "\u003Cdiv id=\"buttons\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fviews\u002Fmenu\u002FmenuTemplate.pug";
pug_mixins["menuList"] = pug_interp = function(link, item){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 13;pug_debug_filename = "src\u002Fviews\u002Fmenu\u002FmenuTemplate.pug";
pug_html = pug_html + "\u003Cdl class=\"menu\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fviews\u002Fmenu\u002FmenuTemplate.pug";
pug_html = pug_html + "\u003Cdt\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fviews\u002Fmenu\u002FmenuTemplate.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", link, true, false)+pug_attr("name", link, true, false)) + "\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fviews\u002Fmenu\u002FmenuTemplate.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fdt\u003E\u003C\u002Fdl\u003E";
};
;pug_debug_line = 17;pug_debug_filename = "src\u002Fviews\u002Fmenu\u002FmenuTemplate.pug";
pug_mixins["menuList"]('signup', 'Sign up');
;pug_debug_line = 18;pug_debug_filename = "src\u002Fviews\u002Fmenu\u002FmenuTemplate.pug";
pug_mixins["menuList"]('signin', 'Sign in');
;pug_debug_line = 19;pug_debug_filename = "src\u002Fviews\u002Fmenu\u002FmenuTemplate.pug";
pug_mixins["menuList"]('leaders', 'Leaders');
;pug_debug_line = 20;pug_debug_filename = "src\u002Fviews\u002Fmenu\u002FmenuTemplate.pug";
pug_mixins["menuList"]('profile', 'Profile');
;pug_debug_line = 21;pug_debug_filename = "src\u002Fviews\u002Fmenu\u002FmenuTemplate.pug";
pug_mixins["menuList"]('about', 'About');
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fviews\u002Fmenu\u002FmenuTemplate.pug";
pug_html = pug_html + "\u003Cdiv class=\"warn-title\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fviews\u002Fmenu\u002FmenuTemplate.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = statusText) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E";}.call(this,"statusText" in locals_for_with?locals_for_with.statusText:typeof statusText!=="undefined"?statusText:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}