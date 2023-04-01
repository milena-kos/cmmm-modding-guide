---
sidebar_position: 2
title: Making a script
description: coding is pain
---

# Making a script for your cell

First, open your mod in Unity. If you don't have a project, please visit [Introduction](../intro).

This one should be pretty short. Go to `Scripts/Classes/Derived Cell Types`, `Show` it `in Explorer`, and copy-paste whatever cell you want to build up from.
So if you are making a Fast Mover, duplicate Mover.cs script.
If you are unsure which script to duplicate, select whatever you think will be the closest in functionality.

Rename it to anything, preferably without spaces or punctuation, such as `FastMover.cs`. Double-click it to open in text editor.

First things first, change the name after `public class` at the top to the name of your file, i. e. `public class FastMover`.

Now you are on your own! You will need to code your cell up. As this is very early version of the guide, you will need to figure it out. In the future, here will be common methods to manipulate the grid and general knowledge about it (getting cells by coordinates, .Push(), .Delete() etc)

You might be eager to test your cell, but first you will need to complete the rest of the guide. You will be able to return to it and make any changes to the script without redoing anything else.