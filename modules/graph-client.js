import {graphReport} from './graph-analysis.js';
let worker,sequence=0,pending=new Map();
function reportFrom(r){return `Graph health
────────────
Nodes: ${r.nodes}
Connections: ${r.connections}
Orphans: ${r.orphan.length?r.orphan.join(', '):'none'}
Dead ends: ${r.dead.length?r.dead.join(', '):'none'}
Cycle detected: ${r.cycle?'yes':'no'}
Complexity: ${r.complexity}

Suggestion: ${r.orphan.length?'connect or remove orphan nodes':r.dead.length>2?'review terminal states':r.complexity==='high'?'isolate branches before editing':'structure looks consistent'}`}
export function graphReportAsync(source){
 if(!('Worker'in globalThis))return Promise.resolve(graphReport(source));
 worker??=new Worker(new URL('../workers/graph-worker.js',import.meta.url),{type:'module'});
 worker.onmessage=event=>{const task=pending.get(event.data.id);if(!task)return;pending.delete(event.data.id);event.data.error?task.reject(new Error(event.data.error)):task.resolve(reportFrom(event.data.result))};
 const id=++sequence;return new Promise((resolve,reject)=>{pending.set(id,{resolve,reject});worker.postMessage({id,source})});
}