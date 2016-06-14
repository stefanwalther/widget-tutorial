---
title: FAQ
sub-title: "Frequently asked questions"
---

{{> toc}}


## How to use external chart libraries in widgets?
It's definitely not the idea of widget to use this concept to programmatically create your visualization objects. Widget is a concept focused on declarative languages like Html and CSS. Create a visualization extension if you want to leverage the full power of JavaScript an existing libraries instead.

## How can qWidget and widgets be compared?
qWidget was a prototype developed in the early beginning of Qlik Sense and you will recognise that Widgets for Qlik Sense were developed based on the ideas of qWidget.
Having said that, the biggest different between these solutions (as of Qlik Sense 3.0) are:

- qWidget is just an experimental prototype (and therefore not supported at all!!!)
- Widgets are fully integrated into Qlik Sense and therefore this concept is also fully supported and it is planned to extend the concept in the future.
- Right now (as of Qlik Sense 3.0 and Widget 1.0) there is especially a gap when it comes to use several components, like
    - A date-picker
    - A (range-)slider
    - Some convenience tools like a debugging-helper
    - Inline charts (minicharts)
    - etc.
    
So Widgets for Qlik Sense are the future, qWidget is (unofficial) legacy.

## What's the plan for qWidget
Right now, as there is still a gap between qWidget and Widgets for Qlik Sense, the plan is to make qWidget work with Qlik Sense and as soon as we can offer similar functionality in Widgets for Qlik Sense qWidget will be removed.


## qWidget offers more features ...
Yes, as of Qlik Sense 3.0 there are is some gap between qWidget and widgets in Qlik Sense. As long as as the widget concept will not be in par of the qWidget concept, you can still use qWidgets.

## Can I continue to use qWidgets
Yes, certainly you can, but (see above) qWidget is not officially supported and there is no additional development work planned for qWidget. It is planned to make qWidget work with Qlik Sense 3.0, though.
