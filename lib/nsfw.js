// Load Images //
const bdsmImages = require(`../images/bdsm`);
const cumImages = require(`../images/cum`);
const doujinImages = require(`../images/doujin`);
const hentaiImages = require(`../images/hentai`);
const maidImages = require(`../images/maid`);
const pantyImages = require(`../images/panties`);
const assImages = require(`../images/ass`);
const orgyImages = require(`../images/orgy`);
const femdomImages = require(`../images/femdom`);
const netorareImages = require(`../images/netorare`);
const hentaiGifs = require(`../images/hnt_gifs`);

// Load NSFW Wallpapers //
const nsfwWallpapers = require('../images/nsfwWallpaper');
const nsfwMobileWallpapers = require('../images/nsfwMobileWallpaper');

module.exports = {

    fetchRandom: function(images) {
        // Select Random Image from JSON //
        let img = images[Math.floor(Math.random() * images.length)];
        return img;
    },
    fetchWallpaper: function(images) {
        // Select Random Wallpaper from JSON //
        let img = images[Math.floor(Math.random() * images.length)];

        return img;
    },
    nsfwWallpapers: function() {
        return this.fetchWallpaper(nsfwWallpapers)
    },
    nsfwMobileWallpapers: function() {
        return this.fetchWallpaper(nsfwMobileWallpapers);
    },
    bdsm: function() {
        return this.fetchRandom(bdsmImages);
    },
    cum: function() {
        return this.fetchRandom(cumImages);
    },
    doujin: function() {
        return this.fetchRandom(doujinImages);
    },
    hentai: function() {
        return this.fetchRandom(hentaiImages);
    },
    maid: function() {
        return this.fetchRandom(maidImages);
    },
    panties: function() {
        return this.fetchRandom(pantyImages);
    },
    ass: function() {
        return this.fetchRandom(assImages);
    },
    orgy: function() {
        return this.fetchRandom(orgyImages);
    },
    femdom: function() {
        return this.fetchRandom(femdomImages);
    },
    netorare: function() {
        return this.fetchRandom(netorareImages);
    },
    gif: function() {
        return this.fetchRandom(hentaiGifs);
    }

}