set -e

yarn run build

rm -rf assets
rm -rf pages
rm -f index.html
rm -f 404.html
cp -r docs/.vuepress/dist/* ./

git add -A
git commit -m 'deploy'

git push -f git@github.com:Bob-huang-gdut/blog.git master
