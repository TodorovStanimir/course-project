function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{PfUm:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("qEj7"),c=n("8Y7J"),a=n("IheW"),r=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e,this.BASE_URL="https://baas.kinvey.com/appdata/".concat(o.a),this.BOOKS_URL="".concat(this.BASE_URL,"/books")}return _createClass(t,[{key:"createBook",value:function(t){return this.http.post(this.BOOKS_URL,t)}},{key:"getAllBooks",value:function(){return this.http.get(this.BOOKS_URL)}},{key:"getUserBooks",value:function(){return this.http.get("".concat(this.BASE_URL,'/books?query={"author":"').concat(localStorage.getItem("username"),'"}&sort={"_kmd.ect":-1}'))}},{key:"deleteBook",value:function(t){return this.http.delete("".concat(this.BOOKS_URL,"/").concat(t))}},{key:"getBook",value:function(t){return this.http.get("".concat(this.BOOKS_URL,"/").concat(t))}},{key:"editBook",value:function(t,e){return delete t["".concat(e)],delete t._acl,this.http.put("".concat(this.BOOKS_URL,"/").concat(e),t)}}]),t}();return t.ngInjectableDef=c.Ob({factory:function(){return new t(c.Pb(a.c))},token:t,providedIn:"root"}),t}()},mqg1:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("qEj7"),c=n("8Y7J"),a=n("IheW"),r=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e,this.BASE_URL="https://baas.kinvey.com/appdata/".concat(o.a),this.CREATE_COMMENT_URL="".concat(this.BASE_URL,"/comments")}return _createClass(t,[{key:"getAllComments",value:function(t,e){return this.http.get("".concat(this.CREATE_COMMENT_URL).concat("all"===t?"":'?query={"'.concat(t,'":"').concat(e,'"}&sort={"_kmd.ect": -1}')))}},{key:"postComment",value:function(t){return this.http.post(this.CREATE_COMMENT_URL,t)}},{key:"deleteComment",value:function(t){return this.http.delete("".concat(this.CREATE_COMMENT_URL,"/").concat(t))}}]),t}();return t.ngInjectableDef=c.Ob({factory:function(){return new t(c.Pb(a.c))},token:t,providedIn:"root"}),t}()}}]);