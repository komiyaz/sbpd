ja
# はじめに
# Overview

ja
## 動作環境
## System Requirements

ja
本サービスは、以下のクライアント環境での動作をサポートします。

PrimeDrive is required to operate in the following client environment.

ja
###### 動作環境
|  **ハードウェア** | **対応OS / ブラウザ** |
|  :------: | ------ |
|  CPU：Pentium4 2GHz以上 推奨<br>メモリ：512MB以上 推奨<br>HDD：500MB以上 推奨 | Windows 7(32 / 64bit) / 8.1(32 / 64bit) / 10(32/64bit)<br>Internet Explorer 11 / Google Chrome / Firefox<br>Mac OS X<br>Safari5以上|
###### System Requirements
|  **Hardware** | **Operating System / Browser** |
|  :------: | ------ |
|  CPU:  Pentium4 2GHz or faster<br>Free Memory: 512MB or above<br>Free storage space: 500MB or above | Windows 7(32 / 64bit) / 8(32 / 64bit) / 10(32/64bit)<br>Internet Explorer 11 / Google Chrome / Firefox<br>Mac OS X<br>Safari5以上|

ja
※ 推奨ブラウザ:Internet Explorer 11(最新版) / Google Chrome(最新版) / Firefox(最新版) / Safari(最新版)

※ Recommended Browser : Internet Explorer11(latest edition) / Google Chrome（latest edition）
※ Recommended Browser : Internet Explorer11 / Google Chrome /  Firefox / Safari （Please use the latest version browser）.
ja
※ Windows8.0をご利用の場合はWindows8.1へバージョンアップをお願いします。

※ Windows8.0 users need to upgrade to Windows8.1.

ja
## ユーザ種類と定義
## User Types and Their Definitions

ja
本サービスで提供されるユーザ種別は、以下のとおりとなります。

The following are user types offered in PrimeDrive.

Edited content is automatically overwritten and saved
ja
###### ユーザ種類と定義
|  **ユーザ種類** | **定義** |
|  :------: | ------ |
|  コーポレート管理者 | サブ管理者・一般ユーザ・コントラクタを、登録・編集・削除できます。<br>コーポレート管理者は削除できません(コーポレート管理者の編集はできます)。 |
|  サブ管理者 | コーポレート管理者と同様の操作を実行できます。(MS Office連携の設定を除く) |
|  一般ユーザ | コーポレート管理者 / サブ管理者による登録完了後、ユーザポリシーの設定範囲内で機能を利用できます。 |
|  コントラクタ | コーポレート管理者 / サブ管理者による登録完了後、ユーザポリシーの設定範囲内で機能を利用できます。<br>コントラクタは、自身を含むグループメンバの情報がコントラクタへ公開されている場合のみ、メンバ情報を参照できます。 |

###### User Types and Their Definitions
|  **User Type** | **Definition** |
|  :------: | ------ |
|  Corporate<br>Administrator | Can register, edit, and delete sub-administrator, standard user, and contractor accounts.<br>Cannot delete corporate administrator accounts.<br> (Can edit corporate administrator accounts.) |
|  Sub-administrator | Can perform the same operations (except the setting of the PrimeDrive for Office Online) as the corporate administrator. |
|  Standard User | Can use functions within the user policy setting range after being registered by the corporate administrator or the sub-administrator. |
|  Contractor | Can use functions within the user policy setting range after being registered by the corporate administrator or the sub-administrator.<br>The contractor can refer to member information only if group member information, including his or her own, is published to contractors. |

ja
# ログイン・パスワード
# Login / Password

ja
## ログイン方法
##

ja
### 通常ログイン
###

ja
#### 概要
#### Overview

ja
##### ＜ログインURL＞
##### ＜Login URL＞

ja
https://primedrive.jp/browse#コーポレートID

https://primedrive.jp/browse#CorporateID

ja
※ ログインURLは、末尾にコーポレートIDが付与されます。

※ The last portion of the login URL is the corporate ID.

ja
#### 操作手順
#### How to operate

ja
1. ログインURLから、ログイン画面へアクセスします。

2. 完了通知メールに記載されたログイン情報を入力し、「ログイン」ボタンをクリックします。

---

1. Access login screen on login URL.
2. Enter the login information contained in the completion notification email and click the Login button.

ja
### PKIクライアント証明書によるログイン
### Logging in to Your Account Using the PKI Client Certificate

ja
#### 概要
#### Overview

ja
PKIクライアント証明書を利用する場合は、PKI認証専用のログインURLをご利用ください。

When using a PKI client certificate, use the PKI authentication exclusive login URL.

ja
##### ＜PKI認証専用のログインURL＞
##### ＜PKI authentication exclusive login URL＞

ja
https://secure.primedrive.jp/browse#コーポレートID

https://secure.primedrive.jp/browse#CorporateID

ja
※ ログインURLは、末尾にコーポレートIDが付与されます。

※ The last portion of the login URL is the corporate ID.

ja
#### 操作手順
#### How to operate

ja
1. ログインURLから、ログイン画面へアクセスします。

2. 完了通知メールに記載されたログイン情報を入力し、「ログイン」ボタンをクリックします。

---

1. Access login screen on login URL.
2. Enter the login information contained in the completion notification email and click the Login button.

ja
## パスワード設定・変更
##

ja
### 初期パスワード設定
### Setting the Initial Password

ja
#### 操作手順
#### How to operate

ja
##### ＜ユーザ登録完了通知メールが送信される場合＞
##### ＜When a user registration completion notification email is sent＞

ja
管理者によるユーザ登録完了後、ログイン情報が記載されたユーザ登録完了通知メールが登録メールアドレスに送信されます。

After the administrator registers a user, a user registration completion notification email
containing the login information will be sent to the registered email address.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image001.png)

ja
1. ユーザ登録完了通知メールに記載されたパスワード設定用URLをクリックします。

2. パスワードポリシーに従い、任意のパスワード情報を登録します。

---
1. Click the URL for password setting contained in the user registration completion notification email.
2. Register optional password information according to the Password Policy.

ja
##### ＜ユーザ登録完了通知メールが送信されない場合＞
##### ＜When a user registration completion notification email is NOT sent＞

ja
「2-4. パスワードを再設定する」を参照してください。

Please refer to “2-4. Resetting the Password”.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image002.png)

ja
### パスワード再設定
### Resetting the Password

ja
#### 操作手順
#### How to operate

ja
1. ログイン画面の「パスワードを忘れたら」をクリックします。

2. パスワード再設定画面へコーポレートIDとユーザIDを入力し、「送信」ボタンをクリックします。

3. パスワード再設定通知メールのURLをクリックします。

4. パスワードリセット画面へ新しいパスワードを設定し、「OK」ボタンをクリックします。

---
1. Click "Forgot password?" on the Login screen.

2. Enter your Corporate ID and User ID in the Reset Password screen, and click "Send".

3. Click the URL on the password reset notification email.

4. Register a new password in the Reset Password screen and click the "OK" button.

ja
### パスワード変更
### Changing the Password

#### 操作手順
#### How to operate

1. ヘッダーの「アカウント」ボタンをクリックし、メニューから「パスワード変更」を選択します。

2. パスワード変更画面で新しいパスワードを設定します。

---

1. ＜変更箇所＞ Click the "Setting" icon on the Main screen and select "Change Password" from the menu.

2. Register a new password in the Change Password screen.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image003.png)

ja
# ファイル／フォルダの操作
# File and Folder Operations

ja
## ファイル／フォルダの操作
## File and Folder Operations

ja
### 新規フォルダ作成
### Creating a New Folder

ja
#### 操作手順
#### How to operate

ja
ホーム画面から「新規フォルダ」ボタンをクリックします。

＜変更箇所＞ Click the "New Folder" icon on the Main screen.

ja
### アップロード
### Uploading Files

ja
#### 操作手順（アイコン操作によるアップロード）
#### How to operate（Uploading files / folders from icon）

ja
ホーム画面から「アップロード」ボタンをクリックし、ローカルからアップロードするファイルを選択します。

＜変更箇所＞ Click the "Upload" icon on the Main screen and select files to upload from your local drive.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image005.png)

ja
※ 1度に処理可能なファイル数は20個までとなり、1ファイルの容量制限は1.9GBまでとなります。

※ Up to 20 files can be processed at one time. The size limit of 1 file is 1.9GB.

ja
#### 操作手順（ドラッグ＆ドロップによるアップロード）
#### How to operate（Uploading files by drag & drop）

ja
1. ローカルからアップロードしたいファイルをドラッグします。

2. PrimeDriveのアップロード先にドロップします。

3. アップロード確認ダイアログが表示されますので、「OK」ボタンをクリックします。

---
1. Drag the file that you want to upload from local drive.
2. Drop the file on the screen of PrimeDrive.
3. Once the confirmation dialog is displayed, click the ″OK″ button.

#### 操作手順（フォルダ単位でのドラッグ＆ドロップによるアップロード）
#### How to operate（Uploading folders by drag & drop）

ja
Google Chromeで操作できます。

This works in Google Chrome.

ja
1. ローカルからアップロードしたいフォルダをドラッグします。

2. PrimeDriveのアップロード先にドロップします。

3. アップロード確認ダイアログが表示されますので、「OK」ボタンをクリックします。

---

1. Drag the folder that you want to upload from local drive.

2. Drop the folder on the screen of PrimeDrive.

3. Once the confirmation dialog is displayed, click the ″OK″ button.

ja
###### ファイル／フォルダ名に使用できない文字
|  **ファイル／フォルダ** | **文字 / 記号** | **文字列** | **その他** |
|  :------: | :------: | :------: | :------: |
|  ファイル | / : * ? " ' < > <code>&#124;</code> \ | 「CON」「AUX」「COM1～9」「LPT1～9」「PRN」「NUL」 | - |
|  フォルダ | / : * ? " ' < > <code>&#124;</code> \ <br>外字 | 「CON」「AUX」「COM1～9」「LPT1～9」「PRN」「NUL」 | 「.」(ドット)で始まるフォルダ名 |

