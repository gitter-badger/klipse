// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.plugin');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('klipse.ui.editors.common');
goog.require('klipse.ui.editors.editor');
goog.require('gadjett.core');
goog.require('klipse.compiler');
klipse.plugin.app_url = "http://app.klipse.tech";
klipse.plugin.language__GT_eval_fn = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$clojure,klipse.compiler.str_eval_async,cljs.core.cst$kw$javascript,klipse.compiler.str_compile_async], null);
klipse.plugin.editor_options = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$matchBrackets,true,cljs.core.cst$kw$scrollbarStyle,"overlay"], null);
klipse.plugin.eval_in_editor = (function klipse$plugin$eval_in_editor(eval_fn,editor_target,editor_source){
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__){
return (function (state_32215){
var state_val_32216 = (state_32215[(1)]);
if((state_val_32216 === (1))){
var inst_32209 = klipse.ui.editors.editor.get_value(editor_source);
var inst_32210 = (eval_fn.cljs$core$IFn$_invoke$arity$1 ? eval_fn.cljs$core$IFn$_invoke$arity$1(inst_32209) : eval_fn.call(null,inst_32209));
var state_32215__$1 = state_32215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32215__$1,(2),inst_32210);
} else {
if((state_val_32216 === (2))){
var inst_32212 = (state_32215[(2)]);
var inst_32213 = klipse.ui.editors.editor.set_value(editor_target,inst_32212);
var state_32215__$1 = state_32215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32215__$1,inst_32213);
} else {
return null;
}
}
});})(c__14658__auto__))
;
return ((function (switch__13584__auto__,c__14658__auto__){
return (function() {
var klipse$plugin$eval_in_editor_$_state_machine__13585__auto__ = null;
var klipse$plugin$eval_in_editor_$_state_machine__13585__auto____0 = (function (){
var statearr_32222 = [null,null,null,null,null,null,null];
(statearr_32222[(0)] = klipse$plugin$eval_in_editor_$_state_machine__13585__auto__);

(statearr_32222[(1)] = (1));

return statearr_32222;
});
var klipse$plugin$eval_in_editor_$_state_machine__13585__auto____1 = (function (state_32215){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_32215);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e32223){if((e32223 instanceof Object)){
var ex__13588__auto__ = e32223;
var statearr_32224_32229 = state_32215;
(statearr_32224_32229[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32215);

return cljs.core.cst$kw$recur;
} else {
throw e32223;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__32231 = state_32215;
state_32215 = G__32231;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$plugin$eval_in_editor_$_state_machine__13585__auto__ = function(state_32215){
switch(arguments.length){
case 0:
return klipse$plugin$eval_in_editor_$_state_machine__13585__auto____0.call(this);
case 1:
return klipse$plugin$eval_in_editor_$_state_machine__13585__auto____1.call(this,state_32215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$eval_in_editor_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$eval_in_editor_$_state_machine__13585__auto____0;
klipse$plugin$eval_in_editor_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$eval_in_editor_$_state_machine__13585__auto____1;
return klipse$plugin$eval_in_editor_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_32225 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_32225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_32225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__))
);

return c__14658__auto__;
});
klipse.plugin.klipsify = (function klipse$plugin$klipsify(element,language){
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__){
return (function (state_32299){
var state_val_32300 = (state_32299[(1)]);
if((state_val_32300 === (1))){
var inst_32274 = (klipse.plugin.language__GT_eval_fn.cljs$core$IFn$_invoke$arity$1 ? klipse.plugin.language__GT_eval_fn.cljs$core$IFn$_invoke$arity$1(language) : klipse.plugin.language__GT_eval_fn.call(null,language));
var inst_32275 = cljs.core.name(language);
var inst_32276 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(klipse.plugin.editor_options,cljs.core.cst$kw$mode,inst_32275);
var state_32299__$1 = (function (){var statearr_32301 = state_32299;
(statearr_32301[(7)] = inst_32274);

(statearr_32301[(8)] = inst_32276);

return statearr_32301;
})();
if(cljs.core.truth_(element)){
var statearr_32302_32315 = state_32299__$1;
(statearr_32302_32315[(1)] = (2));

} else {
var statearr_32303_32316 = state_32299__$1;
(statearr_32303_32316[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32300 === (2))){
var inst_32274 = (state_32299[(7)]);
var inst_32276 = (state_32299[(8)]);
var inst_32278 = (state_32299[(9)]);
var inst_32279 = (state_32299[(10)]);
var inst_32278__$1 = element.textContent;
var inst_32279__$1 = (function (){var eval_fn = inst_32274;
var my_editor_options = inst_32276;
var clj_in = inst_32278__$1;
return ((function (eval_fn,my_editor_options,clj_in,inst_32274,inst_32276,inst_32278,inst_32279,inst_32278__$1,state_val_32300,c__14658__auto__){
return (function (p1__32232_SHARP_){
return (eval_fn.cljs$core$IFn$_invoke$arity$1 ? eval_fn.cljs$core$IFn$_invoke$arity$1(p1__32232_SHARP_) : eval_fn.call(null,p1__32232_SHARP_));
});
;})(eval_fn,my_editor_options,clj_in,inst_32274,inst_32276,inst_32278,inst_32279,inst_32278__$1,state_val_32300,c__14658__auto__))
})();
var inst_32280 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_32276,cljs.core.cst$kw$readOnly,true);
var inst_32281 = cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$my_DASH_editor_DASH_options,cljs.core.cst$kw$readOnly,true);
var inst_32282 = [cljs.core.str(inst_32281),cljs.core.str(": "),cljs.core.str(inst_32280)].join('');
var inst_32283 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_32282], 0));
var inst_32284 = klipse.ui.editors.editor.create_editor_after_element(element,";the evaluation will appear here (soon)...",inst_32280);
var inst_32285 = klipse.ui.editors.editor.replace_element_by_editor(element,inst_32278__$1,inst_32276);
var inst_32286 = (inst_32279__$1.cljs$core$IFn$_invoke$arity$1 ? inst_32279__$1.cljs$core$IFn$_invoke$arity$1(inst_32278__$1) : inst_32279__$1.call(null,inst_32278__$1));
var state_32299__$1 = (function (){var statearr_32304 = state_32299;
(statearr_32304[(11)] = inst_32283);

(statearr_32304[(12)] = inst_32284);

(statearr_32304[(13)] = inst_32285);

(statearr_32304[(9)] = inst_32278__$1);

(statearr_32304[(10)] = inst_32279__$1);

return statearr_32304;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32299__$1,(5),inst_32286);
} else {
if((state_val_32300 === (3))){
var state_32299__$1 = state_32299;
var statearr_32305_32323 = state_32299__$1;
(statearr_32305_32323[(2)] = null);

(statearr_32305_32323[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32300 === (4))){
var inst_32297 = (state_32299[(2)]);
var state_32299__$1 = state_32299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32299__$1,inst_32297);
} else {
if((state_val_32300 === (5))){
var inst_32274 = (state_32299[(7)]);
var inst_32284 = (state_32299[(12)]);
var inst_32276 = (state_32299[(8)]);
var inst_32285 = (state_32299[(13)]);
var inst_32278 = (state_32299[(9)]);
var inst_32279 = (state_32299[(10)]);
var inst_32288 = (state_32299[(2)]);
var inst_32289 = klipse.ui.editors.editor.set_value(inst_32284,inst_32288);
var inst_32290 = [cljs.core.cst$kw$idle_DASH_msec,cljs.core.cst$kw$base_DASH_url,cljs.core.cst$kw$on_DASH_should_DASH_eval];
var inst_32291 = (function (){var eval_fn = inst_32274;
var my_editor_options = inst_32276;
var clj_in = inst_32278;
var eval_fn_with_args = inst_32279;
var out_editor = inst_32284;
var in_editor = inst_32285;
return ((function (eval_fn,my_editor_options,clj_in,eval_fn_with_args,out_editor,in_editor,inst_32274,inst_32284,inst_32276,inst_32285,inst_32278,inst_32279,inst_32288,inst_32289,inst_32290,state_val_32300,c__14658__auto__){
return (function (){
return klipse.plugin.eval_in_editor(eval_fn_with_args,out_editor,in_editor);
});
;})(eval_fn,my_editor_options,clj_in,eval_fn_with_args,out_editor,in_editor,inst_32274,inst_32284,inst_32276,inst_32285,inst_32278,inst_32279,inst_32288,inst_32289,inst_32290,state_val_32300,c__14658__auto__))
})();
var inst_32292 = [(2000),klipse.plugin.app_url,inst_32291];
var inst_32293 = cljs.core.PersistentHashMap.fromArrays(inst_32290,inst_32292);
var inst_32294 = klipse.ui.editors.common.handle_events(inst_32285,inst_32293);
var state_32299__$1 = (function (){var statearr_32306 = state_32299;
(statearr_32306[(14)] = inst_32289);

return statearr_32306;
})();
var statearr_32307_32330 = state_32299__$1;
(statearr_32307_32330[(2)] = inst_32294);

(statearr_32307_32330[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
});})(c__14658__auto__))
;
return ((function (switch__13584__auto__,c__14658__auto__){
return (function() {
var klipse$plugin$klipsify_$_state_machine__13585__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__13585__auto____0 = (function (){
var statearr_32311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32311[(0)] = klipse$plugin$klipsify_$_state_machine__13585__auto__);

(statearr_32311[(1)] = (1));

return statearr_32311;
});
var klipse$plugin$klipsify_$_state_machine__13585__auto____1 = (function (state_32299){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_32299);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e32312){if((e32312 instanceof Object)){
var ex__13588__auto__ = e32312;
var statearr_32313_32335 = state_32299;
(statearr_32313_32335[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32299);

return cljs.core.cst$kw$recur;
} else {
throw e32312;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__32336 = state_32299;
state_32299 = G__32336;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__13585__auto__ = function(state_32299){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__13585__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__13585__auto____1.call(this,state_32299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__13585__auto____0;
klipse$plugin$klipsify_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__13585__auto____1;
return klipse$plugin$klipsify_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_32314 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_32314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_32314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__))
);

return c__14658__auto__;
});
klipse.plugin.klipsify_elements = (function klipse$plugin$klipsify_elements(elements,language){
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__){
return (function (state_32477){
var state_val_32478 = (state_32477[(1)]);
if((state_val_32478 === (7))){
var inst_32434 = (state_32477[(7)]);
var inst_32433 = (state_32477[(8)]);
var inst_32432 = (state_32477[(9)]);
var inst_32435 = (state_32477[(10)]);
var inst_32443 = (state_32477[(2)]);
var inst_32444 = (inst_32435 + (1));
var tmp32479 = inst_32434;
var tmp32480 = inst_32433;
var tmp32481 = inst_32432;
var inst_32432__$1 = tmp32481;
var inst_32433__$1 = tmp32480;
var inst_32434__$1 = tmp32479;
var inst_32435__$1 = inst_32444;
var state_32477__$1 = (function (){var statearr_32482 = state_32477;
(statearr_32482[(7)] = inst_32434__$1);

(statearr_32482[(8)] = inst_32433__$1);

(statearr_32482[(9)] = inst_32432__$1);

(statearr_32482[(11)] = inst_32443);

(statearr_32482[(10)] = inst_32435__$1);

return statearr_32482;
})();
var statearr_32483_32523 = state_32477__$1;
(statearr_32483_32523[(2)] = null);

(statearr_32483_32523[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32478 === (1))){
var inst_32426 = cljs.core.system_time();
var inst_32431 = cljs.core.seq(elements);
var inst_32432 = inst_32431;
var inst_32433 = null;
var inst_32434 = (0);
var inst_32435 = (0);
var state_32477__$1 = (function (){var statearr_32484 = state_32477;
(statearr_32484[(12)] = inst_32426);

(statearr_32484[(7)] = inst_32434);

(statearr_32484[(8)] = inst_32433);

(statearr_32484[(9)] = inst_32432);

(statearr_32484[(10)] = inst_32435);

return statearr_32484;
})();
var statearr_32486_32532 = state_32477__$1;
(statearr_32486_32532[(2)] = null);

(statearr_32486_32532[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32478 === (4))){
var inst_32433 = (state_32477[(8)]);
var inst_32435 = (state_32477[(10)]);
var inst_32440 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32433,inst_32435);
var inst_32441 = klipse.plugin.klipsify(inst_32440,language);
var state_32477__$1 = state_32477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32477__$1,(7),inst_32441);
} else {
if((state_val_32478 === (13))){
var inst_32463 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
var statearr_32488_32533 = state_32477__$1;
(statearr_32488_32533[(2)] = inst_32463);

(statearr_32488_32533[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32478 === (6))){
var inst_32468 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
var statearr_32489_32534 = state_32477__$1;
(statearr_32489_32534[(2)] = inst_32468);

(statearr_32489_32534[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32478 === (3))){
var inst_32426 = (state_32477[(12)]);
var inst_32470 = (state_32477[(2)]);
var inst_32471 = cljs.core.system_time();
var inst_32472 = (inst_32471 - inst_32426);
var inst_32473 = inst_32472.toFixed((6));
var inst_32474 = [cljs.core.str("Elapsed time: "),cljs.core.str(inst_32473),cljs.core.str(" msecs")].join('');
var inst_32475 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_32474], 0));
var state_32477__$1 = (function (){var statearr_32490 = state_32477;
(statearr_32490[(13)] = inst_32475);

return statearr_32490;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32477__$1,inst_32470);
} else {
if((state_val_32478 === (12))){
var inst_32447 = (state_32477[(14)]);
var inst_32456 = cljs.core.first(inst_32447);
var inst_32457 = klipse.plugin.klipsify(inst_32456,language);
var state_32477__$1 = state_32477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32477__$1,(14),inst_32457);
} else {
if((state_val_32478 === (2))){
var inst_32434 = (state_32477[(7)]);
var inst_32435 = (state_32477[(10)]);
var inst_32437 = (inst_32435 < inst_32434);
var inst_32438 = inst_32437;
var state_32477__$1 = state_32477;
if(cljs.core.truth_(inst_32438)){
var statearr_32491_32545 = state_32477__$1;
(statearr_32491_32545[(1)] = (4));

} else {
var statearr_32492_32546 = state_32477__$1;
(statearr_32492_32546[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32478 === (11))){
var inst_32447 = (state_32477[(14)]);
var inst_32451 = cljs.core.chunk_first(inst_32447);
var inst_32452 = cljs.core.chunk_rest(inst_32447);
var inst_32453 = cljs.core.count(inst_32451);
var inst_32432 = inst_32452;
var inst_32433 = inst_32451;
var inst_32434 = inst_32453;
var inst_32435 = (0);
var state_32477__$1 = (function (){var statearr_32493 = state_32477;
(statearr_32493[(7)] = inst_32434);

(statearr_32493[(8)] = inst_32433);

(statearr_32493[(9)] = inst_32432);

(statearr_32493[(10)] = inst_32435);

return statearr_32493;
})();
var statearr_32495_32549 = state_32477__$1;
(statearr_32495_32549[(2)] = null);

(statearr_32495_32549[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32478 === (9))){
var state_32477__$1 = state_32477;
var statearr_32497_32550 = state_32477__$1;
(statearr_32497_32550[(2)] = null);

(statearr_32497_32550[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32478 === (5))){
var inst_32432 = (state_32477[(9)]);
var inst_32447 = (state_32477[(14)]);
var inst_32447__$1 = cljs.core.seq(inst_32432);
var state_32477__$1 = (function (){var statearr_32498 = state_32477;
(statearr_32498[(14)] = inst_32447__$1);

return statearr_32498;
})();
if(inst_32447__$1){
var statearr_32499_32552 = state_32477__$1;
(statearr_32499_32552[(1)] = (8));

} else {
var statearr_32500_32554 = state_32477__$1;
(statearr_32500_32554[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32478 === (14))){
var inst_32447 = (state_32477[(14)]);
var inst_32459 = (state_32477[(2)]);
var inst_32460 = cljs.core.next(inst_32447);
var inst_32432 = inst_32460;
var inst_32433 = null;
var inst_32434 = (0);
var inst_32435 = (0);
var state_32477__$1 = (function (){var statearr_32501 = state_32477;
(statearr_32501[(15)] = inst_32459);

(statearr_32501[(7)] = inst_32434);

(statearr_32501[(8)] = inst_32433);

(statearr_32501[(9)] = inst_32432);

(statearr_32501[(10)] = inst_32435);

return statearr_32501;
})();
var statearr_32502_32565 = state_32477__$1;
(statearr_32502_32565[(2)] = null);

(statearr_32502_32565[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32478 === (10))){
var inst_32466 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
var statearr_32503_32568 = state_32477__$1;
(statearr_32503_32568[(2)] = inst_32466);

(statearr_32503_32568[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32478 === (8))){
var inst_32447 = (state_32477[(14)]);
var inst_32449 = cljs.core.chunked_seq_QMARK_(inst_32447);
var state_32477__$1 = state_32477;
if(inst_32449){
var statearr_32504_32572 = state_32477__$1;
(statearr_32504_32572[(1)] = (11));

} else {
var statearr_32505_32576 = state_32477__$1;
(statearr_32505_32576[(1)] = (12));

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
});})(c__14658__auto__))
;
return ((function (switch__13584__auto__,c__14658__auto__){
return (function() {
var klipse$plugin$klipsify_elements_$_state_machine__13585__auto__ = null;
var klipse$plugin$klipsify_elements_$_state_machine__13585__auto____0 = (function (){
var statearr_32513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32513[(0)] = klipse$plugin$klipsify_elements_$_state_machine__13585__auto__);

(statearr_32513[(1)] = (1));

return statearr_32513;
});
var klipse$plugin$klipsify_elements_$_state_machine__13585__auto____1 = (function (state_32477){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_32477);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e32515){if((e32515 instanceof Object)){
var ex__13588__auto__ = e32515;
var statearr_32516_32587 = state_32477;
(statearr_32516_32587[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32477);

return cljs.core.cst$kw$recur;
} else {
throw e32515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__32590 = state_32477;
state_32477 = G__32590;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$plugin$klipsify_elements_$_state_machine__13585__auto__ = function(state_32477){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_elements_$_state_machine__13585__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_elements_$_state_machine__13585__auto____1.call(this,state_32477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_elements_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_elements_$_state_machine__13585__auto____0;
klipse$plugin$klipsify_elements_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_elements_$_state_machine__13585__auto____1;
return klipse$plugin$klipsify_elements_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_32518 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_32518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_32518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__))
);

return c__14658__auto__;
});
if(typeof klipse.plugin.init !== 'undefined'){
} else {
klipse.plugin.init = (function (){var method_table__7146__auto__ = (function (){var G__32599 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32599) : cljs.core.atom.call(null,G__32599));
})();
var prefer_table__7147__auto__ = (function (){var G__32601 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32601) : cljs.core.atom.call(null,G__32601));
})();
var method_cache__7148__auto__ = (function (){var G__32603 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32603) : cljs.core.atom.call(null,G__32603));
})();
var cached_hierarchy__7149__auto__ = (function (){var G__32604 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32604) : cljs.core.atom.call(null,G__32604));
})();
var hierarchy__7150__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("klipse.plugin","init"),((function (method_table__7146__auto__,prefer_table__7147__auto__,method_cache__7148__auto__,cached_hierarchy__7149__auto__,hierarchy__7150__auto__){
return (function (settings){
return cljs.core.map_QMARK_(settings);
});})(method_table__7146__auto__,prefer_table__7147__auto__,method_cache__7148__auto__,cached_hierarchy__7149__auto__,hierarchy__7150__auto__))
,cljs.core.cst$kw$default,hierarchy__7150__auto__,method_table__7146__auto__,prefer_table__7147__auto__,method_cache__7148__auto__,cached_hierarchy__7149__auto__));
})();
}
klipse.plugin.init.cljs$core$IMultiFn$_add_method$arity$3(null,false,(function (js_settings){
var G__32622 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(js_settings,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
return (klipse.plugin.init.cljs$core$IFn$_invoke$arity$1 ? klipse.plugin.init.cljs$core$IFn$_invoke$arity$1(G__32622) : klipse.plugin.init.call(null,G__32622));
}));
klipse.plugin.init.cljs$core$IMultiFn$_add_method$arity$3(null,true,(function (p__32626){
var map__32627 = p__32626;
var map__32627__$1 = ((((!((map__32627 == null)))?((((map__32627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32627):map__32627);
var settings = map__32627__$1;
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32627__$1,cljs.core.cst$kw$selector);
var selector_js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32627__$1,cljs.core.cst$kw$selector_js);
var x__31222__auto___32629 = settings;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.cst$sym$settings),cljs.core.str(": "),cljs.core.str(x__31222__auto___32629)].join('')], 0));


klipse.plugin.klipsify_elements((function (){var x__31222__auto__ = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll(selector_js));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.list(cljs.core.cst$sym$array_DASH_seq,cljs.core.list(cljs.core.cst$sym$js_SLASH_document$querySelectorAll,cljs.core.cst$sym$selector_js))),cljs.core.str(": "),cljs.core.str(x__31222__auto__)].join('')], 0));

return x__31222__auto__;
})(),cljs.core.cst$kw$javascript);

return klipse.plugin.klipsify_elements((function (){var x__31222__auto__ = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll(selector));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.list(cljs.core.cst$sym$array_DASH_seq,cljs.core.list(cljs.core.cst$sym$js_SLASH_document$querySelectorAll,cljs.core.cst$sym$selector))),cljs.core.str(": "),cljs.core.str(x__31222__auto__)].join('')], 0));

return x__31222__auto__;
})(),cljs.core.cst$kw$clojure);
}));
