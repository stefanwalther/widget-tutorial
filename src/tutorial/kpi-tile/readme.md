---
title: "Simple KPI tile"
sub-title: "The goal is to create a simple KPI tile using the widget concept."
---

## Exercise 

Start by using the existing widget template “Exercise: Minimalistic KPI” in the widget library “widget-exercises”.
- Create a new header in the property panel called “Settings”
- Create the following custom properties using the Property Panel editor
    - Title (Input, name “Title”, reference `title`)
    - KPI (Input, name “KPI”, reference `kpi`)
    - Color, containing the values “red”, “green” & “orange” as keys, choose appropriate labels (reference `color`)
    - Comparison KPI (Input, reference `comparisionKPI`)
- First extend the existing Widget to make it fully dynamic
    - Title, KPI and the color should be bound to the properties defined by the user.
- Test the KPI extensively in an existing app

## Solution
