## グループ情報のインポート

### 手順

#### 操作手順

1. メイン画面の左メニューから「パブリックグループ」を選択します。

2. グループ検索画面のメイン操作メニューから「インポート」ボタンをクリックします。<br>(グループ名の検索は大文字・小文字を区別せず検索します)

3. グループインポート画面が表示されます。

4. 「選択」ボタンをクリックして、インポートするファイルを選択します。

5. 「登録」ボタンをクリックします。

###### ![画像2]()

###### ![画像3]()

※ グループエクスポート機能で出力されたCSVファイルは、インポートファイル（CSV）の雛形としてご利用いただけます。

### グループ情報CSVフォーマット

###### グループインポート項目

|  **項目名** | **必須** | **初期値** | **入力値** | **説明** |
|  :------: | :------: | :------: | :------: | ------ |
|  処理区分 | ○ | - | 11 | グループ追加 |
|   |  |  | 12 | グループ変更 |
|   |  |  | 13 | グループ削除 |
|   |  |  | 21 | メンバ追加 |
|   |  |  | 23 | メンバ削除 |
|   |  |  | 99 | 処理なし |
|  グループ名 | ○ | - | - | 255文字以内 |
|   |  |  |  | 記号は「-」ハイフン「_」アンダースコア「.」ドット「@」アットマークのみ推奨(注1) |
|  メモ | - | - | - | 140文字以内 |
|   |  |  |  | 「,」（カンマ)が含まれる場合は全体を1組の""で囲む（注2） |
|  コントラクタへ公開 | - | 0 | 0 | 公開しない |
|   |  |  | 1 | 公開する |
|  メンバ種別 | - | - | 3 | ユーザ |
|   |  |  | 10 | パブリックグループ |
|  メンバ | - | - | - | ユーザID / グループ名 |

（注1）グループ名に使用できない記号

* 使用できない記号：「<」小なり

* 特に使用を避けて欲しい記号：「\」円マーク、「"」ダブルクォーテーション、「,」カンマ、「＼」バックスラッシュ（半角）

※ これらの記号を使用した場合、インポート列が正しく認識されないか、インポートされた場合でも画面表示やエクスポート時に正しく認識されない場合があります。

（注2）メモ欄の記号

* 使用を避けて欲しい記号：注1と同様。

* 「,」カンマを使用する場合は、全体を1組の「"」ダブルクォーテーションで囲って下さい。（その場合でも「"」は3つ以上使わないで下さい）

（注3）インポート最大件数

* インポートの最大件数は、1回あたり3,000件です。

* インポートファイルの1行目は列名として処理されます。

