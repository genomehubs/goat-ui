### Tree representing {{project}} target list highlighting taxa currently in progress

```report
report: tree
x: "tax_tree(Eukaryota) AND tax_rank(family) AND long_list={{project}}"
y: "in_progress={{project}}"
treeStyle: rect
taxonomy: ncbi
levels: "subspecies,species,genus,family,order,class,phylum"
includeEstimates: true
ratio: 3.5
collapseMonotypic: true
disableModal: true
yOpts: "1000000,100000000000"
treeThreshold: 2500
caption: "**Tree of species in the {{project}} long list.** Orange highlights represent clades with at least one descendant species in progress in the {{project}} pipeline. Species in progress are highlighted in green. Tap tree nodes to browse taxa or long-press to search."
size: 12
```
