## LDAP認証

### LDAP認証利用時の設定項目

###### コーポレートポリシー（LDAP認証）
|  **項目名** | **説明** |
|  :------: | ------ |
|  LDAPアドレス | LDAPサーバのアドレスを設定します。 ※認証方式にLDAPを設定 |
|   | 入力例：アドレス（10.10.10.1）又はホスト名（pdadldap.pdad.sbtm.com） |
|  LDAPサーバーポート | LDAPサーバのポート番号を設定します |
|   | 389（LDAP）/636（LDAPS） |
|  SSL | SSLの利用を設定します。 |
|   | 利用する（LDAPS）/利用しない（LDAP） |
|  SSL証明書有効チェック | SSL証明書有効チェックの利用を設定します。 |
|   | 利用する/利用しない |
|  LDAPプロトコルバージョン | LDAPプロトコルバージョンを設定します。 ※CNに日本語可とする場合は「3」を設定します |
|   | 2月3日 |
|  アカウント形式 | アカウント形式を設定します |
|   | UPN形式（アカウント＠FQDN）/従来形式（Windows2000以前）/その他 ※任意の属性名称を設定します |
|  LDAPバインドＤＮ | 接続用のアカウントDNを設定します。<br/> ※LDAPプロトコルバージョン：3の場合、CNは日本語可 |
|   | 入力例：CN=user,OU=staffs,DC=pdad,DC=sbtm,DC=com |
|  LDAPバインドパスワード | 接続用のアカウントのパスワードを設定します |
|   | 入力例：sbtm@000 |
|  LDAP検索用ベースＤＮ | 接続用のアカウントの管理場所を設定します。 ※通常はドメイン指定をします。 |
|   | 入力例：DC=pdad,DC=sbtm,DC=com |
|  テストアカウント | LDAP認証テストを行う際に使用するアカウントを設定します ※上記、LDAPバインドDNで指定されたアカウント可。 |
|   | 入力例：pdadbind0 |
|  テストアカウントパスワード | LDAP認証テストを行う際に使用するテストアカウントのパスワードを設定します |
|   | 入力例：sbtm@000 |

認証方式：LDAPを選択した場合のコーポレートポリシー編集画面

![代替テキスト](http://placehold.jp/30/e0e0e0/6e6e6e/500x100.png?text=%E7%94%BB%E5%83%8F%E5%A4%89%E6%9B%B4)