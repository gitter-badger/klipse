// Compiled by ClojureScript 1.9.36 {}
goog.provide('klipse.utils');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.core.async');
goog.require('cemerick.url');
klipse.utils.current_url = (function klipse$utils$current_url(){
return cemerick.url.url.call(null,(location["href"]));
});
klipse.utils.url_parameters = (function klipse$utils$url_parameters(){
return clojure.walk.keywordize_keys.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(klipse.utils.current_url.call(null)));
});
/**
 * Returns the current url with an additional parameter.
 *   If the parameter already exists, it is overridden.
 */
klipse.utils.add_url_parameter = (function klipse$utils$add_url_parameter(base_url,key,value){
return [cljs.core.str(cljs.core.assoc_in.call(null,base_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.name.call(null,key)], null),value))].join('');
});
klipse.utils.create_url_with_input = (function klipse$utils$create_url_with_input(base_url,input){
return klipse.utils.add_url_parameter.call(null,(cljs.core.truth_(base_url)?cemerick.url.url.call(null,base_url):klipse.utils.current_url.call(null)),new cljs.core.Keyword(null,"cljs_in","cljs_in",1284321894),input);
});
klipse.utils.debounce = (function klipse$utils$debounce(func,wait_in_ms){
var counter = cljs.core.atom.call(null,(0));
return ((function (counter){
return (function (){
var c__32416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto__,counter){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto__,counter){
return (function (state_41746){
var state_val_41747 = (state_41746[(1)]);
if((state_val_41747 === (1))){
var inst_41733 = cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);
var inst_41734 = cljs.core.async.timeout.call(null,wait_in_ms);
var state_41746__$1 = (function (){var statearr_41748 = state_41746;
(statearr_41748[(7)] = inst_41733);

return statearr_41748;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41746__$1,(2),inst_41734);
} else {
if((state_val_41747 === (2))){
var inst_41736 = (state_41746[(2)]);
var inst_41737 = cljs.core.swap_BANG_.call(null,counter,cljs.core.dec);
var inst_41738 = cljs.core.deref.call(null,counter);
var inst_41739 = (inst_41738 === (0));
var state_41746__$1 = (function (){var statearr_41749 = state_41746;
(statearr_41749[(8)] = inst_41737);

(statearr_41749[(9)] = inst_41736);

return statearr_41749;
})();
if(cljs.core.truth_(inst_41739)){
var statearr_41750_41761 = state_41746__$1;
(statearr_41750_41761[(1)] = (3));

} else {
var statearr_41751_41762 = state_41746__$1;
(statearr_41751_41762[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41747 === (3))){
var inst_41741 = func.call(null);
var state_41746__$1 = state_41746;
var statearr_41752_41763 = state_41746__$1;
(statearr_41752_41763[(2)] = inst_41741);

(statearr_41752_41763[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41747 === (4))){
var state_41746__$1 = state_41746;
var statearr_41753_41764 = state_41746__$1;
(statearr_41753_41764[(2)] = null);

(statearr_41753_41764[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41747 === (5))){
var inst_41744 = (state_41746[(2)]);
var state_41746__$1 = state_41746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41746__$1,inst_41744);
} else {
return null;
}
}
}
}
}
});})(c__32416__auto__,counter))
;
return ((function (switch__32304__auto__,c__32416__auto__,counter){
return (function() {
var klipse$utils$debounce_$_state_machine__32305__auto__ = null;
var klipse$utils$debounce_$_state_machine__32305__auto____0 = (function (){
var statearr_41757 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41757[(0)] = klipse$utils$debounce_$_state_machine__32305__auto__);

(statearr_41757[(1)] = (1));

return statearr_41757;
});
var klipse$utils$debounce_$_state_machine__32305__auto____1 = (function (state_41746){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_41746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e41758){if((e41758 instanceof Object)){
var ex__32308__auto__ = e41758;
var statearr_41759_41765 = state_41746;
(statearr_41759_41765[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41766 = state_41746;
state_41746 = G__41766;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
klipse$utils$debounce_$_state_machine__32305__auto__ = function(state_41746){
switch(arguments.length){
case 0:
return klipse$utils$debounce_$_state_machine__32305__auto____0.call(this);
case 1:
return klipse$utils$debounce_$_state_machine__32305__auto____1.call(this,state_41746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$debounce_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$debounce_$_state_machine__32305__auto____0;
klipse$utils$debounce_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$debounce_$_state_machine__32305__auto____1;
return klipse$utils$debounce_$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto__,counter))
})();
var state__32418__auto__ = (function (){var statearr_41760 = f__32417__auto__.call(null);
(statearr_41760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto__);

return statearr_41760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto__,counter))
);

return c__32416__auto__;
});
;})(counter))
});

//# sourceMappingURL=utils.js.map?rel=1465451169444