// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('pathetic.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.string');
pathetic.core.separator = "/";
pathetic.core.separator_pattern = cljs.core.re_pattern(pathetic.core.separator);
/**
 * Given two collections, returns a sequence containing the prefix they
 * share. Example: (common-prefix [\a \b] [\a \b \c \d]) -> (\a \b)
 */
pathetic.core.common_prefix = (function pathetic$core$common_prefix(coll1,coll2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__56952_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__56952_SHARP_),cljs.core.second(p1__56952_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__56953_SHARP_,p2__56954_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__56953_SHARP_,p2__56954_SHARP_],null));
}),coll1,coll2)));
});
/**
 * Returns the elements of interesting-coll that are not part of the common
 * prefix with uninteresting-coll.
 */
pathetic.core.unique_suffix = (function pathetic$core$unique_suffix(uninteresting_coll,interesting_coll){
var common_parts = pathetic.core.common_prefix(uninteresting_coll,interesting_coll);
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(common_parts),interesting_coll);
});
pathetic.core.split = (function pathetic$core$split(path){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,pathetic.core.separator)){
return cljs.core.PersistentVector.EMPTY;
} else {
return clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(path)].join(''),pathetic.core.separator_pattern);
}
});
/**
 * Given a j.io.File or string containing a relative or absolute path,
 * returns the corresponding path vector data structure described at
 * the top of the file.
 * 
 * This function does not do any normalization or simplification. However,
 * because there is more than one way to write some paths, some simplification
 * might happen anyways, such as if the path starts with a (redundant) ".".
 */
pathetic.core.parse_path = (function pathetic$core$parse_path(path){
if(cljs.core.empty_QMARK_([cljs.core.str(path)].join(''))){
return null;
} else {
var path_pieces = pathetic.core.split(path);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(path_pieces))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$root], null);
} else {
var G__56956 = cljs.core.first(path_pieces);
switch (G__56956) {
case "":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.cst$kw$root,cljs.core.rest(path_pieces));

break;
case ".":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.cst$kw$cwd,cljs.core.rest(path_pieces));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.cst$kw$cwd,path_pieces);

}
}
}
});
/**
 * Given a seq of path elements as created by parse-path, returns a string
 * containing the path represented. This function will only
 * ever use unix-style path rules, so an absolute path will always start with
 * the "/" separator.
 * 
 * NOTE: It is NOT the goal of this function to perform normalization, it just
 * renders what it is given. HOWEVER, that does NOT mean that it is always true
 * that (= (render-path (parse-path some-path)) some-path). That is, you may not
 * render the exact same string you parsed. This is because the path syntax does
 * not have exactly one way to write every path.
 */
pathetic.core.render_path = (function pathetic$core$render_path(path_pieces){
var G__56959 = (((cljs.core.first(path_pieces) instanceof cljs.core.Keyword))?cljs.core.first(path_pieces).fqn:null);
switch (G__56959) {
case "root":
return [cljs.core.str(pathetic.core.separator),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(pathetic.core.separator,cljs.core.rest(path_pieces)))].join('');

break;
case "cwd":
if(cljs.core.next(path_pieces)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(pathetic.core.separator,cljs.core.rest(path_pieces));
} else {
return ".";
}

break;
default:
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(pathetic.core.separator,path_pieces);

}
});
pathetic.core.starts_with = (function pathetic$core$starts_with(s,prefix){
return goog.string.startsWith(s,prefix);
});
/**
 * Returns true if the given argument is an absolute path.
 */
pathetic.core.absolute_path_QMARK_ = (function pathetic$core$absolute_path_QMARK_(path){
return pathetic.core.starts_with(path,pathetic.core.separator);
});
/**
 * Given a seq of path elements as created by parse-path, returns a new
 * seq of path elements, but having gone "up" one directory. That is,
 * applies a ".." component to the path.
 */
pathetic.core.up_dir = (function pathetic$core$up_dir(path_pieces){
var G__56962 = cljs.core.last(path_pieces);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cwd,G__56962)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path_pieces,"..");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("..",G__56962)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path_pieces,"..");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$root,G__56962)){
return path_pieces;
} else {
return cljs.core.pop(path_pieces);

}
}
}
});
/**
 * Cleans up a path so that it has no leading/trailing whitespace, and
 * removes any removable same-/parent-dir references. path-pieces
 * should be a path vector in the format returned by parse-path;
 * return value is a vector in the same format.
 */
