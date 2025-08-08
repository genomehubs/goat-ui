```report
report: arc
x: "sequencing_status_{{lc_project}}>=sample_collected AND length(sample_collected)>1 AND bioproject=null,!{{bioproject}} AND ebp_standard_date=null"
y: "sequencing_status_{{lc_project}}>=sample_collected"
rank: species
includeEstimates: true
result: taxon
taxonomy: ncbi
caption: "**Initiated by {{project}} and others**(*)"
```
