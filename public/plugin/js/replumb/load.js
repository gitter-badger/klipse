// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('replumb.load');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('replumb.cache');
goog.require('goog.Promise');
goog.require('clojure.string');
goog.require('replumb.common');
goog.require('cljs.reader');
/**
 * A set containing namespaces already loaded.
 */
replumb.load.loaded_js_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [cljs.core.cst$sym$cljs$compiler,null,cljs.core.cst$sym$cljs$source_DASH_map$base64,null,cljs.core.cst$sym$cljs$source_DASH_map$base64_DASH_vlq,null,cljs.core.cst$sym$cljs$stacktrace,null,cljs.core.cst$sym$cljs$tools$reader$reader_DASH_types,null,cljs.core.cst$sym$cljs$env,null,cljs.core.cst$sym$cognitect$transit,null,cljs.core.cst$sym$clojure$set,null,cljs.core.cst$sym$cljs$tools$reader$impl$utils,null,cljs.core.cst$sym$cljs$tagged_DASH_literals,null,cljs.core.cst$sym$cljs$analyzer,null,cljs.core.cst$sym$cljs$source_DASH_map,null,cljs.core.cst$sym$clojure$string,null,cljs.core.cst$sym$cljs$reader,null], null), null);
/**
 * This load function just calls:
 *   (cb {:lang   :js
 *     :source ""})
 */
replumb.load.fake_load_fn_BANG_ = (function replumb$load$fake_load_fn_BANG_(_,cb){
var G__54549 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lang,cljs.core.cst$kw$js,cljs.core.cst$kw$source,""], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__54549) : cb.call(null,G__54549));
});
/**
 * Mimics "Resource not found" as it just calls: (cb nil)
 */
replumb.load.no_resource_load_fn_BANG_ = (function replumb$load$no_resource_load_fn_BANG_(_,cb){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(null) : cb.call(null,null));
});
/**
 * Converts a filename to a lang keyword by inspecting the file
 *   extension.
 */
replumb.load.filename__GT_lang = (function replumb$load$filename__GT_lang(file_name){
if(clojure.string.ends_with_QMARK_(file_name,".js")){
return cljs.core.cst$kw$js;
} else {
return cljs.core.cst$kw$clj;
}
});
/**
 * Read the cache source depending on whether is a edn or json file
 */
replumb.load.read_cache_source = (function replumb$load$read_cache_source(cache_path,cache_source){
if(clojure.string.ends_with_QMARK_(cache_path,".edn")){
return cljs.reader.read_string(cache_source);
} else {
return replumb.cache.transit_json__GT_cljs(cache_source);
}
});
/**
 * Returns the correct file extensions to try (no dot prefix), following
 *   the cljs.js/*load-fn* docstring.
 */
replumb.load.extensions = (function replumb$load$extensions(var_args){
var args54550 = [];
var len__7296__auto___54553 = arguments.length;
var i__7297__auto___54554 = (0);
while(true){
if((i__7297__auto___54554 < len__7296__auto___54553)){
args54550.push((arguments[i__7297__auto___54554]));

var G__54555 = (i__7297__auto___54554 + (1));
i__7297__auto___54554 = G__54555;
continue;
} else {
}
break;
}

var G__54552 = args54550.length;
switch (G__54552) {
case 0:
return replumb.load.extensions.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replumb.load.extensions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54550.length)].join('')));

}
});

replumb.load.extensions.cljs$core$IFn$_invoke$arity$0 = (function (){
return replumb.load.extensions.cljs$core$IFn$_invoke$arity$1(false);
});

replumb.load.extensions.cljs$core$IFn$_invoke$arity$1 = (function (macros){
if(cljs.core.truth_(macros)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clj","cljc"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs","cljc","js"], null);
}
});

replumb.load.extensions.cljs$lang$maxFixedArity = 1;

/**
 * Loop on the file-names using a supplied read-file-fn (fn [file-name
 *   src-cb] ...), calling back cb upon first successful read, otherwise
 *   calling back with nil.
 *   This function does not check whether parameters are nil, please do it
 *   in the caller.
 */
