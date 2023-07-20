# [Antimatter Dimensions: Force Mod](https://miabread.github.io/AntimatterDimensions/)

Ever wanted to start the game with continuum enabled? Well now you can! This mod turns any hard coded unlock condition into a save file flag that can be much more easily modified.

Some things you can do:
- Enable continuum whenever
- Show all tabs or subtabs    
- Unlock celestials
- Unlock lot of other misc things

"Force flags" have been injected into various unlock conditions throughout the game. When set to true, said unlock will always be true regardless of it's original condition. These can be modified in the console by messing around with the newly added `player.force` object.

**A lot of the force-flags will just bug the game!**

Obviously none of this was intended by the developers, so keep that in mind. I'm not going to document how every single flag interacts either. Discovery is part of your fun :)

## Future 

More force flags will be added as I dig into the code. Feel free to leave an issue or pull request if there's anything you'd like added!

I am currently attempting to add a GUI for these as well.

## Quick Reference

The following is a quick reference for all the current force-flags:

```js
  force: {
    antimatter: {
      challengeCompleted: false,
      tickspeedUnlocked: false,
    },
    infinity: {
      isUnlocked: false,
      hasBroken: false,
      infinityChallengeCompleted: false,
    },
    eternity: {
      isUnlocked: false,
      seenAlteredSpeed: false,
    },
    reality: {
      isUnlocked: false,
      alchemyUnlocked: false,
      blackHoleUnlocked: false,
    },
    celestials: {
      teresa: {
        isUnlocked: false,
      },
      effarig: {},
      enslaved: {
        isUnlocked: false,
        canAmplify: false,
        canModifyGameTimeStorage: false,
        canModifyRealTimeStorage: false,
        isStoredRealTimeCapped: false,
        isStoringGameTime: false,
        isStoringRealTime: false,
        isAutoReleasing: false,
      },
      V: {
        canUnlock: false,
        isFullyCompleted: false,
      },
      ra: {
        isUnlocked: false,
        remembranceUnlocked: false,
        alteredGlyphsUnlocked: false,
      },
      laitela: {
        isUnlocked: false,
        continuumUnlocked: false,
        annihilationUnlocked: false,
      },
      pelle: {
        isUnlocked: false,
      }
    },
    meta: {
      hasFullCompletion: false,
      allTabsUnlocked: false,
      allSubtabsUnlocked: false,
    }
  },
```
