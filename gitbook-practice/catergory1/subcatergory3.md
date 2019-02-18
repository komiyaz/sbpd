## ポリシー種別と定義

### ユーザポリシーで管理できる項目

#### ユーザポリシー（基本情報）

###### ユーザ基本情報

|  **項目名** | **説明** | **入力** |
|  :------: | ------ | :------: |
|  ユーザID | 半角英数記号 128文字以内 登録完了後、ユーザIDは変更不可となります。<br/> （その他条件）<br/> ・同一コーポレート内では、同一のユーザIDは登録できません。<br/> ・大小文字を識別します。<br/> ・記号は原則「-」ハイフン「_」アンダースコア「.」ドット「@」アットマークのみ許可されます。<br/> ・「.」、「..」のみのユーザIDは禁止<br/> ＜ご注意＞PKI証明書をご利用の場合は、PrimeDriveのユーザIDと証明書のCNを同一情報で登録する必要がありますが、CNには、「@」を使用できませんので、ユーザIDへは、「@」以外の文字をご使用ください。 | 必須 |
|  氏名（姓） | テキスト形式 64文字以内。 「<」は使用できません。 | 必須 |
|  氏名（名） | テキスト形式 64文字以内。 「<」は使用できません。 | 必須 |
|  ふりがな（姓） | テキスト形式 64文字以内。 「<」は使用できません。 | － |
|  ふりがな（名） | テキスト形式 64文字以内。 「<」は使用できません。 | － |
|  メールアドレス | 半角英数記号 128文字以内 メールアドレスは重複して登録可能です。 | 必須 |
|  ユーザ種別 | サブ管理者/一般ユーザ（初期値）/コントラクタ から選択します。 | － |
|  ワークフロー承認者 | ワークフロー承認者に指定します。<br/> コントラクタは、承認者に指定できません。 | － |
|  ユーザ利用状況 | ログイン認証に指定回数失敗すると、自動的にロック中のステータスになり、右側に「※認証エラー回数を超過しました」と表示されます。 | － |
|  パスワード | 入力は、コーポレートポリシー設定の指定条件に従います。<br/> （その他条件）<br/> ・半角 4～32文字<br/> ・大小文字を識別する<br/> ・禁止文字はありません。（但し、TABや改行コード等の制御文字とスペースは使用不可）<br/> ・本人のメールアドレス・ユーザIDの使用はできません。<br/> ・先頭文字の制約はありません。（先頭に数字や記号を指定できる） | － |
|  割当容量 | 「割当てる」を選択した場合は、容量を設定可能となります。<br/> 「割当てない」を選択した場合は、ご契約容量が上限となります。<br/> 容量は0～999の範囲内で数値を入力します<br/> 容量に0を指定した場合は、ホームへのアップロードができません(他ユーザから共有されているフォルダへのアップロードはできます)。 | － |
|  単位 | MB/GB/TB を選択できます。 | － |
|  登録通知メール(新規登録時) | ユーザ登録完了後に通知メールを自動送付します。 | － |
|  言語 | 画面言語を設定します。保管するファイル/フォルダ名は適用対象外となります。 | － |
|  コメント（備考） | 2000文字まで入力可能。 | － |
|  ローカルメール設定 | ローカルメーラによる通知送付時に、メール本文の文字化けを防止するため、利用するメーラの種類を設定します。 |
|   | ・Windows Mail<br/> ・Outlook2007/2010/2013/2016<br/> ・Mac OS Mail<br/> ・Thunderbird |

#### ユーザポリシー（アクセス制限）

###### ユーザポリシー（アクセス制限）
|  **項目名** | **説明** |
|  :------: | ------ |
|  IPアドレス接続制限 | IPアドレス制限機能の利用有無を設定します。「コーポレートポリシーを適用する」を選択した場合は、コーポレートポリシー設定に従います。「ユーザポリシーを適用する」を選択した場合は、ユーザポリシー設定に従います。 |
|   | コーポレートポリシーを適用する/ユーザポリシーを適用する/制限しない |
|  接続許可<br/> IPアドレス一覧 | アクセスを許可するグローバルIPアドレス、または範囲を設定します。<br/> （グローバルIPアドレスの登録方式）<br/> 例1：192.168.1.1<br/> 例2：192.168.1.1-20 （範囲指定） |
|  PKI証明書 | 「利用する」を選択した場合は、ログイン認証にPKIクライアント証明書を要求します。 |
|   | 利用する/利用しない |
|  パスワード認証 | PKI認証時にパスワードを要求するか設定します。 ※PKI認証を「利用する」場合のみ設定可 |
|   | 利用する/利用しない |
|  Web | チェックを付けない場合は、WEBブラウザによる利用を制限します。 |
|  DTA | チェックを付けない場合は、DTAによる利用を制限します。 |
|  iPhone | チェックを付けない場合は、iPhoneアプリによる利用を制限します。 |
|  iPad | チェックを付けない場合は、iPadアプリによる利用を制限します。 |
|  Android | チェックを付けない場合は、Androidアプリによる利用を制限します。 |

#### ユーザポリシー（機能制限）

