/* @ds-bundle: {"format":4,"namespace":"RiscoCognitivoDesignSystem_fab0ba","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Tag","sourcePath":"components/actions/Tag.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"PromoTile","sourcePath":"components/surfaces/PromoTile.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"a5ea63c6d739","components/actions/Tag.jsx":"f85638410ca1","components/data/Table.jsx":"fa303c59bfc9","components/forms/RadioGroup.jsx":"5f04cddc845b","components/forms/SegmentedControl.jsx":"af026439901e","components/forms/TextField.jsx":"be4d2aa2dd7c","components/navigation/NavBar.jsx":"b0d253f2c547","components/surfaces/Card.jsx":"72f574e0c71c","components/surfaces/Dialog.jsx":"bd440f368bbc","components/surfaces/PromoTile.jsx":"01416fbb29ce","ui_kits/ecossistema/BlocksEdit.jsx":"b4610c5587eb","ui_kits/ecossistema/BlocksFunc.jsx":"ba24800a8126","ui_kits/ecossistema/BlocksInst.jsx":"d4bc95c771a8","ui_kits/ecossistema/BlocksShow.jsx":"ac12f55672b3","ui_kits/ecossistema/EcoApp.jsx":"e983bb69dfe3","ui_kits/ecossistema/Renderer.jsx":"38b905d92b29","ui_kits/ecossistema/Shell.jsx":"a3dc8df1987a","ui_kits/ecossistema/blueprints.js":"1f7b7055e75b","ui_kits/ecossistema/config.js":"bde6fa281e31","ui_kits/ecossistema/image-slot.js":"fff26d081c8d","ui_kits/ecossistema/routes.js":"7557b234c060","ui_kits/ecossistema/tweaks-panel.jsx":"d259e3a86f73","ui_kits/site/App.jsx":"287989c3c291","ui_kits/site/Assessment.jsx":"9e64d988dd83","ui_kits/site/Explore.jsx":"ff015797c92d","ui_kits/site/Home.jsx":"eec154681b22","ui_kits/site/Topic.jsx":"77487190eeb5","ui_kits/site/data.js":"cba8129e43af"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RiscoCognitivoDesignSystem_fab0ba = window.RiscoCognitivoDesignSystem_fab0ba || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  iconOnly = false,
  block = false,
  href,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const cls = ['btn', 'btn-' + variant, size === 'sm' && 'btn-sm', iconOnly && 'btn-icon', block && 'btn-block', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon, !iconOnly && children, iconAfter);
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  tone = 'neutral',
  icon,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['tag', 'tag-' + tone, className].filter(Boolean).join(' ')
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function Table({
  columns = [],
  rows = [],
  onRowClick
}) {
  return /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || 'left'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id ?? i,
    onClick: onRowClick ? () => onRowClick(r) : undefined,
    style: onRowClick ? {
      cursor: 'pointer'
    } : undefined
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      color: c.muted ? 'var(--color-text-muted)' : undefined
    }
  }, c.render ? c.render(r) : r[c.key]))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function RadioGroup({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  label
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (options[0] && options[0].value));
  const cur = value !== undefined ? value : inner;
  const lid = name + '-label';
  return /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "field-label",
    id: lid
  }, label), /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-labelledby": label ? lid : undefined,
    style: {
      display: 'grid',
      gap: 'var(--space-1)'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("label", {
    className: "radio",
    key: o.value
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: o.value,
    checked: cur === o.value,
    onChange: () => {
      setInner(o.value);
      onChange && onChange(o.value);
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), o.label))));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function SegmentedControl({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  ariaLabel
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (options[0] && options[0].value));
  const cur = value !== undefined ? value : inner;
  return /*#__PURE__*/React.createElement("div", {
    className: "seg",
    role: "radiogroup",
    "aria-label": ariaLabel
  }, options.map(o => /*#__PURE__*/React.createElement("label", {
    className: "seg-opt",
    key: o.value
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: o.value,
    checked: cur === o.value,
    onChange: () => {
      setInner(o.value);
      onChange && onChange(o.value);
    }
  }), o.icon, o.label)));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextField({
  label,
  id,
  multiline = false,
  className = '',
  ...rest
}) {
  const fid = id || (label ? 'f-' + String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  const El = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    className: ['field', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement(El, _extends({
    className: "input",
    id: fid
  }, rest)));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  brand = 'Risco Cognitivo',
  logoSrc,
  links = [],
  action,
  onBrandClick,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav-brand",
    onClick: onBrandClick
  }, logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: ""
  }), brand), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    "aria-current": l.current ? 'page' : undefined,
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(l);
      }
    }
  }, l.label)), action);
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  kicker,
  title,
  body,
  meta,
  elevation,
  interactive = false,
  as = 'div',
  className = '',
  children,
  ...rest
}) {
  const El = as;
  const cls = ['card', elevation && 'elev-' + elevation, interactive && 'card-interactive', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(El, _extends({
    className: cls
  }, rest), kicker && /*#__PURE__*/React.createElement("div", {
    className: "card-kicker"
  }, kicker), title && /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, title), body && /*#__PURE__*/React.createElement("p", {
    className: "card-body"
  }, body), children, meta && /*#__PURE__*/React.createElement("div", {
    className: "card-meta"
  }, meta));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  actions,
  onClose,
  contained = false
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "dialog-backdrop",
    style: contained ? {
      position: 'absolute'
    } : undefined,
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dialog",
    role: "dialog",
    "aria-modal": "true"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "dialog-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "dialog-body"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "dialog-actions"
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/PromoTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PromoTile({
  kicker,
  title,
  body,
  actions,
  media,
  theme,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['card', 'card-tile', className].filter(Boolean).join(' '),
    "data-theme": theme
  }, rest), kicker && /*#__PURE__*/React.createElement("div", {
    className: "card-kicker"
  }, kicker), title && /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, title), body && /*#__PURE__*/React.createElement("p", {
    className: "card-body"
  }, body), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 'var(--space-2)'
    }
  }, actions), media && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }
  }, media), children);
}
Object.assign(__ds_scope, { PromoTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/PromoTile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecossistema/BlocksEdit.jsx
try { (() => {
// Editorial family blocks (REF-02): ArticleHeader · RichText · MediaFigure · EvidenceList · DiscussionFeed · FormSection.
function ArticleHeader({
  id,
  title,
  publishedAt,
  authors,
  readingMinutes,
  kicker,
  first
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-col eco-art-head"
  }, first && /*#__PURE__*/React.createElement(BuildTag, null), kicker && /*#__PURE__*/React.createElement("span", {
    className: "eco-kicker"
  }, kicker), /*#__PURE__*/React.createElement("h1", {
    className: "eco-article-title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "eco-art-meta"
  }, [publishedAt, authors && authors.join(', '), readingMinutes && `${readingMinutes} min de leitura`].filter(Boolean).join(' · ')));
}

// content: [{ t:'p'|'q'|'h2'|'lead', text, by? }] — structured, no raw HTML.
function RichText({
  id,
  content
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-col eco-rich"
  }, content.map((c, k) => c.t === 'h2' ? /*#__PURE__*/React.createElement("h2", {
    key: k
  }, c.text) : c.t === 'q' ? /*#__PURE__*/React.createElement("p", {
    key: k
  }, /*#__PURE__*/React.createElement("b", null, c.by, ":"), " ", c.text) : c.t === 'strong' ? /*#__PURE__*/React.createElement("p", {
    key: k
  }, /*#__PURE__*/React.createElement("b", null, c.text)) : /*#__PURE__*/React.createElement("p", {
    key: k
  }, c.text)));
}
function MediaFigure({
  id,
  media,
  caption,
  link
}) {
  return /*#__PURE__*/React.createElement("figure", {
    className: "eco-col eco-figure"
  }, /*#__PURE__*/React.createElement(Media, {
    kind: media.kind || 'cover',
    name: id,
    className: "r12 eco-figure-media",
    alt: media.alt
  }), caption && /*#__PURE__*/React.createElement("figcaption", null, caption, link && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(A, {
    to: link[1]
  }, link[0], " \u203A"))));
}
function EvidenceList({
  id,
  title = 'Referências científicas',
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-col eco-evidence"
  }, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h2", null, title), items.length ? /*#__PURE__*/React.createElement("ol", null, items.map((r, k) => /*#__PURE__*/React.createElement("li", {
    key: k
  }, r))) : null, /*#__PURE__*/React.createElement("p", {
    className: "eco-note"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-info"
  }), "Fontes reais a cadastrar no CMS. As linhas acima mostram apenas o formato (autor, ano, t\xEDtulo, peri\xF3dico, DOI)."));
}
function DiscussionFeed({
  id,
  title,
  items,
  allowPosting = false,
  mode = 'comentarios'
}) {
  const {
    go
  } = useEco();
  return /*#__PURE__*/React.createElement("div", {
    className: mode === 'feed' ? 'eco-wrap eco-pad-sm' : 'eco-col eco-pad-sm'
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: "eco-feed-title"
  }, title), items.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "eco-empty"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-chat-circle-dots"
  }), "Nenhuma publica\xE7\xE3o com estes filtros.") : /*#__PURE__*/React.createElement("div", {
    className: "eco-feed"
  }, items.map((it, k) => /*#__PURE__*/React.createElement("article", {
    key: k,
    className: "eco-post"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("b", null, it.author), /*#__PURE__*/React.createElement("span", null, it.date), it.tipo && /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, ECO.label(it.tipo))), it.href ? /*#__PURE__*/React.createElement(A, {
    to: it.href,
    className: "eco-post-title"
  }, it.title) : null, /*#__PURE__*/React.createElement("p", null, it.text), it.replies != null && /*#__PURE__*/React.createElement("span", {
    className: "eco-post-meta"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-chat-circle"
  }), it.replies, " respostas")))), /*#__PURE__*/React.createElement("div", {
    className: "eco-feed-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('/entrar')
  }, allowPosting ? 'Entrar para publicar' : 'Entrar para comentar'), /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "Leitura p\xFAblica. Envio exige conta e passa por modera\xE7\xE3o.")));
}

// fields: [{ name, label, type, required, rows }]; demo mode is explicit — nothing is sent.
function FormSection({
  id,
  formId,
  fields,
  submitLabel,
  title,
  consent = true
}) {
  const [vals, setVals] = React.useState({});
  const [errs, setErrs] = React.useState({});
  const [state, setState] = React.useState('idle');
  const submit = e => {
    e.preventDefault();
    const er = {};
    fields.forEach(f => {
      const v = (vals[f.name] || '').trim();
      if (f.required && !v) er[f.name] = 'Campo obrigatório.';else if (f.type === 'email' && v && !/.+@.+\..+/.test(v)) er[f.name] = 'E-mail inválido.';
    });
    if (consent && !vals.__ok) er.__ok = 'Confirme o consentimento.';
    setErrs(er);
    if (Object.keys(er).length) return;
    setState('sending');
    setTimeout(() => setState('done'), 800);
  };
  if (state === 'done') return /*#__PURE__*/React.createElement("div", {
    className: "eco-col eco-pad-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-form done"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-check-circle"
  }), /*#__PURE__*/React.createElement("h2", null, "Recebido (demonstra\xE7\xE3o)."), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "Endpoint de \u201C", formId, "\u201D a configurar no CMS \u2014 nenhum dado foi enviado."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      setVals({});
      setState('idle');
    }
  }, "Novo envio")));
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-col eco-pad-sm"
  }, /*#__PURE__*/React.createElement("form", {
    className: "eco-form",
    onSubmit: submit,
    noValidate: true,
    "aria-label": title || formId
  }, title && /*#__PURE__*/React.createElement("h2", null, title), fields.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.name
  }, f.rows ? /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: formId + f.name
  }, f.label, f.required ? ' *' : ''), /*#__PURE__*/React.createElement("textarea", {
    id: formId + f.name,
    className: "input",
    rows: f.rows,
    value: vals[f.name] || '',
    onChange: e => setVals({
      ...vals,
      [f.name]: e.target.value
    })
  })) : /*#__PURE__*/React.createElement(TextField, {
    label: f.label + (f.required ? ' *' : ''),
    type: f.type || 'text',
    value: vals[f.name] || '',
    onChange: e => setVals({
      ...vals,
      [f.name]: e.target.value
    })
  }), errs[f.name] && /*#__PURE__*/React.createElement("p", {
    className: "eco-err",
    role: "alert"
  }, errs[f.name]))), consent && /*#__PURE__*/React.createElement("label", {
    className: "eco-check"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!vals.__ok,
    onChange: e => setVals({
      ...vals,
      __ok: e.target.checked
    })
  }), "Lorem ipsum dolor sit amet \u2014 consentimento para tratamento dos dados."), errs.__ok && /*#__PURE__*/React.createElement("p", {
    className: "eco-err",
    role: "alert"
  }, errs.__ok), /*#__PURE__*/React.createElement("div", {
    className: "eco-form-foot"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    disabled: state === 'sending'
  }, state === 'sending' ? 'Enviando…' : submitLabel), /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "Modo demonstra\xE7\xE3o"))));
}
Object.assign(window, {
  ArticleHeader,
  RichText,
  MediaFigure,
  EvidenceList,
  DiscussionFeed,
  FormSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecossistema/BlocksEdit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecossistema/BlocksFunc.jsx
try { (() => {
// Functional blocks: MapExplorer · AccountPanel · AuthForm · AdminPanel.
function MapExplorer({
  id,
  nodes,
  edges,
  legend,
  initialSelection
}) {
  const [sel, setSel] = React.useState(initialSelection || nodes[0].id);
  const [asList, setAsList] = React.useState(false);
  const [layer, setLayer] = React.useState('');
  const node = nodes.find(n => n.id === sel);
  const pos = Object.fromEntries(nodes.map(n => [n.id, n]));
  const linked = new Set(edges.filter(e => e[0] === sel || e[1] === sel).flat());
  const vis = n => !layer || n.group === layer;
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap eco-pad-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-map-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-legend"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'eco-leg' + (!layer ? ' on' : ''),
    onClick: () => setLayer('')
  }, "Tudo"), legend.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.key,
    className: 'eco-leg' + (layer === l.key ? ' on' : ''),
    onClick: () => setLayer(l.key)
  }, /*#__PURE__*/React.createElement("span", {
    className: 'sw g-' + l.key
  }), l.label))), /*#__PURE__*/React.createElement("button", {
    className: "eco-clear",
    "aria-pressed": asList,
    onClick: () => setAsList(!asList)
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph ' + (asList ? 'ph-graph' : 'ph-list-bullets')
  }), asList ? 'Ver mapa' : 'Ver como lista')), /*#__PURE__*/React.createElement("div", {
    className: "eco-map"
  }, asList ? /*#__PURE__*/React.createElement("ul", {
    className: "eco-map-list"
  }, nodes.filter(vis).map(n => /*#__PURE__*/React.createElement("li", {
    key: n.id
  }, /*#__PURE__*/React.createElement("button", {
    "aria-pressed": sel === n.id,
    className: sel === n.id ? 'on' : '',
    onClick: () => setSel(n.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: 'sw g-' + n.group
  }), n.label)))) : /*#__PURE__*/React.createElement("div", {
    className: "eco-map-canvas",
    role: "group",
    "aria-label": "Mapa interativo"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, edges.map(([a, b], k) => /*#__PURE__*/React.createElement("line", {
    key: k,
    x1: pos[a].x,
    y1: pos[a].y,
    x2: pos[b].x,
    y2: pos[b].y,
    className: a === sel || b === sel ? 'on' : '',
    vectorEffect: "non-scaling-stroke"
  }))), nodes.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    className: 'eco-node g-' + n.group + (sel === n.id ? ' on' : '') + (linked.has(n.id) ? ' near' : '') + (vis(n) ? '' : ' dim'),
    style: {
      left: n.x + '%',
      top: n.y + '%'
    },
    onClick: () => setSel(n.id),
    "aria-pressed": sel === n.id
  }, n.label))), /*#__PURE__*/React.createElement("aside", {
    className: "eco-map-detail",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eco-kicker"
  }, legend.find(l => l.key === node.group).label), /*#__PURE__*/React.createElement("h3", null, node.label), /*#__PURE__*/React.createElement("p", null, LOREM.p.slice(0, 180), "."), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "Conex\xF5es: ", edges.filter(e => e.includes(sel)).map(e => pos[e[0] === sel ? e[1] : e[0]].label).join(', ') || '—'))));
}
function AccountPanel({
  id,
  mode
}) {
  const {
    go
  } = useEco();
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-col eco-pad-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-form"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-lock-key"
  }), /*#__PURE__*/React.createElement("h2", null, "Sess\xE3o necess\xE1ria"), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "\xC1rea pessoal (", mode, "). No ambiente integrado o servidor exige sess\xE3o; aqui n\xE3o h\xE1 autentica\xE7\xE3o real."), /*#__PURE__*/React.createElement("div", {
    className: "eco-form-foot"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('/entrar')
  }, "Entrar"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('/newsletter')
  }, "Newsletter"))));
}
function AuthForm({
  id,
  mode = 'entrar',
  returnTo
}) {
  return /*#__PURE__*/React.createElement(FormSection, {
    id: id,
    formId: "autenticacao",
    title: "Entrar",
    consent: false,
    submitLabel: "Entrar",
    fields: [{
      name: 'email',
      label: 'E-mail',
      type: 'email',
      required: true
    }, {
      name: 'senha',
      label: 'Senha',
      type: 'password',
      required: true
    }]
  });
}
function AdminPanel({
  id,
  entity
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-col eco-pad-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-form"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-shield-check"
  }), /*#__PURE__*/React.createElement("h2", null, "\xC1rea administrativa restrita"), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "CMS \xB7 ", entity, ". Exige sess\xE3o e papel de administrador verificados no servidor. N\xE3o aparece na navega\xE7\xE3o p\xFAblica; esconder links n\xE3o protege a rota.")));
}
Object.assign(window, {
  MapExplorer,
  AccountPanel,
  AuthForm,
  AdminPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecossistema/BlocksFunc.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecossistema/BlocksInst.jsx
try { (() => {
// Institutional family blocks (REF-01): HeroCampaign · PromoGrid · FeatureSplit · PageIntro · RelatedContent · Newsletter · BenefitsRow · DetailHeader.
function Heading({
  level = 2,
  className,
  children
}) {
  const H = 'h' + Math.min(Math.max(level, 1), 3);
  return /*#__PURE__*/React.createElement(H, {
    className: className
  }, children);
}
function HeroCampaign({
  id,
  title,
  description,
  media,
  actions,
  theme = 'light',
  headingLevel = 2,
  first
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'eco-campaign t-' + theme,
    "data-theme": theme === 'dark' ? 'dark' : 'light'
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-campaign-copy"
  }, first && /*#__PURE__*/React.createElement(BuildTag, {
    dark: theme === 'dark'
  }), /*#__PURE__*/React.createElement(Heading, {
    level: headingLevel,
    className: "eco-campaign-title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "eco-campaign-sub"
  }, description), /*#__PURE__*/React.createElement(Actions, {
    actions: actions
  })), /*#__PURE__*/React.createElement(Media, {
    kind: media.kind || 'hero',
    name: id,
    className: "eco-campaign-media",
    alt: media.alt
  }));
}
function PromoGrid({
  id,
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-promo"
  }, items.map((it, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: 'eco-tile t-' + (it.theme || 'alt'),
    "data-theme": it.theme === 'dark' ? 'dark' : 'light'
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-tile-copy"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "eco-tile-title"
  }, it.title), /*#__PURE__*/React.createElement("p", {
    className: "eco-tile-sub"
  }, it.description), /*#__PURE__*/React.createElement(Actions, {
    actions: it.actions,
    size: "sm"
  })), /*#__PURE__*/React.createElement(Media, {
    kind: "landscape",
    name: `${id}-${k + 1}`,
    className: "eco-tile-media",
    alt: it.alt
  }))));
}
function FeatureSplit({
  id,
  title,
  body,
  media,
  alignment = 'left',
  actions,
  eyebrow
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap eco-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: 'eco-split' + (alignment === 'right' ? ' rev' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-split-copy"
  }, eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "eco-eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "eco-section-title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "eco-lead"
  }, body), /*#__PURE__*/React.createElement(Actions, {
    actions: actions,
    center: false
  })), /*#__PURE__*/React.createElement(Media, {
    kind: media.kind || 'landscape',
    name: id,
    className: "r24",
    alt: media.alt
  })));
}
function PageIntro({
  id,
  title,
  description,
  actions,
  links,
  variant = 'showroom',
  first,
  note
}) {
  const {
    go
  } = useEco();
  if (variant === 'cta') return /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap eco-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-cta-card"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "eco-section-title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "eco-lead"
  }, description), /*#__PURE__*/React.createElement(Actions, {
    actions: actions,
    center: false
  }), note && /*#__PURE__*/React.createElement("p", {
    className: "eco-note"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-info"
  }), note)));
  return /*#__PURE__*/React.createElement("div", {
    className: 'eco-wrap eco-intro v-' + variant
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-intro-main"
  }, first && /*#__PURE__*/React.createElement(BuildTag, null), /*#__PURE__*/React.createElement("h1", {
    className: variant === 'center' ? 'eco-campaign-title' : 'eco-showroom-title'
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "eco-lead"
  }, description), actions && /*#__PURE__*/React.createElement(Actions, {
    actions: actions,
    center: variant === 'center'
  })), links && /*#__PURE__*/React.createElement("div", {
    className: "eco-intro-links"
  }, links.map(([l, to], k) => to ? /*#__PURE__*/React.createElement(A, {
    key: k,
    to: to
  }, l, " ", /*#__PURE__*/React.createElement("i", {
    className: "ph ph-arrow-up-right"
  })) : /*#__PURE__*/React.createElement("span", {
    key: k,
    className: "muted"
  }, l, " \xB7 a configurar"))));
}
function RelatedContent({
  id,
  title,
  items,
  variant = 'rail'
}) {
  if (variant === 'featured') return /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap eco-pad-sm"
  }, /*#__PURE__*/React.createElement(A, {
    to: items[0].href,
    className: "eco-feat"
  }, /*#__PURE__*/React.createElement(Media, {
    kind: "cover",
    name: `${id}-1`,
    className: "r24"
  }), /*#__PURE__*/React.createElement("div", {
    className: "eco-feat-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eco-kicker"
  }, items[0].kicker), /*#__PURE__*/React.createElement("h2", {
    className: "eco-section-title"
  }, items[0].title), /*#__PURE__*/React.createElement("p", {
    className: "eco-lead"
  }, items[0].description))));
  if (variant === 'cards') return /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap eco-pad"
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: "eco-section-title eco-mb"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "eco-cards3"
  }, items.map((it, k) => /*#__PURE__*/React.createElement(A, {
    key: k,
    to: it.href,
    className: "eco-rcard"
  }, /*#__PURE__*/React.createElement(Media, {
    kind: "cover",
    name: `${id}-${k + 1}`,
    className: "r18"
  }), /*#__PURE__*/React.createElement("span", {
    className: "eco-kicker"
  }, it.kicker), /*#__PURE__*/React.createElement("h3", null, it.title)))));
  return /*#__PURE__*/React.createElement(RailCarousel, {
    id: id,
    title: title,
    items: items
  });
}

