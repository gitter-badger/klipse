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
var map__26305 = s;
var map__26305__$1 = ((((!((map__26305 == null)))?((((map__26305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26305):map__26305);
var name = cljs.core.get.call(null,map__26305__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__26305__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__26308 = info;
var map__26309 = G__26308;
var map__26309__$1 = ((((!((map__26309 == null)))?((((map__26309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26309):map__26309);
var shadow = cljs.core.get.call(null,map__26309__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__26308__$1 = G__26308;
while(true){
var d__$2 = d__$1;
var map__26311 = G__26308__$1;
var map__26311__$1 = ((((!((map__26311 == null)))?((((map__26311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26311):map__26311);
var shadow__$1 = cljs.core.get.call(null,map__26311__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__26313 = (d__$2 + (1));
var G__26314 = shadow__$1;
d__$1 = G__26313;
G__26308__$1 = G__26314;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__26315){
var map__26320 = p__26315;
var map__26320__$1 = ((((!((map__26320 == null)))?((((map__26320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26320):map__26320);
var name_var = map__26320__$1;
var name = cljs.core.get.call(null,map__26320__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__26320__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__26322 = info;
var map__26322__$1 = ((((!((map__26322 == null)))?((((map__26322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26322):map__26322);
var ns = cljs.core.get.call(null,map__26322__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__26322__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args26324 = [];
var len__23690__auto___26327 = arguments.length;
var i__23691__auto___26328 = (0);
while(true){
if((i__23691__auto___26328 < len__23690__auto___26327)){
args26324.push((arguments[i__23691__auto___26328]));

var G__26329 = (i__23691__auto___26328 + (1));
i__23691__auto___26328 = G__26329;
continue;
} else {
}
break;
}

var G__26326 = args26324.length;
switch (G__26326) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26324.length)].join('')));

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
var G__26332 = cp;
switch (G__26332) {
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
var seq__26338_26342 = cljs.core.seq.call(null,s);
var chunk__26339_26343 = null;
var count__26340_26344 = (0);
var i__26341_26345 = (0);
while(true){
if((i__26341_26345 < count__26340_26344)){
var c_26346 = cljs.core._nth.call(null,chunk__26339_26343,i__26341_26345);
sb.append(cljs.compiler.escape_char.call(null,c_26346));

var G__26347 = seq__26338_26342;
var G__26348 = chunk__26339_26343;
var G__26349 = count__26340_26344;
var G__26350 = (i__26341_26345 + (1));
seq__26338_26342 = G__26347;
chunk__26339_26343 = G__26348;
count__26340_26344 = G__26349;
i__26341_26345 = G__26350;
continue;
} else {
var temp__4657__auto___26351 = cljs.core.seq.call(null,seq__26338_26342);
if(temp__4657__auto___26351){
var seq__26338_26352__$1 = temp__4657__auto___26351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26338_26352__$1)){
var c__23426__auto___26353 = cljs.core.chunk_first.call(null,seq__26338_26352__$1);
var G__26354 = cljs.core.chunk_rest.call(null,seq__26338_26352__$1);
var G__26355 = c__23426__auto___26353;
var G__26356 = cljs.core.count.call(null,c__23426__auto___26353);
var G__26357 = (0);
seq__26338_26342 = G__26354;
chunk__26339_26343 = G__26355;
count__26340_26344 = G__26356;
i__26341_26345 = G__26357;
continue;
} else {
var c_26358 = cljs.core.first.call(null,seq__26338_26352__$1);
sb.append(cljs.compiler.escape_char.call(null,c_26358));

var G__26359 = cljs.core.next.call(null,seq__26338_26352__$1);
var G__26360 = null;
var G__26361 = (0);
var G__26362 = (0);
seq__26338_26342 = G__26359;
chunk__26339_26343 = G__26360;
count__26340_26344 = G__26361;
i__26341_26345 = G__26362;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__23540__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23541__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23542__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23543__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23544__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23544__auto__,method_table__23540__auto__,prefer_table__23541__auto__,method_cache__23542__auto__,cached_hierarchy__23543__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__24572__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__24572__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__26368_26373 = ast;
var map__26368_26374__$1 = ((((!((map__26368_26373 == null)))?((((map__26368_26373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26368_26373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26368_26373):map__26368_26373);
var env_26375 = cljs.core.get.call(null,map__26368_26374__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_26375))){
var map__26370_26376 = env_26375;
var map__26370_26377__$1 = ((((!((map__26370_26376 == null)))?((((map__26370_26376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26370_26376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26370_26376):map__26370_26376);
var line_26378 = cljs.core.get.call(null,map__26370_26377__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_26379 = cljs.core.get.call(null,map__26370_26377__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__26370_26376,map__26370_26377__$1,line_26378,column_26379,map__26368_26373,map__26368_26374__$1,env_26375,val__24572__auto__){
return (function (m){
var minfo = (function (){var G__26372 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__26372,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__26372;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_26378 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__26370_26376,map__26370_26377__$1,line_26378,column_26379,map__26368_26373,map__26368_26374__$1,env_26375,val__24572__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_26379)?(column_26379 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__26370_26376,map__26370_26377__$1,line_26378,column_26379,map__26368_26373,map__26368_26374__$1,env_26375,val__24572__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__26370_26376,map__26370_26377__$1,line_26378,column_26379,map__26368_26373,map__26368_26374__$1,env_26375,val__24572__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__26370_26376,map__26370_26377__$1,line_26378,column_26379,map__26368_26373,map__26368_26374__$1,env_26375,val__24572__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__26370_26376,map__26370_26377__$1,line_26378,column_26379,map__26368_26373,map__26368_26374__$1,env_26375,val__24572__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__24572__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__23697__auto__ = [];
var len__23690__auto___26386 = arguments.length;
var i__23691__auto___26387 = (0);
while(true){
if((i__23691__auto___26387 < len__23690__auto___26386)){
args__23697__auto__.push((arguments[i__23691__auto___26387]));

var G__26388 = (i__23691__auto___26387 + (1));
i__23691__auto___26387 = G__26388;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__26382_26389 = cljs.core.seq.call(null,xs);
var chunk__26383_26390 = null;
var count__26384_26391 = (0);
var i__26385_26392 = (0);
while(true){
if((i__26385_26392 < count__26384_26391)){
var x_26393 = cljs.core._nth.call(null,chunk__26383_26390,i__26385_26392);
if((x_26393 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_26393)){
cljs.compiler.emit.call(null,x_26393);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_26393)){
cljs.core.apply.call(null,cljs.compiler.emits,x_26393);
} else {
if(goog.isFunction(x_26393)){
x_26393.call(null);
} else {
var s_26394 = cljs.core.print_str.call(null,x_26393);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__26382_26389,chunk__26383_26390,count__26384_26391,i__26385_26392,s_26394,x_26393){
return (function (p1__26380_SHARP_){
return (p1__26380_SHARP_ + cljs.core.count.call(null,s_26394));
});})(seq__26382_26389,chunk__26383_26390,count__26384_26391,i__26385_26392,s_26394,x_26393))
);
}

cljs.core.print.call(null,s_26394);

}
}
}
}

var G__26395 = seq__26382_26389;
var G__26396 = chunk__26383_26390;
var G__26397 = count__26384_26391;
var G__26398 = (i__26385_26392 + (1));
seq__26382_26389 = G__26395;
chunk__26383_26390 = G__26396;
count__26384_26391 = G__26397;
i__26385_26392 = G__26398;
continue;
} else {
var temp__4657__auto___26399 = cljs.core.seq.call(null,seq__26382_26389);
if(temp__4657__auto___26399){
var seq__26382_26400__$1 = temp__4657__auto___26399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26382_26400__$1)){
var c__23426__auto___26401 = cljs.core.chunk_first.call(null,seq__26382_26400__$1);
var G__26402 = cljs.core.chunk_rest.call(null,seq__26382_26400__$1);
var G__26403 = c__23426__auto___26401;
var G__26404 = cljs.core.count.call(null,c__23426__auto___26401);
var G__26405 = (0);
seq__26382_26389 = G__26402;
chunk__26383_26390 = G__26403;
count__26384_26391 = G__26404;
i__26385_26392 = G__26405;
continue;
} else {
var x_26406 = cljs.core.first.call(null,seq__26382_26400__$1);
if((x_26406 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_26406)){
cljs.compiler.emit.call(null,x_26406);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_26406)){
cljs.core.apply.call(null,cljs.compiler.emits,x_26406);
} else {
if(goog.isFunction(x_26406)){
x_26406.call(null);
} else {
var s_26407 = cljs.core.print_str.call(null,x_26406);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__26382_26389,chunk__26383_26390,count__26384_26391,i__26385_26392,s_26407,x_26406,seq__26382_26400__$1,temp__4657__auto___26399){
return (function (p1__26380_SHARP_){
return (p1__26380_SHARP_ + cljs.core.count.call(null,s_26407));
});})(seq__26382_26389,chunk__26383_26390,count__26384_26391,i__26385_26392,s_26407,x_26406,seq__26382_26400__$1,temp__4657__auto___26399))
);
}

cljs.core.print.call(null,s_26407);

}
}
}
}

var G__26408 = cljs.core.next.call(null,seq__26382_26400__$1);
var G__26409 = null;
var G__26410 = (0);
var G__26411 = (0);
seq__26382_26389 = G__26408;
chunk__26383_26390 = G__26409;
count__26384_26391 = G__26410;
i__26385_26392 = G__26411;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq26381){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26381));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__23697__auto__ = [];
var len__23690__auto___26416 = arguments.length;
var i__23691__auto___26417 = (0);
while(true){
if((i__23691__auto___26417 < len__23690__auto___26416)){
args__23697__auto__.push((arguments[i__23691__auto___26417]));

var G__26418 = (i__23691__auto___26417 + (1));
i__23691__auto___26417 = G__26418;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__26413){
var map__26414 = p__26413;
var map__26414__$1 = ((((!((map__26414 == null)))?((((map__26414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26414):map__26414);
var m = map__26414__$1;
var gen_line = cljs.core.get.call(null,map__26414__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq26412){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26412));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__23601__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_26421_26423 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_26422_26424 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_26421_26423,_STAR_print_fn_STAR_26422_26424,sb__23601__auto__){
return (function (x__23602__auto__){
return sb__23601__auto__.append(x__23602__auto__);
});})(_STAR_print_newline_STAR_26421_26423,_STAR_print_fn_STAR_26422_26424,sb__23601__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26422_26424;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26421_26423;
}
return [cljs.core.str(sb__23601__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__23540__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23541__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23542__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23543__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23544__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23544__auto__,method_table__23540__auto__,prefer_table__23541__auto__,method_cache__23542__auto__,cached_hierarchy__23543__auto__));
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
var vec__26425 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__26425,(0),null);
var flags = cljs.core.nth.call(null,vec__26425,(1),null);
var pattern = cljs.core.nth.call(null,vec__26425,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__26429){
var map__26430 = p__26429;
var map__26430__$1 = ((((!((map__26430 == null)))?((((map__26430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26430):map__26430);
var arg = map__26430__$1;
var info = cljs.core.get.call(null,map__26430__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__26430__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__26430__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__22615__auto__ = js_module_name;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
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
var env__26289__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__26432 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__26432);
} else {
return G__26432;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__26433){
var map__26434 = p__26433;
var map__26434__$1 = ((((!((map__26434 == null)))?((((map__26434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26434):map__26434);
var arg = map__26434__$1;
var env = cljs.core.get.call(null,map__26434__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__26434__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__26434__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__26434__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__26436 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__26436__$1 = ((((!((map__26436 == null)))?((((map__26436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26436):map__26436);
var name = cljs.core.get.call(null,map__26436__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__26289__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__26438){
var map__26439 = p__26438;
var map__26439__$1 = ((((!((map__26439 == null)))?((((map__26439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26439):map__26439);
var expr = cljs.core.get.call(null,map__26439__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__26439__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__26439__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__26289__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__26441_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__26441_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__26442){
var map__26443 = p__26442;
var map__26443__$1 = ((((!((map__26443 == null)))?((((map__26443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26443):map__26443);
var env = cljs.core.get.call(null,map__26443__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__26443__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__26443__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__26289__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__26445){
var map__26446 = p__26445;
var map__26446__$1 = ((((!((map__26446 == null)))?((((map__26446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26446):map__26446);
var items = cljs.core.get.call(null,map__26446__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__26446__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__26289__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__26448){
var map__26449 = p__26448;
var map__26449__$1 = ((((!((map__26449 == null)))?((((map__26449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26449):map__26449);
var items = cljs.core.get.call(null,map__26449__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__26449__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__26289__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_26451 = cljs.core.count.call(null,items);
if((cnt_26451 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_26451,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__26452_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__26452_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__26453){
var map__26454 = p__26453;
var map__26454__$1 = ((((!((map__26454 == null)))?((((map__26454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26454):map__26454);
var items = cljs.core.get.call(null,map__26454__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__26454__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__26289__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__26456){
var map__26457 = p__26456;
var map__26457__$1 = ((((!((map__26457 == null)))?((((map__26457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26457):map__26457);
var items = cljs.core.get.call(null,map__26457__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__26457__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__26457__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__26289__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4657__auto___26475 = cljs.core.seq.call(null,items);
if(temp__4657__auto___26475){
var items_26476__$1 = temp__4657__auto___26475;
var vec__26459_26477 = items_26476__$1;
var seq__26460_26478 = cljs.core.seq.call(null,vec__26459_26477);
var first__26461_26479 = cljs.core.first.call(null,seq__26460_26478);
var seq__26460_26480__$1 = cljs.core.next.call(null,seq__26460_26478);
var vec__26462_26481 = first__26461_26479;
var k_26482 = cljs.core.nth.call(null,vec__26462_26481,(0),null);
var v_26483 = cljs.core.nth.call(null,vec__26462_26481,(1),null);
var r_26484 = seq__26460_26480__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_26482),"\": ",v_26483);

var seq__26465_26485 = cljs.core.seq.call(null,r_26484);
var chunk__26466_26486 = null;
var count__26467_26487 = (0);
var i__26468_26488 = (0);
while(true){
if((i__26468_26488 < count__26467_26487)){
var vec__26469_26489 = cljs.core._nth.call(null,chunk__26466_26486,i__26468_26488);
var k_26490__$1 = cljs.core.nth.call(null,vec__26469_26489,(0),null);
var v_26491__$1 = cljs.core.nth.call(null,vec__26469_26489,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_26490__$1),"\": ",v_26491__$1);

var G__26492 = seq__26465_26485;
var G__26493 = chunk__26466_26486;
var G__26494 = count__26467_26487;
var G__26495 = (i__26468_26488 + (1));
seq__26465_26485 = G__26492;
chunk__26466_26486 = G__26493;
count__26467_26487 = G__26494;
i__26468_26488 = G__26495;
continue;
} else {
var temp__4657__auto___26496__$1 = cljs.core.seq.call(null,seq__26465_26485);
if(temp__4657__auto___26496__$1){
var seq__26465_26497__$1 = temp__4657__auto___26496__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26465_26497__$1)){
var c__23426__auto___26498 = cljs.core.chunk_first.call(null,seq__26465_26497__$1);
var G__26499 = cljs.core.chunk_rest.call(null,seq__26465_26497__$1);
var G__26500 = c__23426__auto___26498;
var G__26501 = cljs.core.count.call(null,c__23426__auto___26498);
var G__26502 = (0);
seq__26465_26485 = G__26499;
chunk__26466_26486 = G__26500;
count__26467_26487 = G__26501;
i__26468_26488 = G__26502;
continue;
} else {
var vec__26472_26503 = cljs.core.first.call(null,seq__26465_26497__$1);
var k_26504__$1 = cljs.core.nth.call(null,vec__26472_26503,(0),null);
var v_26505__$1 = cljs.core.nth.call(null,vec__26472_26503,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_26504__$1),"\": ",v_26505__$1);

var G__26506 = cljs.core.next.call(null,seq__26465_26497__$1);
var G__26507 = null;
var G__26508 = (0);
var G__26509 = (0);
seq__26465_26485 = G__26506;
chunk__26466_26486 = G__26507;
count__26467_26487 = G__26508;
i__26468_26488 = G__26509;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__26510){
var map__26511 = p__26510;
var map__26511__$1 = ((((!((map__26511 == null)))?((((map__26511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26511):map__26511);
var form = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__26289__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__26513){
var map__26516 = p__26513;
var map__26516__$1 = ((((!((map__26516 == null)))?((((map__26516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26516):map__26516);
var op = cljs.core.get.call(null,map__26516__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__26516__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__22603__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__22603__auto__){
var and__22603__auto____$1 = form;
if(cljs.core.truth_(and__22603__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__22603__auto____$1;
}
} else {
return and__22603__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__26518){
var map__26521 = p__26518;
var map__26521__$1 = ((((!((map__26521 == null)))?((((map__26521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26521):map__26521);
var op = cljs.core.get.call(null,map__26521__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__26521__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__22615__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__26523){
var map__26524 = p__26523;
var map__26524__$1 = ((((!((map__26524 == null)))?((((map__26524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26524):map__26524);
var test = cljs.core.get.call(null,map__26524__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__26524__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__26524__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__26524__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__26524__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__22615__auto__ = unchecked;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__26526){
var map__26527 = p__26526;
var map__26527__$1 = ((((!((map__26527 == null)))?((((map__26527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26527):map__26527);
var v = cljs.core.get.call(null,map__26527__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__26527__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__26527__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__26527__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__26527__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__26529_26547 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__26530_26548 = null;
var count__26531_26549 = (0);
var i__26532_26550 = (0);
while(true){
if((i__26532_26550 < count__26531_26549)){
var vec__26533_26551 = cljs.core._nth.call(null,chunk__26530_26548,i__26532_26550);
var ts_26552 = cljs.core.nth.call(null,vec__26533_26551,(0),null);
var then_26553 = cljs.core.nth.call(null,vec__26533_26551,(1),null);
var seq__26536_26554 = cljs.core.seq.call(null,ts_26552);
var chunk__26537_26555 = null;
var count__26538_26556 = (0);
var i__26539_26557 = (0);
while(true){
if((i__26539_26557 < count__26538_26556)){
var test_26558 = cljs.core._nth.call(null,chunk__26537_26555,i__26539_26557);
cljs.compiler.emitln.call(null,"case ",test_26558,":");

var G__26559 = seq__26536_26554;
var G__26560 = chunk__26537_26555;
var G__26561 = count__26538_26556;
var G__26562 = (i__26539_26557 + (1));
seq__26536_26554 = G__26559;
chunk__26537_26555 = G__26560;
count__26538_26556 = G__26561;
i__26539_26557 = G__26562;
continue;
} else {
var temp__4657__auto___26563 = cljs.core.seq.call(null,seq__26536_26554);
if(temp__4657__auto___26563){
var seq__26536_26564__$1 = temp__4657__auto___26563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26536_26564__$1)){
var c__23426__auto___26565 = cljs.core.chunk_first.call(null,seq__26536_26564__$1);
var G__26566 = cljs.core.chunk_rest.call(null,seq__26536_26564__$1);
var G__26567 = c__23426__auto___26565;
var G__26568 = cljs.core.count.call(null,c__23426__auto___26565);
var G__26569 = (0);
seq__26536_26554 = G__26566;
chunk__26537_26555 = G__26567;
count__26538_26556 = G__26568;
i__26539_26557 = G__26569;
continue;
} else {
var test_26570 = cljs.core.first.call(null,seq__26536_26564__$1);
cljs.compiler.emitln.call(null,"case ",test_26570,":");

var G__26571 = cljs.core.next.call(null,seq__26536_26564__$1);
var G__26572 = null;
var G__26573 = (0);
var G__26574 = (0);
seq__26536_26554 = G__26571;
chunk__26537_26555 = G__26572;
count__26538_26556 = G__26573;
i__26539_26557 = G__26574;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_26553);
} else {
cljs.compiler.emitln.call(null,then_26553);
}

cljs.compiler.emitln.call(null,"break;");

var G__26575 = seq__26529_26547;
var G__26576 = chunk__26530_26548;
var G__26577 = count__26531_26549;
var G__26578 = (i__26532_26550 + (1));
seq__26529_26547 = G__26575;
chunk__26530_26548 = G__26576;
count__26531_26549 = G__26577;
i__26532_26550 = G__26578;
continue;
} else {
var temp__4657__auto___26579 = cljs.core.seq.call(null,seq__26529_26547);
if(temp__4657__auto___26579){
var seq__26529_26580__$1 = temp__4657__auto___26579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26529_26580__$1)){
var c__23426__auto___26581 = cljs.core.chunk_first.call(null,seq__26529_26580__$1);
var G__26582 = cljs.core.chunk_rest.call(null,seq__26529_26580__$1);
var G__26583 = c__23426__auto___26581;
var G__26584 = cljs.core.count.call(null,c__23426__auto___26581);
var G__26585 = (0);
seq__26529_26547 = G__26582;
chunk__26530_26548 = G__26583;
count__26531_26549 = G__26584;
i__26532_26550 = G__26585;
continue;
} else {
var vec__26540_26586 = cljs.core.first.call(null,seq__26529_26580__$1);
var ts_26587 = cljs.core.nth.call(null,vec__26540_26586,(0),null);
var then_26588 = cljs.core.nth.call(null,vec__26540_26586,(1),null);
var seq__26543_26589 = cljs.core.seq.call(null,ts_26587);
var chunk__26544_26590 = null;
var count__26545_26591 = (0);
var i__26546_26592 = (0);
while(true){
if((i__26546_26592 < count__26545_26591)){
var test_26593 = cljs.core._nth.call(null,chunk__26544_26590,i__26546_26592);
cljs.compiler.emitln.call(null,"case ",test_26593,":");

var G__26594 = seq__26543_26589;
var G__26595 = chunk__26544_26590;
var G__26596 = count__26545_26591;
var G__26597 = (i__26546_26592 + (1));
seq__26543_26589 = G__26594;
chunk__26544_26590 = G__26595;
count__26545_26591 = G__26596;
i__26546_26592 = G__26597;
continue;
} else {
var temp__4657__auto___26598__$1 = cljs.core.seq.call(null,seq__26543_26589);
if(temp__4657__auto___26598__$1){
var seq__26543_26599__$1 = temp__4657__auto___26598__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26543_26599__$1)){
var c__23426__auto___26600 = cljs.core.chunk_first.call(null,seq__26543_26599__$1);
var G__26601 = cljs.core.chunk_rest.call(null,seq__26543_26599__$1);
var G__26602 = c__23426__auto___26600;
var G__26603 = cljs.core.count.call(null,c__23426__auto___26600);
var G__26604 = (0);
seq__26543_26589 = G__26601;
chunk__26544_26590 = G__26602;
count__26545_26591 = G__26603;
i__26546_26592 = G__26604;
continue;
} else {
var test_26605 = cljs.core.first.call(null,seq__26543_26599__$1);
cljs.compiler.emitln.call(null,"case ",test_26605,":");

var G__26606 = cljs.core.next.call(null,seq__26543_26599__$1);
var G__26607 = null;
var G__26608 = (0);
var G__26609 = (0);
seq__26543_26589 = G__26606;
chunk__26544_26590 = G__26607;
count__26545_26591 = G__26608;
i__26546_26592 = G__26609;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_26588);
} else {
cljs.compiler.emitln.call(null,then_26588);
}

cljs.compiler.emitln.call(null,"break;");

var G__26610 = cljs.core.next.call(null,seq__26529_26580__$1);
var G__26611 = null;
var G__26612 = (0);
var G__26613 = (0);
seq__26529_26547 = G__26610;
chunk__26530_26548 = G__26611;
count__26531_26549 = G__26612;
i__26532_26550 = G__26613;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__26614){
var map__26615 = p__26614;
var map__26615__$1 = ((((!((map__26615 == null)))?((((map__26615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26615):map__26615);
var throw$ = cljs.core.get.call(null,map__26615__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__26615__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__26622 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__26622,(0),null);
var rstr = cljs.core.nth.call(null,vec__26622,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__26622,fstr,rstr,ret_t,axstr){
return (function (p1__26617_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__26617_SHARP_);
});})(idx,vec__26622,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__26625 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__26625),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__26625;
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
return (function (p1__26626_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__26626_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__26633 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__26634 = cljs.core.seq.call(null,vec__26633);
var first__26635 = cljs.core.first.call(null,seq__26634);
var seq__26634__$1 = cljs.core.next.call(null,seq__26634);
var p = first__26635;
var first__26635__$1 = cljs.core.first.call(null,seq__26634__$1);
var seq__26634__$2 = cljs.core.next.call(null,seq__26634__$1);
var ts = first__26635__$1;
var first__26635__$2 = cljs.core.first.call(null,seq__26634__$2);
var seq__26634__$3 = cljs.core.next.call(null,seq__26634__$2);
var n = first__26635__$2;
var xs = seq__26634__$3;
if(cljs.core.truth_((function (){var and__22603__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__22603__auto__){
var and__22603__auto____$1 = ts;
if(cljs.core.truth_(and__22603__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__22603__auto____$1;
}
} else {
return and__22603__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__26636 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__26637 = cljs.core.seq.call(null,vec__26636);
var first__26638 = cljs.core.first.call(null,seq__26637);
var seq__26637__$1 = cljs.core.next.call(null,seq__26637);
var p = first__26638;
var first__26638__$1 = cljs.core.first.call(null,seq__26637__$1);
var seq__26637__$2 = cljs.core.next.call(null,seq__26637__$1);
var ts = first__26638__$1;
var xs = seq__26637__$2;
if(cljs.core.truth_((function (){var and__22603__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__22603__auto__){
var and__22603__auto____$1 = ts;
if(cljs.core.truth_(and__22603__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__22603__auto____$1;
}
} else {
return and__22603__auto__;
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
var args26640 = [];
var len__23690__auto___26675 = arguments.length;
var i__23691__auto___26676 = (0);
while(true){
if((i__23691__auto___26676 < len__23690__auto___26675)){
args26640.push((arguments[i__23691__auto___26676]));

var G__26677 = (i__23691__auto___26676 + (1));
i__23691__auto___26676 = G__26677;
continue;
} else {
}
break;
}

var G__26642 = args26640.length;
switch (G__26642) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26640.length)].join('')));

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
var vec__26664 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__26639_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__26639_SHARP_);
} else {
return p1__26639_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__26665 = cljs.core.seq.call(null,vec__26664);
var first__26666 = cljs.core.first.call(null,seq__26665);
var seq__26665__$1 = cljs.core.next.call(null,seq__26665);
var x = first__26666;
var ys = seq__26665__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__26667 = cljs.core.seq.call(null,ys);
var chunk__26668 = null;
var count__26669 = (0);
var i__26670 = (0);
while(true){
if((i__26670 < count__26669)){
var next_line = cljs.core._nth.call(null,chunk__26668,i__26670);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__26679 = seq__26667;
var G__26680 = chunk__26668;
var G__26681 = count__26669;
var G__26682 = (i__26670 + (1));
seq__26667 = G__26679;
chunk__26668 = G__26680;
count__26669 = G__26681;
i__26670 = G__26682;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26667);
if(temp__4657__auto__){
var seq__26667__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26667__$1)){
var c__23426__auto__ = cljs.core.chunk_first.call(null,seq__26667__$1);
var G__26683 = cljs.core.chunk_rest.call(null,seq__26667__$1);
var G__26684 = c__23426__auto__;
var G__26685 = cljs.core.count.call(null,c__23426__auto__);
var G__26686 = (0);
seq__26667 = G__26683;
chunk__26668 = G__26684;
count__26669 = G__26685;
i__26670 = G__26686;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__26667__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__26687 = cljs.core.next.call(null,seq__26667__$1);
var G__26688 = null;
var G__26689 = (0);
var G__26690 = (0);
seq__26667 = G__26687;
chunk__26668 = G__26688;
count__26669 = G__26689;
i__26670 = G__26690;
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

var seq__26671_26691 = cljs.core.seq.call(null,docs__$2);
var chunk__26672_26692 = null;
var count__26673_26693 = (0);
var i__26674_26694 = (0);
while(true){
if((i__26674_26694 < count__26673_26693)){
var e_26695 = cljs.core._nth.call(null,chunk__26672_26692,i__26674_26694);
if(cljs.core.truth_(e_26695)){
print_comment_lines.call(null,e_26695);
} else {
}

var G__26696 = seq__26671_26691;
var G__26697 = chunk__26672_26692;
var G__26698 = count__26673_26693;
var G__26699 = (i__26674_26694 + (1));
seq__26671_26691 = G__26696;
chunk__26672_26692 = G__26697;
count__26673_26693 = G__26698;
i__26674_26694 = G__26699;
continue;
} else {
var temp__4657__auto___26700 = cljs.core.seq.call(null,seq__26671_26691);
if(temp__4657__auto___26700){
var seq__26671_26701__$1 = temp__4657__auto___26700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26671_26701__$1)){
var c__23426__auto___26702 = cljs.core.chunk_first.call(null,seq__26671_26701__$1);
var G__26703 = cljs.core.chunk_rest.call(null,seq__26671_26701__$1);
var G__26704 = c__23426__auto___26702;
var G__26705 = cljs.core.count.call(null,c__23426__auto___26702);
var G__26706 = (0);
seq__26671_26691 = G__26703;
chunk__26672_26692 = G__26704;
count__26673_26693 = G__26705;
i__26674_26694 = G__26706;
continue;
} else {
var e_26707 = cljs.core.first.call(null,seq__26671_26701__$1);
if(cljs.core.truth_(e_26707)){
print_comment_lines.call(null,e_26707);
} else {
}

var G__26708 = cljs.core.next.call(null,seq__26671_26701__$1);
var G__26709 = null;
var G__26710 = (0);
var G__26711 = (0);
seq__26671_26691 = G__26708;
chunk__26672_26692 = G__26709;
count__26673_26693 = G__26710;
i__26674_26694 = G__26711;
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
var and__22603__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__26713_SHARP_){
return goog.string.startsWith(p1__26713_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__22603__auto__)){
var and__22603__auto____$1 = opts;
if(cljs.core.truth_(and__22603__auto____$1)){
var and__22603__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__22603__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__22603__auto____$2;
}
} else {
return and__22603__auto____$1;
}
} else {
return and__22603__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__26714){
var map__26715 = p__26714;
var map__26715__$1 = ((((!((map__26715 == null)))?((((map__26715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26715):map__26715);
var name = cljs.core.get.call(null,map__26715__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__26715__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__26715__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__26715__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__26715__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__26715__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__26715__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__26715__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__26715__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__22615__auto__ = init;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
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

if(cljs.core.truth_((function (){var and__22603__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__22603__auto__)){
return test;
} else {
return and__22603__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__26717){
var map__26738 = p__26717;
var map__26738__$1 = ((((!((map__26738 == null)))?((((map__26738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26738):map__26738);
var name = cljs.core.get.call(null,map__26738__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__26738__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__26738__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__26740_26758 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__26741_26759 = null;
var count__26742_26760 = (0);
var i__26743_26761 = (0);
while(true){
if((i__26743_26761 < count__26742_26760)){
var vec__26744_26762 = cljs.core._nth.call(null,chunk__26741_26759,i__26743_26761);
var i_26763 = cljs.core.nth.call(null,vec__26744_26762,(0),null);
var param_26764 = cljs.core.nth.call(null,vec__26744_26762,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_26764);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__26765 = seq__26740_26758;
var G__26766 = chunk__26741_26759;
var G__26767 = count__26742_26760;
var G__26768 = (i__26743_26761 + (1));
seq__26740_26758 = G__26765;
chunk__26741_26759 = G__26766;
count__26742_26760 = G__26767;
i__26743_26761 = G__26768;
continue;
} else {
var temp__4657__auto___26769 = cljs.core.seq.call(null,seq__26740_26758);
if(temp__4657__auto___26769){
var seq__26740_26770__$1 = temp__4657__auto___26769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26740_26770__$1)){
var c__23426__auto___26771 = cljs.core.chunk_first.call(null,seq__26740_26770__$1);
var G__26772 = cljs.core.chunk_rest.call(null,seq__26740_26770__$1);
var G__26773 = c__23426__auto___26771;
var G__26774 = cljs.core.count.call(null,c__23426__auto___26771);
var G__26775 = (0);
seq__26740_26758 = G__26772;
chunk__26741_26759 = G__26773;
count__26742_26760 = G__26774;
i__26743_26761 = G__26775;
continue;
} else {
var vec__26747_26776 = cljs.core.first.call(null,seq__26740_26770__$1);
var i_26777 = cljs.core.nth.call(null,vec__26747_26776,(0),null);
var param_26778 = cljs.core.nth.call(null,vec__26747_26776,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_26778);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__26779 = cljs.core.next.call(null,seq__26740_26770__$1);
var G__26780 = null;
var G__26781 = (0);
var G__26782 = (0);
seq__26740_26758 = G__26779;
chunk__26741_26759 = G__26780;
count__26742_26760 = G__26781;
i__26743_26761 = G__26782;
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

var seq__26750_26783 = cljs.core.seq.call(null,params);
var chunk__26751_26784 = null;
var count__26752_26785 = (0);
var i__26753_26786 = (0);
while(true){
if((i__26753_26786 < count__26752_26785)){
var param_26787 = cljs.core._nth.call(null,chunk__26751_26784,i__26753_26786);
cljs.compiler.emit.call(null,param_26787);

if(cljs.core._EQ_.call(null,param_26787,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__26788 = seq__26750_26783;
var G__26789 = chunk__26751_26784;
var G__26790 = count__26752_26785;
var G__26791 = (i__26753_26786 + (1));
seq__26750_26783 = G__26788;
chunk__26751_26784 = G__26789;
count__26752_26785 = G__26790;
i__26753_26786 = G__26791;
continue;
} else {
var temp__4657__auto___26792 = cljs.core.seq.call(null,seq__26750_26783);
if(temp__4657__auto___26792){
var seq__26750_26793__$1 = temp__4657__auto___26792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26750_26793__$1)){
var c__23426__auto___26794 = cljs.core.chunk_first.call(null,seq__26750_26793__$1);
var G__26795 = cljs.core.chunk_rest.call(null,seq__26750_26793__$1);
var G__26796 = c__23426__auto___26794;
var G__26797 = cljs.core.count.call(null,c__23426__auto___26794);
var G__26798 = (0);
seq__26750_26783 = G__26795;
chunk__26751_26784 = G__26796;
count__26752_26785 = G__26797;
i__26753_26786 = G__26798;
continue;
} else {
var param_26799 = cljs.core.first.call(null,seq__26750_26793__$1);
cljs.compiler.emit.call(null,param_26799);

if(cljs.core._EQ_.call(null,param_26799,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__26800 = cljs.core.next.call(null,seq__26750_26793__$1);
var G__26801 = null;
var G__26802 = (0);
var G__26803 = (0);
seq__26750_26783 = G__26800;
chunk__26751_26784 = G__26801;
count__26752_26785 = G__26802;
i__26753_26786 = G__26803;
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

var seq__26754_26804 = cljs.core.seq.call(null,params);
var chunk__26755_26805 = null;
var count__26756_26806 = (0);
var i__26757_26807 = (0);
while(true){
if((i__26757_26807 < count__26756_26806)){
var param_26808 = cljs.core._nth.call(null,chunk__26755_26805,i__26757_26807);
cljs.compiler.emit.call(null,param_26808);

if(cljs.core._EQ_.call(null,param_26808,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__26809 = seq__26754_26804;
var G__26810 = chunk__26755_26805;
var G__26811 = count__26756_26806;
var G__26812 = (i__26757_26807 + (1));
seq__26754_26804 = G__26809;
chunk__26755_26805 = G__26810;
count__26756_26806 = G__26811;
i__26757_26807 = G__26812;
continue;
} else {
var temp__4657__auto___26813 = cljs.core.seq.call(null,seq__26754_26804);
if(temp__4657__auto___26813){
var seq__26754_26814__$1 = temp__4657__auto___26813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26754_26814__$1)){
var c__23426__auto___26815 = cljs.core.chunk_first.call(null,seq__26754_26814__$1);
var G__26816 = cljs.core.chunk_rest.call(null,seq__26754_26814__$1);
var G__26817 = c__23426__auto___26815;
var G__26818 = cljs.core.count.call(null,c__23426__auto___26815);
var G__26819 = (0);
seq__26754_26804 = G__26816;
chunk__26755_26805 = G__26817;
count__26756_26806 = G__26818;
i__26757_26807 = G__26819;
continue;
} else {
var param_26820 = cljs.core.first.call(null,seq__26754_26814__$1);
cljs.compiler.emit.call(null,param_26820);

if(cljs.core._EQ_.call(null,param_26820,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__26821 = cljs.core.next.call(null,seq__26754_26814__$1);
var G__26822 = null;
var G__26823 = (0);
var G__26824 = (0);
seq__26754_26804 = G__26821;
chunk__26755_26805 = G__26822;
count__26756_26806 = G__26823;
i__26757_26807 = G__26824;
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
var seq__26829 = cljs.core.seq.call(null,params);
var chunk__26830 = null;
var count__26831 = (0);
var i__26832 = (0);
while(true){
if((i__26832 < count__26831)){
var param = cljs.core._nth.call(null,chunk__26830,i__26832);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__26833 = seq__26829;
var G__26834 = chunk__26830;
var G__26835 = count__26831;
var G__26836 = (i__26832 + (1));
seq__26829 = G__26833;
chunk__26830 = G__26834;
count__26831 = G__26835;
i__26832 = G__26836;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26829);
if(temp__4657__auto__){
var seq__26829__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26829__$1)){
var c__23426__auto__ = cljs.core.chunk_first.call(null,seq__26829__$1);
var G__26837 = cljs.core.chunk_rest.call(null,seq__26829__$1);
var G__26838 = c__23426__auto__;
var G__26839 = cljs.core.count.call(null,c__23426__auto__);
var G__26840 = (0);
seq__26829 = G__26837;
chunk__26830 = G__26838;
count__26831 = G__26839;
i__26832 = G__26840;
continue;
} else {
var param = cljs.core.first.call(null,seq__26829__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__26841 = cljs.core.next.call(null,seq__26829__$1);
var G__26842 = null;
var G__26843 = (0);
var G__26844 = (0);
seq__26829 = G__26841;
chunk__26830 = G__26842;
count__26831 = G__26843;
i__26832 = G__26844;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__26845){
var map__26848 = p__26845;
var map__26848__$1 = ((((!((map__26848 == null)))?((((map__26848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26848):map__26848);
var type = cljs.core.get.call(null,map__26848__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__26848__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__26848__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__26848__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__26848__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__26848__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__26848__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__26848__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__26289__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__26850){
var map__26861 = p__26850;
var map__26861__$1 = ((((!((map__26861 == null)))?((((map__26861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26861):map__26861);
var f = map__26861__$1;
var type = cljs.core.get.call(null,map__26861__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__26861__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__26861__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__26861__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__26861__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__26861__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__26861__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__26861__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__26289__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_26871__$1 = (function (){var or__22615__auto__ = name;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_26872 = cljs.compiler.munge.call(null,name_26871__$1);
var delegate_name_26873 = [cljs.core.str(mname_26872),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_26873," = function (");

var seq__26863_26874 = cljs.core.seq.call(null,params);
var chunk__26864_26875 = null;
var count__26865_26876 = (0);
var i__26866_26877 = (0);
while(true){
if((i__26866_26877 < count__26865_26876)){
var param_26878 = cljs.core._nth.call(null,chunk__26864_26875,i__26866_26877);
cljs.compiler.emit.call(null,param_26878);

if(cljs.core._EQ_.call(null,param_26878,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__26879 = seq__26863_26874;
var G__26880 = chunk__26864_26875;
var G__26881 = count__26865_26876;
var G__26882 = (i__26866_26877 + (1));
seq__26863_26874 = G__26879;
chunk__26864_26875 = G__26880;
count__26865_26876 = G__26881;
i__26866_26877 = G__26882;
continue;
} else {
var temp__4657__auto___26883 = cljs.core.seq.call(null,seq__26863_26874);
if(temp__4657__auto___26883){
var seq__26863_26884__$1 = temp__4657__auto___26883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26863_26884__$1)){
var c__23426__auto___26885 = cljs.core.chunk_first.call(null,seq__26863_26884__$1);
var G__26886 = cljs.core.chunk_rest.call(null,seq__26863_26884__$1);
var G__26887 = c__23426__auto___26885;
var G__26888 = cljs.core.count.call(null,c__23426__auto___26885);
var G__26889 = (0);
seq__26863_26874 = G__26886;
chunk__26864_26875 = G__26887;
count__26865_26876 = G__26888;
i__26866_26877 = G__26889;
continue;
} else {
var param_26890 = cljs.core.first.call(null,seq__26863_26884__$1);
cljs.compiler.emit.call(null,param_26890);

if(cljs.core._EQ_.call(null,param_26890,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__26891 = cljs.core.next.call(null,seq__26863_26884__$1);
var G__26892 = null;
var G__26893 = (0);
var G__26894 = (0);
seq__26863_26874 = G__26891;
chunk__26864_26875 = G__26892;
count__26865_26876 = G__26893;
i__26866_26877 = G__26894;
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

cljs.compiler.emitln.call(null,"var ",mname_26872," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_26895 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_26895,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_26873,".call(this,");

var seq__26867_26896 = cljs.core.seq.call(null,params);
var chunk__26868_26897 = null;
var count__26869_26898 = (0);
var i__26870_26899 = (0);
while(true){
if((i__26870_26899 < count__26869_26898)){
var param_26900 = cljs.core._nth.call(null,chunk__26868_26897,i__26870_26899);
cljs.compiler.emit.call(null,param_26900);

if(cljs.core._EQ_.call(null,param_26900,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__26901 = seq__26867_26896;
var G__26902 = chunk__26868_26897;
var G__26903 = count__26869_26898;
var G__26904 = (i__26870_26899 + (1));
seq__26867_26896 = G__26901;
chunk__26868_26897 = G__26902;
count__26869_26898 = G__26903;
i__26870_26899 = G__26904;
continue;
} else {
var temp__4657__auto___26905 = cljs.core.seq.call(null,seq__26867_26896);
if(temp__4657__auto___26905){
var seq__26867_26906__$1 = temp__4657__auto___26905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26867_26906__$1)){
var c__23426__auto___26907 = cljs.core.chunk_first.call(null,seq__26867_26906__$1);
var G__26908 = cljs.core.chunk_rest.call(null,seq__26867_26906__$1);
var G__26909 = c__23426__auto___26907;
var G__26910 = cljs.core.count.call(null,c__23426__auto___26907);
var G__26911 = (0);
seq__26867_26896 = G__26908;
chunk__26868_26897 = G__26909;
count__26869_26898 = G__26910;
i__26870_26899 = G__26911;
continue;
} else {
var param_26912 = cljs.core.first.call(null,seq__26867_26906__$1);
cljs.compiler.emit.call(null,param_26912);

if(cljs.core._EQ_.call(null,param_26912,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__26913 = cljs.core.next.call(null,seq__26867_26906__$1);
var G__26914 = null;
var G__26915 = (0);
var G__26916 = (0);
seq__26867_26896 = G__26913;
chunk__26868_26897 = G__26914;
count__26869_26898 = G__26915;
i__26870_26899 = G__26916;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_26872,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_26872,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_26871__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_26872,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_26873,";");

cljs.compiler.emitln.call(null,"return ",mname_26872,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__26920){
var map__26921 = p__26920;
var map__26921__$1 = ((((!((map__26921 == null)))?((((map__26921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26921):map__26921);
var name = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__26921,map__26921__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__26917_SHARP_){
var and__22603__auto__ = p1__26917_SHARP_;
if(cljs.core.truth_(and__22603__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__26917_SHARP_));
} else {
return and__22603__auto__;
}
});})(map__26921,map__26921__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_26956__$1 = (function (){var or__22615__auto__ = name;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_26957 = cljs.compiler.munge.call(null,name_26956__$1);
var maxparams_26958 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_26959 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_26956__$1,mname_26957,maxparams_26958,loop_locals,map__26921,map__26921__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_26957),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_26956__$1,mname_26957,maxparams_26958,loop_locals,map__26921,map__26921__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_26960 = cljs.core.sort_by.call(null,((function (name_26956__$1,mname_26957,maxparams_26958,mmap_26959,loop_locals,map__26921,map__26921__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__26918_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__26918_SHARP_)));
});})(name_26956__$1,mname_26957,maxparams_26958,mmap_26959,loop_locals,map__26921,map__26921__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_26959));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_26957," = null;");

var seq__26923_26961 = cljs.core.seq.call(null,ms_26960);
var chunk__26924_26962 = null;
var count__26925_26963 = (0);
var i__26926_26964 = (0);
while(true){
if((i__26926_26964 < count__26925_26963)){
var vec__26927_26965 = cljs.core._nth.call(null,chunk__26924_26962,i__26926_26964);
var n_26966 = cljs.core.nth.call(null,vec__26927_26965,(0),null);
var meth_26967 = cljs.core.nth.call(null,vec__26927_26965,(1),null);
cljs.compiler.emits.call(null,"var ",n_26966," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_26967))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_26967);
} else {
cljs.compiler.emit_fn_method.call(null,meth_26967);
}

cljs.compiler.emitln.call(null,";");

var G__26968 = seq__26923_26961;
var G__26969 = chunk__26924_26962;
var G__26970 = count__26925_26963;
var G__26971 = (i__26926_26964 + (1));
seq__26923_26961 = G__26968;
chunk__26924_26962 = G__26969;
count__26925_26963 = G__26970;
i__26926_26964 = G__26971;
continue;
} else {
var temp__4657__auto___26972 = cljs.core.seq.call(null,seq__26923_26961);
if(temp__4657__auto___26972){
var seq__26923_26973__$1 = temp__4657__auto___26972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26923_26973__$1)){
var c__23426__auto___26974 = cljs.core.chunk_first.call(null,seq__26923_26973__$1);
var G__26975 = cljs.core.chunk_rest.call(null,seq__26923_26973__$1);
var G__26976 = c__23426__auto___26974;
var G__26977 = cljs.core.count.call(null,c__23426__auto___26974);
var G__26978 = (0);
seq__26923_26961 = G__26975;
chunk__26924_26962 = G__26976;
count__26925_26963 = G__26977;
i__26926_26964 = G__26978;
continue;
} else {
var vec__26930_26979 = cljs.core.first.call(null,seq__26923_26973__$1);
var n_26980 = cljs.core.nth.call(null,vec__26930_26979,(0),null);
var meth_26981 = cljs.core.nth.call(null,vec__26930_26979,(1),null);
cljs.compiler.emits.call(null,"var ",n_26980," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_26981))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_26981);
} else {
cljs.compiler.emit_fn_method.call(null,meth_26981);
}

cljs.compiler.emitln.call(null,";");

var G__26982 = cljs.core.next.call(null,seq__26923_26973__$1);
var G__26983 = null;
var G__26984 = (0);
var G__26985 = (0);
seq__26923_26961 = G__26982;
chunk__26924_26962 = G__26983;
count__26925_26963 = G__26984;
i__26926_26964 = G__26985;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_26957," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_26958),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_26958)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_26958));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__26933_26986 = cljs.core.seq.call(null,ms_26960);
var chunk__26934_26987 = null;
var count__26935_26988 = (0);
var i__26936_26989 = (0);
while(true){
if((i__26936_26989 < count__26935_26988)){
var vec__26937_26990 = cljs.core._nth.call(null,chunk__26934_26987,i__26936_26989);
var n_26991 = cljs.core.nth.call(null,vec__26937_26990,(0),null);
var meth_26992 = cljs.core.nth.call(null,vec__26937_26990,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_26992))){
cljs.compiler.emitln.call(null,"default:");

var restarg_26993 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_26993," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_26994 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_26993," = new cljs.core.IndexedSeq(",a_26994,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_26991,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_26958)),(((cljs.core.count.call(null,maxparams_26958) > (1)))?", ":null),restarg_26993,");");
} else {
var pcnt_26995 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_26992));
cljs.compiler.emitln.call(null,"case ",pcnt_26995,":");

cljs.compiler.emitln.call(null,"return ",n_26991,".call(this",(((pcnt_26995 === (0)))?null:cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_26995,maxparams_26958));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),",")),");");
}

var G__26996 = seq__26933_26986;
var G__26997 = chunk__26934_26987;
var G__26998 = count__26935_26988;
var G__26999 = (i__26936_26989 + (1));
seq__26933_26986 = G__26996;
chunk__26934_26987 = G__26997;
count__26935_26988 = G__26998;
i__26936_26989 = G__26999;
continue;
} else {
var temp__4657__auto___27000 = cljs.core.seq.call(null,seq__26933_26986);
if(temp__4657__auto___27000){
var seq__26933_27001__$1 = temp__4657__auto___27000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26933_27001__$1)){
var c__23426__auto___27002 = cljs.core.chunk_first.call(null,seq__26933_27001__$1);
var G__27003 = cljs.core.chunk_rest.call(null,seq__26933_27001__$1);
var G__27004 = c__23426__auto___27002;
var G__27005 = cljs.core.count.call(null,c__23426__auto___27002);
var G__27006 = (0);
seq__26933_26986 = G__27003;
chunk__26934_26987 = G__27004;
count__26935_26988 = G__27005;
i__26936_26989 = G__27006;
continue;
} else {
var vec__26940_27007 = cljs.core.first.call(null,seq__26933_27001__$1);
var n_27008 = cljs.core.nth.call(null,vec__26940_27007,(0),null);
var meth_27009 = cljs.core.nth.call(null,vec__26940_27007,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_27009))){
cljs.compiler.emitln.call(null,"default:");

var restarg_27010 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_27010," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_27011 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_27010," = new cljs.core.IndexedSeq(",a_27011,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_27008,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_26958)),(((cljs.core.count.call(null,maxparams_26958) > (1)))?", ":null),restarg_27010,");");
} else {
var pcnt_27012 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27009));
cljs.compiler.emitln.call(null,"case ",pcnt_27012,":");

cljs.compiler.emitln.call(null,"return ",n_27008,".call(this",(((pcnt_27012 === (0)))?null:cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_27012,maxparams_26958));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),",")),");");
}

var G__27013 = cljs.core.next.call(null,seq__26933_27001__$1);
var G__27014 = null;
var G__27015 = (0);
var G__27016 = (0);
seq__26933_26986 = G__27013;
chunk__26934_26987 = G__27014;
count__26935_26988 = G__27015;
i__26936_26989 = G__27016;
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
cljs.compiler.emitln.call(null,mname_26957,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_26957,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_26956__$1,mname_26957,maxparams_26958,mmap_26959,ms_26960,loop_locals,map__26921,map__26921__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__26919_SHARP_){
var vec__26943 = p1__26919_SHARP_;
var n = cljs.core.nth.call(null,vec__26943,(0),null);
var m = cljs.core.nth.call(null,vec__26943,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_26956__$1,mname_26957,maxparams_26958,mmap_26959,ms_26960,loop_locals,map__26921,map__26921__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_26960),".cljs$lang$applyTo;");
} else {
}

var seq__26946_27017 = cljs.core.seq.call(null,ms_26960);
var chunk__26947_27018 = null;
var count__26948_27019 = (0);
var i__26949_27020 = (0);
while(true){
if((i__26949_27020 < count__26948_27019)){
var vec__26950_27021 = cljs.core._nth.call(null,chunk__26947_27018,i__26949_27020);
var n_27022 = cljs.core.nth.call(null,vec__26950_27021,(0),null);
var meth_27023 = cljs.core.nth.call(null,vec__26950_27021,(1),null);
var c_27024 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27023));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_27023))){
cljs.compiler.emitln.call(null,mname_26957,".cljs$core$IFn$_invoke$arity$variadic = ",n_27022,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_26957,".cljs$core$IFn$_invoke$arity$",c_27024," = ",n_27022,";");
}

var G__27025 = seq__26946_27017;
var G__27026 = chunk__26947_27018;
var G__27027 = count__26948_27019;
var G__27028 = (i__26949_27020 + (1));
seq__26946_27017 = G__27025;
chunk__26947_27018 = G__27026;
count__26948_27019 = G__27027;
i__26949_27020 = G__27028;
continue;
} else {
var temp__4657__auto___27029 = cljs.core.seq.call(null,seq__26946_27017);
if(temp__4657__auto___27029){
var seq__26946_27030__$1 = temp__4657__auto___27029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26946_27030__$1)){
var c__23426__auto___27031 = cljs.core.chunk_first.call(null,seq__26946_27030__$1);
var G__27032 = cljs.core.chunk_rest.call(null,seq__26946_27030__$1);
var G__27033 = c__23426__auto___27031;
var G__27034 = cljs.core.count.call(null,c__23426__auto___27031);
var G__27035 = (0);
seq__26946_27017 = G__27032;
chunk__26947_27018 = G__27033;
count__26948_27019 = G__27034;
i__26949_27020 = G__27035;
continue;
} else {
var vec__26953_27036 = cljs.core.first.call(null,seq__26946_27030__$1);
var n_27037 = cljs.core.nth.call(null,vec__26953_27036,(0),null);
var meth_27038 = cljs.core.nth.call(null,vec__26953_27036,(1),null);
var c_27039 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27038));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_27038))){
cljs.compiler.emitln.call(null,mname_26957,".cljs$core$IFn$_invoke$arity$variadic = ",n_27037,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_26957,".cljs$core$IFn$_invoke$arity$",c_27039," = ",n_27037,";");
}

var G__27040 = cljs.core.next.call(null,seq__26946_27030__$1);
var G__27041 = null;
var G__27042 = (0);
var G__27043 = (0);
seq__26946_27017 = G__27040;
chunk__26947_27018 = G__27041;
count__26948_27019 = G__27042;
i__26949_27020 = G__27043;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_26957,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__27044){
var map__27045 = p__27044;
var map__27045__$1 = ((((!((map__27045 == null)))?((((map__27045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27045):map__27045);
var statements = cljs.core.get.call(null,map__27045__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__27045__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__27045__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__22603__auto__ = statements;
if(cljs.core.truth_(and__22603__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__22603__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__27047_27051 = cljs.core.seq.call(null,statements);
var chunk__27048_27052 = null;
var count__27049_27053 = (0);
var i__27050_27054 = (0);
while(true){
if((i__27050_27054 < count__27049_27053)){
var s_27055 = cljs.core._nth.call(null,chunk__27048_27052,i__27050_27054);
cljs.compiler.emitln.call(null,s_27055);

var G__27056 = seq__27047_27051;
var G__27057 = chunk__27048_27052;
var G__27058 = count__27049_27053;
var G__27059 = (i__27050_27054 + (1));
seq__27047_27051 = G__27056;
chunk__27048_27052 = G__27057;
count__27049_27053 = G__27058;
i__27050_27054 = G__27059;
continue;
} else {
var temp__4657__auto___27060 = cljs.core.seq.call(null,seq__27047_27051);
if(temp__4657__auto___27060){
var seq__27047_27061__$1 = temp__4657__auto___27060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27047_27061__$1)){
var c__23426__auto___27062 = cljs.core.chunk_first.call(null,seq__27047_27061__$1);
var G__27063 = cljs.core.chunk_rest.call(null,seq__27047_27061__$1);
var G__27064 = c__23426__auto___27062;
var G__27065 = cljs.core.count.call(null,c__23426__auto___27062);
var G__27066 = (0);
seq__27047_27051 = G__27063;
chunk__27048_27052 = G__27064;
count__27049_27053 = G__27065;
i__27050_27054 = G__27066;
continue;
} else {
var s_27067 = cljs.core.first.call(null,seq__27047_27061__$1);
cljs.compiler.emitln.call(null,s_27067);

var G__27068 = cljs.core.next.call(null,seq__27047_27061__$1);
var G__27069 = null;
var G__27070 = (0);
var G__27071 = (0);
seq__27047_27051 = G__27068;
chunk__27048_27052 = G__27069;
count__27049_27053 = G__27070;
i__27050_27054 = G__27071;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__22603__auto__ = statements;
if(cljs.core.truth_(and__22603__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__22603__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__27072){
var map__27073 = p__27072;
var map__27073__$1 = ((((!((map__27073 == null)))?((((map__27073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27073):map__27073);
var env = cljs.core.get.call(null,map__27073__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__27073__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__27073__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__27073__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__27073__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__22615__auto__ = name;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__27075,is_loop){
var map__27087 = p__27075;
var map__27087__$1 = ((((!((map__27087 == null)))?((((map__27087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27087):map__27087);
var bindings = cljs.core.get.call(null,map__27087__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__27087__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__27087__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_27089_27098 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_27089_27098,context,map__27087,map__27087__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_27089_27098,context,map__27087,map__27087__$1,bindings,expr,env))
,bindings):null));

try{var seq__27090_27099 = cljs.core.seq.call(null,bindings);
var chunk__27091_27100 = null;
var count__27092_27101 = (0);
var i__27093_27102 = (0);
while(true){
if((i__27093_27102 < count__27092_27101)){
var map__27094_27103 = cljs.core._nth.call(null,chunk__27091_27100,i__27093_27102);
var map__27094_27104__$1 = ((((!((map__27094_27103 == null)))?((((map__27094_27103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27094_27103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27094_27103):map__27094_27103);
var binding_27105 = map__27094_27104__$1;
var init_27106 = cljs.core.get.call(null,map__27094_27104__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_27105);

cljs.compiler.emitln.call(null," = ",init_27106,";");

var G__27107 = seq__27090_27099;
var G__27108 = chunk__27091_27100;
var G__27109 = count__27092_27101;
var G__27110 = (i__27093_27102 + (1));
seq__27090_27099 = G__27107;
chunk__27091_27100 = G__27108;
count__27092_27101 = G__27109;
i__27093_27102 = G__27110;
continue;
} else {
var temp__4657__auto___27111 = cljs.core.seq.call(null,seq__27090_27099);
if(temp__4657__auto___27111){
var seq__27090_27112__$1 = temp__4657__auto___27111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27090_27112__$1)){
var c__23426__auto___27113 = cljs.core.chunk_first.call(null,seq__27090_27112__$1);
var G__27114 = cljs.core.chunk_rest.call(null,seq__27090_27112__$1);
var G__27115 = c__23426__auto___27113;
var G__27116 = cljs.core.count.call(null,c__23426__auto___27113);
var G__27117 = (0);
seq__27090_27099 = G__27114;
chunk__27091_27100 = G__27115;
count__27092_27101 = G__27116;
i__27093_27102 = G__27117;
continue;
} else {
var map__27096_27118 = cljs.core.first.call(null,seq__27090_27112__$1);
var map__27096_27119__$1 = ((((!((map__27096_27118 == null)))?((((map__27096_27118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27096_27118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27096_27118):map__27096_27118);
var binding_27120 = map__27096_27119__$1;
var init_27121 = cljs.core.get.call(null,map__27096_27119__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_27120);

cljs.compiler.emitln.call(null," = ",init_27121,";");

var G__27122 = cljs.core.next.call(null,seq__27090_27112__$1);
var G__27123 = null;
var G__27124 = (0);
var G__27125 = (0);
seq__27090_27099 = G__27122;
chunk__27091_27100 = G__27123;
count__27092_27101 = G__27124;
i__27093_27102 = G__27125;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_27089_27098;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__27126){
var map__27127 = p__27126;
var map__27127__$1 = ((((!((map__27127 == null)))?((((map__27127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27127):map__27127);
var frame = cljs.core.get.call(null,map__27127__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__27127__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__27127__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__23530__auto___27129 = cljs.core.count.call(null,exprs);
var i_27130 = (0);
while(true){
if((i_27130 < n__23530__auto___27129)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_27130)," = ",exprs.call(null,i_27130),";");

var G__27131 = (i_27130 + (1));
i_27130 = G__27131;
continue;
} else {
}
break;
}

var n__23530__auto___27132 = cljs.core.count.call(null,exprs);
var i_27133 = (0);
while(true){
if((i_27133 < n__23530__auto___27132)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_27133))," = ",temps.call(null,i_27133),";");

var G__27134 = (i_27133 + (1));
i_27133 = G__27134;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__27135){
var map__27136 = p__27135;
var map__27136__$1 = ((((!((map__27136 == null)))?((((map__27136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27136):map__27136);
var bindings = cljs.core.get.call(null,map__27136__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__27136__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__27136__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__27138_27146 = cljs.core.seq.call(null,bindings);
var chunk__27139_27147 = null;
var count__27140_27148 = (0);
var i__27141_27149 = (0);
while(true){
if((i__27141_27149 < count__27140_27148)){
var map__27142_27150 = cljs.core._nth.call(null,chunk__27139_27147,i__27141_27149);
var map__27142_27151__$1 = ((((!((map__27142_27150 == null)))?((((map__27142_27150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27142_27150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27142_27150):map__27142_27150);
var binding_27152 = map__27142_27151__$1;
var init_27153 = cljs.core.get.call(null,map__27142_27151__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_27152)," = ",init_27153,";");

var G__27154 = seq__27138_27146;
var G__27155 = chunk__27139_27147;
var G__27156 = count__27140_27148;
var G__27157 = (i__27141_27149 + (1));
seq__27138_27146 = G__27154;
chunk__27139_27147 = G__27155;
count__27140_27148 = G__27156;
i__27141_27149 = G__27157;
continue;
} else {
var temp__4657__auto___27158 = cljs.core.seq.call(null,seq__27138_27146);
if(temp__4657__auto___27158){
var seq__27138_27159__$1 = temp__4657__auto___27158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27138_27159__$1)){
var c__23426__auto___27160 = cljs.core.chunk_first.call(null,seq__27138_27159__$1);
var G__27161 = cljs.core.chunk_rest.call(null,seq__27138_27159__$1);
var G__27162 = c__23426__auto___27160;
var G__27163 = cljs.core.count.call(null,c__23426__auto___27160);
var G__27164 = (0);
seq__27138_27146 = G__27161;
chunk__27139_27147 = G__27162;
count__27140_27148 = G__27163;
i__27141_27149 = G__27164;
continue;
} else {
var map__27144_27165 = cljs.core.first.call(null,seq__27138_27159__$1);
var map__27144_27166__$1 = ((((!((map__27144_27165 == null)))?((((map__27144_27165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27144_27165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27144_27165):map__27144_27165);
var binding_27167 = map__27144_27166__$1;
var init_27168 = cljs.core.get.call(null,map__27144_27166__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_27167)," = ",init_27168,";");

var G__27169 = cljs.core.next.call(null,seq__27138_27159__$1);
var G__27170 = null;
var G__27171 = (0);
var G__27172 = (0);
seq__27138_27146 = G__27169;
chunk__27139_27147 = G__27170;
count__27140_27148 = G__27171;
i__27141_27149 = G__27172;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__27175){
var map__27176 = p__27175;
var map__27176__$1 = ((((!((map__27176 == null)))?((((map__27176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27176):map__27176);
var expr = map__27176__$1;
var f = cljs.core.get.call(null,map__27176__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__27176__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__27176__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__22603__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__22603__auto__)){
var and__22603__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__22603__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__22603__auto____$1;
}
} else {
return and__22603__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__22603__auto__ = protocol;
if(cljs.core.truth_(and__22603__auto__)){
var and__22603__auto____$1 = tag;
if(cljs.core.truth_(and__22603__auto____$1)){
var or__22615__auto__ = (function (){var and__22603__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__22603__auto____$2)){
var and__22603__auto____$3 = protocol;
if(cljs.core.truth_(and__22603__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__22603__auto____$3;
}
} else {
return and__22603__auto____$2;
}
})();
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
var and__22603__auto____$2 = (function (){var or__22615__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__22615__auto____$1)){
return or__22615__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__22603__auto____$2)){
var or__22615__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__22615__auto____$1){
return or__22615__auto____$1;
} else {
var and__22603__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__22603__auto____$3){
var and__22603__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__22603__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__22603__auto____$4;
}
} else {
return and__22603__auto____$3;
}
}
} else {
return and__22603__auto____$2;
}
}
} else {
return and__22603__auto____$1;
}
} else {
return and__22603__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__22615__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__22615__auto__){
return or__22615__auto__;
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
var vec__27178 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__22603__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__22603__auto__)){
return (arity > mfa);
} else {
return and__22603__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27176,map__27176__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27176,map__27176__$1,expr,f,args,env){
return (function (p1__27173_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__27173_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27176,map__27176__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27176,map__27176__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27176,map__27176__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27176,map__27176__$1,expr,f,args,env){
return (function (p1__27174_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__27174_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27176,map__27176__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27176,map__27176__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__27178,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__27178,(1),null);
var env__26289__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_27181 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_27181,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_27182 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_27182,args)),(((mfa_27182 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_27182,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__22615__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
var or__22615__auto____$1 = js_QMARK_;
if(or__22615__auto____$1){
return or__22615__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__22603__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__22603__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__22603__auto__;
}
})())){
var fprop_27183 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_27183," ? ",f__$1,fprop_27183,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__27184){
var map__27185 = p__27184;
var map__27185__$1 = ((((!((map__27185 == null)))?((((map__27185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27185):map__27185);
var ctor = cljs.core.get.call(null,map__27185__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__27185__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__27185__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__26289__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__27187){
var map__27188 = p__27187;
var map__27188__$1 = ((((!((map__27188 == null)))?((((map__27188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27188):map__27188);
var target = cljs.core.get.call(null,map__27188__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__27188__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__27188__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__26289__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
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

var seq__27194_27198 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__27195_27199 = null;
var count__27196_27200 = (0);
var i__27197_27201 = (0);
while(true){
if((i__27197_27201 < count__27196_27200)){
var lib_27202 = cljs.core._nth.call(null,chunk__27195_27199,i__27197_27201);
if(cljs.core.truth_((function (){var or__22615__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_27202),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27202),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__22615__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_27202),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27202),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27202),"');");

}
}

var G__27203 = seq__27194_27198;
var G__27204 = chunk__27195_27199;
var G__27205 = count__27196_27200;
var G__27206 = (i__27197_27201 + (1));
seq__27194_27198 = G__27203;
chunk__27195_27199 = G__27204;
count__27196_27200 = G__27205;
i__27197_27201 = G__27206;
continue;
} else {
var temp__4657__auto___27207 = cljs.core.seq.call(null,seq__27194_27198);
if(temp__4657__auto___27207){
var seq__27194_27208__$1 = temp__4657__auto___27207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27194_27208__$1)){
var c__23426__auto___27209 = cljs.core.chunk_first.call(null,seq__27194_27208__$1);
var G__27210 = cljs.core.chunk_rest.call(null,seq__27194_27208__$1);
var G__27211 = c__23426__auto___27209;
var G__27212 = cljs.core.count.call(null,c__23426__auto___27209);
var G__27213 = (0);
seq__27194_27198 = G__27210;
chunk__27195_27199 = G__27211;
count__27196_27200 = G__27212;
i__27197_27201 = G__27213;
continue;
} else {
var lib_27214 = cljs.core.first.call(null,seq__27194_27208__$1);
if(cljs.core.truth_((function (){var or__22615__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_27214),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27214),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__22615__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_27214),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27214),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27214),"');");

}
}

var G__27215 = cljs.core.next.call(null,seq__27194_27208__$1);
var G__27216 = null;
var G__27217 = (0);
var G__27218 = (0);
seq__27194_27198 = G__27215;
chunk__27195_27199 = G__27216;
count__27196_27200 = G__27217;
i__27197_27201 = G__27218;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__27219){
var map__27220 = p__27219;
var map__27220__$1 = ((((!((map__27220 == null)))?((((map__27220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27220):map__27220);
var name = cljs.core.get.call(null,map__27220__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__27220__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__27220__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__27220__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__27220__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__27220__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__27222){
var map__27223 = p__27222;
var map__27223__$1 = ((((!((map__27223 == null)))?((((map__27223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27223):map__27223);
var t = cljs.core.get.call(null,map__27223__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__27223__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__27223__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__27223__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__27223__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__27225_27243 = cljs.core.seq.call(null,protocols);
var chunk__27226_27244 = null;
var count__27227_27245 = (0);
var i__27228_27246 = (0);
while(true){
if((i__27228_27246 < count__27227_27245)){
var protocol_27247 = cljs.core._nth.call(null,chunk__27226_27244,i__27228_27246);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_27247)].join('')),"}");

var G__27248 = seq__27225_27243;
var G__27249 = chunk__27226_27244;
var G__27250 = count__27227_27245;
var G__27251 = (i__27228_27246 + (1));
seq__27225_27243 = G__27248;
chunk__27226_27244 = G__27249;
count__27227_27245 = G__27250;
i__27228_27246 = G__27251;
continue;
} else {
var temp__4657__auto___27252 = cljs.core.seq.call(null,seq__27225_27243);
if(temp__4657__auto___27252){
var seq__27225_27253__$1 = temp__4657__auto___27252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27225_27253__$1)){
var c__23426__auto___27254 = cljs.core.chunk_first.call(null,seq__27225_27253__$1);
var G__27255 = cljs.core.chunk_rest.call(null,seq__27225_27253__$1);
var G__27256 = c__23426__auto___27254;
var G__27257 = cljs.core.count.call(null,c__23426__auto___27254);
var G__27258 = (0);
seq__27225_27243 = G__27255;
chunk__27226_27244 = G__27256;
count__27227_27245 = G__27257;
i__27228_27246 = G__27258;
continue;
} else {
var protocol_27259 = cljs.core.first.call(null,seq__27225_27253__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_27259)].join('')),"}");

var G__27260 = cljs.core.next.call(null,seq__27225_27253__$1);
var G__27261 = null;
var G__27262 = (0);
var G__27263 = (0);
seq__27225_27243 = G__27260;
chunk__27226_27244 = G__27261;
count__27227_27245 = G__27262;
i__27228_27246 = G__27263;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__27229_27264 = cljs.core.seq.call(null,fields__$1);
var chunk__27230_27265 = null;
var count__27231_27266 = (0);
var i__27232_27267 = (0);
while(true){
if((i__27232_27267 < count__27231_27266)){
var fld_27268 = cljs.core._nth.call(null,chunk__27230_27265,i__27232_27267);
cljs.compiler.emitln.call(null,"this.",fld_27268," = ",fld_27268,";");

var G__27269 = seq__27229_27264;
var G__27270 = chunk__27230_27265;
var G__27271 = count__27231_27266;
var G__27272 = (i__27232_27267 + (1));
seq__27229_27264 = G__27269;
chunk__27230_27265 = G__27270;
count__27231_27266 = G__27271;
i__27232_27267 = G__27272;
continue;
} else {
var temp__4657__auto___27273 = cljs.core.seq.call(null,seq__27229_27264);
if(temp__4657__auto___27273){
var seq__27229_27274__$1 = temp__4657__auto___27273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27229_27274__$1)){
var c__23426__auto___27275 = cljs.core.chunk_first.call(null,seq__27229_27274__$1);
var G__27276 = cljs.core.chunk_rest.call(null,seq__27229_27274__$1);
var G__27277 = c__23426__auto___27275;
var G__27278 = cljs.core.count.call(null,c__23426__auto___27275);
var G__27279 = (0);
seq__27229_27264 = G__27276;
chunk__27230_27265 = G__27277;
count__27231_27266 = G__27278;
i__27232_27267 = G__27279;
continue;
} else {
var fld_27280 = cljs.core.first.call(null,seq__27229_27274__$1);
cljs.compiler.emitln.call(null,"this.",fld_27280," = ",fld_27280,";");

var G__27281 = cljs.core.next.call(null,seq__27229_27274__$1);
var G__27282 = null;
var G__27283 = (0);
var G__27284 = (0);
seq__27229_27264 = G__27281;
chunk__27230_27265 = G__27282;
count__27231_27266 = G__27283;
i__27232_27267 = G__27284;
continue;
}
} else {
}
}
break;
}

var seq__27233_27285 = cljs.core.seq.call(null,pmasks);
var chunk__27234_27286 = null;
var count__27235_27287 = (0);
var i__27236_27288 = (0);
while(true){
if((i__27236_27288 < count__27235_27287)){
var vec__27237_27289 = cljs.core._nth.call(null,chunk__27234_27286,i__27236_27288);
var pno_27290 = cljs.core.nth.call(null,vec__27237_27289,(0),null);
var pmask_27291 = cljs.core.nth.call(null,vec__27237_27289,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_27290,"$ = ",pmask_27291,";");

var G__27292 = seq__27233_27285;
var G__27293 = chunk__27234_27286;
var G__27294 = count__27235_27287;
var G__27295 = (i__27236_27288 + (1));
seq__27233_27285 = G__27292;
chunk__27234_27286 = G__27293;
count__27235_27287 = G__27294;
i__27236_27288 = G__27295;
continue;
} else {
var temp__4657__auto___27296 = cljs.core.seq.call(null,seq__27233_27285);
if(temp__4657__auto___27296){
var seq__27233_27297__$1 = temp__4657__auto___27296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27233_27297__$1)){
var c__23426__auto___27298 = cljs.core.chunk_first.call(null,seq__27233_27297__$1);
var G__27299 = cljs.core.chunk_rest.call(null,seq__27233_27297__$1);
var G__27300 = c__23426__auto___27298;
var G__27301 = cljs.core.count.call(null,c__23426__auto___27298);
var G__27302 = (0);
seq__27233_27285 = G__27299;
chunk__27234_27286 = G__27300;
count__27235_27287 = G__27301;
i__27236_27288 = G__27302;
continue;
} else {
var vec__27240_27303 = cljs.core.first.call(null,seq__27233_27297__$1);
var pno_27304 = cljs.core.nth.call(null,vec__27240_27303,(0),null);
var pmask_27305 = cljs.core.nth.call(null,vec__27240_27303,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_27304,"$ = ",pmask_27305,";");

var G__27306 = cljs.core.next.call(null,seq__27233_27297__$1);
var G__27307 = null;
var G__27308 = (0);
var G__27309 = (0);
seq__27233_27285 = G__27306;
chunk__27234_27286 = G__27307;
count__27235_27287 = G__27308;
i__27236_27288 = G__27309;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__27310){
var map__27311 = p__27310;
var map__27311__$1 = ((((!((map__27311 == null)))?((((map__27311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27311):map__27311);
var t = cljs.core.get.call(null,map__27311__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__27311__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__27311__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__27311__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__27311__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__27313_27331 = cljs.core.seq.call(null,protocols);
var chunk__27314_27332 = null;
var count__27315_27333 = (0);
var i__27316_27334 = (0);
while(true){
if((i__27316_27334 < count__27315_27333)){
var protocol_27335 = cljs.core._nth.call(null,chunk__27314_27332,i__27316_27334);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_27335)].join('')),"}");

var G__27336 = seq__27313_27331;
var G__27337 = chunk__27314_27332;
var G__27338 = count__27315_27333;
var G__27339 = (i__27316_27334 + (1));
seq__27313_27331 = G__27336;
chunk__27314_27332 = G__27337;
count__27315_27333 = G__27338;
i__27316_27334 = G__27339;
continue;
} else {
var temp__4657__auto___27340 = cljs.core.seq.call(null,seq__27313_27331);
if(temp__4657__auto___27340){
var seq__27313_27341__$1 = temp__4657__auto___27340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27313_27341__$1)){
var c__23426__auto___27342 = cljs.core.chunk_first.call(null,seq__27313_27341__$1);
var G__27343 = cljs.core.chunk_rest.call(null,seq__27313_27341__$1);
var G__27344 = c__23426__auto___27342;
var G__27345 = cljs.core.count.call(null,c__23426__auto___27342);
var G__27346 = (0);
seq__27313_27331 = G__27343;
chunk__27314_27332 = G__27344;
count__27315_27333 = G__27345;
i__27316_27334 = G__27346;
continue;
} else {
var protocol_27347 = cljs.core.first.call(null,seq__27313_27341__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_27347)].join('')),"}");

var G__27348 = cljs.core.next.call(null,seq__27313_27341__$1);
var G__27349 = null;
var G__27350 = (0);
var G__27351 = (0);
seq__27313_27331 = G__27348;
chunk__27314_27332 = G__27349;
count__27315_27333 = G__27350;
i__27316_27334 = G__27351;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__27317_27352 = cljs.core.seq.call(null,fields__$1);
var chunk__27318_27353 = null;
var count__27319_27354 = (0);
var i__27320_27355 = (0);
while(true){
if((i__27320_27355 < count__27319_27354)){
var fld_27356 = cljs.core._nth.call(null,chunk__27318_27353,i__27320_27355);
cljs.compiler.emitln.call(null,"this.",fld_27356," = ",fld_27356,";");

var G__27357 = seq__27317_27352;
var G__27358 = chunk__27318_27353;
var G__27359 = count__27319_27354;
var G__27360 = (i__27320_27355 + (1));
seq__27317_27352 = G__27357;
chunk__27318_27353 = G__27358;
count__27319_27354 = G__27359;
i__27320_27355 = G__27360;
continue;
} else {
var temp__4657__auto___27361 = cljs.core.seq.call(null,seq__27317_27352);
if(temp__4657__auto___27361){
var seq__27317_27362__$1 = temp__4657__auto___27361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27317_27362__$1)){
var c__23426__auto___27363 = cljs.core.chunk_first.call(null,seq__27317_27362__$1);
var G__27364 = cljs.core.chunk_rest.call(null,seq__27317_27362__$1);
var G__27365 = c__23426__auto___27363;
var G__27366 = cljs.core.count.call(null,c__23426__auto___27363);
var G__27367 = (0);
seq__27317_27352 = G__27364;
chunk__27318_27353 = G__27365;
count__27319_27354 = G__27366;
i__27320_27355 = G__27367;
continue;
} else {
var fld_27368 = cljs.core.first.call(null,seq__27317_27362__$1);
cljs.compiler.emitln.call(null,"this.",fld_27368," = ",fld_27368,";");

var G__27369 = cljs.core.next.call(null,seq__27317_27362__$1);
var G__27370 = null;
var G__27371 = (0);
var G__27372 = (0);
seq__27317_27352 = G__27369;
chunk__27318_27353 = G__27370;
count__27319_27354 = G__27371;
i__27320_27355 = G__27372;
continue;
}
} else {
}
}
break;
}

var seq__27321_27373 = cljs.core.seq.call(null,pmasks);
var chunk__27322_27374 = null;
var count__27323_27375 = (0);
var i__27324_27376 = (0);
while(true){
if((i__27324_27376 < count__27323_27375)){
var vec__27325_27377 = cljs.core._nth.call(null,chunk__27322_27374,i__27324_27376);
var pno_27378 = cljs.core.nth.call(null,vec__27325_27377,(0),null);
var pmask_27379 = cljs.core.nth.call(null,vec__27325_27377,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_27378,"$ = ",pmask_27379,";");

var G__27380 = seq__27321_27373;
var G__27381 = chunk__27322_27374;
var G__27382 = count__27323_27375;
var G__27383 = (i__27324_27376 + (1));
seq__27321_27373 = G__27380;
chunk__27322_27374 = G__27381;
count__27323_27375 = G__27382;
i__27324_27376 = G__27383;
continue;
} else {
var temp__4657__auto___27384 = cljs.core.seq.call(null,seq__27321_27373);
if(temp__4657__auto___27384){
var seq__27321_27385__$1 = temp__4657__auto___27384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27321_27385__$1)){
var c__23426__auto___27386 = cljs.core.chunk_first.call(null,seq__27321_27385__$1);
var G__27387 = cljs.core.chunk_rest.call(null,seq__27321_27385__$1);
var G__27388 = c__23426__auto___27386;
var G__27389 = cljs.core.count.call(null,c__23426__auto___27386);
var G__27390 = (0);
seq__27321_27373 = G__27387;
chunk__27322_27374 = G__27388;
count__27323_27375 = G__27389;
i__27324_27376 = G__27390;
continue;
} else {
var vec__27328_27391 = cljs.core.first.call(null,seq__27321_27385__$1);
var pno_27392 = cljs.core.nth.call(null,vec__27328_27391,(0),null);
var pmask_27393 = cljs.core.nth.call(null,vec__27328_27391,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_27392,"$ = ",pmask_27393,";");

var G__27394 = cljs.core.next.call(null,seq__27321_27385__$1);
var G__27395 = null;
var G__27396 = (0);
var G__27397 = (0);
seq__27321_27373 = G__27394;
chunk__27322_27374 = G__27395;
count__27323_27375 = G__27396;
i__27324_27376 = G__27397;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__27398){
var map__27399 = p__27398;
var map__27399__$1 = ((((!((map__27399 == null)))?((((map__27399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27399):map__27399);
var target = cljs.core.get.call(null,map__27399__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__27399__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__27399__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__27399__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__27399__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__26289__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__27401){
var map__27402 = p__27401;
var map__27402__$1 = ((((!((map__27402 == null)))?((((map__27402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27402):map__27402);
var op = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__22603__auto__ = code;
if(cljs.core.truth_(and__22603__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__22603__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__26289__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__26289__auto__))){
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
var seq__27416 = cljs.core.seq.call(null,table);
var chunk__27417 = null;
var count__27418 = (0);
var i__27419 = (0);
while(true){
if((i__27419 < count__27418)){
var vec__27420 = cljs.core._nth.call(null,chunk__27417,i__27419);
var sym = cljs.core.nth.call(null,vec__27420,(0),null);
var value = cljs.core.nth.call(null,vec__27420,(1),null);
var ns_27426 = cljs.core.namespace.call(null,sym);
var name_27427 = cljs.core.name.call(null,sym);
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

var G__27428 = seq__27416;
var G__27429 = chunk__27417;
var G__27430 = count__27418;
var G__27431 = (i__27419 + (1));
seq__27416 = G__27428;
chunk__27417 = G__27429;
count__27418 = G__27430;
i__27419 = G__27431;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27416);
if(temp__4657__auto__){
var seq__27416__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27416__$1)){
var c__23426__auto__ = cljs.core.chunk_first.call(null,seq__27416__$1);
var G__27432 = cljs.core.chunk_rest.call(null,seq__27416__$1);
var G__27433 = c__23426__auto__;
var G__27434 = cljs.core.count.call(null,c__23426__auto__);
var G__27435 = (0);
seq__27416 = G__27432;
chunk__27417 = G__27433;
count__27418 = G__27434;
i__27419 = G__27435;
continue;
} else {
var vec__27423 = cljs.core.first.call(null,seq__27416__$1);
var sym = cljs.core.nth.call(null,vec__27423,(0),null);
var value = cljs.core.nth.call(null,vec__27423,(1),null);
var ns_27436 = cljs.core.namespace.call(null,sym);
var name_27437 = cljs.core.name.call(null,sym);
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

var G__27438 = cljs.core.next.call(null,seq__27416__$1);
var G__27439 = null;
var G__27440 = (0);
var G__27441 = (0);
seq__27416 = G__27438;
chunk__27417 = G__27439;
count__27418 = G__27440;
i__27419 = G__27441;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map?rel=1465451146084