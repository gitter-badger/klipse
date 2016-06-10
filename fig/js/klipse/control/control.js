// Compiled by ClojureScript 1.9.36 {}
goog.provide('klipse.control.control');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('klipse.control.parser');
goog.require('om.next');
klipse.control.control.init_layout = (function klipse$control$control$init_layout(){
var map__37733 = klipse.utils.url_parameters.call(null);
var map__37733__$1 = ((((!((map__37733 == null)))?((((map__37733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37733):map__37733);
var js_only = cljs.core.get.call(null,map__37733__$1,new cljs.core.Keyword(null,"js_only","js_only",-566245764));
var eval_only = cljs.core.get.call(null,map__37733__$1,new cljs.core.Keyword(null,"eval_only","eval_only",-1002092154));
if(cljs.core.truth_(js_only)){
return new cljs.core.Keyword(null,"js-only","js-only",-565028193);
} else {
if(cljs.core.truth_(eval_only)){
return new cljs.core.Keyword(null,"eval-only","eval-only",-933784392);
} else {
return new cljs.core.Keyword(null,"global","global",93595047);

}
}
});
if(typeof klipse.control.control.app_state !== 'undefined'){
} else {
klipse.control.control.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"input","input",556931961),null,new cljs.core.Keyword(null,"compilation","compilation",-1328774561),null,new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413),null,new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402),null,new cljs.core.Keyword(null,"code-layout","code-layout",1098272213),klipse.control.control.init_layout.call(null)], null));
}
klipse.control.control.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),klipse.control.parser.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),klipse.control.parser.mutate], null));
klipse.control.control.reconciler = (function klipse$control$control$reconciler(initial_state){
return om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.swap_BANG_.call(null,klipse.control.control.app_state,cljs.core.merge,initial_state),new cljs.core.Keyword(null,"parser","parser",-1543495310),klipse.control.control.parser], null));
});

//# sourceMappingURL=control.js.map?rel=1465542892156