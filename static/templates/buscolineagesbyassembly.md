```template
id: buscoLineagesByAssembly
title: BUSCO lineages by assembly accession
description: |
  List all relevant BUSCO lineages for an assembly accession
valueA_example: GCA_001883655.1
valueA_label: Assembly accession
valueA_description: Assembly GCA accession
url: |
  /search?query=tax_lineage%28queryA.taxon_id%29&queryA=assembly--assembly_id%3D{valueA}&result=taxon&fields=odb10_lineage&includeEstimates=true&taxonomy=ncbi#tax_lineage%28queryA.taxon_id%29
```
