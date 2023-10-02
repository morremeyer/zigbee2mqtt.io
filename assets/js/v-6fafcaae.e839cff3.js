"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[96563],{892602:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a=JSON.parse('{"key":"v-6fafcaae","path":"/guide/installation/07_python_virtual_environment.html","title":"Python Virtual Environment","lang":"en-US","frontmatter":{"pageClass":"content-page","next":"../configuration/"},"excerpt":"","headers":[{"level":2,"title":"Installing","slug":"installing","link":"#installing","children":[]},{"level":2,"title":"Starting Zigbee2MQTT","slug":"starting-zigbee2mqtt","link":"#starting-zigbee2mqtt","children":[]},{"level":2,"title":"(Optional) Running as a daemon with systemctl","slug":"optional-running-as-a-daemon-with-systemctl","link":"#optional-running-as-a-daemon-with-systemctl","children":[]},{"level":2,"title":"(For later) Update Zigbee2MQTT to the latest version","slug":"for-later-update-zigbee2mqtt-to-the-latest-version","link":"#for-later-update-zigbee2mqtt-to-the-latest-version","children":[]}],"git":{"updatedTime":1696255544000},"filePathRelative":"guide/installation/07_python_virtual_environment.md"}')},560372:(n,e,s)=>{s.r(e),s.d(e,{default:()=>r});var a=s(166252);const i=(0,a._)("h1",{id:"python-virtual-environment",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#python-virtual-environment","aria-hidden":"true"},"#"),(0,a.Uk)(" Python Virtual Environment")],-1),t=(0,a._)("p",null,"It is possible to run Zigbee2MQTT in a virtual environment, this has been tested with a Raspberry Pi 3B+.",-1),l=(0,a.uE)('<h2 id="installing" tabindex="-1"><a class="header-anchor" href="#installing" aria-hidden="true">#</a> Installing</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Clone Zigbee2MQTT repository</span>\n<span class="token function">sudo</span> <span class="token function">git</span> clone <span class="token parameter variable">--depth</span> <span class="token number">1</span> https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt\n<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> pi:pi /opt/zigbee2mqtt\n\n<span class="token comment"># Enter folder</span>\n<span class="token builtin class-name">cd</span> /opt/zigbee2mqtt\n\n<span class="token comment"># Install python env</span>\npython3 <span class="token parameter variable">-m</span> venv <span class="token builtin class-name">.</span>\n\n<span class="token comment"># Activate environment</span>\n<span class="token builtin class-name">source</span> /opt/zigbee2mqtt/bin/activate\n\n<span class="token comment"># Upgrade pip, wheel and setuptools</span>\npip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> pip wheel setuptools\n\n<span class="token comment"># Install node environment</span>\npip <span class="token function">install</span> nodeenv\n\n<span class="token comment"># Init node environment</span>\nnodeenv <span class="token parameter variable">-p</span> <span class="token parameter variable">-n</span> <span class="token number">16.15</span>.0\n\n<span class="token comment"># Deactivate and activate environment to be sure</span>\ndeactivate\n<span class="token builtin class-name">source</span> /opt/zigbee2mqtt/bin/activate\n\n<span class="token comment"># Install dependencies</span>\n<span class="token builtin class-name">cd</span> /opt/zigbee2mqtt\n<span class="token function">npm</span> ci\n\n<span class="token comment"># Deactivate environment</span>\ndeactivate\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="starting-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#starting-zigbee2mqtt" aria-hidden="true">#</a> Starting Zigbee2MQTT</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Enter folder</span>\n<span class="token builtin class-name">cd</span> /opt/zigbee2mqtt\n\n<span class="token comment"># Activate environment</span>\n<span class="token builtin class-name">source</span> /opt/zigbee2mqtt/bin/activate\n\n<span class="token comment"># Start</span>\n<span class="token function">npm</span> start\n\n<span class="token comment"># ctrl + c to quit</span>\n\n<span class="token comment"># Deactivate environment</span>\ndeactivate\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optional-running-as-a-daemon-with-systemctl" tabindex="-1"><a class="header-anchor" href="#optional-running-as-a-daemon-with-systemctl" aria-hidden="true">#</a> (Optional) Running as a daemon with systemctl</h2><p>To run Zigbee2MQTT as daemon (in background) and start it automatically on boot we will run Zigbee2MQTT with systemctl.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Create a systemctl configuration file for Zigbee2MQTT</span>\n<span class="token function">sudo</span> <span class="token function">nano</span> /etc/systemd/system/zigbee2mqtt.service\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Add the following to this file:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>\n<span class="token assign-left variable">Description</span><span class="token operator">=</span>zigbee2mqtt\n<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target\n\n<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>\n<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/bin/bash <span class="token parameter variable">-c</span> <span class="token string">&#39;source /opt/zigbee2mqtt/bin/activate; /opt/zigbee2mqtt/bin/npm start&#39;</span>\n<span class="token assign-left variable">WorkingDirectory</span><span class="token operator">=</span>/opt/zigbee2mqtt\n<span class="token assign-left variable">StandardOutput</span><span class="token operator">=</span>inherit\n<span class="token assign-left variable">StandardError</span><span class="token operator">=</span>inherit\n<span class="token assign-left variable">Restart</span><span class="token operator">=</span>always\n<span class="token assign-left variable">User</span><span class="token operator">=</span>pi\n\n<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>\n<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now continue with <em>Verify that the configuration works:</em> from the <em>Running Zigbee2MQTT guide</em>.</p><h2 id="for-later-update-zigbee2mqtt-to-the-latest-version" tabindex="-1"><a class="header-anchor" href="#for-later-update-zigbee2mqtt-to-the-latest-version" aria-hidden="true">#</a> (For later) Update Zigbee2MQTT to the latest version</h2><p>To update Zigbee2MQTT to the latest version, execute:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Stop Zigbee2MQTT and go to directory</span>\n<span class="token function">sudo</span> systemctl stop zigbee2mqtt\n<span class="token builtin class-name">cd</span> /opt/zigbee2mqtt\n\n<span class="token comment"># Activate environment</span>\n<span class="token builtin class-name">source</span> /opt/zigbee2mqtt/bin/activate\n\n<span class="token comment"># Backup configuration</span>\n<span class="token function">cp</span> <span class="token parameter variable">-R</span> data data-backup\n\n<span class="token comment"># Update</span>\n<span class="token function">git</span> pull\n<span class="token function">npm</span> ci\n\n<span class="token comment"># Restore configuration</span>\n<span class="token function">cp</span> <span class="token parameter variable">-R</span> data-backup/* data\n<span class="token function">rm</span> <span class="token parameter variable">-rf</span> data-backup\n\n<span class="token comment"># Deactivate environment</span>\ndeactivate\n\n<span class="token comment"># Start Zigbee2MQTT</span>\n<span class="token function">sudo</span> systemctl start zigbee2mqtt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',13),c={},r=(0,s(983744).Z)(c,[["render",function(n,e){const s=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[i,t,(0,a._)("p",null,[(0,a.Uk)("This guide is similar to the "),(0,a.Wm)(s,{to:"/guide/installation/01_linux.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("Running Zigbee2MQTT on Linux guide")])),_:1}),(0,a.Uk)(", follow the steps from there by replacing the steps with the ones from below.")]),l])}]])}}]);