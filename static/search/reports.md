# Search page reports

:::grid{container direction="row" spacing="1" class="padded"}

```report
report: "arc"
result: "taxon"
rank: species
x: "assembly_level"
y: "assembly_span AND {{query}}"
caption: "species with assemblies out of all species"
includeEstimates: true
size: 6
```

```report
report: "scatter"
result: "assembly"
x: "contig_n50 AND {{query}}"
y: "scaffold_n50 AND {{query}}"
cat: "assembly_level=contig,scaffold,chromosome"
includeEstimates: false
xOpts: "10000,1000000000,11,log10"
yOpts: "10000,1000000000,11,log10"
highlightArea: "1000000,10000000,1000000000,1000000000,EBP metric zone"
plotRatio: "auto"
pointSize: "5"
scatterThreshold: "10000"
caption: "Contiguity by assembly level"
size: 6
```

:::