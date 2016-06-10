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
var map__52902 = s;
var map__52902__$1 = ((((!((map__52902 == null)))?((((map__52902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52902):map__52902);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52902__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52902__$1,cljs.core.cst$kw$info);
var d = (0);
var G__52905 = info;
var map__52906 = G__52905;
var map__52906__$1 = ((((!((map__52906 == null)))?((((map__52906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52906):map__52906);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52906__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__52905__$1 = G__52905;
while(true){
var d__$2 = d__$1;
var map__52908 = G__52905__$1;
var map__52908__$1 = ((((!((map__52908 == null)))?((((map__52908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52908):map__52908);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52908__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__52910 = (d__$2 + (1));
var G__52911 = shadow__$1;
d__$1 = G__52910;
G__52905__$1 = G__52911;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__52912){
var map__52918 = p__52912;
var map__52918__$1 = ((((!((map__52918 == null)))?((((map__52918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52918):map__52918);
var name_var = map__52918__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52918__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52918__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace([cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__52920 = info;
var map__52920__$1 = ((((!((map__52920 == null)))?((((map__52920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52920):map__52920);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52920__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52920__$1,cljs.core.cst$kw$fn_DASH_scope);
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__52922 = [cljs.core.str(clojure.string.replace([cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__52922) : cljs.compiler.munge.call(null,G__52922));
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
var args52923 = [];
var len__7296__auto___52926 = arguments.length;
var i__7297__auto___52927 = (0);
while(true){
if((i__7297__auto___52927 < len__7296__auto___52926)){
args52923.push((arguments[i__7297__auto___52927]));

var G__52928 = (i__7297__auto___52927 + (1));
i__7297__auto___52927 = G__52928;
continue;
} else {
}
break;
}

var G__52925 = args52923.length;
switch (G__52925) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52923.length)].join('')));

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
var G__52931 = cp;
switch (G__52931) {
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
var seq__52937_52941 = cljs.core.seq(s);
var chunk__52938_52942 = null;
var count__52939_52943 = (0);
var i__52940_52944 = (0);
while(true){
if((i__52940_52944 < count__52939_52943)){
var c_52945 = chunk__52938_52942.cljs$core$IIndexed$_nth$arity$2(null,i__52940_52944);
sb.append(cljs.compiler.escape_char(c_52945));

var G__52946 = seq__52937_52941;
var G__52947 = chunk__52938_52942;
var G__52948 = count__52939_52943;
var G__52949 = (i__52940_52944 + (1));
seq__52937_52941 = G__52946;
chunk__52938_52942 = G__52947;
count__52939_52943 = G__52948;
i__52940_52944 = G__52949;
continue;
} else {
var temp__4657__auto___52950 = cljs.core.seq(seq__52937_52941);
if(temp__4657__auto___52950){
var seq__52937_52951__$1 = temp__4657__auto___52950;
if(cljs.core.chunked_seq_QMARK_(seq__52937_52951__$1)){
var c__7032__auto___52952 = cljs.core.chunk_first(seq__52937_52951__$1);
var G__52953 = cljs.core.chunk_rest(seq__52937_52951__$1);
var G__52954 = c__7032__auto___52952;
var G__52955 = cljs.core.count(c__7032__auto___52952);
var G__52956 = (0);
seq__52937_52941 = G__52953;
chunk__52938_52942 = G__52954;
count__52939_52943 = G__52955;
i__52940_52944 = G__52956;
continue;
} else {
var c_52957 = cljs.core.first(seq__52937_52951__$1);
sb.append(cljs.compiler.escape_char(c_52957));

var G__52958 = cljs.core.next(seq__52937_52951__$1);
var G__52959 = null;
var G__52960 = (0);
var G__52961 = (0);
seq__52937_52941 = G__52958;
chunk__52938_52942 = G__52959;
count__52939_52943 = G__52960;
i__52940_52944 = G__52961;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__7146__auto__ = (function (){var G__52962 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__52962) : cljs.core.atom.call(null,G__52962));
})();
var prefer_table__7147__auto__ = (function (){var G__52963 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__52963) : cljs.core.atom.call(null,G__52963));
})();
var method_cache__7148__auto__ = (function (){var G__52964 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__52964) : cljs.core.atom.call(null,G__52964));
})();
var cached_hierarchy__7149__auto__ = (function (){var G__52965 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__52965) : cljs.core.atom.call(null,G__52965));
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
var map__52971_52976 = ast;
var map__52971_52977__$1 = ((((!((map__52971_52976 == null)))?((((map__52971_52976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52971_52976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52971_52976):map__52971_52976);
var env_52978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52971_52977__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_52978))){
var map__52973_52979 = env_52978;
var map__52973_52980__$1 = ((((!((map__52973_52979 == null)))?((((map__52973_52979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52973_52979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52973_52979):map__52973_52979);
var line_52981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52973_52980__$1,cljs.core.cst$kw$line);
var column_52982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52973_52980__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__52973_52979,map__52973_52980__$1,line_52981,column_52982,map__52971_52976,map__52971_52977__$1,env_52978,val__24128__auto__){
return (function (m){
var minfo = (function (){var G__52975 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$var)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52975,cljs.core.cst$kw$name,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__52975;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_52981 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__52973_52979,map__52973_52980__$1,line_52981,column_52982,map__52971_52976,map__52971_52977__$1,env_52978,val__24128__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_52982)?(column_52982 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__52973_52979,map__52973_52980__$1,line_52981,column_52982,map__52971_52976,map__52971_52977__$1,env_52978,val__24128__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__52973_52979,map__52973_52980__$1,line_52981,column_52982,map__52971_52976,map__52971_52977__$1,env_52978,val__24128__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__52973_52979,map__52973_52980__$1,line_52981,column_52982,map__52971_52976,map__52971_52977__$1,env_52978,val__24128__auto__))
,cljs.core.sorted_map()));
});})(map__52973_52979,map__52973_52980__$1,line_52981,column_52982,map__52971_52976,map__52971_52977__$1,env_52978,val__24128__auto__))
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
var len__7296__auto___52989 = arguments.length;
var i__7297__auto___52990 = (0);
while(true){
if((i__7297__auto___52990 < len__7296__auto___52989)){
args__7303__auto__.push((arguments[i__7297__auto___52990]));

var G__52991 = (i__7297__auto___52990 + (1));
i__7297__auto___52990 = G__52991;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__52985_52992 = cljs.core.seq(xs);
var chunk__52986_52993 = null;
var count__52987_52994 = (0);
var i__52988_52995 = (0);
while(true){
if((i__52988_52995 < count__52987_52994)){
var x_52996 = chunk__52986_52993.cljs$core$IIndexed$_nth$arity$2(null,i__52988_52995);
if((x_52996 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_52996)){
cljs.compiler.emit(x_52996);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_52996)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_52996);
} else {
if(goog.isFunction(x_52996)){
(x_52996.cljs$core$IFn$_invoke$arity$0 ? x_52996.cljs$core$IFn$_invoke$arity$0() : x_52996.call(null));
} else {
var s_52997 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_52996], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__52985_52992,chunk__52986_52993,count__52987_52994,i__52988_52995,s_52997,x_52996){
return (function (p1__52983_SHARP_){
return (p1__52983_SHARP_ + cljs.core.count(s_52997));
});})(seq__52985_52992,chunk__52986_52993,count__52987_52994,i__52988_52995,s_52997,x_52996))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_52997], 0));

}
}
}
}

var G__52998 = seq__52985_52992;
var G__52999 = chunk__52986_52993;
var G__53000 = count__52987_52994;
var G__53001 = (i__52988_52995 + (1));
seq__52985_52992 = G__52998;
chunk__52986_52993 = G__52999;
count__52987_52994 = G__53000;
i__52988_52995 = G__53001;
continue;
} else {
var temp__4657__auto___53002 = cljs.core.seq(seq__52985_52992);
if(temp__4657__auto___53002){
var seq__52985_53003__$1 = temp__4657__auto___53002;
if(cljs.core.chunked_seq_QMARK_(seq__52985_53003__$1)){
var c__7032__auto___53004 = cljs.core.chunk_first(seq__52985_53003__$1);
var G__53005 = cljs.core.chunk_rest(seq__52985_53003__$1);
var G__53006 = c__7032__auto___53004;
var G__53007 = cljs.core.count(c__7032__auto___53004);
var G__53008 = (0);
seq__52985_52992 = G__53005;
chunk__52986_52993 = G__53006;
count__52987_52994 = G__53007;
i__52988_52995 = G__53008;
continue;
} else {
var x_53009 = cljs.core.first(seq__52985_53003__$1);
if((x_53009 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_53009)){
cljs.compiler.emit(x_53009);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_53009)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_53009);
} else {
if(goog.isFunction(x_53009)){
(x_53009.cljs$core$IFn$_invoke$arity$0 ? x_53009.cljs$core$IFn$_invoke$arity$0() : x_53009.call(null));
} else {
var s_53010 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_53009], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__52985_52992,chunk__52986_52993,count__52987_52994,i__52988_52995,s_53010,x_53009,seq__52985_53003__$1,temp__4657__auto___53002){
return (function (p1__52983_SHARP_){
return (p1__52983_SHARP_ + cljs.core.count(s_53010));
});})(seq__52985_52992,chunk__52986_52993,count__52987_52994,i__52988_52995,s_53010,x_53009,seq__52985_53003__$1,temp__4657__auto___53002))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_53010], 0));

}
}
}
}

var G__53011 = cljs.core.next(seq__52985_53003__$1);
var G__53012 = null;
var G__53013 = (0);
var G__53014 = (0);
seq__52985_52992 = G__53011;
chunk__52986_52993 = G__53012;
count__52987_52994 = G__53013;
i__52988_52995 = G__53014;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq52984){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52984));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__7303__auto__ = [];
var len__7296__auto___53019 = arguments.length;
var i__7297__auto___53020 = (0);
while(true){
if((i__7297__auto___53020 < len__7296__auto___53019)){
args__7303__auto__.push((arguments[i__7297__auto___53020]));

var G__53021 = (i__7297__auto___53020 + (1));
i__7297__auto___53020 = G__53021;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__53016){
var map__53017 = p__53016;
var map__53017__$1 = ((((!((map__53017 == null)))?((((map__53017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53017):map__53017);
var m = map__53017__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53017__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.array_seq([cljs.core.cst$kw$gen_DASH_col,(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq53015){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53015));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__7207__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_53024_53026 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_53025_53027 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_53024_53026,_STAR_print_fn_STAR_53025_53027,sb__7207__auto__){
return (function (x__7208__auto__){
return sb__7207__auto__.append(x__7208__auto__);
});})(_STAR_print_newline_STAR_53024_53026,_STAR_print_fn_STAR_53025_53027,sb__7207__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_53025_53027;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_53024_53026;
}
return [cljs.core.str(sb__7207__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__7146__auto__ = (function (){var G__53028 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__53028) : cljs.core.atom.call(null,G__53028));
})();
var prefer_table__7147__auto__ = (function (){var G__53029 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__53029) : cljs.core.atom.call(null,G__53029));
})();
var method_cache__7148__auto__ = (function (){var G__53030 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__53030) : cljs.core.atom.call(null,G__53030));
})();
var cached_hierarchy__7149__auto__ = (function (){var G__53031 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__53031) : cljs.core.atom.call(null,G__53031));
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
var vec__53032 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53032,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53032,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53032,(2),null);
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

var G__53037_53039 = (cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__53037_53039) : cljs.compiler.emit_constant.call(null,G__53037_53039));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__53038_53040 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__53038_53040) : cljs.compiler.emit_constant.call(null,G__53038_53040));

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

var G__53042_53043 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__53042_53043) : cljs.compiler.emit_constant.call(null,G__53042_53043));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__53044 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__53044) : x.call(null,G__53044));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__53045 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__53045) : x.call(null,G__53045));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var,(function (p__53047){
var map__53048 = p__53047;
var map__53048__$1 = ((((!((map__53048 == null)))?((((map__53048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53048):map__53048);
var arg = map__53048__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53048__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53048__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53048__$1,cljs.core.cst$kw$form);
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

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__53050 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$sym$js_SLASH__DASH_Infinity)){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__53050);
} else {
return G__53050;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var_DASH_special,(function (p__53051){
var map__53052 = p__53051;
var map__53052__$1 = ((((!((map__53052 == null)))?((((map__53052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53052):map__53052);
var arg = map__53052__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53052__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53052__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53052__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53052__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__53054 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__53054__$1 = ((((!((map__53054 == null)))?((((map__53054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53054):map__53054);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53054__$1,cljs.core.cst$kw$name);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$meta,(function (p__53056){
var map__53057 = p__53056;
var map__53057__$1 = ((((!((map__53057 == null)))?((((map__53057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53057):map__53057);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53057__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53057__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53057__$1,cljs.core.cst$kw$env);
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
return (cljs.core.every_QMARK_((function (p1__53059_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__53059_SHARP_),cljs.core.cst$kw$constant);
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__53060){
var map__53061 = p__53060;
var map__53061__$1 = ((((!((map__53061 == null)))?((((map__53061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53061):map__53061);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53061__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53061__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53061__$1,cljs.core.cst$kw$vals);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__53063){
var map__53064 = p__53063;
var map__53064__$1 = ((((!((map__53064 == null)))?((((map__53064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53064):map__53064);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53064__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53064__$1,cljs.core.cst$kw$env);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (p__53066){
var map__53067 = p__53066;
var map__53067__$1 = ((((!((map__53067 == null)))?((((map__53067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53067):map__53067);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53067__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53067__$1,cljs.core.cst$kw$env);
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_53069 = cljs.core.count(items);
if((cnt_53069 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentVector(null, ",cnt_53069,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
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
return (cljs.core.every_QMARK_((function (p1__53070_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__53070_SHARP_),cljs.core.cst$kw$constant);
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (p__53071){
var map__53072 = p__53071;
var map__53072__$1 = ((((!((map__53072 == null)))?((((map__53072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53072):map__53072);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53072__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53072__$1,cljs.core.cst$kw$env);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_value,(function (p__53074){
var map__53075 = p__53074;
var map__53075__$1 = ((((!((map__53075 == null)))?((((map__53075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53075):map__53075);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53075__$1,cljs.core.cst$kw$items);
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53075__$1,cljs.core.cst$kw$js_DASH_type);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53075__$1,cljs.core.cst$kw$env);
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,cljs.core.cst$kw$object)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["{"], 0));

var temp__4657__auto___53093 = cljs.core.seq(items);
if(temp__4657__auto___53093){
var items_53094__$1 = temp__4657__auto___53093;
var vec__53077_53095 = items_53094__$1;
var seq__53078_53096 = cljs.core.seq(vec__53077_53095);
var first__53079_53097 = cljs.core.first(seq__53078_53096);
var seq__53078_53098__$1 = cljs.core.next(seq__53078_53096);
var vec__53080_53099 = first__53079_53097;
var k_53100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53080_53099,(0),null);
var v_53101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53080_53099,(1),null);
var r_53102 = seq__53078_53098__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\"",cljs.core.name(k_53100),"\": ",v_53101], 0));

var seq__53083_53103 = cljs.core.seq(r_53102);
var chunk__53084_53104 = null;
var count__53085_53105 = (0);
var i__53086_53106 = (0);
while(true){
if((i__53086_53106 < count__53085_53105)){
var vec__53087_53107 = chunk__53084_53104.cljs$core$IIndexed$_nth$arity$2(null,i__53086_53106);
var k_53108__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53087_53107,(0),null);
var v_53109__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53087_53107,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_53108__$1),"\": ",v_53109__$1], 0));

var G__53110 = seq__53083_53103;
var G__53111 = chunk__53084_53104;
var G__53112 = count__53085_53105;
var G__53113 = (i__53086_53106 + (1));
seq__53083_53103 = G__53110;
chunk__53084_53104 = G__53111;
count__53085_53105 = G__53112;
i__53086_53106 = G__53113;
continue;
} else {
var temp__4657__auto___53114__$1 = cljs.core.seq(seq__53083_53103);
if(temp__4657__auto___53114__$1){
var seq__53083_53115__$1 = temp__4657__auto___53114__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53083_53115__$1)){
var c__7032__auto___53116 = cljs.core.chunk_first(seq__53083_53115__$1);
var G__53117 = cljs.core.chunk_rest(seq__53083_53115__$1);
var G__53118 = c__7032__auto___53116;
var G__53119 = cljs.core.count(c__7032__auto___53116);
var G__53120 = (0);
seq__53083_53103 = G__53117;
chunk__53084_53104 = G__53118;
count__53085_53105 = G__53119;
i__53086_53106 = G__53120;
continue;
} else {
var vec__53090_53121 = cljs.core.first(seq__53083_53115__$1);
var k_53122__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53090_53121,(0),null);
var v_53123__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53090_53121,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_53122__$1),"\": ",v_53123__$1], 0));

var G__53124 = cljs.core.next(seq__53083_53115__$1);
var G__53125 = null;
var G__53126 = (0);
var G__53127 = (0);
seq__53083_53103 = G__53124;
chunk__53084_53104 = G__53125;
count__53085_53105 = G__53126;
i__53086_53106 = G__53127;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$constant,(function (p__53128){
var map__53129 = p__53128;
var map__53129__$1 = ((((!((map__53129 == null)))?((((map__53129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53129):map__53129);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53129__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53129__$1,cljs.core.cst$kw$env);
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
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__53131){
var map__53134 = p__53131;
var map__53134__$1 = ((((!((map__53134 == null)))?((((map__53134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53134):map__53134);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53134__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53134__$1,cljs.core.cst$kw$form);
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__53136){
var map__53139 = p__53136;
var map__53139__$1 = ((((!((map__53139 == null)))?((((map__53139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53139):map__53139);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53139__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53139__$1,cljs.core.cst$kw$form);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$if,(function (p__53141){
var map__53142 = p__53141;
var map__53142__$1 = ((((!((map__53142 == null)))?((((map__53142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53142):map__53142);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,cljs.core.cst$kw$unchecked);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case_STAR_,(function (p__53144){
var map__53145 = p__53144;
var map__53145__$1 = ((((!((map__53145 == null)))?((((map__53145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53145):map__53145);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53145__$1,cljs.core.cst$kw$v);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53145__$1,cljs.core.cst$kw$tests);
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53145__$1,cljs.core.cst$kw$thens);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53145__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53145__$1,cljs.core.cst$kw$env);
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

var seq__53147_53165 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__53148_53166 = null;
var count__53149_53167 = (0);
var i__53150_53168 = (0);
while(true){
if((i__53150_53168 < count__53149_53167)){
var vec__53151_53169 = chunk__53148_53166.cljs$core$IIndexed$_nth$arity$2(null,i__53150_53168);
var ts_53170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53151_53169,(0),null);
var then_53171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53151_53169,(1),null);
var seq__53154_53172 = cljs.core.seq(ts_53170);
var chunk__53155_53173 = null;
var count__53156_53174 = (0);
var i__53157_53175 = (0);
while(true){
if((i__53157_53175 < count__53156_53174)){
var test_53176 = chunk__53155_53173.cljs$core$IIndexed$_nth$arity$2(null,i__53157_53175);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_53176,":"], 0));

var G__53177 = seq__53154_53172;
var G__53178 = chunk__53155_53173;
var G__53179 = count__53156_53174;
var G__53180 = (i__53157_53175 + (1));
seq__53154_53172 = G__53177;
chunk__53155_53173 = G__53178;
count__53156_53174 = G__53179;
i__53157_53175 = G__53180;
continue;
} else {
var temp__4657__auto___53181 = cljs.core.seq(seq__53154_53172);
if(temp__4657__auto___53181){
var seq__53154_53182__$1 = temp__4657__auto___53181;
if(cljs.core.chunked_seq_QMARK_(seq__53154_53182__$1)){
var c__7032__auto___53183 = cljs.core.chunk_first(seq__53154_53182__$1);
var G__53184 = cljs.core.chunk_rest(seq__53154_53182__$1);
var G__53185 = c__7032__auto___53183;
var G__53186 = cljs.core.count(c__7032__auto___53183);
var G__53187 = (0);
seq__53154_53172 = G__53184;
chunk__53155_53173 = G__53185;
count__53156_53174 = G__53186;
i__53157_53175 = G__53187;
continue;
} else {
var test_53188 = cljs.core.first(seq__53154_53182__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_53188,":"], 0));

var G__53189 = cljs.core.next(seq__53154_53182__$1);
var G__53190 = null;
var G__53191 = (0);
var G__53192 = (0);
seq__53154_53172 = G__53189;
chunk__53155_53173 = G__53190;
count__53156_53174 = G__53191;
i__53157_53175 = G__53192;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_53171], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_53171], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__53193 = seq__53147_53165;
var G__53194 = chunk__53148_53166;
var G__53195 = count__53149_53167;
var G__53196 = (i__53150_53168 + (1));
seq__53147_53165 = G__53193;
chunk__53148_53166 = G__53194;
count__53149_53167 = G__53195;
i__53150_53168 = G__53196;
continue;
} else {
var temp__4657__auto___53197 = cljs.core.seq(seq__53147_53165);
if(temp__4657__auto___53197){
var seq__53147_53198__$1 = temp__4657__auto___53197;
if(cljs.core.chunked_seq_QMARK_(seq__53147_53198__$1)){
var c__7032__auto___53199 = cljs.core.chunk_first(seq__53147_53198__$1);
var G__53200 = cljs.core.chunk_rest(seq__53147_53198__$1);
var G__53201 = c__7032__auto___53199;
var G__53202 = cljs.core.count(c__7032__auto___53199);
var G__53203 = (0);
seq__53147_53165 = G__53200;
chunk__53148_53166 = G__53201;
count__53149_53167 = G__53202;
i__53150_53168 = G__53203;
continue;
} else {
var vec__53158_53204 = cljs.core.first(seq__53147_53198__$1);
var ts_53205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53158_53204,(0),null);
var then_53206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53158_53204,(1),null);
var seq__53161_53207 = cljs.core.seq(ts_53205);
var chunk__53162_53208 = null;
var count__53163_53209 = (0);
var i__53164_53210 = (0);
while(true){
if((i__53164_53210 < count__53163_53209)){
var test_53211 = chunk__53162_53208.cljs$core$IIndexed$_nth$arity$2(null,i__53164_53210);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_53211,":"], 0));

var G__53212 = seq__53161_53207;
var G__53213 = chunk__53162_53208;
var G__53214 = count__53163_53209;
var G__53215 = (i__53164_53210 + (1));
seq__53161_53207 = G__53212;
chunk__53162_53208 = G__53213;
count__53163_53209 = G__53214;
i__53164_53210 = G__53215;
continue;
} else {
var temp__4657__auto___53216__$1 = cljs.core.seq(seq__53161_53207);
if(temp__4657__auto___53216__$1){
var seq__53161_53217__$1 = temp__4657__auto___53216__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53161_53217__$1)){
var c__7032__auto___53218 = cljs.core.chunk_first(seq__53161_53217__$1);
var G__53219 = cljs.core.chunk_rest(seq__53161_53217__$1);
var G__53220 = c__7032__auto___53218;
var G__53221 = cljs.core.count(c__7032__auto___53218);
var G__53222 = (0);
seq__53161_53207 = G__53219;
chunk__53162_53208 = G__53220;
count__53163_53209 = G__53221;
i__53164_53210 = G__53222;
continue;
} else {
var test_53223 = cljs.core.first(seq__53161_53217__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_53223,":"], 0));

var G__53224 = cljs.core.next(seq__53161_53217__$1);
var G__53225 = null;
var G__53226 = (0);
var G__53227 = (0);
seq__53161_53207 = G__53224;
chunk__53162_53208 = G__53225;
count__53163_53209 = G__53226;
i__53164_53210 = G__53227;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_53206], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_53206], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__53228 = cljs.core.next(seq__53147_53198__$1);
var G__53229 = null;
var G__53230 = (0);
var G__53231 = (0);
seq__53147_53165 = G__53228;
chunk__53148_53166 = G__53229;
count__53149_53167 = G__53230;
i__53150_53168 = G__53231;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$throw,(function (p__53232){
var map__53233 = p__53232;
var map__53233__$1 = ((((!((map__53233 == null)))?((((map__53233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53233):map__53233);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53233__$1,cljs.core.cst$kw$throw);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53233__$1,cljs.core.cst$kw$env);
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
var vec__53244 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53244,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53244,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type(env,rstr):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__53244,fstr,rstr,ret_t,axstr){
return (function (p1__53235_SHARP_){
return cljs$compiler$resolve_type(env,p1__53235_SHARP_);
});})(idx,vec__53244,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__53247 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__53247),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__53247;
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
return (function (p1__53248_SHARP_){
return cljs.compiler.resolve_type(env,p1__53248_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__53255 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__53256 = cljs.core.seq(vec__53255);
var first__53257 = cljs.core.first(seq__53256);
var seq__53256__$1 = cljs.core.next(seq__53256);
var p = first__53257;
var first__53257__$1 = cljs.core.first(seq__53256__$1);
var seq__53256__$2 = cljs.core.next(seq__53256__$1);
var ts = first__53257__$1;
var first__53257__$2 = cljs.core.first(seq__53256__$2);
var seq__53256__$3 = cljs.core.next(seq__53256__$2);
var n = first__53257__$2;
var xs = seq__53256__$3;
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
var vec__53258 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__53259 = cljs.core.seq(vec__53258);
var first__53260 = cljs.core.first(seq__53259);
var seq__53259__$1 = cljs.core.next(seq__53259);
var p = first__53260;
var first__53260__$1 = cljs.core.first(seq__53259__$1);
var seq__53259__$2 = cljs.core.next(seq__53259__$1);
var ts = first__53260__$1;
var xs = seq__53259__$2;
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
var args53262 = [];
var len__7296__auto___53297 = arguments.length;
var i__7297__auto___53298 = (0);
while(true){
if((i__7297__auto___53298 < len__7296__auto___53297)){
args53262.push((arguments[i__7297__auto___53298]));

var G__53299 = (i__7297__auto___53298 + (1));
i__7297__auto___53298 = G__53299;
continue;
} else {
}
break;
}

var G__53264 = args53262.length;
switch (G__53264) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53262.length)].join('')));

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
var vec__53286 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__53261_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__53261_SHARP_);
} else {
return p1__53261_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__53287 = cljs.core.seq(vec__53286);
var first__53288 = cljs.core.first(seq__53287);
var seq__53287__$1 = cljs.core.next(seq__53287);
var x = first__53288;
var ys = seq__53287__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__53289 = cljs.core.seq(ys);
var chunk__53290 = null;
var count__53291 = (0);
var i__53292 = (0);
while(true){
if((i__53292 < count__53291)){
var next_line = chunk__53290.cljs$core$IIndexed$_nth$arity$2(null,i__53292);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__53301 = seq__53289;
var G__53302 = chunk__53290;
var G__53303 = count__53291;
var G__53304 = (i__53292 + (1));
seq__53289 = G__53301;
chunk__53290 = G__53302;
count__53291 = G__53303;
i__53292 = G__53304;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__53289);
if(temp__4657__auto__){
var seq__53289__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53289__$1)){
var c__7032__auto__ = cljs.core.chunk_first(seq__53289__$1);
var G__53305 = cljs.core.chunk_rest(seq__53289__$1);
var G__53306 = c__7032__auto__;
var G__53307 = cljs.core.count(c__7032__auto__);
var G__53308 = (0);
seq__53289 = G__53305;
chunk__53290 = G__53306;
count__53291 = G__53307;
i__53292 = G__53308;
continue;
} else {
var next_line = cljs.core.first(seq__53289__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__53309 = cljs.core.next(seq__53289__$1);
var G__53310 = null;
var G__53311 = (0);
var G__53312 = (0);
seq__53289 = G__53309;
chunk__53290 = G__53310;
count__53291 = G__53311;
i__53292 = G__53312;
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

var seq__53293_53313 = cljs.core.seq(docs__$2);
var chunk__53294_53314 = null;
var count__53295_53315 = (0);
var i__53296_53316 = (0);
while(true){
if((i__53296_53316 < count__53295_53315)){
var e_53317 = chunk__53294_53314.cljs$core$IIndexed$_nth$arity$2(null,i__53296_53316);
if(cljs.core.truth_(e_53317)){
print_comment_lines(e_53317);
} else {
}

var G__53318 = seq__53293_53313;
var G__53319 = chunk__53294_53314;
var G__53320 = count__53295_53315;
var G__53321 = (i__53296_53316 + (1));
seq__53293_53313 = G__53318;
chunk__53294_53314 = G__53319;
count__53295_53315 = G__53320;
i__53296_53316 = G__53321;
continue;
} else {
var temp__4657__auto___53322 = cljs.core.seq(seq__53293_53313);
if(temp__4657__auto___53322){
var seq__53293_53323__$1 = temp__4657__auto___53322;
if(cljs.core.chunked_seq_QMARK_(seq__53293_53323__$1)){
var c__7032__auto___53324 = cljs.core.chunk_first(seq__53293_53323__$1);
var G__53325 = cljs.core.chunk_rest(seq__53293_53323__$1);
var G__53326 = c__7032__auto___53324;
var G__53327 = cljs.core.count(c__7032__auto___53324);
var G__53328 = (0);
seq__53293_53313 = G__53325;
chunk__53294_53314 = G__53326;
count__53295_53315 = G__53327;
i__53296_53316 = G__53328;
continue;
} else {
var e_53329 = cljs.core.first(seq__53293_53323__$1);
if(cljs.core.truth_(e_53329)){
print_comment_lines(e_53329);
} else {
}

var G__53330 = cljs.core.next(seq__53293_53323__$1);
var G__53331 = null;
var G__53332 = (0);
var G__53333 = (0);
seq__53293_53313 = G__53330;
chunk__53294_53314 = G__53331;
count__53295_53315 = G__53332;
i__53296_53316 = G__53333;
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
return (function (p1__53335_SHARP_){
return goog.string.startsWith(p1__53335_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$def,(function (p__53336){
var map__53337 = p__53336;
var map__53337__$1 = ((((!((map__53337 == null)))?((((map__53337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53337):map__53337);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53337__$1,cljs.core.cst$kw$name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53337__$1,cljs.core.cst$kw$var);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53337__$1,cljs.core.cst$kw$init);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53337__$1,cljs.core.cst$kw$env);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53337__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53337__$1,cljs.core.cst$kw$jsdoc);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53337__$1,cljs.core.cst$kw$export);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53337__$1,cljs.core.cst$kw$test);
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53337__$1,cljs.core.cst$kw$var_DASH_ast);
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__53339){
var map__53360 = p__53339;
var map__53360__$1 = ((((!((map__53360 == null)))?((((map__53360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53360):map__53360);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53360__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53360__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53360__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (",arglist,"){"], 0));

var seq__53362_53380 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__53363_53381 = null;
var count__53364_53382 = (0);
var i__53365_53383 = (0);
while(true){
if((i__53365_53383 < count__53364_53382)){
var vec__53366_53384 = chunk__53363_53381.cljs$core$IIndexed$_nth$arity$2(null,i__53365_53383);
var i_53385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53366_53384,(0),null);
var param_53386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53366_53384,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_53386);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__53387 = seq__53362_53380;
var G__53388 = chunk__53363_53381;
var G__53389 = count__53364_53382;
var G__53390 = (i__53365_53383 + (1));
seq__53362_53380 = G__53387;
chunk__53363_53381 = G__53388;
count__53364_53382 = G__53389;
i__53365_53383 = G__53390;
continue;
} else {
var temp__4657__auto___53391 = cljs.core.seq(seq__53362_53380);
if(temp__4657__auto___53391){
var seq__53362_53392__$1 = temp__4657__auto___53391;
if(cljs.core.chunked_seq_QMARK_(seq__53362_53392__$1)){
var c__7032__auto___53393 = cljs.core.chunk_first(seq__53362_53392__$1);
var G__53394 = cljs.core.chunk_rest(seq__53362_53392__$1);
var G__53395 = c__7032__auto___53393;
var G__53396 = cljs.core.count(c__7032__auto___53393);
var G__53397 = (0);
seq__53362_53380 = G__53394;
chunk__53363_53381 = G__53395;
count__53364_53382 = G__53396;
i__53365_53383 = G__53397;
continue;
} else {
var vec__53369_53398 = cljs.core.first(seq__53362_53392__$1);
var i_53399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53369_53398,(0),null);
var param_53400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53369_53398,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_53400);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__53401 = cljs.core.next(seq__53362_53392__$1);
var G__53402 = null;
var G__53403 = (0);
var G__53404 = (0);
seq__53362_53380 = G__53401;
chunk__53363_53381 = G__53402;
count__53364_53382 = G__53403;
i__53365_53383 = G__53404;
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

var seq__53372_53405 = cljs.core.seq(params);
var chunk__53373_53406 = null;
var count__53374_53407 = (0);
var i__53375_53408 = (0);
while(true){
if((i__53375_53408 < count__53374_53407)){
var param_53409 = chunk__53373_53406.cljs$core$IIndexed$_nth$arity$2(null,i__53375_53408);
cljs.compiler.emit(param_53409);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53409,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__53410 = seq__53372_53405;
var G__53411 = chunk__53373_53406;
var G__53412 = count__53374_53407;
var G__53413 = (i__53375_53408 + (1));
seq__53372_53405 = G__53410;
chunk__53373_53406 = G__53411;
count__53374_53407 = G__53412;
i__53375_53408 = G__53413;
continue;
} else {
var temp__4657__auto___53414 = cljs.core.seq(seq__53372_53405);
if(temp__4657__auto___53414){
var seq__53372_53415__$1 = temp__4657__auto___53414;
if(cljs.core.chunked_seq_QMARK_(seq__53372_53415__$1)){
var c__7032__auto___53416 = cljs.core.chunk_first(seq__53372_53415__$1);
var G__53417 = cljs.core.chunk_rest(seq__53372_53415__$1);
var G__53418 = c__7032__auto___53416;
var G__53419 = cljs.core.count(c__7032__auto___53416);
var G__53420 = (0);
seq__53372_53405 = G__53417;
chunk__53373_53406 = G__53418;
count__53374_53407 = G__53419;
i__53375_53408 = G__53420;
continue;
} else {
var param_53421 = cljs.core.first(seq__53372_53415__$1);
cljs.compiler.emit(param_53421);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53421,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__53422 = cljs.core.next(seq__53372_53415__$1);
var G__53423 = null;
var G__53424 = (0);
var G__53425 = (0);
seq__53372_53405 = G__53422;
chunk__53373_53406 = G__53423;
count__53374_53407 = G__53424;
i__53375_53408 = G__53425;
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

var seq__53376_53426 = cljs.core.seq(params);
var chunk__53377_53427 = null;
var count__53378_53428 = (0);
var i__53379_53429 = (0);
while(true){
if((i__53379_53429 < count__53378_53428)){
var param_53430 = chunk__53377_53427.cljs$core$IIndexed$_nth$arity$2(null,i__53379_53429);
cljs.compiler.emit(param_53430);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53430,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__53431 = seq__53376_53426;
var G__53432 = chunk__53377_53427;
var G__53433 = count__53378_53428;
var G__53434 = (i__53379_53429 + (1));
seq__53376_53426 = G__53431;
chunk__53377_53427 = G__53432;
count__53378_53428 = G__53433;
i__53379_53429 = G__53434;
continue;
} else {
var temp__4657__auto___53435 = cljs.core.seq(seq__53376_53426);
if(temp__4657__auto___53435){
var seq__53376_53436__$1 = temp__4657__auto___53435;
if(cljs.core.chunked_seq_QMARK_(seq__53376_53436__$1)){
var c__7032__auto___53437 = cljs.core.chunk_first(seq__53376_53436__$1);
var G__53438 = cljs.core.chunk_rest(seq__53376_53436__$1);
var G__53439 = c__7032__auto___53437;
var G__53440 = cljs.core.count(c__7032__auto___53437);
var G__53441 = (0);
seq__53376_53426 = G__53438;
chunk__53377_53427 = G__53439;
count__53378_53428 = G__53440;
i__53379_53429 = G__53441;
continue;
} else {
var param_53442 = cljs.core.first(seq__53376_53436__$1);
cljs.compiler.emit(param_53442);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53442,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__53443 = cljs.core.next(seq__53376_53436__$1);
var G__53444 = null;
var G__53445 = (0);
var G__53446 = (0);
seq__53376_53426 = G__53443;
chunk__53377_53427 = G__53444;
count__53378_53428 = G__53445;
i__53379_53429 = G__53446;
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
var seq__53451 = cljs.core.seq(params);
var chunk__53452 = null;
var count__53453 = (0);
var i__53454 = (0);
while(true){
if((i__53454 < count__53453)){
var param = chunk__53452.cljs$core$IIndexed$_nth$arity$2(null,i__53454);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__53455 = seq__53451;
var G__53456 = chunk__53452;
var G__53457 = count__53453;
var G__53458 = (i__53454 + (1));
seq__53451 = G__53455;
chunk__53452 = G__53456;
count__53453 = G__53457;
i__53454 = G__53458;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__53451);
if(temp__4657__auto__){
var seq__53451__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53451__$1)){
var c__7032__auto__ = cljs.core.chunk_first(seq__53451__$1);
var G__53459 = cljs.core.chunk_rest(seq__53451__$1);
var G__53460 = c__7032__auto__;
var G__53461 = cljs.core.count(c__7032__auto__);
var G__53462 = (0);
seq__53451 = G__53459;
chunk__53452 = G__53460;
count__53453 = G__53461;
i__53454 = G__53462;
continue;
} else {
var param = cljs.core.first(seq__53451__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__53463 = cljs.core.next(seq__53451__$1);
var G__53464 = null;
var G__53465 = (0);
var G__53466 = (0);
seq__53451 = G__53463;
chunk__53452 = G__53464;
count__53453 = G__53465;
i__53454 = G__53466;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__53467){
var map__53470 = p__53467;
var map__53470__$1 = ((((!((map__53470 == null)))?((((map__53470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53470):map__53470);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53470__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53470__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53470__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53470__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53470__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53470__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53470__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53470__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__53472){
var map__53483 = p__53472;
var map__53483__$1 = ((((!((map__53483 == null)))?((((map__53483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53483):map__53483);
var f = map__53483__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53483__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53483__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53483__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53483__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53483__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53483__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53483__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53483__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

var name_53493__$1 = (function (){var or__6221__auto__ = name;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_53494 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_53493__$1);
var delegate_name_53495 = [cljs.core.str(mname_53494),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",delegate_name_53495," = function ("], 0));

var seq__53485_53496 = cljs.core.seq(params);
var chunk__53486_53497 = null;
var count__53487_53498 = (0);
var i__53488_53499 = (0);
while(true){
if((i__53488_53499 < count__53487_53498)){
var param_53500 = chunk__53486_53497.cljs$core$IIndexed$_nth$arity$2(null,i__53488_53499);
cljs.compiler.emit(param_53500);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53500,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__53501 = seq__53485_53496;
var G__53502 = chunk__53486_53497;
var G__53503 = count__53487_53498;
var G__53504 = (i__53488_53499 + (1));
seq__53485_53496 = G__53501;
chunk__53486_53497 = G__53502;
count__53487_53498 = G__53503;
i__53488_53499 = G__53504;
continue;
} else {
var temp__4657__auto___53505 = cljs.core.seq(seq__53485_53496);
if(temp__4657__auto___53505){
var seq__53485_53506__$1 = temp__4657__auto___53505;
if(cljs.core.chunked_seq_QMARK_(seq__53485_53506__$1)){
var c__7032__auto___53507 = cljs.core.chunk_first(seq__53485_53506__$1);
var G__53508 = cljs.core.chunk_rest(seq__53485_53506__$1);
var G__53509 = c__7032__auto___53507;
var G__53510 = cljs.core.count(c__7032__auto___53507);
var G__53511 = (0);
seq__53485_53496 = G__53508;
chunk__53486_53497 = G__53509;
count__53487_53498 = G__53510;
i__53488_53499 = G__53511;
continue;
} else {
var param_53512 = cljs.core.first(seq__53485_53506__$1);
cljs.compiler.emit(param_53512);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53512,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__53513 = cljs.core.next(seq__53485_53506__$1);
var G__53514 = null;
var G__53515 = (0);
var G__53516 = (0);
seq__53485_53496 = G__53513;
chunk__53486_53497 = G__53514;
count__53487_53498 = G__53515;
i__53488_53499 = G__53516;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_53494," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_53517 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_53517,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name_53495,".call(this,"], 0));

var seq__53489_53518 = cljs.core.seq(params);
var chunk__53490_53519 = null;
var count__53491_53520 = (0);
var i__53492_53521 = (0);
while(true){
if((i__53492_53521 < count__53491_53520)){
var param_53522 = chunk__53490_53519.cljs$core$IIndexed$_nth$arity$2(null,i__53492_53521);
cljs.compiler.emit(param_53522);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53522,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__53523 = seq__53489_53518;
var G__53524 = chunk__53490_53519;
var G__53525 = count__53491_53520;
var G__53526 = (i__53492_53521 + (1));
seq__53489_53518 = G__53523;
chunk__53490_53519 = G__53524;
count__53491_53520 = G__53525;
i__53492_53521 = G__53526;
continue;
} else {
var temp__4657__auto___53527 = cljs.core.seq(seq__53489_53518);
if(temp__4657__auto___53527){
var seq__53489_53528__$1 = temp__4657__auto___53527;
if(cljs.core.chunked_seq_QMARK_(seq__53489_53528__$1)){
var c__7032__auto___53529 = cljs.core.chunk_first(seq__53489_53528__$1);
var G__53530 = cljs.core.chunk_rest(seq__53489_53528__$1);
var G__53531 = c__7032__auto___53529;
var G__53532 = cljs.core.count(c__7032__auto___53529);
var G__53533 = (0);
seq__53489_53518 = G__53530;
chunk__53490_53519 = G__53531;
count__53491_53520 = G__53532;
i__53492_53521 = G__53533;
continue;
} else {
var param_53534 = cljs.core.first(seq__53489_53528__$1);
cljs.compiler.emit(param_53534);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53534,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__53535 = cljs.core.next(seq__53489_53528__$1);
var G__53536 = null;
var G__53537 = (0);
var G__53538 = (0);
seq__53489_53518 = G__53535;
chunk__53490_53519 = G__53536;
count__53491_53520 = G__53537;
i__53492_53521 = G__53538;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_53494,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_53494,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$name,name_53493__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_53494,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_53495,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_53494,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn,(function (p__53542){
var map__53543 = p__53542;
var map__53543__$1 = ((((!((map__53543 == null)))?((((map__53543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53543):map__53543);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53543__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53543__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53543__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53543__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53543__$1,cljs.core.cst$kw$variadic);
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53543__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53543__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__53543,map__53543__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__53539_SHARP_){
var and__6209__auto__ = p1__53539_SHARP_;
if(cljs.core.truth_(and__6209__auto__)){
var G__53545 = cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__53539_SHARP_);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53545) : cljs.core.deref.call(null,G__53545));
} else {
return and__6209__auto__;
}
});})(map__53543,map__53543__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_53579__$1 = (function (){var or__6221__auto__ = name;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_53580 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_53579__$1);
var maxparams_53581 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$));
var mmap_53582 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_53579__$1,mname_53580,maxparams_53581,loop_locals,map__53543,map__53543__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(mname_53580),cljs.core.str("__"),cljs.core.str(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_53579__$1,mname_53580,maxparams_53581,loop_locals,map__53543,map__53543__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_53583 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_53579__$1,mname_53580,maxparams_53581,mmap_53582,loop_locals,map__53543,map__53543__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__53540_SHARP_){
return cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__53540_SHARP_)));
});})(name_53579__$1,mname_53580,maxparams_53581,mmap_53582,loop_locals,map__53543,map__53543__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_53582));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_53580," = null;"], 0));

var seq__53546_53584 = cljs.core.seq(ms_53583);
var chunk__53547_53585 = null;
var count__53548_53586 = (0);
var i__53549_53587 = (0);
while(true){
if((i__53549_53587 < count__53548_53586)){
var vec__53550_53588 = chunk__53547_53585.cljs$core$IIndexed$_nth$arity$2(null,i__53549_53587);
var n_53589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53550_53588,(0),null);
var meth_53590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53550_53588,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_53589," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_53590))){
cljs.compiler.emit_variadic_fn_method(meth_53590);
} else {
cljs.compiler.emit_fn_method(meth_53590);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__53591 = seq__53546_53584;
var G__53592 = chunk__53547_53585;
var G__53593 = count__53548_53586;
var G__53594 = (i__53549_53587 + (1));
seq__53546_53584 = G__53591;
chunk__53547_53585 = G__53592;
count__53548_53586 = G__53593;
i__53549_53587 = G__53594;
continue;
} else {
var temp__4657__auto___53595 = cljs.core.seq(seq__53546_53584);
if(temp__4657__auto___53595){
var seq__53546_53596__$1 = temp__4657__auto___53595;
if(cljs.core.chunked_seq_QMARK_(seq__53546_53596__$1)){
var c__7032__auto___53597 = cljs.core.chunk_first(seq__53546_53596__$1);
var G__53598 = cljs.core.chunk_rest(seq__53546_53596__$1);
var G__53599 = c__7032__auto___53597;
var G__53600 = cljs.core.count(c__7032__auto___53597);
var G__53601 = (0);
seq__53546_53584 = G__53598;
chunk__53547_53585 = G__53599;
count__53548_53586 = G__53600;
i__53549_53587 = G__53601;
continue;
} else {
var vec__53553_53602 = cljs.core.first(seq__53546_53596__$1);
var n_53603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53553_53602,(0),null);
var meth_53604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53553_53602,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_53603," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_53604))){
cljs.compiler.emit_variadic_fn_method(meth_53604);
} else {
cljs.compiler.emit_fn_method(meth_53604);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__53605 = cljs.core.next(seq__53546_53596__$1);
var G__53606 = null;
var G__53607 = (0);
var G__53608 = (0);
seq__53546_53584 = G__53605;
chunk__53547_53585 = G__53606;
count__53548_53586 = G__53607;
i__53549_53587 = G__53608;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_53580," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_53581),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_53581)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_53581));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch(arguments.length){"], 0));

var seq__53556_53609 = cljs.core.seq(ms_53583);
var chunk__53557_53610 = null;
var count__53558_53611 = (0);
var i__53559_53612 = (0);
while(true){
if((i__53559_53612 < count__53558_53611)){
var vec__53560_53613 = chunk__53557_53610.cljs$core$IIndexed$_nth$arity$2(null,i__53559_53612);
var n_53614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53560_53613,(0),null);
var meth_53615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53560_53613,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_53615))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_53616 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_53616," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_53617 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_53616," = new cljs.core.IndexedSeq(",a_53617,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_53614,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_53581)),(((cljs.core.count(maxparams_53581) > (1)))?", ":null),restarg_53616,");"], 0));
} else {
var pcnt_53618 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_53615));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_53618,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_53614,".call(this",(((pcnt_53618 === (0)))?null:cljs.core._conj((function (){var x__7055__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_53618,maxparams_53581));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),",")),");"], 0));
}

var G__53619 = seq__53556_53609;
var G__53620 = chunk__53557_53610;
var G__53621 = count__53558_53611;
var G__53622 = (i__53559_53612 + (1));
seq__53556_53609 = G__53619;
chunk__53557_53610 = G__53620;
count__53558_53611 = G__53621;
i__53559_53612 = G__53622;
continue;
} else {
var temp__4657__auto___53623 = cljs.core.seq(seq__53556_53609);
if(temp__4657__auto___53623){
var seq__53556_53624__$1 = temp__4657__auto___53623;
if(cljs.core.chunked_seq_QMARK_(seq__53556_53624__$1)){
var c__7032__auto___53625 = cljs.core.chunk_first(seq__53556_53624__$1);
var G__53626 = cljs.core.chunk_rest(seq__53556_53624__$1);
var G__53627 = c__7032__auto___53625;
var G__53628 = cljs.core.count(c__7032__auto___53625);
var G__53629 = (0);
seq__53556_53609 = G__53626;
chunk__53557_53610 = G__53627;
count__53558_53611 = G__53628;
i__53559_53612 = G__53629;
continue;
} else {
var vec__53563_53630 = cljs.core.first(seq__53556_53624__$1);
var n_53631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53563_53630,(0),null);
var meth_53632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53563_53630,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_53632))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_53633 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_53633," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_53634 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_53633," = new cljs.core.IndexedSeq(",a_53634,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_53631,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_53581)),(((cljs.core.count(maxparams_53581) > (1)))?", ":null),restarg_53633,");"], 0));
} else {
var pcnt_53635 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_53632));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_53635,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_53631,".call(this",(((pcnt_53635 === (0)))?null:cljs.core._conj((function (){var x__7055__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_53635,maxparams_53581));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),",")),");"], 0));
}

var G__53636 = cljs.core.next(seq__53556_53624__$1);
var G__53637 = null;
var G__53638 = (0);
var G__53639 = (0);
seq__53556_53609 = G__53636;
chunk__53557_53610 = G__53637;
count__53558_53611 = G__53638;
i__53559_53612 = G__53639;
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
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_53580,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_53580,".cljs$lang$applyTo = ",cljs.core.some(((function (name_53579__$1,mname_53580,maxparams_53581,mmap_53582,ms_53583,loop_locals,map__53543,map__53543__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__53541_SHARP_){
var vec__53566 = p1__53541_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53566,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53566,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_53579__$1,mname_53580,maxparams_53581,mmap_53582,ms_53583,loop_locals,map__53543,map__53543__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_53583),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__53569_53640 = cljs.core.seq(ms_53583);
var chunk__53570_53641 = null;
var count__53571_53642 = (0);
var i__53572_53643 = (0);
while(true){
if((i__53572_53643 < count__53571_53642)){
var vec__53573_53644 = chunk__53570_53641.cljs$core$IIndexed$_nth$arity$2(null,i__53572_53643);
var n_53645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53573_53644,(0),null);
var meth_53646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53573_53644,(1),null);
var c_53647 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_53646));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_53646))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_53580,".cljs$core$IFn$_invoke$arity$variadic = ",n_53645,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_53580,".cljs$core$IFn$_invoke$arity$",c_53647," = ",n_53645,";"], 0));
}

var G__53648 = seq__53569_53640;
var G__53649 = chunk__53570_53641;
var G__53650 = count__53571_53642;
var G__53651 = (i__53572_53643 + (1));
seq__53569_53640 = G__53648;
chunk__53570_53641 = G__53649;
count__53571_53642 = G__53650;
i__53572_53643 = G__53651;
continue;
} else {
var temp__4657__auto___53652 = cljs.core.seq(seq__53569_53640);
if(temp__4657__auto___53652){
var seq__53569_53653__$1 = temp__4657__auto___53652;
if(cljs.core.chunked_seq_QMARK_(seq__53569_53653__$1)){
var c__7032__auto___53654 = cljs.core.chunk_first(seq__53569_53653__$1);
var G__53655 = cljs.core.chunk_rest(seq__53569_53653__$1);
var G__53656 = c__7032__auto___53654;
var G__53657 = cljs.core.count(c__7032__auto___53654);
var G__53658 = (0);
seq__53569_53640 = G__53655;
chunk__53570_53641 = G__53656;
count__53571_53642 = G__53657;
i__53572_53643 = G__53658;
continue;
} else {
var vec__53576_53659 = cljs.core.first(seq__53569_53653__$1);
var n_53660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53576_53659,(0),null);
var meth_53661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53576_53659,(1),null);
var c_53662 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_53661));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_53661))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_53580,".cljs$core$IFn$_invoke$arity$variadic = ",n_53660,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_53580,".cljs$core$IFn$_invoke$arity$",c_53662," = ",n_53660,";"], 0));
}

var G__53663 = cljs.core.next(seq__53569_53653__$1);
var G__53664 = null;
var G__53665 = (0);
var G__53666 = (0);
seq__53569_53640 = G__53663;
chunk__53570_53641 = G__53664;
count__53571_53642 = G__53665;
i__53572_53643 = G__53666;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_53580,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$do,(function (p__53667){
var map__53668 = p__53667;
var map__53668__$1 = ((((!((map__53668 == null)))?((((map__53668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53668):map__53668);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53668__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53668__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53668__$1,cljs.core.cst$kw$env);
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

var seq__53670_53674 = cljs.core.seq(statements);
var chunk__53671_53675 = null;
var count__53672_53676 = (0);
var i__53673_53677 = (0);
while(true){
if((i__53673_53677 < count__53672_53676)){
var s_53678 = chunk__53671_53675.cljs$core$IIndexed$_nth$arity$2(null,i__53673_53677);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_53678], 0));

var G__53679 = seq__53670_53674;
var G__53680 = chunk__53671_53675;
var G__53681 = count__53672_53676;
var G__53682 = (i__53673_53677 + (1));
seq__53670_53674 = G__53679;
chunk__53671_53675 = G__53680;
count__53672_53676 = G__53681;
i__53673_53677 = G__53682;
continue;
} else {
var temp__4657__auto___53683 = cljs.core.seq(seq__53670_53674);
if(temp__4657__auto___53683){
var seq__53670_53684__$1 = temp__4657__auto___53683;
if(cljs.core.chunked_seq_QMARK_(seq__53670_53684__$1)){
var c__7032__auto___53685 = cljs.core.chunk_first(seq__53670_53684__$1);
var G__53686 = cljs.core.chunk_rest(seq__53670_53684__$1);
var G__53687 = c__7032__auto___53685;
var G__53688 = cljs.core.count(c__7032__auto___53685);
var G__53689 = (0);
seq__53670_53674 = G__53686;
chunk__53671_53675 = G__53687;
count__53672_53676 = G__53688;
i__53673_53677 = G__53689;
continue;
} else {
var s_53690 = cljs.core.first(seq__53670_53684__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_53690], 0));

var G__53691 = cljs.core.next(seq__53670_53684__$1);
var G__53692 = null;
var G__53693 = (0);
var G__53694 = (0);
seq__53670_53674 = G__53691;
chunk__53671_53675 = G__53692;
count__53672_53676 = G__53693;
i__53673_53677 = G__53694;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$try,(function (p__53695){
var map__53696 = p__53695;
var map__53696__$1 = ((((!((map__53696 == null)))?((((map__53696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53696):map__53696);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53696__$1,cljs.core.cst$kw$env);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53696__$1,cljs.core.cst$kw$try);
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53696__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53696__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53696__$1,cljs.core.cst$kw$finally);
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__53698,is_loop){
var map__53710 = p__53698;
var map__53710__$1 = ((((!((map__53710 == null)))?((((map__53710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53710):map__53710);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53710__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53710__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53710__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_53712_53721 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_53712_53721,context,map__53710,map__53710__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_53712_53721,context,map__53710,map__53710__$1,bindings,expr,env))
,bindings):null));

try{var seq__53713_53722 = cljs.core.seq(bindings);
var chunk__53714_53723 = null;
var count__53715_53724 = (0);
var i__53716_53725 = (0);
while(true){
if((i__53716_53725 < count__53715_53724)){
var map__53717_53726 = chunk__53714_53723.cljs$core$IIndexed$_nth$arity$2(null,i__53716_53725);
var map__53717_53727__$1 = ((((!((map__53717_53726 == null)))?((((map__53717_53726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53717_53726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53717_53726):map__53717_53726);
var binding_53728 = map__53717_53727__$1;
var init_53729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53717_53727__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_53728);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_53729,";"], 0));

var G__53730 = seq__53713_53722;
var G__53731 = chunk__53714_53723;
var G__53732 = count__53715_53724;
var G__53733 = (i__53716_53725 + (1));
seq__53713_53722 = G__53730;
chunk__53714_53723 = G__53731;
count__53715_53724 = G__53732;
i__53716_53725 = G__53733;
continue;
} else {
var temp__4657__auto___53734 = cljs.core.seq(seq__53713_53722);
if(temp__4657__auto___53734){
var seq__53713_53735__$1 = temp__4657__auto___53734;
if(cljs.core.chunked_seq_QMARK_(seq__53713_53735__$1)){
var c__7032__auto___53736 = cljs.core.chunk_first(seq__53713_53735__$1);
var G__53737 = cljs.core.chunk_rest(seq__53713_53735__$1);
var G__53738 = c__7032__auto___53736;
var G__53739 = cljs.core.count(c__7032__auto___53736);
var G__53740 = (0);
seq__53713_53722 = G__53737;
chunk__53714_53723 = G__53738;
count__53715_53724 = G__53739;
i__53716_53725 = G__53740;
continue;
} else {
var map__53719_53741 = cljs.core.first(seq__53713_53735__$1);
var map__53719_53742__$1 = ((((!((map__53719_53741 == null)))?((((map__53719_53741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53719_53741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53719_53741):map__53719_53741);
var binding_53743 = map__53719_53742__$1;
var init_53744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53719_53742__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_53743);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_53744,";"], 0));

var G__53745 = cljs.core.next(seq__53713_53735__$1);
var G__53746 = null;
var G__53747 = (0);
var G__53748 = (0);
seq__53713_53722 = G__53745;
chunk__53714_53723 = G__53746;
count__53715_53724 = G__53747;
i__53716_53725 = G__53748;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_53712_53721;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$recur,(function (p__53749){
var map__53750 = p__53749;
var map__53750__$1 = ((((!((map__53750 == null)))?((((map__53750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53750):map__53750);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53750__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53750__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53750__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__7136__auto___53752 = cljs.core.count(exprs);
var i_53753 = (0);
while(true){
if((i_53753 < n__7136__auto___53752)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_53753) : temps.call(null,i_53753))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_53753) : exprs.call(null,i_53753)),";"], 0));

var G__53754 = (i_53753 + (1));
i_53753 = G__53754;
continue;
} else {
}
break;
}

var n__7136__auto___53755 = cljs.core.count(exprs);
var i_53756 = (0);
while(true){
if((i_53756 < n__7136__auto___53755)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_53756) : params.call(null,i_53756)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_53756) : temps.call(null,i_53756)),";"], 0));

var G__53757 = (i_53756 + (1));
i_53756 = G__53757;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$letfn,(function (p__53758){
var map__53759 = p__53758;
var map__53759__$1 = ((((!((map__53759 == null)))?((((map__53759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53759):map__53759);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53759__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53759__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53759__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__53761_53769 = cljs.core.seq(bindings);
var chunk__53762_53770 = null;
var count__53763_53771 = (0);
var i__53764_53772 = (0);
while(true){
if((i__53764_53772 < count__53763_53771)){
var map__53765_53773 = chunk__53762_53770.cljs$core$IIndexed$_nth$arity$2(null,i__53764_53772);
var map__53765_53774__$1 = ((((!((map__53765_53773 == null)))?((((map__53765_53773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53765_53773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53765_53773):map__53765_53773);
var binding_53775 = map__53765_53774__$1;
var init_53776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53765_53774__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_53775)," = ",init_53776,";"], 0));

var G__53777 = seq__53761_53769;
var G__53778 = chunk__53762_53770;
var G__53779 = count__53763_53771;
var G__53780 = (i__53764_53772 + (1));
seq__53761_53769 = G__53777;
chunk__53762_53770 = G__53778;
count__53763_53771 = G__53779;
i__53764_53772 = G__53780;
continue;
} else {
var temp__4657__auto___53781 = cljs.core.seq(seq__53761_53769);
if(temp__4657__auto___53781){
var seq__53761_53782__$1 = temp__4657__auto___53781;
if(cljs.core.chunked_seq_QMARK_(seq__53761_53782__$1)){
var c__7032__auto___53783 = cljs.core.chunk_first(seq__53761_53782__$1);
var G__53784 = cljs.core.chunk_rest(seq__53761_53782__$1);
var G__53785 = c__7032__auto___53783;
var G__53786 = cljs.core.count(c__7032__auto___53783);
var G__53787 = (0);
seq__53761_53769 = G__53784;
chunk__53762_53770 = G__53785;
count__53763_53771 = G__53786;
i__53764_53772 = G__53787;
continue;
} else {
var map__53767_53788 = cljs.core.first(seq__53761_53782__$1);
var map__53767_53789__$1 = ((((!((map__53767_53788 == null)))?((((map__53767_53788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53767_53788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53767_53788):map__53767_53788);
var binding_53790 = map__53767_53789__$1;
var init_53791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53767_53789__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_53790)," = ",init_53791,";"], 0));

var G__53792 = cljs.core.next(seq__53761_53782__$1);
var G__53793 = null;
var G__53794 = (0);
var G__53795 = (0);
seq__53761_53769 = G__53792;
chunk__53762_53770 = G__53793;
count__53763_53771 = G__53794;
i__53764_53772 = G__53795;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke,(function (p__53798){
var map__53799 = p__53798;
var map__53799__$1 = ((((!((map__53799 == null)))?((((map__53799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53799):map__53799);
var expr = map__53799__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53799__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53799__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53799__$1,cljs.core.cst$kw$env);
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
var vec__53801 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__53799,map__53799__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__53799,map__53799__$1,expr,f,args,env){
return (function (p1__53796_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53796_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__53799,map__53799__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__53799,map__53799__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__53799,map__53799__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__53799,map__53799__$1,expr,f,args,env){
return (function (p1__53797_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53797_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__53799,map__53799__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__53799,map__53799__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53801,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53801,(1),null);
var env__26256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__26256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_53804 = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(args),".",pimpl_53804,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_53805 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_53805,args)),(((mfa_53805 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_53805,args)),"], 0))"], 0));
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
var fprop_53806 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",f__$1,fprop_53806," ? ",f__$1,fprop_53806,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new,(function (p__53807){
var map__53808 = p__53807;
var map__53808__$1 = ((((!((map__53808 == null)))?((((map__53808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53808):map__53808);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53808__$1,cljs.core.cst$kw$ctor);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53808__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53808__$1,cljs.core.cst$kw$env);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set_BANG_,(function (p__53810){
var map__53811 = p__53810;
var map__53811__$1 = ((((!((map__53811 == null)))?((((map__53811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53811):map__53811);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53811__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53811__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53811__$1,cljs.core.cst$kw$env);
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

var seq__53817_53821 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(libs))));
var chunk__53818_53822 = null;
var count__53819_53823 = (0);
var i__53820_53824 = (0);
while(true){
if((i__53820_53824 < count__53819_53823)){
var lib_53825 = chunk__53818_53822.cljs$core$IIndexed$_nth$arity$2(null,i__53820_53824);
if(cljs.core.truth_((function (){var or__6221__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_53825),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53825),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__6221__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_53825),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53825),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53825),"');"], 0));

}
}

var G__53826 = seq__53817_53821;
var G__53827 = chunk__53818_53822;
var G__53828 = count__53819_53823;
var G__53829 = (i__53820_53824 + (1));
seq__53817_53821 = G__53826;
chunk__53818_53822 = G__53827;
count__53819_53823 = G__53828;
i__53820_53824 = G__53829;
continue;
} else {
var temp__4657__auto___53830 = cljs.core.seq(seq__53817_53821);
if(temp__4657__auto___53830){
var seq__53817_53831__$1 = temp__4657__auto___53830;
if(cljs.core.chunked_seq_QMARK_(seq__53817_53831__$1)){
var c__7032__auto___53832 = cljs.core.chunk_first(seq__53817_53831__$1);
var G__53833 = cljs.core.chunk_rest(seq__53817_53831__$1);
var G__53834 = c__7032__auto___53832;
var G__53835 = cljs.core.count(c__7032__auto___53832);
var G__53836 = (0);
seq__53817_53821 = G__53833;
chunk__53818_53822 = G__53834;
count__53819_53823 = G__53835;
i__53820_53824 = G__53836;
continue;
} else {
var lib_53837 = cljs.core.first(seq__53817_53831__$1);
if(cljs.core.truth_((function (){var or__6221__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_53837),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53837),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__6221__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_53837),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53837),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53837),"');"], 0));

}
}

var G__53838 = cljs.core.next(seq__53817_53831__$1);
var G__53839 = null;
var G__53840 = (0);
var G__53841 = (0);
seq__53817_53821 = G__53838;
chunk__53818_53822 = G__53839;
count__53819_53823 = G__53840;
i__53820_53824 = G__53841;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns,(function (p__53842){
var map__53843 = p__53842;
var map__53843__$1 = ((((!((map__53843 == null)))?((((map__53843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53843):map__53843);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53843__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53843__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53843__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53843__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53843__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53843__$1,cljs.core.cst$kw$env);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$cljs$core)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('cljs.core');"], 0));
}

cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deftype_STAR_,(function (p__53845){
var map__53846 = p__53845;
var map__53846__$1 = ((((!((map__53846 == null)))?((((map__53846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53846):map__53846);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53846__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53846__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53846__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53846__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53846__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__53848_53866 = cljs.core.seq(protocols);
var chunk__53849_53867 = null;
var count__53850_53868 = (0);
var i__53851_53869 = (0);
while(true){
if((i__53851_53869 < count__53850_53868)){
var protocol_53870 = chunk__53849_53867.cljs$core$IIndexed$_nth$arity$2(null,i__53851_53869);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_53870)].join('')),"}"], 0));

var G__53871 = seq__53848_53866;
var G__53872 = chunk__53849_53867;
var G__53873 = count__53850_53868;
var G__53874 = (i__53851_53869 + (1));
seq__53848_53866 = G__53871;
chunk__53849_53867 = G__53872;
count__53850_53868 = G__53873;
i__53851_53869 = G__53874;
continue;
} else {
var temp__4657__auto___53875 = cljs.core.seq(seq__53848_53866);
if(temp__4657__auto___53875){
var seq__53848_53876__$1 = temp__4657__auto___53875;
if(cljs.core.chunked_seq_QMARK_(seq__53848_53876__$1)){
var c__7032__auto___53877 = cljs.core.chunk_first(seq__53848_53876__$1);
var G__53878 = cljs.core.chunk_rest(seq__53848_53876__$1);
var G__53879 = c__7032__auto___53877;
var G__53880 = cljs.core.count(c__7032__auto___53877);
var G__53881 = (0);
seq__53848_53866 = G__53878;
chunk__53849_53867 = G__53879;
count__53850_53868 = G__53880;
i__53851_53869 = G__53881;
continue;
} else {
var protocol_53882 = cljs.core.first(seq__53848_53876__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_53882)].join('')),"}"], 0));

var G__53883 = cljs.core.next(seq__53848_53876__$1);
var G__53884 = null;
var G__53885 = (0);
var G__53886 = (0);
seq__53848_53866 = G__53883;
chunk__53849_53867 = G__53884;
count__53850_53868 = G__53885;
i__53851_53869 = G__53886;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__53852_53887 = cljs.core.seq(fields__$1);
var chunk__53853_53888 = null;
var count__53854_53889 = (0);
var i__53855_53890 = (0);
while(true){
if((i__53855_53890 < count__53854_53889)){
var fld_53891 = chunk__53853_53888.cljs$core$IIndexed$_nth$arity$2(null,i__53855_53890);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_53891," = ",fld_53891,";"], 0));

var G__53892 = seq__53852_53887;
var G__53893 = chunk__53853_53888;
var G__53894 = count__53854_53889;
var G__53895 = (i__53855_53890 + (1));
seq__53852_53887 = G__53892;
chunk__53853_53888 = G__53893;
count__53854_53889 = G__53894;
i__53855_53890 = G__53895;
continue;
} else {
var temp__4657__auto___53896 = cljs.core.seq(seq__53852_53887);
if(temp__4657__auto___53896){
var seq__53852_53897__$1 = temp__4657__auto___53896;
if(cljs.core.chunked_seq_QMARK_(seq__53852_53897__$1)){
var c__7032__auto___53898 = cljs.core.chunk_first(seq__53852_53897__$1);
var G__53899 = cljs.core.chunk_rest(seq__53852_53897__$1);
var G__53900 = c__7032__auto___53898;
var G__53901 = cljs.core.count(c__7032__auto___53898);
var G__53902 = (0);
seq__53852_53887 = G__53899;
chunk__53853_53888 = G__53900;
count__53854_53889 = G__53901;
i__53855_53890 = G__53902;
continue;
} else {
var fld_53903 = cljs.core.first(seq__53852_53897__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_53903," = ",fld_53903,";"], 0));

var G__53904 = cljs.core.next(seq__53852_53897__$1);
var G__53905 = null;
var G__53906 = (0);
var G__53907 = (0);
seq__53852_53887 = G__53904;
chunk__53853_53888 = G__53905;
count__53854_53889 = G__53906;
i__53855_53890 = G__53907;
continue;
}
} else {
}
}
break;
}

var seq__53856_53908 = cljs.core.seq(pmasks);
var chunk__53857_53909 = null;
var count__53858_53910 = (0);
var i__53859_53911 = (0);
while(true){
if((i__53859_53911 < count__53858_53910)){
var vec__53860_53912 = chunk__53857_53909.cljs$core$IIndexed$_nth$arity$2(null,i__53859_53911);
var pno_53913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53860_53912,(0),null);
var pmask_53914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53860_53912,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_53913,"$ = ",pmask_53914,";"], 0));

var G__53915 = seq__53856_53908;
var G__53916 = chunk__53857_53909;
var G__53917 = count__53858_53910;
var G__53918 = (i__53859_53911 + (1));
seq__53856_53908 = G__53915;
chunk__53857_53909 = G__53916;
count__53858_53910 = G__53917;
i__53859_53911 = G__53918;
continue;
} else {
var temp__4657__auto___53919 = cljs.core.seq(seq__53856_53908);
if(temp__4657__auto___53919){
var seq__53856_53920__$1 = temp__4657__auto___53919;
if(cljs.core.chunked_seq_QMARK_(seq__53856_53920__$1)){
var c__7032__auto___53921 = cljs.core.chunk_first(seq__53856_53920__$1);
var G__53922 = cljs.core.chunk_rest(seq__53856_53920__$1);
var G__53923 = c__7032__auto___53921;
var G__53924 = cljs.core.count(c__7032__auto___53921);
var G__53925 = (0);
seq__53856_53908 = G__53922;
chunk__53857_53909 = G__53923;
count__53858_53910 = G__53924;
i__53859_53911 = G__53925;
continue;
} else {
var vec__53863_53926 = cljs.core.first(seq__53856_53920__$1);
var pno_53927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53863_53926,(0),null);
var pmask_53928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53863_53926,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_53927,"$ = ",pmask_53928,";"], 0));

var G__53929 = cljs.core.next(seq__53856_53920__$1);
var G__53930 = null;
var G__53931 = (0);
var G__53932 = (0);
seq__53856_53908 = G__53929;
chunk__53857_53909 = G__53930;
count__53858_53910 = G__53931;
i__53859_53911 = G__53932;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$defrecord_STAR_,(function (p__53933){
var map__53934 = p__53933;
var map__53934__$1 = ((((!((map__53934 == null)))?((((map__53934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53934):map__53934);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53934__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53934__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53934__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53934__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53934__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__53936_53954 = cljs.core.seq(protocols);
var chunk__53937_53955 = null;
var count__53938_53956 = (0);
var i__53939_53957 = (0);
while(true){
if((i__53939_53957 < count__53938_53956)){
var protocol_53958 = chunk__53937_53955.cljs$core$IIndexed$_nth$arity$2(null,i__53939_53957);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_53958)].join('')),"}"], 0));

var G__53959 = seq__53936_53954;
var G__53960 = chunk__53937_53955;
var G__53961 = count__53938_53956;
var G__53962 = (i__53939_53957 + (1));
seq__53936_53954 = G__53959;
chunk__53937_53955 = G__53960;
count__53938_53956 = G__53961;
i__53939_53957 = G__53962;
continue;
} else {
var temp__4657__auto___53963 = cljs.core.seq(seq__53936_53954);
if(temp__4657__auto___53963){
var seq__53936_53964__$1 = temp__4657__auto___53963;
if(cljs.core.chunked_seq_QMARK_(seq__53936_53964__$1)){
var c__7032__auto___53965 = cljs.core.chunk_first(seq__53936_53964__$1);
var G__53966 = cljs.core.chunk_rest(seq__53936_53964__$1);
var G__53967 = c__7032__auto___53965;
var G__53968 = cljs.core.count(c__7032__auto___53965);
var G__53969 = (0);
seq__53936_53954 = G__53966;
chunk__53937_53955 = G__53967;
count__53938_53956 = G__53968;
i__53939_53957 = G__53969;
continue;
} else {
var protocol_53970 = cljs.core.first(seq__53936_53964__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_53970)].join('')),"}"], 0));

var G__53971 = cljs.core.next(seq__53936_53964__$1);
var G__53972 = null;
var G__53973 = (0);
var G__53974 = (0);
seq__53936_53954 = G__53971;
chunk__53937_53955 = G__53972;
count__53938_53956 = G__53973;
i__53939_53957 = G__53974;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__53940_53975 = cljs.core.seq(fields__$1);
var chunk__53941_53976 = null;
var count__53942_53977 = (0);
var i__53943_53978 = (0);
while(true){
if((i__53943_53978 < count__53942_53977)){
var fld_53979 = chunk__53941_53976.cljs$core$IIndexed$_nth$arity$2(null,i__53943_53978);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_53979," = ",fld_53979,";"], 0));

var G__53980 = seq__53940_53975;
var G__53981 = chunk__53941_53976;
var G__53982 = count__53942_53977;
var G__53983 = (i__53943_53978 + (1));
seq__53940_53975 = G__53980;
chunk__53941_53976 = G__53981;
count__53942_53977 = G__53982;
i__53943_53978 = G__53983;
continue;
} else {
var temp__4657__auto___53984 = cljs.core.seq(seq__53940_53975);
if(temp__4657__auto___53984){
var seq__53940_53985__$1 = temp__4657__auto___53984;
if(cljs.core.chunked_seq_QMARK_(seq__53940_53985__$1)){
var c__7032__auto___53986 = cljs.core.chunk_first(seq__53940_53985__$1);
var G__53987 = cljs.core.chunk_rest(seq__53940_53985__$1);
var G__53988 = c__7032__auto___53986;
var G__53989 = cljs.core.count(c__7032__auto___53986);
var G__53990 = (0);
seq__53940_53975 = G__53987;
chunk__53941_53976 = G__53988;
count__53942_53977 = G__53989;
i__53943_53978 = G__53990;
continue;
} else {
var fld_53991 = cljs.core.first(seq__53940_53985__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_53991," = ",fld_53991,";"], 0));

var G__53992 = cljs.core.next(seq__53940_53985__$1);
var G__53993 = null;
var G__53994 = (0);
var G__53995 = (0);
seq__53940_53975 = G__53992;
chunk__53941_53976 = G__53993;
count__53942_53977 = G__53994;
i__53943_53978 = G__53995;
continue;
}
} else {
}
}
break;
}

var seq__53944_53996 = cljs.core.seq(pmasks);
var chunk__53945_53997 = null;
var count__53946_53998 = (0);
var i__53947_53999 = (0);
while(true){
if((i__53947_53999 < count__53946_53998)){
var vec__53948_54000 = chunk__53945_53997.cljs$core$IIndexed$_nth$arity$2(null,i__53947_53999);
var pno_54001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53948_54000,(0),null);
var pmask_54002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53948_54000,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_54001,"$ = ",pmask_54002,";"], 0));

var G__54003 = seq__53944_53996;
var G__54004 = chunk__53945_53997;
var G__54005 = count__53946_53998;
var G__54006 = (i__53947_53999 + (1));
seq__53944_53996 = G__54003;
chunk__53945_53997 = G__54004;
count__53946_53998 = G__54005;
i__53947_53999 = G__54006;
continue;
} else {
var temp__4657__auto___54007 = cljs.core.seq(seq__53944_53996);
if(temp__4657__auto___54007){
var seq__53944_54008__$1 = temp__4657__auto___54007;
if(cljs.core.chunked_seq_QMARK_(seq__53944_54008__$1)){
var c__7032__auto___54009 = cljs.core.chunk_first(seq__53944_54008__$1);
var G__54010 = cljs.core.chunk_rest(seq__53944_54008__$1);
var G__54011 = c__7032__auto___54009;
var G__54012 = cljs.core.count(c__7032__auto___54009);
var G__54013 = (0);
seq__53944_53996 = G__54010;
chunk__53945_53997 = G__54011;
count__53946_53998 = G__54012;
i__53947_53999 = G__54013;
continue;
} else {
var vec__53951_54014 = cljs.core.first(seq__53944_54008__$1);
var pno_54015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53951_54014,(0),null);
var pmask_54016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53951_54014,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_54015,"$ = ",pmask_54016,";"], 0));

var G__54017 = cljs.core.next(seq__53944_54008__$1);
var G__54018 = null;
var G__54019 = (0);
var G__54020 = (0);
seq__53944_53996 = G__54017;
chunk__53945_53997 = G__54018;
count__53946_53998 = G__54019;
i__53947_53999 = G__54020;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dot,(function (p__54021){
var map__54022 = p__54021;
var map__54022__$1 = ((((!((map__54022 == null)))?((((map__54022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54022):map__54022);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54022__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54022__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54022__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54022__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54022__$1,cljs.core.cst$kw$env);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js,(function (p__54024){
var map__54025 = p__54024;
var map__54025__$1 = ((((!((map__54025 == null)))?((((map__54025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54025):map__54025);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54025__$1,cljs.core.cst$kw$op);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54025__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54025__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54025__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54025__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_((function (){var and__6209__auto__ = code;
if(cljs.core.truth_(and__6209__auto__)){
var G__54027 = clojure.string.trim(code);
var G__54028 = "/*";
return goog.string.startsWith(G__54027,G__54028);
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
var seq__54041 = cljs.core.seq(table);
var chunk__54042 = null;
var count__54043 = (0);
var i__54044 = (0);
while(true){
if((i__54044 < count__54043)){
var vec__54045 = chunk__54042.cljs$core$IIndexed$_nth$arity$2(null,i__54044);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54045,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54045,(1),null);
var ns_54051 = cljs.core.namespace(sym);
var name_54052 = cljs.core.name(sym);
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

var G__54053 = seq__54041;
var G__54054 = chunk__54042;
var G__54055 = count__54043;
var G__54056 = (i__54044 + (1));
seq__54041 = G__54053;
chunk__54042 = G__54054;
count__54043 = G__54055;
i__54044 = G__54056;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__54041);
if(temp__4657__auto__){
var seq__54041__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54041__$1)){
var c__7032__auto__ = cljs.core.chunk_first(seq__54041__$1);
var G__54057 = cljs.core.chunk_rest(seq__54041__$1);
var G__54058 = c__7032__auto__;
var G__54059 = cljs.core.count(c__7032__auto__);
var G__54060 = (0);
seq__54041 = G__54057;
chunk__54042 = G__54058;
count__54043 = G__54059;
i__54044 = G__54060;
continue;
} else {
var vec__54048 = cljs.core.first(seq__54041__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54048,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54048,(1),null);
var ns_54061 = cljs.core.namespace(sym);
var name_54062 = cljs.core.name(sym);
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

var G__54063 = cljs.core.next(seq__54041__$1);
var G__54064 = null;
var G__54065 = (0);
var G__54066 = (0);
seq__54041 = G__54063;
chunk__54042 = G__54064;
count__54043 = G__54065;
i__54044 = G__54066;
continue;
}
} else {
return null;
}
}
break;
}
});
