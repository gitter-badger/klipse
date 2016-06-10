// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = (function (){var G__57814 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__57814) : cljs.core.atom.call(null,G__57814));
})();
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_http.core.pending_requests) : cljs.core.deref.call(null,cljs_http.core.pending_requests)).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__57819){
var vec__57820 = p__57819;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57820,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57820,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__57824 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__57824)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__57824)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__57824)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__57824)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__57824)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__57824)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__57825){
var map__57829 = p__57825;
var map__57829__$1 = ((((!((map__57829 == null)))?((((map__57829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57829):map__57829);
var request = map__57829__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57829__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57829__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57829__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__6221__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__57831 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__57831,default_headers);

cljs_http.core.apply_response_type_BANG_(G__57831,response_type);

G__57831.setTimeoutInterval(timeout);

G__57831.setWithCredentials(send_credentials);

return G__57831;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__57832){
var map__57861 = p__57832;
var map__57861__$1 = ((((!((map__57861 == null)))?((((map__57861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57861):map__57861);
var request = map__57861__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57861__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57861__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57861__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57861__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57861__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57861__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__6221__auto__ = request_method;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr__$1 = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__57861,map__57861__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__57863 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__57863) : cljs_http.core.error_kw.call(null,G__57863));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr__$1))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__57861,map__57861__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_57889 = ((function (channel,request_url,method,headers__$1,xhr__$1,map__57861,map__57861__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr__$1,map__57861,map__57861__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__57864_57890 = xhr__$1;
G__57864_57890.setProgressEventsEnabled(true);

G__57864_57890.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_57889,cljs.core.cst$kw$upload));

G__57864_57890.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_57889,cljs.core.cst$kw$download));

} else {
}

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__14658__auto___57891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___57891,channel,request_url,method,headers__$1,xhr__$1,map__57861,map__57861__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___57891,channel,request_url,method,headers__$1,xhr__$1,map__57861,map__57861__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_57875){
var state_val_57876 = (state_57875[(1)]);
if((state_val_57876 === (1))){
var state_57875__$1 = state_57875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57875__$1,(2),cancel);
} else {
if((state_val_57876 === (2))){
var inst_57866 = (state_57875[(2)]);
var inst_57867 = xhr__$1.isComplete();
var inst_57868 = cljs.core.not(inst_57867);
var state_57875__$1 = (function (){var statearr_57877 = state_57875;
(statearr_57877[(7)] = inst_57866);

return statearr_57877;
})();
if(inst_57868){
var statearr_57878_57892 = state_57875__$1;
(statearr_57878_57892[(1)] = (3));

} else {
var statearr_57879_57893 = state_57875__$1;
(statearr_57879_57893[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57876 === (3))){
var inst_57870 = xhr__$1.abort();
var state_57875__$1 = state_57875;
var statearr_57880_57894 = state_57875__$1;
(statearr_57880_57894[(2)] = inst_57870);

(statearr_57880_57894[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57876 === (4))){
var state_57875__$1 = state_57875;
var statearr_57881_57895 = state_57875__$1;
(statearr_57881_57895[(2)] = null);

(statearr_57881_57895[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57876 === (5))){
var inst_57873 = (state_57875[(2)]);
var state_57875__$1 = state_57875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57875__$1,inst_57873);
} else {
return null;
}
}
}
}
}
});})(c__14658__auto___57891,channel,request_url,method,headers__$1,xhr__$1,map__57861,map__57861__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__13584__auto__,c__14658__auto___57891,channel,request_url,method,headers__$1,xhr__$1,map__57861,map__57861__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__13585__auto__ = null;
var cljs_http$core$xhr_$_state_machine__13585__auto____0 = (function (){
var statearr_57885 = [null,null,null,null,null,null,null,null];
(statearr_57885[(0)] = cljs_http$core$xhr_$_state_machine__13585__auto__);

(statearr_57885[(1)] = (1));

return statearr_57885;
});
var cljs_http$core$xhr_$_state_machine__13585__auto____1 = (function (state_57875){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_57875);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e57886){if((e57886 instanceof Object)){
var ex__13588__auto__ = e57886;
var statearr_57887_57896 = state_57875;
(statearr_57887_57896[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57875);

return cljs.core.cst$kw$recur;
} else {
throw e57886;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__57897 = state_57875;
state_57875 = G__57897;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__13585__auto__ = function(state_57875){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__13585__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__13585__auto____1.call(this,state_57875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__13585__auto____0;
cljs_http$core$xhr_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__13585__auto____1;
return cljs_http$core$xhr_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___57891,channel,request_url,method,headers__$1,xhr__$1,map__57861,map__57861__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__14660__auto__ = (function (){var statearr_57888 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_57888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___57891);

return statearr_57888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___57891,channel,request_url,method,headers__$1,xhr__$1,map__57861,map__57861__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__57898){
var map__57915 = p__57898;
var map__57915__$1 = ((((!((map__57915 == null)))?((((map__57915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57915):map__57915);
var request = map__57915__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57915__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57915__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57915__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57915__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_57931 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__57915,map__57915__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__57915,map__57915__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__57915,map__57915__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__57915,map__57915__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp__$1,cljs.core.cst$kw$request,req_57931], null));

if(cljs.core.truth_(cancel)){
var c__14658__auto___57932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___57932,req_57931,channel,jsonp__$1,map__57915,map__57915__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___57932,req_57931,channel,jsonp__$1,map__57915,map__57915__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_57921){
var state_val_57922 = (state_57921[(1)]);
if((state_val_57922 === (1))){
var state_57921__$1 = state_57921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57921__$1,(2),cancel);
} else {
if((state_val_57922 === (2))){
var inst_57918 = (state_57921[(2)]);
var inst_57919 = jsonp__$1.cancel(req_57931);
var state_57921__$1 = (function (){var statearr_57923 = state_57921;
(statearr_57923[(7)] = inst_57918);

return statearr_57923;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57921__$1,inst_57919);
} else {
return null;
}
}
});})(c__14658__auto___57932,req_57931,channel,jsonp__$1,map__57915,map__57915__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__13584__auto__,c__14658__auto___57932,req_57931,channel,jsonp__$1,map__57915,map__57915__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__13585__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__13585__auto____0 = (function (){
var statearr_57927 = [null,null,null,null,null,null,null,null];
(statearr_57927[(0)] = cljs_http$core$jsonp_$_state_machine__13585__auto__);

(statearr_57927[(1)] = (1));

return statearr_57927;
});
var cljs_http$core$jsonp_$_state_machine__13585__auto____1 = (function (state_57921){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_57921);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e57928){if((e57928 instanceof Object)){
var ex__13588__auto__ = e57928;
var statearr_57929_57933 = state_57921;
(statearr_57929_57933[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57921);

return cljs.core.cst$kw$recur;
} else {
throw e57928;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__57934 = state_57921;
state_57921 = G__57934;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__13585__auto__ = function(state_57921){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__13585__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__13585__auto____1.call(this,state_57921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__13585__auto____0;
cljs_http$core$jsonp_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__13585__auto____1;
return cljs_http$core$jsonp_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___57932,req_57931,channel,jsonp__$1,map__57915,map__57915__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__14660__auto__ = (function (){var statearr_57930 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_57930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___57932);

return statearr_57930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___57932,req_57931,channel,jsonp__$1,map__57915,map__57915__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__57935){
var map__57938 = p__57935;
var map__57938__$1 = ((((!((map__57938 == null)))?((((map__57938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57938):map__57938);
var request__$1 = map__57938__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57938__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request__$1);
} else {
return cljs_http.core.xhr(request__$1);
}
});
