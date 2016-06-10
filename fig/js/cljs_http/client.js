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
if(cljs.core.truth_((function (){var and__22603__auto__ = v;
if(cljs.core.truth_(and__22603__auto__)){
return (v > (0));
} else {
return and__22603__auto__;
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
return cljs.core.reduce.call(null,(function (p1__42528_SHARP_,p2__42527_SHARP_){
var vec__42532 = clojure.string.split.call(null,p2__42527_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__42532,(0),null);
var v = cljs.core.nth.call(null,vec__42532,(1),null);
return cljs.core.assoc.call(null,p1__42528_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__42535_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__42535_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__42536){
var vec__42540 = p__42536;
var k = cljs.core.nth.call(null,vec__42540,(0),null);
var v = cljs.core.nth.call(null,vec__42540,(1),null);
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
return (function (p1__42543_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__42543_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__22603__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__22603__auto__){
var and__22603__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__22603__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__22603__auto____$1;
}
} else {
return and__22603__auto__;
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
return cljs.core.async.map.call(null,(function (p1__42544_SHARP_){
return cljs_http.client.decode_body.call(null,p1__42544_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__23697__auto__ = [];
var len__23690__auto___42551 = arguments.length;
var i__23691__auto___42552 = (0);
while(true){
if((i__23691__auto___42552 < len__23690__auto___42551)){
args__23697__auto__.push((arguments[i__23691__auto___42552]));

var G__42553 = (i__23691__auto___42552 + (1));
i__23691__auto___42552 = G__42553;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((1) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23698__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__42547){
var vec__42548 = p__42547;
var default_headers = cljs.core.nth.call(null,vec__42548,(0),null);
return ((function (vec__42548,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__22615__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
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
;})(vec__42548,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq42545){
var G__42546 = cljs.core.first.call(null,seq42545);
var seq42545__$1 = cljs.core.next.call(null,seq42545);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__42546,seq42545__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__23697__auto__ = [];
var len__23690__auto___42560 = arguments.length;
var i__23691__auto___42561 = (0);
while(true){
if((i__23691__auto___42561 < len__23690__auto___42560)){
args__23697__auto__.push((arguments[i__23691__auto___42561]));

var G__42562 = (i__23691__auto___42561 + (1));
i__23691__auto___42561 = G__42562;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((1) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23698__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__42556){
var vec__42557 = p__42556;
var accept = cljs.core.nth.call(null,vec__42557,(0),null);
return ((function (vec__42557,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__22615__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
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
;})(vec__42557,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq42554){
var G__42555 = cljs.core.first.call(null,seq42554);
var seq42554__$1 = cljs.core.next.call(null,seq42554);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__42555,seq42554__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__23697__auto__ = [];
var len__23690__auto___42569 = arguments.length;
var i__23691__auto___42570 = (0);
while(true){
if((i__23691__auto___42570 < len__23690__auto___42569)){
args__23697__auto__.push((arguments[i__23691__auto___42570]));

var G__42571 = (i__23691__auto___42570 + (1));
i__23691__auto___42570 = G__42571;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((1) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23698__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__42565){
var vec__42566 = p__42565;
var content_type = cljs.core.nth.call(null,vec__42566,(0),null);
return ((function (vec__42566,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__22615__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
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
;})(vec__42566,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq42563){
var G__42564 = cljs.core.first.call(null,seq42563);
var seq42563__$1 = cljs.core.next.call(null,seq42563);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__42564,seq42563__$1);
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
var map__42574 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__42574__$1 = ((((!((map__42574 == null)))?((((map__42574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42574):map__42574);
var encoding = cljs.core.get.call(null,map__42574__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__42574__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__42580 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__42580__$1 = ((((!((map__42580 == null)))?((((map__42580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42580):map__42580);
var decoding = cljs.core.get.call(null,map__42580__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__42580__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__42580,map__42580__$1,decoding,decoding_opts){
return (function (p1__42576_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__42576_SHARP_,decoding,decoding_opts);
});})(map__42580,map__42580__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__42580,map__42580__$1,decoding,decoding_opts,transit_decode){
return (function (p1__42577_SHARP_){
return cljs_http.client.decode_body.call(null,p1__42577_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__42580,map__42580__$1,decoding,decoding_opts,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__42582_SHARP_){
return cljs_http.client.decode_body.call(null,p1__42582_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__42586){
var map__42587 = p__42586;
var map__42587__$1 = ((((!((map__42587 == null)))?((((map__42587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42587):map__42587);
var req = map__42587__$1;
var query_params = cljs.core.get.call(null,map__42587__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__42592){
var map__42593 = p__42592;
var map__42593__$1 = ((((!((map__42593 == null)))?((((map__42593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42593):map__42593);
var request = map__42593__$1;
var form_params = cljs.core.get.call(null,map__42593__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__42593__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__42593__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__22603__auto__ = form_params;
if(cljs.core.truth_(and__22603__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__22603__auto__;
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
var seq__42605_42615 = cljs.core.seq.call(null,params);
var chunk__42606_42616 = null;
var count__42607_42617 = (0);
var i__42608_42618 = (0);
while(true){
if((i__42608_42618 < count__42607_42617)){
var vec__42609_42619 = cljs.core._nth.call(null,chunk__42606_42616,i__42608_42618);
var k_42620 = cljs.core.nth.call(null,vec__42609_42619,(0),null);
var v_42621 = cljs.core.nth.call(null,vec__42609_42619,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_42621)){
form_data.append(cljs.core.name.call(null,k_42620),cljs.core.first.call(null,v_42621),cljs.core.second.call(null,v_42621));
} else {
form_data.append(cljs.core.name.call(null,k_42620),v_42621);
}

var G__42622 = seq__42605_42615;
var G__42623 = chunk__42606_42616;
var G__42624 = count__42607_42617;
var G__42625 = (i__42608_42618 + (1));
seq__42605_42615 = G__42622;
chunk__42606_42616 = G__42623;
count__42607_42617 = G__42624;
i__42608_42618 = G__42625;
continue;
} else {
var temp__4657__auto___42626 = cljs.core.seq.call(null,seq__42605_42615);
if(temp__4657__auto___42626){
var seq__42605_42627__$1 = temp__4657__auto___42626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42605_42627__$1)){
var c__23426__auto___42628 = cljs.core.chunk_first.call(null,seq__42605_42627__$1);
var G__42629 = cljs.core.chunk_rest.call(null,seq__42605_42627__$1);
var G__42630 = c__23426__auto___42628;
var G__42631 = cljs.core.count.call(null,c__23426__auto___42628);
var G__42632 = (0);
seq__42605_42615 = G__42629;
chunk__42606_42616 = G__42630;
count__42607_42617 = G__42631;
i__42608_42618 = G__42632;
continue;
} else {
var vec__42612_42633 = cljs.core.first.call(null,seq__42605_42627__$1);
var k_42634 = cljs.core.nth.call(null,vec__42612_42633,(0),null);
var v_42635 = cljs.core.nth.call(null,vec__42612_42633,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_42635)){
form_data.append(cljs.core.name.call(null,k_42634),cljs.core.first.call(null,v_42635),cljs.core.second.call(null,v_42635));
} else {
form_data.append(cljs.core.name.call(null,k_42634),v_42635);
}

var G__42636 = cljs.core.next.call(null,seq__42605_42627__$1);
var G__42637 = null;
var G__42638 = (0);
var G__42639 = (0);
seq__42605_42615 = G__42636;
chunk__42606_42616 = G__42637;
count__42607_42617 = G__42638;
i__42608_42618 = G__42639;
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
return (function (p__42643){
var map__42644 = p__42643;
var map__42644__$1 = ((((!((map__42644 == null)))?((((map__42644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42644):map__42644);
var request = map__42644__$1;
var multipart_params = cljs.core.get.call(null,map__42644__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__42644__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__22603__auto__ = multipart_params;
if(cljs.core.truth_(and__22603__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__22603__auto__;
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
return (function (p1__42646_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__42646_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__42651){
var map__42652 = p__42651;
var map__42652__$1 = ((((!((map__42652 == null)))?((((map__42652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42652):map__42652);
var req = map__42652__$1;
var query_params = cljs.core.get.call(null,map__42652__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__42652,map__42652__$1,req,query_params){
return (function (p1__42647_SHARP_){
return cljs.core.merge.call(null,p1__42647_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__42652,map__42652__$1,req,query_params))
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
var args__23697__auto__ = [];
var len__23690__auto___42660 = arguments.length;
var i__23691__auto___42661 = (0);
while(true){
if((i__23691__auto___42661 < len__23690__auto___42660)){
args__23697__auto__.push((arguments[i__23691__auto___42661]));

var G__42662 = (i__23691__auto___42661 + (1));
i__23691__auto___42661 = G__42662;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((1) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23698__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__42656){
var vec__42657 = p__42656;
var credentials = cljs.core.nth.call(null,vec__42657,(0),null);
return ((function (vec__42657,credentials){
return (function (req){
var credentials__$1 = (function (){var or__22615__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
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
;})(vec__42657,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq42654){
var G__42655 = cljs.core.first.call(null,seq42654);
var seq42654__$1 = cljs.core.next.call(null,seq42654);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__42655,seq42654__$1);
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
var args__23697__auto__ = [];
var len__23690__auto___42669 = arguments.length;
var i__23691__auto___42670 = (0);
while(true){
if((i__23691__auto___42670 < len__23690__auto___42669)){
args__23697__auto__.push((arguments[i__23691__auto___42670]));

var G__42671 = (i__23691__auto___42670 + (1));
i__23691__auto___42670 = G__42671;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((1) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23698__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__42665){
var vec__42666 = p__42665;
var req = cljs.core.nth.call(null,vec__42666,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq42663){
var G__42664 = cljs.core.first.call(null,seq42663);
var seq42663__$1 = cljs.core.next.call(null,seq42663);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__42664,seq42663__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__23697__auto__ = [];
var len__23690__auto___42678 = arguments.length;
var i__23691__auto___42679 = (0);
while(true){
if((i__23691__auto___42679 < len__23690__auto___42678)){
args__23697__auto__.push((arguments[i__23691__auto___42679]));

var G__42680 = (i__23691__auto___42679 + (1));
i__23691__auto___42679 = G__42680;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((1) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23698__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__42674){
var vec__42675 = p__42674;
var req = cljs.core.nth.call(null,vec__42675,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq42672){
var G__42673 = cljs.core.first.call(null,seq42672);
var seq42672__$1 = cljs.core.next.call(null,seq42672);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__42673,seq42672__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__23697__auto__ = [];
var len__23690__auto___42687 = arguments.length;
var i__23691__auto___42688 = (0);
while(true){
if((i__23691__auto___42688 < len__23690__auto___42687)){
args__23697__auto__.push((arguments[i__23691__auto___42688]));

var G__42689 = (i__23691__auto___42688 + (1));
i__23691__auto___42688 = G__42689;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((1) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23698__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__42683){
var vec__42684 = p__42683;
var req = cljs.core.nth.call(null,vec__42684,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq42681){
var G__42682 = cljs.core.first.call(null,seq42681);
var seq42681__$1 = cljs.core.next.call(null,seq42681);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__42682,seq42681__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__23697__auto__ = [];
var len__23690__auto___42696 = arguments.length;
var i__23691__auto___42697 = (0);
while(true){
if((i__23691__auto___42697 < len__23690__auto___42696)){
args__23697__auto__.push((arguments[i__23691__auto___42697]));

var G__42698 = (i__23691__auto___42697 + (1));
i__23691__auto___42697 = G__42698;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((1) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23698__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__42692){
var vec__42693 = p__42692;
var req = cljs.core.nth.call(null,vec__42693,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq42690){
var G__42691 = cljs.core.first.call(null,seq42690);
var seq42690__$1 = cljs.core.next.call(null,seq42690);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__42691,seq42690__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__23697__auto__ = [];
var len__23690__auto___42705 = arguments.length;
var i__23691__auto___42706 = (0);
while(true){
if((i__23691__auto___42706 < len__23690__auto___42705)){
args__23697__auto__.push((arguments[i__23691__auto___42706]));

var G__42707 = (i__23691__auto___42706 + (1));
i__23691__auto___42706 = G__42707;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((1) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23698__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__42701){
var vec__42702 = p__42701;
var req = cljs.core.nth.call(null,vec__42702,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq42699){
var G__42700 = cljs.core.first.call(null,seq42699);
var seq42699__$1 = cljs.core.next.call(null,seq42699);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__42700,seq42699__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__23697__auto__ = [];
var len__23690__auto___42714 = arguments.length;
var i__23691__auto___42715 = (0);
while(true){
if((i__23691__auto___42715 < len__23690__auto___42714)){
args__23697__auto__.push((arguments[i__23691__auto___42715]));

var G__42716 = (i__23691__auto___42715 + (1));
i__23691__auto___42715 = G__42716;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((1) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23698__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__42710){
var vec__42711 = p__42710;
var req = cljs.core.nth.call(null,vec__42711,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq42708){
var G__42709 = cljs.core.first.call(null,seq42708);
var seq42708__$1 = cljs.core.next.call(null,seq42708);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__42709,seq42708__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__23697__auto__ = [];
var len__23690__auto___42723 = arguments.length;
var i__23691__auto___42724 = (0);
while(true){
if((i__23691__auto___42724 < len__23690__auto___42723)){
args__23697__auto__.push((arguments[i__23691__auto___42724]));

var G__42725 = (i__23691__auto___42724 + (1));
i__23691__auto___42724 = G__42725;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((1) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23698__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__42719){
var vec__42720 = p__42719;
var req = cljs.core.nth.call(null,vec__42720,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq42717){
var G__42718 = cljs.core.first.call(null,seq42717);
var seq42717__$1 = cljs.core.next.call(null,seq42717);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__42718,seq42717__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__23697__auto__ = [];
var len__23690__auto___42732 = arguments.length;
var i__23691__auto___42733 = (0);
while(true){
if((i__23691__auto___42733 < len__23690__auto___42732)){
args__23697__auto__.push((arguments[i__23691__auto___42733]));

var G__42734 = (i__23691__auto___42733 + (1));
i__23691__auto___42733 = G__42734;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((1) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23698__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__42728){
var vec__42729 = p__42728;
var req = cljs.core.nth.call(null,vec__42729,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq42726){
var G__42727 = cljs.core.first.call(null,seq42726);
var seq42726__$1 = cljs.core.next.call(null,seq42726);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__42727,seq42726__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__23697__auto__ = [];
var len__23690__auto___42741 = arguments.length;
var i__23691__auto___42742 = (0);
while(true){
if((i__23691__auto___42742 < len__23690__auto___42741)){
args__23697__auto__.push((arguments[i__23691__auto___42742]));

var G__42743 = (i__23691__auto___42742 + (1));
i__23691__auto___42742 = G__42743;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((1) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23698__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__42737){
var vec__42738 = p__42737;
var req = cljs.core.nth.call(null,vec__42738,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq42735){
var G__42736 = cljs.core.first.call(null,seq42735);
var seq42735__$1 = cljs.core.next.call(null,seq42735);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__42736,seq42735__$1);
});


//# sourceMappingURL=client.js.map?rel=1465451170564