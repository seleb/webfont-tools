const fontBlast = require('font-blast');
const pkg = require('./package.json');

const conf = require('rc')(pkg.name, {
	in: './in/iconfont.svg',
	out: './out/svgs',
});

fontBlast(conf.in, conf.out);
