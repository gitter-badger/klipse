// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('replumb.core');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('replumb.repl');
goog.require('replumb.common');
/**
 * Reads, evaluates and calls back with the evaluation result.
 * 
 *   The first parameter is a map of configuration options, currently
 *   supporting:
 * 
 *   * `:verbose` will enable the the evaluation logging, defaults to false.
 *   To customize how to print, use `(set! *print-fn* (fn [& args] ...)`
 * 
 *   * `:warning-as-error` will consider a compiler warning as error.
 * 
 *   * `:target` `:nodejs` and `:browser` supported, the latter is used if
 *   missing.
 * 
 *   * `:init-fn!` user provided initialization function, it will be passed a
 *   map:
 * 
 *        :form   ;; the form to evaluate, as data
 *        :ns     ;; the current namespace, as symbol
 *        :target ;; the current target
 * 
 *   * `:load-fn!` will override replumb's default `cljs.js/*load-fn*`.
 *   It rules out `:read-file-fn!`, losing any perk of using `replumb.load`
 *   helpers. Trickily enough, `:load-fn!` is never used with `load-file`. It is the
 *   only case where it does not take precedence over `:read-file-fn!`. Use it if
 *   you know what you are doing and follow this protocol:
 * 
 *    ```
 *    Each runtime environment provides a different way to load a library.
 *    Whatever function `*load-fn*` is bound to will be passed two arguments
 *    - a map and a callback function: The map will have the following keys:
 * 
 *        :name   - the name of the library (a symbol)
 *        :macros - modifier signaling a macros namespace load
 *        :path   - munged relative library path (a string)
 * 
 *    The callback cb, upon resolution, will need to pass the same map:
 * 
 *        :lang       - the language, :clj or :js
 *        :source     - the source of the library (a string)
 *        :cache      - optional, if a :clj namespace has been precompiled to
 *                      :js, can give an analysis cache for faster loads.
 *        :source-map - optional, if a :clj namespace has been precompiled
 *                      to :js, can give a V3 source map JSON
 * 
 *    If the resource could not be resolved, the callback should be invoked with
 *    nil.
 *    ```
 * 
 *   * `:read-file-fn!` an asynchronous 2-arity function with signature
 *   `[file-path src-cb]` where src-cb is itself a function `(fn [source]
 *   ...)` that needs to be called with the file content as string (`nil`
 *   if no file is found). It is mutually exclusive with `:load-fn!` and
 *   will be ignored in case both are present.
 * 
 *   * `:write-file-fn!` a synchronous 2-arity function with signature
 *   `[file-path data]` that accepts a file-path and data to write.
 * 
 *   * `:src-paths` - a vector of paths containing source files.
 * 
 *   * `:cache` - a map containing two optional values: the first, `:path`,
 *   indicates the path of the cached files. The second, `:src-paths-lookup?`,
 *   indicates whether search the cached files in `:src-paths`. If both present,
 *   `:path` will have the priority but both will be inspected.
 * 
 *   * `:no-pr-str-on-value`  in case of `:success?` avoid converting the
 *   result map `:value` to string.
 * 
 *   * `:context` - indicates the evaluation context that will be passed to
 *   `cljs/eval-str`. One in `:expr`, `:statement`, `:return`. Defaults to `:expr`.
 *   If you really feel adventurous check [David Nolen's dev notes](https://github.com/clojure/clojurescript/blob/r1.7.228/devnotes/day1.org#tricky-bit---context).
 * 
 *   * `:foreign-libs` - a way to include foreign libraries. The format is analogous
 *   to the compiler option. For more info visit the [compiler options page](https://github.com/clojure/clojurescript/wiki/Compiler-Options#foreign-libs).
 * 
 *   * `:static-fns` - static dispatch in generated JavaScript. See the
 *   [compiler option page](https://github.com/clojure/clojurescript/wiki/Compiler-Options#static-fns).
 * 
 *   The second parameter, `callback`, should be a 1-arity function which receives
 *   the result map, whose result keys will be:
 * 
 *   ```
 *   :success?  a boolean indicating if everything went alright
 *   :value     (if (:success? result)), this key contains the yielded value as
 *           string, unless :no-pr-str-on-value is true, in which case it
 *           returns the bare value.
 *   :error     (if-not (:success? result)) will contain a js/Error
 *   :warning   in case a warning was thrown and :warning-as-error is falsey
 *   :form      the evaluated form as data structure (not string)}
 *   ```
 * 
 *   The third parameter is the source string to be read and evaluated.
 */
