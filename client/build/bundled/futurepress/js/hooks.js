EPUBJS.Hooks.register("beforeChapterDisplay").endnotes=function(e,t){var o=t.contents.querySelectorAll("a[href]"),n=Array.prototype.slice.call(o),r="epub:type",a="noteref",i=EPUBJS.core.folder(location.pathname),s=(i+EPUBJS.cssPath||i,{});EPUBJS.core.addCss(EPUBJS.cssPath+"popup.css",!1,t.render.document.head),n.forEach(function(e){function o(){var o,r,a=t.height,c=t.width,g=225;m||(o=p.cloneNode(!0),m=o.querySelector("p")),s[d]||(s[d]=document.createElement("div"),s[d].setAttribute("class","popup"),pop_content=document.createElement("div"),s[d].appendChild(pop_content),pop_content.appendChild(m),pop_content.setAttribute("class","pop_content"),t.render.document.body.appendChild(s[d]),s[d].addEventListener("mouseover",n,!1),s[d].addEventListener("mouseout",i,!1),t.on("renderer:pageChanged",l,this),t.on("renderer:pageChanged",i,this)),o=s[d],r=e.getBoundingClientRect(),h=r.left,u=r.top,o.classList.add("show"),popRect=o.getBoundingClientRect(),o.style.left=h-popRect.width/2+"px",o.style.top=u+"px",g>a/2.5&&(g=a/2.5,pop_content.style.maxHeight=g+"px"),popRect.height+u>=a-25?(o.style.top=u-popRect.height+"px",o.classList.add("above")):o.classList.remove("above"),h-popRect.width<=0?(o.style.left=h+"px",o.classList.add("left")):o.classList.remove("left"),h+popRect.width/2>=c?(o.style.left=h-300+"px",popRect=o.getBoundingClientRect(),o.style.left=h-popRect.width+"px",popRect.height+u>=a-25?(o.style.top=u-popRect.height+"px",o.classList.add("above")):o.classList.remove("above"),o.classList.add("right")):o.classList.remove("right")}function n(){s[d].classList.add("on")}function i(){s[d].classList.remove("on")}function l(){setTimeout(function(){s[d].classList.remove("show")},100)}var c,d,p,h,u,m,g=e.getAttribute(r);g==a&&(c=e.getAttribute("href"),d=c.replace("#",""),p=t.render.document.getElementById(d),e.addEventListener("mouseover",o,!1),e.addEventListener("mouseout",l,!1))}),e&&e()},EPUBJS.Hooks.register("beforeChapterDisplay").mathml=function(e,t){if(-1!==t.currentChapter.manifestProperties.indexOf("mathml")){t.render.iframe.contentWindow.mathmlCallback=e;var o=document.createElement("script");o.type="text/x-mathjax-config",o.innerHTML='        MathJax.Hub.Register.StartupHook("End",function () {           window.mathmlCallback();         });        MathJax.Hub.Config({jax: ["input/TeX","input/MathML","output/SVG"],extensions: ["tex2jax.js","mml2jax.js","MathEvents.js"],TeX: {extensions: ["noErrors.js","noUndefined.js","autoload-all.js"]},MathMenu: {showRenderer: false},menuSettings: {zoom: "Click"},messageStyle: "none"});                 ',t.doc.body.appendChild(o),EPUBJS.core.addScript("http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML",null,t.doc.head)}else e&&e()},EPUBJS.Hooks.register("beforeChapterDisplay").smartimages=function(e,t){var o=t.contents.querySelectorAll("img"),n=Array.prototype.slice.call(o),r=t.height;return"reflowable"!=t.layoutSettings.layout?void e():(n.forEach(function(e){var o=function(){var o,n=e.getBoundingClientRect(),a=n.height,i=n.top,s=e.getAttribute("data-height"),l=s||a,c=Number(getComputedStyle(e,"").fontSize.match(/(\d*(\.\d*)?)px/)[1]),d=c?c/2:0;r=t.contents.clientHeight,0>i&&(i=0),l+i>=r?(r/2>i?(o=r-i-d,e.style.maxHeight=o+"px",e.style.width="auto"):(l>r&&(e.style.maxHeight=r+"px",e.style.width="auto",n=e.getBoundingClientRect(),l=n.height),e.style.display="block",e.style.WebkitColumnBreakBefore="always",e.style.breakBefore="column"),e.setAttribute("data-height",o)):(e.style.removeProperty("max-height"),e.style.removeProperty("margin-top"))},n=function(){t.off("renderer:resized",o),t.off("renderer:chapterUnload",this)};e.addEventListener("load",o,!1),t.on("renderer:resized",o),t.on("renderer:chapterUnload",n),o()}),void(e&&e()))},EPUBJS.Hooks.register("beforeChapterDisplay").transculsions=function(e,t){var o=t.contents.querySelectorAll("[transclusion]"),n=Array.prototype.slice.call(o);n.forEach(function(e){function o(){c=i,d=s,c>chapter.colWidth&&(n=chapter.colWidth/c,c=chapter.colWidth,d*=n),a.width=c,a.height=d}var n,r=e.getAttribute("ref"),a=document.createElement("iframe"),i=e.getAttribute("width"),s=e.getAttribute("height"),l=e.parentNode,c=i,d=s;o(),t.listenUntil("renderer:resized","renderer:chapterUnloaded",o),a.src=r,l.replaceChild(a,e)}),e&&e()};