pathetic.core.normalize_STAR_ = (function pathetic$core$normalize_STAR_(path_pieces){
var result = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(path_pieces)], null);
var remaining_path = cljs.core.rest(path_pieces);
while(true){
var vec__56969 = remaining_path;
var seq__56970 = cljs.core.seq(vec__56969);
var first__56971 = cljs.core.first(seq__56970);
var seq__56970__$1 = cljs.core.next(seq__56970);
var curr = first__56971;
var remainder = seq__56970__$1;
var pred__56972 = cljs.core._EQ_;
var expr__56973 = curr;
if(cljs.core.truth_((pred__56972.cljs$core$IFn$_invoke$arity$2 ? pred__56972.cljs$core$IFn$_invoke$arity$2(null,expr__56973) : pred__56972.call(null,null,expr__56973)))){
return result;
} else {
if(cljs.core.truth_((pred__56972.cljs$core$IFn$_invoke$arity$2 ? pred__56972.cljs$core$IFn$_invoke$arity$2("",expr__56973) : pred__56972.call(null,"",expr__56973)))){
var G__56975 = result;
var G__56976 = remainder;
result = G__56975;
remaining_path = G__56976;
continue;
} else {
if(cljs.core.truth_((pred__56972.cljs$core$IFn$_invoke$arity$2 ? pred__56972.cljs$core$IFn$_invoke$arity$2(".",expr__56973) : pred__56972.call(null,".",expr__56973)))){
var G__56977 = result;
var G__56978 = remainder;
result = G__56977;
remaining_path = G__56978;
continue;
} else {
if(cljs.core.truth_((pred__56972.cljs$core$IFn$_invoke$arity$2 ? pred__56972.cljs$core$IFn$_invoke$arity$2("..",expr__56973) : pred__56972.call(null,"..",expr__56973)))){
var G__56979 = pathetic.core.up_dir(result);
var G__56980 = remainder;
result = G__56979;
remaining_path = G__56980;
continue;
} else {
var G__56981 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,curr);
var G__56982 = remainder;
result = G__56981;
remaining_path = G__56982;
continue;
}
}
}
}
break;
}
});
/**
 * Cleans up a path so that it has no leading/trailing whitespace, and
 * removes any unremovable same-/parent-dir references. Takes the path
 * argument as a string and returns its result as a string.
 */
pathetic.core.normalize = (function pathetic$core$normalize(path){
return pathetic.core.render_path(pathetic.core.normalize_STAR_(pathetic.core.parse_path(path)));
});
/**
 * Takes two absolute paths or two relative paths, and returns a relative path
 * that indicates the same file system location as dest-path, but
 * relative to base-path. Paths should be path vectors, and the return
 * value is also a path vector.
 */
pathetic.core.relativize_STAR_ = (function pathetic$core$relativize_STAR_(base_path,dest_path){
var common_path = pathetic.core.common_prefix(base_path,dest_path);
var base_suffix = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(common_path),base_path);
var dest_suffix = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(common_path),dest_path);
if((common_path == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Paths contain no common components.",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cwd], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(base_suffix),".."),cljs.core.array_seq([(function (){var suffix = cljs.core.PersistentVector.EMPTY;
var remainder = dest_suffix;
while(true){
var curr = cljs.core.first(remainder);
var pred__56986 = cljs.core._EQ_;
var expr__56987 = curr;
if(cljs.core.truth_((pred__56986.cljs$core$IFn$_invoke$arity$2 ? pred__56986.cljs$core$IFn$_invoke$arity$2(null,expr__56987) : pred__56986.call(null,null,expr__56987)))){
return suffix;
} else {
if(cljs.core.truth_((pred__56986.cljs$core$IFn$_invoke$arity$2 ? pred__56986.cljs$core$IFn$_invoke$arity$2("",expr__56987) : pred__56986.call(null,"",expr__56987)))){
var G__56989 = suffix;
var G__56990 = cljs.core.rest(remainder);
suffix = G__56989;
remainder = G__56990;
continue;
} else {
if(cljs.core.truth_((pred__56986.cljs$core$IFn$_invoke$arity$2 ? pred__56986.cljs$core$IFn$_invoke$arity$2(".",expr__56987) : pred__56986.call(null,".",expr__56987)))){
var G__56991 = suffix;
var G__56992 = cljs.core.rest(remainder);
suffix = G__56991;
remainder = G__56992;
continue;
} else {
if(cljs.core.truth_((pred__56986.cljs$core$IFn$_invoke$arity$2 ? pred__56986.cljs$core$IFn$_invoke$arity$2("..",expr__56987) : pred__56986.call(null,"..",expr__56987)))){
var G__56993 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(suffix,"..");
var G__56994 = cljs.core.rest(remainder);
suffix = G__56993;
remainder = G__56994;
continue;
} else {
var G__56995 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(suffix,curr);
var G__56996 = cljs.core.rest(remainder);
suffix = G__56995;
remainder = G__56996;
continue;
}
}
}
}
break;
}
})()], 0));
});
/**
 * Takes two absolute paths or two relative paths, and returns a relative path
 * that indicates the same file system location as destination-path, but
 * relative to base-path.
 */