###### Prohibited characters in file / folder name

|  **File / Folder** | **Character / Mark** | **Text string** | **Other** |
|  :------: | :------: | :------: | :------: |
| File | / : * ? " ' < > <code>&#124;</code> \ | 「CON」「AUX」「COM1～9」「LPT1～9」「PRN」「NUL」 | - |
| Folder | / : * ? " ' < > <code>&#124;</code> \ <br> External characters | 「CON」「AUX」「COM1～9」「LPT1～9」「PRN」「NUL」 | Filenames that start or end with a "." (dot) |

ja
### ダウンロード
### Downloading Files

ja
#### 操作手順
#### How to operate

ja
1. ホーム画面からファイル／フォルダを選択し、右クリックします。

2. コンテクストメニューから「ダウンロード」を選択します。

---

1. ＜変更箇所＞Select a file from the Main screen and click the "Download" icon.
2. ＜変更箇所＞

ja
※ ファイル名をダブルクリックした場合もダウンロードできます。

※ ＜変更箇所＞ When it is a file, double clicking the file name would also complete file download.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image006.png)

ja
### 移動
### Moving Files and Folder

ja
#### 操作手順
#### How to operate

ja
1. ホーム画面から対象のファイル／フォルダを選択し、「移動」アイコンをクリックします。

2. 移動先の選択画面が表示されますので、移動先を選択し「OK」ボタンをクリックします。

---

1. ＜変更箇所＞ Select the target file or folder from the Main screen and click the "Move" icon.

2. Select the destination according to the screen below and click the "OK" button.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image031.png)

ja
### ファイル名／フォルダ名変更
### Renaming Files and Folders

ja
#### 操作手順
#### How to operate

ja
1. ホーム画面から対象のファイル／フォルダを選択し、「名前変更」アイコンをクリックします。

---

1. ＜変更箇所＞ Select the target file or folder from the Main screen and click the "Rename" icon.

ja
※ 対象のファイル／フォルダを選択した状態で、画面の名前列(フォルダの場合は、名前以外の余白部分)をクリックした場合も名前を変更できます。

You can also rename files and folders if you click name items on the screen (blank portions other than the name in case of folders) after selecting the target file or folder.

ja
### 削除
### Deleting Files and Folders - Trash Function

ja
#### 操作手順（ファイル／フォルダを削除する）
#### How to operate（Deleting Files and Folders）

ja
1. ホーム画面から対象のファイル／フォルダを選択し、「削除」アイコンをクリックします。削除されたファイル／フォルダは、いったんごみ箱に移動されます。ごみ箱内のファイルは、利用容量にカウントされます。

---

1. <変更箇所＞ Select the target file or folder from the Main screen and click the "Trash" button. The deleted file or folder will temporarily be moved to Trash.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image043.png)

ja
#### 操作手順（ファイル／フォルダの完全削除）
#### How to operate（Erase the files）

ja
ファイル／フォルダを削除（ごみ箱へ移動）しただけでは、ファイル／フォルダは完全削除されません。
完全削除するには、ごみ箱からさらに削除する必要があります。
完全削除をしたファイル／フォルダを元に戻すことはできません。

＜変更箇所＞Deleting files in PrimeDrive will only transfer the file / folder to Trash.
To erase them you will need to use the Trash function.

ja
1. ホーム画面の左メニューから「ゴミ箱」を選択します。

2. 完全に削除したいファイル／フォルダを選択し、「完全削除」ボタンをクリックします。

3. ごみ箱内にあるファイル／フォルダをすべて削除したい場合は、「空にする」ボタンをクリックします。

---

1. Select "Trash" on the left menu of the Main screen.
2. ＜変更箇所＞ Select the file / folder you want to erase and click the "Erase" icon.
3. ＜変更箇所＞ If you want to delete all files / folders inside Trash, click the "Empty" icon.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image044.png)

ja
#### 操作手順（ファイル／フォルダを元に戻す）
#### How to operate（Recover the files）

ja
ゴミ箱に入ったファイル／フォルダを元に戻したい場合は「元に戻す」機能を使用します。

If you want to recover files / folders contained in Trash, you can use "Undo" function. However, when the file you want to recover has already been deleted by clicking "Erase" or "Empty" icon, you will not be able to recover the file anymore.

ja
1. ホーム画面の左メニューから「ゴミ箱」を選択します。
2. 元に戻したいファイル／フォルダを選択し「元に戻す」ボタンをクリックします。
3. 移動先の選択画面が表示されますので、ファイル／フォルダの移動時と同様の操作を行います。<br>操作の詳細はこちらをご参照ください。

---

1. Select "Trash" on the left menu of the Main screen.
2. Select the file you want to recover and click the "Undo" icon.
3. When the destination list appears, please refer the section “3-9. Moving Files and Folder” and follow the same direction.

ja
##### ＜バージョン管理設定されているファイルを削除した場合＞
##### ＜When the version file is deleted＞

ja
バージョン管理設定されているファイルを削除(ゴミ箱に移動)しても設定と各ファイルは維持します。

Version files moved to Trash can be restored to their original version management status.

ja
## ファイルの閲覧・編集
## Browsing / Editing Files

ja
### 通常の閲覧
###

ja
#### 操作手順
#### How to operate

ja
1. ホーム画面からファイルを選択し、右クリックします。

2. コンテクストメニューから「閲覧する」を選択します。

3. メニューから「閲覧」を選択します。

---

1. ＜変更箇所＞ Select the target file from the Main screen.
2. ＜変更箇所＞ Click the "Browse" icon and display a pull-down menu.
3. Select “Browse” from the pull-down menu.

ja
##### ＜PDF変換対象のプレビュー表示について＞
##### ＜PDF conversion preview＞

ja
.txt / .doc / .docx / .xls / .xlsx / .ppt / .pptxのファイル形式は、PDF変換後にプレビュー表示されます。

PDF変換に未対応のファイル拡張子については、保管されたファイル形式のままプレビュー表示されます。

After converting .txt / .doc / .docx / .xls / .xlsx / .ppt / .pptx file formats to PDF, a preview will be displayed. File extensions not supported by the PDF conversion will be previewed in their stored file format.

ja
※ ファイル拡張子に対応したソフトがインストールされている必要があります。

※ ブラウザで表示できない形式のファイルは、保管されたファイル形式のまま保存されます。

※ Software which supports specific file formats must be installed.

※ File formats which cannot be displayed by the browser are saved without conversion.

ja
##### ＜動画再生について＞
##### ＜Video playback＞

ja
ファイルが動画形式の場合は、一旦ダウンロードされます。

その後、動画再生アプリケーションを起動して再生を行ってください。

Video / image formats will be displayed in a browser.

ja
### Microsoft Office Onlineによる閲覧
### PrimeDrive for Office Online

本機能は、PrimeDriveに保存しているOfficeファイル(Word / Excel / PowerPoint)をMicrosoft Office Onlineと連携して、閲覧 / 編集する機能です。

ja
##### ＜利用条件＞
##### ＜Use condition＞

ja
PrimeDriveのOffice Online連携機能を利用し、Microsoft Office Onlineで編集をするには

**Microsoft社が提供するOffice 365の法人向けライセンスが必要です。**

ライセンスの購入については以下の「詳細を確認」よりご確認ください。

To edit files using the Microsoft Office Online Integration Function, a Microsoft Office 365 license is required for business users.
Please click "Learn More" for more information on how to obtain a license.
(This site is written in Japanese.)

[![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image032.jpg)](http://tm.softbank.jp/cloud/saas/o365/biz_pro/#business)

ja
#### 操作手順（Office OnlineでOfficeファイルの閲覧を行う）
#### How to operate（View office files in Office Online）

ja
1. ホーム画面から対象のOfficeファイルを選択し、右クリックします。コンテクストメニューから「Office Onlineで閲覧する」を選択します。

2. メニューから「Office Onlineで閲覧」を選択します。

3. ブラウザで別のタブが開き、Office Onlineが起動します。

4. Office Online 閲覧画面が表示されます。

---

1. ＜変更箇所＞  Select the target office file from the Main screen and click the "Office" icon
2. Select the “View in Office Online” from the menu.
3. You can view files in Office Online.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image037.png)

ja
### Microsoft Office Onlineによる編集
### PrimeDrive for Office Online

ja
本機能は、PrimeDriveに保存しているOfficeファイル(Word / Excel / PowerPoint)をMicrosoft Office Onlineと連携して、閲覧 / 編集する機能です。

This function is to view and edit office files (Word, Excel, and PowerPoint) in Microsoft Office Online.

ja
##### ＜利用条件＞
##### ＜Use condition＞

ja
PrimeDriveのOffice Online連携機能を利用し、Microsoft Office Onlineで編集をするには

**Microsoft社が提供するOffice 365の法人向けライセンスが必要です。**

ライセンスの購入については以下の「詳細を確認」よりご確認ください。

To edit files using the Microsoft Office Online Integration Function, a Microsoft Office 365 license is required for business users.
Please click "Learn More" for more information on how to obtain a license.
(This site is written in Japanese.)

[![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image032.jpg)](http://tm.softbank.jp/cloud/saas/o365/biz_pro/#business)

ja
#### 操作手順（Office OnlineでOfficeファイルの編集を行う）
#### How to operate（Edit office files in Office Online）

ja
1. ホーム画面から対象のOfficeファイルを選択し、右クリックします。コンテクストメニューから「Office Onlineで編集する」を選択します。

2. メニューから「Office Onlineで編集」を選択します。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image033.png)

