// Compiled by ClojureScript 1.9.36 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-SNAPSHOT";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args48432 = [];
var len__23690__auto___48435 = arguments.length;
var i__23691__auto___48436 = (0);
while(true){
if((i__23691__auto___48436 < len__23690__auto___48435)){
args48432.push((arguments[i__23691__auto___48436]));

var G__48437 = (i__23691__auto___48436 + (1));
i__23691__auto___48436 = G__48437;
continue;
} else {
}
break;
}

var G__48434 = args48432.length;
switch (G__48434) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48432.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__23697__auto__ = [];
var len__23690__auto___48440 = arguments.length;
var i__23691__auto___48441 = (0);
while(true){
if((i__23691__auto___48441 < len__23690__auto___48440)){
args__23697__auto__.push((arguments[i__23691__auto___48441]));

var G__48442 = (i__23691__auto___48441 + (1));
i__23691__auto___48441 = G__48442;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq48439){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48439));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__23697__auto__ = [];
var len__23690__auto___48444 = arguments.length;
var i__23691__auto___48445 = (0);
while(true){
if((i__23691__auto___48445 < len__23690__auto___48444)){
args__23697__auto__.push((arguments[i__23691__auto___48445]));

var G__48446 = (i__23691__auto___48445 + (1));
i__23691__auto___48445 = G__48446;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq48443){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48443));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__48447 = cljs.core._EQ_;
var expr__48448 = (function (){var or__22615__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e48451){if((e48451 instanceof Error)){
var e = e48451;
return false;
} else {
throw e48451;

}
}})();
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__48447.call(null,"true",expr__48448))){
return true;
} else {
if(cljs.core.truth_(pred__48447.call(null,"false",expr__48448))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__48448)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e48453){if((e48453 instanceof Error)){
var e = e48453;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e48453;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__48454){
var map__48457 = p__48454;
var map__48457__$1 = ((((!((map__48457 == null)))?((((map__48457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48457):map__48457);
var message = cljs.core.get.call(null,map__48457__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__48457__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__22615__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__22603__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__22603__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__22603__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32416__auto___48619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___48619,ch){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___48619,ch){
return (function (state_48588){
var state_val_48589 = (state_48588[(1)]);
if((state_val_48589 === (7))){
var inst_48584 = (state_48588[(2)]);
var state_48588__$1 = state_48588;
var statearr_48590_48620 = state_48588__$1;
(statearr_48590_48620[(2)] = inst_48584);

(statearr_48590_48620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (1))){
var state_48588__$1 = state_48588;
var statearr_48591_48621 = state_48588__$1;
(statearr_48591_48621[(2)] = null);

(statearr_48591_48621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (4))){
var inst_48541 = (state_48588[(7)]);
var inst_48541__$1 = (state_48588[(2)]);
var state_48588__$1 = (function (){var statearr_48592 = state_48588;
(statearr_48592[(7)] = inst_48541__$1);

return statearr_48592;
})();
if(cljs.core.truth_(inst_48541__$1)){
var statearr_48593_48622 = state_48588__$1;
(statearr_48593_48622[(1)] = (5));

} else {
var statearr_48594_48623 = state_48588__$1;
(statearr_48594_48623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (15))){
var inst_48548 = (state_48588[(8)]);
var inst_48563 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48548);
var inst_48564 = cljs.core.first.call(null,inst_48563);
var inst_48565 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_48564);
var inst_48566 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_48565)].join('');
var inst_48567 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_48566);
var state_48588__$1 = state_48588;
var statearr_48595_48624 = state_48588__$1;
(statearr_48595_48624[(2)] = inst_48567);

(statearr_48595_48624[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (13))){
var inst_48572 = (state_48588[(2)]);
var state_48588__$1 = state_48588;
var statearr_48596_48625 = state_48588__$1;
(statearr_48596_48625[(2)] = inst_48572);

(statearr_48596_48625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (6))){
var state_48588__$1 = state_48588;
var statearr_48597_48626 = state_48588__$1;
(statearr_48597_48626[(2)] = null);

(statearr_48597_48626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (17))){
var inst_48570 = (state_48588[(2)]);
var state_48588__$1 = state_48588;
var statearr_48598_48627 = state_48588__$1;
(statearr_48598_48627[(2)] = inst_48570);

(statearr_48598_48627[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (3))){
var inst_48586 = (state_48588[(2)]);
var state_48588__$1 = state_48588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48588__$1,inst_48586);
} else {
if((state_val_48589 === (12))){
var inst_48547 = (state_48588[(9)]);
var inst_48561 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_48547,opts);
var state_48588__$1 = state_48588;
if(cljs.core.truth_(inst_48561)){
var statearr_48599_48628 = state_48588__$1;
(statearr_48599_48628[(1)] = (15));

} else {
var statearr_48600_48629 = state_48588__$1;
(statearr_48600_48629[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (2))){
var state_48588__$1 = state_48588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48588__$1,(4),ch);
} else {
if((state_val_48589 === (11))){
var inst_48548 = (state_48588[(8)]);
var inst_48553 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48554 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_48548);
var inst_48555 = cljs.core.async.timeout.call(null,(1000));
var inst_48556 = [inst_48554,inst_48555];
var inst_48557 = (new cljs.core.PersistentVector(null,2,(5),inst_48553,inst_48556,null));
var state_48588__$1 = state_48588;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48588__$1,(14),inst_48557);
} else {
if((state_val_48589 === (9))){
var inst_48548 = (state_48588[(8)]);
var inst_48574 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_48575 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48548);
var inst_48576 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48575);
var inst_48577 = [cljs.core.str("Not loading: "),cljs.core.str(inst_48576)].join('');
var inst_48578 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_48577);
var state_48588__$1 = (function (){var statearr_48601 = state_48588;
(statearr_48601[(10)] = inst_48574);

return statearr_48601;
})();
var statearr_48602_48630 = state_48588__$1;
(statearr_48602_48630[(2)] = inst_48578);

(statearr_48602_48630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (5))){
var inst_48541 = (state_48588[(7)]);
var inst_48543 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_48544 = (new cljs.core.PersistentArrayMap(null,2,inst_48543,null));
var inst_48545 = (new cljs.core.PersistentHashSet(null,inst_48544,null));
var inst_48546 = figwheel.client.focus_msgs.call(null,inst_48545,inst_48541);
var inst_48547 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_48546);
var inst_48548 = cljs.core.first.call(null,inst_48546);
var inst_48549 = figwheel.client.autoload_QMARK_.call(null);
var state_48588__$1 = (function (){var statearr_48603 = state_48588;
(statearr_48603[(9)] = inst_48547);

(statearr_48603[(8)] = inst_48548);

return statearr_48603;
})();
if(cljs.core.truth_(inst_48549)){
var statearr_48604_48631 = state_48588__$1;
(statearr_48604_48631[(1)] = (8));

} else {
var statearr_48605_48632 = state_48588__$1;
(statearr_48605_48632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (14))){
var inst_48559 = (state_48588[(2)]);
var state_48588__$1 = state_48588;
var statearr_48606_48633 = state_48588__$1;
(statearr_48606_48633[(2)] = inst_48559);

(statearr_48606_48633[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (16))){
var state_48588__$1 = state_48588;
var statearr_48607_48634 = state_48588__$1;
(statearr_48607_48634[(2)] = null);

(statearr_48607_48634[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (10))){
var inst_48580 = (state_48588[(2)]);
var state_48588__$1 = (function (){var statearr_48608 = state_48588;
(statearr_48608[(11)] = inst_48580);

return statearr_48608;
})();
var statearr_48609_48635 = state_48588__$1;
(statearr_48609_48635[(2)] = null);

(statearr_48609_48635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (8))){
var inst_48547 = (state_48588[(9)]);
var inst_48551 = figwheel.client.reload_file_state_QMARK_.call(null,inst_48547,opts);
var state_48588__$1 = state_48588;
if(cljs.core.truth_(inst_48551)){
var statearr_48610_48636 = state_48588__$1;
(statearr_48610_48636[(1)] = (11));

} else {
var statearr_48611_48637 = state_48588__$1;
(statearr_48611_48637[(1)] = (12));

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
}
}
}
});})(c__32416__auto___48619,ch))
;
return ((function (switch__32304__auto__,c__32416__auto___48619,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32305__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32305__auto____0 = (function (){
var statearr_48615 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48615[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32305__auto__);

(statearr_48615[(1)] = (1));

return statearr_48615;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32305__auto____1 = (function (state_48588){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_48588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e48616){if((e48616 instanceof Object)){
var ex__32308__auto__ = e48616;
var statearr_48617_48638 = state_48588;
(statearr_48617_48638[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48639 = state_48588;
state_48588 = G__48639;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32305__auto__ = function(state_48588){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32305__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32305__auto____1.call(this,state_48588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32305__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32305__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___48619,ch))
})();
var state__32418__auto__ = (function (){var statearr_48618 = f__32417__auto__.call(null);
(statearr_48618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___48619);

return statearr_48618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___48619,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__48640_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__48640_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_48643 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_48643){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e48642){if((e48642 instanceof Error)){
var e = e48642;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_48643], null));
} else {
var e = e48642;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_48643))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__48644){
var map__48653 = p__48644;
var map__48653__$1 = ((((!((map__48653 == null)))?((((map__48653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48653):map__48653);
var opts = map__48653__$1;
var build_id = cljs.core.get.call(null,map__48653__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__48653,map__48653__$1,opts,build_id){
return (function (p__48655){
var vec__48656 = p__48655;
var seq__48657 = cljs.core.seq.call(null,vec__48656);
var first__48658 = cljs.core.first.call(null,seq__48657);
var seq__48657__$1 = cljs.core.next.call(null,seq__48657);
var map__48659 = first__48658;
var map__48659__$1 = ((((!((map__48659 == null)))?((((map__48659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48659):map__48659);
var msg = map__48659__$1;
var msg_name = cljs.core.get.call(null,map__48659__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48657__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__48656,seq__48657,first__48658,seq__48657__$1,map__48659,map__48659__$1,msg,msg_name,_,map__48653,map__48653__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__48656,seq__48657,first__48658,seq__48657__$1,map__48659,map__48659__$1,msg,msg_name,_,map__48653,map__48653__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__48653,map__48653__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__48667){
var vec__48668 = p__48667;
var seq__48669 = cljs.core.seq.call(null,vec__48668);
var first__48670 = cljs.core.first.call(null,seq__48669);
var seq__48669__$1 = cljs.core.next.call(null,seq__48669);
var map__48671 = first__48670;
var map__48671__$1 = ((((!((map__48671 == null)))?((((map__48671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48671):map__48671);
var msg = map__48671__$1;
var msg_name = cljs.core.get.call(null,map__48671__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48669__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__48673){
var map__48685 = p__48673;
var map__48685__$1 = ((((!((map__48685 == null)))?((((map__48685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48685):map__48685);
var on_compile_warning = cljs.core.get.call(null,map__48685__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__48685__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__48685,map__48685__$1,on_compile_warning,on_compile_fail){
return (function (p__48687){
var vec__48688 = p__48687;
var seq__48689 = cljs.core.seq.call(null,vec__48688);
var first__48690 = cljs.core.first.call(null,seq__48689);
var seq__48689__$1 = cljs.core.next.call(null,seq__48689);
var map__48691 = first__48690;
var map__48691__$1 = ((((!((map__48691 == null)))?((((map__48691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48691):map__48691);
var msg = map__48691__$1;
var msg_name = cljs.core.get.call(null,map__48691__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48689__$1;
var pred__48693 = cljs.core._EQ_;
var expr__48694 = msg_name;
if(cljs.core.truth_(pred__48693.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__48694))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__48693.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__48694))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__48685,map__48685__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto__,msg_hist,msg_names,msg){
return (function (state_48902){
var state_val_48903 = (state_48902[(1)]);
if((state_val_48903 === (7))){
var inst_48830 = (state_48902[(2)]);
var state_48902__$1 = state_48902;
if(cljs.core.truth_(inst_48830)){
var statearr_48904_48950 = state_48902__$1;
(statearr_48904_48950[(1)] = (8));

} else {
var statearr_48905_48951 = state_48902__$1;
(statearr_48905_48951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (20))){
var inst_48896 = (state_48902[(2)]);
var state_48902__$1 = state_48902;
var statearr_48906_48952 = state_48902__$1;
(statearr_48906_48952[(2)] = inst_48896);

(statearr_48906_48952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (27))){
var inst_48892 = (state_48902[(2)]);
var state_48902__$1 = state_48902;
var statearr_48907_48953 = state_48902__$1;
(statearr_48907_48953[(2)] = inst_48892);

(statearr_48907_48953[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (1))){
var inst_48823 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_48902__$1 = state_48902;
if(cljs.core.truth_(inst_48823)){
var statearr_48908_48954 = state_48902__$1;
(statearr_48908_48954[(1)] = (2));

} else {
var statearr_48909_48955 = state_48902__$1;
(statearr_48909_48955[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (24))){
var inst_48894 = (state_48902[(2)]);
var state_48902__$1 = state_48902;
var statearr_48910_48956 = state_48902__$1;
(statearr_48910_48956[(2)] = inst_48894);

(statearr_48910_48956[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (4))){
var inst_48900 = (state_48902[(2)]);
var state_48902__$1 = state_48902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48902__$1,inst_48900);
} else {
if((state_val_48903 === (15))){
var inst_48898 = (state_48902[(2)]);
var state_48902__$1 = state_48902;
var statearr_48911_48957 = state_48902__$1;
(statearr_48911_48957[(2)] = inst_48898);

(statearr_48911_48957[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (21))){
var inst_48857 = (state_48902[(2)]);
var state_48902__$1 = state_48902;
var statearr_48912_48958 = state_48902__$1;
(statearr_48912_48958[(2)] = inst_48857);

(statearr_48912_48958[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (31))){
var inst_48881 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_48902__$1 = state_48902;
if(cljs.core.truth_(inst_48881)){
var statearr_48913_48959 = state_48902__$1;
(statearr_48913_48959[(1)] = (34));

} else {
var statearr_48914_48960 = state_48902__$1;
(statearr_48914_48960[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (32))){
var inst_48890 = (state_48902[(2)]);
var state_48902__$1 = state_48902;
var statearr_48915_48961 = state_48902__$1;
(statearr_48915_48961[(2)] = inst_48890);

(statearr_48915_48961[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (33))){
var inst_48879 = (state_48902[(2)]);
var state_48902__$1 = state_48902;
var statearr_48916_48962 = state_48902__$1;
(statearr_48916_48962[(2)] = inst_48879);

(statearr_48916_48962[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (13))){
var inst_48844 = figwheel.client.heads_up.clear.call(null);
var state_48902__$1 = state_48902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48902__$1,(16),inst_48844);
} else {
if((state_val_48903 === (22))){
var inst_48861 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48862 = figwheel.client.heads_up.append_warning_message.call(null,inst_48861);
var state_48902__$1 = state_48902;
var statearr_48917_48963 = state_48902__$1;
(statearr_48917_48963[(2)] = inst_48862);

(statearr_48917_48963[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (36))){
var inst_48888 = (state_48902[(2)]);
var state_48902__$1 = state_48902;
var statearr_48918_48964 = state_48902__$1;
(statearr_48918_48964[(2)] = inst_48888);

(statearr_48918_48964[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (29))){
var inst_48872 = (state_48902[(2)]);
var state_48902__$1 = state_48902;
var statearr_48919_48965 = state_48902__$1;
(statearr_48919_48965[(2)] = inst_48872);

(statearr_48919_48965[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (6))){
var inst_48825 = (state_48902[(7)]);
var state_48902__$1 = state_48902;
var statearr_48920_48966 = state_48902__$1;
(statearr_48920_48966[(2)] = inst_48825);

(statearr_48920_48966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (28))){
var inst_48868 = (state_48902[(2)]);
var inst_48869 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48870 = figwheel.client.heads_up.display_warning.call(null,inst_48869);
var state_48902__$1 = (function (){var statearr_48921 = state_48902;
(statearr_48921[(8)] = inst_48868);

return statearr_48921;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48902__$1,(29),inst_48870);
} else {
if((state_val_48903 === (25))){
var inst_48866 = figwheel.client.heads_up.clear.call(null);
var state_48902__$1 = state_48902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48902__$1,(28),inst_48866);
} else {
if((state_val_48903 === (34))){
var inst_48883 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48902__$1 = state_48902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48902__$1,(37),inst_48883);
} else {
if((state_val_48903 === (17))){
var inst_48850 = (state_48902[(2)]);
var state_48902__$1 = state_48902;
var statearr_48922_48967 = state_48902__$1;
(statearr_48922_48967[(2)] = inst_48850);

(statearr_48922_48967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (3))){
var inst_48842 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_48902__$1 = state_48902;
if(cljs.core.truth_(inst_48842)){
var statearr_48923_48968 = state_48902__$1;
(statearr_48923_48968[(1)] = (13));

} else {
var statearr_48924_48969 = state_48902__$1;
(statearr_48924_48969[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (12))){
var inst_48838 = (state_48902[(2)]);
var state_48902__$1 = state_48902;
var statearr_48925_48970 = state_48902__$1;
(statearr_48925_48970[(2)] = inst_48838);

(statearr_48925_48970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (2))){
var inst_48825 = (state_48902[(7)]);
var inst_48825__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_48902__$1 = (function (){var statearr_48926 = state_48902;
(statearr_48926[(7)] = inst_48825__$1);

return statearr_48926;
})();
if(cljs.core.truth_(inst_48825__$1)){
var statearr_48927_48971 = state_48902__$1;
(statearr_48927_48971[(1)] = (5));

} else {
var statearr_48928_48972 = state_48902__$1;
(statearr_48928_48972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (23))){
var inst_48864 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_48902__$1 = state_48902;
if(cljs.core.truth_(inst_48864)){
var statearr_48929_48973 = state_48902__$1;
(statearr_48929_48973[(1)] = (25));

} else {
var statearr_48930_48974 = state_48902__$1;
(statearr_48930_48974[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (35))){
var state_48902__$1 = state_48902;
var statearr_48931_48975 = state_48902__$1;
(statearr_48931_48975[(2)] = null);

(statearr_48931_48975[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (19))){
var inst_48859 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_48902__$1 = state_48902;
if(cljs.core.truth_(inst_48859)){
var statearr_48932_48976 = state_48902__$1;
(statearr_48932_48976[(1)] = (22));

} else {
var statearr_48933_48977 = state_48902__$1;
(statearr_48933_48977[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (11))){
var inst_48834 = (state_48902[(2)]);
var state_48902__$1 = state_48902;
var statearr_48934_48978 = state_48902__$1;
(statearr_48934_48978[(2)] = inst_48834);

(statearr_48934_48978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (9))){
var inst_48836 = figwheel.client.heads_up.clear.call(null);
var state_48902__$1 = state_48902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48902__$1,(12),inst_48836);
} else {
if((state_val_48903 === (5))){
var inst_48827 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_48902__$1 = state_48902;
var statearr_48935_48979 = state_48902__$1;
(statearr_48935_48979[(2)] = inst_48827);

(statearr_48935_48979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (14))){
var inst_48852 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_48902__$1 = state_48902;
if(cljs.core.truth_(inst_48852)){
var statearr_48936_48980 = state_48902__$1;
(statearr_48936_48980[(1)] = (18));

} else {
var statearr_48937_48981 = state_48902__$1;
(statearr_48937_48981[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (26))){
var inst_48874 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_48902__$1 = state_48902;
if(cljs.core.truth_(inst_48874)){
var statearr_48938_48982 = state_48902__$1;
(statearr_48938_48982[(1)] = (30));

} else {
var statearr_48939_48983 = state_48902__$1;
(statearr_48939_48983[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (16))){
var inst_48846 = (state_48902[(2)]);
var inst_48847 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48848 = figwheel.client.heads_up.display_exception.call(null,inst_48847);
var state_48902__$1 = (function (){var statearr_48940 = state_48902;
(statearr_48940[(9)] = inst_48846);

return statearr_48940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48902__$1,(17),inst_48848);
} else {
if((state_val_48903 === (30))){
var inst_48876 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48877 = figwheel.client.heads_up.display_warning.call(null,inst_48876);
var state_48902__$1 = state_48902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48902__$1,(33),inst_48877);
} else {
if((state_val_48903 === (10))){
var inst_48840 = (state_48902[(2)]);
var state_48902__$1 = state_48902;
var statearr_48941_48984 = state_48902__$1;
(statearr_48941_48984[(2)] = inst_48840);

(statearr_48941_48984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (18))){
var inst_48854 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48855 = figwheel.client.heads_up.display_exception.call(null,inst_48854);
var state_48902__$1 = state_48902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48902__$1,(21),inst_48855);
} else {
if((state_val_48903 === (37))){
var inst_48885 = (state_48902[(2)]);
var state_48902__$1 = state_48902;
var statearr_48942_48985 = state_48902__$1;
(statearr_48942_48985[(2)] = inst_48885);

(statearr_48942_48985[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48903 === (8))){
var inst_48832 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48902__$1 = state_48902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48902__$1,(11),inst_48832);
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
});})(c__32416__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32304__auto__,c__32416__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto____0 = (function (){
var statearr_48946 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48946[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto__);

(statearr_48946[(1)] = (1));

return statearr_48946;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto____1 = (function (state_48902){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_48902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e48947){if((e48947 instanceof Object)){
var ex__32308__auto__ = e48947;
var statearr_48948_48986 = state_48902;
(statearr_48948_48986[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48987 = state_48902;
state_48902 = G__48987;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto__ = function(state_48902){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto____1.call(this,state_48902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto__,msg_hist,msg_names,msg))
})();
var state__32418__auto__ = (function (){var statearr_48949 = f__32417__auto__.call(null);
(statearr_48949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto__);

return statearr_48949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto__,msg_hist,msg_names,msg))
);

return c__32416__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32416__auto___49050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___49050,ch){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___49050,ch){
return (function (state_49033){
var state_val_49034 = (state_49033[(1)]);
if((state_val_49034 === (1))){
var state_49033__$1 = state_49033;
var statearr_49035_49051 = state_49033__$1;
(statearr_49035_49051[(2)] = null);

(statearr_49035_49051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (2))){
var state_49033__$1 = state_49033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49033__$1,(4),ch);
} else {
if((state_val_49034 === (3))){
var inst_49031 = (state_49033[(2)]);
var state_49033__$1 = state_49033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49033__$1,inst_49031);
} else {
if((state_val_49034 === (4))){
var inst_49021 = (state_49033[(7)]);
var inst_49021__$1 = (state_49033[(2)]);
var state_49033__$1 = (function (){var statearr_49036 = state_49033;
(statearr_49036[(7)] = inst_49021__$1);

return statearr_49036;
})();
if(cljs.core.truth_(inst_49021__$1)){
var statearr_49037_49052 = state_49033__$1;
(statearr_49037_49052[(1)] = (5));

} else {
var statearr_49038_49053 = state_49033__$1;
(statearr_49038_49053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (5))){
var inst_49021 = (state_49033[(7)]);
var inst_49023 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_49021);
var state_49033__$1 = state_49033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49033__$1,(8),inst_49023);
} else {
if((state_val_49034 === (6))){
var state_49033__$1 = state_49033;
var statearr_49039_49054 = state_49033__$1;
(statearr_49039_49054[(2)] = null);

(statearr_49039_49054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (7))){
var inst_49029 = (state_49033[(2)]);
var state_49033__$1 = state_49033;
var statearr_49040_49055 = state_49033__$1;
(statearr_49040_49055[(2)] = inst_49029);

(statearr_49040_49055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (8))){
var inst_49025 = (state_49033[(2)]);
var state_49033__$1 = (function (){var statearr_49041 = state_49033;
(statearr_49041[(8)] = inst_49025);

return statearr_49041;
})();
var statearr_49042_49056 = state_49033__$1;
(statearr_49042_49056[(2)] = null);

(statearr_49042_49056[(1)] = (2));


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
});})(c__32416__auto___49050,ch))
;
return ((function (switch__32304__auto__,c__32416__auto___49050,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32305__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32305__auto____0 = (function (){
var statearr_49046 = [null,null,null,null,null,null,null,null,null];
(statearr_49046[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32305__auto__);

(statearr_49046[(1)] = (1));

return statearr_49046;
});
var figwheel$client$heads_up_plugin_$_state_machine__32305__auto____1 = (function (state_49033){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_49033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e49047){if((e49047 instanceof Object)){
var ex__32308__auto__ = e49047;
var statearr_49048_49057 = state_49033;
(statearr_49048_49057[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49058 = state_49033;
state_49033 = G__49058;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32305__auto__ = function(state_49033){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32305__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32305__auto____1.call(this,state_49033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32305__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32305__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___49050,ch))
})();
var state__32418__auto__ = (function (){var statearr_49049 = f__32417__auto__.call(null);
(statearr_49049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___49050);

return statearr_49049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___49050,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto__){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto__){
return (function (state_49079){
var state_val_49080 = (state_49079[(1)]);
if((state_val_49080 === (1))){
var inst_49074 = cljs.core.async.timeout.call(null,(3000));
var state_49079__$1 = state_49079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49079__$1,(2),inst_49074);
} else {
if((state_val_49080 === (2))){
var inst_49076 = (state_49079[(2)]);
var inst_49077 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_49079__$1 = (function (){var statearr_49081 = state_49079;
(statearr_49081[(7)] = inst_49076);

return statearr_49081;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49079__$1,inst_49077);
} else {
return null;
}
}
});})(c__32416__auto__))
;
return ((function (switch__32304__auto__,c__32416__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32305__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32305__auto____0 = (function (){
var statearr_49085 = [null,null,null,null,null,null,null,null];
(statearr_49085[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32305__auto__);

(statearr_49085[(1)] = (1));

return statearr_49085;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32305__auto____1 = (function (state_49079){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_49079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e49086){if((e49086 instanceof Object)){
var ex__32308__auto__ = e49086;
var statearr_49087_49089 = state_49079;
(statearr_49087_49089[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49090 = state_49079;
state_49079 = G__49090;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32305__auto__ = function(state_49079){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32305__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32305__auto____1.call(this,state_49079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32305__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32305__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto__))
})();
var state__32418__auto__ = (function (){var statearr_49088 = f__32417__auto__.call(null);
(statearr_49088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto__);

return statearr_49088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto__))
);

return c__32416__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto__,figwheel_version,temp__4657__auto__){
return (function (state_49113){
var state_val_49114 = (state_49113[(1)]);
if((state_val_49114 === (1))){
var inst_49107 = cljs.core.async.timeout.call(null,(2000));
var state_49113__$1 = state_49113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49113__$1,(2),inst_49107);
} else {
if((state_val_49114 === (2))){
var inst_49109 = (state_49113[(2)]);
var inst_49110 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_49111 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_49110);
var state_49113__$1 = (function (){var statearr_49115 = state_49113;
(statearr_49115[(7)] = inst_49109);

return statearr_49115;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49113__$1,inst_49111);
} else {
return null;
}
}
});})(c__32416__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__32304__auto__,c__32416__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto____0 = (function (){
var statearr_49119 = [null,null,null,null,null,null,null,null];
(statearr_49119[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto__);

(statearr_49119[(1)] = (1));

return statearr_49119;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto____1 = (function (state_49113){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_49113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e49120){if((e49120 instanceof Object)){
var ex__32308__auto__ = e49120;
var statearr_49121_49123 = state_49113;
(statearr_49121_49123[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49124 = state_49113;
state_49113 = G__49124;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto__ = function(state_49113){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto____1.call(this,state_49113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto__,figwheel_version,temp__4657__auto__))
})();
var state__32418__auto__ = (function (){var statearr_49122 = f__32417__auto__.call(null);
(statearr_49122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto__);

return statearr_49122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto__,figwheel_version,temp__4657__auto__))
);

return c__32416__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__49125){
var map__49129 = p__49125;
var map__49129__$1 = ((((!((map__49129 == null)))?((((map__49129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49129):map__49129);
var file = cljs.core.get.call(null,map__49129__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49129__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49129__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49131 = "";
var G__49131__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__49131),cljs.core.str("file "),cljs.core.str(file)].join(''):G__49131);
var G__49131__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__49131__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__49131__$1);
if(cljs.core.truth_((function (){var and__22603__auto__ = line;
if(cljs.core.truth_(and__22603__auto__)){
return column;
} else {
return and__22603__auto__;
}
})())){
return [cljs.core.str(G__49131__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__49131__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__49132){
var map__49139 = p__49132;
var map__49139__$1 = ((((!((map__49139 == null)))?((((map__49139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49139):map__49139);
var ed = map__49139__$1;
var formatted_exception = cljs.core.get.call(null,map__49139__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__49139__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__49139__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__49141_49145 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__49142_49146 = null;
var count__49143_49147 = (0);
var i__49144_49148 = (0);
while(true){
if((i__49144_49148 < count__49143_49147)){
var msg_49149 = cljs.core._nth.call(null,chunk__49142_49146,i__49144_49148);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49149);

var G__49150 = seq__49141_49145;
var G__49151 = chunk__49142_49146;
var G__49152 = count__49143_49147;
var G__49153 = (i__49144_49148 + (1));
seq__49141_49145 = G__49150;
chunk__49142_49146 = G__49151;
count__49143_49147 = G__49152;
i__49144_49148 = G__49153;
continue;
} else {
var temp__4657__auto___49154 = cljs.core.seq.call(null,seq__49141_49145);
if(temp__4657__auto___49154){
var seq__49141_49155__$1 = temp__4657__auto___49154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49141_49155__$1)){
var c__23426__auto___49156 = cljs.core.chunk_first.call(null,seq__49141_49155__$1);
var G__49157 = cljs.core.chunk_rest.call(null,seq__49141_49155__$1);
var G__49158 = c__23426__auto___49156;
var G__49159 = cljs.core.count.call(null,c__23426__auto___49156);
var G__49160 = (0);
seq__49141_49145 = G__49157;
chunk__49142_49146 = G__49158;
count__49143_49147 = G__49159;
i__49144_49148 = G__49160;
continue;
} else {
var msg_49161 = cljs.core.first.call(null,seq__49141_49155__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49161);

var G__49162 = cljs.core.next.call(null,seq__49141_49155__$1);
var G__49163 = null;
var G__49164 = (0);
var G__49165 = (0);
seq__49141_49145 = G__49162;
chunk__49142_49146 = G__49163;
count__49143_49147 = G__49164;
i__49144_49148 = G__49165;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__49166){
var map__49169 = p__49166;
var map__49169__$1 = ((((!((map__49169 == null)))?((((map__49169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49169):map__49169);
var w = map__49169__$1;
var message = cljs.core.get.call(null,map__49169__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cards/js/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cards/js/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__22603__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__22603__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__22603__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__49181 = cljs.core.seq.call(null,plugins);
var chunk__49182 = null;
var count__49183 = (0);
var i__49184 = (0);
while(true){
if((i__49184 < count__49183)){
var vec__49185 = cljs.core._nth.call(null,chunk__49182,i__49184);
var k = cljs.core.nth.call(null,vec__49185,(0),null);
var plugin = cljs.core.nth.call(null,vec__49185,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49191 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49181,chunk__49182,count__49183,i__49184,pl_49191,vec__49185,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_49191.call(null,msg_hist);
});})(seq__49181,chunk__49182,count__49183,i__49184,pl_49191,vec__49185,k,plugin))
);
} else {
}

var G__49192 = seq__49181;
var G__49193 = chunk__49182;
var G__49194 = count__49183;
var G__49195 = (i__49184 + (1));
seq__49181 = G__49192;
chunk__49182 = G__49193;
count__49183 = G__49194;
i__49184 = G__49195;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49181);
if(temp__4657__auto__){
var seq__49181__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49181__$1)){
var c__23426__auto__ = cljs.core.chunk_first.call(null,seq__49181__$1);
var G__49196 = cljs.core.chunk_rest.call(null,seq__49181__$1);
var G__49197 = c__23426__auto__;
var G__49198 = cljs.core.count.call(null,c__23426__auto__);
var G__49199 = (0);
seq__49181 = G__49196;
chunk__49182 = G__49197;
count__49183 = G__49198;
i__49184 = G__49199;
continue;
} else {
var vec__49188 = cljs.core.first.call(null,seq__49181__$1);
var k = cljs.core.nth.call(null,vec__49188,(0),null);
var plugin = cljs.core.nth.call(null,vec__49188,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49200 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49181,chunk__49182,count__49183,i__49184,pl_49200,vec__49188,k,plugin,seq__49181__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_49200.call(null,msg_hist);
});})(seq__49181,chunk__49182,count__49183,i__49184,pl_49200,vec__49188,k,plugin,seq__49181__$1,temp__4657__auto__))
);
} else {
}

var G__49201 = cljs.core.next.call(null,seq__49181__$1);
var G__49202 = null;
var G__49203 = (0);
var G__49204 = (0);
seq__49181 = G__49201;
chunk__49182 = G__49202;
count__49183 = G__49203;
i__49184 = G__49204;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args49205 = [];
var len__23690__auto___49212 = arguments.length;
var i__23691__auto___49213 = (0);
while(true){
if((i__23691__auto___49213 < len__23690__auto___49212)){
args49205.push((arguments[i__23691__auto___49213]));

var G__49214 = (i__23691__auto___49213 + (1));
i__23691__auto___49213 = G__49214;
continue;
} else {
}
break;
}

var G__49207 = args49205.length;
switch (G__49207) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49205.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__49208_49216 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__49209_49217 = null;
var count__49210_49218 = (0);
var i__49211_49219 = (0);
while(true){
if((i__49211_49219 < count__49210_49218)){
var msg_49220 = cljs.core._nth.call(null,chunk__49209_49217,i__49211_49219);
figwheel.client.socket.handle_incoming_message.call(null,msg_49220);

var G__49221 = seq__49208_49216;
var G__49222 = chunk__49209_49217;
var G__49223 = count__49210_49218;
var G__49224 = (i__49211_49219 + (1));
seq__49208_49216 = G__49221;
chunk__49209_49217 = G__49222;
count__49210_49218 = G__49223;
i__49211_49219 = G__49224;
continue;
} else {
var temp__4657__auto___49225 = cljs.core.seq.call(null,seq__49208_49216);
if(temp__4657__auto___49225){
var seq__49208_49226__$1 = temp__4657__auto___49225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49208_49226__$1)){
var c__23426__auto___49227 = cljs.core.chunk_first.call(null,seq__49208_49226__$1);
var G__49228 = cljs.core.chunk_rest.call(null,seq__49208_49226__$1);
var G__49229 = c__23426__auto___49227;
var G__49230 = cljs.core.count.call(null,c__23426__auto___49227);
var G__49231 = (0);
seq__49208_49216 = G__49228;
chunk__49209_49217 = G__49229;
count__49210_49218 = G__49230;
i__49211_49219 = G__49231;
continue;
} else {
var msg_49232 = cljs.core.first.call(null,seq__49208_49226__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_49232);

var G__49233 = cljs.core.next.call(null,seq__49208_49226__$1);
var G__49234 = null;
var G__49235 = (0);
var G__49236 = (0);
seq__49208_49216 = G__49233;
chunk__49209_49217 = G__49234;
count__49210_49218 = G__49235;
i__49211_49219 = G__49236;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__23697__auto__ = [];
var len__23690__auto___49241 = arguments.length;
var i__23691__auto___49242 = (0);
while(true){
if((i__23691__auto___49242 < len__23690__auto___49241)){
args__23697__auto__.push((arguments[i__23691__auto___49242]));

var G__49243 = (i__23691__auto___49242 + (1));
i__23691__auto___49242 = G__49243;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__49238){
var map__49239 = p__49238;
var map__49239__$1 = ((((!((map__49239 == null)))?((((map__49239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49239):map__49239);
var opts = map__49239__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq49237){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49237));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e49245){if((e49245 instanceof Error)){
var e = e49245;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e49245;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__49249){
var map__49250 = p__49249;
var map__49250__$1 = ((((!((map__49250 == null)))?((((map__49250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49250):map__49250);
var msg_name = cljs.core.get.call(null,map__49250__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1465451194888