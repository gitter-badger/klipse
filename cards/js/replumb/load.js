// Compiled by ClojureScript 1.9.36 {}
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
replumb.load.loaded_js_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Symbol(null,"cljs.compiler","cljs.compiler",-77239712,null),null,new cljs.core.Symbol(null,"cljs.source-map.base64","cljs.source-map.base64",-1764326399,null),null,new cljs.core.Symbol(null,"cljs.source-map.base64-vlq","cljs.source-map.base64-vlq",-397707708,null),null,new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",880035689,null),null,new cljs.core.Symbol(null,"cljs.tools.reader.reader-types","cljs.tools.reader.reader-types",-346100821,null),null,new cljs.core.Symbol(null,"cljs.env","cljs.env",-1810013139,null),null,new cljs.core.Symbol(null,"cognitect.transit","cognitect.transit",-750660177,null),null,new cljs.core.Symbol(null,"clojure.set","clojure.set",-630955632,null),null,new cljs.core.Symbol(null,"cljs.tools.reader.impl.utils","cljs.tools.reader.impl.utils",1797659699,null),null,new cljs.core.Symbol(null,"cljs.tagged-literals","cljs.tagged-literals",387033363,null),null,new cljs.core.Symbol(null,"cljs.analyzer","cljs.analyzer",1897881911,null),null,new cljs.core.Symbol(null,"cljs.source-map","cljs.source-map",2108014936,null),null,new cljs.core.Symbol(null,"clojure.string","clojure.string",-1415552165,null),null,new cljs.core.Symbol(null,"cljs.reader","cljs.reader",1327473948,null),null], null), null);
/**
 * This load function just calls:
 *   (cb {:lang   :js
 *     :source ""})
 */
replumb.load.fake_load_fn_BANG_ = (function replumb$load$fake_load_fn_BANG_(_,cb){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
});
/**
 * Mimics "Resource not found" as it just calls: (cb nil)
 */
replumb.load.no_resource_load_fn_BANG_ = (function replumb$load$no_resource_load_fn_BANG_(_,cb){
return cb.call(null,null);
});
/**
 * Converts a filename to a lang keyword by inspecting the file
 *   extension.
 */
replumb.load.filename__GT_lang = (function replumb$load$filename__GT_lang(file_name){
if(clojure.string.ends_with_QMARK_.call(null,file_name,".js")){
return new cljs.core.Keyword(null,"js","js",1768080579);
} else {
return new cljs.core.Keyword(null,"clj","clj",-660495428);
}
});
/**
 * Read the cache source depending on whether is a edn or json file
 */
replumb.load.read_cache_source = (function replumb$load$read_cache_source(cache_path,cache_source){
if(clojure.string.ends_with_QMARK_.call(null,cache_path,".edn")){
return cljs.reader.read_string.call(null,cache_source);
} else {
return replumb.cache.transit_json__GT_cljs.call(null,cache_source);
}
});
/**
 * Returns the correct file extensions to try (no dot prefix), following
 *   the cljs.js/*load-fn* docstring.
 */
replumb.load.extensions = (function replumb$load$extensions(var_args){
var args64581 = [];
var len__7296__auto___64584 = arguments.length;
var i__7297__auto___64585 = (0);
while(true){
if((i__7297__auto___64585 < len__7296__auto___64584)){
args64581.push((arguments[i__7297__auto___64585]));

var G__64586 = (i__7297__auto___64585 + (1));
i__7297__auto___64585 = G__64586;
continue;
} else {
}
break;
}

var G__64583 = args64581.length;
switch (G__64583) {
case 0:
return replumb.load.extensions.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replumb.load.extensions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64581.length)].join('')));

}
});

