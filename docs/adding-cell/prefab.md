---
sidebar_position: 4
title: Creating a prefab
description: almost there i promise
---

# Creating a cell prefab

First, open your mod in Unity. If you don't have a project, please visit [Introduction](../intro).

Go to `Assets/Cell Prefabs`, `Show` it `in Explorer`, and copy-paste any prefab. Rename it to whatever you want.

Go back to Unity and double-click your prefab to open it.

In the Sprite Renderer, change sprite to the texture of your cell (from `Assets/Assets/Cells`).

Remove whatever cell script there already was (such as `Mover`), click "Add Component" and search for your script.

In your newly created component, change Cell Type to yours, and you should be done with the prefab!