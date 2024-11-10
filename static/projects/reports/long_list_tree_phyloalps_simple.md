## Tree representing the declared target list of {{project}}, highlighting families with available assemblies (orange)

:::grid{container direction="row" spacing="1" size=12}

```report
report: tree
x: "tax_tree(Eukaryota) AND tax_rank(family) AND long_list={{project}}"
y: "assembly_span"
treeStyle: "ring"
taxonomy: "ncbi"
levels: "subspecies,species,genus,family,order,class,phylum"
includeEstimates: true
ratio: 2
disableModal: true
collapseMonotypic: true
yOpts: "1000000,70000000000,,log10"
treeThreshold: 8500
cat: "assembly_level"
caption: "**Taxa in the declared target list of the {{project}} project.** Colour highlights represent categories of assembly level available on INSDC for clades with at least one genome available. Red - no genomes available. Bars = assembly span. Tap tree nodes to browse taxa or long-press to search."
size: 12
```

:::
