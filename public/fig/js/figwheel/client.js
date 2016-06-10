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
var args46111 = [];
var len__23690__auto___46114 = arguments.length;
var i__23691__auto___46115 = (0);
while(true){
if((i__23691__auto___46115 < len__23690__auto___46114)){
args46111.push((arguments[i__23691__auto___46115]));

var G__46116 = (i__23691__auto___46115 + (1));
i__23691__auto___46115 = G__46116;
continue;
} else {
}
break;
}

var G__46113 = args46111.length;
switch (G__46113) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46111.length)].join('')));

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
var len__23690__auto___46119 = arguments.length;
var i__23691__auto___46120 = (0);
while(true){
if((i__23691__auto___46120 < len__23690__auto___46119)){
args__23697__auto__.push((arguments[i__23691__auto___46120]));

var G__46121 = (i__23691__auto___46120 + (1));
i__23691__auto___46120 = G__46121;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq46118){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46118));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__23697__auto__ = [];
var len__23690__auto___46123 = arguments.length;
var i__23691__auto___46124 = (0);
while(true){
if((i__23691__auto___46124 < len__23690__auto___46123)){
args__23697__auto__.push((arguments[i__23691__auto___46124]));

var G__46125 = (i__23691__auto___46124 + (1));
i__23691__auto___46124 = G__46125;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq46122){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46122));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__46126 = cljs.core._EQ_;
var expr__46127 = (function (){var or__22615__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e46130){if((e46130 instanceof Error)){
var e = e46130;
return false;
} else {
throw e46130;

}
}})();
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__46126.call(null,"true",expr__46127))){
return true;
} else {
if(cljs.core.truth_(pred__46126.call(null,"false",expr__46127))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__46127)].join('')));
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
}catch (e46132){if((e46132 instanceof Error)){
var e = e46132;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e46132;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__46133){
var map__46136 = p__46133;
var map__46136__$1 = ((((!((map__46136 == null)))?((((map__46136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46136):map__46136);
var message = cljs.core.get.call(null,map__46136__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__46136__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__32416__auto___46298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___46298,ch){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___46298,ch){
return (function (state_46267){
var state_val_46268 = (state_46267[(1)]);
if((state_val_46268 === (7))){
var inst_46263 = (state_46267[(2)]);
var state_46267__$1 = state_46267;
var statearr_46269_46299 = state_46267__$1;
(statearr_46269_46299[(2)] = inst_46263);

(statearr_46269_46299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46268 === (1))){
var state_46267__$1 = state_46267;
var statearr_46270_46300 = state_46267__$1;
(statearr_46270_46300[(2)] = null);

(statearr_46270_46300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46268 === (4))){
var inst_46220 = (state_46267[(7)]);
var inst_46220__$1 = (state_46267[(2)]);
var state_46267__$1 = (function (){var statearr_46271 = state_46267;
(statearr_46271[(7)] = inst_46220__$1);

return statearr_46271;
})();
if(cljs.core.truth_(inst_46220__$1)){
var statearr_46272_46301 = state_46267__$1;
(statearr_46272_46301[(1)] = (5));

} else {
var statearr_46273_46302 = state_46267__$1;
(statearr_46273_46302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46268 === (15))){
var inst_46227 = (state_46267[(8)]);
var inst_46242 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46227);
var inst_46243 = cljs.core.first.call(null,inst_46242);
var inst_46244 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_46243);
var inst_46245 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_46244)].join('');
var inst_46246 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_46245);
var state_46267__$1 = state_46267;
var statearr_46274_46303 = state_46267__$1;
(statearr_46274_46303[(2)] = inst_46246);

(statearr_46274_46303[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46268 === (13))){
var inst_46251 = (state_46267[(2)]);
var state_46267__$1 = state_46267;
var statearr_46275_46304 = state_46267__$1;
(statearr_46275_46304[(2)] = inst_46251);

(statearr_46275_46304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46268 === (6))){
var state_46267__$1 = state_46267;
var statearr_46276_46305 = state_46267__$1;
(statearr_46276_46305[(2)] = null);

(statearr_46276_46305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46268 === (17))){
var inst_46249 = (state_46267[(2)]);
var state_46267__$1 = state_46267;
var statearr_46277_46306 = state_46267__$1;
(statearr_46277_46306[(2)] = inst_46249);

(statearr_46277_46306[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46268 === (3))){
var inst_46265 = (state_46267[(2)]);
var state_46267__$1 = state_46267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46267__$1,inst_46265);
} else {
if((state_val_46268 === (12))){
var inst_46226 = (state_46267[(9)]);
var inst_46240 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_46226,opts);
var state_46267__$1 = state_46267;
if(cljs.core.truth_(inst_46240)){
var statearr_46278_46307 = state_46267__$1;
(statearr_46278_46307[(1)] = (15));

} else {
var statearr_46279_46308 = state_46267__$1;
(statearr_46279_46308[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46268 === (2))){
var state_46267__$1 = state_46267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46267__$1,(4),ch);
} else {
if((state_val_46268 === (11))){
var inst_46227 = (state_46267[(8)]);
var inst_46232 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46233 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_46227);
var inst_46234 = cljs.core.async.timeout.call(null,(1000));
var inst_46235 = [inst_46233,inst_46234];
var inst_46236 = (new cljs.core.PersistentVector(null,2,(5),inst_46232,inst_46235,null));
var state_46267__$1 = state_46267;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46267__$1,(14),inst_46236);
} else {
if((state_val_46268 === (9))){
var inst_46227 = (state_46267[(8)]);
var inst_46253 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_46254 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46227);
var inst_46255 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46254);
var inst_46256 = [cljs.core.str("Not loading: "),cljs.core.str(inst_46255)].join('');
var inst_46257 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_46256);
var state_46267__$1 = (function (){var statearr_46280 = state_46267;
(statearr_46280[(10)] = inst_46253);

return statearr_46280;
})();
var statearr_46281_46309 = state_46267__$1;
(statearr_46281_46309[(2)] = inst_46257);

(statearr_46281_46309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46268 === (5))){
var inst_46220 = (state_46267[(7)]);
var inst_46222 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_46223 = (new cljs.core.PersistentArrayMap(null,2,inst_46222,null));
var inst_46224 = (new cljs.core.PersistentHashSet(null,inst_46223,null));
var inst_46225 = figwheel.client.focus_msgs.call(null,inst_46224,inst_46220);
var inst_46226 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_46225);
var inst_46227 = cljs.core.first.call(null,inst_46225);
var inst_46228 = figwheel.client.autoload_QMARK_.call(null);
var state_46267__$1 = (function (){var statearr_46282 = state_46267;
(statearr_46282[(8)] = inst_46227);

(statearr_46282[(9)] = inst_46226);

return statearr_46282;
})();
if(cljs.core.truth_(inst_46228)){
var statearr_46283_46310 = state_46267__$1;
(statearr_46283_46310[(1)] = (8));

} else {
var statearr_46284_46311 = state_46267__$1;
(statearr_46284_46311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46268 === (14))){
var inst_46238 = (state_46267[(2)]);
var state_46267__$1 = state_46267;
var statearr_46285_46312 = state_46267__$1;
(statearr_46285_46312[(2)] = inst_46238);

(statearr_46285_46312[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46268 === (16))){
var state_46267__$1 = state_46267;
var statearr_46286_46313 = state_46267__$1;
(statearr_46286_46313[(2)] = null);

(statearr_46286_46313[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46268 === (10))){
var inst_46259 = (state_46267[(2)]);
var state_46267__$1 = (function (){var statearr_46287 = state_46267;
(statearr_46287[(11)] = inst_46259);

return statearr_46287;
})();
var statearr_46288_46314 = state_46267__$1;
(statearr_46288_46314[(2)] = null);

(statearr_46288_46314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46268 === (8))){
var inst_46226 = (state_46267[(9)]);
var inst_46230 = figwheel.client.reload_file_state_QMARK_.call(null,inst_46226,opts);
var state_46267__$1 = state_46267;
if(cljs.core.truth_(inst_46230)){
var statearr_46289_46315 = state_46267__$1;
(statearr_46289_46315[(1)] = (11));

} else {
var statearr_46290_46316 = state_46267__$1;
(statearr_46290_46316[(1)] = (12));

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
});})(c__32416__auto___46298,ch))
;
return ((function (switch__32304__auto__,c__32416__auto___46298,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32305__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32305__auto____0 = (function (){
var statearr_46294 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46294[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32305__auto__);

(statearr_46294[(1)] = (1));

return statearr_46294;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32305__auto____1 = (function (state_46267){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_46267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e46295){if((e46295 instanceof Object)){
var ex__32308__auto__ = e46295;
var statearr_46296_46317 = state_46267;
(statearr_46296_46317[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46318 = state_46267;
state_46267 = G__46318;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32305__auto__ = function(state_46267){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32305__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32305__auto____1.call(this,state_46267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32305__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32305__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___46298,ch))
})();
var state__32418__auto__ = (function (){var statearr_46297 = f__32417__auto__.call(null);
(statearr_46297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___46298);

return statearr_46297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___46298,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__46319_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__46319_SHARP_));
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
var base_path_46322 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_46322){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e46321){if((e46321 instanceof Error)){
var e = e46321;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_46322], null));
} else {
var e = e46321;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_46322))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__46323){
var map__46332 = p__46323;
var map__46332__$1 = ((((!((map__46332 == null)))?((((map__46332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46332):map__46332);
var opts = map__46332__$1;
var build_id = cljs.core.get.call(null,map__46332__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__46332,map__46332__$1,opts,build_id){
return (function (p__46334){
var vec__46335 = p__46334;
var seq__46336 = cljs.core.seq.call(null,vec__46335);
var first__46337 = cljs.core.first.call(null,seq__46336);
var seq__46336__$1 = cljs.core.next.call(null,seq__46336);
var map__46338 = first__46337;
var map__46338__$1 = ((((!((map__46338 == null)))?((((map__46338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46338):map__46338);
var msg = map__46338__$1;
var msg_name = cljs.core.get.call(null,map__46338__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46336__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__46335,seq__46336,first__46337,seq__46336__$1,map__46338,map__46338__$1,msg,msg_name,_,map__46332,map__46332__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__46335,seq__46336,first__46337,seq__46336__$1,map__46338,map__46338__$1,msg,msg_name,_,map__46332,map__46332__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__46332,map__46332__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__46346){
var vec__46347 = p__46346;
var seq__46348 = cljs.core.seq.call(null,vec__46347);
var first__46349 = cljs.core.first.call(null,seq__46348);
var seq__46348__$1 = cljs.core.next.call(null,seq__46348);
var map__46350 = first__46349;
var map__46350__$1 = ((((!((map__46350 == null)))?((((map__46350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46350):map__46350);
var msg = map__46350__$1;
var msg_name = cljs.core.get.call(null,map__46350__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46348__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__46352){
var map__46364 = p__46352;
var map__46364__$1 = ((((!((map__46364 == null)))?((((map__46364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46364):map__46364);
var on_compile_warning = cljs.core.get.call(null,map__46364__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__46364__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__46364,map__46364__$1,on_compile_warning,on_compile_fail){
return (function (p__46366){
var vec__46367 = p__46366;
var seq__46368 = cljs.core.seq.call(null,vec__46367);
var first__46369 = cljs.core.first.call(null,seq__46368);
var seq__46368__$1 = cljs.core.next.call(null,seq__46368);
var map__46370 = first__46369;
var map__46370__$1 = ((((!((map__46370 == null)))?((((map__46370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46370):map__46370);
var msg = map__46370__$1;
var msg_name = cljs.core.get.call(null,map__46370__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46368__$1;
var pred__46372 = cljs.core._EQ_;
var expr__46373 = msg_name;
if(cljs.core.truth_(pred__46372.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__46373))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__46372.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__46373))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__46364,map__46364__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto__,msg_hist,msg_names,msg){
return (function (state_46581){
var state_val_46582 = (state_46581[(1)]);
if((state_val_46582 === (7))){
var inst_46509 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
if(cljs.core.truth_(inst_46509)){
var statearr_46583_46629 = state_46581__$1;
(statearr_46583_46629[(1)] = (8));

} else {
var statearr_46584_46630 = state_46581__$1;
(statearr_46584_46630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (20))){
var inst_46575 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46585_46631 = state_46581__$1;
(statearr_46585_46631[(2)] = inst_46575);

(statearr_46585_46631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (27))){
var inst_46571 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46586_46632 = state_46581__$1;
(statearr_46586_46632[(2)] = inst_46571);

(statearr_46586_46632[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (1))){
var inst_46502 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_46581__$1 = state_46581;
if(cljs.core.truth_(inst_46502)){
var statearr_46587_46633 = state_46581__$1;
(statearr_46587_46633[(1)] = (2));

} else {
var statearr_46588_46634 = state_46581__$1;
(statearr_46588_46634[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (24))){
var inst_46573 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46589_46635 = state_46581__$1;
(statearr_46589_46635[(2)] = inst_46573);

(statearr_46589_46635[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (4))){
var inst_46579 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46581__$1,inst_46579);
} else {
if((state_val_46582 === (15))){
var inst_46577 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46590_46636 = state_46581__$1;
(statearr_46590_46636[(2)] = inst_46577);

(statearr_46590_46636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (21))){
var inst_46536 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46591_46637 = state_46581__$1;
(statearr_46591_46637[(2)] = inst_46536);

(statearr_46591_46637[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (31))){
var inst_46560 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_46581__$1 = state_46581;
if(cljs.core.truth_(inst_46560)){
var statearr_46592_46638 = state_46581__$1;
(statearr_46592_46638[(1)] = (34));

} else {
var statearr_46593_46639 = state_46581__$1;
(statearr_46593_46639[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (32))){
var inst_46569 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46594_46640 = state_46581__$1;
(statearr_46594_46640[(2)] = inst_46569);

(statearr_46594_46640[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (33))){
var inst_46558 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46595_46641 = state_46581__$1;
(statearr_46595_46641[(2)] = inst_46558);

(statearr_46595_46641[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (13))){
var inst_46523 = figwheel.client.heads_up.clear.call(null);
var state_46581__$1 = state_46581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46581__$1,(16),inst_46523);
} else {
if((state_val_46582 === (22))){
var inst_46540 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46541 = figwheel.client.heads_up.append_warning_message.call(null,inst_46540);
var state_46581__$1 = state_46581;
var statearr_46596_46642 = state_46581__$1;
(statearr_46596_46642[(2)] = inst_46541);

(statearr_46596_46642[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (36))){
var inst_46567 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46597_46643 = state_46581__$1;
(statearr_46597_46643[(2)] = inst_46567);

(statearr_46597_46643[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (29))){
var inst_46551 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46598_46644 = state_46581__$1;
(statearr_46598_46644[(2)] = inst_46551);

(statearr_46598_46644[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (6))){
var inst_46504 = (state_46581[(7)]);
var state_46581__$1 = state_46581;
var statearr_46599_46645 = state_46581__$1;
(statearr_46599_46645[(2)] = inst_46504);

(statearr_46599_46645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (28))){
var inst_46547 = (state_46581[(2)]);
var inst_46548 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46549 = figwheel.client.heads_up.display_warning.call(null,inst_46548);
var state_46581__$1 = (function (){var statearr_46600 = state_46581;
(statearr_46600[(8)] = inst_46547);

return statearr_46600;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46581__$1,(29),inst_46549);
} else {
if((state_val_46582 === (25))){
var inst_46545 = figwheel.client.heads_up.clear.call(null);
var state_46581__$1 = state_46581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46581__$1,(28),inst_46545);
} else {
if((state_val_46582 === (34))){
var inst_46562 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46581__$1 = state_46581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46581__$1,(37),inst_46562);
} else {
if((state_val_46582 === (17))){
var inst_46529 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46601_46646 = state_46581__$1;
(statearr_46601_46646[(2)] = inst_46529);

(statearr_46601_46646[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (3))){
var inst_46521 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_46581__$1 = state_46581;
if(cljs.core.truth_(inst_46521)){
var statearr_46602_46647 = state_46581__$1;
(statearr_46602_46647[(1)] = (13));

} else {
var statearr_46603_46648 = state_46581__$1;
(statearr_46603_46648[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (12))){
var inst_46517 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46604_46649 = state_46581__$1;
(statearr_46604_46649[(2)] = inst_46517);

(statearr_46604_46649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (2))){
var inst_46504 = (state_46581[(7)]);
var inst_46504__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_46581__$1 = (function (){var statearr_46605 = state_46581;
(statearr_46605[(7)] = inst_46504__$1);

return statearr_46605;
})();
if(cljs.core.truth_(inst_46504__$1)){
var statearr_46606_46650 = state_46581__$1;
(statearr_46606_46650[(1)] = (5));

} else {
var statearr_46607_46651 = state_46581__$1;
(statearr_46607_46651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (23))){
var inst_46543 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_46581__$1 = state_46581;
if(cljs.core.truth_(inst_46543)){
var statearr_46608_46652 = state_46581__$1;
(statearr_46608_46652[(1)] = (25));

} else {
var statearr_46609_46653 = state_46581__$1;
(statearr_46609_46653[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (35))){
var state_46581__$1 = state_46581;
var statearr_46610_46654 = state_46581__$1;
(statearr_46610_46654[(2)] = null);

(statearr_46610_46654[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (19))){
var inst_46538 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_46581__$1 = state_46581;
if(cljs.core.truth_(inst_46538)){
var statearr_46611_46655 = state_46581__$1;
(statearr_46611_46655[(1)] = (22));

} else {
var statearr_46612_46656 = state_46581__$1;
(statearr_46612_46656[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (11))){
var inst_46513 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46613_46657 = state_46581__$1;
(statearr_46613_46657[(2)] = inst_46513);

(statearr_46613_46657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (9))){
var inst_46515 = figwheel.client.heads_up.clear.call(null);
var state_46581__$1 = state_46581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46581__$1,(12),inst_46515);
} else {
if((state_val_46582 === (5))){
var inst_46506 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_46581__$1 = state_46581;
var statearr_46614_46658 = state_46581__$1;
(statearr_46614_46658[(2)] = inst_46506);

(statearr_46614_46658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (14))){
var inst_46531 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_46581__$1 = state_46581;
if(cljs.core.truth_(inst_46531)){
var statearr_46615_46659 = state_46581__$1;
(statearr_46615_46659[(1)] = (18));

} else {
var statearr_46616_46660 = state_46581__$1;
(statearr_46616_46660[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (26))){
var inst_46553 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_46581__$1 = state_46581;
if(cljs.core.truth_(inst_46553)){
var statearr_46617_46661 = state_46581__$1;
(statearr_46617_46661[(1)] = (30));

} else {
var statearr_46618_46662 = state_46581__$1;
(statearr_46618_46662[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (16))){
var inst_46525 = (state_46581[(2)]);
var inst_46526 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46527 = figwheel.client.heads_up.display_exception.call(null,inst_46526);
var state_46581__$1 = (function (){var statearr_46619 = state_46581;
(statearr_46619[(9)] = inst_46525);

return statearr_46619;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46581__$1,(17),inst_46527);
} else {
if((state_val_46582 === (30))){
var inst_46555 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46556 = figwheel.client.heads_up.display_warning.call(null,inst_46555);
var state_46581__$1 = state_46581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46581__$1,(33),inst_46556);
} else {
if((state_val_46582 === (10))){
var inst_46519 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46620_46663 = state_46581__$1;
(statearr_46620_46663[(2)] = inst_46519);

(statearr_46620_46663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (18))){
var inst_46533 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46534 = figwheel.client.heads_up.display_exception.call(null,inst_46533);
var state_46581__$1 = state_46581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46581__$1,(21),inst_46534);
} else {
if((state_val_46582 === (37))){
var inst_46564 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46621_46664 = state_46581__$1;
(statearr_46621_46664[(2)] = inst_46564);

(statearr_46621_46664[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (8))){
var inst_46511 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46581__$1 = state_46581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46581__$1,(11),inst_46511);
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
var statearr_46625 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46625[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto__);

(statearr_46625[(1)] = (1));

return statearr_46625;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto____1 = (function (state_46581){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_46581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e46626){if((e46626 instanceof Object)){
var ex__32308__auto__ = e46626;
var statearr_46627_46665 = state_46581;
(statearr_46627_46665[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46666 = state_46581;
state_46581 = G__46666;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto__ = function(state_46581){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto____1.call(this,state_46581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto__,msg_hist,msg_names,msg))
})();
var state__32418__auto__ = (function (){var statearr_46628 = f__32417__auto__.call(null);
(statearr_46628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto__);

return statearr_46628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto__,msg_hist,msg_names,msg))
);

return c__32416__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32416__auto___46729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___46729,ch){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___46729,ch){
return (function (state_46712){
var state_val_46713 = (state_46712[(1)]);
if((state_val_46713 === (1))){
var state_46712__$1 = state_46712;
var statearr_46714_46730 = state_46712__$1;
(statearr_46714_46730[(2)] = null);

(statearr_46714_46730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46713 === (2))){
var state_46712__$1 = state_46712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46712__$1,(4),ch);
} else {
if((state_val_46713 === (3))){
var inst_46710 = (state_46712[(2)]);
var state_46712__$1 = state_46712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46712__$1,inst_46710);
} else {
if((state_val_46713 === (4))){
var inst_46700 = (state_46712[(7)]);
var inst_46700__$1 = (state_46712[(2)]);
var state_46712__$1 = (function (){var statearr_46715 = state_46712;
(statearr_46715[(7)] = inst_46700__$1);

return statearr_46715;
})();
if(cljs.core.truth_(inst_46700__$1)){
var statearr_46716_46731 = state_46712__$1;
(statearr_46716_46731[(1)] = (5));

} else {
var statearr_46717_46732 = state_46712__$1;
(statearr_46717_46732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46713 === (5))){
var inst_46700 = (state_46712[(7)]);
var inst_46702 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_46700);
var state_46712__$1 = state_46712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46712__$1,(8),inst_46702);
} else {
if((state_val_46713 === (6))){
var state_46712__$1 = state_46712;
var statearr_46718_46733 = state_46712__$1;
(statearr_46718_46733[(2)] = null);

(statearr_46718_46733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46713 === (7))){
var inst_46708 = (state_46712[(2)]);
var state_46712__$1 = state_46712;
var statearr_46719_46734 = state_46712__$1;
(statearr_46719_46734[(2)] = inst_46708);

(statearr_46719_46734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46713 === (8))){
var inst_46704 = (state_46712[(2)]);
var state_46712__$1 = (function (){var statearr_46720 = state_46712;
(statearr_46720[(8)] = inst_46704);

return statearr_46720;
})();
var statearr_46721_46735 = state_46712__$1;
(statearr_46721_46735[(2)] = null);

(statearr_46721_46735[(1)] = (2));


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
});})(c__32416__auto___46729,ch))
;
return ((function (switch__32304__auto__,c__32416__auto___46729,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32305__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32305__auto____0 = (function (){
var statearr_46725 = [null,null,null,null,null,null,null,null,null];
(statearr_46725[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32305__auto__);

(statearr_46725[(1)] = (1));

return statearr_46725;
});
var figwheel$client$heads_up_plugin_$_state_machine__32305__auto____1 = (function (state_46712){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_46712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e46726){if((e46726 instanceof Object)){
var ex__32308__auto__ = e46726;
var statearr_46727_46736 = state_46712;
(statearr_46727_46736[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46737 = state_46712;
state_46712 = G__46737;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32305__auto__ = function(state_46712){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32305__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32305__auto____1.call(this,state_46712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32305__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32305__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___46729,ch))
})();
var state__32418__auto__ = (function (){var statearr_46728 = f__32417__auto__.call(null);
(statearr_46728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___46729);

return statearr_46728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___46729,ch))
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
return (function (state_46758){
var state_val_46759 = (state_46758[(1)]);
if((state_val_46759 === (1))){
var inst_46753 = cljs.core.async.timeout.call(null,(3000));
var state_46758__$1 = state_46758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46758__$1,(2),inst_46753);
} else {
if((state_val_46759 === (2))){
var inst_46755 = (state_46758[(2)]);
var inst_46756 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_46758__$1 = (function (){var statearr_46760 = state_46758;
(statearr_46760[(7)] = inst_46755);

return statearr_46760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46758__$1,inst_46756);
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
var statearr_46764 = [null,null,null,null,null,null,null,null];
(statearr_46764[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32305__auto__);

(statearr_46764[(1)] = (1));

return statearr_46764;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32305__auto____1 = (function (state_46758){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_46758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e46765){if((e46765 instanceof Object)){
var ex__32308__auto__ = e46765;
var statearr_46766_46768 = state_46758;
(statearr_46766_46768[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46769 = state_46758;
state_46758 = G__46769;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32305__auto__ = function(state_46758){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32305__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32305__auto____1.call(this,state_46758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32305__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32305__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto__))
})();
var state__32418__auto__ = (function (){var statearr_46767 = f__32417__auto__.call(null);
(statearr_46767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto__);

return statearr_46767;
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
return (function (state_46792){
var state_val_46793 = (state_46792[(1)]);
if((state_val_46793 === (1))){
var inst_46786 = cljs.core.async.timeout.call(null,(2000));
var state_46792__$1 = state_46792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46792__$1,(2),inst_46786);
} else {
if((state_val_46793 === (2))){
var inst_46788 = (state_46792[(2)]);
var inst_46789 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_46790 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_46789);
var state_46792__$1 = (function (){var statearr_46794 = state_46792;
(statearr_46794[(7)] = inst_46788);

return statearr_46794;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46792__$1,inst_46790);
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
var statearr_46798 = [null,null,null,null,null,null,null,null];
(statearr_46798[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto__);

(statearr_46798[(1)] = (1));

return statearr_46798;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto____1 = (function (state_46792){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_46792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e46799){if((e46799 instanceof Object)){
var ex__32308__auto__ = e46799;
var statearr_46800_46802 = state_46792;
(statearr_46800_46802[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46803 = state_46792;
state_46792 = G__46803;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto__ = function(state_46792){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto____1.call(this,state_46792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto__,figwheel_version,temp__4657__auto__))
})();
var state__32418__auto__ = (function (){var statearr_46801 = f__32417__auto__.call(null);
(statearr_46801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto__);

return statearr_46801;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__46804){
var map__46808 = p__46804;
var map__46808__$1 = ((((!((map__46808 == null)))?((((map__46808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46808):map__46808);
var file = cljs.core.get.call(null,map__46808__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__46808__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__46808__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__46810 = "";
var G__46810__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__46810),cljs.core.str("file "),cljs.core.str(file)].join(''):G__46810);
var G__46810__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__46810__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__46810__$1);
if(cljs.core.truth_((function (){var and__22603__auto__ = line;
if(cljs.core.truth_(and__22603__auto__)){
return column;
} else {
return and__22603__auto__;
}
})())){
return [cljs.core.str(G__46810__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__46810__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__46811){
var map__46818 = p__46811;
var map__46818__$1 = ((((!((map__46818 == null)))?((((map__46818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46818):map__46818);
var ed = map__46818__$1;
var formatted_exception = cljs.core.get.call(null,map__46818__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__46818__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__46818__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__46820_46824 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__46821_46825 = null;
var count__46822_46826 = (0);
var i__46823_46827 = (0);
while(true){
if((i__46823_46827 < count__46822_46826)){
var msg_46828 = cljs.core._nth.call(null,chunk__46821_46825,i__46823_46827);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46828);

var G__46829 = seq__46820_46824;
var G__46830 = chunk__46821_46825;
var G__46831 = count__46822_46826;
var G__46832 = (i__46823_46827 + (1));
seq__46820_46824 = G__46829;
chunk__46821_46825 = G__46830;
count__46822_46826 = G__46831;
i__46823_46827 = G__46832;
continue;
} else {
var temp__4657__auto___46833 = cljs.core.seq.call(null,seq__46820_46824);
if(temp__4657__auto___46833){
var seq__46820_46834__$1 = temp__4657__auto___46833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46820_46834__$1)){
var c__23426__auto___46835 = cljs.core.chunk_first.call(null,seq__46820_46834__$1);
var G__46836 = cljs.core.chunk_rest.call(null,seq__46820_46834__$1);
var G__46837 = c__23426__auto___46835;
var G__46838 = cljs.core.count.call(null,c__23426__auto___46835);
var G__46839 = (0);
seq__46820_46824 = G__46836;
chunk__46821_46825 = G__46837;
count__46822_46826 = G__46838;
i__46823_46827 = G__46839;
continue;
} else {
var msg_46840 = cljs.core.first.call(null,seq__46820_46834__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46840);

var G__46841 = cljs.core.next.call(null,seq__46820_46834__$1);
var G__46842 = null;
var G__46843 = (0);
var G__46844 = (0);
seq__46820_46824 = G__46841;
chunk__46821_46825 = G__46842;
count__46822_46826 = G__46843;
i__46823_46827 = G__46844;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__46845){
var map__46848 = p__46845;
var map__46848__$1 = ((((!((map__46848 == null)))?((((map__46848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46848):map__46848);
var w = map__46848__$1;
var message = cljs.core.get.call(null,map__46848__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/fig/js/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/fig/js/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__46860 = cljs.core.seq.call(null,plugins);
var chunk__46861 = null;
var count__46862 = (0);
var i__46863 = (0);
while(true){
if((i__46863 < count__46862)){
var vec__46864 = cljs.core._nth.call(null,chunk__46861,i__46863);
var k = cljs.core.nth.call(null,vec__46864,(0),null);
var plugin = cljs.core.nth.call(null,vec__46864,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46870 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46860,chunk__46861,count__46862,i__46863,pl_46870,vec__46864,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_46870.call(null,msg_hist);
});})(seq__46860,chunk__46861,count__46862,i__46863,pl_46870,vec__46864,k,plugin))
);
} else {
}

var G__46871 = seq__46860;
var G__46872 = chunk__46861;
var G__46873 = count__46862;
var G__46874 = (i__46863 + (1));
seq__46860 = G__46871;
chunk__46861 = G__46872;
count__46862 = G__46873;
i__46863 = G__46874;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46860);
if(temp__4657__auto__){
var seq__46860__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46860__$1)){
var c__23426__auto__ = cljs.core.chunk_first.call(null,seq__46860__$1);
var G__46875 = cljs.core.chunk_rest.call(null,seq__46860__$1);
var G__46876 = c__23426__auto__;
var G__46877 = cljs.core.count.call(null,c__23426__auto__);
var G__46878 = (0);
seq__46860 = G__46875;
chunk__46861 = G__46876;
count__46862 = G__46877;
i__46863 = G__46878;
continue;
} else {
var vec__46867 = cljs.core.first.call(null,seq__46860__$1);
var k = cljs.core.nth.call(null,vec__46867,(0),null);
var plugin = cljs.core.nth.call(null,vec__46867,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46879 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46860,chunk__46861,count__46862,i__46863,pl_46879,vec__46867,k,plugin,seq__46860__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_46879.call(null,msg_hist);
});})(seq__46860,chunk__46861,count__46862,i__46863,pl_46879,vec__46867,k,plugin,seq__46860__$1,temp__4657__auto__))
);
} else {
}

var G__46880 = cljs.core.next.call(null,seq__46860__$1);
var G__46881 = null;
var G__46882 = (0);
var G__46883 = (0);
seq__46860 = G__46880;
chunk__46861 = G__46881;
count__46862 = G__46882;
i__46863 = G__46883;
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
var args46884 = [];
var len__23690__auto___46891 = arguments.length;
var i__23691__auto___46892 = (0);
while(true){
if((i__23691__auto___46892 < len__23690__auto___46891)){
args46884.push((arguments[i__23691__auto___46892]));

var G__46893 = (i__23691__auto___46892 + (1));
i__23691__auto___46892 = G__46893;
continue;
} else {
}
break;
}

var G__46886 = args46884.length;
switch (G__46886) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46884.length)].join('')));

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

var seq__46887_46895 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__46888_46896 = null;
var count__46889_46897 = (0);
var i__46890_46898 = (0);
while(true){
if((i__46890_46898 < count__46889_46897)){
var msg_46899 = cljs.core._nth.call(null,chunk__46888_46896,i__46890_46898);
figwheel.client.socket.handle_incoming_message.call(null,msg_46899);

var G__46900 = seq__46887_46895;
var G__46901 = chunk__46888_46896;
var G__46902 = count__46889_46897;
var G__46903 = (i__46890_46898 + (1));
seq__46887_46895 = G__46900;
chunk__46888_46896 = G__46901;
count__46889_46897 = G__46902;
i__46890_46898 = G__46903;
continue;
} else {
var temp__4657__auto___46904 = cljs.core.seq.call(null,seq__46887_46895);
if(temp__4657__auto___46904){
var seq__46887_46905__$1 = temp__4657__auto___46904;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46887_46905__$1)){
var c__23426__auto___46906 = cljs.core.chunk_first.call(null,seq__46887_46905__$1);
var G__46907 = cljs.core.chunk_rest.call(null,seq__46887_46905__$1);
var G__46908 = c__23426__auto___46906;
var G__46909 = cljs.core.count.call(null,c__23426__auto___46906);
var G__46910 = (0);
seq__46887_46895 = G__46907;
chunk__46888_46896 = G__46908;
count__46889_46897 = G__46909;
i__46890_46898 = G__46910;
continue;
} else {
var msg_46911 = cljs.core.first.call(null,seq__46887_46905__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_46911);

var G__46912 = cljs.core.next.call(null,seq__46887_46905__$1);
var G__46913 = null;
var G__46914 = (0);
var G__46915 = (0);
seq__46887_46895 = G__46912;
chunk__46888_46896 = G__46913;
count__46889_46897 = G__46914;
i__46890_46898 = G__46915;
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
var len__23690__auto___46920 = arguments.length;
var i__23691__auto___46921 = (0);
while(true){
if((i__23691__auto___46921 < len__23690__auto___46920)){
args__23697__auto__.push((arguments[i__23691__auto___46921]));

var G__46922 = (i__23691__auto___46921 + (1));
i__23691__auto___46921 = G__46922;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__46917){
var map__46918 = p__46917;
var map__46918__$1 = ((((!((map__46918 == null)))?((((map__46918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46918):map__46918);
var opts = map__46918__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq46916){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46916));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e46924){if((e46924 instanceof Error)){
var e = e46924;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e46924;

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
return (function (p__46928){
var map__46929 = p__46928;
var map__46929__$1 = ((((!((map__46929 == null)))?((((map__46929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46929):map__46929);
var msg_name = cljs.core.get.call(null,map__46929__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1465451191546