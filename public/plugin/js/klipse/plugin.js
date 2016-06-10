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
return (function (state_57412){
var state_val_57413 = (state_57412[(1)]);
if((state_val_57413 === (1))){
var inst_57406 = klipse.ui.editors.editor.get_value(editor_source);
var inst_57407 = (eval_fn.cljs$core$IFn$_invoke$arity$1 ? eval_fn.cljs$core$IFn$_invoke$arity$1(inst_57406) : eval_fn.call(null,inst_57406));
var state_57412__$1 = state_57412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57412__$1,(2),inst_57407);
} else {
if((state_val_57413 === (2))){
var inst_57409 = (state_57412[(2)]);
var inst_57410 = klipse.ui.editors.editor.set_value(editor_target,inst_57409);
var state_57412__$1 = state_57412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57412__$1,inst_57410);
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
var statearr_57417 = [null,null,null,null,null,null,null];
(statearr_57417[(0)] = klipse$plugin$eval_in_editor_$_state_machine__13585__auto__);

(statearr_57417[(1)] = (1));

return statearr_57417;
});
var klipse$plugin$eval_in_editor_$_state_machine__13585__auto____1 = (function (state_57412){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_57412);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e57418){if((e57418 instanceof Object)){
var ex__13588__auto__ = e57418;
var statearr_57419_57421 = state_57412;
(statearr_57419_57421[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57412);

return cljs.core.cst$kw$recur;
} else {
throw e57418;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__57422 = state_57412;
state_57412 = G__57422;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$plugin$eval_in_editor_$_state_machine__13585__auto__ = function(state_57412){
switch(arguments.length){
case 0:
return klipse$plugin$eval_in_editor_$_state_machine__13585__auto____0.call(this);
case 1:
return klipse$plugin$eval_in_editor_$_state_machine__13585__auto____1.call(this,state_57412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$eval_in_editor_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$eval_in_editor_$_state_machine__13585__auto____0;
klipse$plugin$eval_in_editor_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$eval_in_editor_$_state_machine__13585__auto____1;
return klipse$plugin$eval_in_editor_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_57420 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_57420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_57420;
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
return (function (state_57490){
var state_val_57491 = (state_57490[(1)]);
if((state_val_57491 === (1))){
var inst_57465 = (klipse.plugin.language__GT_eval_fn.cljs$core$IFn$_invoke$arity$1 ? klipse.plugin.language__GT_eval_fn.cljs$core$IFn$_invoke$arity$1(language) : klipse.plugin.language__GT_eval_fn.call(null,language));
var inst_57466 = cljs.core.name(language);
var inst_57467 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(klipse.plugin.editor_options,cljs.core.cst$kw$mode,inst_57466);
var state_57490__$1 = (function (){var statearr_57492 = state_57490;
(statearr_57492[(7)] = inst_57467);

(statearr_57492[(8)] = inst_57465);

return statearr_57492;
})();
if(cljs.core.truth_(element)){
var statearr_57493_57506 = state_57490__$1;
(statearr_57493_57506[(1)] = (2));

} else {
var statearr_57494_57507 = state_57490__$1;
(statearr_57494_57507[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57491 === (2))){
var inst_57467 = (state_57490[(7)]);
var inst_57469 = (state_57490[(9)]);
var inst_57470 = (state_57490[(10)]);
var inst_57465 = (state_57490[(8)]);
var inst_57469__$1 = element.textContent;
var inst_57470__$1 = (function (){var eval_fn = inst_57465;
var my_editor_options = inst_57467;
var clj_in = inst_57469__$1;
return ((function (eval_fn,my_editor_options,clj_in,inst_57467,inst_57469,inst_57470,inst_57465,inst_57469__$1,state_val_57491,c__14658__auto__){
return (function (p1__57423_SHARP_){
return (eval_fn.cljs$core$IFn$_invoke$arity$1 ? eval_fn.cljs$core$IFn$_invoke$arity$1(p1__57423_SHARP_) : eval_fn.call(null,p1__57423_SHARP_));
});
;})(eval_fn,my_editor_options,clj_in,inst_57467,inst_57469,inst_57470,inst_57465,inst_57469__$1,state_val_57491,c__14658__auto__))
})();
var inst_57471 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_57467,cljs.core.cst$kw$readOnly,true);
var inst_57472 = cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$my_DASH_editor_DASH_options,cljs.core.cst$kw$readOnly,true);
var inst_57473 = [cljs.core.str(inst_57472),cljs.core.str(": "),cljs.core.str(inst_57471)].join('');
var inst_57474 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_57473], 0));
var inst_57475 = klipse.ui.editors.editor.create_editor_after_element(element,";the evaluation will appear here (soon)...",inst_57471);
var inst_57476 = klipse.ui.editors.editor.replace_element_by_editor(element,inst_57469__$1,inst_57467);
var inst_57477 = (inst_57470__$1.cljs$core$IFn$_invoke$arity$1 ? inst_57470__$1.cljs$core$IFn$_invoke$arity$1(inst_57469__$1) : inst_57470__$1.call(null,inst_57469__$1));
var state_57490__$1 = (function (){var statearr_57495 = state_57490;
(statearr_57495[(11)] = inst_57475);

(statearr_57495[(9)] = inst_57469__$1);

(statearr_57495[(12)] = inst_57476);

(statearr_57495[(10)] = inst_57470__$1);

(statearr_57495[(13)] = inst_57474);

return statearr_57495;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57490__$1,(5),inst_57477);
} else {
if((state_val_57491 === (3))){
var state_57490__$1 = state_57490;
var statearr_57496_57508 = state_57490__$1;
(statearr_57496_57508[(2)] = null);

(statearr_57496_57508[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57491 === (4))){
var inst_57488 = (state_57490[(2)]);
var state_57490__$1 = state_57490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57490__$1,inst_57488);
} else {
if((state_val_57491 === (5))){
var inst_57467 = (state_57490[(7)]);
var inst_57475 = (state_57490[(11)]);
var inst_57469 = (state_57490[(9)]);
var inst_57476 = (state_57490[(12)]);
var inst_57470 = (state_57490[(10)]);
var inst_57465 = (state_57490[(8)]);
var inst_57479 = (state_57490[(2)]);
var inst_57480 = klipse.ui.editors.editor.set_value(inst_57475,inst_57479);
var inst_57481 = [cljs.core.cst$kw$idle_DASH_msec,cljs.core.cst$kw$base_DASH_url,cljs.core.cst$kw$on_DASH_should_DASH_eval];
var inst_57482 = (function (){var eval_fn = inst_57465;
var my_editor_options = inst_57467;
var clj_in = inst_57469;
var eval_fn_with_args = inst_57470;
var out_editor = inst_57475;
var in_editor = inst_57476;
return ((function (eval_fn,my_editor_options,clj_in,eval_fn_with_args,out_editor,in_editor,inst_57467,inst_57475,inst_57469,inst_57476,inst_57470,inst_57465,inst_57479,inst_57480,inst_57481,state_val_57491,c__14658__auto__){
return (function (){
return klipse.plugin.eval_in_editor(eval_fn_with_args,out_editor,in_editor);
});
;})(eval_fn,my_editor_options,clj_in,eval_fn_with_args,out_editor,in_editor,inst_57467,inst_57475,inst_57469,inst_57476,inst_57470,inst_57465,inst_57479,inst_57480,inst_57481,state_val_57491,c__14658__auto__))
})();
var inst_57483 = [(2000),klipse.plugin.app_url,inst_57482];
var inst_57484 = cljs.core.PersistentHashMap.fromArrays(inst_57481,inst_57483);
var inst_57485 = klipse.ui.editors.common.handle_events(inst_57476,inst_57484);
var state_57490__$1 = (function (){var statearr_57497 = state_57490;
(statearr_57497[(14)] = inst_57480);

return statearr_57497;
})();
var statearr_57498_57509 = state_57490__$1;
(statearr_57498_57509[(2)] = inst_57485);

(statearr_57498_57509[(1)] = (4));


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
var statearr_57502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57502[(0)] = klipse$plugin$klipsify_$_state_machine__13585__auto__);

(statearr_57502[(1)] = (1));

return statearr_57502;
});
var klipse$plugin$klipsify_$_state_machine__13585__auto____1 = (function (state_57490){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_57490);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e57503){if((e57503 instanceof Object)){
var ex__13588__auto__ = e57503;
var statearr_57504_57510 = state_57490;
(statearr_57504_57510[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57490);

return cljs.core.cst$kw$recur;
} else {
throw e57503;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__57511 = state_57490;
state_57490 = G__57511;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__13585__auto__ = function(state_57490){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__13585__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__13585__auto____1.call(this,state_57490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__13585__auto____0;
klipse$plugin$klipsify_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__13585__auto____1;
return klipse$plugin$klipsify_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_57505 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_57505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_57505;
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
return (function (state_57646){
var state_val_57647 = (state_57646[(1)]);
if((state_val_57647 === (7))){
var inst_57604 = (state_57646[(7)]);
var inst_57603 = (state_57646[(8)]);
var inst_57601 = (state_57646[(9)]);
var inst_57602 = (state_57646[(10)]);
var inst_57612 = (state_57646[(2)]);
var inst_57613 = (inst_57604 + (1));
var tmp57648 = inst_57603;
var tmp57649 = inst_57601;
var tmp57650 = inst_57602;
var inst_57601__$1 = tmp57649;
var inst_57602__$1 = tmp57650;
var inst_57603__$1 = tmp57648;
var inst_57604__$1 = inst_57613;
var state_57646__$1 = (function (){var statearr_57651 = state_57646;
(statearr_57651[(11)] = inst_57612);

(statearr_57651[(7)] = inst_57604__$1);

(statearr_57651[(8)] = inst_57603__$1);

(statearr_57651[(9)] = inst_57601__$1);

(statearr_57651[(10)] = inst_57602__$1);

return statearr_57651;
})();
var statearr_57652_57678 = state_57646__$1;
(statearr_57652_57678[(2)] = null);

(statearr_57652_57678[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57647 === (1))){
var inst_57595 = cljs.core.system_time();
var inst_57600 = cljs.core.seq(elements);
var inst_57601 = inst_57600;
var inst_57602 = null;
var inst_57603 = (0);
var inst_57604 = (0);
var state_57646__$1 = (function (){var statearr_57653 = state_57646;
(statearr_57653[(12)] = inst_57595);

(statearr_57653[(7)] = inst_57604);

(statearr_57653[(8)] = inst_57603);

(statearr_57653[(9)] = inst_57601);

(statearr_57653[(10)] = inst_57602);

return statearr_57653;
})();
var statearr_57654_57679 = state_57646__$1;
(statearr_57654_57679[(2)] = null);

(statearr_57654_57679[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57647 === (4))){
var inst_57604 = (state_57646[(7)]);
var inst_57602 = (state_57646[(10)]);
var inst_57609 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_57602,inst_57604);
var inst_57610 = klipse.plugin.klipsify(inst_57609,language);
var state_57646__$1 = state_57646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57646__$1,(7),inst_57610);
} else {
if((state_val_57647 === (13))){
var inst_57632 = (state_57646[(2)]);
var state_57646__$1 = state_57646;
var statearr_57655_57680 = state_57646__$1;
(statearr_57655_57680[(2)] = inst_57632);

(statearr_57655_57680[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57647 === (6))){
var inst_57637 = (state_57646[(2)]);
var state_57646__$1 = state_57646;
var statearr_57656_57681 = state_57646__$1;
(statearr_57656_57681[(2)] = inst_57637);

(statearr_57656_57681[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57647 === (3))){
var inst_57595 = (state_57646[(12)]);
var inst_57639 = (state_57646[(2)]);
var inst_57640 = cljs.core.system_time();
var inst_57641 = (inst_57640 - inst_57595);
var inst_57642 = inst_57641.toFixed((6));
var inst_57643 = [cljs.core.str("Elapsed time: "),cljs.core.str(inst_57642),cljs.core.str(" msecs")].join('');
var inst_57644 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_57643], 0));
var state_57646__$1 = (function (){var statearr_57657 = state_57646;
(statearr_57657[(13)] = inst_57644);

return statearr_57657;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57646__$1,inst_57639);
} else {
if((state_val_57647 === (12))){
var inst_57616 = (state_57646[(14)]);
var inst_57625 = cljs.core.first(inst_57616);
var inst_57626 = klipse.plugin.klipsify(inst_57625,language);
var state_57646__$1 = state_57646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57646__$1,(14),inst_57626);
} else {
if((state_val_57647 === (2))){
var inst_57604 = (state_57646[(7)]);
var inst_57603 = (state_57646[(8)]);
var inst_57606 = (inst_57604 < inst_57603);
var inst_57607 = inst_57606;
var state_57646__$1 = state_57646;
if(cljs.core.truth_(inst_57607)){
var statearr_57658_57682 = state_57646__$1;
(statearr_57658_57682[(1)] = (4));

} else {
var statearr_57659_57683 = state_57646__$1;
(statearr_57659_57683[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57647 === (11))){
var inst_57616 = (state_57646[(14)]);
var inst_57620 = cljs.core.chunk_first(inst_57616);
var inst_57621 = cljs.core.chunk_rest(inst_57616);
var inst_57622 = cljs.core.count(inst_57620);
var inst_57601 = inst_57621;
var inst_57602 = inst_57620;
var inst_57603 = inst_57622;
var inst_57604 = (0);
var state_57646__$1 = (function (){var statearr_57660 = state_57646;
(statearr_57660[(7)] = inst_57604);

(statearr_57660[(8)] = inst_57603);

(statearr_57660[(9)] = inst_57601);

(statearr_57660[(10)] = inst_57602);

return statearr_57660;
})();
var statearr_57661_57684 = state_57646__$1;
(statearr_57661_57684[(2)] = null);

(statearr_57661_57684[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57647 === (9))){
var state_57646__$1 = state_57646;
var statearr_57662_57685 = state_57646__$1;
(statearr_57662_57685[(2)] = null);

(statearr_57662_57685[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57647 === (5))){
var inst_57616 = (state_57646[(14)]);
var inst_57601 = (state_57646[(9)]);
var inst_57616__$1 = cljs.core.seq(inst_57601);
var state_57646__$1 = (function (){var statearr_57663 = state_57646;
(statearr_57663[(14)] = inst_57616__$1);

return statearr_57663;
})();
if(inst_57616__$1){
var statearr_57664_57686 = state_57646__$1;
(statearr_57664_57686[(1)] = (8));

} else {
var statearr_57665_57687 = state_57646__$1;
(statearr_57665_57687[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57647 === (14))){
var inst_57616 = (state_57646[(14)]);
var inst_57628 = (state_57646[(2)]);
var inst_57629 = cljs.core.next(inst_57616);
var inst_57601 = inst_57629;
var inst_57602 = null;
var inst_57603 = (0);
var inst_57604 = (0);
var state_57646__$1 = (function (){var statearr_57666 = state_57646;
(statearr_57666[(15)] = inst_57628);

(statearr_57666[(7)] = inst_57604);

(statearr_57666[(8)] = inst_57603);

(statearr_57666[(9)] = inst_57601);

(statearr_57666[(10)] = inst_57602);

return statearr_57666;
})();
var statearr_57667_57688 = state_57646__$1;
(statearr_57667_57688[(2)] = null);

(statearr_57667_57688[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57647 === (10))){
var inst_57635 = (state_57646[(2)]);
var state_57646__$1 = state_57646;
var statearr_57668_57689 = state_57646__$1;
(statearr_57668_57689[(2)] = inst_57635);

(statearr_57668_57689[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57647 === (8))){
var inst_57616 = (state_57646[(14)]);
var inst_57618 = cljs.core.chunked_seq_QMARK_(inst_57616);
var state_57646__$1 = state_57646;
if(inst_57618){
var statearr_57669_57690 = state_57646__$1;
(statearr_57669_57690[(1)] = (11));

} else {
var statearr_57670_57691 = state_57646__$1;
(statearr_57670_57691[(1)] = (12));

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
var statearr_57674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57674[(0)] = klipse$plugin$klipsify_elements_$_state_machine__13585__auto__);

(statearr_57674[(1)] = (1));

return statearr_57674;
});
var klipse$plugin$klipsify_elements_$_state_machine__13585__auto____1 = (function (state_57646){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_57646);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e57675){if((e57675 instanceof Object)){
var ex__13588__auto__ = e57675;
var statearr_57676_57692 = state_57646;
(statearr_57676_57692[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57646);

return cljs.core.cst$kw$recur;
} else {
throw e57675;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__57693 = state_57646;
state_57646 = G__57693;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$plugin$klipsify_elements_$_state_machine__13585__auto__ = function(state_57646){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_elements_$_state_machine__13585__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_elements_$_state_machine__13585__auto____1.call(this,state_57646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_elements_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_elements_$_state_machine__13585__auto____0;
klipse$plugin$klipsify_elements_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_elements_$_state_machine__13585__auto____1;
return klipse$plugin$klipsify_elements_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_57677 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_57677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_57677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__))
);

return c__14658__auto__;
});
if(typeof klipse.plugin.init !== 'undefined'){
} else {
klipse.plugin.init = (function (){var method_table__7146__auto__ = (function (){var G__57694 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__57694) : cljs.core.atom.call(null,G__57694));
})();
var prefer_table__7147__auto__ = (function (){var G__57695 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__57695) : cljs.core.atom.call(null,G__57695));
})();
var method_cache__7148__auto__ = (function (){var G__57696 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__57696) : cljs.core.atom.call(null,G__57696));
})();
var cached_hierarchy__7149__auto__ = (function (){var G__57697 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__57697) : cljs.core.atom.call(null,G__57697));
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
var G__57698 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(js_settings,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
return (klipse.plugin.init.cljs$core$IFn$_invoke$arity$1 ? klipse.plugin.init.cljs$core$IFn$_invoke$arity$1(G__57698) : klipse.plugin.init.call(null,G__57698));
}));
klipse.plugin.init.cljs$core$IMultiFn$_add_method$arity$3(null,true,(function (p__57699){
var map__57700 = p__57699;
var map__57700__$1 = ((((!((map__57700 == null)))?((((map__57700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57700):map__57700);
var settings = map__57700__$1;
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57700__$1,cljs.core.cst$kw$selector);
var selector_js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57700__$1,cljs.core.cst$kw$selector_js);
var x__31222__auto___57702 = settings;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.cst$sym$settings),cljs.core.str(": "),cljs.core.str(x__31222__auto___57702)].join('')], 0));


klipse.plugin.klipsify_elements((function (){var x__31222__auto__ = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll(selector_js));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.list(cljs.core.cst$sym$array_DASH_seq,cljs.core.list(cljs.core.cst$sym$js_SLASH_document$querySelectorAll,cljs.core.cst$sym$selector_js))),cljs.core.str(": "),cljs.core.str(x__31222__auto__)].join('')], 0));

return x__31222__auto__;
})(),cljs.core.cst$kw$javascript);

return klipse.plugin.klipsify_elements((function (){var x__31222__auto__ = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll(selector));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.list(cljs.core.cst$sym$array_DASH_seq,cljs.core.list(cljs.core.cst$sym$js_SLASH_document$querySelectorAll,cljs.core.cst$sym$selector))),cljs.core.str(": "),cljs.core.str(x__31222__auto__)].join('')], 0));

return x__31222__auto__;
})(),cljs.core.cst$kw$clojure);
}));
