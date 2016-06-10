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
var len__23690__auto___38083 = arguments.length;
var i__23691__auto___38084 = (0);
while(true){
if((i__23691__auto___38084 < len__23690__auto___38083)){
args__23697__auto__.push((arguments[i__23691__auto___38084]));

var G__38085 = (i__23691__auto___38084 + (1));
i__23691__auto___38084 = G__38085;
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

var vec__38052 = args__25618__auto__;
var s = cljs.core.nth.call(null,vec__38052,(0),null);
var c__25265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25265__auto__,vec__38052,s){
return (function (){
var f__25266__auto__ = (function (){var switch__25244__auto__ = ((function (c__25265__auto__,vec__38052,s){
return (function (state_38073){
var state_val_38074 = (state_38073[(1)]);
if((state_val_38074 === (1))){
var inst_38058 = [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748)];
var inst_38059 = klipse.control.parser.static_fns_QMARK_.call(null);
var inst_38060 = [inst_38059];
var inst_38061 = cljs.core.PersistentHashMap.fromArrays(inst_38058,inst_38060);
var inst_38062 = klipse.compiler.eval_async.call(null,s,inst_38061);
var state_38073__$1 = state_38073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38073__$1,(2),inst_38062);
} else {
if((state_val_38074 === (2))){
var inst_38064 = (state_38073[(2)]);
var inst_38065 = cljs.core.nth.call(null,inst_38064,(0),null);
var inst_38066 = cljs.core.nth.call(null,inst_38064,(1),null);
var inst_38067 = console.log(inst_38066);
var inst_38068 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38069 = JSON.stringify(inst_38066,null,(4));
var inst_38070 = [inst_38065,inst_38069];
var inst_38071 = (new cljs.core.PersistentVector(null,2,(5),inst_38068,inst_38070,null));
var state_38073__$1 = (function (){var statearr_38075 = state_38073;
(statearr_38075[(7)] = inst_38067);

return statearr_38075;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38073__$1,inst_38071);
} else {
return null;
}
}
});})(c__25265__auto__,vec__38052,s))
;
return ((function (switch__25244__auto__,c__25265__auto__,vec__38052,s){
return (function() {
var klipse$control$parser$state_machine__25245__auto__ = null;
var klipse$control$parser$state_machine__25245__auto____0 = (function (){
var statearr_38079 = [null,null,null,null,null,null,null,null];
(statearr_38079[(0)] = klipse$control$parser$state_machine__25245__auto__);

(statearr_38079[(1)] = (1));

return statearr_38079;
});
var klipse$control$parser$state_machine__25245__auto____1 = (function (state_38073){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_38073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e38080){if((e38080 instanceof Object)){
var ex__25248__auto__ = e38080;
var statearr_38081_38086 = state_38073;
(statearr_38081_38086[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38087 = state_38073;
state_38073 = G__38087;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$control$parser$state_machine__25245__auto__ = function(state_38073){
switch(arguments.length){
case 0:
return klipse$control$parser$state_machine__25245__auto____0.call(this);
case 1:
return klipse$control$parser$state_machine__25245__auto____1.call(this,state_38073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$control$parser$state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$control$parser$state_machine__25245__auto____0;
klipse$control$parser$state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$control$parser$state_machine__25245__auto____1;
return klipse$control$parser$state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__,vec__38052,s))
})();
var state__25267__auto__ = (function (){var statearr_38082 = f__25266__auto__.call(null);
(statearr_38082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_38082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__,vec__38052,s))
);

return c__25265__auto__;
});

klipse.control.parser.eval_js.cljs$lang$maxFixedArity = (0);

klipse.control.parser.eval_js.cljs$lang$applyTo = (function (seq38051){
return klipse.control.parser.eval_js.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38051));
});

klipse.control.parser.eval_clj = (function klipse$control$parser$eval_clj(var_args){
var args__23697__auto__ = [];
var len__23690__auto___38148 = arguments.length;
var i__23691__auto___38149 = (0);
while(true){
if((i__23691__auto___38149 < len__23690__auto___38148)){
args__23697__auto__.push((arguments[i__23691__auto___38149]));

var G__38150 = (i__23691__auto___38149 + (1));
i__23691__auto___38149 = G__38150;
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

var vec__38089 = args__25618__auto__;
var s = cljs.core.nth.call(null,vec__38089,(0),null);
var c__25265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25265__auto__,vec__38089,s){
return (function (){
var f__25266__auto__ = (function (){var switch__25244__auto__ = ((function (c__25265__auto__,vec__38089,s){
return (function (state_38129){
var state_val_38130 = (state_38129[(1)]);
if((state_val_38130 === (1))){
var inst_38095 = [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748)];
var inst_38096 = klipse.control.parser.static_fns_QMARK_.call(null);
var inst_38097 = [inst_38096];
var inst_38098 = cljs.core.PersistentHashMap.fromArrays(inst_38095,inst_38097);
var inst_38099 = klipse.compiler.eval_async.call(null,s,inst_38098);
var state_38129__$1 = state_38129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38129__$1,(2),inst_38099);
} else {
if((state_val_38130 === (2))){
var inst_38101 = (state_38129[(7)]);
var inst_38103 = (state_38129[(8)]);
var inst_38101__$1 = (state_38129[(2)]);
var inst_38102 = cljs.core.nth.call(null,inst_38101__$1,(0),null);
var inst_38103__$1 = cljs.core.nth.call(null,inst_38101__$1,(1),null);
var inst_38104 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38105 = typeof inst_38103__$1 === 'string';
var state_38129__$1 = (function (){var statearr_38131 = state_38129;
(statearr_38131[(9)] = inst_38102);

(statearr_38131[(7)] = inst_38101__$1);

(statearr_38131[(10)] = inst_38104);

(statearr_38131[(8)] = inst_38103__$1);

return statearr_38131;
})();
if(cljs.core.truth_(inst_38105)){
var statearr_38132_38151 = state_38129__$1;
(statearr_38132_38151[(1)] = (3));

} else {
var statearr_38133_38152 = state_38129__$1;
(statearr_38133_38152[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38130 === (3))){
var inst_38103 = (state_38129[(8)]);
var state_38129__$1 = state_38129;
var statearr_38134_38153 = state_38129__$1;
(statearr_38134_38153[(2)] = inst_38103);

(statearr_38134_38153[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38130 === (4))){
var inst_38108 = (state_38129[(11)]);
var inst_38102 = (state_38129[(9)]);
var inst_38101 = (state_38129[(7)]);
var inst_38103 = (state_38129[(8)]);
var inst_38108__$1 = (new goog.string.StringBuffer());
var inst_38111 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_38112 = (function (){var vec__38092 = inst_38101;
var status = inst_38102;
var res = inst_38103;
var sb__23601__auto__ = inst_38108__$1;
var _STAR_print_newline_STAR_38109 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_38110 = cljs.core._STAR_print_fn_STAR_;
return ((function (vec__38092,status,res,sb__23601__auto__,_STAR_print_newline_STAR_38109,_STAR_print_fn_STAR_38110,inst_38108,inst_38102,inst_38101,inst_38103,inst_38108__$1,inst_38111,state_val_38130,c__25265__auto__,vec__38089,s){
return (function (x__23602__auto__){
return sb__23601__auto__.append(x__23602__auto__);
});
;})(vec__38092,status,res,sb__23601__auto__,_STAR_print_newline_STAR_38109,_STAR_print_fn_STAR_38110,inst_38108,inst_38102,inst_38101,inst_38103,inst_38108__$1,inst_38111,state_val_38130,c__25265__auto__,vec__38089,s))
})();
var inst_38113 = cljs.core._STAR_print_fn_STAR_ = inst_38112;
var state_38129__$1 = (function (){var statearr_38135 = state_38129;
(statearr_38135[(12)] = inst_38113);

(statearr_38135[(11)] = inst_38108__$1);

(statearr_38135[(13)] = inst_38111);

return statearr_38135;
})();
var statearr_38136_38154 = state_38129__$1;
(statearr_38136_38154[(2)] = null);

(statearr_38136_38154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38130 === (5))){
var inst_38102 = (state_38129[(9)]);
var inst_38104 = (state_38129[(10)]);
var inst_38125 = (state_38129[(2)]);
var inst_38126 = [inst_38102,inst_38125];
var inst_38127 = (new cljs.core.PersistentVector(null,2,(5),inst_38104,inst_38126,null));
var state_38129__$1 = state_38129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38129__$1,inst_38127);
} else {
if((state_val_38130 === (6))){
var inst_38108 = (state_38129[(11)]);
var inst_38122 = (state_38129[(2)]);
var inst_38123 = [cljs.core.str(inst_38108)].join('');
var state_38129__$1 = (function (){var statearr_38137 = state_38129;
(statearr_38137[(14)] = inst_38122);

return statearr_38137;
})();
var statearr_38138_38155 = state_38129__$1;
(statearr_38138_38155[(2)] = inst_38123);

(statearr_38138_38155[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38130 === (7))){
var inst_38114 = (state_38129[(2)]);
var inst_38115 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_38116 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_38129__$1 = (function (){var statearr_38139 = state_38129;
(statearr_38139[(15)] = inst_38115);

(statearr_38139[(16)] = inst_38116);

(statearr_38139[(17)] = inst_38114);

return statearr_38139;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38129__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38130 === (8))){
var inst_38103 = (state_38129[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38129,null,null,(7),(6));
var inst_38120 = cljs.pprint.pprint.call(null,inst_38103);
var state_38129__$1 = state_38129;
var statearr_38140_38156 = state_38129__$1;
(statearr_38140_38156[(2)] = inst_38120);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38129__$1);

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
});})(c__25265__auto__,vec__38089,s))
;
return ((function (switch__25244__auto__,c__25265__auto__,vec__38089,s){
return (function() {
var klipse$control$parser$state_machine__25245__auto__ = null;
var klipse$control$parser$state_machine__25245__auto____0 = (function (){
var statearr_38144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38144[(0)] = klipse$control$parser$state_machine__25245__auto__);

(statearr_38144[(1)] = (1));

return statearr_38144;
});
var klipse$control$parser$state_machine__25245__auto____1 = (function (state_38129){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_38129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e38145){if((e38145 instanceof Object)){
var ex__25248__auto__ = e38145;
var statearr_38146_38157 = state_38129;
(statearr_38146_38157[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38158 = state_38129;
state_38129 = G__38158;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$control$parser$state_machine__25245__auto__ = function(state_38129){
switch(arguments.length){
case 0:
return klipse$control$parser$state_machine__25245__auto____0.call(this);
case 1:
return klipse$control$parser$state_machine__25245__auto____1.call(this,state_38129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$control$parser$state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$control$parser$state_machine__25245__auto____0;
klipse$control$parser$state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$control$parser$state_machine__25245__auto____1;
return klipse$control$parser$state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__,vec__38089,s))
})();
var state__25267__auto__ = (function (){var statearr_38147 = f__25266__auto__.call(null);
(statearr_38147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_38147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__,vec__38089,s))
);

return c__25265__auto__;
});

klipse.control.parser.eval_clj.cljs$lang$maxFixedArity = (0);

klipse.control.parser.eval_clj.cljs$lang$applyTo = (function (seq38088){
return klipse.control.parser.eval_clj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38088));
});

klipse.control.parser.read = (function klipse$control$parser$read(p__38159,key,params){
var map__38162 = p__38159;
var map__38162__$1 = ((((!((map__38162 == null)))?((((map__38162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38162):map__38162);
var state = cljs.core.get.call(null,map__38162__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
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
cljs.core._add_method.call(null,klipse.control.parser.mutate,new cljs.core.Symbol("input","save","input/save",-905763806,null),(function (p__38164,_,p__38165){
var map__38166 = p__38164;
var map__38166__$1 = ((((!((map__38166 == null)))?((((map__38166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38166):map__38166);
var state = cljs.core.get.call(null,map__38166__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__38167 = p__38165;
var map__38167__$1 = ((((!((map__38167 == null)))?((((map__38167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38167):map__38167);
var value = cljs.core.get.call(null,map__38167__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38166,map__38166__$1,state,map__38167,map__38167__$1,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"input","input",556931961),value);
});})(map__38166,map__38166__$1,state,map__38167,map__38167__$1,value))
], null);
}));
cljs.core._add_method.call(null,klipse.control.parser.mutate,new cljs.core.Symbol("cljs","compile","cljs/compile",-2032446198,null),(function (p__38170,_,p__38171){
var map__38172 = p__38170;
var map__38172__$1 = ((((!((map__38172 == null)))?((((map__38172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38172):map__38172);
var state = cljs.core.get.call(null,map__38172__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__38173 = p__38171;
var map__38173__$1 = ((((!((map__38173 == null)))?((((map__38173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38173):map__38173);
var value = cljs.core.get.call(null,map__38173__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38172,map__38172__$1,state,map__38173,map__38173__$1,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"compilation","compilation",-1328774561),klipse.compiler.compile.call(null,value,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),klipse.control.parser.static_fns_QMARK_.call(null)));
});})(map__38172,map__38172__$1,state,map__38173,map__38173__$1,value))
], null);
}));
cljs.core._add_method.call(null,klipse.control.parser.mutate,new cljs.core.Symbol("js","eval","js/eval",536962541,null),(function (p__38176,_,p__38177){
var map__38178 = p__38176;
var map__38178__$1 = ((((!((map__38178 == null)))?((((map__38178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38178):map__38178);
var state = cljs.core.get.call(null,map__38178__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__38179 = p__38177;
var map__38179__$1 = ((((!((map__38179 == null)))?((((map__38179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38179):map__38179);
var value = cljs.core.get.call(null,map__38179__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38178,map__38178__$1,state,map__38179,map__38179__$1,value){
return (function (){
return null;
});})(map__38178,map__38178__$1,state,map__38179,map__38179__$1,value))
], null);
}));
cljs.core._add_method.call(null,klipse.control.parser.mutate,new cljs.core.Symbol("clj","eval","clj/eval",537127173,null),(function (p__38182,_,p__38183){
var map__38184 = p__38182;
var map__38184__$1 = ((((!((map__38184 == null)))?((((map__38184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38184):map__38184);
var state = cljs.core.get.call(null,map__38184__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__38185 = p__38183;
var map__38185__$1 = ((((!((map__38185 == null)))?((((map__38185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38185):map__38185);
var value = cljs.core.get.call(null,map__38185__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38184,map__38184__$1,state,map__38185,map__38185__$1,value){
return (function (){
var c__25265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25265__auto__,map__38184,map__38184__$1,state,map__38185,map__38185__$1,value){
return (function (){
var f__25266__auto__ = (function (){var switch__25244__auto__ = ((function (c__25265__auto__,map__38184,map__38184__$1,state,map__38185,map__38185__$1,value){
return (function (state_38193){
var state_val_38194 = (state_38193[(1)]);
if((state_val_38194 === (1))){
var inst_38188 = klipse.control.parser.eval_clj.call(null,value);
var state_38193__$1 = state_38193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38193__$1,(2),inst_38188);
} else {
if((state_val_38194 === (2))){
var inst_38190 = (state_38193[(2)]);
var inst_38191 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402),inst_38190);
var state_38193__$1 = state_38193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38193__$1,inst_38191);
} else {
return null;
}
}
});})(c__25265__auto__,map__38184,map__38184__$1,state,map__38185,map__38185__$1,value))
;
return ((function (switch__25244__auto__,c__25265__auto__,map__38184,map__38184__$1,state,map__38185,map__38185__$1,value){
return (function() {
var klipse$control$parser$state_machine__25245__auto__ = null;
var klipse$control$parser$state_machine__25245__auto____0 = (function (){
var statearr_38198 = [null,null,null,null,null,null,null];
(statearr_38198[(0)] = klipse$control$parser$state_machine__25245__auto__);

(statearr_38198[(1)] = (1));

return statearr_38198;
});
var klipse$control$parser$state_machine__25245__auto____1 = (function (state_38193){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_38193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e38199){if((e38199 instanceof Object)){
var ex__25248__auto__ = e38199;
var statearr_38200_38202 = state_38193;
(statearr_38200_38202[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38203 = state_38193;
state_38193 = G__38203;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$control$parser$state_machine__25245__auto__ = function(state_38193){
switch(arguments.length){
case 0:
return klipse$control$parser$state_machine__25245__auto____0.call(this);
case 1:
return klipse$control$parser$state_machine__25245__auto____1.call(this,state_38193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$control$parser$state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$control$parser$state_machine__25245__auto____0;
klipse$control$parser$state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$control$parser$state_machine__25245__auto____1;
return klipse$control$parser$state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__,map__38184,map__38184__$1,state,map__38185,map__38185__$1,value))
})();
var state__25267__auto__ = (function (){var statearr_38201 = f__25266__auto__.call(null);
(statearr_38201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_38201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__,map__38184,map__38184__$1,state,map__38185,map__38185__$1,value))
);

return c__25265__auto__;
});})(map__38184,map__38184__$1,state,map__38185,map__38185__$1,value))
], null);
}));

//# sourceMappingURL=parser.js.map?rel=1465542893603