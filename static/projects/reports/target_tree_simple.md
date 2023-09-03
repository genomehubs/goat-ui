## Tree representing the declared target list of {{project}}, highlighting species with available assemblies (green)

:::grid{container direction="row" spacing="1" item xs=12}

```report
report: tree
x: "tax_tree(Eukaryota) AND long_list={{project}} AND tax_rank(family)"
y: "assembly_span"
treeStyle: "rect"
taxonomy: "ncbi"
levels: "subspecies,species,genus,family,order,class,phylum"
includeEstimates: true
ratio: 3.5
disableModal: true
collapseMonotypic: true
yOpts: "10000000,7000000000,,linear"
treeThreshold: 10000
caption: "**Taxa in the declared target list of the {{project}} project.** Orange highlights represent clades with at least one genome available on sequence repositories. Bars = assembly span. Tap tree nodes to browse taxa or long-press to search."
item: true
xs: 12
```

:::