3. ブラウザで別のタブが開き、Office Onlineが起動します。

4. Office 365へサインインを行います。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image034.png)

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image035.png)

5. Office Online 編集画面が表示され、Officeファイルの編集が行えます。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image036.png)

6. 編集した内容は自動で保存され、PrimeDriveのOfficeファイルに上書きされます。

---

1. Select the target office file from the Main screen and click the "Office" icon
2. Select the “Edit in Office Online” from the menu.
3. Log in to Office Online using your Office365 Business account.
4. You can edit files in Office Online.
Edited content is automatically overwritten saved in the PrimeDrive Office file.
Edited content is overwritten and automatically saved in the PrimeDrive Office file.
The edited contents are automatically saved and overwritten on the PrimeDrive Office file.
ja
##### ＜Microsoft Office連携時のご注意＞
##### ＜Note＞
Notes on using the Microsoft Office linkage function
ja
* Office Onlineで扱うファイル容量

Office Online連携機能では、ネットワーク環境等の影響により、ファイルを開く操作に失敗することや
Office Onlineでのファイル編集結果がPrimeDriveに反映されるまでに時間を要する(5分程度)、
または反映されない場合があります。上記は、特に数MBを超えるファイル容量で発生する場合がありますので、
容量の小さいファイルでのご利用を推奨致します。なお、Excel Onlineで使用できるファイル容量の上限は
5MBです(Microsoft社の仕様)。

* File size on Office Online

When you open / edit files over a few MB, an error may occur sometimes.
The smaller size, the better.
The upper limit is 5MB on Excel Online (Microsoft specifications).

ja
* Office Onlineでファイルの編集を行った際の自動保存

Office Onlineでファイルを編集する際は、編集したファイルがPrimeDriveに反映されたことを
PrimeDriveのホーム画面の更新日時列で確認してからOffice Onlineを閉じてください。
自動保存機能により「PrimeDriveに保存完了」と表示されても、更新は非同期に行われます。
編集から5分程度経過しても更新されない場合は、Office Onlineの「コピーのダウンロード」で、ファイルをPCに保存してください。

* Auto save when you edit file on Office Online

When you edit a file on Office Online, please close it after you make sure the file is updated on "Modified" date.
Even if you can see the message saying "Saved to PrimeDrive" by auto save, you need sometimes to successfully finish it.
When it takes a few minutes or more, please save the file using "Download a Copy" on Office Online.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image038.png)

ja
* 編集中のファイルの操作(削除 / 移動 / 名前変更等)

Office Onlineで編集中のファイルに対し、PrimeDrive側で削除 / 移動 / 名前変更等の操作を行うと
編集操作がエラーとなり、PrimeDriveに保存ができなくなりますのでご注意ください。

* Operation of the editing file (Move / Delete / Rename etc.)

While you edit a file on Office Online, please do not move / rename / delete etc.

ja
## ファイル／フォルダの検索
## Searching Files and Folders

ja
#### 操作手順
#### How to operate

ja
1. ヘッダーの検索エリアにファイル／フォルダ名を入力し、キーボードのEnterを押します。

---

1. Enter the name of the file / folder you want to search in the Search form, then press Enter key.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image052.png)

ja
※ ファイル／フォルダの検索は、大文字 / 小文字を区別せず検索します。

※ The search of the file / folder is case-insensitive.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image053.png)

ja
##### ＜検索条件を指定して検索したい場合＞
##### ＜When you want to search specifying search criteria＞

ja
「詳細検索」アイコンをクリックして詳細検索画面を表示し、検索したいファイル／フォルダの条件を絞り込んで検索できます。

＜変更箇所＞ Click the ″glass search″ button to open advanced search screen, which allow you to refine your  search on file / folder.

ja
###### 詳細検索条件項目の設定値
|  **項目** | **設定値** |
|  :------: | ------ |
|  更新日 | 指定しない / 昨日 / 最近一週間 / 最近一ヶ月 / 範囲指定 |
|  サイズ | 指定しない / 小(1Byte～100kB) / 中(100kB～1MB) / 大(1MB以上) / 範囲指定 |
|  種類 | 指定しない / ファイル / フォルダ |

###### Options for advanced search condition items

|  **Item**  |  **Setting value**  |
|  :------: | ------ |
|  Updated  |  Do not specify / Yesterday / Recent week / Recent month / Set range  |
|  Size  |  Do not specify / Small(1Byte - 100kB) / Medium(100kB - 1MB) / Big(more than 1MB) / Set range  |
|  Type  |  Do not specify / File / Folder  |

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image054.png)

ja
## お気に入り機能の設定
## The Favorites Function

ja
お気に入りに設定することによって、階層が深いファイル／フォルダへ簡単に遷移できます。

By setting Favorites, you can easily transition to files and folders deep in the hierarchy.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image051.png)

ja
#### 操作手順
#### How to operate

ja
1. ホーム画面からファイル／フォルダを選択し、右クリックします。コンテクストメニューから「お気に入り」を選択します。

2. 「お気に入り」を再度選択すると、削除できます。

---

1. ＜変更箇所＞ If you click the star symbol on the Home screen or on the left side of the shared file / folder, the file will be registered in the Favorites folder.
2. ＜変更箇所＞ Delete a file from Favorites by clicking the star symbol again on its original location or on the Favorites screen.

ja
# ファイル／フォルダの設定
#

ja
## ロック設定
## Locking Files and Folders

ja
#### 操作手順
#### How to operate

ja
1. ホーム画面からファイル／フォルダを選択し、右クリックします。コンテクストメニューから「ロック設定」を選択します。
操作の詳細はこちらをご参照ください。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image046.png)

2. ロックの設定画面で「ロック」ボタンをクリックします。

---

1. ＜変更箇所＞ From the Main screen, click the Lock icon displayed in the status items of the target file / folder.
Also, click "Setting" button of Lock setting on Property Screen.
(About displaying Property Screen, please see 3-18)

2. Click the "Lock" button on the "Lock setting" screen.

ja
##### ＜ロック中に実行可能な操作＞
##### ＜Executable operations while locked＞

ja
* ファイルのダウンロードと閲覧

* 送付キーの発行

* ファイル／フォルダのプロパティ閲覧

* File downloading and browsing.
* Issuing a send key.
* Browsing file or folder properties.

ja
##### ＜ロック対象のファイル／フォルダを一覧表示する＞
##### ＜Displaying the list of lock target files / folders＞

ja
左メニューから「設定」アイコンをクリックし、「ロック設定一覧」を選択します。

＜変更箇所＞ Click "Lock Setting List" on the left menu of the Main screen.

ja
#### 操作手順（ロックを解除する）
#### How to operate（Releasing locks）

ja
1. ーム画面からファイル／フォルダを選択し、右クリックします。コンテクストメニューから「ロック設定」を選択します。

2. ロックの解除画面で「解除」ボタンをクリックします。

---

1. ＜変更箇所＞ From the Main screen, click the Lock icon displayed in the status items of the target file or folder. Also, click "Setting" button of Lock setting on Property Screen.
2. ＜変更箇所＞ Click the "Release" button on the "Release lock" screen.

ja
##### ＜ロック設定の起点について＞
#####

ja
ロック設定の起点とは、ロック設定を行ったファイル／フォルダを指します。

blank

ja
##### ＜ロックを実行できない場合＞
##### ＜When locking is not possible＞

ja
ロック設定の起点となるファイル／フォルダが存在するフォルダはロックできません。

A file or folder that is already the starting point of the lock setting cannot be locked to the folder in which they exist.

ja
##### ＜ロックを解除できない条件＞
##### ＜Condition when releasing a lock is not possible＞

ja
ロック対象がフォルダの場合は、ロック設定の起点となるフォルダからのみ設定を解除できます。

When the lock target is a folder, the setting can only be released from the folder that is the starting point of the setting.

ja
## バージョン設定
## Managing File Versions

ja
#### 操作手順
#### How to operate

ja
1. ホーム画面からファイル／フォルダを選択し、右クリックします。コンテクストメニューから「バージョン設定」を選択します。<br>操作の詳細はこちらをご参照ください。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image047.png)

2. バージョン管理画面で「設定」ボタンをクリックします。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image048.png)

---

1. ＜変更箇所＞ From the Main screen, click the ″Version manager″ icon displayed in the status items of the target file or folder.
Also, click "Setting" button of Version setting on Property Screen
(About displaying Property Screen, please see 3-18).

2. Specify the number of generations from the Version manager screen and click the "Setting" button.

ja
※ フォルダへバージョン設定した場合、フォルダ内の全てのファイルがバージョン対象となります。

※ When you set the version to a folder, all files within that folder will be version targets.

ja
※ バージョンファイルも使用容量にカウントされます。

※

ja
##### ＜バージョン管理される世代数＞
##### ＜Number of generations that is version-managed＞

ja
50世代までバージョン管理されます。バージョンファイルが50世代に達すると、古いバージョンファイルから順次削除されます。バージョン世代数を変更することはできません。

＜変更箇所＞ For target files, up to a maximum of 50 generations can be version-managed.
If version files reach the 50th generation, they will be sequentially deleted from the oldest file.

ja
##### ＜バージョンファイルが作成 / 更新されるタイミング＞
##### ＜The timing of creating / updating version files＞

ja
ファイルをアップロードしたタイミングでバージョンファイルが作成 / 更新されます。

Version files are created or updated during the time that a file is uploaded.

ja
##### ＜バージョン対象のファイル／フォルダを一覧表示する＞
##### ＜Displaying the version target file or folder in a list＞

ja
ホーム画面の左メニューからバージョン設定一覧を選択します。

Click "Version Setting List" on the left menu of the Main screen.

