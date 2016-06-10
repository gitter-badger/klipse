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
cljs_http.core.pending_requests = (function (){var G__32997 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32997) : cljs.core.atom.call(null,G__32997));
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
return (function (p__33002){
var vec__33003 = p__33002;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33003,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33003,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__33007 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__33007)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__33007)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__33007)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__33007)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__33007)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__33007)){
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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__33008){
var map__33012 = p__33008;
var map__33012__$1 = ((((!((map__33012 == null)))?((((map__33012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33012):map__33012);
var request = map__33012__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33012__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33012__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33012__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__6221__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__33014 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__33014,default_headers);

cljs_http.core.apply_response_type_BANG_(G__33014,response_type);

G__33014.setTimeoutInterval(timeout);

G__33014.setWithCredentials(send_credentials);

return G__33014;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__33105){
var map__33159 = p__33105;
var map__33159__$1 = ((((!((map__33159 == null)))?((((map__33159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33159):map__33159);
var request = map__33159__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33159__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33159__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33159__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33159__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33159__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33159__$1,cljs.core.cst$kw$progress);
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

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__33159,map__33159__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__33168 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__33168) : cljs_http.core.error_kw.call(null,G__33168));
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
});})(channel,request_url,method,headers__$1,xhr__$1,map__33159,map__33159__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_33218 = ((function (channel,request_url,method,headers__$1,xhr__$1,map__33159,map__33159__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr__$1,map__33159,map__33159__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__33174_33221 = xhr__$1;
G__33174_33221.setProgressEventsEnabled(true);

G__33174_33221.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_33218,cljs.core.cst$kw$upload));

G__33174_33221.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_33218,cljs.core.cst$kw$download));

} else {
}

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__14658__auto___33222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___33222,channel,request_url,method,headers__$1,xhr__$1,map__33159,map__33159__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___33222,channel,request_url,method,headers__$1,xhr__$1,map__33159,map__33159__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_33187){
var state_val_33188 = (state_33187[(1)]);
if((state_val_33188 === (1))){
var state_33187__$1 = state_33187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33187__$1,(2),cancel);
} else {
if((state_val_33188 === (2))){
var inst_33178 = (state_33187[(2)]);
var inst_33179 = xhr__$1.isComplete();
var inst_33180 = cljs.core.not(inst_33179);
var state_33187__$1 = (function (){var statearr_33192 = state_33187;
(statearr_33192[(7)] = inst_33178);

return statearr_33192;
})();
if(inst_33180){
var statearr_33193_33226 = state_33187__$1;
(statearr_33193_33226[(1)] = (3));

} else {
var statearr_33194_33227 = state_33187__$1;
(statearr_33194_33227[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33188 === (3))){
var inst_33182 = xhr__$1.abort();
var state_33187__$1 = state_33187;
var statearr_33195_33229 = state_33187__$1;
(statearr_33195_33229[(2)] = inst_33182);

(statearr_33195_33229[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33188 === (4))){
var state_33187__$1 = state_33187;
var statearr_33197_33230 = state_33187__$1;
(statearr_33197_33230[(2)] = null);

(statearr_33197_33230[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33188 === (5))){
var inst_33185 = (state_33187[(2)]);
var state_33187__$1 = state_33187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33187__$1,inst_33185);
} else {
return null;
}
}
}
}
}
});})(c__14658__auto___33222,channel,request_url,method,headers__$1,xhr__$1,map__33159,map__33159__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__13584__auto__,c__14658__auto___33222,channel,request_url,method,headers__$1,xhr__$1,map__33159,map__33159__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__13585__auto__ = null;
var cljs_http$core$xhr_$_state_machine__13585__auto____0 = (function (){
var statearr_33206 = [null,null,null,null,null,null,null,null];
(statearr_33206[(0)] = cljs_http$core$xhr_$_state_machine__13585__auto__);

(statearr_33206[(1)] = (1));

return statearr_33206;
});
var cljs_http$core$xhr_$_state_machine__13585__auto____1 = (function (state_33187){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_33187);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e33207){if((e33207 instanceof Object)){
var ex__13588__auto__ = e33207;
var statearr_33208_33235 = state_33187;
(statearr_33208_33235[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33187);

return cljs.core.cst$kw$recur;
} else {
throw e33207;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__33236 = state_33187;
state_33187 = G__33236;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__13585__auto__ = function(state_33187){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__13585__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__13585__auto____1.call(this,state_33187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__13585__auto____0;
cljs_http$core$xhr_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__13585__auto____1;
return cljs_http$core$xhr_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___33222,channel,request_url,method,headers__$1,xhr__$1,map__33159,map__33159__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__14660__auto__ = (function (){var statearr_33210 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_33210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___33222);

return statearr_33210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___33222,channel,request_url,method,headers__$1,xhr__$1,map__33159,map__33159__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__33239){
var map__33262 = p__33239;
var map__33262__$1 = ((((!((map__33262 == null)))?((((map__33262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33262):map__33262);
var request = map__33262__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33262__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33262__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33262__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33262__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_33287 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__33262,map__33262__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__33262,map__33262__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__33262,map__33262__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__33262,map__33262__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp__$1,cljs.core.cst$kw$request,req_33287], null));

if(cljs.core.truth_(cancel)){
var c__14658__auto___33294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___33294,req_33287,channel,jsonp__$1,map__33262,map__33262__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___33294,req_33287,channel,jsonp__$1,map__33262,map__33262__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_33269){
var state_val_33270 = (state_33269[(1)]);
if((state_val_33270 === (1))){
var state_33269__$1 = state_33269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33269__$1,(2),cancel);
} else {
if((state_val_33270 === (2))){
var inst_33266 = (state_33269[(2)]);
var inst_33267 = jsonp__$1.cancel(req_33287);
var state_33269__$1 = (function (){var statearr_33271 = state_33269;
(statearr_33271[(7)] = inst_33266);

return statearr_33271;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33269__$1,inst_33267);
} else {
return null;
}
}
});})(c__14658__auto___33294,req_33287,channel,jsonp__$1,map__33262,map__33262__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__13584__auto__,c__14658__auto___33294,req_33287,channel,jsonp__$1,map__33262,map__33262__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__13585__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__13585__auto____0 = (function (){
var statearr_33277 = [null,null,null,null,null,null,null,null];
(statearr_33277[(0)] = cljs_http$core$jsonp_$_state_machine__13585__auto__);

(statearr_33277[(1)] = (1));

return statearr_33277;
});
var cljs_http$core$jsonp_$_state_machine__13585__auto____1 = (function (state_33269){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_33269);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e33278){if((e33278 instanceof Object)){
var ex__13588__auto__ = e33278;
var statearr_33280_33326 = state_33269;
(statearr_33280_33326[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33269);

return cljs.core.cst$kw$recur;
} else {
throw e33278;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__33327 = state_33269;
state_33269 = G__33327;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__13585__auto__ = function(state_33269){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__13585__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__13585__auto____1.call(this,state_33269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__13585__auto____0;
cljs_http$core$jsonp_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__13585__auto____1;
return cljs_http$core$jsonp_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___33294,req_33287,channel,jsonp__$1,map__33262,map__33262__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__14660__auto__ = (function (){var statearr_33282 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_33282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___33294);

return statearr_33282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___33294,req_33287,channel,jsonp__$1,map__33262,map__33262__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__33328){
var map__33331 = p__33328;
var map__33331__$1 = ((((!((map__33331 == null)))?((((map__33331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33331):map__33331);
var request__$1 = map__33331__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33331__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request__$1);
} else {
return cljs_http.core.xhr(request__$1);
}
});