replumb.core.read_eval_call = (function replumb$core$read_eval_call(var_args){
var args30901 = [];
var len__7296__auto___30904 = arguments.length;
var i__7297__auto___30905 = (0);
while(true){
if((i__7297__auto___30905 < len__7296__auto___30904)){
args30901.push((arguments[i__7297__auto___30905]));

var G__30906 = (i__7297__auto___30905 + (1));
i__7297__auto___30905 = G__30906;
continue;
} else {
}
break;
}

var G__30903 = args30901.length;
switch (G__30903) {
case 2:
return replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30901.length)].join('')));

}
});
goog.exportSymbol('replumb.core.read_eval_call', replumb.core.read_eval_call);

replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$2 = (function (callback,source){
return replumb.repl.read_eval_call(cljs.core.PersistentArrayMap.EMPTY,callback,source);
});

replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$3 = (function (opts,callback,source){
return replumb.repl.read_eval_call(opts,callback,source);
});

replumb.core.read_eval_call.cljs$lang$maxFixedArity = 3;

/**
 * Retrieves the REPL prompt to display, according to the current
 *   namespace. Returns a string.
 */
replumb.core.get_prompt = (function replumb$core$get_prompt(){
return [cljs.core.str(replumb.repl.current_ns()),cljs.core.str("=> ")].join('');
});
goog.exportSymbol('replumb.core.get_prompt', replumb.core.get_prompt);
/**
 * Return the message string of the input `js/Error`.
 */
replumb.core.error__GT_str = (function replumb$core$error__GT_str(var_args){
var args30908 = [];
var len__7296__auto___30911 = arguments.length;
var i__7297__auto___30912 = (0);
while(true){
if((i__7297__auto___30912 < len__7296__auto___30911)){
args30908.push((arguments[i__7297__auto___30912]));

var G__30913 = (i__7297__auto___30912 + (1));
i__7297__auto___30912 = G__30913;
continue;
} else {
}
break;
}

var G__30910 = args30908.length;
switch (G__30910) {
case 1:
return replumb.core.error__GT_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.core.error__GT_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30908.length)].join('')));

}
});
goog.exportSymbol('replumb.core.error__GT_str', replumb.core.error__GT_str);

replumb.core.error__GT_str.cljs$core$IFn$_invoke$arity$1 = (function (error){
return replumb.common.extract_message.cljs$core$IFn$_invoke$arity$1(error);
});

replumb.core.error__GT_str.cljs$core$IFn$_invoke$arity$2 = (function (print_stack_QMARK_,error){
return replumb.common.extract_message.cljs$core$IFn$_invoke$arity$2(print_stack_QMARK_,error);
});

replumb.core.error__GT_str.cljs$lang$maxFixedArity = 2;

/**
 * Unwraps the result of an evaluation.
 * 
 *   It returns the content of `:value` in case of success and the content
 *   of `:error` (a `js/Error`) in case of failure.
 * 
 *   When `include-warning?` is true, then the string returned is, in
 *   order, from the `:error`, `:warning` and eventually `:value` key in
 *   the result map.
 */
replumb.core.unwrap_result = (function replumb$core$unwrap_result(var_args){
var args30915 = [];
var len__7296__auto___30920 = arguments.length;
var i__7297__auto___30921 = (0);
while(true){
if((i__7297__auto___30921 < len__7296__auto___30920)){
args30915.push((arguments[i__7297__auto___30921]));

var G__30922 = (i__7297__auto___30921 + (1));
i__7297__auto___30921 = G__30922;
continue;
} else {
}
break;
}

var G__30917 = args30915.length;
switch (G__30917) {
case 1:
return replumb.core.unwrap_result.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.core.unwrap_result.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30915.length)].join('')));

}
});
goog.exportSymbol('replumb.core.unwrap_result', replumb.core.unwrap_result);

replumb.core.unwrap_result.cljs$core$IFn$_invoke$arity$1 = (function (result_map){
return replumb.core.unwrap_result.cljs$core$IFn$_invoke$arity$2(false,result_map);
});