ja
##### ＜バージョン管理設定されているファイルを削除した場合＞
##### ＜Updating previous version files to the latest version＞

ja
バージョン管理設定されているファイルを削除(ゴミ箱に移動)しても設定と各ファイルを維持します。

Download the previous version file and upload it again.

ja
#### 操作手順（過去のバージョンファイルをダウンロード / 閲覧する）
#### How to operate（Downloading or browsing previous version files）

ja
1. ホーム画面からファイルを選択し、右クリックします。コンテクストメニューから「バージョン設定」を選択します。

2. バージョン管理画面から対象のバージョンファイルを選択し、「ダウンロード」ボタンをクリックします。

---

1. ＜変更箇所＞ From the Main screen, click the Version manager icon displayed in the status items of the target file.
Also, click "Setting" button of Version setting on Property Screen
(About displaying Property Screen, please see 3-18).

2. Select the target version file from the Version manager screen and click the "Download" button.

ja
#### 操作手順（バージョン設定を解除する）
#### How to operate（Releasing the version setting）

1. ホーム画面からファイル／フォルダを選択し、右クリックします。コンテクストメニューから「バージョン設定」を選択します。

2. バージョン管理画面から対象のバージョンファイルを選択し、「解除」ボタンをクリックします。

---

1. ＜変更箇所＞ From the Main screen, click the ″Version manager″ icon displayed in the status items of the target file.
Also, click "Setting" button of Version setting on Property Screen.
(About displaying Property Screen, please see 3-18)

2. Select the target version file from the Version manager screen and click the "Release" button.

ja
※ バージョン設定を解除すると、過去のバージョンファイルは削除されます。

※ If you release the version setting, all previous version files will be moved to Trash.

ja
## 有効期限設定
## Setting the Validity Period of Files

ja
#### 概要
#### Overview

ja
ファイル有効期限には以下の種類があります。

Corporate administrator can set up it to the user’s home.
Folders and files exist below user’s home which is set up its setting are setting up valid period that administrator set.
If it is set up, valid period is displayed on the upper part of main screen.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image039.png)

ja
##### ＜ファイル期限管理＞
##### ＜File time limit setting＞

ja
ユーザが個別にホーム配下のファイル／フォルダに対してファイルの有効期限の設定を行うことができます。

フォルダに有効期限を設定した場合、フォルダ内の全てのファイルに有効期限が設定されます。

(例)

Users can individually set up files time limit of folders and files which exist below their home.
If it is set up to folders, the all files in the folders are set up valid period.
Only files are deleted when the validity period expires. Folders are not deleted.

(Example)

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image040.png)

ja
フォルダAに有効期限を設定した場合、設定した期限を過ぎるとファイルAとファイルBが削除されます。

If Folder A has a validity period set, then File A and File B will be deleted when the period expires.

ja
#### 操作手順（個別にファイル／フォルダに対して有効期限の設定を行う）
#### How to operate（???）

ja
1. ホーム画面からファイル／フォルダを選択し、右クリックします。コンテクストメニューから「期限設定」を選択します。
作の詳細はこちらをご参照ください。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image041.png)

2. ファイル期限設定画面で有効期限を設定して、「設定」ボタンをクリックします。

※ ホーム期限管理が適用されている場合は、管理者が設定した期限日数が上限となります

3. 「削除予告メールを通知する」にチェックを入れ、削除前に確認のメールを送信する日を選択すると
削除予告メールが指定の日に送信されます。

---

1. ＜変更箇所＞ From the Main screen, click the File time limit management icon displayed in the status items of the target file / folder.
Also, click "Setting" button of File time limit setting on Property Screen.
(About displaying Property Screen, please see 3.18)
2. Set the validity period on the File time limit setting screen and click the "Setting" button.
3. If you put a check on "Report delete notice mails" and select the day to send a confirmation email before deletion, the delete notice mail will be sent on the specified day.

ja
※ 削除予告メールは、フォルダの所有者のみに送信されます。

※ The delete notice mail is sent to only the folder owner.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image042.png)

ja
##### ＜ファイルの有効期限の起点・削除タイミングについて＞
##### ＜About file validity and deletion timing＞

ja
1. ファイルの有効期限の起点は、ファイルの更新日時となります。期限設定した時点のファイル更新日時から○日(24h×設定日数)が経過した時点で「期限切れ」のステータスとなります。

※ フォルダに有効期限を設定した場合も、有効期限の起点は、各ファイルの更新日時となります。

2. システム上の自動処理に合わせて期限切れステータスのファイルを検知します。

3. 削除予告メールを設定している場合、期限切れステータスとなる日時の○日(24h×設定日数)前の自動処理で検出された対象のファイル分の削除予告メールがファイルの所有者に送信されます。

※ 自動削除される日付はメールに記載されますが、時刻の記載はありません。

※ 自動削除の予定日が過去の日付となる場合、設定した日の自動処理に合わせて自動削除されますのでご注意ください。

---

1. The start of a file’s validity period is its last updated timestamp. A file is considered “expired” after ○ days (24h × the set number of days) have passed beginning from the last updated timestamp of the file when the validity period was set.
2. PrimeDrive automatically detects when the validity period of a file has expired.
3. If the pre-deletion warning notification mail setting is enabled, a mail warning of the deletion will be sent to the owner for each file that is about to expire, ○ days (24h × the set days) before the expiration.

* If you set the validity period on a folder, the beginning of the validity period is the last updated timestamp of each file.
* The mail contains the date when the automatic deletion, but does not include the time.
* If the calculated automatic deletion date is in the past, the actual deletion occurs on the day when the setting was performed.

ja
(例)

ファイル期限を設定した日　2015年10月8日 9:00

自動削除予定　5日後

(Example)

The day it was setted up October 8, 2015 9:00

Schedule of automatic deletion 5 days later

ja
###### 例
|  **ファイル名** | **ファイルの更新日時** | **10/8** | **10/9** | **10/10** | **10/11** | **10/12** | **10/13** | **10/14** |
|  :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
|  ファイルA | 2015/10/8 12:00 |  |  |  |  |  | ***×*** |  |
|  ファイルB | 2015/10/6 12:00 |  |  |  | ***×*** |  |  |  |
|  ファイルC | 2014/10/8 12:00 | ***×*** |  |  |  |  |  |  |

***×*** ＝自動削除実行日

###### Example
|  **File Name** | **File Update Date** | **10/8** | **10/9** | **10/10** | **10/11** | **10/12** | **10/13** | **10/14** |
|  :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
|   A | 2015/10/8 12:00 |  |  |  |  |  | ***×*** |  |
|  File B | 2015/10/6 12:00 |  |  |  | ***×*** |  |  |  |
|  File C | 2014/10/8 12:00 | ***×*** |  |  |  |  |  |  |

***×*** ＝Day of carrying out automatic deletion

ja
##### ＜ファイルAの場合＞
##### ＜In the case of File A＞

ja
2015/10/8 12:00が自動削除の日数計算の起点となります。

* 期限切れステータスの付与

24時間×5日となり、2015/10/13 12:00に期限切れステータスが付与されます。

* 自動削除の実行

2015/10/13 22:00～2015/10/14 8:00の夜間に自動削除を実行します。

It is counted from 10/8/2015 12:00.

* Date to grant invalid status

24h×5d, it will be granted invalid status on 10/13/2015 12:00.

* Date to carry out automatic deletion

The function carries out it between 10/13/2015 22:00 - 10/14/2015 8:00.

ja
##### ＜ファイルBの場合＞
##### ＜In the case of File B＞

ja
2015/10/6 12:00が自動削除の日数計算の起点となります。

* 期限切れステータスの付与

24時間×5日となり、2015/10/11 12:00に期限切れステータスが付与されます。

* 自動削除の実行

2015/10/11 22:00～2015/10/11 8:00の夜間に自動削除を実行します。

It is counted from 10/6/2015 12:00.

* Date to grant invalid status

24h×5d, it will be granted invalid status on 10/11/2015 12:00.

* Date to carry out automatic deletion

The function carries out it between 10/11/2015 22:00 - 10/12/2015 8:00.

ja
##### ＜ファイルCの場合＞
##### ＜In the case of File C＞

ja
2014/10/8 12:00が自動削除の日数計算の起点となりますが、設定したファイル期限の

日数より更新日時が古いため、ファイル期限を設定した時点で期限切れステータスとなります。

* 期限切れステータスの付与

更新日時が古いため、ファイルの期限設定を行った2015/10/8 9:00に期限切れステータスが付与されます。

* 自動削除の実行

2015/10/8 22:00～2015/10/9 8:00の夜間に自動削除を実行します。

It is counted from 10/8/2015 12:00, but File C is granted invalid status when it is set up file time limit because its update date is older than file time limit which is set unpin the system.
* Date to grant invalid status

It is granted invalid status on 10/8/2015 9:00 you set up file time limit setting because its update date is old.
* Date to carry out automatic deletion

The function carries out it between 10/8/2015 22:00 - 10/9/2015 8:00.

ja
※ ファイルは完全に削除されます。ゴミ箱には移動しません。

※ The file is deleted completely. It is not moved to Trash.

ja
##### ＜共有されているフォルダに対するファイル期限設定について＞
##### ＜About a term setting of a file to a shared folder＞

ja
共有されているフォルダに対するファイル期限設定は、所有者以外にフルコントロール権限のあるユーザからも設定(設定 / 解除 / 変更)ができます。

Setting (set / release / change) the term of a file to a shared folder is available for its owner or users who have full-control authority.

ja
##### ＜バージョンファイルへ期限設定した場合＞
##### ＜When a validity period is set for a version file＞

ja
期限経過後は、過去のバージョンファイルも全て削除されます。

When the validity period has expired, all previous version files will also be deleted.

