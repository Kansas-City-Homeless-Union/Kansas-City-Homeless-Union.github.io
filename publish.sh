#!/bin/bash

set -e

git stash
npm run build
set +e # Fails the script if gh-pages does not exist
git branch -D gh-pages
set -e
git switch -c gh-pages

mv  build/* .
git add .
git commit -m 'Publish site'
git push origin -f gh-pages:gh-pages
git switch -
git stash pop
git branch -D gh-pages
