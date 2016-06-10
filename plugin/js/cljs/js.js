// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('cljs.js');
goog.require('cljs.core');
goog.require('cljs.compiler');
goog.require('cljs.tools.reader');
goog.require('cljs.tagged_literals');
goog.require('goog.crypt.base64');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54077 = arguments.length;
var i__7297__auto___54078 = (0);
while(true){
if((i__7297__auto___54078 < len__7296__auto___54077)){
args__7303__auto__.push((arguments[i__7297__auto___54078]));

var G__54079 = (i__7297__auto___54078 + (1));
i__7297__auto___54078 = G__54079;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR_54076 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_err_fn_STAR_;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_54076;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

cljs.js.debug_prn.cljs$lang$applyTo = (function (seq54075){
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54075));
});

/**
 * Given a namespace as a symbol return the relative path sans extension
 */
cljs.js.ns__GT_relpath = (function cljs$js$ns__GT_relpath(ns_sym){
return clojure.string.replace(cljs.analyzer.munge_path(ns_sym),".","/");
});
cljs.js.file__GT_ns = (function cljs$js$file__GT_ns(file){
var lib_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(file,"/","."),(0),(cljs.core.count(file) - (5)));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(lib_name));
});
cljs.js.resolve_symbol = (function cljs$js$resolve_symbol(sym){
if(clojure.string.starts_with_QMARK_([cljs.core.str(sym)].join(''),".")){
return sym;
} else {
return cljs.analyzer.resolve_symbol(sym);
}
});
cljs.js.atom_QMARK_ = (function cljs$js$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
cljs.js.valid_name_QMARK_ = (function cljs$js$valid_name_QMARK_(x){
return ((x == null)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
cljs.js.valid_opts_QMARK_ = (function cljs$js$valid_opts_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_(x));
});
if(typeof cljs.js._STAR_load_fn_STAR_ !== 'undefined'){
} else {
/**
 * Each runtime environment provides a different way to load a library.
 *   Whatever function *load-fn* is bound to will be passed two arguments - a
 *   map and a callback function: The map will have the following keys:
 * 
 *   :name   - the name of the library (a symbol)
 *   :macros - modifier signaling a macros namespace load
 *   :path   - munged relative library path (a string)
 * 
 *   It is up to the implementor to correctly resolve the corresponding .cljs,
 *   .cljc, or .js resource (the order must be respected). If :macros is true
 *   resolution should only consider .clj or .cljc resources (the order must be
 *   respected). Upon resolution the callback should be invoked with a map
 *   containing the following keys:
 * 
 *   :lang       - the language, :clj or :js
 *   :source     - the source of the library (a string)
 *   :cache      - optional, if a :clj namespace has been precompiled to :js, can
 *              give an analysis cache for faster loads.
 *   :source-map - optional, if a :clj namespace has been precompiled to :js, can
 *              give a V3 source map JSON
 * 
 *   If the resource could not be resolved, the callback should be invoked with
 *   nil.
 */
cljs.js._STAR_load_fn_STAR_ = (function cljs$js$_STAR_load_fn_STAR_(m,cb){
throw (new Error("No *load-fn* set"));
});
}
if(typeof cljs.js._STAR_eval_fn_STAR_ !== 'undefined'){
} else {
/**
 * Each runtime environment provides various ways to eval JavaScript
 *   source. Whatever function *eval-fn* is bound to will be passed a map
 *   containing the following keys:
 * 
 *   :source - the source of the library (string)
 *   :name   - used to unique identify the script (symbol)
 *   :cache  - if the source was originally ClojureScript, will be given the
 *          analysis cache.
 * 
 *   The result of evaluation should be the return value.
 */
cljs.js._STAR_eval_fn_STAR_ = (function cljs$js$_STAR_eval_fn_STAR_(m){
throw (new Error("No *eval-fn* set"));
});
}
/**
 * A default JavaScript evaluation function.
 */
cljs.js.js_eval = (function cljs$js$js_eval(p__54080){
var map__54083 = p__54080;
var map__54083__$1 = ((((!((map__54083 == null)))?((((map__54083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54083):map__54083);
var resource = map__54083__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54083__$1,cljs.core.cst$kw$source);
return eval(source);
});
cljs.js.wrap_error = (function cljs$js$wrap_error(ex){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,ex], null);
});
/**
 * Construct an empty compiler state. Required to invoke analyze, compile,
 * eval and eval-str.
 */
cljs.js.empty_state = (function cljs$js$empty_state(var_args){
var args54085 = [];
var len__7296__auto___54090 = arguments.length;
var i__7297__auto___54091 = (0);
while(true){
if((i__7297__auto___54091 < len__7296__auto___54090)){
args54085.push((arguments[i__7297__auto___54091]));

var G__54092 = (i__7297__auto___54091 + (1));
i__7297__auto___54091 = G__54092;
continue;
} else {
}
break;
}

var G__54087 = args54085.length;
switch (G__54087) {
case 0:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54085.length)].join('')));

}
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__54088 = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__54088,((function (G__54088){
return (function (state){
});})(G__54088))
);

return G__54088;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__54089 = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__54089,init);

return G__54089;
});

cljs.js.empty_state.cljs$lang$maxFixedArity = 1;

