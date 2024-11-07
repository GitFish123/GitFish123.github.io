#!/bin/bash
cd $SITE_PATH
echo $PWD
git reset --hard origin/main
git clean -f
git checkout main
git pull
# yarn
yarn build