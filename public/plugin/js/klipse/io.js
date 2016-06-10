// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.io');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
klipse.io.no_op = (function klipse$io$no_op(file_url,src_cb){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["no-op: ",file_url], 0));

return (src_cb.cljs$core$IFn$_invoke$arity$1 ? src_cb.cljs$core$IFn$_invoke$arity$1("") : src_cb.call(null,""));
});
/**
 * Very simple implementation of XMLHttpRequests that given a file path
 *   calls src-cb with the string fetched of nil in case of error.
 *   See doc at https://developers.google.com/closure/library/docs/xhrio
 */
klipse.io.fetch_file_BANG_ = (function klipse$io$fetch_file_BANG_(file_url,src_cb){
try{return goog.net.XhrIo.send([cljs.core.str(file_url)].join(''),(function (e){
if(cljs.core.truth_(e.target.isSuccess())){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["loading file: ",file_url], 0));

var G__54072 = e.target.getResponseText();
return (src_cb.cljs$core$IFn$_invoke$arity$1 ? src_cb.cljs$core$IFn$_invoke$arity$1(G__54072) : src_cb.call(null,G__54072));
} else {
return (src_cb.cljs$core$IFn$_invoke$arity$1 ? src_cb.cljs$core$IFn$_invoke$arity$1(null) : src_cb.call(null,null));
}
}));
}catch (e54071){var e = e54071;
return (src_cb.cljs$core$IFn$_invoke$arity$1 ? src_cb.cljs$core$IFn$_invoke$arity$1(null) : src_cb.call(null,null));
}});
