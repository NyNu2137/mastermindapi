<div align="center">
  <br />
  <p>
    <a href="https://discord.gg/qrbDHHJ"><img src="https://images-ext-2.discordapp.net/external/LpIPICvka13Whq1CVvLPgQhMYe1q84p3zkyUBbLSdGE/https/cdn.discordapp.com/avatars/685274433811906581/f598bd70217add49db8d63046dc044b1.webp?width=72&height=72" width="546" alt="MasterMind" /></a>
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

## Instalacja
``brak``

## Przykłady
**NodeJS:**
```javascript
// mastermind //
const mastermind = require('mastermind');

// SFW Neko //
console.log("SFW Neko: " + mastermind.neko());

// NSFW Neko //
console.log("Lewd Neko:" + mastermind.lewdNeko());

// Inne obrazki NSFW //
console.log("BDSM: " + mastermind.nsfw.bdsm());
console.log("Maid: " + mastermind.nsfw.maid());
console.log("Hentai: " + mastermind.nsfw.hentai());
```

## Starsze funkcje
Przykład:
```javascript
mastermind.function() // Format
mastermind.neko() // Przykład
mastermind.lewdBomb(5) // Przykład 2
```
Funkcje | Opis
---|---
neko | Wysyła losowy link do SFW Neko
lewdneko | Wysyła losowy link do NSFW Neko

## Funkcje NSFW
Przykład:
```javascript
mastermind.nsfw.function() // Format
mastermind.nsfw.hentai() // Przykład
```
Funkcja | Opis
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

## Funkcje tapet
Przykład:
```javascript
mastermind.nsfw.function() // Format NSFW
mastermind.nsfw.mobileWallpapers() // Przykład NSFW
```

Funkcja | Opis
---|---
mastermind.mobileWallpapers() | Mobilne tapety SFW
mastermind.wallpapers() | Tapety PC SFW
mastermind.nsfw.mobileWallpapers() | Mobilne tapety SFW
mastermind.nsfw.wallpapers() | Tapety PC NSFW


## Przykład bota discord
```javascript
const Discord = require('discord.js');
const mastermind = require('mastermind');

// Tworzenie nowego clienta //
const client = new Discord.Client();

// Ustawienia bota //
const settings = {
  prefix: `TWOJ_PREFIX`,
  token: 'TWOJ_TOKEN'
}

client.on('message', async message => {

  // Nowy embed //
  const mastermindSan = new Discord.RichEmbed();

  // Komenda //
  var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];

  //  //
  if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

  if (command == 'lewdneko') {

    // Do embedu //
    mastermindSan.setImage(mastermind.lewdNeko());
    return message.channel.send(mastermindSan);

    // Do zwyklej wiadomosci //
    return message.channel.send(mastermind.lewdNeko());

  } else if (command == 'maid') {

    // Do embedu //
    mastermindSan.setImage(mastermind.nsfw.maid());
    return message.channel.send(mastermindSan);

    // Do zwyklej wiadomosci //
    return message.channel.send(mastermind.nsfw.maid());
    
  }

});
  ```

## Pomoc
[Discord Server](https://discord.gg/DxHvWwC)"# mastermindapi" 
