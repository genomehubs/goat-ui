## Tree representing the declared target list of {{project}}, highlighting species with available assemblies (green)

:::grid{container direction="row" spacing="1" size=12}

```report
report: tree
x: "tax_tree(Eukaryota) AND long_list={{project}}"
y: "assembly_span AND bioproject={{bioproject}}"
treeStyle: "rect"
taxonomy: "ncbi"
levels: "subspecies,species,genus,family,order,class,phylum"
includeEstimates: true
ratio: 3.5
disableModal: true
collapseMonotypic: true
yOpts: "10000000,7000000000,,linear"
treeThreshold: 2500
caption: "**Taxa in the declared target list of the {{project}} project.** Orange highlights represent clades with at least one genome available under the {{project}} Bioproject Id {{bioproject}}. Bars = assembly span. Tap tree nodes to browse taxa or long-press to search."
size: 12
```

:::