ja
##### ＜ロック中のファイルへ期限設定した場合＞
##### ＜When a validity period is set for a locked file＞

ja
期限経過後は、ロック中のファイルも削除されます。

When the validity period has expired, locked files will also be deleted.

ja
#### 操作手順（期限設定を解除する）
#### How to operate（Removing the validity period setting）

ja
1. ホーム画面からファイル／フォルダを選択し、右クリックします。コンテクストメニューから「期限設定」を選択します。

2. ファイル期限設定画面で「解除」ボタンをクリックします。

※ 対象のファイルの所有者、フルコントロール権限のあるユーザが設定を解除できます。

---

1. ＜変更箇所＞ From the Main screen, click the File validity period management icon displayed in the status items of the target folder.
Also, click the "Setting" button of File validity period setting on the Property Screen.
(About displaying the Property Screen, please see 3-18)
2. Click the "Remove" button on the File validity period setting screen.

※ The owner of the target file or the user with full-control authority can remove the setting.

ja
## フォルダ容量設定
## Limiting the Capacity of a Folder

ja
#### 操作手順
#### How to operate

ja
1. ホーム画面からフォルダを選択し、右クリックします。コンテクストメニューから「容量設定」を選択します。
作の詳細はこちらをご参照ください。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image045.png)

2. 「容量設定」画面で割当容量を指定し、「設定」ボタンをクリックします。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image026.png)

※ フォルダ容量は、バージョンファイルも含みます。

---

1. ＜変更箇所＞ From the Main screen, click the ″Capacity″ icon in the status items of the target folder.
Also, click "Setting" button of Capacity setting on Property Screen.
(About displaying Property Screen, please see 3-18)
2. Set the Capacity allocation on the "Capacity setting" screen and click the "Setting" button.

※ The folder capacity includes the version file.

ja
# フォルダ共有
# Sharing Folders

ja
## フォルダ共有について
## (New) About folder sharing

ja
### 設定できる項目
### (New) Setting items

ja
###### 共有設定項目の説明
|  **項目** | **説明** |
|  :------: | ------ |
|  共有用フォルダ名 | 共有相手のアカウントで表示される共有フォルダの名称。 |
|  フォルダを個別に共有する | 共有フォルダ内のフォルダへ共有を設定する場合に、上位フォルダの共有メンバのアクセス権限を引き継がず個別に共有を設定します。チェックなしの場合は、上位フォルダと下位フォルダの共有設定がともに有効となります。 |
|  共有範囲 | 共有設定の適用範囲を選択します。直下のみを選択した場合、共有フォルダ直下のファイルのみ表示され、配下のファイル／フォルダは表示されません。 |
|  共有メンバに<br>メンバ一覧を公開する | 共有されているユーザ、またはグループ情報が共有メンバ全員へ公開されます。 |
|  ファイル更新通知 | 下記の操作によりファイル／フォルダが更新された場合、共有メンバ全員、または宛先ユーザを個別に選択して通知メールを送信できます。<br>・ ファイルの上書きアップロード<br>・ ファイル／フォルダ名変更<br>・ ファイル／フォルダ移動 |
|  自動送信する | 共有メンバ全員へ自動で通知メールが送信されます。<br>※ 「共有メンバにファイル更新を通知する」がONの場合のみ設定できます。 |
|  氏名 / グループ名 / ユーザIDのいづれかで検索 | 共有されているメンバ / グループの検索ができます。<br>※ 検索条件は以下の文字列が検索対象となります。<br>・ ユーザ：氏名 / ユーザID<br>・ パブリックグループ：グループ名<br>・ プライベートグループ：グループ名 / オーナーのユーザID<br>※ グループ名の検索は大文字 / 小文字を区別せず検索します。 |

###### Description of Share Setting Items
|  **Item** | **Description** |
|  :------: | ------ |
|  Share Name | The name of the shared folder to be displayed in account of the sharing partner. |
|  Individually set share | When you apply share setting to the sub-folder inside the parent share folder, individually set share setting to the sub-folder which do not inherit the share setting of the parent folder. Unchecking this will apply both the parent folder share setting and the sub-folder setting. |
|  Share scope | Select the scope of the share settings. If you specify only the files directly under the shared folder, then the files / folders within the shared folder are not displayed. |
|  Publish members list to share members | Shared user or group information will be published to all share members. <br>※ Contractors can view the information only if "Publish to the contractors" of the group to which they belong is set to on. |
|  Notify file updates to share members | When a file / folder is updated by running the following operation, a notification email will be sent to all share members or users you selected individually. <br>* Overwrite uploaded file <br>* Rename file / folder <br>* Moving file / folder |
|  Automatically send | Email notification is sent automatically to all share member when a file / folder updated. <br>※ This function can be set when ”Notify file updates to share members” has been enabled. |
|  Sharers (User ID, name, group name) | Search can be performed for sharing members / groups. <br>※ The following text string is the search criteria. <br>* Users: Name or User ID <br>* Public groups: Group name <br>* Private groups: Group name or Owner's User ID |

ja
1. ユーザ / グループを追加し、アクセス権限を設定して「OK」ボタンをクリックします。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image025.png)

2. 有フォルダの容量を制限する場合は、「容量管理」タブをクリックし容量を設定します。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image026.png)

3. 各設定項目へ入力完了後、「設定」ボタンをクリックします。

---

1. Add a user or group, set the access authority, and click the "OK" button.
2. ＜変更箇所＞ When limiting the capacity of the shared folder, click the "Capacity" button and set the capacity.
3. When you are finished filling up each setting item, click the "Setting" button.

ja
### アクセス権限
### Access authority

ja
##### ＜アクセス権限の設定について＞
##### ＜Setting access authority＞

ja
共有フォルダのアクセス権限は、あらかじめ権限が指定されたアクセス権限を選択します。

アクセス権限をカスタム設定する場合は、アクセス権限表を参照してください。

＜変更箇所＞ For access authorities of shared folders, first select a preset with a specified authority.

When performing custom settings to an access authority, try doing the setting while referring to the Access Authority Table.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image027.png)

ja
###### アクセス権限のプリセット
|  **権限** | **実行可能な操作** |
|  :------: | ------ |
|  読み | ファイルの閲覧・ファイル／フォルダのダウンロード・プロパティの参照 |
|  読み + 書き | 読み権限 + ファイル／フォルダのアップロード・名前変更・コピー・移動・削除・プロパティメモへの書込み・ロック設定・バージョン設定 |
|  読み + 送付 | 読み権限 + ダウンロードリンク発行 |
|  読み書き +<br>送付 + 回収 | 読み書き権限 + ダウンロードリンク発行 + アップロードリンク発行 |
|  フルコントロール | 全ての操作 |
|  カスタム | 指定したアクセス権限で実行可能な操作 |

###### Access Authority Presets
|  **Authority** | **Executable Operation** |
|  :------: | ------ |
|  Read | Browsing files, downloading files / folders, and viewing properties. |
|  Read and write | In addition to executable operations in Read authority, uploading, renaming, copying, moving, and deleting files / folders, writing to property descriptions, performing lock settings and version settings are possible. |
|  Read + Send | Read authority + Send key issue authority |
|  Read / write + Send + Collect | Read / Write authority + Send key issue authority + Collect key issue authority |
|  Full control | All operations |
|  Custom | Access authority can be set in any combination. |

ja
###### アクセス権限表
|  **操作** | **操作に必要な権限** |
|  :------: | ------ |
|  アップロードする | ファイルの書き込み |
|  ダウンロードする | ファイルの読み込み |
|  新規フォルダを作成する | フォルダ作成 |
|  ファイル名を変更する | ファイルの読み込み / ファイルの書き込み / ファイル削除 |
|  フォルダ名を変更する | フォルダ作成 / フォルダ削除 |
|  ファイルを移動する | ファイルの読み込み(移動元) / ファイルの書き込み(移動先) / ファイル削除(移動元) |
|  ファイルを閲覧する | ファイルの読み込み |
|  ファイルを削除する | ファイルの読み込み / ファイル削除 |
|  フォルダを削除する | フォルダ削除 |
|  メモへの<br>書込み | ファイルの書き込み |
|  メモの<br>書込み | フォルダ作成 |
|  共有メンバの権限を<br>変更する | 共有メンバ権限変更 |
|  共有メンバを追加 /<br>削除する | 共有メンバ追加 / 削除 |
|  共有設定を変更する<br>他ユーザへフォルダを<br>再共有する | 共有管理 |
|  ダウンロードリンクを発行する | ダウンロードリンク |
|  アップロードリンクを発行する | アップロードリンク |
|  ファイルをロックする | ファイルの書き込み / ファイル削除<br>※ 解除は所有者・設定者(権限不要)が可能 |
|  フォルダをロックする | フォルダ作成 / フォルダ削除<br>※ 解除は所有者・設定者(権限不要)が可能 |
|  ファイルを<br>バージョン管理する | ファイルの書き込み |
|  ファイルをごみ箱から<br>元に戻す | ファイルの書き込み |
|  フォルダをごみ箱から<br>元に戻す | フォルダ作成 |

Access Authority Table
|  **Operation** | **Authority Required for the Operation** |
|  :------: | ------ |
|  Uploading | Write files |
|  Downloading | Read files |
|  Creating a new folder | Create folders |
|  Changing a filename | Read  /write / delete files |
|  Changing a folder name | Create / delete folders |
|  Moving files | Read files (source folder) / write files (destination folder) / delete folders(source folder) |
|  Browsing files | Read files |
|  Deleting files | Read / delete files |
|  Deleting folders | Delete folders |
|  Writing to file property description | Write files |
|  Writing to folder property description | Create folders |
|  Changing share member authority | Change share member authority |
|  Adding / deleting share members | Add / Delete share members |
|  Changing share settings<br>Re-sharing folders with other users | Manage share |
|  Issuing a download link | download link |
|  Issuing a upload link | upload link |
|  Locking folders | Write / delete files |
|  Locking folders | Create / delete folders |
|  Managing file versions | Write files |
|  Recovering files from the trash | Write files |
|  Recovering folders from the trash | Create folders |

