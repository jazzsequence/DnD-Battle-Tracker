![Dungeons and Dragons logo](https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dungeons_%26_Dragons_5th_Edition_logo.svg/320px-Dungeons_%26_Dragons_5th_Edition_logo.svg.png)
# Battle Tracker ⚔️
[![version badge](https://img.shields.io/github/package-json/v/jazzsequence/DnD-Battle-Tracker)](https://github.com/jazzsequence/DnD-Battle-Tracker/releases/) [![license badge](https://img.shields.io/github/license/jazzsequence/DnD-Battle-Tracker)](https://github.com/jazzsequence/DnD-Battle-Tracker/blob/master/LICENSE) ![languages](https://img.shields.io/github/languages/top/jazzsequence/DnD-Battle-Tracker)   
![commits since](https://img.shields.io/github/commits-since/jazzsequence/DnD-Battle-Tracker/0.3.2) ![GitHub last commit](https://img.shields.io/github/last-commit/jazzsequence/DnD-Battle-Tracker)

A simple battle tracking system for Dungeons &amp; Dragons written in JavaScript to track initiative and damage.

<video>
	<source src="https://www.dropbox.com/s/9iu9be91w3t5g2x/Screen%20Recording%202-23-2021%20at%201.52.12%20PM.mp4?raw=1"
	Sorry, your browser doesn't support embedded videos.
</video>

[Visit battletracker.jazzsequence.com to check it out!](https://battletracker.jazzsequence.com)

## Description

I originally built this as an experiment after finishing [Wes Bos](https://github.com/wesbos)' [ES6 for Everyone](https://es6.io/) course to test my newfound JavaScript knowledge, put some of the things he talked about into practice, and to scratch my own itch; at the time I had just started running a D&D campaign for my kids.

After completing his [CSS Grid](https://cssgrid.io/) course, I decided to revisit this again to add some much-needed styling and layout.

Finally, continuing my JavaScript education, I took his [React for Beginners](https://reactforbeginners.com) course and rebuilt the entire thing in [React](https://reactjs.org/). This time, I refactored some things that were obviously missing, like the ability to retain character info after a battle is done. Finally, I put the whole thing on GitHub pages behind a custom subdomain ([battletracker.jazzsequence.com](https://battletracker.jazzsequence.com)).

## Roadmap
These are things I plan (or at least _hope_) to implement in the future.

* Accessibility
* A button that resets the character HP when the encounter is reset (currently HP can be reset by refreshing the page)
* Initiative randomizer (define initiative rather than entering rolled values)
* Attack options (each character/monster has their attacks & damage listed so dealing damage can be done by just clicking the button next to that attack type)
* Unit tests and linting
* More?

## Changelog

### 0.3.1
* fixed Firefox display bugs

### 0.3.0
* refactored entire codebase in React
* added true build and deploy process so app can be deployed as a single-page app (SPA)
* updated the character add and initiative order elements so characters are automatically ordered in their initiative order when they are added
* even more simplified html in the main `index.html` file (everything is served from within React components)
* added a new landing page which generates a unique guid where all your encounter information is stored in local storage.
* added a generic 404 page
* added `gh-pages` to handle deploying to GitHub pages

### 0.2.0
* added build tools
* added styling and layout
* some minor tweaks to initiative tracker and messages
* expanded readme

### 0.1.0
* Initial release
