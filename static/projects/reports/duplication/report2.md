```report
report: arc
x: "long_list={{project}} AND sequencing_status_{{lc_project}}=null AND length(sample_collected)>=1 AND bioproject=!{{bioproject}},null AND ebp_standard_date=null"
y: "long_list={{project}}"
rank: species
includeEstimates: true
result: taxon
taxonomy: ncbi
caption: "**In progress by other EBP affiliate**(*)"
```