replumb.load.read_files_and_callback_BANG_ = (function replumb$load$read_files_and_callback_BANG_(verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb){
var temp__4655__auto__ = cljs.core.first(file_names);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Reading",name,"..."], 0));
} else {
}

var G__54570 = name;
var G__54571 = ((function (G__54570,name,temp__4655__auto__){
return (function (source){
if(cljs.core.truth_(source)){
var G__54572 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lang,replumb.load.filename__GT_lang(name),cljs.core.cst$kw$source,source], null);
return (load_fn_cb.cljs$core$IFn$_invoke$arity$1 ? load_fn_cb.cljs$core$IFn$_invoke$arity$1(G__54572) : load_fn_cb.call(null,G__54572));
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["No source found..."], 0));
} else {
}

return replumb$load$read_files_and_callback_BANG_(verbose_QMARK_,cljs.core.rest(file_names),read_file_fn_BANG_,load_fn_cb);
}
});})(G__54570,name,temp__4655__auto__))
;
return (read_file_fn_BANG_.cljs$core$IFn$_invoke$arity$2 ? read_file_fn_BANG_.cljs$core$IFn$_invoke$arity$2(G__54570,G__54571) : read_file_fn_BANG_.call(null,G__54570,G__54571));
} else {
return (load_fn_cb.cljs$core$IFn$_invoke$arity$1 ? load_fn_cb.cljs$core$IFn$_invoke$arity$1(null) : load_fn_cb.call(null,null));
}
});
replumb.load.read_cache_file = (function replumb$load$read_cache_file(p__54573,js_source){
var map__54580 = p__54573;
var map__54580__$1 = ((((!((map__54580 == null)))?((((map__54580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54580):map__54580);
var verbose_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54580__$1,cljs.core.cst$kw$verbose_QMARK_);
var read_file_fn_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54580__$1,cljs.core.cst$kw$read_DASH_file_DASH_fn_BANG_);
var js_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54580__$1,cljs.core.cst$kw$js_DASH_path);
var cache_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54580__$1,cljs.core.cst$kw$cache_DASH_path);
var try_next_files_pair_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54580__$1,cljs.core.cst$kw$try_DASH_next_DASH_files_DASH_pair_DASH_fn);
var load_fn_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54580__$1,cljs.core.cst$kw$load_DASH_fn_DASH_cb);
var G__54583 = cache_path;
var G__54584 = ((function (G__54583,map__54580,map__54580__$1,verbose_QMARK_,read_file_fn_BANG_,js_path,cache_path,try_next_files_pair_fn,load_fn_cb){
return (function (cache_source){
if(cljs.core.truth_(cache_source)){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Retrieved JavaScript from: "),cljs.core.str((cljs.core.truth_(js_source)?js_path:"<skipped>"))].join('')], 0));

replumb.common.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Retrieved cache file from: "),cljs.core.str(cache_path)].join('')], 0));
} else {
}

var G__54585 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lang,replumb.load.filename__GT_lang(js_path),cljs.core.cst$kw$source,js_source,cljs.core.cst$kw$cache,replumb.load.read_cache_source(cache_path,cache_source)], null);
return (load_fn_cb.cljs$core$IFn$_invoke$arity$1 ? load_fn_cb.cljs$core$IFn$_invoke$arity$1(G__54585) : load_fn_cb.call(null,G__54585));
} else {
return (try_next_files_pair_fn.cljs$core$IFn$_invoke$arity$0 ? try_next_files_pair_fn.cljs$core$IFn$_invoke$arity$0() : try_next_files_pair_fn.call(null));
}
});})(G__54583,map__54580,map__54580__$1,verbose_QMARK_,read_file_fn_BANG_,js_path,cache_path,try_next_files_pair_fn,load_fn_cb))
;
return (read_file_fn_BANG_.cljs$core$IFn$_invoke$arity$2 ? read_file_fn_BANG_.cljs$core$IFn$_invoke$arity$2(G__54583,G__54584) : read_file_fn_BANG_.call(null,G__54583,G__54584));
});
replumb.load.read_js_file = (function replumb$load$read_js_file(p__54586,read_cache_file_fn){
var map__54591 = p__54586;
var map__54591__$1 = ((((!((map__54591 == null)))?((((map__54591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54591):map__54591);
var opts = map__54591__$1;
var verbose_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54591__$1,cljs.core.cst$kw$verbose_QMARK_);
var read_file_fn_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54591__$1,cljs.core.cst$kw$read_DASH_file_DASH_fn_BANG_);
var js_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54591__$1,cljs.core.cst$kw$js_DASH_path);
var cache_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54591__$1,cljs.core.cst$kw$cache_DASH_path);
var try_next_files_pair_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54591__$1,cljs.core.cst$kw$try_DASH_next_DASH_files_DASH_pair_DASH_fn);
var G__54593 = js_path;
var G__54594 = ((function (G__54593,map__54591,map__54591__$1,opts,verbose_QMARK_,read_file_fn_BANG_,js_path,cache_path,try_next_files_pair_fn){
return (function (js_source){
if(cljs.core.truth_((function (){var and__6209__auto__ = js_source;
if(cljs.core.truth_(and__6209__auto__)){
return replumb.cache.cached_js_valid_QMARK_(js_source);
} else {
return and__6209__auto__;
}
})())){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Reading",cache_path,"..."], 0));
} else {
}

return (read_cache_file_fn.cljs$core$IFn$_invoke$arity$2 ? read_cache_file_fn.cljs$core$IFn$_invoke$arity$2(opts,js_source) : read_cache_file_fn.call(null,opts,js_source));
} else {
return (try_next_files_pair_fn.cljs$core$IFn$_invoke$arity$0 ? try_next_files_pair_fn.cljs$core$IFn$_invoke$arity$0() : try_next_files_pair_fn.call(null));
}
});})(G__54593,map__54591,map__54591__$1,opts,verbose_QMARK_,read_file_fn_BANG_,js_path,cache_path,try_next_files_pair_fn))
;
return (read_file_fn_BANG_.cljs$core$IFn$_invoke$arity$2 ? read_file_fn_BANG_.cljs$core$IFn$_invoke$arity$2(G__54593,G__54594) : read_file_fn_BANG_.call(null,G__54593,G__54594));
});
/**
 * Loops over cached-file-names in order to retrieve them. It needs to find
 *   both the related .js file and .cache.json file, otherwise keeps looping.
 *   If it does not find the cached files calls read-files-and-callback! and
 *   tries to load the unevaluated ones.
 *   This function does not check whether parameters are nil, please do it in
 *   the caller.
 */
