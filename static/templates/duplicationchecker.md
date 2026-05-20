```template
id: duplicationChecker
title: Duplication checker
description: |
  Check for overlap and possible duplication of effort between projects
img: /assets/images/carousel/ai_ebp_umbrella_street.png
valueA_example: DTOL
valueA_label: project acronym
valueA_description: |
  Sequencing project acronym
valueB_example: PRJEB40665
valueB_label: bioproject accession
valueB_description: |
  BioProject accession for publicly released assemblies
url:
  path: /projects/reports/duplication
  project: "{valueA}"
  bioproject: "{valueB}"
  result: taxon
  taxonomy: ncbi
```
