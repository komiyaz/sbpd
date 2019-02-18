## SAML認証

### SAML認証利用時の設定項目

###### コーポレートポリシー（SAML認証）
|  **項目名** | **説明** |
|  :------: | ------ |
|  IdP SSO エンドポイントアドレス | Identity ProviderのSSOエンドポイントURL（HTTP-Redirect）を設定します。 ※認証方式にSAMLを設定 |
|   | SAML認証リクエストの送信先を設定します。 |
|  IdPログアウト 処理アドレス | PrimeDriveからのログアウト後に遷移するURLを設定します。 |
|   | PrimeDriveからログアウトした後に表示される、Identity Provider のURLを設定します。 |
|  IdP公開鍵証明書 | Identity Providerが署名に使用する公開鍵の証明書を設定します。 |
|   | 公開鍵の証明書ファイルを添付します。 |
|  SPサービスURL | SAML認証後のリダイレクト先を設定します。 |
|   | システムよりリダイレクト先URLを自動設定します。 |
|  SP証明書 利用者識別子 | SPの識別子を設定します。 |
|   | システムより識別子を自動設定します。 |

認証方式：SAMLを選択した場合のコーポレートポリシー編集画面

![代替テキスト](http://placehold.jp/30/e0e0e0/6e6e6e/500x100.png?text=%E7%94%BB%E5%83%8F%E5%A4%89%E6%9B%B4)