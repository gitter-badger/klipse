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
var c__15364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto__,counter){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto__,counter){
return (function (state_74756){
var state_val_74757 = (state_74756[(1)]);
if((state_val_74757 === (1))){
var inst_74743 = cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);
var inst_74744 = cljs.core.async.timeout.call(null,wait_in_ms);
var state_74756__$1 = (function (){var statearr_74758 = state_74756;
(statearr_74758[(7)] = inst_74743);

return statearr_74758;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74756__$1,(2),inst_74744);
} else {
if((state_val_74757 === (2))){
var inst_74746 = (state_74756[(2)]);
var inst_74747 = cljs.core.swap_BANG_.call(null,counter,cljs.core.dec);
var inst_74748 = cljs.core.deref.call(null,counter);
var inst_74749 = (inst_74748 === (0));
var state_74756__$1 = (function (){var statearr_74759 = state_74756;
(statearr_74759[(8)] = inst_74746);

(statearr_74759[(9)] = inst_74747);

return statearr_74759;
})();
if(cljs.core.truth_(inst_74749)){
var statearr_74760_74771 = state_74756__$1;
(statearr_74760_74771[(1)] = (3));

} else {
var statearr_74761_74772 = state_74756__$1;
(statearr_74761_74772[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74757 === (3))){
var inst_74751 = func.call(null);
var state_74756__$1 = state_74756;
var statearr_74762_74773 = state_74756__$1;
(statearr_74762_74773[(2)] = inst_74751);

(statearr_74762_74773[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74757 === (4))){
var state_74756__$1 = state_74756;
var statearr_74763_74774 = state_74756__$1;
(statearr_74763_74774[(2)] = null);

(statearr_74763_74774[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74757 === (5))){
var inst_74754 = (state_74756[(2)]);
var state_74756__$1 = state_74756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74756__$1,inst_74754);
} else {
return null;
}
}
}
}
}
});})(c__15364__auto__,counter))
;
return ((function (switch__15250__auto__,c__15364__auto__,counter){
return (function() {
var klipse$utils$debounce_$_state_machine__15251__auto__ = null;
var klipse$utils$debounce_$_state_machine__15251__auto____0 = (function (){
var statearr_74767 = [null,null,null,null,null,null,null,null,null,null];
(statearr_74767[(0)] = klipse$utils$debounce_$_state_machine__15251__auto__);

(statearr_74767[(1)] = (1));

return statearr_74767;
});
var klipse$utils$debounce_$_state_machine__15251__auto____1 = (function (state_74756){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_74756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e74768){if((e74768 instanceof Object)){
var ex__15254__auto__ = e74768;
var statearr_74769_74775 = state_74756;
(statearr_74769_74775[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74776 = state_74756;
state_74756 = G__74776;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
klipse$utils$debounce_$_state_machine__15251__auto__ = function(state_74756){
switch(arguments.length){
case 0:
return klipse$utils$debounce_$_state_machine__15251__auto____0.call(this);
case 1:
return klipse$utils$debounce_$_state_machine__15251__auto____1.call(this,state_74756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$debounce_$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$debounce_$_state_machine__15251__auto____0;
klipse$utils$debounce_$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$debounce_$_state_machine__15251__auto____1;
return klipse$utils$debounce_$_state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto__,counter))
})();
var state__15366__auto__ = (function (){var statearr_74770 = f__15365__auto__.call(null);
(statearr_74770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto__);

return statearr_74770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto__,counter))
);

return c__15364__auto__;
});
;})(counter))
});

//# sourceMappingURL=utils.js.map