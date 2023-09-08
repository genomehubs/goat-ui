
:::grid{container direction="row" spacing="1"}

```report
report: histogram
x: "long_list={{project}} AND sequencing_status_{{lc_project}}"
y: "sequencing_status_{{lc_project}}"
rank: species
cat: "sequencing_status_{{lc_project}}=sample_collected,sample_acquired,in_progress,data_generation,in_assembly,open,insdc_open,published"
includeEstimates: true
excludeAncestral: sequencing_status_{{lc_project}}
excludeMissing: sequencing_status_{{lc_project}}
xOpts: ",,1,,Sequencing Status"
caption: "Current status of {{project}} target species"
item: true
xs: 6
```

```report
report: histogram
x: "bioproject={{bioproject}}"
rank: species
cat: "assembly_level=contig,scaffold,chromosome,complete genome"
includeEstimates: true
excludeAncestral: bioproject
excludeMissing: bioproject
xOpts: "{{bioproject}},,1,,"
caption: "Assembly level of {{project}} genomes"
item: true
xs: 6
```
:::
