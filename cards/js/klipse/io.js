// Compiled by ClojureScript 1.9.36 {}
goog.provide('klipse.io');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
klipse.io.no_op = (function klipse$io$no_op(file_url,src_cb){
cljs.core.print.call(null,"no-op: ",file_url);

return src_cb.call(null,"");
});
/**
 * Very simple implementation of XMLHttpRequests that given a file path
 *   calls src-cb with the string fetched of nil in case of error.
 *   See doc at https://developers.google.com/closure/library/docs/xhrio
 */
klipse.io.fetch_file_BANG_ = (function klipse$io$fetch_file_BANG_(file_url,src_cb){
try{return goog.net.XhrIo.send([cljs.core.str(file_url)].join(''),(function (e){
if(cljs.core.truth_(e.target.isSuccess())){
cljs.core.print.call(null,"loading file: ",file_url);

return src_cb.call(null,e.target.getResponseText());
} else {
return src_cb.call(null,null);
}
}));
}catch (e30763){var e = e30763;
return src_cb.call(null,null);
}});

//# sourceMappingURL=io.js.map?rel=1465542672172