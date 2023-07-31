<!--
Content to display at /search
-->

# Search

::include{pageId=help/searchTips.md xs=12 .inline}

These options modify the search query and affect the number of results returned. Visit the [help page](/help) for tutorials and more information.

:::grid{container direction="row" spacing="1" class="padded"}
:::

:::grid{container direction="row" toggle title="Color key" spacing="1"}

::include{pageId=help/colorkey.md xs=12 .paragraph}

:::

## Attribute values

Attribute values can be included in a search to refine the query.

- [`tax_tree(chiroptera) AND assembly_level`](/search?query=tax_tree%28chiroptera%29%20AND%20assembly_level&result=taxon&taxonomy=ncbi) - all bats with an available assembly

- [`tax_tree(chiroptera) AND assembly_span >= 2000000000`](/search?query=tax_tree%28chiroptera%29%20AND%20assembly_span%20%3E%3D%202000000000&result=taxon&taxonomy=ncbi) - all bats with an assembly span of at least 2Gb.

The active search index affects which attributes are available, toggle the boxes below to view details of the available attributes for each index.

:::grid{container direction="row" toggle title="Taxon attributes" spacing="1"}

::report{report="types" result="taxon" item xs=12 .paragraph}

:::

:::grid{container direction="row" toggle title="Assembly attributes" spacing="1"}

::report{report="types" result="assembly" item xs=12 .paragraph}

:::

:::grid{container direction="row" toggle title="Sample attributes" spacing="1"}

::report{report="types" result="sample" item xs=12 .paragraph}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Advanced search

GoaT supports many advanced search options, please see the help pages for more information or visit the [project pages](/projects) to see some examples of reports generated from GoaT search queries.

We have created search templates to make it easier to run some advanced searches, visit the [templates page](/templates) to find out more or use the example templates below to get started.

:::grid{container direction="row" spacing="1" }

::include{pageId=templates/scatterPlot.md xs=6}

::divider

::include{pageId=templates/buscoLineagesByAssembly.md xs=6}

:::
