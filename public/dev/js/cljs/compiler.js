// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_first_ns_segment,cljs.core.keys(cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__26274 = s;
var map__26274__$1 = ((((!((map__26274 == null)))?((((map__26274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26274):map__26274);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26274__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26274__$1,cljs.core.cst$kw$info);
var d = (0);
var G__26278 = info;
var map__26279 = G__26278;
var map__26279__$1 = ((((!((map__26279 == null)))?((((map__26279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26279):map__26279);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26279__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__26278__$1 = G__26278;
while(true){
var d__$2 = d__$1;
var map__26281 = G__26278__$1;
var map__26281__$1 = ((((!((map__26281 == null)))?((((map__26281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26281):map__26281);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26281__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__26287 = (d__$2 + (1));
var G__26288 = shadow__$1;
d__$1 = G__26287;
G__26278__$1 = G__26288;
continue;
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments()))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__26289){
var map__26295 = p__26289;
var map__26295__$1 = ((((!((map__26295 == null)))?((((map__26295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26295):map__26295);
var name_var = map__26295__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26295__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26295__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace([cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__26297 = info;
var map__26297__$1 = ((((!((map__26297 == null)))?((((map__26297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26297):map__26297);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26297__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26297__$1,cljs.core.cst$kw$fn_DASH_scope);
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__26299 = [cljs.core.str(clojure.string.replace([cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__26299) : cljs.compiler.munge.call(null,G__26299));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args26300 = [];
var len__7296__auto___26303 = arguments.length;
var i__7297__auto___26304 = (0);
while(true){
if((i__7297__auto___26304 < len__7296__auto___26303)){
args26300.push((arguments[i__7297__auto___26304]));

var G__26305 = (i__7297__auto___26304 + (1));
i__7297__auto___26304 = G__26305;
continue;
} else {
}
break;
}

var G__26302 = args26300.length;
switch (G__26302) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26300.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(name_var);
var field = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(name_var);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(name_var);
if(!((cljs.core.cst$kw$fn_DASH_self_DASH_name.cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = cljs.core.munge(ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__26315 = cp;
switch (G__26315) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return [cljs.core.str("\\u"),cljs.core.str(pad),cljs.core.str(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__26321_26325 = cljs.core.seq(s);
var chunk__26322_26326 = null;
var count__26323_26327 = (0);
var i__26324_26328 = (0);
while(true){
if((i__26324_26328 < count__26323_26327)){
var c_26329 = chunk__26322_26326.cljs$core$IIndexed$_nth$arity$2(null,i__26324_26328);
sb.append(cljs.compiler.escape_char(c_26329));

var G__26330 = seq__26321_26325;
var G__26331 = chunk__26322_26326;
var G__26332 = count__26323_26327;
var G__26333 = (i__26324_26328 + (1));
seq__26321_26325 = G__26330;
chunk__26322_26326 = G__26331;
count__26323_26327 = G__26332;
i__26324_26328 = G__26333;
continue;
} else {
var temp__4657__auto___26334 = cljs.core.seq(seq__26321_26325);
if(temp__4657__auto___26334){
var seq__26321_26335__$1 = temp__4657__auto___26334;
if(cljs.core.chunked_seq_QMARK_(seq__26321_26335__$1)){
var c__7032__auto___26336 = cljs.core.chunk_first(seq__26321_26335__$1);
var G__26337 = cljs.core.chunk_rest(seq__26321_26335__$1);
var G__26338 = c__7032__auto___26336;
var G__26339 = cljs.core.count(c__7032__auto___26336);
var G__26340 = (0);
seq__26321_26325 = G__26337;
chunk__26322_26326 = G__26338;
count__26323_26327 = G__26339;
i__26324_26328 = G__26340;
continue;
} else {
var c_26341 = cljs.core.first(seq__26321_26335__$1);
sb.append(cljs.compiler.escape_char(c_26341));

var G__26342 = cljs.core.next(seq__26321_26335__$1);
var G__26343 = null;
var G__26344 = (0);
var G__26345 = (0);
seq__26321_26325 = G__26342;
chunk__26322_26326 = G__26343;
count__26323_26327 = G__26344;
i__26324_26328 = G__26345;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__7146__auto__ = (function (){var G__26346 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26346) : cljs.core.atom.call(null,G__26346));
})();
var prefer_table__7147__auto__ = (function (){var G__26347 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26347) : cljs.core.atom.call(null,G__26347));
})();
var method_cache__7148__auto__ = (function (){var G__26348 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26348) : cljs.core.atom.call(null,G__26348));
})();
var cached_hierarchy__7149__auto__ = (function (){var G__26349 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26349) : cljs.core.atom.call(null,G__26349));
})();
var hierarchy__7150__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),cljs.core.cst$kw$op,cljs.core.cst$kw$default,hierarchy__7150__auto__,method_table__7146__auto__,prefer_table__7147__auto__,method_cache__7148__auto__,cached_hierarchy__7149__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__24128__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__24128__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__26355_26360 = ast;
var map__26355_26361__$1 = ((((!((map__26355_26360 == null)))?((((map__26355_26360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26355_26360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26355_26360):map__26355_26360);
var env_26362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26355_26361__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_26362))){
var map__26357_26363 = env_26362;
var map__26357_26364__$1 = ((((!((map__26357_26363 == null)))?((((map__26357_26363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26357_26363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26357_26363):map__26357_26363);
var line_26365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26357_26364__$1,cljs.core.cst$kw$line);
var column_26366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26357_26364__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__26357_26363,map__26357_26364__$1,line_26365,column_26366,map__26355_26360,map__26355_26361__$1,env_26362,val__24128__auto__){
return (function (m){
var minfo = (function (){var G__26359 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$var)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26359,cljs.core.cst$kw$name,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__26359;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_26365 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__26357_26363,map__26357_26364__$1,line_26365,column_26366,map__26355_26360,map__26355_26361__$1,env_26362,val__24128__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_26366)?(column_26366 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__26357_26363,map__26357_26364__$1,line_26365,column_26366,map__26355_26360,map__26355_26361__$1,env_26362,val__24128__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__26357_26363,map__26357_26364__$1,line_26365,column_26366,map__26355_26360,map__26355_26361__$1,env_26362,val__24128__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__26357_26363,map__26357_26364__$1,line_26365,column_26366,map__26355_26360,map__26355_26361__$1,env_26362,val__24128__auto__))
,cljs.core.sorted_map()));
});})(map__26357_26363,map__26357_26364__$1,line_26365,column_26366,map__26355_26360,map__26355_26361__$1,env_26362,val__24128__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__24128__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__7303__auto__ = [];
var len__7296__auto___26373 = arguments.length;
var i__7297__auto___26374 = (0);
while(true){
if((i__7297__auto___26374 < len__7296__auto___26373)){
args__7303__auto__.push((arguments[i__7297__auto___26374]));

var G__26375 = (i__7297__auto___26374 + (1));
i__7297__auto___26374 = G__26375;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__26369_26376 = cljs.core.seq(xs);
var chunk__26370_26377 = null;
var count__26371_26378 = (0);
var i__26372_26379 = (0);
while(true){
if((i__26372_26379 < count__26371_26378)){
var x_26380 = chunk__26370_26377.cljs$core$IIndexed$_nth$arity$2(null,i__26372_26379);
if((x_26380 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_26380)){
cljs.compiler.emit(x_26380);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_26380)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_26380);
} else {
if(goog.isFunction(x_26380)){
(x_26380.cljs$core$IFn$_invoke$arity$0 ? x_26380.cljs$core$IFn$_invoke$arity$0() : x_26380.call(null));
} else {
var s_26381 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_26380], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__26369_26376,chunk__26370_26377,count__26371_26378,i__26372_26379,s_26381,x_26380){
return (function (p1__26367_SHARP_){
return (p1__26367_SHARP_ + cljs.core.count(s_26381));
});})(seq__26369_26376,chunk__26370_26377,count__26371_26378,i__26372_26379,s_26381,x_26380))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_26381], 0));

}
}
}
}

var G__26382 = seq__26369_26376;
var G__26383 = chunk__26370_26377;
var G__26384 = count__26371_26378;
var G__26385 = (i__26372_26379 + (1));
seq__26369_26376 = G__26382;
chunk__26370_26377 = G__26383;
count__26371_26378 = G__26384;
i__26372_26379 = G__26385;
continue;
} else {
var temp__4657__auto___26386 = cljs.core.seq(seq__26369_26376);
if(temp__4657__auto___26386){
var seq__26369_26387__$1 = temp__4657__auto___26386;
if(cljs.core.chunked_seq_QMARK_(seq__26369_26387__$1)){
var c__7032__auto___26388 = cljs.core.chunk_first(seq__26369_26387__$1);
var G__26389 = cljs.core.chunk_rest(seq__26369_26387__$1);
var G__26390 = c__7032__auto___26388;
var G__26391 = cljs.core.count(c__7032__auto___26388);
var G__26392 = (0);
seq__26369_26376 = G__26389;
chunk__26370_26377 = G__26390;
count__26371_26378 = G__26391;
i__26372_26379 = G__26392;
continue;
} else {
var x_26393 = cljs.core.first(seq__26369_26387__$1);
if((x_26393 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_26393)){
cljs.compiler.emit(x_26393);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_26393)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_26393);
} else {
if(goog.isFunction(x_26393)){
(x_26393.cljs$core$IFn$_invoke$arity$0 ? x_26393.cljs$core$IFn$_invoke$arity$0() : x_26393.call(null));
} else {
var s_26394 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_26393], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__26369_26376,chunk__26370_26377,count__26371_26378,i__26372_26379,s_26394,x_26393,seq__26369_26387__$1,temp__4657__auto___26386){
return (function (p1__26367_SHARP_){
return (p1__26367_SHARP_ + cljs.core.count(s_26394));
});})(seq__26369_26376,chunk__26370_26377,count__26371_26378,i__26372_26379,s_26394,x_26393,seq__26369_26387__$1,temp__4657__auto___26386))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_26394], 0));

}
}
}
}

var G__26395 = cljs.core.next(seq__26369_26387__$1);
var G__26396 = null;
var G__26397 = (0);
var G__26398 = (0);
seq__26369_26376 = G__26395;
chunk__26370_26377 = G__26396;
count__26371_26378 = G__26397;
i__26372_26379 = G__26398;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq26368){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26368));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__7303__auto__ = [];
var len__7296__auto___26405 = arguments.length;
var i__7297__auto___26406 = (0);
while(true){
if((i__7297__auto___26406 < len__7296__auto___26405)){
args__7303__auto__.push((arguments[i__7297__auto___26406]));

var G__26407 = (i__7297__auto___26406 + (1));
i__7297__auto___26406 = G__26407;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

cljs.core.println();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__26402){
var map__26403 = p__26402;
var map__26403__$1 = ((((!((map__26403 == null)))?((((map__26403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26403):map__26403);
var m = map__26403__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26403__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.array_seq([cljs.core.cst$kw$gen_DASH_col,(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq26399){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26399));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__7207__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_26414_26417 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_26415_26418 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_26414_26417,_STAR_print_fn_STAR_26415_26418,sb__7207__auto__){
return (function (x__7208__auto__){
return sb__7207__auto__.append(x__7208__auto__);
});})(_STAR_print_newline_STAR_26414_26417,_STAR_print_fn_STAR_26415_26418,sb__7207__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26415_26418;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26414_26417;
}
return [cljs.core.str(sb__7207__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__7146__auto__ = (function (){var G__26420 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26420) : cljs.core.atom.call(null,G__26420));
})();
var prefer_table__7147__auto__ = (function (){var G__26421 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26421) : cljs.core.atom.call(null,G__26421));
})();
var method_cache__7148__auto__ = (function (){var G__26422 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26422) : cljs.core.atom.call(null,G__26422));
})();
var cached_hierarchy__7149__auto__ = (function (){var G__26424 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26424) : cljs.core.atom.call(null,G__26424));
})();
var hierarchy__7150__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__7150__auto__,method_table__7146__auto__,prefer_table__7147__auto__,method_cache__7148__auto__,cached_hierarchy__7149__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",x,")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new RegExp(\"\"))"], 0));
} else {
var vec__26428 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26428,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26428,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26428,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pattern], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__26436_26442 = (cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__26436_26442) : cljs.compiler.emit_constant.call(null,G__26436_26442));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__26439_26443 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__26439_26443) : cljs.compiler.emit_constant.call(null,G__26439_26443));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant.call(null,symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__26445_26446 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__26445_26446) : cljs.compiler.emit_constant.call(null,G__26445_26446));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__26447 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__26447) : x.call(null,G__26447));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__26448 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__26448) : x.call(null,G__26448));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$no_DASH_op,(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var,(function (p__26450){
var map__26451 = p__26450;
var map__26451__$1 = ((((!((map__26451 == null)))?((((map__26451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26451):map__26451);
var arg = map__26451__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26451__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26451__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26451__$1,cljs.core.cst$kw$form);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.name(var_name)], null));
var or__6221__auto__ = js_module_name;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(cljs.core.cst$kw$binding_DASH_form_QMARK_.cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(arg)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__26455 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$sym$js_SLASH__DASH_Infinity)){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__26455);
} else {
return G__26455;
}
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var_DASH_special,(function (p__26458){
var map__26459 = p__26458;
var map__26459__$1 = ((((!((map__26459 == null)))?((((map__26459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26459):map__26459);
var arg = map__26459__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26459__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26459__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26459__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26459__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__26461 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__26461__$1 = ((((!((map__26461 == null)))?((((map__26461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26461):map__26461);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26461__$1,cljs.core.cst$kw$name);
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$meta,(function (p__26467){
var map__26468 = p__26467;
var map__26468__$1 = ((((!((map__26468 == null)))?((((map__26468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26468):map__26468);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26468__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26468__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26468__$1,cljs.core.cst$kw$env);
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__26470_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__26470_SHARP_),cljs.core.cst$kw$constant);
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__26471){
var map__26472 = p__26471;
var map__26472__$1 = ((((!((map__26472 == null)))?((((map__26472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26472):map__26472);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26472__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26472__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26472__$1,cljs.core.cst$kw$vals);
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], true, false)"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__26474){
var map__26475 = p__26474;
var map__26475__$1 = ((((!((map__26475 == null)))?((((map__26475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26475):map__26475);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26475__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26475__$1,cljs.core.cst$kw$env);
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (p__26477){
var map__26478 = p__26477;
var map__26478__$1 = ((((!((map__26478 == null)))?((((map__26478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26478):map__26478);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26478__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26478__$1,cljs.core.cst$kw$env);
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_26480 = cljs.core.count(items);
if((cnt_26480 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentVector(null, ",cnt_26480,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__26481_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__26481_SHARP_),cljs.core.cst$kw$constant);
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (p__26482){
var map__26483 = p__26482;
var map__26483__$1 = ((((!((map__26483 == null)))?((((map__26483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26483):map__26483);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26483__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26483__$1,cljs.core.cst$kw$env);
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_value,(function (p__26485){
var map__26486 = p__26485;
var map__26486__$1 = ((((!((map__26486 == null)))?((((map__26486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26486):map__26486);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26486__$1,cljs.core.cst$kw$items);
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26486__$1,cljs.core.cst$kw$js_DASH_type);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26486__$1,cljs.core.cst$kw$env);
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,cljs.core.cst$kw$object)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["{"], 0));

var temp__4657__auto___26504 = cljs.core.seq(items);
if(temp__4657__auto___26504){
var items_26505__$1 = temp__4657__auto___26504;
var vec__26488_26506 = items_26505__$1;
var seq__26489_26507 = cljs.core.seq(vec__26488_26506);
var first__26490_26508 = cljs.core.first(seq__26489_26507);
var seq__26489_26509__$1 = cljs.core.next(seq__26489_26507);
var vec__26491_26510 = first__26490_26508;
var k_26511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26491_26510,(0),null);
var v_26512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26491_26510,(1),null);
var r_26513 = seq__26489_26509__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\"",cljs.core.name(k_26511),"\": ",v_26512], 0));

var seq__26494_26514 = cljs.core.seq(r_26513);
var chunk__26495_26515 = null;
var count__26496_26516 = (0);
var i__26497_26517 = (0);
while(true){
if((i__26497_26517 < count__26496_26516)){
var vec__26498_26518 = chunk__26495_26515.cljs$core$IIndexed$_nth$arity$2(null,i__26497_26517);
var k_26519__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26498_26518,(0),null);
var v_26520__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26498_26518,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_26519__$1),"\": ",v_26520__$1], 0));

var G__26521 = seq__26494_26514;
var G__26522 = chunk__26495_26515;
var G__26523 = count__26496_26516;
var G__26524 = (i__26497_26517 + (1));
seq__26494_26514 = G__26521;
chunk__26495_26515 = G__26522;
count__26496_26516 = G__26523;
i__26497_26517 = G__26524;
continue;
} else {
var temp__4657__auto___26525__$1 = cljs.core.seq(seq__26494_26514);
if(temp__4657__auto___26525__$1){
var seq__26494_26526__$1 = temp__4657__auto___26525__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26494_26526__$1)){
var c__7032__auto___26527 = cljs.core.chunk_first(seq__26494_26526__$1);
var G__26528 = cljs.core.chunk_rest(seq__26494_26526__$1);
var G__26529 = c__7032__auto___26527;
var G__26530 = cljs.core.count(c__7032__auto___26527);
var G__26531 = (0);
seq__26494_26514 = G__26528;
chunk__26495_26515 = G__26529;
count__26496_26516 = G__26530;
i__26497_26517 = G__26531;
continue;
} else {
var vec__26501_26532 = cljs.core.first(seq__26494_26526__$1);
var k_26533__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26501_26532,(0),null);
var v_26534__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26501_26532,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_26533__$1),"\": ",v_26534__$1], 0));

var G__26535 = cljs.core.next(seq__26494_26526__$1);
var G__26536 = null;
var G__26537 = (0);
var G__26538 = (0);
seq__26494_26514 = G__26535;
chunk__26495_26515 = G__26536;
count__26496_26516 = G__26537;
i__26497_26517 = G__26538;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$constant,(function (p__26539){
var map__26540 = p__26539;
var map__26540__$1 = ((((!((map__26540 == null)))?((((map__26540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26540):map__26540);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26540__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26540__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__26542){
var map__26545 = p__26542;
var map__26545__$1 = ((((!((map__26545 == null)))?((((map__26545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26545):map__26545);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26545__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26545__$1,cljs.core.cst$kw$form);
var and__6209__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant);
if(and__6209__auto__){
var and__6209__auto____$1 = form;
if(cljs.core.truth_(and__6209__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__26547){
var map__26550 = p__26547;
var map__26550__$1 = ((((!((map__26550 == null)))?((((map__26550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26550):map__26550);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26550__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26550__$1,cljs.core.cst$kw$form);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant)) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__6221__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null).call(null,tag);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$if,(function (p__26552){
var map__26553 = p__26552;
var map__26553__$1 = ((((!((map__26553 == null)))?((((map__26553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26553):map__26553);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26553__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26553__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26553__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26553__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26553__$1,cljs.core.cst$kw$unchecked);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__6221__auto__ = unchecked;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case_STAR_,(function (p__26555){
var map__26556 = p__26555;
var map__26556__$1 = ((((!((map__26556 == null)))?((((map__26556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26556):map__26556);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26556__$1,cljs.core.cst$kw$v);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26556__$1,cljs.core.cst$kw$tests);
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26556__$1,cljs.core.cst$kw$thens);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26556__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26556__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env),cljs.core.cst$kw$expr)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch (",v,") {"], 0));

var seq__26558_26576 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__26559_26577 = null;
var count__26560_26578 = (0);
var i__26561_26579 = (0);
while(true){
if((i__26561_26579 < count__26560_26578)){
var vec__26562_26580 = chunk__26559_26577.cljs$core$IIndexed$_nth$arity$2(null,i__26561_26579);
var ts_26581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26562_26580,(0),null);
var then_26582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26562_26580,(1),null);
var seq__26565_26583 = cljs.core.seq(ts_26581);
var chunk__26566_26584 = null;
var count__26567_26585 = (0);
var i__26568_26586 = (0);
while(true){
if((i__26568_26586 < count__26567_26585)){
var test_26587 = chunk__26566_26584.cljs$core$IIndexed$_nth$arity$2(null,i__26568_26586);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_26587,":"], 0));

var G__26588 = seq__26565_26583;
var G__26589 = chunk__26566_26584;
var G__26590 = count__26567_26585;
var G__26591 = (i__26568_26586 + (1));
seq__26565_26583 = G__26588;
chunk__26566_26584 = G__26589;
count__26567_26585 = G__26590;
i__26568_26586 = G__26591;
continue;
} else {
var temp__4657__auto___26592 = cljs.core.seq(seq__26565_26583);
if(temp__4657__auto___26592){
var seq__26565_26593__$1 = temp__4657__auto___26592;
if(cljs.core.chunked_seq_QMARK_(seq__26565_26593__$1)){
var c__7032__auto___26594 = cljs.core.chunk_first(seq__26565_26593__$1);
var G__26595 = cljs.core.chunk_rest(seq__26565_26593__$1);
var G__26596 = c__7032__auto___26594;
var G__26597 = cljs.core.count(c__7032__auto___26594);
var G__26598 = (0);
seq__26565_26583 = G__26595;
chunk__26566_26584 = G__26596;
count__26567_26585 = G__26597;
i__26568_26586 = G__26598;
continue;
} else {
var test_26599 = cljs.core.first(seq__26565_26593__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_26599,":"], 0));

var G__26600 = cljs.core.next(seq__26565_26593__$1);
var G__26601 = null;
var G__26602 = (0);
var G__26603 = (0);
seq__26565_26583 = G__26600;
chunk__26566_26584 = G__26601;
count__26567_26585 = G__26602;
i__26568_26586 = G__26603;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_26582], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_26582], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__26604 = seq__26558_26576;
var G__26605 = chunk__26559_26577;
var G__26606 = count__26560_26578;
var G__26607 = (i__26561_26579 + (1));
seq__26558_26576 = G__26604;
chunk__26559_26577 = G__26605;
count__26560_26578 = G__26606;
i__26561_26579 = G__26607;
continue;
} else {
var temp__4657__auto___26608 = cljs.core.seq(seq__26558_26576);
if(temp__4657__auto___26608){
var seq__26558_26609__$1 = temp__4657__auto___26608;
if(cljs.core.chunked_seq_QMARK_(seq__26558_26609__$1)){
var c__7032__auto___26610 = cljs.core.chunk_first(seq__26558_26609__$1);
var G__26611 = cljs.core.chunk_rest(seq__26558_26609__$1);
var G__26612 = c__7032__auto___26610;
var G__26613 = cljs.core.count(c__7032__auto___26610);
var G__26614 = (0);
seq__26558_26576 = G__26611;
chunk__26559_26577 = G__26612;
count__26560_26578 = G__26613;
i__26561_26579 = G__26614;
continue;
} else {
var vec__26569_26615 = cljs.core.first(seq__26558_26609__$1);
var ts_26616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26569_26615,(0),null);
var then_26617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26569_26615,(1),null);
var seq__26572_26618 = cljs.core.seq(ts_26616);
var chunk__26573_26619 = null;
var count__26574_26620 = (0);
var i__26575_26621 = (0);
while(true){
if((i__26575_26621 < count__26574_26620)){
var test_26622 = chunk__26573_26619.cljs$core$IIndexed$_nth$arity$2(null,i__26575_26621);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_26622,":"], 0));

var G__26623 = seq__26572_26618;
var G__26624 = chunk__26573_26619;
var G__26625 = count__26574_26620;
var G__26626 = (i__26575_26621 + (1));
seq__26572_26618 = G__26623;
chunk__26573_26619 = G__26624;
count__26574_26620 = G__26625;
i__26575_26621 = G__26626;
continue;
} else {
var temp__4657__auto___26627__$1 = cljs.core.seq(seq__26572_26618);
if(temp__4657__auto___26627__$1){
var seq__26572_26628__$1 = temp__4657__auto___26627__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26572_26628__$1)){
var c__7032__auto___26629 = cljs.core.chunk_first(seq__26572_26628__$1);
var G__26630 = cljs.core.chunk_rest(seq__26572_26628__$1);
var G__26631 = c__7032__auto___26629;
var G__26632 = cljs.core.count(c__7032__auto___26629);
var G__26633 = (0);
seq__26572_26618 = G__26630;
chunk__26573_26619 = G__26631;
count__26574_26620 = G__26632;
i__26575_26621 = G__26633;
continue;
} else {
var test_26634 = cljs.core.first(seq__26572_26628__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_26634,":"], 0));

var G__26635 = cljs.core.next(seq__26572_26628__$1);
var G__26636 = null;
var G__26637 = (0);
var G__26638 = (0);
seq__26572_26618 = G__26635;
chunk__26573_26619 = G__26636;
count__26574_26620 = G__26637;
i__26575_26621 = G__26638;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_26617], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_26617], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__26639 = cljs.core.next(seq__26558_26609__$1);
var G__26640 = null;
var G__26641 = (0);
var G__26642 = (0);
seq__26558_26576 = G__26639;
chunk__26559_26577 = G__26640;
count__26560_26578 = G__26641;
i__26561_26579 = G__26642;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$throw,(function (p__26643){
var map__26644 = p__26643;
var map__26644__$1 = ((((!((map__26644 == null)))?((((map__26644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26644):map__26644);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26644__$1,cljs.core.cst$kw$throw);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26644__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw ",throw$,";"], 0));
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type(env,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__26655 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26655,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26655,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type(env,rstr):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__26655,fstr,rstr,ret_t,axstr){
return (function (p1__26646_SHARP_){
return cljs$compiler$resolve_type(env,p1__26646_SHARP_);
});})(idx,vec__26655,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__26658 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__26658),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__26658;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type(env,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__26659_SHARP_){
return cljs.compiler.resolve_type(env,p1__26659_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__26666 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__26667 = cljs.core.seq(vec__26666);
var first__26668 = cljs.core.first(seq__26667);
var seq__26667__$1 = cljs.core.next(seq__26667);
var p = first__26668;
var first__26668__$1 = cljs.core.first(seq__26667__$1);
var seq__26667__$2 = cljs.core.next(seq__26667__$1);
var ts = first__26668__$1;
var first__26668__$2 = cljs.core.first(seq__26667__$2);
var seq__26667__$3 = cljs.core.next(seq__26667__$2);
var n = first__26668__$2;
var xs = seq__26667__$3;
if(cljs.core.truth_((function (){var and__6209__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__6209__auto__){
var and__6209__auto____$1 = ts;
if(cljs.core.truth_(and__6209__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__26669 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__26670 = cljs.core.seq(vec__26669);
var first__26671 = cljs.core.first(seq__26670);
var seq__26670__$1 = cljs.core.next(seq__26670);
var p = first__26671;
var first__26671__$1 = cljs.core.first(seq__26670__$1);
var seq__26670__$2 = cljs.core.next(seq__26670__$1);
var ts = first__26671__$1;
var xs = seq__26670__$2;
if(cljs.core.truth_((function (){var and__6209__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__6209__auto__){
var and__6209__auto____$1 = ts;
if(cljs.core.truth_(and__6209__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$warn,null,cljs.core.cst$kw$error,null], null), null).call(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$closure_DASH_warnings,cljs.core.cst$kw$check_DASH_types], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args26673 = [];
var len__7296__auto___26708 = arguments.length;
var i__7297__auto___26709 = (0);
while(true){
if((i__7297__auto___26709 < len__7296__auto___26708)){
args26673.push((arguments[i__7297__auto___26709]));

var G__26710 = (i__7297__auto___26709 + (1));
i__7297__auto___26709 = G__26710;
continue;
} else {
}
break;
}

var G__26675 = args26673.length;
switch (G__26675) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26673.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__26697 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__26672_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__26672_SHARP_);
} else {
return p1__26672_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__26698 = cljs.core.seq(vec__26697);
var first__26699 = cljs.core.first(seq__26698);
var seq__26698__$1 = cljs.core.next(seq__26698);
var x = first__26699;
var ys = seq__26698__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__26700 = cljs.core.seq(ys);
var chunk__26701 = null;
var count__26702 = (0);
var i__26703 = (0);
while(true){
if((i__26703 < count__26702)){
var next_line = chunk__26701.cljs$core$IIndexed$_nth$arity$2(null,i__26703);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__26712 = seq__26700;
var G__26713 = chunk__26701;
var G__26714 = count__26702;
var G__26715 = (i__26703 + (1));
seq__26700 = G__26712;
chunk__26701 = G__26713;
count__26702 = G__26714;
i__26703 = G__26715;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__26700);
if(temp__4657__auto__){
var seq__26700__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26700__$1)){
var c__7032__auto__ = cljs.core.chunk_first(seq__26700__$1);
var G__26716 = cljs.core.chunk_rest(seq__26700__$1);
var G__26717 = c__7032__auto__;
var G__26718 = cljs.core.count(c__7032__auto__);
var G__26719 = (0);
seq__26700 = G__26716;
chunk__26701 = G__26717;
count__26702 = G__26718;
i__26703 = G__26719;
continue;
} else {
var next_line = cljs.core.first(seq__26700__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__26720 = cljs.core.next(seq__26700__$1);
var G__26721 = null;
var G__26722 = (0);
var G__26723 = (0);
seq__26700 = G__26720;
chunk__26701 = G__26721;
count__26702 = G__26722;
i__26703 = G__26723;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

var seq__26704_26724 = cljs.core.seq(docs__$2);
var chunk__26705_26725 = null;
var count__26706_26726 = (0);
var i__26707_26727 = (0);
while(true){
if((i__26707_26727 < count__26706_26726)){
var e_26728 = chunk__26705_26725.cljs$core$IIndexed$_nth$arity$2(null,i__26707_26727);
if(cljs.core.truth_(e_26728)){
print_comment_lines(e_26728);
} else {
}

var G__26729 = seq__26704_26724;
var G__26730 = chunk__26705_26725;
var G__26731 = count__26706_26726;
var G__26732 = (i__26707_26727 + (1));
seq__26704_26724 = G__26729;
chunk__26705_26725 = G__26730;
count__26706_26726 = G__26731;
i__26707_26727 = G__26732;
continue;
} else {
var temp__4657__auto___26733 = cljs.core.seq(seq__26704_26724);
if(temp__4657__auto___26733){
var seq__26704_26734__$1 = temp__4657__auto___26733;
if(cljs.core.chunked_seq_QMARK_(seq__26704_26734__$1)){
var c__7032__auto___26735 = cljs.core.chunk_first(seq__26704_26734__$1);
var G__26736 = cljs.core.chunk_rest(seq__26704_26734__$1);
var G__26737 = c__7032__auto___26735;
var G__26738 = cljs.core.count(c__7032__auto___26735);
var G__26739 = (0);
seq__26704_26724 = G__26736;
chunk__26705_26725 = G__26737;
count__26706_26726 = G__26738;
i__26707_26727 = G__26739;
continue;
} else {
var e_26740 = cljs.core.first(seq__26704_26734__$1);
if(cljs.core.truth_(e_26740)){
print_comment_lines(e_26740);
} else {
}

var G__26741 = cljs.core.next(seq__26704_26734__$1);
var G__26742 = null;
var G__26743 = (0);
var G__26744 = (0);
seq__26704_26724 = G__26741;
chunk__26705_26725 = G__26742;
count__26706_26726 = G__26743;
i__26707_26727 = G__26744;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" */"], 0));
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$options);
var and__6209__auto__ = cljs.core.some(((function (opts){
return (function (p1__26746_SHARP_){
return goog.string.startsWith(p1__26746_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__6209__auto__)){
var and__6209__auto____$1 = opts;
if(cljs.core.truth_(and__6209__auto____$1)){
var and__6209__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optimizations.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$none);
if(and__6209__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$closure_DASH_defines,[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([define], 0));
} else {
return null;
}
} else {
return and__6209__auto____$2;
}
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$def,(function (p__26747){
var map__26748 = p__26747;
var map__26748__$1 = ((((!((map__26748 == null)))?((((map__26748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26748):map__26748);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26748__$1,cljs.core.cst$kw$name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26748__$1,cljs.core.cst$kw$var);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26748__$1,cljs.core.cst$kw$init);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26748__$1,cljs.core.cst$kw$env);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26748__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26748__$1,cljs.core.cst$kw$jsdoc);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26748__$1,cljs.core.cst$kw$export);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26748__$1,cljs.core.cst$kw$test);
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26748__$1,cljs.core.cst$kw$var_DASH_ast);
if(cljs.core.truth_((function (){var or__6221__auto__ = init;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ("], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$], 0));

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})()], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$var_DASH_special,cljs.core.cst$kw$env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr)], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
} else {
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__6209__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__6209__auto__)){
return test;
} else {
return and__6209__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__26750){
var map__26771 = p__26750;
var map__26771__$1 = ((((!((map__26771 == null)))?((((map__26771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26771):map__26771);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26771__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26771__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26771__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (",arglist,"){"], 0));

var seq__26773_26791 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__26774_26792 = null;
var count__26775_26793 = (0);
var i__26776_26794 = (0);
while(true){
if((i__26776_26794 < count__26775_26793)){
var vec__26777_26795 = chunk__26774_26792.cljs$core$IIndexed$_nth$arity$2(null,i__26776_26794);
var i_26796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26777_26795,(0),null);
var param_26797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26777_26795,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_26797);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__26798 = seq__26773_26791;
var G__26799 = chunk__26774_26792;
var G__26800 = count__26775_26793;
var G__26801 = (i__26776_26794 + (1));
seq__26773_26791 = G__26798;
chunk__26774_26792 = G__26799;
count__26775_26793 = G__26800;
i__26776_26794 = G__26801;
continue;
} else {
var temp__4657__auto___26802 = cljs.core.seq(seq__26773_26791);
if(temp__4657__auto___26802){
var seq__26773_26803__$1 = temp__4657__auto___26802;
if(cljs.core.chunked_seq_QMARK_(seq__26773_26803__$1)){
var c__7032__auto___26804 = cljs.core.chunk_first(seq__26773_26803__$1);
var G__26805 = cljs.core.chunk_rest(seq__26773_26803__$1);
var G__26806 = c__7032__auto___26804;
var G__26807 = cljs.core.count(c__7032__auto___26804);
var G__26808 = (0);
seq__26773_26791 = G__26805;
chunk__26774_26792 = G__26806;
count__26775_26793 = G__26807;
i__26776_26794 = G__26808;
continue;
} else {
var vec__26780_26809 = cljs.core.first(seq__26773_26803__$1);
var i_26810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26780_26809,(0),null);
var param_26811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26780_26809,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_26811);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__26812 = cljs.core.next(seq__26773_26803__$1);
var G__26813 = null;
var G__26814 = (0);
var G__26815 = (0);
seq__26773_26791 = G__26812;
chunk__26774_26792 = G__26813;
count__26775_26793 = G__26814;
i__26776_26794 = G__26815;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__26783_26816 = cljs.core.seq(params);
var chunk__26784_26817 = null;
var count__26785_26818 = (0);
var i__26786_26819 = (0);
while(true){
if((i__26786_26819 < count__26785_26818)){
var param_26820 = chunk__26784_26817.cljs$core$IIndexed$_nth$arity$2(null,i__26786_26819);
cljs.compiler.emit(param_26820);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_26820,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__26821 = seq__26783_26816;
var G__26822 = chunk__26784_26817;
var G__26823 = count__26785_26818;
var G__26824 = (i__26786_26819 + (1));
seq__26783_26816 = G__26821;
chunk__26784_26817 = G__26822;
count__26785_26818 = G__26823;
i__26786_26819 = G__26824;
continue;
} else {
var temp__4657__auto___26825 = cljs.core.seq(seq__26783_26816);
if(temp__4657__auto___26825){
var seq__26783_26826__$1 = temp__4657__auto___26825;
if(cljs.core.chunked_seq_QMARK_(seq__26783_26826__$1)){
var c__7032__auto___26827 = cljs.core.chunk_first(seq__26783_26826__$1);
var G__26828 = cljs.core.chunk_rest(seq__26783_26826__$1);
var G__26829 = c__7032__auto___26827;
var G__26830 = cljs.core.count(c__7032__auto___26827);
var G__26831 = (0);
seq__26783_26816 = G__26828;
chunk__26784_26817 = G__26829;
count__26785_26818 = G__26830;
i__26786_26819 = G__26831;
continue;
} else {
var param_26832 = cljs.core.first(seq__26783_26826__$1);
cljs.compiler.emit(param_26832);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_26832,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__26833 = cljs.core.next(seq__26783_26826__$1);
var G__26834 = null;
var G__26835 = (0);
var G__26836 = (0);
seq__26783_26816 = G__26833;
chunk__26784_26817 = G__26834;
count__26785_26818 = G__26835;
i__26786_26819 = G__26836;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__26787_26837 = cljs.core.seq(params);
var chunk__26788_26838 = null;
var count__26789_26839 = (0);
var i__26790_26840 = (0);
while(true){
if((i__26790_26840 < count__26789_26839)){
var param_26841 = chunk__26788_26838.cljs$core$IIndexed$_nth$arity$2(null,i__26790_26840);
cljs.compiler.emit(param_26841);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_26841,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__26842 = seq__26787_26837;
var G__26843 = chunk__26788_26838;
var G__26844 = count__26789_26839;
var G__26845 = (i__26790_26840 + (1));
seq__26787_26837 = G__26842;
chunk__26788_26838 = G__26843;
count__26789_26839 = G__26844;
i__26790_26840 = G__26845;
continue;
} else {
var temp__4657__auto___26846 = cljs.core.seq(seq__26787_26837);
if(temp__4657__auto___26846){
var seq__26787_26847__$1 = temp__4657__auto___26846;
if(cljs.core.chunked_seq_QMARK_(seq__26787_26847__$1)){
var c__7032__auto___26848 = cljs.core.chunk_first(seq__26787_26847__$1);
var G__26849 = cljs.core.chunk_rest(seq__26787_26847__$1);
var G__26850 = c__7032__auto___26848;
var G__26851 = cljs.core.count(c__7032__auto___26848);
var G__26852 = (0);
seq__26787_26837 = G__26849;
chunk__26788_26838 = G__26850;
count__26789_26839 = G__26851;
i__26790_26840 = G__26852;
continue;
} else {
var param_26853 = cljs.core.first(seq__26787_26847__$1);
cljs.compiler.emit(param_26853);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_26853,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__26854 = cljs.core.next(seq__26787_26847__$1);
var G__26855 = null;
var G__26856 = (0);
var G__26857 = (0);
seq__26787_26837 = G__26854;
chunk__26788_26838 = G__26855;
count__26789_26839 = G__26856;
i__26790_26840 = G__26857;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__26862 = cljs.core.seq(params);
var chunk__26863 = null;
var count__26864 = (0);
var i__26865 = (0);
while(true){
if((i__26865 < count__26864)){
var param = chunk__26863.cljs$core$IIndexed$_nth$arity$2(null,i__26865);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__26866 = seq__26862;
var G__26867 = chunk__26863;
var G__26868 = count__26864;
var G__26869 = (i__26865 + (1));
seq__26862 = G__26866;
chunk__26863 = G__26867;
count__26864 = G__26868;
i__26865 = G__26869;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__26862);
if(temp__4657__auto__){
var seq__26862__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26862__$1)){
var c__7032__auto__ = cljs.core.chunk_first(seq__26862__$1);
var G__26870 = cljs.core.chunk_rest(seq__26862__$1);
var G__26871 = c__7032__auto__;
var G__26872 = cljs.core.count(c__7032__auto__);
var G__26873 = (0);
seq__26862 = G__26870;
chunk__26863 = G__26871;
count__26864 = G__26872;
i__26865 = G__26873;
continue;
} else {
var param = cljs.core.first(seq__26862__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__26874 = cljs.core.next(seq__26862__$1);
var G__26875 = null;
var G__26876 = (0);
var G__26877 = (0);
seq__26862 = G__26874;
chunk__26863 = G__26875;
count__26864 = G__26876;
i__26865 = G__26877;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__26878){
var map__26881 = p__26878;
var map__26881__$1 = ((((!((map__26881 == null)))?((((map__26881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26881):map__26881);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26881__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26881__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26881__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26881__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26881__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26881__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26881__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26881__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__26883){
var map__26894 = p__26883;
var map__26894__$1 = ((((!((map__26894 == null)))?((((map__26894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26894):map__26894);
var f = map__26894__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26894__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26894__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26894__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26894__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26894__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26894__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26894__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26894__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

var name_26904__$1 = (function (){var or__6221__auto__ = name;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_26905 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_26904__$1);
var delegate_name_26906 = [cljs.core.str(mname_26905),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",delegate_name_26906," = function ("], 0));

var seq__26896_26907 = cljs.core.seq(params);
var chunk__26897_26908 = null;
var count__26898_26909 = (0);
var i__26899_26910 = (0);
while(true){
if((i__26899_26910 < count__26898_26909)){
var param_26911 = chunk__26897_26908.cljs$core$IIndexed$_nth$arity$2(null,i__26899_26910);
cljs.compiler.emit(param_26911);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_26911,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__26912 = seq__26896_26907;
var G__26913 = chunk__26897_26908;
var G__26914 = count__26898_26909;
var G__26915 = (i__26899_26910 + (1));
seq__26896_26907 = G__26912;
chunk__26897_26908 = G__26913;
count__26898_26909 = G__26914;
i__26899_26910 = G__26915;
continue;
} else {
var temp__4657__auto___26916 = cljs.core.seq(seq__26896_26907);
if(temp__4657__auto___26916){
var seq__26896_26917__$1 = temp__4657__auto___26916;
if(cljs.core.chunked_seq_QMARK_(seq__26896_26917__$1)){
var c__7032__auto___26918 = cljs.core.chunk_first(seq__26896_26917__$1);
var G__26919 = cljs.core.chunk_rest(seq__26896_26917__$1);
var G__26920 = c__7032__auto___26918;
var G__26921 = cljs.core.count(c__7032__auto___26918);
var G__26922 = (0);
seq__26896_26907 = G__26919;
chunk__26897_26908 = G__26920;
count__26898_26909 = G__26921;
i__26899_26910 = G__26922;
continue;
} else {
var param_26923 = cljs.core.first(seq__26896_26917__$1);
cljs.compiler.emit(param_26923);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_26923,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__26924 = cljs.core.next(seq__26896_26917__$1);
var G__26925 = null;
var G__26926 = (0);
var G__26927 = (0);
seq__26896_26907 = G__26924;
chunk__26897_26908 = G__26925;
count__26898_26909 = G__26926;
i__26899_26910 = G__26927;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_26905," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_26928 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_26928,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name_26906,".call(this,"], 0));

var seq__26900_26929 = cljs.core.seq(params);
var chunk__26901_26930 = null;
var count__26902_26931 = (0);
var i__26903_26932 = (0);
while(true){
if((i__26903_26932 < count__26902_26931)){
var param_26933 = chunk__26901_26930.cljs$core$IIndexed$_nth$arity$2(null,i__26903_26932);
cljs.compiler.emit(param_26933);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_26933,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__26934 = seq__26900_26929;
var G__26935 = chunk__26901_26930;
var G__26936 = count__26902_26931;
var G__26937 = (i__26903_26932 + (1));
seq__26900_26929 = G__26934;
chunk__26901_26930 = G__26935;
count__26902_26931 = G__26936;
i__26903_26932 = G__26937;
continue;
} else {
var temp__4657__auto___26938 = cljs.core.seq(seq__26900_26929);
if(temp__4657__auto___26938){
var seq__26900_26939__$1 = temp__4657__auto___26938;
if(cljs.core.chunked_seq_QMARK_(seq__26900_26939__$1)){
var c__7032__auto___26940 = cljs.core.chunk_first(seq__26900_26939__$1);
var G__26941 = cljs.core.chunk_rest(seq__26900_26939__$1);
var G__26942 = c__7032__auto___26940;
var G__26943 = cljs.core.count(c__7032__auto___26940);
var G__26944 = (0);
seq__26900_26929 = G__26941;
chunk__26901_26930 = G__26942;
count__26902_26931 = G__26943;
i__26903_26932 = G__26944;
continue;
} else {
var param_26945 = cljs.core.first(seq__26900_26939__$1);
cljs.compiler.emit(param_26945);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_26945,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__26946 = cljs.core.next(seq__26900_26939__$1);
var G__26947 = null;
var G__26948 = (0);
var G__26949 = (0);
seq__26900_26929 = G__26946;
chunk__26901_26930 = G__26947;
count__26902_26931 = G__26948;
i__26903_26932 = G__26949;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_26905,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_26905,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$name,name_26904__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_26905,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_26906,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_26905,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn,(function (p__26953){
var map__26954 = p__26953;
var map__26954__$1 = ((((!((map__26954 == null)))?((((map__26954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26954):map__26954);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26954__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26954__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26954__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26954__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26954__$1,cljs.core.cst$kw$variadic);
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26954__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26954__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__26954,map__26954__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__26950_SHARP_){
var and__6209__auto__ = p1__26950_SHARP_;
if(cljs.core.truth_(and__6209__auto__)){
var G__26956 = cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__26950_SHARP_);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26956) : cljs.core.deref.call(null,G__26956));
} else {
return and__6209__auto__;
}
});})(map__26954,map__26954__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.array_seq([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
}
} else {
var name_26990__$1 = (function (){var or__6221__auto__ = name;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_26991 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_26990__$1);
var maxparams_26992 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$));
var mmap_26993 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_26990__$1,mname_26991,maxparams_26992,loop_locals,map__26954,map__26954__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(mname_26991),cljs.core.str("__"),cljs.core.str(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_26990__$1,mname_26991,maxparams_26992,loop_locals,map__26954,map__26954__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_26994 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_26990__$1,mname_26991,maxparams_26992,mmap_26993,loop_locals,map__26954,map__26954__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__26951_SHARP_){
return cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__26951_SHARP_)));
});})(name_26990__$1,mname_26991,maxparams_26992,mmap_26993,loop_locals,map__26954,map__26954__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_26993));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_26991," = null;"], 0));

var seq__26957_26995 = cljs.core.seq(ms_26994);
var chunk__26958_26996 = null;
var count__26959_26997 = (0);
var i__26960_26998 = (0);
while(true){
if((i__26960_26998 < count__26959_26997)){
var vec__26961_26999 = chunk__26958_26996.cljs$core$IIndexed$_nth$arity$2(null,i__26960_26998);
var n_27000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26961_26999,(0),null);
var meth_27001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26961_26999,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_27000," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_27001))){
cljs.compiler.emit_variadic_fn_method(meth_27001);
} else {
cljs.compiler.emit_fn_method(meth_27001);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__27002 = seq__26957_26995;
var G__27003 = chunk__26958_26996;
var G__27004 = count__26959_26997;
var G__27005 = (i__26960_26998 + (1));
seq__26957_26995 = G__27002;
chunk__26958_26996 = G__27003;
count__26959_26997 = G__27004;
i__26960_26998 = G__27005;
continue;
} else {
var temp__4657__auto___27006 = cljs.core.seq(seq__26957_26995);
if(temp__4657__auto___27006){
var seq__26957_27007__$1 = temp__4657__auto___27006;
if(cljs.core.chunked_seq_QMARK_(seq__26957_27007__$1)){
var c__7032__auto___27008 = cljs.core.chunk_first(seq__26957_27007__$1);
var G__27009 = cljs.core.chunk_rest(seq__26957_27007__$1);
var G__27010 = c__7032__auto___27008;
var G__27011 = cljs.core.count(c__7032__auto___27008);
var G__27012 = (0);
seq__26957_26995 = G__27009;
chunk__26958_26996 = G__27010;
count__26959_26997 = G__27011;
i__26960_26998 = G__27012;
continue;
} else {
var vec__26964_27013 = cljs.core.first(seq__26957_27007__$1);
var n_27014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26964_27013,(0),null);
var meth_27015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26964_27013,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_27014," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_27015))){
cljs.compiler.emit_variadic_fn_method(meth_27015);
} else {
cljs.compiler.emit_fn_method(meth_27015);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__27016 = cljs.core.next(seq__26957_27007__$1);
var G__27017 = null;
var G__27018 = (0);
var G__27019 = (0);
seq__26957_26995 = G__27016;
chunk__26958_26996 = G__27017;
count__26959_26997 = G__27018;
i__26960_26998 = G__27019;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_26991," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_26992),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_26992)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_26992));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch(arguments.length){"], 0));

var seq__26967_27020 = cljs.core.seq(ms_26994);
var chunk__26968_27021 = null;
var count__26969_27022 = (0);
var i__26970_27023 = (0);
while(true){
if((i__26970_27023 < count__26969_27022)){
var vec__26971_27024 = chunk__26968_27021.cljs$core$IIndexed$_nth$arity$2(null,i__26970_27023);
var n_27025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26971_27024,(0),null);
var meth_27026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26971_27024,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_27026))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_27027 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_27027," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_27028 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_27027," = new cljs.core.IndexedSeq(",a_27028,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_27025,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_26992)),(((cljs.core.count(maxparams_26992) > (1)))?", ":null),restarg_27027,");"], 0));
} else {
var pcnt_27029 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_27026));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_27029,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_27025,".call(this",(((pcnt_27029 === (0)))?null:cljs.core._conj((function (){var x__7055__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_27029,maxparams_26992));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),",")),");"], 0));
}

var G__27030 = seq__26967_27020;
var G__27031 = chunk__26968_27021;
var G__27032 = count__26969_27022;
var G__27033 = (i__26970_27023 + (1));
seq__26967_27020 = G__27030;
chunk__26968_27021 = G__27031;
count__26969_27022 = G__27032;
i__26970_27023 = G__27033;
continue;
} else {
var temp__4657__auto___27034 = cljs.core.seq(seq__26967_27020);
if(temp__4657__auto___27034){
var seq__26967_27035__$1 = temp__4657__auto___27034;
if(cljs.core.chunked_seq_QMARK_(seq__26967_27035__$1)){
var c__7032__auto___27036 = cljs.core.chunk_first(seq__26967_27035__$1);
var G__27037 = cljs.core.chunk_rest(seq__26967_27035__$1);
var G__27038 = c__7032__auto___27036;
var G__27039 = cljs.core.count(c__7032__auto___27036);
var G__27040 = (0);
seq__26967_27020 = G__27037;
chunk__26968_27021 = G__27038;
count__26969_27022 = G__27039;
i__26970_27023 = G__27040;
continue;
} else {
var vec__26974_27041 = cljs.core.first(seq__26967_27035__$1);
var n_27042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26974_27041,(0),null);
var meth_27043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26974_27041,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_27043))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_27044 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_27044," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_27045 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_27044," = new cljs.core.IndexedSeq(",a_27045,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_27042,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_26992)),(((cljs.core.count(maxparams_26992) > (1)))?", ":null),restarg_27044,");"], 0));
} else {
var pcnt_27046 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_27043));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_27046,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_27042,".call(this",(((pcnt_27046 === (0)))?null:cljs.core._conj((function (){var x__7055__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_27046,maxparams_26992));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),",")),");"], 0));
}

var G__27047 = cljs.core.next(seq__26967_27035__$1);
var G__27048 = null;
var G__27049 = (0);
var G__27050 = (0);
seq__26967_27020 = G__27047;
chunk__26968_27021 = G__27048;
count__26969_27022 = G__27049;
i__26970_27023 = G__27050;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw(new Error('Invalid arity: ' + arguments.length));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_26991,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_26991,".cljs$lang$applyTo = ",cljs.core.some(((function (name_26990__$1,mname_26991,maxparams_26992,mmap_26993,ms_26994,loop_locals,map__26954,map__26954__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__26952_SHARP_){
var vec__26977 = p1__26952_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26977,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26977,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_26990__$1,mname_26991,maxparams_26992,mmap_26993,ms_26994,loop_locals,map__26954,map__26954__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_26994),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__26980_27051 = cljs.core.seq(ms_26994);
var chunk__26981_27052 = null;
var count__26982_27053 = (0);
var i__26983_27054 = (0);
while(true){
if((i__26983_27054 < count__26982_27053)){
var vec__26984_27055 = chunk__26981_27052.cljs$core$IIndexed$_nth$arity$2(null,i__26983_27054);
var n_27056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26984_27055,(0),null);
var meth_27057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26984_27055,(1),null);
var c_27058 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_27057));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_27057))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_26991,".cljs$core$IFn$_invoke$arity$variadic = ",n_27056,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_26991,".cljs$core$IFn$_invoke$arity$",c_27058," = ",n_27056,";"], 0));
}

var G__27059 = seq__26980_27051;
var G__27060 = chunk__26981_27052;
var G__27061 = count__26982_27053;
var G__27062 = (i__26983_27054 + (1));
seq__26980_27051 = G__27059;
chunk__26981_27052 = G__27060;
count__26982_27053 = G__27061;
i__26983_27054 = G__27062;
continue;
} else {
var temp__4657__auto___27063 = cljs.core.seq(seq__26980_27051);
if(temp__4657__auto___27063){
var seq__26980_27064__$1 = temp__4657__auto___27063;
if(cljs.core.chunked_seq_QMARK_(seq__26980_27064__$1)){
var c__7032__auto___27065 = cljs.core.chunk_first(seq__26980_27064__$1);
var G__27066 = cljs.core.chunk_rest(seq__26980_27064__$1);
var G__27067 = c__7032__auto___27065;
var G__27068 = cljs.core.count(c__7032__auto___27065);
var G__27069 = (0);
seq__26980_27051 = G__27066;
chunk__26981_27052 = G__27067;
count__26982_27053 = G__27068;
i__26983_27054 = G__27069;
continue;
} else {
var vec__26987_27070 = cljs.core.first(seq__26980_27064__$1);
var n_27071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26987_27070,(0),null);
var meth_27072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26987_27070,(1),null);
var c_27073 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_27072));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_27072))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_26991,".cljs$core$IFn$_invoke$arity$variadic = ",n_27071,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_26991,".cljs$core$IFn$_invoke$arity$",c_27073," = ",n_27071,";"], 0));
}

var G__27074 = cljs.core.next(seq__26980_27064__$1);
var G__27075 = null;
var G__27076 = (0);
var G__27077 = (0);
seq__26980_27051 = G__27074;
chunk__26981_27052 = G__27075;
count__26982_27053 = G__27076;
i__26983_27054 = G__27077;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_26991,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$do,(function (p__27078){
var map__27079 = p__27078;
var map__27079__$1 = ((((!((map__27079 == null)))?((((map__27079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27079):map__27079);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27079__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27079__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27079__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__6209__auto__ = statements;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__6209__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__27081_27085 = cljs.core.seq(statements);
var chunk__27082_27086 = null;
var count__27083_27087 = (0);
var i__27084_27088 = (0);
while(true){
if((i__27084_27088 < count__27083_27087)){
var s_27089 = chunk__27082_27086.cljs$core$IIndexed$_nth$arity$2(null,i__27084_27088);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_27089], 0));

var G__27090 = seq__27081_27085;
var G__27091 = chunk__27082_27086;
var G__27092 = count__27083_27087;
var G__27093 = (i__27084_27088 + (1));
seq__27081_27085 = G__27090;
chunk__27082_27086 = G__27091;
count__27083_27087 = G__27092;
i__27084_27088 = G__27093;
continue;
} else {
var temp__4657__auto___27094 = cljs.core.seq(seq__27081_27085);
if(temp__4657__auto___27094){
var seq__27081_27095__$1 = temp__4657__auto___27094;
if(cljs.core.chunked_seq_QMARK_(seq__27081_27095__$1)){
var c__7032__auto___27096 = cljs.core.chunk_first(seq__27081_27095__$1);
var G__27097 = cljs.core.chunk_rest(seq__27081_27095__$1);
var G__27098 = c__7032__auto___27096;
var G__27099 = cljs.core.count(c__7032__auto___27096);
var G__27100 = (0);
seq__27081_27085 = G__27097;
chunk__27082_27086 = G__27098;
count__27083_27087 = G__27099;
i__27084_27088 = G__27100;
continue;
} else {
var s_27101 = cljs.core.first(seq__27081_27095__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_27101], 0));

var G__27102 = cljs.core.next(seq__27081_27095__$1);
var G__27103 = null;
var G__27104 = (0);
var G__27105 = (0);
seq__27081_27085 = G__27102;
chunk__27082_27086 = G__27103;
count__27083_27087 = G__27104;
i__27084_27088 = G__27105;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__6209__auto__ = statements;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__6209__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$try,(function (p__27106){
var map__27107 = p__27106;
var map__27107__$1 = ((((!((map__27107 == null)))?((((map__27107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27107):map__27107);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27107__$1,cljs.core.cst$kw$env);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27107__$1,cljs.core.cst$kw$try);
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27107__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27107__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27107__$1,cljs.core.cst$kw$finally);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__6221__auto__ = name;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str("(not= :constant (:op finally))")].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__27109,is_loop){
var map__27121 = p__27109;
var map__27121__$1 = ((((!((map__27121 == null)))?((((map__27121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27121):map__27121);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27121__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27121__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27121__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_27123_27132 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_27123_27132,context,map__27121,map__27121__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_27123_27132,context,map__27121,map__27121__$1,bindings,expr,env))
,bindings):null));

try{var seq__27124_27133 = cljs.core.seq(bindings);
var chunk__27125_27134 = null;
var count__27126_27135 = (0);
var i__27127_27136 = (0);
while(true){
if((i__27127_27136 < count__27126_27135)){
var map__27128_27137 = chunk__27125_27134.cljs$core$IIndexed$_nth$arity$2(null,i__27127_27136);
var map__27128_27138__$1 = ((((!((map__27128_27137 == null)))?((((map__27128_27137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27128_27137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27128_27137):map__27128_27137);
var binding_27139 = map__27128_27138__$1;
var init_27140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27128_27138__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_27139);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_27140,";"], 0));

var G__27141 = seq__27124_27133;
var G__27142 = chunk__27125_27134;
var G__27143 = count__27126_27135;
var G__27144 = (i__27127_27136 + (1));
seq__27124_27133 = G__27141;
chunk__27125_27134 = G__27142;
count__27126_27135 = G__27143;
i__27127_27136 = G__27144;
continue;
} else {
var temp__4657__auto___27145 = cljs.core.seq(seq__27124_27133);
if(temp__4657__auto___27145){
var seq__27124_27146__$1 = temp__4657__auto___27145;
if(cljs.core.chunked_seq_QMARK_(seq__27124_27146__$1)){
var c__7032__auto___27147 = cljs.core.chunk_first(seq__27124_27146__$1);
var G__27148 = cljs.core.chunk_rest(seq__27124_27146__$1);
var G__27149 = c__7032__auto___27147;
var G__27150 = cljs.core.count(c__7032__auto___27147);
var G__27151 = (0);
seq__27124_27133 = G__27148;
chunk__27125_27134 = G__27149;
count__27126_27135 = G__27150;
i__27127_27136 = G__27151;
continue;
} else {
var map__27130_27152 = cljs.core.first(seq__27124_27146__$1);
var map__27130_27153__$1 = ((((!((map__27130_27152 == null)))?((((map__27130_27152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27130_27152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27130_27152):map__27130_27152);
var binding_27154 = map__27130_27153__$1;
var init_27155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27130_27153__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_27154);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_27155,";"], 0));

var G__27156 = cljs.core.next(seq__27124_27146__$1);
var G__27157 = null;
var G__27158 = (0);
var G__27159 = (0);
seq__27124_27133 = G__27156;
chunk__27125_27134 = G__27157;
count__27126_27135 = G__27158;
i__27127_27136 = G__27159;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_27123_27132;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$let,(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$loop,(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$recur,(function (p__27160){
var map__27161 = p__27160;
var map__27161__$1 = ((((!((map__27161 == null)))?((((map__27161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27161):map__27161);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27161__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27161__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27161__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__7136__auto___27163 = cljs.core.count(exprs);
var i_27164 = (0);
while(true){
if((i_27164 < n__7136__auto___27163)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_27164) : temps.call(null,i_27164))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_27164) : exprs.call(null,i_27164)),";"], 0));

var G__27165 = (i_27164 + (1));
i_27164 = G__27165;
continue;
} else {
}
break;
}

var n__7136__auto___27166 = cljs.core.count(exprs);
var i_27167 = (0);
while(true){
if((i_27167 < n__7136__auto___27166)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_27167) : params.call(null,i_27167)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_27167) : temps.call(null,i_27167)),";"], 0));

var G__27168 = (i_27167 + (1));
i_27167 = G__27168;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$letfn,(function (p__27169){
var map__27170 = p__27169;
var map__27170__$1 = ((((!((map__27170 == null)))?((((map__27170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27170):map__27170);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27170__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27170__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27170__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__27172_27180 = cljs.core.seq(bindings);
var chunk__27173_27181 = null;
var count__27174_27182 = (0);
var i__27175_27183 = (0);
while(true){
if((i__27175_27183 < count__27174_27182)){
var map__27176_27184 = chunk__27173_27181.cljs$core$IIndexed$_nth$arity$2(null,i__27175_27183);
var map__27176_27185__$1 = ((((!((map__27176_27184 == null)))?((((map__27176_27184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27176_27184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27176_27184):map__27176_27184);
var binding_27186 = map__27176_27185__$1;
var init_27187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27176_27185__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_27186)," = ",init_27187,";"], 0));

var G__27188 = seq__27172_27180;
var G__27189 = chunk__27173_27181;
var G__27190 = count__27174_27182;
var G__27191 = (i__27175_27183 + (1));
seq__27172_27180 = G__27188;
chunk__27173_27181 = G__27189;
count__27174_27182 = G__27190;
i__27175_27183 = G__27191;
continue;
} else {
var temp__4657__auto___27192 = cljs.core.seq(seq__27172_27180);
if(temp__4657__auto___27192){
var seq__27172_27193__$1 = temp__4657__auto___27192;
if(cljs.core.chunked_seq_QMARK_(seq__27172_27193__$1)){
var c__7032__auto___27194 = cljs.core.chunk_first(seq__27172_27193__$1);
var G__27195 = cljs.core.chunk_rest(seq__27172_27193__$1);
var G__27196 = c__7032__auto___27194;
var G__27197 = cljs.core.count(c__7032__auto___27194);
var G__27198 = (0);
seq__27172_27180 = G__27195;
chunk__27173_27181 = G__27196;
count__27174_27182 = G__27197;
i__27175_27183 = G__27198;
continue;
} else {
var map__27178_27199 = cljs.core.first(seq__27172_27193__$1);
var map__27178_27200__$1 = ((((!((map__27178_27199 == null)))?((((map__27178_27199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27178_27199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27178_27199):map__27178_27199);
var binding_27201 = map__27178_27200__$1;
var init_27202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27178_27200__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_27201)," = ",init_27202,";"], 0));

var G__27203 = cljs.core.next(seq__27172_27193__$1);
var G__27204 = null;
var G__27205 = (0);
var G__27206 = (0);
seq__27172_27180 = G__27203;
chunk__27173_27181 = G__27204;
count__27174_27182 = G__27205;
i__27175_27183 = G__27206;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke,(function (p__27209){
var map__27210 = p__27209;
var map__27210__$1 = ((((!((map__27210 == null)))?((((map__27210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27210):map__27210);
var expr = map__27210__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27210__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27210__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27210__$1,cljs.core.cst$kw$env);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__6209__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6209__auto__)){
var and__6209__auto____$1 = cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(info));
if(and__6209__auto____$1){
return cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})();
var protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__6209__auto__ = protocol;
if(cljs.core.truth_(and__6209__auto__)){
var and__6209__auto____$1 = tag;
if(cljs.core.truth_(and__6209__auto____$1)){
var or__6221__auto__ = (function (){var and__6209__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6209__auto____$2)){
var and__6209__auto____$3 = protocol;
if(cljs.core.truth_(and__6209__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$sym$not_DASH_native);
} else {
return and__6209__auto____$3;
}
} else {
return and__6209__auto____$2;
}
})();
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
var and__6209__auto____$2 = (function (){var or__6221__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__6221__auto____$1)){
return or__6221__auto____$1;
} else {
return cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__6209__auto____$2)){
var or__6221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__6221__auto____$1){
return or__6221__auto____$1;
} else {
var and__6209__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__6209__auto____$3){
var and__6209__auto____$4 = cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$object,null,cljs.core.cst$sym$any,null,cljs.core.cst$sym$number,null,cljs.core.cst$sym$clj_DASH_or_DASH_nil,null,cljs.core.cst$sym$array,null,cljs.core.cst$sym$string,null,cljs.core.cst$sym$function,null,cljs.core.cst$sym$clj_DASH_nil,null], null), null).call(null,tag));
if(and__6209__auto____$4){
var temp__4657__auto__ = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__6209__auto____$4;
}
} else {
return and__6209__auto____$3;
}
}
} else {
return and__6209__auto____$2;
}
}
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info),cljs.core.cst$sym$cljs$core_SLASH_not)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr))),cljs.core.cst$sym$boolean));
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$js)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$Math));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__6221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$goog);
if(or__6221__auto__){
return or__6221__auto__;
} else {
var temp__4657__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cst$kw$constant)) && ((cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__27212 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(info);
var mps = cljs.core.cst$kw$method_DASH_params.cljs$core$IFn$_invoke$arity$1(info);
var mfa = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__6209__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__6209__auto__)){
return (arity > mfa);
} else {
return and__6209__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27210,map__27210__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27210,map__27210__$1,expr,f,args,env){
return (function (p1__27207_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27207_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27210,map__27210__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27210,map__27210__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27210,map__27210__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27210,map__27210__$1,expr,f,args,env){
return (function (p1__27208_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27208_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27210,map__27210__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27210,map__27210__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27212,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27212,(1),null);
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_27215 = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(args),".",pimpl_27215,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_27216 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_27216,args)),(((mfa_27216 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_27216,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__6221__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = js_QMARK_;
if(or__6221__auto____$1){
return or__6221__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_((function (){var and__6209__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f__$1),cljs.core.cst$kw$var);
} else {
return and__6209__auto__;
}
})())){
var fprop_27217 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",f__$1,fprop_27217," ? ",f__$1,fprop_27217,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new,(function (p__27218){
var map__27219 = p__27218;
var map__27219__$1 = ((((!((map__27219 == null)))?((((map__27219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27219):map__27219);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27219__$1,cljs.core.cst$kw$ctor);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27219__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27219__$1,cljs.core.cst$kw$env);
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set_BANG_,(function (p__27221){
var map__27222 = p__27221;
var map__27222__$1 = ((((!((map__27222 == null)))?((((map__27222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27222):map__27222);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27222__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27222__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27222__$1,cljs.core.cst$kw$env);
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_);
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_));
if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.set();"], 0));
} else {
}

var seq__27228_27232 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(libs))));
var chunk__27229_27233 = null;
var count__27230_27234 = (0);
var i__27231_27235 = (0);
while(true){
if((i__27231_27235 < count__27230_27234)){
var lib_27236 = chunk__27229_27233.cljs$core$IIndexed$_nth$arity$2(null,i__27231_27235);
if(cljs.core.truth_((function (){var or__6221__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_27236),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_27236),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__6221__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_27236),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_27236),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_27236),"');"], 0));

}
}

var G__27237 = seq__27228_27232;
var G__27238 = chunk__27229_27233;
var G__27239 = count__27230_27234;
var G__27240 = (i__27231_27235 + (1));
seq__27228_27232 = G__27237;
chunk__27229_27233 = G__27238;
count__27230_27234 = G__27239;
i__27231_27235 = G__27240;
continue;
} else {
var temp__4657__auto___27241 = cljs.core.seq(seq__27228_27232);
if(temp__4657__auto___27241){
var seq__27228_27242__$1 = temp__4657__auto___27241;
if(cljs.core.chunked_seq_QMARK_(seq__27228_27242__$1)){
var c__7032__auto___27243 = cljs.core.chunk_first(seq__27228_27242__$1);
var G__27244 = cljs.core.chunk_rest(seq__27228_27242__$1);
var G__27245 = c__7032__auto___27243;
var G__27246 = cljs.core.count(c__7032__auto___27243);
var G__27247 = (0);
seq__27228_27232 = G__27244;
chunk__27229_27233 = G__27245;
count__27230_27234 = G__27246;
i__27231_27235 = G__27247;
continue;
} else {
var lib_27248 = cljs.core.first(seq__27228_27242__$1);
if(cljs.core.truth_((function (){var or__6221__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_27248),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_27248),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__6221__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_27248),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_27248),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_27248),"');"], 0));

}
}

var G__27249 = cljs.core.next(seq__27228_27242__$1);
var G__27250 = null;
var G__27251 = (0);
var G__27252 = (0);
seq__27228_27232 = G__27249;
chunk__27229_27233 = G__27250;
count__27230_27234 = G__27251;
i__27231_27235 = G__27252;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns,(function (p__27253){
var map__27254 = p__27253;
var map__27254__$1 = ((((!((map__27254 == null)))?((((map__27254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27254):map__27254);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27254__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27254__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27254__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27254__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27254__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27254__$1,cljs.core.cst$kw$env);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$cljs$core)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('cljs.core');"], 0));
}

cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deftype_STAR_,(function (p__27256){
var map__27257 = p__27256;
var map__27257__$1 = ((((!((map__27257 == null)))?((((map__27257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27257):map__27257);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27257__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27257__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27257__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27257__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27257__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__27259_27277 = cljs.core.seq(protocols);
var chunk__27260_27278 = null;
var count__27261_27279 = (0);
var i__27262_27280 = (0);
while(true){
if((i__27262_27280 < count__27261_27279)){
var protocol_27281 = chunk__27260_27278.cljs$core$IIndexed$_nth$arity$2(null,i__27262_27280);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_27281)].join('')),"}"], 0));

var G__27282 = seq__27259_27277;
var G__27283 = chunk__27260_27278;
var G__27284 = count__27261_27279;
var G__27285 = (i__27262_27280 + (1));
seq__27259_27277 = G__27282;
chunk__27260_27278 = G__27283;
count__27261_27279 = G__27284;
i__27262_27280 = G__27285;
continue;
} else {
var temp__4657__auto___27286 = cljs.core.seq(seq__27259_27277);
if(temp__4657__auto___27286){
var seq__27259_27287__$1 = temp__4657__auto___27286;
if(cljs.core.chunked_seq_QMARK_(seq__27259_27287__$1)){
var c__7032__auto___27288 = cljs.core.chunk_first(seq__27259_27287__$1);
var G__27289 = cljs.core.chunk_rest(seq__27259_27287__$1);
var G__27290 = c__7032__auto___27288;
var G__27291 = cljs.core.count(c__7032__auto___27288);
var G__27292 = (0);
seq__27259_27277 = G__27289;
chunk__27260_27278 = G__27290;
count__27261_27279 = G__27291;
i__27262_27280 = G__27292;
continue;
} else {
var protocol_27293 = cljs.core.first(seq__27259_27287__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_27293)].join('')),"}"], 0));

var G__27294 = cljs.core.next(seq__27259_27287__$1);
var G__27295 = null;
var G__27296 = (0);
var G__27297 = (0);
seq__27259_27277 = G__27294;
chunk__27260_27278 = G__27295;
count__27261_27279 = G__27296;
i__27262_27280 = G__27297;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__27263_27298 = cljs.core.seq(fields__$1);
var chunk__27264_27299 = null;
var count__27265_27300 = (0);
var i__27266_27301 = (0);
while(true){
if((i__27266_27301 < count__27265_27300)){
var fld_27302 = chunk__27264_27299.cljs$core$IIndexed$_nth$arity$2(null,i__27266_27301);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_27302," = ",fld_27302,";"], 0));

var G__27303 = seq__27263_27298;
var G__27304 = chunk__27264_27299;
var G__27305 = count__27265_27300;
var G__27306 = (i__27266_27301 + (1));
seq__27263_27298 = G__27303;
chunk__27264_27299 = G__27304;
count__27265_27300 = G__27305;
i__27266_27301 = G__27306;
continue;
} else {
var temp__4657__auto___27307 = cljs.core.seq(seq__27263_27298);
if(temp__4657__auto___27307){
var seq__27263_27308__$1 = temp__4657__auto___27307;
if(cljs.core.chunked_seq_QMARK_(seq__27263_27308__$1)){
var c__7032__auto___27309 = cljs.core.chunk_first(seq__27263_27308__$1);
var G__27310 = cljs.core.chunk_rest(seq__27263_27308__$1);
var G__27311 = c__7032__auto___27309;
var G__27312 = cljs.core.count(c__7032__auto___27309);
var G__27313 = (0);
seq__27263_27298 = G__27310;
chunk__27264_27299 = G__27311;
count__27265_27300 = G__27312;
i__27266_27301 = G__27313;
continue;
} else {
var fld_27314 = cljs.core.first(seq__27263_27308__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_27314," = ",fld_27314,";"], 0));

var G__27315 = cljs.core.next(seq__27263_27308__$1);
var G__27316 = null;
var G__27317 = (0);
var G__27318 = (0);
seq__27263_27298 = G__27315;
chunk__27264_27299 = G__27316;
count__27265_27300 = G__27317;
i__27266_27301 = G__27318;
continue;
}
} else {
}
}
break;
}

var seq__27267_27319 = cljs.core.seq(pmasks);
var chunk__27268_27320 = null;
var count__27269_27321 = (0);
var i__27270_27322 = (0);
while(true){
if((i__27270_27322 < count__27269_27321)){
var vec__27271_27323 = chunk__27268_27320.cljs$core$IIndexed$_nth$arity$2(null,i__27270_27322);
var pno_27324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27271_27323,(0),null);
var pmask_27325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27271_27323,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_27324,"$ = ",pmask_27325,";"], 0));

var G__27326 = seq__27267_27319;
var G__27327 = chunk__27268_27320;
var G__27328 = count__27269_27321;
var G__27329 = (i__27270_27322 + (1));
seq__27267_27319 = G__27326;
chunk__27268_27320 = G__27327;
count__27269_27321 = G__27328;
i__27270_27322 = G__27329;
continue;
} else {
var temp__4657__auto___27330 = cljs.core.seq(seq__27267_27319);
if(temp__4657__auto___27330){
var seq__27267_27331__$1 = temp__4657__auto___27330;
if(cljs.core.chunked_seq_QMARK_(seq__27267_27331__$1)){
var c__7032__auto___27332 = cljs.core.chunk_first(seq__27267_27331__$1);
var G__27333 = cljs.core.chunk_rest(seq__27267_27331__$1);
var G__27334 = c__7032__auto___27332;
var G__27335 = cljs.core.count(c__7032__auto___27332);
var G__27336 = (0);
seq__27267_27319 = G__27333;
chunk__27268_27320 = G__27334;
count__27269_27321 = G__27335;
i__27270_27322 = G__27336;
continue;
} else {
var vec__27274_27337 = cljs.core.first(seq__27267_27331__$1);
var pno_27338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27274_27337,(0),null);
var pmask_27339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27274_27337,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_27338,"$ = ",pmask_27339,";"], 0));

var G__27340 = cljs.core.next(seq__27267_27331__$1);
var G__27341 = null;
var G__27342 = (0);
var G__27343 = (0);
seq__27267_27319 = G__27340;
chunk__27268_27320 = G__27341;
count__27269_27321 = G__27342;
i__27270_27322 = G__27343;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$defrecord_STAR_,(function (p__27344){
var map__27345 = p__27344;
var map__27345__$1 = ((((!((map__27345 == null)))?((((map__27345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27345):map__27345);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27345__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27345__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27345__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27345__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27345__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__27347_27365 = cljs.core.seq(protocols);
var chunk__27348_27366 = null;
var count__27349_27367 = (0);
var i__27350_27368 = (0);
while(true){
if((i__27350_27368 < count__27349_27367)){
var protocol_27369 = chunk__27348_27366.cljs$core$IIndexed$_nth$arity$2(null,i__27350_27368);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_27369)].join('')),"}"], 0));

var G__27370 = seq__27347_27365;
var G__27371 = chunk__27348_27366;
var G__27372 = count__27349_27367;
var G__27373 = (i__27350_27368 + (1));
seq__27347_27365 = G__27370;
chunk__27348_27366 = G__27371;
count__27349_27367 = G__27372;
i__27350_27368 = G__27373;
continue;
} else {
var temp__4657__auto___27374 = cljs.core.seq(seq__27347_27365);
if(temp__4657__auto___27374){
var seq__27347_27375__$1 = temp__4657__auto___27374;
if(cljs.core.chunked_seq_QMARK_(seq__27347_27375__$1)){
var c__7032__auto___27376 = cljs.core.chunk_first(seq__27347_27375__$1);
var G__27377 = cljs.core.chunk_rest(seq__27347_27375__$1);
var G__27378 = c__7032__auto___27376;
var G__27379 = cljs.core.count(c__7032__auto___27376);
var G__27380 = (0);
seq__27347_27365 = G__27377;
chunk__27348_27366 = G__27378;
count__27349_27367 = G__27379;
i__27350_27368 = G__27380;
continue;
} else {
var protocol_27381 = cljs.core.first(seq__27347_27375__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_27381)].join('')),"}"], 0));

var G__27382 = cljs.core.next(seq__27347_27375__$1);
var G__27383 = null;
var G__27384 = (0);
var G__27385 = (0);
seq__27347_27365 = G__27382;
chunk__27348_27366 = G__27383;
count__27349_27367 = G__27384;
i__27350_27368 = G__27385;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__27351_27386 = cljs.core.seq(fields__$1);
var chunk__27352_27387 = null;
var count__27353_27388 = (0);
var i__27354_27389 = (0);
while(true){
if((i__27354_27389 < count__27353_27388)){
var fld_27390 = chunk__27352_27387.cljs$core$IIndexed$_nth$arity$2(null,i__27354_27389);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_27390," = ",fld_27390,";"], 0));

var G__27391 = seq__27351_27386;
var G__27392 = chunk__27352_27387;
var G__27393 = count__27353_27388;
var G__27394 = (i__27354_27389 + (1));
seq__27351_27386 = G__27391;
chunk__27352_27387 = G__27392;
count__27353_27388 = G__27393;
i__27354_27389 = G__27394;
continue;
} else {
var temp__4657__auto___27395 = cljs.core.seq(seq__27351_27386);
if(temp__4657__auto___27395){
var seq__27351_27396__$1 = temp__4657__auto___27395;
if(cljs.core.chunked_seq_QMARK_(seq__27351_27396__$1)){
var c__7032__auto___27397 = cljs.core.chunk_first(seq__27351_27396__$1);
var G__27398 = cljs.core.chunk_rest(seq__27351_27396__$1);
var G__27399 = c__7032__auto___27397;
var G__27400 = cljs.core.count(c__7032__auto___27397);
var G__27401 = (0);
seq__27351_27386 = G__27398;
chunk__27352_27387 = G__27399;
count__27353_27388 = G__27400;
i__27354_27389 = G__27401;
continue;
} else {
var fld_27402 = cljs.core.first(seq__27351_27396__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_27402," = ",fld_27402,";"], 0));

var G__27403 = cljs.core.next(seq__27351_27396__$1);
var G__27404 = null;
var G__27405 = (0);
var G__27406 = (0);
seq__27351_27386 = G__27403;
chunk__27352_27387 = G__27404;
count__27353_27388 = G__27405;
i__27354_27389 = G__27406;
continue;
}
} else {
}
}
break;
}

var seq__27355_27407 = cljs.core.seq(pmasks);
var chunk__27356_27408 = null;
var count__27357_27409 = (0);
var i__27358_27410 = (0);
while(true){
if((i__27358_27410 < count__27357_27409)){
var vec__27359_27411 = chunk__27356_27408.cljs$core$IIndexed$_nth$arity$2(null,i__27358_27410);
var pno_27412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27359_27411,(0),null);
var pmask_27413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27359_27411,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_27412,"$ = ",pmask_27413,";"], 0));

var G__27414 = seq__27355_27407;
var G__27415 = chunk__27356_27408;
var G__27416 = count__27357_27409;
var G__27417 = (i__27358_27410 + (1));
seq__27355_27407 = G__27414;
chunk__27356_27408 = G__27415;
count__27357_27409 = G__27416;
i__27358_27410 = G__27417;
continue;
} else {
var temp__4657__auto___27418 = cljs.core.seq(seq__27355_27407);
if(temp__4657__auto___27418){
var seq__27355_27419__$1 = temp__4657__auto___27418;
if(cljs.core.chunked_seq_QMARK_(seq__27355_27419__$1)){
var c__7032__auto___27420 = cljs.core.chunk_first(seq__27355_27419__$1);
var G__27421 = cljs.core.chunk_rest(seq__27355_27419__$1);
var G__27422 = c__7032__auto___27420;
var G__27423 = cljs.core.count(c__7032__auto___27420);
var G__27424 = (0);
seq__27355_27407 = G__27421;
chunk__27356_27408 = G__27422;
count__27357_27409 = G__27423;
i__27358_27410 = G__27424;
continue;
} else {
var vec__27362_27425 = cljs.core.first(seq__27355_27419__$1);
var pno_27426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27362_27425,(0),null);
var pmask_27427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27362_27425,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_27426,"$ = ",pmask_27427,";"], 0));

var G__27428 = cljs.core.next(seq__27355_27419__$1);
var G__27429 = null;
var G__27430 = (0);
var G__27431 = (0);
seq__27355_27407 = G__27428;
chunk__27356_27408 = G__27429;
count__27357_27409 = G__27430;
i__27358_27410 = G__27431;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dot,(function (p__27432){
var map__27433 = p__27432;
var map__27433__$1 = ((((!((map__27433 == null)))?((((map__27433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27433):map__27433);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27433__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27433__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27433__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27433__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27433__$1,cljs.core.cst$kw$env);
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js,(function (p__27435){
var map__27436 = p__27435;
var map__27436__$1 = ((((!((map__27436 == null)))?((((map__27436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27436):map__27436);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27436__$1,cljs.core.cst$kw$op);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27436__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27436__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27436__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27436__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_((function (){var and__6209__auto__ = code;
if(cljs.core.truth_(and__6209__auto__)){
var G__27438 = clojure.string.trim(code);
var G__27439 = "/*";
return goog.string.startsWith(G__27438,G__27439);
} else {
return and__6209__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([code], 0));
} else {
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$static_DASH_fns,cljs.core.cst$kw$optimize_DASH_constants,cljs.core.cst$kw$elide_DASH_asserts,cljs.core.cst$kw$target], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__27452 = cljs.core.seq(table);
var chunk__27453 = null;
var count__27454 = (0);
var i__27455 = (0);
while(true){
if((i__27455 < count__27454)){
var vec__27456 = chunk__27453.cljs$core$IIndexed$_nth$arity$2(null,i__27455);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27456,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27456,(1),null);
var ns_27462 = cljs.core.namespace(sym);
var name_27463 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__27464 = seq__27452;
var G__27465 = chunk__27453;
var G__27466 = count__27454;
var G__27467 = (i__27455 + (1));
seq__27452 = G__27464;
chunk__27453 = G__27465;
count__27454 = G__27466;
i__27455 = G__27467;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__27452);
if(temp__4657__auto__){
var seq__27452__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27452__$1)){
var c__7032__auto__ = cljs.core.chunk_first(seq__27452__$1);
var G__27468 = cljs.core.chunk_rest(seq__27452__$1);
var G__27469 = c__7032__auto__;
var G__27470 = cljs.core.count(c__7032__auto__);
var G__27471 = (0);
seq__27452 = G__27468;
chunk__27453 = G__27469;
count__27454 = G__27470;
i__27455 = G__27471;
continue;
} else {
var vec__27459 = cljs.core.first(seq__27452__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27459,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27459,(1),null);
var ns_27472 = cljs.core.namespace(sym);
var name_27473 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__27474 = cljs.core.next(seq__27452__$1);
var G__27475 = null;
var G__27476 = (0);
var G__27477 = (0);
seq__27452 = G__27474;
chunk__27453 = G__27475;
count__27454 = G__27476;
i__27455 = G__27477;
continue;
}
} else {
return null;
}
}
break;
}
});