ja
### 通知方法
### (New) Notification method

ja
##### ＜共有通知メールが送信されるタイミング＞
##### ＜The timing of sending of sharing notification email＞

ja
共有ファイルへ新規アップロード / 更新アップロード / 移動 / 名前変更を実行した場合に任意の方法で通知メールを送信できます。

If you moved, renamed, or uploaded a new / updated shared file, you can send a notification email through optional methods.

ja
###### 通知メールの送信方法
|  **送信方法** | **説明** |
|  :------: | ------ |
|  WEBメール | PrimeDriveのメールフォームから通知メールを送信します。<br>BCCまたはTO送信が選択できます。 |
|  ローカルメール | ご利用のローカルメーラ(Outlook等)を使用して通知メールを送信します。 |
|  Gmail | Gmailを使用して通知メールを送信します。 |

※ WEBメールの場合、操作ログは記録されますが送信済メールは保存されません。

通知メールの送信履歴を残したい場合は、ローカルメール / Gmailを選択してください。

###### Notification Email Sending Methods
|  **Sending Method** | **Description** |
|  :------: | ------ |
|  Webmail | Send the notification email using its original mail form of PrimeDrive.<br>You can select sending by BCC or TO. |
|  Local mail | Send the notification using your local mailer (Outlook, etc.). |
|  Gmail | Send the notification using Gmail. |

※ Sent emails are not saved when using webmail. If you want to preserve the send history of notification emails, select local mail or Gmail.

ja
## フォルダ共有の手順と管理
## (New) Folder sharing procedures and management

ja
### 手順
### (New) Procedure

ja
#### 操作手順
#### How to operate

ja
1. ホーム画面からファイル／フォルダを選択し、右クリックします。コンテクストメニューから「フォルダを共有する」を選択します。

2. 共有条件を設定します。

---

1. ＜変更箇所＞ Select the folder to be shared from the Main screen and click the "Share" icon.
2. Set the share conditions.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image024.png)

ja
### 共有しているフォルダの一覧表示
### Displaying sharing  folders in a list

#### 操作手順（共有しているフォルダを一覧表示する）
#### How to operate（Displaying sharing  folders in a list）

ja
1. 左メニューから「共有」アイコンをクリックし、「共有設定一覧」を選択します。

---

1. ＜変更箇所＞ Select "Share Setting List" on the left menu of the Main screen.

ja
<共有しているフォルダの共有メンバを確認する>

1. 左メニューから「共有」アイコンをクリックし、「共有設定一覧」を選択します。

<Checking the share members of the shared folders>

1. ＜変更箇所＞ Select the target folder from the Share Setting List and click the "Share" icon.

ja
<共有設定を解除する>

1. 左メニューから「共有」アイコンをクリックし、「共有設定一覧」を選択します。

2. 共有の設定画面から「解除」ボタンをクリック、または共有の設定画面から全てのメンバを選択し、削除」ボタンをクリックします。

---

<Releasing the share setting>

1. ＜変更箇所＞ Select the target folder from the Share Setting List and click the "Share" icon.
2. Select all members from the share setting screen and click the "Delete" button.

ja
### 共有されているフォルダの一覧表示
### Displaying shared folders in a list

ja
#### 操作手順（共有されているフォルダを一覧表示する）
#### How to operate（Displaying shared folders in a list）

ja
ホーム画面の左メニューから「共有されているフォルダ」を選択します。

Select "Shared folders" on the left menu of the Main screen.

ja
##### ＜自分に与えられた共有権限を確認する＞
##### ＜Checking the sharing authority you granted yourself＞

ja
1. 左メニューから「共有されているフォルダ」アイコンをクリックします。共有されているフォルダの一覧からフォルダを選択し、右クリックします。コンテクストメニューから「フォルダを共有する」を選択します。

---

1. ＜変更箇所＞ Select the target folder from the list of shared folders and click the "Share" icon.

ja
##### ＜共有フォルダ所有者の権限について＞
##### ＜Shared folder owner authority＞

ja
* 共有フォルダに対する容量管理は、所有者のみ実行できます。

* 共有フォルダの所有者を共有メンバから除外することはできません。

* Only the owner can execute capacity management for shared folders.
* The owner of the shared folder cannot be excluded from the share members.

ja
## 共有掲示板機能
## Share Folder Forum

ja
#### 概要
#### Overview

ja
フォルダの共有者同士で掲示板でのやり取りができます。

The share folder members can communicate in the forum.

ja
#### 操作手順
#### How to operate

ja
1. 有の設定画面から「共有掲示板」タブをクリックし、共有フォルダ掲示板画面を表示します。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image029.png)

2. 入力欄にメッセージを入力し、「書き込む」ボタンをクリックするとメッセージが掲示板に書き込まれます。

※ 掲示板に書き込みできるメッセージは100件までとなります。101件目を登録すると最初の1件目のメッセージが削除されます。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image030.png)

3. 掲示板のメッセージの横にある「削除」ボタンをクリックすると、メッセージが掲示板から削除されます。<br>
メッセージの記入者 /フォルダの所有者のみ削除できます。

※ コントラクタは、掲示板の書き込み、削除、参照とも行うことができません。

---

1. ＜変更箇所＞ The share folder forum is displayed when the "Forum" button in the share settings screen is clicked.
2. The message is posted to the forum when you input the message and click on "Write" button in the share folder forum.
3. The message is deleted from the forum when "Delete" button next to the message is clicked. Only the person who posted the message or the folder owner can delete the message.

※ The forum can store up to 100 messages, and the older posts will be removed when it exceeds 100 posts.
※ Contractors cannot write, delete nor refer the messages in the forum.

ja
## その他
## (New) Other

ja
### コントラクタが共有を設定する場合
### About folder sharing by a contractor

ja
##### ＜コントラクタによる共有設定について＞
##### ＜About folder sharing by a contractor＞

ja
コントラクタは、パブリックグループ / プライベートグループに所属している場合、所属しているグループに対する共有設定が可能となります。

A contractor can share a folder to the group to which the contractor belongs, if the contractor belongs to a Public or Private group (For a contractor to select specific members of the group to share with, the "Publish members list to contractor" check box of the group must be checked).

ja
# アップロードリンク発行
# (New) Issuing a Upload Link

ja
## アップロードリンクとは
## About Upload Link

ja
アップロードリンクとは、ファイルアップロード用のURLです。

＜変更箇所＞ Collect key is an URL for uploading files.

ja
### 概要
### Overview

ja
回収キーをメール送信することで、PrimeDriveユーザ以外からも指定のフォルダへファイル／フォルダのアップロードが可能となります。

With the collect key, anyone including Non-PrimeDrive user can upload files to the folder.

ja
### 設定できる項目
### (New) Setting items

ja
###### 回収キー設定項目の説明

|  **項目** | **説明** |
|  :------: | ------ |
|  有効日数 | 指定した有効日数を経過すると回収キーが無効となります。<br>1～90日、または無期限の選択ができます。 |
|  回収キーパスワード | 回収キーにパスワードを設定します。<br>パスワードは任意の文字列、または自動生成ができます。<br>「自動生成する」にチェックをした場合、回収キー発行者にパスワードが自動通知されます。<br>※ パスワード通知メールは日本語文と英語文が併記されます。<br>※ 同時に複数の回収キーを発行した場合、「回収キーパスワード」は共通のパスワードとなります。 |
|  メッセージ | 送信相手へのメッセージがアップロード画面へ表示されます。 |

---

###### Description of Collect Key Setting Items

|  **Item** | **Description** |
|  :------: | ------ |
|  Valid days | The collect key will invalid when the specified download count have passed.<br>You can input from 1 to 99 or select indefinite period.<br>7-day is displayed as default.<br>※ If you want to set up expiration period as indefinite, corporate / sub administrator need to allow your setting in advance. |
|  Collect key password | This sets a password for the collect key.<br>For the password, you can set optional settings or generate one automatically.<br>You will be notified of the set password via Email.<br>※ The password notification email is written in both English and Japanese.<br>※ The password notification email does not include the owner information.<br>※ When you issue multiple collect keys at one time, these keys share a common password. |
|  Message | The message to the recipient is displayed on the download screen. |

ja
### 送付方法
### How to send an Upload Link

1. ホーム画面からファイル／フォルダを選択し、右クリックします。コンテクストメニューから「ファイル／フォルダを送付する」を選択します。

2. 回収キー発行画面から必要な項目へ情報を入力し、「次へ」ボタンをクリックします。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image018.png)

###### 回収キーの送信方法

|  **送信方法** | **説明** |
|  :------: | ------ |
|  WEBメール | PrimeDriveのメールフォームから通知メールを送信します。 |
|  ローカルメール | ご利用のローカルメーラ(Outlook等)を使用して通知メールを送信します。 |
|  Gmail | Gmailを使用して通知メールを送信します。 |

※ WEBメールの場合、操作ログは記録されますが送信済メールは保存されません。

通知メールの送信履歴を残したい場合は、ローカルメール / Gmailを選択してください。

3. 発行した回収キーの情報を確認し、回収キーを送信するメーラを選択します。

Check the information about the issued collect key, and select your preferable mailer from "Select a Mailer" screen.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image019.png)

※ 「閉じる」ボタンをクリックすると、回収キーが有効状態のままメーラ選択画面を終了します。

Sent emails are not saved for Primedrive Mail. If you want to preserve the send history of notification emails, select local mail or Gmail adrress.

