## Contiguity assessment of {{project}} Assemblies

:::grid{container direction="row" spacing="1"}

```report
report: "scatter"
result: "assembly"
x: "contig_n50 AND bioproject={{bioproject}}"
xField: "contig_n50"
y: "scaffold_n50 AND bioproject={{bioproject}}"
cat: "assembly_type=haploid@primary-haploid"
includeEstimates: false
xOpts: "10000,1000000000,11,log10"
yOpts: "10000,1000000000,11,log10"
highlightArea: "1000000,10000000,1000000000,1000000000,EBP metric zone"
plotRatio: "auto"
pointSize: "5"
scatterThreshold: "10000"
caption: "Contiguity by assembly type"
item: true
xs: 6
```


```report
report: "scatter"
result: "assembly"
x: "contig_n50 AND bioproject={{bioproject}}"
xField: "contig_n50"
y: "scaffold_n50 AND bioproject={{bioproject}}"
cat: "assembly_level=contig,scaffold,chromosome"
includeEstimates: false
xOpts: "10000,1000000000,11,log10"
yOpts: "10000,1000000000,11,log10"
highlightArea: "1000000,10000000,1000000000,1000000000,EBP metric zone"
plotRatio: "auto"
pointSize: "5"
scatterThreshold: "10000"
caption: "Contiguity by assembly level"
item: true
xs: 6
```
:::
