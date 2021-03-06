## ファイル／フォルダの所有者変更

### 所有者変更について

#### 概要

本機能を使用することで、人事異動などで使用しない(されなくなった)ユーザのフォルダやファイルの所有権を、別のユーザへ移行することができます。

【移行される内容】

* 共有フォルダおよび共有フォルダ内のファイル/フォルダ

* 共有設定

* ロック設定、バージョン設定(バージョン世代含む)、フォルダ容量制限、ファイル期限設定

* 共有していないファイル/フォルダ

* プライベートグループ(ただし、共有メンバとして追加されているグループのみ)

【移行されない内容】

* 共有設定の共有掲示板内容

* 移行に伴う共有通知メール送信

* 送付キー/回収キー(すべて無効となります)

* ゴミ箱内のファイル

* アドレス帳に登録されている情報

【注意事項】

* 所有者の変更を実行後、元に戻すことはできません。

### 手順

#### 操作手順

1. メイン画面の左メニューから「ユーザ管理」を選択し、対象ユーザを検索します。

2. ユーザ管理画面から対象ユーザを選択し、右クリックします。コンテクストメニューから「検閲・所有者変更」を選択します。

3. フォルダまたはファイルを選択して、「所有者変更」ボタンをクリックします。

4. 所有者変更(移動先選択)で対象ユーザを「ユーザ選択」ボタンから選択します。

5. 対象ユーザを選択すると、「保存先フォルダ(デフォルト)」に保存先フォルダが表示されます。

6. 対象ユーザ、保存先フォルダを確認し、「確認画面へ」ボタンをクリックします。

7. 確認画面が表示されますので、内容を確認し「確定」ボタンをクリックします。<sup>※1</sup>

8. 「所有者を変更しました。」メッセージが表示されると変更完了になります。

9. 所有者変更完了後は、移動した内容がログに保存されます。

###### ![画像2]()

###### ![画像3]()

###### ![画像4]()

###### ![画像6]()

###### ![画像7]()

###### ![画像8]()

###### ![画像9]()

※1 【注意事項】保存先フォルダ(デフォルト)は、PrimeDriveが自動で作成します。保存先のフォルダを変更する場合は、＜保存先フォルダも合わせて変更する場合＞を参照ください。

#### 移動するフォルダ/ファイルの明細表示

「移動明細表示」ボタンをクリックすると、移動するフォルダ/ファイル、共有フォルダ、プライベートグループの一覧を表示する事ができます。プルダウンリストから一覧の表示を切り替えることができます。

###### ![画像]()

###### ![画像]()

###### ファイル・フォルダ一覧

###### ![画像]()

###### 共有設定(共有名)一覧

###### ![画像]()

###### プライベートグループ一覧

###### ![画像]()

### 保存先フォルダも合わせて変更する場合

所有者変更は基本的にPrimeDriveが自動生成するフォルダに移動しますが、「保存先フォルダ変更」ボタンから任意のフォルダを保存先に選択することができます。<br>この際、意図せずに他ユーザ（他者）からのファイルアクセスを可能にする恐れがありますので、注意事項をよくお読みいただいた上で実行してください。

### 保存先フォルダ変更時の注意点

#### 【重要】 保存先フォルダ変更の注意事項

1. 共有フォルダを共有フォルダ内に移動する

2. 通常フォルダを共有フォルダ内に移動する

3. フォルダ指定の送付キーが発行されているフォルダへの移動する

###### ![画像1]()

###### ![画像2]()

###### ![画像3]()

※1 共有フォルダを共有フォルダ内に移動した場合、移動後、意図せず移動したフォルダの内容が上位フォルダから参照できてしまいます。

※2 通常フォルダ(共有なし)を共有フォルダ内に移動した場合、移動後、意図せず移動したフォルダの内容が上位フォルダから参照できてしまいます。

※3 移動先のフォルダまたは上位フォルダに対して送付キーを発行している場合、移動後、送付キーの発行条件によっては、保存（移動）したファイル/フォルダに対しても、送付キーを送った相手先からアクセスが可能になります。

##### ＜該当送付キー発行条件＞

