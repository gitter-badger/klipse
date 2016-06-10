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
return (function (state_58483){
var state_val_58484 = (state_58483[(1)]);
if((state_val_58484 === (7))){
var inst_58476 = (state_58483[(2)]);
var state_58483__$1 = state_58483;
var statearr_58485_58519 = state_58483__$1;
(statearr_58485_58519[(2)] = inst_58476);

(statearr_58485_58519[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_58484 === (20))){
var inst_58473 = (state_58483[(2)]);
var state_58483__$1 = state_58483;
var statearr_58486_58520 = state_58483__$1;
(statearr_58486_58520[(2)] = inst_58473);

(statearr_58486_58520[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_58484 === (1))){
var inst_58424 = klipse.utils.url_parameters();
var inst_58425 = cljs.core.cst$kw$cljs_in.cljs$core$IFn$_invoke$arity$1(inst_58424);
var state_58483__$1 = state_58483;
if(cljs.core.truth_(inst_58425)){
var statearr_58487_58521 = state_58483__$1;
(statearr_58487_58521[(1)] = (2));

} else {
var statearr_58488_58522 = state_58483__$1;
(statearr_58488_58522[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_58484 === (4))){
var inst_58478 = (state_58483[(2)]);
var inst_58479 = cljs.core.list(cljs.core.cst$sym$cond,cljs.core.list(cljs.core.cst$kw$cljs_in,cljs.core.list(cljs.core.cst$sym$url_DASH_parameters)),cljs.core.list(cljs.core.cst$kw$cljs_in,cljs.core.list(cljs.core.cst$sym$url_DASH_parameters)),cljs.core.list(cljs.core.cst$kw$cljs_in$gist,cljs.core.list(cljs.core.cst$sym$url_DASH_parameters)),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$status,cljs.core.cst$sym$body], null)], null),cljs.core.list(cljs.core.cst$sym$dbg,cljs.core.list(cljs.core.cst$sym$_LT__BANG_,cljs.core.list(cljs.core.cst$sym$http_SLASH_get,cljs.core.list(cljs.core.cst$sym$gist_DASH_path,cljs.core.list(cljs.core.cst$kw$cljs_in$gist,cljs.core.list(cljs.core.cst$sym$url_DASH_parameters))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false], null))))], null),cljs.core.list(cljs.core.cst$sym$if_DASH_not,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$status,(200)),cljs.core.cst$sym$status,cljs.core.cst$sym$body)));
var inst_58480 = [cljs.core.str(inst_58479),cljs.core.str(": "),cljs.core.str(inst_58478)].join('');
var inst_58481 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_58480], 0));
var state_58483__$1 = (function (){var statearr_58489 = state_58483;
(statearr_58489[(7)] = inst_58481);

return statearr_58489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58483__$1,inst_58478);
} else {
if((state_val_58484 === (15))){
var inst_58442 = (state_58483[(8)]);
var inst_58462 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58442);
var state_58483__$1 = state_58483;
var statearr_58490_58523 = state_58483__$1;
(statearr_58490_58523[(2)] = inst_58462);

(statearr_58490_58523[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_58484 === (13))){
var state_58483__$1 = state_58483;
var statearr_58491_58524 = state_58483__$1;
(statearr_58491_58524[(2)] = false);

(statearr_58491_58524[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_58484 === (6))){
var state_58483__$1 = state_58483;
var statearr_58492_58525 = state_58483__$1;
(statearr_58492_58525[(2)] = null);

(statearr_58492_58525[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_58484 === (17))){
var inst_58466 = (state_58483[(9)]);
var inst_58465 = (state_58483[(2)]);
var inst_58466__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58465,cljs.core.cst$kw$status);
var inst_58467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58465,cljs.core.cst$kw$body);
var inst_58468 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_58466__$1,(200));
var inst_58469 = !(inst_58468);
var state_58483__$1 = (function (){var statearr_58493 = state_58483;
(statearr_58493[(9)] = inst_58466__$1);

(statearr_58493[(10)] = inst_58467);

return statearr_58493;
})();
if(inst_58469){
var statearr_58494_58526 = state_58483__$1;
(statearr_58494_58526[(1)] = (18));

} else {
var statearr_58495_58527 = state_58483__$1;
(statearr_58495_58527[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_58484 === (3))){
var inst_58430 = klipse.utils.url_parameters();
var inst_58431 = cljs.core.cst$kw$cljs_in$gist.cljs$core$IFn$_invoke$arity$1(inst_58430);
var state_58483__$1 = state_58483;
if(cljs.core.truth_(inst_58431)){
var statearr_58496_58528 = state_58483__$1;
(statearr_58496_58528[(1)] = (5));

} else {
var statearr_58497_58529 = state_58483__$1;
(statearr_58497_58529[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_58484 === (12))){
var state_58483__$1 = state_58483;
var statearr_58498_58530 = state_58483__$1;
(statearr_58498_58530[(2)] = true);

(statearr_58498_58530[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_58484 === (2))){
var inst_58427 = klipse.utils.url_parameters();
var inst_58428 = cljs.core.cst$kw$cljs_in.cljs$core$IFn$_invoke$arity$1(inst_58427);
var state_58483__$1 = state_58483;
var statearr_58499_58531 = state_58483__$1;
(statearr_58499_58531[(2)] = inst_58428);

(statearr_58499_58531[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_58484 === (19))){
var inst_58467 = (state_58483[(10)]);
var state_58483__$1 = state_58483;
var statearr_58500_58532 = state_58483__$1;
(statearr_58500_58532[(2)] = inst_58467);

(statearr_58500_58532[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_58484 === (11))){
var inst_58460 = (state_58483[(2)]);
var state_58483__$1 = state_58483;
if(cljs.core.truth_(inst_58460)){
var statearr_58501_58533 = state_58483__$1;
(statearr_58501_58533[(1)] = (15));

} else {
var statearr_58502_58534 = state_58483__$1;
(statearr_58502_58534[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_58484 === (9))){
var inst_58442 = (state_58483[(8)]);
var inst_58450 = inst_58442.cljs$lang$protocol_mask$partition0$;
var inst_58451 = (inst_58450 & (64));
var inst_58452 = inst_58442.cljs$core$ISeq$;
var inst_58453 = (inst_58451) || (inst_58452);
var state_58483__$1 = state_58483;
if(cljs.core.truth_(inst_58453)){
var statearr_58503_58535 = state_58483__$1;
(statearr_58503_58535[(1)] = (12));

} else {
var statearr_58504_58536 = state_58483__$1;
(statearr_58504_58536[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_58484 === (5))){
var inst_58434 = klipse.utils.url_parameters();
var inst_58435 = cljs.core.cst$kw$cljs_in$gist.cljs$core$IFn$_invoke$arity$1(inst_58434);
var inst_58436 = klipse.app.gist_path(inst_58435);
var inst_58437 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_];
var inst_58438 = [false];
var inst_58439 = cljs.core.PersistentHashMap.fromArrays(inst_58437,inst_58438);
var inst_58440 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_58436,cljs.core.array_seq([inst_58439], 0));
var state_58483__$1 = state_58483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58483__$1,(8),inst_58440);
} else {
if((state_val_58484 === (14))){
var inst_58457 = (state_58483[(2)]);
var state_58483__$1 = state_58483;
var statearr_58505_58537 = state_58483__$1;
(statearr_58505_58537[(2)] = inst_58457);

(statearr_58505_58537[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_58484 === (16))){
var inst_58442 = (state_58483[(8)]);
var state_58483__$1 = state_58483;
var statearr_58506_58538 = state_58483__$1;
(statearr_58506_58538[(2)] = inst_58442);

(statearr_58506_58538[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_58484 === (10))){
var state_58483__$1 = state_58483;
var statearr_58507_58539 = state_58483__$1;
(statearr_58507_58539[(2)] = false);

(statearr_58507_58539[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_58484 === (18))){
var inst_58466 = (state_58483[(9)]);
var state_58483__$1 = state_58483;
var statearr_58508_58540 = state_58483__$1;
(statearr_58508_58540[(2)] = inst_58466);

(statearr_58508_58540[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_58484 === (8))){
var inst_58442 = (state_58483[(8)]);
var inst_58442__$1 = (state_58483[(2)]);
var inst_58443 = cljs.core.list(cljs.core.cst$sym$_LT__BANG_,cljs.core.list(cljs.core.cst$sym$http_SLASH_get,cljs.core.list(cljs.core.cst$sym$gist_DASH_path,cljs.core.list(cljs.core.cst$kw$cljs_in$gist,cljs.core.list(cljs.core.cst$sym$url_DASH_parameters))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false], null)));
var inst_58444 = [cljs.core.str(inst_58443),cljs.core.str(": "),cljs.core.str(inst_58442__$1)].join('');
var inst_58445 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_58444], 0));
var inst_58447 = (inst_58442__$1 == null);
var inst_58448 = cljs.core.not(inst_58447);
var state_58483__$1 = (function (){var statearr_58509 = state_58483;
(statearr_58509[(8)] = inst_58442__$1);

(statearr_58509[(11)] = inst_58445);

return statearr_58509;
})();
if(inst_58448){
var statearr_58510_58541 = state_58483__$1;
(statearr_58510_58541[(1)] = (9));

} else {
var statearr_58511_58542 = state_58483__$1;
(statearr_58511_58542[(1)] = (10));

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
var statearr_58515 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58515[(0)] = klipse$app$get_first_input_$_state_machine__13585__auto__);

(statearr_58515[(1)] = (1));

return statearr_58515;
});
var klipse$app$get_first_input_$_state_machine__13585__auto____1 = (function (state_58483){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_58483);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e58516){if((e58516 instanceof Object)){
var ex__13588__auto__ = e58516;
var statearr_58517_58543 = state_58483;
(statearr_58517_58543[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58483);

return cljs.core.cst$kw$recur;
} else {
throw e58516;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__58544 = state_58483;
state_58483 = G__58544;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$app$get_first_input_$_state_machine__13585__auto__ = function(state_58483){
switch(arguments.length){
case 0:
return klipse$app$get_first_input_$_state_machine__13585__auto____0.call(this);
case 1:
return klipse$app$get_first_input_$_state_machine__13585__auto____1.call(this,state_58483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$app$get_first_input_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$app$get_first_input_$_state_machine__13585__auto____0;
klipse$app$get_first_input_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$app$get_first_input_$_state_machine__13585__auto____1;
return klipse$app$get_first_input_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_58518 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_58518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_58518;
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
return (function (state_58577){
var state_val_58578 = (state_58577[(1)]);
if((state_val_58578 === (1))){
var inst_58566 = klipse.app.get_first_input();
var state_58577__$1 = state_58577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58577__$1,(2),inst_58566);
} else {
if((state_val_58578 === (2))){
var inst_58568 = (state_58577[(2)]);
var inst_58569 = [cljs.core.cst$kw$input];
var inst_58570 = [inst_58568];
var inst_58571 = cljs.core.PersistentHashMap.fromArrays(inst_58569,inst_58570);
var inst_58572 = klipse.control.control.reconciler(inst_58571);
var inst_58573 = om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(inst_58572,klipse.ui.layout.Layout,element);
var inst_58574 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["process-input"], 0));
var inst_58575 = klipse.ui.editors.cljs.process_input(inst_58572,inst_58568);
var state_58577__$1 = (function (){var statearr_58579 = state_58577;
(statearr_58579[(7)] = inst_58573);

(statearr_58579[(8)] = inst_58574);

return statearr_58579;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58577__$1,inst_58575);
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
var statearr_58583 = [null,null,null,null,null,null,null,null,null];
(statearr_58583[(0)] = klipse$app$init_$_state_machine__13585__auto__);

(statearr_58583[(1)] = (1));

return statearr_58583;
});
var klipse$app$init_$_state_machine__13585__auto____1 = (function (state_58577){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_58577);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e58584){if((e58584 instanceof Object)){
var ex__13588__auto__ = e58584;
var statearr_58585_58587 = state_58577;
(statearr_58585_58587[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58577);

return cljs.core.cst$kw$recur;
} else {
throw e58584;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__58588 = state_58577;
state_58577 = G__58588;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$app$init_$_state_machine__13585__auto__ = function(state_58577){
switch(arguments.length){
case 0:
return klipse$app$init_$_state_machine__13585__auto____0.call(this);
case 1:
return klipse$app$init_$_state_machine__13585__auto____1.call(this,state_58577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$app$init_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$app$init_$_state_machine__13585__auto____0;
klipse$app$init_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$app$init_$_state_machine__13585__auto____1;
return klipse$app$init_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_58586 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_58586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_58586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__))
);

return c__14658__auto__;
});
