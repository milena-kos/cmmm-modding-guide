---
sidebar_position: 4
title: Adding saving formats
description: H7;100;100;First H7 level!;;
---

# Adding your own export formats

:::info
Saving (export) formats are the way game saves levels to a string for easy sharing. Default saving formats are V1, V2, V3. Popular custom formats are MP1, MP0, VX, J1, P6 and others.
:::

First, open your mod in Unity. If you don't have a project, please visit [Introduction](../intro).

In the file explorer at the bottom, open `Scripts` folder. Here, open `Level Data`.

Here there are 2 files you would want to look out for:
- `LoadString.cs` for loading level codes, and
- `Save.cs` for saving them.

Both of them are switch statements.

`LoadString.cs` is based on the part before first semicolon: `V1`, `V3`, or `V3`.

`Save.cs` is based on an integer from player preference of their saving code: `0` (V1), `1` (V2), or `2` (V3).

That about all you need to know. You can look at how existing export formats are implemented in order to be more familiar with this. Unfortunately you will need to know quite a lot of coding to add your own, but I believe in you.

## Falling back to V3 if no modded cells

This is a feature I recommened every mod with custom saving format have. It will make folks in #vaults channel of Cell Machine Discord a lot less angry.

A good way to do this would be to replace

```cs
int format = PlayerPrefs.GetInt("ExportFormat", 2) + 1;
```

and

```cs
switch (PlayerPrefs.GetInt("ExportFormat", 2))
```

to

```cs
int format = 3; // 3 is the representation of V3
foreach (Cell cell in CellFunctions.cellList)
{
    if ((int)cell.cellType > 8) { // if any modded cell is found, ...
        ExportFormat = PlayerPrefs.GetInt("ExportFormat"); // use your custom saving format, ...
        break; // and stop checking!
    }
}
```

and

```cs
switch (format - 1)
```

You are probably wondering on how to add the saving code preference to the Settings menu. Next article? How did you guess.
