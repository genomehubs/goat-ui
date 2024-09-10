:::grid{container direction="row" spacing="1"}

```report
report: histogram
x: "sequencing_status_{{lc_project}} AND long_list={{project}}"
xField: "sequencing_status_{{lc_project}}"
rank: species
cat: "sequencing_status_{{lc_project}}=sample_collected,sample_acquired,in_progress,data_generation,in_assembly,open,insdc_open,published"
includeEstimates: true
excludeAncestral: sequencing_status_{{lc_project}}
excludeMissing: sequencing_status_{{lc_project}}
xOpts: ";;;;Sequencing Status"
stacked: True
caption: "Current status of {{project}} target species"
size: 6
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
size: 6
```

:::
