---
title: "Simple KPI tile"
sub-title: "The goal is to create a simple KPI tile using the widget concept."
---

## Exercise 

Start by using the existing widget template “Exercise-KPI-Minimalistic” in the widget library “widget-exercises”.
- Create a new header in the property panel called “Settings”
- Create the following custom properties using the Property Panel editor
    - Title (Input, name “Title”, reference `title`)
    - KPI (Input, name “KPI”, reference `kpi`)
    - Color, containing the values “red”, “green” & “orange” as keys, choose appropriate labels (reference `color`)
    - Comparison KPI (Input, reference `comparisionKPI`)
- First extend the existing Widget to make it fully dynamic
    - Title, KPI and the color should be bound to the properties defined by the user.
- Test the KPI extensively in an existing app

## Bonus exercises:
- Create another header in the property called “Visibility” where you can define, whether to show the KPI or an alternate text, which is also defined in the property panel
- Create a drill down KPI:
    - On the front side the KPI is shown.
    - If the user clicks on an icon some details will be shown, defined by adding dimensions and measures to the Widget.
- Make the KPI fully responsive, both horizontally and vertically.
