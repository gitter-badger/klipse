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
return (function (state_57093){
var state_val_57094 = (state_57093[(1)]);
if((state_val_57094 === (1))){
var inst_57080 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);
var inst_57081 = cljs.core.async.timeout(wait_in_ms);
var state_57093__$1 = (function (){var statearr_57095 = state_57093;
(statearr_57095[(7)] = inst_57080);

return statearr_57095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57093__$1,(2),inst_57081);
} else {
if((state_val_57094 === (2))){
var inst_57083 = (state_57093[(2)]);
var inst_57084 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.dec);
var inst_57085 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(counter) : cljs.core.deref.call(null,counter));
var inst_57086 = (inst_57085 === (0));
var state_57093__$1 = (function (){var statearr_57096 = state_57093;
(statearr_57096[(8)] = inst_57084);

(statearr_57096[(9)] = inst_57083);

return statearr_57096;
})();
if(cljs.core.truth_(inst_57086)){
var statearr_57097_57108 = state_57093__$1;
(statearr_57097_57108[(1)] = (3));

} else {
var statearr_57098_57109 = state_57093__$1;
(statearr_57098_57109[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57094 === (3))){
var inst_57088 = (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
var state_57093__$1 = state_57093;
var statearr_57099_57110 = state_57093__$1;
(statearr_57099_57110[(2)] = inst_57088);

(statearr_57099_57110[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57094 === (4))){
var state_57093__$1 = state_57093;
var statearr_57100_57111 = state_57093__$1;
(statearr_57100_57111[(2)] = null);

(statearr_57100_57111[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57094 === (5))){
var inst_57091 = (state_57093[(2)]);
var state_57093__$1 = state_57093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57093__$1,inst_57091);
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
var statearr_57104 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57104[(0)] = klipse$utils$debounce_$_state_machine__13585__auto__);

(statearr_57104[(1)] = (1));

return statearr_57104;
});
var klipse$utils$debounce_$_state_machine__13585__auto____1 = (function (state_57093){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_57093);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e57105){if((e57105 instanceof Object)){
var ex__13588__auto__ = e57105;
var statearr_57106_57112 = state_57093;
(statearr_57106_57112[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57093);

return cljs.core.cst$kw$recur;
} else {
throw e57105;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__57113 = state_57093;
state_57093 = G__57113;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$utils$debounce_$_state_machine__13585__auto__ = function(state_57093){
switch(arguments.length){
case 0:
return klipse$utils$debounce_$_state_machine__13585__auto____0.call(this);
case 1:
return klipse$utils$debounce_$_state_machine__13585__auto____1.call(this,state_57093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$debounce_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$debounce_$_state_machine__13585__auto____0;
klipse$utils$debounce_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$debounce_$_state_machine__13585__auto____1;
return klipse$utils$debounce_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__,counter))
})();
var state__14660__auto__ = (function (){var statearr_57107 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_57107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_57107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__,counter))
);

return c__14658__auto__;
});
;})(counter))
});