cljs.js.load_analysis_cache_BANG_ = (function cljs$js$load_analysis_cache_BANG_(state,ns,cache){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns], null),cache);
});
cljs.js.load_source_map_BANG_ = (function cljs$js$load_source_map_BANG_(state,ns,sm_json){
var sm = cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1(JSON.parse(sm_json));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_maps,ns], null),sm);
});
cljs.js.sm_data = (function cljs$js$sm_data(){
var G__54095 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$source_DASH_map,cljs.core.sorted_map(),cljs.core.cst$kw$gen_DASH_col,(0),cljs.core.cst$kw$gen_DASH_line,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__54095) : cljs.core.atom.call(null,G__54095));
});
cljs.js.prefix = (function cljs$js$prefix(s,pre){
return [cljs.core.str(pre),cljs.core.str(s)].join('');
});
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__54096){
var map__54101 = p__54096;
var map__54101__$1 = ((((!((map__54101 == null)))?((((map__54101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54101):map__54101);
var opts = map__54101__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54101__$1,cljs.core.cst$kw$output_DASH_dir);
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54101__$1,cljs.core.cst$kw$asset_DASH_path);
var t = (new Date()).valueOf();
var smn = (cljs.core.truth_(name)?clojure.string.replace(cljs.core.munge([cljs.core.str(name)].join('')),".","/"):[cljs.core.str("cljs-"),cljs.core.str(t)].join(''));
var ts = (new Date()).valueOf();
var out = (function (){var or__6221__auto__ = output_dir;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return asset_path;
}
})();
var src = (function (){var G__54103 = [cljs.core.str(smn),cljs.core.str(".cljs?rel="),cljs.core.str(ts)].join('');
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__54103,[cljs.core.str(out),cljs.core.str("/")].join(''));
} else {
return G__54103;
}
})();
var file = (function (){var G__54104 = [cljs.core.str(smn),cljs.core.str(".js?rel="),cljs.core.str(ts)].join('');
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__54104,[cljs.core.str(out),cljs.core.str("/")].join(''));
} else {
return G__54104;
}
})();
var json = cljs.source_map.encode(cljs.core.PersistentArrayMap.fromArray([src,cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(sm_data)], true, false),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lines,(cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),cljs.core.cst$kw$file,file,cljs.core.cst$kw$sources_DASH_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([json], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_maps,name], null),cljs.source_map.invert_reverse_map(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append([cljs.core.str("\n//# sourceURL="),cljs.core.str(file),cljs.core.str("\n//# sourceMappingURL=data:application/json;base64,"),cljs.core.str(goog.crypt.base64.encodeString(json))].join(''));
});
cljs.js.current_alias_map = (function cljs$js$current_alias_map(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.analyzer._STAR_cljs_ns_STAR_,cljs.core.cst$kw$requires], null));
});
cljs.js._STAR_loaded_STAR_ = (function (){var G__54105 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__54105) : cljs.core.atom.call(null,G__54105));
})();
/**
 * Like cljs.core/run!, but for an async procedure, and with the
 *   ability to break prior to processing the entire collection.
 * 
 *   Chains successive calls to the supplied procedure for items in
 *   the collection. The procedure should accept an item from the
 *   collection and a callback of one argument. If the break? predicate,
 *   when applied to the procedure callback value, yields a truthy
 *   result, terminates early calling the supplied cb with the callback
 *   value. Otherwise, when complete, calls cb with nil.
 */
cljs.js.run_async_BANG_ = (function cljs$js$run_async_BANG_(proc,coll,break_QMARK_,cb){
if(cljs.core.seq(coll)){
var G__54112 = cljs.core.first(coll);
var G__54113 = ((function (G__54112){
return (function (res){
if(cljs.core.truth_((break_QMARK_.cljs$core$IFn$_invoke$arity$1 ? break_QMARK_.cljs$core$IFn$_invoke$arity$1(res) : break_QMARK_.call(null,res)))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
return cljs$js$run_async_BANG_(proc,cljs.core.rest(coll),break_QMARK_,cb);
}
});})(G__54112))
;
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(G__54112,G__54113) : proc.call(null,G__54112,G__54113));
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(null) : cb.call(null,null));
}
});
cljs.js.process_deps = (function cljs$js$process_deps(bound_vars,names,opts,cb){
return cljs.js.run_async_BANG_((function (name,cb__$1){
return (cljs.js.require.cljs$core$IFn$_invoke$arity$5 ? cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb__$1) : cljs.js.require.call(null,bound_vars,name,null,opts,cb__$1));
}),names,cljs.core.cst$kw$error,cb);
});
cljs.js.process_macros_deps = (function cljs$js$process_macros_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(cljs.core.cst$kw$require_DASH_macros.cljs$core$IFn$_invoke$arity$1(cache))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$macros_DASH_ns,true),cb);
});
cljs.js.process_libs_deps = (function cljs$js$process_libs_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(cache)),cljs.core.vals(cljs.core.cst$kw$imports.cljs$core$IFn$_invoke$arity$1(cache)))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),cb);
});
cljs.js.require = (function cljs$js$require(var_args){
var args54114 = [];
var len__7296__auto___54143 = arguments.length;
var i__7297__auto___54144 = (0);
while(true){
if((i__7297__auto___54144 < len__7296__auto___54143)){
args54114.push((arguments[i__7297__auto___54144]));

var G__54145 = (i__7297__auto___54144 + (1));
i__7297__auto___54144 = G__54145;
continue;
} else {
}
break;
}

var G__54116 = args54114.length;
switch (G__54116) {
case 2:
return cljs.js.require.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.require.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.require.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.require.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54114.length)].join('')));

}
});

cljs.js.require.cljs$core$IFn$_invoke$arity$2 = (function (name,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$3(name,null,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$3 = (function (name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(null,name,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$4 = (function (bound_vars,name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,name,reload,opts,cb){
var bound_vars__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$_STAR_compiler_STAR_,cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__6221__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__6221__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),bound_vars], 0));
var aname = (function (){var G__54117 = name;
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__54117);
} else {
return G__54117;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reload,reload)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.disj,aname);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reload_DASH_all,reload)){
var G__54118_54147 = cljs.js._STAR_loaded_STAR_;
var G__54119_54148 = cljs.core.PersistentHashSet.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54118_54147,G__54119_54148) : cljs.core.reset_BANG_.call(null,G__54118_54147,G__54119_54148));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading "),cljs.core.str(name),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?" macros":null)),cljs.core.str(" namespace")].join('')], 0));
} else {
}

