// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.app');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('klipse.control.control');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('klipse.ui.editors.cljs');
goog.require('gadjett.core');
goog.require('om.next');
goog.require('klipse.ui.layout');
klipse.app.gist_path = (function klipse$app$gist_path(gist_id){
var x__31222__auto__ = [cljs.core.str("https://gist.githubusercontent.com/"),cljs.core.str(gist_id),cljs.core.str("/raw")].join('');
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.list(cljs.core.cst$sym$str,"https://gist.githubusercontent.com/",cljs.core.cst$sym$gist_DASH_id,"/raw")),cljs.core.str(": "),cljs.core.str(x__31222__auto__)].join('')], 0));

return x__31222__auto__;
});
klipse.app.get_first_input = (function klipse$app$get_first_input(){
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__){
return (function (state_34339){
var state_val_34340 = (state_34339[(1)]);
if((state_val_34340 === (7))){
var inst_34332 = (state_34339[(2)]);
var state_34339__$1 = state_34339;
var statearr_34341_34381 = state_34339__$1;
(statearr_34341_34381[(2)] = inst_34332);

(statearr_34341_34381[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34340 === (20))){
var inst_34329 = (state_34339[(2)]);
var state_34339__$1 = state_34339;
var statearr_34342_34382 = state_34339__$1;
(statearr_34342_34382[(2)] = inst_34329);

(statearr_34342_34382[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34340 === (1))){
var inst_34280 = klipse.utils.url_parameters();
var inst_34281 = cljs.core.cst$kw$cljs_in.cljs$core$IFn$_invoke$arity$1(inst_34280);
var state_34339__$1 = state_34339;
if(cljs.core.truth_(inst_34281)){
var statearr_34343_34383 = state_34339__$1;
(statearr_34343_34383[(1)] = (2));

} else {
var statearr_34344_34384 = state_34339__$1;
(statearr_34344_34384[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34340 === (4))){
var inst_34334 = (state_34339[(2)]);
var inst_34335 = cljs.core.list(cljs.core.cst$sym$cond,cljs.core.list(cljs.core.cst$kw$cljs_in,cljs.core.list(cljs.core.cst$sym$url_DASH_parameters)),cljs.core.list(cljs.core.cst$kw$cljs_in,cljs.core.list(cljs.core.cst$sym$url_DASH_parameters)),cljs.core.list(cljs.core.cst$kw$cljs_in$gist,cljs.core.list(cljs.core.cst$sym$url_DASH_parameters)),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$status,cljs.core.cst$sym$body], null)], null),cljs.core.list(cljs.core.cst$sym$dbg,cljs.core.list(cljs.core.cst$sym$_LT__BANG_,cljs.core.list(cljs.core.cst$sym$http_SLASH_get,cljs.core.list(cljs.core.cst$sym$gist_DASH_path,cljs.core.list(cljs.core.cst$kw$cljs_in$gist,cljs.core.list(cljs.core.cst$sym$url_DASH_parameters))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false], null))))], null),cljs.core.list(cljs.core.cst$sym$if_DASH_not,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$status,(200)),cljs.core.cst$sym$status,cljs.core.cst$sym$body)));
var inst_34336 = [cljs.core.str(inst_34335),cljs.core.str(": "),cljs.core.str(inst_34334)].join('');
var inst_34337 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34336], 0));
var state_34339__$1 = (function (){var statearr_34345 = state_34339;
(statearr_34345[(7)] = inst_34337);

return statearr_34345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34339__$1,inst_34334);
} else {
if((state_val_34340 === (15))){
var inst_34298 = (state_34339[(8)]);
var inst_34318 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34298);
var state_34339__$1 = state_34339;
var statearr_34346_34385 = state_34339__$1;
(statearr_34346_34385[(2)] = inst_34318);

(statearr_34346_34385[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34340 === (13))){
var state_34339__$1 = state_34339;
var statearr_34347_34386 = state_34339__$1;
(statearr_34347_34386[(2)] = false);

(statearr_34347_34386[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34340 === (6))){
var state_34339__$1 = state_34339;
var statearr_34348_34387 = state_34339__$1;
(statearr_34348_34387[(2)] = null);

(statearr_34348_34387[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34340 === (17))){
var inst_34322 = (state_34339[(9)]);
var inst_34321 = (state_34339[(2)]);
var inst_34322__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34321,cljs.core.cst$kw$status);
var inst_34323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34321,cljs.core.cst$kw$body);
var inst_34324 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34322__$1,(200));
var inst_34325 = !(inst_34324);
var state_34339__$1 = (function (){var statearr_34349 = state_34339;
(statearr_34349[(10)] = inst_34323);

(statearr_34349[(9)] = inst_34322__$1);

return statearr_34349;
})();
if(inst_34325){
var statearr_34350_34391 = state_34339__$1;
(statearr_34350_34391[(1)] = (18));

} else {
var statearr_34351_34392 = state_34339__$1;
(statearr_34351_34392[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34340 === (3))){
var inst_34286 = klipse.utils.url_parameters();
var inst_34287 = cljs.core.cst$kw$cljs_in$gist.cljs$core$IFn$_invoke$arity$1(inst_34286);
var state_34339__$1 = state_34339;
if(cljs.core.truth_(inst_34287)){
var statearr_34352_34393 = state_34339__$1;
(statearr_34352_34393[(1)] = (5));

} else {
var statearr_34353_34394 = state_34339__$1;
(statearr_34353_34394[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34340 === (12))){
var state_34339__$1 = state_34339;
var statearr_34354_34395 = state_34339__$1;
(statearr_34354_34395[(2)] = true);

(statearr_34354_34395[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34340 === (2))){
var inst_34283 = klipse.utils.url_parameters();
var inst_34284 = cljs.core.cst$kw$cljs_in.cljs$core$IFn$_invoke$arity$1(inst_34283);
var state_34339__$1 = state_34339;
var statearr_34355_34396 = state_34339__$1;
(statearr_34355_34396[(2)] = inst_34284);

(statearr_34355_34396[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34340 === (19))){
var inst_34323 = (state_34339[(10)]);
var state_34339__$1 = state_34339;
var statearr_34356_34397 = state_34339__$1;
(statearr_34356_34397[(2)] = inst_34323);

(statearr_34356_34397[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34340 === (11))){
var inst_34316 = (state_34339[(2)]);
var state_34339__$1 = state_34339;
if(cljs.core.truth_(inst_34316)){
var statearr_34357_34399 = state_34339__$1;
(statearr_34357_34399[(1)] = (15));

} else {
var statearr_34358_34402 = state_34339__$1;
(statearr_34358_34402[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34340 === (9))){
var inst_34298 = (state_34339[(8)]);
var inst_34306 = inst_34298.cljs$lang$protocol_mask$partition0$;
var inst_34307 = (inst_34306 & (64));
var inst_34308 = inst_34298.cljs$core$ISeq$;
var inst_34309 = (inst_34307) || (inst_34308);
var state_34339__$1 = state_34339;
if(cljs.core.truth_(inst_34309)){
var statearr_34359_34403 = state_34339__$1;
(statearr_34359_34403[(1)] = (12));

} else {
var statearr_34360_34404 = state_34339__$1;
(statearr_34360_34404[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34340 === (5))){
var inst_34290 = klipse.utils.url_parameters();
var inst_34291 = cljs.core.cst$kw$cljs_in$gist.cljs$core$IFn$_invoke$arity$1(inst_34290);
var inst_34292 = klipse.app.gist_path(inst_34291);
var inst_34293 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_];
var inst_34294 = [false];
var inst_34295 = cljs.core.PersistentHashMap.fromArrays(inst_34293,inst_34294);
var inst_34296 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_34292,cljs.core.array_seq([inst_34295], 0));
var state_34339__$1 = state_34339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34339__$1,(8),inst_34296);
} else {
if((state_val_34340 === (14))){
var inst_34313 = (state_34339[(2)]);
var state_34339__$1 = state_34339;
var statearr_34363_34406 = state_34339__$1;
(statearr_34363_34406[(2)] = inst_34313);

(statearr_34363_34406[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34340 === (16))){
var inst_34298 = (state_34339[(8)]);
var state_34339__$1 = state_34339;
var statearr_34364_34407 = state_34339__$1;
(statearr_34364_34407[(2)] = inst_34298);

(statearr_34364_34407[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34340 === (10))){
var state_34339__$1 = state_34339;
var statearr_34365_34408 = state_34339__$1;
(statearr_34365_34408[(2)] = false);

(statearr_34365_34408[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34340 === (18))){
var inst_34322 = (state_34339[(9)]);
var state_34339__$1 = state_34339;
var statearr_34366_34409 = state_34339__$1;
(statearr_34366_34409[(2)] = inst_34322);

(statearr_34366_34409[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34340 === (8))){
var inst_34298 = (state_34339[(8)]);
var inst_34298__$1 = (state_34339[(2)]);
var inst_34299 = cljs.core.list(cljs.core.cst$sym$_LT__BANG_,cljs.core.list(cljs.core.cst$sym$http_SLASH_get,cljs.core.list(cljs.core.cst$sym$gist_DASH_path,cljs.core.list(cljs.core.cst$kw$cljs_in$gist,cljs.core.list(cljs.core.cst$sym$url_DASH_parameters))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false], null)));
var inst_34300 = [cljs.core.str(inst_34299),cljs.core.str(": "),cljs.core.str(inst_34298__$1)].join('');
var inst_34301 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34300], 0));
var inst_34303 = (inst_34298__$1 == null);
var inst_34304 = cljs.core.not(inst_34303);
var state_34339__$1 = (function (){var statearr_34367 = state_34339;
(statearr_34367[(11)] = inst_34301);

(statearr_34367[(8)] = inst_34298__$1);

return statearr_34367;
})();
if(inst_34304){
var statearr_34368_34420 = state_34339__$1;
(statearr_34368_34420[(1)] = (9));

} else {
var statearr_34369_34422 = state_34339__$1;
(statearr_34369_34422[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14658__auto__))
;
return ((function (switch__13584__auto__,c__14658__auto__){
return (function() {
var klipse$app$get_first_input_$_state_machine__13585__auto__ = null;
var klipse$app$get_first_input_$_state_machine__13585__auto____0 = (function (){
var statearr_34373 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34373[(0)] = klipse$app$get_first_input_$_state_machine__13585__auto__);

(statearr_34373[(1)] = (1));

return statearr_34373;
});
var klipse$app$get_first_input_$_state_machine__13585__auto____1 = (function (state_34339){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_34339);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e34374){if((e34374 instanceof Object)){
var ex__13588__auto__ = e34374;
var statearr_34375_34425 = state_34339;
(statearr_34375_34425[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34339);

return cljs.core.cst$kw$recur;
} else {
throw e34374;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__34428 = state_34339;
state_34339 = G__34428;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$app$get_first_input_$_state_machine__13585__auto__ = function(state_34339){
switch(arguments.length){
case 0:
return klipse$app$get_first_input_$_state_machine__13585__auto____0.call(this);
case 1:
return klipse$app$get_first_input_$_state_machine__13585__auto____1.call(this,state_34339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$app$get_first_input_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$app$get_first_input_$_state_machine__13585__auto____0;
klipse$app$get_first_input_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$app$get_first_input_$_state_machine__13585__auto____1;
return klipse$app$get_first_input_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_34376 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_34376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_34376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__))
);

return c__14658__auto__;
});
klipse.app.init = (function klipse$app$init(element){
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__){
return (function (state_34471){
var state_val_34472 = (state_34471[(1)]);
if((state_val_34472 === (1))){
var inst_34460 = klipse.app.get_first_input();
var state_34471__$1 = state_34471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34471__$1,(2),inst_34460);
} else {
if((state_val_34472 === (2))){
var inst_34462 = (state_34471[(2)]);
var inst_34463 = [cljs.core.cst$kw$input];
var inst_34464 = [inst_34462];
var inst_34465 = cljs.core.PersistentHashMap.fromArrays(inst_34463,inst_34464);
var inst_34466 = klipse.control.control.reconciler(inst_34465);
var inst_34467 = om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34466,klipse.ui.layout.Layout,element);
var inst_34468 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["process-input"], 0));
var inst_34469 = klipse.ui.editors.cljs.process_input(inst_34466,inst_34462);
var state_34471__$1 = (function (){var statearr_34474 = state_34471;
(statearr_34474[(7)] = inst_34467);

(statearr_34474[(8)] = inst_34468);

return statearr_34474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34471__$1,inst_34469);
} else {
return null;
}
}
});})(c__14658__auto__))
;
return ((function (switch__13584__auto__,c__14658__auto__){
return (function() {
var klipse$app$init_$_state_machine__13585__auto__ = null;
var klipse$app$init_$_state_machine__13585__auto____0 = (function (){
var statearr_34484 = [null,null,null,null,null,null,null,null,null];
(statearr_34484[(0)] = klipse$app$init_$_state_machine__13585__auto__);

(statearr_34484[(1)] = (1));

return statearr_34484;
});
var klipse$app$init_$_state_machine__13585__auto____1 = (function (state_34471){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_34471);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e34486){if((e34486 instanceof Object)){
var ex__13588__auto__ = e34486;
var statearr_34488_34508 = state_34471;
(statearr_34488_34508[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34471);

return cljs.core.cst$kw$recur;
} else {
throw e34486;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__34510 = state_34471;
state_34471 = G__34510;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$app$init_$_state_machine__13585__auto__ = function(state_34471){
switch(arguments.length){
case 0:
return klipse$app$init_$_state_machine__13585__auto____0.call(this);
case 1:
return klipse$app$init_$_state_machine__13585__auto____1.call(this,state_34471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$app$init_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$app$init_$_state_machine__13585__auto____0;
klipse$app$init_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$app$init_$_state_machine__13585__auto____1;
return klipse$app$init_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_34489 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_34489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_34489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__))
);

return c__14658__auto__;
});
