import{ctaClick as L,ctaClickInteraction as j}from"../../dl.js";import{targetObject as H}from"../../scripts/scripts.js";import{loanProductsAnalytics as P}from"./teaserv2-analytics.js";export default async function $(t){const g=Array.from(t.children,e=>e.firstElementChild),s=renderTeaserHTMLFactory(g,t);t.innerHTML="",t.append(s),P(t),t.closest(".section.neeyat-banner")&&(t.querySelector("a").target="_blank");try{t.closest(".support-contact-us-wrapper")&&t.querySelector("a").getAttribute("href")&&t.querySelector("a").addEventListener("click",e=>{const n={};n.click_text=e.target.textContent.trim(),n.cta_position="Redirection",j(n)})}catch(e){console.warn(e)}if(t.closest(".calculator-section-wrapper")){const e=t.querySelector("a"),n=e.querySelector(".button-container-text");let l;n.addEventListener("click",r=>{l=r.currentTarget.textContent.trim().toLowerCase();const o=r.target.closest(".calculator-section-wrapper").querySelector(".default-content-wrapper h2")?.innerText,c=r.target.closest(".calculator-section-wrapper .block").querySelector(".title")?.innerText,p=r.target.closest(".calculator-section-wrapper ").querySelector("a .button-container-text")?.textContent.trim();L(p,c,o,H.pageName)}),e.addEventListener("click",r=>{if(l!="try now"){const o=r.target.closest(".calculator-section-wrapper").querySelector(".default-content-wrapper h2")?.innerText,c=r.target.closest(".calculator-section-wrapper .block").querySelector(".title")?.innerText,p=r.target.closest(".calculator-section-wrapper ").querySelector("a .button-container-text")?.textContent.trim();L(p,c,o,H.pageName)}})}}export function renderTeaserHTMLFactory(t,g){const s=window.matchMedia("(min-width: 768px)"),e=window.matchMedia("(max-width: 767px)"),[n,l,r,o,c,p,f,I,M,v,A,E]=t,i=(_,S,q)=>{const b=document.createElement(_);return S&&(b.className=S),q&&(b.innerHTML=q||""),b},k=n?.textContent.trim()||"",m=document.createElement("a");m.href=k||"javascript:void(0)";let u=l?.querySelector("picture > img")?.src||"",d=E?.querySelector("picture > img")?.src||"";const T=M?.textContent.trim()?.src||"",a=i("div","bg-image");g?.closest(".section").classList.contains("corporate-financing-banner-wrapper")&&(s.matches?u=u.split("?")[0]:e.matches&&(d=d.split("?")[0])),s.matches?u&&(a.style.backgroundImage=`url(${u})`):e.matches&&d&&(a.style.backgroundImage=`url(${d})`),T&&(a.style.backgroundColor=T);const h=r?.querySelector("picture"),C=i("div","front-image");h&&C.append(h);const D=i("div","title",o?.textContent.trim()||""),N=i("div","description",c?.textContent.trim()||"");let x="";const y=I?.querySelector("a")||"";y?(y.innerText=f?.textContent.trim()||"",x=y.outerHTML):f&&(x=i("div","button-container-text",f?.textContent.trim()||""));const w=document.createElement("div");w.innerHTML=A?.innerHTML||"",w.classList.add("rte-text-description"),a.append(C,D,N,x,w);const B=v?.textContent?.trim()||"";return v.closest(".teaserv2-wrapper")?.setAttribute("data-teaserv2-xf",B),m.tagName==="A"&&m.append(a),m}
