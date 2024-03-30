import{_ as a,c as e,o as t,a4 as n}from"./chunks/framework.BS6BgAoB.js";const b=JSON.parse('{"title":"地图汉化准则（草案）","description":"","frontmatter":{},"headers":[],"relativePath":"rule.md","filePath":"rule.md","lastUpdated":null}'),s={name:"rule.md"},o=n(`<h1 id="地图汉化准则-草案" tabindex="-1">地图汉化准则（草案） <a class="header-anchor" href="#地图汉化准则-草案" aria-label="Permalink to &quot;地图汉化准则（草案）&quot;">​</a></h1><p><strong>前言</strong>：地图汉化技术要点较多、汉化困难，且鉴于目前WTEM仍可能出现无法预测的错误，若无标准化汉化准则将导致汉化工作量加大、质量低、工期长和审核困难等一系列问题，因此现拟一份地图汉化准则，用于帮助大家汉化地图。</p><h2 id="一、关于wtem提取" tabindex="-1">一、关于WTEM提取 <a class="header-anchor" href="#一、关于wtem提取" aria-label="Permalink to &quot;一、关于WTEM提取&quot;">​</a></h2><p>（这一部分主要面向管理者）</p><h3 id="_1-检查提取是否出错、出漏" tabindex="-1">1. 检查提取是否出错、出漏 <a class="header-anchor" href="#_1-检查提取是否出错、出漏" aria-label="Permalink to &quot;1. 检查提取是否出错、出漏&quot;">​</a></h3><p>WTEM提取后，应在翻译工作开展前检查提取是否出错、出漏。其检查内容应至少包括：</p><ul><li>新版本新增内容，WTEM可能还没有支持；</li><li>是否有不支持翻译键的JSON文本，导致WTEM不提取；含转义符的内容；</li><li>含宏的内容；</li><li>所有数据包是否正常运行，没有语法错误。</li></ul><p>提取完成后，应进地图实地考察，查漏补缺并确保所有机制运行正常。</p><h3 id="_2-重复键是否需要保留" tabindex="-1">2. 重复键是否需要保留 <a class="header-anchor" href="#_2-重复键是否需要保留" aria-label="Permalink to &quot;2. 重复键是否需要保留&quot;">​</a></h3><p>一般情况下，只保留告示牌的键。若遇到特殊情况，如语序问题，则可能还需要保留实体的键。</p><p><strong>示例</strong>：DE告示牌中的作者名和盔甲架名称。</p><h3 id="_3-剔除无需翻译的键" tabindex="-1">3. 剔除无需翻译的键 <a class="header-anchor" href="#_3-剔除无需翻译的键" aria-label="Permalink to &quot;3. 剔除无需翻译的键&quot;">​</a></h3><p>在翻译初期，先把无需翻译的键隐藏以大幅减少无意义的工作。</p><p>无需翻译的键包括：被丢弃的重复键、开发房中的绝大部分内容、数据包中用于协助开发的文本、等号或箭头等分隔符和图标，以及作者的游戏内ID等。</p><p><strong>这一部分工作较难，切忌不要把该翻译的东西省略了。</strong></p><h2 id="二、关于文字翻译" tabindex="-1">二、关于文字翻译 <a class="header-anchor" href="#二、关于文字翻译" aria-label="Permalink to &quot;二、关于文字翻译&quot;">​</a></h2><p>（这一部分主要面向翻译者）</p><h3 id="_1-翻译实地求证" tabindex="-1">1. 翻译实地求证 <a class="header-anchor" href="#_1-翻译实地求证" aria-label="Permalink to &quot;1. 翻译实地求证&quot;">​</a></h3><p>缺乏上下文、无法确定的翻译通过在<code>data.json</code>搜索键值，复制坐标后在世界中查证。务必结合语境！示例：<code>play</code>可能是游玩，也可能是播放！</p><h3 id="_2-告示牌的翻译" tabindex="-1">2. 告示牌的翻译 <a class="header-anchor" href="#_2-告示牌的翻译" aria-label="Permalink to &quot;2. 告示牌的翻译&quot;">​</a></h3><p>告示牌的翻译较为特殊，因为有独特的字数限制、行数限制与排版要求。翻译时要确保字数不超限，排版尽量美观，没有把握的话可以自己写在告示牌上测试。</p><h3 id="_3-物品描述的翻译" tabindex="-1">3. 物品描述的翻译 <a class="header-anchor" href="#_3-物品描述的翻译" aria-label="Permalink to &quot;3. 物品描述的翻译&quot;">​</a></h3><p>物品描述通常有多行，将整句翻译完成后按字数断句，确保每行字数尽量相等，尽量不要出现空行。断句尽量在完整单词的末尾，标点不要放在行首。对于有特殊格式的文本，要确保文字与行数对应。</p><p><strong>示例：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>描述1</span></span>
<span class="line"><span>描述2</span></span>
<span class="line"><span>描述3.1  描述3.2（特殊格式） 描述3.3</span></span>
<span class="line"><span>描述4</span></span></code></pre></div><h3 id="_4-聊天框对话的翻译" tabindex="-1">4. 聊天框对话的翻译 <a class="header-anchor" href="#_4-聊天框对话的翻译" aria-label="Permalink to &quot;4. 聊天框对话的翻译&quot;">​</a></h3><p>聊天框对话的翻译较为特殊，由于Mojang羸弱的换行机制，对话太长的换行会出现问题，此时需要手动在合适的字数后添加换行符<code>\\n</code>。</p><p><strong>错误示例：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;某人&gt; </span></span>
<span class="line"><span>   很长很长的一段话</span></span></code></pre></div><p><strong>正确示例：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;某人&gt; 很长很长的\\n</span></span>
<span class="line"><span>       一段话</span></span></code></pre></div><h3 id="_5-关于专有名词的翻译" tabindex="-1">5. 关于专有名词的翻译 <a class="header-anchor" href="#_5-关于专有名词的翻译" aria-label="Permalink to &quot;5. 关于专有名词的翻译&quot;">​</a></h3><p>对于一些可能出现的原版名词或常见的地图术语，务必统一。某些译名尤其容易搞错，多加小心，不确定的可以查阅wiki。</p><p><strong>示例</strong>：<code>Leather Tunic 皮革外套</code>、<code>Pink Wool 粉红色羊毛</code>、<code>Monument 纪念碑</code>等等。</p><h3 id="_6-关于自造词、俚语的翻译-较难" tabindex="-1">6. 关于自造词、俚语的翻译（较难） <a class="header-anchor" href="#_6-关于自造词、俚语的翻译-较难" aria-label="Permalink to &quot;6. 关于自造词、俚语的翻译（较难）&quot;">​</a></h3><p>翻译中可能会出现一些自造词、俚语、国外或社区一些梗，这些词的翻译工作比较困难，若无法解决可以求助。</p><p>比较好用的一些网站：</p><p><a href="https://zh.wiktionary.org/wiki/Wiktionary:%E9%A6%96%E9%A1%B5" target="_blank" rel="noreferrer">Wiktionary</a> （查词的来源、词根和词缀，非常方便；需要科学上网）</p><p><a href="https://www.urbandictionary.com/" target="_blank" rel="noreferrer">Urban Dictionary</a> （查俚语，用的不多；需要科学上网）</p>`,39),r=[o];function i(l,p,h,c,d,u){return t(),e("div",null,r)}const g=a(s,[["render",i]]);export{b as __pageData,g as default};
