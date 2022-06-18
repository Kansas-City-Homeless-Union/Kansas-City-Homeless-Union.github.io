#!/bin/bash

set -e

git stash
npm run build
git switch gh-pages

cp -R build/* .
git add .
git commit -m 'Publish site'
git push origin gh-pages:gh-pages
git switch -
