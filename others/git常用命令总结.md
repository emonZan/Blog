# Git 常用命令总结
现在我们无论是公司或者是个人项目，都常常用到Git,作为一个开源的版本控制系统，在我用过的所有版本控制系统中，它是最好用的了（截止到写这篇文章的2022年）。这里记下一些常用命令。具体的命令大全可以参考[Git](http://git-scm.com/docs/git).

一般来说，我们现在用[Github Desktop](https://desktop.github.com/)或者[Sourcetree](https://www.sourcetreeapp.com/)这些UI工具就很方便了。

## 仓库(Repository)
1. `git init`, 创建一个新的本地仓库
2. `git clone`, clone一个分支

## 提交代码
1. status 
    `git status`, 列出本地有改动、需要提交的文件。
2. Add files
    `git add <filename>`
    `git add *`, 添加一个或多个文件到staging area
3. Commit 
    `git commit -m "Commit message"`, 提交之前加到staging area的代码
4. Push
    `git push origin master`, 将更改提交到远程存储库的主分支。

一般提交代码之前，我们需要

## 撤销本地的改动
1. `git checkout -- <filename>`, replace the changes in your working tree with the last content in the head. Changes already added to the index, as well as new files, will be keep.
2. `git fetch origin`
   `git reset --hard origin/master` ,放弃本地所有的改动和提交,从服务器获取最新的历史记录，并将您的本地masrer分支指向它。


## 分支(branches)
1. `git checkout -b <branchname>`, 创建一个新的分支，并且切换到它。
2. `git branch -d <branchname>`, 删除分支。
3. `git push origin <branchname>`,把你的当前分支提交到远程， 这样别人也能看到了
4. `git push --all  origin`, 把你所有的分支都提交到远程仓库。
5. `git push origin :<branchname>` 删除你远程仓库的分支。

## 从远程存储库进行更新 update from remote repository
1. `git pull` 拉取远程仓库的代码
2. `git merge <branchname>`,合并某个分支到当前分支
3. `git diff`, 查看所有冲突。
   `git digg --base <filename>`, 基于base file来查看冲突。
   `git diff <sourcevbranch> <targetbranch>`, 提交前查看冲突。
4. `git add <filename>`,解决冲突之后，手动添加更新过的文件。