if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.js._STAR_loaded_STAR_) : cljs.core.deref.call(null,cljs.js._STAR_loaded_STAR_)),aname))){
var env = cljs.core.cst$kw$_STAR_env_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
try{return cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$macros,cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(name)], null),((function (env,bound_vars__$1,aname){
return (function (resource){
if((cljs.core.map_QMARK_(resource)) || ((resource == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("*load-fn* may only return a map or nil"),cljs.core.str("\n"),cljs.core.str("(or (map? resource) (nil? resource))")].join('')));
}

if(cljs.core.truth_(resource)){
var map__54122 = resource;
var map__54122__$1 = ((((!((map__54122 == null)))?((((map__54122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54122):map__54122);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54122__$1,cljs.core.cst$kw$lang);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54122__$1,cljs.core.cst$kw$source);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54122__$1,cljs.core.cst$kw$cache);
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54122__$1,cljs.core.cst$kw$source_DASH_map);
var pred__54124 = cljs.core._EQ_;
var expr__54125 = lang;
if(cljs.core.truth_((pred__54124.cljs$core$IFn$_invoke$arity$2 ? pred__54124.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$clj,expr__54125) : pred__54124.call(null,cljs.core.cst$kw$clj,expr__54125)))){
var G__54128 = bound_vars__$1;
var G__54129 = source;
var G__54130 = name;
var G__54131 = opts;
var G__54132 = ((function (G__54128,G__54129,G__54130,G__54131,pred__54124,expr__54125,map__54122,map__54122__$1,lang,source,cache,source_map,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__54133 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54133) : cb.call(null,G__54133));
}
});})(G__54128,G__54129,G__54130,G__54131,pred__54124,expr__54125,map__54122,map__54122__$1,lang,source,cache,source_map,env,bound_vars__$1,aname))
;
return (cljs.js.eval_str_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.js.eval_str_STAR_.cljs$core$IFn$_invoke$arity$5(G__54128,G__54129,G__54130,G__54131,G__54132) : cljs.js.eval_str_STAR_.call(null,G__54128,G__54129,G__54130,G__54131,G__54132));
} else {
if(cljs.core.truth_((pred__54124.cljs$core$IFn$_invoke$arity$2 ? pred__54124.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$js,expr__54125) : pred__54124.call(null,cljs.core.cst$kw$js,expr__54125)))){
return cljs.js.process_macros_deps(bound_vars__$1,cache,opts,((function (pred__54124,expr__54125,map__54122,map__54122__$1,lang,source,cache,source_map,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
return cljs.js.process_libs_deps(bound_vars__$1,cache,opts,((function (pred__54124,expr__54125,map__54122,map__54122__$1,lang,source,cache,source_map,env,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var res__$2 = (function (){try{cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,resource);

if(cljs.core.truth_(cache)){
cljs.js.load_analysis_cache_BANG_(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,cache);
} else {
}

if(cljs.core.truth_(source_map)){
return cljs.js.load_source_map_BANG_(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,source_map);
} else {
return null;
}
}catch (e54134){var cause = e54134;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,[cljs.core.str("Could not require "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__54135 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54135) : cb.call(null,G__54135));
}
}
});})(pred__54124,expr__54125,map__54122,map__54122__$1,lang,source,cache,source_map,env,bound_vars__$1,aname))
);
}
});})(pred__54124,expr__54125,map__54122,map__54122__$1,lang,source,cache,source_map,env,bound_vars__$1,aname))
);
} else {
var G__54136 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,[cljs.core.str("Invalid :lang specified "),cljs.core.str(lang),cljs.core.str(", only :clj or :js allowed")].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54136) : cb.call(null,G__54136));
}
}
} else {
var G__54139 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__54140 = (cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.cst$kw$undeclared_DASH_macros_DASH_ns:cljs.core.cst$kw$undeclared_DASH_ns);
var G__54141 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,name,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(name)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__54140,G__54141) : cljs.analyzer.error_message.call(null,G__54140,G__54141));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54139) : cb.call(null,G__54139));
}
});})(env,bound_vars__$1,aname))
);
}catch (e54120){var cause = e54120;
var G__54121 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,[cljs.core.str("Could not require "),cljs.core.str(name)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54121) : cb.call(null,G__54121));
}} else {
var G__54142 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54142) : cb.call(null,G__54142));
}
});

cljs.js.require.cljs$lang$maxFixedArity = 5;


cljs.js.load_deps = (function cljs$js$load_deps(var_args){
var args54150 = [];
var len__7296__auto___54155 = arguments.length;
var i__7297__auto___54156 = (0);
while(true){
if((i__7297__auto___54156 < len__7296__auto___54155)){
args54150.push((arguments[i__7297__auto___54156]));

var G__54157 = (i__7297__auto___54156 + (1));
i__7297__auto___54156 = G__54157;
continue;
} else {
}
break;
}

var G__54152 = args54150.length;
switch (G__54152) {
case 5:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54150.length)].join('')));

}
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return (cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 ? cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,deps,null,cb) : cljs.js.analyze_deps.call(null,bound_vars,ana_env,lib,deps,null,cb));
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Loading dependencies for",lib], 0));
} else {
}