replumb.core.unwrap_result.cljs$core$IFn$_invoke$arity$2 = (function (include_warning_QMARK_,result_map){
var map__30918 = result_map;
var map__30918__$1 = ((((!((map__30918 == null)))?((((map__30918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30918):map__30918);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30918__$1,cljs.core.cst$kw$error);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30918__$1,cljs.core.cst$kw$value);
var warning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30918__$1,cljs.core.cst$kw$warning);
if(cljs.core.truth_(error)){
return error;
} else {
if(cljs.core.truth_((function (){var and__6209__auto__ = include_warning_QMARK_;
if(cljs.core.truth_(and__6209__auto__)){
return warning;
} else {
return and__6209__auto__;
}
})())){
return warning;
} else {
return value;
}
}
});

replumb.core.unwrap_result.cljs$lang$maxFixedArity = 2;

/**
 * Given a `result-map`, tells whether the evaluation was successful.
 */
replumb.core.success_QMARK_ = (function replumb$core$success_QMARK_(result_map){
return cljs.core.cst$kw$success_QMARK_.cljs$core$IFn$_invoke$arity$1(result_map);
});
goog.exportSymbol('replumb.core.success_QMARK_', replumb.core.success_QMARK_);
/**
 * Given a `result-map`, returns the result of the evaluation as string.
 * 
 *   - When `include-warning?` is true, then the string returned is, in
 *   order, from the `:error`, `:warning` and eventually `:value` key in
 *   the result map.
 * 
 *   - When `print-stack?` is true, the error string will include the stack
 *   trace.
 */
replumb.core.result__GT_string = (function replumb$core$result__GT_string(var_args){
var args30924 = [];
var len__7296__auto___30929 = arguments.length;
var i__7297__auto___30930 = (0);
while(true){
if((i__7297__auto___30930 < len__7296__auto___30929)){
args30924.push((arguments[i__7297__auto___30930]));

var G__30931 = (i__7297__auto___30930 + (1));
i__7297__auto___30930 = G__30931;
continue;
} else {
}
break;
}

var G__30926 = args30924.length;
switch (G__30926) {
case 1:
return replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30924.length)].join('')));

}
});
goog.exportSymbol('replumb.core.result__GT_string', replumb.core.result__GT_string);

replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$1 = (function (result_map){
return replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$3(false,false,result_map);
});

replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$2 = (function (print_stack_QMARK_,result_map){
return replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$3(print_stack_QMARK_,false,result_map);
});

replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$3 = (function (print_stack_QMARK_,include_warning_QMARK_,result_map){
if(!(cljs.core.map_QMARK_(print_stack_QMARK_))){
} else {
throw (new Error("Assert failed: (not (map? print-stack?))"));
}

if(!(cljs.core.map_QMARK_(include_warning_QMARK_))){
} else {
throw (new Error("Assert failed: (not (map? include-warning?))"));
}

if(cljs.core.map_QMARK_(result_map)){
} else {
throw (new Error("Assert failed: (map? result-map)"));
}

var map__30927 = result_map;
var map__30927__$1 = ((((!((map__30927 == null)))?((((map__30927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30927):map__30927);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30927__$1,cljs.core.cst$kw$error);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30927__$1,cljs.core.cst$kw$value);
var warning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30927__$1,cljs.core.cst$kw$warning);
if(cljs.core.truth_(error)){
return replumb.common.extract_message.cljs$core$IFn$_invoke$arity$3(print_stack_QMARK_,false,error);
} else {
if(cljs.core.truth_((function (){var and__6209__auto__ = include_warning_QMARK_;
if(cljs.core.truth_(and__6209__auto__)){
return warning;
} else {
return and__6209__auto__;
}
})())){
return warning;
} else {
return value;
}
}
});

replumb.core.result__GT_string.cljs$lang$maxFixedArity = 3;

/**
 * Creates the right option map for read-eval-call.
 * 
 *   Supported targets: `:nodejs` or `:node`, `:browser`. It throws if not
 *   supported.
 * 
 *   The 2-arity function requires a `load-fn!` compatible with
 *   ClojureScript `cljs.js/*load-fn*`. Use it if you know what you are
 *   doing and follow this protocol:
 * 
 *    Each runtime environment provides a different way to load a library.
 *    Whatever function `*load-fn*` is bound to will be passed two arguments
 *    - a map and a callback function: The map will have the following keys:
 * 
 *        :name   - the name of the library (a symbol)
 *        :macros - modifier signaling a macros namespace load
 *        :path   - munged relative library path (a string)
 * 
 *    The callback cb, upon resolution, will need to pass the same map:
 * 
 *        :lang       - the language, :clj or :js
 *        :source     - the source of the library (a string)
 *        :cache      - optional, if a :clj namespace has been precompiled to
 *                      :js, can give an analysis cache for faster loads.
 *        :source-map - optional, if a :clj namespace has been precompiled
 *                      to :js, can give a V3 source map JSON
 * 
 *    If the resource could not be resolved, the callback should be invoked with
 *    nil.
 * 
 *   The 3-arity function accepts a sequence of source path strings and
 *   `read-file-fn!`, an asynchronous 2-arity function with signature
 *   `[file-path src-cb]` where src-cb is itself a function `(fn [source]
 *   ...)` that needs to be called with the file content as string (`nil`
 *   if no file is found).
 * 
 *   The 4-arity function receives additionally a fourth parameter `write-file-fn!`,
 *   a synchronous 2-arity function with signature `[file-path data]` that accepts
 *   a file-path and data to write.
 */
replumb.core.options = (function replumb$core$options(var_args){
var args30933 = [];
var len__7296__auto___30938 = arguments.length;
var i__7297__auto___30939 = (0);
while(true){
if((i__7297__auto___30939 < len__7296__auto___30938)){
args30933.push((arguments[i__7297__auto___30939]));

var G__30940 = (i__7297__auto___30939 + (1));
i__7297__auto___30939 = G__30940;
continue;
} else {
}
break;
}

var G__30935 = args30933.length;
switch (G__30935) {
case 2:
return replumb.core.options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replumb.core.options.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return replumb.core.options.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30933.length)].join('')));

}
});
goog.exportSymbol('replumb.core.options', replumb.core.options);

