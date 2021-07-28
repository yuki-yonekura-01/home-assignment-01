# CircleCI Orbsを活用するメリット
ここでは、CircleCI Orbs （以下、Orbs ）を利用することで得られるメリットについて説明します。

## 概要
Orbs は、ジョブ、コマンド、Executor のプロセスをまとめてパッケージ化し、異なるプロジェクト間で共有するための機能です。Orbs を利用することで、複雑なプロジェクトのセットアップ作業を繰り返し行う必要がなくなり、可読性の高い設定ファイルを作成できます。

## Orb の種類
Orbs には、**パブリック Orb** と**プライベート Orb** の二種類あります。利用目的に合わせて、最適な Orb の種類を選択できます。

|種類|CircleCI公認|プロバイダ|公開場所|利用目的|
|---|:---:|---|---|---|
|パブリック Orb|✅|CircleCI<br>パートナー|[Orb レジストリ](https://circleci.com/developer/ja/orbs)|CircleCI公認の Orb を利用したい場合|
|パブリック Orb|❌|サードパーティ|[Orb レジストリ](https://circleci.com/developer/ja/orbs)|公認 Orb に利用したい Orb がない場合|
|プライベート Orb|❌|自社|組織内にのみ公開|独自の設定をパッケージ化したい場合|

## 主なメリット
Orbs を利用するメリットは多くありますが、主に以下の3点が挙げられます。

### 迅速な環境セットアップ
Orbs を使えば、Node.js の環境設定もわずか数行で行うことができます。

- **Orbを利用しない場合：**
  ```yml
  docker:
    - image: cimg/node:<node-version>
      auth:
        username: mydockerhub-user
        password: $DOCKERHUB_PASSWORD
  ```
- **Orbを利用した場合：**
  ```yml
  orbs:
    node: circleci/node@x.y
  ```

### 属人化の解消
設定ファイルが複雑になると、管理業務は属人化します。Orbs を使うことで、管理業務を社内外で共有でき、管理コストとリスクを低減できます。

![](reg.svg)

### サービス導入の簡易化
[Orb レジストリ](https://circleci.com/developer/ja/orbs)では、AWS や Slack など、サードパーティのサービスを効率的に導入するための Orb を多数提供しています。

![](orb.png)