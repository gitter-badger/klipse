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
return (function (state_34061){
var state_val_34062 = (state_34061[(1)]);
if((state_val_34062 === (1))){
var inst_34055 = klipse.ui.editors.editor.get_value.call(null,editor_source);
var inst_34056 = eval_fn.call(null,inst_34055);
var state_34061__$1 = state_34061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34061__$1,(2),inst_34056);
} else {
if((state_val_34062 === (2))){
var inst_34058 = (state_34061[(2)]);
var inst_34059 = klipse.ui.editors.editor.set_value.call(null,editor_target,inst_34058);
var state_34061__$1 = state_34061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34061__$1,inst_34059);
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
var statearr_34066 = [null,null,null,null,null,null,null];
(statearr_34066[(0)] = klipse$plugin$eval_in_editor_$_state_machine__25245__auto__);

(statearr_34066[(1)] = (1));

return statearr_34066;
});
var klipse$plugin$eval_in_editor_$_state_machine__25245__auto____1 = (function (state_34061){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_34061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e34067){if((e34067 instanceof Object)){
var ex__25248__auto__ = e34067;
var statearr_34068_34070 = state_34061;
(statearr_34068_34070[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34071 = state_34061;
state_34061 = G__34071;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$plugin$eval_in_editor_$_state_machine__25245__auto__ = function(state_34061){
switch(arguments.length){
case 0:
return klipse$plugin$eval_in_editor_$_state_machine__25245__auto____0.call(this);
case 1:
return klipse$plugin$eval_in_editor_$_state_machine__25245__auto____1.call(this,state_34061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$eval_in_editor_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$eval_in_editor_$_state_machine__25245__auto____0;
klipse$plugin$eval_in_editor_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$eval_in_editor_$_state_machine__25245__auto____1;
return klipse$plugin$eval_in_editor_$_state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__))
})();
var state__25267__auto__ = (function (){var statearr_34069 = f__25266__auto__.call(null);
(statearr_34069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_34069;
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
return (function (state_34139){
var state_val_34140 = (state_34139[(1)]);
if((state_val_34140 === (1))){
var inst_34114 = klipse.plugin.language__GT_eval_fn.call(null,language);
var inst_34115 = cljs.core.name.call(null,language);
var inst_34116 = cljs.core.assoc.call(null,klipse.plugin.editor_options,new cljs.core.Keyword(null,"mode","mode",654403691),inst_34115);
var state_34139__$1 = (function (){var statearr_34141 = state_34139;
(statearr_34141[(7)] = inst_34116);

(statearr_34141[(8)] = inst_34114);

return statearr_34141;
})();
if(cljs.core.truth_(element)){
var statearr_34142_34155 = state_34139__$1;
(statearr_34142_34155[(1)] = (2));

} else {
var statearr_34143_34156 = state_34139__$1;
(statearr_34143_34156[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34140 === (2))){
var inst_34116 = (state_34139[(7)]);
var inst_34118 = (state_34139[(9)]);
var inst_34119 = (state_34139[(10)]);
var inst_34114 = (state_34139[(8)]);
var inst_34118__$1 = element.textContent;
var inst_34119__$1 = (function (){var eval_fn = inst_34114;
var my_editor_options = inst_34116;
var clj_in = inst_34118__$1;
return ((function (eval_fn,my_editor_options,clj_in,inst_34116,inst_34118,inst_34119,inst_34114,inst_34118__$1,state_val_34140,c__25265__auto__){
return (function (p1__34072_SHARP_){
return eval_fn.call(null,p1__34072_SHARP_);
});
;})(eval_fn,my_editor_options,clj_in,inst_34116,inst_34118,inst_34119,inst_34114,inst_34118__$1,state_val_34140,c__25265__auto__))
})();
var inst_34120 = cljs.core.assoc.call(null,inst_34116,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true);
var inst_34121 = cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"my-editor-options","my-editor-options",-470974515,null),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true);
var inst_34122 = [cljs.core.str(inst_34121),cljs.core.str(": "),cljs.core.str(inst_34120)].join('');
var inst_34123 = cljs.core.print.call(null,inst_34122);
var inst_34124 = klipse.ui.editors.editor.create_editor_after_element.call(null,element,";the evaluation will appear here (soon)...",inst_34120);
var inst_34125 = klipse.ui.editors.editor.replace_element_by_editor.call(null,element,inst_34118__$1,inst_34116);
var inst_34126 = inst_34119__$1.call(null,inst_34118__$1);
var state_34139__$1 = (function (){var statearr_34144 = state_34139;
(statearr_34144[(11)] = inst_34123);

(statearr_34144[(12)] = inst_34124);

(statearr_34144[(9)] = inst_34118__$1);

(statearr_34144[(10)] = inst_34119__$1);

(statearr_34144[(13)] = inst_34125);

return statearr_34144;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34139__$1,(5),inst_34126);
} else {
if((state_val_34140 === (3))){
var state_34139__$1 = state_34139;
var statearr_34145_34157 = state_34139__$1;
(statearr_34145_34157[(2)] = null);

(statearr_34145_34157[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34140 === (4))){
var inst_34137 = (state_34139[(2)]);
var state_34139__$1 = state_34139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34139__$1,inst_34137);
} else {
if((state_val_34140 === (5))){
var inst_34116 = (state_34139[(7)]);
var inst_34124 = (state_34139[(12)]);
var inst_34118 = (state_34139[(9)]);
var inst_34119 = (state_34139[(10)]);
var inst_34125 = (state_34139[(13)]);
var inst_34114 = (state_34139[(8)]);
var inst_34128 = (state_34139[(2)]);
var inst_34129 = klipse.ui.editors.editor.set_value.call(null,inst_34124,inst_34128);
var inst_34130 = [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),new cljs.core.Keyword(null,"base-url","base-url",9540398),new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168)];
var inst_34131 = (function (){var eval_fn = inst_34114;
var my_editor_options = inst_34116;
var clj_in = inst_34118;
var eval_fn_with_args = inst_34119;
var out_editor = inst_34124;
var in_editor = inst_34125;
return ((function (eval_fn,my_editor_options,clj_in,eval_fn_with_args,out_editor,in_editor,inst_34116,inst_34124,inst_34118,inst_34119,inst_34125,inst_34114,inst_34128,inst_34129,inst_34130,state_val_34140,c__25265__auto__){
return (function (){
return klipse.plugin.eval_in_editor.call(null,eval_fn_with_args,out_editor,in_editor);
});
;})(eval_fn,my_editor_options,clj_in,eval_fn_with_args,out_editor,in_editor,inst_34116,inst_34124,inst_34118,inst_34119,inst_34125,inst_34114,inst_34128,inst_34129,inst_34130,state_val_34140,c__25265__auto__))
})();
var inst_34132 = [(2000),klipse.plugin.app_url,inst_34131];
var inst_34133 = cljs.core.PersistentHashMap.fromArrays(inst_34130,inst_34132);
var inst_34134 = klipse.ui.editors.common.handle_events.call(null,inst_34125,inst_34133);
var state_34139__$1 = (function (){var statearr_34146 = state_34139;
(statearr_34146[(14)] = inst_34129);

return statearr_34146;
})();
var statearr_34147_34158 = state_34139__$1;
(statearr_34147_34158[(2)] = inst_34134);

(statearr_34147_34158[(1)] = (4));


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
var statearr_34151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34151[(0)] = klipse$plugin$klipsify_$_state_machine__25245__auto__);

(statearr_34151[(1)] = (1));

return statearr_34151;
});
var klipse$plugin$klipsify_$_state_machine__25245__auto____1 = (function (state_34139){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_34139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e34152){if((e34152 instanceof Object)){
var ex__25248__auto__ = e34152;
var statearr_34153_34159 = state_34139;
(statearr_34153_34159[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34160 = state_34139;
state_34139 = G__34160;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__25245__auto__ = function(state_34139){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__25245__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__25245__auto____1.call(this,state_34139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__25245__auto____0;
klipse$plugin$klipsify_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__25245__auto____1;
return klipse$plugin$klipsify_$_state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__))
})();
var state__25267__auto__ = (function (){var statearr_34154 = f__25266__auto__.call(null);
(statearr_34154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_34154;
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
return (function (state_34295){
var state_val_34296 = (state_34295[(1)]);
if((state_val_34296 === (7))){
var inst_34250 = (state_34295[(7)]);
var inst_34253 = (state_34295[(8)]);
var inst_34251 = (state_34295[(9)]);
var inst_34252 = (state_34295[(10)]);
var inst_34261 = (state_34295[(2)]);
var inst_34262 = (inst_34253 + (1));
var tmp34297 = inst_34250;
var tmp34298 = inst_34251;
var tmp34299 = inst_34252;
var inst_34250__$1 = tmp34297;
var inst_34251__$1 = tmp34298;
var inst_34252__$1 = tmp34299;
var inst_34253__$1 = inst_34262;
var state_34295__$1 = (function (){var statearr_34300 = state_34295;
(statearr_34300[(11)] = inst_34261);

(statearr_34300[(7)] = inst_34250__$1);

(statearr_34300[(8)] = inst_34253__$1);

(statearr_34300[(9)] = inst_34251__$1);

(statearr_34300[(10)] = inst_34252__$1);

return statearr_34300;
})();
var statearr_34301_34327 = state_34295__$1;
(statearr_34301_34327[(2)] = null);

(statearr_34301_34327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (1))){
var inst_34244 = cljs.core.system_time.call(null);
var inst_34249 = cljs.core.seq.call(null,elements);
var inst_34250 = inst_34249;
var inst_34251 = null;
var inst_34252 = (0);
var inst_34253 = (0);
var state_34295__$1 = (function (){var statearr_34302 = state_34295;
(statearr_34302[(12)] = inst_34244);

(statearr_34302[(7)] = inst_34250);

(statearr_34302[(8)] = inst_34253);

(statearr_34302[(9)] = inst_34251);

(statearr_34302[(10)] = inst_34252);

return statearr_34302;
})();
var statearr_34303_34328 = state_34295__$1;
(statearr_34303_34328[(2)] = null);

(statearr_34303_34328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (4))){
var inst_34253 = (state_34295[(8)]);
var inst_34251 = (state_34295[(9)]);
var inst_34258 = cljs.core._nth.call(null,inst_34251,inst_34253);
var inst_34259 = klipse.plugin.klipsify.call(null,inst_34258,language);
var state_34295__$1 = state_34295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34295__$1,(7),inst_34259);
} else {
if((state_val_34296 === (13))){
var inst_34281 = (state_34295[(2)]);
var state_34295__$1 = state_34295;
var statearr_34304_34329 = state_34295__$1;
(statearr_34304_34329[(2)] = inst_34281);

(statearr_34304_34329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (6))){
var inst_34286 = (state_34295[(2)]);
var state_34295__$1 = state_34295;
var statearr_34305_34330 = state_34295__$1;
(statearr_34305_34330[(2)] = inst_34286);

(statearr_34305_34330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (3))){
var inst_34244 = (state_34295[(12)]);
var inst_34288 = (state_34295[(2)]);
var inst_34289 = cljs.core.system_time.call(null);
var inst_34290 = (inst_34289 - inst_34244);
var inst_34291 = inst_34290.toFixed((6));
var inst_34292 = [cljs.core.str("Elapsed time: "),cljs.core.str(inst_34291),cljs.core.str(" msecs")].join('');
var inst_34293 = cljs.core.prn.call(null,inst_34292);
var state_34295__$1 = (function (){var statearr_34306 = state_34295;
(statearr_34306[(13)] = inst_34293);

return statearr_34306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34295__$1,inst_34288);
} else {
if((state_val_34296 === (12))){
var inst_34265 = (state_34295[(14)]);
var inst_34274 = cljs.core.first.call(null,inst_34265);
var inst_34275 = klipse.plugin.klipsify.call(null,inst_34274,language);
var state_34295__$1 = state_34295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34295__$1,(14),inst_34275);
} else {
if((state_val_34296 === (2))){
var inst_34253 = (state_34295[(8)]);
var inst_34252 = (state_34295[(10)]);
var inst_34255 = (inst_34253 < inst_34252);
var inst_34256 = inst_34255;
var state_34295__$1 = state_34295;
if(cljs.core.truth_(inst_34256)){
var statearr_34307_34331 = state_34295__$1;
(statearr_34307_34331[(1)] = (4));

} else {
var statearr_34308_34332 = state_34295__$1;
(statearr_34308_34332[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (11))){
var inst_34265 = (state_34295[(14)]);
var inst_34269 = cljs.core.chunk_first.call(null,inst_34265);
var inst_34270 = cljs.core.chunk_rest.call(null,inst_34265);
var inst_34271 = cljs.core.count.call(null,inst_34269);
var inst_34250 = inst_34270;
var inst_34251 = inst_34269;
var inst_34252 = inst_34271;
var inst_34253 = (0);
var state_34295__$1 = (function (){var statearr_34309 = state_34295;
(statearr_34309[(7)] = inst_34250);

(statearr_34309[(8)] = inst_34253);

(statearr_34309[(9)] = inst_34251);

(statearr_34309[(10)] = inst_34252);

return statearr_34309;
})();
var statearr_34310_34333 = state_34295__$1;
(statearr_34310_34333[(2)] = null);

(statearr_34310_34333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (9))){
var state_34295__$1 = state_34295;
var statearr_34311_34334 = state_34295__$1;
(statearr_34311_34334[(2)] = null);

(statearr_34311_34334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (5))){
var inst_34250 = (state_34295[(7)]);
var inst_34265 = (state_34295[(14)]);
var inst_34265__$1 = cljs.core.seq.call(null,inst_34250);
var state_34295__$1 = (function (){var statearr_34312 = state_34295;
(statearr_34312[(14)] = inst_34265__$1);

return statearr_34312;
})();
if(inst_34265__$1){
var statearr_34313_34335 = state_34295__$1;
(statearr_34313_34335[(1)] = (8));

} else {
var statearr_34314_34336 = state_34295__$1;
(statearr_34314_34336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (14))){
var inst_34265 = (state_34295[(14)]);
var inst_34277 = (state_34295[(2)]);
var inst_34278 = cljs.core.next.call(null,inst_34265);
var inst_34250 = inst_34278;
var inst_34251 = null;
var inst_34252 = (0);
var inst_34253 = (0);
var state_34295__$1 = (function (){var statearr_34315 = state_34295;
(statearr_34315[(7)] = inst_34250);

(statearr_34315[(8)] = inst_34253);

(statearr_34315[(9)] = inst_34251);

(statearr_34315[(15)] = inst_34277);

(statearr_34315[(10)] = inst_34252);

return statearr_34315;
})();
var statearr_34316_34337 = state_34295__$1;
(statearr_34316_34337[(2)] = null);

(statearr_34316_34337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (10))){
var inst_34284 = (state_34295[(2)]);
var state_34295__$1 = state_34295;
var statearr_34317_34338 = state_34295__$1;
(statearr_34317_34338[(2)] = inst_34284);

(statearr_34317_34338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34296 === (8))){
var inst_34265 = (state_34295[(14)]);
var inst_34267 = cljs.core.chunked_seq_QMARK_.call(null,inst_34265);
var state_34295__$1 = state_34295;
if(inst_34267){
var statearr_34318_34339 = state_34295__$1;
(statearr_34318_34339[(1)] = (11));

} else {
var statearr_34319_34340 = state_34295__$1;
(statearr_34319_34340[(1)] = (12));

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
var statearr_34323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34323[(0)] = klipse$plugin$klipsify_elements_$_state_machine__25245__auto__);

(statearr_34323[(1)] = (1));

return statearr_34323;
});
var klipse$plugin$klipsify_elements_$_state_machine__25245__auto____1 = (function (state_34295){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_34295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e34324){if((e34324 instanceof Object)){
var ex__25248__auto__ = e34324;
var statearr_34325_34341 = state_34295;
(statearr_34325_34341[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34342 = state_34295;
state_34295 = G__34342;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$plugin$klipsify_elements_$_state_machine__25245__auto__ = function(state_34295){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_elements_$_state_machine__25245__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_elements_$_state_machine__25245__auto____1.call(this,state_34295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_elements_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_elements_$_state_machine__25245__auto____0;
klipse$plugin$klipsify_elements_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_elements_$_state_machine__25245__auto____1;
return klipse$plugin$klipsify_elements_$_state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__))
})();
var state__25267__auto__ = (function (){var statearr_34326 = f__25266__auto__.call(null);
(statearr_34326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_34326;
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
cljs.core._add_method.call(null,klipse.plugin.init,true,(function (p__34343){
var map__34344 = p__34343;
var map__34344__$1 = ((((!((map__34344 == null)))?((((map__34344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34344):map__34344);
var settings = map__34344__$1;
var selector = cljs.core.get.call(null,map__34344__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var selector_js = cljs.core.get.call(null,map__34344__$1,new cljs.core.Keyword(null,"selector_js","selector_js",-388294259));
var x__25584__auto___34346 = settings;
cljs.core.print.call(null,[cljs.core.str(new cljs.core.Symbol(null,"settings","settings",-1098290894,null)),cljs.core.str(": "),cljs.core.str(x__25584__auto___34346)].join(''));


klipse.plugin.klipsify_elements.call(null,(function (){var x__25584__auto__ = cljs.core.array_seq.call(null,document.querySelectorAll(selector_js));
cljs.core.print.call(null,[cljs.core.str(cljs.core.list(new cljs.core.Symbol(null,"array-seq","array-seq",1251699018,null),cljs.core.list(new cljs.core.Symbol("js","document.querySelectorAll","js/document.querySelectorAll",763532216,null),new cljs.core.Symbol(null,"selector_js","selector_js",1252237268,null)))),cljs.core.str(": "),cljs.core.str(x__25584__auto__)].join(''));

return x__25584__auto__;
})(),new cljs.core.Keyword(null,"javascript","javascript",-45283711));

return klipse.plugin.klipsify_elements.call(null,(function (){var x__25584__auto__ = cljs.core.array_seq.call(null,document.querySelectorAll(selector));
cljs.core.print.call(null,[cljs.core.str(cljs.core.list(new cljs.core.Symbol(null,"array-seq","array-seq",1251699018,null),cljs.core.list(new cljs.core.Symbol("js","document.querySelectorAll","js/document.querySelectorAll",763532216,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null)))),cljs.core.str(": "),cljs.core.str(x__25584__auto__)].join(''));

return x__25584__auto__;
})(),new cljs.core.Keyword(null,"clojure","clojure",438975815));
}));

//# sourceMappingURL=plugin.js.map?rel=1465542768036