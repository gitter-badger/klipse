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
document.body.addEventListener("figwheel.js-reload",(function (p1__46997_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsreload,p1__46997_SHARP_.detail], null));
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
var args46998 = [];
var len__7296__auto___47001 = arguments.length;
var i__7297__auto___47002 = (0);
while(true){
if((i__7297__auto___47002 < len__7296__auto___47001)){
args46998.push((arguments[i__7297__auto___47002]));

var G__47003 = (i__7297__auto___47002 + (1));
i__7297__auto___47002 = G__47003;
continue;
} else {
}
break;
}

var G__47000 = args46998.length;
switch (G__47000) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46998.length)].join('')));

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
var map__47011 = c;
var map__47011__$1 = ((((!((map__47011 == null)))?((((map__47011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47011):map__47011);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47011__$1,cljs.core.cst$kw$path);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47011__$1,cljs.core.cst$kw$func);
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
var base__20888__auto___47023 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "render": (function (){
var this$ = this;
var G__47013 = "pre";
var G__47014 = {"className": (cljs.core.truth_(devcards.core.get_hljs())?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash((devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$code) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$code)))};
var G__47015 = (function (){var G__47016 = "code";
var G__47017 = {"className": (function (){var or__6221__auto__ = (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$lang) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$lang));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return "";
}
})(), "ref": "code-ref"};
var G__47018 = sablono.interpreter.interpret((devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$code) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$code)));
return React.createElement(G__47016,G__47017,G__47018);
})();
return React.createElement(G__47013,G__47014,G__47015);
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__20888__auto___47023);
}

var seq__47019_47024 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__47020_47025 = null;
var count__47021_47026 = (0);
var i__47022_47027 = (0);
while(true){
if((i__47022_47027 < count__47021_47026)){
var property__20889__auto___47028 = chunk__47020_47025.cljs$core$IIndexed$_nth$arity$2(null,i__47022_47027);
if(cljs.core.truth_((base__20888__auto___47023[property__20889__auto___47028]))){
(devcards.core.CodeHighlight.prototype[property__20889__auto___47028] = (base__20888__auto___47023[property__20889__auto___47028]));
} else {
}

var G__47029 = seq__47019_47024;
var G__47030 = chunk__47020_47025;
var G__47031 = count__47021_47026;
var G__47032 = (i__47022_47027 + (1));
seq__47019_47024 = G__47029;
chunk__47020_47025 = G__47030;
count__47021_47026 = G__47031;
i__47022_47027 = G__47032;
continue;
} else {
var temp__4657__auto___47033 = cljs.core.seq(seq__47019_47024);
if(temp__4657__auto___47033){
var seq__47019_47034__$1 = temp__4657__auto___47033;
if(cljs.core.chunked_seq_QMARK_(seq__47019_47034__$1)){
var c__7032__auto___47035 = cljs.core.chunk_first(seq__47019_47034__$1);
var G__47036 = cljs.core.chunk_rest(seq__47019_47034__$1);
var G__47037 = c__7032__auto___47035;
var G__47038 = cljs.core.count(c__7032__auto___47035);
var G__47039 = (0);
seq__47019_47024 = G__47036;
chunk__47020_47025 = G__47037;
count__47021_47026 = G__47038;
i__47022_47027 = G__47039;
continue;
} else {
var property__20889__auto___47040 = cljs.core.first(seq__47019_47034__$1);
if(cljs.core.truth_((base__20888__auto___47023[property__20889__auto___47040]))){
(devcards.core.CodeHighlight.prototype[property__20889__auto___47040] = (base__20888__auto___47023[property__20889__auto___47040]));
} else {
}

var G__47041 = cljs.core.next(seq__47019_47034__$1);
var G__47042 = null;
var G__47043 = (0);
var G__47044 = (0);
seq__47019_47024 = G__47041;
chunk__47020_47025 = G__47042;
count__47021_47026 = G__47043;
i__47022_47027 = G__47044;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
var G__47047 = devcards.core.CodeHighlight;
var G__47048 = {"code": code_str, "lang": lang};
return React.createElement(G__47047,G__47048);
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__7146__auto__ = (function (){var G__47049 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__47049) : cljs.core.atom.call(null,G__47049));
})();
var prefer_table__7147__auto__ = (function (){var G__47050 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__47050) : cljs.core.atom.call(null,G__47050));
})();
var method_cache__7148__auto__ = (function (){var G__47051 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__47051) : cljs.core.atom.call(null,G__47051));
})();
var cached_hierarchy__7149__auto__ = (function (){var G__47052 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__47052) : cljs.core.atom.call(null,G__47052));
})();
var hierarchy__7150__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__7150__auto__,method_table__7146__auto__,prefer_table__7147__auto__,method_cache__7148__auto__,cached_hierarchy__7149__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__47053){
var map__47054 = p__47053;
var map__47054__$1 = ((((!((map__47054 == null)))?((((map__47054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47054):map__47054);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47054__$1,cljs.core.cst$kw$content);
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$code_DASH_block,(function (p__47056){
var map__47057 = p__47056;
var map__47057__$1 = ((((!((map__47057 == null)))?((((map__47057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47057):map__47057);
var block = map__47057__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47057__$1,cljs.core.cst$kw$content);
var G__47059 = devcards.core.CodeHighlight;
var G__47060 = {"code": cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(block), "lang": cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(block)};
return React.createElement(G__47059,G__47060);
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__7303__auto__ = [];
var len__7296__auto___47071 = arguments.length;
var i__7297__auto___47072 = (0);
while(true){
if((i__7297__auto___47072 < len__7296__auto___47071)){
args__7303__auto__.push((arguments[i__7297__auto___47072]));

var G__47073 = (i__7297__auto___47072 + (1));
i__7297__auto___47072 = G__47073;
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
var G__47062 = "div";
var G__47063 = {"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"};
var G__47064 = sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__47062,G__47063,blocks,strs__$1){
return (function (i,data){
var G__47065 = "div";
var G__47066 = {"key": i};
var G__47067 = sablono.interpreter.interpret((devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1 ? devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1(data) : devcards.core.markdown_block__GT_react.call(null,data)));
return React.createElement(G__47065,G__47066,G__47067);
});})(G__47062,G__47063,blocks,strs__$1))
,blocks));
return React.createElement(G__47062,G__47063,G__47064);
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__47068 = "div";
var G__47069 = {"style": {"color": "#a94442"}, "key": "devcards-markdown-error"};
var G__47070 = sablono.interpreter.interpret(message);
return React.createElement(G__47068,G__47069,G__47070);
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq47061){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47061));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$classname], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$padding], null));
var G__47080 = "div";
var G__47081 = {"key": "devcards_naked-card", "className": (function (){var G__47083 = devcards.system.devcards_rendered_card_class;
var G__47083__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__47083),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__47083);
if(cljs.core.truth_(cljs.core.not_empty(classname))){
return [cljs.core.str(G__47083__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__47083__$1;
}
})()};
var G__47082 = sablono.interpreter.interpret(children);
return React.createElement(G__47080,G__47081,G__47082);
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args47084 = [];
var len__7296__auto___47106 = arguments.length;
var i__7297__auto___47107 = (0);
while(true){
if((i__7297__auto___47107 < len__7296__auto___47106)){
args47084.push((arguments[i__7297__auto___47107]));

var G__47108 = (i__7297__auto___47107 + (1));
i__7297__auto___47107 = G__47108;
continue;
} else {
}
break;
}

var G__47086 = args47084.length;
switch (G__47086) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47084.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__47087 = card;
var map__47087__$1 = ((((!((map__47087 == null)))?((((map__47087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47087):map__47087);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47087__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47087__$1,cljs.core.cst$kw$options);
if(cljs.core.not(cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.cst$kw$heading.cljs$core$IFn$_invoke$arity$1(options) === false){
var G__47089 = "div";
var G__47090 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": sablono.util.join_classes(cljs.core.PersistentHashSet.fromArray([[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$hide_DASH_border.cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], true))};
var G__47091 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__47089,G__47090,G__47091);
} else {
var G__47092 = "div";
var G__47093 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"};
var G__47094 = (function (){var G__47096 = "div";
var G__47097 = {"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"};
var G__47098 = (cljs.core.truth_(path)?sablono.interpreter.interpret((function (){var G__47099 = "a";
var G__47100 = {"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__47099,G__47096,G__47097,G__47092,G__47093,map__47087,map__47087__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__47099,G__47096,G__47097,G__47092,G__47093,map__47087,map__47087__$1,path,options))
)};
var G__47101 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__47102 = " ";
return React.createElement(G__47099,G__47100,G__47101,G__47102);
})()):sablono.interpreter.interpret((function (){var attrs47103 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs47103))?sablono.interpreter.attributes(attrs47103):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47103))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47103)], null))));
})()));
return React.createElement(G__47096,G__47097,G__47098);
})();
var G__47095 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__47092,G__47093,G__47094,G__47095);
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
var base__20888__auto___47115 = {"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((next_props["change_count"]),devcards.core.get_props(this$,cljs.core.cst$kw$change_count));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs47110 = devcards.core.get_props(this$,cljs.core.cst$kw$children_thunk);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs47110))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-dont-update",null], null), null)], null),attrs47110], 0))):{"className": "com-rigsomelight-dont-update"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47110))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47110)], null))));
})};
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__20888__auto___47115);
}

