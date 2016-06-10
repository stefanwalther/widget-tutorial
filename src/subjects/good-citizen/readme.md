---
title: What makes a Widget a good citizen
---

A Widget should be:

- Generic
- Responsive
- Declarative Only

## Generic Widgets

- Don't hard-code values within widgets, use properties instead and bind to properties as much as you can.
- Test your widgets with different apps, widgets should work independently from the data model.

## Responsive Widgets

- Test your widget in the Widget editor for different object sizes.
- Use the resize gripper in the "Preview" pane for testing different object sizes.


## Declarative Only
One of the core concepts of widgets is that only Html and CSS/Less should be used.
If you have to use some JavaScript code to create your custom visualization, use the concept of visualization extensions.
