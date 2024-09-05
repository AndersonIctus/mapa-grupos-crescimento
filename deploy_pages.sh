npm run pages
mv docs/browser/*.* docs
rmdir docs/browser
cp docs/index.html docs/404.html

git add .
