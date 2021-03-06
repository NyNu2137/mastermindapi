// Import Images //
const sfwImages = require('../images/sfw.json');
const nsfwImages = require('../images/nsfw.json');
const akansfw = require('../lib/nsfw.js');

// Import Wallpapers //
const wallpapers = require('../images/wallpaper.json');
const nsfwWallpapers = require('../images/nsfwWallpaper.json');
const mobileWallpapers = require('../images/mobileWallpaper.json');
const nsfwMobileWallpapers = require('../images/nsfwMobileWallpaper.json');

// Create Module //
module.exports = {

    // SFW //
    neko: function () { // Returns Safe for Work Neko Images! //

        // Select Random Image from JSON //
        let img = sfwImages[Math.floor(Math.random() * sfwImages.length)];

        // Fetches Original Image Quality without Resize //
        if (img.includes('?')) {
            img = img.split('?');
            img = img[0];
        }
        return img;

    },
    lewdNeko: function () { // Returns you lewd ... and dirty ... Neko Images ! //

        // Select Random Image from JSON //
        let img = nsfwImages[Math.floor(Math.random() * nsfwImages.length)];

        // Fetches Original Image Quality without Resize //
        if (img.includes('?')) {
            img = img.split('?');
            img = img[0];
        }
        return img;

    },
    lewdneko: function () { // Returns you lewd ... and dirty ... Neko Images ! //

        // Select Random Image from JSON //
        let img = nsfwImages[Math.floor(Math.random() * nsfwImages.length)];

        // Fetches Original Image Quality without Resize //
        if (img.includes('?')) {
            img = img.split('?');
            img = img[0];
        }
        return img;

    },
    LewdNeko: function () { // Returns you lewd ... and dirty ... Neko Images ! //



        // Select Random Image from JSON //
        let img = nsfwImages[Math.floor(Math.random() * nsfwImages.length)];

        // Fetches Original Image Quality without Resize //
        if (img.includes('?')) {
            img = img.split('?');
            img = img[0];
        }
        return img;

    },
    lewdBomb: function (n) { // Returns you (n) amount of Lewd ... and Dirty images ! //

        if (!n) {
            throw new RangeError("[lewdBomb] You didn't specify a number for Amount Parameter!");
        }

        if (!Number.isInteger(n)) {
            throw new RangeError("[lewdBomb] Amount Parameter is not an Integer!");
        }

        var result = new Array(n),
            length = nsfwImages.length,
            taken = new Array(length);
        if (n > length)
            throw new RangeError("[lewdBomb] You specified a number that's greater than the amount available!");
        while (n--) {
            var x = Math.floor(Math.random() * length);
            result[n] = nsfwImages[x in taken ? taken[x] : x];
            taken[x] = --length in taken ? taken[length] : length;
        }
        return result;

    },
    lewdbomb: function (n) { // Returns you (n) amount of Lewd ... and Dirty images ! //

        if (!n) {
            throw new RangeError("[lewdBomb] You didn't specify a number for Amount Parameter!");
        }

        if (!n.isInteger()) {
            throw new RangeError("[lewdBomb] Amount Parameter is not an Integer!");
        }

        var result = new Array(n),
            length = nsfwImages.length,
            taken = new Array(length);
        if (n > length)
            throw new RangeError("[lewdBomb] You specified a number that's greater than the amount available!");
        while (n--) {
            var x = Math.floor(Math.random() * length);
            result[n] = nsfwImages[x in taken ? taken[x] : x];
            taken[x] = --length in taken ? taken[length] : length;
        }
        return result;

    },
    LewdBomb: function (n) { // Returns you (n) amount of Lewd ... and Dirty images ! //

        if (!n) {
            throw new RangeError("[lewdBomb] You didn't specify a number for Amount Parameter!");
        }

        if (!n.isInteger()) {
            throw new RangeError("[lewdBomb] Amount Parameter is not an Integer!");
        }

        var result = new Array(n),
            length = nsfwImages.length,
            taken = new Array(length);
        if (n > length)
            throw new RangeError("[lewdBomb] You specified a number that's greater than the amount available!");
        while (n--) {
            var x = Math.floor(Math.random() * length);
            result[n] = nsfwImages[x in taken ? taken[x] : x];
            taken[x] = --length in taken ? taken[length] : length;
        }
        return result;

    },
    nekoBomb: function (n) {

        if (!n) {
            throw new RangeError("[nekoBomb] You didn't specify a number for Amount Parameter!");
        }

        if (!n.isInteger()) {
            throw new RangeError("[nekoBomb] Amount Parameter is not an Integer!");
        }

        var result = new Array(n),
            length = sfwImages.length,
            taken = new Array(length);
        if (n > length)
            throw new RangeError("[safeBomb] You specified a number that's greater than the amount available!");
        while (n--) {
            var x = Math.floor(Math.random() * length);
            result[n] = sfwImages[x in taken ? taken[x] : x];
            taken[x] = --length in taken ? taken[length] : length;
        }
        return result;

    },
    wallpaper: function () { // Returns you SFW Anime Wallpapers for Desktops ! //

        // Select Random Image from JSON //
        let img = wallpaper[Math.floor(Math.random() * wallpapers.length)];

        return img;

    },
    mobileWallpaper: function () { // Returns SFW Anime Wallpapers for Mobile Users ! //

        // Select Random Image from JSON //
        let img = mobileWallpaper[Math.floor(Math.random() * wallpapers.length)];

        return img;

    },
    mobileWallpapers: function () { // Returns SFW Anime Wallpapers for Mobile Users ! //

        // Select Random Image from JSON //
        let img = mobileWallpaper[Math.floor(Math.random() * wallpapers.length)];

        return img;

    },
    wallpapers: function () { // Returns you SFW Anime Wallpapers for Desktops ! //

        // Select Random Image from JSON //
        let img = wallpaper[Math.floor(Math.random() * wallpapers.length)];

        return img;

    },
    nsfw: {

        ass: function () {
            return akansfw.ass();
        },
        bdsm: function () {
            return akansfw.bdsm();
        },
        blowjob: function () {
            return akansfw.blowjob();
        },
        cum: function () {
            return akansfw.cum();
        },
        doujin: function () {
            return akansfw.doujin();
        },
        femdom: function () {
            return akansfw.femdom();
        },
        hentai: function () {
            return akansfw.hentai();
        },
        maid: function () {
            return akansfw.maid();
        },
        maids: function () {
            return akansfw.maid(); // Alias of Maid
        },
        orgy: function () {
            return akansfw.orgy();
        },
        panties: function () {
            return akansfw.panties();
        },
        pantsu: function (){
            return akansfw.panties(); // Alias of Panties
        },
        wallpapers: function () {
            return akansfw.nsfwWallpapers();
        },
        wallpaper: function() {
            return akansfw.nsfwWallpapers(); // Alias of Wallpapers
        },
        mobileWallpapers: function () {
            return akansfw.nsfwMobileWallpapers();
        },
        mobileWallpaper: function () {
            return akansfw.nsfwMobileWallpapers(); // Alias of mobileWallpapers
        },
        cuckold: function () {
            return akansfw.netorare();
        },
        netorare: function () {
            return akansfw.netorare(); // Alias of Cuckold
        },
        gifs: function () {
            return akansfw.gif();
        },
        gif: function () {
            return akansfw.gif(); // Alias of Gifs
        }

    }

}