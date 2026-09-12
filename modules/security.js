export const MAX_SOURCE_BYTES=100000;
const blocked=/<\/?(?:script|iframe|object|embed|foreignObject)\b|\bon\w+\s*=|(?:javascript|data\s*:\s*text\/html)\s*:/i;
export function validateMermaidSource(value,{origin='input'}={}){
 const source=String(value??'').replace(/\u0000/g,'').trim();
 if(!source)throw new Error('Diagram source is empty.');
 if(new TextEncoder().encode(source).byteLength>MAX_SOURCE_BYTES)throw new Error('Diagram is too large (maximum 100 KB).');
 if(blocked.test(source))throw new Error(`Unsafe content blocked in ${origin}.`);
 if(!/^(?:---[\s\S]*?---\s*)?(?:flowchart|graph|sequenceDiagram|stateDiagram(?:-v2)?|classDiagram|erDiagram|gantt|pie|journey|gitGraph|mindmap|timeline|quadrantChart|xychart-beta|sankey-beta|block-beta|architecture-beta|packet-beta|kanban|requirementDiagram|C4\w*)\b/i.test(source))throw new Error('Unsupported or missing Mermaid diagram type.');
 return source;
}
export function decodeSmartLink(hash){
 const encoded=new URLSearchParams(String(hash).replace(/^#/,'')).get('diagram');
 if(!encoded)return null;
 if(encoded.length>140000)throw new Error('Shared diagram URL is too large.');
 const normalized=encoded.replaceAll('-','+').replaceAll('_','/');
 const padded=normalized+'='.repeat((4-normalized.length%4)%4);
 const binary=atob(padded);const bytes=Uint8Array.from(binary,c=>c.charCodeAt(0));
 return validateMermaidSource(new TextDecoder().decode(bytes),{origin:'smart link'});
}