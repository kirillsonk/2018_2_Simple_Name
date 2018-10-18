function pug_attr(t, e, n, f) { return !1 !== e && null != e && (e || "class" !== t && "style" !== t) ? !0 === e ? " " + (f ? t : t + '="' + t + '"') : ("function" == typeof e.toJSON && (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'") : "" }
function pug_escape(e) { var a = "" + e, t = pug_match_html.exec(a); if (!t) return e; var r, c, n, s = ""; for (r = t.index, c = 0; r < a.length; r++) { switch (a.charCodeAt(r)) { case 34: n = "&quot;"; break; case 38: n = "&amp;"; break; case 60: n = "&lt;"; break; case 62: n = "&gt;"; break; default: continue }c !== r && (s += a.substring(c, r)), c = r + 1, s += n } return c !== r ? s + a.substring(c, r) : s }
var pug_match_html = /["&<>]/;
function pug_rethrow(n, e, r, t) { if (!(n instanceof Error)) throw n; if (!("undefined" == typeof window && e || t)) throw n.message += " on line " + r, n; try { t = t || require("fs").readFileSync(e, "utf8") } catch (e) { pug_rethrow(n, null, r) } var i = 3, a = t.split("\n"), o = Math.max(r - i, 0), h = Math.min(a.length, r + i), i = a.slice(o, h).map(function (n, e) { var t = e + o + 1; return (t == r ? "  > " : "    ") + t + "| " + n }).join("\n"); throw n.path = e, n.message = (e || "Pug") + ":" + r + "\n" + i + "\n\n" + n.message, n } function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp; var pug_debug_filename, pug_debug_line; try {
        ; pug_debug_line = 1; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Fmodules\u002Fheader.pug";
        pug_mixins["pageTitle"] = pug_interp = function (name) {
            var block = (this && this.block), attributes = (this && this.attributes) || {};
            ; pug_debug_line = 2; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Fmodules\u002Fheader.pug";
            pug_html = pug_html + "\u003Ch1 class=\"pageTitle\"\u003E";
            ; pug_debug_line = 2; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Fmodules\u002Fheader.pug";
            pug_html = pug_html + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E";
        };
        ; pug_debug_line = 1; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
        pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
        ; pug_debug_line = 2; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
        pug_html = pug_html + "\u003Chtml lang=\"ru-RU\"\u003E\u003C\u002Fhtml\u003E";
        ; pug_debug_line = 3; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
        pug_html = pug_html + "\u003Clink href=\"style.css\" rel=\"stylesheet\"\u003E";
        ; pug_debug_line = 4; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
        pug_html = pug_html + "\u003Chead\u003E";
        ; pug_debug_line = 5; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
        pug_html = pug_html + "\u003Cmeta http-equiv=\"Content-Type\" content=\"text\u002Fhtml; charset=UTF-8\"\u003E";
        ; pug_debug_line = 6; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
        pug_html = pug_html + "\u003Ctitle\u003E";
        ; pug_debug_line = 7; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
        ; pug_debug_line = 5; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Fmenu.pug";
        pug_html = pug_html + "Simple Game\u003C\u002Ftitle\u003E";
        ; pug_debug_line = 9; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
        pug_html = pug_html + "\u003Clink rel=\"stylesheet\" type=\"text\u002Fcss\" href=\"css\u002Fmain.css\"\u003E";
        ; pug_debug_line = 11; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
        ; pug_debug_line = 8; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Fmenu.pug";
        pug_mixins["pageTitle"]('Simple Game');
        pug_html = pug_html + "\u003C\u002Fhead\u003E";
        ; pug_debug_line = 12; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
        pug_html = pug_html + "\u003Cbody\u003E";
        ; pug_debug_line = 13; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Flayout\u002Fmain.pug";
        ; pug_debug_line = 11; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Fmenu.pug";
        pug_html = pug_html + "\u003Cdiv\u003E";
        ; pug_debug_line = 12; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Fmenu.pug";
        pug_mixins["menuList"] = pug_interp = function (link, item) {
            var block = (this && this.block), attributes = (this && this.attributes) || {};
            ; pug_debug_line = 13; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Fmenu.pug";
            pug_html = pug_html + "\u003Cdl class=\"menu\"\u003E";
            ; pug_debug_line = 14; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Fmenu.pug";
            pug_html = pug_html + "\u003Cdt\u003E";
            ; pug_debug_line = 15; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Fmenu.pug";
            pug_html = pug_html + "\u003Ca" + (pug_attr("href", link, true, true)) + "\u003E";
            ; pug_debug_line = 15; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Fmenu.pug";
            pug_html = pug_html + (pug_escape(null == (pug_interp = item) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fdt\u003E\u003C\u002Fdl\u003E";
        };
        ; pug_debug_line = 17; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Fmenu.pug";
        pug_mixins["menuList"]('signup', 'Sign up');
        ; pug_debug_line = 18; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Fmenu.pug";
        pug_mixins["menuList"]('signin', 'Sign in');
        ; pug_debug_line = 19; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Fmenu.pug";
        pug_mixins["menuList"]('leaders', 'Leaders');
        ; pug_debug_line = 20; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Fmenu.pug";
        pug_mixins["menuList"]('profile', 'Profile');
        ; pug_debug_line = 21; pug_debug_filename = "..\u002Fsrc\u002Fstatic\u002Fviews\u002Fmenu.pug";
        pug_mixins["menuList"]('about', 'About');
        pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E";
    } catch (err) { pug_rethrow(err, pug_debug_filename, pug_debug_line); }; return pug_html;
}