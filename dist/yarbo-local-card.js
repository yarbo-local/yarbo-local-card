//#region node_modules/@lit/reactive-element/css-tag.js
var e = globalThis, t = e.ShadowRoot && (e.ShadyCSS === void 0 || e.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, n = Symbol(), r = /* @__PURE__ */ new WeakMap(), i = class {
	constructor(e, t, r) {
		if (this._$cssResult$ = !0, r !== n) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, n = this.t;
		if (t && e === void 0) {
			let t = n !== void 0 && n.length === 1;
			t && (e = r.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), t && r.set(n, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, a = (e) => new i(typeof e == "string" ? e : e + "", void 0, n), o = (e, ...t) => new i(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, n), s = (n, r) => {
	if (t) n.adoptedStyleSheets = r.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let t of r) {
		let r = document.createElement("style"), i = e.litNonce;
		i !== void 0 && r.setAttribute("nonce", i), r.textContent = t.cssText, n.appendChild(r);
	}
}, c = t ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return a(t);
})(e) : e, { is: l, defineProperty: u, getOwnPropertyDescriptor: d, getOwnPropertyNames: ee, getOwnPropertySymbols: te, getPrototypeOf: ne } = Object, f = globalThis, re = f.trustedTypes, ie = re ? re.emptyScript : "", ae = f.reactiveElementPolyfillSupport, p = (e, t) => e, m = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? ie : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, h = (e, t) => !l(e, t), g = {
	attribute: !0,
	type: String,
	converter: m,
	reflect: !1,
	useDefault: !1,
	hasChanged: h
};
Symbol.metadata ??= Symbol("metadata"), f.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var _ = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = g) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && u(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = d(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? g;
	}
	static _$Ei() {
		if (this.hasOwnProperty(p("elementProperties"))) return;
		let e = ne(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(p("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(p("properties"))) {
			let e = this.properties, t = [...ee(e), ...te(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(1 / 0).reverse());
			for (let e of n) t.unshift(c(e));
		} else e !== void 0 && t.push(c(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return s(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? m : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? m : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? h)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
_.elementStyles = [], _.shadowRootOptions = { mode: "open" }, _[p("elementProperties")] = /* @__PURE__ */ new Map(), _[p("finalized")] = /* @__PURE__ */ new Map(), ae?.({ ReactiveElement: _ }), (f.reactiveElementVersions ??= []).push("2.1.2");
//#endregion
//#region node_modules/lit-html/lit-html.js
var v = globalThis, oe = (e) => e, y = v.trustedTypes, b = y ? y.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, x = "$lit$", S = `lit$${Math.random().toFixed(9).slice(2)}$`, C = "?" + S, se = `<${C}>`, w = document, T = () => w.createComment(""), E = (e) => e === null || typeof e != "object" && typeof e != "function", D = Array.isArray, ce = (e) => D(e) || typeof e?.[Symbol.iterator] == "function", O = "[ 	\n\f\r]", k = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, le = /-->/g, ue = />/g, A = RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), de = /'/g, j = /"/g, M = /^(?:script|style|textarea|title)$/i, N = (e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}), P = N(1), F = N(2), I = Symbol.for("lit-noChange"), L = Symbol.for("lit-nothing"), R = /* @__PURE__ */ new WeakMap(), z = w.createTreeWalker(w, 129);
function B(e, t) {
	if (!D(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return b === void 0 ? t : b.createHTML(t);
}
var fe = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = k;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === k ? c[1] === "!--" ? o = le : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = A) : (M.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = A) : o = ue : o === A ? c[0] === ">" ? (o = i ?? k, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? A : c[3] === "\"" ? j : de) : o === j || o === de ? o = A : o === le || o === ue ? o = k : (o = A, i = void 0);
		let d = o === A && e[t + 1].startsWith("/>") ? " " : "";
		a += o === k ? n + se : l >= 0 ? (r.push(s), n.slice(0, l) + x + n.slice(l) + S + d) : n + S + (l === -2 ? t : d);
	}
	return [B(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, V = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = fe(t, n);
		if (this.el = e.createElement(l, r), z.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = z.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(x)) {
					let t = u[o++], n = i.getAttribute(e).split(S), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? me : r[1] === "?" ? he : r[1] === "@" ? ge : W
					}), i.removeAttribute(e);
				} else e.startsWith(S) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (M.test(i.tagName)) {
					let e = i.textContent.split(S), t = e.length - 1;
					if (t > 0) {
						i.textContent = y ? y.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], T()), z.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], T());
					}
				}
			} else if (i.nodeType === 8) {
				if (i.data === C) c.push({
					type: 2,
					index: a
				});
				else {
					let e = -1;
					for (; (e = i.data.indexOf(S, e + 1)) !== -1;) c.push({
						type: 7,
						index: a
					}), e += S.length - 1;
				}
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = w.createElement("template");
		return n.innerHTML = e, n;
	}
};
function H(e, t, n = e, r) {
	if (t === I) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = E(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = H(e, i._$AS(e, t.values), i, r)), t;
}
var pe = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? w).importNode(t, !0);
		z.currentNode = r;
		let i = z.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new U(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new _e(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = z.nextNode(), a++);
		}
		return z.currentNode = w, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, U = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = L, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = H(this, e, t), E(e) ? e === L || e == null || e === "" ? (this._$AH !== L && this._$AR(), this._$AH = L) : e !== this._$AH && e !== I && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? ce(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== L && E(this._$AH) ? this._$AA.nextSibling.data = e : this.T(w.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = V.createElement(B(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new pe(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = R.get(e.strings);
		return t === void 0 && R.set(e.strings, t = new V(e)), t;
	}
	k(t) {
		D(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(T()), this.O(T()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = oe(e).nextSibling;
			oe(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, W = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = L, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = L;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = H(this, e, t, 0), a = !E(e) || e !== this._$AH && e !== I, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = H(this, r[n + o], t, o), s === I && (s = this._$AH[o]), a ||= !E(s) || s !== this._$AH[o], s === L ? e = L : e !== L && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === L ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, me = class extends W {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === L ? void 0 : e;
	}
}, he = class extends W {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== L);
	}
}, ge = class extends W {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = H(this, e, t, 0) ?? L) === I) return;
		let n = this._$AH, r = e === L && n !== L || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== L && (n === L || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, _e = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		H(this, e);
	}
}, ve = v.litHtmlPolyfillSupport;
ve?.(V, U), (v.litHtmlVersions ??= []).push("3.3.3");
var ye = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new U(t.insertBefore(T(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, G = globalThis, K = class extends _ {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ye(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return I;
	}
};
K._$litElement$ = !0, K.finalized = !0, G.litElementHydrateSupport?.({ LitElement: K });
var be = G.litElementPolyfillSupport;
be?.({ LitElement: K }), (G.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region node_modules/@mdi/js/mdi.js
var xe = "M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z", Se = "M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.66C6,21.4 6.6,22 7.33,22H16.66C17.4,22 18,21.4 18,20.67V5.33C18,4.6 17.4,4 16.67,4M11,20V14.5H9L13,7V12.5H15", Ce = "M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z", we = "M16.24,3.56L21.19,8.5C21.97,9.29 21.97,10.55 21.19,11.34L12,20.53C10.44,22.09 7.91,22.09 6.34,20.53L2.81,17C2.03,16.21 2.03,14.95 2.81,14.16L13.41,3.56C14.2,2.78 15.46,2.78 16.24,3.56M4.22,15.58L7.76,19.11C8.54,19.9 9.8,19.9 10.59,19.11L14.12,15.58L9.17,10.63L4.22,15.58Z", Te = "M17 4H20C21.1 4 22 4.9 22 6V8H20V6H17V4M4 8V6H7V4H4C2.9 4 2 4.9 2 6V8H4M20 16V18H17V20H20C21.1 20 22 19.1 22 18V16H20M7 18H4V16H2V18C2 19.1 2.9 20 4 20H7V18M16 10V14H8V10H16M18 8H6V16H18V8Z", Ee = "M22.7 14.3L21.7 15.3L19.7 13.3L20.7 12.3C20.8 12.2 20.9 12.1 21.1 12.1C21.2 12.1 21.4 12.2 21.5 12.3L22.8 13.6C22.9 13.8 22.9 14.1 22.7 14.3M13 19.9V22H15.1L21.2 15.9L19.2 13.9L13 19.9M11.21 15.83L9.25 13.47L6.5 17H13.12L15.66 14.55L13.96 12.29L11.21 15.83M11 19.9V19.05L11.05 19H5V5H19V11.31L21 9.38V5C21 3.9 20.11 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H11V19.9Z", De = "M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z", Oe = "M11.62,1L17.28,6.67L15.16,8.79L13.04,6.67L11.62,8.09L13.95,10.41L12.79,11.58L13.24,12.04C14.17,11.61 15.31,11.77 16.07,12.54L12.54,16.07C11.77,15.31 11.61,14.17 12.04,13.24L11.58,12.79L10.41,13.95L8.09,11.62L6.67,13.04L8.79,15.16L6.67,17.28L1,11.62L3.14,9.5L5.26,11.62L6.67,10.21L3.84,7.38C3.06,6.6 3.06,5.33 3.84,4.55L4.55,3.84C5.33,3.06 6.6,3.06 7.38,3.84L10.21,6.67L11.62,5.26L9.5,3.14L11.62,1M18,14A4,4 0 0,1 14,18V16A2,2 0 0,0 16,14H18M22,14A8,8 0 0,1 14,22V20A6,6 0 0,0 20,14H22Z", ke = "M23,12H17V10L20.39,6H17V4H23V6L19.62,10H23V12M15,16H9V14L12.39,10H9V8H15V10L11.62,14H15V16M7,20H1V18L4.39,14H1V12H7V14L3.62,18H7V20Z";
//#endregion
//#region src/feedback.ts
function Ae(e) {
	if (e && typeof e == "object") {
		let { x: t, y: n } = e;
		if (typeof t == "number" && typeof n == "number" && Number.isFinite(t) && Number.isFinite(n)) return [t, n];
	}
	return null;
}
function je(e) {
	if (!Array.isArray(e)) return [];
	let t = [];
	for (let n of e) {
		let e = Ae(n);
		e && t.push(e);
	}
	return t;
}
function Me(e) {
	let t = {
		visited: [],
		remaining: []
	}, n = e?.cleanPathProgress;
	if (!Array.isArray(n)) return t;
	for (let e of n) {
		let n = je(e?.path);
		if (n.length < 2) continue;
		let r = Number(e.clean_index), i = Number.isFinite(r) ? Math.max(0, Math.min(n.length - 1, Math.floor(r))) : 0;
		i > 0 && t.visited.push(n.slice(0, i + 1)), i < n.length - 1 && t.remaining.push(n.slice(i));
	}
	return t;
}
function Ne(e, t = 0) {
	if (t > 4 || !e || typeof e != "object") return [];
	let n = Array.isArray(e) ? je(e) : [];
	for (let r of Object.values(e)) {
		let e = Ne(r, t + 1);
		e.length > n.length && (n = e);
	}
	return n;
}
function Pe(e) {
	if (!Array.isArray(e)) return [];
	let t = [];
	for (let n of e) {
		if (!Array.isArray(n)) continue;
		let e = [];
		for (let t of n) if (Array.isArray(t) && typeof t[0] == "number" && typeof t[1] == "number") e.push([t[0], t[1]]);
		else {
			let n = Ae(t);
			n && e.push(n);
		}
		e.length && t.push(e);
	}
	return t;
}
//#endregion
//#region src/geometry.ts
var q = (e, t) => [-e, -t];
function Fe(e, t) {
	let n = Math.cos(t), r = Math.sin(t);
	return [e[0] * n - e[1] * r, e[0] * r + e[1] * n];
}
function Ie(e, t) {
	let n = [Math.cos(t), Math.sin(t)], r = [-n[1], n[0]], i = (t, i) => [e[0] + n[0] * t + r[0] * i, e[1] + n[1] * t + r[1] * i], a = .315;
	return {
		dock: [
			i(-.51, -.315),
			i(-.51, a),
			i(.36, a),
			i(.36, -.315)
		],
		guard: [
			i(-1.075, -1),
			i(-1.075, 1),
			i(.925, 1),
			i(.925, -1)
		]
	};
}
function Le(e, t, n) {
	return [
		[.88, 0],
		[.55, .275],
		[-.42, .275],
		[-.42, -.275],
		[.55, -.275]
	].map((r) => {
		let i = Fe(r, n);
		return [e + i[0], t + i[1]];
	});
}
function Re(e, t, n, r) {
	let i = [t[0] - e[0], t[1] - e[1]], a = [r[0] - n[0], r[1] - n[1]], o = i[0] * i[0] + i[1] * i[1];
	if (o < 1e-9) return null;
	let s = (a[0] * i[0] + a[1] * i[1]) / o, c = (a[1] * i[0] - a[0] * i[1]) / o;
	return {
		a: s,
		b: c,
		e: n[0] - (s * e[0] - c * e[1]),
		f: n[1] - (c * e[0] + s * e[1])
	};
}
function ze(e, t) {
	return [e.a * t[0] - e.b * t[1] + e.e, e.b * t[0] + e.a * t[1] + e.f];
}
function Be(e, t) {
	let n = e.a * e.a + e.b * e.b, r = t[0] - e.e, i = t[1] - e.f;
	return [(e.a * r + e.b * i) / n, (-e.b * r + e.a * i) / n];
}
function Ve(e) {
	return `matrix(${e.a} ${e.b} ${-e.b} ${e.a} ${e.e} ${e.f})`;
}
function He(e, t) {
	let n = !1;
	for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
		let [a, o] = t[r], [s, c] = t[i];
		o > e[1] != c > e[1] && e[0] < (s - a) * (e[1] - o) / (c - o) + a && (n = !n);
	}
	return n;
}
function Ue(e, t) {
	let n = Infinity;
	for (let r = 1; r < t.length; r++) {
		let i = t[r - 1], a = t[r], o = a[0] - i[0], s = a[1] - i[1], c = o * o + s * s, l = c === 0 ? 0 : Math.max(0, Math.min(1, ((e[0] - i[0]) * o + (e[1] - i[1]) * s) / c));
		n = Math.min(n, Math.hypot(e[0] - (i[0] + l * o), e[1] - (i[1] + l * s)));
	}
	return n;
}
function We(e, t, n = .15, r = 5e3) {
	let i = e[e.length - 1];
	if (i && Math.hypot(t.x - i.x, t.y - i.y) < n && i.reverse === t.reverse && i.working === t.working) return e;
	let a = e.length >= r ? e.slice(e.length - r + 1) : e.slice();
	return a.push(t), a;
}
function Ge(e) {
	let t = [];
	for (let n of e) {
		let e = [n.x, n.y], r = t[t.length - 1];
		if (r && r.reverse === n.reverse && r.working === n.working) {
			r.points.push(e);
			continue;
		}
		let i = r ? r.points[r.points.length - 1] : void 0;
		t.push({
			points: i ? [i, e] : [e],
			reverse: n.reverse,
			working: n.working
		});
	}
	return t.filter((e) => e.points.length >= 2);
}
function Ke(e) {
	let t = e / 5;
	return [
		.5,
		1,
		2,
		5,
		10,
		20,
		50,
		100,
		200,
		500
	].find((e) => e >= t) ?? 1e3;
}
//#endregion
//#region src/styles.ts
var qe = o`
  :host {
    display: block;
    --yl-area: var(--yarbo-area-color, var(--primary-color, #1e88e5));
    --yl-nogo: var(--yarbo-nogo-color, var(--error-color, #db4437));
    --yl-novision: var(--yarbo-novision-color, #8e5bd6);
    --yl-path: var(--yarbo-path-color, var(--warning-color, #ffa000));
    --yl-sidewalk: var(--yarbo-sidewalk-color, #00a39a);
    --yl-dock: var(--yarbo-dock-color, var(--success-color, #43a047));
    --yl-robot: var(--yarbo-robot-color, var(--primary-color, #1e88e5));
    --yl-trail: var(--yarbo-trail-color, var(--primary-color, #1e88e5));
    --yl-reverse: var(--yarbo-reverse-color, #d63fd6);
    --yl-ink: var(--primary-text-color, #1c1f24);
    --yl-muted: var(--secondary-text-color, #5f6670);
    --yl-ground: var(--secondary-background-color, #eef0f2);
    --yl-surface: var(--card-background-color, #ffffff);
    --yl-divider: var(--divider-color, rgba(0, 0, 0, 0.12));
  }
  ha-card {
    overflow: hidden;
  }
  .header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px 10px;
    flex-wrap: wrap;
  }
  .title {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--yl-ink);
    margin-right: auto;
    line-height: 1.3;
  }
  .chips {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    height: 26px;
    padding: 0 10px 0 8px;
    border-radius: 13px;
    background: var(--yl-ground);
    color: var(--yl-ink);
    font-size: 0.8rem;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }
  .chip svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
    flex: none;
  }
  .chip.good {
    color: var(--success-color, #2e7d32);
  }
  .chip.warn {
    color: var(--warning-color, #b26a00);
  }
  .chip.bad {
    color: var(--error-color, #c62828);
  }
  .map {
    position: relative;
    background: var(--yl-ground);
    touch-action: none;
    user-select: none;
    cursor: grab;
  }
  .map.dragging {
    cursor: grabbing;
  }
  .map.picking {
    cursor: crosshair;
  }
  .map > svg {
    display: block;
    width: 100%;
    height: 100%;
  }
  .placeholder {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: var(--yl-muted);
    padding: 24px;
    text-align: center;
  }
  .controls {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .controls button,
  .panel button {
    font: inherit;
  }
  .icon-button {
    width: 36px;
    height: 36px;
    border-radius: 18px;
    border: 1px solid var(--yl-divider);
    background: var(--yl-surface);
    color: var(--yl-ink);
    display: grid;
    place-items: center;
    cursor: pointer;
    padding: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18);
  }
  .icon-button svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
  .icon-button.active {
    background: var(--primary-color, #1e88e5);
    color: var(--text-primary-color, #fff);
    border-color: transparent;
  }
  .icon-button:focus-visible,
  .panel button:focus-visible,
  .panel input:focus-visible {
    outline: 2px solid var(--primary-color, #1e88e5);
    outline-offset: 2px;
  }
  .scale {
    position: absolute;
    left: 12px;
    bottom: 10px;
    font-size: 0.75rem;
    color: var(--yl-ink);
    font-variant-numeric: tabular-nums;
    pointer-events: none;
  }
  .scale .bar {
    height: 4px;
    border: 2px solid var(--yl-ink);
    border-top: none;
    margin-top: 2px;
  }
  .north {
    position: absolute;
    right: 58px;
    top: 14px;
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--yl-ink);
    display: grid;
    justify-items: center;
    pointer-events: none;
  }
  .north svg {
    width: 14px;
    height: 16px;
    fill: var(--yl-ink);
  }
  .info {
    position: absolute;
    left: 12px;
    top: 12px;
    background: var(--yl-surface);
    color: var(--yl-ink);
    border-radius: 10px;
    padding: 8px 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    font-size: 0.85rem;
    max-width: 60%;
  }
  .info .muted {
    color: var(--yl-muted);
  }
  .panel {
    position: absolute;
    left: 12px;
    right: 58px;
    bottom: 12px;
    background: var(--yl-surface);
    color: var(--yl-ink);
    border-radius: 12px;
    padding: 12px 14px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    display: grid;
    gap: 8px;
    font-size: 0.9rem;
  }
  .panel .row {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .panel input[type="text"] {
    flex: 1;
    min-width: 160px;
    font: inherit;
    padding: 6px 8px;
    border-radius: 6px;
    border: 1px solid var(--yl-divider);
    background: var(--yl-ground);
    color: var(--yl-ink);
  }
  .panel button {
    padding: 6px 12px;
    border-radius: 18px;
    border: 1px solid var(--yl-divider);
    background: var(--yl-surface);
    color: var(--yl-ink);
    cursor: pointer;
  }
  .panel button.primary {
    background: var(--primary-color, #1e88e5);
    color: var(--text-primary-color, #fff);
    border-color: transparent;
  }
  .panel .step {
    font-weight: 500;
  }
  .panel .hint {
    color: var(--yl-muted);
    font-size: 0.82rem;
  }
  .panel .error {
    color: var(--error-color, #c62828);
  }
  svg .zone {
    stroke-width: 2px;
    vector-effect: non-scaling-stroke;
    stroke-linejoin: round;
  }
  svg .zone.areas {
    fill: color-mix(in srgb, var(--yl-area) 22%, transparent);
    stroke: var(--yl-area);
  }
  svg .zone.nogozones {
    fill: color-mix(in srgb, var(--yl-nogo) 26%, transparent);
    stroke: var(--yl-nogo);
  }
  svg .zone.novisionzones {
    fill: color-mix(in srgb, var(--yl-novision) 20%, transparent);
    stroke: var(--yl-novision);
  }
  svg .zone.elec_fence {
    fill: none;
    stroke: var(--yl-path);
    stroke-dasharray: 6 4;
  }
  svg .zone.disabled {
    opacity: 0.45;
  }
  svg .zone.selected {
    stroke-width: 4px;
  }
  svg .line {
    fill: none;
    stroke-width: 4px;
    vector-effect: non-scaling-stroke;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 10 7;
  }
  svg .line.pathways {
    stroke: var(--yl-path);
  }
  svg .line.sidewalks {
    stroke: var(--yl-sidewalk);
  }
  svg .line.deadends {
    stroke: var(--yl-muted);
  }
  svg .line.selected {
    stroke-width: 7px;
  }
  svg .dock {
    fill: var(--yl-dock);
    stroke: var(--yl-surface);
    stroke-width: 1.5px;
    vector-effect: non-scaling-stroke;
  }
  svg .guard {
    fill: none;
    stroke: var(--yl-dock);
    stroke-width: 1.5px;
    stroke-dasharray: 4 4;
    vector-effect: non-scaling-stroke;
  }
  svg .trail {
    fill: none;
    stroke: var(--yl-trail);
    stroke-linecap: round;
    stroke-linejoin: round;
    opacity: 0.55;
  }
  svg .trail.thin {
    stroke-width: 2px;
    vector-effect: non-scaling-stroke;
  }
  svg .trail.reverse {
    stroke: var(--yl-reverse);
  }
  svg .plan-visited {
    fill: none;
    stroke: var(--yl-trail);
    stroke-width: 3px;
    vector-effect: non-scaling-stroke;
    opacity: 0.8;
  }
  svg .plan-remaining {
    fill: none;
    stroke: var(--yl-muted);
    stroke-width: 1px;
    vector-effect: non-scaling-stroke;
    stroke-linejoin: round;
    opacity: 0.35;
  }
  svg .route {
    fill: none;
    stroke: var(--yl-dock);
    stroke-width: 3px;
    vector-effect: non-scaling-stroke;
    stroke-dasharray: 8 5;
  }
  svg .obstacle {
    fill: none;
    stroke: var(--yl-nogo);
    stroke-width: 4px;
    vector-effect: non-scaling-stroke;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  svg .obstacle-dot {
    fill: var(--yl-nogo);
  }
  svg .robot {
    fill: var(--yl-robot);
    stroke: var(--yl-surface);
    stroke-width: 2px;
    vector-effect: non-scaling-stroke;
    stroke-linejoin: round;
  }
  svg .robot-halo {
    fill: color-mix(in srgb, var(--yl-robot) 25%, transparent);
    stroke: var(--yl-robot);
    stroke-width: 1.5px;
    vector-effect: non-scaling-stroke;
  }
  svg .robot.asleep {
    fill: var(--yl-muted);
  }
  svg .label {
    fill: var(--yl-ink);
    stroke: var(--yl-surface);
    paint-order: stroke;
    stroke-linejoin: round;
    font-family: var(--ha-font-family-body, system-ui, sans-serif);
    font-weight: 500;
    text-anchor: middle;
    dominant-baseline: middle;
  }
  svg .grid line {
    stroke: var(--yl-muted);
    stroke-opacity: 0.16;
    stroke-width: 1px;
    vector-effect: non-scaling-stroke;
  }
  svg .pick {
    fill: var(--primary-color, #1e88e5);
    stroke: var(--yl-surface);
    stroke-width: 2px;
    vector-effect: non-scaling-stroke;
  }
  .dim {
    opacity: 0.25;
  }
`, Je = 2e3;
function J(e, t) {
	let n = e.width * (t.h / Math.max(1, t.w));
	return [
		e.cx - e.width / 2,
		e.cy - n / 2,
		e.width,
		n
	];
}
function Ye(e, t, n = .12) {
	let [r, i, a, o] = e, s = Math.max(a - r, 4), c = Math.max(o - i, 4), l = t.w / Math.max(1, t.h), u = Math.max(s, c * l) * (1 + n * 2);
	return {
		cx: (r + a) / 2,
		cy: (i + o) / 2,
		width: Xe(u)
	};
}
function Xe(e) {
	return Math.min(Je, Math.max(2, e));
}
function Ze(e, t, n) {
	let r = Xe(e.width * t), i = r / e.width;
	return {
		cx: n[0] + (e.cx - n[0]) * i,
		cy: n[1] + (e.cy - n[1]) * i,
		width: r
	};
}
function Y(e, t, n, r) {
	let [i, a, o, s] = J(e, t);
	return [i + n / Math.max(1, t.w) * o, a + r / Math.max(1, t.h) * s];
}
function X(e, t) {
	return e.width / Math.max(1, t.w);
}
//#endregion
//#region src/editor.ts
var Qe = [
	{
		name: "entity",
		required: !0,
		selector: { entity: { filter: { integration: "yarbo_local" } } }
	},
	{
		name: "title",
		selector: { text: {} }
	},
	{
		type: "grid",
		name: "",
		schema: [
			{
				name: "height",
				selector: { number: {
					min: 200,
					max: 1400,
					step: 20,
					mode: "box",
					unit_of_measurement: "px"
				} }
			},
			{
				name: "trail",
				selector: { boolean: {} }
			},
			{
				name: "follow",
				selector: { boolean: {} }
			},
			{
				name: "show_status",
				selector: { boolean: {} }
			}
		]
	}
], $e = {
	entity: "Robot (any Yarbo Local entity)",
	title: "Title",
	height: "Map height",
	trail: "Show trail",
	follow: "Follow the robot",
	show_status: "Show status chips"
}, et = class extends K {
	static properties = {
		hass: { attribute: !1 },
		_config: { state: !0 }
	};
	setConfig(e) {
		this._config = e;
	}
	render() {
		return !this.hass || !this._config ? L : P`<ha-form
      .hass=${this.hass}
      .data=${this._config}
      .schema=${Qe}
      .computeLabel=${(e) => $e[e.name] ?? e.name}
      @value-changed=${this._changed}
    ></ha-form>`;
	}
	_changed(e) {
		this.dispatchEvent(new CustomEvent("config-changed", {
			detail: { config: e.detail.value },
			bubbles: !0,
			composed: !0
		}));
	}
};
customElements.get("yarbo-local-card-editor") || customElements.define("yarbo-local-card-editor", et);
//#endregion
//#region src/yarbo-local-card.ts
var tt = "0.1.1", Z = 440, nt = .55, rt = 6, it = 14, at = {
	sleeping: "Sleeping",
	idle: "Idle",
	calculating_route: "Calculating route",
	heading_to_area: "Heading to area",
	working: "Working",
	waypoint: "Waypoint",
	completed: "Completed",
	paused: "Paused",
	returning: "Returning",
	charging: "Charging",
	error: "Error"
}, Q = (e) => F`<svg viewBox="0 0 24 24" aria-hidden="true"><path d=${e}></path></svg>`, $ = (e) => e.map(([e, t]) => `${-e},${-t}`).join(" "), ot = class extends K {
	static styles = qe;
	static properties = {
		hass: { attribute: !1 },
		_config: { state: !0 },
		_map: { state: !0 },
		_live: { state: !0 },
		_view: { state: !0 },
		_size: { state: !0 },
		_trail: { state: !0 },
		_feedback: { state: !0 },
		_background: { state: !0 },
		_selected: { state: !0 },
		_follow: { state: !0 },
		_align: { state: !0 },
		_error: { state: !0 },
		_dragging: { state: !0 }
	};
	_unsubscribe;
	_target;
	_resize;
	_measured = !1;
	_pointers = /* @__PURE__ */ new Map();
	_gesture;
	constructor() {
		super(), this._size = {
			w: 600,
			h: Z
		}, this._trail = [], this._feedback = {}, this._follow = !1, this._dragging = !1;
	}
	setConfig(e) {
		if (!e || typeof e.entity != "string" || !e.entity) throw Error("Set entity to any Yarbo Local entity, for example the robot's location tracker");
		this._config = {
			trail: !0,
			follow: !1,
			show_status: !0,
			height: Z,
			...e
		}, this._follow = !!this._config.follow;
	}
	getCardSize() {
		return Math.ceil((this._config?.height ?? Z) / 50) + 1;
	}
	getGridOptions() {
		return {
			columns: 12,
			rows: Math.ceil((this._config?.height ?? Z) / 56) + 2,
			min_columns: 6,
			min_rows: 5
		};
	}
	static getConfigElement() {
		return document.createElement("yarbo-local-card-editor");
	}
	static getStubConfig(e) {
		let t = Object.values(e.entities ?? {}).filter((e) => e.platform === "yarbo_local");
		return {
			entity: (t.find((e) => e.entity_id.startsWith("device_tracker.")) ?? t[0])?.entity_id ?? "",
			title: "Yarbo"
		};
	}
	connectedCallback() {
		if (super.connectedCallback(), this._target) {
			let e = this._target;
			this._target = void 0, this._connect(e);
		}
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._resize?.disconnect(), this._resize = void 0, this._teardown();
	}
	updated(e) {
		let t = this._config?.entity;
		if (this.hass && t && t !== this._target && this._connect(t), !this._resize) {
			let e = this.renderRoot.querySelector(".map");
			e && (this._resize = new ResizeObserver((e) => {
				let t = e[0]?.contentRect;
				t && t.width !== 0 && t.height !== 0 && ((t.width !== this._size.w || t.height !== this._size.h) && (this._size = {
					w: t.width,
					h: t.height
				}), this._measured || (this._measured = !0, this._map && this._fit()));
			}), this._resize.observe(e));
		}
		e.has("_map") && this._map && !this._view && this._measured && this._fit();
	}
	async _teardown() {
		let e = this._unsubscribe;
		if (this._unsubscribe = void 0, e) try {
			await e();
		} catch {}
	}
	async _connect(e) {
		let t = this.hass;
		if (t) {
			this._target = e, await this._teardown(), this._error = void 0, this._map = void 0, this._view = void 0, this._trail = [], this._feedback = {};
			try {
				let [n, r] = await Promise.all([t.callWS({
					type: "yarbo_local/map",
					entity_id: e
				}), t.callWS({
					type: "yarbo_local/background/get",
					entity_id: e
				})]);
				if (this._target !== e) return;
				this._map = n, this._background = r, this._unsubscribe = await t.connection.subscribeMessage((e) => this._onEvent(e), {
					type: "yarbo_local/subscribe_live",
					entity_id: e
				});
			} catch (e) {
				this._error = `Could not load the Yarbo map: ${e.message ?? String(e)}`;
			}
		}
	}
	_onEvent(e) {
		if (e.type === "live") {
			if (this._live = e, e.x !== null && e.y !== null && this._config?.trail !== !1) {
				let t = e.plan_running && e.activity === "working";
				this._trail = We(this._trail, {
					x: e.x,
					y: e.y,
					t: e.t,
					reverse: e.reverse,
					working: t
				});
			}
			if (this._follow && e.x !== null && e.y !== null && this._view && !this._gesture) {
				let [t, n] = q(e.x, e.y);
				this._view = {
					...this._view,
					cx: t,
					cy: n
				};
			}
		} else if (e.type === "map_changed") {
			let e = this._target;
			this.hass && e && this.hass.callWS({
				type: "yarbo_local/map",
				entity_id: e
			}).then((t) => {
				this._target === e && (this._map = t);
			});
		} else if (e.type === "feedback") {
			let t = { ...this._feedback };
			e.data === null || e.data === void 0 ? delete t[e.leaf] : t[e.leaf] = e.data, this._feedback = t;
		}
	}
	_fit() {
		let e = this._map?.bounds, t = this._live && this._live.x !== null && this._live.y !== null ? q(this._live.x, this._live.y) : null, n = e ? [
			-e[2],
			-e[3],
			-e[0],
			-e[1]
		] : null;
		t && (n = n ? [
			Math.min(n[0], t[0]),
			Math.min(n[1], t[1]),
			Math.max(n[2], t[0]),
			Math.max(n[3], t[1])
		] : [
			t[0] - 5,
			t[1] - 5,
			t[0] + 5,
			t[1] + 5
		]), this._view = Ye(n ?? [
			-10,
			-10,
			10,
			10
		], this._size);
	}
	_toggleFollow() {
		if (this._follow = !this._follow, this._follow && this._view && this._live?.x != null && this._live.y != null) {
			let [e, t] = q(this._live.x, this._live.y);
			this._view = {
				...this._view,
				cx: e,
				cy: t
			};
		}
	}
	_local(e) {
		let t = e.currentTarget.getBoundingClientRect();
		return {
			px: e.clientX - t.left,
			py: e.clientY - t.top
		};
	}
	_onWheel(e) {
		if (!this._view) return;
		e.preventDefault();
		let { px: t, py: n } = this._local(e), r = Y(this._view, this._size, t, n);
		this._view = Ze(this._view, Math.exp(e.deltaY * .0015), r);
	}
	_onPointerDown(e) {
		if (!this._view || e.target.closest(".controls, .panel, .info")) return;
		e.currentTarget.setPointerCapture(e.pointerId);
		let { px: t, py: n } = this._local(e);
		if (this._pointers.set(e.pointerId, {
			x: t,
			y: n
		}), this._pointers.size === 1) this._gesture = {
			startX: t,
			startY: n,
			view: this._view,
			moved: !1
		};
		else if (this._pointers.size === 2 && this._gesture) {
			let [e, t] = [...this._pointers.values()];
			this._gesture = {
				...this._gesture,
				view: this._view,
				pinch: Math.hypot(e.x - t.x, e.y - t.y),
				moved: !0
			};
		}
	}
	_onPointerMove(e) {
		let t = this._gesture;
		if (!t || !this._pointers.has(e.pointerId)) return;
		let { px: n, py: r } = this._local(e);
		if (this._pointers.set(e.pointerId, {
			x: n,
			y: r
		}), this._pointers.size >= 2 && t.pinch) {
			let [e, n] = [...this._pointers.values()], r = Math.hypot(e.x - n.x, e.y - n.y), i = Y(t.view, this._size, (e.x + n.x) / 2, (e.y + n.y) / 2);
			this._view = Ze(t.view, t.pinch / Math.max(1, r), i);
			return;
		}
		let i = n - t.startX, a = r - t.startY;
		if (!t.moved && Math.hypot(i, a) < rt) return;
		t.moved = !0, this._dragging = !0, this._follow = !1;
		let o = X(t.view, this._size);
		this._view = {
			...t.view,
			cx: t.view.cx - i * o,
			cy: t.view.cy - a * o
		};
	}
	_onPointerUp(e) {
		let t = this._gesture;
		if (this._pointers.delete(e.pointerId), !(this._pointers.size > 0) && (this._gesture = void 0, this._dragging = !1, t && !t.moved && this._view && e.type === "pointerup")) {
			let { px: t, py: n } = this._local(e);
			this._tap(Y(this._view, this._size, t, n));
		}
	}
	_tap(e) {
		if (this._align) {
			this._pick(e);
			return;
		}
		let t = [-e[0], -e[1]], n = this._view ? X(this._view, this._size) : .05, r = this._map?.zones ?? [], i = r.find((e) => !e.closed && Ue(t, e.points) < 10 * n), a = r.filter((e) => e.closed && He(t, e.points)), o = i ?? a.sort((e, t) => (e.area_m2 ?? 0) - (t.area_m2 ?? 0))[0];
		this._selected = o && o === this._selected ? void 0 : o;
	}
	_startAlign() {
		this._selected = void 0, this._align = {
			step: "url",
			url: this._background?.image ?? "/local/yarbo/aerial.jpg",
			opacity: this._background?.opacity ?? .85
		};
	}
	_loadAlignImage() {
		let e = this._align;
		if (!e || !this._view) return;
		this._align = {
			...e,
			busy: !0,
			error: void 0
		};
		let t = new Image();
		t.onload = () => {
			let e = this._view, [n, r, i, a] = J(e, this._size), o = Math.min(i / t.naturalWidth, a / t.naturalHeight), s = {
				a: o,
				b: 0,
				e: n + (i - t.naturalWidth * o) / 2,
				f: r + (a - t.naturalHeight * o) / 2
			};
			this._align = {
				...this._align,
				busy: !1,
				step: "photo1",
				width: t.naturalWidth,
				height: t.naturalHeight,
				placement: s
			};
		}, t.onerror = () => {
			this._align = {
				...this._align,
				busy: !1,
				error: `Could not load ${e.url}. Put the file in /config/www and use /local/…`
			};
		}, t.src = e.url;
	}
	_snap(e) {
		let t = this._view ? X(this._view, this._size) : .05, n = e, r = it * t, i = [];
		for (let e of this._map?.zones ?? []) i.push(...e.points.map(([e, t]) => q(e, t)));
		for (let e of this._map?.docks ?? []) i.push(q(e.point[0], e.point[1]));
		for (let t of i) {
			let i = Math.hypot(t[0] - e[0], t[1] - e[1]);
			i < r && (n = t, r = i);
		}
		return n;
	}
	_pick(e) {
		let t = this._align;
		if (!t?.placement) return;
		let n = Be(t.placement, e);
		switch (t.step) {
			case "photo1":
				this._align = {
					...t,
					u1: n,
					step: "map1"
				};
				break;
			case "map1":
				this._align = {
					...t,
					w1: this._snap(e),
					step: "photo2"
				};
				break;
			case "photo2":
				this._align = {
					...t,
					u2: n,
					step: "map2"
				};
				break;
			case "map2": {
				let n = this._snap(e), r = t.u1 && t.u2 && t.w1 ? Re(t.u1, t.u2, t.w1, n) : null;
				this._align = r ? {
					...t,
					w2: n,
					result: r,
					step: "preview",
					error: void 0
				} : {
					...t,
					step: "photo2",
					u2: void 0,
					error: "The two photo points are the same. Pick two landmarks far apart."
				};
				break;
			}
		}
	}
	async _saveAlign() {
		let e = this._align;
		if (!e?.result || !e.width || !e.height || !this.hass || !this._target) return;
		let t = {
			image: e.url,
			transform: e.result,
			width: e.width,
			height: e.height,
			opacity: e.opacity
		};
		this._align = {
			...e,
			busy: !0
		};
		try {
			this._background = await this.hass.callWS({
				type: "yarbo_local/background/save",
				entity_id: this._target,
				background: t
			}), this._align = void 0;
		} catch (t) {
			this._align = {
				...e,
				busy: !1,
				error: t.message ?? "Saving failed"
			};
		}
	}
	async _clearBackground() {
		this.hass && this._target && (await this.hass.callWS({
			type: "yarbo_local/background/clear",
			entity_id: this._target
		}), this._background = null, this._align = void 0);
	}
	render() {
		if (!this._config) return L;
		let e = this._config.height ?? Z, t = !!(this._align && this._align.step !== "url" && this._align.step !== "preview");
		return P`<ha-card>
      ${this._renderHeader()}
      <div
        class="map ${this._dragging ? "dragging" : ""} ${t ? "picking" : ""}"
        style="height:${e}px"
        @wheel=${this._onWheel}
        @pointerdown=${this._onPointerDown}
        @pointermove=${this._onPointerMove}
        @pointerup=${this._onPointerUp}
        @pointercancel=${this._onPointerUp}
      >
        ${this._map && this._view ? this._renderSvg() : P`<div class="placeholder">${this._error ?? "Loading the map from the robot…"}</div>`}
        ${this._map && this._view ? this._renderFurniture() : L}
        ${this._renderControls()} ${this._renderInfo()} ${this._renderAlignPanel()}
      </div>
    </ha-card>`;
	}
	_renderHeader() {
		let e = this._live, t = this._config?.title ?? this._map?.title ?? "Yarbo";
		if (this._config?.show_status === !1) return P`<div class="header"><div class="title">${t}</div></div>`;
		let n = e?.fix_quality, r = n === 4 ? {
			label: "RTK fixed",
			cls: "good"
		} : n === 5 ? {
			label: "RTK float",
			cls: "warn"
		} : n ? {
			label: "GPS only",
			cls: "warn"
		} : {
			label: "No fix",
			cls: "bad"
		};
		return P`<div class="header">
      <div class="title">${t}</div>
      <div class="chips">
        ${e && !e.connected ? P`<span class="chip bad">${Q(De)}Offline</span>` : L}
        ${e ? P`<span class="chip ${e.activity === "error" ? "bad" : ""}"
              >${e.awake === !1 ? Q(ke) : L}${at[e.activity] ?? e.activity}</span
            >` : L}
        ${e?.battery == null ? L : P`<span class="chip ${e.battery < 20 ? "bad" : ""}"
              >${Q(e.charging ? Se : xe)}${e.battery}%</span
            >`}
        ${e ? P`<span class="chip ${r.cls}"
              >${Q(Oe)}${r.label}${e.satellites ? P` · ${e.satellites}` : L}</span
            >` : L}
      </div>
    </div>`;
	}
	_renderSvg() {
		let e = this._view, t = this._map, [n, r, i, a] = J(e, this._size), o = X(e, this._size), s = this._align, c = s && (s.step === "photo1" || s.step === "photo2");
		return P`<svg viewBox="${n} ${r} ${i} ${a}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Map of ${t.title}">
      ${this._renderBackground()} ${this._renderGrid(n, r, i, a)}
      <g class=${c ? "dim" : ""}>
        ${t.zones.filter((e) => e.closed).map((e) => this._renderZone(e))}
        ${t.zones.filter((e) => !e.closed).map((e) => this._renderZone(e))} ${this._renderDocks()}
        ${this._renderFeedback(o)} ${this._renderTrail()} ${this._renderRobot(o)} ${this._renderLabels(o)}
      </g>
      ${this._renderPicks(o)}
    </svg>`;
	}
	_renderBackground() {
		let e = this._align;
		if (e?.width && e.height) {
			let t = e.step === "photo1" || e.step === "photo2", n = e.step === "preview" && e.result ? e.result : e.placement;
			if (!n) return L;
			let r = t ? 1 : e.step === "preview" ? e.opacity : .35;
			return F`<image href=${e.url} width=${e.width} height=${e.height} transform=${Ve(n)}
        opacity=${r} preserveAspectRatio="none"></image>`;
		}
		let t = this._background;
		return t ? F`<image href=${t.image} width=${t.width} height=${t.height} transform=${Ve(t.transform)}
      opacity=${t.opacity} preserveAspectRatio="none"></image>` : L;
	}
	_renderGrid(e, t, n, r) {
		if (this._background && !this._align) return L;
		let i = Ke(Math.max(n, r)), a = [];
		for (let o = Math.ceil(e / i) * i; o < e + n; o += i) a.push(F`<line x1=${o} y1=${t} x2=${o} y2=${t + r}></line>`);
		for (let o = Math.ceil(t / i) * i; o < t + r; o += i) a.push(F`<line x1=${e} y1=${o} x2=${e + n} y2=${o}></line>`);
		return F`<g class="grid">${a}</g>`;
	}
	_renderZone(e) {
		let t = `${e.family} ${e.enabled ? "" : "disabled"} ${e === this._selected ? "selected" : ""}`;
		return e.closed ? e.points.length >= 3 ? F`<polygon class="zone ${t}" points=${$(e.points)}></polygon>` : L : e.points.length >= 2 ? F`<polyline class="line ${t}" points=${$(e.points)}></polyline>` : L;
	}
	_renderDocks() {
		return (this._map?.docks ?? []).map((e) => {
			let t = e.straight_phi ?? 0, { dock: n, guard: r } = Ie(e.point, t);
			return F`<polygon class="guard" points=${$(r)}></polygon>
        <polygon class="dock" points=${$(n)}></polygon>`;
		});
	}
	_renderFeedback(e) {
		let t = [], n = Me(this._feedback.plan_feedback);
		for (let e of n.remaining) t.push(F`<polyline class="plan-remaining" points=${$(e)}></polyline>`);
		for (let e of n.visited) t.push(F`<polyline class="plan-visited" points=${$(e)}></polyline>`);
		let r = Ne(this._feedback.recharge_feedback);
		r.length >= 2 && t.push(F`<polyline class="route" points=${$(r)}></polyline>`);
		for (let n of Pe(this._feedback.obstacles)) if (n.length >= 2) t.push(F`<polyline class="obstacle" points=${$(n)}></polyline>`);
		else {
			let [r, i] = n[0];
			t.push(F`<circle class="obstacle-dot" cx=${-r} cy=${-i} r=${Math.max(.08, 3 * e)}></circle>`);
		}
		return t;
	}
	_renderTrail() {
		return this._config?.trail === !1 ? L : Ge(this._trail).map((e) => {
			let t = `trail ${e.reverse ? "reverse" : ""} ${e.working ? "" : "thin"}`;
			return e.working ? F`<polyline class=${t} stroke-width=${nt} points=${$(e.points)}></polyline>` : F`<polyline class=${t} points=${$(e.points)}></polyline>`;
		});
	}
	_renderRobot(e) {
		let t = this._live;
		if (!t || t.x === null || t.y === null || t.phi === null) return L;
		let n = Le(t.x, t.y, t.phi), [r, i] = q(t.x, t.y);
		return F`${1.3 / e < 22 ? F`<circle class="robot-halo" cx=${r} cy=${i} r=${11 * e}></circle>` : L}
      <polygon class="robot ${t.awake === !1 ? "asleep" : ""}" points=${$(n)}></polygon>`;
	}
	_renderLabels(e) {
		let t = 13 * e;
		return (this._map?.zones ?? []).filter((e) => e.closed && e.name && e.points.length >= 3).map((e) => {
			let n = e.points.reduce((e, t) => e + t[0], 0) / e.points.length, r = e.points.reduce((e, t) => e + t[1], 0) / e.points.length;
			return F`<text class="label" x=${-n} y=${-r} font-size=${t} stroke-width=${t * .28}>${e.name}</text>`;
		});
	}
	_renderPicks(e) {
		let t = this._align;
		if (!t?.placement) return L;
		let n = 6 * e, r = t.step === "preview" && t.result ? t.result : t.placement, i = [t.u1, t.u2].filter((e) => !!e).map((e) => ze(r, e)), a = [t.w1, t.w2].filter((e) => !!e);
		return F`${[...i, ...a].map(([e, t]) => F`<circle class="pick" cx=${e} cy=${t} r=${n}></circle>`)}`;
	}
	_renderFurniture() {
		let e = this._view, t = X(e, this._size), n = Ke(e.width);
		return P`<div class="scale">
        ${n} m
        <div class="bar" style="width:${n / t}px"></div>
      </div>
      <div class="north" aria-hidden="true"><svg viewBox="0 0 14 16"><path d="M7 0 L14 16 L7 12 L0 16 Z"></path></svg>N</div>`;
	}
	_renderControls() {
		let e = !!this.hass?.user?.is_admin;
		return P`<div class="controls">
      <button class="icon-button" title="Fit the map" aria-label="Fit the map" @click=${() => this._fit()}>
        ${Q(Te)}
      </button>
      <button
        class="icon-button ${this._follow ? "active" : ""}"
        title="Follow the robot"
        aria-label="Follow the robot"
        aria-pressed=${this._follow ? "true" : "false"}
        @click=${() => this._toggleFollow()}
      >
        ${Q(Ce)}
      </button>
      ${this._config?.trail === !1 ? L : P`<button class="icon-button" title="Clear the trail" aria-label="Clear the trail" @click=${() => this._trail = []}>
            ${Q(we)}
          </button>`}
      ${e ? P`<button
            class="icon-button ${this._align ? "active" : ""}"
            title="Align an aerial photo"
            aria-label="Align an aerial photo"
            @click=${() => this._align ? this._align = void 0 : this._startAlign()}
          >
            ${Q(Ee)}
          </button>` : L}
    </div>`;
	}
	_renderInfo() {
		let e = this._selected;
		if (!e || this._align) return L;
		let t = {
			areas: "Work area",
			nogozones: "No-go zone",
			novisionzones: "No-vision zone",
			elec_fence: "Electronic fence",
			pathways: "Pathway",
			sidewalks: "Memory path",
			deadends: "Dead end"
		}, n = e.closed && e.area_m2 != null ? `${e.area_m2} m²` : `${e.length_m} m long`;
		return P`<div class="info">
      <div><strong>${e.name || "Unnamed"}</strong></div>
      <div class="muted">${t[e.family] ?? e.family} · ${n}${e.enabled ? "" : " · disabled"}</div>
    </div>`;
	}
	_renderAlignPanel() {
		let e = this._align;
		if (!e) return L;
		let [t, n] = {
			url: ["Aerial photo", "A top-down photo of your property served by Home Assistant, for example /local/yarbo/aerial.jpg for /config/www/yarbo/aerial.jpg. The card never fetches map tiles."],
			photo1: ["Step 1 of 4", "Tap a landmark on the photo, such as a corner of the driveway."],
			map1: ["Step 2 of 4", "Tap the same landmark on the map. Taps snap to zone corners and the dock."],
			photo2: ["Step 3 of 4", "Tap a second landmark on the photo, far from the first."],
			map2: ["Step 4 of 4", "Tap that second landmark on the map."],
			preview: ["Check the fit", "The photo is placed. Adjust the opacity, then save for everyone who uses this dashboard."]
		}[e.step];
		return P`<div class="panel" role="dialog" aria-label="Align an aerial photo">
      <div class="step">${t}</div>
      <div class="hint">${n}</div>
      ${e.step === "url" ? P`<div class="row">
            <input
              type="text"
              .value=${e.url}
              aria-label="Photo URL"
              @input=${(t) => this._align = {
			...e,
			url: t.target.value
		}}
            />
            <button class="primary" ?disabled=${e.busy} @click=${() => this._loadAlignImage()}>Load photo</button>
          </div>` : L}
      ${e.step === "preview" ? P`<div class="row">
            <label for="opacity">Opacity</label>
            <input
              id="opacity"
              type="range"
              min="0.2"
              max="1"
              step="0.05"
              .value=${String(e.opacity)}
              @input=${(t) => this._align = {
			...e,
			opacity: Number(t.target.value)
		}}
            />
          </div>` : L}
      ${e.error ? P`<div class="error">${e.error}</div>` : L}
      <div class="row">
        ${e.step === "preview" ? P`<button class="primary" ?disabled=${e.busy} @click=${() => this._saveAlign()}>Save</button>
              <button @click=${() => this._align = {
			...e,
			step: "photo1",
			u1: void 0,
			w1: void 0,
			u2: void 0,
			w2: void 0,
			result: void 0
		}}>
                Pick again
              </button>` : L}
        ${this._background ? P`<button @click=${() => this._clearBackground()}>Remove photo</button>` : L}
        <button @click=${() => this._align = void 0}>Cancel</button>
      </div>
    </div>`;
	}
};
customElements.get("yarbo-local-card") || customElements.define("yarbo-local-card", ot), window.customCards = window.customCards ?? [], window.customCards.some((e) => e.type === "yarbo-local-card") || window.customCards.push({
	type: "yarbo-local-card",
	name: "Yarbo Local",
	description: "The robot's own map with zones, dock, live position, trail and an optional aerial photo.",
	preview: !1,
	documentationURL: "https://github.com/yarbo-local/yarbo-local-card"
}), console.info(`%c YARBO-LOCAL-CARD %c ${tt} `, "color:#fff;background:#2f8f86;border-radius:3px 0 0 3px", "color:#2f8f86;background:#e8f1f0;border-radius:0 3px 3px 0");
//#endregion
export { ot as YarboLocalCard };
