## PKIクライアント認証

### 事前準備

PKIクライアント認証をご利用の場合は、事前にコーポレート、およびユーザポリシーへ設定が必要です。

#### 操作手順（コーポレートポリシーへPKIのOU番号を登録する）

1. メイン画面の左メニューから「コーポレートポリシー」を選択します。

2. タブの「認証」を選択し、「PKI証明書」項目で「利用する」を選択します。

3. 「パブリックOU」入力欄へOU番号（Organization Unit Code）を入力します。

4. 「この内容で登録」ボタンをクリックします。

※ ログイン方法は、「ユーザマニュアル」の「PKIクライアント証明書によるログイン」をご覧ください。

#### 操作手順（利用対象者のユーザポリシーでPKI認証の利用を有効にする）

1. メイン画面の左メニューから「ユーザ管理」を選択し、対象ユーザを検索します。

2. ユーザ検索画面から対象ユーザを選択して、「編集」ボタンをクリックします。

3. 「ユーザポリシー」の「PKI認証」項目で「利用する」を選択します。

4. パスワード認証を有効にする場合は、「PKI認証/パスワード認証」項目で「利用する」を選択します。

5. 「登録ボタン」をクリックします。「利用しない」を選択した場合は、ログインＵＲＬを指定後、ログイン画面が表示されず、直接ログイン後のメイン画面が表示されます。

6. 確認画面にて、「確定」ボタンをクリックします。

### 制限事項

PKIプラットフォームサービスをご利用の場合は、PrimeDriveで利用するユーザIDとPKIクライアント証明書へ登録するCN（Common Name）情報を同一の情報でご登録いただく必要があります。同一情報で登録されていない場合は、サービスをご利用いただけませんのでご注意ください。