var _STAR_cljs_dep_set_STAR_54153 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_(((function (_STAR_cljs_dep_set_STAR_54153){
return (function (p1__54149_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),p1__54149_SHARP_));
});})(_STAR_cljs_dep_set_STAR_54153))
,deps)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Circular dependency detected "),cljs.core.str(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))))].join('')),cljs.core.str("\n"),cljs.core.str("(every? (fn* [p1__54149#] (not (contains? (:*cljs-dep-set* bound-vars) p1__54149#))) deps)")].join('')));
}

if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(bound_vars,dep,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$context),cljs.core.cst$kw$ns),((function (dep,_STAR_cljs_dep_set_STAR_54153){
return (function (res){
if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(dep,_STAR_cljs_dep_set_STAR_54153))
);
} else {
var G__54154 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54154) : cb.call(null,G__54154));
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_54153;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 6;

cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var args54160 = [];
var len__7296__auto___54183 = arguments.length;
var i__7297__auto___54184 = (0);
while(true){
if((i__7297__auto___54184 < len__7296__auto___54183)){
args54160.push((arguments[i__7297__auto___54184]));

var G__54185 = (i__7297__auto___54184 + (1));
i__7297__auto___54184 = G__54185;
continue;
} else {
}
break;
}

var G__54162 = args54160.length;
switch (G__54162) {
case 5:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54160.length)].join('')));

}
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
var compiler = (function (){var G__54163 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__54163) : cljs.core.deref.call(null,G__54163));
})();
var _STAR_cljs_dep_set_STAR_54164 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_(((function (_STAR_cljs_dep_set_STAR_54164,compiler){
return (function (p1__54159_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),p1__54159_SHARP_));
});})(_STAR_cljs_dep_set_STAR_54164,compiler))
,deps)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Circular dependency detected "),cljs.core.str(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))))].join('')),cljs.core.str("\n"),cljs.core.str("(every? (fn* [p1__54159#] (not (contains? (:*cljs-dep-set* bound-vars) p1__54159#))) deps)")].join('')));
}

if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
try{return cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars).call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,dep,cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(dep)], null),((function (dep,_STAR_cljs_dep_set_STAR_54164,compiler){
return (function (resource){
if((cljs.core.map_QMARK_(resource)) || ((resource == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("*load-fn* may only return a map or nil"),cljs.core.str("\n"),cljs.core.str("(or (map? resource) (nil? resource))")].join('')));
}

if(cljs.core.truth_(resource)){
var map__54167 = resource;
var map__54167__$1 = ((((!((map__54167 == null)))?((((map__54167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54167):map__54167);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54167__$1,cljs.core.cst$kw$name);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54167__$1,cljs.core.cst$kw$lang);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54167__$1,cljs.core.cst$kw$source);
var pred__54169 = cljs.core._EQ_;
var expr__54170 = lang;
if(cljs.core.truth_((pred__54169.cljs$core$IFn$_invoke$arity$2 ? pred__54169.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$clj,expr__54170) : pred__54169.call(null,cljs.core.cst$kw$clj,expr__54170)))){
var G__54172 = bound_vars;
var G__54173 = source;
var G__54174 = name;
var G__54175 = opts;
var G__54176 = ((function (G__54172,G__54173,G__54174,G__54175,pred__54169,expr__54170,map__54167,map__54167__$1,name,lang,source,dep,_STAR_cljs_dep_set_STAR_54164,compiler){
return (function (res){
if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(G__54172,G__54173,G__54174,G__54175,pred__54169,expr__54170,map__54167,map__54167__$1,name,lang,source,dep,_STAR_cljs_dep_set_STAR_54164,compiler))
;
return (cljs.js.analyze_str_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.js.analyze_str_STAR_.cljs$core$IFn$_invoke$arity$5(G__54172,G__54173,G__54174,G__54175,G__54176) : cljs.js.analyze_str_STAR_.call(null,G__54172,G__54173,G__54174,G__54175,G__54176));
} else {
if(cljs.core.truth_((pred__54169.cljs$core$IFn$_invoke$arity$2 ? pred__54169.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$js,expr__54170) : pred__54169.call(null,cljs.core.cst$kw$js,expr__54170)))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,[cljs.core.str("Invalid :lang specified "),cljs.core.str(lang),cljs.core.str(", only :clj or :js allowed")].join('')));
}
}
} else {
var G__54179 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,(function (){var G__54180 = cljs.core.cst$kw$undeclared_DASH_ns;
var G__54181 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,dep,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__54180,G__54181) : cljs.analyzer.error_message.call(null,G__54180,G__54181));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54179) : cb.call(null,G__54179));
}
});})(dep,_STAR_cljs_dep_set_STAR_54164,compiler))
);
}catch (e54165){var cause = e54165;
var G__54166 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,[cljs.core.str("Could not analyze dep "),cljs.core.str(dep)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54166) : cb.call(null,G__54166));
}} else {
var G__54182 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54182) : cb.call(null,G__54182));
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_54164;
}});

cljs.js.analyze_deps.cljs$lang$maxFixedArity = 6;

