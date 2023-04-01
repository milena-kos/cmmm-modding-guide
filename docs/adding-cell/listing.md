---
sidebar_position: 3
title: Adding to all lists
description: why is this so hard
---

# Adding the cell to all game lists

First, open your mod in Unity. If you don't have a project, please visit [Introduction](../intro).

There are multiple files you will need to add your cell to. Lets go over each one of them.

## Scripts/Enums/Tools.cs

You will need to add your cell in all caps without spaces or other characters **before** the DRAG tool, after the TRASH. Make sure to add comma after it and save the file.

## Scripts/Enums/Cell.cs

This file is the same as the last one, but you will need to add your cell in all caps without spaces or other characters at the very end, after TRASH.

Cells need to be at the same position in both enums. Easy way to verify this is to make sure it is on the same line in both files.

## Scripts/Grid/CellFunctions.cs

You might be shocked when you first open this. But there are two places you need to add your cell to: `cellUpdateTypeDictionary`, and `cellUpdateOrder` if your cells updates.

### Which Cell Update Type do I need?

Incase you are not familiar with cell types, there are 3 of them:
- BASE, for cells which don't update by themselves (push, slide, trash, enemy, wall)
- TICKED, for cells which update without caring about their direction (rotators)
- TRACKED, for cells which update with their direction mattering (mover, generator)

If you are not sure which one it is after reading this, you can go back to your cell script and see which class you inherited from (e.g. `public class FastMover: TrackedCell` means it is tracked).

##

SO! Add your cell to the `cellUpdateTypeDictionary` along with it's cell type.
For `cellUpdateOrder` only add your cell there if it isn't BASE (so TICKED or TRACKED).

Woah, we are done with this.