// REF-01 bottom row: wide media cards with a caption bar, neighbours peeking, dots + arrows, no autoplay.
function RailCarousel({
  id,
  title,
  items
}) {
  const [i, setI] = React.useState(0);
  const n = items.length;
  const key = e => {
    if (e.key === 'ArrowRight') setI(x => Math.min(n - 1, x + 1));
    if (e.key === 'ArrowLeft') setI(x => Math.max(0, x - 1));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-rail",
    tabIndex: 0,
    onKeyDown: key,
    "aria-roledescription": "carrossel",
    "aria-label": title
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "eco-section-title eco-mb"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "eco-rail-view"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-rail-track",
    style: {
      transform: `translateX(calc(${-i} * (var(--rail-w) + var(--eco-tile-gap))))`
    }
  }, items.map((it, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: 'eco-rail-card' + (k === i ? ' on' : ''),
    "aria-hidden": k !== i
  }, /*#__PURE__*/React.createElement(Media, {
    kind: "cover",
    name: `${id}-${k + 1}`
  }), /*#__PURE__*/React.createElement("div", {
    className: "eco-rail-cap"
  }, /*#__PURE__*/React.createElement(A, {
    to: it.href,
    className: "eco-pill-btn",
    tabIndex: k === i ? 0 : -1
  }, it.cta || 'Lorem ipsum'), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, it.kicker), " \xB7 ", it.title)))))), /*#__PURE__*/React.createElement("div", {
    className: "eco-dots-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "eco-round sm",
    "aria-label": "Anterior",
    disabled: i === 0,
    onClick: () => setI(i - 1)
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-caret-left"
  })), /*#__PURE__*/React.createElement("div", {
    className: "eco-dots"
  }, items.map((_, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    "aria-label": `Item ${k + 1}`,
    "aria-current": k === i,
    className: 'eco-dot' + (k === i ? ' on' : ''),
    onClick: () => setI(k)
  }))), /*#__PURE__*/React.createElement("button", {
    className: "eco-round sm",
    "aria-label": "Pr\xF3ximo",
    disabled: i === n - 1,
    onClick: () => setI(i + 1)
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-caret-right"
  }))));
}
function Newsletter({
  id,
  title,
  description
}) {
  const [state, setState] = React.useState('idle');
  const [email, setEmail] = React.useState('');
  const [ok, setOk] = React.useState(false);
  const [err, setErr] = React.useState('');
  const submit = e => {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) return setErr('Informe um e-mail válido.');
    if (!ok) return setErr('Confirme o consentimento.');
    setErr('');
    setState('sending');
    setTimeout(() => setState('done'), 700);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap eco-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-news"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "eco-section-title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "eco-lead"
  }, description)), state === 'done' ? /*#__PURE__*/React.createElement("p", {
    className: "eco-done"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-check-circle"
  }), "Modo demonstra\xE7\xE3o \u2014 nenhuma inscri\xE7\xE3o foi enviada.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "E-mail",
    type: "email",
    placeholder: "nome@exemplo.com",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    className: "eco-check"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: ok,
    onChange: e => setOk(e.target.checked)
  }), "Lorem ipsum dolor sit amet \u2014 aceito receber comunica\xE7\xF5es."), err && /*#__PURE__*/React.createElement("p", {
    className: "eco-err",
    role: "alert"
  }, err), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    disabled: state === 'sending'
  }, state === 'sending' ? 'Enviando…' : 'Inscrever'))));
}
function BenefitsRow({
  id,
  title,
  items
}) {
  const [open, setOpen] = React.useState(-1);
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap eco-pad"
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: "eco-section-title eco-mb"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "eco-benefits"
  }, items.map((it, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "eco-benefit"
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph ' + it.icon
  }), /*#__PURE__*/React.createElement("h3", null, it.title), /*#__PURE__*/React.createElement("p", null, open === k ? it.more : it.description), /*#__PURE__*/React.createElement("button", {
    className: "eco-plus",
    "aria-label": open === k ? 'Recolher' : 'Saiba mais',
    "aria-expanded": open === k,
    onClick: () => setOpen(open === k ? -1 : k)
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph-bold ' + (open === k ? 'ph-minus' : 'ph-plus')
  }))))));
}
function DetailHeader({
  id,
  title,
  description,
  media,
  actions,
  price,
  kicker,
  note,
  first
}) {
  const {
    scrollTo
  } = useEco();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "eco-subnav"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eco-subnav-title"
  }, title), /*#__PURE__*/React.createElement("button", {
    className: "eco-subnav-link eco-only-desktop",
    onClick: () => scrollTo('funcionalidades') || scrollTo('descricao')
  }, "Vis\xE3o geral"), /*#__PURE__*/React.createElement(Actions, {
    actions: actions.slice(0, 1),
    center: false,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap eco-detail"
  }, /*#__PURE__*/React.createElement(Media, {
    kind: media.kind || 'square',
    name: id,
    className: "r24 eco-detail-media"
  }), /*#__PURE__*/React.createElement("div", {
    className: "eco-detail-copy"
  }, first && /*#__PURE__*/React.createElement(BuildTag, null), kicker && /*#__PURE__*/React.createElement("span", {
    className: "eco-kicker"
  }, kicker), /*#__PURE__*/React.createElement("h1", {
    className: "eco-article-title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "eco-lead"
  }, description), price && /*#__PURE__*/React.createElement("p", {
    className: "eco-price"
  }, price), /*#__PURE__*/React.createElement(Actions, {
    actions: actions,
    center: false
  }), note && /*#__PURE__*/React.createElement("p", {
    className: "eco-note"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-info"
  }), note))));
}
Object.assign(window, {
  Heading,
  HeroCampaign,
  PromoGrid,
  FeatureSplit,
  PageIntro,
  RelatedContent,
  RailCarousel,
  Newsletter,
  BenefitsRow,
  DetailHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecossistema/BlocksInst.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecossistema/BlocksShow.jsx
try { (() => {
// Showroom family blocks (REF-03): CategoryRail · FeaturedCarousel · CollectionTabs · FilterBar · ResourceGrid · DirectoryLinks · SearchResults.
function CategoryRail({
  id,
  items,
  activeValue
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "eco-cats",
    "aria-label": "Categorias"
  }, items.map((it, k) => /*#__PURE__*/React.createElement(A, {
    key: k,
    to: it.href,
    className: 'eco-cat' + (activeValue === it.value ? ' on' : ''),
    "aria-current": activeValue === it.value ? 'true' : undefined
  }, /*#__PURE__*/React.createElement(Media, {
    kind: "icon",
    name: `${id}-${it.value}`,
    className: "eco-cat-icon"
  }), /*#__PURE__*/React.createElement("span", null, it.label)))));
}
function FeaturedCarousel({
  id,
  label,
  items
}) {
  const [i, setI] = React.useState(0);
  const n = items.length;
  const key = e => {
    if (e.key === 'ArrowRight') setI(x => Math.min(n - 1, x + 1));
    if (e.key === 'ArrowLeft') setI(x => Math.max(0, x - 1));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-featured",
    tabIndex: 0,
    onKeyDown: key,
    "aria-roledescription": "carrossel",
    "aria-label": label
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "eco-section-title eco-mb"
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "eco-feat-view"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-feat-track",
    style: {
      transform: `translateX(calc(${-i} * (var(--feat-w) + 20px)))`
    }
  }, items.map((it, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "eco-feat-card",
    "aria-hidden": k !== i
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-feat-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eco-kicker"
  }, it.kicker), /*#__PURE__*/React.createElement("h3", null, it.title), /*#__PURE__*/React.createElement("p", null, it.description), /*#__PURE__*/React.createElement(A, {
    to: it.href,
    tabIndex: k === i ? 0 : -1
  }, "Ver detalhes \u203A")), /*#__PURE__*/React.createElement(Media, {
    kind: "landscape",
    name: `${id}-${k + 1}`,
    className: "r12"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "eco-dots-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "eco-round sm",
    "aria-label": "Anterior",
    disabled: i === 0,
    onClick: () => setI(i - 1)
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-caret-left"
  })), /*#__PURE__*/React.createElement("div", {
    className: "eco-dots"
  }, items.map((_, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    "aria-label": `Destaque ${k + 1}`,
    "aria-current": k === i,
    className: 'eco-dot' + (k === i ? ' on' : ''),
    onClick: () => setI(k)
  }))), /*#__PURE__*/React.createElement("button", {
    className: "eco-round sm",
    "aria-label": "Pr\xF3ximo",
    disabled: i === n - 1,
    onClick: () => setI(i + 1)
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-caret-right"
  }))));
}