4. 「Webメール送信」を選択した場合は、以下のメール作成画面が表示されます。<br>
送信先を選択、またはメールアドレスを入力し「送信」ボタンをクリックすると、回収キーの発行通知メールが送信されます。

 When you select "Send a webmail", the following screens will be displayed. If you select a recipient, manually enter an email address, and click the "Send" button, a Upload Link issuance notification email will be sent.

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image020.png)

※ 「同時にパスワードを送付する」にチェックありの場合は、回収キーとパスワード通知の2通が自動送信されます。チェックなしの場合は、パスワード通知メールは送信されませんので、別途送信してください。

When "Send the password at the same time" is checked, the Upload Link and password notification will automatically be sent in 2 emails. Since a password notification email will not be sent when it is left unchecked, send the password notification separately.

#### 操作手順（回収キーからファイルをアップロードする）
#### <How to operate> Uploading files with collect key

1. 送信された回収キーURLをクリックします。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image021.png)

2. ローカルからアップロードするファイルを選択し、「アップロード開始」ボタンをクリックします。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image022.png)

※ 1度にアップロード可能なファイル数は、20個までとなります。

※ 1ファイルの容量制限は、1.9GBまでとなります。

※ ファイルのアップロードが完了すると、回収キー発行者へアップロード通知メールが送信されます。

## 発行手順と管理

### 手順

1. ホーム画面からファイル／フォルダを選択し、右クリックします。
コンテクストメニューから「ファイル／フォルダを送付する」を選択します。

### アップロードリンクの一覧表示

#### 操作手順（発行した回収キーの一覧を表示する）

左メニューから「利用状況一覧」アイコンをクリックし、「アップロードリンク一覧」を選択します。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image023.png)

※ 無効となった回収キーは、30日間を経過後に回収一覧画面から自動削除されます。

Invalid collect keys will be automatically be deleted from the Collection List after 30 days.

Collect key is invalid under the following conditions.

回収キーは以下の条件のとき無効となります。

* 有効期限が切れた場合

* 対象フォルダを移動 / 削除 / 名前変更した場合

* 回収キーを無効化 / 削除した場合(回収キー発行者は常時、無効操作ができます)

* 回収キー発行者が削除された場合


##### ＜回収キーのアクセス履歴を確認する＞

ップロードリンク一覧からフォルダを選択し、右クリックします。コンテクストメニューから「アクセス履歴」を選択します。

##### ＜回収キーを無効にする＞

ップロードリンク一覧からフォルダを選択し、右クリックします。コンテクストメニューから「無効化」を選択します。

##### ＜回収キーを削除する＞

ップロードリンク一覧からフォルダを選択し、右クリックします。コンテクストメニューから「アップロードリンクを削除する」を選択します。

# ダウンロードリンク発行

## ダウンロードリンクとは

ウンロードリンクとは、ファイルダウンロード用のURLです。

### 概要

ウンロードリンクをメール送信することで、PrimeDriveユーザ以外からもファイルのダウンロードが可能となります。

### 設定できる項目

###### 送付キー設定項目の説明

|  **項目** | **説明** |
|  :------: | ------ |
|  有効日数 | 指定した有効日数を経過すると送付キーが無効となります。<br>1～90日、または無期限の選択ができます。 |
|  ダウンロード回数 | 指定したダウンロード回数を消化すると送付キーが無効となります。<br>1～999回、または無制限の選択ができます。 |
|  名前記入 | 送信相手に対して会社名と名前の入力を要求します。ダウンロード時に入力ボックスが表示されます。<br>入力された情報は送付キー履歴で確認できます。 |
|  送付キーパスワード | 送付キーにパスワードを設定します。<br>パスワードは任意の文字列、または自動生成できます。<br>「自動生成する」にチェックをした場合、送付キーの発行者にパスワードが自動通知されます。<br>※ パスワード通知メールは、日本語文と英語文が併記されます。<br>※ 同時に複数の送付キーを発行した場合、送付キーパスワードは共通のパスワードとなります。 |
|  Zip暗号化パスワード | 対象データをパスワード付きZIPファイルに圧縮します。<br>パスワードは任意の文字列、または自動生成できます。<br>「自動生成する」にチェックをした場合、送付キーの発行者にパスワードが自動通知されます。<br>※ パスワード通知メールは、日本語文と英語文が併記されます。<br>※ 同時に複数の送付キーを発行した場合、Zip暗号化パスワードは共通のパスワードとなります。 |
|  簡易ワークフロー | 送付キーの発行・送信に対して承認者の承認が必要となります。 |
|  更新時の無効化 | 送付キーを発行したファイル／フォルダが更新された場合、送付キーを無効にする設定です。<br><ファイルに対して送付キーを発行した場合><br>・ チェック「あり」(デフォルト)：ファイルを上書きすると送付キーは無効となります<br>・ チェック「なし」：ファイルを上書きしても送付キーは無効になりません<br><フォルダに対して送付キーを発行した場合><br>・ チェック「あり」(デフォルト)：フォルダ内のファイルを更新すると送付キーは無効となります<br>・ チェック「なし」：フォルダ内のファイルを更新しても送付キーは無効になりません<br>※ 変更操作(名前変更 / 移動 / 削除)を行うと、この設定に関わらず送付キーは無効となります。 |
|  メール通知 | 送付キー発行者へダウンロード通知メールを送信します。 |
|  対象範囲 | フォルダを送付する場合、指定フォルダ配下の全てのサブフォルダを対象にするか、指定フォルダ直下のファイルのみ対象とするか選択できます。 |
|  送付キー期限切れ<br>ファイルの自動削除 | 次の条件時に送付キーを発行したファイルが、自動的にサーバから完全削除されます。<br>(完全削除されたファイルを復元することはできませんのでご注意ください。)<br>・ ダウンロード残回数が0回になった場合<br>・ 送付キーの有効期限が切れた場合<br>ファイルの送付キーの発行時のみ選択ができます。(フォルダの送付キーの発行の場合は選択できません。) |
|  メッセージ | 送信相手へのメッセージがダウンロード画面へ表示されます。 |



This sets a password for the Download Link. For the password, you can set optional information or generate one automatically. You will be notified of the set password via email.
※ The password notification email is written in both English and Japanese.
※ The password notification email does not include the owner information.
※ When you issue multiple Download Link at one time, these Link share a common password.
※ When an administrator set a minimum length of Download Link password, enter a Download Link password that includes the minimum length or more.


The selected files / folders are saved to a ZIP file then a password is set. For the password, you can set optional information or generate it automatically. You will be notified of the set password via email.

※ The password notification email is written in both English and Japanese.
※ The password notification email does not include the owner information.
※ When you set up the Zip Encryption password, the Download Link cannot be issued to the file / folder which size exceed 300MB.
※ If you have selected more than one file / folder, issuing of the Download Link will be stopped when the file / folder corresponds to the limit mentioned above was discovered.
※ When you issue multiple Download Link at one time, these encrypted zip files share a common password.


＜When issuing Download Link for the file＞
Specify whether to invalid Download Link or not when the file is overwritten.
・ Check "ON" (Default) : Download Link will be invalid when the file is overwritten.
・ Check "OFF" : Download Link will stay valid when the file is overwritten.
＜When issuing Download Link for the folder＞
Specify whether to invalid Download Link or not when files in the folder are updated (add / overwrite / delete).
・ Check "ON" (Default) : Download Link will be invalid when files in the folder are updated.
・ Check "OFF" : Download Link will stay valid when files in the folder are updated.
※ If there are any change (rename / move / delete) on Download Link issued file or folder, despite the setting, the Download Link will be invalid.

When you issue a Download Link of a file under the following terms, the file will be deleted automatically from a server.
（Automatically deleted file cannot be recovered in any ways.）
The file will be deleted if :
・ Download count becomes 0.
・ Download Link is expired.
When "automatic deletion of a sending key expiration file" is set up for "exerting coercion" by the corporate policy, "automatic deletion of a sending key expiration file" is checked compulsorily.

### 送付方法

1. ホーム画面からファイル／フォルダを選択し、右クリックします。コンテクストメニューから「ダウンロードリンクを送付する」を選択します。

2. 送付キー発行画面から必要な項目へ情報を入力し、「次へ」ボタンをクリックします。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image007.png)

3. 発行した送付キーの情報を確認し、送付キーを送信するメーラを選択します。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image008.png)

※ 「閉じる」ボタンをクリックすると、送付キーが有効状態のままメーラ選択画面を終了します。

2. From the Issue a Download Link screen, enter information in the necessary items and click the "Next" button.
3. Check the information about the issued Download Link, and select your preferable mailer from "Select a Mailer" screen.


###### 送付キーの送信方法

|  **送信方法** | **説明** |
|  :------: | ------ |
|  WEBメール | PrimeDriveのメールフォームから通知メールを送信します。 |
|  ローカルメール | ご利用のローカルメーラ(Outlook等)を使用して通知メールを送信します。 |
|  Gmail | Gmailを使用して通知メールを送信します。 |

※ WEBメールの場合、操作ログは記録されますが送信済メールは保存されません。

通知メールの送信履歴を残したい場合は、ローカルメール / Gmailを選択してください。

## 発行手順と管理

### 手順

#### 操作手順

1. 「Webメール送信」を選択した場合は、以下のメール作成画面が表示されます。<br>
送信先を選択、またはメールアドレスを入力し「送信」ボタンをクリックすると、送付キーの発行通知メールが送信されます。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image009.png)

※ 「同時にパスワードを送付する」にチェックありの場合は、送付キーとパスワード通知メールの2通が自動送信されます。チェックなしの場合は、パスワード通知メールは送信されませんので、別途送信してください。

※ パスワードを手動で入力した場合は送付相手へのみパスワードが通知されます。パスワードを自動生成した場合はリンク発行者本人へもパスワードが通知されます。


