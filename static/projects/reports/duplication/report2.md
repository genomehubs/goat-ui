```report
report: arc
x: "long_list={{project}} AND length(long_list)>1 AND sequencing_status>=sample_collected AND sequencing_status_{{lc_project}}=null AND bioproject=!{{bioproject}},null AND ebp_metric_date=null AND assembly_level=null,!chromosome,!complete genome"
y: "long_list={{project}}"
rank: species
includeEstimates: true
result: taxon
taxonomy: ncbi
caption: "**In progress by other EBP affiliate**"
```
