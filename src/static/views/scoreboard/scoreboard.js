function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function scoreboardTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug":"extends ..\u002Flayout\u002Fmain\ninclude ..\u002Fmodules\u002Fheader\n\nblock title\n    | Simple Game\n\nblock header\n    +pageTitle('Leaders')\n\n    \u002F\u002F- each val in [1, 2, 3, 4, 5]\n    \u002F\u002F- li= val\n\nblock content\n\n    div#pagintaion\n        \u002F\u002F- - var tmp = JSON.stringify(inputPlayers)\n\n        \u002F\u002F- var user = {\n        \u002F\u002F-     name: 'John Doe',\n        \u002F\u002F-     role: 'admin'\n        \u002F\u002F- };\n        \u002F\u002F- - var players = #{inputPlayers}  \u002F\u002FВсе игроки на одной странице\n\n        table.score-table\n            tr\n                each val in ['Nickname', 'Score']\n                    th= val \n            each nick, score in inputPlayers\n                tr\n                    td= score\n                    td= nick\n                \n\n        \u002F\u002F- Pagination\n        mixin pagination(amount, active, ellipsis, last, arrows)\n            \u002F\u002F- amount - amount of displayed numbers +1 prior ellipsis\n            \u002F\u002F- active - active number\n            \u002F\u002F- ellipsis - number to be replaced by ellipsis\n            \u002F\u002F- last - number after ellipsis\n            \u002F\u002F- .icon-pagination-prev and .icon-pagination-next\n            .pagination\n                \u002F\u002F- prev arrow\n                if (arrows === arrows)\n                    a(href=\"\" title=\"Prev page\").pagination__prev.icon-pagination-prev ◀\n                else\n\n                ul.pagination__list\n                    \u002F\u002F- before ellipsis\n                    - for (var index = 1; index \u003C= amount; index++)\n                        if (index === active)\n                            li.pagination__item.is-active\n                                a(href=\"#\" title=\"Current page #{index}\" ).pagination__number= index\n                        else if (index === ellipsis)\n                            li.pagination__item\n                                a(href=\"#\" title=\"Show more\" ).pagination__number.is-collapsed ...\n                        else\n                            li.pagination__item\n                                a(href=\"#\" title=\"Go to page #{index}\" ).pagination__number= index\n                    \u002F\u002F- after ellipsis\n                    - for (var index = amount + 1; index \u003C= last; index++)\n                        li.pagination__item\n                            a(href=\"#\" title=\"Go to pagе #{index}\").pagination__number= index\n\n                \u002F\u002F- next arrow\n                if (arrows === arrows)\n                    a(href=\"#\" title=\"Next page\").pagination__next.icon-pagination-next ▶\n        \u002F\u002F- Use example\n        \u002F\u002F- first part is 5 numbers\n        \u002F\u002F- 3 is active\n        \u002F\u002F- 4 is ellipsis\n        \u002F\u002F- 9 is the last number, starting from last number of first part (5)\n        \u002F\u002F- arrows - show prev\u002Fnext arrows\n        \u002F\u002F- +pagination(5, 1, 4, 9, arrows)\n        \n        \u002F\u002F- +pagination(5, 3, 4, 9, 100)\n\n    a.button-menu(name='menu' href='') Back to menu\n\n\n\n\n","src\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug":"head\n    title\n        block title\n\n    block header\nbody\n    block content\n    ","src\u002Fstatic\u002Fviews\u002Fmodules\u002Fheader.pug":"mixin pageTitle(name)\n    h1.pageTitle= name"};
;var locals_for_with = (locals || {});(function (inputPlayers) {var pug_indent = [];
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
;pug_debug_line = 5;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + "Simple Game\n  \u003C\u002Ftitle\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_indent.push('  ');
pug_mixins["pageTitle"]('Leaders');
pug_indent.pop();
pug_html = pug_html + "\n\u003C\u002Fhead\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
pug_html = pug_html + "\n\u003Cbody\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + "\n  \u003Cdiv id=\"pagintaion\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + "\n    \u003Ctable class=\"score-table\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + "\n      \u003Ctr\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
// iterate ['Nickname', 'Score']
;(function(){
  var $$obj = ['Nickname', 'Score'];
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var val = $$obj[pug_index0];
;pug_debug_line = 27;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + "\n        \u003Cth\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = val) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var val = $$obj[pug_index0];
;pug_debug_line = 27;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + "\n        \u003Cth\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = val) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n      \u003C\u002Ftr\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
// iterate inputPlayers
;(function(){
  var $$obj = inputPlayers;
  if ('number' == typeof $$obj.length) {
      for (var score = 0, $$l = $$obj.length; score < $$l; score++) {
        var nick = $$obj[score];
;pug_debug_line = 29;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + "\n      \u003Ctr\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + "\n        \u003Ctd\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = score) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + "\n        \u003Ctd\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = nick) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var score in $$obj) {
      $$l++;
      var nick = $$obj[score];
;pug_debug_line = 29;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + "\n      \u003Ctr\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + "\n        \u003Ctd\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = score) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + "\n        \u003Ctd\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = nick) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n    \u003C\u002Ftable\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";















































































pug_html = pug_html + "\n  \u003C\u002Fdiv\u003E";
;pug_debug_line = 77;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + "\u003Ca class=\"button-menu\" name=\"menu\" href=\"\"\u003E";
;pug_debug_line = 77;pug_debug_filename = "src\u002Fstatic\u002Fviews\u002Fscoreboard\u002Fscoreboard.pug";
pug_html = pug_html + "Back to menu\u003C\u002Fa\u003E\n\u003C\u002Fbody\u003E";}.call(this,"inputPlayers" in locals_for_with?locals_for_with.inputPlayers:typeof inputPlayers!=="undefined"?inputPlayers:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}