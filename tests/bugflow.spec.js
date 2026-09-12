import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
test('loads the complete studio contract',async({page})=>{await page.goto('/');await expect(page.locator('h1')).toContainText(/bug report/i);await expect(page.locator('#editor-input')).toBeVisible();await expect(page.locator('#visual-builder')).toBeVisible();await expect(page.locator('[data-action="download-zip"]')).toBeVisible()});
test('exposes accessible editor diagnostics',async({page})=>{await page.goto('/');await expect(page.locator('#editor-input')).toHaveAttribute('aria-label','Mermaid source code');await expect(page.locator('#editor-diagnostic')).toHaveAttribute('aria-live','polite');await expect(page.locator('#editor-gutter')).toHaveAttribute('aria-hidden','true')});
test('Flow Forge exposes v8 authoring controls',async({page})=>{await page.goto('/');await expect(page.locator('#builder-undo')).toBeVisible();await expect(page.locator('#builder-redo')).toBeVisible();await expect(page.locator('#builder-connect')).toHaveAttribute('aria-pressed','false');await expect(page.locator('#builder-layout')).toBeVisible();await expect(page.locator('#builder-minimap')).toBeVisible()});
test('v9 production tools are available',async({page})=>{await page.goto('/');await expect(page.locator('#pro-center')).toBeVisible();await expect(page.locator('[data-pro="analyze"]')).toBeVisible();await expect(page.locator('[data-pro="command"]')).toBeVisible();await expect(page.locator('[data-template-v9="architecture"]')).toBeVisible();await expect(page.locator('#mobile-tools')).toBeAttached()});
test('has no critical accessibility violations',async({page})=>{await page.goto('/');const results=await new AxeBuilder({page}).analyze();expect(results.violations.filter(v=>['critical','serious'].includes(v.impact))).toEqual([])});

test('pins Mermaid and blocks unsafe smart links',async({page,request})=>{
 const [app,sw]=await Promise.all([request.get('/app.js'),request.get('/sw.js')]);
 expect(await app.text()).toContain('mermaid@11.4.1');
 expect(await sw.text()).toContain('mermaid@11.4.1');
 const payload='flowchart TD\nA[Safe]-->B[End]\nclick A "javascript:alert(1)"';
 const hash=Buffer.from(payload).toString('base64url');
 await page.goto('/#diagram='+hash);
 await page.waitForTimeout(1000);
 expect(await page.evaluate(()=>window.__xssExecuted||false)).toBe(false);
 expect(await page.locator('#editor-input').inputValue()).not.toBe(payload);
});
test('analyzes a large cyclic graph in linear time',async({page})=>{
 await page.goto('/');
 const result=await page.evaluate(async()=>{const {analyzeGraph}=await import('./modules/graph-analysis.js');let src='flowchart TD\n';for(let i=0;i<5000;i++)src+=`N${i}[Node ${i}] --> N${(i+1)%5000}\n`;const start=performance.now(),report=analyzeGraph(src);return {...report,elapsed:performance.now()-start}});
 expect(result.nodes).toBe(5000);expect(result.cycle).toBe(true);expect(result.elapsed).toBeLessThan(2000);
});
test('uses SVG viewBox when raster dimensions are absent',async({page})=>{
 await page.goto('/');
 const dimensions=await page.evaluate(async()=>{const {svgDimensions}=await import('./modules/export.js');const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 640 360');return svgDimensions(svg)});
 expect(dimensions).toEqual({width:640,height:360});
});
test('manifest exposes a dedicated maskable icon',async({request})=>{
 const manifest=await (await request.get('/manifest.webmanifest')).json();
 expect(manifest.theme_color).toBe('#071226');
 expect(manifest.icons).toContainEqual(expect.objectContaining({src:'icon-maskable-512.png',sizes:'512x512',purpose:'maskable'}));
});
