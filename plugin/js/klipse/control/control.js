// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.control.control');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('klipse.control.parser');
goog.require('om.next');
klipse.control.control.init_layout = (function klipse$control$control$init_layout(){
var map__57277 = klipse.utils.url_parameters();
var map__57277__$1 = ((((!((map__57277 == null)))?((((map__57277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57277):map__57277);
var js_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57277__$1,cljs.core.cst$kw$js_only);
var eval_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57277__$1,cljs.core.cst$kw$eval_only);
if(cljs.core.truth_(js_only)){
return cljs.core.cst$kw$js_DASH_only;
} else {
if(cljs.core.truth_(eval_only)){
return cljs.core.cst$kw$eval_DASH_only;
} else {
return cljs.core.cst$kw$global;

}
}
});
if(typeof klipse.control.control.app_state !== 'undefined'){
} else {
klipse.control.control.app_state = (function (){var G__57279 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$input,null,cljs.core.cst$kw$compilation,null,cljs.core.cst$kw$evaluation_DASH_js,null,cljs.core.cst$kw$evaluation_DASH_clj,null,cljs.core.cst$kw$code_DASH_layout,klipse.control.control.init_layout()], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__57279) : cljs.core.atom.call(null,G__57279));
})();
}
klipse.control.control.parser = om.next.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,klipse.control.parser.read,cljs.core.cst$kw$mutate,klipse.control.parser.mutate], null));
klipse.control.control.reconciler = (function klipse$control$control$reconciler(initial_state){
return om.next.reconciler(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(klipse.control.control.app_state,cljs.core.merge,initial_state),cljs.core.cst$kw$parser,klipse.control.control.parser], null));
});
