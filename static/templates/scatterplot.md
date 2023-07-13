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
url: |
  /search?query={valueA}%20AND%20tax_tree%28{valueD}%29%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=false&summaryValues=count&taxonomy=ncbi&offset=0&fields={valueC}%2C{valueB}%2C{valueA}&names=&ranks=&report=scatter&xField={valueA}&y={valueB}&rank=species&cat={valueC}&highlightArea=y%3Dx&pointSize=15#{valueA}%20AND%20tax_tree({valueD})%20AND%20tax_rank(species)
```
