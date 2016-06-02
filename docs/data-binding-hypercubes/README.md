---
title: Data binding: Hypercubes
---

Dimensions and measures defined in your widget object result in an internal data table, a so-called hypercube, that is being exposed to the object, just like for any other standard Qlik Sense object. This data table can be used in your widget.

There are some basic objects exposed to the current scope of your widget that you can use.

Object                                          | Description
------------------------------------------------| ------------------------------
`layout.qHyperCube`                             | Returns the representation of the hypercube, that is, the data table exposed to your widget.
`layout.qHyperCube.qDimensionInfo`              | Gets the object array of defined dimensions.
`layout.qHyperCube.qMeasureInfo`                | Gets the object array of defined measures.
`layout.qHyperCube.qDataPages[0].qMatrix`       | Gets the object array of the data table.
`layout.qHyperCube.qDataPages[0].qMatrix[0]`    | Gets the object array of the first row of the data table.
`layout.qHyperCube.qDataPages[0].qMatrix[0][0]` | Gets the object array of the first column in the first row of the data table.

### Example: Iterating through dimensions and measures

```html
<table border="1">
  <thead>
    <tr>
      <th ng-repeat="dim in layout.qHyperCube.qDimensionInfo">{{dim.qFallbackTitle}}</td>
      <th ng-repeat="mea in layout.qHyperCube.qMeasureInfo" ng-bind="mea.qFallbackTitle"></td>
    </tr>
  </thead>
  <tbody>
    <tr ng-repeat="row in layout.qHyperCube.qDataPages[0].qMatrix">
      <td ng-repeat="col in row">
        {{col.qText}}
      </td>
    </tr>
  </tbody>
</table>
```


## Shorthand Notation
Since the above described notation is very powerful, but hard to memorize, there is also a second API available to work with the HyperCube. From within widgets you can also access the [Table API](http://help.qlik.com/en-US/sense-developer/2.2/Subsystems/APIs/Content/TableAPI/qlik-table-interface.htm).

Object                                	| Description
--------------------------------------	| -------------------------------------------------
`data.rows`									| Get the object array of all rows (including measures and dimensions).
`data.headers`								| Get the object array of all headers (including measures and dimensions).
`data.totals`									| Get the total information for headers.
`data.rowCount`								| Returns the total number of rows of the `qHyperCube`, including rows not fetched from the server.
`data.colCount`								| Returns the total number of columns for the `qHyperCube`	      

For more information how to use the Table API, please visit the [Table API reference](http://help.qlik.com/en-US/sense-developer/2.2/Subsystems/APIs/Content/TableAPI/QHeader.htm).

### Example: Iterating through dimensions and measures using the shorthand notation

```html
<table border="1">
	<thead>
		<tr>
			<th ng-repeat="head in data.headers track by $index">{{head.qFallbackTitle}}</th>
		</tr>
	</thead>
	<tbody>
		<tr ng-repeat="row in data.rows track by $index">
			<td ng-repeat="cell in row.cells track by $index" class="selectable"> {{cell.qText}} </td>
		</tr>
	</tbody>
</table>
```
