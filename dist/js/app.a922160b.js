(function (t) {
	function e(e) {
		for (var o, s, a = e[0], l = e[1], c = e[2], u = 0, f = []; u < a.length; u++) (s = a[u]), Object.prototype.hasOwnProperty.call(r, s) && r[s] && f.push(r[s][0]), (r[s] = 0);
		for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (t[o] = l[o]);
		d && d(e);
		while (f.length) f.shift()();
		return i.push.apply(i, c || []), n();
	}
	function n() {
		for (var t, e = 0; e < i.length; e++) {
			for (var n = i[e], o = !0, a = 1; a < n.length; a++) {
				var l = n[a];
				0 !== r[l] && (o = !1);
			}
			o && (i.splice(e--, 1), (t = s((s.s = n[0]))));
		}
		return t;
	}
	var o = {},
		r = {app: 0},
		i = [];
	function s(e) {
		if (o[e]) return o[e].exports;
		var n = (o[e] = {i: e, l: !1, exports: {}});
		return t[e].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
	}
	(s.m = t),
		(s.c = o),
		(s.d = function (t, e, n) {
			s.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n});
		}),
		(s.r = function (t) {
			"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0});
		}),
		(s.t = function (t, e) {
			if ((1 & e && (t = s(t)), 8 & e)) return t;
			if (4 & e && "object" === typeof t && t && t.__esModule) return t;
			var n = Object.create(null);
			if ((s.r(n), Object.defineProperty(n, "default", {enumerable: !0, value: t}), 2 & e && "string" != typeof t))
				for (var o in t)
					s.d(
						n,
						o,
						function (e) {
							return t[e];
						}.bind(null, o)
					);
			return n;
		}),
		(s.n = function (t) {
			var e =
				t && t.__esModule
					? function () {
							return t["default"];
					  }
					: function () {
							return t;
					  };
			return s.d(e, "a", e), e;
		}),
		(s.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(s.p = "/something/");
	var a = (window["webpackJsonp"] = window["webpackJsonp"] || []),
		l = a.push.bind(a);
	(a.push = e), (a = a.slice());
	for (var c = 0; c < a.length; c++) e(a[c]);
	var d = l;
	i.push([0, "chunk-vendors"]), n();
})
({
	0: function (t, e, n) {
		t.exports = n("56d7");
	},
	"56d7": function (t, e, n) {
		"use strict";
		n.r(e);
		n("e260"), n("e6cf"), n("cca6"), n("a79d");
		var o = n("2b0e"),
			r = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", [n("Header", {attrs: {done: t.done, undone: t.undone}}), n("Main", {attrs: {todos: t.todos}, on: {"deleted-todo": t.deletedTodo, "add-todo": t.addTodo}})], 1);
			},
			i = [],
			s =
				(n("d3b7"),
				n("d81d"),
				n("4de4"),
				function () {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("nav", {staticClass: "navbar navbar-light bg-success"}, [
						n("div", {staticClass: "container-fluid"}, [
							t._m(0),
							n("div", {staticClass: "counter"}, [
								n("div", {staticClass: "allCounter"}, [t._v("Всего:" + t._s(t.done + t.undone))]),
								n("div", {staticClass: "doneCounter"}, [t._v("Выполненно:" + t._s(t.done))]),
								n("div", {staticClass: "undoneCounter"}, [t._v("Не выполненно:" + t._s(t.undone))]),
							]),
						]),
					]);
				}),
			a = [
				function () {
					var t = this,
						e = t.$createElement,
						o = t._self._c || e;
					return o("a", {staticClass: "navbar-brand", attrs: {href: "#"}}, [
						o("div", {staticClass: "d-flex align-items-center"}, [o("img", {attrs: {src: n("cf05"), width: "100", height: "100", className: "d-inline-block ", alt: "", loading: "lazy"}}), o("h2", {staticClass: "text-light"}, [t._v("Vue-ToDo")])]),
					]);
				},
			],
			l = {props: ["done", "undone"], name: "Header"},
			c = l,
			d = (n("8baf"), n("2877")),
			u = Object(d["a"])(c, s, a, !1, null, null, null),
			f = u.exports,
			p = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n(
					"div",
					{staticClass: "container-xl p-3"},
					[
						n("Input", {on: {"add-todo": t.addTodo}}),
						n("hr"),
						n(
							"ul",
							{staticClass: "list-group"},
							t._l(t.todos, function (e) {
								return n("ListOfItem", {key: e.key, attrs: {todo: e}, on: {"deleted-todo": t.deletedTodo}});
							}),
							1
						),
					],
					1
				);
			},
			h = [],
			m = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {staticClass: "form-group"}, [
					n("input", {
						directives: [{name: "model", rawName: "v-model", value: t.title, expression: "title"}],
						staticClass: "form-control p-3",
						attrs: {type: "text", placeholder: "Введите название заметки", value: ""},
						domProps: {value: t.title},
						on: {
							keyup: function (e) {
								return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.submit.apply(null, arguments);
							},
							input: function (e) {
								e.target.composing || (t.title = e.target.value);
							},
						},
					}),
				]);
			},
			v = [],
			b =
				(n("498a"),
				{
					data: function () {
						return {title: ""};
					},
					methods: {
						submit: function () {
							if (this.title.trim()) {
								var t = {key: new Date().getTime(), title: this.title, checked: !1};
								this.$emit("add-todo", t), (this.title = "");
							}
						},
					},
				}),
			y = b,
			g = Object(d["a"])(y, m, v, !1, null, null, null),
			_ = g.exports,
			k = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("li", {staticClass: "list-group-item p-3"}, [
					n("div", {staticClass: "form-check"}, [
						n("input", {
							staticClass: "form-check-input",
							attrs: {type: "checkbox", id: "flexCheckDefault"},
							on: {
								change: function (e) {
									t.todo.checked = !t.todo.checked;
								},
							},
						}),
						n("label", {staticClass: "form-check-label", attrs: {for: "flexCheckDefault"}}),
					]),
					n("span", {class: {done: t.todo.checked}}, [n("div", {staticClass: "todo"}, [t._v(t._s(t.todo.title))])]),
					n(
						"button",
						{
							staticClass: "btn btn-outline-danger btn-sm",
							attrs: {type: "button"},
							on: {
								click: function (e) {
									return t.$emit("deleted-todo", t.todo.key);
								},
							},
						},
						[t._v("×")]
					),
				]);
			},
			C = [],
			x = {props: {todo: {type: Object, required: !0}}},
			O = x,
			j = (n("64bc"), Object(d["a"])(O, k, C, !1, null, "6c1c90a4", null)),
			w = j.exports,
			T = {
				props: ["todos"],
				components: {Header: f, Input: _, ListOfItem: w},
				methods: {
					deletedTodo: function (t) {
						this.$emit("deleted-todo", t);
					},
					addTodo: function (t) {
						this.$emit("add-todo", t);
					},
				},
			},
			$ = T,
			P = Object(d["a"])($, p, h, !1, null, null, null),
			E = P.exports,
			M = {
				name: "app",
				components: {Header: f, Main: E},
				data: function () {
					return {todos: []};
				},
				mounted: function () {
					var t = this;
					fetch("https://jsonplaceholder.typicode.com/todos")
						.then(function (t) {
							return t.json();
						})
						.then(function (e) {
							t.todos = e.map(function (t) {
								return {key: t.id, title: t.title, checked: t.completed};
							});
						});
				},
				computed: {
					done: function () {
						return this.todos.filter(function (t) {
							return t.checked;
						}).length;
					},
					undone: function () {
						return this.todos.filter(function (t) {
							return !t.checked;
						}).length;
					},
				},
				methods: {
					deletedTodo: function (t) {
						this.todos = this.todos.filter(function (e) {
							return e.key !== t;
						});
					},
					addTodo: function (t) {
						this.todos.unshift(t);
					},
				},
			},
			S = M,
			D = Object(d["a"])(S, r, i, !1, null, null, null),
			H = D.exports,
			I = n("5f5b");
		n("f9e3"), n("2dd8");
		o["default"].use(I["a"]),
			(o["default"].config.productionTip = !1),
			new o["default"]({
				render: function (t) {
					return t(H);
				},
			}).$mount("#app");
	},
	"64bc": function (t, e, n) {
		"use strict";
		n("7ab5");
	},
	6860: function (t, e, n) {},
	"7ab5": function (t, e, n) {},
	"8baf": function (t, e, n) {
		"use strict";
		n("6860");
	},
	cf05: function (t, e, n) {
		t.exports = n.p + "img/logo.82b9c7a5.png";
	},
});
//# sourceMappingURL=app.a922160b.js.map
