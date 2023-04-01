---
sidebar_position: 2
title: Changing Music
description: Tu-du-du!
---

# Changing Music

First, open your mod in Unity. If you don't have a project, please visit [Introduction](../intro).

In the file explorer at the bottom, open `Assets` folder, then go to the `Music` folder.

Right click on the song and choose `Show in Explorer`. Here you can copy your new song.

:::tip
Instead of copying, you can directly replace the song by naming it the same way.
This is the way you can replace any other file in the game.
:::

Anyways, songs in CMMM have 2 parts: 
- "Fade In", which is played once
- "Looping", which is looped indefinitely after the fade in.

If you only have one long piece, you can just set both intro and main part to the same track to get the needed effect.

To do that, go to `MainMenu` (in `Scenes` folder), and select `Music` in hierarchy.

In the inspector you should be able to find `Music Manager` component which has 2 tracks as input (you might need to scroll down to see it). Drag your new tracks for the Fade In and the looping part there.

You can now try it by clicking Play button on the top of Unity window!

:::tip
If you ever get annoyed by music, you can enable "Mute Audio" on the top of Game window to not hear it.
:::