// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.utils');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.core.async');
goog.require('cemerick.url');
klipse.utils.current_url = (function klipse$utils$current_url(){
return cemerick.url.url.cljs$core$IFn$_invoke$arity$1((location["href"]));
});
klipse.utils.url_parameters = (function klipse$utils$url_parameters(){
return clojure.walk.keywordize_keys(cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(klipse.utils.current_url()));
});
/**
 * Returns the current url with an additional parameter.
 *   If the parameter already exists, it is overridden.
 */
klipse.utils.add_url_parameter = (function klipse$utils$add_url_parameter(base_url,key,value){
return [cljs.core.str(cljs.core.assoc_in(base_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query,cljs.core.name(key)], null),value))].join('');
});
klipse.utils.create_url_with_input = (function klipse$utils$create_url_with_input(base_url,input){
return klipse.utils.add_url_parameter((cljs.core.truth_(base_url)?cemerick.url.url.cljs$core$IFn$_invoke$arity$1(base_url):klipse.utils.current_url()),cljs.core.cst$kw$cljs_in,input);
});
klipse.utils.debounce = (function klipse$utils$debounce(func,wait_in_ms){
var counter = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
return ((function (counter){
return (function (){
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__,counter){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__,counter){
return (function (state_31839){
var state_val_31840 = (state_31839[(1)]);
if((state_val_31840 === (1))){
var inst_31826 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);
var inst_31827 = cljs.core.async.timeout(wait_in_ms);
var state_31839__$1 = (function (){var statearr_31842 = state_31839;
(statearr_31842[(7)] = inst_31826);

return statearr_31842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31839__$1,(2),inst_31827);
} else {
if((state_val_31840 === (2))){
var inst_31829 = (state_31839[(2)]);
var inst_31830 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.dec);
var inst_31831 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(counter) : cljs.core.deref.call(null,counter));
var inst_31832 = (inst_31831 === (0));
var state_31839__$1 = (function (){var statearr_31843 = state_31839;
(statearr_31843[(8)] = inst_31829);

(statearr_31843[(9)] = inst_31830);

return statearr_31843;
})();
if(cljs.core.truth_(inst_31832)){
var statearr_31844_31861 = state_31839__$1;
(statearr_31844_31861[(1)] = (3));

} else {
var statearr_31845_31865 = state_31839__$1;
(statearr_31845_31865[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31840 === (3))){
var inst_31834 = (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
var state_31839__$1 = state_31839;
var statearr_31846_31868 = state_31839__$1;
(statearr_31846_31868[(2)] = inst_31834);

(statearr_31846_31868[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31840 === (4))){
var state_31839__$1 = state_31839;
var statearr_31847_31874 = state_31839__$1;
(statearr_31847_31874[(2)] = null);

(statearr_31847_31874[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31840 === (5))){
var inst_31837 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31839__$1,inst_31837);
} else {
return null;
}
}
}
}
}
});})(c__14658__auto__,counter))
;
return ((function (switch__13584__auto__,c__14658__auto__,counter){
return (function() {
var klipse$utils$debounce_$_state_machine__13585__auto__ = null;
var klipse$utils$debounce_$_state_machine__13585__auto____0 = (function (){
var statearr_31851 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31851[(0)] = klipse$utils$debounce_$_state_machine__13585__auto__);

(statearr_31851[(1)] = (1));

return statearr_31851;
});
var klipse$utils$debounce_$_state_machine__13585__auto____1 = (function (state_31839){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_31839);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e31852){if((e31852 instanceof Object)){
var ex__13588__auto__ = e31852;
var statearr_31853_31880 = state_31839;
(statearr_31853_31880[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31839);

return cljs.core.cst$kw$recur;
} else {
throw e31852;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__31881 = state_31839;
state_31839 = G__31881;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$utils$debounce_$_state_machine__13585__auto__ = function(state_31839){
switch(arguments.length){
case 0:
return klipse$utils$debounce_$_state_machine__13585__auto____0.call(this);
case 1:
return klipse$utils$debounce_$_state_machine__13585__auto____1.call(this,state_31839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$debounce_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$debounce_$_state_machine__13585__auto____0;
klipse$utils$debounce_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$debounce_$_state_machine__13585__auto____1;
return klipse$utils$debounce_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__,counter))
})();
var state__14660__auto__ = (function (){var statearr_31854 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_31854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_31854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__,counter))
);

return c__14658__auto__;
});
;})(counter))
});
