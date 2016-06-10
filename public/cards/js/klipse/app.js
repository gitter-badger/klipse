// Compiled by ClojureScript 1.9.36 {}
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
return [cljs.core.str("https://gist.githubusercontent.com/"),cljs.core.str(gist_id),cljs.core.str("/raw"),cljs.core.str("?"),cljs.core.str(cljs.core.rand.call(null))].join('');
});
klipse.app.read_input_from_url = (function klipse$app$read_input_from_url(){
return new cljs.core.Keyword(null,"cljs_in","cljs_in",1284321894).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
});
klipse.app.read_input_from_gist = (function klipse$app$read_input_from_gist(){
var c__25265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25265__auto__){
return (function (){
var f__25266__auto__ = (function (){var switch__25244__auto__ = ((function (c__25265__auto__){
return (function (state_50620){
var state_val_50621 = (state_50620[(1)]);
if((state_val_50621 === (7))){
var state_50620__$1 = state_50620;
var statearr_50622_50653 = state_50620__$1;
(statearr_50622_50653[(2)] = false);

(statearr_50622_50653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50621 === (1))){
var inst_50577 = (state_50620[(7)]);
var inst_50576 = klipse.utils.url_parameters.call(null);
var inst_50577__$1 = new cljs.core.Keyword(null,"cljs_in.gist","cljs_in.gist",-859916365).cljs$core$IFn$_invoke$arity$1(inst_50576);
var state_50620__$1 = (function (){var statearr_50623 = state_50620;
(statearr_50623[(7)] = inst_50577__$1);

return statearr_50623;
})();
if(cljs.core.truth_(inst_50577__$1)){
var statearr_50624_50654 = state_50620__$1;
(statearr_50624_50654[(1)] = (2));

} else {
var statearr_50625_50655 = state_50620__$1;
(statearr_50625_50655[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50621 === (4))){
var inst_50618 = (state_50620[(2)]);
var state_50620__$1 = state_50620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50620__$1,inst_50618);
} else {
if((state_val_50621 === (15))){
var inst_50607 = (state_50620[(8)]);
var inst_50577 = (state_50620[(7)]);
var inst_50580 = (state_50620[(9)]);
var inst_50612 = [cljs.core.str("\""),cljs.core.str("Wrong gist path: "),cljs.core.str(inst_50580),cljs.core.str("\n"),cljs.core.str("cljs_in.gist= "),cljs.core.str(inst_50577),cljs.core.str("\n"),cljs.core.str("http status: "),cljs.core.str(inst_50607),cljs.core.str("\"")].join('');
var state_50620__$1 = state_50620;
var statearr_50626_50656 = state_50620__$1;
(statearr_50626_50656[(2)] = inst_50612);

(statearr_50626_50656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50621 === (13))){
var inst_50586 = (state_50620[(10)]);
var state_50620__$1 = state_50620;
var statearr_50627_50657 = state_50620__$1;
(statearr_50627_50657[(2)] = inst_50586);

(statearr_50627_50657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50621 === (6))){
var inst_50586 = (state_50620[(10)]);
var inst_50591 = inst_50586.cljs$lang$protocol_mask$partition0$;
var inst_50592 = (inst_50591 & (64));
var inst_50593 = inst_50586.cljs$core$ISeq$;
var inst_50594 = (inst_50592) || (inst_50593);
var state_50620__$1 = state_50620;
if(cljs.core.truth_(inst_50594)){
var statearr_50628_50658 = state_50620__$1;
(statearr_50628_50658[(1)] = (9));

} else {
var statearr_50629_50659 = state_50620__$1;
(statearr_50629_50659[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50621 === (17))){
var inst_50615 = (state_50620[(2)]);
var state_50620__$1 = state_50620;
var statearr_50630_50660 = state_50620__$1;
(statearr_50630_50660[(2)] = inst_50615);

(statearr_50630_50660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50621 === (3))){
var state_50620__$1 = state_50620;
var statearr_50631_50661 = state_50620__$1;
(statearr_50631_50661[(2)] = null);

(statearr_50631_50661[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50621 === (12))){
var inst_50586 = (state_50620[(10)]);
var inst_50603 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50586);
var state_50620__$1 = state_50620;
var statearr_50632_50662 = state_50620__$1;
(statearr_50632_50662[(2)] = inst_50603);

(statearr_50632_50662[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50621 === (2))){
var inst_50577 = (state_50620[(7)]);
var inst_50580 = (state_50620[(9)]);
var inst_50580__$1 = klipse.app.gist_path.call(null,inst_50577);
var inst_50581 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_50582 = [false];
var inst_50583 = cljs.core.PersistentHashMap.fromArrays(inst_50581,inst_50582);
var inst_50584 = cljs_http.client.get.call(null,inst_50580__$1,inst_50583);
var state_50620__$1 = (function (){var statearr_50633 = state_50620;
(statearr_50633[(9)] = inst_50580__$1);

return statearr_50633;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50620__$1,(5),inst_50584);
} else {
if((state_val_50621 === (11))){
var inst_50598 = (state_50620[(2)]);
var state_50620__$1 = state_50620;
var statearr_50634_50663 = state_50620__$1;
(statearr_50634_50663[(2)] = inst_50598);

(statearr_50634_50663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50621 === (9))){
var state_50620__$1 = state_50620;
var statearr_50635_50664 = state_50620__$1;
(statearr_50635_50664[(2)] = true);

(statearr_50635_50664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50621 === (5))){
var inst_50586 = (state_50620[(10)]);
var inst_50586__$1 = (state_50620[(2)]);
var inst_50588 = (inst_50586__$1 == null);
var inst_50589 = cljs.core.not.call(null,inst_50588);
var state_50620__$1 = (function (){var statearr_50636 = state_50620;
(statearr_50636[(10)] = inst_50586__$1);

return statearr_50636;
})();
if(inst_50589){
var statearr_50637_50665 = state_50620__$1;
(statearr_50637_50665[(1)] = (6));

} else {
var statearr_50638_50666 = state_50620__$1;
(statearr_50638_50666[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50621 === (14))){
var inst_50607 = (state_50620[(8)]);
var inst_50606 = (state_50620[(2)]);
var inst_50607__$1 = cljs.core.get.call(null,inst_50606,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_50608 = cljs.core.get.call(null,inst_50606,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_50609 = cljs.core._EQ_.call(null,inst_50607__$1,(200));
var inst_50610 = !(inst_50609);
var state_50620__$1 = (function (){var statearr_50639 = state_50620;
(statearr_50639[(8)] = inst_50607__$1);

(statearr_50639[(11)] = inst_50608);

return statearr_50639;
})();
if(inst_50610){
var statearr_50640_50667 = state_50620__$1;
(statearr_50640_50667[(1)] = (15));

} else {
var statearr_50641_50668 = state_50620__$1;
(statearr_50641_50668[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50621 === (16))){
var inst_50608 = (state_50620[(11)]);
var state_50620__$1 = state_50620;
var statearr_50642_50669 = state_50620__$1;
(statearr_50642_50669[(2)] = inst_50608);

(statearr_50642_50669[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50621 === (10))){
var state_50620__$1 = state_50620;
var statearr_50643_50670 = state_50620__$1;
(statearr_50643_50670[(2)] = false);

(statearr_50643_50670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50621 === (8))){
var inst_50601 = (state_50620[(2)]);
var state_50620__$1 = state_50620;
if(cljs.core.truth_(inst_50601)){
var statearr_50644_50671 = state_50620__$1;
(statearr_50644_50671[(1)] = (12));

} else {
var statearr_50645_50672 = state_50620__$1;
(statearr_50645_50672[(1)] = (13));

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
});})(c__25265__auto__))
;
return ((function (switch__25244__auto__,c__25265__auto__){
return (function() {
var klipse$app$read_input_from_gist_$_state_machine__25245__auto__ = null;
var klipse$app$read_input_from_gist_$_state_machine__25245__auto____0 = (function (){
var statearr_50649 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50649[(0)] = klipse$app$read_input_from_gist_$_state_machine__25245__auto__);

(statearr_50649[(1)] = (1));

return statearr_50649;
});
var klipse$app$read_input_from_gist_$_state_machine__25245__auto____1 = (function (state_50620){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_50620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e50650){if((e50650 instanceof Object)){
var ex__25248__auto__ = e50650;
var statearr_50651_50673 = state_50620;
(statearr_50651_50673[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50674 = state_50620;
state_50620 = G__50674;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$app$read_input_from_gist_$_state_machine__25245__auto__ = function(state_50620){
switch(arguments.length){
case 0:
return klipse$app$read_input_from_gist_$_state_machine__25245__auto____0.call(this);
case 1:
return klipse$app$read_input_from_gist_$_state_machine__25245__auto____1.call(this,state_50620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$app$read_input_from_gist_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$app$read_input_from_gist_$_state_machine__25245__auto____0;
klipse$app$read_input_from_gist_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$app$read_input_from_gist_$_state_machine__25245__auto____1;
return klipse$app$read_input_from_gist_$_state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__))
})();
var state__25267__auto__ = (function (){var statearr_50652 = f__25266__auto__.call(null);
(statearr_50652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_50652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__))
);

return c__25265__auto__;
});
klipse.app.read_src_input = (function klipse$app$read_src_input(){
var c__25265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25265__auto__){
return (function (){
var f__25266__auto__ = (function (){var switch__25244__auto__ = ((function (c__25265__auto__){
return (function (state_50707){
var state_val_50708 = (state_50707[(1)]);
if((state_val_50708 === (1))){
var inst_50698 = (state_50707[(7)]);
var inst_50698__$1 = klipse.app.read_input_from_url.call(null);
var state_50707__$1 = (function (){var statearr_50709 = state_50707;
(statearr_50709[(7)] = inst_50698__$1);

return statearr_50709;
})();
if(cljs.core.truth_(inst_50698__$1)){
var statearr_50710_50721 = state_50707__$1;
(statearr_50710_50721[(1)] = (2));

} else {
var statearr_50711_50722 = state_50707__$1;
(statearr_50711_50722[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50708 === (2))){
var inst_50698 = (state_50707[(7)]);
var state_50707__$1 = state_50707;
var statearr_50712_50723 = state_50707__$1;
(statearr_50712_50723[(2)] = inst_50698);

(statearr_50712_50723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50708 === (3))){
var inst_50701 = klipse.app.read_input_from_gist.call(null);
var state_50707__$1 = state_50707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50707__$1,(5),inst_50701);
} else {
if((state_val_50708 === (4))){
var inst_50705 = (state_50707[(2)]);
var state_50707__$1 = state_50707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50707__$1,inst_50705);
} else {
if((state_val_50708 === (5))){
var inst_50703 = (state_50707[(2)]);
var state_50707__$1 = state_50707;
var statearr_50713_50724 = state_50707__$1;
(statearr_50713_50724[(2)] = inst_50703);

(statearr_50713_50724[(1)] = (4));


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
var klipse$app$read_src_input_$_state_machine__25245__auto__ = null;
var klipse$app$read_src_input_$_state_machine__25245__auto____0 = (function (){
var statearr_50717 = [null,null,null,null,null,null,null,null];
(statearr_50717[(0)] = klipse$app$read_src_input_$_state_machine__25245__auto__);

(statearr_50717[(1)] = (1));

return statearr_50717;
});
var klipse$app$read_src_input_$_state_machine__25245__auto____1 = (function (state_50707){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_50707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e50718){if((e50718 instanceof Object)){
var ex__25248__auto__ = e50718;
var statearr_50719_50725 = state_50707;
(statearr_50719_50725[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50726 = state_50707;
state_50707 = G__50726;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$app$read_src_input_$_state_machine__25245__auto__ = function(state_50707){
switch(arguments.length){
case 0:
return klipse$app$read_src_input_$_state_machine__25245__auto____0.call(this);
case 1:
return klipse$app$read_src_input_$_state_machine__25245__auto____1.call(this,state_50707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$app$read_src_input_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$app$read_src_input_$_state_machine__25245__auto____0;
klipse$app$read_src_input_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$app$read_src_input_$_state_machine__25245__auto____1;
return klipse$app$read_src_input_$_state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__))
})();
var state__25267__auto__ = (function (){var statearr_50720 = f__25266__auto__.call(null);
(statearr_50720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_50720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__))
);

return c__25265__auto__;
});
klipse.app.init = (function klipse$app$init(element){
var c__25265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25265__auto__){
return (function (){
var f__25266__auto__ = (function (){var switch__25244__auto__ = ((function (c__25265__auto__){
return (function (state_50757){
var state_val_50758 = (state_50757[(1)]);
if((state_val_50758 === (1))){
var inst_50747 = klipse.app.read_src_input.call(null);
var state_50757__$1 = state_50757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50757__$1,(2),inst_50747);
} else {
if((state_val_50758 === (2))){
var inst_50749 = (state_50757[(2)]);
var inst_50750 = [new cljs.core.Keyword(null,"input","input",556931961)];
var inst_50751 = [inst_50749];
var inst_50752 = cljs.core.PersistentHashMap.fromArrays(inst_50750,inst_50751);
var inst_50753 = klipse.control.control.reconciler.call(null,inst_50752);
var inst_50754 = om.next.add_root_BANG_.call(null,inst_50753,klipse.ui.layout.Layout,element);
var inst_50755 = klipse.ui.editors.cljs.process_input.call(null,inst_50753,inst_50749);
var state_50757__$1 = (function (){var statearr_50759 = state_50757;
(statearr_50759[(7)] = inst_50754);

return statearr_50759;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50757__$1,inst_50755);
} else {
return null;
}
}
});})(c__25265__auto__))
;
return ((function (switch__25244__auto__,c__25265__auto__){
return (function() {
var klipse$app$init_$_state_machine__25245__auto__ = null;
var klipse$app$init_$_state_machine__25245__auto____0 = (function (){
var statearr_50763 = [null,null,null,null,null,null,null,null];
(statearr_50763[(0)] = klipse$app$init_$_state_machine__25245__auto__);

(statearr_50763[(1)] = (1));

return statearr_50763;
});
var klipse$app$init_$_state_machine__25245__auto____1 = (function (state_50757){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_50757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e50764){if((e50764 instanceof Object)){
var ex__25248__auto__ = e50764;
var statearr_50765_50767 = state_50757;
(statearr_50765_50767[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50768 = state_50757;
state_50757 = G__50768;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$app$init_$_state_machine__25245__auto__ = function(state_50757){
switch(arguments.length){
case 0:
return klipse$app$init_$_state_machine__25245__auto____0.call(this);
case 1:
return klipse$app$init_$_state_machine__25245__auto____1.call(this,state_50757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$app$init_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$app$init_$_state_machine__25245__auto____0;
klipse$app$init_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$app$init_$_state_machine__25245__auto____1;
return klipse$app$init_$_state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__))
})();
var state__25267__auto__ = (function (){var statearr_50766 = f__25266__auto__.call(null);
(statearr_50766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_50766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__))
);

return c__25265__auto__;
});

//# sourceMappingURL=app.js.map?rel=1465544478516