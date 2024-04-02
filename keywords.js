'use strict '

var keywordType = {
    none: 0,
    resolution: 1,
    audioCodec: 2,
    videoCodec: 3,
    lowQualitySrc: 4,
    highQualitySrc: 5,
    hdr: 6,
    container: 7,
}

var resolutionKeywords = ['1080p', '1080i', '1920x1080', '720p', '720i', '480p', '480i', '1440p', '1440i', '2k', '2160p', '2160i', '3840x2160', '4k'];

var audioCodecKeywords = ['dts', 'dts-hd', 'acc', 'aac2.0', 'aac 2.0', 'mp3', 'wav', 'truehd', 'ac3', 'ac-3', 'atmos', 'dtsma', 'dolby', 'dolbydigital', 'dolby-digital', 'eac3', '6ch', 'dd5.1', 'dd 5.1', 'ddp5.1','ddp 5.1', 'aac5.1', 'aac 5.1'];

var videoCodecKeywords = ['divx', 'xvid', 'rv10', 'rv13', 'rv20', 'rv30', 'rv40', 'mpeg', 'mpeg2', 'mpeg-2', 'mpg2', 'h262', 'h.262', 'x262', 'xmpeg2', 'mpeg2x', 'mpeg4', 'h263', 'h.263', 'x263', 'h264', 'h.264', 'x264', 'h265', 'h.265', 'x265', 'hevc', 'avchd', 'av1'];

var hdrKeywords = ['hdr', 'hdr10plus', '10bit', '10bits', 'hevc10', 'yuv420p10']

var lowQualityReleaseKeywords = ['camrip', 'cam', 'hqcam', 'ts', 'hdts', 'telesync', 'pdvd', 'predvdrip', 'wp', 'workprint', 'tc', 'hdtc', 'telecine', 'src', 'screener', 'dvdscr', 'dvdscreener', 'bdscr', 'ddc', 'r5', 'vhs', 'vhsrip'];

var highQualityReleaseKeywords = ['ppv', 'ppvrip', 'dvdrip', 'dvdmux', 'dvdr', 'dvd-full', 'full-rip', 'iso rip', 'lossless rip', 'untouched rip', 'dvd-5', 'dvd-9', 'dsr', 'dsrip', 'satrip', 'dthrip', 'dvbrip', 'hdtv', 'pdtv', 'dtvrip', 'tvrip', 'hdtvrip', 'vodrip', 'vodr', 'webdl', 'web dl', 'web-dl', 'web', 'hdrip', 'web-dlrip', 'webrip', 'web-cap', 'webcap', 'web cap', 'blu-ray', 'bluray', 'bdrip', 'bdrip', 'brrip', 'bdmv', 'bdr', 'bd25', 'bd50', 'bd5', 'bd9', 'ultrahd', 'remux', 'uhd'];

var containerKeywords = ['mkv', 'mp4', 'avi']

var allKeywords = resolutionKeywords.concat(audioCodecKeywords).concat(videoCodecKeywords).concat(hdrKeywords).concat(lowQualityReleaseKeywords).concat(highQualityReleaseKeywords).concat(containerKeywords)

module.exports = {
    keywordType: keywordType,
    resolutionKeywords: resolutionKeywords,
    audioCodecKeywords: audioCodecKeywords,
    videoCodecKeywords: videoCodecKeywords,
    hdrKeywords: hdrKeywords,
    lowQualityReleaseKeywords: lowQualityReleaseKeywords,
    highQualityReleaseKeywords: highQualityReleaseKeywords,
    containerKeywords: containerKeywords,
    allKeywords: allKeywords
}