replumb.load.extensions.cljs$core$IFn$_invoke$arity$0 = (function (){
return replumb.load.extensions.call(null,false);
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
var temp__4655__auto__ = cljs.core.first.call(null,file_names);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Reading",name,"...");
} else {
}

return read_file_fn_BANG_.call(null,name,((function (name,temp__4655__auto__){
return (function (source){
if(cljs.core.truth_(source)){
return load_fn_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),replumb.load.filename__GT_lang.call(null,name),new cljs.core.Keyword(null,"source","source",-433931539),source], null));
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"No source found...");
} else {
}

return replumb$load$read_files_and_callback_BANG_.call(null,verbose_QMARK_,cljs.core.rest.call(null,file_names),read_file_fn_BANG_,load_fn_cb);
}
});})(name,temp__4655__auto__))
);
} else {
return load_fn_cb.call(null,null);
}
});
replumb.load.read_cache_file = (function replumb$load$read_cache_file(p__64588,js_source){
var map__64591 = p__64588;
var map__64591__$1 = ((((!((map__64591 == null)))?((((map__64591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64591):map__64591);
var verbose_QMARK_ = cljs.core.get.call(null,map__64591__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var read_file_fn_BANG_ = cljs.core.get.call(null,map__64591__$1,new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191));
var js_path = cljs.core.get.call(null,map__64591__$1,new cljs.core.Keyword(null,"js-path","js-path",1036293462));
var cache_path = cljs.core.get.call(null,map__64591__$1,new cljs.core.Keyword(null,"cache-path","cache-path",1799646239));
var try_next_files_pair_fn = cljs.core.get.call(null,map__64591__$1,new cljs.core.Keyword(null,"try-next-files-pair-fn","try-next-files-pair-fn",-584120304));
var load_fn_cb = cljs.core.get.call(null,map__64591__$1,new cljs.core.Keyword(null,"load-fn-cb","load-fn-cb",-59460477));
return read_file_fn_BANG_.call(null,cache_path,((function (map__64591,map__64591__$1,verbose_QMARK_,read_file_fn_BANG_,js_path,cache_path,try_next_files_pair_fn,load_fn_cb){
return (function (cache_source){
if(cljs.core.truth_(cache_source)){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,[cljs.core.str("Retrieved JavaScript from: "),cljs.core.str((cljs.core.truth_(js_source)?js_path:"<skipped>"))].join(''));

replumb.common.debug_prn.call(null,[cljs.core.str("Retrieved cache file from: "),cljs.core.str(cache_path)].join(''));
} else {
}

return load_fn_cb.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lang","lang",-1819677104),replumb.load.filename__GT_lang.call(null,js_path),new cljs.core.Keyword(null,"source","source",-433931539),js_source,new cljs.core.Keyword(null,"cache","cache",-1237023054),replumb.load.read_cache_source.call(null,cache_path,cache_source)], null));
} else {
return try_next_files_pair_fn.call(null);
}
});})(map__64591,map__64591__$1,verbose_QMARK_,read_file_fn_BANG_,js_path,cache_path,try_next_files_pair_fn,load_fn_cb))
);
});
replumb.load.read_js_file = (function replumb$load$read_js_file(p__64593,read_cache_file_fn){
var map__64596 = p__64593;
var map__64596__$1 = ((((!((map__64596 == null)))?((((map__64596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64596):map__64596);
var opts = map__64596__$1;
var verbose_QMARK_ = cljs.core.get.call(null,map__64596__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var read_file_fn_BANG_ = cljs.core.get.call(null,map__64596__$1,new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191));
var js_path = cljs.core.get.call(null,map__64596__$1,new cljs.core.Keyword(null,"js-path","js-path",1036293462));
var cache_path = cljs.core.get.call(null,map__64596__$1,new cljs.core.Keyword(null,"cache-path","cache-path",1799646239));
var try_next_files_pair_fn = cljs.core.get.call(null,map__64596__$1,new cljs.core.Keyword(null,"try-next-files-pair-fn","try-next-files-pair-fn",-584120304));
return read_file_fn_BANG_.call(null,js_path,((function (map__64596,map__64596__$1,opts,verbose_QMARK_,read_file_fn_BANG_,js_path,cache_path,try_next_files_pair_fn){
return (function (js_source){
if(cljs.core.truth_((function (){var and__6209__auto__ = js_source;
if(cljs.core.truth_(and__6209__auto__)){
return replumb.cache.cached_js_valid_QMARK_.call(null,js_source);
} else {
return and__6209__auto__;
}
})())){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Reading",cache_path,"...");
} else {
}

return read_cache_file_fn.call(null,opts,js_source);
} else {
return try_next_files_pair_fn.call(null);
}
});})(map__64596,map__64596__$1,opts,verbose_QMARK_,read_file_fn_BANG_,js_path,cache_path,try_next_files_pair_fn))
);
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
var temp__4655__auto__ = cljs.core.first.call(null,cached_file_names);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__64601 = temp__4655__auto__;
var js_path = cljs.core.nth.call(null,vec__64601,(0),null);
var cache_path = cljs.core.nth.call(null,vec__64601,(1),null);
var try_next_files_pair = ((function (vec__64601,js_path,cache_path,temp__4655__auto__){
return (function (){
return replumb$load$read_files_from_cache_and_callback_BANG_.call(null,verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb,cljs.core.rest.call(null,cached_file_names),name);
});})(vec__64601,js_path,cache_path,temp__4655__auto__))
;
var cache_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),verbose_QMARK_,new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191),read_file_fn_BANG_,new cljs.core.Keyword(null,"load-fn-cb","load-fn-cb",-59460477),load_fn_cb,new cljs.core.Keyword(null,"js-path","js-path",1036293462),js_path,new cljs.core.Keyword(null,"cache-path","cache-path",1799646239),cache_path,new cljs.core.Keyword(null,"try-next-files-pair-fn","try-next-files-pair-fn",-584120304),try_next_files_pair], null);
if(cljs.core.contains_QMARK_.call(null,replumb.load.loaded_js_set,name)){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Skipping js loading for ",name);
} else {
}

return replumb.load.read_cache_file.call(null,cache_opts,null);
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Reading",js_path,"...");
} else {
}

return replumb.load.read_js_file.call(null,cache_opts,replumb.load.read_cache_file);
}
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Cannot load cache files...");
} else {
}

return replumb.load.read_files_and_callback_BANG_.call(null,verbose_QMARK_,file_names,read_file_fn_BANG_,load_fn_cb);
}
});
/**
 * Produces a sequence of file paths based on src-paths and file-path (a
 *   path already including one or more "/" and an extension).
 */
