---
title: Widget organization
draft: trude
---

Widgets can be organized in Widget libraries.

## What makes a Widget unique?
When you create a widget in the Widget editor (Dev Hub), a unique Id (Global Unique Identifier) will be created, this makes the widget unique.
This unique Id will be kept, regardless you move or export the widget. The unique Id will also be used to check for duplicates if you import a Widget library.

**Attention:**  
Although widget libraries can be imported either in the QMC or in Dev Hub, the check for the uniqueness of a widget will (as of Qlik Sense 3.0) only be performed in Dev Hub.
It his therefore highly recommended that - if you are not 100% sure that a widget does not exist - you only use the Dev Hub import for widget libraries.
