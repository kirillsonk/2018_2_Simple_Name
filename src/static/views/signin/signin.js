function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
<<<<<<< HEAD
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function signinTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug":"extends ..\u002Flayout\u002Fmain\ninclude ..\u002Fmodules\u002Fheader\n\nblock title\n    | Simple Game\n\nblock header\n    +pageTitle('Sign in')\n\nblock content\n    div\n        form(method='POST' action='\u002Flogin')#siginForm\n            div.form-group Email:\n                input#email(type='email', placeholder='name@email.com' name='email')\n\n            div.form-group Password:\n                input#password(type='password', placeholder='Password', name='password')\n\n                button(type='submit') Sign in\n\n    a.button-menu(name='menu' href='') Back to menu\n\n","src\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug":"head\n    title\n        block title\n\n    block header\nbody\n    block content\n    ","src\u002Fstatic\u002Fviews\u002Fmodules\u002Fheader.pug":"mixin pageTitle(name)\n    h1.pageTitle= name"};
=======
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function signinTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug":"extends ..\u002Flayout\u002Fmain\ninclude ..\u002Fmodules\u002Fheader\n\nblock title\n    | Simple Game\n\nblock header\n    +pageTitle('Sign in')\n\nblock content\n    div\n        form(method='POST' action='\u002Fregister')#signinForm\n            div.form-group\n                label(for='email2') Email:\n                input#email2(type='email', placeholder='name@email.com', name='email')\n\n            div.form-group\n                label(for='password2') Password:\n                input#password2(type='password', placeholder='Password', name='password')\n\n                button(type='submit') Sign in\n\n    a.button-menu(name='menu' href='') Back to menu\n\n","src\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug":"head\n    title\n        block title\n\n    block header\nbody\n    block content\n    ","src\u002Fstatic\u002Fviews\u002Fmodules\u002Fheader.pug":"mixin pageTitle(name)\n    h1.pageTitle= name"};
>>>>>>> ca7f88e73fcede12564d2f68965383f74c2e58d4
var pug_indent = [];
;pug_debug_line = 1;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fmodules\u002Fheader.pug";
pug_mixins["pageTitle"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fmodules\u002Fheader.pug";
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch1 class=\"pageTitle\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fmodules\u002Fheader.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
pug_html = pug_html + "\n\u003Chead\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
pug_html = pug_html + "\n  \u003Ctitle\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
pug_html = pug_html + "Simple Game\n  \u003C\u002Ftitle\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
pug_indent.push('  ');
pug_mixins["pageTitle"]('Sign in');
pug_indent.pop();
pug_html = pug_html + "\n\u003C\u002Fhead\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
pug_html = pug_html + "\n\u003Cbody\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
pug_html = pug_html + "\n  \u003Cdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
<<<<<<< HEAD
pug_html = pug_html + "\n    \u003Cform method=\"POST\" action=\"\u002Flogin\" id=\"siginForm\"\u003E";
=======
pug_html = pug_html + "\n    \u003Cform method=\"POST\" action=\"\u002Fregister\" id=\"signinForm\"\u003E";
>>>>>>> ca7f88e73fcede12564d2f68965383f74c2e58d4
;pug_debug_line = 13;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
pug_html = pug_html + "\n      \u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
pug_html = pug_html + "Email:";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
<<<<<<< HEAD
pug_html = pug_html + "\n        \u003Cinput id=\"email\" type=\"email\" placeholder=\"name@email.com\" name=\"email\"\u002F\u003E\n      \u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
pug_html = pug_html + "\n      \u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
pug_html = pug_html + "Password:";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
pug_html = pug_html + "\n        \u003Cinput id=\"password\" type=\"password\" placeholder=\"Password\" name=\"password\"\u002F\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
=======
pug_html = pug_html + "\n        \u003Clabel for=\"email2\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
pug_html = pug_html + "Email:\u003C\u002Flabel\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
pug_html = pug_html + "\n        \u003Cinput id=\"email2\" type=\"email\" placeholder=\"name@email.com\" name=\"email\"\u002F\u003E\n      \u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
pug_html = pug_html + "\n      \u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
pug_html = pug_html + "\n        \u003Clabel for=\"password2\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
pug_html = pug_html + "Password:\u003C\u002Flabel\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
pug_html = pug_html + "\n        \u003Cinput id=\"password2\" type=\"password\" placeholder=\"Password\" name=\"password\"\u002F\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
>>>>>>> ca7f88e73fcede12564d2f68965383f74c2e58d4
pug_html = pug_html + "\n        \u003Cbutton type=\"submit\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
pug_html = pug_html + "Sign in\u003C\u002Fbutton\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
pug_html = pug_html + "\u003Ca class=\"button-menu\" name=\"menu\" href=\"\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fsignin\u002Fsignin.pug";
pug_html = pug_html + "Back to menu\u003C\u002Fa\u003E\n\u003C\u002Fbody\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}