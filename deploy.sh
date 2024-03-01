#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

dist_path=docs/.vuepress/dist
push_address=https://github.com/GitFish123/GitFish123.github.io.git
# push_address=git@github.com:GitFish123/GitFish123.github.io.git
remote_branch=gh-pages

# 生成静态文件
pnpm run docs:build

# 进入生成的文件夹
cd $dist_path

git init
git add -A
git commit -m "deploy static site"
git push -f $push_address HEAD:$remote_branch

cd -
rm -rf $dist_path