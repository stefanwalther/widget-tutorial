
You can use the full functionality of CSS when styling your widgets. In addition to standard CSS, you can also style your widgets using LESS.

There are two ways of styling your widgets:

- Inline styling
- Separated styling

## Some Ground Rules & Recommendations
There are only a few rules you should consider when styling your widgets:

- Never use Ids, always use CSS classes to style your widgets
- Use separated styles over inline style-attributes as much as you can
- Try to parametrize your CSS styles

## Rule #1: Never use IDs

### Bad
***Html:***
```html
<div id="my-object">
    Your custom content ...
</div>
```

```css

#my-object {
    /* your custom styling */
}
```

Since the Id attribute of Html objects are supposed to be unique on a single page, this can lead to problems if your widget is used several times on a single sheet.
Use CSS classes instead:

### OK

```html
<div class="my-object">
    Your custom content ...
</div>
```

```css
.my-object {
    /* your custom styling */
}
```

## Recommendation #1: Use Separated Styles

You can style all your HTML elements using inline style-attributes, but it is recommended to separate your styling code from your HTML code. Separated styling is preferred because:
 
- It is easier to maintain
- It is easier to reuse
- It makes it easier for others to understand and read the HTML
 
### Inline Style-Attributes

Inline styling can be used but is not recommended because of the reduced maintainability and readability of your HTML.

**Example: Inline style-attributes**

```html
<div style="color:red;font-weight:bold;">
	This is my Widget
</div> 
```


### Separated styling

If you use the separated styling approach, you achieve the same result as in the inline styling example above by declaring the styling in the CSS editor.

***Example: Separated styling: HTML***

```html
<div class="myClass">
	This is my Widget
</div>
```

***Example: Separated styling: CSS***

```css
.myClass {
    color:red;
    font-weight:bold;
}
```


## Recommendation #2: Parametrized CSS Styles

You can use dynamic data binding inside the CSS/Less definition.

### Dynamic CSS properties

***CSS/Less:***
```css
/* settings.foreColor = #efefef */
.myClass {
    color: {{settings.foreColor}};
}
```

### Styling with Less variables

***CSS/Less:***
```css
/* layout.property1 = #efefef */
@color: {{settings.foreColor}};

.myClass {
    color: @color; /* Use the Less variable */
}
```