###### ユーザポリシー（機能制限）
|  **項目名** | **説明** |
|  :------: | ------ |
|  送付キー発行 | チェックを付けない場合は、送付キー発行機能を利用できません。 |
|  名前記入 | 「強制する」を選択した場合は、送付キーへの名前記入を強制します。名前記入は、ダウンロード時に実行者へ会社名と氏名を入力させる機能です。<br/> |
|   | 強制する/強制しない |
|  パスワード | 「強制する」を選択した場合は、送付キーへのパスワード設定を強制します。<br/> ※送付キー発行を「許可する」場合のみ設定可 |
|   | 強制する/強制しない |
|  ワークフローの利用 | 「強制する」を選択した場合は、ユーザアカウント内の全ファイル、またはフォルダに対する送付キーの発行に対して、承認者の承認が必要となります。 |
|   | 強制する/強制しない |
|  アップロードリンク発行 | チェックを付けない場合は、アップロードリンク発行機能を利用できません。 |
|  「メール添付送信」の利用 | チェックを付けない場合は、モバイル端末での「メール添付送信」が利用できません。 |
|  「次の方法で開く」の利用 | チェックを付けない場合は、モバイル端末での「次の方法で開く」が利用できません。<br>またiOS端末でのMS Office連携も利用できなくなります。 |
|  他アプリからの「共有されているフォルダ」へのアップロード | チェックを付けない場合は、モバイル端末でOpen in時に共有されているフォルダへのアップロードが利用できません。 |
|  ホーム期限設定 | チェックを付ける場合は、コーポレートポリシーの設定に従い、ユーザIDのホーム化にあるデータに期限設定が行われます。 |

#### ユーザ基本情報（一括変更）

###### ユーザ基本情報（一括変更）
|  **項目名** | **説明** |
|  :------: | ------|
|  ユーザ種別 | サブ管理者/一般ユーザ（初期値）/コントラクタ から選択します。 |
|  ワークフロー承認者 | ワークフロー承認者に指定します。コントラクタは、承認者に指定できません。 |
|  ユーザ利用状況 | 利用中/ロック中（利用停止中）から選択します。 |
|  言語 | 画面言語を設定します。保管するファイル/フォルダ名は適用対象外となります。 |
|  ローカルメール設定 | ローカルメーラによる通知送付時に、メール本文の文字化けを防止するため、利用するメーラの種類を設定します。 |
|   | ・Windows Mail<br/> ・Outlook2007/2010/2013/2016<br/> ・Mac OS Mail<br/> ・Thunderbird |

#### ユーザポリシー（一括変更）

###### ユーザポリシー（一括変更）
|  **項目名** | **説明** |
|  :------: | ------ |
|  IPアドレス接続制限 | IPアドレス制限機能の利用有無を設定します。「コーポレートポリシーを適用する」を選択した場合は、コーポレートポリシー設定に従います。「ユーザポリシーを適用する」を選択した場合は、ユーザポリシー設定に従います。 |
|   | コーポレートポリシーを適用する/ユーザポリシーを適用する/制限しない |
|  接続許可<br/> IPアドレス一覧 | アクセスを許可するグローバルIPアドレス、または範囲を設定します。<br/> （グローバルIPアドレスの登録方式）<br/> 例1：192.168.1.1<br/> 例2：192.168.1.1-20 （範囲指定） |
|  PKI証明書 | 「利用する」を選択した場合は、ログイン認証にPKIクライアント証明書を要求します。 |
|   | 利用する/利用しない |
|  パスワード認証 | PKI認証時にパスワードを要求するか設定します。 |
|   | 利用する/利用しない |
|  Web | チェックを付けない場合は、WEBブラウザによる利用を制限します。 |
|  DTA | チェックを付けない場合は、DTAによる利用を制限します。 |
|  iPhone | チェックを付けない場合は、iPhoneアプリによる利用を制限します。 |
|  iPad | チェックを付けない場合は、iPadアプリによる利用を制限します。 |
|  Android | チェックを付けない場合は、Androidアプリによる利用を制限します。 |
|  送付キー発行 | チェックを付けない場合は、送付キー発行機能を利用できません。 |
|  名前記入 | 「強制する」を選択した場合は、送付キーへの名前記入を強制します。名前記入は、ダウンロード時に実行者へ会社名と氏名を入力させる機能です。<br/> ※送付キー発行を「許可する」場合のみ設定可 |
|  パスワード | 「強制する」を選択した場合は、送付キーへのパスワード設定を強制します。<br/> ※送付キー発行を「許可する」場合のみ設定可 |
|   | 強制する/強制しない |
|   | 強制する/強制しない |
|  ワークフローの利用 | 「強制する」を選択した場合は、ユーザアカウント内の全ファイル、またはフォルダに対する送付キーの発行に対して、承認者の承認が必要となります。 |
|   | 強制する/強制しない |
|  アップロードリンク発行 | チェックを付けない場合は、アップロードリンク発行機能を利用できません。 |
|  ホーム期限設定 | チェックを付ける場合は、コーポレートポリシーの設定に従い、ユーザIDのホーム化にあるデータに期限設定が行われます。 |
