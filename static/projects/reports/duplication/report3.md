```report
report: arc
x: "length(sample_collected)>1 AND sequencing_status_{{lc_project}}>=sample_collected AND bioproject=null,!{{bioproject}} AND ebp_metric_date=null AND assembly_level=null,!chromosome,!complete genome"
y: "sequencing_status_{{lc_project}}>=sample_acquired"
rank: species
includeEstimates: true
result: taxon
taxonomy: ncbi
caption: "**In progress by {{project}} and others**(*)"
```
