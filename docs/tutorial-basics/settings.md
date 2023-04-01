---
sidebar_position: 5
title: Adding a setting
description: Simp Mode - On
---

# Adding your own setting to the Options menu

First, open your mod in Unity. If you don't have a project, please visit [Introduction](../intro).

In the file explorer at the bottom, open `Scenes` folder. Here, double-click `OptionsMenu`.

The main bottleneck here is that you only see first few settings because of the scrolling.
If you want to bypass that, open `Canvas > Scroll View > Viewport`, and disable the `Rect Mask 2D` component with a checkbox.

:::caution
Make sure to re-enable that later!
:::

Adding your own setting is as simple as cloning an existing one and modifying it.

Select the setting you would like to copy in hierarchy (`Canvas > Scroll View > Viewport > Content`), and click `Ctrl+D`.

In the Inspector, you can change the name of a setting object.

Scroll to the bottom of it to see `Setting` script. You will need to change the `Player Pref String` to some unique value for later use.

From here on out it gets specific to the type of option you chose, so I'm gonna explain them one by one.

### Slider

Along with the normal options, sliders also have "Slider Type" box. There are two possible options for it:
- `Volume` (percentage from 0 to 100) and
- `Speed` (whole number followed by `x`)

In the Slider component you are able to modify the parameters of the slider itself, such as Min Value, Max Value, Whole Numbers etc.

You can move the `Value` slider (inside of a Slider component inside of the Slider game object. pretty confusing huh?) to whatever the default value you want it to be.

### Dropdown

You can change the options presented by changing the Options table thing inside of the Dropdown component of your setting. You can use `+` and `-` at the bottom to add or remove options. Then you can change the default value to whatever you would like in the Dropdown Setting component.

:::caution
Counting starts from 0, so the first option will be 0, second will be 1 and so on.
:::

### Checkbox

The simplest one. Just change the Default Value to either on or off.

## Accessing your option in code

Pretty simple.

### Reading

```cs
int format = PlayerPrefs.GetInt("ExportFormat", 2);
```

where `ExportFormat` is the unique identifying value you set earlier, and `2` is the default in case person never opened Options menu and defaults there didn't apply.

### Writing

```cs
PlayerPrefs.SetInt("ExportFormat", 2);
```

where `ExportFormat` is the unique identifying value you set earlier, and `2` is the value you want to set your option to.