cljs.js.load_macros = (function cljs$js$load_macros(bound_vars,k,macros,reload,reloads,opts,cb){
if(cljs.core.seq(macros)){
var nsym = cljs.core.first(cljs.core.vals(macros));
var k__$1 = (function (){var or__6221__auto__ = (reload.cljs$core$IFn$_invoke$arity$1 ? reload.cljs$core$IFn$_invoke$arity$1(k) : reload.call(null,k));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reloads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nsym], null));
if(cljs.core.truth_(or__6221__auto____$1)){
return or__6221__auto____$1;
} else {
var or__6221__auto____$2 = (function (){var and__6209__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nsym,cljs.core.name);
if(and__6209__auto__){
var and__6209__auto____$1 = cljs.core.cst$kw$_STAR_reload_DASH_macros_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__6209__auto____$1)){
return cljs.core.cst$kw$reload;
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})();
if(cljs.core.truth_(or__6221__auto____$2)){
return or__6221__auto____$2;
} else {
return null;
}
}
}
})();
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,nsym,k__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$macros_DASH_ns,true),cljs.core.cst$kw$context),cljs.core.cst$kw$ns),((function (nsym,k__$1){
return (function (res){
if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs$js$load_macros(bound_vars,k__$1,cljs.core.next(macros),reload,reloads,opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(nsym,k__$1))
);
} else {
var G__54195 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54195) : cb.call(null,G__54195));
}
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var args54196 = [];
var len__7296__auto___54221 = arguments.length;
var i__7297__auto___54222 = (0);
while(true){
if((i__7297__auto___54222 < len__7296__auto___54221)){
args54196.push((arguments[i__7297__auto___54222]));

var G__54223 = (i__7297__auto___54222 + (1));
i__7297__auto___54222 = G__54223;
continue;
} else {
}
break;
}

var G__54198 = args54196.length;
switch (G__54198) {
case 5:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54196.length)].join('')));

}
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,ast,opts,cb){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(false,bound_vars,ana_env,ast,opts,cb);
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__54199,opts,cb){
var map__54200 = p__54199;
var map__54200__$1 = ((((!((map__54200 == null)))?((((map__54200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54200):map__54200);
var ast = map__54200__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54200__$1,cljs.core.cst$kw$op);
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Namespace side effects for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ns,op)){
var map__54202 = ast;
var map__54202__$1 = ((((!((map__54202 == null)))?((((map__54202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54202):map__54202);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54202__$1,cljs.core.cst$kw$deps);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54202__$1,cljs.core.cst$kw$uses);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54202__$1,cljs.core.cst$kw$requires);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54202__$1,cljs.core.cst$kw$require_DASH_macros);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54202__$1,cljs.core.cst$kw$use_DASH_macros);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54202__$1,cljs.core.cst$kw$reload);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54202__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
var check_uses_and_load_macros = ((function (map__54202,map__54202__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__54200,map__54200__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var res__$1 = (function (){try{if(cljs.core.truth_((function (){var and__6209__auto__ = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.seq(uses);
} else {
return and__6209__auto__;
}
})())){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Checking uses"], 0));
} else {
}

cljs.analyzer.check_uses(uses,env);

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
} else {
return null;
}
}catch (e54216){var cause = e54216;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,[cljs.core.str("Could not parse ns form "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Processing :use-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,cljs.core.cst$kw$use_DASH_macros,use_macros,reload,reloads,opts,((function (res__$1,map__54202,map__54202__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__54200,map__54200__$1,ast,op){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Processing :require-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,cljs.core.cst$kw$require_DASH_macros,require_macros,reloads,reloads,opts,((function (res__$1,map__54202,map__54202__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__54200,map__54200__$1,ast,op){
return (function (res__$3){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$3))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$3) : cb.call(null,res__$3));
} else {
var res__$4 = (function (){try{if(cljs.core.seq(use_macros)){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Checking :use-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

cljs.analyzer.check_use_macros(use_macros,env);
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
}catch (e54217){var cause = e54217;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,[cljs.core.str("Could not parse ns form "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$4))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$4) : cb.call(null,res__$4));
} else {
var G__54218 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54218) : cb.call(null,G__54218));
}
}
});})(res__$1,map__54202,map__54202__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__54200,map__54200__$1,ast,op))
);
}
});})(res__$1,map__54202,map__54202__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__54200,map__54200__$1,ast,op))
);
} else {
var G__54219 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54219) : cb.call(null,G__54219));
}
}
}
});})(map__54202,map__54202__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__54200,map__54200__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__6209__auto__ = load;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.seq(deps);
} else {
return and__6209__auto__;
}
})())){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast),deps,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),check_uses_and_load_macros);
} else {
if(cljs.core.truth_((function (){var and__6209__auto__ = cljs.core.not(load);
if(and__6209__auto__){
var and__6209__auto____$1 = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__6209__auto____$1)){
return cljs.core.seq(deps);
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast),deps,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),check_uses_and_load_macros);
} else {
return check_uses_and_load_macros(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null));

}
}
} else {
var G__54220 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54220) : cb.call(null,G__54220));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;

cljs.js.analyze_str_STAR_ = (function cljs$js$analyze_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var the_ns = (function (){var or__6221__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__54258 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54258,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__54258;
}
})();
return ((function (rdr,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
while(true){
var _STAR_compiler_STAR_54274 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR_54275 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_static_fns_STAR_54276 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_ns_STAR_54277 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR_54278 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_alias_map_STAR_54279 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_54280 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol54281 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_54282 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.analyzer._STAR_passes_STAR_ = cljs.core.cst$kw$_STAR_passes_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map();

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eof,eof,cljs.core.cst$kw$read_DASH_cond,cljs.core.cst$kw$allow,cljs.core.cst$kw$features,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs,null], null), null)], null),rdr)], null);
}catch (e54283){var cause = e54283;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,[cljs.core.str("Could not analyze "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__54284 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__54284__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54284,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__54284);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54284__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__54284__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e54285){var cause = e54285;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,[cljs.core.str("Could not analyze "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ns,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,aenv__$1,ast,opts,((function (last_ast,ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_54274,_STAR_cljs_ns_STAR_54275,_STAR_cljs_static_fns_STAR_54276,_STAR_ns_STAR_54277,_STAR_passes_STAR_54278,_STAR_alias_map_STAR_54279,_STAR_data_readers_STAR_54280,resolve_symbol54281,_STAR_source_map_data_STAR_54282,rdr,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
return cljs$js$analyze_str_STAR__$_analyze_loop(ast,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast));
}
});})(last_ast,ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_54274,_STAR_cljs_ns_STAR_54275,_STAR_cljs_static_fns_STAR_54276,_STAR_ns_STAR_54277,_STAR_passes_STAR_54278,_STAR_alias_map_STAR_54279,_STAR_data_readers_STAR_54280,resolve_symbol54281,_STAR_source_map_data_STAR_54282,rdr,eof,aenv,the_ns,bound_vars__$1))
);
} else {
var G__54287 = ast;
var G__54288 = ns;
last_ast = G__54287;
ns = G__54288;
continue;
}
}
} else {
var G__54286 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,last_ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54286) : cb.call(null,G__54286));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_54282;