replumb.load.file_paths = (function replumb$load$file_paths(src_paths,file_path){
var iter__7001__auto__ = (function replumb$load$file_paths_$_iter__64608(s__64609){
return (new cljs.core.LazySeq(null,(function (){
var s__64609__$1 = s__64609;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__64609__$1);
if(temp__4657__auto__){
var s__64609__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__64609__$2)){
var c__6999__auto__ = cljs.core.chunk_first.call(null,s__64609__$2);
var size__7000__auto__ = cljs.core.count.call(null,c__6999__auto__);
var b__64611 = cljs.core.chunk_buffer.call(null,size__7000__auto__);
if((function (){var i__64610 = (0);
while(true){
if((i__64610 < size__7000__auto__)){
var src_path = cljs.core._nth.call(null,c__6999__auto__,i__64610);
cljs.core.chunk_append.call(null,b__64611,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(file_path)].join(''));

var G__64612 = (i__64610 + (1));
i__64610 = G__64612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64611),replumb$load$file_paths_$_iter__64608.call(null,cljs.core.chunk_rest.call(null,s__64609__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64611),null);
}
} else {
var src_path = cljs.core.first.call(null,s__64609__$2);
return cljs.core.cons.call(null,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(file_path)].join(''),replumb$load$file_paths_$_iter__64608.call(null,cljs.core.rest.call(null,s__64609__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__.call(null,src_paths);
});
/**
 * Produces a sequence of file names to try reading from src-paths and
 *   file-path-without-ext (it should already include one or more
 *   "/"). The right order and extension is taken from cljs.js/*load-fn*
 *   docstring and takes into consideration the macros parameter.
 */
replumb.load.file_paths_for_load_fn = (function replumb$load$file_paths_for_load_fn(src_paths,macros,file_path_without_ext){
var iter__7001__auto__ = (function replumb$load$file_paths_for_load_fn_$_iter__64619(s__64620){
return (new cljs.core.LazySeq(null,(function (){
var s__64620__$1 = s__64620;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__64620__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var extension = cljs.core.first.call(null,xs__5205__auto__);
var iterys__6997__auto__ = ((function (s__64620__$1,extension,xs__5205__auto__,temp__4657__auto__){
return (function replumb$load$file_paths_for_load_fn_$_iter__64619_$_iter__64621(s__64622){
return (new cljs.core.LazySeq(null,((function (s__64620__$1,extension,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__64622__$1 = s__64622;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__64622__$1);
if(temp__4657__auto____$1){
var s__64622__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__64622__$2)){
var c__6999__auto__ = cljs.core.chunk_first.call(null,s__64622__$2);
var size__7000__auto__ = cljs.core.count.call(null,c__6999__auto__);
var b__64624 = cljs.core.chunk_buffer.call(null,size__7000__auto__);
if((function (){var i__64623 = (0);
while(true){
if((i__64623 < size__7000__auto__)){
var src_path = cljs.core._nth.call(null,c__6999__auto__,i__64623);
cljs.core.chunk_append.call(null,b__64624,[cljs.core.str(src_path),cljs.core.str("."),cljs.core.str(extension)].join(''));

var G__64625 = (i__64623 + (1));
i__64623 = G__64625;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64624),replumb$load$file_paths_for_load_fn_$_iter__64619_$_iter__64621.call(null,cljs.core.chunk_rest.call(null,s__64622__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64624),null);
}
} else {
var src_path = cljs.core.first.call(null,s__64622__$2);
return cljs.core.cons.call(null,[cljs.core.str(src_path),cljs.core.str("."),cljs.core.str(extension)].join(''),replumb$load$file_paths_for_load_fn_$_iter__64619_$_iter__64621.call(null,cljs.core.rest.call(null,s__64622__$2)));
}
} else {
return null;
}
break;
}
});})(s__64620__$1,extension,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__64620__$1,extension,xs__5205__auto__,temp__4657__auto__))
;
var fs__6998__auto__ = cljs.core.seq.call(null,iterys__6997__auto__.call(null,replumb.load.file_paths.call(null,src_paths,file_path_without_ext)));
if(fs__6998__auto__){
return cljs.core.concat.call(null,fs__6998__auto__,replumb$load$file_paths_for_load_fn_$_iter__64619.call(null,cljs.core.rest.call(null,s__64620__$1)));
} else {
var G__64626 = cljs.core.rest.call(null,s__64620__$1);
s__64620__$1 = G__64626;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__.call(null,replumb.load.extensions.call(null,macros));
});
/**
 * Produces a sequence of pairs containing the file paths to try reading for
 *   evaluation caching.
 *   The first file is always a ".js" file while the second is the cache file
 *   and can be a ".json" or ".edn" file.
 */
replumb.load.cache_file_paths_for_load_fn = (function replumb$load$cache_file_paths_for_load_fn(cache_paths,macros,file_path_without_ext){
var iter__7001__auto__ = (function replumb$load$cache_file_paths_for_load_fn_$_iter__64636(s__64637){
return (new cljs.core.LazySeq(null,(function (){
var s__64637__$1 = s__64637;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__64637__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var extension = cljs.core.first.call(null,xs__5205__auto__);
var iterys__6997__auto__ = ((function (s__64637__$1,extension,xs__5205__auto__,temp__4657__auto__){
return (function replumb$load$cache_file_paths_for_load_fn_$_iter__64636_$_iter__64638(s__64639){
return (new cljs.core.LazySeq(null,((function (s__64637__$1,extension,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__64639__$1 = s__64639;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__64639__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var cache_extension = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__6997__auto__ = ((function (s__64639__$1,s__64637__$1,cache_extension,xs__5205__auto____$1,temp__4657__auto____$1,extension,xs__5205__auto__,temp__4657__auto__){
return (function replumb$load$cache_file_paths_for_load_fn_$_iter__64636_$_iter__64638_$_iter__64640(s__64641){
return (new cljs.core.LazySeq(null,((function (s__64639__$1,s__64637__$1,cache_extension,xs__5205__auto____$1,temp__4657__auto____$1,extension,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__64641__$1 = s__64641;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__64641__$1);
if(temp__4657__auto____$2){
var s__64641__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__64641__$2)){
var c__6999__auto__ = cljs.core.chunk_first.call(null,s__64641__$2);
var size__7000__auto__ = cljs.core.count.call(null,c__6999__auto__);
var b__64643 = cljs.core.chunk_buffer.call(null,size__7000__auto__);
if((function (){var i__64642 = (0);
while(true){
if((i__64642 < size__7000__auto__)){
var src_path = cljs.core._nth.call(null,c__6999__auto__,i__64642);
cljs.core.chunk_append.call(null,b__64643,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(src_path),cljs.core.str(".js")].join(''),[cljs.core.str(src_path),cljs.core.str(extension),cljs.core.str(cache_extension)].join('')], null));

var G__64644 = (i__64642 + (1));
i__64642 = G__64644;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64643),replumb$load$cache_file_paths_for_load_fn_$_iter__64636_$_iter__64638_$_iter__64640.call(null,cljs.core.chunk_rest.call(null,s__64641__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64643),null);
}
} else {
var src_path = cljs.core.first.call(null,s__64641__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(src_path),cljs.core.str(".js")].join(''),[cljs.core.str(src_path),cljs.core.str(extension),cljs.core.str(cache_extension)].join('')], null),replumb$load$cache_file_paths_for_load_fn_$_iter__64636_$_iter__64638_$_iter__64640.call(null,cljs.core.rest.call(null,s__64641__$2)));
}
} else {
return null;
}
break;
}
});})(s__64639__$1,s__64637__$1,cache_extension,xs__5205__auto____$1,temp__4657__auto____$1,extension,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__64639__$1,s__64637__$1,cache_extension,xs__5205__auto____$1,temp__4657__auto____$1,extension,xs__5205__auto__,temp__4657__auto__))
;
var fs__6998__auto__ = cljs.core.seq.call(null,iterys__6997__auto__.call(null,cljs.core.into.call(null,replumb.load.file_paths.call(null,cache_paths,file_path_without_ext),replumb.load.file_paths.call(null,cache_paths,replumb.cache.cache_prefix_for_path.call(null,file_path_without_ext,macros)))));
if(fs__6998__auto__){
return cljs.core.concat.call(null,fs__6998__auto__,replumb$load$cache_file_paths_for_load_fn_$_iter__64636_$_iter__64638.call(null,cljs.core.rest.call(null,s__64639__$1)));
} else {
var G__64645 = cljs.core.rest.call(null,s__64639__$1);
s__64639__$1 = G__64645;
continue;
}
} else {
return null;
}
break;
}
});})(s__64637__$1,extension,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__64637__$1,extension,xs__5205__auto__,temp__4657__auto__))
;
var fs__6998__auto__ = cljs.core.seq.call(null,iterys__6997__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cache.json",".cache.edn"], null)));
if(fs__6998__auto__){
return cljs.core.concat.call(null,fs__6998__auto__,replumb$load$cache_file_paths_for_load_fn_$_iter__64636.call(null,cljs.core.rest.call(null,s__64637__$1)));
} else {
var G__64646 = cljs.core.rest.call(null,s__64637__$1);
s__64637__$1 = G__64646;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__.call(null,cljs.core.cons.call(null,"",cljs.core.map.call(null,((function (iter__7001__auto__){
return (function (p1__64627_SHARP_){
return [cljs.core.str("."),cljs.core.str(p1__64627_SHARP_)].join('');
});})(iter__7001__auto__))
,replumb.load.extensions.call(null,macros))));
});
/**
 * Produces a sequence of filenames to try reading crafted for goog
 *   libraries, in the order they should be tried.
 */
replumb.load.file_paths_for_closure = (function replumb$load$file_paths_for_closure(src_paths,goog_path){
var iter__7001__auto__ = (function replumb$load$file_paths_for_closure_$_iter__64651(s__64652){
return (new cljs.core.LazySeq(null,(function (){
var s__64652__$1 = s__64652;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__64652__$1);
if(temp__4657__auto__){
var s__64652__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__64652__$2)){
var c__6999__auto__ = cljs.core.chunk_first.call(null,s__64652__$2);
var size__7000__auto__ = cljs.core.count.call(null,c__6999__auto__);
var b__64654 = cljs.core.chunk_buffer.call(null,size__7000__auto__);
if((function (){var i__64653 = (0);
while(true){
if((i__64653 < size__7000__auto__)){
var src_path = cljs.core._nth.call(null,c__6999__auto__,i__64653);
cljs.core.chunk_append.call(null,b__64654,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(goog_path),cljs.core.str(".js")].join(''));

var G__64655 = (i__64653 + (1));
i__64653 = G__64655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64654),replumb$load$file_paths_for_closure_$_iter__64651.call(null,cljs.core.chunk_rest.call(null,s__64652__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64654),null);
}
} else {
var src_path = cljs.core.first.call(null,s__64652__$2);
return cljs.core.cons.call(null,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(goog_path),cljs.core.str(".js")].join(''),replumb$load$file_paths_for_closure_$_iter__64651.call(null,cljs.core.rest.call(null,s__64652__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__.call(null,src_paths);
});
/**
 * Given the content of goog/deps.js file, create a map
 *   provide->path (without extension) of Google dependencies.
 * 
 *   Adapted from planck:
 *   https://github.com/mfikes/planck/blob/master/planck-cljs/src/planck/repl.cljs#L438-L451
 */
replumb.load.goog_deps_map = (function replumb$load$goog_deps_map(deps_js_content){
var paths_to_provides = cljs.core.map.call(null,(function (p__64672){
var vec__64673 = p__64672;
var _ = cljs.core.nth.call(null,vec__64673,(0),null);
var path = cljs.core.nth.call(null,vec__64673,(1),null);
var provides = cljs.core.nth.call(null,vec__64673,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,/'(.*?)'/,provides))], null);
}),cljs.core.re_seq.call(null,/\ngoog\.addDependency\('(.*)', \[(.*?)\].*/,deps_js_content));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7001__auto__ = ((function (paths_to_provides){
return (function replumb$load$goog_deps_map_$_iter__64676(s__64677){
return (new cljs.core.LazySeq(null,((function (paths_to_provides){
return (function (){
var s__64677__$1 = s__64677;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__64677__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__64685 = cljs.core.first.call(null,xs__5205__auto__);
var path = cljs.core.nth.call(null,vec__64685,(0),null);
var provides = cljs.core.nth.call(null,vec__64685,(1),null);
var iterys__6997__auto__ = ((function (s__64677__$1,vec__64685,path,provides,xs__5205__auto__,temp__4657__auto__,paths_to_provides){
return (function replumb$load$goog_deps_map_$_iter__64676_$_iter__64678(s__64679){
return (new cljs.core.LazySeq(null,((function (s__64677__$1,vec__64685,path,provides,xs__5205__auto__,temp__4657__auto__,paths_to_provides){
return (function (){
var s__64679__$1 = s__64679;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__64679__$1);
if(temp__4657__auto____$1){
var s__64679__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__64679__$2)){
var c__6999__auto__ = cljs.core.chunk_first.call(null,s__64679__$2);
var size__7000__auto__ = cljs.core.count.call(null,c__6999__auto__);
var b__64681 = cljs.core.chunk_buffer.call(null,size__7000__auto__);
if((function (){var i__64680 = (0);
while(true){
if((i__64680 < size__7000__auto__)){
var provide = cljs.core._nth.call(null,c__6999__auto__,i__64680);
cljs.core.chunk_append.call(null,b__64681,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,provide),[cljs.core.str("goog/"),cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,/(.*)\.js$/,path)))].join('')], null));

var G__64688 = (i__64680 + (1));
i__64680 = G__64688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64681),replumb$load$goog_deps_map_$_iter__64676_$_iter__64678.call(null,cljs.core.chunk_rest.call(null,s__64679__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64681),null);
}
} else {
var provide = cljs.core.first.call(null,s__64679__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,provide),[cljs.core.str("goog/"),cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,/(.*)\.js$/,path)))].join('')], null),replumb$load$goog_deps_map_$_iter__64676_$_iter__64678.call(null,cljs.core.rest.call(null,s__64679__$2)));
}
} else {
return null;
}
break;
}
});})(s__64677__$1,vec__64685,path,provides,xs__5205__auto__,temp__4657__auto__,paths_to_provides))
,null,null));
});})(s__64677__$1,vec__64685,path,provides,xs__5205__auto__,temp__4657__auto__,paths_to_provides))
;
var fs__6998__auto__ = cljs.core.seq.call(null,iterys__6997__auto__.call(null,provides));
if(fs__6998__auto__){
return cljs.core.concat.call(null,fs__6998__auto__,replumb$load$goog_deps_map_$_iter__64676.call(null,cljs.core.rest.call(null,s__64677__$1)));
} else {
var G__64689 = cljs.core.rest.call(null,s__64677__$1);
s__64677__$1 = G__64689;
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
return iter__7001__auto__.call(null,paths_to_provides);
})());
});
/**
 * Return a promise that resolves with the result of accumulating the
 *   actual call to replumb.repl/read-eval-call on the source with results.
 */
replumb.load.read_goog_file_promise = (function replumb$load$read_goog_file_promise(verbose_QMARK_,read_file_fn_BANG_,path,results){
if(cljs.core.map_QMARK_.call(null,results)){
} else {
throw (new Error("Assert failed: (map? results)"));
}

return (new goog.Promise((function (resolve,_){
var deps_path = [cljs.core.str(replumb.common.normalize_path.call(null,path)),cljs.core.str("goog/deps.js")].join('');
return read_file_fn_BANG_.call(null,deps_path,((function (deps_path){
return (function (content){
return resolve.call(null,(cljs.core.truth_(content)?(function (){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Found valid",deps_path);
} else {
}

return cljs.core.merge.call(null,results,replumb.load.goog_deps_map.call(null,content));
})()
:results));
});})(deps_path))
);
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
var read_promise = cljs.core.partial.call(null,replumb.load.read_goog_file_promise,verbose_QMARK_,read_file_fn_BANG_);
if(cljs.core.truth_(read_file_fn_BANG_)){
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Discovering goog/deps.js in",src_paths);
} else {
}

return cljs.core.reduce.call(null,((function (read_promise){
return (function (pmses,path){
return pmses.then(((function (read_promise){
return (function (p1__64690_SHARP_){
return read_promise.call(null,path,p1__64690_SHARP_);
});})(read_promise))
,((function (read_promise){
return (function (){
return read_promise.call(null,path,cljs.core.PersistentArrayMap.EMPTY);
});})(read_promise))
);
});})(read_promise))
,goog.Promise.resolve(cljs.core.PersistentArrayMap.EMPTY),src_paths);
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"No :read-file-fn! provided, skipping goog/deps.js discovering...");
} else {
}

return goog.Promise.resolve(cljs.core.PersistentArrayMap.EMPTY);
}
});
replumb.load.skip_load_QMARK_ = (function replumb$load$skip_load_QMARK_(p__64691){
var map__64694 = p__64691;
var map__64694__$1 = ((((!((map__64694 == null)))?((((map__64694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64694):map__64694);
var name = cljs.core.get.call(null,map__64694__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__64694__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var or__6221__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null));
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.analyzer","cljs.analyzer",1897881911,null));
if(or__6221__auto____$1){
return or__6221__auto____$1;
} else {
var or__6221__auto____$2 = (function (){var and__6209__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null));
if(and__6209__auto__){
return macros;
} else {
return and__6209__auto__;
}
})();
if(cljs.core.truth_(or__6221__auto____$2)){
return or__6221__auto____$2;
} else {
var or__6221__auto____$3 = (function (){var and__6209__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.test","cljs.test",884805483,null));
if(and__6209__auto__){
return macros;
} else {
return and__6209__auto__;
}
})();
if(cljs.core.truth_(or__6221__auto____$3)){
return or__6221__auto____$3;
} else {
var and__6209__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null));
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

//# sourceMappingURL=load.js.map