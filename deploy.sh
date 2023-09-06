echo "Switching to branch master"
git checkout master

echo "Building the server..."
npm run build

echo "Deploying files to server.."
scp -r build/* fa23sp24g12@maverick.eecs.ucf.edu:/var/www/html/seniordesign/fa2023sp2024/g12/

echo "Done!"