フォルダに対する送付キー及び「ファイル更新時に送付キーを無効にする」のチェックをOFFにしている場合

###### ![画像]()

※ このようなケースに該当するかどうか分からない場合は、「戻る」をクリックして、一旦、デフォルトの保存先にファイル・フォルダを移動し、別途確認をしながら適切な保存先に移動することを推奨します。

### 手順

#### 操作手順

1. メイン画面の左メニューから「ユーザ管理」を選択し、対象ユーザを検索します。

2. ユーザ管理画面から対象ユーザを選択し、右クリックします。コンテクストメニューから「検閲・所有者変更」を選択します。

3. フォルダまたはファイルを選択して、「所有者変更」ボタンをクリックします。

4. 所有者変更(移動先選択)で対象ユーザを「ユーザ選択」ボタンから選択します。

5. 所有者変更(移動先選択)画面で、「保存先フォルダを変更する」にチェックをします。

6. 「保存先フォルダ選択」ボタンをクリックします。<br>クリックすると下記メッセージが表示されます。

7. 「保存先フォルダ変更」ボタンをクリックし、保存先フォルダを指定します。

8. 対象ユーザ、保存先フォルダを確認し、「確認画面へ」ボタンをクリックします。

9. 確認画面が表示されますので、内容を確認し「確定」ボタンをクリックします。

10. 「所有者を変更しました。」メッセージが表示されると変更完了になります。

11. 所有者変更完了後は、移動した内容がログに保存されます。

###### ![画像5]()

###### ![画像6]()

###### ![画像7]()


#### 保存先フォルダを変更する際の注意事項

保存先フォルダは、選択したユーザのホーム領域へ移動先となるフォルダが自動生成されます。<br>例：ホーム/#ChangedOwner_userID_日付<br>保存先を変更する場合は、「保存先フォルダを変更する場合」にチェックを入れ、「保存先フォルダ変更」ボタンをクリックします。変更操作を実行後、ホーム領域へ自動生成されるフォルダを移動先に指定したい場合は、再度、「ユーザ選択」ボタンをクリックしてユーザを選択し直してください。

### 所有者変更ログの管理

##### ＜ログについて＞

所有者変更完了後、移動した内容はログに保存されます。

###### ![画像]()

##### ＜ログ出力される情報＞

###### ログ出力される情報

|  **項目名** | **ログ情報** | **説明** |
|  :------: | ------ | ------ |
|  [User] | From:UserID To:UserID | 移動元と移動先のユーザIDが出力されます。 |
|  [Folder/File From:] | /移動元フォルダ名/ファイル名 | 移動元のフォルダ名とファイル名が出力されます。<br/>※対象フォルダとファイル名分ログ出力されます。 |
|  [Share Setting] | Share Name:共有名 | 共有名が出力されます。 |
|   | Renamed:共有名(n) | 共有名のリネームが発生した場合に出力されます。 |
|  [Private Group] | Group Name:グループ名 | プライベートグループ名 |
|   | Renamed:グループ名(n) | プライベートグループ名のリネームが発生した場合に出力されます |
|  [Folder/File To:] | /移動先フォルダ名 | 移動先のフォルダ名が出力されます。 |

### 所有者変更時の警告一覧

##### ＜警告メッセージについて＞

###### 警告1

|  **警告1** | **C201 共有名「xxxx」は既に存在するためリネームされます。** |
|  :------: | ------ |
|  表示条件 | 移動元と移動先の共有名が重複している場合に表示します。 |
|  例 | 移動元の共有名：Photo<br/>移動先の共有名：Photo<br/>所有者変更後の共有名：Photo(1) |

###### 警告2

|  **警告2** | **C202 プライベートグループ「xxxx」は既に存在するためリネームされます。** |
|  :------: | ------ |
|  表示条件 | 移動元と移動先のプライベートグループが重複している場合に表示します。 |
|  例 | 移動元の共有名：Private Group<br/>移動先の共有名：Private Group<br/>所有者変更後の共有名：Private Group (1) |

###### 警告3

