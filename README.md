<div align="center">
  <br />
  <p>
    <a href="https://discord.gg/qrbDHHJ"><img src="https://cdn.discordapp.com/avatars/685274433811906581/33a9d90f406119473acc43ac818f74bf.png?size=128" width="546" alt="MasterMind" /></a>
  </p>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/mastermind"><img src="https://img.shields.io/npm/v/mastermind.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/mastermind"><img src="https://img.shields.io/npm/dt/mastermind.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
</div>
[ENG]
MasterMind is an Anime/Hentai Image API which simplifies how you fetch random images from the local JSON! More features and functions will be added soon !
[Pl]
MasterMind to Anime/Hentai/NSFW api do zdjęć które w prosty sposób pozyskuje zdjęcia z lokalnych plików JSON. Więcej funkcji wkrótce !

[Discord Server](https://discord.gg/qrbDHHJ)

## Installation
``npm install mastermind``

## Example(s)
**NodeJS:**
```javascript
// mastermind //
const mastermind = require('mastermind');

// Get SFW Neko Images, uwu //
console.log("SFW Neko: " + mastermind.neko());

// Get Lewd Neko (NSFW), owo //
console.log("Lewd Neko:" + mastermind.lewdNeko());

// Lewd Bomb me onii-san~~ //
console.log("Lewd Bomb: " + mastermind.lewdBomb(5));

// Get other NSFW Images //
console.log("BDSM: " + mastermind.nsfw.bdsm());
console.log("Maid: " + mastermind.nsfw.maid());
console.log("Hentai: " + mastermind.nsfw.hentai());
```

## Legacy Function(s)
Example:
```javascript
mastermind.function() // Format
mastermind.neko() // Example
mastermind.lewdBomb(5) // Example 2
```
Function | Description
---|---
neko | Sends a random imageURL of a SFW Nekogirl~
lewdneko | Sends a random imageURL of a NSFW Nekogirl~
lewdBomb(amount) | Sends an array of random lewds of (amount) parameter~

## NSFW Function(s)
Example:
```javascript
mastermind.nsfw.function() // Format
mastermind.nsfw.hentai() // Example
```
Function | Description
---|---
ass | Sends a random imageURL for some anime ass~ uwu
bdsm | Sends a random imageURL from Discord for the tag: **bdsm**
cum | Sends a random imageURL from Discord for the tag: **cum**
femdom | Female Domination?
doujin | Sends a random doujin page imageURL!
hentai | Sends a random vanilla hentai imageURL~
maid | Sends a random imageURL from Discord for the tag: **maid**
orgy | Sends a random imageURL for an orgy (groupy or whatever)
panties | I mean... just why? You like underwear?
netorare | Wow, I won't even question your fetishes.
gifs | Basically an animated image, so yes :3

## Wallpaper Function(s)
Example:
```javascript
mastermind.nsfw.function() // NSFW Format
mastermind.nsfw.mobileWallpapers() // NSFW Example
```

Function | Description
---|---
mastermind.mobileWallpapers() | Fetch a random SFW Wallpaper! (Mobile)
mastermind.wallpapers() | Fetch a random SFW Wallpaper! (Desktop)
mastermind.nsfw.mobileWallpapers() | Fetch a random NSFW Wallpaper! (Mobile)
mastermind.nsfw.wallpapers() | Fetch a random NSFW Wallpaper! (Desktop)


## Discord Bot Example
```javascript
const Discord = require('discord.js');
const mastermind = require('mastermind');

// Create New Client //
const client = new Discord.Client();

// Bot Settings //
const settings = {
  prefix: "YOUR_BOT_PREFIX",
  token: 'YOUR_BOT_TOKEN'
}

client.on('message', async message => {

  // Create New Embed //
  const mastermindSan = new Discord.RichEmbed();

  // Defines Command //
  var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];

  // Onii-chan, don't reply! //
  if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

  if (command == 'lewdneko') {

    // For Embed //
    mastermindSan.setImage(mastermind.lewdNeko());
    return message.channel.send(mastermindSan);

    // For Plain Text //
    return message.channel.send(mastermind.lewdNeko());

  } else if (command == 'maid') {

    // For Embed //
    mastermindSan.setImage(mastermind.nsfw.maid());
    return message.channel.send(mastermindSan);

    // For Plain Text //
    return message.channel.send(mastermind.nsfw.maid());
    
  }

});
  ```

## Support
[Discord Server](https://discord.gg/DxHvWwC)"# mastermindapi" 