replumb.core.options.cljs$core$IFn$_invoke$arity$2 = (function (target,load_fn_BANG_){
var G__30936 = (((target instanceof cljs.core.Keyword))?target.fqn:null);
switch (G__30936) {
case "nodejs":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,cljs.core.cst$kw$nodejs,cljs.core.cst$kw$load_DASH_fn_BANG_,load_fn_BANG_], null);

break;
case "node":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,cljs.core.cst$kw$nodejs,cljs.core.cst$kw$load_DASH_fn_BANG_,load_fn_BANG_], null);

break;
case "browser":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,cljs.core.cst$kw$default,cljs.core.cst$kw$load_DASH_fn_BANG_,load_fn_BANG_], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(target)].join('')));

}
});

replumb.core.options.cljs$core$IFn$_invoke$arity$3 = (function (target,src_paths,read_file_fn_BANG_){
return replumb.core.options.cljs$core$IFn$_invoke$arity$4(target,src_paths,read_file_fn_BANG_,null);
});

replumb.core.options.cljs$core$IFn$_invoke$arity$4 = (function (target,src_paths,read_file_fn_BANG_,write_file_fn_BANG_){
var G__30937 = (((target instanceof cljs.core.Keyword))?target.fqn:null);
switch (G__30937) {
case "nodejs":
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$target,cljs.core.cst$kw$nodejs,cljs.core.cst$kw$read_DASH_file_DASH_fn_BANG_,read_file_fn_BANG_,cljs.core.cst$kw$src_DASH_paths,src_paths,cljs.core.cst$kw$write_DASH_file_DASH_fn_BANG_,write_file_fn_BANG_], null);

break;
case "node":
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$target,cljs.core.cst$kw$nodejs,cljs.core.cst$kw$read_DASH_file_DASH_fn_BANG_,read_file_fn_BANG_,cljs.core.cst$kw$src_DASH_paths,src_paths,cljs.core.cst$kw$write_DASH_file_DASH_fn_BANG_,write_file_fn_BANG_], null);

break;
case "browser":
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$target,cljs.core.cst$kw$default,cljs.core.cst$kw$read_DASH_file_DASH_fn_BANG_,read_file_fn_BANG_,cljs.core.cst$kw$src_DASH_paths,src_paths,cljs.core.cst$kw$write_DASH_file_DASH_fn_BANG_,write_file_fn_BANG_], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(target)].join('')));

}
});

replumb.core.options.cljs$lang$maxFixedArity = 4;

/**
 * Reset the repl and the current compiler state.
 * 
 *   It performs the following (in order):
 * 
 *   1. removes `cljs.js/*loaded*` namespaces from the compiler environment
 *   2. calls `(read-eval-call (in-ns 'cljs.user))`
 *   3. resets the last warning
 *   4. sets `*e` to nil
 *   5. resets the init options (the next eval will trigger an init)
 */
replumb.core.repl_reset_BANG_ = (function replumb$core$repl_reset_BANG_(opts){
if(cljs.core.truth_(replumb.repl.empty_cljs_user_QMARK_())){
} else {
replumb.repl.purge_cljs_user_BANG_.cljs$core$IFn$_invoke$arity$0();
}

replumb.repl.read_eval_call(opts,cljs.core.identity,"(in-ns 'cljs.user)");

replumb.repl.reset_last_warning_BANG_();

return replumb.repl.read_eval_call(opts,cljs.core.identity,"(set! *e nil)");
});
