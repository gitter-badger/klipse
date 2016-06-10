// Compiled by ClojureScript 1.9.36 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__23601__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_36248_36250 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_36249_36251 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_36248_36250,_STAR_print_fn_STAR_36249_36251,sb__23601__auto__){
return (function (x__23602__auto__){
return sb__23601__auto__.append(x__23602__auto__);
});})(_STAR_print_newline_STAR_36248_36250,_STAR_print_fn_STAR_36249_36251,sb__23601__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36249_36251;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36248_36250;
}
return [cljs.core.str(sb__23601__auto__)].join('');
}catch (e36246){if((e36246 instanceof Error)){
var e1 = e36246;
try{return obj.toString();
}catch (e36247){if((e36247 instanceof Error)){
var e2 = e36247;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e36247;

}
}} else {
throw e36246;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_36253 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_36253;
}});

//# sourceMappingURL=utils.js.map?rel=1465451162980