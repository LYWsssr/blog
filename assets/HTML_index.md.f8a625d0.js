import{o as e,c as d,a}from"./app.c0fb0663.js";const r='{"title":"介绍","description":"","frontmatter":"title 基础","headers":[{"level":2,"title":"介绍","slug":"介绍"},{"level":2,"title":"HTML 语义化","slug":"html-语义化"},{"level":2,"title":"DOCTYPE","slug":"doctype"},{"level":3,"title":"DOCTYPE有什么作用？","slug":"doctype有什么作用？"},{"level":3,"title":"标准模式与混杂模式如何区分?","slug":"标准模式与混杂模式如何区分"},{"level":3,"title":"HTML5为什么只需要写 <!DOCTYPE HTML>","slug":"html5为什么只需要写-doctype-html"},{"level":2,"title":"块级元素和行内元素","slug":"块级元素和行内元素"},{"level":3,"title":"块级元素和行内元素的区别","slug":"块级元素和行内元素的区别"},{"level":3,"title":"块级元素和行内元素都有哪些","slug":"块级元素和行内元素都有哪些"},{"level":2,"title":"链接打开方式有几种？分别是什么？","slug":"链接打开方式有几种？分别是什么？"},{"level":2,"title":"script 标签中 defer 和 async 的区别","slug":"script-标签中-defer-和-async-的区别"}],"relativePath":"HTML/index.md","lastUpdated":1685440873546}',l={},h=a('<h2 id="介绍"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>HTML 的英文全称叫 <code>Hyper Text Markup Language</code> ,也叫做 <strong>超文本标记语言</strong> ，是一种使用结构化 Web 网页及其内容的标记语言。</p><p>主要用于定义网页中的结构。</p><h2 id="html-语义化"><a class="header-anchor" href="#html-语义化" aria-hidden="true">#</a> HTML 语义化</h2><ol><li><p>用正确的标签做正确的事情。</p></li><li><p>html 语义化让页面的<strong>内容结构化，结构更清晰</strong>，便于对浏览器、搜索引擎解析；即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;</p></li><li><p>搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，<strong>利于 SEO</strong>;</p></li><li><p>使阅读源代码的人对网站更容易将网站分块，<strong>便于阅读维护理解</strong>。</p></li></ol><h2 id="doctype"><a class="header-anchor" href="#doctype" aria-hidden="true">#</a> DOCTYPE</h2><h3 id="doctype有什么作用？"><a class="header-anchor" href="#doctype有什么作用？" aria-hidden="true">#</a> DOCTYPE有什么作用？</h3><p>DOCTYPE （document type） 声明位于文档的最前面，处于标签之前，它不是 html 标签。</p><p>主要作用是告诉浏览器使用哪个版本的 HTML 规范来渲染文档。DOCTYPE 不存在或形式不正确会导致HTML文档以<strong>混杂模式</strong>呈现。</p><h3 id="标准模式与混杂模式如何区分"><a class="header-anchor" href="#标准模式与混杂模式如何区分" aria-hidden="true">#</a> 标准模式与混杂模式如何区分?</h3><p>标准模式（Standards mode）以浏览器支持的最高标准运行；</p><p>混杂模式（Quirks mode）中页面是一种比较宽松的向后兼容的方式显示。</p><h3 id="html5为什么只需要写-doctype-html"><a class="header-anchor" href="#html5为什么只需要写-doctype-html" aria-hidden="true">#</a> HTML5为什么只需要写 <code>&lt;!DOCTYPE HTML&gt;</code></h3><p>HTML5 不基于 SGML（Standard Generalized Markup Language 标准通用标记语言），因此不需要对 DTD（DTD 文档类型定义）进行引用，但是需要DOCTYPE来规范浏览器行为。</p><p>HTML4.01 基于 SGML ，所以需要引用 DTD 。才能告知浏览器文档所使用的文档类型，如下： <code>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;</code></p><h2 id="块级元素和行内元素"><a class="header-anchor" href="#块级元素和行内元素" aria-hidden="true">#</a> 块级元素和行内元素</h2><h3 id="块级元素和行内元素的区别"><a class="header-anchor" href="#块级元素和行内元素的区别" aria-hidden="true">#</a> 块级元素和行内元素的区别</h3><h4 id="块级元素"><a class="header-anchor" href="#块级元素" aria-hidden="true">#</a> 块级元素</h4><ul><li>与其他行内元素并排</li><li>不能设置宽高，默认的宽度就是文字的宽度</li></ul><h4 id="行内元素"><a class="header-anchor" href="#行内元素" aria-hidden="true">#</a> 行内元素</h4><ul><li>独占一行，不能与其他任何元素并列</li><li>能接受宽高，如果不设置宽度，那么宽度将默认变为父级的100%</li></ul><h3 id="块级元素和行内元素都有哪些"><a class="header-anchor" href="#块级元素和行内元素都有哪些" aria-hidden="true">#</a> 块级元素和行内元素都有哪些</h3><h4 id="块级元素-1"><a class="header-anchor" href="#块级元素-1" aria-hidden="true">#</a> 块级元素</h4><ul><li><p>常用元素</p><p><code>div</code> , <code>p</code> , <code>form</code> , <code>section</code> , <code>table</code></p></li><li><p>标题</p><p><code>h1</code> , <code>h2</code> , <code>h3</code> , <code>h4</code> , <code>h5</code> , <code>h6</code></p></li><li><p>列表</p><p><code>ul</code> , <code>ol</code> , <code>dd</code> , <code>dl</code></p></li><li><p>h5新特性</p><p><code>section</code> , <code>header</code> , <code>footer</code> , <code>video</code> , <code>output</code> , <code>audio</code> , <code>aside</code></p></li></ul><h4 id="行内元素-1"><a class="header-anchor" href="#行内元素-1" aria-hidden="true">#</a> 行内元素</h4><ul><li><p>常用元素</p><p><code>a</code> , <code>button</code> , <code>span</code> , <code>img</code> , <code>em</code> , <code>i</code> , <code>label</code> , <code>select</code> , <code>textarea</code></p></li></ul><h2 id="链接打开方式有几种？分别是什么？"><a class="header-anchor" href="#链接打开方式有几种？分别是什么？" aria-hidden="true">#</a> 链接打开方式有几种？分别是什么？</h2><p>总共有五种：</p><ul><li><h4 id="blank"><a class="header-anchor" href="#blank" aria-hidden="true">#</a> _blank</h4><p>在新窗口中打开被链接文档。</p></li><li><h4 id="self"><a class="header-anchor" href="#self" aria-hidden="true">#</a> _self</h4><p>默认。在相同的框架中打开被链接文档。</p></li><li><h4 id="parent"><a class="header-anchor" href="#parent" aria-hidden="true">#</a> _parent</h4><p>在父框架集中打开被链接文档。</p></li><li><h4 id="top"><a class="header-anchor" href="#top" aria-hidden="true">#</a> _top</h4><p>在整个窗口中打开被链接文档。</p></li><li><h4 id="framename"><a class="header-anchor" href="#framename" aria-hidden="true">#</a> framename</h4><p>在指定的框架中打开被链接文档。</p></li></ul><h2 id="script-标签中-defer-和-async-的区别"><a class="header-anchor" href="#script-标签中-defer-和-async-的区别" aria-hidden="true">#</a> script 标签中 defer 和 async 的区别</h2><p>defer 和 async 都是作用于 外链JS 的。对于 内部JS 是没有效果的。</p><p>defer 和 async 都是异步的，主要的区别在于执行顺序以及执行的时间。</p><p>async 标志的脚本文件一旦加载完成就会立即执行，并且不会按照书写顺序，谁下载好了就直接执行。所以适用于那些没有代码依赖顺序，并且没有 DOM操作 的脚本文件。</p><p>defer 标志的脚本文件会严格按照书写顺序执行，并且，会在 DOMContentLoaded 事件之前（也就是页面DOM加载完成时）执行。适用于有 DOM操作 ，或者是有代码依赖顺序的脚本文件。</p>',34);l.render=function(a,r,l,o,c,t){return e(),d("div",null,[h])};export default l;export{r as __pageData};