// stateKey that is a facet → selection lives in the URL; otherwise local state.
function CollectionTabs({
  id,
  title,
  items,
  stateKey,
  defaultValue
}) {
  const {
    res,
    go
  } = useEco();
  const isFacet = !!ECO.FACETS[stateKey] && (res.page.filters || []).includes(stateKey);
  const [local, setLocal] = React.useState(defaultValue || '');
  const cur = isFacet ? res.query[stateKey] || '' : local;
  const pick = v => isFacet ? go(ECO.withQuery(res.path, {
    ...res.query,
    [stateKey]: v || undefined,
    pagina: undefined
  })) : setLocal(v);
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap eco-tabs-wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "eco-section-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "eco-ctabs",
    role: "tablist",
    "aria-label": title
  }, [{
    value: '',
    label: 'Todos'
  }, ...items].map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    "aria-selected": cur === it.value,
    className: 'eco-ctab' + (cur === it.value ? ' on' : ''),
    onClick: () => pick(it.value)
  }, it.label))));
}
function FilterBar({
  id,
  facets,
  query,
  searchEnabled = true
}) {
  const {
    res,
    go
  } = useEco();
  const [q, setQ] = React.useState(query.q || '');
  React.useEffect(() => setQ(query.q || ''), [query.q]);
  const set = (k, v) => go(ECO.withQuery(res.path, {
    ...query,
    [k]: v || undefined,
    pagina: undefined
  }));
  const active = Object.keys(query).filter(k => k !== 'pagina');
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-filterbar",
    role: "search"
  }, searchEnabled && /*#__PURE__*/React.createElement("form", {
    className: "eco-search",
    onSubmit: e => {
      e.preventDefault();
      set('q', q.trim());
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-magnifying-glass"
  }), /*#__PURE__*/React.createElement("input", {
    "aria-label": "Buscar",
    placeholder: "Buscar",
    value: q,
    onChange: e => setQ(e.target.value)
  })), facets.map(f => /*#__PURE__*/React.createElement("label", {
    key: f.key,
    className: 'eco-facet' + (query[f.key] ? ' on' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr"
  }, f.label), /*#__PURE__*/React.createElement("select", {
    value: query[f.key] || '',
    onChange: e => set(f.key, e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, f.label), f.values.map(v => /*#__PURE__*/React.createElement("option", {
    key: v,
    value: v
  }, ECO.label(v)))), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  }))), active.length > 0 && /*#__PURE__*/React.createElement("button", {
    className: "eco-clear",
    onClick: () => go(res.path)
  }, "Limpar filtros")));
}
function ResourceCard({
  it,
  size,
  base,
  k,
  id
}) {
  const wide = size === 'w' || size === 'b';
  return /*#__PURE__*/React.createElement(A, {
    to: it.href,
    className: 'eco-rc s-' + size
  }, wide && /*#__PURE__*/React.createElement("div", {
    className: "eco-rc-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eco-rc-cat"
  }, it.category), /*#__PURE__*/React.createElement("h3", {
    className: "eco-rc-big"
  }, it.title)), /*#__PURE__*/React.createElement(Media, {
    kind: wide ? 'landscape' : 'square',
    name: `${id}-${it.slug}`,
    className: "eco-rc-media",
    fit: wide ? 'cover' : 'contain'
  }), !wide && /*#__PURE__*/React.createElement("div", {
    className: "eco-rc-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eco-kicker"
  }, it.kicker), /*#__PURE__*/React.createElement("h3", null, it.title), /*#__PURE__*/React.createElement("span", {
    className: "eco-rc-meta"
  }, it.meta)), wide && /*#__PURE__*/React.createElement("span", {
    className: "eco-rc-go",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-caret-right"
  })));
}
const MOSAIC = ['s', 's', 'w', 's', 'b', 's', 's', 's', 'w', 's', 's', 's'];
function ResourceGrid({
  id,
  items,
  variant = 'mosaic',
  pagination,
  total
}) {
  const {
    res,
    go
  } = useEco();
  const page = pagination ? pagination.page : 1;
  const pages = pagination ? pagination.pages : 1;
  const pager = pages > 1 && /*#__PURE__*/React.createElement("nav", {
    className: "eco-pager",
    "aria-label": "Pagina\xE7\xE3o"
  }, Array.from({
    length: pages
  }, (_, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    "aria-current": page === k + 1 ? 'page' : undefined,
    className: 'eco-pg' + (page === k + 1 ? ' on' : ''),
    onClick: () => go(ECO.withQuery(res.path, {
      ...res.query,
      pagina: k ? String(k + 1) : undefined
    }))
  }, k + 1)));
  if (!items.length) return /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap eco-pad-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-empty"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-funnel-x"
  }), /*#__PURE__*/React.createElement("p", null, "Nenhum resultado para estes filtros."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go(res.path)
  }, "Limpar filtros")));
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap eco-pad-sm"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eco-count"
  }, total, " ", total === 1 ? 'item' : 'itens', " \xB7 exemplos demonstrativos"), variant === 'mosaic' ? /*#__PURE__*/React.createElement("div", {
    className: "eco-mosaic"
  }, items.map((it, k) => /*#__PURE__*/React.createElement(ResourceCard, {
    key: it.slug,
    it: it,
    size: Object.keys(res.query).length ? 's' : MOSAIC[k % MOSAIC.length],
    k: k,
    id: id
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "eco-cards3"
  }, items.map((it, k) => /*#__PURE__*/React.createElement(A, {
    key: it.slug,
    to: it.href,
    className: "eco-rcard"
  }, /*#__PURE__*/React.createElement(Media, {
    kind: variant === 'people' ? 'portrait' : 'cover',
    name: `${id}-${it.slug}`,
    className: "r18"
  }), /*#__PURE__*/React.createElement("span", {
    className: "eco-kicker"
  }, it.kicker), /*#__PURE__*/React.createElement("h3", null, it.title), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, it.meta)))), pager);
}
function DirectoryLinks({
  id,
  title,
  groups
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap eco-pad"
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: "eco-section-title eco-mb"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "eco-dir"
  }, groups.map((g, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: 'eco-dir-col' + (g.big ? ' big' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "eco-dir-h"
  }, g.title), g.links.map(([l, to], j) => to ? /*#__PURE__*/React.createElement(A, {
    key: j,
    to: to
  }, l) : /*#__PURE__*/React.createElement("span", {
    key: j,
    className: "eco-dir-off"
  }, l, " ", /*#__PURE__*/React.createElement("em", null, "a configurar")))))));
}
function SearchResults({
  id,
  query,
  items
}) {
  if (!query) return /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap eco-pad-sm"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eco-empty"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-magnifying-glass"
  }), "Digite um termo para buscar em conte\xFAdos, mapas e recursos p\xFAblicos."));
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap eco-pad-sm"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eco-count"
  }, items.length, " resultados para \u201C", query, "\u201D \xB7 exemplos demonstrativos"), /*#__PURE__*/React.createElement("div", {
    className: "eco-results"
  }, items.map((it, k) => /*#__PURE__*/React.createElement(A, {
    key: k,
    to: it.href,
    className: "eco-result"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eco-kicker"
  }, it.kicker), /*#__PURE__*/React.createElement("h3", null, it.title), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, it.url)))));
}
Object.assign(window, {
  CategoryRail,
  FeaturedCarousel,
  CollectionTabs,
  FilterBar,
  ResourceCard,
  ResourceGrid,
  DirectoryLinks,
  SearchResults
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecossistema/BlocksShow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecossistema/EcoApp.jsx
try { (() => {
const ECO_TWEAKS = /*EDITMODE-BEGIN*/{
  "site": "executar",
  "viewport": "desktop",
  "inspector": true,
  "buildTags": true,
  "blockLabels": false
} /*EDITMODE-END*/;
const readHash = () => {
  const h = decodeURIComponent(location.hash.slice(1));
  return h.startsWith('/') ? h : null;
};
function EcoApp() {
  const [t, setTweak] = useTweaks(ECO_TWEAKS);
  const [url, setUrl] = React.useState(() => readHash() || localStorage.getItem('eco-url') || '/');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [mapOpen, setMapOpen] = React.useState(false);
  const [narrow, setNarrow] = React.useState(false);
  const scrollRef = React.useRef(null);
  const frameRef = React.useRef(null);
  const btnRef = React.useRef(null);
  const site = ECO.SITES[t.site] || ECO.SITES.executar;
  const res = React.useMemo(() => ECO.resolve(url), [url]);
  const scrollTo = React.useCallback(id => {
    const sc = scrollRef.current;
    if (!sc) return false;
    const el = sc.querySelector('#' + CSS.escape(id));
    if (!el) return false;
    sc.scrollTo({
      top: el.offsetTop - 64,
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
    return true;
  }, []);
  const go = React.useCallback(to => {
    if (!to) return;
    setMenuOpen(false);
    if (to !== readHash()) history.pushState(null, '', '#' + to);
    setUrl(to);
    localStorage.setItem('eco-url', to);
  }, []);
  React.useEffect(() => {
    const onPop = () => {
      const h = readHash() || '/';
      setUrl(h);
      localStorage.setItem('eco-url', h);
    };
    window.addEventListener('popstate', onPop);
    if (!readHash()) history.replaceState(null, '', '#' + url);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  React.useEffect(() => {
    const sc = scrollRef.current;
    if (!sc) return;
    if (res.anchor) requestAnimationFrame(() => requestAnimationFrame(() => scrollTo(res.anchor)));else {
      sc.style.scrollBehavior = 'auto';
      sc.scrollTop = 0;
      sc.style.scrollBehavior = '';
    }
  }, [url]);
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'Escape') {
        if (menuOpen) {
          setMenuOpen(false);
          btnRef.current && btnRef.current.focus();
        }
        setMapOpen(false);
      }
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [menuOpen]);
  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.style.overflowY = menuOpen ? 'hidden' : '';
  }, [menuOpen]);
  React.useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setNarrow(e.contentRect.width < 768));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  React.useEffect(() => {
    document.title = (res.page ? res.page.title + ' · ' : '') + site.name;
  }, [res, site]);
  const ctx = {
    site,
    res,
    go,
    scrollTo,
    narrow,
    showTags: t.buildTags
  };
  return /*#__PURE__*/React.createElement(EcoCtx.Provider, {
    value: ctx
  }, /*#__PURE__*/React.createElement("div", {
    className: 'eco-stage' + (t.viewport === 'mobile' ? ' is-mobile' : '')
  }, /*#__PURE__*/React.createElement("div", {
    ref: frameRef,
    className: 'eco eco-frame' + (t.blockLabels ? ' eco-show-labels' : '') + (narrow ? ' is-narrow' : ''),
    "data-theme": "light",
    "data-screen-label": res.url
  }, /*#__PURE__*/React.createElement("a", {
    className: "eco-skip",
    href: "#conteudo",
    onClick: e => {
      e.preventDefault();
      const m = scrollRef.current.querySelector('main');
      m && m.focus();
    }
  }, "Pular para o conte\xFAdo"), /*#__PURE__*/React.createElement("div", {
    className: "eco-scroll",
    ref: scrollRef
  }, /*#__PURE__*/React.createElement(GlobalHeader, {
    menuOpen: menuOpen,
    setMenuOpen: v => {
      setMenuOpen(v);
      if (!v && btnRef.current) btnRef.current.focus();
    },
    btnRef: btnRef
  }), /*#__PURE__*/React.createElement("main", {
    id: "conteudo",
    tabIndex: -1,
    key: site.key + res.url.split('#')[0],
    "data-pattern": res.pattern
  }, /*#__PURE__*/React.createElement(RoutePage, null)), /*#__PURE__*/React.createElement(GlobalFooter, null)), menuOpen && /*#__PURE__*/React.createElement(EcosystemMenu, {
    close: () => setMenuOpen(false)
  }), t.inspector && /*#__PURE__*/React.createElement(Inspector, {
    openMap: () => setMapOpen(true)
  }), mapOpen && /*#__PURE__*/React.createElement(Sitemap, {
    close: () => setMapOpen(false)
  }))), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Ecossistema"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Site",
    value: t.site,
    options: [{
      value: 'executar',
      label: 'EXECUTAR'
    }, {
      value: 'risco',
      label: 'Risco Cognitivo'
    }],
    onChange: v => setTweak('site', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Viewport",
    value: t.viewport,
    options: [{
      value: 'desktop',
      label: 'Desktop'
    }, {
      value: 'mobile',
      label: 'Celular'
    }],
    onChange: v => setTweak('viewport', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Revis\xE3o"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Tag \u201CEm constru\xE7\xE3o\u201D",
    value: t.buildTags,
    onChange: v => setTweak('buildTags', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Mostrar blocos (tipo#id)",
    value: t.blockLabels,
    onChange: v => setTweak('blockLabels', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Inspetor de rota",
    value: t.inspector,
    onChange: v => setTweak('inspector', v)
  }), /*#__PURE__*/React.createElement(TweakButton, {
    label: "Abrir mapa de rotas",
    onClick: () => setMapOpen(true)
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(EcoApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecossistema/EcoApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecossistema/Renderer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Typed block registry + recipes. Each route → blueprint.contentBlocks → [{ id, type, version, props }] → rendered in order.
const REGISTRY = {
  GlobalHeader: null,
  EcosystemMenu: null,
  GlobalFooter: null,
  // shell — rendered once by EcoApp
  HeroCampaign,
  FeatureSplit,
  PromoGrid,
  PageIntro,
  CategoryRail,
  FeaturedCarousel,
  CollectionTabs,
  ResourceGrid,
  FilterBar,
  ArticleHeader,
  RichText,
  MediaFigure,
  EvidenceList,
  RelatedContent,
  MapExplorer,
  FormSection,
  DiscussionFeed,
  BenefitsRow,
  DirectoryLinks,
  Newsletter,
  DetailHeader,
  AccountPanel,
  AdminPanel,
  SearchResults,
  AuthForm
};
// requiredProps from sources/executar/blocks.registry.json
const REQUIRED = {
  HeroCampaign: ['title', 'media', 'actions'],
  FeatureSplit: ['title', 'body', 'media'],
  PromoGrid: ['items'],
  PageIntro: ['title'],
  CategoryRail: ['items'],
  FeaturedCarousel: ['items'],
  CollectionTabs: ['items', 'stateKey'],
  ResourceGrid: ['items'],
  FilterBar: ['facets'],
  ArticleHeader: ['title'],
  RichText: ['content'],
  MediaFigure: ['media'],
  EvidenceList: ['items'],
  RelatedContent: ['items'],
  MapExplorer: ['nodes', 'edges', 'legend'],
  FormSection: ['formId', 'fields', 'submitLabel'],
  DiscussionFeed: ['items'],
  BenefitsRow: ['items'],
  DirectoryLinks: ['groups'],
  Newsletter: ['title'],
  DetailHeader: ['title', 'media'],
  AccountPanel: ['mode'],
  AdminPanel: ['entity'],
  SearchResults: ['query', 'items'],
  AuthForm: ['mode']
};
const hash = s => {
  let h = 7;
  for (const c of s) h = h * 31 + c.charCodeAt(0) >>> 0;
  return h;
};
const pick = (arr, seed) => arr[seed % arr.length];
const CATALOG_OF = {
  blog: 'blog',
  riscos: 'riscos',
  apps: 'apps',
  ferramentas: 'ferramentas',
  loja: 'loja',
  mapas: 'mapas',
  cases: 'cases',
  comunidade: 'comunidade'
};
const KICK = {
  blog: 'formato',
  ferramentas: 'tipo',
  loja: 'categoria',
  apps: 'perfil',
  mapas: 'perfil',
  riscos: null,
  cases: null
};
function demoItems(cat, n = 12) {
  return Array.from({
    length: n
  }, (_, k) => {
    const s = hash(cat + k);
    const f = Object.fromEntries(Object.entries(ECO.FACETS).map(([key, d]) => [key, pick(d.values, s >> key.length % 5)]));
    f.formato = pick(ECO.FACETS.formato.values, s + k);
    f.disponibilidade = k % 3 ? 'gratuito' : 'pago';
    const kk = KICK[cat];
    return {
      slug: 'exemplo-' + (k + 1),
      facets: f,
      href: ECO.DETAIL[cat] + 'exemplo-' + (k + 1),
      title: `Lorem ipsum dolor ${k + 1}`,
      kicker: kk ? ECO.label(f[kk]) : 'Lorem ipsum',
      category: 'Lorem ipsum · ' + (kk ? ECO.label(f[kk]) : 'exemplo'),
      meta: [ECO.label(f.perfil), ECO.label(f.disponibilidade)].join(' · ')
    };
  });
}
function filtered(cat, query) {
  return demoItems(cat).filter(it => Object.entries(query).every(([k, v]) => k === 'pagina' ? true : k === 'q' ? (it.title + ' lorem ipsum').toLowerCase().includes(v.toLowerCase()) : it.facets[k] === v));
}
const lorem = (k = 0) => [LOREM.p, LOREM.p2, LOREM.p3][k % 3];
const media = (kind, alt = '') => ({
  kind,
  alt
});
const related = (n = 3, base = '/blog/', kicker = 'Lorem') => Array.from({
  length: n
}, (_, k) => ({
  href: base + 'exemplo-' + (k + 1),
  kicker: kicker + ' ' + (k + 1),
  title: 'Lorem ipsum dolor sit amet consectetur',
  cta: 'Lorem ipsum'
}));

// Per-type default props for a route. Overridden per template below.
function propsFor(type, ctx) {
  const {
    page,
    res,
    site,
    idx
  } = ctx;
  const title = res.slug ? 'Lorem ipsum dolor sit amet.' : page.title;
  switch (type) {
    case 'HeroCampaign':
      return {
        title,
        description: LOREM.s,
        media: media('hero'),
        actions: [{
          label: 'Lorem ipsum',
          href: '/studio/briefing'
        }],
        theme: 'alt',
        headingLevel: 1
      };
    case 'FeatureSplit':
      return {
        eyebrow: 'Lorem ipsum',
        title: LOREM.t2,
        body: lorem(idx),
        media: media('landscape'),
        alignment: idx % 2 ? 'right' : 'left'
      };
    case 'PromoGrid':
      return {
        items: ['sobre', 'metodologia', 'cases', 'briefing'].map((id, k) => ({
          title: ECO.byId[id].title,
          description: LOREM.s,
          theme: ['alt', 'dark', 'dark', 'alt'][k],
          actions: [{
            label: 'Saiba mais',
            href: ECO.byId[id].url
          }]
        }))
      };
    case 'PageIntro':
      return {
        title,
        description: LOREM.s,
        variant: 'showroom'
      };
    case 'ResourceGrid':
      return {
        items: [],
        variant: 'editorial'
      };
    case 'ArticleHeader':
      return {
        kicker: res.slug ? page.title : null,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        publishedAt: '00 de mês de 2026',
        authors: ['Lorem Ipsum'],
        readingMinutes: 6
      };
    case 'RichText':
      return {
        content: [{
          t: 'p',
          text: LOREM.p
        }, {
          t: 'p',
          text: LOREM.p2
        }, {
          t: 'h2',
          text: LOREM.t2
        }, {
          t: 'p',
          text: LOREM.p3
        }]
      };
    case 'MediaFigure':
      return {
        media: media('cover'),
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      };
    case 'EvidenceList':
      return {
        items: [1, 2, 3].map(k => `Lorem, I.; Dolor, S. (20${18 + k}). Lorem ipsum dolor sit amet. Periódico, 00(0), 000–000. doi:00.0000/exemplo.${k}`)
      };
    case 'RelatedContent':
      return {
        title: 'Continue lendo',
        items: related(3),
        variant: 'cards'
      };
    case 'DiscussionFeed':
      return {
        title: 'Comentários',
        items: [1, 2, 3].map(k => ({
          author: 'Lorem Ipsum ' + k,
          date: '00/00/2026',
          text: LOREM.p.slice(0, 140) + '.'
        }))
      };
    case 'BenefitsRow':
      return {
        title: 'Lorem ipsum dolor sit amet.',
        items: [['ph-brain', 'Lorem ipsum'], ['ph-path', 'Dolor sit amet'], ['ph-book-open-text', 'Consectetur']].map(([icon, t]) => ({
          icon,
          title: t,
          description: LOREM.s,
          more: LOREM.p.slice(0, 160) + '.'
        }))
      };
    case 'DirectoryLinks':
      return {
        title,
        groups: []
      };
    case 'Newsletter':
      return {
        title: 'Lorem ipsum newsletter.',
        description: LOREM.s
      };
    case 'DetailHeader':
      return {
        title,
        description: LOREM.p.slice(0, 160) + '.',
        media: media('square'),
        actions: []
      };
    case 'FormSection':
      return {
        formId: page.id,
        title: null,
        fields: [{
          name: 'nome',
          label: 'Nome',
          required: true
        }, {
          name: 'email',
          label: 'E-mail',
          type: 'email',
          required: true
        }, {
          name: 'mensagem',
          label: 'Mensagem',
          rows: 4,
          required: true
        }],
        submitLabel: 'Enviar'
      };
    case 'MapExplorer':
      return mapData(page.id);
    case 'SearchResults':
      return {
        query: res.query.q || '',
        items: res.query.q ? ['blog', 'ferramentas', 'mapas'].flatMap(c => filtered(c, {
          q: res.query.q
        }).slice(0, 2).map(it => ({
          ...it,
          kicker: ECO.byId[c].title,
          url: it.href
        }))) : []
      };
    case 'AccountPanel':
      return {
        mode: 'resumo'
      };
    case 'AuthForm':
      return {
        mode: 'entrar',
        returnTo: '/minha-conta'
      };
    case 'AdminPanel':
      return {
        entity: page.title
      };
    case 'FilterBar':
      return {
        facets: (page.filters || []).filter(f => ECO.FACETS[f]).map(f => ({
          key: f,
          ...ECO.FACETS[f]
        })),
        query: res.query
      };
    default:
      return {};
  }
}
function mapData(seed) {
  const groups = [{
    key: 'a',
    label: 'Funções executivas'
  }, {
    key: 'b',
    label: 'Regiões'
  }, {
    key: 'c',
    label: 'Riscos'
  }, {
    key: 'd',
    label: 'Estratégias'
  }];
  const pts = [[50, 48], [24, 26], [76, 24], [18, 70], [82, 68], [40, 82], [62, 84], [36, 12], [64, 50], [30, 48]];
  const nodes = pts.map(([x, y], k) => ({
    id: 'n' + k,
    label: 'Lorem ' + (k + 1),
    group: groups[k % 4].key,
    x,
    y
  }));
  const edges = [[0, 1], [0, 2], [0, 8], [0, 9], [1, 7], [2, 7], [3, 9], [4, 8], [5, 9], [6, 8], [5, 6], [3, 5], [4, 6]].map(([a, b]) => ['n' + a, 'n' + b]);
  return {
    nodes,
    edges,
    legend: groups,
    initialSelection: 'n0'
  };
}
function showroomProps(type, ctx) {
  const {
    page,
    res
  } = ctx;
  const cat = CATALOG_OF[page.id];
  const railKey = {
    ferramentas: 'tipo',
    loja: 'categoria',
    apps: 'perfil'
  }[page.id];
  const tabKey = {
    ferramentas: 'objetivo',
    loja: 'disponibilidade',
    apps: 'colecao'
  }[page.id];
  const all = filtered(cat, res.query);
  const per = 9,
    pages = Math.max(1, Math.ceil(all.length / per)),
    pg = Math.min(pages, +res.query.pagina || 1);
  switch (type) {
    case 'PageIntro':
      return {
        title: page.title,
        description: null,
        variant: 'showroom',
        links: [['Lorem ipsum dolor', '/studio/briefing'], ['Como usar este catálogo', null]]
      };
    case 'CategoryRail':
      return {
        items: ECO.FACETS[railKey].values.map(v => ({
          value: v,
          label: ECO.label(v),
          href: ECO.withQuery(page.url, {
            [railKey]: v
          })
        })),
        activeValue: res.query[railKey]
      };
    case 'FeaturedCarousel':
      return {
        label: 'Lorem ipsum novidades.',
        items: demoItems(cat, 5).map(it => ({
          ...it,
          kicker: 'Novo',
          description: LOREM.s
        }))
      };
    case 'CollectionTabs':
      return tabKey === 'colecao' ? {
        title: 'Lorem ipsum coleções.',
        stateKey: 'colecao',
        items: ['Lorem', 'Ipsum', 'Dolor'].map(l => ({
          value: l.toLowerCase(),
          label: l + ' ipsum'
        }))
      } : {
        title: 'Lorem ipsum coleções.',
        stateKey: tabKey,
        items: ECO.FACETS[tabKey].values.map(v => ({
          value: v,
          label: ECO.label(v)
        }))
      };
    case 'ResourceGrid':
      return {
        items: all.slice((pg - 1) * per, pg * per),
        total: all.length,
        variant: 'mosaic',
        pagination: {
          page: pg,
          pages
        }
      };
    case 'BenefitsRow':
      return {
        ...propsFor('BenefitsRow', ctx),
        title: 'Lorem ipsum dolor sit amet consectetur.'
      };
    case 'DirectoryLinks':
      return {
        title: page.title,
        groups: [{
          title: 'Filtrar por perfil',
          big: true,
          links: ECO.FACETS.perfil.values.map(v => [ECO.label(v), ECO.withQuery(page.url, {
            perfil: v
          })])
        }, {
          title: 'Filtrar por objetivo',
          links: ECO.FACETS.objetivo.values.map(v => [ECO.label(v), ECO.withQuery(page.url, {
            objetivo: v
          })])
        }, {
          title: 'Explorar mais',
          links: [['Loja e marketplace', '/loja'], ['Apps', '/apps'], ['Ferramentas', '/ferramentas'], ['Comunidade', '/comunidade']].filter(([, u]) => u !== page.url)
        }]
      };
    case 'FilterBar':
      return propsFor(type, ctx);
  }
}

// Template-level ids + overrides. Returns null to keep defaults.
function recipe(res, site) {
  const page = res.page,
    bp = res.bp,
    t = page.template;
  const types = [...bp.blocks];
  const ids = {
    landing: ['inicio', 'mapa', 'app', 'explore', 'leitura', 'newsletter'],
    conteudo: ['titulo', 'capa', 'introducao', 'midia', 'corpo', 'referencias', 'relacionados', 'comentarios'],
    produto_app: ['titulo', 'funcionalidades', 'como-funciona', 'beneficios', 'relacionados'],
    recurso: ['titulo', 'preview', 'instrucoes', 'relacionados'],
    produto: ['titulo', 'imagens', 'descricao', 'relacionados'],
    risco: ['titulo', 'descricao', 'fontes', 'relacionados'],
    mapa_interativo: ['titulo', 'exploracao', 'referencias', 'relacionados'],
    topico: ['titulo', 'publicacao', 'respostas', 'responder'],
    formulario: ['titulo', 'formulario']
  }[t];
  if (t === 'produto_app') types.push('PageIntro');
  if (page.id === 'contato') types.push('DirectoryLinks');
  const seen = {};
  const anyFilter = Object.keys(res.query).some(k => k !== 'pagina');
  const blocks = types.map((type, idx) => {
    let id = ids && ids[idx] || type.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    if (seen[id]) id += '-' + ++seen[id];else seen[id] = 1;
    const ctx = {
      page,
      res,
      site,
      idx
    };
    let props = ECO.PATTERN[t] === 'showroom' && CATALOG_OF[page.id] && ['apps', 'ferramentas', 'loja'].includes(page.id) && showroomProps(type, ctx) || propsFor(type, ctx);
    props = override(t, page, type, id, idx, props, res, site);
    let surface = null;
    if (['CollectionTabs', 'FilterBar', 'ResourceGrid'].includes(type) && ['apps', 'ferramentas', 'loja'].includes(page.id)) surface = 'alt';
    if (type === 'DirectoryLinks' && page.id !== 'contato') surface = 'alt2';
    if (type === 'Newsletter' || type === 'DiscussionFeed' && t === 'conteudo' || type === 'RelatedContent' && t !== 'landing' && t !== 'catalogo_conteudos') surface = 'alt';
    return {
      id,
      type,
      version: 1,
      props,
      surface
    };
  });
  return anyFilter ? blocks.filter(b => b.type !== 'FeaturedCarousel') : blocks;
}
function override(t, page, type, id, idx, p, res, site) {
  if (t === 'landing') {
    if (id === 'inicio') return {
      ...p,
      title: site.name,
      description: 'Lorem ipsum dolor sit amet.',
      actions: [{
        label: 'Explorar o mapa',
        href: '/mapa-cognitivo'
      }, {
        label: 'Conhecer o projeto',
        href: '/sobre'
      }],
      theme: 'light',
      headingLevel: 1
    };
    if (id === 'mapa') return {
      ...p,
      title: 'Mapa cognitivo',
      description: 'Lorem ipsum dolor sit amet.',
      actions: [{
        label: 'Explorar',
        href: '/mapa-cognitivo'
      }, {
        label: 'Todos os mapas',
        href: '/mapas'
      }],
      theme: 'dark',
      headingLevel: 2
    };
    if (id === 'app') return {
      ...p,
      title: 'Executar App',
      description: 'Lorem ipsum dolor sit amet.',
      actions: [{
        label: 'Saiba mais',
        href: '/apps/executar'
      }, {
        label: 'Como funciona',
        href: '/apps/executar#como-funciona'
      }],
      theme: 'alt',
      headingLevel: 2
    };
    if (type === 'PromoGrid') return {
      items: ['blog', 'riscos', 'ferramentas', 'studio'].map((rid, k) => ({
        title: ECO.byId[rid].title,
        description: LOREM.s,
        theme: ['alt', 'dark', 'dark', 'alt'][k],
        actions: [{
          label: 'Saiba mais',
          href: ECO.byId[rid].url
        }]
      }))
    };
    if (type === 'RelatedContent') return {
      title: null,
      variant: 'rail',
      items: related(5, '/blog/', 'Lorem').map((it, k) => ({
        ...it,
        kicker: ECO.label(ECO.FACETS.formato.values[k])
      }))
    };
  }
  if (t === 'catalogo_conteudos' || t === 'catalogo_riscos' || t === 'catalogo_mapas' || t === 'catalogo_projetos') {
    const cat = CATALOG_OF[page.id] || 'blog';
    if (type === 'RelatedContent') return {
      variant: 'featured',
      items: [{
        href: '/blog/exemplo-1',
        kicker: 'Destaque',
        title: LOREM.t2,
        description: LOREM.s
      }]
    };
    if (type === 'ResourceGrid') {
      const all = filtered(cat, res.query);
      const per = 9,
        pages = Math.max(1, Math.ceil(all.length / per)),
        pg = Math.min(pages, +res.query.pagina || 1);
      return {
        items: all.slice((pg - 1) * per, pg * per),
        total: all.length,
        variant: t === 'catalogo_projetos' ? 'people' : 'editorial',
        pagination: {
          page: pg,
          pages
        }
      };
    }
    if (type === 'EvidenceList') return {
      ...p,
      title: 'Fontes'
    };
  }
  if (t === 'comunidade') {
    if (type === 'FilterBar') return {
      facets: [{
        key: 'tipo',
        label: 'Tipo',
        values: ECO.COMMUNITY_TIPO
      }],
      query: res.query
    };
    if (type === 'DiscussionFeed') {
      const items = Array.from({
        length: 8
      }, (_, k) => ({
        author: 'Lorem Ipsum ' + (k + 1),
        date: '00/00/2026',
        tipo: ECO.COMMUNITY_TIPO[k % 4],
        title: 'Lorem ipsum dolor sit amet ' + (k + 1) + '?',
        href: '/comunidade/topicos/exemplo-' + (k + 1),
        text: LOREM.p.slice(0, 120) + '.',
        replies: k * 3 % 11
      })).filter(it => !res.query.tipo || it.tipo === res.query.tipo).filter(it => !res.query.q || it.title.toLowerCase().includes(res.query.q.toLowerCase()));
      return {
        title: null,
        items,
        allowPosting: true,
        mode: 'feed'
      };
    }
  }
  if (t === 'conteudo') {
    if (id === 'capa') return {
      media: media('cover'),
      caption: null
    };
    if (id === 'introducao') return {
      content: [{
        t: 'p',
        text: LOREM.p
      }, {
        t: 'p',
        text: LOREM.p2
      }, {
        t: 'strong',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?'
      }, {
        t: 'q',
        by: 'Lorem Ipsum',
        text: LOREM.p3
      }, {
        t: 'p',
        text: LOREM.p
      }]
    };
    if (id === 'midia') return {
      media: media('cover'),
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: ['Ver recurso relacionado', '/ferramentas/exemplo-1']
    };
    if (id === 'corpo') return {
      content: [{
        t: 'strong',
        text: 'Lorem ipsum dolor sit amet consectetur?'
      }, {
        t: 'q',
        by: 'Lorem Ipsum',
        text: LOREM.p2
      }, {
        t: 'p',
        text: LOREM.p
      }, {
        t: 'p',
        text: LOREM.p3
      }, {
        t: 'h2',
        text: 'Continue lendo'
      }, {
        t: 'p',
        text: LOREM.s
      }]
    };
  }
  if (t === 'risco' && type === 'EvidenceList') return {
    ...p,
    title: 'Fontes'
  };
  if (t === 'case' && type === 'ArticleHeader') return {
    ...p,
    kicker: 'Projeto'
  };
  if (t === 'topico') {
    if (type === 'ArticleHeader') return {
      ...p,
      kicker: 'Comunidade',
      readingMinutes: null
    };
    if (type === 'DiscussionFeed') return {
      title: 'Respostas',
      items: [1, 2].map(k => ({
        author: 'Lorem Ipsum ' + k,
        date: '00/00/2026',
        text: LOREM.p2.slice(0, 130) + '.'
      }))
    };
    if (type === 'FormSection') return {
      formId: 'resposta',
      title: 'Responder',
      consent: false,
      fields: [{
        name: 'resposta',
        label: 'Sua resposta',
        rows: 4,
        required: true
      }],
      submitLabel: 'Publicar resposta'
    };
  }
  if (t === 'produto_app') {
    if (type === 'DetailHeader') return {
      ...p,
      kicker: 'App',
      title: res.slug ? 'Lorem ipsum app' : 'Executar App',
      media: media('square'),
      actions: [{
        label: 'Acessar o aplicativo',
        reason: 'URL real do aplicativo a configurar'
      }, {
        label: 'Como funciona',
        href: page.url.replace('[slug]', res.slug) + '#como-funciona'
      }],
      note: 'Acesso desativado até a URL real do aplicativo ser configurada no CMS.'
    };
    if (id === 'funcionalidades') return {
      ...p,
      eyebrow: 'Funcionalidades',
      title: LOREM.t2
    };
    if (id === 'como-funciona') return {
      content: [{
        t: 'h2',
        text: 'Como funciona'
      }, {
        t: 'p',
        text: LOREM.p
      }, {
        t: 'p',
        text: LOREM.p2
      }]
    };
    if (type === 'RelatedContent') return {
      title: 'Outros apps',
      items: related(3, '/apps/', 'App'),
      variant: 'cards'
    };
    if (type === 'PageIntro') return {
      variant: 'cta',
      title: 'Acesse o Executar App.',
      description: LOREM.s,
      actions: [{
        label: 'Acessar o aplicativo',
        reason: 'URL real a configurar'
      }],
      note: 'Destino externo não inventado: configure a URL real antes de ativar.'
    };
  }
  if (t === 'produto' && type === 'DetailHeader') return {
    ...p,
    kicker: 'Loja',
    actions: [{
      label: 'Comprar',
      reason: 'Checkout ou link de afiliado a configurar'
    }],
    note: 'Preço exibido somente quando informado no CMS. Checkout/afiliado a configurar.'
  };
  if (t === 'recurso' && type === 'DetailHeader') return {
    ...p,
    kicker: 'Recurso',
    actions: [{
      label: 'Baixar',
      reason: 'Permissão de download a configurar'
    }, {
      label: 'Ver na loja',
      href: '/loja'
    }],
    note: 'Download de recursos pagos controlado pelo CMS.'
  };
  if ((t === 'produto' || t === 'recurso') && type === 'RelatedContent') return {
    title: 'Relacionados',
    items: related(3, t === 'produto' ? '/loja/' : '/ferramentas/', 'Lorem'),
    variant: 'cards'
  };
  if (t === 'recurso' && type === 'MediaFigure') return {
    media: media('cover'),
    caption: 'Pré-visualização · lorem ipsum.'
  };
  if (t === 'recurso' && type === 'RichText') return {
    content: [{
      t: 'h2',
      text: 'Instruções'
    }, {
      t: 'p',
      text: LOREM.p
    }, {
      t: 'p',
      text: LOREM.p2
    }]
  };
  if (t === 'institucional' || t === 'servicos') {
    if (type === 'PageIntro') return {
      ...p,
      variant: 'center',
      description: LOREM.s
    };
    if (type === 'FeatureSplit') return {
      ...p,
      media: media(page.id === 'autor' || page.id === 'parceiros' ? 'portrait' : 'landscape')
    };
    if (type === 'RichText') return {
      content: [{
        t: 'p',
        text: LOREM.p
      }, {
        t: 'p',
        text: LOREM.p2
      }]
    };
    if (type === 'RelatedContent') return {
      title: 'Lorem ipsum',
      items: ECO.GROUPS[0].items.filter(([i]) => i !== page.id).slice(0, 3).map(([i]) => ({
        href: ECO.byId[i].url,
        kicker: 'Conheça',
        title: ECO.byId[i].title
      })),
      variant: 'cards'
    };
  }
  if (t === 'servicos' && type === 'PromoGrid') return {
    items: ['consultoria', 'studio_servicos', 'cases', 'briefing'].map((rid, k) => ({
      title: ECO.byId[rid].title,
      description: LOREM.s,
      theme: ['alt', 'dark', 'dark', 'alt'][k],
      actions: [{
        label: 'Saiba mais',
        href: ECO.byId[rid].url
      }]
    }))
  };
  if (t === 'servico') {
    if (type === 'HeroCampaign') return {
      ...p,
      actions: [{
        label: 'Contato e briefing',
        href: '/studio/briefing'
      }, {
        label: 'Projetos e casos',
        href: '/studio/projetos'
      }]
    };
    if (type === 'RelatedContent') return {
      title: 'Projetos e casos',
      items: related(3, '/studio/projetos/', 'Projeto'),
      variant: 'cards'
    };
  }
  if (t === 'mapa_interativo' && type === 'RelatedContent') return {
    title: 'Todos os mapas',
    items: [['mapa', '/mapa-cognitivo'], ['mapa_neuro', '/mapas/neurodivergencia'], ['mapa_projetos', '/mapas/projetos-e-processos']].filter(([i]) => i !== page.id).map(([i, u]) => ({
      href: u,
      kicker: 'Mapa',
      title: ECO.byId[i].title
    })).concat([{
      href: '/mapas',
      kicker: 'Catálogo',
      title: 'Todos os mapas'
    }]),
    variant: 'cards'
  };
  if (t === 'formulario' && type === 'FormSection') {
    if (page.id === 'newsletter') return {
      ...p,
      fields: [{
        name: 'email',
        label: 'E-mail',
        type: 'email',
        required: true
      }],
      submitLabel: 'Inscrever'
    };
    if (page.id === 'briefing') return {
      ...p,
      fields: [{
        name: 'nome',
        label: 'Nome',
        required: true
      }, {
        name: 'email',
        label: 'E-mail',
        type: 'email',
        required: true
      }, {
        name: 'empresa',
        label: 'Empresa ou projeto'
      }, {
        name: 'briefing',
        label: 'Briefing',
        rows: 6,
        required: true
      }],
      submitLabel: 'Enviar briefing'
    };
  }
  if (page.id === 'contato' && type === 'DirectoryLinks') return {
    title: 'Redes sociais',
    groups: [{
      title: 'Perfis oficiais',
      links: [['Instagram', null], ['LinkedIn', null], ['YouTube', null]]
    }]
  };
  return p;
}
function BlockError({
  b,
  msg
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-block-error",
    role: "alert"
  }, /*#__PURE__*/React.createElement("b", null, b.type, "#", b.id), " \u2014 ", msg));
}
function BlockRenderer({
  blocks
}) {
  return blocks.map((b, k) => {
    const C = REGISTRY[b.type];
    let body;
    if (C === undefined) body = /*#__PURE__*/React.createElement(BlockError, {
      b: b,
      msg: "tipo desconhecido no registry"
    });else if (b.version !== 1) body = /*#__PURE__*/React.createElement(BlockError, {
      b: b,
      msg: 'versão ' + b.version + ' não suportada'
    });else {
      const miss = (REQUIRED[b.type] || []).filter(r => b.props[r] == null);
      body = miss.length ? /*#__PURE__*/React.createElement(BlockError, {
        b: b,
        msg: 'props obrigatórias ausentes: ' + miss.join(', ')
      }) : /*#__PURE__*/React.createElement(C, _extends({
        id: b.id,
        first: k === 0
      }, b.props));
    }
    return /*#__PURE__*/React.createElement("section", {
      key: b.id,
      id: b.id,
      "data-block": b.type,
      className: 'eco-block' + (b.surface ? ' s-' + b.surface : '')
    }, /*#__PURE__*/React.createElement("span", {
      className: "eco-block-label"
    }, b.type, "#", b.id), body);
  });
}
function RoutePage() {
  const {
    res,
    site
  } = useEco();
  const blocks = React.useMemo(() => res.page ? recipe(res, site) : [], [res, site]);
  if (res.pattern === 'notfound') return /*#__PURE__*/React.createElement("section", {
    className: "eco-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap eco-gate"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eco-kicker"
  }, "404"), /*#__PURE__*/React.createElement("h1", {
    className: "eco-showroom-title"
  }, "P\xE1gina n\xE3o encontrada."), /*#__PURE__*/React.createElement("p", {
    className: "eco-lead"
  }, "Rota ou slug inexistente/n\xE3o publicado: ", /*#__PURE__*/React.createElement("code", null, res.path)), /*#__PURE__*/React.createElement(Actions, {
    actions: [{
      label: 'Ir para o início',
      href: '/'
    }, {
      label: 'Busca',
      href: '/busca'
    }]
  })));
  return /*#__PURE__*/React.createElement(BlockRenderer, {
    blocks: blocks
  });
}
Object.assign(window, {
  REGISTRY,
  REQUIRED,
  recipe,
  BlockRenderer,
  RoutePage,
  demoItems
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecossistema/Renderer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecossistema/Shell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Core primitives + global shell (GlobalHeader · EcosystemMenu · GlobalFooter) + review tools.
const {
  Button,
  Tag,
  NavBar,
  TextField
} = window.RiscoCognitivoDesignSystem_fab0ba;
const EcoCtx = React.createContext(null);
const useEco = () => React.useContext(EcoCtx);
const LOREM = {
  t: 'Lorem ipsum dolor.',
  t2: 'Lorem ipsum dolor sit amet.',
  s: 'Consectetur adipiscing elit, sed do eiusmod tempor.',
  p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  p2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  p3: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
};

// Local placeholders from the package (ADR §9). image-slot shows the SVG until a real image is dropped.
const PH = {
  hero: ['hero-wide.svg', 1920, 1080],
  landscape: ['feature-landscape.svg', 1200, 900],
  cover: ['article-cover.svg', 1600, 900],
  square: ['resource-square.svg', 1000, 1000],
  icon: ['category-icon.svg', 240, 240],
  portrait: ['portrait.svg', 600, 800]
};
function A({
  to,
  children,
  className,
  style,
  ...rest
}) {
  const {
    go
  } = useEco();
  return /*#__PURE__*/React.createElement("a", _extends({
    href: '#' + to,
    className: className,
    style: style,
    onClick: e => {
      e.preventDefault();
      go(to);
    }
  }, rest), children);
}
function Media({
  kind = 'landscape',
  name,
  fit,
  ratio,
  alt = '',
  className = '',
  style
}) {
  const {
    site,
    res
  } = useEco();
  const [file, w, h] = PH[kind];
  const pid = res.page ? res.page.id + (res.slug ? '-' + res.slug : '') : 'x';
  return /*#__PURE__*/React.createElement("div", {
    className: 'eco-media ' + className,
    style: {
      aspectRatio: ratio || `${w}/${h}`,
      ...style
    },
    role: alt ? 'img' : undefined,
    "aria-label": alt || undefined
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: `${site.key}-${pid}-${name}`,
    shape: "rect",
    fit: fit || (kind === 'square' || kind === 'icon' ? 'contain' : 'cover'),
    src: '../../assets/placeholders/' + file,
    placeholder: `${res.page ? res.page.url : ''} · ${name}`
  }));
}
function BuildTag({
  dark
}) {
  const {
    showTags
  } = useEco();
  if (!showTags) return null;
  return /*#__PURE__*/React.createElement(Tag, {
    tone: "warning",
    className: 'eco-build' + (dark ? ' on-dark' : ''),
    icon: /*#__PURE__*/React.createElement("i", {
      className: "ph ph-hammer"
    })
  }, "Em constru\xE7\xE3o");
}

// Actions: max two; an action without href renders disabled with a short reason (never href="#").
function Actions({
  actions = [],
  center = true,
  size
}) {
  const {
    go
  } = useEco();
  if (!actions.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: 'eco-actions' + (center ? ' center' : '')
  }, actions.slice(0, 2).map((a, k) => a.href ? /*#__PURE__*/React.createElement(Button, {
    key: k,
    variant: k === 0 ? 'primary' : 'secondary',
    size: size,
    onClick: () => go(a.href)
  }, a.label) : /*#__PURE__*/React.createElement(Button, {
    key: k,
    variant: k === 0 ? 'primary' : 'secondary',
    size: size,
    disabled: true,
    title: a.reason
  }, a.label)));
}
function Brand() {
  const {
    site
  } = useEco();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: site.logo,
    alt: "",
    className: site.mono ? 'eco-mark mono' : 'eco-mark'
  }), /*#__PURE__*/React.createElement("span", {
    className: "eco-wordmark"
  }, site.name));
}
function GlobalHeader({
  menuOpen,
  setMenuOpen,
  btnRef
}) {
  const {
    go,
    res
  } = useEco();
  const links = ECO.MAIN.map(id => {
    const r = ECO.byId[id];
    return {
      label: r.title,
      href: r.url,
      current: res.path === r.url
    };
  });
  return /*#__PURE__*/React.createElement(NavBar, {
    brand: /*#__PURE__*/React.createElement(Brand, null),
    links: links,
    onBrandClick: () => {
      setMenuOpen(false);
      go('/');
    },
    onNavigate: l => {
      setMenuOpen(false);
      go(l.href);
    },
    action: /*#__PURE__*/React.createElement("span", {
      className: "eco-nav-actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: "eco-icon-btn",
      "aria-label": "Busca",
      onClick: () => {
        setMenuOpen(false);
        go('/busca');
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-magnifying-glass"
    })), /*#__PURE__*/React.createElement("button", {
      className: "eco-icon-btn eco-only-desktop",
      "aria-label": "Minha conta",
      onClick: () => {
        setMenuOpen(false);
        go('/minha-conta');
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-user-circle"
    })), /*#__PURE__*/React.createElement("button", {
      ref: btnRef,
      className: "eco-icon-btn",
      "aria-label": menuOpen ? 'Fechar menu' : 'Abrir menu do ecossistema',
      "aria-expanded": menuOpen,
      "aria-controls": "eco-menu",
      onClick: () => setMenuOpen(!menuOpen)
    }, /*#__PURE__*/React.createElement("i", {
      className: 'ph ' + (menuOpen ? 'ph-x' : 'ph-list')
    })))
  });
}
function EcosystemMenu({
  close
}) {
  const {
    go,
    site,
    narrow
  } = useEco();
  const [open, setOpen] = React.useState(() => new Set());
  const ref = React.useRef(null);
  const nav = to => {
    close();
    go(to);
  };
  const toggle = k => setOpen(s => {
    const n = new Set(s);
    n.has(k) ? n.delete(k) : n.add(k);
    return n;
  });
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const f = el.querySelector('a,button');
    f && f.focus();
    const trap = e => {
      if (e.key !== 'Tab') return;
      const items = [...el.querySelectorAll('a,button')];
      if (!items.length) return;
      const first = items[0],
        last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    el.addEventListener('keydown', trap);
    return () => el.removeEventListener('keydown', trap);
  }, []);
  const L = (id, alt) => {
    const r = ECO.byId[id];
    return /*#__PURE__*/React.createElement("a", {
      key: id,
      href: '#' + r.url,
      onClick: e => {
        e.preventDefault();
        nav(r.url);
      }
    }, alt || r.title, r.type !== 'pagina' && /*#__PURE__*/React.createElement("span", {
      className: "eco-q"
    }, r.type === 'filtro' ? 'filtro' : 'seção'));
  };
  const label = g => g.key === 'Conheça o EXECUTAR' ? site.about : g.key;
  return /*#__PURE__*/React.createElement("div", {
    id: "eco-menu",
    ref: ref,
    className: "eco-menu",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Menu do ecossistema"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-menu-inner"
  }, narrow ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "eco-menu-main"
  }, L('inicio', 'Início'), ECO.MAIN.map(id => L(id))), ECO.GROUPS.map(g => {
    const isOpen = open.has(g.key);
    return /*#__PURE__*/React.createElement("div", {
      key: g.key,
      className: 'eco-acc' + (isOpen ? ' open' : '')
    }, /*#__PURE__*/React.createElement("button", {
      className: "eco-acc-head",
      "aria-expanded": isOpen,
      onClick: () => toggle(g.key)
    }, label(g), /*#__PURE__*/React.createElement("i", {
      className: "ph ph-caret-down"
    })), isOpen && /*#__PURE__*/React.createElement("div", {
      className: "eco-acc-body"
    }, g.root && !g.items.some(i => i[0] === g.root) && L(g.root, 'Visão geral'), g.items.map(([id, alt]) => L(id, alt))));
  })) : /*#__PURE__*/React.createElement("div", {
    className: "eco-menu-cols"
  }, ECO.GROUPS.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.key,
    className: "eco-menu-col"
  }, /*#__PURE__*/React.createElement(A, {
    to: ECO.byId[g.root].url,
    className: "eco-menu-h"
  }, label(g)), g.items.map(([id, alt]) => L(id, alt))))), /*#__PURE__*/React.createElement("div", {
    className: "eco-menu-base"
  }, ECO.BASE.map(([id, ic]) => {
    const r = ECO.byId[id];
    return /*#__PURE__*/React.createElement("a", {
      key: id,
      href: '#' + r.url,
      onClick: e => {
        e.preventDefault();
        nav(r.url);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: 'ph ' + ic
    }), r.title);
  }))));
}
function GlobalFooter() {
  const {
    site,
    res
  } = useEco();
  const crumbs = [];
  for (let r = res.page; r && r.id !== 'inicio'; r = ECO.byId[r.parent]) crumbs.unshift(r);
  return /*#__PURE__*/React.createElement("footer", {
    className: "eco-footer",
    "data-section": "GlobalFooter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-wrap"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eco-foot-note"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conte\xFAdo educativo \u2014 n\xE3o substitui avalia\xE7\xE3o profissional nem constitui diagn\xF3stico."), /*#__PURE__*/React.createElement("nav", {
    className: "eco-crumbs",
    "aria-label": "Voc\xEA est\xE1 em"
  }, /*#__PURE__*/React.createElement(A, {
    to: "/",
    "aria-label": "In\xEDcio"
  }, /*#__PURE__*/React.createElement("img", {
    src: site.logo,
    alt: "",
    className: site.mono ? 'eco-mark mono' : 'eco-mark'
  })), crumbs.map(r => /*#__PURE__*/React.createElement(React.Fragment, {
    key: r.id
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-right"
  }), /*#__PURE__*/React.createElement(A, {
    to: r.url
  }, r.title)))), /*#__PURE__*/React.createElement("div", {
    className: "eco-foot-dir"
  }, ECO.GROUPS.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.key
  }, /*#__PURE__*/React.createElement("h3", null, g.key === 'Conheça o EXECUTAR' ? site.about : g.key), g.items.filter(([id]) => ECO.byId[id].type !== 'ancora').slice(0, 6).map(([id, alt]) => /*#__PURE__*/React.createElement(A, {
    key: id,
    to: ECO.byId[id].url
  }, alt || ECO.byId[id].title))))), /*#__PURE__*/React.createElement("div", {
    className: "eco-foot-legal"
  }, /*#__PURE__*/React.createElement("span", null, "Copyright \xA9 2026 ", site.name, ". Todos os direitos reservados."), /*#__PURE__*/React.createElement("span", {
    className: "eco-foot-links"
  }, ECO.FOOTER.map(id => /*#__PURE__*/React.createElement(A, {
    key: id,
    to: ECO.byId[id].url
  }, ECO.byId[id].title))), /*#__PURE__*/React.createElement("span", null, site.domain))));
}
function Inspector({
  openMap
}) {
  const {
    res
  } = useEco();
  const e = res.entry;
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-inspector"
  }, /*#__PURE__*/React.createElement("code", null, res.url), /*#__PURE__*/React.createElement("span", {
    className: "eco-insp-meta"
  }, res.page ? res.page.template : '—', " \u2192 ", ECO.PATTERN_LABEL[res.pattern], e && e.type !== 'pagina' ? ` · ${e.type}` : ''), /*#__PURE__*/React.createElement("button", {
    onClick: openMap
  }, "Rotas (78)"));
}
function Sitemap({
  close
}) {
  const {
    go,
    res
  } = useEco();
  const [q, setQ] = React.useState('');
  const rows = ECO.R.filter(r => !q || (r.title + r.url + r.template).toLowerCase().includes(q.toLowerCase()));
  const ex = r => r.url.replace('[slug]', 'exemplo-1');
  return /*#__PURE__*/React.createElement("div", {
    className: "eco-sitemap",
    onClick: close
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-sitemap-panel",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-sitemap-top"
  }, /*#__PURE__*/React.createElement("h2", null, "Rotas"), /*#__PURE__*/React.createElement("button", {
    className: "eco-icon-btn",
    "aria-label": "Fechar",
    onClick: close
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "78 entradas do CSV. Envie copy e imagens citando rota + id da se\xE7\xE3o (ative \u201CMostrar blocos\u201D)."), /*#__PURE__*/React.createElement(TextField, {
    placeholder: "Filtrar rotas",
    value: q,
    onChange: e => setQ(e.target.value)
  }), /*#__PURE__*/React.createElement("div", null, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    className: 'eco-sitemap-row' + (res.url === ex(r) ? ' on' : ''),
    onClick: () => {
      close();
      go(ex(r));
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, r.order), /*#__PURE__*/React.createElement("span", null, r.title, /*#__PURE__*/React.createElement("code", null, r.url, " \xB7 ", ECO.BP[r.id].blocks.join(' › '))), /*#__PURE__*/React.createElement(Tag, {
    tone: r.access === 'publico' ? 'neutral' : 'danger'
  }, ECO.PATTERN_LABEL[ECO.PATTERN[r.template]]))))));
}
Object.assign(window, {
  EcoCtx,
  useEco,
  LOREM,
  PH,
  A,
  Media,
  BuildTag,
  Actions,
  GlobalHeader,
  EcosystemMenu,
  GlobalFooter,
  Inspector,
  Sitemap,
  Button,
  Tag,
  TextField
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecossistema/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecossistema/blueprints.js
try { (() => {
// Generated from sources/executar/route-blueprints.json (78 entries). Regenerate, do not hand-edit.
window.ECO_BP = {
  "inicio": {
    "family": "institucional",
    "template": "landing",
    "blocks": ["HeroCampaign", "HeroCampaign", "HeroCampaign", "PromoGrid", "RelatedContent", "Newsletter"],
    "anchors": [],
    "refs": ["REF-01"],
    "relation": "familia_visual",
    "file": "app/(public)/page.tsx"
  },
  "blog": {
    "family": "editorial",
    "template": "catalogo_conteudos",
    "blocks": ["PageIntro", "FilterBar", "RelatedContent", "ResourceGrid", "Newsletter"],
    "anchors": [],
    "refs": ["REF-02"],
    "relation": "adaptacao_proposta",
    "file": "app/(public)/blog/page.tsx"
  },
  "riscos": {
    "family": "editorial",
    "template": "catalogo_riscos",
    "blocks": ["PageIntro", "ResourceGrid", "EvidenceList"],
    "anchors": [],
    "refs": ["REF-02"],
    "relation": "familia_visual",
    "file": "app/(public)/riscos-cognitivos/page.tsx"
  },
  "mapa": {
    "family": "funcional_mapa",
    "template": "mapa_interativo",
    "blocks": ["PageIntro", "MapExplorer", "EvidenceList", "RelatedContent"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(public)/mapa-cognitivo/page.tsx"
  },
  "apps": {
    "family": "showroom",
    "template": "catalogo_apps",
    "blocks": ["PageIntro", "CategoryRail", "FeaturedCarousel", "CollectionTabs", "FilterBar", "ResourceGrid", "BenefitsRow", "DirectoryLinks"],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": "app/(public)/apps/page.tsx"
  },
  "ferramentas": {
    "family": "showroom",
    "template": "catalogo_recursos",
    "blocks": ["PageIntro", "CategoryRail", "FeaturedCarousel", "CollectionTabs", "FilterBar", "ResourceGrid", "BenefitsRow", "DirectoryLinks"],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": "app/(public)/ferramentas/page.tsx"
  },
  "sobre": {
    "family": "institucional",
    "template": "institucional",
    "blocks": ["PageIntro", "FeatureSplit", "RichText", "RelatedContent"],
    "anchors": [],
    "refs": ["REF-01"],
    "relation": "familia_visual",
    "file": "app/(public)/sobre/page.tsx"
  },
  "autor": {
    "family": "institucional",
    "template": "institucional",
    "blocks": ["PageIntro", "FeatureSplit", "RichText", "RelatedContent"],
    "anchors": [],
    "refs": ["REF-01"],
    "relation": "familia_visual",
    "file": "app/(public)/sobre/autor/page.tsx"
  },
  "metodologia": {
    "family": "institucional",
    "template": "institucional",
    "blocks": ["PageIntro", "FeatureSplit", "RichText", "RelatedContent"],
    "anchors": [],
    "refs": ["REF-01"],
    "relation": "familia_visual",
    "file": "app/(public)/sobre/metodologia/page.tsx"
  },
  "editorial": {
    "family": "institucional",
    "template": "institucional",
    "blocks": ["PageIntro", "FeatureSplit", "RichText", "RelatedContent"],
    "anchors": [],
    "refs": ["REF-01"],
    "relation": "familia_visual",
    "file": "app/(public)/sobre/editorial/page.tsx"
  },
  "parceiros": {
    "family": "institucional",
    "template": "institucional",
    "blocks": ["PageIntro", "FeatureSplit", "RichText", "RelatedContent"],
    "anchors": [],
    "refs": ["REF-01"],
    "relation": "familia_visual",
    "file": "app/(public)/sobre/parceiros/page.tsx"
  },
  "blog_artigo": {
    "family": "editorial",
    "template": "catalogo_conteudos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-02"],
    "relation": "familia_visual",
    "file": null
  },
  "blog_guia": {
    "family": "editorial",
    "template": "catalogo_conteudos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-02"],
    "relation": "familia_visual",
    "file": null
  },
  "blog_tutorial": {
    "family": "editorial",
    "template": "catalogo_conteudos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-02"],
    "relation": "familia_visual",
    "file": null
  },
  "blog_video": {
    "family": "editorial",
    "template": "catalogo_conteudos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-02"],
    "relation": "familia_visual",
    "file": null
  },
  "blog_noticia": {
    "family": "editorial",
    "template": "catalogo_conteudos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-02"],
    "relation": "familia_visual",
    "file": null
  },
  "blog_framework": {
    "family": "editorial",
    "template": "catalogo_conteudos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-02"],
    "relation": "familia_visual",
    "file": null
  },
  "blog_evidencia": {
    "family": "editorial",
    "template": "catalogo_conteudos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-02"],
    "relation": "familia_visual",
    "file": null
  },
  "blog_curadoria": {
    "family": "editorial",
    "template": "catalogo_conteudos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-02"],
    "relation": "familia_visual",
    "file": null
  },
  "conteudo": {
    "family": "editorial",
    "template": "conteudo",
    "blocks": ["ArticleHeader", "MediaFigure", "RichText", "MediaFigure", "RichText", "EvidenceList", "RelatedContent", "DiscussionFeed"],
    "anchors": ["referencias", "comentarios"],
    "refs": ["REF-02"],
    "relation": "familia_visual",
    "file": "app/(public)/blog/[slug]/page.tsx"
  },
  "conteudo_refs": {
    "family": "editorial",
    "template": "conteudo",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-02"],
    "relation": "familia_visual",
    "file": null
  },
  "conteudo_comentarios": {
    "family": "editorial",
    "template": "conteudo",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-02"],
    "relation": "familia_visual",
    "file": null
  },
  "risco_detalhe": {
    "family": "editorial",
    "template": "risco",
    "blocks": ["ArticleHeader", "RichText", "EvidenceList", "RelatedContent"],
    "anchors": [],
    "refs": ["REF-02"],
    "relation": "familia_visual",
    "file": "app/(public)/riscos-cognitivos/[slug]/page.tsx"
  },
  "mapas": {
    "family": "showroom",
    "template": "catalogo_mapas",
    "blocks": ["PageIntro", "FilterBar", "ResourceGrid"],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": "app/(public)/mapas/page.tsx"
  },
  "mapa_neuro": {
    "family": "funcional_mapa",
    "template": "mapa_interativo",
    "blocks": ["PageIntro", "MapExplorer", "EvidenceList", "RelatedContent"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(public)/mapas/neurodivergencia/page.tsx"
  },
  "mapa_projetos": {
    "family": "funcional_mapa",
    "template": "mapa_interativo",
    "blocks": ["PageIntro", "MapExplorer", "EvidenceList", "RelatedContent"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(public)/mapas/projetos-e-processos/page.tsx"
  },
  "mapa_detalhe": {
    "family": "funcional_mapa",
    "template": "mapa_interativo",
    "blocks": ["PageIntro", "MapExplorer", "EvidenceList", "RelatedContent"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(public)/mapas/[slug]/page.tsx"
  },
  "executar_app": {
    "family": "institucional",
    "template": "produto_app",
    "blocks": ["DetailHeader", "FeatureSplit", "RichText", "BenefitsRow", "RelatedContent"],
    "anchors": ["funcionalidades", "como-funciona", "acesse"],
    "refs": ["REF-01"],
    "relation": "familia_visual",
    "file": "app/(public)/apps/executar/page.tsx"
  },
  "app_funcoes": {
    "family": "institucional",
    "template": "produto_app",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-01"],
    "relation": "familia_visual",
    "file": null
  },
  "app_como": {
    "family": "institucional",
    "template": "produto_app",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-01"],
    "relation": "familia_visual",
    "file": null
  },
  "app_acessar": {
    "family": "institucional",
    "template": "produto_app",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-01"],
    "relation": "familia_visual",
    "file": null
  },
  "app_detalhe": {
    "family": "institucional",
    "template": "produto_app",
    "blocks": ["DetailHeader", "FeatureSplit", "RichText", "BenefitsRow", "RelatedContent"],
    "anchors": [],
    "refs": ["REF-01"],
    "relation": "familia_visual",
    "file": "app/(public)/apps/[slug]/page.tsx"
  },
  "recurso_ia-agentes": {
    "family": "showroom",
    "template": "catalogo_recursos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": null
  },
  "recurso_skills": {
    "family": "showroom",
    "template": "catalogo_recursos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": null
  },
  "recurso_prompts": {
    "family": "showroom",
    "template": "catalogo_recursos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": null
  },
  "recurso_photoprompts": {
    "family": "showroom",
    "template": "catalogo_recursos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": null
  },
  "recurso_workflows": {
    "family": "showroom",
    "template": "catalogo_recursos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": null
  },
  "recurso_templates": {
    "family": "showroom",
    "template": "catalogo_recursos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": null
  },
  "recurso_assets": {
    "family": "showroom",
    "template": "catalogo_recursos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": null
  },
  "recurso_ebooks": {
    "family": "showroom",
    "template": "catalogo_recursos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": null
  },
  "recurso_detalhe": {
    "family": "showroom",
    "template": "recurso",
    "blocks": ["DetailHeader", "MediaFigure", "RichText", "RelatedContent"],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": "app/(public)/ferramentas/[slug]/page.tsx"
  },
  "loja": {
    "family": "showroom",
    "template": "catalogo_produtos",
    "blocks": ["PageIntro", "CategoryRail", "FeaturedCarousel", "CollectionTabs", "FilterBar", "ResourceGrid", "BenefitsRow", "DirectoryLinks"],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": "app/(public)/loja/page.tsx"
  },
  "loja_digitais": {
    "family": "showroom",
    "template": "catalogo_produtos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": null
  },
  "loja_fisicos": {
    "family": "showroom",
    "template": "catalogo_produtos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": null
  },
  "loja_livros": {
    "family": "showroom",
    "template": "catalogo_produtos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": null
  },
  "loja_cursos": {
    "family": "showroom",
    "template": "catalogo_produtos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": null
  },
  "loja_afiliados": {
    "family": "showroom",
    "template": "catalogo_produtos",
    "blocks": [],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": null
  },
  "produto": {
    "family": "showroom",
    "template": "produto",
    "blocks": ["DetailHeader", "MediaFigure", "RichText", "RelatedContent"],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": "app/(public)/loja/[slug]/page.tsx"
  },
  "comunidade": {
    "family": "funcional_comunidade",
    "template": "comunidade",
    "blocks": ["PageIntro", "FilterBar", "DiscussionFeed"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(public)/comunidade/page.tsx"
  },
  "comunidade_discussoes": {
    "family": "funcional_comunidade",
    "template": "comunidade",
    "blocks": [],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": null
  },
  "comunidade_perguntas": {
    "family": "funcional_comunidade",
    "template": "comunidade",
    "blocks": [],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": null
  },
  "comunidade_compartilhamentos": {
    "family": "funcional_comunidade",
    "template": "comunidade",
    "blocks": [],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": null
  },
  "comunidade_sugestoes": {
    "family": "funcional_comunidade",
    "template": "comunidade",
    "blocks": [],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": null
  },
  "topico": {
    "family": "funcional_comunidade",
    "template": "topico",
    "blocks": ["ArticleHeader", "RichText", "DiscussionFeed", "FormSection"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(public)/comunidade/topicos/[slug]/page.tsx"
  },
  "studio": {
    "family": "institucional",
    "template": "servicos",
    "blocks": ["PageIntro", "FeatureSplit", "PromoGrid", "RelatedContent"],
    "anchors": [],
    "refs": ["REF-01"],
    "relation": "familia_visual",
    "file": "app/(public)/studio/page.tsx"
  },
  "consultoria": {
    "family": "institucional",
    "template": "servico",
    "blocks": ["HeroCampaign", "FeatureSplit", "BenefitsRow", "RelatedContent"],
    "anchors": [],
    "refs": ["REF-01"],
    "relation": "familia_visual",
    "file": "app/(public)/studio/consultoria/page.tsx"
  },
  "studio_servicos": {
    "family": "institucional",
    "template": "servicos",
    "blocks": ["PageIntro", "FeatureSplit", "PromoGrid", "RelatedContent"],
    "anchors": [],
    "refs": ["REF-01"],
    "relation": "familia_visual",
    "file": "app/(public)/studio/servicos/page.tsx"
  },
  "cases": {
    "family": "showroom",
    "template": "catalogo_projetos",
    "blocks": ["PageIntro", "ResourceGrid"],
    "anchors": [],
    "refs": ["REF-03"],
    "relation": "familia_visual",
    "file": "app/(public)/studio/projetos/page.tsx"
  },
  "case": {
    "family": "editorial",
    "template": "case",
    "blocks": ["ArticleHeader", "MediaFigure", "RichText", "RelatedContent"],
    "anchors": [],
    "refs": ["REF-02"],
    "relation": "familia_visual",
    "file": "app/(public)/studio/projetos/[slug]/page.tsx"
  },
  "briefing": {
    "family": "funcional_formulario",
    "template": "formulario",
    "blocks": ["PageIntro", "FormSection"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(public)/studio/briefing/page.tsx"
  },
  "busca": {
    "family": "funcional_busca",
    "template": "busca_global",
    "blocks": ["PageIntro", "FilterBar", "SearchResults"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(public)/busca/page.tsx"
  },
  "conta": {
    "family": "funcional_conta",
    "template": "conta",
    "blocks": ["PageIntro", "AccountPanel"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(account)/minha-conta/page.tsx"
  },
  "login": {
    "family": "funcional_conta",
    "template": "autenticacao",
    "blocks": ["PageIntro", "AuthForm"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(account)/entrar/page.tsx"
  },
  "newsletter": {
    "family": "funcional_formulario",
    "template": "formulario",
    "blocks": ["PageIntro", "FormSection"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(public)/newsletter/page.tsx"
  },
  "contato": {
    "family": "funcional_formulario",
    "template": "formulario",
    "blocks": ["PageIntro", "FormSection"],
    "anchors": ["redes-sociais"],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(public)/contato/page.tsx"
  },
  "redes": {
    "family": "funcional_formulario",
    "template": "formulario",
    "blocks": [],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": null
  },
  "admin": {
    "family": "funcional_admin",
    "template": "admin",
    "blocks": ["PageIntro", "AdminPanel"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(admin)/admin/page.tsx"
  },
  "admin_paginas": {
    "family": "funcional_admin",
    "template": "admin_crud",
    "blocks": ["PageIntro", "AdminPanel"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(admin)/admin/paginas/page.tsx"
  },
  "admin_conteudos": {
    "family": "funcional_admin",
    "template": "admin_crud",
    "blocks": ["PageIntro", "AdminPanel"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(admin)/admin/conteudos/page.tsx"
  },
  "admin_mapas": {
    "family": "funcional_admin",
    "template": "admin_crud",
    "blocks": ["PageIntro", "AdminPanel"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(admin)/admin/mapas/page.tsx"
  },
  "admin_apps": {
    "family": "funcional_admin",
    "template": "admin_crud",
    "blocks": ["PageIntro", "AdminPanel"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(admin)/admin/apps/page.tsx"
  },
  "admin_recursos": {
    "family": "funcional_admin",
    "template": "admin_crud",
    "blocks": ["PageIntro", "AdminPanel"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(admin)/admin/recursos/page.tsx"
  },
  "admin_produtos": {
    "family": "funcional_admin",
    "template": "admin_crud",
    "blocks": ["PageIntro", "AdminPanel"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(admin)/admin/produtos/page.tsx"
  },
  "admin_taxonomias": {
    "family": "funcional_admin",
    "template": "admin_crud",
    "blocks": ["PageIntro", "AdminPanel"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(admin)/admin/taxonomias/page.tsx"
  },
  "admin_moderacao": {
    "family": "funcional_admin",
    "template": "admin_crud",
    "blocks": ["PageIntro", "AdminPanel"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(admin)/admin/moderacao/page.tsx"
  },
  "admin_formularios": {
    "family": "funcional_admin",
    "template": "admin_crud",
    "blocks": ["PageIntro", "AdminPanel"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(admin)/admin/formularios/page.tsx"
  },
  "admin_integracoes": {
    "family": "funcional_admin",
    "template": "admin_crud",
    "blocks": ["PageIntro", "AdminPanel"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(admin)/admin/integracoes/page.tsx"
  },
  "admin_parceiros": {
    "family": "funcional_admin",
    "template": "admin_crud",
    "blocks": ["PageIntro", "AdminPanel"],
    "anchors": [],
    "refs": [],
    "relation": "adaptacao_proposta",
    "file": "app/(admin)/admin/parceiros/page.tsx"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecossistema/blueprints.js", error: String((e && e.message) || e) }); }

// ui_kits/ecossistema/config.js
try { (() => {
// Ecossistema config — sites, menus, page patterns, filters, router. Reads ECO_ROUTES (CSV) + ECO_BP (blueprints).
(function () {
  const R = window.ECO_ROUTES;
  const BP = window.ECO_BP;
  const byId = Object.fromEntries(R.map(r => [r.id, r]));
  const SITES = {
    executar: {
      key: 'executar',
      name: 'EXECUTAR',
      logo: '../../assets/logo/executar-mark.svg',
      mono: true,
      about: 'Conheça o EXECUTAR',
      domain: 'executar — domínio a definir'
    },
    risco: {
      key: 'risco',
      name: 'Risco Cognitivo',
      logo: '../../assets/logo/brain-mark.png',
      about: 'Conheça o Risco Cognitivo',
      domain: 'riscocognitivo — domínio a definir'
    }
  };

  // Main nav (CSV order): logo = inicio; then 5 links. Utilities: busca · conta · hambúrguer.
  const MAIN = ['blog', 'riscos', 'mapa', 'apps', 'ferramentas'];

  // Hamburger groups — order and labels from the brief; `root` = group landing page (heading link on desktop).
  const GROUPS = [{
    key: 'Conheça o EXECUTAR',
    root: 'sobre',
    items: [['sobre', 'Sobre o projeto'], ['autor'], ['metodologia'], ['editorial', 'Princípios editoriais'], ['parceiros']]
  }, {
    key: 'Conteúdos',
    root: 'blog',
    items: [['blog'], ['blog_artigo'], ['blog_guia'], ['blog_tutorial'], ['blog_video'], ['blog_noticia'], ['blog_framework'], ['blog_evidencia'], ['blog_curadoria']]
  }, {
    key: 'Cognição e mapas',
    root: 'mapas',
    items: [['riscos'], ['mapa'], ['mapa_neuro'], ['mapa_projetos'], ['mapas']]
  }, {
    key: 'Apps',
    root: 'apps',
    items: [['apps', 'Todos os apps'], ['executar_app'], ['app_funcoes'], ['app_como'], ['app_acessar', 'Acessar o aplicativo']]
  }, {
    key: 'Ferramentas e recursos',
    root: 'ferramentas',
    items: [['ferramentas', 'Catálogo completo'], ['recurso_ia-agentes'], ['recurso_skills'], ['recurso_prompts', 'Prompts e photoprompts'], ['recurso_workflows'], ['recurso_templates'], ['recurso_assets'], ['recurso_ebooks']]
  }, {
    key: 'Loja e marketplace',
    root: 'loja',
    items: [['loja_digitais'], ['loja_fisicos'], ['loja_livros'], ['loja_cursos'], ['loja_afiliados']]
  }, {
    key: 'Comunidade',
    root: 'comunidade',
    items: [['comunidade_discussoes'], ['comunidade_perguntas'], ['comunidade_compartilhamentos'], ['comunidade_sugestoes']]
  }, {
    key: 'Consultoria e Studio',
    root: 'studio',
    items: [['consultoria'], ['studio_servicos'], ['cases'], ['briefing']]
  }];
  const BASE = [['busca', 'ph-magnifying-glass'], ['conta', 'ph-user-circle'], ['newsletter', 'ph-envelope-simple'], ['contato', 'ph-chat-circle'], ['redes', 'ph-share-network']];
  const FOOTER = R.filter(r => r.nav.includes('rodape')).map(r => r.id);

  // CSV template → one of the four page patterns requested (Home · Produto · Artigo · Showroom) + restricted.
  const PATTERN = {
    landing: 'home',
    institucional: 'home',
    servicos: 'home',
    servico: 'home',
    produto_app: 'produto',
    produto: 'produto',
    recurso: 'produto',
    conteudo: 'artigo',
    risco: 'artigo',
    case: 'artigo',
    topico: 'artigo',
    formulario: 'artigo',
    conta: 'artigo',
    autenticacao: 'artigo',
    catalogo_conteudos: 'showroom',
    catalogo_riscos: 'showroom',
    catalogo_apps: 'showroom',
    catalogo_recursos: 'showroom',
    catalogo_mapas: 'showroom',
    catalogo_produtos: 'showroom',
    catalogo_projetos: 'showroom',
    mapa_interativo: 'showroom',
    comunidade: 'showroom',
    busca_global: 'showroom',
    admin: 'admin',
    admin_crud: 'admin'
  };
  const PATTERN_LABEL = {
    home: 'Home',
    produto: 'Produto',
    artigo: 'Artigo',
    showroom: 'Showroom',
    admin: 'Restrito',
    notfound: '404'
  };

  // Facets (ADR §5.1). The UI only offers the facets the CSV lists for the page.
  const FACETS = {
    perfil: {
      label: 'Perfil',
      values: ['tdah', 'dislexia', 'autismo', 'altas-habilidades', 'neurodivergencia']
    },
    objetivo: {
      label: 'Objetivo',
      values: ['estudar', 'trabalhar', 'rotina', 'projetos', 'processos']
    },
    formato: {
      label: 'Formato',
      values: ['artigo', 'guia', 'tutorial', 'video', 'noticia', 'framework', 'evidencia', 'curadoria']
    },
    tecnologia: {
      label: 'Tecnologia',
      values: ['ia', 'agentes', 'skills', 'prompts', 'workflows', 'apps']
    },
    disponibilidade: {
      label: 'Disponibilidade',
      values: ['gratuito', 'pago']
    },
    tipo: {
      label: 'Tipo',
      values: ['ia-agentes', 'skills', 'prompts', 'photoprompts', 'workflows', 'templates', 'assets', 'ebooks']
    },
    categoria: {
      label: 'Categoria',
      values: ['digitais', 'fisicos', 'livros', 'cursos', 'afiliados']
    }
  };
  const COMMUNITY_TIPO = ['discussoes', 'perguntas', 'compartilhamentos', 'sugestoes'];
  const LABELS = {
    tdah: 'TDAH',
    dislexia: 'Dislexia',
    autismo: 'Autismo',
    'altas-habilidades': 'Altas habilidades',
    neurodivergencia: 'Neurodivergência',
    estudar: 'Estudar',
    trabalhar: 'Trabalhar',
    rotina: 'Rotina',
    projetos: 'Projetos',
    processos: 'Processos',
    artigo: 'Artigo',
    guia: 'Guia',
    tutorial: 'Tutorial',
    video: 'Vídeo',
    noticia: 'Notícia',
    framework: 'Framework',
    evidencia: 'Evidência',
    curadoria: 'Curadoria',
    ia: 'IA',
    agentes: 'Agentes',
    skills: 'Skills',
    prompts: 'Prompts',
    workflows: 'Workflows',
    apps: 'Apps',
    gratuito: 'Gratuito',
    pago: 'Pago',
    'ia-agentes': 'IA e agentes',
    photoprompts: 'Photoprompts',
    templates: 'Templates',
    assets: 'Assets',
    ebooks: 'E-books',
    digitais: 'Digitais',
    fisicos: 'Físicos',
    livros: 'Livros',
    cursos: 'Cursos',
    afiliados: 'Afiliados',
    discussoes: 'Discussões',
    perguntas: 'Perguntas',
    compartilhamentos: 'Compartilhamentos',
    sugestoes: 'Sugestões'
  };

  // Detail route each catalog links to; demo slugs exemplo-1…exemplo-12 resolve, anything else → 404.
  const DETAIL = {
    blog: '/blog/',
    riscos: '/riscos-cognitivos/',
    apps: '/apps/',
    ferramentas: '/ferramentas/',
    loja: '/loja/',
    mapas: '/mapas/',
    mapa: '/mapas/',
    cases: '/studio/projetos/',
    comunidade: '/comunidade/topicos/',
    busca: '/blog/'
  };
  const DEMO_SLUG = /^exemplo-([1-9]|1[0-2])$/;
  const pagePaths = R.filter(r => r.type === 'pagina').reduce((m, r) => (m[r.url] = r, m), {});
  const dynamics = R.filter(r => r.type === 'dinamica').map(r => ({
    r,
    re: new RegExp('^' + r.url.replace('[slug]', '([^/]+)') + '$')
  }));
  function parse(url) {
    const [beforeHash, anchor = ''] = url.split('#');
    const [path, qs = ''] = beforeHash.split('?');
    return {
      path: path || '/',
      query: Object.fromEntries(new URLSearchParams(qs)),
      anchor,
      qs
    };
  }
  function cleanQuery(page, query) {
    const allowed = page.template === 'comunidade' ? {
      tipo: COMMUNITY_TIPO
    } : Object.fromEntries((page.filters || []).filter(f => FACETS[f]).map(f => [f, FACETS[f].values]));
    const q = {};
    for (const [k, v] of Object.entries(query)) {
      if (allowed[k] && allowed[k].includes(v)) q[k] = v;else if (k === 'q' && v) q.q = v;else if (k === 'pagina' && /^[1-9]\d*$/.test(v)) q.pagina = v;
    }
    return q;
  }
  function resolve(url) {
    const p = parse(url);
    const entry = R.find(r => r.url === url) || null;
    let page = pagePaths[p.path],
      slug = null;
    if (!page) {
      for (const d of dynamics) {
        const m = p.path.match(d.re);
        if (m) {
          page = d.r;
          slug = m[1];
          break;
        }
      }
      if (page && !DEMO_SLUG.test(slug)) return {
        ...p,
        url,
        entry: null,
        page: null,
        slug,
        pattern: 'notfound'
      };
    }
    if (!page) return {
      ...p,
      url,
      entry,
      page: null,
      pattern: 'notfound'
    };
    const bp = BP[page.id];
    return {
      ...p,
      url,
      entry: entry || page,
      page,
      bp,
      slug,
      query: cleanQuery(page, p.query),
      pattern: PATTERN[page.template] || 'artigo'
    };
  }
  function withQuery(path, query) {
    const qs = new URLSearchParams(Object.entries(query).filter(([, v]) => v != null && v !== '')).toString();
    return path + (qs ? '?' + qs : '');
  }
  window.ECO = {
    R,
    BP,
    byId,
    SITES,
    MAIN,
    GROUPS,
    BASE,
    FOOTER,
    PATTERN,
    PATTERN_LABEL,
    FACETS,
    COMMUNITY_TIPO,
    LABELS,
    DETAIL,
    resolve,
    parse,
    withQuery,
    label: v => LABELS[v] || v
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecossistema/config.js", error: String((e && e.message) || e) }); }

// ui_kits/ecossistema/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecossistema/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/ecossistema/routes.js
try { (() => {
// Generated from sources/executar/EXECUTAR_rotas.csv (Programaex/Design · main · EXECUTAR_Claude_Design) — 78 entries. Do not hand-edit; regenerate from the CSV.
window.ECO_ROUTES = [{
  "id": "inicio",
  "parent": "",
  "title": "Início",
  "url": "/",
  "type": "pagina",
  "group": "Principal",
  "nav": ["logo", "mobile_principal"],
  "order": 1,
  "access": "publico",
  "index": true,
  "template": "landing",
  "filters": [],
  "components": ["apresentacao", "metodologia_resumo", "conteudos_destaque", "ferramentas_destaque", "cta_app", "newsletter"],
  "note": "Logo leva a esta página. Ordem principal: logo; blog; riscos; mapa; apps; ferramentas. No celular usar logo; busca; hambúrguer."
}, {
  "id": "blog",
  "parent": "inicio",
  "title": "Blog",
  "url": "/blog",
  "type": "pagina",
  "group": "Conteúdos",
  "nav": ["principal", "hamburguer", "mobile_principal"],
  "order": 2,
  "access": "publico",
  "index": true,
  "template": "catalogo_conteudos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade"],
  "components": ["busca", "filtros", "cards", "paginacao"],
  "note": "Unificar artigos e demais formatos neste catálogo."
}, {
  "id": "riscos",
  "parent": "inicio",
  "title": "Riscos cognitivos",
  "url": "/riscos-cognitivos",
  "type": "pagina",
  "group": "Cognição e mapas",
  "nav": ["principal", "hamburguer", "mobile_principal"],
  "order": 3,
  "access": "publico",
  "index": true,
  "template": "catalogo_riscos",
  "filters": [],
  "components": ["introducao", "fatores", "estrategias", "referencias"],
  "note": "Conteúdo educativo com fontes. Não apresentar classificação como diagnóstico."
}, {
  "id": "mapa",
  "parent": "inicio",
  "title": "Mapa cognitivo",
  "url": "/mapa-cognitivo",
  "type": "pagina",
  "group": "Cognição e mapas",
  "nav": ["principal", "hamburguer", "mobile_principal"],
  "order": 4,
  "access": "publico",
  "index": true,
  "template": "mapa_interativo",
  "filters": [],
  "components": ["exploracao_interativa", "legenda", "busca", "detalhes"],
  "note": "Entrada principal para o mapa cognitivo."
}, {
  "id": "apps",
  "parent": "inicio",
  "title": "Apps",
  "url": "/apps",
  "type": "pagina",
  "group": "Apps",
  "nav": ["principal", "hamburguer", "mobile_principal"],
  "order": 5,
  "access": "publico",
  "index": true,
  "template": "catalogo_apps",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade"],
  "components": ["cards", "busca", "filtros"],
  "note": ""
}, {
  "id": "ferramentas",
  "parent": "inicio",
  "title": "Ferramentas",
  "url": "/ferramentas",
  "type": "pagina",
  "group": "Ferramentas e recursos",
  "nav": ["principal", "hamburguer", "mobile_principal"],
  "order": 6,
  "access": "publico",
  "index": true,
  "template": "catalogo_recursos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade"],
  "components": ["busca", "filtros", "cards", "paginacao"],
  "note": "Recursos gratuitos e pagos; compra direciona ao produto correspondente na loja. Filtros: perfil=tdah|dislexia|autismo|altas-habilidades|neurodivergencia; objetivo=estudar|trabalhar|rotina|projetos|processos; tecnologia=ia|agentes|skills|prompts|workflows|apps; disponibilidade=gratuito|pago. Aplicar também nos demais catálogos compatíveis."
}, {
  "id": "sobre",
  "parent": "inicio",
  "title": "Sobre o EXECUTAR",
  "url": "/sobre",
  "type": "pagina",
  "group": "Conheça o EXECUTAR",
  "nav": ["hamburguer", "rodape"],
  "order": 7,
  "access": "publico",
  "index": true,
  "template": "institucional",
  "filters": [],
  "components": [],
  "note": ""
}, {
  "id": "autor",
  "parent": "sobre",
  "title": "Autor e minha história",
  "url": "/sobre/autor",
  "type": "pagina",
  "group": "Conheça o EXECUTAR",
  "nav": ["hamburguer", "rodape"],
  "order": 8,
  "access": "publico",
  "index": true,
  "template": "institucional",
  "filters": [],
  "components": [],
  "note": ""
}, {
  "id": "metodologia",
  "parent": "sobre",
  "title": "Metodologia e ciência",
  "url": "/sobre/metodologia",
  "type": "pagina",
  "group": "Conheça o EXECUTAR",
  "nav": ["hamburguer", "rodape"],
  "order": 9,
  "access": "publico",
  "index": true,
  "template": "institucional",
  "filters": [],
  "components": ["principios", "metodo", "referencias"],
  "note": ""
}, {
  "id": "editorial",
  "parent": "sobre",
  "title": "Princípios editoriais e curadoria",
  "url": "/sobre/editorial",
  "type": "pagina",
  "group": "Conheça o EXECUTAR",
  "nav": ["hamburguer", "rodape"],
  "order": 10,
  "access": "publico",
  "index": true,
  "template": "institucional",
  "filters": [],
  "components": [],
  "note": ""
}, {
  "id": "parceiros",
  "parent": "sobre",
  "title": "Parceiros",
  "url": "/sobre/parceiros",
  "type": "pagina",
  "group": "Conheça o EXECUTAR",
  "nav": ["hamburguer", "rodape"],
  "order": 11,
  "access": "publico",
  "index": true,
  "template": "institucional",
  "filters": [],
  "components": [],
  "note": ""
}, {
  "id": "blog_artigo",
  "parent": "blog",
  "title": "Artigos",
  "url": "/blog?formato=artigo",
  "type": "filtro",
  "group": "Conteúdos",
  "nav": ["hamburguer"],
  "order": 12,
  "access": "publico",
  "index": false,
  "template": "catalogo_conteudos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade"],
  "components": [],
  "note": "Usar a página /blog com query string; não criar outro arquivo de página. Canonical /blog."
}, {
  "id": "blog_guia",
  "parent": "blog",
  "title": "Guias",
  "url": "/blog?formato=guia",
  "type": "filtro",
  "group": "Conteúdos",
  "nav": ["hamburguer"],
  "order": 13,
  "access": "publico",
  "index": false,
  "template": "catalogo_conteudos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade"],
  "components": [],
  "note": "Usar a página /blog com query string; não criar outro arquivo de página. Canonical /blog."
}, {
  "id": "blog_tutorial",
  "parent": "blog",
  "title": "Tutoriais",
  "url": "/blog?formato=tutorial",
  "type": "filtro",
  "group": "Conteúdos",
  "nav": ["hamburguer"],
  "order": 14,
  "access": "publico",
  "index": false,
  "template": "catalogo_conteudos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade"],
  "components": [],
  "note": "Usar a página /blog com query string; não criar outro arquivo de página. Canonical /blog."
}, {
  "id": "blog_video",
  "parent": "blog",
  "title": "Vídeos",
  "url": "/blog?formato=video",
  "type": "filtro",
  "group": "Conteúdos",
  "nav": ["hamburguer"],
  "order": 15,
  "access": "publico",
  "index": false,
  "template": "catalogo_conteudos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade"],
  "components": [],
  "note": "Usar a página /blog com query string; não criar outro arquivo de página. Canonical /blog."
}, {
  "id": "blog_noticia",
  "parent": "blog",
  "title": "Notícias sobre neurodivergência",
  "url": "/blog?formato=noticia",
  "type": "filtro",
  "group": "Conteúdos",
  "nav": ["hamburguer"],
  "order": 16,
  "access": "publico",
  "index": false,
  "template": "catalogo_conteudos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade"],
  "components": [],
  "note": "Usar a página /blog com query string; não criar outro arquivo de página. Canonical /blog."
}, {
  "id": "blog_framework",
  "parent": "blog",
  "title": "Frameworks rápidos",
  "url": "/blog?formato=framework",
  "type": "filtro",
  "group": "Conteúdos",
  "nav": ["hamburguer"],
  "order": 17,
  "access": "publico",
  "index": false,
  "template": "catalogo_conteudos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade"],
  "components": [],
  "note": "Usar a página /blog com query string; não criar outro arquivo de página. Canonical /blog."
}, {
  "id": "blog_evidencia",
  "parent": "blog",
  "title": "Evidências científicas",
  "url": "/blog?formato=evidencia",
  "type": "filtro",
  "group": "Conteúdos",
  "nav": ["hamburguer"],
  "order": 18,
  "access": "publico",
  "index": false,
  "template": "catalogo_conteudos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade"],
  "components": [],
  "note": "Usar a página /blog com query string; não criar outro arquivo de página. Canonical /blog."
}, {
  "id": "blog_curadoria",
  "parent": "blog",
  "title": "Curadoria editorial",
  "url": "/blog?formato=curadoria",
  "type": "filtro",
  "group": "Conteúdos",
  "nav": ["hamburguer"],
  "order": 19,
  "access": "publico",
  "index": false,
  "template": "catalogo_conteudos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade"],
  "components": [],
  "note": "Usar a página /blog com query string; não criar outro arquivo de página. Canonical /blog."
}, {
  "id": "conteudo",
  "parent": "blog",
  "title": "Detalhe do conteúdo",
  "url": "/blog/[slug]",
  "type": "dinamica",
  "group": "Conteúdos",
  "nav": ["interna"],
  "order": 20,
  "access": "publico",
  "index": true,
  "template": "conteudo",
  "filters": [],
  "components": ["texto", "midia", "autor", "data", "referencias", "comentarios", "relacionados"],
  "note": "Resolver slug publicado no CMS; retornar 404 para inexistente. Renderizar conforme formato."
}, {
  "id": "conteudo_refs",
  "parent": "conteudo",
  "title": "Referências científicas",
  "url": "/blog/[slug]#referencias",
  "type": "ancora",
  "group": "Conteúdos",
  "nav": ["interna"],
  "order": 21,
  "access": "publico",
  "index": true,
  "template": "conteudo",
  "filters": [],
  "components": [],
  "note": "Seção do conteúdo; não criar página."
}, {
  "id": "conteudo_comentarios",
  "parent": "conteudo",
  "title": "Comentários",
  "url": "/blog/[slug]#comentarios",
  "type": "ancora",
  "group": "Conteúdos",
  "nav": ["interna"],
  "order": 22,
  "access": "publico",
  "index": true,
  "template": "conteudo",
  "filters": [],
  "components": [],
  "note": "Leitura pública; envio exige conta e moderação."
}, {
  "id": "risco_detalhe",
  "parent": "riscos",
  "title": "Detalhe do risco cognitivo",
  "url": "/riscos-cognitivos/[slug]",
  "type": "dinamica",
  "group": "Cognição e mapas",
  "nav": ["interna"],
  "order": 23,
  "access": "publico",
  "index": true,
  "template": "risco",
  "filters": [],
  "components": ["descricao", "fatores", "estrategias", "fontes", "mapa_relacionado"],
  "note": "Resolver slug no CMS; 404 para inexistente."
}, {
  "id": "mapas",
  "parent": "mapa",
  "title": "Todos os mapas",
  "url": "/mapas",
  "type": "pagina",
  "group": "Cognição e mapas",
  "nav": ["hamburguer"],
  "order": 24,
  "access": "publico",
  "index": true,
  "template": "catalogo_mapas",
  "filters": ["perfil", "objetivo"],
  "components": ["cards", "busca", "filtros"],
  "note": ""
}, {
  "id": "mapa_neuro",
  "parent": "mapas",
  "title": "Mapa de neurodivergência",
  "url": "/mapas/neurodivergencia",
  "type": "pagina",
  "group": "Cognição e mapas",
  "nav": ["hamburguer"],
  "order": 25,
  "access": "publico",
  "index": true,
  "template": "mapa_interativo",
  "filters": [],
  "components": [],
  "note": ""
}, {
  "id": "mapa_projetos",
  "parent": "mapas",
  "title": "Mapa de projetos e processos",
  "url": "/mapas/projetos-e-processos",
  "type": "pagina",
  "group": "Cognição e mapas",
  "nav": ["hamburguer"],
  "order": 26,
  "access": "publico",
  "index": true,
  "template": "mapa_interativo",
  "filters": [],
  "components": [],
  "note": ""
}, {
  "id": "mapa_detalhe",
  "parent": "mapas",
  "title": "Detalhe de outro mapa",
  "url": "/mapas/[slug]",
  "type": "dinamica",
  "group": "Cognição e mapas",
  "nav": ["interna"],
  "order": 27,
  "access": "publico",
  "index": true,
  "template": "mapa_interativo",
  "filters": [],
  "components": ["exploracao_interativa", "legenda", "detalhes"],
  "note": "Reservar neurodivergencia e projetos-e-processos para as rotas explícitas. Slugs inexistentes retornam 404."
}, {
  "id": "executar_app",
  "parent": "apps",
  "title": "Executar App",
  "url": "/apps/executar",
  "type": "pagina",
  "group": "Apps",
  "nav": ["hamburguer"],
  "order": 28,
  "access": "publico",
  "index": true,
  "template": "produto_app",
  "filters": [],
  "components": ["apresentacao", "funcionalidades", "como_funciona", "cta_acessar"],
  "note": "Substitui o nome Programa Executar."
}, {
  "id": "app_funcoes",
  "parent": "executar_app",
  "title": "Funcionalidades",
  "url": "/apps/executar#funcionalidades",
  "type": "ancora",
  "group": "Apps",
  "nav": ["hamburguer"],
  "order": 29,
  "access": "publico",
  "index": true,
  "template": "produto_app",
  "filters": [],
  "components": [],
  "note": "Seção da página do Executar App."
}, {
  "id": "app_como",
  "parent": "executar_app",
  "title": "Como funciona",
  "url": "/apps/executar#como-funciona",
  "type": "ancora",
  "group": "Apps",
  "nav": ["hamburguer"],
  "order": 30,
  "access": "publico",
  "index": true,
  "template": "produto_app",
  "filters": [],
  "components": [],
  "note": "Seção da página do Executar App."
}, {
  "id": "app_acessar",
  "parent": "executar_app",
  "title": "Acessar Executar App",
  "url": "/apps/executar#acesse",
  "type": "ancora",
  "group": "Apps",
  "nav": ["hamburguer", "cta"],
  "order": 31,
  "access": "publico",
  "index": true,
  "template": "produto_app",
  "filters": [],
  "components": [],
  "note": "Seção com CTA; configurar URL real do aplicativo antes de ativar acesso. Não inventar destino externo."
}, {
  "id": "app_detalhe",
  "parent": "apps",
  "title": "Detalhe de outro app",
  "url": "/apps/[slug]",
  "type": "dinamica",
  "group": "Apps",
  "nav": ["interna"],
  "order": 32,
  "access": "publico",
  "index": true,
  "template": "produto_app",
  "filters": [],
  "components": [],
  "note": "Reservar executar para rota explícita; 404 para slug inexistente."
}, {
  "id": "recurso_ia-agentes",
  "parent": "ferramentas",
  "title": "IA e agentes",
  "url": "/ferramentas?tipo=ia-agentes",
  "type": "filtro",
  "group": "Ferramentas e recursos",
  "nav": ["hamburguer"],
  "order": 33,
  "access": "publico",
  "index": false,
  "template": "catalogo_recursos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade", "tipo"],
  "components": [],
  "note": "Filtrar catálogo existente; canonical /ferramentas."
}, {
  "id": "recurso_skills",
  "parent": "ferramentas",
  "title": "Skills",
  "url": "/ferramentas?tipo=skills",
  "type": "filtro",
  "group": "Ferramentas e recursos",
  "nav": ["hamburguer"],
  "order": 34,
  "access": "publico",
  "index": false,
  "template": "catalogo_recursos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade", "tipo"],
  "components": [],
  "note": "Filtrar catálogo existente; canonical /ferramentas."
}, {
  "id": "recurso_prompts",
  "parent": "ferramentas",
  "title": "Prompts",
  "url": "/ferramentas?tipo=prompts",
  "type": "filtro",
  "group": "Ferramentas e recursos",
  "nav": ["hamburguer"],
  "order": 35,
  "access": "publico",
  "index": false,
  "template": "catalogo_recursos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade", "tipo"],
  "components": [],
  "note": "Filtrar catálogo existente; canonical /ferramentas."
}, {
  "id": "recurso_photoprompts",
  "parent": "ferramentas",
  "title": "Photoprompts",
  "url": "/ferramentas?tipo=photoprompts",
  "type": "filtro",
  "group": "Ferramentas e recursos",
  "nav": ["hamburguer"],
  "order": 36,
  "access": "publico",
  "index": false,
  "template": "catalogo_recursos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade", "tipo"],
  "components": [],
  "note": "Filtrar catálogo existente; canonical /ferramentas."
}, {
  "id": "recurso_workflows",
  "parent": "ferramentas",
  "title": "Workflows",
  "url": "/ferramentas?tipo=workflows",
  "type": "filtro",
  "group": "Ferramentas e recursos",
  "nav": ["hamburguer"],
  "order": 37,
  "access": "publico",
  "index": false,
  "template": "catalogo_recursos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade", "tipo"],
  "components": [],
  "note": "Filtrar catálogo existente; canonical /ferramentas."
}, {
  "id": "recurso_templates",
  "parent": "ferramentas",
  "title": "Templates",
  "url": "/ferramentas?tipo=templates",
  "type": "filtro",
  "group": "Ferramentas e recursos",
  "nav": ["hamburguer"],
  "order": 38,
  "access": "publico",
  "index": false,
  "template": "catalogo_recursos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade", "tipo"],
  "components": [],
  "note": "Filtrar catálogo existente; canonical /ferramentas."
}, {
  "id": "recurso_assets",
  "parent": "ferramentas",
  "title": "Assets",
  "url": "/ferramentas?tipo=assets",
  "type": "filtro",
  "group": "Ferramentas e recursos",
  "nav": ["hamburguer"],
  "order": 39,
  "access": "publico",
  "index": false,
  "template": "catalogo_recursos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade", "tipo"],
  "components": [],
  "note": "Filtrar catálogo existente; canonical /ferramentas."
}, {
  "id": "recurso_ebooks",
  "parent": "ferramentas",
  "title": "E-books",
  "url": "/ferramentas?tipo=ebooks",
  "type": "filtro",
  "group": "Ferramentas e recursos",
  "nav": ["hamburguer"],
  "order": 40,
  "access": "publico",
  "index": false,
  "template": "catalogo_recursos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade", "tipo"],
  "components": [],
  "note": "Filtrar catálogo existente; canonical /ferramentas."
}, {
  "id": "recurso_detalhe",
  "parent": "ferramentas",
  "title": "Detalhe do recurso",
  "url": "/ferramentas/[slug]",
  "type": "dinamica",
  "group": "Ferramentas e recursos",
  "nav": ["interna"],
  "order": 41,
  "access": "publico",
  "index": true,
  "template": "recurso",
  "filters": [],
  "components": ["descricao", "instrucoes", "preview", "acesso_download", "produto_relacionado"],
  "note": "Resolver slug no CMS; controlar permissão de download de recursos pagos."
}, {
  "id": "loja",
  "parent": "inicio",
  "title": "Loja e marketplace",
  "url": "/loja",
  "type": "pagina",
  "group": "Loja e marketplace",
  "nav": ["hamburguer"],
  "order": 42,
  "access": "publico",
  "index": true,
  "template": "catalogo_produtos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade", "categoria"],
  "components": ["busca", "filtros", "cards", "paginacao"],
  "note": ""
}, {
  "id": "loja_digitais",
  "parent": "loja",
  "title": "Produtos digitais",
  "url": "/loja?categoria=digitais",
  "type": "filtro",
  "group": "Loja e marketplace",
  "nav": ["hamburguer"],
  "order": 43,
  "access": "publico",
  "index": false,
  "template": "catalogo_produtos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade", "categoria"],
  "components": [],
  "note": "Filtrar catálogo; canonical /loja. Identificar links de afiliados."
}, {
  "id": "loja_fisicos",
  "parent": "loja",
  "title": "Produtos físicos",
  "url": "/loja?categoria=fisicos",
  "type": "filtro",
  "group": "Loja e marketplace",
  "nav": ["hamburguer"],
  "order": 44,
  "access": "publico",
  "index": false,
  "template": "catalogo_produtos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade", "categoria"],
  "components": [],
  "note": "Filtrar catálogo; canonical /loja. Identificar links de afiliados."
}, {
  "id": "loja_livros",
  "parent": "loja",
  "title": "Livros recomendados",
  "url": "/loja?categoria=livros",
  "type": "filtro",
  "group": "Loja e marketplace",
  "nav": ["hamburguer"],
  "order": 45,
  "access": "publico",
  "index": false,
  "template": "catalogo_produtos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade", "categoria"],
  "components": [],
  "note": "Filtrar catálogo; canonical /loja. Identificar links de afiliados."
}, {
  "id": "loja_cursos",
  "parent": "loja",
  "title": "Cursos",
  "url": "/loja?categoria=cursos",
  "type": "filtro",
  "group": "Loja e marketplace",
  "nav": ["hamburguer"],
  "order": 46,
  "access": "publico",
  "index": false,
  "template": "catalogo_produtos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade", "categoria"],
  "components": [],
  "note": "Filtrar catálogo; canonical /loja. Identificar links de afiliados."
}, {
  "id": "loja_afiliados",
  "parent": "loja",
  "title": "Parceiros e afiliados",
  "url": "/loja?categoria=afiliados",
  "type": "filtro",
  "group": "Loja e marketplace",
  "nav": ["hamburguer"],
  "order": 47,
  "access": "publico",
  "index": false,
  "template": "catalogo_produtos",
  "filters": ["perfil", "objetivo", "formato", "tecnologia", "disponibilidade", "categoria"],
  "components": [],
  "note": "Filtrar catálogo; canonical /loja. Identificar links de afiliados."
}, {
  "id": "produto",
  "parent": "loja",
  "title": "Detalhe do produto",
  "url": "/loja/[slug]",
  "type": "dinamica",
  "group": "Loja e marketplace",
  "nav": ["interna"],
  "order": 48,
  "access": "publico",
  "index": true,
  "template": "produto",
  "filters": [],
  "components": ["descricao", "imagens", "preco", "cta_compra"],
  "note": "Configurar checkout ou destino afiliado real; não inventar integração de pagamento."
}, {
  "id": "comunidade",
  "parent": "inicio",
  "title": "Comunidade",
  "url": "/comunidade",
  "type": "pagina",
  "group": "Comunidade",
  "nav": ["hamburguer"],
  "order": 49,
  "access": "publico",
  "index": true,
  "template": "comunidade",
  "filters": [],
  "components": ["busca", "categorias", "topicos"],
  "note": ""
}, {
  "id": "comunidade_discussoes",
  "parent": "comunidade",
  "title": "Discussões",
  "url": "/comunidade?tipo=discussoes",
  "type": "filtro",
  "group": "Comunidade",
  "nav": ["hamburguer"],
  "order": 50,
  "access": "publico",
  "index": false,
  "template": "comunidade",
  "filters": ["tipo"],
  "components": [],
  "note": "Filtrar comunidade; canonical /comunidade. Leitura pública; participação exige conta e moderação."
}, {
  "id": "comunidade_perguntas",
  "parent": "comunidade",
  "title": "Perguntas e respostas",
  "url": "/comunidade?tipo=perguntas",
  "type": "filtro",
  "group": "Comunidade",
  "nav": ["hamburguer"],
  "order": 51,
  "access": "publico",
  "index": false,
  "template": "comunidade",
  "filters": ["tipo"],
  "components": [],
  "note": "Filtrar comunidade; canonical /comunidade. Leitura pública; participação exige conta e moderação."
}, {
  "id": "comunidade_compartilhamentos",
  "parent": "comunidade",
  "title": "Compartilhamentos",
  "url": "/comunidade?tipo=compartilhamentos",
  "type": "filtro",
  "group": "Comunidade",
  "nav": ["hamburguer"],
  "order": 52,
  "access": "publico",
  "index": false,
  "template": "comunidade",
  "filters": ["tipo"],
  "components": [],
  "note": "Filtrar comunidade; canonical /comunidade. Leitura pública; participação exige conta e moderação."
}, {
  "id": "comunidade_sugestoes",
  "parent": "comunidade",
  "title": "Sugestões e ideias",
  "url": "/comunidade?tipo=sugestoes",
  "type": "filtro",
  "group": "Comunidade",
  "nav": ["hamburguer"],
  "order": 53,
  "access": "publico",
  "index": false,
  "template": "comunidade",
  "filters": ["tipo"],
  "components": [],
  "note": "Filtrar comunidade; canonical /comunidade. Leitura pública; participação exige conta e moderação."
}, {
  "id": "topico",
  "parent": "comunidade",
  "title": "Tópico da comunidade",
  "url": "/comunidade/topicos/[slug]",
  "type": "dinamica",
  "group": "Comunidade",
  "nav": ["interna"],
  "order": 54,
  "access": "publico",
  "index": true,
  "template": "topico",
  "filters": [],
  "components": ["publicacao", "respostas", "denunciar"],
  "note": "Leitura pública; publicar e responder exige conta."
}, {
  "id": "studio",
  "parent": "inicio",
  "title": "Consultoria e Studio",
  "url": "/studio",
  "type": "pagina",
  "group": "Consultoria e Studio",
  "nav": ["hamburguer"],
  "order": 55,
  "access": "publico",
  "index": true,
  "template": "servicos",
  "filters": [],
  "components": [],
  "note": ""
}, {
  "id": "consultoria",
  "parent": "studio",
  "title": "Consultoria",
  "url": "/studio/consultoria",
  "type": "pagina",
  "group": "Consultoria e Studio",
  "nav": ["hamburguer"],
  "order": 56,
  "access": "publico",
  "index": true,
  "template": "servico",
  "filters": [],
  "components": [],
  "note": ""
}, {
  "id": "studio_servicos",
  "parent": "studio",
  "title": "Studio",
  "url": "/studio/servicos",
  "type": "pagina",
  "group": "Consultoria e Studio",
  "nav": ["hamburguer"],
  "order": 57,
  "access": "publico",
  "index": true,
  "template": "servicos",
  "filters": [],
  "components": [],
  "note": ""
}, {
  "id": "cases",
  "parent": "studio",
  "title": "Projetos e casos",
  "url": "/studio/projetos",
  "type": "pagina",
  "group": "Consultoria e Studio",
  "nav": ["hamburguer"],
  "order": 58,
  "access": "publico",
  "index": true,
  "template": "catalogo_projetos",
  "filters": [],
  "components": [],
  "note": ""
}, {
  "id": "case",
  "parent": "cases",
  "title": "Detalhe do projeto",
  "url": "/studio/projetos/[slug]",
  "type": "dinamica",
  "group": "Consultoria e Studio",
  "nav": ["interna"],
  "order": 59,
  "access": "publico",
  "index": true,
  "template": "case",
  "filters": [],
  "components": [],
  "note": ""
}, {
  "id": "briefing",
  "parent": "studio",
  "title": "Contato e briefing",
  "url": "/studio/briefing",
  "type": "pagina",
  "group": "Consultoria e Studio",
  "nav": ["hamburguer"],
  "order": 60,
  "access": "publico",
  "index": true,
  "template": "formulario",
  "filters": [],
  "components": ["formulario", "consentimento", "confirmacao"],
  "note": "Validar formulário e configurar destino no CMS."
}, {
  "id": "busca",
  "parent": "inicio",
  "title": "Busca",
  "url": "/busca",
  "type": "pagina",
  "group": "Utilidades",
  "nav": ["utilitario", "hamburguer"],
  "order": 61,
  "access": "publico",
  "index": false,
  "template": "busca_global",
  "filters": ["q", "tipo"],
  "components": ["campo_busca", "resultados", "paginacao"],
  "note": "Usar ?q=termo; pesquisar conteúdos públicos; não indexar resultados."
}, {
  "id": "conta",
  "parent": "inicio",
  "title": "Minha conta",
  "url": "/minha-conta",
  "type": "pagina",
  "group": "Utilidades",
  "nav": ["utilitario", "hamburguer"],
  "order": 62,
  "access": "autenticado",
  "index": false,
  "template": "conta",
  "filters": [],
  "components": [],
  "note": "Exigir sessão no servidor."
}, {
  "id": "login",
  "parent": "conta",
  "title": "Entrar",
  "url": "/entrar",
  "type": "pagina",
  "group": "Utilidades",
  "nav": ["interna"],
  "order": 63,
  "access": "publico",
  "index": false,
  "template": "autenticacao",
  "filters": [],
  "components": [],
  "note": "Restringir returnTo a rotas internas válidas."
}, {
  "id": "newsletter",
  "parent": "inicio",
  "title": "Newsletter",
  "url": "/newsletter",
  "type": "pagina",
  "group": "Utilidades",
  "nav": ["hamburguer", "rodape"],
  "order": 64,
  "access": "publico",
  "index": true,
  "template": "formulario",
  "filters": [],
  "components": ["email", "consentimento", "confirmacao"],
  "note": "Permitir inscrição também na home."
}, {
  "id": "contato",
  "parent": "inicio",
  "title": "Contato",
  "url": "/contato",
  "type": "pagina",
  "group": "Utilidades",
  "nav": ["hamburguer", "rodape"],
  "order": 65,
  "access": "publico",
  "index": true,
  "template": "formulario",
  "filters": [],
  "components": [],
  "note": ""
}, {
  "id": "redes",
  "parent": "contato",
  "title": "Redes sociais",
  "url": "/contato#redes-sociais",
  "type": "ancora",
  "group": "Utilidades",
  "nav": ["hamburguer", "rodape"],
  "order": 66,
  "access": "publico",
  "index": true,
  "template": "formulario",
  "filters": [],
  "components": [],
  "note": "Cadastrar destinos reais no CMS; não criar páginas locais para cada rede."
}, {
  "id": "admin",
  "parent": "inicio",
  "title": "Administração",
  "url": "/admin",
  "type": "pagina",
  "group": "Administração",
  "nav": ["admin"],
  "order": 67,
  "access": "administrador",
  "index": false,
  "template": "admin",
  "filters": [],
  "components": [],
  "note": "Exigir sessão e papel administrador no servidor. Nunca exibir em navegação pública."
}, {
  "id": "admin_paginas",
  "parent": "admin",
  "title": "Páginas e textos",
  "url": "/admin/paginas",
  "type": "pagina",
  "group": "Administração",
  "nav": ["admin"],
  "order": 68,
  "access": "administrador",
  "index": false,
  "template": "admin_crud",
  "filters": [],
  "components": [],
  "note": "Proteger leitura e escrita no servidor por papel. Segredos de integrações apenas no servidor."
}, {
  "id": "admin_conteudos",
  "parent": "admin",
  "title": "Conteúdos e referências",
  "url": "/admin/conteudos",
  "type": "pagina",
  "group": "Administração",
  "nav": ["admin"],
  "order": 69,
  "access": "administrador",
  "index": false,
  "template": "admin_crud",
  "filters": [],
  "components": [],
  "note": "Proteger leitura e escrita no servidor por papel. Segredos de integrações apenas no servidor."
}, {
  "id": "admin_mapas",
  "parent": "admin",
  "title": "Mapas",
  "url": "/admin/mapas",
  "type": "pagina",
  "group": "Administração",
  "nav": ["admin"],
  "order": 70,
  "access": "administrador",
  "index": false,
  "template": "admin_crud",
  "filters": [],
  "components": [],
  "note": "Proteger leitura e escrita no servidor por papel. Segredos de integrações apenas no servidor."
}, {
  "id": "admin_apps",
  "parent": "admin",
  "title": "Apps",
  "url": "/admin/apps",
  "type": "pagina",
  "group": "Administração",
  "nav": ["admin"],
  "order": 71,
  "access": "administrador",
  "index": false,
  "template": "admin_crud",
  "filters": [],
  "components": [],
  "note": "Proteger leitura e escrita no servidor por papel. Segredos de integrações apenas no servidor."
}, {
  "id": "admin_recursos",
  "parent": "admin",
  "title": "Ferramentas e recursos",
  "url": "/admin/recursos",
  "type": "pagina",
  "group": "Administração",
  "nav": ["admin"],
  "order": 72,
  "access": "administrador",
  "index": false,
  "template": "admin_crud",
  "filters": [],
  "components": [],
  "note": "Proteger leitura e escrita no servidor por papel. Segredos de integrações apenas no servidor."
}, {
  "id": "admin_produtos",
  "parent": "admin",
  "title": "Produtos e afiliados",
  "url": "/admin/produtos",
  "type": "pagina",
  "group": "Administração",
  "nav": ["admin"],
  "order": 73,
  "access": "administrador",
  "index": false,
  "template": "admin_crud",
  "filters": [],
  "components": [],
  "note": "Proteger leitura e escrita no servidor por papel. Segredos de integrações apenas no servidor."
}, {
  "id": "admin_taxonomias",
  "parent": "admin",
  "title": "Categorias e filtros",
  "url": "/admin/taxonomias",
  "type": "pagina",
  "group": "Administração",
  "nav": ["admin"],
  "order": 74,
  "access": "administrador",
  "index": false,
  "template": "admin_crud",
  "filters": [],
  "components": [],
  "note": "Proteger leitura e escrita no servidor por papel. Segredos de integrações apenas no servidor."
}, {
  "id": "admin_moderacao",
  "parent": "admin",
  "title": "Comentários e comunidade",
  "url": "/admin/moderacao",
  "type": "pagina",
  "group": "Administração",
  "nav": ["admin"],
  "order": 75,
  "access": "administrador",
  "index": false,
  "template": "admin_crud",
  "filters": [],
  "components": [],
  "note": "Proteger leitura e escrita no servidor por papel. Segredos de integrações apenas no servidor."
}, {
  "id": "admin_formularios",
  "parent": "admin",
  "title": "Formulários e inscrições",
  "url": "/admin/formularios",
  "type": "pagina",
  "group": "Administração",
  "nav": ["admin"],
  "order": 76,
  "access": "administrador",
  "index": false,
  "template": "admin_crud",
  "filters": [],
  "components": [],
  "note": "Proteger leitura e escrita no servidor por papel. Segredos de integrações apenas no servidor."
}, {
  "id": "admin_integracoes",
  "parent": "admin",
  "title": "Integrações e webhooks",
  "url": "/admin/integracoes",
  "type": "pagina",
  "group": "Administração",
  "nav": ["admin"],
  "order": 77,
  "access": "administrador",
  "index": false,
  "template": "admin_crud",
  "filters": [],
  "components": [],
  "note": "Proteger leitura e escrita no servidor por papel. Segredos de integrações apenas no servidor."
}, {
  "id": "admin_parceiros",
  "parent": "admin",
  "title": "Parceiros e redes sociais",
  "url": "/admin/parceiros",
  "type": "pagina",
  "group": "Administração",
  "nav": ["admin"],
  "order": 78,
  "access": "administrador",
  "index": false,
  "template": "admin_crud",
  "filters": [],
  "components": [],
  "note": "Proteger leitura e escrita no servidor por papel. Segredos de integrações apenas no servidor."
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecossistema/routes.js", error: String((e && e.message) || e) }); }

// ui_kits/ecossistema/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecossistema/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/App.jsx
try { (() => {
const {
  NavBar,
  Button
} = window.RiscoCognitivoDesignSystem_fab0ba;
function App() {
  const [page, setPage] = React.useState(() => localStorage.getItem('rc-page') || 'home');
  const go = p => {
    setPage(p);
    localStorage.setItem('rc-page', p);
    window.scrollTo(0, 0);
  };
  const links = [{
    id: 'explore',
    label: 'Explorar'
  }, {
    id: 'topic',
    label: 'Funções executivas'
  }, {
    id: 'topic2',
    label: 'Neurobiologia'
  }, {
    id: 'assess',
    label: 'Riscos'
  }].map(l => ({
    ...l,
    current: l.id === page
  }));
  const Screen = {
    home: window.Home,
    explore: window.Explore,
    topic: window.Topic,
    assess: window.Assessment
  }[page] || window.Home;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavBar, {
    logoSrc: "../../assets/logo/brain-mark.png",
    links: links,
    onBrandClick: () => go('home'),
    onNavigate: l => go(l.id === 'topic2' ? 'explore' : l.id),
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => go('assess')
    }, "Avaliar")
  }), /*#__PURE__*/React.createElement("main", {
    "data-screen-label": page
  }, /*#__PURE__*/React.createElement(Screen, {
    go: go
  })), /*#__PURE__*/React.createElement("footer", {
    style: {
      maxWidth: 'var(--layout-column)',
      margin: '0 auto',
      padding: 'var(--space-6) var(--layout-edge) var(--space-8)',
      fontSize: 'var(--text-micro)',
      lineHeight: 1.33,
      color: 'var(--color-text-muted)',
      borderTop: '1px solid var(--color-divider)'
    }
  }, "Conte\xFAdo educativo. N\xE3o substitui avalia\xE7\xE3o cl\xEDnica. \xA9 2026 Risco Cognitivo."));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Assessment.jsx
try { (() => {
const {
  Button,
  RadioGroup,
  Dialog,
  Tag,
  TextField
} = window.RiscoCognitivoDesignSystem_fab0ba;
function Assessment({
  go
}) {
  const qs = window.RC_DATA.questions;
  const [i, setI] = React.useState(0);
  const [ans, setAns] = React.useState({});
  const [done, setDone] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const score = Object.values(ans).reduce((a, b) => a + b, 0);
  const level = score <= 2 ? ['Baixo risco', 'success'] : score <= 5 ? ['Atenção', 'warning'] : ['Risco alto', 'danger'];
  const q = qs[i];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      margin: '0 auto',
      padding: 'var(--space-16) var(--layout-edge) var(--layout-band)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h6", {
    style: {
      margin: 0
    }
  }, "Pergunta ", i + 1, " de ", qs.length), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 980,
      background: 'var(--color-surface)',
      marginTop: 'var(--space-3)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: (i + (ans[i] !== undefined ? 1 : 0)) / qs.length * 100 + '%',
      background: 'var(--color-accent)',
      transition: 'width var(--duration-base) var(--ease-standard)'
    }
  }))), /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: 'center',
      marginTop: 'var(--space-12)'
    }
  }, q.q), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(RadioGroup, {
    key: i,
    name: 'q' + i,
    value: ans[i] !== undefined ? String(ans[i]) : '',
    onChange: v => setAns({
      ...ans,
      [i]: Number(v)
    }),
    options: q.opts.map((o, k) => ({
      value: String(k),
      label: o
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    disabled: i === 0,
    onClick: () => setI(i - 1)
  }, "Voltar"), /*#__PURE__*/React.createElement(Button, {
    disabled: ans[i] === undefined,
    onClick: () => i < qs.length - 1 ? setI(i + 1) : setDone(true)
  }, i < qs.length - 1 ? 'Continuar' : 'Ver resultado')), /*#__PURE__*/React.createElement(Dialog, {
    open: done,
    onClose: () => setDone(false),
    title: saved ? 'Resultado salvo.' : 'Seu perfil está pronto.',
    actions: saved ? /*#__PURE__*/React.createElement(Button, {
      onClick: () => go('home')
    }, "Voltar ao in\xEDcio") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => go('topic')
    }, "Ver estrat\xE9gias"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setSaved(true)
    }, "Salvar resultado"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    tone: level[1]
  }, level[0])), /*#__PURE__*/React.createElement("span", null, saved ? 'Enviamos um resumo para o seu e-mail.' : 'Com base nas respostas, seu controle executivo merece ' + (level[1] === 'success' ? 'manutenção.' : 'atenção nas situações de pressão.')), !saved && /*#__PURE__*/React.createElement(TextField, {
    label: "E-mail",
    type: "email",
    placeholder: "voce@exemplo.com"
  }))));
}
window.Assessment = Assessment;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Assessment.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Explore.jsx
try { (() => {
const {
  Button,
  Card,
  SegmentedControl,
  Tag
} = window.RiscoCognitivoDesignSystem_fab0ba;
function Explore({
  go
}) {
  const regions = window.RC_DATA.regions;
  const [sel, setSel] = React.useState('frontal');
  const r = regions.find(x => x.id === sel);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-column)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--layout-edge) var(--layout-band)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0
    }
  }, "Mapa do c\xE9rebro."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-card)',
      lineHeight: 1.19,
      color: 'var(--color-text-muted)',
      margin: 'var(--space-3) auto 0',
      maxWidth: '44ch'
    }
  }, "Toque em uma regi\xE3o para ver o que ela faz \u2014 e o que pode dar errado."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    name: "view",
    ariaLabel: "Vista",
    options: [{
      value: 'lat',
      label: 'Lateral'
    }, {
      value: 'sup',
      label: 'Superior'
    }, {
      value: 'med',
      label: 'Medial'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
      gap: 'var(--space-12)',
      alignItems: 'center',
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      maxWidth: 480,
      width: '100%',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "blend",
    src: "../../assets/logo/brain-mark.png",
    alt: "C\xE9rebro",
    style: {
      width: '100%',
      height: '100%'
    }
  }), regions.map(x => /*#__PURE__*/React.createElement("button", {
    key: x.id,
    "aria-label": x.name,
    onClick: () => setSel(x.id),
    style: {
      position: 'absolute',
      left: x.x + '%',
      top: x.y + '%',
      width: 28,
      height: 28,
      marginLeft: -14,
      marginTop: -14,
      borderRadius: '50%',
      border: '2px solid #fff',
      background: sel === x.id ? 'var(--color-accent)' : 'rgba(29,29,31,0.55)',
      boxShadow: sel === x.id ? '0 0 0 6px color-mix(in srgb, var(--color-accent) 25%, transparent)' : 'none',
      cursor: 'pointer',
      transition: 'all var(--duration-base) var(--ease-standard)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, regions.map(x => /*#__PURE__*/React.createElement(Card, {
    key: x.id,
    interactive: true,
    onClick: () => setSel(x.id),
    style: {
      boxShadow: sel === x.id ? 'inset 0 0 0 2px var(--color-accent)' : 'none'
    },
    kicker: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: x.color
      }
    }), x.fn),
    title: x.name,
    body: sel === x.id ? x.body : null
  }, sel === x.id && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginTop: 'var(--space-2)'
    }
  }, x.risks.map(k => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    tone: "warning"
  }, k)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconAfter: /*#__PURE__*/React.createElement("i", {
      className: "ph ph-caret-right"
    }),
    onClick: e => {
      e.stopPropagation();
      go('topic');
    }
  }, "Fun\xE7\xF5es ligadas")))))));
}
window.Explore = Explore;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Explore.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Home.jsx
try { (() => {
const {
  Button,
  PromoTile,
  TextField
} = window.RiscoCognitivoDesignSystem_fab0ba;
const caret = /*#__PURE__*/React.createElement("i", {
  className: "ph ph-caret-right",
  style: {
    fontSize: 14
  }
});
const wrap = {
  maxWidth: 'var(--layout-column)',
  margin: '0 auto',
  padding: '0 var(--layout-edge)'
};
const display = {
  fontFamily: 'var(--font-heading)',
  fontWeight: 600,
  fontSize: 'clamp(44px, 7vw, 80px)',
  lineHeight: 1.05,
  letterSpacing: '-0.015em',
  margin: 0
};
const sub = {
  fontSize: 'clamp(19px, 2.2vw, 28px)',
  lineHeight: 1.19,
  letterSpacing: '0.011em',
  color: 'var(--color-text-muted)',
  maxWidth: '48ch',
  margin: 'var(--space-4) auto 0'
};
const sectionTitle = {
  fontFamily: 'var(--font-heading)',
  fontWeight: 600,
  fontSize: 'var(--text-title)',
  lineHeight: 1.1,
  letterSpacing: '-0.003em',
  margin: 0,
  textAlign: 'center'
};
const row = {
  display: 'flex',
  gap: 'var(--space-4)',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: 'var(--space-6)'
};
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      textAlign: 'center',
      padding: 'var(--layout-band) 0 var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: display
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "Pense antes."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "Decida melhor.")), /*#__PURE__*/React.createElement("p", {
    style: sub
  }, "Entenda como o c\xE9rebro planeja, inibe e decide \u2014 e onde est\xE3o os riscos de cada processo cognitivo."), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('explore')
  }, "Explorar o c\xE9rebro"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconAfter: caret,
    onClick: () => go('topic')
  }, "Ver fun\xE7\xF5es executivas")), /*#__PURE__*/React.createElement("img", {
    className: "blend",
    src: "../../assets/logo/brain-mark.png",
    alt: "Ilustra\xE7\xE3o do c\xE9rebro em tr\xEAs lobos",
    style: {
      width: 'min(420px, 80%)',
      margin: 'var(--space-12) auto 0'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-section)',
      color: 'var(--color-on-section)',
      padding: 'var(--space-16) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'clamp(24px, 3vw, 40px)',
      lineHeight: 1.15,
      letterSpacing: '-0.005em',
      maxWidth: '28ch',
      margin: '0 auto'
    }
  }, "Toda decis\xE3o passa por tr\xEAs filtros: aten\xE7\xE3o, mem\xF3ria e controle."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-card)',
      lineHeight: 1.19,
      color: 'color-mix(in srgb, var(--color-on-section) 64%, transparent)',
      margin: 'var(--space-4) auto 0',
      maxWidth: '44ch'
    }
  }, "Quando um deles falha, o risco cognitivo aumenta."))), /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--layout-band) 0 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: sectionTitle
  }, "Quatro caminhos. Um mesmo c\xE9rebro."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(PromoTile, {
    kicker: "01",
    title: "Fun\xE7\xF5es executivas",
    body: "Planejar, inibir, alternar.",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconAfter: caret,
      onClick: () => go('topic')
    }, "Saiba mais")
  }), /*#__PURE__*/React.createElement(PromoTile, {
    kicker: "02",
    title: "Neurobiologia",
    body: "As regi\xF5es por tr\xE1s de cada fun\xE7\xE3o.",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconAfter: caret,
      onClick: () => go('explore')
    }, "Explorar")
  }), /*#__PURE__*/React.createElement(PromoTile, {
    kicker: "03",
    title: "Habilidades cognitivas",
    body: "Aten\xE7\xE3o, mem\xF3ria e linguagem.",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconAfter: caret,
      onClick: () => go('topic')
    }, "Saiba mais")
  }), /*#__PURE__*/React.createElement(PromoTile, {
    kicker: "04",
    title: "Gest\xE3o de riscos",
    body: "Estrat\xE9gias para decidir sob press\xE3o.",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconAfter: caret,
      onClick: () => go('assess')
    }, "Avaliar")
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--layout-band) 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-title)',
      lineHeight: 1.1,
      letterSpacing: '-0.003em',
      margin: 0
    }
  }, "Conhe\xE7a seu perfil cognitivo."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-card)',
      lineHeight: 1.19,
      color: 'var(--color-text-muted)',
      maxWidth: '48ch',
      margin: 'var(--space-3) auto 0'
    }
  }, "Quatro perguntas, dois minutos. Resultados s\xF3 para voc\xEA."), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('assess')
  }, "Come\xE7ar avalia\xE7\xE3o")))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Topic.jsx
