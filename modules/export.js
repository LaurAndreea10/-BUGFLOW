export function svgDimensions(svg){
 const vb=svg.viewBox?.baseVal;if(vb?.width&&vb?.height)return {width:vb.width,height:vb.height};
 const raw=svg.getAttribute('viewBox')?.trim().split(/[ ,]+/).map(Number);
 if(raw?.length===4&&raw[2]>0&&raw[3]>0)return {width:raw[2],height:raw[3]};
 const width=parseFloat(svg.getAttribute('width')),height=parseFloat(svg.getAttribute('height'));
 if(width>0&&height>0)return {width,height};const box=svg.getBBox?.();if(box?.width&&box?.height)return {width:box.width,height:box.height};
 return {width:800,height:600};
}
export async function exportSvgRaster(svg,{type='image/png',scale=2,background='#fff'}={}){
 const {width,height}=svgDimensions(svg),w=Math.max(1,Math.ceil(width*scale)),h=Math.max(1,Math.ceil(height*scale));
 if(w*h>40000000)throw new Error('Export exceeds the 40 MP safety limit.');
 const data=new XMLSerializer().serializeToString(svg),url=URL.createObjectURL(new Blob([data],{type:'image/svg+xml'}));
 try{const img=await new Promise((resolve,reject)=>{const x=new Image();x.onload=()=>resolve(x);x.onerror=()=>reject(new Error('SVG could not be rasterized.'));x.src=url});
 const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;const ctx=canvas.getContext('2d');if(!ctx)throw new Error('Canvas is unavailable.');
 if(background!=='transparent'){ctx.fillStyle=background;ctx.fillRect(0,0,w,h)}ctx.drawImage(img,0,0,w,h);
 return await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error('Export failed.')),type,0.92));
 }finally{URL.revokeObjectURL(url)}
}