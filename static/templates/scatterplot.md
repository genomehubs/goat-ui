```template
id: scatterPlot
title: Scatter plot
description: |
  Plot relationships between attribute values for a taxon
valueA_example: genome_size
valueA_label: X axis variable
valueA_description: |
  value to plot as an x-axis variable
valueB_example: assembly_span
valueB_label: Y axis variable
valueB_description: |
  value to plot as a y-axis variable
valueC_example: assembly_level
valueC_label: Category variable
valueC_description: |
  value to plot as a category variable
valueD_example: Chiroptera
valueD_label: Taxon
valueD_description: |
  Taxon to restrict results to
url:
  path: /search
  query: "{valueA} AND tax_tree({valueD}) AND tax_rank(species)"
  result: taxon
  includeEstimates: false
  taxonomy: ncbi
  fields: "{valueC},{valueB},{valueA}"
  report: scatter
  y: "{valueB}"
  rank: species
  cat: "{valueC}"
  highlightArea: y=x
  pointSize: 15
```
