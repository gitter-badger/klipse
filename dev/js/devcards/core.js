// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__6221__auto__ = (function (){var and__6209__auto__ = typeof Symbol !== 'undefined';
if(and__6209__auto__){
var and__6209__auto____$1 = cljs.core.fn_QMARK_(Symbol);
if(and__6209__auto____$1){
var and__6209__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__6209__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__6209__auto____$2;
}
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})();
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__31416_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsreload,p1__31416_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_(m)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$propagated_DASH_errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil.",cljs.core.cst$kw$value,m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args31423 = [];
var len__7296__auto___31429 = arguments.length;
var i__7297__auto___31431 = (0);
while(true){
if((i__7297__auto___31431 < len__7296__auto___31429)){
args31423.push((arguments[i__7297__auto___31431]));

var G__31432 = (i__7297__auto___31431 + (1));
i__7297__auto___31431 = G__31432;
continue;
} else {
}
break;
}

var G__31425 = args31423.length;
switch (G__31425) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31423.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_(options)) && (cljs.core.map_QMARK_(cljs.core.cst$kw$default_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base_DASH_card_DASH_options], null),(function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,cljs.core.cst$kw$default_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(options)], 0));
}));
} else {
}

devcards.system.start_ui(devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_();
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__6209__auto__ = cljs.core.map_QMARK_(c);
if(and__6209__auto__){
var map__31444 = c;
var map__31444__$1 = ((((!((map__31444 == null)))?((((map__31444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31444):map__31444);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31444__$1,cljs.core.cst$kw$path);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31444__$1,cljs.core.cst$kw$func);
cljs.core.vector_QMARK_(path);

cljs.core.not_empty(path);

cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_(func);
} else {
return and__6209__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_(c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$register_DASH_card,c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str(cljs.core.hash(raw_html_str))].join(''),cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = (devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2 ? devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2(this$,"code-ref") : devcards.core.ref__GT_node.call(null,this$,"code-ref"));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs();
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return (highlight_block.cljs$core$IFn$_invoke$arity$1 ? highlight_block.cljs$core$IFn$_invoke$arity$1(node) : highlight_block.call(null,node));
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
var base__20888__auto___31482 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "render": (function (){
var this$ = this;
var G__31472 = "pre";
var G__31473 = {"className": (cljs.core.truth_(devcards.core.get_hljs())?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash((devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$code) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$code)))};
var G__31474 = (function (){var G__31475 = "code";
var G__31476 = {"className": (function (){var or__6221__auto__ = (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$lang) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$lang));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return "";
}
})(), "ref": "code-ref"};
var G__31477 = sablono.interpreter.interpret((devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$code) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$code)));
return React.createElement(G__31475,G__31476,G__31477);
})();
return React.createElement(G__31472,G__31473,G__31474);
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__20888__auto___31482);
}

var seq__31478_31491 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__31479_31492 = null;
var count__31480_31493 = (0);
var i__31481_31494 = (0);
while(true){
if((i__31481_31494 < count__31480_31493)){
var property__20889__auto___31495 = chunk__31479_31492.cljs$core$IIndexed$_nth$arity$2(null,i__31481_31494);
if(cljs.core.truth_((base__20888__auto___31482[property__20889__auto___31495]))){
(devcards.core.CodeHighlight.prototype[property__20889__auto___31495] = (base__20888__auto___31482[property__20889__auto___31495]));
} else {
}

var G__31497 = seq__31478_31491;
var G__31498 = chunk__31479_31492;
var G__31499 = count__31480_31493;
var G__31500 = (i__31481_31494 + (1));
seq__31478_31491 = G__31497;
chunk__31479_31492 = G__31498;
count__31480_31493 = G__31499;
i__31481_31494 = G__31500;
continue;
} else {
var temp__4657__auto___31501 = cljs.core.seq(seq__31478_31491);
if(temp__4657__auto___31501){
var seq__31478_31502__$1 = temp__4657__auto___31501;
if(cljs.core.chunked_seq_QMARK_(seq__31478_31502__$1)){
var c__7032__auto___31503 = cljs.core.chunk_first(seq__31478_31502__$1);
var G__31504 = cljs.core.chunk_rest(seq__31478_31502__$1);
var G__31505 = c__7032__auto___31503;
var G__31506 = cljs.core.count(c__7032__auto___31503);
var G__31507 = (0);
seq__31478_31491 = G__31504;
chunk__31479_31492 = G__31505;
count__31480_31493 = G__31506;
i__31481_31494 = G__31507;
continue;
} else {
var property__20889__auto___31509 = cljs.core.first(seq__31478_31502__$1);
if(cljs.core.truth_((base__20888__auto___31482[property__20889__auto___31509]))){
(devcards.core.CodeHighlight.prototype[property__20889__auto___31509] = (base__20888__auto___31482[property__20889__auto___31509]));
} else {
}

var G__31511 = cljs.core.next(seq__31478_31502__$1);
var G__31512 = null;
var G__31513 = (0);
var G__31514 = (0);
seq__31478_31491 = G__31511;
chunk__31479_31492 = G__31512;
count__31480_31493 = G__31513;
i__31481_31494 = G__31514;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
var G__31517 = devcards.core.CodeHighlight;
var G__31518 = {"code": code_str, "lang": lang};
return React.createElement(G__31517,G__31518);
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__7146__auto__ = (function (){var G__31519 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31519) : cljs.core.atom.call(null,G__31519));
})();
var prefer_table__7147__auto__ = (function (){var G__31520 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31520) : cljs.core.atom.call(null,G__31520));
})();
var method_cache__7148__auto__ = (function (){var G__31521 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31521) : cljs.core.atom.call(null,G__31521));
})();
var cached_hierarchy__7149__auto__ = (function (){var G__31522 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31522) : cljs.core.atom.call(null,G__31522));
})();
var hierarchy__7150__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__7150__auto__,method_table__7146__auto__,prefer_table__7147__auto__,method_cache__7148__auto__,cached_hierarchy__7149__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__31523){
var map__31524 = p__31523;
var map__31524__$1 = ((((!((map__31524 == null)))?((((map__31524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31524):map__31524);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31524__$1,cljs.core.cst$kw$content);
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$code_DASH_block,(function (p__31533){
var map__31534 = p__31533;
var map__31534__$1 = ((((!((map__31534 == null)))?((((map__31534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31534):map__31534);
var block = map__31534__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31534__$1,cljs.core.cst$kw$content);
var G__31536 = devcards.core.CodeHighlight;
var G__31537 = {"code": cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(block), "lang": cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(block)};
return React.createElement(G__31536,G__31537);
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__7303__auto__ = [];
var len__7296__auto___31562 = arguments.length;
var i__7297__auto___31563 = (0);
while(true){
if((i__7297__auto___31563 < len__7296__auto___31562)){
args__7303__auto__.push((arguments[i__7297__auto___31563]));

var G__31564 = (i__7297__auto___31563 + (1));
i__7297__auto___31563 = G__31564;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : devcards.core.react_element_QMARK_.call(null,x)))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code(x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(devcards.util.markdown.parse_out_blocks,cljs.core.array_seq([strs__$1], 0));
var G__31553 = "div";
var G__31554 = {"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"};
var G__31555 = sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__31553,G__31554,blocks,strs__$1){
return (function (i,data){
var G__31556 = "div";
var G__31557 = {"key": i};
var G__31558 = sablono.interpreter.interpret((devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1 ? devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1(data) : devcards.core.markdown_block__GT_react.call(null,data)));
return React.createElement(G__31556,G__31557,G__31558);
});})(G__31553,G__31554,blocks,strs__$1))
,blocks));
return React.createElement(G__31553,G__31554,G__31555);
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__31559 = "div";
var G__31560 = {"style": {"color": "#a94442"}, "key": "devcards-markdown-error"};
var G__31561 = sablono.interpreter.interpret(message);
return React.createElement(G__31559,G__31560,G__31561);
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq31552){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31552));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$classname], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$padding], null));
var G__31608 = "div";
var G__31609 = {"key": "devcards_naked-card", "className": (function (){var G__31611 = devcards.system.devcards_rendered_card_class;
var G__31611__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__31611),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__31611);
if(cljs.core.truth_(cljs.core.not_empty(classname))){
return [cljs.core.str(G__31611__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__31611__$1;
}
})()};
var G__31610 = sablono.interpreter.interpret(children);
return React.createElement(G__31608,G__31609,G__31610);
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args31622 = [];
var len__7296__auto___31670 = arguments.length;
var i__7297__auto___31680 = (0);
while(true){
if((i__7297__auto___31680 < len__7296__auto___31670)){
args31622.push((arguments[i__7297__auto___31680]));

var G__31683 = (i__7297__auto___31680 + (1));
i__7297__auto___31680 = G__31683;
continue;
} else {
}
break;
}

var G__31625 = args31622.length;
switch (G__31625) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31622.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__31626 = card;
var map__31626__$1 = ((((!((map__31626 == null)))?((((map__31626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31626):map__31626);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31626__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31626__$1,cljs.core.cst$kw$options);
if(cljs.core.not(cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.cst$kw$heading.cljs$core$IFn$_invoke$arity$1(options) === false){
var G__31631 = "div";
var G__31632 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": sablono.util.join_classes(cljs.core.PersistentHashSet.fromArray([[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$hide_DASH_border.cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], true))};
var G__31633 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__31631,G__31632,G__31633);
} else {
var G__31646 = "div";
var G__31647 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"};
var G__31648 = (function (){var G__31651 = "div";
var G__31652 = {"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"};
var G__31653 = (cljs.core.truth_(path)?sablono.interpreter.interpret((function (){var G__31655 = "a";
var G__31656 = {"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__31655,G__31651,G__31652,G__31646,G__31647,map__31626,map__31626__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__31655,G__31651,G__31652,G__31646,G__31647,map__31626,map__31626__$1,path,options))
)};
var G__31657 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__31658 = " ";
return React.createElement(G__31655,G__31656,G__31657,G__31658);
})()):sablono.interpreter.interpret((function (){var attrs31661 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs31661))?sablono.interpreter.attributes(attrs31661):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs31661))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs31661)], null))));
})()));
return React.createElement(G__31651,G__31652,G__31653);
})();
var G__31649 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__31646,G__31647,G__31648,G__31649);
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__6884__auto__ = (((this$ == null))?null:this$);
var m__6885__auto__ = (devcards.core._devcard_options[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__6885__auto__.call(null,this$,devcard_opts));
} else {
var m__6885__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__6885__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__6884__auto__ = (((this$ == null))?null:this$);
var m__6885__auto__ = (devcards.core._devcard[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__6885__auto__.call(null,this$,devcard_opts));
} else {
var m__6885__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__6885__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name(k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name(k)]);
} else {
return null;
}
});
var base__20888__auto___31707 = {"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((next_props["change_count"]),devcards.core.get_props(this$,cljs.core.cst$kw$change_count));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs31702 = devcards.core.get_props(this$,cljs.core.cst$kw$children_thunk);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs31702))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-dont-update",null], null), null)], null),attrs31702], 0))):{"className": "com-rigsomelight-dont-update"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs31702))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs31702)], null))));
})};
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__20888__auto___31707);
}

