## gulp-opencc

![gulp](https://cdn.rawgit.com/aleen42/badges/master/src/gulp.svg)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/aleen42/gulp-opencc/master/LICENSE) 

[![npm](https://img.shields.io/npm/v/gulp-opencc.svg)](https://www.npmjs.com/package/gulp-opencc)
[![Build Status](https://travis-ci.org/aleen42/gulp-opencc.svg?branch=master)](https://travis-ci.org/aleen42/gulp-opencc)
[![npm](https://img.shields.io/npm/dt/gulp-opencc.svg)](https://www.npmjs.com/package/gulp-opencc)

A Gulp plugin for convert chinese based on OpenCC

### Usage

This plugin is mainly used for converting Chinese in Gulp tasks defined in the file, `gulpfile.js`. As it is based on OpenCC, you can use it with passing options, in which you can specify the type of converting:

- **s2t**: Simplified Chinese to Traditional Chinese 簡體到繁體
- **t2s**: Traditional Chinese to Simplified Chinese 繁體到簡體
- **s2tw**: Simplified Chinese to Traditional Chinese (Taiwan Standard) 簡體到臺灣正體
- **tw2s**: Traditional Chinese (Taiwan Standard) to Simplified Chinese 臺灣正體到簡體
- **s2hk**: Simplified Chinese to Traditional Chinese (Hong Kong Standard) 簡體到香港繁體（香港小學學習字詞表標準）
- **hk2s**: Traditional Chinese (Hong Kong Standard) to Simplified Chinese 香港繁體（香港小學學習字詞表標準）到簡體
- **s2twp**: Simplified Chinese to Traditional Chinese (Taiwan Standard) with Taiwanese idiom 簡體到繁體（臺灣正體標準）並轉換爲臺灣常用詞彙
- **tw2sp**: Traditional Chinese (Taiwan Standard) to Simplified Chinese with Mainland Chinese idiom 繁體（臺灣正體標準）到簡體並轉換爲中國大陸常用詞彙
- **t2tw**: Traditional Chinese (OpenCC Standard) to Taiwan Standard 繁體（OpenCC 標準）到臺灣正體
- **t2hk**: Traditional Chinese (OpenCC Standard) to Hong Kong Standard 繁體（OpenCC 標準）到香港繁體（香港小學學習字詞表標準）

```js
/** gulpfile.js */
const opencc = require('gulp-opencc');

gulp.task('convert-chinese', () => {
    gulp.src('zh.json')
        .pipe(opencc.default({
            type: 's2tw'
        }))
        .pipe(rename('zh_TW.json'))
        .pipe(gulp.dest('build/'));
});
```

### Release History

* ==================== **1.0.0 Initial release** ====================
    * 1.0.1 doc: update the document of this project

### :fuelpump: How to contribute

Have an idea? Found a bug? See [how to contribute](https://aleen42.gitbooks.io/personalwiki/content/contribution.html).

### :scroll: License

[MIT](https://aleen42.gitbooks.io/personalwiki/content/MIT.html) © aleen42
