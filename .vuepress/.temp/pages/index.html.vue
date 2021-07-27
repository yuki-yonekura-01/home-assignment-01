<template><h1 id="circleci-orbsを活用するメリット" tabindex="-1"><a class="header-anchor" href="#circleci-orbsを活用するメリット" aria-hidden="true">#</a> CircleCI Orbsを活用するメリット</h1>
<p>ここでは、CircleCI Orbs （以下、Orbs ）を利用することで得られるメリットについて説明します。</p>
<h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2>
<p>Orbs は、ジョブ、コマンド、Executor のプロセスをまとめてパッケージ化し、異なるプロジェクト間で共有するための機能です。Orbs を利用することで、複雑なプロジェクトのセットアップ作業を繰り返し行う必要がなくなり、可読性の高い設定ファイルを作成できます。</p>
<h2 id="orb-の種類" tabindex="-1"><a class="header-anchor" href="#orb-の種類" aria-hidden="true">#</a> Orb の種類</h2>
<p>Orbs には、<strong>パブリック Orb</strong> と<strong>プライベート Orb</strong> の二種類あります。利用目的に合わせて、最適な Orb の種類を選択できます。</p>
<table>
<thead>
<tr>
<th>種類</th>
<th style="text-align:center">公認</th>
<th>プロバイダ</th>
<th>公開場所</th>
<th>利用目的</th>
</tr>
</thead>
<tbody>
<tr>
<td>パブリック Orb</td>
<td style="text-align:center">✅</td>
<td>CircleCI<br>パートナー</td>
<td><a href="https://circleci.com/developer/ja/orbs" target="_blank" rel="noopener noreferrer">Orb レジストリ<OutboundLink/></a></td>
<td>CircleCIが公認した Orb を利用したい場合</td>
</tr>
<tr>
<td>パブリック Orb</td>
<td style="text-align:center">❌</td>
<td>サードパーティ</td>
<td><a href="https://circleci.com/developer/ja/orbs" target="_blank" rel="noopener noreferrer">Orb レジストリ<OutboundLink/></a></td>
<td>公認 Orb に利用したい Orb がない場合</td>
</tr>
<tr>
<td>プライベート Orb</td>
<td style="text-align:center">❌</td>
<td>自社</td>
<td>組織内にのみ公開</td>
<td>独自の設定をパッケージ化したい場合</td>
</tr>
</tbody>
</table>
<h2 id="主なメリット" tabindex="-1"><a class="header-anchor" href="#主なメリット" aria-hidden="true">#</a> 主なメリット</h2>
<p>Orbs を利用するメリットは多くありますが、主に以下の3点が挙げられます。</p>
<h3 id="迅速な環境セットアップ" tabindex="-1"><a class="header-anchor" href="#迅速な環境セットアップ" aria-hidden="true">#</a> 迅速な環境セットアップ</h3>
<p>Orbs を使えば、Node.js の環境設定もわずか数行で行うことができます。</p>
<ul>
<li>
<p><strong>Orbを利用しない場合：</strong></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">docker</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> cimg/node<span class="token punctuation">:</span>&lt;node<span class="token punctuation">-</span>version<span class="token punctuation">></span>
    <span class="token key atrule">auth</span><span class="token punctuation">:</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> mydockerhub<span class="token punctuation">-</span>user
      <span class="token key atrule">password</span><span class="token punctuation">:</span> $DOCKERHUB_PASSWORD
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
<li>
<p><strong>Orbを利用した場合：</strong></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">orbs</span><span class="token punctuation">:</span>
  <span class="token key atrule">node</span><span class="token punctuation">:</span> circleci/node@x.y
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
</ul>
<h3 id="属人化の解消" tabindex="-1"><a class="header-anchor" href="#属人化の解消" aria-hidden="true">#</a> 属人化の解消</h3>
<p>設定ファイルが複雑化すると、管理業務が属人化します。Orbs を使うことで、管理業務を社内外で共有でき、管理コストとリスクを低減できます。</p>
<p><img src="orbs.png" alt=""></p>
<h3 id="サービス導入の簡易化" tabindex="-1"><a class="header-anchor" href="#サービス導入の簡易化" aria-hidden="true">#</a> サービス導入の簡易化</h3>
<p><a href="https://circleci.com/developer/ja/orbs" target="_blank" rel="noopener noreferrer">Orb レジストリ<OutboundLink/></a>では、AWS や Slack など、サードパーティのサービスを効率的に導入するための Orb を提供しています。</p>
<p><img src="orbs.png" alt=""></p>
</template>