var seq__31703_31708 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__31704_31709 = null;
var count__31705_31710 = (0);
var i__31706_31711 = (0);
while(true){
if((i__31706_31711 < count__31705_31710)){
var property__20889__auto___31712 = chunk__31704_31709.cljs$core$IIndexed$_nth$arity$2(null,i__31706_31711);
if(cljs.core.truth_((base__20888__auto___31707[property__20889__auto___31712]))){
(devcards.core.DontUpdate.prototype[property__20889__auto___31712] = (base__20888__auto___31707[property__20889__auto___31712]));
} else {
}

var G__31713 = seq__31703_31708;
var G__31714 = chunk__31704_31709;
var G__31715 = count__31705_31710;
var G__31716 = (i__31706_31711 + (1));
seq__31703_31708 = G__31713;
chunk__31704_31709 = G__31714;
count__31705_31710 = G__31715;
i__31706_31711 = G__31716;
continue;
} else {
var temp__4657__auto___31717 = cljs.core.seq(seq__31703_31708);
if(temp__4657__auto___31717){
var seq__31703_31718__$1 = temp__4657__auto___31717;
if(cljs.core.chunked_seq_QMARK_(seq__31703_31718__$1)){
var c__7032__auto___31719 = cljs.core.chunk_first(seq__31703_31718__$1);
var G__31720 = cljs.core.chunk_rest(seq__31703_31718__$1);
var G__31721 = c__7032__auto___31719;
var G__31722 = cljs.core.count(c__7032__auto___31719);
var G__31723 = (0);
seq__31703_31708 = G__31720;
chunk__31704_31709 = G__31721;
count__31705_31710 = G__31722;
i__31706_31711 = G__31723;
continue;
} else {
var property__20889__auto___31724 = cljs.core.first(seq__31703_31718__$1);
if(cljs.core.truth_((base__20888__auto___31707[property__20889__auto___31724]))){
(devcards.core.DontUpdate.prototype[property__20889__auto___31724] = (base__20888__auto___31707[property__20889__auto___31724]));
} else {
}

var G__31725 = cljs.core.next(seq__31703_31718__$1);
var G__31726 = null;
var G__31727 = (0);
var G__31728 = (0);
seq__31703_31708 = G__31725;
chunk__31704_31709 = G__31726;
count__31705_31710 = G__31727;
i__31706_31711 = G__31728;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
var G__31731 = devcards.core.DontUpdate;
var G__31732 = {"change_count": change_count, "children_thunk": children_thunk};
return React.createElement(G__31731,G__31732);
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__6221__auto__ = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(devcards.core.get_props(this$,cljs.core.cst$kw$card));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data))){
return data;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.atom.call(null,data));
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
return devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
}):(function (this$){
return devcards.core.wrangle_inital_data(this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_(m)){
return (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(data_atom,parent_elem) : m.call(null,data_atom,parent_elem));
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(main_obj_SINGLEQUOTE_) : devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_)))))?devcards.core.code_highlight(devcards.util.utils.pprint_code(main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(cljs.core.cst$kw$watch_DASH_atom.cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update(change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(options))?(devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1(data_atom) : devcards.core.hist_recorder_STAR_.call(null,data_atom)):null);
var document = (function (){var temp__4657__auto__ = cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([docu], 0));
} else {
return null;
}
})();
var edn = (cljs.core.truth_(cljs.core.cst$kw$inspect_DASH_data.cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom))):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$hide_DASH_border], null),true):card);
var main__$1 = (function (){var G__31747 = "div";
var G__31748 = {"key": "devcards-main-section"};
var G__31749 = sablono.interpreter.interpret(main);
return React.createElement(G__31747,G__31748,G__31749);
})();
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var x__7055__auto__ = document;
return cljs.core._conj((function (){var x__7055__auto____$1 = main__$1;
return cljs.core._conj((function (){var x__7055__auto____$2 = hist_ctl;
return cljs.core._conj((function (){var x__7055__auto____$3 = edn;
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto____$3);
})(),x__7055__auto____$2);
})(),x__7055__auto____$1);
})(),x__7055__auto__);
})());
if(cljs.core.truth_(cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,card__$1);
} else {
var G__31750 = "div";
var G__31751 = {"className": "com-rigsomelight-devcards-frameless"};
var G__31752 = sablono.interpreter.interpret(children);
return React.createElement(G__31750,G__31751,G__31752);
}
});
var base__20888__auto___31766 = {"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_base_DASH_), "state_change_count": (0)};
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(cljs.core.cst$kw$static_DASH_state.cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_((devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1(initial_data) : devcards.core.atom_like_QMARK_.call(null,initial_data)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(initial_data) : cljs.core.deref.call(null,initial_data)):initial_data);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)),data)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom,data) : cljs.core.reset_BANG_.call(null,atom,data));
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
return this$.setState((function (){var or__6221__auto__ = (function (){var and__6209__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(and__6209__auto__)){
return this$.state;
} else {
return and__6209__auto__;
}
})();
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return {"data_atom": devcards.core.wrangle_inital_data(this$)};
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_((function (){var and__6209__auto__ = data_atom;
if(cljs.core.truth_(and__6209__auto__)){
return id;
} else {
return and__6209__auto__;
}
})())){
return cljs.core.remove_watch(data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch(data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState({"state_change_count": (devcards.core.get_state(this$,cljs.core.cst$kw$state_change_count) + (1))});
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = (devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.get_data_atom.call(null,this$));
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var change_count = devcards.core.get_state(this$,cljs.core.cst$kw$state_change_count);
var main = devcards.core.default_derive_main(this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements(main,data_atom,card);
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__20888__auto___31766);
}

var seq__31762_31767 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__31763_31768 = null;
var count__31764_31769 = (0);
var i__31765_31770 = (0);
while(true){
if((i__31765_31770 < count__31764_31769)){
var property__20889__auto___31771 = chunk__31763_31768.cljs$core$IIndexed$_nth$arity$2(null,i__31765_31770);
if(cljs.core.truth_((base__20888__auto___31766[property__20889__auto___31771]))){
(devcards.core.DevcardBase.prototype[property__20889__auto___31771] = (base__20888__auto___31766[property__20889__auto___31771]));
} else {
}

var G__31772 = seq__31762_31767;
var G__31773 = chunk__31763_31768;
var G__31774 = count__31764_31769;
var G__31775 = (i__31765_31770 + (1));
seq__31762_31767 = G__31772;
chunk__31763_31768 = G__31773;
count__31764_31769 = G__31774;
i__31765_31770 = G__31775;
continue;
} else {
var temp__4657__auto___31776 = cljs.core.seq(seq__31762_31767);
if(temp__4657__auto___31776){
var seq__31762_31777__$1 = temp__4657__auto___31776;
if(cljs.core.chunked_seq_QMARK_(seq__31762_31777__$1)){
var c__7032__auto___31778 = cljs.core.chunk_first(seq__31762_31777__$1);
var G__31779 = cljs.core.chunk_rest(seq__31762_31777__$1);
var G__31780 = c__7032__auto___31778;
var G__31781 = cljs.core.count(c__7032__auto___31778);
var G__31782 = (0);
seq__31762_31767 = G__31779;
chunk__31763_31768 = G__31780;
count__31764_31769 = G__31781;
i__31765_31770 = G__31782;
continue;
} else {
var property__20889__auto___31785 = cljs.core.first(seq__31762_31777__$1);
if(cljs.core.truth_((base__20888__auto___31766[property__20889__auto___31785]))){
(devcards.core.DevcardBase.prototype[property__20889__auto___31785] = (base__20888__auto___31766[property__20889__auto___31785]));
} else {
}

var G__31786 = cljs.core.next(seq__31762_31777__$1);
var G__31787 = null;
var G__31788 = (0);
var G__31789 = (0);
seq__31762_31767 = G__31786;
chunk__31763_31768 = G__31787;
count__31764_31769 = G__31788;
i__31765_31770 = G__31789;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
var temp__4657__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
var G__31790 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__31791 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__31790,G__31791) : node_fn.call(null,G__31790,G__31791));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__20888__auto___31841 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_dom_DASH_component_DASH_))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__6209__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.get_props(this$,cljs.core.cst$kw$node_fn),(prevP["node_fn"]));
} else {
return and__6209__auto__;
}
})())){
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var G__31819 = {"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,cljs.core.cst$kw$unique_id)};
var G__31820 = "Card has not mounted DOM node.";
return React.DOM.div(G__31819,G__31820);
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__20888__auto___31841);
}

