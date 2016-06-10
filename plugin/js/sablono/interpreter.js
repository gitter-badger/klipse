// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('goog.object');

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if((!((this$ == null))) && (!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null)))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__6884__auto__ = (((this$ == null))?null:this$);
var m__6885__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6885__auto__.call(null,this$));
} else {
var m__6885__auto____$1 = (sablono.interpreter.interpret["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6885__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInterpreter.interpret",this$);
}
}
}
});

sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(ctor,display_name){
var G__45837 = (function (){var G__45841 = {"getDisplayName": (function (){
return cljs.core.name(display_name);
}), "getInitialState": (function (){
var this$ = this;
return {"value": (this$.props["value"])};
}), "onChange": (function (e){
var this$ = this;
var handler = (this$.props["onChange"]);
if((handler == null)){
return null;
} else {
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(e) : handler.call(null,e));

return this$.setState({"value": e.target.value});
}
}), "componentWillReceiveProps": (function (new_props){
var this$ = this;
return this$.setState({"value": (new_props["value"])});
}), "render": (function (){
var this$ = this;
var props = {};
var G__45842_45845 = props;
var G__45843_45846 = this$.props;
var G__45844_45847 = {"value": (this$.state["value"]), "onChange": (this$["onChange"]), "children": (this$.props["children"])};
goog.object.extend(G__45842_45845,G__45843_45846,G__45844_45847);

return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(props) : ctor.call(null,props));
})};
return React.createClass(G__45841);
})();
return React.createFactory(G__45837);
});
sablono.interpreter.input = sablono.interpreter.wrap_form_element(React.DOM.input,"input");
sablono.interpreter.option = sablono.interpreter.wrap_form_element(React.DOM.option,"option");
sablono.interpreter.select = sablono.interpreter.wrap_form_element(React.DOM.select,"select");
sablono.interpreter.textarea = sablono.interpreter.wrap_form_element(React.DOM.textarea,"textarea");
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__7303__auto__ = [];
var len__7296__auto___45851 = arguments.length;
var i__7297__auto___45852 = (0);
while(true){
if((i__7297__auto___45852 < len__7296__auto___45851)){
args__7303__auto__.push((arguments[i__7297__auto___45852]));

var G__45853 = (i__7297__auto___45852 + (1));
i__7297__auto___45852 = G__45853;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((2) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((2)),(0),null)):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7304__auto__);
});

sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
return (cljs.core.truth_(sablono.util.wrapped_type_QMARK_(type))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$input,sablono.interpreter.input,cljs.core.cst$kw$option,sablono.interpreter.option,cljs.core.cst$kw$select,sablono.interpreter.select,cljs.core.cst$kw$textarea,sablono.interpreter.textarea], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type)):cljs.core.partial.cljs$core$IFn$_invoke$arity$2(React.createElement,cljs.core.name(type))).call(null,props,(((cljs.core.sequential_QMARK_(children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(children))))?cljs.core.first(children):children));
});

sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2);

sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq45848){
var G__45849 = cljs.core.first(seq45848);
var seq45848__$1 = cljs.core.next(seq45848);
var G__45850 = cljs.core.first(seq45848__$1);
var seq45848__$2 = cljs.core.next(seq45848__$1);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(G__45849,G__45850,seq45848__$2);
});

sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var attrs__$1 = cljs.core.clj__GT_js(sablono.util.html_to_dom_attrs(attrs));
var class$ = attrs__$1.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(class$)):class$);
if(clojure.string.blank_QMARK_(class$__$1)){
delete attrs__$1["className"];
} else {
attrs__$1.className = class$__$1;
}

return attrs__$1;
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element__$1){
var vec__45857 = sablono.normalize.element(element__$1);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45857,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45857,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45857,(2),null);
var js_attrs = sablono.interpreter.attributes(attrs);
if((cljs.core.sequential_QMARK_(content)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(content)))){
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(type,js_attrs,cljs.core.array_seq([sablono.interpreter.interpret(cljs.core.first(content))], 0));
} else {
if(cljs.core.truth_(content)){
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(type,js_attrs,cljs.core.array_seq([sablono.interpreter.interpret(content)], 0));
} else {
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(type,js_attrs,cljs.core.array_seq([null], 0));

}
}
});
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(s){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.interpreter.interpret,s));
});
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.element(this$__$1);
});

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(sablono.util.element_QMARK_(this$__$1))){
return sablono.interpreter.element(this$__$1);
} else {
return sablono.interpreter.interpret(cljs.core.seq(this$__$1));
}
});

(sablono.interpreter.IInterpreter["_"] = true);

(sablono.interpreter.interpret["_"] = (function (this$){
return this$;
}));

(sablono.interpreter.IInterpreter["null"] = true);

(sablono.interpreter.interpret["null"] = (function (this$){
return null;
}));