cljs.tools.reader.resolve_symbol = resolve_symbol54281;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_54280;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_54279;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR_54278;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_54277;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_54276;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_54275;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_54274;
}break;
}
});})(rdr,eof,aenv,the_ns,bound_vars__$1))
.call(null,null,the_ns);
});
/**
 * Analyze ClojureScript source. The compiler state will be populated with
 * the results of analyzes. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 * :eval - the eval function to invoke, see *eval-fn*
 * :load - library resolution function, see *load-fn*
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value, the actual value is not meaningful. If unsuccessful the
 *   map will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.analyze_str = (function cljs$js$analyze_str(var_args){
var args54289 = [];
var len__7296__auto___54292 = arguments.length;
var i__7297__auto___54293 = (0);
while(true){
if((i__7297__auto___54293 < len__7296__auto___54292)){
args54289.push((arguments[i__7297__auto___54293]));

var G__54294 = (i__7297__auto___54293 + (1));
i__7297__auto___54293 = G__54294;
continue;
} else {
}
break;
}

var G__54291 = args54289.length;
switch (G__54291) {
case 3:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54289.length)].join('')));

}
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_(state))){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_(name))){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_(opts))){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.analyze_str_STAR_(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_passes_STAR_,(function (){var or__6221__auto__ = cljs.core.cst$kw$passes.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.analyzer._STAR_passes_STAR_;
}
})(),cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__6221__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__6221__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.analyze_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_STAR_ = (function cljs$js$eval_STAR_(bound_vars,form,opts,cb){
var the_ns = (function (){var or__6221__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__54312 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54312,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__54312;
}
})();
var _STAR_compiler_STAR_54313 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_54314 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_54315 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_static_fns_STAR_54316 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_ns_STAR_54317 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR_54318 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_54319 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol54320 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_54321 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_static_fns_STAR_ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1));

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map();

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var aenv = cljs.analyzer.empty_env();
var aenv__$1 = (function (){var G__54322 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__54322__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54322,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__54322);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54322__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__54322__$1;
}
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e54323){var cause = e54323;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,[cljs.core.str("Could not eval "),cljs.core.str(form)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ns,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast,opts,((function (ast,aenv,aenv__$1,res,_STAR_compiler_STAR_54313,_STAR_eval_fn_STAR_54314,_STAR_cljs_ns_STAR_54315,_STAR_cljs_static_fns_STAR_54316,_STAR_ns_STAR_54317,_STAR_alias_map_STAR_54318,_STAR_data_readers_STAR_54319,resolve_symbol54320,_STAR_source_map_data_STAR_54321,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var src = [cljs.core.str("goog.provide(\""),cljs.core.str(cljs.core.munge(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))),cljs.core.str("\")")].join('');
var G__54324 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54324) : cb.call(null,G__54324));
}
});})(ast,aenv,aenv__$1,res,_STAR_compiler_STAR_54313,_STAR_eval_fn_STAR_54314,_STAR_cljs_ns_STAR_54315,_STAR_cljs_static_fns_STAR_54316,_STAR_ns_STAR_54317,_STAR_alias_map_STAR_54318,_STAR_data_readers_STAR_54319,resolve_symbol54320,_STAR_source_map_data_STAR_54321,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__7207__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_54325_54328 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_54326_54329 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_54325_54328,_STAR_print_fn_STAR_54326_54329,sb__7207__auto__,ast,aenv,aenv__$1,res,_STAR_compiler_STAR_54313,_STAR_eval_fn_STAR_54314,_STAR_cljs_ns_STAR_54315,_STAR_cljs_static_fns_STAR_54316,_STAR_ns_STAR_54317,_STAR_alias_map_STAR_54318,_STAR_data_readers_STAR_54319,resolve_symbol54320,_STAR_source_map_data_STAR_54321,the_ns,bound_vars__$1){
return (function (x__7208__auto__){
return sb__7207__auto__.append(x__7208__auto__);
});})(_STAR_print_newline_STAR_54325_54328,_STAR_print_fn_STAR_54326_54329,sb__7207__auto__,ast,aenv,aenv__$1,res,_STAR_compiler_STAR_54313,_STAR_eval_fn_STAR_54314,_STAR_cljs_ns_STAR_54315,_STAR_cljs_static_fns_STAR_54316,_STAR_ns_STAR_54317,_STAR_alias_map_STAR_54318,_STAR_data_readers_STAR_54319,resolve_symbol54320,_STAR_source_map_data_STAR_54321,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit(ast);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_54326_54329;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_54325_54328;
}
return [cljs.core.str(sb__7207__auto__)].join('');
})();
var G__54327 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54327) : cb.call(null,G__54327));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_54321;

cljs.tools.reader.resolve_symbol = resolve_symbol54320;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_54319;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_54318;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_54317;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_54316;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_54315;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_54314;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_54313;
}});
/**
 * Evaluate a single ClojureScript form. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * form (s-expr)
 *   the ClojureScript source
 * 
 * opts (map)
 *   compilation options.
 * 
 *   :eval - the eval function to invoke, see *eval-fn*
 *   :load - library resolution function, see *load-fn*
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the result of evalution. If unsuccessful the map will
 *   contain a key :error with an ex-info instance describing the cause of
 *   failure.
 */
cljs.js.eval = (function cljs$js$eval(var_args){
var args54330 = [];
var len__7296__auto___54333 = arguments.length;
var i__7297__auto___54334 = (0);
while(true){
if((i__7297__auto___54334 < len__7296__auto___54333)){
args54330.push((arguments[i__7297__auto___54334]));

var G__54335 = (i__7297__auto___54334 + (1));
i__7297__auto___54334 = G__54335;
continue;
} else {
}
break;
}

var G__54332 = args54330.length;
switch (G__54332) {
case 3:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54330.length)].join('')));

}
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$3 = (function (state,form,cb){
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4(state,form,null,cb);
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$4 = (function (state,form,opts,cb){
return cljs.js.eval_STAR_(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__6221__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__6221__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),form,opts,cb);
});

cljs.js.eval.cljs$lang$maxFixedArity = 4;

cljs.js.compile_str_STAR_ = (function cljs$js$compile_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__6221__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__54373 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54373,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__54373;
}
})();
return ((function (rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
while(true){
var _STAR_compiler_STAR_54390 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_54391 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_54392 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_static_fns_STAR_54393 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_ns_STAR_54394 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR_54395 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_54396 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol54397 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_54398 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map();

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eof,eof,cljs.core.cst$kw$read_DASH_cond,cljs.core.cst$kw$allow,cljs.core.cst$kw$features,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs,null], null), null)], null),rdr)], null);
}catch (e54399){var cause = e54399;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,[cljs.core.str("Could not compile "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__54400 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__54400__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54400,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__54400);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54400__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__54400__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e54401){var cause = e54401;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,[cljs.core.str("Could not compile "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
sb.append((function (){var sb__7207__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_54402_54405 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_54403_54406 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_54402_54405,_STAR_print_fn_STAR_54403_54406,sb__7207__auto__,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_54390,_STAR_eval_fn_STAR_54391,_STAR_cljs_ns_STAR_54392,_STAR_cljs_static_fns_STAR_54393,_STAR_ns_STAR_54394,_STAR_alias_map_STAR_54395,_STAR_data_readers_STAR_54396,resolve_symbol54397,_STAR_source_map_data_STAR_54398,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__7208__auto__){
return sb__7207__auto__.append(x__7208__auto__);
});})(ns,_STAR_print_newline_STAR_54402_54405,_STAR_print_fn_STAR_54403_54406,sb__7207__auto__,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_54390,_STAR_eval_fn_STAR_54391,_STAR_cljs_ns_STAR_54392,_STAR_cljs_static_fns_STAR_54393,_STAR_ns_STAR_54394,_STAR_alias_map_STAR_54395,_STAR_data_readers_STAR_54396,resolve_symbol54397,_STAR_source_map_data_STAR_54398,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit(ast);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_54403_54406;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_54402_54405;
}
return [cljs.core.str(sb__7207__auto__)].join('');
})());

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ns,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,aenv__$1,ast,opts,((function (ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_54390,_STAR_eval_fn_STAR_54391,_STAR_cljs_ns_STAR_54392,_STAR_cljs_static_fns_STAR_54393,_STAR_ns_STAR_54394,_STAR_alias_map_STAR_54395,_STAR_data_readers_STAR_54396,resolve_symbol54397,_STAR_source_map_data_STAR_54398,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
return cljs$js$compile_str_STAR__$_compile_loop(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast));
}
});})(ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_54390,_STAR_eval_fn_STAR_54391,_STAR_cljs_ns_STAR_54392,_STAR_cljs_static_fns_STAR_54393,_STAR_ns_STAR_54394,_STAR_alias_map_STAR_54395,_STAR_data_readers_STAR_54396,resolve_symbol54397,_STAR_source_map_data_STAR_54398,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
);
} else {
var G__54407 = ns;
ns = G__54407;
continue;
}
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,name,source,sb,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.compiler._STAR_source_map_data_STAR_) : cljs.core.deref.call(null,cljs.compiler._STAR_source_map_data_STAR_)),opts);
} else {
}

var G__54404 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,sb.toString()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54404) : cb.call(null,G__54404));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_54398;

