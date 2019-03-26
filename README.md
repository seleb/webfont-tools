# webfont-tools

some simple tools for dealing with webfonts

## features

- convert svgs to font (via [`webfonts-generator`](https://www.npmjs.com/package/webfonts-generator))
- convert font to svgs (via [`font-blast`](https://www.npmjs.com/package/font-blast))

## config

can be configured via `.webfont-toolsrc` (or other `rc`-compatible config)

- `in`:
  - for svgs to font: filepath of folder containing svgs; default - `./in/svgs`
  - for font to svgs: filepath of svg webfont; default - `./in/iconfont.svg`
- `out`:
  - for svgs to font: filepath of folder to output font; default - `./out/font`
  - for font to svgs: filepath of folder to output svgs; default - `./out/svgs`
- `fontName`: name of output font for svgs to font; default - `iconfont`
