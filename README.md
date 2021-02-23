![Dungeons and Dragons logo](https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dungeons_%26_Dragons_5th_Edition_logo.svg/320px-Dungeons_%26_Dragons_5th_Edition_logo.svg.png)
# Battle Tracker ⚔️
[![version badge](https://img.shields.io/github/package-json/v/jazzsequence/DnD-Battle-Tracker)](https://github.com/jazzsequence/DnD-Battle-Tracker/releases/) [![license badge](https://img.shields.io/github/license/jazzsequence/DnD-Battle-Tracker)](https://github.com/jazzsequence/DnD-Battle-Tracker/blob/master/LICENSE) ![languages](https://img.shields.io/github/languages/top/jazzsequence/DnD-Battle-Tracker)   
![commits since](https://img.shields.io/github/commits-since/jazzsequence/DnD-Battle-Tracker/0.2) ![GitHub last commit](https://img.shields.io/github/last-commit/jazzsequence/DnD-Battle-Tracker)

A simple battle tracking system for Dungeons &amp; Dragons written in JavaScript to track initiative and damage.

![Animated Demo](https://media.giphy.com/media/TfWyPBecjNdlNj00uF/giphy.gif)

## Description

I originally built this as an experiment after finishing [Wes Bos](https://github.com/wesbos)' [ES6 for Everyone](https://es6.io/) course to test my newfound JavaScript knowledge, put some of the things he talked about into practice, and to scratch my own itch; at the time I had just started running a D&D campaign for my kids.

After completing his [CSS Grid](https://cssgrid.io/) course, I decided to revisit this again to add some much-needed styling and layout.

~Next up is integrating browser storage and possibly refactoring as a React app~.

## Development notes
Re-base is no longer supported, or at least, it hasn't been updated in an age. As such, installing on current Node causes issues. It's recommended if you intend to clone and fork this yourself that you use `nvm` to install and use an earlier version of Node.

### Recommended configuration

1. [Install nvm](https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating). Make sure it's configured properly (editing your `.bashrc` or `.zshrc` or whatever you use). [This Stack Overflow answer](https://stackoverflow.com/a/63671860) may be helpful in getting `nvm` working correctly.
2. Install and use Node 12.0.0:
```bash
$ nvm install 12.0.0
$ nvm use 12.0.0
```

The Node packages should install correctly. To switch back to the system installed version, simply use `nvm use system`.

## Roadmap
These are things I plan (or at least _hope_) to implement in the future.

* Accessibility
* Add persistent database
* Actual SWA
* Login to use
* ~Use browser storage to retain party data after refresh~
* Allow encounters to be reset without losing data
* Initiative randomizer (define initiative rather than entering rolled values)
* Attack options (each character/monster has their attacks & damage listed so dealing damage can be done by just clicking the button next to that attack type)
* Unit tests and linting
* More?

## Changelog

### 0.2.0
* added build tools
* added styling and layout
* some minor tweaks to initiative tracker and messages
* expanded readme

### 0.1.0
* Initial release