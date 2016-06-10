// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__6209__auto__ = v;
if(cljs.core.truth_(and__6209__auto__)){
return (v > (0));
} else {
return and__6209__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__75538_SHARP_,p2__75537_SHARP_){
var vec__75542 = clojure.string.split.call(null,p2__75537_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__75542,(0),null);
var v = cljs.core.nth.call(null,vec__75542,(1),null);
return cljs.core.assoc.call(null,p1__75538_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__75545_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__75545_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__75546){
var vec__75550 = p__75546;
var k = cljs.core.nth.call(null,vec__75550,(0),null);
var v = cljs.core.nth.call(null,vec__75550,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__75553_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__75553_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__6209__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__6209__auto__){
var and__6209__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__6209__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__75554_SHARP_){
return cljs_http.client.decode_body.call(null,p1__75554_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__7303__auto__ = [];
var len__7296__auto___75561 = arguments.length;
var i__7297__auto___75562 = (0);
while(true){
if((i__7297__auto___75562 < len__7296__auto___75561)){
args__7303__auto__.push((arguments[i__7297__auto___75562]));

var G__75563 = (i__7297__auto___75562 + (1));
i__7297__auto___75562 = G__75563;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__75557){
var vec__75558 = p__75557;
var default_headers = cljs.core.nth.call(null,vec__75558,(0),null);
return ((function (vec__75558,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__6221__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__75558,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq75555){
var G__75556 = cljs.core.first.call(null,seq75555);
var seq75555__$1 = cljs.core.next.call(null,seq75555);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__75556,seq75555__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__7303__auto__ = [];
var len__7296__auto___75570 = arguments.length;
var i__7297__auto___75571 = (0);
while(true){
if((i__7297__auto___75571 < len__7296__auto___75570)){
args__7303__auto__.push((arguments[i__7297__auto___75571]));

var G__75572 = (i__7297__auto___75571 + (1));
i__7297__auto___75571 = G__75572;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__75566){
var vec__75567 = p__75566;
var accept = cljs.core.nth.call(null,vec__75567,(0),null);
return ((function (vec__75567,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__6221__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__75567,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq75564){
var G__75565 = cljs.core.first.call(null,seq75564);
var seq75564__$1 = cljs.core.next.call(null,seq75564);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__75565,seq75564__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__7303__auto__ = [];
var len__7296__auto___75579 = arguments.length;
var i__7297__auto___75580 = (0);
while(true){
if((i__7297__auto___75580 < len__7296__auto___75579)){
args__7303__auto__.push((arguments[i__7297__auto___75580]));

var G__75581 = (i__7297__auto___75580 + (1));
i__7297__auto___75580 = G__75581;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__75575){
var vec__75576 = p__75575;
var content_type = cljs.core.nth.call(null,vec__75576,(0),null);
return ((function (vec__75576,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__6221__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__75576,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq75573){
var G__75574 = cljs.core.first.call(null,seq75573);
var seq75573__$1 = cljs.core.next.call(null,seq75573);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__75574,seq75573__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__75584 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__75584__$1 = ((((!((map__75584 == null)))?((((map__75584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75584):map__75584);
var encoding = cljs.core.get.call(null,map__75584__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__75584__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__75590 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__75590__$1 = ((((!((map__75590 == null)))?((((map__75590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75590):map__75590);
var decoding = cljs.core.get.call(null,map__75590__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__75590__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__75590,map__75590__$1,decoding,decoding_opts){
return (function (p1__75586_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__75586_SHARP_,decoding,decoding_opts);
});})(map__75590,map__75590__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__75590,map__75590__$1,decoding,decoding_opts,transit_decode){
return (function (p1__75587_SHARP_){
return cljs_http.client.decode_body.call(null,p1__75587_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__75590,map__75590__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__75592_SHARP_){
return cljs_http.client.decode_body.call(null,p1__75592_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__75596){
var map__75597 = p__75596;
var map__75597__$1 = ((((!((map__75597 == null)))?((((map__75597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75597):map__75597);
var req = map__75597__$1;
var query_params = cljs.core.get.call(null,map__75597__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__75602){
var map__75603 = p__75602;
var map__75603__$1 = ((((!((map__75603 == null)))?((((map__75603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75603):map__75603);
var request = map__75603__$1;
var form_params = cljs.core.get.call(null,map__75603__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__75603__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__75603__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__6209__auto__ = form_params;
if(cljs.core.truth_(and__6209__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6209__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__75615_75625 = cljs.core.seq.call(null,params);
var chunk__75616_75626 = null;
var count__75617_75627 = (0);
var i__75618_75628 = (0);
while(true){
if((i__75618_75628 < count__75617_75627)){
var vec__75619_75629 = cljs.core._nth.call(null,chunk__75616_75626,i__75618_75628);
var k_75630 = cljs.core.nth.call(null,vec__75619_75629,(0),null);
var v_75631 = cljs.core.nth.call(null,vec__75619_75629,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_75631)){
form_data.append(cljs.core.name.call(null,k_75630),cljs.core.first.call(null,v_75631),cljs.core.second.call(null,v_75631));
} else {
form_data.append(cljs.core.name.call(null,k_75630),v_75631);
}

var G__75632 = seq__75615_75625;
var G__75633 = chunk__75616_75626;
var G__75634 = count__75617_75627;
var G__75635 = (i__75618_75628 + (1));
seq__75615_75625 = G__75632;
chunk__75616_75626 = G__75633;
count__75617_75627 = G__75634;
i__75618_75628 = G__75635;
continue;
} else {
var temp__4657__auto___75636 = cljs.core.seq.call(null,seq__75615_75625);
if(temp__4657__auto___75636){
var seq__75615_75637__$1 = temp__4657__auto___75636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75615_75637__$1)){
var c__7032__auto___75638 = cljs.core.chunk_first.call(null,seq__75615_75637__$1);
var G__75639 = cljs.core.chunk_rest.call(null,seq__75615_75637__$1);
var G__75640 = c__7032__auto___75638;
var G__75641 = cljs.core.count.call(null,c__7032__auto___75638);
var G__75642 = (0);
seq__75615_75625 = G__75639;
chunk__75616_75626 = G__75640;
count__75617_75627 = G__75641;
i__75618_75628 = G__75642;
continue;
} else {
var vec__75622_75643 = cljs.core.first.call(null,seq__75615_75637__$1);
var k_75644 = cljs.core.nth.call(null,vec__75622_75643,(0),null);
var v_75645 = cljs.core.nth.call(null,vec__75622_75643,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_75645)){
form_data.append(cljs.core.name.call(null,k_75644),cljs.core.first.call(null,v_75645),cljs.core.second.call(null,v_75645));
} else {
form_data.append(cljs.core.name.call(null,k_75644),v_75645);
}

var G__75646 = cljs.core.next.call(null,seq__75615_75637__$1);
var G__75647 = null;
var G__75648 = (0);
var G__75649 = (0);
seq__75615_75625 = G__75646;
chunk__75616_75626 = G__75647;
count__75617_75627 = G__75648;
i__75618_75628 = G__75649;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__75653){
var map__75654 = p__75653;
var map__75654__$1 = ((((!((map__75654 == null)))?((((map__75654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75654):map__75654);
var request = map__75654__$1;
var multipart_params = cljs.core.get.call(null,map__75654__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__75654__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__6209__auto__ = multipart_params;
if(cljs.core.truth_(and__6209__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6209__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__75656_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__75656_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__75661){
var map__75662 = p__75661;
var map__75662__$1 = ((((!((map__75662 == null)))?((((map__75662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75662):map__75662);
var req = map__75662__$1;
var query_params = cljs.core.get.call(null,map__75662__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__75662,map__75662__$1,req,query_params){
return (function (p1__75657_SHARP_){
return cljs.core.merge.call(null,p1__75657_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__75662,map__75662__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__7303__auto__ = [];
var len__7296__auto___75670 = arguments.length;
var i__7297__auto___75671 = (0);
while(true){
if((i__7297__auto___75671 < len__7296__auto___75670)){
args__7303__auto__.push((arguments[i__7297__auto___75671]));

var G__75672 = (i__7297__auto___75671 + (1));
i__7297__auto___75671 = G__75672;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__75666){
var vec__75667 = p__75666;
var credentials = cljs.core.nth.call(null,vec__75667,(0),null);
return ((function (vec__75667,credentials){
return (function (req){
var credentials__$1 = (function (){var or__6221__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__75667,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq75664){
var G__75665 = cljs.core.first.call(null,seq75664);
var seq75664__$1 = cljs.core.next.call(null,seq75664);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__75665,seq75664__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__7303__auto__ = [];
var len__7296__auto___75679 = arguments.length;
var i__7297__auto___75680 = (0);
while(true){
if((i__7297__auto___75680 < len__7296__auto___75679)){
args__7303__auto__.push((arguments[i__7297__auto___75680]));

var G__75681 = (i__7297__auto___75680 + (1));
i__7297__auto___75680 = G__75681;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__75675){
var vec__75676 = p__75675;
var req = cljs.core.nth.call(null,vec__75676,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq75673){
var G__75674 = cljs.core.first.call(null,seq75673);
var seq75673__$1 = cljs.core.next.call(null,seq75673);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__75674,seq75673__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__7303__auto__ = [];
var len__7296__auto___75688 = arguments.length;
var i__7297__auto___75689 = (0);
while(true){
if((i__7297__auto___75689 < len__7296__auto___75688)){
args__7303__auto__.push((arguments[i__7297__auto___75689]));

var G__75690 = (i__7297__auto___75689 + (1));
i__7297__auto___75689 = G__75690;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__75684){
var vec__75685 = p__75684;
var req = cljs.core.nth.call(null,vec__75685,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq75682){
var G__75683 = cljs.core.first.call(null,seq75682);
var seq75682__$1 = cljs.core.next.call(null,seq75682);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__75683,seq75682__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__7303__auto__ = [];
var len__7296__auto___75697 = arguments.length;
var i__7297__auto___75698 = (0);
while(true){
if((i__7297__auto___75698 < len__7296__auto___75697)){
args__7303__auto__.push((arguments[i__7297__auto___75698]));

var G__75699 = (i__7297__auto___75698 + (1));
i__7297__auto___75698 = G__75699;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__75693){
var vec__75694 = p__75693;
var req = cljs.core.nth.call(null,vec__75694,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq75691){
var G__75692 = cljs.core.first.call(null,seq75691);
var seq75691__$1 = cljs.core.next.call(null,seq75691);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__75692,seq75691__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__7303__auto__ = [];
var len__7296__auto___75706 = arguments.length;
var i__7297__auto___75707 = (0);
while(true){
if((i__7297__auto___75707 < len__7296__auto___75706)){
args__7303__auto__.push((arguments[i__7297__auto___75707]));

var G__75708 = (i__7297__auto___75707 + (1));
i__7297__auto___75707 = G__75708;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__75702){
var vec__75703 = p__75702;
var req = cljs.core.nth.call(null,vec__75703,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq75700){
var G__75701 = cljs.core.first.call(null,seq75700);
var seq75700__$1 = cljs.core.next.call(null,seq75700);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__75701,seq75700__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__7303__auto__ = [];
var len__7296__auto___75715 = arguments.length;
var i__7297__auto___75716 = (0);
while(true){
if((i__7297__auto___75716 < len__7296__auto___75715)){
args__7303__auto__.push((arguments[i__7297__auto___75716]));

var G__75717 = (i__7297__auto___75716 + (1));
i__7297__auto___75716 = G__75717;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__75711){
var vec__75712 = p__75711;
var req = cljs.core.nth.call(null,vec__75712,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq75709){
var G__75710 = cljs.core.first.call(null,seq75709);
var seq75709__$1 = cljs.core.next.call(null,seq75709);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__75710,seq75709__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__7303__auto__ = [];
var len__7296__auto___75724 = arguments.length;
var i__7297__auto___75725 = (0);
while(true){
if((i__7297__auto___75725 < len__7296__auto___75724)){
args__7303__auto__.push((arguments[i__7297__auto___75725]));

var G__75726 = (i__7297__auto___75725 + (1));
i__7297__auto___75725 = G__75726;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__75720){
var vec__75721 = p__75720;
var req = cljs.core.nth.call(null,vec__75721,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq75718){
var G__75719 = cljs.core.first.call(null,seq75718);
var seq75718__$1 = cljs.core.next.call(null,seq75718);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__75719,seq75718__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__7303__auto__ = [];
var len__7296__auto___75733 = arguments.length;
var i__7297__auto___75734 = (0);
while(true){
if((i__7297__auto___75734 < len__7296__auto___75733)){
args__7303__auto__.push((arguments[i__7297__auto___75734]));

var G__75735 = (i__7297__auto___75734 + (1));
i__7297__auto___75734 = G__75735;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__75729){
var vec__75730 = p__75729;
var req = cljs.core.nth.call(null,vec__75730,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq75727){
var G__75728 = cljs.core.first.call(null,seq75727);
var seq75727__$1 = cljs.core.next.call(null,seq75727);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__75728,seq75727__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__7303__auto__ = [];
var len__7296__auto___75742 = arguments.length;
var i__7297__auto___75743 = (0);
while(true){
if((i__7297__auto___75743 < len__7296__auto___75742)){
args__7303__auto__.push((arguments[i__7297__auto___75743]));

var G__75744 = (i__7297__auto___75743 + (1));
i__7297__auto___75743 = G__75744;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__75738){
var vec__75739 = p__75738;
var req = cljs.core.nth.call(null,vec__75739,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq75736){
var G__75737 = cljs.core.first.call(null,seq75736);
var seq75736__$1 = cljs.core.next.call(null,seq75736);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__75737,seq75736__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__7303__auto__ = [];
var len__7296__auto___75751 = arguments.length;
var i__7297__auto___75752 = (0);
while(true){
if((i__7297__auto___75752 < len__7296__auto___75751)){
args__7303__auto__.push((arguments[i__7297__auto___75752]));

var G__75753 = (i__7297__auto___75752 + (1));
i__7297__auto___75752 = G__75753;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__75747){
var vec__75748 = p__75747;
var req = cljs.core.nth.call(null,vec__75748,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq75745){
var G__75746 = cljs.core.first.call(null,seq75745);
var seq75745__$1 = cljs.core.next.call(null,seq75745);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__75746,seq75745__$1);
});


//# sourceMappingURL=client.js.map