const webfontsGenerator = require('webfonts-generator');
const path = require('path');
const fs = require('fs');

async function getFileList(dir) {
	const files = await new Promise((resolve, reject) => {
		fs.readdir(dir, (err, files) => {
			if (err) {
				return reject(err);
			}
			resolve(files);
		});
	});
	return files.map(file => path.join(dir, file));
}

async function run() {
	const files = await getFileList('./in/svgs');
	return new Promise((resolve, reject) => {
		webfontsGenerator({
			fontName: 'iconfont',
			files,
			dest: 'out/font',
			html: true,
			types: ['ttf', 'svg', 'woff', 'eot'],
		}, function (error) {
			if (error) {
				return reject(error);
			}
			resolve('👍');
		});
	});
}

run().then(console.log, console.error);
