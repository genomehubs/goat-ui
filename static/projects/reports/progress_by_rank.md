### Progress of Eukaryotic Genome Sequencing by Taxon Rank

:::grid{container direction="row" spacing="1"}

```report
report: xInY
x: "assembly_span AND bioproject={{bioproject}}"
rank: "phylum,class,order,family,genus,species"
y: "long_list={{project}}"
includeEstimates: true
excludeAncestral: "assembly_span"
excludeMissing: "assembly_span"
caption: "**Genome Sequencing of {{project}} Targets:** Genome assemblies under Bioproject ID {{bioproject}}, at different taxonomic ranks"
item: true
xs: 6
```

```report
report: xPerRank
x: "long_list={{project}}"
includeEstimates: true
caption: "**Counts of taxa targeted by {{project}}**: All summary reports on GoaT are based on these counts"
item: true
xs: 6
```

:::
