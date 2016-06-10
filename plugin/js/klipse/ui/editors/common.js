// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.ui.editors.common');
goog.require('cljs.core');
goog.require('gadjett.core');
goog.require('klipse.ui.editors.editor');
goog.require('klipse.utils');
klipse.ui.editors.common.display_url_with_input = (function klipse$ui$editors$common$display_url_with_input(base_url,value){
var G__57283 = klipse.utils.create_url_with_input(base_url,value);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([G__57283], 0));

alert(G__57283);

return G__57283;
});
klipse.ui.editors.common.refresh_with_code = (function klipse$ui$editors$common$refresh_with_code(base_url,value){
var G__57285 = klipse.utils.create_url_with_input(base_url,value);
return location.replace(G__57285);
});
klipse.ui.editors.common.handle_events = (function klipse$ui$editors$common$handle_events(editor,p__57286){
var map__57289 = p__57286;
var map__57289__$1 = ((((!((map__57289 == null)))?((((map__57289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57289):map__57289);
var on_should_eval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57289__$1,cljs.core.cst$kw$on_DASH_should_DASH_eval);
var idle_msec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57289__$1,cljs.core.cst$kw$idle_DASH_msec);
var base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57289__$1,cljs.core.cst$kw$base_DASH_url,null);
klipse.ui.editors.editor.on_change(editor,klipse.utils.debounce(on_should_eval,idle_msec));

return klipse.ui.editors.editor.set_option(editor,"extraKeys",{"Ctrl-S": ((function (map__57289,map__57289__$1,on_should_eval,idle_msec,base_url){
return (function (){
return klipse.ui.editors.common.display_url_with_input(base_url,klipse.ui.editors.editor.get_value(editor));
});})(map__57289,map__57289__$1,on_should_eval,idle_msec,base_url))
, "Ctrl-R": ((function (map__57289,map__57289__$1,on_should_eval,idle_msec,base_url){
return (function (){
return klipse.ui.editors.common.refresh_with_code(base_url,klipse.ui.editors.editor.get_value(editor));
});})(map__57289,map__57289__$1,on_should_eval,idle_msec,base_url))
, "Ctrl-Enter": on_should_eval});
});