cljs.tools.reader.resolve_symbol = resolve_symbol54397;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_54396;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_54395;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_54394;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_54393;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_54392;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_54391;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_54390;
}break;
}
});})(rdr,eof,aenv,sb,the_ns,bound_vars__$1))
.call(null,the_ns);
});
/**
 * Compile ClojureScript source into JavaScript. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 *   :load       - library resolution function, see *load-fn*
 *   :source-map - set to true to generate inline source map information
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the compilation result (string). If unsuccessful the map
 *   will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.compile_str = (function cljs$js$compile_str(var_args){
var args54408 = [];
var len__7296__auto___54411 = arguments.length;
var i__7297__auto___54412 = (0);
while(true){
if((i__7297__auto___54412 < len__7296__auto___54411)){
args54408.push((arguments[i__7297__auto___54412]));

var G__54413 = (i__7297__auto___54412 + (1));
i__7297__auto___54412 = G__54413;
continue;
} else {
}
break;
}

var G__54410 = args54408.length;
switch (G__54410) {
case 3:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54408.length)].join('')));

}
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_(state))){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_(name))){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_(opts))){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.compile_str_STAR_(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__6221__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__6221__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))?cljs.js.sm_data():null)], null),source,name,opts,cb);
});

cljs.js.compile_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_str_STAR_ = (function cljs$js$eval_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__6221__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__54455 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54455,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__54455;
}
})();
var aname = (function (){var G__54456 = name;
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__54456);
} else {
return G__54456;
}
})();
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Evaluating",name], 0));
} else {
}

return ((function (rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
while(true){
var _STAR_compiler_STAR_54474 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_54475 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_54476 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_static_fns_STAR_54477 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_ns_STAR_54478 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR_54479 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_54480 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol54481 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_54482 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map();

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eof,eof,cljs.core.cst$kw$read_DASH_cond,cljs.core.cst$kw$allow,cljs.core.cst$kw$features,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs,null], null), null)], null),rdr)], null);
}catch (e54483){var cause = e54483;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,[cljs.core.str("Could not eval "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__54484 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(ns));
var G__54484__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54484,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__54484);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54484__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__54484__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e54485){var cause = e54485;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,[cljs.core.str("Could not eval "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ns,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast))){
sb.append((function (){var sb__7207__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_54486_54491 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_54487_54492 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_54486_54491,_STAR_print_fn_STAR_54487_54492,sb__7207__auto__,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_54474,_STAR_eval_fn_STAR_54475,_STAR_cljs_ns_STAR_54476,_STAR_cljs_static_fns_STAR_54477,_STAR_ns_STAR_54478,_STAR_alias_map_STAR_54479,_STAR_data_readers_STAR_54480,resolve_symbol54481,_STAR_source_map_data_STAR_54482,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__7208__auto__){
return sb__7207__auto__.append(x__7208__auto__);
});})(ns,_STAR_print_newline_STAR_54486_54491,_STAR_print_fn_STAR_54487_54492,sb__7207__auto__,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_54474,_STAR_eval_fn_STAR_54475,_STAR_cljs_ns_STAR_54476,_STAR_cljs_static_fns_STAR_54477,_STAR_ns_STAR_54478,_STAR_alias_map_STAR_54479,_STAR_data_readers_STAR_54480,resolve_symbol54481,_STAR_source_map_data_STAR_54482,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("goog.provide(\""),cljs.core.str(cljs.core.munge(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))),cljs.core.str("\");")].join('')], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_54487_54492;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_54486_54491;
}
return [cljs.core.str(sb__7207__auto__)].join('');
})());

return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast,opts,((function (ns,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_54474,_STAR_eval_fn_STAR_54475,_STAR_cljs_ns_STAR_54476,_STAR_cljs_static_fns_STAR_54477,_STAR_ns_STAR_54478,_STAR_alias_map_STAR_54479,_STAR_data_readers_STAR_54480,resolve_symbol54481,_STAR_source_map_data_STAR_54482,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
return cljs$js$eval_str_STAR__$_compile_loop(ns_SINGLEQUOTE_);
}
});})(ns,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_54474,_STAR_eval_fn_STAR_54475,_STAR_cljs_ns_STAR_54476,_STAR_cljs_static_fns_STAR_54477,_STAR_ns_STAR_54478,_STAR_alias_map_STAR_54479,_STAR_data_readers_STAR_54480,resolve_symbol54481,_STAR_source_map_data_STAR_54482,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
);
} else {
sb.append((function (){var sb__7207__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_54488_54493 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_54489_54494 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_54488_54493,_STAR_print_fn_STAR_54489_54494,sb__7207__auto__,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_54474,_STAR_eval_fn_STAR_54475,_STAR_cljs_ns_STAR_54476,_STAR_cljs_static_fns_STAR_54477,_STAR_ns_STAR_54478,_STAR_alias_map_STAR_54479,_STAR_data_readers_STAR_54480,resolve_symbol54481,_STAR_source_map_data_STAR_54482,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__7208__auto__){
return sb__7207__auto__.append(x__7208__auto__);
});})(ns,_STAR_print_newline_STAR_54488_54493,_STAR_print_fn_STAR_54489_54494,sb__7207__auto__,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_54474,_STAR_eval_fn_STAR_54475,_STAR_cljs_ns_STAR_54476,_STAR_cljs_static_fns_STAR_54477,_STAR_ns_STAR_54478,_STAR_alias_map_STAR_54479,_STAR_data_readers_STAR_54480,resolve_symbol54481,_STAR_source_map_data_STAR_54482,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;

try{cljs.compiler.emit(ast);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_54489_54494;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_54488_54493;
}
return [cljs.core.str(sb__7207__auto__)].join('');
})());

var G__54495 = ns_SINGLEQUOTE_;
ns = G__54495;
continue;
}
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,aname,source,sb,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.compiler._STAR_source_map_data_STAR_) : cljs.core.deref.call(null,cljs.compiler._STAR_source_map_data_STAR_)),opts);
} else {
}

var js_source = sb.toString();
var evalm = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$lang,cljs.core.cst$kw$clj,cljs.core.cst$kw$name,name,cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(name),cljs.core.cst$kw$source,js_source,cljs.core.cst$kw$cache,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,aname], null))], null);
var complete = ((function (ns,js_source,evalm,form,res,_STAR_compiler_STAR_54474,_STAR_eval_fn_STAR_54475,_STAR_cljs_ns_STAR_54476,_STAR_cljs_static_fns_STAR_54477,_STAR_ns_STAR_54478,_STAR_alias_map_STAR_54479,_STAR_data_readers_STAR_54480,resolve_symbol54481,_STAR_source_map_data_STAR_54482,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([js_source], 0));
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(evalm) : cljs.js._STAR_eval_fn_STAR_.call(null,evalm))], null);
}catch (e54490){var cause = e54490;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,"ERROR",cause));
}})();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
}
});})(ns,js_source,evalm,form,res,_STAR_compiler_STAR_54474,_STAR_eval_fn_STAR_54475,_STAR_cljs_ns_STAR_54476,_STAR_cljs_static_fns_STAR_54477,_STAR_ns_STAR_54478,_STAR_alias_map_STAR_54479,_STAR_data_readers_STAR_54480,resolve_symbol54481,_STAR_source_map_data_STAR_54482,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var temp__4655__auto__ = cljs.core.cst$kw$cache_DASH_source.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(evalm,complete) : f.call(null,evalm,complete));
} else {
return complete(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null));
}
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_54482;

cljs.tools.reader.resolve_symbol = resolve_symbol54481;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_54480;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_54479;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_54478;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_54477;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_54476;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_54475;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_54474;
}break;
}
});})(rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
.call(null,cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
});
/**
 * Evalute ClojureScript source given as a string. The parameters:
 * 
 *   state (atom)
 *  the compiler state
 * 
 *   source (string)
 *  the ClojureScript source
 * 
 *   name (symbol)
 *  optional, the name of the source
 * 
 *   opts (map)
 *  compilation options.
 * 
 *  :eval         - eval function to invoke, see *eval-fn*
 *  :load         - library resolution function, see *load-fn*
 *  :source-map   - set to true to generate inline source map information
 *  :cache-source - optional, a function to run side-effects with the
 *                  compilation result prior to actual evalution. This function
 *                  takes two arguments, the first is the eval map, the source
 *                  will be under :source. The second argument is a callback of
 *                  one argument. If an error occurs an :error key should be
 *                  supplied.
 * 
 *   cb (function)
 *  callback, will be invoked with a map. If succesful the map will contain
 *  a :value key with the result of evaluation and :ns the current namespace.
 *  If unsuccessful will contain a :error key with an ex-info instance describing
 *  the cause of failure.
 */
cljs.js.eval_str = (function cljs$js$eval_str(var_args){
var args54496 = [];
var len__7296__auto___54499 = arguments.length;
var i__7297__auto___54500 = (0);
while(true){
if((i__7297__auto___54500 < len__7296__auto___54499)){
args54496.push((arguments[i__7297__auto___54500]));

var G__54501 = (i__7297__auto___54500 + (1));
i__7297__auto___54500 = G__54501;
continue;
} else {
}
break;
}

var G__54498 = args54496.length;
switch (G__54498) {
case 3:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54496.length)].join('')));

}
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_(state))){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_(name))){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_(opts))){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.eval_str_STAR_(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__6221__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__6221__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.eval_str.cljs$lang$maxFixedArity = 5;
