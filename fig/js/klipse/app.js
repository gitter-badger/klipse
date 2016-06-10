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
return (function (state_50896){
var state_val_50897 = (state_50896[(1)]);
if((state_val_50897 === (7))){
var state_50896__$1 = state_50896;
var statearr_50898_50929 = state_50896__$1;
(statearr_50898_50929[(2)] = false);

(statearr_50898_50929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (1))){
var inst_50853 = (state_50896[(7)]);
var inst_50852 = klipse.utils.url_parameters.call(null);
var inst_50853__$1 = new cljs.core.Keyword(null,"cljs_in.gist","cljs_in.gist",-859916365).cljs$core$IFn$_invoke$arity$1(inst_50852);
var state_50896__$1 = (function (){var statearr_50899 = state_50896;
(statearr_50899[(7)] = inst_50853__$1);

return statearr_50899;
})();
if(cljs.core.truth_(inst_50853__$1)){
var statearr_50900_50930 = state_50896__$1;
(statearr_50900_50930[(1)] = (2));

} else {
var statearr_50901_50931 = state_50896__$1;
(statearr_50901_50931[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (4))){
var inst_50894 = (state_50896[(2)]);
var state_50896__$1 = state_50896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50896__$1,inst_50894);
} else {
if((state_val_50897 === (15))){
var inst_50856 = (state_50896[(8)]);
var inst_50883 = (state_50896[(9)]);
var inst_50853 = (state_50896[(7)]);
var inst_50888 = [cljs.core.str("\""),cljs.core.str("Wrong gist path: "),cljs.core.str(inst_50856),cljs.core.str("\n"),cljs.core.str("cljs_in.gist= "),cljs.core.str(inst_50853),cljs.core.str("\n"),cljs.core.str("http status: "),cljs.core.str(inst_50883),cljs.core.str("\"")].join('');
var state_50896__$1 = state_50896;
var statearr_50902_50932 = state_50896__$1;
(statearr_50902_50932[(2)] = inst_50888);

(statearr_50902_50932[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (13))){
var inst_50862 = (state_50896[(10)]);
var state_50896__$1 = state_50896;
var statearr_50903_50933 = state_50896__$1;
(statearr_50903_50933[(2)] = inst_50862);

(statearr_50903_50933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (6))){
var inst_50862 = (state_50896[(10)]);
var inst_50867 = inst_50862.cljs$lang$protocol_mask$partition0$;
var inst_50868 = (inst_50867 & (64));
var inst_50869 = inst_50862.cljs$core$ISeq$;
var inst_50870 = (inst_50868) || (inst_50869);
var state_50896__$1 = state_50896;
if(cljs.core.truth_(inst_50870)){
var statearr_50904_50934 = state_50896__$1;
(statearr_50904_50934[(1)] = (9));

} else {
var statearr_50905_50935 = state_50896__$1;
(statearr_50905_50935[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (17))){
var inst_50891 = (state_50896[(2)]);
var state_50896__$1 = state_50896;
var statearr_50906_50936 = state_50896__$1;
(statearr_50906_50936[(2)] = inst_50891);

(statearr_50906_50936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (3))){
var state_50896__$1 = state_50896;
var statearr_50907_50937 = state_50896__$1;
(statearr_50907_50937[(2)] = null);

(statearr_50907_50937[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (12))){
var inst_50862 = (state_50896[(10)]);
var inst_50879 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50862);
var state_50896__$1 = state_50896;
var statearr_50908_50938 = state_50896__$1;
(statearr_50908_50938[(2)] = inst_50879);

(statearr_50908_50938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (2))){
var inst_50856 = (state_50896[(8)]);
var inst_50853 = (state_50896[(7)]);
var inst_50856__$1 = klipse.app.gist_path.call(null,inst_50853);
var inst_50857 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_50858 = [false];
var inst_50859 = cljs.core.PersistentHashMap.fromArrays(inst_50857,inst_50858);
var inst_50860 = cljs_http.client.get.call(null,inst_50856__$1,inst_50859);
var state_50896__$1 = (function (){var statearr_50909 = state_50896;
(statearr_50909[(8)] = inst_50856__$1);

return statearr_50909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50896__$1,(5),inst_50860);
} else {
if((state_val_50897 === (11))){
var inst_50874 = (state_50896[(2)]);
var state_50896__$1 = state_50896;
var statearr_50910_50939 = state_50896__$1;
(statearr_50910_50939[(2)] = inst_50874);

(statearr_50910_50939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (9))){
var state_50896__$1 = state_50896;
var statearr_50911_50940 = state_50896__$1;
(statearr_50911_50940[(2)] = true);

(statearr_50911_50940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (5))){
var inst_50862 = (state_50896[(10)]);
var inst_50862__$1 = (state_50896[(2)]);
var inst_50864 = (inst_50862__$1 == null);
var inst_50865 = cljs.core.not.call(null,inst_50864);
var state_50896__$1 = (function (){var statearr_50912 = state_50896;
(statearr_50912[(10)] = inst_50862__$1);

return statearr_50912;
})();
if(inst_50865){
var statearr_50913_50941 = state_50896__$1;
(statearr_50913_50941[(1)] = (6));

} else {
var statearr_50914_50942 = state_50896__$1;
(statearr_50914_50942[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (14))){
var inst_50883 = (state_50896[(9)]);
var inst_50882 = (state_50896[(2)]);
var inst_50883__$1 = cljs.core.get.call(null,inst_50882,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_50884 = cljs.core.get.call(null,inst_50882,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_50885 = cljs.core._EQ_.call(null,inst_50883__$1,(200));
var inst_50886 = !(inst_50885);
var state_50896__$1 = (function (){var statearr_50915 = state_50896;
(statearr_50915[(9)] = inst_50883__$1);

(statearr_50915[(11)] = inst_50884);

return statearr_50915;
})();
if(inst_50886){
var statearr_50916_50943 = state_50896__$1;
(statearr_50916_50943[(1)] = (15));

} else {
var statearr_50917_50944 = state_50896__$1;
(statearr_50917_50944[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (16))){
var inst_50884 = (state_50896[(11)]);
var state_50896__$1 = state_50896;
var statearr_50918_50945 = state_50896__$1;
(statearr_50918_50945[(2)] = inst_50884);

(statearr_50918_50945[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (10))){
var state_50896__$1 = state_50896;
var statearr_50919_50946 = state_50896__$1;
(statearr_50919_50946[(2)] = false);

(statearr_50919_50946[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (8))){
var inst_50877 = (state_50896[(2)]);
var state_50896__$1 = state_50896;
if(cljs.core.truth_(inst_50877)){
var statearr_50920_50947 = state_50896__$1;
(statearr_50920_50947[(1)] = (12));

} else {
var statearr_50921_50948 = state_50896__$1;
(statearr_50921_50948[(1)] = (13));

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
var statearr_50925 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50925[(0)] = klipse$app$read_input_from_gist_$_state_machine__25245__auto__);

(statearr_50925[(1)] = (1));

return statearr_50925;
});
var klipse$app$read_input_from_gist_$_state_machine__25245__auto____1 = (function (state_50896){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_50896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e50926){if((e50926 instanceof Object)){
var ex__25248__auto__ = e50926;
var statearr_50927_50949 = state_50896;
(statearr_50927_50949[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50950 = state_50896;
state_50896 = G__50950;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$app$read_input_from_gist_$_state_machine__25245__auto__ = function(state_50896){
switch(arguments.length){
case 0:
return klipse$app$read_input_from_gist_$_state_machine__25245__auto____0.call(this);
case 1:
return klipse$app$read_input_from_gist_$_state_machine__25245__auto____1.call(this,state_50896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$app$read_input_from_gist_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$app$read_input_from_gist_$_state_machine__25245__auto____0;
klipse$app$read_input_from_gist_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$app$read_input_from_gist_$_state_machine__25245__auto____1;
return klipse$app$read_input_from_gist_$_state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__))
})();
var state__25267__auto__ = (function (){var statearr_50928 = f__25266__auto__.call(null);
(statearr_50928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_50928;
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
return (function (state_50983){
var state_val_50984 = (state_50983[(1)]);
if((state_val_50984 === (1))){
var inst_50974 = (state_50983[(7)]);
var inst_50974__$1 = klipse.app.read_input_from_url.call(null);
var state_50983__$1 = (function (){var statearr_50985 = state_50983;
(statearr_50985[(7)] = inst_50974__$1);

return statearr_50985;
})();
if(cljs.core.truth_(inst_50974__$1)){
var statearr_50986_50997 = state_50983__$1;
(statearr_50986_50997[(1)] = (2));

} else {
var statearr_50987_50998 = state_50983__$1;
(statearr_50987_50998[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50984 === (2))){
var inst_50974 = (state_50983[(7)]);
var state_50983__$1 = state_50983;
var statearr_50988_50999 = state_50983__$1;
(statearr_50988_50999[(2)] = inst_50974);

(statearr_50988_50999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50984 === (3))){
var inst_50977 = klipse.app.read_input_from_gist.call(null);
var state_50983__$1 = state_50983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50983__$1,(5),inst_50977);
} else {
if((state_val_50984 === (4))){
var inst_50981 = (state_50983[(2)]);
var state_50983__$1 = state_50983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50983__$1,inst_50981);
} else {
if((state_val_50984 === (5))){
var inst_50979 = (state_50983[(2)]);
var state_50983__$1 = state_50983;
var statearr_50989_51000 = state_50983__$1;
(statearr_50989_51000[(2)] = inst_50979);

(statearr_50989_51000[(1)] = (4));


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
var statearr_50993 = [null,null,null,null,null,null,null,null];
(statearr_50993[(0)] = klipse$app$read_src_input_$_state_machine__25245__auto__);

(statearr_50993[(1)] = (1));

return statearr_50993;
});
var klipse$app$read_src_input_$_state_machine__25245__auto____1 = (function (state_50983){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_50983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e50994){if((e50994 instanceof Object)){
var ex__25248__auto__ = e50994;
var statearr_50995_51001 = state_50983;
(statearr_50995_51001[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51002 = state_50983;
state_50983 = G__51002;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$app$read_src_input_$_state_machine__25245__auto__ = function(state_50983){
switch(arguments.length){
case 0:
return klipse$app$read_src_input_$_state_machine__25245__auto____0.call(this);
case 1:
return klipse$app$read_src_input_$_state_machine__25245__auto____1.call(this,state_50983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$app$read_src_input_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$app$read_src_input_$_state_machine__25245__auto____0;
klipse$app$read_src_input_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$app$read_src_input_$_state_machine__25245__auto____1;
return klipse$app$read_src_input_$_state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__))
})();
var state__25267__auto__ = (function (){var statearr_50996 = f__25266__auto__.call(null);
(statearr_50996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_50996;
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
return (function (state_51033){
var state_val_51034 = (state_51033[(1)]);
if((state_val_51034 === (1))){
var inst_51023 = klipse.app.read_src_input.call(null);
var state_51033__$1 = state_51033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51033__$1,(2),inst_51023);
} else {
if((state_val_51034 === (2))){
var inst_51025 = (state_51033[(2)]);
var inst_51026 = [new cljs.core.Keyword(null,"input","input",556931961)];
var inst_51027 = [inst_51025];
var inst_51028 = cljs.core.PersistentHashMap.fromArrays(inst_51026,inst_51027);
var inst_51029 = klipse.control.control.reconciler.call(null,inst_51028);
var inst_51030 = om.next.add_root_BANG_.call(null,inst_51029,klipse.ui.layout.Layout,element);
var inst_51031 = klipse.ui.editors.cljs.process_input.call(null,inst_51029,inst_51025);
var state_51033__$1 = (function (){var statearr_51035 = state_51033;
(statearr_51035[(7)] = inst_51030);

return statearr_51035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51033__$1,inst_51031);
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
var statearr_51039 = [null,null,null,null,null,null,null,null];
(statearr_51039[(0)] = klipse$app$init_$_state_machine__25245__auto__);

(statearr_51039[(1)] = (1));

return statearr_51039;
});
var klipse$app$init_$_state_machine__25245__auto____1 = (function (state_51033){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_51033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e51040){if((e51040 instanceof Object)){
var ex__25248__auto__ = e51040;
var statearr_51041_51043 = state_51033;
(statearr_51041_51043[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51044 = state_51033;
state_51033 = G__51044;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$app$init_$_state_machine__25245__auto__ = function(state_51033){
switch(arguments.length){
case 0:
return klipse$app$init_$_state_machine__25245__auto____0.call(this);
case 1:
return klipse$app$init_$_state_machine__25245__auto____1.call(this,state_51033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$app$init_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$app$init_$_state_machine__25245__auto____0;
klipse$app$init_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$app$init_$_state_machine__25245__auto____1;
return klipse$app$init_$_state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__))
})();
var state__25267__auto__ = (function (){var statearr_51042 = f__25266__auto__.call(null);
(statearr_51042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_51042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__))
);

return c__25265__auto__;
});

//# sourceMappingURL=app.js.map?rel=1465544479051