// Compiled by ClojureScript 1.9.36 {}
goog.provide('klipse.control.parser');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('gadjett.core');
goog.require('cljs.reader');
goog.require('klipse.utils');
goog.require('klipse.compiler');
goog.require('om.next');
klipse.control.parser.static_fns_QMARK_ = (function klipse$control$parser$static_fns_QMARK_(){
return cljs.core.boolean$.call(null,cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$2(klipse.utils.url_parameters.call(null),"false")));
});
klipse.control.parser.eval_js = (function klipse$control$parser$eval_js(var_args){
var args__23697__auto__ = [];
var len__23690__auto___37608 = arguments.length;
var i__23691__auto___37609 = (0);
while(true){
if((i__23691__auto___37609 < len__23690__auto___37608)){
args__23697__auto__.push((arguments[i__23691__auto___37609]));

var G__37610 = (i__23691__auto___37609 + (1));
i__23691__auto___37609 = G__37610;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return klipse.control.parser.eval_js.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

klipse.control.parser.eval_js.cljs$core$IFn$_invoke$arity$variadic = (function (args__25618__auto__){
if(cljs.core.truth_(gadjett.core.record_function_call.call(null,"klipse.control.parser/eval-js",args__25618__auto__))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(gadjett.core.function_call_err_msg.call(null,"klipse.control.parser/eval-js",args__25618__auto__)),cljs.core.str("\n"),cljs.core.str("(gadjett.core/record-function-call \"klipse.control.parser/eval-js\" args__25618__auto__)")].join('')));
}

var vec__37577 = args__25618__auto__;
var s = cljs.core.nth.call(null,vec__37577,(0),null);
var c__25265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25265__auto__,vec__37577,s){
return (function (){
var f__25266__auto__ = (function (){var switch__25244__auto__ = ((function (c__25265__auto__,vec__37577,s){
return (function (state_37598){
var state_val_37599 = (state_37598[(1)]);
if((state_val_37599 === (1))){
var inst_37583 = [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748)];
var inst_37584 = klipse.control.parser.static_fns_QMARK_.call(null);
var inst_37585 = [inst_37584];
var inst_37586 = cljs.core.PersistentHashMap.fromArrays(inst_37583,inst_37585);
var inst_37587 = klipse.compiler.eval_async.call(null,s,inst_37586);
var state_37598__$1 = state_37598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37598__$1,(2),inst_37587);
} else {
if((state_val_37599 === (2))){
var inst_37589 = (state_37598[(2)]);
var inst_37590 = cljs.core.nth.call(null,inst_37589,(0),null);
var inst_37591 = cljs.core.nth.call(null,inst_37589,(1),null);
var inst_37592 = console.log(inst_37591);
var inst_37593 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37594 = JSON.stringify(inst_37591,null,(4));
var inst_37595 = [inst_37590,inst_37594];
var inst_37596 = (new cljs.core.PersistentVector(null,2,(5),inst_37593,inst_37595,null));
var state_37598__$1 = (function (){var statearr_37600 = state_37598;
(statearr_37600[(7)] = inst_37592);

return statearr_37600;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37598__$1,inst_37596);
} else {
return null;
}
}
});})(c__25265__auto__,vec__37577,s))
;
return ((function (switch__25244__auto__,c__25265__auto__,vec__37577,s){
return (function() {
var klipse$control$parser$state_machine__25245__auto__ = null;
var klipse$control$parser$state_machine__25245__auto____0 = (function (){
var statearr_37604 = [null,null,null,null,null,null,null,null];
(statearr_37604[(0)] = klipse$control$parser$state_machine__25245__auto__);

(statearr_37604[(1)] = (1));

return statearr_37604;
});
var klipse$control$parser$state_machine__25245__auto____1 = (function (state_37598){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_37598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e37605){if((e37605 instanceof Object)){
var ex__25248__auto__ = e37605;
var statearr_37606_37611 = state_37598;
(statearr_37606_37611[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37612 = state_37598;
state_37598 = G__37612;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$control$parser$state_machine__25245__auto__ = function(state_37598){
switch(arguments.length){
case 0:
return klipse$control$parser$state_machine__25245__auto____0.call(this);
case 1:
return klipse$control$parser$state_machine__25245__auto____1.call(this,state_37598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$control$parser$state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$control$parser$state_machine__25245__auto____0;
klipse$control$parser$state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$control$parser$state_machine__25245__auto____1;
return klipse$control$parser$state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__,vec__37577,s))
})();
var state__25267__auto__ = (function (){var statearr_37607 = f__25266__auto__.call(null);
(statearr_37607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_37607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__,vec__37577,s))
);

return c__25265__auto__;
});

klipse.control.parser.eval_js.cljs$lang$maxFixedArity = (0);

klipse.control.parser.eval_js.cljs$lang$applyTo = (function (seq37576){
return klipse.control.parser.eval_js.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37576));
});

klipse.control.parser.eval_clj = (function klipse$control$parser$eval_clj(var_args){
var args__23697__auto__ = [];
var len__23690__auto___37673 = arguments.length;
var i__23691__auto___37674 = (0);
while(true){
if((i__23691__auto___37674 < len__23690__auto___37673)){
args__23697__auto__.push((arguments[i__23691__auto___37674]));

var G__37675 = (i__23691__auto___37674 + (1));
i__23691__auto___37674 = G__37675;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return klipse.control.parser.eval_clj.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

klipse.control.parser.eval_clj.cljs$core$IFn$_invoke$arity$variadic = (function (args__25618__auto__){
if(cljs.core.truth_(gadjett.core.record_function_call.call(null,"klipse.control.parser/eval-clj",args__25618__auto__))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(gadjett.core.function_call_err_msg.call(null,"klipse.control.parser/eval-clj",args__25618__auto__)),cljs.core.str("\n"),cljs.core.str("(gadjett.core/record-function-call \"klipse.control.parser/eval-clj\" args__25618__auto__)")].join('')));
}

var vec__37614 = args__25618__auto__;
var s = cljs.core.nth.call(null,vec__37614,(0),null);
var c__25265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25265__auto__,vec__37614,s){
return (function (){
var f__25266__auto__ = (function (){var switch__25244__auto__ = ((function (c__25265__auto__,vec__37614,s){
return (function (state_37654){
var state_val_37655 = (state_37654[(1)]);
if((state_val_37655 === (1))){
var inst_37620 = [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748)];
var inst_37621 = klipse.control.parser.static_fns_QMARK_.call(null);
var inst_37622 = [inst_37621];
var inst_37623 = cljs.core.PersistentHashMap.fromArrays(inst_37620,inst_37622);
var inst_37624 = klipse.compiler.eval_async.call(null,s,inst_37623);
var state_37654__$1 = state_37654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37654__$1,(2),inst_37624);
} else {
if((state_val_37655 === (2))){
var inst_37626 = (state_37654[(7)]);
var inst_37628 = (state_37654[(8)]);
var inst_37626__$1 = (state_37654[(2)]);
var inst_37627 = cljs.core.nth.call(null,inst_37626__$1,(0),null);
var inst_37628__$1 = cljs.core.nth.call(null,inst_37626__$1,(1),null);
var inst_37629 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37630 = typeof inst_37628__$1 === 'string';
var state_37654__$1 = (function (){var statearr_37656 = state_37654;
(statearr_37656[(9)] = inst_37629);

(statearr_37656[(10)] = inst_37627);

(statearr_37656[(7)] = inst_37626__$1);

(statearr_37656[(8)] = inst_37628__$1);

return statearr_37656;
})();
if(cljs.core.truth_(inst_37630)){
var statearr_37657_37676 = state_37654__$1;
(statearr_37657_37676[(1)] = (3));

} else {
var statearr_37658_37677 = state_37654__$1;
(statearr_37658_37677[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (3))){
var inst_37628 = (state_37654[(8)]);
var state_37654__$1 = state_37654;
var statearr_37659_37678 = state_37654__$1;
(statearr_37659_37678[(2)] = inst_37628);

(statearr_37659_37678[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (4))){
var inst_37633 = (state_37654[(11)]);
var inst_37627 = (state_37654[(10)]);
var inst_37626 = (state_37654[(7)]);
var inst_37628 = (state_37654[(8)]);
var inst_37633__$1 = (new goog.string.StringBuffer());
var inst_37636 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_37637 = (function (){var vec__37617 = inst_37626;
var status = inst_37627;
var res = inst_37628;
var sb__23601__auto__ = inst_37633__$1;
var _STAR_print_newline_STAR_37634 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_37635 = cljs.core._STAR_print_fn_STAR_;
return ((function (vec__37617,status,res,sb__23601__auto__,_STAR_print_newline_STAR_37634,_STAR_print_fn_STAR_37635,inst_37633,inst_37627,inst_37626,inst_37628,inst_37633__$1,inst_37636,state_val_37655,c__25265__auto__,vec__37614,s){
return (function (x__23602__auto__){
return sb__23601__auto__.append(x__23602__auto__);
});
;})(vec__37617,status,res,sb__23601__auto__,_STAR_print_newline_STAR_37634,_STAR_print_fn_STAR_37635,inst_37633,inst_37627,inst_37626,inst_37628,inst_37633__$1,inst_37636,state_val_37655,c__25265__auto__,vec__37614,s))
})();
var inst_37638 = cljs.core._STAR_print_fn_STAR_ = inst_37637;
var state_37654__$1 = (function (){var statearr_37660 = state_37654;
(statearr_37660[(11)] = inst_37633__$1);

(statearr_37660[(12)] = inst_37638);

(statearr_37660[(13)] = inst_37636);

return statearr_37660;
})();
var statearr_37661_37679 = state_37654__$1;
(statearr_37661_37679[(2)] = null);

(statearr_37661_37679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (5))){
var inst_37629 = (state_37654[(9)]);
var inst_37627 = (state_37654[(10)]);
var inst_37650 = (state_37654[(2)]);
var inst_37651 = [inst_37627,inst_37650];
var inst_37652 = (new cljs.core.PersistentVector(null,2,(5),inst_37629,inst_37651,null));
var state_37654__$1 = state_37654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37654__$1,inst_37652);
} else {
if((state_val_37655 === (6))){
var inst_37633 = (state_37654[(11)]);
var inst_37647 = (state_37654[(2)]);
var inst_37648 = [cljs.core.str(inst_37633)].join('');
var state_37654__$1 = (function (){var statearr_37662 = state_37654;
(statearr_37662[(14)] = inst_37647);

return statearr_37662;
})();
var statearr_37663_37680 = state_37654__$1;
(statearr_37663_37680[(2)] = inst_37648);

(statearr_37663_37680[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (7))){
var inst_37639 = (state_37654[(2)]);
var inst_37640 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_37641 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_37654__$1 = (function (){var statearr_37664 = state_37654;
(statearr_37664[(15)] = inst_37641);

(statearr_37664[(16)] = inst_37639);

(statearr_37664[(17)] = inst_37640);

return statearr_37664;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37654__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (8))){
var inst_37628 = (state_37654[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37654,null,null,(7),(6));
var inst_37645 = cljs.pprint.pprint.call(null,inst_37628);
var state_37654__$1 = state_37654;
var statearr_37665_37681 = state_37654__$1;
(statearr_37665_37681[(2)] = inst_37645);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37654__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__25265__auto__,vec__37614,s))
;
return ((function (switch__25244__auto__,c__25265__auto__,vec__37614,s){
return (function() {
var klipse$control$parser$state_machine__25245__auto__ = null;
var klipse$control$parser$state_machine__25245__auto____0 = (function (){
var statearr_37669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37669[(0)] = klipse$control$parser$state_machine__25245__auto__);

(statearr_37669[(1)] = (1));

return statearr_37669;
});
var klipse$control$parser$state_machine__25245__auto____1 = (function (state_37654){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_37654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e37670){if((e37670 instanceof Object)){
var ex__25248__auto__ = e37670;
var statearr_37671_37682 = state_37654;
(statearr_37671_37682[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37683 = state_37654;
state_37654 = G__37683;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$control$parser$state_machine__25245__auto__ = function(state_37654){
switch(arguments.length){
case 0:
return klipse$control$parser$state_machine__25245__auto____0.call(this);
case 1:
return klipse$control$parser$state_machine__25245__auto____1.call(this,state_37654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$control$parser$state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$control$parser$state_machine__25245__auto____0;
klipse$control$parser$state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$control$parser$state_machine__25245__auto____1;
return klipse$control$parser$state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__,vec__37614,s))
})();
var state__25267__auto__ = (function (){var statearr_37672 = f__25266__auto__.call(null);
(statearr_37672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_37672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__,vec__37614,s))
);

return c__25265__auto__;
});

klipse.control.parser.eval_clj.cljs$lang$maxFixedArity = (0);

klipse.control.parser.eval_clj.cljs$lang$applyTo = (function (seq37613){
return klipse.control.parser.eval_clj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37613));
});

klipse.control.parser.read = (function klipse$control$parser$read(p__37684,key,params){
var map__37687 = p__37684;
var map__37687__$1 = ((((!((map__37687 == null)))?((((map__37687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37687):map__37687);
var state = cljs.core.get.call(null,map__37687__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),key,"")], null);
});
if(typeof klipse.control.parser.mutate !== 'undefined'){
} else {
klipse.control.parser.mutate = (function (){var method_table__23540__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23541__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23542__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23543__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23544__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.control.parser","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23544__auto__,method_table__23540__auto__,prefer_table__23541__auto__,method_cache__23542__auto__,cached_hierarchy__23543__auto__));
})();
}
cljs.core._add_method.call(null,klipse.control.parser.mutate,new cljs.core.Symbol("input","save","input/save",-905763806,null),(function (p__37689,_,p__37690){
var map__37691 = p__37689;
var map__37691__$1 = ((((!((map__37691 == null)))?((((map__37691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37691):map__37691);
var state = cljs.core.get.call(null,map__37691__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__37692 = p__37690;
var map__37692__$1 = ((((!((map__37692 == null)))?((((map__37692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37692):map__37692);
var value = cljs.core.get.call(null,map__37692__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37691,map__37691__$1,state,map__37692,map__37692__$1,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"input","input",556931961),value);
});})(map__37691,map__37691__$1,state,map__37692,map__37692__$1,value))
], null);
}));
cljs.core._add_method.call(null,klipse.control.parser.mutate,new cljs.core.Symbol("cljs","compile","cljs/compile",-2032446198,null),(function (p__37695,_,p__37696){
var map__37697 = p__37695;
var map__37697__$1 = ((((!((map__37697 == null)))?((((map__37697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37697):map__37697);
var state = cljs.core.get.call(null,map__37697__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__37698 = p__37696;
var map__37698__$1 = ((((!((map__37698 == null)))?((((map__37698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37698):map__37698);
var value = cljs.core.get.call(null,map__37698__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37697,map__37697__$1,state,map__37698,map__37698__$1,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"compilation","compilation",-1328774561),klipse.compiler.compile.call(null,value,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),klipse.control.parser.static_fns_QMARK_.call(null)));
});})(map__37697,map__37697__$1,state,map__37698,map__37698__$1,value))
], null);
}));
cljs.core._add_method.call(null,klipse.control.parser.mutate,new cljs.core.Symbol("js","eval","js/eval",536962541,null),(function (p__37701,_,p__37702){
var map__37703 = p__37701;
var map__37703__$1 = ((((!((map__37703 == null)))?((((map__37703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37703):map__37703);
var state = cljs.core.get.call(null,map__37703__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__37704 = p__37702;
var map__37704__$1 = ((((!((map__37704 == null)))?((((map__37704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37704):map__37704);
var value = cljs.core.get.call(null,map__37704__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37703,map__37703__$1,state,map__37704,map__37704__$1,value){
return (function (){
return null;
});})(map__37703,map__37703__$1,state,map__37704,map__37704__$1,value))
], null);
}));
cljs.core._add_method.call(null,klipse.control.parser.mutate,new cljs.core.Symbol("clj","eval","clj/eval",537127173,null),(function (p__37707,_,p__37708){
var map__37709 = p__37707;
var map__37709__$1 = ((((!((map__37709 == null)))?((((map__37709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37709):map__37709);
var state = cljs.core.get.call(null,map__37709__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__37710 = p__37708;
var map__37710__$1 = ((((!((map__37710 == null)))?((((map__37710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37710):map__37710);
var value = cljs.core.get.call(null,map__37710__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37709,map__37709__$1,state,map__37710,map__37710__$1,value){
return (function (){
var c__25265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25265__auto__,map__37709,map__37709__$1,state,map__37710,map__37710__$1,value){
return (function (){
var f__25266__auto__ = (function (){var switch__25244__auto__ = ((function (c__25265__auto__,map__37709,map__37709__$1,state,map__37710,map__37710__$1,value){
return (function (state_37718){
var state_val_37719 = (state_37718[(1)]);
if((state_val_37719 === (1))){
var inst_37713 = klipse.control.parser.eval_clj.call(null,value);
var state_37718__$1 = state_37718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37718__$1,(2),inst_37713);
} else {
if((state_val_37719 === (2))){
var inst_37715 = (state_37718[(2)]);
var inst_37716 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402),inst_37715);
var state_37718__$1 = state_37718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37718__$1,inst_37716);
} else {
return null;
}
}
});})(c__25265__auto__,map__37709,map__37709__$1,state,map__37710,map__37710__$1,value))
;
return ((function (switch__25244__auto__,c__25265__auto__,map__37709,map__37709__$1,state,map__37710,map__37710__$1,value){
return (function() {
var klipse$control$parser$state_machine__25245__auto__ = null;
var klipse$control$parser$state_machine__25245__auto____0 = (function (){
var statearr_37723 = [null,null,null,null,null,null,null];
(statearr_37723[(0)] = klipse$control$parser$state_machine__25245__auto__);

(statearr_37723[(1)] = (1));

return statearr_37723;
});
var klipse$control$parser$state_machine__25245__auto____1 = (function (state_37718){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_37718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e37724){if((e37724 instanceof Object)){
var ex__25248__auto__ = e37724;
var statearr_37725_37727 = state_37718;
(statearr_37725_37727[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37728 = state_37718;
state_37718 = G__37728;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$control$parser$state_machine__25245__auto__ = function(state_37718){
switch(arguments.length){
case 0:
return klipse$control$parser$state_machine__25245__auto____0.call(this);
case 1:
return klipse$control$parser$state_machine__25245__auto____1.call(this,state_37718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$control$parser$state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$control$parser$state_machine__25245__auto____0;
klipse$control$parser$state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$control$parser$state_machine__25245__auto____1;
return klipse$control$parser$state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__,map__37709,map__37709__$1,state,map__37710,map__37710__$1,value))
})();
var state__25267__auto__ = (function (){var statearr_37726 = f__25266__auto__.call(null);
(statearr_37726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_37726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__,map__37709,map__37709__$1,state,map__37710,map__37710__$1,value))
);

return c__25265__auto__;
});})(map__37709,map__37709__$1,state,map__37710,map__37710__$1,value))
], null);
}));

//# sourceMappingURL=parser.js.map?rel=1465542892134