replumb.load.read_files_from_cache_and_callback_BANG_ = (function replumb$load$read_files_from_cache_and_callback_BANG_(verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb,cached_file_names,name){
var temp__4655__auto__ = cljs.core.first(cached_file_names);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__54604 = temp__4655__auto__;
var js_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54604,(0),null);
var cache_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54604,(1),null);
var try_next_files_pair = ((function (vec__54604,js_path,cache_path,temp__4655__auto__){
return (function (){
return replumb$load$read_files_from_cache_and_callback_BANG_(verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb,cljs.core.rest(cached_file_names),name);
});})(vec__54604,js_path,cache_path,temp__4655__auto__))
;
var cache_opts = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$verbose_QMARK_,verbose_QMARK_,cljs.core.cst$kw$read_DASH_file_DASH_fn_BANG_,read_file_fn_BANG_,cljs.core.cst$kw$load_DASH_fn_DASH_cb,load_fn_cb,cljs.core.cst$kw$js_DASH_path,js_path,cljs.core.cst$kw$cache_DASH_path,cache_path,cljs.core.cst$kw$try_DASH_next_DASH_files_DASH_pair_DASH_fn,try_next_files_pair], null);
if(cljs.core.contains_QMARK_(replumb.load.loaded_js_set,name)){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Skipping js loading for ",name], 0));
} else {
}

return replumb.load.read_cache_file(cache_opts,null);
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Reading",js_path,"..."], 0));
} else {
}

return replumb.load.read_js_file(cache_opts,replumb.load.read_cache_file);
}
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Cannot load cache files..."], 0));
} else {
}

return replumb.load.read_files_and_callback_BANG_(verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb);
}
});
/**
 * Produces a sequence of file paths based on src-paths and file-path (a
 *   path already including one or more "/" and an extension).
 */
