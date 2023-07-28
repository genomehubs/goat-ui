
:::grid{container direction="row" spacing="1"}
::grid[![GoaT](/static/images/biodiversity_genomics.png)]{item xs=3}
::grid[![GoaT](/static/images/ERGA_logo_rect.jpg)]{item xs=2}

:::grid{container direction="row" spacing="1" class="padded"}
:::

# ERGA - Biodiversity Genomics Europe Project (ERGA-BGE)
**GoaT Search Term:** ERGA-BGE


::grid[**ERGA-BGE** will deliver genomes fostered by the Biodiversity Genomics Europe (BGE). The overriding aim of BGE is to accelerate the use of genomic science to enhance understanding of biodiversity, monitor biodiversity change, and guide interventions to address its decline. BGE brings together two  European-wide networks: [BIOSCAN Europe](https://www.bioscaneurope.org/), which focuses on DNA barcoding, and the European Reference Genome Atlas [ERGA](https://www.erga-biodiversity.eu/), which focuses on genome sequencing. For more information access BGE official page at https://biodiversitygenomics.eu/the-project.]{item xs=8}

**Bioproject ID** PRJEB61747

**Main Contact**: info(at)biodiversitygenomics.eu

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data
## ERGA-BGE Long List

:::grid{container direction="row" spacing="1"}
::grid[![GoaT](/static/images/capra3.png)]{item xs=23} 
::grid[ERGA-BGE target list compilation is currently **in progress.** All data in GoaT currently corresponds to the declared targets of the Biodiversity Hotspots.]{item xs=6}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Tree representing the declared target list of ERGA-BGE, highlighting species with available assemblies (green)



:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=ERGA-BGE" y="assembly_span AND bioproject=PRJEB61747" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=2 disableModal collapseMonotypic yOpts="10000000,12000000000,,linear" caption="**Taxa in the declared target list of the ERGA-BGE project.** Orange highlights represent clades with at least one genome available under the ERGA-BGE Bioproject Id PRJEB61747. Bars = assembly span. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## ERGA-BGE Progress Reports
### Progress of Eukaryotic Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=PRJEB61747" rank="phylum,class,order,family,genus,species" y="long_list=erga-bge" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of ERGA-BGE Targets:** Genome assemblies under Bioproject ID PRJEB61747, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=ERGA-BGE" includeEstimates=true caption="**Counts of taxa targeted by ERGA-BGE**: All summary reports on GoaT are based on these counts" item xs=6}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status of ERGA-BGE Species

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="sample_collected=ERGA-BGE" y="long_list=ERGA-BGE" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of ERGA-BGE target species collected" item xs=6}

::report{report="xInY" x="in_progress=ERGA-BGE" y="long_list=ERGA-BGE" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of ERGA-BGE target species with genome sequencing currently in progress" item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Duplication Checker

### [Target Overlaps](https://goat.genomehubs.org/search?query=long_list%3Derga-bge%20AND%20length%28long_list%29%3E1%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=100&offset=0&fields=assembly_level%2Csequencing_status_erga-bge%2Csequencing_status%2Clong_list%2Cother_priority%2Cfamily_representative&names=&ranks=&report=tree&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15#long_list=erga-bge%20AND%20length(long_list)%3E1%20AND%20tax_rank(species))*: Overlaps between ERGA-BGE and EBP projects

:::grid{container direction="row" spacing="1" class="padded"}
::include{pageId=project_reports/erga-bge_report0.md item xs=4}
::include{pageId=project_reports/erga-bge_list0.md xs=8}
:::

### [Already Sequenced](https://goat.genomehubs.org/search?query=long_list%3Derga-bge%20AND%20bioproject%3D%21PRJEB61747%20AND%20tax_rank%28species%29%20AND%20ebp_metric_date&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=10&offset=0&fields=assembly_level%2Cassembly_span%2Cbioproject%2Csequencing_status%2Csequencing_status_erga-bge%2Clong_list&names=&ranks=&report=tree&cat=sequencing_status_erga-bge&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15#long_list%3Derga-bge%20AND%20bioproject%3D!PRJEB61747%20AND%20tax_rank(species)%20AND%20ebp_metric_date)*: assemblies available meet erga-bge standards

:::grid{container direction="row" spacing="1" class="padded"}
::include{pageId=project_reports/erga-bge_report1.md item xs=4}
::include{pageId=project_reports/erga-bge_list1.md xs=8}
:::

### [In progress by other EBP affiliate](https://goat.genomehubs.org/search?query=long_list%3Derga-bge%20AND%20length%28long_list%29%3E1%20AND%20sequencing_status%3E%3Dsample_collected%20AND%20sequencing_status_erga-bge%3Dnull%20AND%20bioproject%3D%21PRJEB61747%2Cnull%20AND%20ebp_metric_date%3Dnull%20AND%20assembly_level%3Dnull%2C%21chromosome%2C%21complete%20genome%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=25&offset=0&fields=assembly_level%2Cbioproject%2Csample_collected%2Csample_acquired%2Cin_progress%2Copen%2Cinsdc_open%2Csequencing_status%2Csequencing_status_erga-bge%2Clong_list&names=&ranks=&report=arc&cat=sequencing_status_erga-bge&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15&y=long_list%3Derga-bge&rank=species#long_list%3Derga-bge%20AND%20length(long_list)%3E1%20AND%20sequencing_status%3E%3Dsample_collected%20AND%20sequencing_status_erga-bge%3Dnull%20AND%20bioproject%3D!PRJEB61747%2Cnull%20AND%20ebp_metric_date%3Dnull%20AND%20assembly_level%3Dnull%2C!chromosome%2C!complete%20genome%20AND%20tax_rank(species)): not started by ERGA-BGE

:::grid{container direction="row" spacing="1" class="padded"}
::include{pageId=project_reports/erga-bge_report2.md item xs=4}
::include{pageId=project_reports/erga-bge_list2.md xs=8}
:::

### [In progress by erga-bge and others](https://goat.genomehubs.org/search?query=length%28sample_collected%29%3E1%20AND%20sequencing_status_erga-bge%3E%3Dsample_collected%20AND%20bioproject%3Dnull%2C%21PRJEB61747%20AND%20ebp_metric_date%3Dnull%20AND%20assembly_level%3Dnull%2C%21chromosome%2C%21complete%20genome%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=25&offset=0&fields=assembly_level%2Csample_collected%2Csample_acquired%2Cin_progress%2Copen%2Cinsdc_open%2Csequencing_status%2Csequencing_status_erga-bge&names=&ranks=&report=arc&cat=sequencing_status_erga-bge&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15&y=sequencing_status_erga-bge%3E%3Dsample_acquired&rank=species#length(sample_collected)%3E1%20AND%20sequencing_status_erga-bge%3E%3Dsample_collected%20AND%20bioproject%3Dnull%2C!PRJEB61747%20AND%20ebp_metric_date%3Dnull%20AND%20assembly_level%3Dnull%2C!chromosome%2C!complete%20genome%20AND%20tax_rank(species)): need overlap solving

:::grid{container direction="row" spacing="1" class="padded"}
::include{pageId=project_reports/erga-bge_report3.md item xs=4}
::include{pageId=project_reports/erga-bge_list3.md xs=8}


:::

### Tree representing ERGA-BGE target list highlighting species currently in progress

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=ERGA-BGE" y="in_progress=ERGA-BGE" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=2 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="**Tree of species in the ERGA-BGE long list.** Orange highlights represent clades with at least one descendant species in progress in the ERGA-BGE pipeline. Species in progress are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::


[back to projects](/projects)
