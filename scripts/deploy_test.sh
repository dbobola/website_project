#!/usr/bin/env sh

set -e

BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [ "$BRANCH" = "main" ]; then
    echo 'You cannot deploy the main branch to the test environment. You are either on the wrong branch, or are using the wrong deploy script.';
    exit 1;
fi

rm -rf dist
npm run build
cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy to test environment'

git push -f git@github.com:dollarbeale/TestEnvironment.git main

cd -