replumb.load.file_paths = (function replumb$load$file_paths(src_paths,file_path){
var iter__7001__auto__ = (function replumb$load$file_paths_$_iter__54613(s__54614){
return (new cljs.core.LazySeq(null,(function (){
var s__54614__$1 = s__54614;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__54614__$1);
if(temp__4657__auto__){
var s__54614__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54614__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__54614__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__54616 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__54615 = (0);
while(true){
if((i__54615 < size__7000__auto__)){
var src_path = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__54615);
cljs.core.chunk_append(b__54616,[cljs.core.str(replumb.common.normalize_path(src_path)),cljs.core.str(file_path)].join(''));

var G__54619 = (i__54615 + (1));
i__54615 = G__54619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54616),replumb$load$file_paths_$_iter__54613(cljs.core.chunk_rest(s__54614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54616),null);
}
} else {
var src_path = cljs.core.first(s__54614__$2);
return cljs.core.cons([cljs.core.str(replumb.common.normalize_path(src_path)),cljs.core.str(file_path)].join(''),replumb$load$file_paths_$_iter__54613(cljs.core.rest(s__54614__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__(src_paths);
});
/**
 * Produces a sequence of file names to try reading from src-paths and
 *   file-path-without-ext (it should already include one or more
 *   "/"). The right order and extension is taken from cljs.js/*load-fn*
 *   docstring and takes into consideration the macros parameter.
 */
replumb.load.file_paths_for_load_fn = (function replumb$load$file_paths_for_load_fn(src_paths,macros,file_path_without_ext){
var iter__7001__auto__ = (function replumb$load$file_paths_for_load_fn_$_iter__54631(s__54632){
return (new cljs.core.LazySeq(null,(function (){
var s__54632__$1 = s__54632;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__54632__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var extension = cljs.core.first(xs__5205__auto__);
var iterys__6997__auto__ = ((function (s__54632__$1,extension,xs__5205__auto__,temp__4657__auto__){
return (function replumb$load$file_paths_for_load_fn_$_iter__54631_$_iter__54633(s__54634){
return (new cljs.core.LazySeq(null,((function (s__54632__$1,extension,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__54634__$1 = s__54634;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__54634__$1);
if(temp__4657__auto____$1){
var s__54634__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54634__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__54634__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__54636 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__54635 = (0);
while(true){
if((i__54635 < size__7000__auto__)){
var src_path = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__54635);
cljs.core.chunk_append(b__54636,[cljs.core.str(src_path),cljs.core.str("."),cljs.core.str(extension)].join(''));

var G__54642 = (i__54635 + (1));
i__54635 = G__54642;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54636),replumb$load$file_paths_for_load_fn_$_iter__54631_$_iter__54633(cljs.core.chunk_rest(s__54634__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54636),null);
}
} else {
var src_path = cljs.core.first(s__54634__$2);
return cljs.core.cons([cljs.core.str(src_path),cljs.core.str("."),cljs.core.str(extension)].join(''),replumb$load$file_paths_for_load_fn_$_iter__54631_$_iter__54633(cljs.core.rest(s__54634__$2)));
}
} else {
return null;
}
break;
}
});})(s__54632__$1,extension,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__54632__$1,extension,xs__5205__auto__,temp__4657__auto__))
;
var fs__6998__auto__ = cljs.core.seq(iterys__6997__auto__(replumb.load.file_paths(src_paths,file_path_without_ext)));
if(fs__6998__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__6998__auto__,replumb$load$file_paths_for_load_fn_$_iter__54631(cljs.core.rest(s__54632__$1)));
} else {
var G__54643 = cljs.core.rest(s__54632__$1);
s__54632__$1 = G__54643;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__(replumb.load.extensions.cljs$core$IFn$_invoke$arity$1(macros));
});
/**
 * Produces a sequence of pairs containing the file paths to try reading for
 *   evaluation caching.
 *   The first file is always a ".js" file while the second is the cache file
 *   and can be a ".json" or ".edn" file.
 */
replumb.load.cache_file_paths_for_load_fn = (function replumb$load$cache_file_paths_for_load_fn(cache_paths,macros,file_path_without_ext){
var iter__7001__auto__ = (function replumb$load$cache_file_paths_for_load_fn_$_iter__54664(s__54665){
return (new cljs.core.LazySeq(null,(function (){
var s__54665__$1 = s__54665;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__54665__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var extension = cljs.core.first(xs__5205__auto__);
var iterys__6997__auto__ = ((function (s__54665__$1,extension,xs__5205__auto__,temp__4657__auto__){
return (function replumb$load$cache_file_paths_for_load_fn_$_iter__54664_$_iter__54666(s__54667){
return (new cljs.core.LazySeq(null,((function (s__54665__$1,extension,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__54667__$1 = s__54667;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__54667__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var cache_extension = cljs.core.first(xs__5205__auto____$1);
var iterys__6997__auto__ = ((function (s__54667__$1,s__54665__$1,cache_extension,xs__5205__auto____$1,temp__4657__auto____$1,extension,xs__5205__auto__,temp__4657__auto__){
return (function replumb$load$cache_file_paths_for_load_fn_$_iter__54664_$_iter__54666_$_iter__54668(s__54669){
return (new cljs.core.LazySeq(null,((function (s__54667__$1,s__54665__$1,cache_extension,xs__5205__auto____$1,temp__4657__auto____$1,extension,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__54669__$1 = s__54669;
while(true){
var temp__4657__auto____$2 = cljs.core.seq(s__54669__$1);
if(temp__4657__auto____$2){
var s__54669__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__54669__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__54669__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__54671 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__54670 = (0);
while(true){
if((i__54670 < size__7000__auto__)){
var src_path = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__54670);
cljs.core.chunk_append(b__54671,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(src_path),cljs.core.str(".js")].join(''),[cljs.core.str(src_path),cljs.core.str(extension),cljs.core.str(cache_extension)].join('')], null));

var G__54683 = (i__54670 + (1));
i__54670 = G__54683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54671),replumb$load$cache_file_paths_for_load_fn_$_iter__54664_$_iter__54666_$_iter__54668(cljs.core.chunk_rest(s__54669__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54671),null);
}
} else {
var src_path = cljs.core.first(s__54669__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(src_path),cljs.core.str(".js")].join(''),[cljs.core.str(src_path),cljs.core.str(extension),cljs.core.str(cache_extension)].join('')], null),replumb$load$cache_file_paths_for_load_fn_$_iter__54664_$_iter__54666_$_iter__54668(cljs.core.rest(s__54669__$2)));
}
} else {
return null;
}
break;
}
});})(s__54667__$1,s__54665__$1,cache_extension,xs__5205__auto____$1,temp__4657__auto____$1,extension,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__54667__$1,s__54665__$1,cache_extension,xs__5205__auto____$1,temp__4657__auto____$1,extension,xs__5205__auto__,temp__4657__auto__))
;
var fs__6998__auto__ = cljs.core.seq(iterys__6997__auto__(cljs.core.into.cljs$core$IFn$_invoke$arity$2(replumb.load.file_paths(cache_paths,file_path_without_ext),replumb.load.file_paths(cache_paths,replumb.cache.cache_prefix_for_path.cljs$core$IFn$_invoke$arity$2(file_path_without_ext,macros)))));
if(fs__6998__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__6998__auto__,replumb$load$cache_file_paths_for_load_fn_$_iter__54664_$_iter__54666(cljs.core.rest(s__54667__$1)));
} else {
var G__54684 = cljs.core.rest(s__54667__$1);
s__54667__$1 = G__54684;
continue;
}
} else {
return null;
}
break;
}
});})(s__54665__$1,extension,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__54665__$1,extension,xs__5205__auto__,temp__4657__auto__))
;
var fs__6998__auto__ = cljs.core.seq(iterys__6997__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cache.json",".cache.edn"], null)));
if(fs__6998__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__6998__auto__,replumb$load$cache_file_paths_for_load_fn_$_iter__54664(cljs.core.rest(s__54665__$1)));
} else {
var G__54685 = cljs.core.rest(s__54665__$1);
s__54665__$1 = G__54685;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__(cljs.core.cons("",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__7001__auto__){
return (function (p1__54644_SHARP_){
return [cljs.core.str("."),cljs.core.str(p1__54644_SHARP_)].join('');
});})(iter__7001__auto__))
,replumb.load.extensions.cljs$core$IFn$_invoke$arity$1(macros))));
});
/**
 * Produces a sequence of filenames to try reading crafted for goog
 *   libraries, in the order they should be tried.
 */
replumb.load.file_paths_for_closure = (function replumb$load$file_paths_for_closure(src_paths,goog_path){
var iter__7001__auto__ = (function replumb$load$file_paths_for_closure_$_iter__54692(s__54693){
return (new cljs.core.LazySeq(null,(function (){
var s__54693__$1 = s__54693;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__54693__$1);
if(temp__4657__auto__){
var s__54693__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54693__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__54693__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__54695 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__54694 = (0);
while(true){
if((i__54694 < size__7000__auto__)){
var src_path = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__54694);
cljs.core.chunk_append(b__54695,[cljs.core.str(replumb.common.normalize_path(src_path)),cljs.core.str(goog_path),cljs.core.str(".js")].join(''));

var G__54698 = (i__54694 + (1));
i__54694 = G__54698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54695),replumb$load$file_paths_for_closure_$_iter__54692(cljs.core.chunk_rest(s__54693__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54695),null);
}
} else {
var src_path = cljs.core.first(s__54693__$2);
return cljs.core.cons([cljs.core.str(replumb.common.normalize_path(src_path)),cljs.core.str(goog_path),cljs.core.str(".js")].join(''),replumb$load$file_paths_for_closure_$_iter__54692(cljs.core.rest(s__54693__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__(src_paths);
});
/**
 * Given the content of goog/deps.js file, create a map
 *   provide->path (without extension) of Google dependencies.
 * 
 *   Adapted from planck:
 *   https://github.com/mfikes/planck/blob/master/planck-cljs/src/planck/repl.cljs#L438-L451
 */
replumb.load.goog_deps_map = (function replumb$load$goog_deps_map(deps_js_content){
var paths_to_provides = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54720){
var vec__54721 = p__54720;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54721,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54721,(1),null);
var provides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54721,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.re_seq(/'(.*?)'/,provides))], null);
}),cljs.core.re_seq(/\ngoog\.addDependency\('(.*)', \[(.*?)\].*/,deps_js_content));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7001__auto__ = ((function (paths_to_provides){
return (function replumb$load$goog_deps_map_$_iter__54724(s__54725){
return (new cljs.core.LazySeq(null,((function (paths_to_provides){
return (function (){
var s__54725__$1 = s__54725;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__54725__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__54736 = cljs.core.first(xs__5205__auto__);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54736,(0),null);
var provides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54736,(1),null);
var iterys__6997__auto__ = ((function (s__54725__$1,vec__54736,path,provides,xs__5205__auto__,temp__4657__auto__,paths_to_provides){
return (function replumb$load$goog_deps_map_$_iter__54724_$_iter__54726(s__54727){
return (new cljs.core.LazySeq(null,((function (s__54725__$1,vec__54736,path,provides,xs__5205__auto__,temp__4657__auto__,paths_to_provides){
return (function (){
var s__54727__$1 = s__54727;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__54727__$1);
if(temp__4657__auto____$1){
var s__54727__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54727__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__54727__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__54729 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__54728 = (0);
while(true){
if((i__54728 < size__7000__auto__)){
var provide = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__54728);
cljs.core.chunk_append(b__54729,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(provide),[cljs.core.str("goog/"),cljs.core.str(cljs.core.second(cljs.core.re_find(/(.*)\.js$/,path)))].join('')], null));

var G__54741 = (i__54728 + (1));
i__54728 = G__54741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54729),replumb$load$goog_deps_map_$_iter__54724_$_iter__54726(cljs.core.chunk_rest(s__54727__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54729),null);
}
} else {
var provide = cljs.core.first(s__54727__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(provide),[cljs.core.str("goog/"),cljs.core.str(cljs.core.second(cljs.core.re_find(/(.*)\.js$/,path)))].join('')], null),replumb$load$goog_deps_map_$_iter__54724_$_iter__54726(cljs.core.rest(s__54727__$2)));
}
} else {
return null;
}
break;
}
});})(s__54725__$1,vec__54736,path,provides,xs__5205__auto__,temp__4657__auto__,paths_to_provides))
,null,null));
});})(s__54725__$1,vec__54736,path,provides,xs__5205__auto__,temp__4657__auto__,paths_to_provides))
;
var fs__6998__auto__ = cljs.core.seq(iterys__6997__auto__(provides));
if(fs__6998__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__6998__auto__,replumb$load$goog_deps_map_$_iter__54724(cljs.core.rest(s__54725__$1)));
} else {
var G__54742 = cljs.core.rest(s__54725__$1);
s__54725__$1 = G__54742;
continue;
}
} else {
return null;
}
break;
}
});})(paths_to_provides))
,null,null));
});})(paths_to_provides))
;
return iter__7001__auto__(paths_to_provides);
})());
});
/**
 * Return a promise that resolves with the result of accumulating the
 *   actual call to replumb.repl/read-eval-call on the source with results.
 */
replumb.load.read_goog_file_promise = (function replumb$load$read_goog_file_promise(verbose_QMARK_,read_file_fn_BANG_,path,results){
if(cljs.core.map_QMARK_(results)){
} else {
throw (new Error("Assert failed: (map? results)"));
}

return (new goog.Promise((function (resolve,_){
var deps_path = [cljs.core.str(replumb.common.normalize_path(path)),cljs.core.str("goog/deps.js")].join('');
var G__54748 = deps_path;
var G__54749 = ((function (G__54748,deps_path){
return (function (content){
var G__54750 = (cljs.core.truth_(content)?(function (){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Found valid",deps_path], 0));
} else {
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([results,replumb.load.goog_deps_map(content)], 0));
})()
:results);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__54750) : resolve.call(null,G__54750));
});})(G__54748,deps_path))
;
return (read_file_fn_BANG_.cljs$core$IFn$_invoke$arity$2 ? read_file_fn_BANG_.cljs$core$IFn$_invoke$arity$2(G__54748,G__54749) : read_file_fn_BANG_.call(null,G__54748,G__54749));
})));
});
/**
 * Return a promise containing a map Google Closure symbol -> file
 *   path (string without extension) as in:
 * 
 *   {goog.a11y.aria.DropEffectValues "goog/a11y/aria/attributes"
 * goog.labs.i18n.ListFormatSymbols_en_BW "goog/labs/i18n/listsymbolsext"
 * ...}
 * 
 *   It merges maps if many deps.js are on the source path, precedence to
 *   the rightmost (as per merge).
 */
