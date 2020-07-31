(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{557:function(t,e,n){"use strict";n.r(e);var s=n(0),o=n.n(s),a={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h3 id="input"><span>input</span><a href="#input" class="anchor">#</a></h3><h3 id="基本api"><span>基本api</span><a href="#基本api" class="anchor">#</a></h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>addonAfter</td><td>设置后置标签</td><td>string | slot</td><td>-</td></tr><tr><td>addonBefore</td><td>设置前置标签</td><td>string | slot</td><td>-</td></tr><tr><td>defaultValue</td><td>输入框默认内容</td><td>string</td><td>-</td></tr><tr><td>placeholder</td><td>placeholder</td><td>string</td><td>-</td></tr><tr><td>disabled</td><td>是否禁用状态，默认为 false</td><td>boolean</td><td>false</td></tr><tr><td>id</td><td>输入框的 id</td><td>string</td><td>-</td></tr><tr><td>prefix</td><td>带有前缀图标的 input</td><td>string | slot</td><td>-</td></tr><tr><td>size</td><td>控件大小。注：标准表单内的输入框大小限制为 large。可选<code>large</code> <code>small</code></td><td>string</td><td>default</td></tr><tr><td>suffix</td><td>带有后缀图标的 input</td><td>string | slot</td><td>-</td></tr><tr><td>type</td><td>默认为text，支持input原生type类型,但最好只用text，其它type参照对应实现的组件<br>注意：textarea直接用<code>Input.TextArea</code>代替<code>type=&quot;textarea&quot;</code><br>并且<code>type=&quot;number&quot;</code>有单独的inputNumber组件实现</td><td>string</td><td>text</td></tr><tr><td>value</td><td>输入框内容</td><td>string</td><td>-</td></tr><tr><td>allowClear</td><td>可以点击清除图标删除内容</td><td>boolean</td><td>-</td></tr><tr><td>on-change</td><td>输入框内容变化时的回调</td><td>function</td><td>-</td></tr><tr><td>on-pressEnter</td><td>按下回车的回调</td><td>function</td><td>-</td></tr><tr><td>on-blur</td><td>失去焦点时的回调</td><td>function</td><td>-</td></tr></tbody></table><h3 id="inputtextarea"><span>Input.TextArea</span><a href="#inputtextarea" class="anchor">#</a></h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>autosize</td><td>自适应内容高度，可设置为 <code>true|false</code> 或对象：<code>{ minRows: 2, maxRows: 6 }</code></td><td>boolean|object</td><td>-</td></tr><tr><td>defaultValue</td><td>输入框默认内容</td><td>string</td><td>-</td></tr><tr><td>value</td><td>输入框内容</td><td>string</td><td>-</td></tr><tr><td>on-pressEnter</td><td>按下回车的回调</td><td>function</td><td>-</td></tr></tbody></table><blockquote><p>注：其他属性和浏览器自带的 textarea 一致</p></blockquote><h3 id="inputsearch"><span>Input.Search</span><a href="#inputsearch" class="anchor">#</a></h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>enterButton</td><td>是否有确认按钮，可设为按钮文字。该属性会与 addon 冲突。</td><td>string</td><td>-</td></tr><tr><td>on-search</td><td>当点击搜索时执行</td><td>function</td><td>-</td></tr></tbody></table><h3 id="inputgroup"><span>Input.Group</span><a href="#inputgroup" class="anchor">#</a></h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>compact</td><td>是否用紧凑模式</td><td>boolean</td><td>false</td></tr><tr><td>size</td><td>Input.Group 中所有的 Input 的大小，可选 <code>large</code> <code>default</code> <code>small</code></td><td>string</td><td><code>default</code></td></tr></tbody></table><blockquote><p>例子：</p></blockquote><pre><code class="language-html">&lt;s-input-group compact&gt;&lt;s-input style=&quot;width: 20%&quot; defaultValue=&quot;0571&quot;/&gt;&lt;s-input style=&quot;width: 30%&quot; defaultValue=&quot;26888888&quot;/&gt;&lt;/s-input-group&gt;</code></pre><h3 id="inputpassword"><span>Input.Password</span><a href="#inputpassword" class="anchor">#</a></h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>visibilityToggle</td><td>是否显示切换按钮</td><td>boolean</td><td>true</td></tr></tbody></table></section>'},p={template:'<section class="markdown"><h1 id="input输入框"><span>Input输入框</span><a href="#input输入框" class="anchor">#</a></h1><p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul><li>需要用户输入表单域内容时。</li><li>提供组合型输入框，带搜索的输入框，还可以进行大小选择。</li></ul><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},i=n(27),l={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-input placeholder=\"Basic useage\" />\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport Input from 'santd/input';\nexport default {\n    components: {\n        's-input': Input\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本形式"><span>基本形式</span><a href="#基本形式" class="anchor">#</a></h4><p>基本使用</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.a},template:'<div><s-input placeholder="Basic useage"></s-input></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1596174109265"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},d=n(3),c=n(17),r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;div style="margin-bottom: 16px">\n            &lt;s-input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />\n        &lt;/div>\n        &lt;div style="margin-bottom: 16px">\n            &lt;s-input defaultValue="mysite">\n                &lt;s-select defaultValue="http://" style="width:90px" slot="addonBefore">\n                    &lt;s-select-option value="http://">http://&lt;/s-select-option>\n                    &lt;s-select-option value="https://">https://&lt;/s-select-option>\n                &lt;/s-select>\n                &lt;s-select defaultValue=".com" style="width:90px" slot="addonAfter">\n                    &lt;s-select-option value=".com">.com&lt;/s-select-option>\n                    &lt;s-select-option value=".jp">.jp&lt;/s-select-option>\n                    &lt;s-select-option value=".cn">.cn&lt;/s-select-option>\n                    &lt;s-select-option value=".org">.org&lt;/s-select-option>\n                &lt;/s-select>\n            &lt;/s-input>\n        &lt;/div>\n        &lt;div>\n            &lt;s-input defaultValue="mysite">\n                &lt;s-icon slot="addonAfter" type="setting" />\n            &lt;/s-input>\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Input from \'santd/input\';\nimport Icon from \'santd/icon\';\nimport Select from \'santd/select\';\n\nexport default {\n    components: {\n        \'s-input\': Input,\n        \'s-select\': Select,\n        \'s-select-option\': Select.Option,\n        \'s-icon\': Icon\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="前置后置标签"><span>前置/后置标签</span><a href="#前置后置标签" class="anchor">#</a></h4><p>用于配置一些固定组合。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.a,"s-select":c.a,"s-select-option":c.a.Option,"s-icon":d.a},template:'<div><div style="margin-bottom: 16px"><s-input addonBefore="Http://" addonAfter=".com" defaultValue="mysite"></s-input></div><div style="margin-bottom: 16px"><s-input defaultValue="mysite"><s-select defaultValue="http://" style="width:90px" slot="addonBefore"><s-select-option value="http://">http://</s-select-option><s-select-option value="https://">https://</s-select-option></s-select><s-select defaultValue=".com" style="width:90px" slot="addonAfter"><s-select-option value=".com">.com</s-select-option><s-select-option value=".jp">.jp</s-select-option><s-select-option value=".cn">.cn</s-select-option><s-select-option value=".org">.org</s-select-option></s-select></s-input></div><div><s-input defaultValue="mysite"><s-icon slot="addonAfter" type="setting"></s-icon></s-input></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1596174109268"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},u={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;div style="margin-bottom: 16px">\n            &lt;s-input-search\n                placeholder="input search text"\n                on-search="onSearch"\n                style="width: 200px;"\n            >&lt;/s-input-search>\n        &lt;/div>\n        &lt;div style="margin-bottom: 16px">\n            &lt;s-input-search placeholder="input search text" enterButton="{{true}}" on-search="onSearch">&lt;/s-input-search>\n        &lt;/div>\n        &lt;div style="margin-bottom: 16px">\n            &lt;s-input-search placeholder="input search text" enterButton="Search" on-search="onSearch" size="large">&lt;/s-input-search>\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Input from \'santd/input\';\nimport Icon from \'santd/icon\';\n\nexport default {\n    components: {\n        \'s-input\': Input,\n        \'s-icon\': Icon,\n        \'s-input-search\': Input.Search\n    },\n    onSearch(value) {\n        console.log(\'the search value is: \', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="搜索框"><span>搜索框</span><a href="#搜索框" class="anchor">#</a></h4><p>带有搜索按钮的输入框。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.a,"s-icon":d.a,"s-input-search":i.a.Search},onSearch(t){console.log("the search value is: ",t)},template:'<div><div style="margin-bottom: 16px"><s-input-search placeholder="input search text" on-search="onSearch" style="width: 200px;"></s-input-search></div><div style="margin-bottom: 16px"><s-input-search placeholder="input search text" enterButton="{{true}}" on-search="onSearch"></s-input-search></div><div style="margin-bottom: 16px"><s-input-search placeholder="input search text" enterButton="Search" on-search="onSearch" size="large"></s-input-search></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1596174109256"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h=n(11),m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n&lt;div>\n    &lt;div style="margin-bottom: 16px">\n        &lt;s-input>\n            &lt;s-icon type="user" style="color: rgba(0, 0, 0, .25);" slot="prefix" />\n            &lt;s-tooltip title="Extra information" slot="suffix">\n                &lt;s-icon type="info-circle" style="color: rgba(0, 0, 0, .45);" />\n            &lt;/s-tooltip>\n        &lt;/s-input>\n    &lt;/div>\n    &lt;div style="margin-bottom: 16px">\n        &lt;s-input suffix="RMB" prefix="￥" />\n    &lt;/div>\n&lt;/div>\n&lt;/template>\n&lt;script>\nimport Input from \'santd/input\';\nimport Icon from \'santd/icon\';\nimport Tooltip from \'santd/tooltip\';\n\nexport default {\n    components: {\n        \'s-input\': Input,\n        \'s-icon\': Icon,\n        \'s-tooltip\': Tooltip\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="前缀和后缀"><span>前缀和后缀</span><a href="#前缀和后缀" class="anchor">#</a></h4><p>在输入框上添加前缀或后缀图标。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.a,"s-icon":d.a,"s-tooltip":h.a},template:'<div><div style="margin-bottom: 16px"><s-input><s-icon type="user" style="color: rgba(0, 0, 0, .25);" slot="prefix"></s-icon><s-tooltip title="Extra information" slot="suffix"><s-icon type="info-circle" style="color: rgba(0, 0, 0, .45);"></s-icon></s-tooltip></s-input></div><div style="margin-bottom: 16px"><s-input suffix="RMB" prefix="￥"></s-input></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1596174109260"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},x=(n(685),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div class="example-input">\n    &lt;s-input size="large" placeholder="large size" />\n    &lt;s-input placeholder="default size" />\n    &lt;s-input size="small" placeholder="small size" />\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Input from \'santd/input\';\nimport Icon from \'santd/icon\';\nexport default {\n    components: {\n        \'s-input\': Input\n    },\n    onChange(value) {\n        console.log(\'the value is: \', value);\n    }\n}\n&lt;/script>\n&lt;style>\n.example-input .santd-input {\n    width: 200px;\n    margin: 0 8px 8px 0;\n  }\n&lt;/style></code></pre>',text:'\n<h4 id="三种大小"><span>三种大小</span><a href="#三种大小" class="anchor">#</a></h4><p>我们为 <code>&lt;Input /&gt;</code> 输入框定义了三种尺寸（大、默认、小），高度分别为 <code>40px</code>、<code>32px</code> 和 <code>24px</code>。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.a},onChange(t){console.log("the value is: ",t)},template:'<div class="example-input"><s-input size="large" placeholder="large size"></s-input><s-input placeholder="default size"></s-input><s-input size="small" placeholder="small size"></s-input></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1596174109236"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'}),g={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n&lt;div>\n    &lt;div style=\"margin-bottom: 10px;\">\n        &lt;s-textarea placeholder=\"please input something\" rows=\"5\" on-pressEnter=\"onPressEnter\" defaultValue=\"defaultValue\" value=\"{{textArea}}\" on-textareaBlur=\"onBlur\">&lt;/s-textarea>\n    &lt;/div>\n&lt;/div>\n&lt;/template>\n&lt;script>\nimport Input from 'santd/input';\nexport default {\n    components: {\n        's-input': Input,\n        's-textarea': Input.TextArea\n    },\n    initData() {\n        return {\n            textArea: 'textarea'\n        }\n    },\n    attached() {\n        setTimeout(() => {\n            this.data.set('textArea', '这是textarea的value');\n        },1000);\n    },\n    onChange(value) {\n        console.log('the value is: ', value);\n    },\n    onPressEnter(value) {\n        console.log('pressEnter string is :', value);\n    },\n    onBlur(value) {\n        console.log('blur value is : ', value);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="文本域"><span>文本域</span><a href="#文本域" class="anchor">#</a></h4><p>用于多行输入。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.a,"s-textarea":i.a.TextArea},initData:()=>({textArea:"textarea"}),attached(){setTimeout(()=>{this.data.set("textArea","这是textarea的value")},1e3)},onChange(t){console.log("the value is: ",t)},onPressEnter(t){console.log("pressEnter string is :",t)},onBlur(t){console.log("blur value is : ",t)},template:'<div><div style="margin-bottom: 10px;"><s-textarea placeholder="please input something" rows="5" on-pressEnter="onPressEnter" defaultValue="defaultValue" value="{{textArea}}" on-textareaBlur="onBlur"></s-textarea></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1596174109231"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},w={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n&lt;div>\n    &lt;div style=\"margin-bottom: 10px;\">\n        &lt;s-textarea placeholder=\"Autosize height based on content lines\" autosize=\"{{true}}\">&lt;/s-textarea>\n    &lt;/div>\n    &lt;div style=\"margin-bottom: 10px;\">\n        &lt;s-textarea placeholder=\"Autosize height with minimum and maximum number of lines\" autosize=\"{minRows: 2, maxRows: 6}\">&lt;/s-textarea>\n    &lt;/div>\n&lt;/div>\n&lt;/template>\n&lt;script>\nimport Input from 'santd/input';\nimport Icon from 'santd/icon';\nexport default {\n    components: {\n        's-input': Input,\n        's-icon': Icon,\n        's-textarea': Input.TextArea\n    },\n    onChange(value) {\n        console.log('the value is: ', value);\n    },\n    onPressEnter(value) {\n        console.log('pressEnter string is :', value);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="适应文本高度的文本域"><span>适应文本高度的文本域</span><a href="#适应文本高度的文本域" class="anchor">#</a></h4><p><code>autosize</code> 属性适用于 <code>textarea</code> 节点，并且只有高度会自动变化。此外 <code>autosize</code> 可以设定为一个对象，指定最小行数和最大行数。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.a,"s-icon":d.a,"s-textarea":i.a.TextArea},onChange(t){console.log("the value is: ",t)},onPressEnter(t){console.log("pressEnter string is :",t)},template:'<div><div style="margin-bottom: 10px;"><s-textarea placeholder="Autosize height based on content lines" autosize="{{true}}"></s-textarea></div><div style="margin-bottom: 10px;"><s-textarea placeholder="Autosize height with minimum and maximum number of lines" autosize="{minRows: 2, maxRows: 6}"></s-textarea></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1596174109222"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},v={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n&lt;div>\n    &lt;s-tooltip\n        trigger="click"\n        placement="topLeft"\n        title="{{value || \'Input a number\'}}"\n    >\n        &lt;s-input\n            placeholder="base useage"\n            on-change="onChange"\n            maxLength="20"\n            style="width:120px"\n        >&lt;/s-input>\n    &lt;/s-tooltip>\n&lt;/div>\n&lt;/template>\n&lt;script>\nimport Input from \'santd/input\';\nimport Tooltip from \'santd/tooltip\';\nexport default {\n    components: {\n        \'s-input\': Input,\n        \'s-tooltip\': Tooltip\n    },\n    onChange(value) {\n        this.data.set(\'value\', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="输入时格式化展示"><span>输入时格式化展示</span><a href="#输入时格式化展示" class="anchor">#</a></h4><p>结合 <code>tooltip</code>组件，实现一个数值输入框，方便内容超长时的全量展现。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.a,"s-tooltip":h.a},onChange(t){this.data.set("value",t)},template:'<div><s-tooltip trigger="click" placement="topLeft" title="{{value || \'Input a number\'}}"><s-input placeholder="base useage" on-change="onChange" maxLength="20" style="width:120px"></s-input></s-tooltip></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1596174109226"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},b=n(19),f=n(106),y=n(95),E={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n      &lt;s-input-group size="large">\n          &lt;s-row gutter="{{8}}">\n            &lt;s-col span="{{5}}">\n              &lt;s-input defaultValue="0571" />\n          &lt;/s-col>\n            &lt;s-col span="{{8}}">\n              &lt;s-input defaultValue="26888888" />\n            &lt;/s-col>\n        &lt;/s-row>\n      &lt;/s-input-group>\n      &lt;br/>\n      &lt;s-input-group compact="{{true}}">\n          &lt;s-input style="width: 20%" defaultValue="0571" />\n          &lt;s-input style="width: 30%" defaultValue="26888888" />\n    &lt;/s-input-group>\n    &lt;br/>\n    &lt;s-input-group compact="{{true}}">\n        &lt;s-select defaultValue="zhejiang" style="width:120px">\n          &lt;s-select-option value="zhejiang">Zhejiang&lt;/s-select-option>\n          &lt;s-select-option value="jiangsu">Jiangsu&lt;/s-select-option>\n        &lt;/s-select>\n        &lt;s-input style="width: 50%" defaultValue="Xihu District, Hangzhou"/>\n    &lt;/s-input-group>\n    &lt;br/>\n    &lt;s-input-group compact="{{true}}">\n        &lt;s-select defaultValue="Option" style="width:120px">\n          &lt;s-select-option value="Option">Option&lt;/s-select-option>\n          &lt;s-select-option value="Option">Option&lt;/s-select-option>\n        &lt;/s-select>\n        &lt;s-input style="width: 50%" defaultValue="input content"/>\n        &lt;s-inputnumber/>\n    &lt;/s-input-group>\n    &lt;br/>\n    &lt;s-input-group compact="{{true}}">\n        &lt;s-input style="width: 50%" defaultValue="input content"/>\n        &lt;s-datepicker />\n    &lt;/s-input-group>\n    &lt;br/>\n    &lt;s-input-group compact="{{true}}">\n        &lt;s-select defaultValue="Option1-1" style="width:120px">\n          &lt;s-select-option value="Option1-1">Option1-1&lt;/s-select-option>\n          &lt;s-select-option value="Option1-2">Option1-2&lt;/s-select-option>\n        &lt;/s-select>\n        &lt;s-select defaultValue="Option2-1" style="width:120px">\n          &lt;s-select-option value="Option2-1">Option2-1&lt;/s-select-option>\n          &lt;s-select-option value="Option2-2">Option2-2&lt;/s-select-option>\n        &lt;/s-select>\n    &lt;/s-input-group>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Input from \'santd/input\';\nimport Icon from \'santd/icon\';\nimport {Row, Col} from \'santd/grid\';\nimport Select from \'santd/select\';\nimport InputNumber from \'santd/input-number\';\nimport DatePicker from \'santd/date-picker\';\nexport default {\n    components: {\n        \'s-input\': Input,\n        \'s-input-group\': Input.Group,\n        \'s-row\': Row,\n        \'s-col\': Col,\n        \'s-select\': Select,\n        \'s-select-option\': Select.Option,\n        \'s-inputnumber\': InputNumber,\n        \'s-datepicker\': DatePicker\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="输入框组合"><span>输入框组合</span><a href="#输入框组合" class="anchor">#</a></h4><p>输入框的组合展现。\n注意：使用 <code>compact</code> 模式时，不需要通过 <code>Col</code> 来控制宽度。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.a,"s-input-group":i.a.Group,"s-row":b.b,"s-col":b.a,"s-select":c.a,"s-select-option":c.a.Option,"s-inputnumber":f.a,"s-datepicker":y.a},template:'<div><s-input-group size="large"><s-row gutter="{{8}}"><s-col span="{{5}}"><s-input defaultValue="0571"></s-input></s-col><s-col span="{{8}}"><s-input defaultValue="26888888"></s-input></s-col></s-row></s-input-group><br><s-input-group compact="{{true}}"><s-input style="width: 20%" defaultValue="0571"></s-input><s-input style="width: 30%" defaultValue="26888888"></s-input></s-input-group><br><s-input-group compact="{{true}}"><s-select defaultValue="zhejiang" style="width:120px"><s-select-option value="zhejiang">Zhejiang</s-select-option><s-select-option value="jiangsu">Jiangsu</s-select-option></s-select><s-input style="width: 50%" defaultValue="Xihu District, Hangzhou"></s-input></s-input-group><br><s-input-group compact="{{true}}"><s-select defaultValue="Option" style="width:120px"><s-select-option value="Option">Option</s-select-option><s-select-option value="Option">Option</s-select-option></s-select><s-input style="width: 50%" defaultValue="input content"></s-input><s-inputnumber></s-inputnumber></s-input-group><br><s-input-group compact="{{true}}"><s-input style="width: 50%" defaultValue="input content"></s-input><s-datepicker></s-datepicker></s-input-group><br><s-input-group compact="{{true}}"><s-select defaultValue="Option1-1" style="width:120px"><s-select-option value="Option1-1">Option1-1</s-select-option><s-select-option value="Option1-2">Option1-2</s-select-option></s-select><s-select defaultValue="Option2-1" style="width:120px"><s-select-option value="Option2-1">Option2-1</s-select-option><s-select-option value="Option2-2">Option2-2</s-select-option></s-select></s-input-group></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1596174109207"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},z={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n&lt;div>\n    &lt;s-input placeholder="input with clear icon" allowClear="{{true}}" on-change="onChange"/>\n&lt;/div>\n&lt;/template>\n&lt;script>\nimport Input from \'santd/input\';\nimport Icon from \'santd/icon\';\nexport default {\n    components: {\n        \'s-input\': Input\n    },\n    onChange(value) {\n        console.log(value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="带移除图标"><span>带移除图标</span><a href="#带移除图标" class="anchor">#</a></h4><p>带移除图标的输入框，点击图标删除所有内容</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.a},onChange(t){console.log(t)},template:'<div><s-input placeholder="input with clear icon" allowClear="{{true}}" on-change="onChange"></s-input></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1596174109213"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},O={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n    &lt;s-input-password placeholder=\"input password\" on-change=\"onChange\"/>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Input from 'santd/input';\nexport default {\n    components: {\n        's-input-password': Input.Password\n    },\n    onChange(value) {\n        console.log('the value is: ', value);\n    },\n}\n&lt;/script></code></pre>",text:'\n<h4 id="密码框"><span>密码框</span><a href="#密码框" class="anchor">#</a></h4><p>密码框</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input-password":i.a.Password},onChange(t){console.log("the value is: ",t)},template:'<div><s-input-password placeholder="input password" on-change="onChange"></s-input-password></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1596174109201"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};e.default=o.a.defineComponent({components:{readme:a,head:p,basic:l,addon:r,psfix:m,search:u,size:x,group:E,textarea:g,autoarea:w,tooltip:v,allow:z,password:O},template:"\n        <div>\n            <head/>\n            <basic/>\n            <addon/>\n            <search/>\n            <autoarea/>\n            <psfix/>\n            <allow/>\n            <size/>\n            <group/>\n            <textarea/>\n            <tooltip/>\n            <password/>\n            <readme/>\n        </div>\n    "})},685:function(t,e,n){var s=n(4),o=n(686);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1};s(o,a);t.exports=o.locals||{}},686:function(t,e,n){(e=n(5)(!1)).push([t.i,"\n.example-input .santd-input {\n    width: 200px;\n    margin: 0 8px 8px 0;\n  }\n",""]),t.exports=e}}]);