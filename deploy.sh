#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'longthay.id.vn' > CNAME

git init
git remote add origin https://github.com/foxbunlong/foxbunlong.github.io.git
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f origin master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -