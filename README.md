# How to install

★ビルド
ソースコードを、ローカルから開発マシンへコピー
cd ~/pcratch/xcratch-extensions/websock-ext
npm run build

★テスト用のコピー
scp ./dist/websockExt.mjs koichii@j-code.org:~/jcode-dev/pcratch/www/xcratch-extensions/websock-ext/dist/websockExt2.mjs
 ★ぷくらっち拡張機能として、読み込む（テストはOK）
https://pcratch.j-code.org/xcratch-extensions/websock-ext/dist/websockExt2.mjs


★開発マシンから本番マシンへコピー
cd ~/pcratch/xcratch-extensions/websock-ext
scp ./dist/websockExt.mjs koichii@j-code.org:~/jcode-dev/pcratch/www/xcratch-extensions/websock-ext/dist/websockExt.mjs
 ★ぷくらっち拡張機能として、読み込めば動くが、それだけでは不十分（プレインストールのイメージも変更が必要）
https://pcratch.j-code.org/xcratch-extensions/websock-ext/dist/websockExt.mjs
 ★scratch-guiのプレインストールwebsockExt.mjsを更新＝＞その後、scratch-guiビルド＝＞scratch-wwwビルドが必要
scp ./dist/websockExt.mjs ~/pcratch/scratch-gui/src/lib/libraries/extensions/preInstall/websockExt.mjs
・コピー確認
ls ~/pcratch/scratch-gui/src/lib/libraries/extensions/preInstall/ -l

# My Extension
An example extension for [Xcratch](https://xcratch.github.io/)

This extension add extra-block "do it", that executes string in its input field as a sentence in Javascript and return the result.


## ✨ What You Can Do With This Extension

Play [Example Project](https://xcratch.github.io/editor/#https://githubAccount.github.io/xcx-my-extension/projects/example.sb3) to look at what you can do with "My Extension" extension. 
<iframe src="https://xcratch.github.io/editor/player#https://githubAccount.github.io/xcx-my-extension/projects/example.sb3" width="540px" height="460px"></iframe>


## How to Use in Xcratch

This extension can be used with other extension in [Xcratch](https://xcratch.github.io/). 
1. Open [Xcratch Editor](https://xcratch.github.io/editor)
2. Click 'Add Extension' button
3. Select 'Extension Loader' extension
4. Type the module URL in the input field 
```
https://githubAccount.github.io/xcx-my-extension/dist/myExtension.mjs
```

## Development

### Register on the local Xcratch

Run register script to install this extension on the local Xcratch for testing.

```sh
npm run register
```

### Bundle into a Module

Run build script to bundle this extension into a module file which could be loaded on Xcratch.

```sh
npm run build
```

## 🏠 Home Page

Open this page from [https://githubAccount.github.io/xcx-my-extension/](https://githubAccount.github.io/xcx-my-extension/)


## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/githubAccount/xcx-my-extension/issues). 
