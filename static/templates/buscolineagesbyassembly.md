```template
id: buscoLineagesByAssembly
title: BUSCO lineages by assembly accession
description: |
  List all relevant BUSCO lineages for an assembly accession
valueA_example: GCA_001883655.1
valueA_label: Assembly accession
valueA_description: Assembly GCA accession
url:
  path: /search
  query: tax_lineage(queryA.taxon_id)
  queryA: assembly--assembly_id={valueA}
  result: taxon
  fields: odb10_lineage
  includeEstimates: true
  taxonomy: ncbi
```
