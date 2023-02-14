# nodejs-in-action
### 工程化
### 安装commitizen，cz-conventional-changelog，使用git cz提交代码

如果使用了nvm，则安装在当前node下面
参考 https://www.npmjs.com/package/commitizen

```shell
npm install -g commitizen cz-conventional-changelog
echo  '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

### mongodb

使用brew安装mongodb

```shell
brew tap mongodb/brew
brew search mongodb-community
brew install mongodb-community@5.0
```

安装完成后，可以执行下面这句命令，将mongodb添加进环境变量
```shell
echo 'export PATH="/opt/homebrew/opt/mongodb-community@5.0/bin:$PATH"' >> ~/.zshrc
```
可以使用下面这句命令启动/重启/停止mongodb
```shell
brew services start/restart/stop mongodb/brew/mongodb-community@5.0
```

如果你不需要后台服务，可以执行下面这句命令
```shell
mongod --config /opt/homebrew/etc/mongod.conf
```