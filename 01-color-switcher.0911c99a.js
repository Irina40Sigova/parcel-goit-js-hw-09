const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let n=null;function o(){n=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;e.style.backgroundColor=t}),1e3),a&&(t.disabled=!0,d.disabled=!1)}function a(){clearInterval(n),o&&(t.disabled=!1,d.disabled=!0)}t.addEventListener("click",o),d.addEventListener("click",a);
//# sourceMappingURL=01-color-switcher.0911c99a.js.map
