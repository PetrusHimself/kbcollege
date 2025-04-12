const { execSync } = require('child_process');

console.log('Building Tailwind CSS...');
execSync('npx tailwindcss -i ./assets/css/main.css -o ./static/css/tailwind.css', { stdio: 'inherit' });
console.log('Tailwind CSS build complete!');