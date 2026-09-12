import {validateMermaidSource} from './security.js';
export function safeEditorSource(value,origin='editor'){return validateMermaidSource(value,{origin})}
export function mermaidNodeById(root,id){const escaped=CSS.escape(String(id));return root.querySelector(`.node[data-id="${escaped}"],[data-id="${escaped}"].node`)}
export function renderedNodeId(node){return node?.getAttribute('data-id')||node?.dataset?.id||null}