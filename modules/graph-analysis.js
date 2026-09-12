const NODE=/^\s*([A-Za-z][\w-]*)\s*(?:\[|\(|\{|>)/gm;
const EDGE=/([A-Za-z][\w-]*)\s*(?:-->|---|-.->|==>)\s*(?:\|[^|]*\|\s*)?([A-Za-z][\w-]*)/g;
export function analyzeGraph(source){
 const ids=new Set(),targets=new Set(),starts=new Set(),edges=[];let m;
 while((m=NODE.exec(source)))ids.add(m[1]);
 while((m=EDGE.exec(source))){ids.add(m[1]);ids.add(m[2]);starts.add(m[1]);targets.add(m[2]);edges.push([m[1],m[2]])}
 const adjacency=new Map([...ids].map(id=>[id,[]]));for(const [a,b] of edges)adjacency.get(a).push(b);
 const state=new Map([...ids].map(id=>[id,0]));let cycle=false;
 for(const root of ids){if(state.get(root)!==0)continue;const stack=[[root,0]];state.set(root,1);while(stack.length){const frame=stack[stack.length-1],next=adjacency.get(frame[0]);if(frame[1]>=next.length){state.set(frame[0],2);stack.pop();continue}const child=next[frame[1]++],s=state.get(child);if(s===1){cycle=true;continue}if(s===0){state.set(child,1);stack.push([child,0])}}}
 const orphan=[...ids].filter(x=>!starts.has(x)&&!targets.has(x));
 const dead=[...ids].filter(x=>targets.has(x)&&!starts.has(x));
 return {nodes:ids.size,connections:edges.length,orphan,dead,cycle,complexity:edges.length>5000?'high':edges.length>1000?'medium':'normal'};
}
export function graphReport(source){
 const r=analyzeGraph(source);return `Graph health
────────────
Nodes: ${r.nodes}
Connections: ${r.connections}
Orphans: ${r.orphan.length?r.orphan.join(', '):'none'}
Dead ends: ${r.dead.length?r.dead.join(', '):'none'}
Cycle detected: ${r.cycle?'yes':'no'}
Complexity: ${r.complexity}

Suggestion: ${r.orphan.length?'connect or remove orphan nodes':r.dead.length>2?'review terminal states':r.complexity==='high'?'isolate branches before editing':'structure looks consistent'}`;
}