replumb.load.goog_closure_index_promise_BANG_ = (function replumb$load$goog_closure_index_promise_BANG_(verbose_QMARK_,src_paths,read_file_fn_BANG_){
var read_promise = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(replumb.load.read_goog_file_promise,verbose_QMARK_,read_file_fn_BANG_);
if(cljs.core.truth_(read_file_fn_BANG_)){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Discovering goog/deps.js in",src_paths], 0));
} else {
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (read_promise){
return (function (pmses,path){
return pmses.then(((function (read_promise){
return (function (p1__54751_SHARP_){
return (read_promise.cljs$core$IFn$_invoke$arity$2 ? read_promise.cljs$core$IFn$_invoke$arity$2(path,p1__54751_SHARP_) : read_promise.call(null,path,p1__54751_SHARP_));
});})(read_promise))
,((function (read_promise){
return (function (){
var G__54756 = path;
var G__54757 = cljs.core.PersistentArrayMap.EMPTY;
return (read_promise.cljs$core$IFn$_invoke$arity$2 ? read_promise.cljs$core$IFn$_invoke$arity$2(G__54756,G__54757) : read_promise.call(null,G__54756,G__54757));
});})(read_promise))
);
});})(read_promise))
,(function (){var G__54758 = cljs.core.PersistentArrayMap.EMPTY;
return goog.Promise.resolve(G__54758);
})(),src_paths);
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["No :read-file-fn! provided, skipping goog/deps.js discovering..."], 0));
} else {
}