|  **警告3** | **C203上位フォルダのファイル期限の方が短いため、フォルダ「xxxx」に設定されているファイル期限は上位フォルダの期限に合わせて短くなります。** |
|  :------: | ------ |
|  表示条件 | 移動元のファイル期限設定が移動先のファイル期限設定より長い場合に表示します。 |
|  例 | 移動元のファイル期限：30日<br/>移動先のファイル期限：7日<br/>所有者変更後のファイル期限：7日 |

###### 警告4

|  **警告4** | **C204共有リスト「xxxx」が空になります。** |
|  :------: | ------ |
|  表示条件 | 移動先に共有設定がなく、移動元も緊急ロックなどで共有設定を解除して移動する場合に表示します。 |
|  例 | 移動元の共有メンバ： user001(※緊急ロック中)、user002(※緊急ロック中)<br/>移動先の共有設定： なし<br/>所有者変更後の共有設定：なし(共有一覧の内容が空となります) |

###### 警告5

|  **警告5** | **C205 上位フォルダの容量制限の方が小さいため、フォルダ「xxxx」に設定されている容量制限は解除されます。** |
|  :------: | ------ |
|  表示条件 | 移動元の容量制限が、移動先の容量制限より大きい場合に表示します。 |
|  例 | 移動元の容量制限：50MB<br/>移動先の容量制限：25MB<br/>所有者変更後の容量制限：25MB |

###### 警告6

|  **警告6** | **C206 共有名「xxxx」は既に存在するためリネームされます。** |
|  :------: | ------ |
|  表示条件 | 移動元と移動先の共有名が重複している場合で、リネームにより最大文字数を超える際に表示します。 |
|  例 | 移動元の共有名：ABCDEF...TUXYZ ※最大文字数の場合<br/>移動先の共有名：ABCDEF...TUXYZ ※最大文字数の場合<br/>所有者変更後の共有名：ABCDEF...OMT(1)<br/>※共有名に最大文字数を使用している場合は、末尾が省略された事を表す「OMT」が付与されます。 |

###### 警告7

|  **警告7** | **C207 プライベートグループ名「xxxx」は既に存在するためリネームされます。** |
|  :------: | ------ |
|  表示条件 | 移動元と移動先のプライベートグループ名が重複している場合で、リネームにより最大文字数を超える際に表示します。 |
|  例 | 移動元の共有名：ABCDEF...TUXYZ ※最大文字数の場合<br/>移動先の共有名：ABCDEF...TUXYZ ※最大文字数の場合<br/>所有者変更後の共有名：ABCDEF...OMT(1)<br/>※共有名に最大文字数を使用している場合は、末尾が省略された事を表す「OMT」が付与されます。 |

###### 警告8

|  **警告8** | **C208 共有フォルダ「xxxx」の共有メンバに緊急ロックされたユーザが存在するため、当該ユーザは先の共有メンバから除外されます。** |
|  :------: | ------ |
|  表示条件 | 移動元に緊急ロックされている共有メンバが共有設定されている場合に表示します。 |
|  例 | 移動元の共有メンバ： user001、user002(※緊急ロック中)<br/>所有者変更後の共有メンバ：user001 |

###### 警告9

|  **警告9** | **C209 共有フォルダ「xxxx」の共有メンバが全て緊急ロックされたユーザのため、移動先での共有設定は解除されます。** |
|  :------: | ------ |
|  処理 | 移動元の共有メンバ全員が緊急ロックされている場合に表示します。 |
|  例 | 移動元の共有メンバ： user001(※緊急ロック中)、user002(※緊急ロック中)<br/>所有者変更後の共有設定：解除 |

###### 警告10

|  **警告10** | **C210 移動先フォルダ、または、上位フォルダに共有設定「xxxx」があるため、対象ファイル・フォルダは上位の共有メンバからアクセス可能になる恐れがあります。** |
|  :------: | ------ |
|  表示条件 | 共有設定されていないフォルダを共有フォルダ内に移動する場合に表示します。 |
|  例 | 移動元のフォルダ：共有設定なし(通常のフォルダ)<br/>移動先のフォルダ：共有設定あり |
