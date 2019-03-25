# 如何生成 ssh 公钥和查看 ssh 公钥

### 生成 ssh 公钥

在 git bash 中输入

```
ssh-keygen
```

期间会要求根据你的要求设置几项配置：ssh 存放位置、输入密码和确认密码等。直接按 enter 就行，不需要输入

### 查看 ssh 公钥

#### 方法 1：通过命令行查看

打开 git bash 窗口并进入 `~/.ssh`

```
cd ~/.ssh
```

找到 id_rsa.pub 文件并查看

```
ls//查看目录下都有哪些文件
cat id_rsa.pub 或者 vim id_rsa.pub
```

然后就会输出本地生成的公钥，将这个公钥设置在你的 github 中就可以提交你的本地代码到你的远程仓库了
