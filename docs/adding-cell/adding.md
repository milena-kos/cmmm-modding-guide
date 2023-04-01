---
sidebar_position: 5
title: Putting it together
description: the grand finale
---

# Putting it all together

First, open your mod in Unity. If you don't have a project, please visit [Introduction](../intro).

Go to `Scenes` and double-click `LevelScreen`. You may be zoomed in, so you might have to scroll out.

Go to `Canvas/Inventory` and duplicate any cell button. Move it wherever and change the name, and texture in Image component. In Editor Button component, replace Tool with your cell's tool, and set a keybind if you want to.

Open `Placement Manager`, expand `Buttons` if it is collapsed, increase Size by 1 and drag your newly created button to it to the bottom of it, replacing duplicate RECT.

In `Scripts` object do the same, expand `Cell Prefabs` it it is collapsed, increase Size by 1 and drag your **prefab you created earlier** to it, BUT...

:::danger
Unlike Placement Manager, in Grid Manager you will need to exactly mimic the pattern found in `Scripts/Enums/CellType.cs`, otherwise it will place another cell instead of your cell.
:::

And we are... done! Wow this sure was a journey. Click Play button at the top of the window to test your creation!

:::info
If you hit Play in the LevelScreen it won't run the game properly, you will need to either open the pause menu and go to title screen and create a new level, or change scene to MainMenu beforehand and start from there.
:::