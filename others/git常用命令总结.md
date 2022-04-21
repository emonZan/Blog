# Git 常用命令总结
现在我们无论是公司或者是个人项目，都常常用到Git,作为一个开源的版本控制系统，在我用过的所有版本控制系统中，它是最好用的了（截止到写这篇文章的2022年）。这里记下一些常用命令。具体的命令大全可以参考[Git](http://git-scm.com/docs/git).
## 仓库(Repository)
1. `git init`, 创建一个新的本地仓库
2. `git clone`,check out a repository

## 提交代码
1. status 
    `git status`, 列出有改动，目前需要提交的文件。
2. Add files
    `git add <filename>`
    `git add *`, 添加一个或多个文件到stating
3. Commit 
    `git commit -m "Commit message"`, commit changes to head(but not yet to remote repository).
    `git commit -a`, commit any files you've added with `git add`, and also commit any files you've add since then.
4. Push
    `git push origin master`, send changes to the master branch of your remote repository.

## 撤销本地的改动
1. `git checkout -- <filename>`, replace the changes in your working tree with the last content in the head. Changes already added to the index, as well as new files, will be keep.
2. `git fetch origin`
    `git reset --hard origin/master` ,放弃本地所有的改动和提交,fetch the latest history from the server and point your local masrer branch at it.


## 分支(branches)
1. `git checkout -b <branchname>`, 创建一个新的分支，并且切换到它。
2. `git branch -d <branchname>`, 删除分支。
3. `git push origin <branchname>`,Push the branch to your remote repository, so others can use it.
4. `git push --all  origin`, push all branches to your remote repository.
2. `git push origin :<branchname>` 删除你远程仓库的分支。

## update from remote repository
1. `git pull` Fetch and merge changes on the remote server to your working diectory.2.
2. `git merge <brandbane>`, merge a different branch to your active branch.
3.  `git diff`, view all the conflicts.
    `git digg --base <filename>`, view the conflicts against the base file.
    `git diff <sourcevbranch> <targetbranch>`, preview changes before merge
4. `git add <filename>`,解决冲突之后，手动添加更新过的文件