var seq__47111_47116 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__47112_47117 = null;
var count__47113_47118 = (0);
var i__47114_47119 = (0);
while(true){
if((i__47114_47119 < count__47113_47118)){
var property__20889__auto___47120 = chunk__47112_47117.cljs$core$IIndexed$_nth$arity$2(null,i__47114_47119);
if(cljs.core.truth_((base__20888__auto___47115[property__20889__auto___47120]))){
(devcards.core.DontUpdate.prototype[property__20889__auto___47120] = (base__20888__auto___47115[property__20889__auto___47120]));
} else {
}

var G__47121 = seq__47111_47116;
var G__47122 = chunk__47112_47117;
var G__47123 = count__47113_47118;
var G__47124 = (i__47114_47119 + (1));
seq__47111_47116 = G__47121;
chunk__47112_47117 = G__47122;
count__47113_47118 = G__47123;
i__47114_47119 = G__47124;
continue;
} else {
var temp__4657__auto___47125 = cljs.core.seq(seq__47111_47116);
if(temp__4657__auto___47125){
var seq__47111_47126__$1 = temp__4657__auto___47125;
if(cljs.core.chunked_seq_QMARK_(seq__47111_47126__$1)){
var c__7032__auto___47127 = cljs.core.chunk_first(seq__47111_47126__$1);
var G__47128 = cljs.core.chunk_rest(seq__47111_47126__$1);
var G__47129 = c__7032__auto___47127;
var G__47130 = cljs.core.count(c__7032__auto___47127);
var G__47131 = (0);
seq__47111_47116 = G__47128;
chunk__47112_47117 = G__47129;
count__47113_47118 = G__47130;
i__47114_47119 = G__47131;
continue;
} else {
var property__20889__auto___47132 = cljs.core.first(seq__47111_47126__$1);
if(cljs.core.truth_((base__20888__auto___47115[property__20889__auto___47132]))){
(devcards.core.DontUpdate.prototype[property__20889__auto___47132] = (base__20888__auto___47115[property__20889__auto___47132]));
} else {
}

var G__47133 = cljs.core.next(seq__47111_47126__$1);
var G__47134 = null;
var G__47135 = (0);
var G__47136 = (0);
seq__47111_47116 = G__47133;
chunk__47112_47117 = G__47134;
count__47113_47118 = G__47135;
i__47114_47119 = G__47136;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
var G__47139 = devcards.core.DontUpdate;
var G__47140 = {"change_count": change_count, "children_thunk": children_thunk};
return React.createElement(G__47139,G__47140);
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
var main__$1 = (function (){var G__47149 = "div";
var G__47150 = {"key": "devcards-main-section"};
var G__47151 = sablono.interpreter.interpret(main);
return React.createElement(G__47149,G__47150,G__47151);
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
var G__47152 = "div";
var G__47153 = {"className": "com-rigsomelight-devcards-frameless"};
var G__47154 = sablono.interpreter.interpret(children);
return React.createElement(G__47152,G__47153,G__47154);
}
});
var base__20888__auto___47159 = {"getInitialState": (function (){
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
devcards.core.DevcardBase = React.createClass(base__20888__auto___47159);
}

var seq__47155_47160 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__47156_47161 = null;
var count__47157_47162 = (0);
var i__47158_47163 = (0);
while(true){
if((i__47158_47163 < count__47157_47162)){
var property__20889__auto___47164 = chunk__47156_47161.cljs$core$IIndexed$_nth$arity$2(null,i__47158_47163);
if(cljs.core.truth_((base__20888__auto___47159[property__20889__auto___47164]))){
(devcards.core.DevcardBase.prototype[property__20889__auto___47164] = (base__20888__auto___47159[property__20889__auto___47164]));
} else {
}

var G__47165 = seq__47155_47160;
var G__47166 = chunk__47156_47161;
var G__47167 = count__47157_47162;
var G__47168 = (i__47158_47163 + (1));
seq__47155_47160 = G__47165;
chunk__47156_47161 = G__47166;
count__47157_47162 = G__47167;
i__47158_47163 = G__47168;
continue;
} else {
var temp__4657__auto___47169 = cljs.core.seq(seq__47155_47160);
if(temp__4657__auto___47169){
var seq__47155_47170__$1 = temp__4657__auto___47169;
if(cljs.core.chunked_seq_QMARK_(seq__47155_47170__$1)){
var c__7032__auto___47171 = cljs.core.chunk_first(seq__47155_47170__$1);
var G__47172 = cljs.core.chunk_rest(seq__47155_47170__$1);
var G__47173 = c__7032__auto___47171;
var G__47174 = cljs.core.count(c__7032__auto___47171);
var G__47175 = (0);
seq__47155_47160 = G__47172;
chunk__47156_47161 = G__47173;
count__47157_47162 = G__47174;
i__47158_47163 = G__47175;
continue;
} else {
var property__20889__auto___47176 = cljs.core.first(seq__47155_47170__$1);
if(cljs.core.truth_((base__20888__auto___47159[property__20889__auto___47176]))){
(devcards.core.DevcardBase.prototype[property__20889__auto___47176] = (base__20888__auto___47159[property__20889__auto___47176]));
} else {
}

var G__47177 = cljs.core.next(seq__47155_47170__$1);
var G__47178 = null;
var G__47179 = (0);
var G__47180 = (0);
seq__47155_47160 = G__47177;
chunk__47156_47161 = G__47178;
count__47157_47162 = G__47179;
i__47158_47163 = G__47180;
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
var G__47181 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__47182 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__47181,G__47182) : node_fn.call(null,G__47181,G__47182));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__20888__auto___47189 = {"getInitialState": (function (){
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
var G__47183 = {"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,cljs.core.cst$kw$unique_id)};
var G__47184 = "Card has not mounted DOM node.";
return React.DOM.div(G__47183,G__47184);
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__20888__auto___47189);
}

var seq__47185_47190 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__47186_47191 = null;
var count__47187_47192 = (0);
var i__47188_47193 = (0);
while(true){
if((i__47188_47193 < count__47187_47192)){
var property__20889__auto___47194 = chunk__47186_47191.cljs$core$IIndexed$_nth$arity$2(null,i__47188_47193);
if(cljs.core.truth_((base__20888__auto___47189[property__20889__auto___47194]))){
(devcards.core.DomComponent.prototype[property__20889__auto___47194] = (base__20888__auto___47189[property__20889__auto___47194]));
} else {
}

var G__47195 = seq__47185_47190;
var G__47196 = chunk__47186_47191;
var G__47197 = count__47187_47192;
var G__47198 = (i__47188_47193 + (1));
seq__47185_47190 = G__47195;
chunk__47186_47191 = G__47196;
count__47187_47192 = G__47197;
i__47188_47193 = G__47198;
continue;
} else {
var temp__4657__auto___47199 = cljs.core.seq(seq__47185_47190);
if(temp__4657__auto___47199){
var seq__47185_47200__$1 = temp__4657__auto___47199;
if(cljs.core.chunked_seq_QMARK_(seq__47185_47200__$1)){
var c__7032__auto___47201 = cljs.core.chunk_first(seq__47185_47200__$1);
var G__47202 = cljs.core.chunk_rest(seq__47185_47200__$1);
var G__47203 = c__7032__auto___47201;
var G__47204 = cljs.core.count(c__7032__auto___47201);
var G__47205 = (0);
seq__47185_47190 = G__47202;
chunk__47186_47191 = G__47203;
count__47187_47192 = G__47204;
i__47188_47193 = G__47205;
continue;
} else {
var property__20889__auto___47206 = cljs.core.first(seq__47185_47200__$1);
if(cljs.core.truth_((base__20888__auto___47189[property__20889__auto___47206]))){
(devcards.core.DomComponent.prototype[property__20889__auto___47206] = (base__20888__auto___47189[property__20889__auto___47206]));
} else {
}

var G__47207 = cljs.core.next(seq__47185_47200__$1);
var G__47208 = null;
var G__47209 = (0);
var G__47210 = (0);
seq__47185_47190 = G__47207;
chunk__47186_47191 = G__47208;
count__47187_47192 = G__47209;
i__47188_47193 = G__47210;
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
return (function (p1__47211_SHARP_){
return !(p1__47211_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__47220 = opts;
var map__47220__$1 = ((((!((map__47220 == null)))?((((map__47220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47220):map__47220);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47220__$1,cljs.core.cst$kw$name);
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47220__$1,cljs.core.cst$kw$main_DASH_obj);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47220__$1,cljs.core.cst$kw$initial_DASH_data);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47220__$1,cljs.core.cst$kw$options);
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
})()], null),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__47220,map__47220__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__47212_SHARP_){
return devcards.core.booler_QMARK_(p1__47212_SHARP_,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(opts));
});})(map__47220,map__47220__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame,cljs.core.cst$kw$heading,cljs.core.cst$kw$padding,cljs.core.cst$kw$inspect_DASH_data,cljs.core.cst$kw$watch_DASH_atom,cljs.core.cst$kw$history,cljs.core.cst$kw$static_DASH_state], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Card should be a Map.",cljs.core.cst$kw$value,opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__47243 = "div";
var G__47244 = {"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}};
var G__47245 = sablono.interpreter.interpret((function (){var G__47248 = "code";
var G__47249 = {"style": {"flex": "1 100px", "marginRight": "10px"}};
var G__47250 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e)], 0)):null));
return React.createElement(G__47248,G__47249,G__47250);
})());
var G__47246 = (function (){var G__47251 = "span";
var G__47252 = {"style": {"flex": "3 100px", "marginRight": "10px"}};
var G__47253 = sablono.interpreter.interpret(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(e));
return React.createElement(G__47251,G__47252,G__47253);
})();
var G__47247 = (function (){var G__47255 = "span";
var G__47256 = {"style": {"flex": "1 100px"}};
var G__47257 = " Received: ";
var G__47258 = (function (){var attrs47254 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs47254))?sablono.interpreter.attributes(attrs47254):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47254))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47254)], null))));
})();
return React.createElement(G__47255,G__47256,G__47257,G__47258);
})();
return React.createElement(G__47243,G__47244,G__47245,G__47246,G__47247);
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__47272 = "div";
var G__47273 = {"className": "com-rigsomelight-devcards-card-base-no-pad"};
var G__47274 = (function (){var attrs47271 = [cljs.core.str((((cljs.core.map_QMARK_(opts)) && (typeof cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs47271))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["com-rigsomelight-devcards-fail",null,"com-rigsomelight-devcards-panel-heading",null], null), null)], null),attrs47271], 0))):{"className": "com-rigsomelight-devcards-fail com-rigsomelight-devcards-panel-heading"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47271))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47271)], null))));
})();
var G__47275 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__47278 = "div";
var G__47279 = null;
var G__47280 = (function (){var attrs47276 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs47276))?sablono.interpreter.attributes(attrs47276):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47276))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47276)], null))));
})();
var G__47281 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(opts))?(function (){var attrs47282 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),cljs.core.dissoc,cljs.core.cst$kw$propagated_DASH_errors));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs47282))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-devcards-padding-top-border",null], null), null)], null),attrs47282], 0))):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47282))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47282)], null))));
})():null));
return React.createElement(G__47278,G__47279,G__47280,G__47281);
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,true], null)], null)));
return React.createElement(G__47272,G__47273,G__47274,G__47275);
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),(function (p1__47283_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state))),p1__47283_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
var G__47286 = devcards.core.DevcardBase;
var G__47287 = {"card": devcards.core.add_environment_defaults(card_options)};
return React.createElement(G__47286,G__47287);
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

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6845__auto__,k47289,else__6846__auto__){
var self__ = this;
var this__6845__auto____$1 = this;
var G__47291 = (((k47289 instanceof cljs.core.Keyword))?k47289.fqn:null);
switch (G__47291) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47289,else__6846__auto__);

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

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47288){
var self__ = this;
var G__47288__$1 = this;
return (new cljs.core.RecordIter((0),G__47288__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
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

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6850__auto__,k__6851__auto__,G__47288){
var self__ = this;
var this__6850__auto____$1 = this;
var pred__47292 = cljs.core.keyword_identical_QMARK_;
var expr__47293 = k__6851__auto__;
if(cljs.core.truth_((pred__47292.cljs$core$IFn$_invoke$arity$2 ? pred__47292.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__47293) : pred__47292.call(null,cljs.core.cst$kw$obj,expr__47293)))){
return (new devcards.core.IdentiyOptions(G__47288,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6851__auto__,G__47288),null));
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

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6842__auto__,G__47288){
var self__ = this;
var this__6842__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__47288,self__.__extmap,self__.__hash));
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

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__47290){
return (new devcards.core.IdentiyOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__47290),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47290,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__47296){
var map__47299 = p__47296;
var map__47299__$1 = ((((!((map__47299 == null)))?((((map__47299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47299):map__47299);
var devcard_opts = map__47299__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47299__$1,cljs.core.cst$kw$options);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,cljs.core.cst$kw$main_DASH_obj,((function (map__47299,map__47299__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
});})(map__47299,map__47299__$1,devcard_opts,options))
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

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6845__auto__,k47302,else__6846__auto__){
var self__ = this;
var this__6845__auto____$1 = this;
var G__47304 = (((k47302 instanceof cljs.core.Keyword))?k47302.fqn:null);
switch (G__47304) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47302,else__6846__auto__);

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

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47301){
var self__ = this;
var G__47301__$1 = this;
return (new cljs.core.RecordIter((0),G__47301__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
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

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6850__auto__,k__6851__auto__,G__47301){
var self__ = this;
var this__6850__auto____$1 = this;
var pred__47305 = cljs.core.keyword_identical_QMARK_;
var expr__47306 = k__6851__auto__;
if(cljs.core.truth_((pred__47305.cljs$core$IFn$_invoke$arity$2 ? pred__47305.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__47306) : pred__47305.call(null,cljs.core.cst$kw$obj,expr__47306)))){
return (new devcards.core.AtomLikeOptions(G__47301,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6851__auto__,G__47301),null));
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

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6842__auto__,G__47301){
var self__ = this;
var this__6842__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__47301,self__.__extmap,self__.__hash));
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

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__47303){
return (new devcards.core.AtomLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__47303),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47303,cljs.core.cst$kw$obj),null));
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

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6845__auto__,k47312,else__6846__auto__){
var self__ = this;
var this__6845__auto____$1 = this;
var G__47314 = (((k47312 instanceof cljs.core.Keyword))?k47312.fqn:null);
switch (G__47314) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47312,else__6846__auto__);

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

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47311){
var self__ = this;
var G__47311__$1 = this;
return (new cljs.core.RecordIter((0),G__47311__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
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

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6850__auto__,k__6851__auto__,G__47311){
var self__ = this;
var this__6850__auto____$1 = this;
var pred__47315 = cljs.core.keyword_identical_QMARK_;
var expr__47316 = k__6851__auto__;
if(cljs.core.truth_((pred__47315.cljs$core$IFn$_invoke$arity$2 ? pred__47315.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__47316) : pred__47315.call(null,cljs.core.cst$kw$obj,expr__47316)))){
return (new devcards.core.EdnLikeOptions(G__47311,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6851__auto__,G__47311),null));
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

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6842__auto__,G__47311){
var self__ = this;
var this__6842__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__47311,self__.__extmap,self__.__hash));
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

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__47313){
return (new devcards.core.EdnLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__47313),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47313,cljs.core.cst$kw$obj),null));
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
if((function (){var G__47330 = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__47330 == null))){
if((false) || (G__47330.devcards$core$IDevcard$)){
return true;
} else {
if((!G__47330.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__47330);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__47330);
}
})()){
return devcards.core._devcard(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
var G__47333 = devcards.core.DomComponent;
var G__47334 = {"node_fn": node_fn, "data_atom": data_atom};
return React.createElement(G__47333,G__47334);
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
var map__47338 = (function (){var G__47339 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47339) : cljs.core.deref.call(null,G__47339));
})();
var map__47338__$1 = ((((!((map__47338 == null)))?((((map__47338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47338):map__47338);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47338__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47338__$1,cljs.core.cst$kw$pointer);
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__47342 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47342) : cljs.core.deref.call(null,G__47342));
})()) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__47344 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47344) : cljs.core.deref.call(null,G__47344));
})()) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__47349 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__47349__$1 = ((((!((map__47349 == null)))?((((map__47349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47349):map__47349);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47349__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47349__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_back(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer + (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__47351_47353 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__47352_47354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__47351_47353,G__47352_47354) : cljs.core.reset_BANG_.call(null,G__47351_47353,G__47352_47354));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__47359 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__47359__$1 = ((((!((map__47359 == null)))?((((map__47359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47359):map__47359);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47359__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47359__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer - (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__47361_47363 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__47362_47364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__47361_47363,G__47362_47364) : cljs.core.reset_BANG_.call(null,G__47361_47363,G__47362_47364));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__47369 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__47369__$1 = ((((!((map__47369 == null)))?((((map__47369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47369):map__47369);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47369__$1,cljs.core.cst$kw$history);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(0),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__47371_47373 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__47372_47374 = cljs.core.first(history);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__47371_47373,G__47372_47374) : cljs.core.reset_BANG_.call(null,G__47371_47373,G__47372_47374));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var G__47430 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_history_DASH_runner_DASH_))].join(''), "history_atom": (function (){var G__47431 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,cljs.core.List.EMPTY,cljs.core.cst$kw$pointer,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__47431) : cljs.core.atom.call(null,G__47431));
})()};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$history], null),(function (){var x__7055__auto__ = (function (){var G__47433 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47433) : cljs.core.deref.call(null,G__47433));
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
return (function (p__47434){
var map__47435 = p__47434;
var map__47435__$1 = ((((!((map__47435 == null)))?((((map__47435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47435):map__47435);
var ha = map__47435__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47435__$1,cljs.core.cst$kw$pointer);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47435__$1,cljs.core.cst$kw$history);
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47435__$1,cljs.core.cst$kw$ignore_DASH_click);
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
var G__47437 = "div";
var G__47438 = {"style": {"display": (cljs.core.truth_((function (){var or__6221__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"};
var G__47439 = sablono.interpreter.interpret((function (){var action = ((function (G__47437,G__47438,this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});})(G__47437,G__47438,this$))
;
var G__47445 = "button";
var G__47446 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back(this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action};
var G__47447 = (function (){var G__47448 = "span";
var G__47449 = {"className": "com-rigsomelight-devcards-history-control-left"};
var G__47450 = "";
return React.createElement(G__47448,G__47449,G__47450);
})();
return React.createElement(G__47445,G__47446,G__47447);
})());
var G__47440 = sablono.interpreter.interpret((function (){var action = ((function (G__47437,G__47438,G__47439,this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__47451 = data_atom;
var G__47452 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__47451,G__47452) : cljs.core.reset_BANG_.call(null,G__47451,G__47452));
});})(G__47437,G__47438,G__47439,this$))
;
var G__47455 = "button";
var G__47456 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action};
var G__47457 = (function (){var G__47458 = "span";
var G__47459 = {"className": "com-rigsomelight-devcards-history-stop"};
var G__47460 = "";
return React.createElement(G__47458,G__47459,G__47460);
})();
return React.createElement(G__47455,G__47456,G__47457);
})());
var G__47441 = sablono.interpreter.interpret((function (){var action = ((function (G__47437,G__47438,G__47439,G__47440,this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});})(G__47437,G__47438,G__47439,G__47440,this$))
;
var G__47463 = "button";
var G__47464 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action};
var G__47465 = (function (){var G__47466 = "span";
var G__47467 = {"className": "com-rigsomelight-devcards-history-control-right"};
var G__47468 = "";
return React.createElement(G__47466,G__47467,G__47468);
})();
return React.createElement(G__47463,G__47464,G__47465);
})());
var G__47442 = sablono.interpreter.interpret((function (){var listener = ((function (G__47437,G__47438,G__47439,G__47440,G__47441,this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});})(G__47437,G__47438,G__47439,G__47440,G__47441,this$))
;
var G__47475 = "button";
var G__47476 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener};
var G__47477 = (function (){var G__47480 = "span";
var G__47481 = {"className": "com-rigsomelight-devcards-history-control-small-arrow"};
return React.createElement(G__47480,G__47481);
})();
var G__47478 = (function (){var G__47482 = "span";
var G__47483 = {"className": "com-rigsomelight-devcards-history-control-small-arrow"};
return React.createElement(G__47482,G__47483);
})();
var G__47479 = (function (){var G__47484 = "span";
var G__47485 = {"className": "com-rigsomelight-devcards-history-control-block"};
return React.createElement(G__47484,G__47485);
})();
return React.createElement(G__47475,G__47476,G__47477,G__47478,G__47479);
})());
return React.createElement(G__47437,G__47438,G__47439,G__47440,G__47441,G__47442);
} else {
return null;
}
})};
return React.createClass(G__47430);
})();
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
var G__47488 = devcards.core.HistoryComponent;
var G__47489 = {"data_atom": data_atom, "key": "devcards-history-control-bar"};
return React.createElement(G__47488,G__47489);
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
var _STAR_current_env_STAR_47491 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_47491;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__7146__auto__ = (function (){var G__47492 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__47492) : cljs.core.atom.call(null,G__47492));
})();
var prefer_table__7147__auto__ = (function (){var G__47493 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__47493) : cljs.core.atom.call(null,G__47493));
})();
var method_cache__7148__auto__ = (function (){var G__47494 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__47494) : cljs.core.atom.call(null,G__47494));
})();
var cached_hierarchy__7149__auto__ = (function (){var G__47495 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__47495) : cljs.core.atom.call(null,G__47495));
})();
var hierarchy__7150__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__7150__auto__,method_table__7146__auto__,prefer_table__7147__auto__,method_cache__7148__auto__,cached_hierarchy__7149__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
var attrs47496 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs47496))?sablono.interpreter.attributes(attrs47496):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47496))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47496)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__47497,body){
var map__47505 = p__47497;
var map__47505__$1 = ((((!((map__47505 == null)))?((((map__47505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47505):map__47505);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47505__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(message)){
var G__47508 = "div";
var G__47509 = null;
var G__47510 = (function (){var attrs47507 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs47507))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-devcards-test-message",null], null), null)], null),attrs47507], 0))):{"className": "com-rigsomelight-devcards-test-message"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47507))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47507)], null))));
})();
var G__47511 = sablono.interpreter.interpret(body);
return React.createElement(G__47508,G__47509,G__47510,G__47511);
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__47512){
var map__47546 = p__47512;
var map__47546__$1 = ((((!((map__47546 == null)))?((((map__47546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47546):map__47546);
var m = map__47546__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47546__$1,cljs.core.cst$kw$expected);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47546__$1,cljs.core.cst$kw$actual);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47546__$1,cljs.core.cst$kw$type);
return devcards.core.display_message(m,(function (){var attrs47548 = (function (){var G__47549 = devcards.core.CodeHighlight;
var G__47550 = {"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"};
return React.createElement(G__47549,G__47550);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs47548))?sablono.interpreter.attributes(attrs47548):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47548))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?(function (){var G__47553 = "div";
var G__47554 = {"style": {"marginTop": "5px"}};
var G__47555 = (function (){var G__47557 = "div";
var G__47558 = {"style": {"position": "absolute", "fontSize": "0.9em"}};
var G__47559 = "\u25B6";
return React.createElement(G__47557,G__47558,G__47559);
})();
var G__47556 = (function (){var G__47560 = "div";
var G__47561 = {"style": {"marginLeft": "20px"}};
var G__47562 = sablono.interpreter.interpret((function (){var G__47563 = devcards.core.CodeHighlight;
var G__47564 = {"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"};
return React.createElement(G__47563,G__47564);
})());
return React.createElement(G__47560,G__47561,G__47562);
})();
return React.createElement(G__47553,G__47554,G__47555,G__47556);
})():null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47548),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?(function (){var G__47567 = "div";
var G__47568 = {"style": {"marginTop": "5px"}};
var G__47569 = (function (){var G__47571 = "div";
var G__47572 = {"style": {"position": "absolute", "fontSize": "0.9em"}};
var G__47573 = "\u25B6";
return React.createElement(G__47571,G__47572,G__47573);
})();
var G__47570 = (function (){var G__47574 = "div";
var G__47575 = {"style": {"marginLeft": "20px"}};
var G__47576 = sablono.interpreter.interpret((function (){var G__47577 = devcards.core.CodeHighlight;
var G__47578 = {"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"};
return React.createElement(G__47577,G__47578);
})());
return React.createElement(G__47574,G__47575,G__47576);
})();
return React.createElement(G__47567,G__47568,G__47569,G__47570);
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
return devcards.core.display_message(m,(function (){var G__47582 = "div";
var G__47583 = null;
var G__47584 = React.createElement("strong",null,"Error: ");
var G__47585 = (function (){var attrs47581 = [cljs.core.str(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs47581))?sablono.interpreter.attributes(attrs47581):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47581))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47581)], null))));
})();
return React.createElement(G__47582,G__47583,G__47584,G__47585);
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$test_DASH_doc,(function (m){
var attrs47586 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs47586))?sablono.interpreter.attributes(attrs47586):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47586))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47586)], null))));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (p__47587){
var map__47588 = p__47587;
var map__47588__$1 = ((((!((map__47588 == null)))?((((map__47588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47588):map__47588);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47588__$1,cljs.core.cst$kw$testing_DASH_contexts);
var attrs47590 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__47588,map__47588__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#bbb"], null)], null),t," "], null);
});})(map__47588,map__47588__$1,testing_contexts))
,cljs.core.reverse(cljs.core.rest(testing_contexts))),(function (){var x__7055__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(-1)], null),cljs.core.first(testing_contexts)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs47590))?sablono.interpreter.attributes(attrs47590):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47590))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47590)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
var G__47592 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$test_DASH_doc,cljs.core.cst$kw$documentation,s], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__47592) : cljs.test.report.call(null,G__47592));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t,i], 0)),cljs.core.cst$kw$className,[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),(devcards.core.test_render.cljs$core$IFn$_invoke$arity$1 ? devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t) : devcards.core.test_render.call(null,t))], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs47601 = cljs.core.cst$kw$html_DASH_list.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__47602,p__47603){
var map__47604 = p__47602;
var map__47604__$1 = ((((!((map__47604 == null)))?((((map__47604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47604):map__47604);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47604__$1,cljs.core.cst$kw$last_DASH_context);
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47604__$1,cljs.core.cst$kw$html_DASH_list);
var vec__47605 = p__47603;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47605,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47605,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$last_DASH_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t),cljs.core.cst$kw$html_DASH_list,(function (){var res = (function (){var x__7055__auto__ = devcards.core.test_renderer(t,i);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})();
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$context], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null))], 0)),i),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.reverse(tests))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs47601))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-devcards-test-card",null], null), null)], null),attrs47601], 0))):{"className": "com-rigsomelight-devcards-test-card"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47601))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47601)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (error_QMARK_,tests){
return (function (p__47652){
var map__47653 = p__47652;
var map__47653__$1 = ((((!((map__47653 == null)))?((((map__47653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47653):map__47653);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47653__$1,cljs.core.cst$kw$type);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$test_DASH_doc);
});})(error_QMARK_,tests))
,cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__47651 = cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(test_summary);
var map__47651__$1 = ((((!((map__47651 == null)))?((((map__47651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47651):map__47651);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47651__$1,cljs.core.cst$kw$fail);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47651__$1,cljs.core.cst$kw$pass);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47651__$1,cljs.core.cst$kw$error);
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__47656 = "div";
var G__47657 = {"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"};
var G__47658 = (function (){var G__47660 = "div";
var G__47661 = {"className": "com-rigsomelight-devcards-panel-heading"};
var G__47662 = (function (){var G__47666 = "a";
var G__47667 = {"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__47666,G__47660,G__47661,G__47656,G__47657,error_QMARK_,tests,some_tests,total_tests,map__47651,map__47651__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__47666,G__47660,G__47661,G__47656,G__47657,error_QMARK_,tests,some_tests,total_tests,map__47651,map__47651__$1,fail,pass,error,error__$1))
)};
var G__47668 = sablono.interpreter.interpret((cljs.core.truth_(path)?[cljs.core.str(cljs.core.name(cljs.core.last(path)))].join(''):null));
return React.createElement(G__47666,G__47667,G__47668);
})();
var G__47663 = (function (){var G__47669 = "button";
var G__47670 = {"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__47669,G__47660,G__47661,G__47662,G__47656,G__47657,error_QMARK_,tests,some_tests,total_tests,map__47651,map__47651__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(G__47669,G__47660,G__47661,G__47662,G__47656,G__47657,error_QMARK_,tests,some_tests,total_tests,map__47651,map__47651__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__47671 = sablono.interpreter.interpret(total_tests);
return React.createElement(G__47669,G__47670,G__47671);
})();
var G__47664 = sablono.interpreter.interpret(((((fail + error__$1) === (0)))?null:(function (){var G__47675 = "button";
var G__47676 = {"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__47675,G__47660,G__47661,G__47662,G__47663,G__47656,G__47657,error_QMARK_,tests,some_tests,total_tests,map__47651,map__47651__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (G__47675,G__47660,G__47661,G__47662,G__47663,G__47656,G__47657,error_QMARK_,tests,some_tests,total_tests,map__47651,map__47651__$1,fail,pass,error,error__$1){
return (function (p__47678){
var map__47679 = p__47678;
var map__47679__$1 = ((((!((map__47679 == null)))?((((map__47679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47679):map__47679);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47679__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail,null,cljs.core.cst$kw$error,null], null), null).call(null,type);
});})(G__47675,G__47660,G__47661,G__47662,G__47663,G__47656,G__47657,error_QMARK_,tests,some_tests,total_tests,map__47651,map__47651__$1,fail,pass,error,error__$1))
});
});})(G__47675,G__47660,G__47661,G__47662,G__47663,G__47656,G__47657,error_QMARK_,tests,some_tests,total_tests,map__47651,map__47651__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__47677 = sablono.interpreter.interpret([cljs.core.str((fail + error__$1))].join(''));
return React.createElement(G__47675,G__47676,G__47677);
})()));
var G__47665 = sablono.interpreter.interpret(((((pass == null)) || ((pass === (0))))?null:(function (){var G__47684 = "button";
var G__47685 = {"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__47684,G__47660,G__47661,G__47662,G__47663,G__47664,G__47656,G__47657,error_QMARK_,tests,some_tests,total_tests,map__47651,map__47651__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (G__47684,G__47660,G__47661,G__47662,G__47663,G__47664,G__47656,G__47657,error_QMARK_,tests,some_tests,total_tests,map__47651,map__47651__$1,fail,pass,error,error__$1){
return (function (p__47687){
var map__47688 = p__47687;
var map__47688__$1 = ((((!((map__47688 == null)))?((((map__47688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47688):map__47688);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47688__$1,cljs.core.cst$kw$type);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$pass);
});})(G__47684,G__47660,G__47661,G__47662,G__47663,G__47664,G__47656,G__47657,error_QMARK_,tests,some_tests,total_tests,map__47651,map__47651__$1,fail,pass,error,error__$1))
});
});})(G__47684,G__47660,G__47661,G__47662,G__47663,G__47664,G__47656,G__47657,error_QMARK_,tests,some_tests,total_tests,map__47651,map__47651__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__47686 = sablono.interpreter.interpret(pass);
return React.createElement(G__47684,G__47685,G__47686);
})()));
return React.createElement(G__47660,G__47661,G__47662,G__47663,G__47664,G__47665);
})();
var G__47659 = (function (){var G__47690 = "div";
var G__47691 = {"className": devcards.system.devcards_rendered_card_class};
var G__47692 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__6221__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$filter);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return React.createElement(G__47690,G__47691,G__47692);
})();
return React.createElement(G__47656,G__47657,G__47658,G__47659);
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
return (function (state_47781){
var state_val_47782 = (state_47781[(1)]);
if((state_val_47782 === (7))){
var state_47781__$1 = state_47781;
var statearr_47783_47832 = state_47781__$1;
(statearr_47783_47832[(2)] = false);

(statearr_47783_47832[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (20))){
var inst_47720 = (state_47781[(7)]);
var inst_47739 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47720);
var state_47781__$1 = state_47781;
var statearr_47784_47833 = state_47781__$1;
(statearr_47784_47833[(2)] = inst_47739);

(statearr_47784_47833[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (27))){
var inst_47756 = (state_47781[(8)]);
var inst_47744 = (state_47781[(9)]);
var inst_47760 = (inst_47744.cljs$core$IFn$_invoke$arity$1 ? inst_47744.cljs$core$IFn$_invoke$arity$1(inst_47756) : inst_47744.call(null,inst_47756));
var state_47781__$1 = state_47781;
var statearr_47785_47834 = state_47781__$1;
(statearr_47785_47834[(2)] = inst_47760);

(statearr_47785_47834[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (1))){
var state_47781__$1 = state_47781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47781__$1,(2),devcards.core.test_channel);
} else {
if((state_val_47782 === (24))){
var state_47781__$1 = state_47781;
var statearr_47786_47835 = state_47781__$1;
(statearr_47786_47835[(2)] = null);

(statearr_47786_47835[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (4))){
var state_47781__$1 = state_47781;
var statearr_47787_47836 = state_47781__$1;
(statearr_47787_47836[(2)] = false);

(statearr_47787_47836[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (15))){
var state_47781__$1 = state_47781;
var statearr_47788_47837 = state_47781__$1;
(statearr_47788_47837[(2)] = false);

(statearr_47788_47837[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (21))){
var inst_47720 = (state_47781[(7)]);
var state_47781__$1 = state_47781;
var statearr_47789_47838 = state_47781__$1;
(statearr_47789_47838[(2)] = inst_47720);

(statearr_47789_47838[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (13))){
var inst_47779 = (state_47781[(2)]);
var state_47781__$1 = state_47781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47781__$1,inst_47779);
} else {
if((state_val_47782 === (22))){
var inst_47743 = (state_47781[(10)]);
var inst_47742 = (state_47781[(2)]);
var inst_47743__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47742,cljs.core.cst$kw$tests);
var inst_47744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47742,cljs.core.cst$kw$callback);
var state_47781__$1 = (function (){var statearr_47790 = state_47781;
(statearr_47790[(10)] = inst_47743__$1);

(statearr_47790[(9)] = inst_47744);

return statearr_47790;
})();
if(cljs.core.truth_(inst_47743__$1)){
var statearr_47791_47839 = state_47781__$1;
(statearr_47791_47839[(1)] = (23));

} else {
var statearr_47792_47840 = state_47781__$1;
(statearr_47792_47840[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (29))){
var inst_47770 = (state_47781[(2)]);
var inst_47771 = cljs.test.clear_env_BANG_();
var state_47781__$1 = (function (){var statearr_47793 = state_47781;
(statearr_47793[(11)] = inst_47771);

(statearr_47793[(12)] = inst_47770);

return statearr_47793;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47781__$1,(30),devcards.core.test_channel);
} else {
if((state_val_47782 === (6))){
var state_47781__$1 = state_47781;
var statearr_47794_47841 = state_47781__$1;
(statearr_47794_47841[(2)] = true);

(statearr_47794_47841[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (28))){
var inst_47744 = (state_47781[(9)]);
var inst_47762 = [cljs.core.cst$kw$type,cljs.core.cst$kw$actual];
var inst_47763 = [cljs.core.cst$kw$error,"Tests timed out. Please check Dev Console for Exceptions"];
var inst_47764 = cljs.core.PersistentHashMap.fromArrays(inst_47762,inst_47763);
var inst_47765 = devcards.core.collect_test(inst_47764);
var inst_47766 = cljs.test.get_current_env();
var inst_47767 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_47766,cljs.core.cst$kw$error,"Execution timed out!");
var inst_47768 = (inst_47744.cljs$core$IFn$_invoke$arity$1 ? inst_47744.cljs$core$IFn$_invoke$arity$1(inst_47767) : inst_47744.call(null,inst_47767));
var state_47781__$1 = (function (){var statearr_47795 = state_47781;
(statearr_47795[(13)] = inst_47765);

return statearr_47795;
})();
var statearr_47796_47842 = state_47781__$1;
(statearr_47796_47842[(2)] = inst_47768);

(statearr_47796_47842[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (25))){
var inst_47777 = (state_47781[(2)]);
var state_47781__$1 = state_47781;
var statearr_47797_47843 = state_47781__$1;
(statearr_47797_47843[(2)] = inst_47777);

(statearr_47797_47843[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (17))){
var state_47781__$1 = state_47781;
var statearr_47798_47844 = state_47781__$1;
(statearr_47798_47844[(2)] = true);

(statearr_47798_47844[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (3))){
var inst_47697 = (state_47781[(14)]);
var inst_47702 = inst_47697.cljs$lang$protocol_mask$partition0$;
var inst_47703 = (inst_47702 & (64));
var inst_47704 = inst_47697.cljs$core$ISeq$;
var inst_47705 = (inst_47703) || (inst_47704);
var state_47781__$1 = state_47781;
if(cljs.core.truth_(inst_47705)){
var statearr_47799_47845 = state_47781__$1;
(statearr_47799_47845[(1)] = (6));

} else {
var statearr_47800_47846 = state_47781__$1;
(statearr_47800_47846[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (12))){
var inst_47720 = (state_47781[(7)]);
var inst_47724 = (inst_47720 == null);
var inst_47725 = cljs.core.not(inst_47724);
var state_47781__$1 = state_47781;
if(inst_47725){
var statearr_47801_47847 = state_47781__$1;
(statearr_47801_47847[(1)] = (14));

} else {
var statearr_47802_47848 = state_47781__$1;
(statearr_47802_47848[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (2))){
var inst_47697 = (state_47781[(14)]);
var inst_47697__$1 = (state_47781[(2)]);
var inst_47699 = (inst_47697__$1 == null);
var inst_47700 = cljs.core.not(inst_47699);
var state_47781__$1 = (function (){var statearr_47803 = state_47781;
(statearr_47803[(14)] = inst_47697__$1);

return statearr_47803;
})();
if(inst_47700){
var statearr_47804_47849 = state_47781__$1;
(statearr_47804_47849[(1)] = (3));

} else {
var statearr_47805_47850 = state_47781__$1;
(statearr_47805_47850[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (23))){
var inst_47749 = (state_47781[(15)]);
var inst_47743 = (state_47781[(10)]);
var inst_47749__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_47750 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47751 = devcards.core.run_card_tests(inst_47743);
var inst_47752 = [inst_47751,inst_47749__$1];
var inst_47753 = (new cljs.core.PersistentVector(null,2,(5),inst_47750,inst_47752,null));
var state_47781__$1 = (function (){var statearr_47806 = state_47781;
(statearr_47806[(15)] = inst_47749__$1);

return statearr_47806;
})();
return cljs.core.async.ioc_alts_BANG_(state_47781__$1,(26),inst_47753);
} else {
if((state_val_47782 === (19))){
var inst_47734 = (state_47781[(2)]);
var state_47781__$1 = state_47781;
var statearr_47807_47851 = state_47781__$1;
(statearr_47807_47851[(2)] = inst_47734);

(statearr_47807_47851[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (11))){
var inst_47697 = (state_47781[(14)]);
var inst_47717 = (state_47781[(2)]);
var inst_47718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47717,cljs.core.cst$kw$tests);
var inst_47719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47717,cljs.core.cst$kw$callback);
var inst_47720 = inst_47697;
var state_47781__$1 = (function (){var statearr_47808 = state_47781;
(statearr_47808[(16)] = inst_47718);

(statearr_47808[(7)] = inst_47720);

(statearr_47808[(17)] = inst_47719);

return statearr_47808;
})();
var statearr_47809_47852 = state_47781__$1;
(statearr_47809_47852[(2)] = null);

(statearr_47809_47852[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (9))){
var inst_47697 = (state_47781[(14)]);
var inst_47714 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47697);
var state_47781__$1 = state_47781;
var statearr_47810_47853 = state_47781__$1;
(statearr_47810_47853[(2)] = inst_47714);

(statearr_47810_47853[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (5))){
var inst_47712 = (state_47781[(2)]);
var state_47781__$1 = state_47781;
if(cljs.core.truth_(inst_47712)){
var statearr_47811_47854 = state_47781__$1;
(statearr_47811_47854[(1)] = (9));

} else {
var statearr_47812_47855 = state_47781__$1;
(statearr_47812_47855[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (14))){
var inst_47720 = (state_47781[(7)]);
var inst_47727 = inst_47720.cljs$lang$protocol_mask$partition0$;
var inst_47728 = (inst_47727 & (64));
var inst_47729 = inst_47720.cljs$core$ISeq$;
var inst_47730 = (inst_47728) || (inst_47729);
var state_47781__$1 = state_47781;
if(cljs.core.truth_(inst_47730)){
var statearr_47813_47856 = state_47781__$1;
(statearr_47813_47856[(1)] = (17));

} else {
var statearr_47814_47857 = state_47781__$1;
(statearr_47814_47857[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (26))){
var inst_47749 = (state_47781[(15)]);
var inst_47755 = (state_47781[(2)]);
var inst_47756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47755,(0),null);
var inst_47757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47755,(1),null);
var inst_47758 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_47757,inst_47749);
var state_47781__$1 = (function (){var statearr_47815 = state_47781;
(statearr_47815[(8)] = inst_47756);

return statearr_47815;
})();
if(inst_47758){
var statearr_47816_47858 = state_47781__$1;
(statearr_47816_47858[(1)] = (27));

} else {
var statearr_47817_47859 = state_47781__$1;
(statearr_47817_47859[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (16))){
var inst_47737 = (state_47781[(2)]);
var state_47781__$1 = state_47781;
if(cljs.core.truth_(inst_47737)){
var statearr_47818_47860 = state_47781__$1;
(statearr_47818_47860[(1)] = (20));

} else {
var statearr_47819_47861 = state_47781__$1;
(statearr_47819_47861[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (30))){
var inst_47773 = (state_47781[(2)]);
var inst_47720 = inst_47773;
var state_47781__$1 = (function (){var statearr_47820 = state_47781;
(statearr_47820[(7)] = inst_47720);

return statearr_47820;
})();
var statearr_47821_47862 = state_47781__$1;
(statearr_47821_47862[(2)] = null);

(statearr_47821_47862[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (10))){
var inst_47697 = (state_47781[(14)]);
var state_47781__$1 = state_47781;
var statearr_47822_47863 = state_47781__$1;
(statearr_47822_47863[(2)] = inst_47697);

(statearr_47822_47863[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (18))){
var state_47781__$1 = state_47781;
var statearr_47823_47864 = state_47781__$1;
(statearr_47823_47864[(2)] = false);

(statearr_47823_47864[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47782 === (8))){
var inst_47709 = (state_47781[(2)]);
var state_47781__$1 = state_47781;
var statearr_47824_47865 = state_47781__$1;
(statearr_47824_47865[(2)] = inst_47709);

(statearr_47824_47865[(1)] = (5));


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
var statearr_47828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47828[(0)] = devcards$core$state_machine__13585__auto__);

(statearr_47828[(1)] = (1));

return statearr_47828;
});
var devcards$core$state_machine__13585__auto____1 = (function (state_47781){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_47781);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e47829){if((e47829 instanceof Object)){
var ex__13588__auto__ = e47829;
var statearr_47830_47866 = state_47781;
(statearr_47830_47866[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47781);

return cljs.core.cst$kw$recur;
} else {
throw e47829;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__47867 = state_47781;
state_47781 = G__47867;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
devcards$core$state_machine__13585__auto__ = function(state_47781){
switch(arguments.length){
case 0:
return devcards$core$state_machine__13585__auto____0.call(this);
case 1:
return devcards$core$state_machine__13585__auto____1.call(this,state_47781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__13585__auto____0;
devcards$core$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__13585__auto____1;
return devcards$core$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_47831 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_47831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_47831;
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
var base__20888__auto___47872 = {"componentWillMount": (function (){
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
devcards.core.TestDevcard = React.createClass(base__20888__auto___47872);
}

var seq__47868_47873 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__47869_47874 = null;
var count__47870_47875 = (0);
var i__47871_47876 = (0);
while(true){
if((i__47871_47876 < count__47870_47875)){
var property__20889__auto___47877 = chunk__47869_47874.cljs$core$IIndexed$_nth$arity$2(null,i__47871_47876);
if(cljs.core.truth_((base__20888__auto___47872[property__20889__auto___47877]))){
(devcards.core.TestDevcard.prototype[property__20889__auto___47877] = (base__20888__auto___47872[property__20889__auto___47877]));
} else {
}

var G__47878 = seq__47868_47873;
var G__47879 = chunk__47869_47874;
var G__47880 = count__47870_47875;
var G__47881 = (i__47871_47876 + (1));
seq__47868_47873 = G__47878;
chunk__47869_47874 = G__47879;
count__47870_47875 = G__47880;
i__47871_47876 = G__47881;
continue;
} else {
var temp__4657__auto___47882 = cljs.core.seq(seq__47868_47873);
if(temp__4657__auto___47882){
var seq__47868_47883__$1 = temp__4657__auto___47882;
if(cljs.core.chunked_seq_QMARK_(seq__47868_47883__$1)){
var c__7032__auto___47884 = cljs.core.chunk_first(seq__47868_47883__$1);
var G__47885 = cljs.core.chunk_rest(seq__47868_47883__$1);
var G__47886 = c__7032__auto___47884;
var G__47887 = cljs.core.count(c__7032__auto___47884);
var G__47888 = (0);
seq__47868_47873 = G__47885;
chunk__47869_47874 = G__47886;
count__47870_47875 = G__47887;
i__47871_47876 = G__47888;
continue;
} else {
var property__20889__auto___47889 = cljs.core.first(seq__47868_47883__$1);
if(cljs.core.truth_((base__20888__auto___47872[property__20889__auto___47889]))){
(devcards.core.TestDevcard.prototype[property__20889__auto___47889] = (base__20888__auto___47872[property__20889__auto___47889]));
} else {
}

var G__47890 = cljs.core.next(seq__47868_47883__$1);
var G__47891 = null;
var G__47892 = (0);
var G__47893 = (0);
seq__47868_47873 = G__47890;
chunk__47869_47874 = G__47891;
count__47870_47875 = G__47892;
i__47871_47876 = G__47893;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__7303__auto__ = [];
var len__7296__auto___47900 = arguments.length;
var i__7297__auto___47901 = (0);
while(true){
if((i__7297__auto___47901 < len__7296__auto___47900)){
args__7303__auto__.push((arguments[i__7297__auto___47901]));

var G__47902 = (i__7297__auto___47901 + (1));
i__7297__auto___47901 = G__47902;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core47895 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core47895 = (function (test_thunks,meta47896){
this.test_thunks = test_thunks;
this.meta47896 = meta47896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core47895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47897,meta47896__$1){
var self__ = this;
var _47897__$1 = this;
return (new devcards.core.t_devcards$core47895(self__.test_thunks,meta47896__$1));
});

devcards.core.t_devcards$core47895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47897){
var self__ = this;
var _47897__$1 = this;
return self__.meta47896;
});

devcards.core.t_devcards$core47895.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core47895.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
var G__47898 = devcards.core.TestDevcard;
var G__47899 = {"test_thunks": self__.test_thunks, "path": path};
return React.createElement(G__47898,G__47899);
});

devcards.core.t_devcards$core47895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$test_DASH_thunks,cljs.core.cst$sym$meta47896], null);
});

devcards.core.t_devcards$core47895.cljs$lang$type = true;

devcards.core.t_devcards$core47895.cljs$lang$ctorStr = "devcards.core/t_devcards$core47895";

devcards.core.t_devcards$core47895.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"devcards.core/t_devcards$core47895");
});

devcards.core.__GT_t_devcards$core47895 = (function devcards$core$__GT_t_devcards$core47895(test_thunks__$1,meta47896){
return (new devcards.core.t_devcards$core47895(test_thunks__$1,meta47896));
});

}

return (new devcards.core.t_devcards$core47895(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq47894){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47894));
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

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str((function (){var G__47907 = (function (){var attrs47908 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs47908))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["com-rigsomelight-devcards-base",null,"com-rigsomelight-devcards-string-render",null], null), null)], null),attrs47908], 0))):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47908))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47908)], null))));
})();
return React.renderToString(G__47907);
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
var G__47914 = (function (){var attrs47916 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs47916))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["com-rigsomelight-devcards-base",null,"com-rigsomelight-devcards-string-render",null], null), null)], null),attrs47916], 0))):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47916))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47916)], null))));
})();
var G__47915 = devcards.system.devcards_app_node();
return React.render(G__47914,G__47915);
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
return (function (state_47946){
var state_val_47947 = (state_47946[(1)]);
if((state_val_47947 === (1))){
var inst_47937 = devcards.core.load_data_from_channel_BANG_();
var state_47946__$1 = state_47946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47946__$1,(2),inst_47937);
} else {
if((state_val_47947 === (2))){
var inst_47939 = (state_47946[(2)]);
var inst_47940 = cljs.core.async.timeout((100));
var state_47946__$1 = (function (){var statearr_47948 = state_47946;
(statearr_47948[(7)] = inst_47939);

return statearr_47948;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47946__$1,(3),inst_47940);
} else {
if((state_val_47947 === (3))){
var inst_47942 = (state_47946[(2)]);
var inst_47943 = (function (){return ((function (inst_47942,state_val_47947,c__14658__auto__){
return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
;})(inst_47942,state_val_47947,c__14658__auto__))
})();
var inst_47944 = setTimeout(inst_47943,(0));
var state_47946__$1 = (function (){var statearr_47949 = state_47946;
(statearr_47949[(8)] = inst_47942);

return statearr_47949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47946__$1,inst_47944);
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
var statearr_47953 = [null,null,null,null,null,null,null,null,null];
(statearr_47953[(0)] = devcards$core$mount_namespace_$_state_machine__13585__auto__);

(statearr_47953[(1)] = (1));

return statearr_47953;
});
var devcards$core$mount_namespace_$_state_machine__13585__auto____1 = (function (state_47946){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_47946);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e47954){if((e47954 instanceof Object)){
var ex__13588__auto__ = e47954;
var statearr_47955_47957 = state_47946;
(statearr_47955_47957[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47946);

return cljs.core.cst$kw$recur;
} else {
throw e47954;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__47958 = state_47946;
state_47946 = G__47958;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__13585__auto__ = function(state_47946){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__13585__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__13585__auto____1.call(this,state_47946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__13585__auto____0;
devcards$core$mount_namespace_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__13585__auto____1;
return devcards$core$mount_namespace_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_47956 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_47956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_47956;
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
