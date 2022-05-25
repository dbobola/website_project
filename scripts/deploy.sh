#!/usr/bin/env sh

set -e

rm -rf dist

npm run build

cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:dbobola/dbobola.github.io.git main

cd -