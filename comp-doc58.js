(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{589:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),d={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h3 id="transfer"><span>Transfer</span><a href="#transfer" class="anchor">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dataSource</td><td>数据源，其中的数据将会被渲染到左边一栏中，<code>targetKeys</code> 中指定的除外。</td><td>TransferItem[]</td><td><code>[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td><code>false</code></td></tr><tr><td>filterOption</td><td>接收 <code>inputValue</code> <code>option</code> 两个参数，当 <code>option</code> 符合筛选条件时，应返回 <code>true</code>，反之则返回 <code>false</code>。</td><td>(inputValue, option): boolean</td><td>-</td></tr><tr><td>footer</td><td>底部插槽</td><td>slot</td><td>-</td></tr><tr><td>listStyle</td><td>两个穿梭框的自定义样式</td><td>object</td><td>-</td></tr><tr><td>operations</td><td>操作文案集合，顺序从上至下</td><td>string[]</td><td><code>[&#39;&gt;&#39;, &#39;&lt;&#39;]</code></td></tr><tr><td>render</td><td>每行数据渲染插槽</td><td>slot</td><td>-</td></tr><tr><td>leftRenderList</td><td>左边栏整体渲染插槽</td><td>slot</td><td>-</td></tr><tr><td>rightRenderList</td><td>右边栏整体渲染插槽</td><td>slot</td><td>-</td></tr><tr><td>selectedKeys</td><td>设置哪些项应该被选中</td><td>string[]</td><td><code>[]</code></td></tr><tr><td>showSearch</td><td>是否显示搜索框</td><td>boolean</td><td><code>false</code></td></tr><tr><td>showSelectAll</td><td>是否显示全选勾选框</td><td>boolean</td><td><code>true</code></td></tr><tr><td>targetKeys</td><td>显示在右侧框数据的key集合</td><td>string[]</td><td><code>[]</code></td></tr><tr><td>titles</td><td>标题集合，顺序从左至右</td><td>string[]</td><td><code>[&#39;&#39;, &#39;&#39;]</code></td></tr><tr><td>on-change</td><td>选项在两栏之间转移时的回调函数</td><td>({targetKeys, direction, moveKeys}): void</td><td>-</td></tr><tr><td>on-scroll</td><td>选项列表滚动时的回调函数</td><td>({direction, event}): void</td><td>-</td></tr><tr><td>on-search</td><td>搜索框内容时改变时的回调函数</td><td>({direction: &#39;left&#39;|&#39;right&#39;, value: string}): void</td><td>-</td></tr><tr><td>on-selectChange</td><td>选中项发生改变时的回调函数</td><td>({sourceSelectedKeys, targetSelectedKeys}): void</td><td>-</td></tr></tbody></table><h3 id="leftrenderlist-amp-rightrenderlist-props"><span>leftRenderList &amp; rightRenderList Props</span><a href="#leftrenderlist-amp-rightrenderlist-props" class="anchor">#</a></h3><p>Transfer支持leftRenderList和rightRenderList插槽来自定义渲染列表，在组件里面可以使用以下参数：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>direction</td><td>渲染列表的方向</td><td>&#39;left&#39; | &#39;right&#39;</td></tr><tr><td>disabled</td><td>是否禁用列表</td><td>boolean</td></tr><tr><td>filteredItems</td><td>过滤后的数据</td><td>TransferItem[]</td></tr><tr><td>selectedKeys</td><td>选中的条目</td><td>string[]</td></tr></tbody></table></section>'},o=n(117),c=n(94);const i=[];for(let e=0;e<20;e++)i.push({key:e.toString(),title:"content"+(e+1),description:"description of content"+(e+1),disabled:e%3<1});const r=i.filter(e=>+e.key%3>1).map(e=>e.key);var l={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-transfer\n            disabled=\"{{disabled}}\"\n            dataSource=\"{{mockData}}\"\n            targetKeys=\"{{targetKeys}}\"\n            titles=\"{{['Source', 'Target']}}\"\n            on-selectChange=\"handleSelectChange\"\n            on-change=\"handleChange\"\n            on-scroll=\"handleScroll\"\n            selectedKeys=\"{{selectedKeys}}\"\n        >\n            &lt;span slot=\"render\">{{item.title}}&lt;/span>\n        &lt;/s-transfer>\n        &lt;s-switch\n            checkedChildren=\"disabled\"\n            unCheckedChildren=\"disabled\"\n            checked=\"{{disabled}}\"\n            on-change=\"handleDisable\"\n            style=\"margin-top: 16px\"\n        />\n    &lt;/div>\n&lt;/template>\n&lt;script>\n\nconst mockData = [];\nfor (let i = 0; i &lt; 20; i++) {\n    mockData.push({\n        key: i.toString(),\n        title: &#96;content&#36;&#123;i + 1}&#96;,\n        description: &#96;description of content&#36;&#123;i + 1}&#96;,\n        disabled: i % 3 &lt; 1\n    });\n}\n\nconst oriTargetKeys = mockData\n    .filter(item => +item.key % 3 > 1)\n    .map(item => item.key);\n\nimport transfer from 'santd/transfer';\nimport Switch from 'santd/switch';\nexport default {\n    initData() {\n        return {\n            disabled: false,\n            mockData: mockData,\n            targetKeys: oriTargetKeys,\n            selectedKeys: []\n        };\n    },\n    components: {\n        's-transfer': transfer,\n        's-switch': Switch\n    },\n    handleChange({targetKeys, direction, moveKeys}) {\n        this.data.set('targetKeys', targetKeys);\n\n        console.log('targetKeys: ', targetKeys);\n        console.log('direction: ', direction);\n        console.log('moveKeys: ', moveKeys);\n    },\n    handleSearch(param) {\n        console.log('on-search', param);\n    },\n    handleSelectChange({sourceSelectedKeys, targetSelectedKeys}) {\n        this.data.set('selectedKeys', [...sourceSelectedKeys, ...targetSelectedKeys]);\n\n        console.log('sourceSelectedKeys: ', sourceSelectedKeys);\n        console.log('targetSelectedKeys: ', targetSelectedKeys);\n    },\n    handleScroll({direction, e}) {\n        console.log('direction: ', direction);\n        console.log('target: ', e.target);\n    },\n    handleDisable(disable) {\n        this.data.set('disabled', disable);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本用法"><span>基本用法</span><a href="#基本用法" class="anchor">#</a></h4><p>最基本的用法，展示了 <code>dataSource</code>、<code>targetKeys</code>、每行的渲染函数 <code>render</code> 以及回调函数 <code>on-change</code> <code>on-selectChange</code> <code>on-scroll</code>的用法</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{initData:()=>({disabled:!1,mockData:i,targetKeys:r,selectedKeys:[]}),components:{"s-transfer":o.a,"s-switch":c.a},handleChange({targetKeys:e,direction:t,moveKeys:n}){this.data.set("targetKeys",e),console.log("targetKeys: ",e),console.log("direction: ",t),console.log("moveKeys: ",n)},handleSearch(e){console.log("on-search",e)},handleSelectChange({sourceSelectedKeys:e,targetSelectedKeys:t}){this.data.set("selectedKeys",[...e,...t]),console.log("sourceSelectedKeys: ",e),console.log("targetSelectedKeys: ",t)},handleScroll({direction:e,e:t}){console.log("direction: ",e),console.log("target: ",t.target)},handleDisable(e){this.data.set("disabled",e)},template:'<div><s-transfer disabled="{{disabled}}" dataSource="{{mockData}}" targetKeys="{{targetKeys}}" titles="{{[\'Source\', \'Target\']}}" on-selectChange="handleSelectChange" on-change="handleChange" on-scroll="handleScroll" selectedKeys="{{selectedKeys}}"><span slot="render">{{item.title}}</span></s-transfer><s-switch checkedChildren="disabled" unCheckedChildren="disabled" checked="{{disabled}}" on-change="handleDisable" style="margin-top: 16px"></s-switch></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1596174090077"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-transfer\n            dataSource="{{mockData}}"\n            targetKeys="{{targetKeys}}"\n            filterOption="{{filterOption}}"\n            showSearch="{{true}}"\n            on-change="handleChange"\n            on-search="handleSearch"\n        />\n    &lt;/div>\n&lt;/template>\n&lt;script>\n\nimport transfer from \'santd/transfer\';\nexport default {\n    initData() {\n        return {\n            mockData: [],\n            targetKeys: [],\n            filterOption: (inputValue, option) => option.description.indexOf(inputValue) > -1\n        };\n    },\n    attached() {\n        this.getMock();\n    },\n    getMock() {\n        const targetKeys = [];\n        const mockData = [];\n        for (let i = 0; i &lt; 20; i++) {\n            const data = {\n                key: i.toString(),\n                title: &#96;content&#36;&#123;i + 1}&#96;,\n                description: &#96;description of content&#36;&#123;i + 1}&#96;,\n                chosen: Math.random() * 2 > 1\n            };\n            if (data.chosen) {\n                targetKeys.push(data.key);\n            }\n            mockData.push(data);\n        }\n        this.data.set(\'mockData\', mockData);\n        this.data.set(\'targetKeys\', targetKeys);\n    },\n    components: {\n        \'s-transfer\': transfer\n    },\n    handleChange({targetKeys}) {\n        this.data.set(\'targetKeys\', targetKeys);\n    },\n    handleSearch({direction, value}) {\n        console.log(\'search: \', direction, value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="带搜索框"><span>带搜索框</span><a href="#带搜索框" class="anchor">#</a></h4><p>带搜索框的穿梭框，可以自定义搜索函数。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{initData:()=>({mockData:[],targetKeys:[],filterOption:(e,t)=>t.description.indexOf(e)>-1}),attached(){this.getMock()},getMock(){const e=[],t=[];for(let n=0;n<20;n++){const s={key:n.toString(),title:"content"+(n+1),description:"description of content"+(n+1),chosen:2*Math.random()>1};s.chosen&&e.push(s.key),t.push(s)}this.data.set("mockData",t),this.data.set("targetKeys",e)},components:{"s-transfer":o.a},handleChange({targetKeys:e}){this.data.set("targetKeys",e)},handleSearch({direction:e,value:t}){console.log("search: ",e,t)},template:'<div><s-transfer dataSource="{{mockData}}" targetKeys="{{targetKeys}}" filterOption="{{filterOption}}" showSearch="{{true}}" on-change="handleChange" on-search="handleSearch"></s-transfer></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1596174090069"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},p=n(10),g={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-transfer\n            dataSource="{{mockData}}"\n            targetKeys="{{targetKeys}}"\n            on-change="handleChange"\n            operations="{{[\'to Right\', \'to Left\']}}"\n            listStyle="width: 250px; height: 300px;"\n            showSearch="{{true}}"\n        >\n            &lt;span slot="footer">\n                &lt;s-button size="small" style="float: right; margin: 5px;" on-click="getMock">\n                    reload\n                &lt;/s-button>\n            &lt;/span>\n        &lt;/s-transfer>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Transfer from \'santd/transfer\';\nimport Button from \'santd/button\';\nimport san from \'san\';\n\nexport default {\n    initData() {\n        return {\n            mockData: [],\n            targetKeys: []\n        };\n    },\n    attached() {\n        this.getMock();\n    },\n    getMock() {\n        const targetKeys = [];\n        const mockData = [];\n        for (let i = 0; i &lt; 20; i++) {\n            const data = {\n                key: i.toString(),\n                title: &#96;content&#36;&#123;i + 1}&#96;,\n                description: &#96;description of content&#36;&#123;i + 1}&#96;,\n                chosen: Math.random() * 2 > 1\n            };\n            if (data.chosen) {\n                targetKeys.push(data.key);\n            }\n            mockData.push(data);\n        }\n        this.data.set(\'mockData\', mockData);\n        this.data.set(\'targetKeys\', targetKeys);\n    },\n    components: {\n        \'s-transfer\': Transfer,\n        \'s-button\': Button\n    },\n    handleChange({targetKeys}) {\n        this.data.set(\'targetKeys\', targetKeys);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="高级用法"><span>高级用法</span><a href="#高级用法" class="anchor">#</a></h4><p>穿梭框高级用法，可配置操作文案，可定制宽高，可对底部进行自定义渲染。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{initData:()=>({mockData:[],targetKeys:[]}),attached(){this.getMock()},getMock(){const e=[],t=[];for(let n=0;n<20;n++){const s={key:n.toString(),title:"content"+(n+1),description:"description of content"+(n+1),chosen:2*Math.random()>1};s.chosen&&e.push(s.key),t.push(s)}this.data.set("mockData",t),this.data.set("targetKeys",e)},components:{"s-transfer":o.a,"s-button":p.a},handleChange({targetKeys:e}){this.data.set("targetKeys",e)},template:'<div><s-transfer dataSource="{{mockData}}" targetKeys="{{targetKeys}}" on-change="handleChange" operations="{{[\'to Right\', \'to Left\']}}" listStyle="width: 250px; height: 300px;" showSearch="{{true}}"><span slot="footer"><s-button size="small" style="float: right; margin: 5px;" on-click="getMock">reload</s-button></span></s-transfer></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1596174090044"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},m={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-transfer\n            dataSource=\"{{mockData}}\"\n            listStyle=\"{{listStyle}}\"\n            targetKeys=\"{{targetKeys}}\"\n            on-change=\"handleChange\"\n        >\n            &lt;span class=\"custom-item\" slot=\"render\">{{item.title}} - {{item.description}}&lt;/span>\n        &lt;/s-transfer>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Transfer from 'santd/transfer';\nimport san from 'san';\n\nexport default {\n    initData() {\n        return {\n            mockData: [],\n            targetKeys: [],\n            listStyle: 'width: 250px; height: 300px;',\n        };\n    },\n    attached() {\n        this.getMock();\n    },\n    getMock() {\n        const targetKeys = [];\n        const mockData = [];\n        for (let i = 0; i &lt; 20; i++) {\n            const data = {\n                key: i.toString(),\n                title: &#96;content&#36;&#123;i + 1}&#96;,\n                description: &#96;description of content&#36;&#123;i + 1}&#96;,\n                chosen: Math.random() * 2 > 1\n            };\n            if (data.chosen) {\n                targetKeys.push(data.key);\n            }\n            mockData.push(data);\n        }\n        this.data.set('mockData', mockData);\n        this.data.set('targetKeys', targetKeys);\n    },\n    components: {\n        's-transfer': Transfer\n    },\n    handleChange({targetKeys}) {\n        this.data.set('targetKeys', targetKeys);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="自定义渲染行数据"><span>自定义渲染行数据</span><a href="#自定义渲染行数据" class="anchor">#</a></h4><p>自定义渲染每一个 Transfer Item，可用于渲染复杂数据。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{initData:()=>({mockData:[],targetKeys:[],listStyle:"width: 250px; height: 300px;"}),attached(){this.getMock()},getMock(){const e=[],t=[];for(let n=0;n<20;n++){const s={key:n.toString(),title:"content"+(n+1),description:"description of content"+(n+1),chosen:2*Math.random()>1};s.chosen&&e.push(s.key),t.push(s)}this.data.set("mockData",t),this.data.set("targetKeys",e)},components:{"s-transfer":o.a},handleChange({targetKeys:e}){this.data.set("targetKeys",e)},template:'<div><s-transfer dataSource="{{mockData}}" listStyle="{{listStyle}}" targetKeys="{{targetKeys}}" on-change="handleChange"><span class="custom-item" slot="render">{{item.title}} - {{item.description}}</span></s-transfer></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1596174090053"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},y=(n(818),n(92)),f=n(55);const K=["cat","dog","bird"],k=[];for(let e=0;e<20;e++)k.push({key:e.toString(),title:"content"+(e+1),description:"description of content"+(e+1),disabled:e%4==0,tag:K[e%3]});const b=k.filter(e=>+e.key%3>1).map(e=>e.key),x=[{dataIndex:"title",title:"Name"},{dataIndex:"tag",title:"Tag",scopedSlots:{render:"tag"}},{dataIndex:"description",title:"Description"}],u=[{dataIndex:"title",title:"Name"}],w=a.a.defineComponent({components:{"s-table":y.a,"s-tag":f.a},initData(){return{rowSelection:{selectedRowKeys:[],handleSelect:this.handleSelectItem.bind(this),handleSelectAll:this.handleSelectAll.bind(this),getCheckboxProps:e=>({disabled:e.disabled})}}},inited(){this.watch("selectedKeys",e=>{this.data.set("rowSelection.selectedRowKeys",e)}),this.watch("disabled",e=>{this.data.set("rowSelection.getCheckboxProps",t=>({disabled:e||t.disabled}))})},computed:{columns(){return"left"===this.data.get("direction")?x:u}},handleSelectAll(e,t){const n=e.map(({key:e})=>e);this.dispatch("santd_transfer_itemSelectAll",{selectedKeys:n,checkAll:t})},handleSelectItem(e,t){this.dispatch("santd_transfer_itemSelect",{selectedKey:e.key,checked:t})},template:'<div>\n        <s-table\n            columns="{{columns}}"\n            data="{{filteredItems}}"\n            size="small"\n            rowSelection="{{rowSelection}}"\n        >\n            <span slot="tag">\n                <s-tag>{{text}}</s-tag>\n            </span>\n        </s-table>\n    </div>'});var S={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-transfer\n            disabled=\"{{disabled}}\"\n            dataSource=\"{{mockData}}\"\n            sourceKeys=\"{{sourceKeys}}\"\n            targetKeys=\"{{targetKeys}}\"\n            showSelectAll=\"{{false}}\"\n            showSearch=\"{{showSearch}}\"\n            filterOption=\"{{filterOption}}\"\n            on-change=\"handleChange\"\n        >\n            &lt;s-transfertable\n                slot=\"leftRenderList\"\n                direction=\"{{direction}}\"\n                filteredItems=\"{{filteredItems}}\"\n                selectedKeys=\"{{selectedKeys}}\"\n                disabled=\"{{disabled}}\"\n            >\n            &lt;/s-transfertable>\n            &lt;s-transfertable\n                slot=\"rightRenderList\"\n                direction=\"{{direction}}\"\n                filteredItems=\"{{filteredItems}}\"\n                selectedKeys=\"{{selectedKeys}}\"\n                disabled=\"{{disabled}}\"\n            />\n        &lt;/s-transfer>\n        &lt;s-switch\n            checkedChildren=\"disabled\"\n            unCheckedChildren=\"disabled\"\n            checked=\"{{disabled}}\"\n            on-change=\"handleDisable\"\n            style=\"margin-top: 16px\"\n        />\n        &lt;s-switch\n            checkedChildren=\"showSearch\"\n            unCheckedChildren=\"showSearch\"\n            checked=\"{{showSearch}}\"\n            on-change=\"handleShowSearch\"\n            style=\"margin-top: 16px\"\n        />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nconst mockTags = ['cat', 'dog', 'bird'];\nconst mockData = [];\nfor (let i = 0; i &lt; 20; i++) {\n    mockData.push({\n        key: i.toString(),\n        title: &#96;content&#36;&#123;i + 1}&#96;,\n        description: &#96;description of content&#36;&#123;i + 1}&#96;,\n        disabled: i % 4 === 0,\n        tag: mockTags[i % 3],\n    });\n}\n\nconst originTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);\n\nconst leftTableColumns = [{\n    dataIndex: 'title',\n    title: 'Name',\n}, {\n    dataIndex: 'tag',\n    title: 'Tag',\n    scopedSlots: {render: 'tag'}\n}, {\n    dataIndex: 'description',\n    title: 'Description',\n}];\n\nconst rightTableColumns = [{\n    dataIndex: 'title',\n    title: 'Name'\n}];\n\nimport san from 'san';\nimport difference from 'lodash/difference';\nimport transfer from 'santd/transfer';\nimport Switch from 'santd/switch';\nimport Table from 'santd/table';\nimport Tag from 'santd/tag';\n\nconst transferTable = san.defineComponent({\n    components: {\n        's-table': Table,\n        's-tag': Tag\n    },\n    initData() {\n        return {\n            rowSelection: {\n                selectedRowKeys: [],\n                handleSelect: this.handleSelectItem.bind(this),\n                handleSelectAll: this.handleSelectAll.bind(this),\n                getCheckboxProps(record) {\n                    return {\n                        disabled: record.disabled\n                    };\n                }\n            }\n        }\n    },\n    inited() {\n        this.watch('selectedKeys', val => {\n            this.data.set('rowSelection.selectedRowKeys', val);\n        });\n\n        this.watch('disabled', val => {\n            this.data.set('rowSelection.getCheckboxProps', (record) => { \n                return { \n                    disabled: val || record.disabled\n                }\n            })\n        })\n    },\n    computed: {\n        columns() {\n            const direction = this.data.get('direction');\n            return direction === 'left' ? leftTableColumns : rightTableColumns;\n        }\n    },\n    handleSelectAll(selectedRows, checked) {\n        const treeSelectedKeys = selectedRows.map(({key}) => key);\n\n        this.dispatch('santd_transfer_itemSelectAll', {selectedKeys: treeSelectedKeys, checkAll: checked});\n    },\n    handleSelectItem(record, checked) {\n        this.dispatch('santd_transfer_itemSelect', {selectedKey: record.key, checked});\n    },\n    template: &#96;&lt;div>\n        &lt;s-table\n            columns=\"{{columns}}\"\n            data=\"{{filteredItems}}\"\n            size=\"small\"\n            rowSelection=\"{{rowSelection}}\"\n        >\n            &lt;span slot=\"tag\">\n                &lt;s-tag>{{text}}&lt;/s-tag>\n            &lt;/span>\n        &lt;/s-table>\n    &lt;/div>&#96;\n});\n\nexport default {\n    initData() {\n        return {\n            disabled: false,\n            showSearch: false,\n            mockData: mockData,\n            targetKeys: originTargetKeys,\n            selectedKeys: [],\n            filterOption(inputValue, item) {\n                return item.title.indexOf(inputValue) !== -1 || item.tag.indexOf(inputValue) !== -1\n            }\n        };\n    },\n    components: {\n        's-transfer': transfer,\n        's-switch': Switch,\n        's-transfertable': transferTable\n    },\n    handleChange({targetKeys}) {\n        this.data.set('targetKeys', targetKeys);\n        this.data.set('selectedKeys', []);\n    },\n    handleDisable(disable) {\n        this.data.set('disabled', disable);\n    },\n    handleShowSearch(disable) {\n        this.data.set('showSearch', disable);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="表格穿梭框"><span>表格穿梭框</span><a href="#表格穿梭框" class="anchor">#</a></h4><p>使用 Table 组件作为自定义渲染列表。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{initData:()=>({disabled:!1,showSearch:!1,mockData:k,targetKeys:b,selectedKeys:[],filterOption:(e,t)=>-1!==t.title.indexOf(e)||-1!==t.tag.indexOf(e)}),components:{"s-transfer":o.a,"s-switch":c.a,"s-transfertable":w},handleChange({targetKeys:e}){this.data.set("targetKeys",e),this.data.set("selectedKeys",[])},handleDisable(e){this.data.set("disabled",e)},handleShowSearch(e){this.data.set("showSearch",e)},template:'<div><s-transfer disabled="{{disabled}}" dataSource="{{mockData}}" sourceKeys="{{sourceKeys}}" targetKeys="{{targetKeys}}" showSelectAll="{{false}}" showSearch="{{showSearch}}" filterOption="{{filterOption}}" on-change="handleChange"><s-transfertable slot="leftRenderList" direction="{{direction}}" filteredItems="{{filteredItems}}" selectedKeys="{{selectedKeys}}" disabled="{{disabled}}"></s-transfertable><s-transfertable slot="rightRenderList" direction="{{direction}}" filteredItems="{{filteredItems}}" selectedKeys="{{selectedKeys}}" disabled="{{disabled}}"></s-transfertable></s-transfer><s-switch checkedChildren="disabled" unCheckedChildren="disabled" checked="{{disabled}}" on-change="handleDisable" style="margin-top: 16px"></s-switch><s-switch checkedChildren="showSearch" unCheckedChildren="showSearch" checked="{{showSearch}}" on-change="handleShowSearch" style="margin-top: 16px"></s-switch></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1596174090037"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},D=n(44);const v=[];!function e(t=[]){t.forEach(t=>{v.push(t),e(t.children)})}([{key:"0-0",title:"0-0"},{key:"0-1",title:"0-1",children:[{key:"0-1-0",title:"0-1-0"},{key:"0-1-1",title:"0-1-1"}]},{key:"0-2",title:"0-3"}]);const C=(e,t)=>-1!==e.indexOf(t),E=a.a.defineComponent({components:{"s-tree":D.a,"s-treenode":D.a.TreeNode},computed:{checkedKeys(){return[...this.data.get("selectedKeys"),...this.data.get("targetKeys")]}},handleCheck({info:e}){const t=e.node.data.get("key"),n=this.data.get("checkedKeys");this.dispatch("santd_transfer_itemSelect",{selectedKey:t,checked:!C(n,t)})},handleSelect({info:e}){const t=e.node.data.get("key"),n=this.data.get("checkedKeys");this.dispatch("santd_transfer_itemSelect",{selectedKey:t,checked:!C(n,t)})},isDisabled:(e,t)=>e.includes(t),template:'<div>\n        <s-tree\n            blockNode\n            checkable\n            defaultExpandAll\n            checkedKeys="{{checkedKeys}}"\n            on-check="handleCheck"\n            on-select="handleSelect"\n        >\n            <s-treenode key="0-0" title="0-0" disabled="{{isDisabled(targetKeys, \'0-0\')}}"></s-treenode>\n            <s-treenode key="0-1" title="0-1" disabled="{{isDisabled(targetKeys, \'0-1\')}}">\n                <s-treenode key="0-1-0" title="0-1-0" disabled="{{isDisabled(targetKeys, \'0-1-0\')}}"></s-treenode>\n                <s-treenode key="0-1-1" title="0-1-1" disabled="{{isDisabled(targetKeys, \'0-1-1\')}}"></s-treenode>\n            </s-treenode>\n            <s-treenode key="0-2" title="0-3" disabled="{{isDisabled(targetKeys, \'0-2\')}}"></s-treenode>\n        </s-tree>\n    </div>'});var T={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-transfer\n            disabled=\"{{disabled}}\"\n            dataSource=\"{{mockData}}\"\n            targetKeys=\"{{targetKeys}}\"\n            showSelectAll=\"{{false}}\"\n            on-change=\"handleChange\"\n        >\n            &lt;s-transfertree slot=\"leftRenderList\"\n                selectedKeys=\"{{selectedKeys}}\"\n                targetKeys=\"{{targetKeys}}\"\n            />\n        &lt;/s-transfer>\n    &lt;/div>\n&lt;/template>\n&lt;script>\n\nconst treeData = [{\n    key: '0-0', title: '0-0'\n}, {\n    key: '0-1',\n    title: '0-1',\n    children: [{\n        key: '0-1-0', title: '0-1-0'\n    }, {\n        key: '0-1-1', title: '0-1-1'\n    }]\n}, {\n    key: '0-2', title: '0-3'\n}];\n\nconst transferDataSource = [];\nfunction flatten(list = []) {\n    list.forEach(item => {\n        transferDataSource.push(item);\n        flatten(item.children);\n    });\n}\nflatten(treeData);\n\nimport san from 'san';\nimport transfer from 'santd/transfer';\nimport Tree from 'santd/tree';\n\nconst isChecked = (selectedKeys, eventKey) => {\n    return selectedKeys.indexOf(eventKey) !== -1;\n};\n\nconst transferTree = san.defineComponent({\n    components: {\n        's-tree': Tree,\n        's-treenode': Tree.TreeNode\n    },\n    computed: {\n        checkedKeys() {\n            const selectedKeys = this.data.get('selectedKeys');\n            const targetKeys = this.data.get('targetKeys');\n            return [...selectedKeys, ...targetKeys];\n        }\n    },\n    handleCheck({info}) {\n        const selectedKey = info.node.data.get('key');\n        const checkedKeys = this.data.get('checkedKeys');\n        this.dispatch('santd_transfer_itemSelect', {selectedKey, checked: !isChecked(checkedKeys, selectedKey)});\n    },\n    handleSelect({info}) {\n        const selectedKey = info.node.data.get('key');\n        const checkedKeys = this.data.get('checkedKeys');\n        this.dispatch('santd_transfer_itemSelect', {selectedKey, checked: !isChecked(checkedKeys, selectedKey)});\n    },\n    isDisabled(checkedKeys, key) {\n        return checkedKeys.includes(key);\n    },\n    template: &#96;&lt;div>\n        &lt;s-tree\n            blockNode\n            checkable\n            defaultExpandAll\n            checkedKeys=\"{{checkedKeys}}\"\n            on-check=\"handleCheck\"\n            on-select=\"handleSelect\"\n        >\n            &lt;s-treenode key=\"0-0\" title=\"0-0\" disabled=\"{{isDisabled(targetKeys, '0-0')}}\">&lt;/s-treenode>\n            &lt;s-treenode key=\"0-1\" title=\"0-1\" disabled=\"{{isDisabled(targetKeys, '0-1')}}\">\n                &lt;s-treenode key=\"0-1-0\" title=\"0-1-0\" disabled=\"{{isDisabled(targetKeys, '0-1-0')}}\">&lt;/s-treenode>\n                &lt;s-treenode key=\"0-1-1\" title=\"0-1-1\" disabled=\"{{isDisabled(targetKeys, '0-1-1')}}\">&lt;/s-treenode>\n            &lt;/s-treenode>\n            &lt;s-treenode key=\"0-2\" title=\"0-3\" disabled=\"{{isDisabled(targetKeys, '0-2')}}\">&lt;/s-treenode>\n        &lt;/s-tree>\n    &lt;/div>&#96;\n});\n\nexport default {\n    initData() {\n        return {\n            disabled: false,\n            showSearch: false,\n            mockData: transferDataSource,\n            targetKeys: []\n        };\n    },\n    components: {\n        's-transfer': transfer,\n        's-transfertree': transferTree\n    },\n    handleChange({targetKeys}) {\n        this.data.set('targetKeys', targetKeys);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="树穿梭框"><span>树穿梭框</span><a href="#树穿梭框" class="anchor">#</a></h4><p>使用 Tree 组件作为自定义渲染列表。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{initData:()=>({disabled:!1,showSearch:!1,mockData:v,targetKeys:[]}),components:{"s-transfer":o.a,"s-transfertree":E},handleChange({targetKeys:e}){this.data.set("targetKeys",e)},template:'<div><s-transfer disabled="{{disabled}}" dataSource="{{mockData}}" targetKeys="{{targetKeys}}" showSelectAll="{{false}}" on-change="handleChange"><s-transfertree slot="leftRenderList" selectedKeys="{{selectedKeys}}" targetKeys="{{targetKeys}}"></s-transfertree></s-transfer></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1596174090025"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},O={template:'<section class="markdown"><h1 id="transfer-穿梭框"><span>Transfer 穿梭框</span><a href="#transfer-穿梭框" class="anchor">#</a></h1><p>双栏穿梭选择框。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul><li>需要在多个可选项中进行多选时。</li><li>比起 Select 和 TreeSelect，穿梭框占据更大的空间，可以展示可选项的更多信息。</li></ul><p>穿梭选择框用直观的方式在两栏中移动元素，完成选择行为。</p><p>选择一个或以上的选项后，点击对应的方向键，可以把选中的选项移动到另一栏。其中，左边一栏为 <code>source</code>，右边一栏为 <code>target</code>，API 的设计也反映了这两个概念。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'};t.default=a.a.defineComponent({components:{readme:d,basic:l,search:h,advance:g,render:m,table:S,tree:T,head:O},template:"\n        <div>\n            <head/>\n            <basic/>\n            <search/>\n            <advance/>\n            <render/>\n            <table/>\n            <tree/>\n            <readme/>\n        </div>\n    "})},818:function(e,t,n){var s=n(317),a=n(819),d=n(318),o=n(319),c=d((function(e,t){return o(e)?s(e,a(t,1,o,!0)):[]}));e.exports=c},819:function(e,t,n){var s=n(320),a=n(820);e.exports=function e(t,n,d,o,c){var i=-1,r=t.length;for(d||(d=a),c||(c=[]);++i<r;){var l=t[i];n>0&&d(l)?n>1?e(l,n-1,d,o,c):s(c,l):o||(c[c.length]=l)}return c}},820:function(e,t,n){var s=n(58),a=n(73),d=n(24),o=s?s.isConcatSpreadable:void 0;e.exports=function(e){return d(e)||a(e)||!!(o&&e&&e[o])}}}]);