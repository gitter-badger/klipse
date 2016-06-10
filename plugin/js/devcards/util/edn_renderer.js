// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('devcards.util.edn_renderer');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('devcards.util.utils');
if(typeof devcards.util.edn_renderer._STAR_key_counter_STAR_ !== 'undefined'){
} else {
devcards.util.edn_renderer._STAR_key_counter_STAR_ = null;
}
devcards.util.edn_renderer.get_key = (function devcards$util$edn_renderer$get_key(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer._STAR_key_counter_STAR_,cljs.core.inc);

return [cljs.core.str("k-"),cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.util.edn_renderer._STAR_key_counter_STAR_) : cljs.core.deref.call(null,devcards.util.edn_renderer._STAR_key_counter_STAR_)))].join('');
});
devcards.util.edn_renderer.literal_QMARK_ = (function devcards$util$edn_renderer$literal_QMARK_(x){
return (!(cljs.core.seq_QMARK_(x))) && (!(cljs.core.coll_QMARK_(x)));
});
devcards.util.edn_renderer.separator_STAR_ = (function devcards$util$edn_renderer$separator_STAR_(s){
var G__46188 = "span";
var G__46189 = {"key": devcards.util.edn_renderer.get_key(), "className": "seperator"};
var G__46190 = sablono.interpreter.interpret(s);
return React.createElement(G__46188,G__46189,G__46190);
});
devcards.util.edn_renderer.clearfix_separator_STAR_ = (function devcards$util$edn_renderer$clearfix_separator_STAR_(s){
var G__46201 = "span";
var G__46202 = {"key": devcards.util.edn_renderer.get_key()};
var G__46203 = sablono.interpreter.interpret(devcards.util.edn_renderer.separator_STAR_(s));
var G__46204 = (function (){var G__46205 = "span";
var G__46206 = {"className": "clearfix"};
return React.createElement(G__46205,G__46206);
})();
return React.createElement(G__46201,G__46202,G__46203,G__46204);
});
devcards.util.edn_renderer.separate_fn = (function devcards$util$edn_renderer$separate_fn(coll){
if(!(cljs.core.every_QMARK_(devcards.util.edn_renderer.literal_QMARK_,coll))){
return devcards.util.edn_renderer.clearfix_separator_STAR_;
} else {
return devcards.util.edn_renderer.separator_STAR_;
}
});
devcards.util.edn_renderer.interpose_separator = (function devcards$util$edn_renderer$interpose_separator(rct_coll,s,sep_fn){
return cljs.core.to_array(cljs.core.cons(cljs.core.first(rct_coll),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return (sep_fn.cljs$core$IFn$_invoke$arity$1 ? sep_fn.cljs$core$IFn$_invoke$arity$1(s) : sep_fn.call(null,s));
})),cljs.core.rest(rct_coll))));
});
devcards.util.edn_renderer.literal = (function devcards$util$edn_renderer$literal(class$,x){
var G__46210 = "span";
var G__46211 = {"className": class$, "key": devcards.util.edn_renderer.get_key()};
var G__46212 = sablono.interpreter.interpret(devcards.util.utils.pprint_str(x));
return React.createElement(G__46210,G__46211,G__46212);
});
devcards.util.edn_renderer.html_val = (function devcards$util$edn_renderer$html_val(index,v){
var G__46216 = "span";
var G__46217 = {"key": index};
var G__46218 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(v) : devcards.util.edn_renderer.html.call(null,v)));
return React.createElement(G__46216,G__46217,G__46218);
});
devcards.util.edn_renderer.join_html = (function devcards$util$edn_renderer$join_html(separator,coll){
return devcards.util.edn_renderer.interpose_separator(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer.html_val,coll)),separator,devcards.util.edn_renderer.separate_fn(coll));
});
devcards.util.edn_renderer.html_keyval = (function devcards$util$edn_renderer$html_keyval(p__46219){
var vec__46227 = p__46219;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46227,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46227,(1),null);
var G__46230 = "span";
var G__46231 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0)), "className": "keyval"};
var G__46232 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(k) : devcards.util.edn_renderer.html.call(null,k)));
var G__46233 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(v) : devcards.util.edn_renderer.html.call(null,v)));
return React.createElement(G__46230,G__46231,G__46232,G__46233);
});
devcards.util.edn_renderer.html_keyvals = (function devcards$util$edn_renderer$html_keyvals(coll){
return devcards.util.edn_renderer.interpose_separator(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer.html_keyval,coll)," ",devcards.util.edn_renderer.separate_fn(cljs.core.vals(coll)));
});
devcards.util.edn_renderer.open_close = (function devcards$util$edn_renderer$open_close(class_str,opener,closer,rct_coll){
var G__46248 = "span";
var G__46249 = {"className": class_str, "key": [cljs.core.str(cljs.core.hash(rct_coll))].join('')};
var G__46250 = (function (){var G__46253 = "span";
var G__46254 = {"key": (1), "className": "opener"};
var G__46255 = sablono.interpreter.interpret(opener);
return React.createElement(G__46253,G__46254,G__46255);
})();
var G__46251 = (function (){var G__46256 = "span";
var G__46257 = {"key": (2), "className": "contents"};
var G__46258 = sablono.interpreter.interpret(rct_coll);
return React.createElement(G__46256,G__46257,G__46258);
})();
var G__46252 = (function (){var G__46259 = "span";
var G__46260 = {"key": (3), "className": "closer"};
var G__46261 = sablono.interpreter.interpret(closer);
return React.createElement(G__46259,G__46260,G__46261);
})();
return React.createElement(G__46248,G__46249,G__46250,G__46251,G__46252);
});
devcards.util.edn_renderer.html_collection = (function devcards$util$edn_renderer$html_collection(class$,opener,closer,coll){
return devcards.util.edn_renderer.open_close([cljs.core.str("collection "),cljs.core.str(class$)].join(''),opener,closer,devcards.util.edn_renderer.join_html(" ",coll));
});
devcards.util.edn_renderer.html_map = (function devcards$util$edn_renderer$html_map(coll){
return devcards.util.edn_renderer.open_close("collection map","{","}",devcards.util.edn_renderer.html_keyvals(coll));
});
devcards.util.edn_renderer.html_string = (function devcards$util$edn_renderer$html_string(s){
return devcards.util.edn_renderer.open_close("string","\"","\"",s);
});
devcards.util.edn_renderer.html = (function devcards$util$edn_renderer$html(x){
if(typeof x === 'number'){
return devcards.util.edn_renderer.literal("number",x);
} else {
if((x instanceof cljs.core.Keyword)){
return devcards.util.edn_renderer.literal("keyword",x);
} else {
if((x instanceof cljs.core.Symbol)){
return devcards.util.edn_renderer.literal("symbol",x);
} else {
if(typeof x === 'string'){
return devcards.util.edn_renderer.html_string(x);
} else {
if(cljs.core.map_QMARK_(x)){
return devcards.util.edn_renderer.html_map(x);
} else {
if(cljs.core.set_QMARK_(x)){
return devcards.util.edn_renderer.html_collection("set","#{","}",x);
} else {
if(cljs.core.vector_QMARK_(x)){
return devcards.util.edn_renderer.html_collection("vector","[","]",x);
} else {
if(cljs.core.seq_QMARK_(x)){
return devcards.util.edn_renderer.html_collection("seq","(",")",x);
} else {
return devcards.util.edn_renderer.literal("literal",x);

}
}
}
}
}
}
}
}
});
devcards.util.edn_renderer.html_edn = (function devcards$util$edn_renderer$html_edn(e){
var _STAR_key_counter_STAR_46266 = devcards.util.edn_renderer._STAR_key_counter_STAR_;
devcards.util.edn_renderer._STAR_key_counter_STAR_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));

try{var G__46267 = "div";
var G__46268 = {"key": "devcards-edn-block", "className": "com-rigsomelight-devcards-typog com-rigsomelight-rendered-edn"};
var G__46269 = sablono.interpreter.interpret(devcards.util.edn_renderer.html(e));
return React.createElement(G__46267,G__46268,G__46269);
}finally {devcards.util.edn_renderer._STAR_key_counter_STAR_ = _STAR_key_counter_STAR_46266;
}});