pathetic.core.relativize = (function pathetic$core$relativize(base_path,dest_path){
var base_path__$1 = pathetic.core.normalize_STAR_(pathetic.core.parse_path(base_path));
var dest_path__$1 = pathetic.core.normalize_STAR_(pathetic.core.parse_path(dest_path));
return pathetic.core.render_path(pathetic.core.relativize_STAR_(base_path__$1,dest_path__$1));
});
/**
 * Resolve the other-path against the base-path. If other-path is absolute,
 * the result is other-path. If other-path is nil, the result is base-path.
 * Otherwise, the result is other-path concatenated onto base-path. Does not
 * normalize its output. All inputs and outputs are path vectors.
 */
pathetic.core.resolve_STAR_ = (function pathetic$core$resolve_STAR_(base_path,other_path){
if((other_path == null)){
return base_path;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$root,cljs.core.first(other_path))){
return other_path;
} else {
var base_components = pathetic.core.normalize_STAR_(base_path);
var other_components = cljs.core.rest(pathetic.core.normalize_STAR_(other_path));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(base_components,other_components);

}
}
});
/**
 * Resolve the other-path against the base-path. If other-path is absolute,
 * the result is other-path. If other-path is nil, the result is base-path.
 * Otherwise, the result is other-path concatenated onto base-path. Does not
 * normalize its output. Accepts an optional third argument containing a string
 * with the path separator to use.
 */
pathetic.core.resolve = (function pathetic$core$resolve(base_path,other_path){
return pathetic.core.render_path(pathetic.core.resolve_STAR_(pathetic.core.parse_path(base_path),pathetic.core.parse_path(other_path)));
});
pathetic.core.ends_with = (function pathetic$core$ends_with(s,suffix){
return goog.string.endsWith(s,suffix);
});
/**
 * If the path given does not have a trailing separator, returns a new path
 * that has one.
 */
pathetic.core.ensure_trailing_separator = (function pathetic$core$ensure_trailing_separator(path){
if(cljs.core.truth_(pathetic.core.ends_with(path,pathetic.core.separator))){
return path;
} else {
return [cljs.core.str(path),cljs.core.str(pathetic.core.separator)].join('');
}
});
pathetic.core.as_url = (function pathetic$core$as_url(url_or_string){
if((url_or_string instanceof goog.Uri)){
return url_or_string;
} else {
return (new goog.Uri(url_or_string));
}
});
/**
 * Given a URL or string containing a URL, returns a vector of the three
 * component strings: the stuff before the path, the path, and the stuff
 * after the path. Useful for destructuring.
 */
pathetic.core.split_url_on_path = (function pathetic$core$split_url_on_path(url_or_string){
var url = pathetic.core.as_url(url_or_string);
var url_string = [cljs.core.str(url)].join('');
var path = url.getPath();
var path_idx = url_string.lastIndexOf(path);
var pre_path = url_string.substring((0),path_idx);
var post_path = url_string.substring((path_idx + cljs.core.count(path)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre_path,path,post_path], null);
});
/**
 * Behaves like normalize on the path part of a URL, but takes a j.n.URL or
 * string containing a URL, and returns a string containing the same URL
 * instead of just a path. Everything but the path part of the URL is unchanged
 * (query, anchor, protocol, etc).
 */
pathetic.core.url_normalize = (function pathetic$core$url_normalize(url_or_string){
var vec__57000 = pathetic.core.split_url_on_path(url_or_string);
var pre_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57000,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57000,(1),null);
var post_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57000,(2),null);
return [cljs.core.str(pre_path),cljs.core.str(pathetic.core.normalize(path)),cljs.core.str(post_path)].join('');
});
/**
 * Behaves like ensure-trailing-separator on the path part of a URL, but takes
 * a j.n.URL or string containing a URL, and returns a string containing the
 * same URL instead of just a path. Everything but the path part of the URL is
 * unchanged (query, anchor, protocol, etc).
 */
pathetic.core.url_ensure_trailing_separator = (function pathetic$core$url_ensure_trailing_separator(url_or_string){
var vec__57006 = pathetic.core.split_url_on_path(url_or_string);
var pre_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57006,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57006,(1),null);
var post_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57006,(2),null);
return [cljs.core.str(pre_path),cljs.core.str(pathetic.core.ensure_trailing_separator(path)),cljs.core.str(post_path)].join('');
});