var G__54759 = cljs.core.PersistentArrayMap.EMPTY;
return goog.Promise.resolve(G__54759);
}
});
replumb.load.skip_load_QMARK_ = (function replumb$load$skip_load_QMARK_(p__54760){
var map__54763 = p__54760;
var map__54763__$1 = ((((!((map__54763 == null)))?((((map__54763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54763):map__54763);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54763__$1,cljs.core.cst$kw$name);
var macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54763__$1,cljs.core.cst$kw$macros);
var or__6221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$cljs$core);
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$cljs$analyzer);
if(or__6221__auto____$1){
return or__6221__auto____$1;
} else {
var or__6221__auto____$2 = (function (){var and__6209__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$cljs$pprint);
if(and__6209__auto__){
return macros;
} else {
return and__6209__auto__;
}
})();
if(cljs.core.truth_(or__6221__auto____$2)){
return or__6221__auto____$2;
} else {
var or__6221__auto____$3 = (function (){var and__6209__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$cljs$test);
if(and__6209__auto__){
return macros;
} else {
return and__6209__auto__;
}
})();
if(cljs.core.truth_(or__6221__auto____$3)){
return or__6221__auto____$3;
} else {
var and__6209__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$clojure$template);
if(and__6209__auto__){
return macros;
} else {
return and__6209__auto__;
}
}
}
}
}
});