When "Send the password at the same time" is checked, the Download Link information and password information will be automatically sent separately in 2 notification emails. When left unchecked, only the Download Link information will automatically be notified so you will need to send the password information separately.

### ダウンロードリンクの一覧表示

#### 操作手順（発行済送付キーの一覧を表示する）

ホーム画面の左メニューから「送付一覧」を選択します。

ウンロードリンクの一覧表示画面へは、自身で発行したダウンロードリンクが一覧表示されます。無効となったダウンロードリンクは30日後に一覧画面から自動削除されます。その他、送付キー期限切れファイルの自動削除機能の使用状況などを確認できます。
「送付キー期限切れファイルの自動削除」機能の使用状況(ON / OFF)を確認できます。

Click "Sending List" on the left menu of the Main screen. The use situation (ON / OFF) of an "automatic deletion of sending key expiration file" function can be checked.
![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image010.png)

送付キーは以下の条件のとき無効となります。

* 有効期限が切れた場合

* ダウンロード残回数が0になった場合

* 対象フォルダを移動 / 削除 / 名前変更した場合

* 送付キーを無効化 / 削除した場合 (送付キー発行者は常時、無効操作ができます)

##### ＜送付キーのアクセス履歴を確認する＞

送付一覧画面から対象の送付キーを選択し、「アクセス履歴」アイコンをクリックします。

##### ＜送付キーを無効にする＞

送付一覧画面から対象の送付キーを選択し、「無効化」アイコンをクリックします。

※ 送付キーを無効にするときに、送付キーを選択できる件数は最大1,000件までとなります。

※ 送付キー一覧画面にある「項目数と選択数」は、ステータスバーの右下に表示されます。

##### ＜送付キーを削除する＞

送付一覧画面から対象の送付キーを選択し、「削除」アイコンをクリックします。

## 承認ワークフローの設定方法

### 承認ワークフローとは

### 発行依頼の手順

### 承認の手順

承認ワークフローを利用すると、ダウンロードリンクの発行を承認制にできます。
ダウンロードリンクは、承認者による承認後に送信されます。
発行されたダウンロードリンクは承認後に有効となり、指定したメールアドレスへ自動送信されます。
#### 操作手順

1. ホーム画面からファイル／フォルダを選択し、右クリックします。コンテクストメニューから「ダウンロードリンクを送付する」を選択します。

2. 送付キー発行画面から「簡易ワークフロー：利用する」に設定し、「次へ」ボタンをクリックします。

from the list of approval screen, then click “Approval” button.
Click “Approve” button on confirmation screen, then click “OK” button on the next screen to close.
After the approval is completed, the send key will be sent to the designated person to send automatically.

In case there is the approver more than one, the send key will be sent automatically when all approval is completed.
You cannot do rejection collectively. Please do one by one.


![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image011.png)

1. 送付キー発行画面から「承認者追加」ボタンをクリックし、承認者選択画面で承認者を選択します。

※ 承認者は最大5名まで指定できます。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image012.png)

4. 送信先を選択、またはメールアドレスを入力し「送信」ボタンをクリックします。

5. 次画面で「OK」ボタンをクリックし、終了します。

なお、ダウンロードリンク一覧画面から承認状況を確認できます。

「送付一覧」を選択して表示される送付一覧画面から確認できます。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image013.png)

#### 操作手順（承認依頼通知メール毎の承認操作）

##### ＜承認する場合＞

1. 承認依頼通知メールに記載された承認URLをクリックし、ログインします。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image014.png)

2. 承認対象のファイル／フォルダを確認して、「承認」ボタンをクリックします。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image015.png)

3. 承認完了後、指定された送信相手へ送付キーが自動送信されます。

※ 承認者が複数いる場合は全員の承認完了後、送信相手へ送付キーが自動送信されます。

##### ＜却下する場合＞

1. 承認対象のファイルを確認して、「却下」ボタンをクリックします。

2. 次画面で「OK」ボタンをクリックし、終了します。

3. 本文入力欄へ却下理由を入力し、「送信」ボタンをクリックすると依頼者へ却下メールが送信されます。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image016.png)

4. 次画面で「OK」ボタンをクリックし、終了します。

#### 操作手順 承認一覧での一括承認操作

##### ＜承認する場合＞

1. ホーム画面の左メニューから「承認一覧」を選択します。

2. 承認一覧画面から一括承認したい承認レコードを選択し、「承認」ボタンをクリックします。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image017.png)

3. 確認画面で「承認する」ボタンをクリックし、次画面で「OK」ボタンをクリックして終了します。

4. 承認完了後、指定された送信相手へ送付キーが自動送信されます。

※ 承認者が複数いる場合は全員の承認完了後、送信相手へ送付キーが自動送信されます。

※ 却下につきましては一括で行えません。一件ずつ行ってください。

# グループ

## 2種類のグループについて

（プライベートグループとパブリックグループについて）
プライベートグループは、一般ユーザが作成する個人的なグループとなり、ほかのユーザへは公開されません。
パブリックグループは、コーポレート管理者、またはサブ管理者が管理画面から登録可能なグループとなり、全ユーザへ公開されます。
作成されたグループは、共有フォルダの共有メンバ、またはダウンロードリンクやアップロードリンクの送付対象として指定できます。

## プライベートグループの利用

### 作成

#### 操作手順

1. ヘッダーの「アカウント」ボタンをクリックし、メニューから「プライベートグループ」を選択します。

2. グループ管理画面から「作成」ボタンをクリックします。

3. グループ名を入力し、グループへ含むユーザ / グループを選択します。

4. コントラクタへグループメンバを公開する場合は、「コントラクタにメンバ一覧を公開する」へチェックを入れ、「OK」ボタンをクリックします。

※ ユーザ / グループ名の検索は、大文字 / 小文字は区別せず検索します。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image055.png)

### 編集

#### 操作手順

1. ヘッダーの「アカウント」ボタンをクリックし、メニューから「プライベートグループ」を選択します。

2. グループ管理画面から編集するグループを選択し、「編集」ボタンをクリックします。

3. グループの編集完了後、「OK」ボタンをクリックします。

### 削除

#### 操作手順

1. ヘッダーの「アカウント」ボタンをクリックし、メニューから「プライベートグループ」を選択します。

2. グループ管理画面から削除するグループを選択し、「削除」ボタンをクリックします。

# 個人設定

## 管理者からのお知らせ

毎回のログイン操作で管理者からのお知らせが表示されます。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image004.png)

##### ＜次回以降、お知らせ画面を非表示にする＞

お知らせ画面から「次回から表示しない」にチェックを入れます。

コーポレート / サブ管理者により新たにお知らせ情報が更新された場合は、非表示が解除されます。

##### ＜お知らせを確認する＞

ヘッダーの「ベルアイコン」をクリックします。

## 表示言語の切り替え

#### 操作手順

1. ヘッダーの「アカウント」ボタンをクリックし、メニューから「アカウント設定」を選択します。

2. アカウント設定画面から言語を変更し、「OK」ボタンをクリックします。

※ ログイン画面の表示言語は、直前にログインしていたユーザが設定している言語で表示されます。

## 表示設定

### 状態列を非表示にする

#### 概要

ファイル／フォルダ一覧の状態列を非表示にします

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image059.png)

##### ＜状態列を表示する画面＞

* ホーム

* 共有されているフォルダ

* 共有設定一覧

* ロック設定一覧

* バージョン設定一覧

* 期限設定一覧

* 容量設定一覧

#### 操作手順

1. ヘッダーの「アカウント」ボタンをクリックし、メニューから「表示設定」を選択します。

2. 表示設定画面から「状態列を表示する」のチェックを外して、「OK」ボタンをクリックします。

### 大文字と小文字を無視したソート（並び替え)

#### 操作手順

1. ヘッダーの「アカウント」ボタンをクリックし、メニューから「表示設定」を選択します。

2. 表示設定画面から「大文字小文字を無視してソートする」にチェックを入れ、「OK」ボタンをクリックします。

Check on "Sort ignoring upper / lower case" from the Display setting screen, then click the "OK" button.

##### ＜大文字小文字を無視してソートする：チェックあり＞

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image060.png)

##### ＜大文字小文字を無視してソートする：チェックなし＞

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image061.png)

## アドレス帳

### 登録

#### 操作手順

1. ヘッダーの「アカウント」ボタンをクリックし、メニューから「アドレス帳」を選択します。

2. アドレス帳管理画面から「作成」ボタンをクリックします。

3. 必要な項目へ情報の入力完了後、「OK」ボタンをクリックします。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image056.png)

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image057.png)

### 編集

#### 操作手順

1. ヘッダーの「アカウント」ボタンをクリックし、メニューから「アドレス帳」を選択します。

2. アドレス帳管理画面から編集するアドレスを選択し「編集」ボタンをクリックします。

3. 情報の編集完了後、「OK」ボタンをクリックします。

### 削除

#### 操作手順

1. ヘッダーの「アカウント」ボタンをクリックし、メニューから「アドレス帳」を選択します。

2. アドレス帳管理画面から削除するアドレスを選択し、「削除」ボタンをクリックします。

## ローカルメーラの選択

#### 操作手順

1. ヘッダーの「アカウント」ボタンをクリックし、メニューから「アカウント設定」を選択します。

2. アカウント設定画面からご利用のローカルメーラを選択し、「OK」ボタンをクリックします。

## 操作ログの確認

#### 操作手順

1. ヘッダーの「アカウント」ボタンをクリックし、メニューから「ユーザログ参照」を選択します。

2. ログ一覧からログを選択し、「詳細」ボタンをクリックします。

![代替テキスト](https://primedrive.jp/help/web/ja/index.files/image058.png)
