// Compiled by ClojureScript 1.9.36 {}
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
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__62892 = s;
var map__62892__$1 = ((((!((map__62892 == null)))?((((map__62892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62892):map__62892);
var name = cljs.core.get.call(null,map__62892__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__62892__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__62895 = info;
var map__62896 = G__62895;
var map__62896__$1 = ((((!((map__62896 == null)))?((((map__62896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62896):map__62896);
var shadow = cljs.core.get.call(null,map__62896__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__62895__$1 = G__62895;
while(true){
var d__$2 = d__$1;
var map__62898 = G__62895__$1;
var map__62898__$1 = ((((!((map__62898 == null)))?((((map__62898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62898):map__62898);
var shadow__$1 = cljs.core.get.call(null,map__62898__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__62900 = (d__$2 + (1));
var G__62901 = shadow__$1;
d__$1 = G__62900;
G__62895__$1 = G__62901;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__62902){
var map__62907 = p__62902;
var map__62907__$1 = ((((!((map__62907 == null)))?((((map__62907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62907):map__62907);
var name_var = map__62907__$1;
var name = cljs.core.get.call(null,map__62907__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__62907__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__62909 = info;
var map__62909__$1 = ((((!((map__62909 == null)))?((((map__62909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62909):map__62909);
var ns = cljs.core.get.call(null,map__62909__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__62909__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args62911 = [];
var len__7296__auto___62914 = arguments.length;
var i__7297__auto___62915 = (0);
while(true){
if((i__7297__auto___62915 < len__7296__auto___62914)){
args62911.push((arguments[i__7297__auto___62915]));

var G__62916 = (i__7297__auto___62915 + (1));
i__7297__auto___62915 = G__62916;
continue;
} else {
}
break;
}

var G__62913 = args62911.length;
switch (G__62913) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62911.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__62919 = cp;
switch (G__62919) {
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
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return [cljs.core.str("\\u"),cljs.core.str(pad),cljs.core.str(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__62925_62929 = cljs.core.seq.call(null,s);
var chunk__62926_62930 = null;
var count__62927_62931 = (0);
var i__62928_62932 = (0);
while(true){
if((i__62928_62932 < count__62927_62931)){
var c_62933 = cljs.core._nth.call(null,chunk__62926_62930,i__62928_62932);
sb.append(cljs.compiler.escape_char.call(null,c_62933));

var G__62934 = seq__62925_62929;
var G__62935 = chunk__62926_62930;
var G__62936 = count__62927_62931;
var G__62937 = (i__62928_62932 + (1));
seq__62925_62929 = G__62934;
chunk__62926_62930 = G__62935;
count__62927_62931 = G__62936;
i__62928_62932 = G__62937;
continue;
} else {
var temp__4657__auto___62938 = cljs.core.seq.call(null,seq__62925_62929);
if(temp__4657__auto___62938){
var seq__62925_62939__$1 = temp__4657__auto___62938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62925_62939__$1)){
var c__7032__auto___62940 = cljs.core.chunk_first.call(null,seq__62925_62939__$1);
var G__62941 = cljs.core.chunk_rest.call(null,seq__62925_62939__$1);
var G__62942 = c__7032__auto___62940;
var G__62943 = cljs.core.count.call(null,c__7032__auto___62940);
var G__62944 = (0);
seq__62925_62929 = G__62941;
chunk__62926_62930 = G__62942;
count__62927_62931 = G__62943;
i__62928_62932 = G__62944;
continue;
} else {
var c_62945 = cljs.core.first.call(null,seq__62925_62939__$1);
sb.append(cljs.compiler.escape_char.call(null,c_62945));

var G__62946 = cljs.core.next.call(null,seq__62925_62939__$1);
var G__62947 = null;
var G__62948 = (0);
var G__62949 = (0);
seq__62925_62929 = G__62946;
chunk__62926_62930 = G__62947;
count__62927_62931 = G__62948;
i__62928_62932 = G__62949;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__7146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7148__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7149__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7150__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7150__auto__,method_table__7146__auto__,prefer_table__7147__auto__,method_cache__7148__auto__,cached_hierarchy__7149__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__26173__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__26173__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__62955_62960 = ast;
var map__62955_62961__$1 = ((((!((map__62955_62960 == null)))?((((map__62955_62960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62955_62960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62955_62960):map__62955_62960);
var env_62962 = cljs.core.get.call(null,map__62955_62961__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_62962))){
var map__62957_62963 = env_62962;
var map__62957_62964__$1 = ((((!((map__62957_62963 == null)))?((((map__62957_62963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62957_62963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62957_62963):map__62957_62963);
var line_62965 = cljs.core.get.call(null,map__62957_62964__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_62966 = cljs.core.get.call(null,map__62957_62964__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__62957_62963,map__62957_62964__$1,line_62965,column_62966,map__62955_62960,map__62955_62961__$1,env_62962,val__26173__auto__){
return (function (m){
var minfo = (function (){var G__62959 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__62959,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__62959;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_62965 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__62957_62963,map__62957_62964__$1,line_62965,column_62966,map__62955_62960,map__62955_62961__$1,env_62962,val__26173__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_62966)?(column_62966 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__62957_62963,map__62957_62964__$1,line_62965,column_62966,map__62955_62960,map__62955_62961__$1,env_62962,val__26173__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__62957_62963,map__62957_62964__$1,line_62965,column_62966,map__62955_62960,map__62955_62961__$1,env_62962,val__26173__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__62957_62963,map__62957_62964__$1,line_62965,column_62966,map__62955_62960,map__62955_62961__$1,env_62962,val__26173__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__62957_62963,map__62957_62964__$1,line_62965,column_62966,map__62955_62960,map__62955_62961__$1,env_62962,val__26173__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__26173__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__7303__auto__ = [];
var len__7296__auto___62973 = arguments.length;
var i__7297__auto___62974 = (0);
while(true){
if((i__7297__auto___62974 < len__7296__auto___62973)){
args__7303__auto__.push((arguments[i__7297__auto___62974]));

var G__62975 = (i__7297__auto___62974 + (1));
i__7297__auto___62974 = G__62975;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__62969_62976 = cljs.core.seq.call(null,xs);
var chunk__62970_62977 = null;
var count__62971_62978 = (0);
var i__62972_62979 = (0);
while(true){
if((i__62972_62979 < count__62971_62978)){
var x_62980 = cljs.core._nth.call(null,chunk__62970_62977,i__62972_62979);
if((x_62980 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_62980)){
cljs.compiler.emit.call(null,x_62980);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_62980)){
cljs.core.apply.call(null,cljs.compiler.emits,x_62980);
} else {
if(goog.isFunction(x_62980)){
x_62980.call(null);
} else {
var s_62981 = cljs.core.print_str.call(null,x_62980);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__62969_62976,chunk__62970_62977,count__62971_62978,i__62972_62979,s_62981,x_62980){
return (function (p1__62967_SHARP_){
return (p1__62967_SHARP_ + cljs.core.count.call(null,s_62981));
});})(seq__62969_62976,chunk__62970_62977,count__62971_62978,i__62972_62979,s_62981,x_62980))
);
}

cljs.core.print.call(null,s_62981);

}
}
}
}

var G__62982 = seq__62969_62976;
var G__62983 = chunk__62970_62977;
var G__62984 = count__62971_62978;
var G__62985 = (i__62972_62979 + (1));
seq__62969_62976 = G__62982;
chunk__62970_62977 = G__62983;
count__62971_62978 = G__62984;
i__62972_62979 = G__62985;
continue;
} else {
var temp__4657__auto___62986 = cljs.core.seq.call(null,seq__62969_62976);
if(temp__4657__auto___62986){
var seq__62969_62987__$1 = temp__4657__auto___62986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62969_62987__$1)){
var c__7032__auto___62988 = cljs.core.chunk_first.call(null,seq__62969_62987__$1);
var G__62989 = cljs.core.chunk_rest.call(null,seq__62969_62987__$1);
var G__62990 = c__7032__auto___62988;
var G__62991 = cljs.core.count.call(null,c__7032__auto___62988);
var G__62992 = (0);
seq__62969_62976 = G__62989;
chunk__62970_62977 = G__62990;
count__62971_62978 = G__62991;
i__62972_62979 = G__62992;
continue;
} else {
var x_62993 = cljs.core.first.call(null,seq__62969_62987__$1);
if((x_62993 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_62993)){
cljs.compiler.emit.call(null,x_62993);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_62993)){
cljs.core.apply.call(null,cljs.compiler.emits,x_62993);
} else {
if(goog.isFunction(x_62993)){
x_62993.call(null);
} else {
var s_62994 = cljs.core.print_str.call(null,x_62993);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__62969_62976,chunk__62970_62977,count__62971_62978,i__62972_62979,s_62994,x_62993,seq__62969_62987__$1,temp__4657__auto___62986){
return (function (p1__62967_SHARP_){
return (p1__62967_SHARP_ + cljs.core.count.call(null,s_62994));
});})(seq__62969_62976,chunk__62970_62977,count__62971_62978,i__62972_62979,s_62994,x_62993,seq__62969_62987__$1,temp__4657__auto___62986))
);
}

cljs.core.print.call(null,s_62994);

}
}
}
}

var G__62995 = cljs.core.next.call(null,seq__62969_62987__$1);
var G__62996 = null;
var G__62997 = (0);
var G__62998 = (0);
seq__62969_62976 = G__62995;
chunk__62970_62977 = G__62996;
count__62971_62978 = G__62997;
i__62972_62979 = G__62998;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq62968){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62968));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__7303__auto__ = [];
var len__7296__auto___63003 = arguments.length;
var i__7297__auto___63004 = (0);
while(true){
if((i__7297__auto___63004 < len__7296__auto___63003)){
args__7303__auto__.push((arguments[i__7297__auto___63004]));

var G__63005 = (i__7297__auto___63004 + (1));
i__7297__auto___63004 = G__63005;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__63000){
var map__63001 = p__63000;
var map__63001__$1 = ((((!((map__63001 == null)))?((((map__63001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63001):map__63001);
var m = map__63001__$1;
var gen_line = cljs.core.get.call(null,map__63001__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq62999){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62999));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__7207__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_63008_63010 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_63009_63011 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_63008_63010,_STAR_print_fn_STAR_63009_63011,sb__7207__auto__){
return (function (x__7208__auto__){
return sb__7207__auto__.append(x__7208__auto__);
});})(_STAR_print_newline_STAR_63008_63010,_STAR_print_fn_STAR_63009_63011,sb__7207__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_63009_63011;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_63008_63010;
}
return [cljs.core.str(sb__7207__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__7146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7148__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7149__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7150__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7150__auto__,method_table__7146__auto__,prefer_table__7147__auto__,method_cache__7148__auto__,cached_hierarchy__7149__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,"(",x,")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__63012 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__63012,(0),null);
var flags = cljs.core.nth.call(null,vec__63012,(1),null);
var pattern = cljs.core.nth.call(null,vec__63012,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__63016){
var map__63017 = p__63016;
var map__63017__$1 = ((((!((map__63017 == null)))?((((map__63017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63017):map__63017);
var arg = map__63017__$1;
var info = cljs.core.get.call(null,map__63017__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__63017__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__63017__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__6221__auto__ = js_module_name;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__28066__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__63019 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__63019);
} else {
return G__63019;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__63020){
var map__63021 = p__63020;
var map__63021__$1 = ((((!((map__63021 == null)))?((((map__63021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63021):map__63021);
var arg = map__63021__$1;
var env = cljs.core.get.call(null,map__63021__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__63021__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__63021__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__63021__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__63023 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__63023__$1 = ((((!((map__63023 == null)))?((((map__63023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63023):map__63023);
var name = cljs.core.get.call(null,map__63023__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__28066__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__63025){
var map__63026 = p__63025;
var map__63026__$1 = ((((!((map__63026 == null)))?((((map__63026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63026):map__63026);
var expr = cljs.core.get.call(null,map__63026__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__63026__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__63026__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28066__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__63028_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__63028_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__63029){
var map__63030 = p__63029;
var map__63030__$1 = ((((!((map__63030 == null)))?((((map__63030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63030):map__63030);
var env = cljs.core.get.call(null,map__63030__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__63030__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__63030__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__28066__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__63032){
var map__63033 = p__63032;
var map__63033__$1 = ((((!((map__63033 == null)))?((((map__63033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63033):map__63033);
var items = cljs.core.get.call(null,map__63033__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__63033__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28066__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__63035){
var map__63036 = p__63035;
var map__63036__$1 = ((((!((map__63036 == null)))?((((map__63036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63036):map__63036);
var items = cljs.core.get.call(null,map__63036__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__63036__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28066__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_63038 = cljs.core.count.call(null,items);
if((cnt_63038 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_63038,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__63039_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__63039_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__63040){
var map__63041 = p__63040;
var map__63041__$1 = ((((!((map__63041 == null)))?((((map__63041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63041):map__63041);
var items = cljs.core.get.call(null,map__63041__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__63041__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28066__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__63043){
var map__63044 = p__63043;
var map__63044__$1 = ((((!((map__63044 == null)))?((((map__63044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63044):map__63044);
var items = cljs.core.get.call(null,map__63044__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__63044__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__63044__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28066__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4657__auto___63062 = cljs.core.seq.call(null,items);
if(temp__4657__auto___63062){
var items_63063__$1 = temp__4657__auto___63062;
var vec__63046_63064 = items_63063__$1;
var seq__63047_63065 = cljs.core.seq.call(null,vec__63046_63064);
var first__63048_63066 = cljs.core.first.call(null,seq__63047_63065);
var seq__63047_63067__$1 = cljs.core.next.call(null,seq__63047_63065);
var vec__63049_63068 = first__63048_63066;
var k_63069 = cljs.core.nth.call(null,vec__63049_63068,(0),null);
var v_63070 = cljs.core.nth.call(null,vec__63049_63068,(1),null);
var r_63071 = seq__63047_63067__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_63069),"\": ",v_63070);

var seq__63052_63072 = cljs.core.seq.call(null,r_63071);
var chunk__63053_63073 = null;
var count__63054_63074 = (0);
var i__63055_63075 = (0);
while(true){
if((i__63055_63075 < count__63054_63074)){
var vec__63056_63076 = cljs.core._nth.call(null,chunk__63053_63073,i__63055_63075);
var k_63077__$1 = cljs.core.nth.call(null,vec__63056_63076,(0),null);
var v_63078__$1 = cljs.core.nth.call(null,vec__63056_63076,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_63077__$1),"\": ",v_63078__$1);

var G__63079 = seq__63052_63072;
var G__63080 = chunk__63053_63073;
var G__63081 = count__63054_63074;
var G__63082 = (i__63055_63075 + (1));
seq__63052_63072 = G__63079;
chunk__63053_63073 = G__63080;
count__63054_63074 = G__63081;
i__63055_63075 = G__63082;
continue;
} else {
var temp__4657__auto___63083__$1 = cljs.core.seq.call(null,seq__63052_63072);
if(temp__4657__auto___63083__$1){
var seq__63052_63084__$1 = temp__4657__auto___63083__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63052_63084__$1)){
var c__7032__auto___63085 = cljs.core.chunk_first.call(null,seq__63052_63084__$1);
var G__63086 = cljs.core.chunk_rest.call(null,seq__63052_63084__$1);
var G__63087 = c__7032__auto___63085;
var G__63088 = cljs.core.count.call(null,c__7032__auto___63085);
var G__63089 = (0);
seq__63052_63072 = G__63086;
chunk__63053_63073 = G__63087;
count__63054_63074 = G__63088;
i__63055_63075 = G__63089;
continue;
} else {
var vec__63059_63090 = cljs.core.first.call(null,seq__63052_63084__$1);
var k_63091__$1 = cljs.core.nth.call(null,vec__63059_63090,(0),null);
var v_63092__$1 = cljs.core.nth.call(null,vec__63059_63090,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_63091__$1),"\": ",v_63092__$1);

var G__63093 = cljs.core.next.call(null,seq__63052_63084__$1);
var G__63094 = null;
var G__63095 = (0);
var G__63096 = (0);
seq__63052_63072 = G__63093;
chunk__63053_63073 = G__63094;
count__63054_63074 = G__63095;
i__63055_63075 = G__63096;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"}");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__63097){
var map__63098 = p__63097;
var map__63098__$1 = ((((!((map__63098 == null)))?((((map__63098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63098):map__63098);
var form = cljs.core.get.call(null,map__63098__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__63098__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__28066__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__63100){
var map__63103 = p__63100;
var map__63103__$1 = ((((!((map__63103 == null)))?((((map__63103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63103):map__63103);
var op = cljs.core.get.call(null,map__63103__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__63103__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__6209__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__6209__auto__){
var and__6209__auto____$1 = form;
if(cljs.core.truth_(and__6209__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__63105){
var map__63108 = p__63105;
var map__63108__$1 = ((((!((map__63108 == null)))?((((map__63108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63108):map__63108);
var op = cljs.core.get.call(null,map__63108__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__63108__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__6221__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__63110){
var map__63111 = p__63110;
var map__63111__$1 = ((((!((map__63111 == null)))?((((map__63111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63111):map__63111);
var test = cljs.core.get.call(null,map__63111__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__63111__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__63111__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__63111__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__63111__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__6221__auto__ = unchecked;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__63113){
var map__63114 = p__63113;
var map__63114__$1 = ((((!((map__63114 == null)))?((((map__63114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63114):map__63114);
var v = cljs.core.get.call(null,map__63114__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__63114__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__63114__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__63114__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__63114__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__63116_63134 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__63117_63135 = null;
var count__63118_63136 = (0);
var i__63119_63137 = (0);
while(true){
if((i__63119_63137 < count__63118_63136)){
var vec__63120_63138 = cljs.core._nth.call(null,chunk__63117_63135,i__63119_63137);
var ts_63139 = cljs.core.nth.call(null,vec__63120_63138,(0),null);
var then_63140 = cljs.core.nth.call(null,vec__63120_63138,(1),null);
var seq__63123_63141 = cljs.core.seq.call(null,ts_63139);
var chunk__63124_63142 = null;
var count__63125_63143 = (0);
var i__63126_63144 = (0);
while(true){
if((i__63126_63144 < count__63125_63143)){
var test_63145 = cljs.core._nth.call(null,chunk__63124_63142,i__63126_63144);
cljs.compiler.emitln.call(null,"case ",test_63145,":");

var G__63146 = seq__63123_63141;
var G__63147 = chunk__63124_63142;
var G__63148 = count__63125_63143;
var G__63149 = (i__63126_63144 + (1));
seq__63123_63141 = G__63146;
chunk__63124_63142 = G__63147;
count__63125_63143 = G__63148;
i__63126_63144 = G__63149;
continue;
} else {
var temp__4657__auto___63150 = cljs.core.seq.call(null,seq__63123_63141);
if(temp__4657__auto___63150){
var seq__63123_63151__$1 = temp__4657__auto___63150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63123_63151__$1)){
var c__7032__auto___63152 = cljs.core.chunk_first.call(null,seq__63123_63151__$1);
var G__63153 = cljs.core.chunk_rest.call(null,seq__63123_63151__$1);
var G__63154 = c__7032__auto___63152;
var G__63155 = cljs.core.count.call(null,c__7032__auto___63152);
var G__63156 = (0);
seq__63123_63141 = G__63153;
chunk__63124_63142 = G__63154;
count__63125_63143 = G__63155;
i__63126_63144 = G__63156;
continue;
} else {
var test_63157 = cljs.core.first.call(null,seq__63123_63151__$1);
cljs.compiler.emitln.call(null,"case ",test_63157,":");

var G__63158 = cljs.core.next.call(null,seq__63123_63151__$1);
var G__63159 = null;
var G__63160 = (0);
var G__63161 = (0);
seq__63123_63141 = G__63158;
chunk__63124_63142 = G__63159;
count__63125_63143 = G__63160;
i__63126_63144 = G__63161;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_63140);
} else {
cljs.compiler.emitln.call(null,then_63140);
}

cljs.compiler.emitln.call(null,"break;");

var G__63162 = seq__63116_63134;
var G__63163 = chunk__63117_63135;
var G__63164 = count__63118_63136;
var G__63165 = (i__63119_63137 + (1));
seq__63116_63134 = G__63162;
chunk__63117_63135 = G__63163;
count__63118_63136 = G__63164;
i__63119_63137 = G__63165;
continue;
} else {
var temp__4657__auto___63166 = cljs.core.seq.call(null,seq__63116_63134);
if(temp__4657__auto___63166){
var seq__63116_63167__$1 = temp__4657__auto___63166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63116_63167__$1)){
var c__7032__auto___63168 = cljs.core.chunk_first.call(null,seq__63116_63167__$1);
var G__63169 = cljs.core.chunk_rest.call(null,seq__63116_63167__$1);
var G__63170 = c__7032__auto___63168;
var G__63171 = cljs.core.count.call(null,c__7032__auto___63168);
var G__63172 = (0);
seq__63116_63134 = G__63169;
chunk__63117_63135 = G__63170;
count__63118_63136 = G__63171;
i__63119_63137 = G__63172;
continue;
} else {
var vec__63127_63173 = cljs.core.first.call(null,seq__63116_63167__$1);
var ts_63174 = cljs.core.nth.call(null,vec__63127_63173,(0),null);
var then_63175 = cljs.core.nth.call(null,vec__63127_63173,(1),null);
var seq__63130_63176 = cljs.core.seq.call(null,ts_63174);
var chunk__63131_63177 = null;
var count__63132_63178 = (0);
var i__63133_63179 = (0);
while(true){
if((i__63133_63179 < count__63132_63178)){
var test_63180 = cljs.core._nth.call(null,chunk__63131_63177,i__63133_63179);
cljs.compiler.emitln.call(null,"case ",test_63180,":");

var G__63181 = seq__63130_63176;
var G__63182 = chunk__63131_63177;
var G__63183 = count__63132_63178;
var G__63184 = (i__63133_63179 + (1));
seq__63130_63176 = G__63181;
chunk__63131_63177 = G__63182;
count__63132_63178 = G__63183;
i__63133_63179 = G__63184;
continue;
} else {
var temp__4657__auto___63185__$1 = cljs.core.seq.call(null,seq__63130_63176);
if(temp__4657__auto___63185__$1){
var seq__63130_63186__$1 = temp__4657__auto___63185__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63130_63186__$1)){
var c__7032__auto___63187 = cljs.core.chunk_first.call(null,seq__63130_63186__$1);
var G__63188 = cljs.core.chunk_rest.call(null,seq__63130_63186__$1);
var G__63189 = c__7032__auto___63187;
var G__63190 = cljs.core.count.call(null,c__7032__auto___63187);
var G__63191 = (0);
seq__63130_63176 = G__63188;
chunk__63131_63177 = G__63189;
count__63132_63178 = G__63190;
i__63133_63179 = G__63191;
continue;
} else {
var test_63192 = cljs.core.first.call(null,seq__63130_63186__$1);
cljs.compiler.emitln.call(null,"case ",test_63192,":");

var G__63193 = cljs.core.next.call(null,seq__63130_63186__$1);
var G__63194 = null;
var G__63195 = (0);
var G__63196 = (0);
seq__63130_63176 = G__63193;
chunk__63131_63177 = G__63194;
count__63132_63178 = G__63195;
i__63133_63179 = G__63196;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_63175);
} else {
cljs.compiler.emitln.call(null,then_63175);
}

cljs.compiler.emitln.call(null,"break;");

var G__63197 = cljs.core.next.call(null,seq__63116_63167__$1);
var G__63198 = null;
var G__63199 = (0);
var G__63200 = (0);
seq__63116_63134 = G__63197;
chunk__63117_63135 = G__63198;
count__63118_63136 = G__63199;
i__63119_63137 = G__63200;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__63201){
var map__63202 = p__63201;
var map__63202__$1 = ((((!((map__63202 == null)))?((((map__63202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63202):map__63202);
var throw$ = cljs.core.get.call(null,map__63202__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__63202__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__63209 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__63209,(0),null);
var rstr = cljs.core.nth.call(null,vec__63209,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__63209,fstr,rstr,ret_t,axstr){
return (function (p1__63204_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__63204_SHARP_);
});})(idx,vec__63209,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__63212 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__63212),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__63212;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__63213_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__63213_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__63220 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__63221 = cljs.core.seq.call(null,vec__63220);
var first__63222 = cljs.core.first.call(null,seq__63221);
var seq__63221__$1 = cljs.core.next.call(null,seq__63221);
var p = first__63222;
var first__63222__$1 = cljs.core.first.call(null,seq__63221__$1);
var seq__63221__$2 = cljs.core.next.call(null,seq__63221__$1);
var ts = first__63222__$1;
var first__63222__$2 = cljs.core.first.call(null,seq__63221__$2);
var seq__63221__$3 = cljs.core.next.call(null,seq__63221__$2);
var n = first__63222__$2;
var xs = seq__63221__$3;
if(cljs.core.truth_((function (){var and__6209__auto__ = cljs.core._EQ_.call(null,"@param",p);
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
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__63223 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__63224 = cljs.core.seq.call(null,vec__63223);
var first__63225 = cljs.core.first.call(null,seq__63224);
var seq__63224__$1 = cljs.core.next.call(null,seq__63224);
var p = first__63225;
var first__63225__$1 = cljs.core.first.call(null,seq__63224__$1);
var seq__63224__$2 = cljs.core.next.call(null,seq__63224__$1);
var ts = first__63225__$1;
var xs = seq__63224__$2;
if(cljs.core.truth_((function (){var and__6209__auto__ = cljs.core._EQ_.call(null,"@return",p);
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
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args63227 = [];
var len__7296__auto___63262 = arguments.length;
var i__7297__auto___63263 = (0);
while(true){
if((i__7297__auto___63263 < len__7296__auto___63262)){
args63227.push((arguments[i__7297__auto___63263]));

var G__63264 = (i__7297__auto___63263 + (1));
i__7297__auto___63263 = G__63264;
continue;
} else {
}
break;
}

var G__63229 = args63227.length;
switch (G__63229) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63227.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__63251 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__63226_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__63226_SHARP_);
} else {
return p1__63226_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__63252 = cljs.core.seq.call(null,vec__63251);
var first__63253 = cljs.core.first.call(null,seq__63252);
var seq__63252__$1 = cljs.core.next.call(null,seq__63252);
var x = first__63253;
var ys = seq__63252__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__63254 = cljs.core.seq.call(null,ys);
var chunk__63255 = null;
var count__63256 = (0);
var i__63257 = (0);
while(true){
if((i__63257 < count__63256)){
var next_line = cljs.core._nth.call(null,chunk__63255,i__63257);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__63266 = seq__63254;
var G__63267 = chunk__63255;
var G__63268 = count__63256;
var G__63269 = (i__63257 + (1));
seq__63254 = G__63266;
chunk__63255 = G__63267;
count__63256 = G__63268;
i__63257 = G__63269;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__63254);
if(temp__4657__auto__){
var seq__63254__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63254__$1)){
var c__7032__auto__ = cljs.core.chunk_first.call(null,seq__63254__$1);
var G__63270 = cljs.core.chunk_rest.call(null,seq__63254__$1);
var G__63271 = c__7032__auto__;
var G__63272 = cljs.core.count.call(null,c__7032__auto__);
var G__63273 = (0);
seq__63254 = G__63270;
chunk__63255 = G__63271;
count__63256 = G__63272;
i__63257 = G__63273;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__63254__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__63274 = cljs.core.next.call(null,seq__63254__$1);
var G__63275 = null;
var G__63276 = (0);
var G__63277 = (0);
seq__63254 = G__63274;
chunk__63255 = G__63275;
count__63256 = G__63276;
i__63257 = G__63277;
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
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__63258_63278 = cljs.core.seq.call(null,docs__$2);
var chunk__63259_63279 = null;
var count__63260_63280 = (0);
var i__63261_63281 = (0);
while(true){
if((i__63261_63281 < count__63260_63280)){
var e_63282 = cljs.core._nth.call(null,chunk__63259_63279,i__63261_63281);
if(cljs.core.truth_(e_63282)){
print_comment_lines.call(null,e_63282);
} else {
}

var G__63283 = seq__63258_63278;
var G__63284 = chunk__63259_63279;
var G__63285 = count__63260_63280;
var G__63286 = (i__63261_63281 + (1));
seq__63258_63278 = G__63283;
chunk__63259_63279 = G__63284;
count__63260_63280 = G__63285;
i__63261_63281 = G__63286;
continue;
} else {
var temp__4657__auto___63287 = cljs.core.seq.call(null,seq__63258_63278);
if(temp__4657__auto___63287){
var seq__63258_63288__$1 = temp__4657__auto___63287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63258_63288__$1)){
var c__7032__auto___63289 = cljs.core.chunk_first.call(null,seq__63258_63288__$1);
var G__63290 = cljs.core.chunk_rest.call(null,seq__63258_63288__$1);
var G__63291 = c__7032__auto___63289;
var G__63292 = cljs.core.count.call(null,c__7032__auto___63289);
var G__63293 = (0);
seq__63258_63278 = G__63290;
chunk__63259_63279 = G__63291;
count__63260_63280 = G__63292;
i__63261_63281 = G__63293;
continue;
} else {
var e_63294 = cljs.core.first.call(null,seq__63258_63288__$1);
if(cljs.core.truth_(e_63294)){
print_comment_lines.call(null,e_63294);
} else {
}

var G__63295 = cljs.core.next.call(null,seq__63258_63288__$1);
var G__63296 = null;
var G__63297 = (0);
var G__63298 = (0);
seq__63258_63278 = G__63295;
chunk__63259_63279 = G__63296;
count__63260_63280 = G__63297;
i__63261_63281 = G__63298;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__6209__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__63300_SHARP_){
return goog.string.startsWith(p1__63300_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__6209__auto__)){
var and__6209__auto____$1 = opts;
if(cljs.core.truth_(and__6209__auto____$1)){
var and__6209__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__6209__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__63301){
var map__63302 = p__63301;
var map__63302__$1 = ((((!((map__63302 == null)))?((((map__63302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63302):map__63302);
var name = cljs.core.get.call(null,map__63302__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__63302__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__63302__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__63302__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__63302__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__63302__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__63302__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__63302__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__63302__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__6221__auto__ = init;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__6209__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__6209__auto__)){
return test;
} else {
return and__6209__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__63304){
var map__63325 = p__63304;
var map__63325__$1 = ((((!((map__63325 == null)))?((((map__63325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63325):map__63325);
var name = cljs.core.get.call(null,map__63325__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__63325__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__63325__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__63327_63345 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__63328_63346 = null;
var count__63329_63347 = (0);
var i__63330_63348 = (0);
while(true){
if((i__63330_63348 < count__63329_63347)){
var vec__63331_63349 = cljs.core._nth.call(null,chunk__63328_63346,i__63330_63348);
var i_63350 = cljs.core.nth.call(null,vec__63331_63349,(0),null);
var param_63351 = cljs.core.nth.call(null,vec__63331_63349,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_63351);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__63352 = seq__63327_63345;
var G__63353 = chunk__63328_63346;
var G__63354 = count__63329_63347;
var G__63355 = (i__63330_63348 + (1));
seq__63327_63345 = G__63352;
chunk__63328_63346 = G__63353;
count__63329_63347 = G__63354;
i__63330_63348 = G__63355;
continue;
} else {
var temp__4657__auto___63356 = cljs.core.seq.call(null,seq__63327_63345);
if(temp__4657__auto___63356){
var seq__63327_63357__$1 = temp__4657__auto___63356;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63327_63357__$1)){
var c__7032__auto___63358 = cljs.core.chunk_first.call(null,seq__63327_63357__$1);
var G__63359 = cljs.core.chunk_rest.call(null,seq__63327_63357__$1);
var G__63360 = c__7032__auto___63358;
var G__63361 = cljs.core.count.call(null,c__7032__auto___63358);
var G__63362 = (0);
seq__63327_63345 = G__63359;
chunk__63328_63346 = G__63360;
count__63329_63347 = G__63361;
i__63330_63348 = G__63362;
continue;
} else {
var vec__63334_63363 = cljs.core.first.call(null,seq__63327_63357__$1);
var i_63364 = cljs.core.nth.call(null,vec__63334_63363,(0),null);
var param_63365 = cljs.core.nth.call(null,vec__63334_63363,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_63365);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__63366 = cljs.core.next.call(null,seq__63327_63357__$1);
var G__63367 = null;
var G__63368 = (0);
var G__63369 = (0);
seq__63327_63345 = G__63366;
chunk__63328_63346 = G__63367;
count__63329_63347 = G__63368;
i__63330_63348 = G__63369;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__63337_63370 = cljs.core.seq.call(null,params);
var chunk__63338_63371 = null;
var count__63339_63372 = (0);
var i__63340_63373 = (0);
while(true){
if((i__63340_63373 < count__63339_63372)){
var param_63374 = cljs.core._nth.call(null,chunk__63338_63371,i__63340_63373);
cljs.compiler.emit.call(null,param_63374);

if(cljs.core._EQ_.call(null,param_63374,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__63375 = seq__63337_63370;
var G__63376 = chunk__63338_63371;
var G__63377 = count__63339_63372;
var G__63378 = (i__63340_63373 + (1));
seq__63337_63370 = G__63375;
chunk__63338_63371 = G__63376;
count__63339_63372 = G__63377;
i__63340_63373 = G__63378;
continue;
} else {
var temp__4657__auto___63379 = cljs.core.seq.call(null,seq__63337_63370);
if(temp__4657__auto___63379){
var seq__63337_63380__$1 = temp__4657__auto___63379;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63337_63380__$1)){
var c__7032__auto___63381 = cljs.core.chunk_first.call(null,seq__63337_63380__$1);
var G__63382 = cljs.core.chunk_rest.call(null,seq__63337_63380__$1);
var G__63383 = c__7032__auto___63381;
var G__63384 = cljs.core.count.call(null,c__7032__auto___63381);
var G__63385 = (0);
seq__63337_63370 = G__63382;
chunk__63338_63371 = G__63383;
count__63339_63372 = G__63384;
i__63340_63373 = G__63385;
continue;
} else {
var param_63386 = cljs.core.first.call(null,seq__63337_63380__$1);
cljs.compiler.emit.call(null,param_63386);

if(cljs.core._EQ_.call(null,param_63386,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__63387 = cljs.core.next.call(null,seq__63337_63380__$1);
var G__63388 = null;
var G__63389 = (0);
var G__63390 = (0);
seq__63337_63370 = G__63387;
chunk__63338_63371 = G__63388;
count__63339_63372 = G__63389;
i__63340_63373 = G__63390;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__63341_63391 = cljs.core.seq.call(null,params);
var chunk__63342_63392 = null;
var count__63343_63393 = (0);
var i__63344_63394 = (0);
while(true){
if((i__63344_63394 < count__63343_63393)){
var param_63395 = cljs.core._nth.call(null,chunk__63342_63392,i__63344_63394);
cljs.compiler.emit.call(null,param_63395);

if(cljs.core._EQ_.call(null,param_63395,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__63396 = seq__63341_63391;
var G__63397 = chunk__63342_63392;
var G__63398 = count__63343_63393;
var G__63399 = (i__63344_63394 + (1));
seq__63341_63391 = G__63396;
chunk__63342_63392 = G__63397;
count__63343_63393 = G__63398;
i__63344_63394 = G__63399;
continue;
} else {
var temp__4657__auto___63400 = cljs.core.seq.call(null,seq__63341_63391);
if(temp__4657__auto___63400){
var seq__63341_63401__$1 = temp__4657__auto___63400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63341_63401__$1)){
var c__7032__auto___63402 = cljs.core.chunk_first.call(null,seq__63341_63401__$1);
var G__63403 = cljs.core.chunk_rest.call(null,seq__63341_63401__$1);
var G__63404 = c__7032__auto___63402;
var G__63405 = cljs.core.count.call(null,c__7032__auto___63402);
var G__63406 = (0);
seq__63341_63391 = G__63403;
chunk__63342_63392 = G__63404;
count__63343_63393 = G__63405;
i__63344_63394 = G__63406;
continue;
} else {
var param_63407 = cljs.core.first.call(null,seq__63341_63401__$1);
cljs.compiler.emit.call(null,param_63407);

if(cljs.core._EQ_.call(null,param_63407,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__63408 = cljs.core.next.call(null,seq__63341_63401__$1);
var G__63409 = null;
var G__63410 = (0);
var G__63411 = (0);
seq__63341_63391 = G__63408;
chunk__63342_63392 = G__63409;
count__63343_63393 = G__63410;
i__63344_63394 = G__63411;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__63416 = cljs.core.seq.call(null,params);
var chunk__63417 = null;
var count__63418 = (0);
var i__63419 = (0);
while(true){
if((i__63419 < count__63418)){
var param = cljs.core._nth.call(null,chunk__63417,i__63419);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__63420 = seq__63416;
var G__63421 = chunk__63417;
var G__63422 = count__63418;
var G__63423 = (i__63419 + (1));
seq__63416 = G__63420;
chunk__63417 = G__63421;
count__63418 = G__63422;
i__63419 = G__63423;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__63416);
if(temp__4657__auto__){
var seq__63416__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63416__$1)){
var c__7032__auto__ = cljs.core.chunk_first.call(null,seq__63416__$1);
var G__63424 = cljs.core.chunk_rest.call(null,seq__63416__$1);
var G__63425 = c__7032__auto__;
var G__63426 = cljs.core.count.call(null,c__7032__auto__);
var G__63427 = (0);
seq__63416 = G__63424;
chunk__63417 = G__63425;
count__63418 = G__63426;
i__63419 = G__63427;
continue;
} else {
var param = cljs.core.first.call(null,seq__63416__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__63428 = cljs.core.next.call(null,seq__63416__$1);
var G__63429 = null;
var G__63430 = (0);
var G__63431 = (0);
seq__63416 = G__63428;
chunk__63417 = G__63429;
count__63418 = G__63430;
i__63419 = G__63431;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__63432){
var map__63435 = p__63432;
var map__63435__$1 = ((((!((map__63435 == null)))?((((map__63435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63435):map__63435);
var type = cljs.core.get.call(null,map__63435__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__63435__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__63435__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__63435__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__63435__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__63435__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__63435__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__63435__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__28066__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__63437){
var map__63448 = p__63437;
var map__63448__$1 = ((((!((map__63448 == null)))?((((map__63448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63448):map__63448);
var f = map__63448__$1;
var type = cljs.core.get.call(null,map__63448__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__63448__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__63448__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__63448__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__63448__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__63448__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__63448__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__63448__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__28066__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_63458__$1 = (function (){var or__6221__auto__ = name;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_63459 = cljs.compiler.munge.call(null,name_63458__$1);
var delegate_name_63460 = [cljs.core.str(mname_63459),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_63460," = function (");

var seq__63450_63461 = cljs.core.seq.call(null,params);
var chunk__63451_63462 = null;
var count__63452_63463 = (0);
var i__63453_63464 = (0);
while(true){
if((i__63453_63464 < count__63452_63463)){
var param_63465 = cljs.core._nth.call(null,chunk__63451_63462,i__63453_63464);
cljs.compiler.emit.call(null,param_63465);

if(cljs.core._EQ_.call(null,param_63465,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__63466 = seq__63450_63461;
var G__63467 = chunk__63451_63462;
var G__63468 = count__63452_63463;
var G__63469 = (i__63453_63464 + (1));
seq__63450_63461 = G__63466;
chunk__63451_63462 = G__63467;
count__63452_63463 = G__63468;
i__63453_63464 = G__63469;
continue;
} else {
var temp__4657__auto___63470 = cljs.core.seq.call(null,seq__63450_63461);
if(temp__4657__auto___63470){
var seq__63450_63471__$1 = temp__4657__auto___63470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63450_63471__$1)){
var c__7032__auto___63472 = cljs.core.chunk_first.call(null,seq__63450_63471__$1);
var G__63473 = cljs.core.chunk_rest.call(null,seq__63450_63471__$1);
var G__63474 = c__7032__auto___63472;
var G__63475 = cljs.core.count.call(null,c__7032__auto___63472);
var G__63476 = (0);
seq__63450_63461 = G__63473;
chunk__63451_63462 = G__63474;
count__63452_63463 = G__63475;
i__63453_63464 = G__63476;
continue;
} else {
var param_63477 = cljs.core.first.call(null,seq__63450_63471__$1);
cljs.compiler.emit.call(null,param_63477);

if(cljs.core._EQ_.call(null,param_63477,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__63478 = cljs.core.next.call(null,seq__63450_63471__$1);
var G__63479 = null;
var G__63480 = (0);
var G__63481 = (0);
seq__63450_63461 = G__63478;
chunk__63451_63462 = G__63479;
count__63452_63463 = G__63480;
i__63453_63464 = G__63481;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_63459," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_63482 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_63482,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_63460,".call(this,");

var seq__63454_63483 = cljs.core.seq.call(null,params);
var chunk__63455_63484 = null;
var count__63456_63485 = (0);
var i__63457_63486 = (0);
while(true){
if((i__63457_63486 < count__63456_63485)){
var param_63487 = cljs.core._nth.call(null,chunk__63455_63484,i__63457_63486);
cljs.compiler.emit.call(null,param_63487);

if(cljs.core._EQ_.call(null,param_63487,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__63488 = seq__63454_63483;
var G__63489 = chunk__63455_63484;
var G__63490 = count__63456_63485;
var G__63491 = (i__63457_63486 + (1));
seq__63454_63483 = G__63488;
chunk__63455_63484 = G__63489;
count__63456_63485 = G__63490;
i__63457_63486 = G__63491;
continue;
} else {
var temp__4657__auto___63492 = cljs.core.seq.call(null,seq__63454_63483);
if(temp__4657__auto___63492){
var seq__63454_63493__$1 = temp__4657__auto___63492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63454_63493__$1)){
var c__7032__auto___63494 = cljs.core.chunk_first.call(null,seq__63454_63493__$1);
var G__63495 = cljs.core.chunk_rest.call(null,seq__63454_63493__$1);
var G__63496 = c__7032__auto___63494;
var G__63497 = cljs.core.count.call(null,c__7032__auto___63494);
var G__63498 = (0);
seq__63454_63483 = G__63495;
chunk__63455_63484 = G__63496;
count__63456_63485 = G__63497;
i__63457_63486 = G__63498;
continue;
} else {
var param_63499 = cljs.core.first.call(null,seq__63454_63493__$1);
cljs.compiler.emit.call(null,param_63499);

if(cljs.core._EQ_.call(null,param_63499,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__63500 = cljs.core.next.call(null,seq__63454_63493__$1);
var G__63501 = null;
var G__63502 = (0);
var G__63503 = (0);
seq__63454_63483 = G__63500;
chunk__63455_63484 = G__63501;
count__63456_63485 = G__63502;
i__63457_63486 = G__63503;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_63459,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_63459,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_63458__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_63459,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_63460,";");

cljs.compiler.emitln.call(null,"return ",mname_63459,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__63507){
var map__63508 = p__63507;
var map__63508__$1 = ((((!((map__63508 == null)))?((((map__63508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63508):map__63508);
var name = cljs.core.get.call(null,map__63508__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__63508__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__63508__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__63508__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__63508__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__63508__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__63508__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__63508,map__63508__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__63504_SHARP_){
var and__6209__auto__ = p1__63504_SHARP_;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__63504_SHARP_));
} else {
return and__6209__auto__;
}
});})(map__63508,map__63508__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_63543__$1 = (function (){var or__6221__auto__ = name;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_63544 = cljs.compiler.munge.call(null,name_63543__$1);
var maxparams_63545 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_63546 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_63543__$1,mname_63544,maxparams_63545,loop_locals,map__63508,map__63508__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_63544),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_63543__$1,mname_63544,maxparams_63545,loop_locals,map__63508,map__63508__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_63547 = cljs.core.sort_by.call(null,((function (name_63543__$1,mname_63544,maxparams_63545,mmap_63546,loop_locals,map__63508,map__63508__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__63505_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__63505_SHARP_)));
});})(name_63543__$1,mname_63544,maxparams_63545,mmap_63546,loop_locals,map__63508,map__63508__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_63546));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_63544," = null;");

var seq__63510_63548 = cljs.core.seq.call(null,ms_63547);
var chunk__63511_63549 = null;
var count__63512_63550 = (0);
var i__63513_63551 = (0);
while(true){
if((i__63513_63551 < count__63512_63550)){
var vec__63514_63552 = cljs.core._nth.call(null,chunk__63511_63549,i__63513_63551);
var n_63553 = cljs.core.nth.call(null,vec__63514_63552,(0),null);
var meth_63554 = cljs.core.nth.call(null,vec__63514_63552,(1),null);
cljs.compiler.emits.call(null,"var ",n_63553," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_63554))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_63554);
} else {
cljs.compiler.emit_fn_method.call(null,meth_63554);
}

cljs.compiler.emitln.call(null,";");

var G__63555 = seq__63510_63548;
var G__63556 = chunk__63511_63549;
var G__63557 = count__63512_63550;
var G__63558 = (i__63513_63551 + (1));
seq__63510_63548 = G__63555;
chunk__63511_63549 = G__63556;
count__63512_63550 = G__63557;
i__63513_63551 = G__63558;
continue;
} else {
var temp__4657__auto___63559 = cljs.core.seq.call(null,seq__63510_63548);
if(temp__4657__auto___63559){
var seq__63510_63560__$1 = temp__4657__auto___63559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63510_63560__$1)){
var c__7032__auto___63561 = cljs.core.chunk_first.call(null,seq__63510_63560__$1);
var G__63562 = cljs.core.chunk_rest.call(null,seq__63510_63560__$1);
var G__63563 = c__7032__auto___63561;
var G__63564 = cljs.core.count.call(null,c__7032__auto___63561);
var G__63565 = (0);
seq__63510_63548 = G__63562;
chunk__63511_63549 = G__63563;
count__63512_63550 = G__63564;
i__63513_63551 = G__63565;
continue;
} else {
var vec__63517_63566 = cljs.core.first.call(null,seq__63510_63560__$1);
var n_63567 = cljs.core.nth.call(null,vec__63517_63566,(0),null);
var meth_63568 = cljs.core.nth.call(null,vec__63517_63566,(1),null);
cljs.compiler.emits.call(null,"var ",n_63567," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_63568))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_63568);
} else {
cljs.compiler.emit_fn_method.call(null,meth_63568);
}

cljs.compiler.emitln.call(null,";");

var G__63569 = cljs.core.next.call(null,seq__63510_63560__$1);
var G__63570 = null;
var G__63571 = (0);
var G__63572 = (0);
seq__63510_63548 = G__63569;
chunk__63511_63549 = G__63570;
count__63512_63550 = G__63571;
i__63513_63551 = G__63572;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_63544," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_63545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_63545)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_63545));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__63520_63573 = cljs.core.seq.call(null,ms_63547);
var chunk__63521_63574 = null;
var count__63522_63575 = (0);
var i__63523_63576 = (0);
while(true){
if((i__63523_63576 < count__63522_63575)){
var vec__63524_63577 = cljs.core._nth.call(null,chunk__63521_63574,i__63523_63576);
var n_63578 = cljs.core.nth.call(null,vec__63524_63577,(0),null);
var meth_63579 = cljs.core.nth.call(null,vec__63524_63577,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_63579))){
cljs.compiler.emitln.call(null,"default:");

var restarg_63580 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_63580," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_63581 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_63580," = new cljs.core.IndexedSeq(",a_63581,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_63578,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_63545)),(((cljs.core.count.call(null,maxparams_63545) > (1)))?", ":null),restarg_63580,");");
} else {
var pcnt_63582 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_63579));
cljs.compiler.emitln.call(null,"case ",pcnt_63582,":");

cljs.compiler.emitln.call(null,"return ",n_63578,".call(this",(((pcnt_63582 === (0)))?null:cljs.core._conj.call(null,(function (){var x__7055__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_63582,maxparams_63545));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7055__auto__);
})(),",")),");");
}

var G__63583 = seq__63520_63573;
var G__63584 = chunk__63521_63574;
var G__63585 = count__63522_63575;
var G__63586 = (i__63523_63576 + (1));
seq__63520_63573 = G__63583;
chunk__63521_63574 = G__63584;
count__63522_63575 = G__63585;
i__63523_63576 = G__63586;
continue;
} else {
var temp__4657__auto___63587 = cljs.core.seq.call(null,seq__63520_63573);
if(temp__4657__auto___63587){
var seq__63520_63588__$1 = temp__4657__auto___63587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63520_63588__$1)){
var c__7032__auto___63589 = cljs.core.chunk_first.call(null,seq__63520_63588__$1);
var G__63590 = cljs.core.chunk_rest.call(null,seq__63520_63588__$1);
var G__63591 = c__7032__auto___63589;
var G__63592 = cljs.core.count.call(null,c__7032__auto___63589);
var G__63593 = (0);
seq__63520_63573 = G__63590;
chunk__63521_63574 = G__63591;
count__63522_63575 = G__63592;
i__63523_63576 = G__63593;
continue;
} else {
var vec__63527_63594 = cljs.core.first.call(null,seq__63520_63588__$1);
var n_63595 = cljs.core.nth.call(null,vec__63527_63594,(0),null);
var meth_63596 = cljs.core.nth.call(null,vec__63527_63594,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_63596))){
cljs.compiler.emitln.call(null,"default:");

var restarg_63597 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_63597," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_63598 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_63597," = new cljs.core.IndexedSeq(",a_63598,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_63595,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_63545)),(((cljs.core.count.call(null,maxparams_63545) > (1)))?", ":null),restarg_63597,");");
} else {
var pcnt_63599 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_63596));
cljs.compiler.emitln.call(null,"case ",pcnt_63599,":");

cljs.compiler.emitln.call(null,"return ",n_63595,".call(this",(((pcnt_63599 === (0)))?null:cljs.core._conj.call(null,(function (){var x__7055__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_63599,maxparams_63545));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7055__auto__);
})(),",")),");");
}

var G__63600 = cljs.core.next.call(null,seq__63520_63588__$1);
var G__63601 = null;
var G__63602 = (0);
var G__63603 = (0);
seq__63520_63573 = G__63600;
chunk__63521_63574 = G__63601;
count__63522_63575 = G__63602;
i__63523_63576 = G__63603;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_63544,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_63544,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_63543__$1,mname_63544,maxparams_63545,mmap_63546,ms_63547,loop_locals,map__63508,map__63508__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__63506_SHARP_){
var vec__63530 = p1__63506_SHARP_;
var n = cljs.core.nth.call(null,vec__63530,(0),null);
var m = cljs.core.nth.call(null,vec__63530,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_63543__$1,mname_63544,maxparams_63545,mmap_63546,ms_63547,loop_locals,map__63508,map__63508__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_63547),".cljs$lang$applyTo;");
} else {
}

var seq__63533_63604 = cljs.core.seq.call(null,ms_63547);
var chunk__63534_63605 = null;
var count__63535_63606 = (0);
var i__63536_63607 = (0);
while(true){
if((i__63536_63607 < count__63535_63606)){
var vec__63537_63608 = cljs.core._nth.call(null,chunk__63534_63605,i__63536_63607);
var n_63609 = cljs.core.nth.call(null,vec__63537_63608,(0),null);
var meth_63610 = cljs.core.nth.call(null,vec__63537_63608,(1),null);
var c_63611 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_63610));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_63610))){
cljs.compiler.emitln.call(null,mname_63544,".cljs$core$IFn$_invoke$arity$variadic = ",n_63609,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_63544,".cljs$core$IFn$_invoke$arity$",c_63611," = ",n_63609,";");
}

var G__63612 = seq__63533_63604;
var G__63613 = chunk__63534_63605;
var G__63614 = count__63535_63606;
var G__63615 = (i__63536_63607 + (1));
seq__63533_63604 = G__63612;
chunk__63534_63605 = G__63613;
count__63535_63606 = G__63614;
i__63536_63607 = G__63615;
continue;
} else {
var temp__4657__auto___63616 = cljs.core.seq.call(null,seq__63533_63604);
if(temp__4657__auto___63616){
var seq__63533_63617__$1 = temp__4657__auto___63616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63533_63617__$1)){
var c__7032__auto___63618 = cljs.core.chunk_first.call(null,seq__63533_63617__$1);
var G__63619 = cljs.core.chunk_rest.call(null,seq__63533_63617__$1);
var G__63620 = c__7032__auto___63618;
var G__63621 = cljs.core.count.call(null,c__7032__auto___63618);
var G__63622 = (0);
seq__63533_63604 = G__63619;
chunk__63534_63605 = G__63620;
count__63535_63606 = G__63621;
i__63536_63607 = G__63622;
continue;
} else {
var vec__63540_63623 = cljs.core.first.call(null,seq__63533_63617__$1);
var n_63624 = cljs.core.nth.call(null,vec__63540_63623,(0),null);
var meth_63625 = cljs.core.nth.call(null,vec__63540_63623,(1),null);
var c_63626 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_63625));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_63625))){
cljs.compiler.emitln.call(null,mname_63544,".cljs$core$IFn$_invoke$arity$variadic = ",n_63624,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_63544,".cljs$core$IFn$_invoke$arity$",c_63626," = ",n_63624,";");
}

var G__63627 = cljs.core.next.call(null,seq__63533_63617__$1);
var G__63628 = null;
var G__63629 = (0);
var G__63630 = (0);
seq__63533_63604 = G__63627;
chunk__63534_63605 = G__63628;
count__63535_63606 = G__63629;
i__63536_63607 = G__63630;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_63544,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__63631){
var map__63632 = p__63631;
var map__63632__$1 = ((((!((map__63632 == null)))?((((map__63632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63632):map__63632);
var statements = cljs.core.get.call(null,map__63632__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__63632__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__63632__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__6209__auto__ = statements;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__6209__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__63634_63638 = cljs.core.seq.call(null,statements);
var chunk__63635_63639 = null;
var count__63636_63640 = (0);
var i__63637_63641 = (0);
while(true){
if((i__63637_63641 < count__63636_63640)){
var s_63642 = cljs.core._nth.call(null,chunk__63635_63639,i__63637_63641);
cljs.compiler.emitln.call(null,s_63642);

var G__63643 = seq__63634_63638;
var G__63644 = chunk__63635_63639;
var G__63645 = count__63636_63640;
var G__63646 = (i__63637_63641 + (1));
seq__63634_63638 = G__63643;
chunk__63635_63639 = G__63644;
count__63636_63640 = G__63645;
i__63637_63641 = G__63646;
continue;
} else {
var temp__4657__auto___63647 = cljs.core.seq.call(null,seq__63634_63638);
if(temp__4657__auto___63647){
var seq__63634_63648__$1 = temp__4657__auto___63647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63634_63648__$1)){
var c__7032__auto___63649 = cljs.core.chunk_first.call(null,seq__63634_63648__$1);
var G__63650 = cljs.core.chunk_rest.call(null,seq__63634_63648__$1);
var G__63651 = c__7032__auto___63649;
var G__63652 = cljs.core.count.call(null,c__7032__auto___63649);
var G__63653 = (0);
seq__63634_63638 = G__63650;
chunk__63635_63639 = G__63651;
count__63636_63640 = G__63652;
i__63637_63641 = G__63653;
continue;
} else {
var s_63654 = cljs.core.first.call(null,seq__63634_63648__$1);
cljs.compiler.emitln.call(null,s_63654);

var G__63655 = cljs.core.next.call(null,seq__63634_63648__$1);
var G__63656 = null;
var G__63657 = (0);
var G__63658 = (0);
seq__63634_63638 = G__63655;
chunk__63635_63639 = G__63656;
count__63636_63640 = G__63657;
i__63637_63641 = G__63658;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__6209__auto__ = statements;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__6209__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__63659){
var map__63660 = p__63659;
var map__63660__$1 = ((((!((map__63660 == null)))?((((map__63660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63660):map__63660);
var env = cljs.core.get.call(null,map__63660__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__63660__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__63660__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__63660__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__63660__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__6221__auto__ = name;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str("(not= :constant (:op finally))")].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__63662,is_loop){
var map__63674 = p__63662;
var map__63674__$1 = ((((!((map__63674 == null)))?((((map__63674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63674):map__63674);
var bindings = cljs.core.get.call(null,map__63674__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__63674__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__63674__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_63676_63685 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_63676_63685,context,map__63674,map__63674__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_63676_63685,context,map__63674,map__63674__$1,bindings,expr,env))
,bindings):null));

try{var seq__63677_63686 = cljs.core.seq.call(null,bindings);
var chunk__63678_63687 = null;
var count__63679_63688 = (0);
var i__63680_63689 = (0);
while(true){
if((i__63680_63689 < count__63679_63688)){
var map__63681_63690 = cljs.core._nth.call(null,chunk__63678_63687,i__63680_63689);
var map__63681_63691__$1 = ((((!((map__63681_63690 == null)))?((((map__63681_63690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63681_63690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63681_63690):map__63681_63690);
var binding_63692 = map__63681_63691__$1;
var init_63693 = cljs.core.get.call(null,map__63681_63691__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_63692);

cljs.compiler.emitln.call(null," = ",init_63693,";");

var G__63694 = seq__63677_63686;
var G__63695 = chunk__63678_63687;
var G__63696 = count__63679_63688;
var G__63697 = (i__63680_63689 + (1));
seq__63677_63686 = G__63694;
chunk__63678_63687 = G__63695;
count__63679_63688 = G__63696;
i__63680_63689 = G__63697;
continue;
} else {
var temp__4657__auto___63698 = cljs.core.seq.call(null,seq__63677_63686);
if(temp__4657__auto___63698){
var seq__63677_63699__$1 = temp__4657__auto___63698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63677_63699__$1)){
var c__7032__auto___63700 = cljs.core.chunk_first.call(null,seq__63677_63699__$1);
var G__63701 = cljs.core.chunk_rest.call(null,seq__63677_63699__$1);
var G__63702 = c__7032__auto___63700;
var G__63703 = cljs.core.count.call(null,c__7032__auto___63700);
var G__63704 = (0);
seq__63677_63686 = G__63701;
chunk__63678_63687 = G__63702;
count__63679_63688 = G__63703;
i__63680_63689 = G__63704;
continue;
} else {
var map__63683_63705 = cljs.core.first.call(null,seq__63677_63699__$1);
var map__63683_63706__$1 = ((((!((map__63683_63705 == null)))?((((map__63683_63705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63683_63705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63683_63705):map__63683_63705);
var binding_63707 = map__63683_63706__$1;
var init_63708 = cljs.core.get.call(null,map__63683_63706__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_63707);

cljs.compiler.emitln.call(null," = ",init_63708,";");

var G__63709 = cljs.core.next.call(null,seq__63677_63699__$1);
var G__63710 = null;
var G__63711 = (0);
var G__63712 = (0);
seq__63677_63686 = G__63709;
chunk__63678_63687 = G__63710;
count__63679_63688 = G__63711;
i__63680_63689 = G__63712;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_63676_63685;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__63713){
var map__63714 = p__63713;
var map__63714__$1 = ((((!((map__63714 == null)))?((((map__63714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63714):map__63714);
var frame = cljs.core.get.call(null,map__63714__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__63714__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__63714__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__7136__auto___63716 = cljs.core.count.call(null,exprs);
var i_63717 = (0);
while(true){
if((i_63717 < n__7136__auto___63716)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_63717)," = ",exprs.call(null,i_63717),";");

var G__63718 = (i_63717 + (1));
i_63717 = G__63718;
continue;
} else {
}
break;
}

var n__7136__auto___63719 = cljs.core.count.call(null,exprs);
var i_63720 = (0);
while(true){
if((i_63720 < n__7136__auto___63719)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_63720))," = ",temps.call(null,i_63720),";");

var G__63721 = (i_63720 + (1));
i_63720 = G__63721;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__63722){
var map__63723 = p__63722;
var map__63723__$1 = ((((!((map__63723 == null)))?((((map__63723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63723):map__63723);
var bindings = cljs.core.get.call(null,map__63723__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__63723__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__63723__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__63725_63733 = cljs.core.seq.call(null,bindings);
var chunk__63726_63734 = null;
var count__63727_63735 = (0);
var i__63728_63736 = (0);
while(true){
if((i__63728_63736 < count__63727_63735)){
var map__63729_63737 = cljs.core._nth.call(null,chunk__63726_63734,i__63728_63736);
var map__63729_63738__$1 = ((((!((map__63729_63737 == null)))?((((map__63729_63737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63729_63737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63729_63737):map__63729_63737);
var binding_63739 = map__63729_63738__$1;
var init_63740 = cljs.core.get.call(null,map__63729_63738__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_63739)," = ",init_63740,";");

var G__63741 = seq__63725_63733;
var G__63742 = chunk__63726_63734;
var G__63743 = count__63727_63735;
var G__63744 = (i__63728_63736 + (1));
seq__63725_63733 = G__63741;
chunk__63726_63734 = G__63742;
count__63727_63735 = G__63743;
i__63728_63736 = G__63744;
continue;
} else {
var temp__4657__auto___63745 = cljs.core.seq.call(null,seq__63725_63733);
if(temp__4657__auto___63745){
var seq__63725_63746__$1 = temp__4657__auto___63745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63725_63746__$1)){
var c__7032__auto___63747 = cljs.core.chunk_first.call(null,seq__63725_63746__$1);
var G__63748 = cljs.core.chunk_rest.call(null,seq__63725_63746__$1);
var G__63749 = c__7032__auto___63747;
var G__63750 = cljs.core.count.call(null,c__7032__auto___63747);
var G__63751 = (0);
seq__63725_63733 = G__63748;
chunk__63726_63734 = G__63749;
count__63727_63735 = G__63750;
i__63728_63736 = G__63751;
continue;
} else {
var map__63731_63752 = cljs.core.first.call(null,seq__63725_63746__$1);
var map__63731_63753__$1 = ((((!((map__63731_63752 == null)))?((((map__63731_63752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63731_63752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63731_63752):map__63731_63752);
var binding_63754 = map__63731_63753__$1;
var init_63755 = cljs.core.get.call(null,map__63731_63753__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_63754)," = ",init_63755,";");

var G__63756 = cljs.core.next.call(null,seq__63725_63746__$1);
var G__63757 = null;
var G__63758 = (0);
var G__63759 = (0);
seq__63725_63733 = G__63756;
chunk__63726_63734 = G__63757;
count__63727_63735 = G__63758;
i__63728_63736 = G__63759;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__63762){
var map__63763 = p__63762;
var map__63763__$1 = ((((!((map__63763 == null)))?((((map__63763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63763):map__63763);
var expr = map__63763__$1;
var f = cljs.core.get.call(null,map__63763__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__63763__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__63763__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__6209__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6209__auto__)){
var and__6209__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__6209__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__6209__auto__ = protocol;
if(cljs.core.truth_(and__6209__auto__)){
var and__6209__auto____$1 = tag;
if(cljs.core.truth_(and__6209__auto____$1)){
var or__6221__auto__ = (function (){var and__6209__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6209__auto____$2)){
var and__6209__auto____$3 = protocol;
if(cljs.core.truth_(and__6209__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
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
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__6209__auto____$2)){
var or__6221__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__6221__auto____$1){
return or__6221__auto____$1;
} else {
var and__6209__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__6209__auto____$3){
var and__6209__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__6209__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
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
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__6221__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__6221__auto__){
return or__6221__auto__;
} else {
var temp__4657__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__63765 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__6209__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__6209__auto__)){
return (arity > mfa);
} else {
return and__6209__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__63763,map__63763__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__63763,map__63763__$1,expr,f,args,env){
return (function (p1__63760_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__63760_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__63763,map__63763__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__63763,map__63763__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__63763,map__63763__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__63763,map__63763__$1,expr,f,args,env){
return (function (p1__63761_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__63761_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__63763,map__63763__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__63763,map__63763__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__63765,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__63765,(1),null);
var env__28066__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_63768 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_63768,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_63769 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_63769,args)),(((mfa_63769 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_63769,args)),"], 0))");
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
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__6209__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__6209__auto__;
}
})())){
var fprop_63770 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_63770," ? ",f__$1,fprop_63770,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__63771){
var map__63772 = p__63771;
var map__63772__$1 = ((((!((map__63772 == null)))?((((map__63772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63772):map__63772);
var ctor = cljs.core.get.call(null,map__63772__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__63772__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__63772__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28066__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__63774){
var map__63775 = p__63774;
var map__63775__$1 = ((((!((map__63775 == null)))?((((map__63775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63775):map__63775);
var target = cljs.core.get.call(null,map__63775__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__63775__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__63775__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28066__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__63781_63785 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__63782_63786 = null;
var count__63783_63787 = (0);
var i__63784_63788 = (0);
while(true){
if((i__63784_63788 < count__63783_63787)){
var lib_63789 = cljs.core._nth.call(null,chunk__63782_63786,i__63784_63788);
if(cljs.core.truth_((function (){var or__6221__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_63789),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_63789),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__6221__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_63789),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_63789),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_63789),"');");

}
}

var G__63790 = seq__63781_63785;
var G__63791 = chunk__63782_63786;
var G__63792 = count__63783_63787;
var G__63793 = (i__63784_63788 + (1));
seq__63781_63785 = G__63790;
chunk__63782_63786 = G__63791;
count__63783_63787 = G__63792;
i__63784_63788 = G__63793;
continue;
} else {
var temp__4657__auto___63794 = cljs.core.seq.call(null,seq__63781_63785);
if(temp__4657__auto___63794){
var seq__63781_63795__$1 = temp__4657__auto___63794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63781_63795__$1)){
var c__7032__auto___63796 = cljs.core.chunk_first.call(null,seq__63781_63795__$1);
var G__63797 = cljs.core.chunk_rest.call(null,seq__63781_63795__$1);
var G__63798 = c__7032__auto___63796;
var G__63799 = cljs.core.count.call(null,c__7032__auto___63796);
var G__63800 = (0);
seq__63781_63785 = G__63797;
chunk__63782_63786 = G__63798;
count__63783_63787 = G__63799;
i__63784_63788 = G__63800;
continue;
} else {
var lib_63801 = cljs.core.first.call(null,seq__63781_63795__$1);
if(cljs.core.truth_((function (){var or__6221__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_63801),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_63801),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__6221__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_63801),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_63801),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_63801),"');");

}
}

var G__63802 = cljs.core.next.call(null,seq__63781_63795__$1);
var G__63803 = null;
var G__63804 = (0);
var G__63805 = (0);
seq__63781_63785 = G__63802;
chunk__63782_63786 = G__63803;
count__63783_63787 = G__63804;
i__63784_63788 = G__63805;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__63806){
var map__63807 = p__63806;
var map__63807__$1 = ((((!((map__63807 == null)))?((((map__63807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63807):map__63807);
var name = cljs.core.get.call(null,map__63807__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__63807__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__63807__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__63807__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__63807__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__63807__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__63809){
var map__63810 = p__63809;
var map__63810__$1 = ((((!((map__63810 == null)))?((((map__63810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63810):map__63810);
var t = cljs.core.get.call(null,map__63810__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__63810__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__63810__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__63810__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__63810__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__63812_63830 = cljs.core.seq.call(null,protocols);
var chunk__63813_63831 = null;
var count__63814_63832 = (0);
var i__63815_63833 = (0);
while(true){
if((i__63815_63833 < count__63814_63832)){
var protocol_63834 = cljs.core._nth.call(null,chunk__63813_63831,i__63815_63833);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_63834)].join('')),"}");

var G__63835 = seq__63812_63830;
var G__63836 = chunk__63813_63831;
var G__63837 = count__63814_63832;
var G__63838 = (i__63815_63833 + (1));
seq__63812_63830 = G__63835;
chunk__63813_63831 = G__63836;
count__63814_63832 = G__63837;
i__63815_63833 = G__63838;
continue;
} else {
var temp__4657__auto___63839 = cljs.core.seq.call(null,seq__63812_63830);
if(temp__4657__auto___63839){
var seq__63812_63840__$1 = temp__4657__auto___63839;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63812_63840__$1)){
var c__7032__auto___63841 = cljs.core.chunk_first.call(null,seq__63812_63840__$1);
var G__63842 = cljs.core.chunk_rest.call(null,seq__63812_63840__$1);
var G__63843 = c__7032__auto___63841;
var G__63844 = cljs.core.count.call(null,c__7032__auto___63841);
var G__63845 = (0);
seq__63812_63830 = G__63842;
chunk__63813_63831 = G__63843;
count__63814_63832 = G__63844;
i__63815_63833 = G__63845;
continue;
} else {
var protocol_63846 = cljs.core.first.call(null,seq__63812_63840__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_63846)].join('')),"}");

var G__63847 = cljs.core.next.call(null,seq__63812_63840__$1);
var G__63848 = null;
var G__63849 = (0);
var G__63850 = (0);
seq__63812_63830 = G__63847;
chunk__63813_63831 = G__63848;
count__63814_63832 = G__63849;
i__63815_63833 = G__63850;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__63816_63851 = cljs.core.seq.call(null,fields__$1);
var chunk__63817_63852 = null;
var count__63818_63853 = (0);
var i__63819_63854 = (0);
while(true){
if((i__63819_63854 < count__63818_63853)){
var fld_63855 = cljs.core._nth.call(null,chunk__63817_63852,i__63819_63854);
cljs.compiler.emitln.call(null,"this.",fld_63855," = ",fld_63855,";");

var G__63856 = seq__63816_63851;
var G__63857 = chunk__63817_63852;
var G__63858 = count__63818_63853;
var G__63859 = (i__63819_63854 + (1));
seq__63816_63851 = G__63856;
chunk__63817_63852 = G__63857;
count__63818_63853 = G__63858;
i__63819_63854 = G__63859;
continue;
} else {
var temp__4657__auto___63860 = cljs.core.seq.call(null,seq__63816_63851);
if(temp__4657__auto___63860){
var seq__63816_63861__$1 = temp__4657__auto___63860;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63816_63861__$1)){
var c__7032__auto___63862 = cljs.core.chunk_first.call(null,seq__63816_63861__$1);
var G__63863 = cljs.core.chunk_rest.call(null,seq__63816_63861__$1);
var G__63864 = c__7032__auto___63862;
var G__63865 = cljs.core.count.call(null,c__7032__auto___63862);
var G__63866 = (0);
seq__63816_63851 = G__63863;
chunk__63817_63852 = G__63864;
count__63818_63853 = G__63865;
i__63819_63854 = G__63866;
continue;
} else {
var fld_63867 = cljs.core.first.call(null,seq__63816_63861__$1);
cljs.compiler.emitln.call(null,"this.",fld_63867," = ",fld_63867,";");

var G__63868 = cljs.core.next.call(null,seq__63816_63861__$1);
var G__63869 = null;
var G__63870 = (0);
var G__63871 = (0);
seq__63816_63851 = G__63868;
chunk__63817_63852 = G__63869;
count__63818_63853 = G__63870;
i__63819_63854 = G__63871;
continue;
}
} else {
}
}
break;
}

var seq__63820_63872 = cljs.core.seq.call(null,pmasks);
var chunk__63821_63873 = null;
var count__63822_63874 = (0);
var i__63823_63875 = (0);
while(true){
if((i__63823_63875 < count__63822_63874)){
var vec__63824_63876 = cljs.core._nth.call(null,chunk__63821_63873,i__63823_63875);
var pno_63877 = cljs.core.nth.call(null,vec__63824_63876,(0),null);
var pmask_63878 = cljs.core.nth.call(null,vec__63824_63876,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_63877,"$ = ",pmask_63878,";");

var G__63879 = seq__63820_63872;
var G__63880 = chunk__63821_63873;
var G__63881 = count__63822_63874;
var G__63882 = (i__63823_63875 + (1));
seq__63820_63872 = G__63879;
chunk__63821_63873 = G__63880;
count__63822_63874 = G__63881;
i__63823_63875 = G__63882;
continue;
} else {
var temp__4657__auto___63883 = cljs.core.seq.call(null,seq__63820_63872);
if(temp__4657__auto___63883){
var seq__63820_63884__$1 = temp__4657__auto___63883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63820_63884__$1)){
var c__7032__auto___63885 = cljs.core.chunk_first.call(null,seq__63820_63884__$1);
var G__63886 = cljs.core.chunk_rest.call(null,seq__63820_63884__$1);
var G__63887 = c__7032__auto___63885;
var G__63888 = cljs.core.count.call(null,c__7032__auto___63885);
var G__63889 = (0);
seq__63820_63872 = G__63886;
chunk__63821_63873 = G__63887;
count__63822_63874 = G__63888;
i__63823_63875 = G__63889;
continue;
} else {
var vec__63827_63890 = cljs.core.first.call(null,seq__63820_63884__$1);
var pno_63891 = cljs.core.nth.call(null,vec__63827_63890,(0),null);
var pmask_63892 = cljs.core.nth.call(null,vec__63827_63890,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_63891,"$ = ",pmask_63892,";");

var G__63893 = cljs.core.next.call(null,seq__63820_63884__$1);
var G__63894 = null;
var G__63895 = (0);
var G__63896 = (0);
seq__63820_63872 = G__63893;
chunk__63821_63873 = G__63894;
count__63822_63874 = G__63895;
i__63823_63875 = G__63896;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__63897){
var map__63898 = p__63897;
var map__63898__$1 = ((((!((map__63898 == null)))?((((map__63898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63898):map__63898);
var t = cljs.core.get.call(null,map__63898__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__63898__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__63898__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__63898__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__63898__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__63900_63918 = cljs.core.seq.call(null,protocols);
var chunk__63901_63919 = null;
var count__63902_63920 = (0);
var i__63903_63921 = (0);
while(true){
if((i__63903_63921 < count__63902_63920)){
var protocol_63922 = cljs.core._nth.call(null,chunk__63901_63919,i__63903_63921);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_63922)].join('')),"}");

var G__63923 = seq__63900_63918;
var G__63924 = chunk__63901_63919;
var G__63925 = count__63902_63920;
var G__63926 = (i__63903_63921 + (1));
seq__63900_63918 = G__63923;
chunk__63901_63919 = G__63924;
count__63902_63920 = G__63925;
i__63903_63921 = G__63926;
continue;
} else {
var temp__4657__auto___63927 = cljs.core.seq.call(null,seq__63900_63918);
if(temp__4657__auto___63927){
var seq__63900_63928__$1 = temp__4657__auto___63927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63900_63928__$1)){
var c__7032__auto___63929 = cljs.core.chunk_first.call(null,seq__63900_63928__$1);
var G__63930 = cljs.core.chunk_rest.call(null,seq__63900_63928__$1);
var G__63931 = c__7032__auto___63929;
var G__63932 = cljs.core.count.call(null,c__7032__auto___63929);
var G__63933 = (0);
seq__63900_63918 = G__63930;
chunk__63901_63919 = G__63931;
count__63902_63920 = G__63932;
i__63903_63921 = G__63933;
continue;
} else {
var protocol_63934 = cljs.core.first.call(null,seq__63900_63928__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_63934)].join('')),"}");

var G__63935 = cljs.core.next.call(null,seq__63900_63928__$1);
var G__63936 = null;
var G__63937 = (0);
var G__63938 = (0);
seq__63900_63918 = G__63935;
chunk__63901_63919 = G__63936;
count__63902_63920 = G__63937;
i__63903_63921 = G__63938;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__63904_63939 = cljs.core.seq.call(null,fields__$1);
var chunk__63905_63940 = null;
var count__63906_63941 = (0);
var i__63907_63942 = (0);
while(true){
if((i__63907_63942 < count__63906_63941)){
var fld_63943 = cljs.core._nth.call(null,chunk__63905_63940,i__63907_63942);
cljs.compiler.emitln.call(null,"this.",fld_63943," = ",fld_63943,";");

var G__63944 = seq__63904_63939;
var G__63945 = chunk__63905_63940;
var G__63946 = count__63906_63941;
var G__63947 = (i__63907_63942 + (1));
seq__63904_63939 = G__63944;
chunk__63905_63940 = G__63945;
count__63906_63941 = G__63946;
i__63907_63942 = G__63947;
continue;
} else {
var temp__4657__auto___63948 = cljs.core.seq.call(null,seq__63904_63939);
if(temp__4657__auto___63948){
var seq__63904_63949__$1 = temp__4657__auto___63948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63904_63949__$1)){
var c__7032__auto___63950 = cljs.core.chunk_first.call(null,seq__63904_63949__$1);
var G__63951 = cljs.core.chunk_rest.call(null,seq__63904_63949__$1);
var G__63952 = c__7032__auto___63950;
var G__63953 = cljs.core.count.call(null,c__7032__auto___63950);
var G__63954 = (0);
seq__63904_63939 = G__63951;
chunk__63905_63940 = G__63952;
count__63906_63941 = G__63953;
i__63907_63942 = G__63954;
continue;
} else {
var fld_63955 = cljs.core.first.call(null,seq__63904_63949__$1);
cljs.compiler.emitln.call(null,"this.",fld_63955," = ",fld_63955,";");

var G__63956 = cljs.core.next.call(null,seq__63904_63949__$1);
var G__63957 = null;
var G__63958 = (0);
var G__63959 = (0);
seq__63904_63939 = G__63956;
chunk__63905_63940 = G__63957;
count__63906_63941 = G__63958;
i__63907_63942 = G__63959;
continue;
}
} else {
}
}
break;
}

var seq__63908_63960 = cljs.core.seq.call(null,pmasks);
var chunk__63909_63961 = null;
var count__63910_63962 = (0);
var i__63911_63963 = (0);
while(true){
if((i__63911_63963 < count__63910_63962)){
var vec__63912_63964 = cljs.core._nth.call(null,chunk__63909_63961,i__63911_63963);
var pno_63965 = cljs.core.nth.call(null,vec__63912_63964,(0),null);
var pmask_63966 = cljs.core.nth.call(null,vec__63912_63964,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_63965,"$ = ",pmask_63966,";");

var G__63967 = seq__63908_63960;
var G__63968 = chunk__63909_63961;
var G__63969 = count__63910_63962;
var G__63970 = (i__63911_63963 + (1));
seq__63908_63960 = G__63967;
chunk__63909_63961 = G__63968;
count__63910_63962 = G__63969;
i__63911_63963 = G__63970;
continue;
} else {
var temp__4657__auto___63971 = cljs.core.seq.call(null,seq__63908_63960);
if(temp__4657__auto___63971){
var seq__63908_63972__$1 = temp__4657__auto___63971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63908_63972__$1)){
var c__7032__auto___63973 = cljs.core.chunk_first.call(null,seq__63908_63972__$1);
var G__63974 = cljs.core.chunk_rest.call(null,seq__63908_63972__$1);
var G__63975 = c__7032__auto___63973;
var G__63976 = cljs.core.count.call(null,c__7032__auto___63973);
var G__63977 = (0);
seq__63908_63960 = G__63974;
chunk__63909_63961 = G__63975;
count__63910_63962 = G__63976;
i__63911_63963 = G__63977;
continue;
} else {
var vec__63915_63978 = cljs.core.first.call(null,seq__63908_63972__$1);
var pno_63979 = cljs.core.nth.call(null,vec__63915_63978,(0),null);
var pmask_63980 = cljs.core.nth.call(null,vec__63915_63978,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_63979,"$ = ",pmask_63980,";");

var G__63981 = cljs.core.next.call(null,seq__63908_63972__$1);
var G__63982 = null;
var G__63983 = (0);
var G__63984 = (0);
seq__63908_63960 = G__63981;
chunk__63909_63961 = G__63982;
count__63910_63962 = G__63983;
i__63911_63963 = G__63984;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__63985){
var map__63986 = p__63985;
var map__63986__$1 = ((((!((map__63986 == null)))?((((map__63986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63986):map__63986);
var target = cljs.core.get.call(null,map__63986__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__63986__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__63986__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__63986__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__63986__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28066__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__63988){
var map__63989 = p__63988;
var map__63989__$1 = ((((!((map__63989 == null)))?((((map__63989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63989):map__63989);
var op = cljs.core.get.call(null,map__63989__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__63989__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__63989__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__63989__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__63989__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__6209__auto__ = code;
if(cljs.core.truth_(and__6209__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__6209__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__28066__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28066__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__64003 = cljs.core.seq.call(null,table);
var chunk__64004 = null;
var count__64005 = (0);
var i__64006 = (0);
while(true){
if((i__64006 < count__64005)){
var vec__64007 = cljs.core._nth.call(null,chunk__64004,i__64006);
var sym = cljs.core.nth.call(null,vec__64007,(0),null);
var value = cljs.core.nth.call(null,vec__64007,(1),null);
var ns_64013 = cljs.core.namespace.call(null,sym);
var name_64014 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__64015 = seq__64003;
var G__64016 = chunk__64004;
var G__64017 = count__64005;
var G__64018 = (i__64006 + (1));
seq__64003 = G__64015;
chunk__64004 = G__64016;
count__64005 = G__64017;
i__64006 = G__64018;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__64003);
if(temp__4657__auto__){
var seq__64003__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64003__$1)){
var c__7032__auto__ = cljs.core.chunk_first.call(null,seq__64003__$1);
var G__64019 = cljs.core.chunk_rest.call(null,seq__64003__$1);
var G__64020 = c__7032__auto__;
var G__64021 = cljs.core.count.call(null,c__7032__auto__);
var G__64022 = (0);
seq__64003 = G__64019;
chunk__64004 = G__64020;
count__64005 = G__64021;
i__64006 = G__64022;
continue;
} else {
var vec__64010 = cljs.core.first.call(null,seq__64003__$1);
var sym = cljs.core.nth.call(null,vec__64010,(0),null);
var value = cljs.core.nth.call(null,vec__64010,(1),null);
var ns_64023 = cljs.core.namespace.call(null,sym);
var name_64024 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__64025 = cljs.core.next.call(null,seq__64003__$1);
var G__64026 = null;
var G__64027 = (0);
var G__64028 = (0);
seq__64003 = G__64025;
chunk__64004 = G__64026;
count__64005 = G__64027;
i__64006 = G__64028;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map