try { (() => {
const {
  Button,
  Card,
  Table,
  Tag
} = window.RiscoCognitivoDesignSystem_fab0ba;
function Topic({
  go
}) {
  const fns = window.RC_DATA.functions;
  const measure = {
    maxWidth: 680,
    margin: '0 auto'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-16) var(--layout-edge) 0'
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: measure
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "accent"
  }, "Fun\xE7\xF5es executivas"), /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, "6 min de leitura")), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, "Controle inibit\xF3rio."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-card)',
      lineHeight: 1.19,
      color: 'var(--color-text-muted)'
    }
  }, "A capacidade de n\xE3o fazer \u2014 e por que ela protege quase todas as suas decis\xF5es."), /*#__PURE__*/React.createElement("img", {
    className: "blend",
    src: "../../assets/illustrations/brain-mono.svg",
    alt: "",
    style: {
      width: 280,
      margin: 'var(--space-12) auto'
    }
  }), /*#__PURE__*/React.createElement("h4", null, "O que \xE9"), /*#__PURE__*/React.createElement("p", null, "O controle inibit\xF3rio permite interromper uma resposta autom\xE1tica para escolher a mais adequada. Ele depende de uma rede que envolve o giro frontal inferior direito e os n\xFAcleos da base."), /*#__PURE__*/React.createElement("h4", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, "Onde surge o risco"), /*#__PURE__*/React.createElement("p", null, "Fadiga, estresse e priva\xE7\xE3o de sono reduzem a efici\xEAncia dessa rede. O resultado s\xE3o decis\xF5es mais r\xE1pidas, menos ponderadas e mais suscet\xEDveis a vieses."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-8) 0'
    }
  }, /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: 'f',
      label: 'Fator'
    }, {
      key: 'e',
      label: 'Efeito'
    }, {
      key: 'n',
      label: 'Nível',
      render: r => /*#__PURE__*/React.createElement(Tag, {
        tone: r.t
      }, r.n)
    }],
    rows: [{
      f: 'Privação de sono',
      e: 'Respostas impulsivas',
      n: 'Alto',
      t: 'danger'
    }, {
      f: 'Multitarefa',
      e: 'Mais erros de omissão',
      n: 'Moderado',
      t: 'warning'
    }, {
      f: 'Pausas regulares',
      e: 'Recuperação do controle',
      n: 'Protetor',
      t: 'success'
    }]
  })), /*#__PURE__*/React.createElement("h4", null, "Estrat\xE9gias"), /*#__PURE__*/React.createElement("p", null, "Crie atrasos deliberados antes de decis\xF5es relevantes, reduza est\xEDmulos concorrentes e transforme regras em listas externas \u2014 assim a mem\xF3ria de trabalho fica livre para pensar."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('assess')
  }, "Avaliar meu controle"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconAfter: /*#__PURE__*/React.createElement("i", {
      className: "ph ph-caret-right",
      style: {
        fontSize: 14
      }
    }),
    onClick: () => go('explore')
  }, "Ver no mapa")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-surface)',
      marginTop: 'var(--layout-band)',
      padding: 'var(--space-16) var(--layout-edge)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-column)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: 'center',
      margin: 0
    }
  }, "Continue explorando."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-12)'
    }
  }, fns.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.id,
    interactive: true,
    kicker: f.kicker,
    title: f.title,
    body: f.body,
    meta: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-clock"
    }), /*#__PURE__*/React.createElement("span", null, f.time)),
    style: {
      background: 'var(--color-bg)'
    },
    onClick: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }))))));
}
window.Topic = Topic;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Topic.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/data.js
try { (() => {
window.RC_DATA = {
  regions: [{
    id: 'frontal',
    name: 'Lobo frontal',
    color: 'var(--brain-blue)',
    x: 30,
    y: 32,
    fn: 'Planejamento, inibição, memória de trabalho',
    body: 'Sede do córtex pré-frontal, o maestro das funções executivas. Organiza metas, segura impulsos e mantém informações ativas enquanto você decide.',
    risks: ['Impulsividade', 'Sobrecarga de decisões']
  }, {
    id: 'parietal',
    name: 'Lobo parietal',
    color: 'var(--brain-pink)',
    x: 74,
    y: 40,
    fn: 'Atenção espacial, integração sensorial',
    body: 'Integra o que você vê, toca e sente em um mapa coerente do espaço. Direciona a atenção para o que importa no ambiente.',
    risks: ['Desatenção seletiva']
  }, {
    id: 'temporal',
    name: 'Lobo temporal',
    color: 'var(--brain-yellow)',
    x: 48,
    y: 64,
    fn: 'Memória, linguagem, emoção',
    body: 'Abriga o hipocampo e a amígdala. Consolida memórias e atribui peso emocional às experiências — o que influencia cada escolha.',
    risks: ['Viés emocional', 'Falhas de memória']
  }],
  functions: [{
    id: 'inib',
    kicker: 'Função executiva',
    title: 'Controle inibitório',
    body: 'Frear uma resposta automática para escolher a mais adequada.',
    time: '6 min'
  }, {
    id: 'mem',
    kicker: 'Função executiva',
    title: 'Memória de trabalho',
    body: 'Manter e manipular informações por alguns segundos.',
    time: '7 min'
  }, {
    id: 'flex',
    kicker: 'Função executiva',
    title: 'Flexibilidade cognitiva',
    body: 'Trocar de estratégia quando o contexto muda.',
    time: '8 min'
  }],
  questions: [{
    q: 'Começo tarefas sem planejar as etapas.',
    opts: ['Raramente', 'Às vezes', 'Com frequência']
  }, {
    q: 'Perco o fio de uma conversa quando há distrações.',
    opts: ['Raramente', 'Às vezes', 'Com frequência']
  }, {
    q: 'Tenho dificuldade em mudar de abordagem quando algo não funciona.',
    opts: ['Raramente', 'Às vezes', 'Com frequência']
  }, {
    q: 'Tomo decisões importantes sob pressão de tempo.',
    opts: ['Raramente', 'Às vezes', 'Com frequência']
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.PromoTile = __ds_scope.PromoTile;

})();
