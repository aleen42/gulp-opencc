/**
 *                                                               _
 *   _____  _                           ____  _                 |_|
 *  |  _  |/ \   ____  ____ __ ___     / ___\/ \   __   _  ____  _
 *  | |_| || |  / __ \/ __ \\ '_  \ _ / /    | |___\ \ | |/ __ \| |
 *  |  _  || |__. ___/. ___/| | | ||_|\ \___ |  _  | |_| |. ___/| |
 *  |_/ \_|\___/\____|\____||_| |_|    \____/|_| |_|_____|\____||_|
 *
 *  ===============================================================
 *             More than a coder, More than a designer
 *  ===============================================================
 *
 *  - Document: index.js
 *  - Author: aleen42
 *  - Description: The main entry of this plugin
 *  - Create Time: Nov, 7th, 2017
 *  - Update Time: Nov, 7th, 2017
 *
 */

'use strict';

import { Transform } from 'stream';
import opencc from 'node-opencc';

class ConvertChinese extends Transform {
    constructor(options) {
        super({
            objectMode: true
        });

        this.options = options;
    }

    /**
     * transform input and produce output
     * @param file
     * @param encoding
     * @param callback
     * @returns {*}
     * @private
     */
    _transform(file, encoding, callback) {
        /** @namespace file.isNull */
        if (file.isNull()) {
            /** check whether file is empty */
            callback(null, file);
            return;
        }

        const functionsMap = {
            's2t': opencc.simplifiedToTraditional,
            't2s': opencc.traditionalToSimplified,
            's2tw': opencc.simplifiedToTaiwan,
            'tw2s': opencc.taiwanToSimplified,
            's2hk': opencc.simplifiedToHongKong,
            'hk2s': opencc.hongKongToSimplified,
            's2twp': opencc.simplifiedToTaiwanWithPhrases,
            'tw2sp': opencc.taiwanToSimplifiedWithPhrases,
            't2tw': opencc.traditionalToTaiwan,
            't2hk': opencc.traditionalToHongKong
        };

        file.contents = new Buffer(functionsMap[this.options.type](String(file.contents)));
        callback(null, file);
    }
}

/**
 * an instance for the gulp plugin
 * @param options
 * @returns {ConvertChinese}
 */
export default function (options = {
    type: 's2t',
}) {
    return new ConvertChinese(options);
}
