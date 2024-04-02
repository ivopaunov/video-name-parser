'use strict '

var {
    keywordType,
    resolutionKeywords,
    audioCodecKeywords,
    videoCodecKeywords,
    hdrKeywords,
    lowQualityReleaseKeywords,
    highQualityReleaseKeywords,
    containerKeywords,
    allKeywords
} = require('./keywords')

// chars without escaping: [](). -;,_/\+
var separatorChars = '([\\[\\](). \\-;,_\\/\\\\+])'
// NOTE: Needs node ^8.10.0 V8 > 6.2 to work with lookbehind ?<=
var leftBoundary = '(^|(?<=' + separatorChars + '{1}))'
var rightBoundary = '((?=' + separatorChars + '{1})|$)'

var allKeywordsPattern = '(' + allKeywords.join('|') + ')'
var allKeywordsRegEx = new RegExp(leftBoundary + allKeywordsPattern + rightBoundary, 'gi')

var keywordsWithType = (function () {
    var allKeywordsObj = {}

    function addToAllKeywords(arr, type) {
        return arr.forEach(element => {
            allKeywordsObj[element] = type
        })
    }

    addToAllKeywords(resolutionKeywords, keywordType.resolution)
    addToAllKeywords(audioCodecKeywords, keywordType.audioCodec)
    addToAllKeywords(videoCodecKeywords, keywordType.videoCodec)
    addToAllKeywords(hdrKeywords, keywordType.hdr)
    addToAllKeywords(lowQualityReleaseKeywords, keywordType.lowQualitySrc)
    addToAllKeywords(highQualityReleaseKeywords, keywordType.highQualitySrc)
    addToAllKeywords(containerKeywords, keywordType.container)

    return allKeywordsObj
}())

function pushUniqueToArray(arr, val) {
    if (arr.indexOf(val) < 0) {
        arr.push(val)
    }
}

function getExtra(filePath) {
    var extraData = { resolution: [], audioCodec: [], videoCodec: [], hdr: [], lowQualitySrc: [], highQualitySrc: [], container: []}

    if (!filePath
        || (typeof filePath !== 'string')) {
        return extraData
    }

    var match = filePath.match(allKeywordsRegEx)

    if (match)
        match.reduce(function (extra, m) {
            m = m.toLowerCase()
            switch (keywordsWithType[m]) {
                case keywordType.resolution:
                    pushUniqueToArray(extra.resolution, m)
                    break;
                case keywordType.audioCodec:
                    pushUniqueToArray(extra.audioCodec, m)
                    break;
                case keywordType.videoCodec:
                    pushUniqueToArray(extra.videoCodec, m)
                    break;
                case keywordType.hdr:
                    pushUniqueToArray(extra.hdr, m)
                    break;
                case keywordType.lowQualitySrc:
                    pushUniqueToArray(extra.lowQualitySrc, m)
                    break;
                case keywordType.highQualitySrc:
                    pushUniqueToArray(extra.highQualitySrc, m)
                    break;
                case keywordType.container:
                    pushUniqueToArray(extra.container, m)
                    break;
                default:
                    break;
            }

            return extra

        }, extraData)

    return extraData
}

module.exports = {
    getExtra: getExtra
}