var seq__31822_31855 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__31823_31856 = null;
var count__31824_31857 = (0);
var i__31825_31858 = (0);
while(true){
if((i__31825_31858 < count__31824_31857)){
var property__20889__auto___31859 = chunk__31823_31856.cljs$core$IIndexed$_nth$arity$2(null,i__31825_31858);
if(cljs.core.truth_((base__20888__auto___31841[property__20889__auto___31859]))){
(devcards.core.DomComponent.prototype[property__20889__auto___31859] = (base__20888__auto___31841[property__20889__auto___31859]));
} else {
}

var G__31860 = seq__31822_31855;
var G__31862 = chunk__31823_31856;
var G__31863 = count__31824_31857;
var G__31864 = (i__31825_31858 + (1));
seq__31822_31855 = G__31860;
chunk__31823_31856 = G__31862;
count__31824_31857 = G__31863;
i__31825_31858 = G__31864;
continue;
} else {
var temp__4657__auto___31866 = cljs.core.seq(seq__31822_31855);
if(temp__4657__auto___31866){
var seq__31822_31867__$1 = temp__4657__auto___31866;
if(cljs.core.chunked_seq_QMARK_(seq__31822_31867__$1)){
var c__7032__auto___31869 = cljs.core.chunk_first(seq__31822_31867__$1);
var G__31870 = cljs.core.chunk_rest(seq__31822_31867__$1);
var G__31871 = c__7032__auto___31869;
var G__31872 = cljs.core.count(c__7032__auto___31869);
var G__31873 = (0);
seq__31822_31855 = G__31870;
chunk__31823_31856 = G__31871;
count__31824_31857 = G__31872;
i__31825_31858 = G__31873;
continue;
} else {
var property__20889__auto___31875 = cljs.core.first(seq__31822_31867__$1);
if(cljs.core.truth_((base__20888__auto___31841[property__20889__auto___31875]))){
(devcards.core.DomComponent.prototype[property__20889__auto___31875] = (base__20888__auto___31841[property__20889__auto___31875]));
} else {
}

var G__31876 = cljs.core.next(seq__31822_31867__$1);
var G__31877 = null;
var G__31878 = (0);
var G__31879 = (0);
seq__31822_31855 = G__31876;
chunk__31823_31856 = G__31877;
count__31824_31857 = G__31878;
i__31825_31858 = G__31879;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__6221__auto__ = x === true;
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = x === false;
if(or__6221__auto____$1){
return or__6221__auto____$1;
} else {
var or__6221__auto____$2 = (x == null);
if(or__6221__auto____$2){
return or__6221__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be boolean or nil",cljs.core.cst$kw$value,x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__6221__auto__ = typeof x === 'string';
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = (x == null);
if(or__6221__auto____$1){
return or__6221__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be string or nil",cljs.core.cst$kw$value,x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__6221__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_(opts)){
var propagated_errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$propagated_DASH_errors], null));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (propagated_errors){
return (function (p1__31886_SHARP_){
return !(p1__31886_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__31902 = opts;
var map__31902__$1 = ((((!((map__31902 == null)))?((((map__31902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31902):map__31902);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31902__$1,cljs.core.cst$kw$name);
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31902__$1,cljs.core.cst$kw$main_DASH_obj);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31902__$1,cljs.core.cst$kw$initial_DASH_data);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31902__$1,cljs.core.cst$kw$options);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__6221__auto__ = cljs.core.map_QMARK_(options);
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = (options == null);
if(or__6221__auto____$1){
return or__6221__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil",cljs.core.cst$kw$value,options], null);
}
}
})(),devcards.core.stringer_QMARK_(cljs.core.cst$kw$name,opts),devcards.core.stringer_QMARK_(cljs.core.cst$kw$documentation,opts),(function (){var or__6221__auto__ = (initial_data == null);
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = cljs.core.vector_QMARK_(initial_data);
if(or__6221__auto____$1){
return or__6221__auto____$1;
} else {
var or__6221__auto____$2 = cljs.core.map_QMARK_(initial_data);
if(or__6221__auto____$2){
return or__6221__auto____$2;
} else {
var or__6221__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data));
if(or__6221__auto____$3){
return or__6221__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$initial_DASH_data,cljs.core.cst$kw$message,"should be an Atom or a Map or nil.",cljs.core.cst$kw$value,initial_data], null);
}
}
}
}
})()], null),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__31902,map__31902__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__31887_SHARP_){
return devcards.core.booler_QMARK_(p1__31887_SHARP_,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(opts));
});})(map__31902,map__31902__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame,cljs.core.cst$kw$heading,cljs.core.cst$kw$padding,cljs.core.cst$kw$inspect_DASH_data,cljs.core.cst$kw$watch_DASH_atom,cljs.core.cst$kw$history,cljs.core.cst$kw$static_DASH_state], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Card should be a Map.",cljs.core.cst$kw$value,opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__32000 = "div";
var G__32001 = {"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}};
var G__32002 = sablono.interpreter.interpret((function (){var G__32015 = "code";
var G__32016 = {"style": {"flex": "1 100px", "marginRight": "10px"}};
var G__32017 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e)], 0)):null));
return React.createElement(G__32015,G__32016,G__32017);
})());
var G__32003 = (function (){var G__32024 = "span";
var G__32025 = {"style": {"flex": "3 100px", "marginRight": "10px"}};
var G__32026 = sablono.interpreter.interpret(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(e));
return React.createElement(G__32024,G__32025,G__32026);
})();
var G__32004 = (function (){var G__32028 = "span";
var G__32029 = {"style": {"flex": "1 100px"}};
var G__32030 = " Received: ";
var G__32031 = (function (){var attrs32027 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs32027))?sablono.interpreter.attributes(attrs32027):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs32027))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs32027)], null))));
})();
return React.createElement(G__32028,G__32029,G__32030,G__32031);
})();
return React.createElement(G__32000,G__32001,G__32002,G__32003,G__32004);
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__32082 = "div";
var G__32083 = {"className": "com-rigsomelight-devcards-card-base-no-pad"};
var G__32084 = (function (){var attrs32081 = [cljs.core.str((((cljs.core.map_QMARK_(opts)) && (typeof cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs32081))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["com-rigsomelight-devcards-fail",null,"com-rigsomelight-devcards-panel-heading",null], null), null)], null),attrs32081], 0))):{"className": "com-rigsomelight-devcards-fail com-rigsomelight-devcards-panel-heading"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs32081))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs32081)], null))));
})();
var G__32085 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__32088 = "div";
var G__32089 = null;
var G__32090 = (function (){var attrs32086 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs32086))?sablono.interpreter.attributes(attrs32086):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs32086))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs32086)], null))));
})();
var G__32091 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(opts))?(function (){var attrs32092 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),cljs.core.dissoc,cljs.core.cst$kw$propagated_DASH_errors));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs32092))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-devcards-padding-top-border",null], null), null)], null),attrs32092], 0))):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs32092))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs32092)], null))));
})():null));
return React.createElement(G__32088,G__32089,G__32090,G__32091);
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,true], null)], null)));
return React.createElement(G__32082,G__32083,G__32084,G__32085);
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),(function (p1__32100_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state))),p1__32100_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
var G__32104 = devcards.core.DevcardBase;
var G__32105 = {"card": devcards.core.add_environment_defaults(card_options)};
return React.createElement(G__32104,G__32105);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6843__auto__,k__6844__auto__){
var self__ = this;
var this__6843__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6843__auto____$1,k__6844__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6845__auto__,k32107,else__6846__auto__){
var self__ = this;
var this__6845__auto____$1 = this;
var G__32110 = (((k32107 instanceof cljs.core.Keyword))?k32107.fqn:null);
switch (G__32110) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32107,else__6846__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6857__auto__,writer__6858__auto__,opts__6859__auto__){
var self__ = this;
var this__6857__auto____$1 = this;
var pr_pair__6860__auto__ = ((function (this__6857__auto____$1){
return (function (keyval__6861__auto__){
return cljs.core.pr_sequential_writer(writer__6858__auto__,cljs.core.pr_writer,""," ","",opts__6859__auto__,keyval__6861__auto__);
});})(this__6857__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6858__auto__,pr_pair__6860__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__6859__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32106){
var self__ = this;
var G__32106__$1 = this;
return (new cljs.core.RecordIter((0),G__32106__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6841__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6837__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6847__auto__){
var self__ = this;
var this__6847__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6838__auto__){
var self__ = this;
var this__6838__auto____$1 = this;
var h__6656__auto__ = self__.__hash;
if(!((h__6656__auto__ == null))){
return h__6656__auto__;
} else {
var h__6656__auto____$1 = cljs.core.hash_imap(this__6838__auto____$1);
self__.__hash = h__6656__auto____$1;

return h__6656__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6839__auto__,other__6840__auto__){
var self__ = this;
var this__6839__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6209__auto__ = other__6840__auto__;
if(cljs.core.truth_(and__6209__auto__)){
var and__6209__auto____$1 = (this__6839__auto____$1.constructor === other__6840__auto__.constructor);
if(and__6209__auto____$1){
return cljs.core.equiv_map(this__6839__auto____$1,other__6840__auto__);
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6852__auto__,k__6853__auto__){
var self__ = this;
var this__6852__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__6853__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6852__auto____$1),self__.__meta),k__6853__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6853__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6850__auto__,k__6851__auto__,G__32106){
var self__ = this;
var this__6850__auto____$1 = this;
var pred__32112 = cljs.core.keyword_identical_QMARK_;
var expr__32113 = k__6851__auto__;
if(cljs.core.truth_((pred__32112.cljs$core$IFn$_invoke$arity$2 ? pred__32112.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__32113) : pred__32112.call(null,cljs.core.cst$kw$obj,expr__32113)))){
return (new devcards.core.IdentiyOptions(G__32106,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6851__auto__,G__32106),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6855__auto__){
var self__ = this;
var this__6855__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6842__auto__,G__32106){
var self__ = this;
var this__6842__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__32106,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6848__auto__,entry__6849__auto__){
var self__ = this;
var this__6848__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6849__auto__)){
return cljs.core._assoc(this__6848__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6849__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6849__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6848__auto____$1,entry__6849__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__6877__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__6877__auto__,writer__6878__auto__){
return cljs.core._write(writer__6878__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__32108){
return (new devcards.core.IdentiyOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__32108),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__32108,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__32134){
var map__32137 = p__32134;
var map__32137__$1 = ((((!((map__32137 == null)))?((((map__32137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32137):map__32137);
var devcard_opts = map__32137__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32137__$1,cljs.core.cst$kw$options);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,cljs.core.cst$kw$main_DASH_obj,((function (map__32137,map__32137__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
});})(map__32137,map__32137__$1,devcard_opts,options))
,cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_data,main_obj,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$history,true], null),devcards.core.assert_options_map(options)], 0))], 0));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6843__auto__,k__6844__auto__){
var self__ = this;
var this__6843__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6843__auto____$1,k__6844__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6845__auto__,k32146,else__6846__auto__){
var self__ = this;
var this__6845__auto____$1 = this;
var G__32153 = (((k32146 instanceof cljs.core.Keyword))?k32146.fqn:null);
switch (G__32153) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32146,else__6846__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6857__auto__,writer__6858__auto__,opts__6859__auto__){
var self__ = this;
var this__6857__auto____$1 = this;
var pr_pair__6860__auto__ = ((function (this__6857__auto____$1){
return (function (keyval__6861__auto__){
return cljs.core.pr_sequential_writer(writer__6858__auto__,cljs.core.pr_writer,""," ","",opts__6859__auto__,keyval__6861__auto__);
});})(this__6857__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6858__auto__,pr_pair__6860__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__6859__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32145){
var self__ = this;
var G__32145__$1 = this;
return (new cljs.core.RecordIter((0),G__32145__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6841__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6837__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6847__auto__){
var self__ = this;
var this__6847__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6838__auto__){
var self__ = this;
var this__6838__auto____$1 = this;
var h__6656__auto__ = self__.__hash;
if(!((h__6656__auto__ == null))){
return h__6656__auto__;
} else {
var h__6656__auto____$1 = cljs.core.hash_imap(this__6838__auto____$1);
self__.__hash = h__6656__auto____$1;

return h__6656__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6839__auto__,other__6840__auto__){
var self__ = this;
var this__6839__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6209__auto__ = other__6840__auto__;
if(cljs.core.truth_(and__6209__auto__)){
var and__6209__auto____$1 = (this__6839__auto____$1.constructor === other__6840__auto__.constructor);
if(and__6209__auto____$1){
return cljs.core.equiv_map(this__6839__auto____$1,other__6840__auto__);
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6852__auto__,k__6853__auto__){
var self__ = this;
var this__6852__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__6853__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6852__auto____$1),self__.__meta),k__6853__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6853__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6850__auto__,k__6851__auto__,G__32145){
var self__ = this;
var this__6850__auto____$1 = this;
var pred__32155 = cljs.core.keyword_identical_QMARK_;
var expr__32156 = k__6851__auto__;
if(cljs.core.truth_((pred__32155.cljs$core$IFn$_invoke$arity$2 ? pred__32155.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__32156) : pred__32155.call(null,cljs.core.cst$kw$obj,expr__32156)))){
return (new devcards.core.AtomLikeOptions(G__32145,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6851__auto__,G__32145),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6855__auto__){
var self__ = this;
var this__6855__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options(self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6842__auto__,G__32145){
var self__ = this;
var this__6842__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__32145,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6848__auto__,entry__6849__auto__){
var self__ = this;
var this__6848__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6849__auto__)){
return cljs.core._assoc(this__6848__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6849__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6849__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6848__auto____$1,entry__6849__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__6877__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__6877__auto__,writer__6878__auto__){
return cljs.core._write(writer__6878__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__32147){
return (new devcards.core.AtomLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__32147),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__32147,cljs.core.cst$kw$obj),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(devcard_opts,cljs.core.cst$kw$main_DASH_obj,devcards.util.edn_renderer.html_edn(((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(main_obj) : cljs.core.deref.call(null,main_obj)):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6843__auto__,k__6844__auto__){
var self__ = this;
var this__6843__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6843__auto____$1,k__6844__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6845__auto__,k32208,else__6846__auto__){
var self__ = this;
var this__6845__auto____$1 = this;
var G__32221 = (((k32208 instanceof cljs.core.Keyword))?k32208.fqn:null);
switch (G__32221) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32208,else__6846__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6857__auto__,writer__6858__auto__,opts__6859__auto__){
var self__ = this;
var this__6857__auto____$1 = this;
var pr_pair__6860__auto__ = ((function (this__6857__auto____$1){
return (function (keyval__6861__auto__){
return cljs.core.pr_sequential_writer(writer__6858__auto__,cljs.core.pr_writer,""," ","",opts__6859__auto__,keyval__6861__auto__);
});})(this__6857__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6858__auto__,pr_pair__6860__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__6859__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32207){
var self__ = this;
var G__32207__$1 = this;
return (new cljs.core.RecordIter((0),G__32207__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6841__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6837__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6847__auto__){
var self__ = this;
var this__6847__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6838__auto__){
var self__ = this;
var this__6838__auto____$1 = this;
var h__6656__auto__ = self__.__hash;
if(!((h__6656__auto__ == null))){
return h__6656__auto__;
} else {
var h__6656__auto____$1 = cljs.core.hash_imap(this__6838__auto____$1);
self__.__hash = h__6656__auto____$1;

return h__6656__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6839__auto__,other__6840__auto__){
var self__ = this;
var this__6839__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6209__auto__ = other__6840__auto__;
if(cljs.core.truth_(and__6209__auto__)){
var and__6209__auto____$1 = (this__6839__auto____$1.constructor === other__6840__auto__.constructor);
if(and__6209__auto____$1){
return cljs.core.equiv_map(this__6839__auto____$1,other__6840__auto__);
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6852__auto__,k__6853__auto__){
var self__ = this;
var this__6852__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__6853__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6852__auto____$1),self__.__meta),k__6853__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6853__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6850__auto__,k__6851__auto__,G__32207){
var self__ = this;
var this__6850__auto____$1 = this;
var pred__32226 = cljs.core.keyword_identical_QMARK_;
var expr__32227 = k__6851__auto__;
if(cljs.core.truth_((pred__32226.cljs$core$IFn$_invoke$arity$2 ? pred__32226.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__32227) : pred__32226.call(null,cljs.core.cst$kw$obj,expr__32227)))){
return (new devcards.core.EdnLikeOptions(G__32207,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6851__auto__,G__32207),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6855__auto__){
var self__ = this;
var this__6855__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options(self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6842__auto__,G__32207){
var self__ = this;
var this__6842__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__32207,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6848__auto__,entry__6849__auto__){
var self__ = this;
var this__6848__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6849__auto__)){
return cljs.core._assoc(this__6848__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6849__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6849__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6848__auto____$1,entry__6849__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__6877__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__6877__auto__,writer__6878__auto__){
return cljs.core._write(writer__6878__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__32217){
return (new devcards.core.EdnLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__32217),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__32217,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__6209__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x));
if(and__6209__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
} else {
return and__6209__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_(main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_(main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$path,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__32329 = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__32329 == null))){
if((false) || (G__32329.devcards$core$IDevcard$)){
return true;
} else {
if((!G__32329.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__32329);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__32329);
}
})()){
return devcards.core._devcard(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
var G__32333 = devcards.core.DomComponent;
var G__32334 = {"node_fn": node_fn, "data_atom": data_atom};
return React.createElement(G__32333,G__32334);
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main_DASH_obj], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options(this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__32420 = (function (){var G__32422 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32422) : cljs.core.deref.call(null,G__32422));
})();
var map__32420__$1 = ((((!((map__32420 == null)))?((((map__32420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32420):map__32420);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32420__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32420__$1,cljs.core.cst$kw$pointer);
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__32487 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32487) : cljs.core.deref.call(null,G__32487));
})()) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__32496 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32496) : cljs.core.deref.call(null,G__32496));
})()) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__32514 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__32514__$1 = ((((!((map__32514 == null)))?((((map__32514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32514):map__32514);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32514__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32514__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_back(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer + (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__32519_32521 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__32520_32522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32519_32521,G__32520_32522) : cljs.core.reset_BANG_.call(null,G__32519_32521,G__32520_32522));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__32528 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__32528__$1 = ((((!((map__32528 == null)))?((((map__32528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32528):map__32528);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32528__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32528__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer - (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__32530_32535 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__32531_32536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32530_32535,G__32531_32536) : cljs.core.reset_BANG_.call(null,G__32530_32535,G__32531_32536));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__32541 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__32541__$1 = ((((!((map__32541 == null)))?((((map__32541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32541):map__32541);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,cljs.core.cst$kw$history);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(0),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__32543_32547 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__32544_32548 = cljs.core.first(history);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32543_32547,G__32544_32548) : cljs.core.reset_BANG_.call(null,G__32543_32547,G__32544_32548));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var G__32618 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_history_DASH_runner_DASH_))].join(''), "history_atom": (function (){var G__32619 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,cljs.core.List.EMPTY,cljs.core.cst$kw$pointer,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32619) : cljs.core.atom.call(null,G__32619));
})()};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$history], null),(function (){var x__7055__auto__ = (function (){var G__32621 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32621) : cljs.core.deref.call(null,G__32621));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
if(cljs.core.truth_((function (){var and__6209__auto__ = data_atom;
if(cljs.core.truth_(and__6209__auto__)){
return id;
} else {
return and__6209__auto__;
}
})())){
return cljs.core.add_watch(data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_(this$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__32623){
var map__32624 = p__32623;
var map__32624__$1 = ((((!((map__32624 == null)))?((((map__32624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32624):map__32624);
var ha = map__32624__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32624__$1,cljs.core.cst$kw$pointer);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32624__$1,cljs.core.cst$kw$history);
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32624__$1,cljs.core.cst$kw$ignore_DASH_click);
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ha,cljs.core.cst$kw$ignore_DASH_click,false);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ha,cljs.core.cst$kw$history,(function (){var abridged_hist = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(pointer,history);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(abridged_hist))){
return cljs.core.cons(n,abridged_hist);
} else {
return abridged_hist;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$pointer,(0)], 0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$history,(function (){var hist = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(hist))){
return cljs.core.cons(n,hist);
} else {
return hist;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,false], 0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__6221__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())){
var G__32630 = "div";
var G__32631 = {"style": {"display": (cljs.core.truth_((function (){var or__6221__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"};
var G__32632 = sablono.interpreter.interpret((function (){var action = ((function (G__32630,G__32631,this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});})(G__32630,G__32631,this$))
;
var G__32638 = "button";
var G__32639 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back(this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action};
var G__32640 = (function (){var G__32641 = "span";
var G__32642 = {"className": "com-rigsomelight-devcards-history-control-left"};
var G__32643 = "";
return React.createElement(G__32641,G__32642,G__32643);
})();
return React.createElement(G__32638,G__32639,G__32640);
})());
var G__32633 = sablono.interpreter.interpret((function (){var action = ((function (G__32630,G__32631,G__32632,this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__32644 = data_atom;
var G__32645 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32644,G__32645) : cljs.core.reset_BANG_.call(null,G__32644,G__32645));
});})(G__32630,G__32631,G__32632,this$))
;
var G__32648 = "button";
var G__32649 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action};
var G__32650 = (function (){var G__32651 = "span";
var G__32652 = {"className": "com-rigsomelight-devcards-history-stop"};
var G__32653 = "";
return React.createElement(G__32651,G__32652,G__32653);
})();
return React.createElement(G__32648,G__32649,G__32650);
})());
var G__32634 = sablono.interpreter.interpret((function (){var action = ((function (G__32630,G__32631,G__32632,G__32633,this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});})(G__32630,G__32631,G__32632,G__32633,this$))
;
var G__32657 = "button";
var G__32658 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action};
var G__32659 = (function (){var G__32661 = "span";
var G__32662 = {"className": "com-rigsomelight-devcards-history-control-right"};
var G__32663 = "";
return React.createElement(G__32661,G__32662,G__32663);
})();
return React.createElement(G__32657,G__32658,G__32659);
})());
var G__32635 = sablono.interpreter.interpret((function (){var listener = ((function (G__32630,G__32631,G__32632,G__32633,G__32634,this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});})(G__32630,G__32631,G__32632,G__32633,G__32634,this$))
;
var G__32673 = "button";
var G__32674 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener};
var G__32675 = (function (){var G__32679 = "span";
var G__32680 = {"className": "com-rigsomelight-devcards-history-control-small-arrow"};
return React.createElement(G__32679,G__32680);
})();
var G__32676 = (function (){var G__32681 = "span";
var G__32682 = {"className": "com-rigsomelight-devcards-history-control-small-arrow"};
return React.createElement(G__32681,G__32682);
})();
var G__32677 = (function (){var G__32683 = "span";
var G__32684 = {"className": "com-rigsomelight-devcards-history-control-block"};
return React.createElement(G__32683,G__32684);
})();
return React.createElement(G__32673,G__32674,G__32675,G__32676,G__32677);
})());
return React.createElement(G__32630,G__32631,G__32632,G__32633,G__32634,G__32635);
} else {
return null;
}
})};
return React.createClass(G__32618);
})();
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
var G__32714 = devcards.core.HistoryComponent;
var G__32715 = {"data_atom": data_atom, "key": "devcards-history-control-bar"};
return React.createElement(G__32714,G__32715);
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_collect_tests], null),cljs.core.conj,cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(cljs.test.get_current_env(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null)),m], 0))], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$pass], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$pass);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$fail], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$fail);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$error], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$error);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$test_DASH_doc], null),(function (m){
devcards.core.collect_test(m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_32717 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_32717;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__7146__auto__ = (function (){var G__32720 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32720) : cljs.core.atom.call(null,G__32720));
})();
var prefer_table__7147__auto__ = (function (){var G__32721 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32721) : cljs.core.atom.call(null,G__32721));
})();
var method_cache__7148__auto__ = (function (){var G__32722 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32722) : cljs.core.atom.call(null,G__32722));
})();
var cached_hierarchy__7149__auto__ = (function (){var G__32723 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32723) : cljs.core.atom.call(null,G__32723));
})();
var hierarchy__7150__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__7150__auto__,method_table__7146__auto__,prefer_table__7147__auto__,method_cache__7148__auto__,cached_hierarchy__7149__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
var attrs32729 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs32729))?sablono.interpreter.attributes(attrs32729):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs32729))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs32729)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__32730,body){
var map__32738 = p__32730;
var map__32738__$1 = ((((!((map__32738 == null)))?((((map__32738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32738):map__32738);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32738__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(message)){
var G__32743 = "div";
var G__32744 = null;
var G__32745 = (function (){var attrs32742 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs32742))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-devcards-test-message",null], null), null)], null),attrs32742], 0))):{"className": "com-rigsomelight-devcards-test-message"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs32742))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs32742)], null))));
})();
var G__32746 = sablono.interpreter.interpret(body);
return React.createElement(G__32743,G__32744,G__32745,G__32746);
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__32751){
var map__32785 = p__32751;
var map__32785__$1 = ((((!((map__32785 == null)))?((((map__32785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32785):map__32785);
var m = map__32785__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32785__$1,cljs.core.cst$kw$expected);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32785__$1,cljs.core.cst$kw$actual);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32785__$1,cljs.core.cst$kw$type);
return devcards.core.display_message(m,(function (){var attrs32787 = (function (){var G__32788 = devcards.core.CodeHighlight;
var G__32789 = {"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"};
return React.createElement(G__32788,G__32789);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs32787))?sablono.interpreter.attributes(attrs32787):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs32787))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?(function (){var G__32795 = "div";
var G__32796 = {"style": {"marginTop": "5px"}};
var G__32797 = (function (){var G__32799 = "div";
var G__32800 = {"style": {"position": "absolute", "fontSize": "0.9em"}};
var G__32801 = "\u25B6";
return React.createElement(G__32799,G__32800,G__32801);
})();
var G__32798 = (function (){var G__32802 = "div";
var G__32803 = {"style": {"marginLeft": "20px"}};
var G__32804 = sablono.interpreter.interpret((function (){var G__32805 = devcards.core.CodeHighlight;
var G__32806 = {"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"};
return React.createElement(G__32805,G__32806);
})());
return React.createElement(G__32802,G__32803,G__32804);
})();
return React.createElement(G__32795,G__32796,G__32797,G__32798);
})():null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs32787),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?(function (){var G__32809 = "div";
var G__32810 = {"style": {"marginTop": "5px"}};
var G__32811 = (function (){var G__32813 = "div";
var G__32814 = {"style": {"position": "absolute", "fontSize": "0.9em"}};
var G__32815 = "\u25B6";
return React.createElement(G__32813,G__32814,G__32815);
})();
var G__32812 = (function (){var G__32816 = "div";
var G__32817 = {"style": {"marginLeft": "20px"}};
var G__32818 = sablono.interpreter.interpret((function (){var G__32819 = devcards.core.CodeHighlight;
var G__32820 = {"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"};
return React.createElement(G__32819,G__32820);
})());
return React.createElement(G__32816,G__32817,G__32818);
})();
return React.createElement(G__32809,G__32810,G__32811,G__32812);
})():null))], null))));
})());
});
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pass,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fail,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$error,(function (m){
return devcards.core.display_message(m,(function (){var G__32827 = "div";
var G__32828 = null;
var G__32829 = React.createElement("strong",null,"Error: ");
var G__32830 = (function (){var attrs32826 = [cljs.core.str(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs32826))?sablono.interpreter.attributes(attrs32826):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs32826))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs32826)], null))));
})();
return React.createElement(G__32827,G__32828,G__32829,G__32830);
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$test_DASH_doc,(function (m){
var attrs32831 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs32831))?sablono.interpreter.attributes(attrs32831):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs32831))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs32831)], null))));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (p__32836){
var map__32837 = p__32836;
var map__32837__$1 = ((((!((map__32837 == null)))?((((map__32837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32837):map__32837);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32837__$1,cljs.core.cst$kw$testing_DASH_contexts);
var attrs32841 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__32837,map__32837__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#bbb"], null)], null),t," "], null);
});})(map__32837,map__32837__$1,testing_contexts))
,cljs.core.reverse(cljs.core.rest(testing_contexts))),(function (){var x__7055__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(-1)], null),cljs.core.first(testing_contexts)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs32841))?sablono.interpreter.attributes(attrs32841):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs32841))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs32841)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
var G__32846 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$test_DASH_doc,cljs.core.cst$kw$documentation,s], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__32846) : cljs.test.report.call(null,G__32846));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t,i], 0)),cljs.core.cst$kw$className,[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),(devcards.core.test_render.cljs$core$IFn$_invoke$arity$1 ? devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t) : devcards.core.test_render.call(null,t))], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs32861 = cljs.core.cst$kw$html_DASH_list.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__32862,p__32863){
var map__32864 = p__32862;
var map__32864__$1 = ((((!((map__32864 == null)))?((((map__32864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32864):map__32864);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32864__$1,cljs.core.cst$kw$last_DASH_context);
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32864__$1,cljs.core.cst$kw$html_DASH_list);
var vec__32865 = p__32863;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32865,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32865,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$last_DASH_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t),cljs.core.cst$kw$html_DASH_list,(function (){var res = (function (){var x__7055__auto__ = devcards.core.test_renderer(t,i);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})();
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$context], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null))], 0)),i),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.reverse(tests))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs32861))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-devcards-test-card",null], null), null)], null),attrs32861], 0))):{"className": "com-rigsomelight-devcards-test-card"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs32861))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs32861)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (error_QMARK_,tests){
return (function (p__32944){
var map__32945 = p__32944;
var map__32945__$1 = ((((!((map__32945 == null)))?((((map__32945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32945):map__32945);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32945__$1,cljs.core.cst$kw$type);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$test_DASH_doc);
});})(error_QMARK_,tests))
,cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__32943 = cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(test_summary);
var map__32943__$1 = ((((!((map__32943 == null)))?((((map__32943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32943):map__32943);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32943__$1,cljs.core.cst$kw$fail);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32943__$1,cljs.core.cst$kw$pass);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32943__$1,cljs.core.cst$kw$error);
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__32948 = "div";
var G__32949 = {"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"};
var G__32950 = (function (){var G__32952 = "div";
var G__32953 = {"className": "com-rigsomelight-devcards-panel-heading"};
var G__32954 = (function (){var G__32958 = "a";
var G__32959 = {"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__32958,G__32952,G__32953,G__32948,G__32949,error_QMARK_,tests,some_tests,total_tests,map__32943,map__32943__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__32958,G__32952,G__32953,G__32948,G__32949,error_QMARK_,tests,some_tests,total_tests,map__32943,map__32943__$1,fail,pass,error,error__$1))
)};
var G__32960 = sablono.interpreter.interpret((cljs.core.truth_(path)?[cljs.core.str(cljs.core.name(cljs.core.last(path)))].join(''):null));
return React.createElement(G__32958,G__32959,G__32960);
})();
var G__32955 = (function (){var G__32961 = "button";
var G__32962 = {"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__32961,G__32952,G__32953,G__32954,G__32948,G__32949,error_QMARK_,tests,some_tests,total_tests,map__32943,map__32943__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(G__32961,G__32952,G__32953,G__32954,G__32948,G__32949,error_QMARK_,tests,some_tests,total_tests,map__32943,map__32943__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__32963 = sablono.interpreter.interpret(total_tests);
return React.createElement(G__32961,G__32962,G__32963);
})();
var G__32956 = sablono.interpreter.interpret(((((fail + error__$1) === (0)))?null:(function (){var G__32967 = "button";
var G__32968 = {"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__32967,G__32952,G__32953,G__32954,G__32955,G__32948,G__32949,error_QMARK_,tests,some_tests,total_tests,map__32943,map__32943__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (G__32967,G__32952,G__32953,G__32954,G__32955,G__32948,G__32949,error_QMARK_,tests,some_tests,total_tests,map__32943,map__32943__$1,fail,pass,error,error__$1){
return (function (p__32970){
var map__32971 = p__32970;
var map__32971__$1 = ((((!((map__32971 == null)))?((((map__32971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32971):map__32971);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32971__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail,null,cljs.core.cst$kw$error,null], null), null).call(null,type);
});})(G__32967,G__32952,G__32953,G__32954,G__32955,G__32948,G__32949,error_QMARK_,tests,some_tests,total_tests,map__32943,map__32943__$1,fail,pass,error,error__$1))
});
});})(G__32967,G__32952,G__32953,G__32954,G__32955,G__32948,G__32949,error_QMARK_,tests,some_tests,total_tests,map__32943,map__32943__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__32969 = sablono.interpreter.interpret([cljs.core.str((fail + error__$1))].join(''));
return React.createElement(G__32967,G__32968,G__32969);
})()));
var G__32957 = sablono.interpreter.interpret(((((pass == null)) || ((pass === (0))))?null:(function (){var G__32978 = "button";
var G__32979 = {"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__32978,G__32952,G__32953,G__32954,G__32955,G__32956,G__32948,G__32949,error_QMARK_,tests,some_tests,total_tests,map__32943,map__32943__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (G__32978,G__32952,G__32953,G__32954,G__32955,G__32956,G__32948,G__32949,error_QMARK_,tests,some_tests,total_tests,map__32943,map__32943__$1,fail,pass,error,error__$1){
return (function (p__32986){
var map__32988 = p__32986;
var map__32988__$1 = ((((!((map__32988 == null)))?((((map__32988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32988):map__32988);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32988__$1,cljs.core.cst$kw$type);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$pass);
});})(G__32978,G__32952,G__32953,G__32954,G__32955,G__32956,G__32948,G__32949,error_QMARK_,tests,some_tests,total_tests,map__32943,map__32943__$1,fail,pass,error,error__$1))
});
});})(G__32978,G__32952,G__32953,G__32954,G__32955,G__32956,G__32948,G__32949,error_QMARK_,tests,some_tests,total_tests,map__32943,map__32943__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__32980 = sablono.interpreter.interpret(pass);
return React.createElement(G__32978,G__32979,G__32980);
})()));
return React.createElement(G__32952,G__32953,G__32954,G__32955,G__32956,G__32957);
})();
var G__32951 = (function (){var G__32992 = "div";
var G__32993 = {"className": devcards.system.devcards_rendered_card_class};
var G__32994 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__6221__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$filter);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return React.createElement(G__32992,G__32993,G__32994);
})();
return React.createElement(G__32948,G__32949,G__32950,G__32951);
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var test_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);
cljs.test.set_env_BANG_(test_env);

