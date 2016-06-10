// Compiled by ClojureScript 1.9.36 {}
goog.provide('klipse.plugin');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('klipse.ui.editors.common');
goog.require('klipse.ui.editors.editor');
goog.require('gadjett.core');
goog.require('klipse.compiler');
klipse.plugin.app_url = "http://app.klipse.tech";
klipse.plugin.language__GT_eval_fn = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clojure","clojure",438975815),klipse.compiler.str_eval_async,new cljs.core.Keyword(null,"javascript","javascript",-45283711),klipse.compiler.str_compile_async], null);
klipse.plugin.editor_options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true,new cljs.core.Keyword(null,"scrollbarStyle","scrollbarStyle",-963515367),"overlay"], null);
klipse.plugin.eval_in_editor = (function klipse$plugin$eval_in_editor(eval_fn,editor_target,editor_source){
var c__25265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25265__auto__){
return (function (){
var f__25266__auto__ = (function (){var switch__25244__auto__ = ((function (c__25265__auto__){
return (function (state_32975){
var state_val_32976 = (state_32975[(1)]);
if((state_val_32976 === (1))){
var inst_32969 = klipse.ui.editors.editor.get_value.call(null,editor_source);
var inst_32970 = eval_fn.call(null,inst_32969);
var state_32975__$1 = state_32975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32975__$1,(2),inst_32970);
} else {
if((state_val_32976 === (2))){
var inst_32972 = (state_32975[(2)]);
var inst_32973 = klipse.ui.editors.editor.set_value.call(null,editor_target,inst_32972);
var state_32975__$1 = state_32975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32975__$1,inst_32973);
} else {
return null;
}
}
});})(c__25265__auto__))
;
return ((function (switch__25244__auto__,c__25265__auto__){
return (function() {
var klipse$plugin$eval_in_editor_$_state_machine__25245__auto__ = null;
var klipse$plugin$eval_in_editor_$_state_machine__25245__auto____0 = (function (){
var statearr_32980 = [null,null,null,null,null,null,null];
(statearr_32980[(0)] = klipse$plugin$eval_in_editor_$_state_machine__25245__auto__);

(statearr_32980[(1)] = (1));

return statearr_32980;
});
var klipse$plugin$eval_in_editor_$_state_machine__25245__auto____1 = (function (state_32975){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_32975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e32981){if((e32981 instanceof Object)){
var ex__25248__auto__ = e32981;
var statearr_32982_32984 = state_32975;
(statearr_32982_32984[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32985 = state_32975;
state_32975 = G__32985;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$plugin$eval_in_editor_$_state_machine__25245__auto__ = function(state_32975){
switch(arguments.length){
case 0:
return klipse$plugin$eval_in_editor_$_state_machine__25245__auto____0.call(this);
case 1:
return klipse$plugin$eval_in_editor_$_state_machine__25245__auto____1.call(this,state_32975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$eval_in_editor_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$eval_in_editor_$_state_machine__25245__auto____0;
klipse$plugin$eval_in_editor_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$eval_in_editor_$_state_machine__25245__auto____1;
return klipse$plugin$eval_in_editor_$_state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__))
})();
var state__25267__auto__ = (function (){var statearr_32983 = f__25266__auto__.call(null);
(statearr_32983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_32983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__))
);

return c__25265__auto__;
});
klipse.plugin.klipsify = (function klipse$plugin$klipsify(element,language){
var c__25265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25265__auto__){
return (function (){
var f__25266__auto__ = (function (){var switch__25244__auto__ = ((function (c__25265__auto__){
return (function (state_33053){
var state_val_33054 = (state_33053[(1)]);
if((state_val_33054 === (1))){
var inst_33028 = klipse.plugin.language__GT_eval_fn.call(null,language);
var inst_33029 = cljs.core.name.call(null,language);
var inst_33030 = cljs.core.assoc.call(null,klipse.plugin.editor_options,new cljs.core.Keyword(null,"mode","mode",654403691),inst_33029);
var state_33053__$1 = (function (){var statearr_33055 = state_33053;
(statearr_33055[(7)] = inst_33028);

(statearr_33055[(8)] = inst_33030);

return statearr_33055;
})();
if(cljs.core.truth_(element)){
var statearr_33056_33069 = state_33053__$1;
(statearr_33056_33069[(1)] = (2));

} else {
var statearr_33057_33070 = state_33053__$1;
(statearr_33057_33070[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33054 === (2))){
var inst_33032 = (state_33053[(9)]);
var inst_33033 = (state_33053[(10)]);
var inst_33028 = (state_33053[(7)]);
var inst_33030 = (state_33053[(8)]);
var inst_33032__$1 = element.textContent;
var inst_33033__$1 = (function (){var eval_fn = inst_33028;
var my_editor_options = inst_33030;
var clj_in = inst_33032__$1;
return ((function (eval_fn,my_editor_options,clj_in,inst_33032,inst_33033,inst_33028,inst_33030,inst_33032__$1,state_val_33054,c__25265__auto__){
return (function (p1__32986_SHARP_){
return eval_fn.call(null,p1__32986_SHARP_);
});
;})(eval_fn,my_editor_options,clj_in,inst_33032,inst_33033,inst_33028,inst_33030,inst_33032__$1,state_val_33054,c__25265__auto__))
})();
var inst_33034 = cljs.core.assoc.call(null,inst_33030,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true);
var inst_33035 = cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"my-editor-options","my-editor-options",-470974515,null),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true);
var inst_33036 = [cljs.core.str(inst_33035),cljs.core.str(": "),cljs.core.str(inst_33034)].join('');
var inst_33037 = cljs.core.print.call(null,inst_33036);
var inst_33038 = klipse.ui.editors.editor.create_editor_after_element.call(null,element,";the evaluation will appear here (soon)...",inst_33034);
var inst_33039 = klipse.ui.editors.editor.replace_element_by_editor.call(null,element,inst_33032__$1,inst_33030);
var inst_33040 = inst_33033__$1.call(null,inst_33032__$1);
var state_33053__$1 = (function (){var statearr_33058 = state_33053;
(statearr_33058[(9)] = inst_33032__$1);

(statearr_33058[(10)] = inst_33033__$1);

(statearr_33058[(11)] = inst_33039);

(statearr_33058[(12)] = inst_33038);

(statearr_33058[(13)] = inst_33037);

return statearr_33058;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33053__$1,(5),inst_33040);
} else {
if((state_val_33054 === (3))){
var state_33053__$1 = state_33053;
var statearr_33059_33071 = state_33053__$1;
(statearr_33059_33071[(2)] = null);

(statearr_33059_33071[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33054 === (4))){
var inst_33051 = (state_33053[(2)]);
var state_33053__$1 = state_33053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33053__$1,inst_33051);
} else {
if((state_val_33054 === (5))){
var inst_33032 = (state_33053[(9)]);
var inst_33033 = (state_33053[(10)]);
var inst_33028 = (state_33053[(7)]);
var inst_33039 = (state_33053[(11)]);
var inst_33038 = (state_33053[(12)]);
var inst_33030 = (state_33053[(8)]);
var inst_33042 = (state_33053[(2)]);
var inst_33043 = klipse.ui.editors.editor.set_value.call(null,inst_33038,inst_33042);
var inst_33044 = [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),new cljs.core.Keyword(null,"base-url","base-url",9540398),new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168)];
var inst_33045 = (function (){var eval_fn = inst_33028;
var my_editor_options = inst_33030;
var clj_in = inst_33032;
var eval_fn_with_args = inst_33033;
var out_editor = inst_33038;
var in_editor = inst_33039;
return ((function (eval_fn,my_editor_options,clj_in,eval_fn_with_args,out_editor,in_editor,inst_33032,inst_33033,inst_33028,inst_33039,inst_33038,inst_33030,inst_33042,inst_33043,inst_33044,state_val_33054,c__25265__auto__){
return (function (){
return klipse.plugin.eval_in_editor.call(null,eval_fn_with_args,out_editor,in_editor);
});
;})(eval_fn,my_editor_options,clj_in,eval_fn_with_args,out_editor,in_editor,inst_33032,inst_33033,inst_33028,inst_33039,inst_33038,inst_33030,inst_33042,inst_33043,inst_33044,state_val_33054,c__25265__auto__))
})();
var inst_33046 = [(2000),klipse.plugin.app_url,inst_33045];
var inst_33047 = cljs.core.PersistentHashMap.fromArrays(inst_33044,inst_33046);
var inst_33048 = klipse.ui.editors.common.handle_events.call(null,inst_33039,inst_33047);
var state_33053__$1 = (function (){var statearr_33060 = state_33053;
(statearr_33060[(14)] = inst_33043);

return statearr_33060;
})();
var statearr_33061_33072 = state_33053__$1;
(statearr_33061_33072[(2)] = inst_33048);

(statearr_33061_33072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__25265__auto__))
;
return ((function (switch__25244__auto__,c__25265__auto__){
return (function() {
var klipse$plugin$klipsify_$_state_machine__25245__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__25245__auto____0 = (function (){
var statearr_33065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33065[(0)] = klipse$plugin$klipsify_$_state_machine__25245__auto__);

(statearr_33065[(1)] = (1));

return statearr_33065;
});
var klipse$plugin$klipsify_$_state_machine__25245__auto____1 = (function (state_33053){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_33053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e33066){if((e33066 instanceof Object)){
var ex__25248__auto__ = e33066;
var statearr_33067_33073 = state_33053;
(statearr_33067_33073[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33074 = state_33053;
state_33053 = G__33074;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__25245__auto__ = function(state_33053){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__25245__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__25245__auto____1.call(this,state_33053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__25245__auto____0;
klipse$plugin$klipsify_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__25245__auto____1;
return klipse$plugin$klipsify_$_state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__))
})();
var state__25267__auto__ = (function (){var statearr_33068 = f__25266__auto__.call(null);
(statearr_33068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_33068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__))
);

return c__25265__auto__;
});
klipse.plugin.klipsify_elements = (function klipse$plugin$klipsify_elements(elements,language){
var c__25265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25265__auto__){
return (function (){
var f__25266__auto__ = (function (){var switch__25244__auto__ = ((function (c__25265__auto__){
return (function (state_33209){
var state_val_33210 = (state_33209[(1)]);
if((state_val_33210 === (7))){
var inst_33165 = (state_33209[(7)]);
var inst_33164 = (state_33209[(8)]);
var inst_33167 = (state_33209[(9)]);
var inst_33166 = (state_33209[(10)]);
var inst_33175 = (state_33209[(2)]);
var inst_33176 = (inst_33167 + (1));
var tmp33211 = inst_33165;
var tmp33212 = inst_33164;
var tmp33213 = inst_33166;
var inst_33164__$1 = tmp33212;
var inst_33165__$1 = tmp33211;
var inst_33166__$1 = tmp33213;
var inst_33167__$1 = inst_33176;
var state_33209__$1 = (function (){var statearr_33214 = state_33209;
(statearr_33214[(7)] = inst_33165__$1);

(statearr_33214[(8)] = inst_33164__$1);

(statearr_33214[(9)] = inst_33167__$1);

(statearr_33214[(11)] = inst_33175);

(statearr_33214[(10)] = inst_33166__$1);

return statearr_33214;
})();
var statearr_33215_33241 = state_33209__$1;
(statearr_33215_33241[(2)] = null);

(statearr_33215_33241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (1))){
var inst_33158 = cljs.core.system_time.call(null);
var inst_33163 = cljs.core.seq.call(null,elements);
var inst_33164 = inst_33163;
var inst_33165 = null;
var inst_33166 = (0);
var inst_33167 = (0);
var state_33209__$1 = (function (){var statearr_33216 = state_33209;
(statearr_33216[(12)] = inst_33158);

(statearr_33216[(7)] = inst_33165);

(statearr_33216[(8)] = inst_33164);

(statearr_33216[(9)] = inst_33167);

(statearr_33216[(10)] = inst_33166);

return statearr_33216;
})();
var statearr_33217_33242 = state_33209__$1;
(statearr_33217_33242[(2)] = null);

(statearr_33217_33242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (4))){
var inst_33165 = (state_33209[(7)]);
var inst_33167 = (state_33209[(9)]);
var inst_33172 = cljs.core._nth.call(null,inst_33165,inst_33167);
var inst_33173 = klipse.plugin.klipsify.call(null,inst_33172,language);
var state_33209__$1 = state_33209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33209__$1,(7),inst_33173);
} else {
if((state_val_33210 === (13))){
var inst_33195 = (state_33209[(2)]);
var state_33209__$1 = state_33209;
var statearr_33218_33243 = state_33209__$1;
(statearr_33218_33243[(2)] = inst_33195);

(statearr_33218_33243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (6))){
var inst_33200 = (state_33209[(2)]);
var state_33209__$1 = state_33209;
var statearr_33219_33244 = state_33209__$1;
(statearr_33219_33244[(2)] = inst_33200);

(statearr_33219_33244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (3))){
var inst_33158 = (state_33209[(12)]);
var inst_33202 = (state_33209[(2)]);
var inst_33203 = cljs.core.system_time.call(null);
var inst_33204 = (inst_33203 - inst_33158);
var inst_33205 = inst_33204.toFixed((6));
var inst_33206 = [cljs.core.str("Elapsed time: "),cljs.core.str(inst_33205),cljs.core.str(" msecs")].join('');
var inst_33207 = cljs.core.prn.call(null,inst_33206);
var state_33209__$1 = (function (){var statearr_33220 = state_33209;
(statearr_33220[(13)] = inst_33207);

return statearr_33220;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33209__$1,inst_33202);
} else {
if((state_val_33210 === (12))){
var inst_33179 = (state_33209[(14)]);
var inst_33188 = cljs.core.first.call(null,inst_33179);
var inst_33189 = klipse.plugin.klipsify.call(null,inst_33188,language);
var state_33209__$1 = state_33209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33209__$1,(14),inst_33189);
} else {
if((state_val_33210 === (2))){
var inst_33167 = (state_33209[(9)]);
var inst_33166 = (state_33209[(10)]);
var inst_33169 = (inst_33167 < inst_33166);
var inst_33170 = inst_33169;
var state_33209__$1 = state_33209;
if(cljs.core.truth_(inst_33170)){
var statearr_33221_33245 = state_33209__$1;
(statearr_33221_33245[(1)] = (4));

} else {
var statearr_33222_33246 = state_33209__$1;
(statearr_33222_33246[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (11))){
var inst_33179 = (state_33209[(14)]);
var inst_33183 = cljs.core.chunk_first.call(null,inst_33179);
var inst_33184 = cljs.core.chunk_rest.call(null,inst_33179);
var inst_33185 = cljs.core.count.call(null,inst_33183);
var inst_33164 = inst_33184;
var inst_33165 = inst_33183;
var inst_33166 = inst_33185;
var inst_33167 = (0);
var state_33209__$1 = (function (){var statearr_33223 = state_33209;
(statearr_33223[(7)] = inst_33165);

(statearr_33223[(8)] = inst_33164);

(statearr_33223[(9)] = inst_33167);

(statearr_33223[(10)] = inst_33166);

return statearr_33223;
})();
var statearr_33224_33247 = state_33209__$1;
(statearr_33224_33247[(2)] = null);

(statearr_33224_33247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (9))){
var state_33209__$1 = state_33209;
var statearr_33225_33248 = state_33209__$1;
(statearr_33225_33248[(2)] = null);

(statearr_33225_33248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (5))){
var inst_33164 = (state_33209[(8)]);
var inst_33179 = (state_33209[(14)]);
var inst_33179__$1 = cljs.core.seq.call(null,inst_33164);
var state_33209__$1 = (function (){var statearr_33226 = state_33209;
(statearr_33226[(14)] = inst_33179__$1);

return statearr_33226;
})();
if(inst_33179__$1){
var statearr_33227_33249 = state_33209__$1;
(statearr_33227_33249[(1)] = (8));

} else {
var statearr_33228_33250 = state_33209__$1;
(statearr_33228_33250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (14))){
var inst_33179 = (state_33209[(14)]);
var inst_33191 = (state_33209[(2)]);
var inst_33192 = cljs.core.next.call(null,inst_33179);
var inst_33164 = inst_33192;
var inst_33165 = null;
var inst_33166 = (0);
var inst_33167 = (0);
var state_33209__$1 = (function (){var statearr_33229 = state_33209;
(statearr_33229[(7)] = inst_33165);

(statearr_33229[(8)] = inst_33164);

(statearr_33229[(9)] = inst_33167);

(statearr_33229[(15)] = inst_33191);

(statearr_33229[(10)] = inst_33166);

return statearr_33229;
})();
var statearr_33230_33251 = state_33209__$1;
(statearr_33230_33251[(2)] = null);

(statearr_33230_33251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (10))){
var inst_33198 = (state_33209[(2)]);
var state_33209__$1 = state_33209;
var statearr_33231_33252 = state_33209__$1;
(statearr_33231_33252[(2)] = inst_33198);

(statearr_33231_33252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (8))){
var inst_33179 = (state_33209[(14)]);
var inst_33181 = cljs.core.chunked_seq_QMARK_.call(null,inst_33179);
var state_33209__$1 = state_33209;
if(inst_33181){
var statearr_33232_33253 = state_33209__$1;
(statearr_33232_33253[(1)] = (11));

} else {
var statearr_33233_33254 = state_33209__$1;
(statearr_33233_33254[(1)] = (12));

}

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
}
}
}
}
}
}
});})(c__25265__auto__))
;
return ((function (switch__25244__auto__,c__25265__auto__){
return (function() {
var klipse$plugin$klipsify_elements_$_state_machine__25245__auto__ = null;
var klipse$plugin$klipsify_elements_$_state_machine__25245__auto____0 = (function (){
var statearr_33237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33237[(0)] = klipse$plugin$klipsify_elements_$_state_machine__25245__auto__);

(statearr_33237[(1)] = (1));

return statearr_33237;
});
var klipse$plugin$klipsify_elements_$_state_machine__25245__auto____1 = (function (state_33209){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_33209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e33238){if((e33238 instanceof Object)){
var ex__25248__auto__ = e33238;
var statearr_33239_33255 = state_33209;
(statearr_33239_33255[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33256 = state_33209;
state_33209 = G__33256;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$plugin$klipsify_elements_$_state_machine__25245__auto__ = function(state_33209){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_elements_$_state_machine__25245__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_elements_$_state_machine__25245__auto____1.call(this,state_33209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_elements_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_elements_$_state_machine__25245__auto____0;
klipse$plugin$klipsify_elements_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_elements_$_state_machine__25245__auto____1;
return klipse$plugin$klipsify_elements_$_state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__))
})();
var state__25267__auto__ = (function (){var statearr_33240 = f__25266__auto__.call(null);
(statearr_33240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_33240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__))
);

return c__25265__auto__;
});
if(typeof klipse.plugin.init !== 'undefined'){
} else {
klipse.plugin.init = (function (){var method_table__23540__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23541__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23542__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23543__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23544__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.plugin","init"),((function (method_table__23540__auto__,prefer_table__23541__auto__,method_cache__23542__auto__,cached_hierarchy__23543__auto__,hierarchy__23544__auto__){
return (function (settings){
return cljs.core.map_QMARK_.call(null,settings);
});})(method_table__23540__auto__,prefer_table__23541__auto__,method_cache__23542__auto__,cached_hierarchy__23543__auto__,hierarchy__23544__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23544__auto__,method_table__23540__auto__,prefer_table__23541__auto__,method_cache__23542__auto__,cached_hierarchy__23543__auto__));
})();
}
cljs.core._add_method.call(null,klipse.plugin.init,false,(function (js_settings){
return klipse.plugin.init.call(null,cljs.core.js__GT_clj.call(null,js_settings,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}));
cljs.core._add_method.call(null,klipse.plugin.init,true,(function (p__33257){
var map__33258 = p__33257;
var map__33258__$1 = ((((!((map__33258 == null)))?((((map__33258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33258):map__33258);
var settings = map__33258__$1;
var selector = cljs.core.get.call(null,map__33258__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var selector_js = cljs.core.get.call(null,map__33258__$1,new cljs.core.Keyword(null,"selector_js","selector_js",-388294259));
var x__25584__auto___33260 = settings;
cljs.core.print.call(null,[cljs.core.str(new cljs.core.Symbol(null,"settings","settings",-1098290894,null)),cljs.core.str(": "),cljs.core.str(x__25584__auto___33260)].join(''));


klipse.plugin.klipsify_elements.call(null,(function (){var x__25584__auto__ = cljs.core.array_seq.call(null,document.querySelectorAll(selector_js));
cljs.core.print.call(null,[cljs.core.str(cljs.core.list(new cljs.core.Symbol(null,"array-seq","array-seq",1251699018,null),cljs.core.list(new cljs.core.Symbol("js","document.querySelectorAll","js/document.querySelectorAll",763532216,null),new cljs.core.Symbol(null,"selector_js","selector_js",1252237268,null)))),cljs.core.str(": "),cljs.core.str(x__25584__auto__)].join(''));

return x__25584__auto__;
})(),new cljs.core.Keyword(null,"javascript","javascript",-45283711));

return klipse.plugin.klipsify_elements.call(null,(function (){var x__25584__auto__ = cljs.core.array_seq.call(null,document.querySelectorAll(selector));
cljs.core.print.call(null,[cljs.core.str(cljs.core.list(new cljs.core.Symbol(null,"array-seq","array-seq",1251699018,null),cljs.core.list(new cljs.core.Symbol("js","document.querySelectorAll","js/document.querySelectorAll",763532216,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null)))),cljs.core.str(": "),cljs.core.str(x__25584__auto__)].join(''));

return x__25584__auto__;
})(),new cljs.core.Keyword(null,"clojure","clojure",438975815));
}));

//# sourceMappingURL=plugin.js.map?rel=1465542764866