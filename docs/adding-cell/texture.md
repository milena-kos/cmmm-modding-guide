---
sidebar_position: 1
title: Adding a texture
description: i sure hope you dont suck at pixelart
---

# Adding a texture

First, open your mod in Unity. If you don't have a project, please visit [Introduction](../intro).

There are 3 folders which have cell textures. This might be pretty confusing, but stay with me.
- `Resources` is used to restore textures incase Default texture pack is corrupt or doesn't exist.
- `texturepacks/Default` is used as mirror for texture packs to work while in Unity Editor, useless outside of it.
- `Assets/Cells` is used as the last resort incase game is unable to read texture packs folder or texture packs aren't supported on the device (i.e. Android).

So you will need to add your texture to all of them, pretty fun huh?

## So lets get started!

For each of above mentioned folders, go inside of them right click > `Show in Explorer`, and drag your texture in.

Now for a bit more hard of a part. You will need to make sure your texture has all the same settings in the Inspector as other existing textures.
This means you will need to set:
- Pixels Per Unit = 16
- Generate Physics Shape = Off
- Read/Write Enabled = On
- Filter Mode = Point (no filter)
- Compression = None

Make sure to hit Apply and go to the next folder.

After you are done, it is time to move to the next article!