var tests = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.test.get_current_env());

return cljs.core.async.close_BANG_(out);
});})(out,test_env))
], null));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Running tests!!"], 0));

cljs.test.run_block(tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__){
return (function (state_33103){
var state_val_33104 = (state_33103[(1)]);
if((state_val_33104 === (7))){
var state_33103__$1 = state_33103;
var statearr_33108_33211 = state_33103__$1;
(statearr_33108_33211[(2)] = false);

(statearr_33108_33211[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (20))){
var inst_33042 = (state_33103[(7)]);
var inst_33061 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33042);
var state_33103__$1 = state_33103;
var statearr_33109_33212 = state_33103__$1;
(statearr_33109_33212[(2)] = inst_33061);

(statearr_33109_33212[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (27))){
var inst_33078 = (state_33103[(8)]);
var inst_33066 = (state_33103[(9)]);
var inst_33082 = (inst_33066.cljs$core$IFn$_invoke$arity$1 ? inst_33066.cljs$core$IFn$_invoke$arity$1(inst_33078) : inst_33066.call(null,inst_33078));
var state_33103__$1 = state_33103;
var statearr_33110_33213 = state_33103__$1;
(statearr_33110_33213[(2)] = inst_33082);

(statearr_33110_33213[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (1))){
var state_33103__$1 = state_33103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33103__$1,(2),devcards.core.test_channel);
} else {
if((state_val_33104 === (24))){
var state_33103__$1 = state_33103;
var statearr_33111_33214 = state_33103__$1;
(statearr_33111_33214[(2)] = null);

(statearr_33111_33214[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (4))){
var state_33103__$1 = state_33103;
var statearr_33112_33215 = state_33103__$1;
(statearr_33112_33215[(2)] = false);

(statearr_33112_33215[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (15))){
var state_33103__$1 = state_33103;
var statearr_33113_33216 = state_33103__$1;
(statearr_33113_33216[(2)] = false);

(statearr_33113_33216[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (21))){
var inst_33042 = (state_33103[(7)]);
var state_33103__$1 = state_33103;
var statearr_33114_33217 = state_33103__$1;
(statearr_33114_33217[(2)] = inst_33042);

(statearr_33114_33217[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (13))){
var inst_33101 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33103__$1,inst_33101);
} else {
if((state_val_33104 === (22))){
var inst_33065 = (state_33103[(10)]);
var inst_33064 = (state_33103[(2)]);
var inst_33065__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33064,cljs.core.cst$kw$tests);
var inst_33066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33064,cljs.core.cst$kw$callback);
var state_33103__$1 = (function (){var statearr_33116 = state_33103;
(statearr_33116[(10)] = inst_33065__$1);

(statearr_33116[(9)] = inst_33066);

return statearr_33116;
})();
if(cljs.core.truth_(inst_33065__$1)){
var statearr_33117_33219 = state_33103__$1;
(statearr_33117_33219[(1)] = (23));

} else {
var statearr_33118_33220 = state_33103__$1;
(statearr_33118_33220[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (29))){
var inst_33092 = (state_33103[(2)]);
var inst_33093 = cljs.test.clear_env_BANG_();
var state_33103__$1 = (function (){var statearr_33120 = state_33103;
(statearr_33120[(11)] = inst_33093);

(statearr_33120[(12)] = inst_33092);

return statearr_33120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33103__$1,(30),devcards.core.test_channel);
} else {
if((state_val_33104 === (6))){
var state_33103__$1 = state_33103;
var statearr_33122_33223 = state_33103__$1;
(statearr_33122_33223[(2)] = true);

(statearr_33122_33223[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (28))){
var inst_33066 = (state_33103[(9)]);
var inst_33084 = [cljs.core.cst$kw$type,cljs.core.cst$kw$actual];
var inst_33085 = [cljs.core.cst$kw$error,"Tests timed out. Please check Dev Console for Exceptions"];
var inst_33086 = cljs.core.PersistentHashMap.fromArrays(inst_33084,inst_33085);
var inst_33087 = devcards.core.collect_test(inst_33086);
var inst_33088 = cljs.test.get_current_env();
var inst_33089 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_33088,cljs.core.cst$kw$error,"Execution timed out!");
var inst_33090 = (inst_33066.cljs$core$IFn$_invoke$arity$1 ? inst_33066.cljs$core$IFn$_invoke$arity$1(inst_33089) : inst_33066.call(null,inst_33089));
var state_33103__$1 = (function (){var statearr_33134 = state_33103;
(statearr_33134[(13)] = inst_33087);

return statearr_33134;
})();
var statearr_33135_33224 = state_33103__$1;
(statearr_33135_33224[(2)] = inst_33090);

(statearr_33135_33224[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (25))){
var inst_33099 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
var statearr_33136_33225 = state_33103__$1;
(statearr_33136_33225[(2)] = inst_33099);

(statearr_33136_33225[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (17))){
var state_33103__$1 = state_33103;
var statearr_33140_33228 = state_33103__$1;
(statearr_33140_33228[(2)] = true);

(statearr_33140_33228[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (3))){
var inst_33019 = (state_33103[(14)]);
var inst_33024 = inst_33019.cljs$lang$protocol_mask$partition0$;
var inst_33025 = (inst_33024 & (64));
var inst_33026 = inst_33019.cljs$core$ISeq$;
var inst_33027 = (inst_33025) || (inst_33026);
var state_33103__$1 = state_33103;
if(cljs.core.truth_(inst_33027)){
var statearr_33142_33231 = state_33103__$1;
(statearr_33142_33231[(1)] = (6));

} else {
var statearr_33144_33232 = state_33103__$1;
(statearr_33144_33232[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (12))){
var inst_33042 = (state_33103[(7)]);
var inst_33046 = (inst_33042 == null);
var inst_33047 = cljs.core.not(inst_33046);
var state_33103__$1 = state_33103;
if(inst_33047){
var statearr_33145_33233 = state_33103__$1;
(statearr_33145_33233[(1)] = (14));

} else {
var statearr_33147_33234 = state_33103__$1;
(statearr_33147_33234[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (2))){
var inst_33019 = (state_33103[(14)]);
var inst_33019__$1 = (state_33103[(2)]);
var inst_33021 = (inst_33019__$1 == null);
var inst_33022 = cljs.core.not(inst_33021);
var state_33103__$1 = (function (){var statearr_33149 = state_33103;
(statearr_33149[(14)] = inst_33019__$1);

return statearr_33149;
})();
if(inst_33022){
var statearr_33151_33237 = state_33103__$1;
(statearr_33151_33237[(1)] = (3));

} else {
var statearr_33152_33238 = state_33103__$1;
(statearr_33152_33238[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (23))){
var inst_33065 = (state_33103[(10)]);
var inst_33071 = (state_33103[(15)]);
var inst_33071__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_33072 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33073 = devcards.core.run_card_tests(inst_33065);
var inst_33074 = [inst_33073,inst_33071__$1];
var inst_33075 = (new cljs.core.PersistentVector(null,2,(5),inst_33072,inst_33074,null));
var state_33103__$1 = (function (){var statearr_33156 = state_33103;
(statearr_33156[(15)] = inst_33071__$1);

return statearr_33156;
})();
return cljs.core.async.ioc_alts_BANG_(state_33103__$1,(26),inst_33075);
} else {
if((state_val_33104 === (19))){
var inst_33056 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
var statearr_33157_33242 = state_33103__$1;
(statearr_33157_33242[(2)] = inst_33056);

(statearr_33157_33242[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (11))){
var inst_33019 = (state_33103[(14)]);
var inst_33039 = (state_33103[(2)]);
var inst_33040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33039,cljs.core.cst$kw$tests);
var inst_33041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33039,cljs.core.cst$kw$callback);
var inst_33042 = inst_33019;
var state_33103__$1 = (function (){var statearr_33160 = state_33103;
(statearr_33160[(7)] = inst_33042);

(statearr_33160[(16)] = inst_33040);

(statearr_33160[(17)] = inst_33041);

return statearr_33160;
})();
var statearr_33162_33243 = state_33103__$1;
(statearr_33162_33243[(2)] = null);

(statearr_33162_33243[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (9))){
var inst_33019 = (state_33103[(14)]);
var inst_33036 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33019);
var state_33103__$1 = state_33103;
var statearr_33163_33244 = state_33103__$1;
(statearr_33163_33244[(2)] = inst_33036);

(statearr_33163_33244[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (5))){
var inst_33034 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
if(cljs.core.truth_(inst_33034)){
var statearr_33164_33251 = state_33103__$1;
(statearr_33164_33251[(1)] = (9));

} else {
var statearr_33165_33252 = state_33103__$1;
(statearr_33165_33252[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (14))){
var inst_33042 = (state_33103[(7)]);
var inst_33049 = inst_33042.cljs$lang$protocol_mask$partition0$;
var inst_33050 = (inst_33049 & (64));
var inst_33051 = inst_33042.cljs$core$ISeq$;
var inst_33052 = (inst_33050) || (inst_33051);
var state_33103__$1 = state_33103;
if(cljs.core.truth_(inst_33052)){
var statearr_33166_33261 = state_33103__$1;
(statearr_33166_33261[(1)] = (17));

} else {
var statearr_33167_33264 = state_33103__$1;
(statearr_33167_33264[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (26))){
var inst_33071 = (state_33103[(15)]);
var inst_33077 = (state_33103[(2)]);
var inst_33078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33077,(0),null);
var inst_33079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33077,(1),null);
var inst_33080 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_33079,inst_33071);
var state_33103__$1 = (function (){var statearr_33169 = state_33103;
(statearr_33169[(8)] = inst_33078);

return statearr_33169;
})();
if(inst_33080){
var statearr_33170_33272 = state_33103__$1;
(statearr_33170_33272[(1)] = (27));

} else {
var statearr_33171_33274 = state_33103__$1;
(statearr_33171_33274[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (16))){
var inst_33059 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
if(cljs.core.truth_(inst_33059)){
var statearr_33172_33279 = state_33103__$1;
(statearr_33172_33279[(1)] = (20));

} else {
var statearr_33173_33281 = state_33103__$1;
(statearr_33173_33281[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (30))){
var inst_33095 = (state_33103[(2)]);
var inst_33042 = inst_33095;
var state_33103__$1 = (function (){var statearr_33175 = state_33103;
(statearr_33175[(7)] = inst_33042);

return statearr_33175;
})();
var statearr_33176_33283 = state_33103__$1;
(statearr_33176_33283[(2)] = null);

(statearr_33176_33283[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (10))){
var inst_33019 = (state_33103[(14)]);
var state_33103__$1 = state_33103;
var statearr_33189_33284 = state_33103__$1;
(statearr_33189_33284[(2)] = inst_33019);

(statearr_33189_33284[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (18))){
var state_33103__$1 = state_33103;
var statearr_33190_33285 = state_33103__$1;
(statearr_33190_33285[(2)] = false);

(statearr_33190_33285[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33104 === (8))){
var inst_33031 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
var statearr_33191_33286 = state_33103__$1;
(statearr_33191_33286[(2)] = inst_33031);

(statearr_33191_33286[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__14658__auto__))
;
return ((function (switch__13584__auto__,c__14658__auto__){
return (function() {
var devcards$core$state_machine__13585__auto__ = null;
var devcards$core$state_machine__13585__auto____0 = (function (){
var statearr_33203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33203[(0)] = devcards$core$state_machine__13585__auto__);

(statearr_33203[(1)] = (1));

return statearr_33203;
});
var devcards$core$state_machine__13585__auto____1 = (function (state_33103){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_33103);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e33204){if((e33204 instanceof Object)){
var ex__13588__auto__ = e33204;
var statearr_33205_33288 = state_33103;
(statearr_33205_33288[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33103);

return cljs.core.cst$kw$recur;
} else {
throw e33204;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__33289 = state_33103;
state_33103 = G__33289;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
devcards$core$state_machine__13585__auto__ = function(state_33103){
switch(arguments.length){
case 0:
return devcards$core$state_machine__13585__auto____0.call(this);
case 1:
return devcards$core$state_machine__13585__auto____1.call(this,state_33103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__13585__auto____0;
devcards$core$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__13585__auto____1;
return devcards$core$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_33209 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_33209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_33209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__))
);

return c__14658__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tests,tests,cljs.core.cst$kw$callback,(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__20888__auto___33295 = {"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$test_thunks);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name(cljs.core.cst$kw$test_thunks)]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state(this$,cljs.core.cst$kw$test_results);
var path = devcards.core.get_props(this$,cljs.core.cst$kw$path);
return devcards.core.render_tests(this$,path,test_summary);
})};
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__20888__auto___33295);
}

var seq__33290_33296 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__33291_33297 = null;
var count__33292_33298 = (0);
var i__33293_33299 = (0);
while(true){
if((i__33293_33299 < count__33292_33298)){
var property__20889__auto___33300 = chunk__33291_33297.cljs$core$IIndexed$_nth$arity$2(null,i__33293_33299);
if(cljs.core.truth_((base__20888__auto___33295[property__20889__auto___33300]))){
(devcards.core.TestDevcard.prototype[property__20889__auto___33300] = (base__20888__auto___33295[property__20889__auto___33300]));
} else {
}

var G__33301 = seq__33290_33296;
var G__33302 = chunk__33291_33297;
var G__33303 = count__33292_33298;
var G__33304 = (i__33293_33299 + (1));
seq__33290_33296 = G__33301;
chunk__33291_33297 = G__33302;
count__33292_33298 = G__33303;
i__33293_33299 = G__33304;
continue;
} else {
var temp__4657__auto___33305 = cljs.core.seq(seq__33290_33296);
if(temp__4657__auto___33305){
var seq__33290_33306__$1 = temp__4657__auto___33305;
if(cljs.core.chunked_seq_QMARK_(seq__33290_33306__$1)){
var c__7032__auto___33307 = cljs.core.chunk_first(seq__33290_33306__$1);
var G__33308 = cljs.core.chunk_rest(seq__33290_33306__$1);
var G__33309 = c__7032__auto___33307;
var G__33310 = cljs.core.count(c__7032__auto___33307);
var G__33311 = (0);
seq__33290_33296 = G__33308;
chunk__33291_33297 = G__33309;
count__33292_33298 = G__33310;
i__33293_33299 = G__33311;
continue;
} else {
var property__20889__auto___33312 = cljs.core.first(seq__33290_33306__$1);
if(cljs.core.truth_((base__20888__auto___33295[property__20889__auto___33312]))){
(devcards.core.TestDevcard.prototype[property__20889__auto___33312] = (base__20888__auto___33295[property__20889__auto___33312]));
} else {
}

var G__33313 = cljs.core.next(seq__33290_33306__$1);
var G__33314 = null;
var G__33315 = (0);
var G__33316 = (0);
seq__33290_33296 = G__33313;
chunk__33291_33297 = G__33314;
count__33292_33298 = G__33315;
i__33293_33299 = G__33316;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__7303__auto__ = [];
var len__7296__auto___33323 = arguments.length;
var i__7297__auto___33324 = (0);
while(true){
if((i__7297__auto___33324 < len__7296__auto___33323)){
args__7303__auto__.push((arguments[i__7297__auto___33324]));

var G__33325 = (i__7297__auto___33324 + (1));
i__7297__auto___33324 = G__33325;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core33318 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core33318 = (function (test_thunks,meta33319){
this.test_thunks = test_thunks;
this.meta33319 = meta33319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core33318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33320,meta33319__$1){
var self__ = this;
var _33320__$1 = this;
return (new devcards.core.t_devcards$core33318(self__.test_thunks,meta33319__$1));
});

devcards.core.t_devcards$core33318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33320){
var self__ = this;
var _33320__$1 = this;
return self__.meta33319;
});

devcards.core.t_devcards$core33318.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core33318.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
var G__33321 = devcards.core.TestDevcard;
var G__33322 = {"test_thunks": self__.test_thunks, "path": path};
return React.createElement(G__33321,G__33322);
});

devcards.core.t_devcards$core33318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$test_DASH_thunks,cljs.core.cst$sym$meta33319], null);
});

devcards.core.t_devcards$core33318.cljs$lang$type = true;

devcards.core.t_devcards$core33318.cljs$lang$ctorStr = "devcards.core/t_devcards$core33318";

devcards.core.t_devcards$core33318.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"devcards.core/t_devcards$core33318");
});

devcards.core.__GT_t_devcards$core33318 = (function devcards$core$__GT_t_devcards$core33318(test_thunks__$1,meta33319){
return (new devcards.core.t_devcards$core33318(test_thunks__$1,meta33319));
});

}

return (new devcards.core.t_devcards$core33318(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq33317){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33317));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.aget,goog.global,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state)));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_(devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter(cljs.core.name(ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Adding base card options!",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([base_card_options], 0))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base_DASH_card_DASH_options], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,base_card_options], 0));
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str((function (){var G__33345 = (function (){var attrs33346 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs33346))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["com-rigsomelight-devcards-base",null,"com-rigsomelight-devcards-string-render",null], null), null)], null),attrs33346], 0))):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs33346))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33346)], null))));
})();
return React.renderToString(G__33345);
})()),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
var G__33370 = (function (){var attrs33372 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs33372))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["com-rigsomelight-devcards-base",null,"com-rigsomelight-devcards-string-render",null], null), null)], null),attrs33372], 0))):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs33372))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33372)], null))));
})();
var G__33371 = devcards.system.devcards_app_node();
return React.render(G__33370,G__33371);
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__){
return (function (state_33410){
var state_val_33411 = (state_33410[(1)]);
if((state_val_33411 === (1))){
var inst_33399 = devcards.core.load_data_from_channel_BANG_();
var state_33410__$1 = state_33410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33410__$1,(2),inst_33399);
} else {
if((state_val_33411 === (2))){
var inst_33401 = (state_33410[(2)]);
var inst_33402 = cljs.core.async.timeout((100));
var state_33410__$1 = (function (){var statearr_33412 = state_33410;
(statearr_33412[(7)] = inst_33401);

return statearr_33412;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33410__$1,(3),inst_33402);
} else {
if((state_val_33411 === (3))){
var inst_33404 = (state_33410[(2)]);
var inst_33405 = (function (){return ((function (inst_33404,state_val_33411,c__14658__auto__){
return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
;})(inst_33404,state_val_33411,c__14658__auto__))
})();
var inst_33406 = setTimeout(inst_33405,(0));
var state_33410__$1 = (function (){var statearr_33414 = state_33410;
(statearr_33414[(8)] = inst_33404);

return statearr_33414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33410__$1,inst_33406);
} else {
return null;
}
}
}
});})(c__14658__auto__))
;
return ((function (switch__13584__auto__,c__14658__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__13585__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__13585__auto____0 = (function (){
var statearr_33419 = [null,null,null,null,null,null,null,null,null];
(statearr_33419[(0)] = devcards$core$mount_namespace_$_state_machine__13585__auto__);

(statearr_33419[(1)] = (1));

return statearr_33419;
});
var devcards$core$mount_namespace_$_state_machine__13585__auto____1 = (function (state_33410){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_33410);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e33420){if((e33420 instanceof Object)){
var ex__13588__auto__ = e33420;
var statearr_33421_33450 = state_33410;
(statearr_33421_33450[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33410);

return cljs.core.cst$kw$recur;
} else {
throw e33420;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__33458 = state_33410;
state_33410 = G__33458;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__13585__auto__ = function(state_33410){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__13585__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__13585__auto____1.call(this,state_33410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__13585__auto____0;
devcards$core$mount_namespace_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__13585__auto____1;
return devcards$core$mount_namespace_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_33422 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_33422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_33422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__))
);

return c__14658__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return devcards.system.start_ui_with_renderer(devcards.core.devcard_event_chan,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);
